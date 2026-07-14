import { esc, fmt, icons, page, pageHero } from './layout.mjs'
import { config } from '../site.config.mjs'
import { routes } from '../data/routes.mjs'
import { routeLabel } from './home.mjs'

export function renderRoutesIndex(ctx) {
  const { lang, dict } = ctx
  const t = dict.routes
  const base = `/${lang}`

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <div class="grid gap-4 sm:grid-cols-2">
      ${routes
        .map(
          (r) => `
      <a href="${base}/routes/${r.slug}/" class="group flex flex-col gap-5 rounded-2xl border border-line bg-paper p-6 transition-shadow duration-300 hover:shadow-card">
        <span class="text-[15px] font-medium leading-snug text-ink">${esc(routeLabel(r, lang))}</span>
        <div class="mt-auto flex items-end justify-between gap-4">
          <div class="flex gap-6">
            <span class="block">
              <span class="block text-[11px] text-slate">${esc(t.oneWay)}</span>
              <span class="text-2xl font-semibold tabular-nums text-sea">€${r.price}</span>
            </span>
            <span class="block">
              <span class="block text-[11px] text-slate">${esc(t.roundTrip)}</span>
              <span class="text-2xl font-semibold tabular-nums text-ink">€${r.roundTrip}</span>
            </span>
          </div>
          <span class="inline-flex items-center gap-1.5 text-[13px] font-medium text-sea transition-colors group-hover:text-sea-deep">${esc(t.bookRoute)} <span aria-hidden="true">→</span></span>
        </div>
      </a>`,
        )
        .join('')}
    </div>
  </div>
</section>`

  return page(ctx, {
    title: t.meta?.title ?? `${t.title} — ${config.brand}`,
    description: t.meta?.description ?? t.subtitle,
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
<section class="relative overflow-hidden border-b border-line bg-paper">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <div class="absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(18,165,188,.06),transparent 70%)"></div>
  </div>
  <div class="relative mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 lg:pt-16 lg:pb-20">
    <nav class="text-[13px] text-slate" aria-label="Breadcrumb">
      <a href="${base}/routes/" class="transition-colors hover:text-ink">${esc(rd.breadcrumbRoutes)}</a>
      <span class="mx-2 text-ink/25">/</span>
      <span class="text-ink">${esc(to)}</span>
    </nav>
    <p class="mt-8 text-sm font-medium text-sea">${esc(rd.heroEyebrow)}</p>
    <h1 class="mt-3 max-w-4xl text-[clamp(2.2rem,6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-ink">${esc(from)} <span class="text-sea">→</span> ${esc(to)}</h1>
    <div class="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
      ${facts
        .map(
          ([k, v]) => `
      <div class="rounded-2xl border border-line bg-cloud px-5 py-4">
        <p class="text-[11px] text-slate">${esc(k)}</p>
        <p class="mt-1 text-[15px] font-semibold text-ink">${esc(String(v))}</p>
      </div>`,
        )
        .join('')}
    </div>
    <a href="${base}/book/?from=${encodeURIComponent(route.fromValue)}&amp;to=${encodeURIComponent(route.toValue)}" class="mt-10 inline-flex h-12 items-center rounded-full bg-sea px-8 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep">${esc(rd.reserveCta)}</a>
  </div>
</section>

<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
    <div>
      <h2 class="text-3xl font-semibold tracking-tight text-ink">${esc(rd.includedTitle)}</h2>
      <ul class="mt-8 flex flex-col gap-3">
        ${rd.included
          .map(
            (item) => `
        <li class="flex items-start gap-3 rounded-2xl border border-line bg-paper px-5 py-4 text-[15px] leading-relaxed text-slate">
          <span class="mt-0.5 shrink-0 text-sea">${icons.check}</span>
          <span>${esc(item)}</span>
        </li>`,
          )
          .join('')}
      </ul>
    </div>
    <div>
      <h2 class="text-3xl font-semibold tracking-tight text-ink">${esc(rd.otherRoutes)}</h2>
      <div class="mt-8 grid gap-3">
        ${others
          .map(
            (r) => `
        <a href="${base}/routes/${r.slug}/" class="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-5 transition-shadow duration-300 hover:shadow-card">
          <span class="text-[15px] font-medium leading-snug text-ink">${esc(routeLabel(r, lang))}</span>
          <span class="shrink-0 text-right">
            <span class="block text-[11px] text-slate">${esc(dict.homepage.routes.from)}</span>
            <span class="text-2xl font-semibold tabular-nums text-sea">€${r.price}</span>
          </span>
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
