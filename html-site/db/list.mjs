// Blog envanteri — tek ekranda tüm yazılar, hangi diller hazır, ne kadar uzun.
// Kullanım: npm run db:list
import { config } from '../site.config.mjs'
import { connect } from './connect.mjs'

const db = await connect()

const [rows] = await db.query(
  `SELECT p.slug,
          p.published_on,
          p.status,
          t.lang,
          CHAR_LENGTH(t.body) AS body_len
     FROM posts p
     LEFT JOIN post_translations t ON t.post_id = p.id
    ORDER BY p.published_on DESC, p.slug`,
)

const bySlug = new Map()
for (const row of rows) {
  if (!bySlug.has(row.slug)) {
    bySlug.set(row.slug, { date: row.published_on, status: row.status, langs: {} })
  }
  if (row.lang) bySlug.get(row.slug).langs[row.lang] = row.body_len
}

const fmt = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d ?? ''))
const width = Math.max(20, ...[...bySlug.keys()].map((s) => s.length))

console.log('')
console.log(`  ${'SLUG'.padEnd(width)}  ${'TARİH'.padEnd(10)}  ${config.languages.join('   ')}   ~KELİME`)
console.log(`  ${'─'.repeat(width)}  ${'─'.repeat(10)}  ${'─'.repeat(config.languages.length * 4)}  ${'─'.repeat(7)}`)

for (const [slug, info] of bySlug) {
  const marks = config.languages.map((l) => (info.langs[l] ? ' ✓ ' : ' · ')).join(' ')
  const lens = Object.values(info.langs)
  const avgWords = lens.length ? Math.round(lens.reduce((a, b) => a + b, 0) / lens.length / 6) : 0
  const flag = info.status === 'draft' ? ' [taslak]' : ''
  console.log(`  ${slug.padEnd(width)}  ${fmt(info.date).padEnd(10)}  ${marks}  ${String(avgWords).padStart(6)}${flag}`)
}

console.log('')
console.log(`  Toplam ${bySlug.size} yazı · ${rows.filter((r) => r.lang).length} çeviri`)
console.log('')
await db.end()
