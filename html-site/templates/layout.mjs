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

function footer(ctx) {
  const { lang, dict, xtra } = ctx
  const base = `/${lang}`
  const t = dict.footer
  const col = (heading, items) => `
      <div class="lg:col-span-2">
        <p class="eyebrow text-sea">${esc(heading)}</p>
        <ul class="mt-6 flex flex-col gap-3">
          ${items.map((l) => `<li><a href="${l.href}" class="text-sm text-white/65 transition-colors hover:text-white">${esc(l.label)}</a></li>`).join('\n          ')}
        </ul>
      </div>`

  return `
<footer class="relative border-t border-white/10 bg-navy text-white">
  <div class="relative mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6">
    <div class="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12">
      <div class="col-span-2 lg:col-span-4">
        <p class="font-display text-3xl font-semibold tracking-tight text-white">TheTaxsi</p>
        <p class="mt-3 text-sm text-white/45">${esc(t.tagline)}</p>
        <span class="mt-6 block h-px w-12 bg-sea"></span>
        <div class="mt-6 space-y-1 text-xs uppercase tracking-[0.18em] text-white/45">
          ${t.addressLines.map((line) => `<p>${esc(line)}</p>`).join('\n          ')}
        </div>
        <p class="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-sea/80">
          <span class="size-1.5 rounded-full bg-sea"></span>
          ${esc(t.hours)}
        </p>
      </div>
      <div class="col-span-2 lg:col-span-3">
        <p class="eyebrow text-sea">${esc(t.directHeading)}</p>
        <ul class="mt-6 flex flex-col gap-4">
          <li><a href="tel:${config.phoneHref}" class="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"><span class="text-sea/70 transition-colors group-hover:text-sea">${icons.phone}</span>${config.phoneDisplay}</a></li>
          <li><a href="mailto:${config.email}" class="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"><span class="text-sea/70 transition-colors group-hover:text-sea">${icons.mail}</span>${config.email}</a></li>
          <li><a href="https://wa.me/${config.whatsapp}" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"><span class="text-sea/70 transition-colors group-hover:text-sea">${icons.whatsapp}</span>WhatsApp</a></li>
        </ul>
      </div>
      ${col(t.serviceHeading, [
        { href: `${base}/book/`, label: dict.nav.book },
        { href: `${base}/routes/`, label: dict.nav.routes },
      ])}
      ${col(t.companyHeading, [
        { href: `${base}/about/`, label: dict.nav.about },
        { href: `${base}/blog/`, label: xtra.nav.blog },
        { href: `${base}/contact/`, label: dict.nav.contact },
        { href: `${base}/faq/`, label: xtra.nav.faq },
      ])}
      ${col(t.legalHeading, [
        { href: `${base}/privacy/`, label: dict.privacy.title },
        { href: `${base}/terms/`, label: dict.terms.title },
      ])}
    </div>
    <div class="mt-16 border-t border-white/10 pt-8">
      <p class="text-[11px] uppercase tracking-[0.22em] text-white/30">${esc(t.paymentsLine)}</p>
      <p class="mt-2 text-xs text-white/25">${esc(t.copyright.replace('{year}', String(new Date().getFullYear())))}</p>
    </div>
  </div>
</footer>

<a href="https://wa.me/${config.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="${esc(dict.nav.whatsappAria)}"
   class="fixed bottom-5 right-5 z-50 inline-flex size-13 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105">
  <span class="[&>svg]:size-6">${icons.whatsapp}</span>
</a>`
}

// path: dile göre değişmeyen sayfa yolu, örn. "/routes/larnaca-airport-to-nicosia/"
export function page(ctx, { title, description, path, body, jsonld = [], bodyClass = 'bg-mist text-ink' }) {
  const { lang } = ctx
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
  ${jsonld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n  ')}
</head>
<body class="min-h-full flex flex-col font-sans ${bodyClass}">
${header(ctx)}
<main class="flex-1">
${body}
</main>
${footer(ctx)}
<script src="/assets/main.js" defer></script>
</body>
</html>`
}
