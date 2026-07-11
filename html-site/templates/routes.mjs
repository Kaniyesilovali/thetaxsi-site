import { esc, fmt, icons, page } from './layout.mjs'
import { config } from '../site.config.mjs'
import { routes } from '../data/routes.mjs'
import { routeLabel } from './home.mjs'

function pageHero({ eyebrow, title, subtitle }) {
  return `
<section class="relative bg-navy py-24 text-white lg:py-32">
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
    <p class="eyebrow text-sea">${esc(eyebrow)}</p>
    <h1 class="mt-4 font-display text-5xl font-medium sm:text-6xl">${esc(title)}</h1>
    ${subtitle ? `<p class="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">${esc(subtitle)}</p>` : ''}
  </div>
</section>`
}

export function renderRoutesIndex(ctx) {
  const { lang, dict } = ctx
  const t = dict.routes
  const base = `/${lang}`

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-mist py-20 lg:py-28">
  <div class="mx-auto max-w-5xl px-4 sm:px-6">
    <div class="grid gap-px overflow-hidden border border-ink/10 bg-ink/10">
      ${routes
        .map(
          (r) => `
      <a href="${base}/routes/${r.slug}/" class="group grid gap-4 bg-mist p-6 transition-colors hover:bg-white sm:grid-cols-[1fr_auto_auto_auto] sm:items-center">
        <p class="text-sm font-medium leading-snug">${esc(routeLabel(r, lang))}</p>
        <p class="text-sm"><span class="mr-2 text-[10px] uppercase tracking-[0.18em] text-slate">${esc(t.oneWay)}</span><span class="kicker text-2xl text-sea-deep">€${r.price}</span></p>
        <p class="text-sm"><span class="mr-2 text-[10px] uppercase tracking-[0.18em] text-slate">${esc(t.roundTrip)}</span><span class="kicker text-2xl text-sea-deep">€${r.roundTrip}</span></p>
        <span class="text-xs uppercase tracking-[0.2em] text-sea-deep opacity-0 transition-opacity group-hover:opacity-100">${esc(t.bookRoute)} →</span>
      </a>`,
        )
        .join('')}
    </div>
  </div>
</section>`

  return page(ctx, {
    title: `${t.title} — ${config.brand}`,
    description: t.subtitle,
    path: '/routes/',
    body,
  })
}

export function renderRouteDetail(ctx, route) {
  const { lang, dict, xtra } = ctx
  const rd = xtra.routeDetail
  const base = `/${lang}`
  const from = route.from[lang]
  const to = route.to[lang]
  const label = routeLabel(route, lang)
  const path = `/routes/${route.slug}/`

  const title = fmt(rd.metaTitle, { from, to, price: route.price })
  const description = fmt(rd.metaDescription, { from, to, price: route.price, duration: route.durationMin })

  const facts = [
    [rd.facts.duration, fmt(rd.facts.durationValue, { min: route.durationMin })],
    [rd.facts.distance, fmt(rd.facts.distanceValue, { km: route.distanceKm })],
    [rd.facts.oneWay, `€${route.price}`],
    [rd.facts.roundTrip, `€${route.roundTrip}`],
    [rd.facts.vehicle, rd.facts.vehicleValue],
  ]

  const others = routes.filter((r) => r.slug !== route.slug)

  const body = `
<section class="relative bg-navy py-24 text-white lg:py-32">
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
    <nav class="text-[11px] uppercase tracking-[0.2em] text-white/40" aria-label="Breadcrumb">
      <a href="${base}/routes/" class="transition-colors hover:text-white">${esc(rd.breadcrumbRoutes)}</a>
      <span class="mx-2 text-white/25">/</span>
      <span class="text-sea">${esc(to)}</span>
    </nav>
    <p class="eyebrow mt-10 text-sea">${esc(rd.heroEyebrow)}</p>
    <h1 class="mt-4 max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">${esc(from)} <span class="text-sea">→</span> ${esc(to)}</h1>
    <div class="mt-12 grid gap-px border border-white/15 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
      ${facts
        .map(
          ([k, v]) => `
      <div class="bg-navy/80 px-5 py-4">
        <p class="text-[10px] uppercase tracking-[0.2em] text-white/40">${esc(k)}</p>
        <p class="mt-1 text-sm text-sea-pale">${esc(String(v))}</p>
      </div>`,
        )
        .join('')}
    </div>
    <a href="${base}/book/?from=${encodeURIComponent(route.fromValue)}&amp;to=${encodeURIComponent(route.toValue)}" class="mt-10 inline-flex h-13 items-center bg-sea px-10 text-xs font-medium uppercase tracking-[0.28em] text-navy transition-colors hover:bg-sea-deep">${esc(rd.reserveCta)}</a>
  </div>
</section>

<section class="bg-mist py-20 lg:py-28">
  <div class="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2">
    <div>
      <h2 class="font-display text-3xl font-medium">${esc(rd.includedTitle)}</h2>
      <ul class="mt-8 flex flex-col gap-4">
        ${rd.included
          .map(
            (item) => `
        <li class="flex items-start gap-3 border-b border-ink/10 pb-4 text-sm text-slate">
          <span class="mt-0.5 text-sea-deep">${icons.check}</span>
          ${esc(item)}
        </li>`,
          )
          .join('')}
      </ul>
    </div>
    <div>
      <h2 class="font-display text-3xl font-medium">${esc(rd.otherRoutes)}</h2>
      <div class="mt-8 grid gap-px overflow-hidden border border-ink/10 bg-ink/10">
        ${others
          .map(
            (r) => `
        <a href="${base}/routes/${r.slug}/" class="group flex items-center justify-between gap-4 bg-mist p-5 transition-colors hover:bg-white">
          <p class="text-sm leading-snug">${esc(routeLabel(r, lang))}</p>
          <span class="kicker whitespace-nowrap text-2xl text-sea-deep">€${r.price}</span>
        </a>`,
          )
          .join('')}
      </div>
    </div>
  </div>
</section>`

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Airport transfer',
      name: `${from} → ${to}`,
      provider: { '@type': 'LocalBusiness', name: config.brand, telephone: config.phoneHref },
      areaServed: 'Cyprus',
      offers: {
        '@type': 'Offer',
        price: route.price,
        priceCurrency: 'EUR',
        url: `${config.siteUrl}/${lang}${path}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: rd.breadcrumbRoutes, item: `${config.siteUrl}/${lang}/routes/` },
        { '@type': 'ListItem', position: 2, name: label, item: `${config.siteUrl}/${lang}${path}` },
      ],
    },
  ]

  return page(ctx, { title, description, path, body, jsonld })
}
