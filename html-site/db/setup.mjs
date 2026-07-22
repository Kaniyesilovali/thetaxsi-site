// Şemayı kurar (tekrar çalıştırmak güvenli — CREATE TABLE IF NOT EXISTS).
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { connect } from './connect.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const db = await connect()

await db.query(readFileSync(join(here, 'schema.sql'), 'utf8'))

const [tables] = await db.query('SHOW TABLES')
const names = tables.map((row) => Object.values(row)[0])

console.log(`✓ Şema hazır — ${names.length} tablo: ${names.join(', ')}`)
await db.end()
