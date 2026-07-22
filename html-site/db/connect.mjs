// MySQL bağlantısı. Kimlik bilgileri .env dosyasından okunur (git'e girmez).
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import mysql from 'mysql2/promise'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const envFile = join(root, '.env')

if (existsSync(envFile)) process.loadEnvFile(envFile)

const required = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']

export async function connect() {
  const missing = required.filter((k) => !process.env[k])
  if (missing.length) {
    console.error(`\n✗ Eksik ayar: ${missing.join(', ')}`)
    console.error(`  .env.example dosyasını .env olarak kopyalayıp doldur.\n`)
    process.exit(1)
  }

  try {
    return await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: 'utf8mb4',
      multipleStatements: true,
    })
  } catch (err) {
    console.error(`\n✗ Bağlanılamadı: ${err.code || err.message}`)
    if (err.code === 'ETIMEDOUT' || err.code === 'ECONNREFUSED') {
      console.error(`  Hosting MySQL'i dışarıya kapalı olabilir. cPanel → "Remote MySQL"`)
      console.error(`  bölümünden kendi IP adresini erişim listesine ekle.`)
      console.error(`  IP'ni öğrenmek için: curl -s ifconfig.me\n`)
    } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error(`  Kullanıcı adı/şifre yanlış ya da kullanıcı bu veritabanına yetkili değil.`)
      console.error(`  cPanel → MySQL Databases → "Add User To Database" ile ALL PRIVILEGES ver.\n`)
    }
    process.exit(1)
  }
}
