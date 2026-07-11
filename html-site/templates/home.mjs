import { esc, icons, page } from './layout.mjs'
import { config } from '../site.config.mjs'
import { routes } from '../data/routes.mjs'
import { locationGroups } from '../data/locations.mjs'

const photo = (id, w) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`
const pexels = (id, w) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`
// Girne (Kyrenia) limanı — tarihi kale surları ve derin Akdeniz. Pexels, ücretsiz ticari lisans.
export const heroPhoto = pexels(16531858, 1920)
// Sırayla: E200/E220, E220d/E300, Vito, V-Class VIP, Sprinter — dict fleet.items ile aynı sıra
const fleetPhotos = [
  pexels(26690693, 900),
  pexels(19758544, 900),
  pexels(17455625, 900),
  pexels(17455632, 900),
  pexels(19871521, 900),
]
const fleetPax = [3, 3, 8, 6, 16]
const corpPhoto = photo('1436491865332-7a61a109cc05', 1200)

export function routeLabel(r, lang) {
  return `${r.from[lang]} → ${r.to[lang]}`
}

// Filtrelenen combobox kabuğu — main.js'teki [data-loc-combo] init'i ile çalışır.
// Gizli input canonical değeri taşır; görünen input sadece arama/etiket içindir.
// `groups`: [{ id, label, options: [{ value, label }] }]
function comboboxHtml(groups, { id, name, placeholder, inputCls, noResults }) {
  const groupsHtml = groups
    .map(
      (g) => `<div data-combo-group="${esc(g.id)}">
        <p class="px-4 pt-3 pb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sea">${esc(g.label)}</p>
        ${g.options
          .map(
            (o) =>
              `<button type="button" data-combo-option data-value="${esc(o.value)}" data-group="${esc(g.id)}" class="block w-full px-4 py-2 text-left text-sm text-white/90 transition-colors hover:bg-sea/15 hover:text-sea-pale">${esc(o.label)}</button>`,
          )
          .join('\n        ')}
      </div>`,
    )
    .join('\n      ')

  return `<div class="relative" data-loc-combo>
      <input type="hidden" name="${name}">
      <input id="${id}" type="text" role="combobox" aria-expanded="false" aria-autocomplete="list" autocomplete="off" placeholder="${esc(placeholder)}" class="${inputCls}">
      <div data-combo-list class="absolute inset-x-0 top-full z-30 mt-2 hidden max-h-56 min-w-full overflow-y-auto border border-white/10 bg-navy-soft pb-2 shadow-xl shadow-black/40 [color-scheme:dark]" role="listbox">
      ${groupsHtml}
      <p data-combo-empty class="hidden px-4 py-3 text-sm text-white/50">${esc(noResults)}</p>
      </div>
    </div>`
}

// Nereden/Nereye combobox'ı — hero ve book formu paylaşır.
export function locationComboboxHtml(lang, opts) {
  const groups = locationGroups.map((g) => ({
    id: g.id,
    label: g.label[lang],
    options: g.locations.map((l) => ({ value: l.value, label: l.label[lang] })),
  }))
  return comboboxHtml(groups, opts)
}

// Otel combobox'ı — sadece book formunda. Grup kimliği = otel bölgesinin canonical
// değeri; bölge seçilince main.js setGroups ile listeyi o bölgenin otellerine daraltır.
export function hotelComboboxHtml(lang, opts) {
  const groups = locationGroups
    .filter((g) => g.id === 'hotels')
    .flatMap((g) =>
      g.locations
        .filter((l) => l.hotels && l.hotels.length)
        .map((l) => ({
          id: l.value,
          label: l.label[lang],
          options: l.hotels.map((h) => ({ value: h, label: h })),
        })),
    )
  return comboboxHtml(groups, opts)
}

// Noktadan noktaya ipucu satırı — Nereden/Nereye alanlarının her Kıbrıs noktasını
// (havalimanı, otel, şehir merkezi) kabul ettiğini anlatır. Hero ve book formu paylaşır.
export function journeyHintHtml(picker, { tone } = {}) {
  const cls = tone === 'light' ? 'text-slate' : 'text-white/45'
  return `<p class="text-[11px] leading-relaxed ${cls}">${esc(picker.hint)}</p>`
}

// Tek yön / gidiş-dönüş radyo satırı — hero search kartında. Seçim GET ile /book/
// sayfasına "roundtrip" olarak taşınır; tek yön boş değer, gidiş-dönüş "yes".
// Boş değer book formundaki checkbox'ı işaretsiz, "yes" işaretli bırakır.
export function tripTypeHtml(picker) {
  const t = picker.trip
  const opts = [
    ['', t.oneWay, true],
    ['yes', t.roundTrip, false],
  ]
  return `<fieldset data-trip-type class="flex flex-wrap items-center gap-x-6 gap-y-2">
      <legend class="sr-only">${esc(t.aria)}</legend>
      ${opts
        .map(
          ([value, label, checked]) =>
            `<label class="inline-flex cursor-pointer items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-white/55">
        <input type="radio" name="roundtrip" value="${value}"${checked ? ' checked' : ''} class="peer sr-only">
        <span class="grid size-4 place-items-center rounded-full border border-white/30 transition-colors peer-checked:border-sea peer-checked:bg-sea peer-focus-visible:ring-2 peer-focus-visible:ring-sea/60">
          <span class="size-1.5 rounded-full bg-white opacity-0 transition-opacity peer-checked:opacity-100"></span>
        </span>
        <span class="transition-colors peer-checked:text-white">${esc(label)}</span>
      </label>`,
        )
        .join('\n      ')}
    </fieldset>`
}

export function renderHome(ctx) {
  const { lang, dict, xtra } = ctx
  const t = dict.homepage
  const base = `/${lang}`

  const heroComboCls = 'w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40'
  const fromCombo = locationComboboxHtml(lang, {
    id: 'hp-from',
    name: 'from',
    placeholder: t.hero.picker.selectFrom,
    inputCls: heroComboCls,
    noResults: t.hero.picker.noResults,
  })
  const toCombo = locationComboboxHtml(lang, {
    id: 'hp-to',
    name: 'to',
    placeholder: t.hero.picker.selectTo,
    inputCls: heroComboCls,
    noResults: t.hero.picker.noResults,
  })

  const body = `
<!-- HERO -->
<section class="relative isolate bg-navy text-white">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
    <img src="${heroPhoto}" alt="" fetchpriority="high" class="size-full object-cover object-center opacity-55">
    <div class="absolute inset-0" style="background:linear-gradient(180deg,rgba(11,36,54,.55) 0%,rgba(11,36,54,.4) 35%,rgba(11,36,54,.85) 75%,rgba(11,36,54,1) 100%)"></div>
    <div class="absolute inset-0 mix-blend-screen" style="background:radial-gradient(65% 55% at 82% 62%,rgba(31,182,201,.32),rgba(31,182,201,0) 62%);animation:glow-drift 14s ease-in-out infinite"></div>
    <div class="absolute inset-x-0 top-[64%] h-px bg-gradient-to-r from-transparent via-sea/35 to-transparent"></div>
  </div>
  <div class="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-between gap-16 px-4 pt-32 pb-12 sm:px-6 sm:pt-36 lg:min-h-[92vh] lg:gap-24 lg:pt-44 lg:pb-16">
    <div class="max-w-3xl">
      <p class="eyebrow text-sea opacity-0" style="animation:reveal 900ms cubic-bezier(.16,1,.3,1) forwards">${esc(t.hero.eyebrow)}</p>
      <h1 class="mt-6 font-display text-[clamp(2.4rem,10vw,5.5rem)] font-light leading-[0.95] tracking-tight text-balance text-white opacity-0 sm:text-7xl lg:text-[7.5rem]" style="animation:reveal 1100ms 120ms cubic-bezier(.16,1,.3,1) forwards">${esc(t.hero.title)}</h1>
      <p class="mt-8 max-w-xl text-base font-light leading-relaxed text-white/65 opacity-0 sm:text-lg" style="animation:reveal 1100ms 280ms cubic-bezier(.16,1,.3,1) forwards">${esc(t.hero.subtitle)}</p>
    </div>
    <div class="relative opacity-0" style="animation:reveal 1100ms 480ms cubic-bezier(.16,1,.3,1) forwards">
      <div class="mb-8 h-px w-24 origin-left bg-sea" style="animation:scale-x 800ms 760ms ease-out both"></div>
      <form action="${base}/book/" method="get" class="max-w-4xl">
        <div class="border border-white/15 bg-navy/85 backdrop-blur">
          <div class="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-white/10 px-5 py-4">
            ${tripTypeHtml(t.hero.picker)}
            ${journeyHintHtml(t.hero.picker)}
          </div>
          <div class="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.4fr_1fr_1fr_auto]">
          <div class="flex flex-col gap-1 bg-navy/90 px-5 py-4">
            <label for="hp-from" class="eyebrow text-[9px] text-sea">${esc(t.hero.picker.from)}</label>
            ${fromCombo}
          </div>
          <div class="flex flex-col gap-1 bg-navy/90 px-5 py-4">
            <label for="hp-to" class="flex items-center gap-1.5 eyebrow text-[9px] text-sea"><span aria-hidden="true">→</span>${esc(t.hero.picker.to)}</label>
            ${toCombo}
          </div>
          <label class="flex flex-col gap-1 bg-navy/90 px-5 py-4">
            <span class="eyebrow text-[9px] text-sea">${esc(t.hero.picker.date)}</span>
            <input type="date" name="date" class="bg-transparent text-sm text-white outline-none [color-scheme:dark]">
          </label>
          <label class="flex flex-col gap-1 bg-navy/90 px-5 py-4">
            <span class="eyebrow text-[9px] text-sea">${esc(t.hero.picker.passengers)}</span>
            <select name="pax" class="bg-transparent text-sm text-white outline-none [color-scheme:dark] [&>option]:bg-navy-soft [&>option]:text-white">
              ${[1, 2, 3, 4, 5, 6, 7].map((n) => `<option value="${n}">${n} ${n === 1 ? esc(t.hero.picker.passengerSingle) : esc(t.hero.picker.passengerPlural)}</option>`).join('')}
            </select>
          </label>
          <button type="submit" class="flex items-center justify-center bg-sea px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-navy transition-colors hover:bg-sea-deep">${esc(t.hero.picker.submit)}</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

<!-- TRUST STRIP -->
<section class="border-b border-ink/10 bg-haze">
  <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
    ${t.trust.items
      .map(
        (item) => `
    <div>
      <p class="kicker text-2xl text-sea-deep">${esc(item.no)}</p>
      <h3 class="mt-3 text-sm font-medium uppercase tracking-[0.14em]">${esc(item.title)}</h3>
      <p class="mt-2 text-sm leading-relaxed text-slate">${esc(item.desc)}</p>
    </div>`,
      )
      .join('')}
  </div>
</section>

<!-- WHY -->
<section class="relative bg-navy py-24 text-white lg:py-32">
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
    <p class="eyebrow text-sea">${esc(t.why.eyebrow)}</p>
    <h2 class="mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">${esc(t.why.title)}</h2>
    <div class="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
      ${t.why.items
        .map(
          (item) => `
      <div class="border-t border-white/15 pt-6">
        <h3 class="font-display text-2xl font-medium text-sea-pale">${esc(item.phrase)}</h3>
        <p class="mt-3 max-w-md text-sm leading-relaxed text-white/55">${esc(item.desc)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- FLEET -->
<section class="bg-mist py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <p class="eyebrow text-sea-deep">${esc(t.fleet.eyebrow)}</p>
    <h2 class="mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">${esc(t.fleet.title)}</h2>
    <div class="mt-16 grid gap-8 md:grid-cols-3">
      ${t.fleet.items
        .map(
          (item, i) => `
      <article class="group border border-ink/10 bg-white">
        <div class="relative aspect-[4/3] overflow-hidden bg-navy">
          <img src="${fleetPhotos[i]}" alt="${esc(item.name)}" loading="lazy" class="size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105">
          <p class="pointer-events-none absolute bottom-3 left-5 flex items-baseline gap-1.5 font-mono text-5xl font-medium tabular-nums text-sea-pale" style="text-shadow:0 2px 16px rgba(0,0,0,.65)">${fleetPax[i]}<span class="font-sans text-[10px] uppercase tracking-[0.24em] text-white/85">${esc(t.hero.picker.passengerPlural)}</span></p>
        </div>
        <div class="p-6">
          <h3 class="font-display text-2xl font-medium">${esc(item.name)}</h3>
          <p class="mt-1 text-[11px] uppercase tracking-[0.18em] text-sea-deep">${esc(item.capacity)}</p>
          <p class="mt-3 text-sm leading-relaxed text-slate">${esc(item.desc)}</p>
        </div>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- ROUTES PREVIEW -->
<section class="border-t border-ink/10 bg-haze py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p class="eyebrow text-sea-deep">${esc(t.routes.eyebrow)}</p>
        <h2 class="mt-4 font-display text-4xl font-medium sm:text-5xl">${esc(t.routes.title)}</h2>
      </div>
      <a href="${base}/routes/" class="text-xs uppercase tracking-[0.22em] text-sea-deep transition-colors hover:text-ink">${esc(t.routes.viewAll)}</a>
    </div>
    <div class="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
      ${routes
        .map(
          (r) => `
      <a href="${base}/routes/${r.slug}/" class="group bg-mist p-6 transition-colors hover:bg-white">
        <p class="text-sm font-medium leading-snug">${esc(routeLabel(r, lang))}</p>
        <p class="mt-4 flex items-baseline gap-2">
          <span class="text-[10px] uppercase tracking-[0.2em] text-slate">${esc(t.routes.from)}</span>
          <span class="kicker text-3xl text-sea-deep">€${r.price}</span>
        </p>
      </a>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="bg-mist py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <p class="eyebrow text-sea-deep">${esc(t.howItWorks.eyebrow)}</p>
    <h2 class="mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">${esc(t.howItWorks.title)}</h2>
    <div class="mt-16 grid gap-10 md:grid-cols-3">
      ${t.howItWorks.steps
        .map(
          (s, i) => `
      <div class="border-t border-ink/15 pt-6">
        <p class="kicker text-2xl text-sea-deep">0${i + 1}</p>
        <h3 class="mt-3 text-sm font-medium uppercase tracking-[0.14em]">${esc(s.title)}</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate">${esc(s.desc)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- REVIEWS -->
<section class="relative bg-navy py-24 text-white lg:py-32">
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
    <p class="eyebrow text-sea">${esc(t.reviews.eyebrow)}</p>
    <h2 class="mt-4 font-display text-4xl font-medium sm:text-5xl">${esc(t.reviews.title)}</h2>
    <div class="mt-16 grid gap-10 md:grid-cols-3">
      ${t.reviews.items
        .map(
          (r) => `
      <figure class="border-t border-white/15 pt-6">
        <blockquote class="font-display text-xl font-medium leading-relaxed text-white/85">“${esc(r.quote)}”</blockquote>
        <figcaption class="mt-5 text-xs uppercase tracking-[0.18em] text-white/45">${esc(r.author)} · ${esc(r.origin)}<span class="mt-1 block text-sea/70">${esc(r.context)}</span></figcaption>
      </figure>`,
        )
        .join('')}
    </div>
    <div class="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
      ${t.trustedBy.items
        .map(
          (s) => `
      <div>
        <p class="kicker text-4xl text-sea">${esc(s.value)}</p>
        <p class="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">${esc(s.label)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- CORPORATE -->
<section class="border-b border-ink/10 bg-haze py-20 lg:py-28">
  <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
    <img src="${corpPhoto}" alt="" loading="lazy" class="aspect-[4/3] w-full border border-ink/10 object-cover">
    <div class="flex flex-wrap items-center justify-between gap-10">
      <div class="max-w-xl">
        <p class="eyebrow text-sea-deep">${esc(t.corporate.eyebrow)}</p>
        <h2 class="mt-4 font-display text-3xl font-medium sm:text-4xl">${esc(t.corporate.title)}</h2>
        <p class="mt-4 text-sm leading-relaxed text-slate">${esc(t.corporate.body)}</p>
      </div>
      <a href="${base}/contact/" class="inline-flex h-12 items-center border border-ink px-7 text-xs font-medium uppercase tracking-[0.24em] transition-colors hover:bg-ink hover:text-mist">${esc(t.corporate.cta)}</a>
    </div>
  </div>
</section>

<!-- CTA BANNER -->
<section class="relative bg-navy py-24 text-center text-white lg:py-32">
  <div class="relative mx-auto max-w-3xl px-4 sm:px-6">
    <h2 class="font-display text-4xl font-medium sm:text-5xl">${esc(t.cta.title)}</h2>
    <p class="mt-4 text-sm text-white/55">${esc(t.cta.subtitle)}</p>
    <a href="${base}/book/" class="mt-10 inline-flex h-13 items-center bg-sea px-10 text-xs font-medium uppercase tracking-[0.28em] text-navy transition-colors hover:bg-sea-deep">${esc(t.cta.button)}</a>
  </div>
</section>`

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: config.brand,
      url: `${config.siteUrl}/${lang}/`,
      telephone: config.phoneHref,
      email: config.email,
      areaServed: 'Cyprus',
      provider: {
        '@type': 'LocalBusiness',
        name: config.brand,
        telephone: config.phoneHref,
        address: { '@type': 'PostalAddress', addressCountry: 'CY' },
      },
    },
  ]

  return page(ctx, {
    title: t.meta.title,
    description: t.meta.description,
    path: '/',
    body,
    jsonld,
  })
}
