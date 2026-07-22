// Denetim — 100+ yazıda gözden kaçacak şeyleri bulur.
// Kullanım: npm run db:check   (hata varsa çıkış kodu 1)
import { config } from '../site.config.mjs'
import { allRoutes } from '../data/routes.mjs'
import { connect } from './connect.mjs'

const db = await connect()

const problems = []
const warnings = []

const [posts] = await db.query('SELECT id, slug, published_on, status FROM posts')
const [translations] = await db.query(
  'SELECT post_id, lang, title, description, body FROM post_translations',
)

const byPost = new Map(posts.map((p) => [p.id, { ...p, langs: new Map() }]))
for (const t of translations) byPost.get(t.post_id)?.langs.set(t.lang, t)

/* ---------- Geçerli iç bağlantı adresleri ---------- */
const staticPaths = ['/', '/book/', '/routes/', '/blog/', '/about/', '/contact/', '/faq/', '/privacy/', '/terms/']
const validPaths = new Set()
for (const lang of config.languages) {
  for (const p of staticPaths) validPaths.add(`/${lang}${p}`)
  for (const r of allRoutes) validPaths.add(`/${lang}/routes/${r.slug}/`)
  for (const p of posts) validPaths.add(`/${lang}/blog/${p.slug}/`)
}

/* ---------- Kontroller ---------- */
for (const post of byPost.values()) {
  const where = post.slug

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug)) {
    problems.push(`${where}: slug biçimi bozuk (küçük harf ve tire olmalı)`)
  }

  for (const lang of config.languages) {
    const t = post.langs.get(lang)

    if (!t) {
      problems.push(`${where}: ${lang.toUpperCase()} çevirisi yok`)
      continue
    }

    if (!t.title?.trim()) problems.push(`${where} [${lang}]: başlık boş`)
    if (!t.body?.trim()) problems.push(`${where} [${lang}]: gövde boş`)

    const dLen = t.description?.trim().length ?? 0
    if (dLen === 0) problems.push(`${where} [${lang}]: meta description boş`)
    else if (dLen > 160) warnings.push(`${where} [${lang}]: meta description ${dLen} karakter (Google ~160'ta keser)`)
    else if (dLen < 70) warnings.push(`${where} [${lang}]: meta description kısa (${dLen} karakter)`)

    // Gövdedeki iç bağlantılar gerçek bir sayfaya gidiyor mu?
    for (const m of (t.body ?? '').matchAll(/href="(\/[^"#?]*)"/g)) {
      const href = m[1].endsWith('/') || m[1].includes('.') ? m[1] : `${m[1]}/`
      if (!validPaths.has(href)) problems.push(`${where} [${lang}]: kırık iç bağlantı → ${m[1]}`)
    }

    // Yazının dili kendi dilindeki sayfalara mı bağlanıyor?
    for (const m of (t.body ?? '').matchAll(/href="\/([a-z]{2})\//g)) {
      if (config.languages.includes(m[1]) && m[1] !== lang) {
        warnings.push(`${where} [${lang}]: /${m[1]}/ diline bağlantı veriyor (kendi dili olmalı)`)
      }
    }

    if (!/<h2[ >]/.test(t.body ?? '')) {
      warnings.push(`${where} [${lang}]: hiç <h2> başlığı yok`)
    }
  }

  // Diller arası uzunluk sapması — genelde eksik/yarım çeviri işareti.
  const lens = [...post.langs.values()].map((t) => t.body?.length ?? 0).filter(Boolean)
  if (lens.length > 1) {
    const [min, max] = [Math.min(...lens), Math.max(...lens)]
    if (min < max * 0.55) warnings.push(`${where}: diller arası gövde uzunluğu çok farklı (yarım çeviri olabilir)`)
  }
}

/* ---------- Reklam kontrolü ---------- */
const [orphanAds] = await db.query(
  `SELECT a.ad_key
     FROM ads a
     LEFT JOIN ad_translations t ON t.ad_id = a.id
    WHERE a.active = 1
    GROUP BY a.id, a.ad_key
   HAVING COUNT(t.id) < ${config.languages.length}`,
)
for (const a of orphanAds) warnings.push(`reklam '${a.ad_key}': tüm dillerde metni yok`)

const [expiredAds] = await db.query(
  `SELECT ad_key, ends_on FROM ads WHERE active = 1 AND ends_on IS NOT NULL AND ends_on < CURDATE()`,
)
for (const a of expiredAds) {
  warnings.push(`reklam '${a.ad_key}': süresi ${a.ends_on.toISOString().slice(0, 10)} tarihinde doldu ama hâlâ aktif`)
}

/* ---------- Rapor ---------- */
console.log('')
if (problems.length) {
  console.log(`  ✗ ${problems.length} hata`)
  for (const p of problems) console.log(`    · ${p}`)
  console.log('')
}
if (warnings.length) {
  console.log(`  ⚠ ${warnings.length} uyarı`)
  for (const w of warnings) console.log(`    · ${w}`)
  console.log('')
}
if (!problems.length && !warnings.length) {
  console.log(`  ✓ ${posts.length} yazı denetlendi, sorun yok`)
  console.log('')
}

await db.end()
process.exit(problems.length ? 1 : 0)
