import { esc, fmt, icons, page, pageHero } from './layout.mjs'
import { href } from '../data/slugs.mjs'
import { config } from '../site.config.mjs'
import { routes, connectingRoutes } from '../data/routes.mjs'
import { routeCopy } from '../data/route-copy.mjs'
import { posts } from '../data/posts.mjs'
import { locationGroups } from '../data/locations.mjs'
import { routeLabel } from './home.mjs'

export function renderRoutesIndex(ctx) {
  const { lang, dict } = ctx
  const t = dict.routes
  const cur = config.currencySymbol

  // Kalkış havalimanına göre filtre grupları — data/routes.mjs sırasını korur.
  // Sadece locations.mjs'teki `airports` grubundaki kalkışlar pill alır; şehir
  // hatları (ör. Güzelyurt → Limasol) listede kalır, "Tüm güzergahlar" altında görünür.
  const airportValues = new Set(
    (locationGroups.find((g) => g.id === 'airports')?.locations ?? []).map((l) => l.value),
  )
  const airports = []
  for (const r of routes) {
    if (!airportValues.has(r.fromValue)) continue
    if (!airports.some((a) => a.value === r.fromValue)) {
      airports.push({ value: r.fromValue, label: r.from[lang], count: 1 })
    } else {
      airports.find((a) => a.value === r.fromValue).count += 1
    }
  }

  // Filtre = tek satır pill sırası; alt satıra sarmaz, sığmazsa yatay kayar.
  // Sayaç da aynı satırın sonunda durur.
  const pill = (value, label, count, active) => `
      <button type="button" data-route-filter="${esc(value)}" aria-pressed="${active}" class="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-5 text-[13px] font-medium transition-colors ${
        active
          ? 'border-ink bg-ink text-paper'
          : 'border-line bg-paper text-ink hover:border-ink'
      }">${esc(label)} <span class="text-[11px] tabular-nums opacity-60">${count}</span></button>`

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <div class="-mx-5 mb-8 flex items-center gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0" data-route-filters role="group" aria-label="${esc(t.filterLabel)}">
      ${pill('all', t.filterAll, routes.length, true)}
      ${airports.map((a) => pill(a.value, a.label, a.count, false)).join('')}
      <p class="ml-2 shrink-0 whitespace-nowrap text-[13px] text-slate" data-route-filter-count data-count-template="${esc(t.filterResult)}">${esc(fmt(t.filterResult, { count: routes.length }))}</p>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      ${routes
        .map(
          (r) => `
      <a href="${href(lang, `/routes/${r.slug}/`)}" data-route-from="${esc(r.fromValue)}" class="group flex flex-col gap-5 rounded-2xl border border-line bg-paper p-6 transition-shadow duration-300 hover:shadow-card">
        <span class="text-[15px] font-medium leading-snug text-ink">${esc(routeLabel(r, lang))}</span>
        <div class="mt-auto flex items-end justify-between gap-4">
          <div class="flex gap-6">
            <span class="block">
              <span class="block text-[11px] text-slate">${esc(t.oneWay)}</span>
              <span class="text-2xl font-semibold tabular-nums text-sea">${cur}${r.price}</span>
            </span>
            <span class="block">
              <span class="block text-[11px] text-slate">${esc(t.roundTrip)}</span>
              <span class="text-2xl font-semibold tabular-nums text-ink">${cur}${r.roundTrip}</span>
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
  const cur = config.currencySymbol
  const from = route.from[lang]
  const to = route.to[lang]
  const label = routeLabel(route, lang)
  const path = `/routes/${route.slug}/`

  const title = fmt(rd.metaTitle, { from, to, price: route.price })
  const description = fmt(rd.metaDescription, { from, to, price: route.price, duration: route.durationMin })

  const facts = [
    [rd.facts.duration, fmt(rd.facts.durationValue, { min: route.durationMin })],
    [rd.facts.distance, fmt(rd.facts.distanceValue, { km: route.distanceKm })],
    [rd.facts.oneWay, `${cur}${route.price}`],
    [rd.facts.roundTrip, `${cur}${route.roundTrip}`],
    [rd.facts.vehicle, rd.facts.vehicleValue],
  ]

  // Alakasız fiyat göstermemek için: bu sayfanın varış noktasından kalkan
  // güzergahlar listelenir (Baf → Girne sayfasında Girne çıkışlı hatlar).
  const others = connectingRoutes(route)
  const onwardOnly = others.every((r) => r.fromValue === route.toValue)

  // Vito fiyatı verilen hatlarda (Güzelyurt) salon/Vito ayrı ayrı listelenir;
  // diğer rotalarda tek fiyat geçerli olduğu için blok gizlenir.
  const vehicleRow = (label, seats, one, round) => `
      <div class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-cloud px-5 py-4">
        <span class="text-[15px] font-semibold text-ink">${esc(label)} <span class="font-normal text-slate">${esc(seats)}</span></span>
        <span class="flex gap-6">
          <span class="block text-right">
            <span class="block text-[11px] text-slate">${esc(rd.facts.oneWay)}</span>
            <span class="text-lg font-semibold tabular-nums text-sea">${cur}${one}</span>
          </span>
          <span class="block text-right">
            <span class="block text-[11px] text-slate">${esc(rd.facts.roundTrip)}</span>
            <span class="text-lg font-semibold tabular-nums text-ink">${cur}${round}</span>
          </span>
        </span>
      </div>`

  const vehiclePricing = route.vitoPrice
    ? `
    <div class="mt-10 sm:max-w-lg">
      <p class="text-[13px] font-semibold text-ink">${esc(rd.vehiclesTitle)}</p>
      <div class="mt-3 flex flex-col gap-3">
        ${vehicleRow(rd.salonLabel, rd.salonSeats, route.price, route.roundTrip)}
        ${vehicleRow(rd.vitoLabel, rd.vitoSeats, route.vitoPrice, route.vitoRoundTrip)}
      </div>
    </div>`
    : ''

  // Bazı hatlar (ör. Güzelyurt) doğrudan bir şoför tarafından işletilir; gerçek
  // telefon/WhatsApp varsa hero'da görünür iletişim bloğu göster.
  const directContact = route.phoneHref
    ? `
    <div class="mt-8 flex flex-col gap-3 rounded-2xl border border-sea/25 bg-sea/5 p-5 sm:max-w-lg">
      <p class="text-[13px] font-semibold text-ink">${esc(rd.directHeading)}</p>
      <p class="text-[13px] leading-relaxed text-slate">${esc(fmt(rd.directNote, { name: route.contactName }))}</p>
      <div class="flex flex-wrap gap-2">
        <a href="tel:${route.phoneHref}" class="inline-flex h-10 items-center gap-2 rounded-full bg-sea px-5 text-[13px] font-semibold text-white transition-colors hover:bg-sea-deep"><span class="[&>svg]:size-4">${icons.phone}</span>${esc(fmt(rd.callCta, { phone: route.phoneDisplay }))}</a>
        <a href="https://wa.me/${route.whatsapp}" target="_blank" rel="noopener noreferrer" class="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-paper px-5 text-[13px] font-semibold text-ink transition-colors hover:border-sea hover:text-sea"><span class="[&>svg]:size-4">${icons.whatsapp}</span>${esc(fmt(rd.whatsappCta, { name: route.contactName }))}</a>
      </div>
    </div>`
    : ''

  // Rotaya özgü metin (data/route-copy.mjs). Ters yön sayfası kaydı `baseSlug`
  // ile bulur ve tam metin yerine kısa `returnIntro`yu kullanır; pratik notların
  // yerini de veriden türetilen kalkış saati uyarısı alır.
  const entry = routeCopy[route.baseSlug ?? route.slug]
  const copy = entry?.[lang]
  const intro = route.isReturn ? copy?.returnIntro : copy?.intro
  const notes = route.isReturn
    ? [fmt(rd.departureNote, { min: route.durationMin })]
    : (copy?.notes ?? [])
  const routeFaq = route.isReturn ? [] : (copy?.faq ?? [])

  // İlgili blog yazısına iç link — hem okuyucu için devam yolu, hem rota
  // sayfasıyla rehber arasında SEO bağı.
  const guide = entry?.guide ? posts.find((p) => p.slug === entry.guide) : null
  const guideLink =
    guide && guide.title[lang]
      ? `
      <a href="${href(lang, `/blog/${guide.slug}/`)}" class="mt-8 inline-flex items-baseline gap-2 text-[15px] font-medium text-sea transition-colors hover:text-sea-deep">
        <span>${esc(guide.title[lang])}</span><span aria-hidden="true">→</span>
      </a>
      <p class="mt-1 text-[13px] text-slate">${esc(rd.guideCta)}</p>`
      : ''

  const aboutSection = intro
    ? `
<section class="border-b border-line bg-paper py-16 lg:py-20" aria-labelledby="route-about">
  <div class="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
    <div>
      <h2 id="route-about" class="text-3xl font-semibold tracking-tight text-ink">${esc(rd.aboutTitle)}</h2>
      <p class="mt-6 text-[17px] leading-relaxed text-slate">${esc(intro)}</p>
      ${guideLink}
    </div>
    ${
      notes.length
        ? `<div>
      <p class="text-[13px] font-semibold text-ink">${esc(rd.notesTitle)}</p>
      <ul class="mt-4 flex flex-col gap-3">
        ${notes
          .map(
            (n) => `
        <li class="flex items-start gap-3 rounded-2xl border border-line bg-cloud px-5 py-4 text-[15px] leading-relaxed text-slate">
          <span class="mt-0.5 shrink-0 text-sea">${icons.check}</span><span>${esc(n)}</span>
        </li>`,
          )
          .join('')}
      </ul>
    </div>`
        : ''
    }
  </div>
</section>`
    : ''

  // Rotaya özgü SSS — ortak SSS bloğunun aksine her sayfada farklı olduğu için
  // FAQPage şeması burada yayınlanabilir (duplicate structured data oluşmaz).
  const faqSectionHtml = routeFaq.length
    ? `
<section class="border-t border-line bg-paper py-20 lg:py-24" aria-labelledby="route-faq">
  <div class="mx-auto max-w-3xl px-5 sm:px-8">
    <h2 id="route-faq" class="text-3xl font-semibold tracking-tight text-ink">${esc(rd.routeFaqTitle)}</h2>
    <div class="mt-10 overflow-hidden rounded-3xl border border-line bg-cloud">
      ${routeFaq
        .map(
          (item) => `
      <div class="border-b border-line px-6 py-5 last:border-b-0">
        <h3 class="text-[15px] font-medium text-ink">${esc(item.q)}</h3>
        <p class="mt-2 text-[15px] leading-relaxed text-slate">${esc(item.a)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>`
    : ''

  const body = `
<section class="relative overflow-hidden border-b border-line bg-paper">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <div class="absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(18,165,188,.06),transparent 70%)"></div>
  </div>
  <div class="relative mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 lg:pt-16 lg:pb-20">
    <nav class="text-[13px] text-slate" aria-label="Breadcrumb">
      <a href="${href(lang, '/routes/')}" class="transition-colors hover:text-ink">${esc(rd.breadcrumbRoutes)}</a>
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
    ${vehiclePricing}
    <a href="${href(lang, '/book/')}?from=${encodeURIComponent(route.fromValue)}&amp;to=${encodeURIComponent(route.toValue)}" class="mt-10 inline-flex h-12 items-center rounded-full bg-sea px-8 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep">${esc(rd.reserveCta)}</a>
    ${directContact}
  </div>
</section>
${aboutSection}
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
      <h2 class="text-3xl font-semibold tracking-tight text-ink">${esc(onwardOnly ? fmt(rd.onwardRoutes, { from: to }) : rd.otherRoutes)}</h2>
      ${onwardOnly ? `<p class="mt-4 text-[15px] leading-relaxed text-slate">${esc(fmt(rd.onwardNote, { from: to }))}</p>` : ''}
      <div class="mt-8 grid gap-3">
        ${others
          .map(
            (r) => `
        <a href="${href(lang, `/routes/${r.slug}/`)}" class="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-5 transition-shadow duration-300 hover:shadow-card">
          <span class="text-[15px] font-medium leading-snug text-ink">${esc(routeLabel(r, lang))}</span>
          <span class="shrink-0 text-right">
            <span class="block text-[11px] text-slate">${esc(dict.homepage.routes.from)}</span>
            <span class="text-2xl font-semibold tabular-nums text-sea">${cur}${r.price}</span>
          </span>
        </a>`,
          )
          .join('')}
      </div>
    </div>
  </div>
</section>
${faqSectionHtml}`

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Airport transfer',
      name: `${from} → ${to}`,
      provider: {
        '@type': 'LocalBusiness',
        name: route.contactName ? `${config.brand} — ${route.contactName}` : config.brand,
        telephone: route.phoneHref ?? config.phoneHref,
      },
      areaServed: 'Cyprus',
      offers: {
        '@type': 'Offer',
        price: route.price,
        priceCurrency: config.currencyCode,
        url: `${config.siteUrl}${href(lang, path)}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: rd.breadcrumbRoutes, item: `${config.siteUrl}${href(lang, '/routes/')}` },
        { '@type': 'ListItem', position: 2, name: label, item: `${config.siteUrl}${href(lang, path)}` },
      ],
    },
  ]

  if (routeFaq.length) {
    jsonld.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: routeFaq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
  }

  return page(ctx, { title, description, path, body, jsonld })
}
