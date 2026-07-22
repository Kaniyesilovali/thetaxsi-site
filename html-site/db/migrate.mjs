// data/posts.mjs → MySQL aktarımı.
// Tekrar çalıştırılabilir: aynı slug varsa günceller, yoksa ekler (upsert).
// posts.mjs'e dokunmaz — site şu an hâlâ ondan üretiliyor.
import { posts } from '../data/posts.mjs'
import { config } from '../site.config.mjs'
import { connect } from './connect.mjs'

const db = await connect()
let added = 0
let updated = 0

for (const post of posts) {
  const [existing] = await db.execute('SELECT id FROM posts WHERE slug = ?', [post.slug])

  let postId
  if (existing.length) {
    postId = existing[0].id
    await db.execute('UPDATE posts SET published_on = ?, updated_on = ? WHERE id = ?', [
      post.date,
      post.updated ?? null,
      postId,
    ])
    updated++
  } else {
    const [res] = await db.execute(
      'INSERT INTO posts (slug, published_on, updated_on) VALUES (?, ?, ?)',
      [post.slug, post.date, post.updated ?? null],
    )
    postId = res.insertId
    added++
  }

  for (const lang of config.languages) {
    if (!post.title?.[lang]) continue
    await db.execute(
      `INSERT INTO post_translations (post_id, lang, title, description, body)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE title = VALUES(title),
                               description = VALUES(description),
                               body = VALUES(body)`,
      [postId, lang, post.title[lang], post.description?.[lang] ?? '', post.body?.[lang] ?? ''],
    )
  }
}

const [[{ n: postCount }]] = await db.query('SELECT COUNT(*) AS n FROM posts')
const [[{ n: trCount }]] = await db.query('SELECT COUNT(*) AS n FROM post_translations')

console.log(`✓ Aktarım tamam — ${added} yeni, ${updated} güncellenen`)
console.log(`  Veritabanında: ${postCount} yazı · ${trCount} çeviri`)
await db.end()
