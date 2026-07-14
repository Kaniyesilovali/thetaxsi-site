import { esc, icons, page } from './layout.mjs'
import { config } from '../site.config.mjs'
import { routes } from '../data/routes.mjs'
import { locationGroups } from '../data/locations.mjs'

const photo = (id, w) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`
const pexels = (id, w) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`
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

// Ana sayfaya özel ince çizgi ikonları (trust şeridi + yıldız)
const homeIcons = {
  greet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="size-5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  plane: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="size-5" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5S18 3 16.5 4.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="size-5" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-4" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.6-5 4.4 1.5 6.5-6-3.4-6 3.4 1.5-6.5-5-4.4 6.6-.6z"/></svg>`,
}
const trustIcons = ['greet', 'plane', 'tag']

export function routeLabel(r, lang) {
  return `${r.from[lang]} → ${r.to[lang]}`
}

// Paylaşılan form-kontrol jetonları — sitedeki her filtre/alan aynı görünsün diye
// tek kaynak. Açık zeminli formlar (book, contact) bunları kullanır; hero kendi
// koyu bar stilini korur ama liste teması buradan gelir.
export const lightInputCls =
  'h-12 w-full rounded-xl border border-line bg-paper px-4 text-sm text-ink outline-none transition-all focus:border-sea focus:ring-2 focus:ring-sea/20 [color-scheme:light]'
export const lightSelectCls = `${lightInputCls} [&>option]:bg-white [&>option]:text-ink`
export const fieldLabelCls = 'text-xs font-medium text-slate'

// Combobox'ın liste teması — açık zeminli formda açık, hero'da koyu görünür.
const comboTheme = {
  dark: {
    list: 'rounded-2xl border border-white/10 bg-navy-soft shadow-xl shadow-black/40 [color-scheme:dark]',
    group: 'text-sea',
    option: 'text-white/90 hover:bg-sea/15 hover:text-sea-pale',
    empty: 'text-white/50',
  },
  light: {
    list: 'rounded-2xl border border-line bg-paper shadow-lift [color-scheme:light]',
    group: 'text-slate',
    option: 'text-ink hover:bg-sea/10 hover:text-sea-deep',
    empty: 'text-slate',
  },
}

// Filtrelenen combobox kabuğu — main.js'teki [data-loc-combo] init'i ile çalışır.
// Gizli input canonical değeri taşır; görünen input sadece arama/etiket içindir.
// `groups`: [{ id, label, options: [{ value, label }] }]
function comboboxHtml(groups, { id, name, placeholder, inputCls, noResults, theme = 'dark' }) {
  const th = comboTheme[theme] || comboTheme.dark
  const groupsHtml = groups
    .map(
      (g) => `<div data-combo-group="${esc(g.id)}">
        <p class="px-4 pt-3 pb-1 text-[10px] font-medium uppercase tracking-[0.18em] ${th.group}">${esc(g.label)}</p>
        ${g.options
          .map(
            (o) =>
              `<button type="button" data-combo-option data-value="${esc(o.value)}" data-group="${esc(g.id)}" class="block w-full px-4 py-2 text-left text-sm transition-colors ${th.option}">${esc(o.label)}</button>`,
          )
          .join('\n        ')}
      </div>`,
    )
    .join('\n      ')

  return `<div class="relative" data-loc-combo>
      <input type="hidden" name="${name}">
      <input id="${id}" type="text" role="combobox" aria-expanded="false" aria-autocomplete="list" autocomplete="off" placeholder="${esc(placeholder)}" class="${inputCls}">
      <div data-combo-list class="absolute inset-x-0 top-full z-30 mt-2 hidden max-h-56 min-w-full overflow-y-auto pb-2 ${th.list}" role="listbox">
      ${groupsHtml}
      <p data-combo-empty class="hidden px-4 py-3 text-sm ${th.empty}">${esc(noResults)}</p>
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
  const cls = tone === 'dark' ? 'text-white/45' : 'text-slate'
  return `<p class="text-[12px] leading-relaxed ${cls}">${esc(picker.hint)}</p>`
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
  return `<fieldset data-trip-type class="inline-flex rounded-full border border-line bg-fog p-1 text-[13px]">
      <legend class="sr-only">${esc(t.aria)}</legend>
      ${opts
        .map(
          ([value, label, checked]) =>
            `<label class="cursor-pointer">
        <input type="radio" name="roundtrip" value="${value}"${checked ? ' checked' : ''} class="peer sr-only">
        <span class="inline-flex items-center rounded-full px-4 py-1.5 font-medium text-slate transition-colors peer-checked:bg-paper peer-checked:text-ink peer-checked:shadow-sm peer-focus-visible:ring-2 peer-focus-visible:ring-sea/50">${esc(label)}</span>
      </label>`,
        )
        .join('\n      ')}
    </fieldset>`
}

export function renderHome(ctx) {
  const { lang, dict, xtra } = ctx
  const t = dict.homepage
  const base = `/${lang}`

  const heroComboCls = 'w-full bg-transparent text-[15px] font-medium text-ink outline-none placeholder:font-normal placeholder:text-ink/35'
  const fromCombo = locationComboboxHtml(lang, {
    id: 'hp-from',
    name: 'from',
    placeholder: t.hero.picker.selectFrom,
    inputCls: heroComboCls,
    noResults: t.hero.picker.noResults,
    theme: 'light',
  })
  const toCombo = locationComboboxHtml(lang, {
    id: 'hp-to',
    name: 'to',
    placeholder: t.hero.picker.selectTo,
    inputCls: heroComboCls,
    noResults: t.hero.picker.noResults,
    theme: 'light',
  })

  const ease = 'cubic-bezier(.16,1,.3,1)'
  const stars = homeIcons.star.repeat(5)

  const body = `
<!-- HERO -->
<section class="relative overflow-hidden bg-fog">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <div class="absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(18,165,188,.06),transparent 70%)"></div>
  </div>
  <div class="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 lg:pt-24 lg:pb-28">
    <div class="mx-auto max-w-3xl text-center">
      <span class="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-slate opacity-0 shadow-sm" style="animation:reveal 700ms ${ease} forwards">
        <span class="size-1.5 rounded-full bg-sea"></span>${esc(t.hero.eyebrow)}
      </span>
      <h1 class="mt-7 text-[clamp(2.6rem,7vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance text-ink opacity-0" style="animation:reveal 800ms 100ms ${ease} forwards">${esc(t.hero.title)}</h1>
      <p class="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-slate opacity-0" style="animation:reveal 800ms 240ms ${ease} forwards">${esc(t.hero.subtitle)}</p>
    </div>

    <!-- Rezervasyon kapsülü — sayfanın imza öğesi -->
    <form action="${base}/book/" method="get" class="mx-auto mt-12 max-w-4xl opacity-0" style="animation:reveal 900ms 380ms ${ease} forwards">
      <div class="rounded-[28px] border border-line bg-paper p-3 shadow-lift sm:p-4">
        <div class="flex flex-wrap items-center justify-between gap-3 px-2 pb-3 pt-1">
          ${tripTypeHtml(t.hero.picker)}
          ${journeyHintHtml(t.hero.picker)}
        </div>
        <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr_1fr_0.9fr_auto]">
          <div class="rounded-2xl bg-fog px-4 py-3 transition-all focus-within:bg-paper focus-within:ring-2 focus-within:ring-sea/30">
            <label for="hp-from" class="text-[11px] font-medium text-slate">${esc(t.hero.picker.from)}</label>
            <div class="mt-0.5">${fromCombo}</div>
          </div>
          <div class="rounded-2xl bg-fog px-4 py-3 transition-all focus-within:bg-paper focus-within:ring-2 focus-within:ring-sea/30">
            <label for="hp-to" class="flex items-center gap-1 text-[11px] font-medium text-slate"><span class="text-sea" aria-hidden="true">→</span>${esc(t.hero.picker.to)}</label>
            <div class="mt-0.5">${toCombo}</div>
          </div>
          <label class="rounded-2xl bg-fog px-4 py-3 transition-all focus-within:bg-paper focus-within:ring-2 focus-within:ring-sea/30">
            <span class="text-[11px] font-medium text-slate">${esc(t.hero.picker.date)}</span>
            <input type="date" name="date" class="mt-0.5 w-full bg-transparent text-[15px] font-medium text-ink outline-none [color-scheme:light]">
          </label>
          <label class="rounded-2xl bg-fog px-4 py-3 transition-all focus-within:bg-paper focus-within:ring-2 focus-within:ring-sea/30">
            <span class="text-[11px] font-medium text-slate">${esc(t.hero.picker.passengers)}</span>
            <select name="pax" class="mt-0.5 w-full bg-transparent text-[15px] font-medium text-ink outline-none [color-scheme:light]">
              ${[1, 2, 3, 4, 5, 6, 7].map((n) => `<option value="${n}">${n} ${n === 1 ? esc(t.hero.picker.passengerSingle) : esc(t.hero.picker.passengerPlural)}</option>`).join('')}
            </select>
          </label>
          <button type="submit" class="flex items-center justify-center gap-2 rounded-2xl bg-sea px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep">${esc(t.hero.picker.submit)}</button>
        </div>
      </div>
    </form>
  </div>
</section>

<!-- TRUST STRIP -->
<section class="border-y border-line bg-paper">
  <div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
    ${t.trust.items
      .map(
        (item, i) => `
    <div class="flex flex-col items-start gap-4">
      <span class="inline-flex size-11 items-center justify-center rounded-2xl bg-sea/10 text-sea">${homeIcons[trustIcons[i]] || homeIcons.tag}</span>
      <div>
        <h3 class="text-[15px] font-semibold text-ink">${esc(item.title)}</h3>
        <p class="mt-1.5 text-[14px] leading-relaxed text-slate">${esc(item.desc)}</p>
      </div>
    </div>`,
      )
      .join('')}
  </div>
</section>

<!-- WHY -->
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <p class="text-sm font-medium text-sea">${esc(t.why.eyebrow)}</p>
    <h2 class="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">${esc(t.why.title)}</h2>
    <div class="mt-12 grid gap-4 sm:grid-cols-2">
      ${t.why.items
        .map(
          (item) => `
      <div class="rounded-3xl border border-line bg-paper p-7">
        <h3 class="text-xl font-semibold text-ink">${esc(item.phrase)}</h3>
        <p class="mt-2 text-[15px] leading-relaxed text-slate">${esc(item.desc)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- FLEET -->
<section class="border-t border-line bg-paper py-20 lg:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <p class="text-sm font-medium text-sea">${esc(t.fleet.eyebrow)}</p>
    <h2 class="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">${esc(t.fleet.title)}</h2>
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${t.fleet.items
        .map(
          (item, i) => `
      <article class="group overflow-hidden rounded-3xl border border-line bg-cloud transition-shadow duration-300 hover:shadow-card">
        <div class="relative aspect-[4/3] overflow-hidden">
          <img src="${fleetPhotos[i]}" alt="${esc(item.name)}" loading="lazy" class="size-full object-cover transition-transform duration-700 group-hover:scale-105">
          <span class="absolute left-4 top-4 inline-flex items-center rounded-full bg-paper/90 px-3 py-1 text-[12px] font-semibold text-ink backdrop-blur">${fleetPax[i]} ${esc(t.hero.picker.passengerPlural)}</span>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold text-ink">${esc(item.name)}</h3>
          <p class="mt-1 text-[13px] font-medium text-sea">${esc(item.capacity)}</p>
          <p class="mt-3 text-[14px] leading-relaxed text-slate">${esc(item.desc)}</p>
        </div>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- ROUTES PREVIEW -->
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p class="text-sm font-medium text-sea">${esc(t.routes.eyebrow)}</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">${esc(t.routes.title)}</h2>
      </div>
      <a href="${base}/routes/" class="inline-flex items-center gap-1.5 text-sm font-medium text-sea transition-colors hover:text-sea-deep">${esc(t.routes.viewAll)}</a>
    </div>
    <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${routes
        .map(
          (r) => `
      <a href="${base}/routes/${r.slug}/" class="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-5 transition-shadow duration-300 hover:shadow-card">
        <span class="text-[15px] font-medium leading-snug text-ink">${esc(routeLabel(r, lang))}</span>
        <span class="shrink-0 text-right">
          <span class="block text-[11px] text-slate">${esc(t.routes.from)}</span>
          <span class="text-2xl font-semibold tabular-nums text-sea">€${r.price}</span>
        </span>
      </a>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="border-t border-line bg-paper py-20 lg:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <p class="text-sm font-medium text-sea">${esc(t.howItWorks.eyebrow)}</p>
    <h2 class="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">${esc(t.howItWorks.title)}</h2>
    <div class="mt-12 grid gap-10 md:grid-cols-3">
      ${t.howItWorks.steps
        .map(
          (s, i) => `
      <div>
        <span class="inline-flex size-10 items-center justify-center rounded-full bg-sea/10 text-[15px] font-semibold text-sea">${i + 1}</span>
        <h3 class="mt-5 text-lg font-semibold text-ink">${esc(s.title)}</h3>
        <p class="mt-2 text-[15px] leading-relaxed text-slate">${esc(s.desc)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- REVIEWS -->
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <p class="text-sm font-medium text-sea">${esc(t.reviews.eyebrow)}</p>
    <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">${esc(t.reviews.title)}</h2>
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      ${t.reviews.items
        .map(
          (r) => `
      <figure class="flex flex-col rounded-3xl border border-line bg-paper p-7">
        <div class="flex gap-0.5 text-sea">${stars}</div>
        <blockquote class="mt-4 text-[16px] leading-relaxed text-ink/90">“${esc(r.quote)}”</blockquote>
        <figcaption class="mt-6 text-[13px] text-slate">${esc(r.author)} · ${esc(r.origin)}<span class="mt-0.5 block font-medium text-sea">${esc(r.context)}</span></figcaption>
      </figure>`,
        )
        .join('')}
    </div>
    <div class="mt-10 grid grid-cols-2 gap-8 rounded-3xl border border-line bg-paper px-8 py-9 lg:grid-cols-4">
      ${t.trustedBy.items
        .map(
          (s) => `
      <div>
        <p class="text-3xl font-semibold tracking-tight tabular-nums text-ink">${esc(s.value)}</p>
        <p class="mt-1 text-[13px] text-slate">${esc(s.label)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<!-- CORPORATE -->
<section class="border-t border-line bg-paper py-20 lg:py-28">
  <div class="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
    <img src="${corpPhoto}" alt="" loading="lazy" class="aspect-[4/3] w-full rounded-3xl object-cover shadow-card">
    <div class="max-w-xl">
      <p class="text-sm font-medium text-sea">${esc(t.corporate.eyebrow)}</p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">${esc(t.corporate.title)}</h2>
      <p class="mt-4 text-[15px] leading-relaxed text-slate">${esc(t.corporate.body)}</p>
      <a href="${base}/contact/" class="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-ink/15 px-6 text-[14px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper">${esc(t.corporate.cta)}</a>
    </div>
  </div>
</section>

<!-- CTA BANNER — tek koyu kontrast paneli -->
<section class="bg-paper px-5 pb-20 sm:px-8 lg:pb-28">
  <div class="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-charcoal px-6 py-20 text-center text-white">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0" style="background:radial-gradient(60% 80% at 50% 0%,rgba(18,165,188,.12),transparent 70%)"></div>
    <div class="relative mx-auto max-w-2xl">
      <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">${esc(t.cta.title)}</h2>
      <p class="mx-auto mt-4 max-w-md text-[15px] text-white/60">${esc(t.cta.subtitle)}</p>
      <a href="${base}/book/" class="mt-9 inline-flex h-12 items-center rounded-full bg-sea px-8 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep">${esc(t.cta.button)}</a>
    </div>
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
    bodyClass: 'bg-paper text-ink',
  })
}
