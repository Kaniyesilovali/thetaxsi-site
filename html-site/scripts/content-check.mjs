// content/blog/ altındaki yazıları doğrular — veritabanı şeması yerine geçen kontroller.
// `npm run build` öncesi otomatik çalışır; hata varsa build durur.
// Tek başına: npm run content:check
import { readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { config } from '../site.config.mjs'
import { allRoutes } from '../data/routes.mjs'
import { posts, contentDir } from '../data/posts.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const today = new Date().toISOString().slice(0, 10)

const errors = []
const warnings = []
const err = (where, msg) => errors.push(`${where}: ${msg}`)
const warn = (where, msg) => warnings.push(`${where}: ${msg}`)

/* ---------- Üretilen sayfaların tam listesi (iç link kontrolü için) ---------- */
const staticPaths = ['/', '/book/', '/routes/', '/blog/', '/about/', '/contact/', '/faq/', '/privacy/', '/terms/']
const validPaths = new Set()
for (const lang of config.languages) {
  for (const p of staticPaths) validPaths.add(`/${lang}${p}`)
  for (const r of allRoutes) validPaths.add(`/${lang}/routes/${r.slug}/`)
  for (const p of posts) validPaths.add(`/${lang}/blog/${p.slug}/`)
}

const imageFiles = new Set(
  existsSync(join(root, 'public/img')) ? readdirSync(join(root, 'public/img')) : [],
)

/* ---------- Yazı bazlı kontroller ---------- */
const seenTitles = new Map()

for (const post of posts) {
  const at = `content/blog/${post.slug}`

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug)) {
    err(at, 'klasör adı (slug) yalnızca küçük harf, rakam ve tire içermeli')
  }

  // Yazının Türkçe/Rusça adresi meta.json'daki `slugs` alanından gelir; klasör adı
  // (İngilizce slug) yalnızca varsayılan dilde kullanılır — bkz. data/slugs.mjs.
  for (const lang of config.languages) {
    if (lang === config.defaultLang) continue
    const localized = post.slugs?.[lang]
    if (!localized) err(`${at}/meta.json`, `slugs.${lang} eksik — ${lang} adresini yaz (ör. "slugs": { "${lang}": "..." })`)
    else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(localized)) {
      err(`${at}/meta.json`, `slugs.${lang} ("${localized}") yalnızca küçük harf, rakam ve tire içermeli`)
    }
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date ?? '')) {
    err(at, `meta.json date "${post.date}" — YYYY-AA-GG olmalı`)
  } else if (Number.isNaN(Date.parse(post.date))) {
    err(at, `meta.json date "${post.date}" geçerli bir tarih değil`)
  } else if (post.date > today) {
    warn(at, `meta.json date gelecekte (${post.date})`)
  }

  if (post.updated && post.updated < post.date) {
    err(at, `meta.json updated (${post.updated}) date'ten (${post.date}) eski olamaz`)
  }

  for (const lang of config.languages) {
    const file = `${at}/${lang}.md`
    const title = post.title[lang]
    const description = post.description[lang]
    const body = post.body[lang]

    if (!title?.trim()) err(file, 'title boş')
    else if (title.length > 60) warn(file, `title ${title.length} karakter (SERP sınırı ~60)`)

    if (!description?.trim()) err(file, 'description boş')
    else if (description.length > 160) warn(file, `description ${description.length} karakter (sınır ~160)`)
    else if (description.length < 70) warn(file, `description ${description.length} karakter — çok kısa`)

    if (title) {
      const key = `${lang}:${title.trim().toLowerCase()}`
      if (seenTitles.has(key)) err(file, `title "${title}" ${seenTitles.get(key)} ile aynı`)
      else seenTitles.set(key, post.slug)
    }

    if (!body?.trim()) {
      err(file, 'gövde boş')
      continue
    }
    if (body.length < 800) warn(file, `gövde çok kısa (${body.length} karakter)`)

    // İç linkler gerçekten üretilen bir sayfaya mı gidiyor?
    for (const [, href] of body.matchAll(/href="([^"]+)"/g)) {
      if (/^(https?:|mailto:|tel:|#)/.test(href)) continue
      const path = href.split(/[?#]/)[0]
      if (!path.startsWith('/')) {
        err(file, `göreli link — kök yoldan yaz: ${href}`)
        continue
      }
      if (!validPaths.has(path)) {
        err(file, `kırık iç link (böyle bir sayfa üretilmiyor): ${path}`)
        continue
      }
      if (!path.startsWith(`/${lang}/`)) {
        err(file, `${lang}.md içinde başka dile link: ${path}`)
      }
    }

    // Görseller public/img altında mı?
    for (const [, src] of body.matchAll(/src="([^"]+)"/g)) {
      if (/^(https?:|data:)/.test(src)) continue
      const m = src.match(/^\/assets\/img\/(.+)$/)
      if (!m) err(file, `görsel yolu /assets/img/... olmalı: ${src}`)
      else if (!imageFiles.has(m[1])) err(file, `görsel public/img altında yok: ${m[1]}`)
    }

    // İçerikte h1 olmamalı — h1'i şablon basıyor.
    if (/<h1[\s>]/.test(body)) err(file, 'gövdede <h1> var; başlık şablondan gelir, ## (h2) kullan')
    if (!/<h2[\s>]/.test(body)) warn(file, 'hiç ## (h2) başlığı yok — uzun metin taranabilir olmalı')
  }

  // Diller arası gövde uzunluğu sapması — genelde yarım kalmış çeviri işareti.
  const lens = config.languages.map((l) => post.body[l]?.length ?? 0).filter(Boolean)
  if (lens.length > 1 && Math.min(...lens) < Math.max(...lens) * 0.55) {
    const detay = config.languages.map((l) => `${l}:${post.body[l]?.length ?? 0}`).join(' ')
    warn(at, `diller arası gövde uzunluğu çok farklı, yarım çeviri olabilir (${detay})`)
  }
}

/* ---------- Aynı dilde çakışan adresler ---------- */
for (const lang of config.languages) {
  if (lang === config.defaultLang) continue
  const seen = new Map()
  for (const post of posts) {
    const localized = post.slugs?.[lang]
    if (!localized) continue
    if (seen.has(localized)) {
      err(`content/blog/${post.slug}/meta.json`, `slugs.${lang} "${localized}" ${seen.get(localized)} ile aynı — iki yazı aynı adrese düşer`)
    } else seen.set(localized, post.slug)
  }
}

/* ---------- Boşta kalan klasörler ---------- */
if (existsSync(contentDir)) {
  const slugs = new Set(posts.map((p) => p.slug))
  for (const entry of readdirSync(contentDir, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith('.') && !slugs.has(entry.name)) {
      err(`content/blog/${entry.name}`, 'yüklenemedi (meta.json veya dil dosyası eksik)')
    }
  }
}

/* ---------- Rapor ---------- */
for (const w of warnings) console.log(`  ⚠ ${w}`)
for (const e of errors) console.log(`  ✗ ${e}`)

if (errors.length) {
  console.error(`\n✗ İçerik kontrolü başarısız — ${errors.length} hata, ${warnings.length} uyarı.`)
  process.exit(1)
}
console.log(
  `✓ İçerik kontrolü geçti — ${posts.length} yazı × ${config.languages.length} dil` +
    (warnings.length ? `, ${warnings.length} uyarı` : ''),
)
