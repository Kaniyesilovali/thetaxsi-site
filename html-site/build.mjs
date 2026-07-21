// Taxsi statik site üretici.
// Kullanım: npm run build  (önce bu script, ardından Tailwind CLI çalışır)
import { mkdirSync, rmSync, readFileSync, writeFileSync, cpSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { config } from './site.config.mjs'
import { routes } from './data/routes.mjs'
import { posts } from './data/posts.mjs'
import { extra } from './data/extra.mjs'
import { renderHome } from './templates/home.mjs'
import { renderRoutesIndex, renderRouteDetail } from './templates/routes.mjs'
import { renderBlogIndex, renderBlogPost } from './templates/blog.mjs'
import { renderBook } from './templates/book.mjs'
import { renderAbout, renderContact, renderFaq, renderLegal, render404 } from './templates/misc.mjs'

const root = dirname(fileURLToPath(import.meta.url))
const dist = join(root, 'dist')

rmSync(dist, { recursive: true, force: true })
mkdirSync(join(dist, 'assets'), { recursive: true })

const dictionaries = Object.fromEntries(
  config.languages.map((lang) => [
    lang,
    JSON.parse(readFileSync(join(root, 'data/dictionaries', `${lang}.json`), 'utf8')),
  ]),
)

function emit(path, html) {
  const file = path.endsWith('.html') ? join(dist, path) : join(dist, path, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
}

const buildDate = new Date().toISOString().slice(0, 10)
const sitemapEntries = []

for (const lang of config.languages) {
  const ctx = { lang, dict: dictionaries[lang], xtra: extra[lang], path: '/' }

  // [path, render, lastmod] — lastmod verilmezse build tarihi kullanılır.
  const pages = [
    ['/', renderHome],
    ['/book/', renderBook],
    ['/routes/', renderRoutesIndex],
    ['/blog/', renderBlogIndex],
    ['/about/', renderAbout],
    ['/contact/', renderContact],
    ['/faq/', renderFaq],
    ['/privacy/', (c) => renderLegal(c, 'privacy')],
    ['/terms/', (c) => renderLegal(c, 'terms')],
  ]
  for (const r of routes) {
    pages.push([`/routes/${r.slug}/`, (c) => renderRouteDetail(c, r)])
  }
  for (const p of posts) {
    pages.push([`/blog/${p.slug}/`, (c) => renderBlogPost(c, p), p.date])
  }

  for (const [path, render, lastmod] of pages) {
    emit(`${lang}${path}`, render({ ...ctx, path }))
    if (lang === config.defaultLang) sitemapEntries.push({ path, lastmod: lastmod || buildDate })
  }

  emit(`${lang}/404.html`, render404({ ...ctx, path: '/' }))
}

/* ---------- Kök yönlendirme (dil algılama) ---------- */
const rootRedirect = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${config.brand}</title>
  <meta name="robots" content="noindex">
  <script>
    var langs = ${JSON.stringify(config.languages)};
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    location.replace('/' + (langs.indexOf(nav) >= 0 ? nav : '${config.defaultLang}') + '/');
  </script>
  <meta http-equiv="refresh" content="0;url=/${config.defaultLang}/">
</head>
<body><a href="/${config.defaultLang}/">${config.brand}</a></body>
</html>`
writeFileSync(join(dist, 'index.html'), rootRedirect)
writeFileSync(join(dist, '404.html'), rootRedirect.replace('<meta name="robots" content="noindex">', '<meta name="robots" content="noindex">'))

/* ---------- sitemap.xml + robots.txt ---------- */
const urls = sitemapEntries
  .map(({ path, lastmod }) => {
    const alternates = [
      ...config.languages.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${config.siteUrl}/${l}${path}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${config.siteUrl}/${config.defaultLang}${path}"/>`,
    ].join('\n')
    return config.languages
      .map(
        (l) =>
          `  <url>\n    <loc>${config.siteUrl}/${l}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`,
      )
      .join('\n')
  })
  .join('\n')

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
)

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`)

/* ---------- Statik varlıklar ---------- */
const mainJs = readFileSync(join(root, 'public/js/main.js'), 'utf8')
  .replaceAll('__WHATSAPP__', config.whatsapp)
  .replaceAll('__SHEETS_ENDPOINT__', config.sheetsEndpoint)
  .replaceAll('__EMAIL__', config.email)
writeFileSync(join(dist, 'assets/main.js'), mainJs)

// Kendi sunucumuzda barındırdığımız görseller (public/img) → dist/assets/img.
cpSync(join(root, 'public/img'), join(dist, 'assets/img'), { recursive: true })

// Kendi sunucumuzda barındırdığımız Inter woff2 alt kümeleri → dist/assets/fonts.
cpSync(join(root, 'public/fonts'), join(dist, 'assets/fonts'), { recursive: true })

// Sunucu ayarları (dizin listeleme, 404, yönlendirme, cache) → dist kökü.
cpSync(join(root, 'public/.htaccess'), join(dist, '.htaccess'))

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0B2436"/><text x="16" y="23" font-family="'Helvetica Neue',Arial,sans-serif" font-weight="700" font-size="20" fill="#1FB6C9" text-anchor="middle">T</text></svg>`
writeFileSync(join(dist, 'assets/favicon.svg'), favicon)

const pageCount = config.languages.length * (9 + routes.length + posts.length + 1) + 2
console.log(`✓ ${pageCount} sayfa üretildi → dist/`)
console.log(`  Diller: ${config.languages.join(', ')} · Rotalar: ${routes.length} · Blog yazıları: ${posts.length}`)
if (!config.sheetsEndpoint) {
  console.log("  ⚠ sheetsEndpoint boş — form kayıtları Google Sheets'e düşmeyecek (WhatsApp akışı çalışır).")
}
