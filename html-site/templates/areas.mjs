import { esc, fmt, icons, page } from './layout.mjs'
import { href } from '../data/slugs.mjs'
import { config } from '../site.config.mjs'
import { allRoutes } from '../data/routes.mjs'
import { posts } from '../data/posts.mjs'
import { routeLabel } from './home.mjs'
import { businessRef } from '../data/schema.mjs'

// Bölge (hizmet alanı) sayfası — "güzelyurt taksi", "lefke taksi durağı",
// "güzelyurt taksi numarası" gibi güzergah içermeyen yerel sorguların hedefi.
//
// Rota sayfasından iki farkı var ve ikisi de bilinçli:
//  1) Birincil eylem rezervasyon formu değil TELEFON. Aranan şey bir fiyat tablosu
//     değil, bölgede gerçekten araç çıkarabilen bir numara.
//  2) Yapısal veri TaxiService + areaServed; iletişim bilgisi site.config.mjs'teki
//     regionalContact'tan gelir, sayfa metninde tekrarlanmaz.
export function renderAreaDetail(ctx, area) {
  const { lang, xtra } = ctx
  const t = area[lang]
  const ad = xtra.areaDetail
  const contact = config.regionalContact
  const path = `/areas/${area.slugs[config.defaultLang]}/`
  const vars = { name: contact.name, phone: contact.phoneDisplay }

  // Bu bölgeye ucu değen tüm güzergahlar (gidiş + dönüş). Fiyatı yayınlanmış
  // olanlar rakamla, `quote: true` olanlar "fiyat için arayın" ile listelenir.
  const areaRoutes = allRoutes.filter((r) => r.fromValue === area.value || r.toValue === area.value)
  const guides = area.guides.map((slug) => posts.find((p) => p.slug === slug)).filter(Boolean)

  const callBlock = `
    <div class="mt-10 flex flex-col gap-4 rounded-3xl border border-sea/25 bg-sea/5 p-6 sm:max-w-xl sm:p-7">
      <p class="text-[13px] font-semibold text-ink">${esc(t.callHeading)}</p>
      <a href="tel:${contact.phoneHref}" class="text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-tight text-ink transition-colors hover:text-sea">${esc(contact.phoneDisplay)}</a>
      <p class="text-[15px] leading-relaxed text-slate">${esc(fmt(t.callNote, vars))}</p>
      <div class="flex flex-wrap gap-2">
        <a href="tel:${contact.phoneHref}" class="inline-flex h-11 items-center gap-2 rounded-full bg-sea px-6 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep"><span class="[&>svg]:size-4">${icons.phone}</span>${esc(ad.callCta)}</a>
        <a href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener noreferrer" class="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-paper px-6 text-[14px] font-semibold text-ink transition-colors hover:border-sea hover:text-sea"><span class="[&>svg]:size-4">${icons.whatsapp}</span>${esc(ad.whatsappCta)}</a>
      </div>
    </div>`

  const body = `
<section class="relative overflow-hidden border-b border-line bg-paper">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <div class="absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(18,165,188,.06),transparent 70%)"></div>
  </div>
  <div class="relative mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 lg:pt-16 lg:pb-20">
    <nav class="text-[13px] text-slate" aria-label="Breadcrumb">
      <a href="${href(lang, '/')}" class="transition-colors hover:text-ink">${esc(xtra.nav.home)}</a>
      <span class="mx-2 text-ink/25">/</span>
      <span class="text-ink">${esc(t.title)}</span>
    </nav>
    <p class="mt-8 text-sm font-medium text-sea">${esc(t.eyebrow)}</p>
    <h1 class="mt-3 max-w-4xl text-[clamp(2.2rem,6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-ink">${esc(t.title)}</h1>
    <p class="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate">${esc(t.lead)}</p>
    ${callBlock}
    <a href="${href(lang, '/book/')}?from=${encodeURIComponent(area.value)}" class="mt-8 inline-flex h-12 items-center rounded-full border border-line bg-paper px-8 text-[14px] font-semibold text-ink transition-colors hover:border-sea hover:text-sea">${esc(ad.bookCta)}</a>
  </div>
</section>

<section class="border-b border-line bg-paper py-16 lg:py-20" aria-labelledby="area-services">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <h2 id="area-services" class="text-3xl font-semibold tracking-tight text-ink">${esc(t.sectionsTitle)}</h2>
    <div class="mt-10 grid gap-4 md:grid-cols-2">
      ${t.sections
        .map(
          (s) => `
      <div class="rounded-3xl border border-line bg-cloud p-7">
        <h3 class="text-lg font-semibold text-ink">${esc(s.title)}</h3>
        <p class="mt-3 text-[15px] leading-relaxed text-slate">${esc(s.body)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="bg-fog py-20 lg:py-24" aria-labelledby="area-local">
  <div class="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
    <div>
      <h2 id="area-local" class="text-3xl font-semibold tracking-tight text-ink">${esc(t.localTitle)}</h2>
      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate">${esc(t.localNote)}</p>
      <ul class="mt-8 flex flex-col gap-3">
        ${t.local
          .map(
            (item) => `
        <li class="flex items-start gap-3 rounded-2xl border border-line bg-paper px-5 py-4 text-[15px] leading-relaxed text-slate">
          <span class="mt-0.5 shrink-0 text-sea">${icons.pin}</span><span>${esc(item)}</span>
        </li>`,
          )
          .join('')}
      </ul>
    </div>
    <div>
      <h2 class="text-3xl font-semibold tracking-tight text-ink">${esc(t.routesTitle)}</h2>
      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate">${esc(t.routesNote)}</p>
      <div class="mt-8 grid gap-3">
        ${areaRoutes
          .map(
            (r) => `
        <a href="${href(lang, `/routes/${r.slug}/`)}" class="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-5 transition-shadow duration-300 hover:shadow-card">
          <span class="text-[15px] font-medium leading-snug text-ink">${esc(routeLabel(r, lang))}</span>
          <span class="shrink-0 text-right">
            ${
              r.quote
                ? `<span class="text-[14px] font-semibold text-sea">${esc(xtra.routeDetail.quoteCard)}</span>`
                : `<span class="text-2xl font-semibold tabular-nums text-sea">${config.currencySymbol}${r.price}</span>`
            }
          </span>
        </a>`,
          )
          .join('')}
      </div>
    </div>
  </div>
</section>

${
  guides.length
    ? `
<section class="border-t border-line bg-paper py-16 lg:py-20" aria-labelledby="area-guides">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <h2 id="area-guides" class="text-3xl font-semibold tracking-tight text-ink">${esc(t.guidesTitle)}</h2>
    <div class="mt-8 grid gap-4 md:grid-cols-3">
      ${guides
        .map(
          (p) => `
      <a href="${href(lang, `/blog/${p.slug}/`)}" class="group flex flex-col gap-2 rounded-3xl border border-line bg-cloud p-6 transition-shadow duration-300 hover:shadow-card">
        <span class="text-[15px] font-semibold leading-snug text-ink">${esc(p.title[lang])}</span>
        <span class="text-[13px] leading-relaxed text-slate">${esc(p.description[lang])}</span>
      </a>`,
        )
        .join('')}
    </div>
  </div>
</section>`
    : ''
}

<section class="border-t border-line bg-paper py-20 lg:py-24" aria-labelledby="area-faq">
  <div class="mx-auto max-w-3xl px-5 sm:px-8">
    <h2 id="area-faq" class="text-3xl font-semibold tracking-tight text-ink">${esc(t.faqTitle)}</h2>
    <div class="mt-10 overflow-hidden rounded-3xl border border-line bg-cloud">
      ${t.faq
        .map(
          (item) => `
      <div class="border-b border-line px-6 py-5 last:border-b-0">
        <h3 class="text-[15px] font-medium text-ink">${esc(fmt(item.q, vars))}</h3>
        <p class="mt-2 text-[15px] leading-relaxed text-slate">${esc(fmt(item.a, vars))}</p>
      </div>`,
        )
        .join('')}
    </div>
    <div class="mt-10 flex flex-wrap items-center gap-3">
      <a href="tel:${contact.phoneHref}" class="inline-flex h-12 items-center gap-2 rounded-full bg-sea px-7 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep"><span class="[&>svg]:size-4">${icons.phone}</span>${esc(contact.phoneDisplay)}</a>
      <a href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener noreferrer" class="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-paper px-7 text-[14px] font-semibold text-ink transition-colors hover:border-sea hover:text-sea"><span class="[&>svg]:size-4">${icons.whatsapp}</span>${esc(ad.whatsappCta)}</a>
    </div>
  </div>
</section>`

  // TaxiService — sayfanın konusu bir güzergah değil, bir yerde çalışan hizmet.
  // Telefon burada BASILIR (rota sayfalarının aksine): sorgu zaten numarayı arıyor.
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: `${contact.name} — ${t.title}`,
      serviceType: t.title,
      provider: businessRef,
      areaServed: { '@type': 'City', name: area.id === 'lefke' ? 'Lefke' : 'Güzelyurt' },
      availableChannel: {
        '@type': 'ServiceChannel',
        servicePhone: { '@type': 'ContactPoint', telephone: contact.phoneHref, contactType: 'reservations' },
        serviceUrl: `${config.siteUrl}${href(lang, path)}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: xtra.nav.home, item: `${config.siteUrl}${href(lang, '/')}` },
        { '@type': 'ListItem', position: 2, name: t.title, item: `${config.siteUrl}${href(lang, path)}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((item) => ({
        '@type': 'Question',
        name: fmt(item.q, vars),
        acceptedAnswer: { '@type': 'Answer', text: fmt(item.a, vars) },
      })),
    },
  ]

  return page(ctx, {
    title: fmt(t.metaTitle, vars),
    description: fmt(t.metaDescription, vars),
    path,
    body,
    jsonld,
    // Sayfanın kendi SSS'i var; ortak SSS bloğu eklenirse iki FAQPage düğümü çıkar.
    faq: false,
  })
}
