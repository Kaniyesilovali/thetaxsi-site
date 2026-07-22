// Blog yazıları — içerik artık burada DEĞİL, content/blog/ altında durur.
//
//   content/blog/<slug>/meta.json   → { "date": "2026-07-22", "order": 1 }  (opsiyonel: "updated")
//   content/blog/<slug>/en.md       → --- title / description --- + gövde
//   content/blog/<slug>/tr.md
//   content/blog/<slug>/ru.md
//
// Yeni yazı eklemek için: content/blog/ altında slug adında bir klasör aç,
// meta.json + üç dil dosyasını koy, `npm run build` çalıştır.
// Gövde Markdown kabul eder (## başlık, **kalın**, - liste) ve ham HTML de yazılabilir.
// Eksik dil, boş başlık, kırık iç link gibi hataları `npm run content:check` yakalar.
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'

import { config } from '../site.config.mjs'

export const contentDir = join(dirname(fileURLToPath(import.meta.url)), '../content/blog')

/** `--- key: value --- gövde` biçimini { data, body } olarak ayırır. */
export function parseFrontmatter(raw, file) {
  const text = raw.replace(/^﻿/, '')
  if (!text.startsWith('---')) throw new Error(`${file}: dosya --- frontmatter ile başlamalı`)
  const end = text.indexOf('\n---', 3)
  if (end === -1) throw new Error(`${file}: frontmatter kapanmamış (ikinci --- satırı yok)`)

  const data = {}
  for (const line of text.slice(4, end).split('\n')) {
    if (!line.trim()) continue
    const sep = line.indexOf(':')
    if (sep === -1) throw new Error(`${file}: frontmatter satırı "key: value" değil → ${line}`)
    const key = line.slice(0, sep).trim()
    const value = line.slice(sep + 1).trim()
    data[key] = value.startsWith('"') ? JSON.parse(value) : value
  }

  const body = text.slice(text.indexOf('\n', end + 1) + 1)
  return { data, body }
}

function loadPosts() {
  if (!existsSync(contentDir)) return []

  const slugs = readdirSync(contentDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name)

  const posts = slugs.map((slug) => {
    const dir = join(contentDir, slug)
    const metaFile = join(dir, 'meta.json')
    if (!existsSync(metaFile)) throw new Error(`content/blog/${slug}: meta.json yok`)
    const meta = JSON.parse(readFileSync(metaFile, 'utf8'))

    const title = {}
    const description = {}
    const body = {}
    for (const lang of config.languages) {
      const file = join(dir, `${lang}.md`)
      if (!existsSync(file)) throw new Error(`content/blog/${slug}: ${lang}.md yok`)
      const raw = readFileSync(file, 'utf8')
      const parsed = parseFrontmatter(raw, `content/blog/${slug}/${lang}.md`)
      title[lang] = parsed.data.title ?? ''
      description[lang] = parsed.data.description ?? ''
      body[lang] = `\n${marked.parse(parsed.body.trim(), { async: false }).trimEnd()}`
    }

    return { ...meta, slug, title, description, body }
  })

  // Yeniden eskiye; aynı tarihli yazılar arasında meta.json'daki `order` küçükten büyüğe.
  return posts.sort(
    (a, b) =>
      b.date.localeCompare(a.date) || (a.order ?? 0) - (b.order ?? 0) || a.slug.localeCompare(b.slug),
  )
}

export const posts = loadPosts()
