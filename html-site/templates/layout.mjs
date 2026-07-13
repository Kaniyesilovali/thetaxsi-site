import { config } from '../site.config.mjs'

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const fmt = (template, vars) =>
  template.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ''))

export const icons = {
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="size-4" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="size-4" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" class="size-5" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" class="size-5" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="size-4" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="size-4" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="size-4.5" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-4.5" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>`,
}

function header(ctx) {
  const { lang, dict, xtra, path } = ctx
  const base = `/${lang}`
  const links = [
    { href: `${base}/routes/`, label: dict.nav.routes },
    { href: `${base}/about/`, label: dict.nav.about },
    { href: `${base}/blog/`, label: xtra.nav.blog },
    { href: `${base}/faq/`, label: xtra.nav.faq },
    { href: `${base}/contact/`, label: dict.nav.contact },
  ]
  const langLinks = config.languages
    .map((l) => {
      const active = l === lang
      return `<a href="/${l}${path}" class="px-1.5 text-[11px] uppercase tracking-[0.18em] ${active ? 'text-sea' : 'text-white/45 hover:text-white'}" ${active ? 'aria-current="true"' : ''}>${l.toUpperCase()}</a>`
    })
    .join('<span class="text-white/20">·</span>')

  return `
<header class="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80">
  <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20">
    <a href="${base}/" class="font-display text-2xl font-semibold tracking-tight text-white transition-opacity hover:opacity-75 lg:text-[1.7rem]">TheTaxsi</a>
    <nav class="hidden items-center gap-7 lg:flex">
      ${links.map((l) => `<a href="${l.href}" class="text-xs uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white">${esc(l.label)}</a>`).join('\n      ')}
    </nav>
    <div class="flex items-center gap-3 sm:gap-4">
      <a href="tel:${config.phoneHref}" class="hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-sea xl:flex">
        ${icons.phone}
        ${config.phoneDisplay}
      </a>
      <div class="flex items-center">${langLinks}</div>
      <a href="${base}/book/" class="hidden h-11 items-center border border-sea px-5 text-[10px] font-medium uppercase tracking-[0.28em] text-sea transition-colors hover:bg-sea hover:text-navy sm:inline-flex">${esc(dict.nav.reserve)}</a>
      <button type="button" data-menu-toggle class="text-white/60 transition-colors hover:text-white lg:hidden" aria-label="Toggle menu" aria-expanded="false">
        <span data-menu-icon-open>${icons.menu}</span>
        <span data-menu-icon-close class="hidden">${icons.x}</span>
      </button>
    </div>
  </div>
  <div data-menu-panel class="hidden border-t border-white/10 bg-navy/95 backdrop-blur lg:hidden">
    <nav class="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
      ${links.map((l) => `<a href="${l.href}" class="border-b border-white/5 py-4 text-sm uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white">${esc(l.label)}</a>`).join('\n      ')}
      <a href="tel:${config.phoneHref}" class="mt-2 flex items-center gap-2 py-4 text-sm uppercase tracking-[0.18em] text-sea">${icons.phone} ${config.phoneDisplay}</a>
      <a href="${base}/book/" class="mt-3 inline-flex h-12 items-center justify-center border border-sea px-6 text-xs font-medium uppercase tracking-[0.28em] text-sea transition-colors hover:bg-sea hover:text-navy sm:hidden">${esc(dict.nav.reserve)}</a>
    </nav>
  </div>
</header>`
}

const langNames = { en: 'English', tr: 'Türkçe', ru: 'Русский' }

function footer(ctx) {
  const { lang, dict, xtra, path = '/' } = ctx
  const base = `/${lang}`
  const t = dict.footer

  // Bilgi Merkezi — kısa etiketler dictionary'deki footer.guides ile aynı sırada olmalı
  const guideSlugs = [
    'ercan-airport-arrival-guide',
    'larnaca-airport-arrival-guide',
    'paphos-airport-arrival-guide',
    'guzelyurt-taksi-sehir-ici-sehir-disi-ogrenci',
    'iskele-long-beach-hotels-transfer-guide',
  ]
  const guideItems = (t.guides || []).map((label, i) => ({
    href: `${base}/blog/${guideSlugs[i]}/`,
    label,
  }))

  // Link sütunu — başlık + bağlantı listesi (referans görseldeki Hizmetler/Kurumsal düzeni)
  const col = (heading, items) => `
      <div>
        <p class="eyebrow text-sea">${esc(heading)}</p>
        <ul class="mt-6 flex flex-col gap-3">
          ${items.map((l) => `<li><a href="${l.href}" class="text-sm text-white/60 transition-colors hover:text-white">${esc(l.label)}</a></li>`).join('\n          ')}
        </ul>
      </div>`

  // Marka sütunundaki dil seçici — mevcut sayfanın diğer dillerdeki karşılığına bağlanır
  const langLinks = config.languages
    .map((l) => {
      const active = l === lang
      return `<a href="/${l}${path}" class="transition-colors ${active ? 'text-sea' : 'text-white/45 hover:text-white'}" ${active ? 'aria-current="true"' : ''}>${langNames[l] || l.toUpperCase()}</a>`
    })
    .join('<span class="text-white/20">·</span>')

  // Sosyal ikon — config'de bağlantı boşsa gösterilmez
  const social = (href, icon, label) =>
    href
      ? `<a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}" class="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-white/60 transition-colors hover:border-sea hover:text-sea">${icon}</a>`
      : ''

  return `
<footer class="relative border-t border-white/10 bg-navy text-white">
  <div class="relative mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6">
    <div class="flex flex-col gap-14 lg:flex-row lg:gap-20">
      <!-- Marka: logo + isim, açıklama, dil seçici, sosyal ikonlar -->
      <div class="lg:w-64 lg:shrink-0">
        <a href="${base}/" class="inline-flex items-center gap-3">
          <span class="inline-flex size-11 items-center justify-center rounded-full bg-sea/12 font-display text-lg font-semibold text-sea">T</span>
          <span class="font-display text-2xl font-semibold tracking-tight text-white">TheTaxsi</span>
        </a>
        <p class="mt-6 max-w-xs text-sm leading-relaxed text-white/50">${esc(t.tagline)}</p>
        <p class="mt-6 flex items-center gap-2 text-xs text-white/45">${langLinks}</p>
        <div class="mt-6 flex items-center gap-3">
          ${social(config.instagram, icons.instagram, 'Instagram')}
          ${social(config.facebook, icons.facebook, 'Facebook')}
          ${social(`https://wa.me/${config.whatsapp}`, icons.whatsapp, 'WhatsApp')}
        </div>
      </div>
      <!-- Link + iletişim sütunları: kalan alana eşit dağılır -->
      <div class="grid flex-1 grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
      ${col(t.serviceHeading, [
        { href: `${base}/book/`, label: dict.nav.book },
        { href: `${base}/routes/`, label: dict.nav.routes },
      ])}
      ${col(t.companyHeading, [
        { href: `${base}/about/`, label: dict.nav.about },
        { href: `${base}/blog/`, label: xtra.nav.blog },
        { href: `${base}/faq/`, label: xtra.nav.faq },
        { href: `${base}/contact/`, label: dict.nav.contact },
      ])}
      <!-- Bilgi Merkezi: öne çıkan rehber yazıları (referans görseldeki düzen) -->
      ${col(t.guidesHeading, guideItems)}
      <!-- İletişim: ikonlu adres, telefon, WhatsApp, e-posta -->
      <div>
        <p class="eyebrow text-sea">${esc(t.directHeading)}</p>
        <ul class="mt-6 flex flex-col gap-4">
          <li class="flex items-start gap-3 text-sm text-white/60"><span class="mt-0.5 shrink-0 text-sea/70">${icons.pin}</span><span>${t.addressLines.map(esc).join(' · ')}</span></li>
          <li><a href="tel:${config.phoneHref}" class="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"><span class="text-sea/70 transition-colors group-hover:text-sea">${icons.phone}</span>${config.phoneDisplay}</a></li>
          <li><a href="https://wa.me/${config.whatsapp}" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"><span class="text-sea/70 transition-colors group-hover:text-sea">${icons.whatsapp}</span>WhatsApp</a></li>
          <li><a href="mailto:${config.email}" class="group flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white"><span class="mt-0.5 shrink-0 text-sea/70 transition-colors group-hover:text-sea">${icons.mail}</span><span class="break-all">${config.email}</span></a></li>
        </ul>
        <p class="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-sea/80">
          <span class="size-1.5 shrink-0 rounded-full bg-sea"></span>
          ${esc(t.hours)}
        </p>
      </div>
      </div>
    </div>
    <!-- Alt bar: solda telif, sağda yasal bağlantılar (referans düzen) -->
    <div class="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-xs text-white/30">${esc(t.copyright.replace('{year}', String(new Date().getFullYear())))}</p>
      <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40">
        <a href="${base}/privacy/" class="transition-colors hover:text-white">${esc(dict.privacy.title)}</a>
        <a href="${base}/terms/" class="transition-colors hover:text-white">${esc(dict.terms.title)}</a>
      </div>
    </div>
    <p class="mt-6 text-[11px] uppercase tracking-[0.22em] text-white/25">${esc(t.paymentsLine)}</p>
  </div>
</footer>

<a href="https://wa.me/${config.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="${esc(dict.nav.whatsappAria)}"
   class="fixed bottom-5 right-5 z-50 inline-flex size-13 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105">
  <span class="[&>svg]:size-6">${icons.whatsapp}</span>
</a>`
}

// Her sayfanın sonuna eklenen ortak SSS bloğu. Hem görünür içerik (details/summary)
// hem de FAQPage JSON-LD üretir; böylece arama motorları ve yapay zeka okuyabilir.
export function faqSection(ctx) {
  const { lang, xtra } = ctx
  const t = xtra.commonFaq
  if (!t || !Array.isArray(t.items) || t.items.length === 0) return { html: '', jsonld: null }
  const base = `/${lang}`

  const html = `
<section class="border-t border-ink/10 bg-white py-20 lg:py-24" aria-labelledby="page-faq">
  <div class="mx-auto max-w-3xl px-4 sm:px-6">
    <p class="eyebrow text-sea-deep">${esc(t.eyebrow)}</p>
    <h2 id="page-faq" class="mt-4 font-display text-3xl font-medium sm:text-4xl">${esc(t.title)}</h2>
    <div class="mt-10 border-t border-ink/10">
      ${t.items
        .map(
          (item) => `
      <details class="group border-b border-ink/10" open>
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-medium [&::-webkit-details-marker]:hidden">
          <span>${esc(item.q)}</span>
          <span class="shrink-0 text-lg leading-none text-sea-deep transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="-mt-1 pb-6 text-sm leading-relaxed text-slate">${esc(item.a)}</p>
      </details>`,
        )
        .join('')}
    </div>
    <a href="${base}/faq/" class="mt-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-sea-deep transition-colors hover:text-navy">${esc(t.allCta)} <span aria-hidden="true">→</span></a>
  </div>
</section>`

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return { html, jsonld }
}

// path: dile göre değişmeyen sayfa yolu, örn. "/routes/larnaca-airport-to-nicosia/"
// faq: false verilirse sayfa sonuna ortak SSS bloğu eklenmez (örn. /faq/ ve 404).
export function page(ctx, { title, description, path, body, jsonld = [], bodyClass = 'bg-mist text-ink', faq = true }) {
  const { lang } = ctx
  const faqBlock = faq ? faqSection(ctx) : { html: '', jsonld: null }
  const allJsonld = faqBlock.jsonld ? [...jsonld, faqBlock.jsonld] : jsonld
  const url = `${config.siteUrl}/${lang}${path}`
  const alternates = config.languages
    .map((l) => `<link rel="alternate" hreflang="${l}" href="${config.siteUrl}/${l}${path}">`)
    .join('\n  ')

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${url}">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${config.siteUrl}/${config.defaultLang}${path}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${config.brand}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/main.css">
  ${allJsonld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n  ')}
</head>
<body class="min-h-full flex flex-col font-sans ${bodyClass}">
${header(ctx)}
<main class="flex-1">
${body}
${faqBlock.html}
</main>
${footer(ctx)}
<script src="/assets/main.js" defer></script>
</body>
</html>`
}
