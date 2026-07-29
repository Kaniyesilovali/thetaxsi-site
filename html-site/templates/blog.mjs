import { esc, page, pageHero } from './layout.mjs'
import { config } from '../site.config.mjs'
import { posts } from '../data/posts.mjs'
import { href, localizeHtmlLinks } from '../data/slugs.mjs'
import { businessRef } from '../data/schema.mjs'

const localeOf = { en: 'en-GB', tr: 'tr-TR', ru: 'ru-RU' }

// Blog gövdesindeki SSS bölümünden FAQPage JSON-LD üret.
// Tüm yazılarda <h3> YALNIZCA SSS sorusudur (içerik kontrolüyle doğrulandı) ve
// hemen ardından cevabın <p>'si gelir — bu yüzden dile bağımsız, güvenli çıkarım.
// FAQPage AEO'da en ağır schema türlerinden; rota sayfaları zaten üretiyordu,
// blog yazıları üretmiyordu (bkz. content-strategy.md Faz 6 açığı).
const stripTags = (s) => s.replace(/<[^>]+>/g, '')
const decodeEntities = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
const cleanText = (s) => decodeEntities(stripTags(s)).replace(/\s+/g, ' ').trim()

function faqFromBody(html) {
  const pairs = []
  // <h3>soru</h3> sonrasında ilk <p>cevap</p> — arada boşluk olabilir.
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g
  let m
  while ((m = re.exec(html))) {
    const q = cleanText(m[1])
    const a = cleanText(m[2])
    if (q && a) pairs.push({ q, a })
  }
  if (!pairs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function formatDate(iso, lang) {
  return new Intl.DateTimeFormat(localeOf[lang] ?? lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T12:00:00Z`))
}

export function sortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

// İçerik stratejisindeki 4 pillar (bkz. .agents/content-strategy.md). "Diğer
// yazılar" bölümü artık en yeni 3 yerine AYNI pillar'daki yazıları öne alıyor —
// hub-and-spoke iç linkini güçlendirir (GEO: topical authority sinyali). Yeni
// yazı eklerken slug'ını buraya da yaz; eşlenmeyen yazı yalnızca recency'e düşer.
const pillarOf = {
  // 1 — Havalimanı transferi
  'cyprus-airport-transfer-guide': 'airport',
  'ercan-airport-arrival-guide': 'airport',
  'larnaca-airport-arrival-guide': 'airport',
  'paphos-airport-arrival-guide': 'airport',
  'ercan-vs-larnaca-for-kyrenia': 'airport',
  'north-cyprus-airport-transfer-prices': 'airport',
  // 2 — Sınır geçişi
  'larnaca-airport-to-kyrenia-border-crossing-guide': 'border',
  'north-cyprus-visa-passport-border-crossing': 'border',
  'north-cyprus-travel-terms-explained': 'border',
  'north-cyprus-money-tipping-guide': 'border',
  // 3 — Destinasyonlar
  'bafra-hotels-transfer-guide': 'destinations',
  'famagusta-beaches-old-city-guide': 'destinations',
  'guzelyurt-morphou-transfer-guide': 'destinations',
  'guzelyurt-soli-vouni-west-cyprus-guide': 'destinations',
  'guzelyurt-taksi-sehir-ici-sehir-disi-ogrenci': 'destinations',
  'iskele-long-beach-hotels-transfer-guide': 'destinations',
  'karpaz-golden-beach-guide': 'destinations',
  'kyrenia-harbour-castle-old-town-guide': 'destinations',
  'long-beach-iskele-things-to-do': 'destinations',
  'nicosia-lefkosa-city-transfer-guide': 'destinations',
  'north-cyprus-university-student-transfer': 'destinations',
  'north-cyprus-villages-heritage-guide': 'destinations',
  // 4 — Güven & nasıl çalışır
  'how-fixed-price-transfers-work': 'trust',
  'is-it-safe-book-transfer-without-prepayment': 'trust',
  'north-cyprus-transfer-vs-taxi-vs-car-hire': 'trust',
}

// Aynı pillar'daki yazıları öne al, 3'e tamamlamak için en yenilerle doldur.
function relatedPosts(slug, n = 3) {
  const pillar = pillarOf[slug]
  const pool = sortedPosts().filter((p) => p.slug !== slug)
  const same = pillar ? pool.filter((p) => pillarOf[p.slug] === pillar) : []
  const rest = pool.filter((p) => !same.includes(p))
  return [...same, ...rest].slice(0, n)
}

export function renderBlogIndex(ctx) {
  const { lang, xtra } = ctx
  const t = xtra.blog

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      ${sortedPosts()
        .map(
          (p) => `
      <a href="${href(lang, `/blog/${p.slug}/`)}" class="group flex flex-col gap-3 rounded-3xl border border-line bg-paper p-6 transition-shadow duration-300 hover:shadow-card">
        <p class="text-[12px] font-medium text-slate">${esc(formatDate(p.date, lang))}</p>
        <h2 class="text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-sea">${esc(p.title[lang])}</h2>
        <p class="line-clamp-3 text-[14px] leading-relaxed text-slate">${esc(p.description[lang])}</p>
        <span class="mt-auto inline-flex items-center gap-1.5 pt-3 text-[13px] font-medium text-sea">${esc(t.readMore)} <span aria-hidden="true">→</span></span>
      </a>`,
        )
        .join('')}
    </div>
  </div>
</section>`

  return page(ctx, {
    title: t.meta?.title ?? `${t.title} — ${config.brand}`,
    description: t.meta?.description ?? t.subtitle,
    path: '/blog/',
    body,
  })
}

export function renderBlogPost(ctx, post) {
  const { lang, xtra } = ctx
  const t = xtra.blog
  const path = `/blog/${post.slug}/`
  const title = post.title[lang]
  const description = post.description[lang]
  const others = relatedPosts(post.slug, 3)

  const body = `
<section class="relative overflow-hidden border-b border-line bg-paper">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <div class="absolute -top-40 right-[-15%] h-[520px] w-[520px] rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(18,165,188,.06),transparent 70%)"></div>
  </div>
  <div class="relative mx-auto max-w-3xl px-5 pt-14 pb-14 sm:px-8 lg:pt-16 lg:pb-16">
    <nav class="text-[13px] text-slate" aria-label="Breadcrumb">
      <a href="${href(lang, '/')}" class="transition-colors hover:text-ink">${esc(xtra.nav.home)}</a>
      <span class="mx-2 text-ink/25">/</span>
      <a href="${href(lang, '/blog/')}" class="transition-colors hover:text-ink">${esc(t.title)}</a>
      <span class="mx-2 text-ink/25">/</span>
      <span class="text-ink">${esc(formatDate(post.date, lang))}</span>
    </nav>
    <h1 class="mt-7 max-w-3xl text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance text-ink">${esc(title)}</h1>
    <p class="mt-5 max-w-2xl text-[17px] leading-relaxed text-slate">${esc(description)}</p>
  </div>
</section>
<section class="bg-paper py-16 lg:py-20">
  <article class="article-body mx-auto max-w-3xl px-5 sm:px-8">
    ${localizeHtmlLinks(post.body[lang], lang)}
  </article>
  <div class="mx-auto mt-16 max-w-3xl px-5 sm:px-8">
    <div class="border-t border-line pt-10">
      <a href="${href(lang, '/book/')}" class="inline-flex h-12 items-center rounded-full bg-sea px-8 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep">${esc(t.cta)}</a>
    </div>
    ${
      others.length
        ? `
    <div class="mt-16">
      <h2 class="text-2xl font-semibold tracking-tight text-ink">${esc(t.otherPosts)}</h2>
      <div class="mt-8 grid gap-3">
        ${others
          .map(
            (p) => `
        <a href="${href(lang, `/blog/${p.slug}/`)}" class="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-cloud p-5 transition-shadow duration-300 hover:shadow-card">
          <span class="text-[15px] font-medium leading-snug text-ink transition-colors group-hover:text-sea">${esc(p.title[lang])}</span>
          <span class="shrink-0 whitespace-nowrap text-[12px] text-slate">${esc(formatDate(p.date, lang))}</span>
        </a>`,
          )
          .join('')}
      </div>
    </div>`
        : ''
    }
  </div>
</section>`

  const ogImage = `${config.siteUrl}/assets/img/og.jpg`
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      inLanguage: lang,
      url: `${config.siteUrl}${href(lang, path)}`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${config.siteUrl}${href(lang, path)}` },
      image: { '@type': 'ImageObject', url: ogImage, width: 1200, height: 630 },
      author: { '@type': 'Organization', name: config.brand, url: `${config.siteUrl}/${lang}/` },
      publisher: businessRef,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: xtra.nav.home, item: `${config.siteUrl}${href(lang, '/')}` },
        { '@type': 'ListItem', position: 2, name: t.title, item: `${config.siteUrl}${href(lang, '/blog/')}` },
        { '@type': 'ListItem', position: 3, name: title, item: `${config.siteUrl}${href(lang, path)}` },
      ],
    },
  ]

  // Gövdedeki SSS varsa FAQPage ekle (AEO).
  const faq = faqFromBody(post.body[lang])
  if (faq) jsonld.push(faq)

  // Marka ekini yalnızca başlık kısa kaldığında ekle — uzun başlıklar SERP'te
  // ~60 karakterde kesilmesin diye markasız bırakılır.
  const withBrand = `${title} — ${config.brand}`

  return page(ctx, {
    title: withBrand.length <= 60 ? withBrand : title,
    description,
    path,
    body,
    jsonld,
    ogType: 'article',
  })
}
