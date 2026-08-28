// Taxsi statik site üretici.
// Kullanım: npm run build  (önce bu script, ardından Tailwind CLI çalışır)
import { mkdirSync, rmSync, readFileSync, writeFileSync, cpSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { config } from './site.config.mjs'
import { allRoutes } from './data/routes.mjs'
import { posts } from './data/posts.mjs'
import { areas } from './data/areas.mjs'
import { extra } from './data/extra.mjs'
import { href, renamedPaths } from './data/slugs.mjs'
import { renderHome } from './templates/home.mjs'
import { renderRoutesIndex, renderRouteDetail } from './templates/routes.mjs'
import { renderBlogIndex, renderBlogPost } from './templates/blog.mjs'
import { renderBook } from './templates/book.mjs'
import { renderAbout, renderContact, renderFaq, renderLegal, render404 } from './templates/misc.mjs'
import { renderAreaDetail, renderAreasIndex } from './templates/areas.mjs'

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
    ['/areas/', renderAreasIndex],
    ['/about/', renderAbout],
    ['/contact/', renderContact],
    ['/faq/', renderFaq],
    ['/privacy/', (c) => renderLegal(c, 'privacy')],
    ['/terms/', (c) => renderLegal(c, 'terms')],
  ]
  for (const r of allRoutes) {
    pages.push([`/routes/${r.slug}/`, (c) => renderRouteDetail(c, r)])
  }
  for (const p of posts) {
    pages.push([`/blog/${p.slug}/`, (c) => renderBlogPost(c, p), p.date])
  }
  // Bölge (hizmet alanı) sayfaları — canonical yol İngilizce slug'ı taşır,
  // href() bunu /tr/bolge/guzelyurt-taksi/ gibi hedef dile çevirir.
  for (const a of areas) {
    pages.push([`/areas/${a.slugs[config.defaultLang]}/`, (c) => renderAreaDetail(c, a)])
  }

  for (const [path, render, lastmod] of pages) {
    // Dosya yolu dile göre yerelleşir (/tr/guzergahlar/...), şablona verilen
    // `path` ise canonical kalır — hreflang ve dil değiştirici ondan türer.
    emit(href(lang, path), render({ ...ctx, path }))
    if (lang === config.defaultLang) sitemapEntries.push({ path, lastmod: lastmod || buildDate })
  }

  emit(`${lang}/404.html`, render404({ ...ctx, path: '/' }))
}

/* ---------- Kök yönlendirme (dil algılama) ---------- */
const rootRedirect = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="google-site-verification" content="KTeL8umgS-WCfTdoblPAloTqirCkpr-oix5uMxgzmcc">
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
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${config.siteUrl}${href(l, path)}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${config.siteUrl}${href(config.defaultLang, path)}"/>`,
    ].join('\n')
    return config.languages
      .map(
        (l) =>
          `  <url>\n    <loc>${config.siteUrl}${href(l, path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`,
      )
      .join('\n')
  })
  .join('\n')

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
)

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`)

/* ---------- llms.txt + pricing.md (makine-okunur / AEO-GEO) ----------
   Fiyatlar rezervasyon kapsülünde JS ile açıldığı için bir AI ajanı onları
   render etmeden okuyamaz. Bu iki düz-metin dosyası fiyatı ve içeriği JS'siz,
   ayrıştırılabilir biçimde sunar — Perplexity ve otonom ajanlar bunu ödüllendirir,
   Google'a zararı yok. Rota/yazı verisinden üretilir, elle düzenlenmez.  */
const u = (path) => `${config.siteUrl}${href(config.defaultLang, path)}`

const priceRows = allRoutes
  .slice()
  .sort((a, b) => a.from.en.localeCompare(b.from.en) || a.to.en.localeCompare(b.to.en))
  .map((r) => {
    // Fiyatı sahadaki operatörün verdiği hatlarda (data/routes.mjs `quote: true`)
    // yayınlanmış tarife yok — tabloya "£undefined" değil, açık bir not düşülür.
    const one = r.quote ? 'on request' : `${config.currencySymbol}${r.price}`
    const round = r.quote ? 'on request' : `${config.currencySymbol}${r.roundTrip}`
    return `| ${r.from.en} → ${r.to.en} | ${one} | ${round} | ~${r.durationMin} min | ${u(`/routes/${r.slug}/`)} |`
  })
  .join('\n')

const pricingMd = `# ${config.brand} — Airport Transfer Prices (North Cyprus)

Fixed fares, quoted per vehicle (not per person), in ${config.currencyCode}. Each fare
includes tolls, parking, live flight tracking and up to 45 minutes of airport waiting.
No prepayment: pay the driver on arrival. Prices confirmed at booking do not change.

Contact: ${config.phoneDisplay ? `${config.phoneDisplay} · WhatsApp ${config.phoneDisplay} · ` : ''}${config.email}
Languages: English, Türkçe, Русский. Last generated: ${buildDate}.

| Route | One way | Round trip | Approx. duration | Page |
|---|---|---|---|---|
${priceRows}
`
writeFileSync(join(dist, 'pricing.md'), pricingMd)

const guideLines = posts
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((p) => `- [${p.title[config.defaultLang]}](${u(`/blog/${p.slug}/`)}): ${p.description[config.defaultLang]}`)
  .join('\n')

const llmsTxt = `# ${config.brand}

> Fixed-price private airport transfers across North Cyprus — Ercan, Larnaca and
> Paphos airports to Kyrenia, Nicosia, Famagusta, İskele and every hotel area.
> Booked online or by WhatsApp, no prepayment, pay the driver on arrival.

${config.brand} runs private chauffeur transfers with ~35 years of local driving
experience. Fares are fixed per vehicle and published per route (see below), in
${config.currencyCode}. Transfers from Larnaca and Paphos in the south cross the
Green Line to the north; the driver handles the crossing and there is no passenger
fee. The site is fully available in English, Turkish and Russian.

## Prices
- [Full fare list (machine-readable)](${config.siteUrl}/pricing.md)
- [Routes & prices](${u('/routes/')})

## Guides
${guideLines}

## Service areas
Guzelyurt (Morphou) and Lefke in the north-west are worked on the ground by
${config.regionalContact.name}, reachable directly on ${config.regionalContact.phoneDisplay}
(phone and WhatsApp). Local rides, campus runs and airport transfers all go through
that line; fares inside the region are quoted on the call.
${areas.map((a) => `- [${a[config.defaultLang].title}](${u(`/areas/${a.slugs[config.defaultLang]}/`)}): ${a[config.defaultLang].metaDescription.replace('{name}', config.regionalContact.name).replace(/\{phone\}/g, config.regionalContact.phoneDisplay)}`).join('\n')}

## Key pages
- [Book a transfer](${u('/book/')})
- [Frequently asked questions](${u('/faq/')})
- [About](${u('/about/')})
- [Contact](${u('/contact/')})

## Contact
${config.phoneDisplay ? `- Phone / WhatsApp: ${config.phoneDisplay}\n` : ''}- Email: ${config.email}
- Booking form: ${u('/book/')}
`
writeFileSync(join(dist, 'llms.txt'), llmsTxt)

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
// Ardına, TR/RU adresleri yerelleştirildiği için eskiden yayında olan
// İngilizce sluglı adreslerin 301 yönlendirmeleri eklenir (SEO değeri korunur).
const redirects = renamedPaths(sitemapEntries.map((e) => e.path))
const redirectBlock = redirects.length
  ? `\n# ---------- Eski İngilizce sluglı TR/RU adresleri → yerelleştirilmiş adresler ----------\n` +
    `# build.mjs tarafından data/slugs.mjs'ten üretilir — elle düzenleme.\n` +
    `<IfModule mod_alias.c>\n` +
    redirects.map(({ from, to }) => `  RedirectMatch 301 ^${from.replace(/\/$/, '')}/?$ ${to}`).join('\n') +
    `\n</IfModule>\n`
  : ''
writeFileSync(join(dist, '.htaccess'), readFileSync(join(root, 'public/.htaccess'), 'utf8') + redirectBlock)

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0B2436"/><text x="16" y="23" font-family="'Helvetica Neue',Arial,sans-serif" font-weight="700" font-size="20" fill="#1FB6C9" text-anchor="middle">T</text></svg>`
writeFileSync(join(dist, 'assets/favicon.svg'), favicon)

const pageCount = config.languages.length * (10 + allRoutes.length + posts.length + areas.length + 1) + 2
console.log(`✓ ${pageCount} sayfa üretildi → dist/`)
console.log(
  `  Diller: ${config.languages.join(', ')} · Rotalar: ${allRoutes.length} · Blog yazıları: ${posts.length} · Bölge sayfaları: ${areas.length}`,
)
console.log(`  Yerelleştirilmiş adres yönlendirmesi (301): ${redirects.length}`)
if (!config.sheetsEndpoint) {
  console.log("  ⚠ sheetsEndpoint boş — form kayıtları Google Sheets'e düşmeyecek (WhatsApp akışı çalışır).")
}
