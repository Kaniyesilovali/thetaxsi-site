import { esc, page } from './layout.mjs'
import { config } from '../site.config.mjs'
import { routes } from '../data/routes.mjs'
import { routeLabel } from './home.mjs'

export function renderBook(ctx) {
  const { lang, dict, xtra } = ctx
  const t = dict.book
  const f = xtra.bookForm

  const routeOptions = routes
    .map(
      (r) =>
        `<option value="${r.slug}" data-label="${esc(routeLabel(r, lang))}" data-price="${r.price}" data-roundtrip="${r.roundTrip}">${esc(routeLabel(r, lang))} — €${r.price}</option>`,
    )
    .join('\n          ')

  const field = (inner) => `<div class="flex flex-col gap-2">${inner}</div>`
  const label = (forId, text) => `<label for="${forId}" class="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">${esc(text)}</label>`
  const inputCls = 'h-12 border border-ink/15 bg-white px-4 text-sm outline-none transition-colors focus:border-gold-dark'

  const body = `
<section class="relative bg-night py-20 text-white lg:py-24">
  <div class="grain"></div>
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
    <p class="eyebrow text-gold">${esc(t.hero.eyebrow)}</p>
    <h1 class="mt-4 font-display text-5xl font-light italic sm:text-6xl">${esc(t.hero.title)}</h1>
    <p class="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">${esc(t.hero.subtitle)}</p>
  </div>
</section>

<section class="bg-cream py-16 lg:py-24">
  <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_380px]">
    <form id="booking-form" class="grid gap-6" novalidate>
      <h2 class="font-display text-3xl font-light italic">${esc(t.route.heading)}</h2>
      ${field(`${label('bf-route', f.routeLabel)}
        <select id="bf-route" name="route" required class="${inputCls}">
          <option value="">${esc(f.selectRoute)}</option>
          ${routeOptions}
        </select>`)}
      <div class="grid gap-6 sm:grid-cols-3">
        ${field(`${label('bf-date', f.dateLabel)}<input id="bf-date" name="date" type="date" required class="${inputCls}">`)}
        ${field(`${label('bf-time', f.timeLabel)}<input id="bf-time" name="time" type="time" class="${inputCls}">`)}
        ${field(`${label('bf-pax', f.passengersLabel)}
          <select id="bf-pax" name="pax" class="${inputCls}">
            ${[1, 2, 3, 4, 5, 6, 7].map((n) => `<option value="${n}">${n}</option>`).join('')}
          </select>`)}
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <label class="flex cursor-pointer items-center justify-between gap-4 border border-ink/15 bg-white px-4 py-3">
          <span>
            <span class="block text-sm font-medium">${esc(f.roundTripLabel)}</span>
            <span class="mt-0.5 block text-xs text-clay">${esc(t.route.roundTripDesc)}</span>
          </span>
          <input type="checkbox" id="bf-roundtrip" name="roundtrip" class="size-4 accent-gold-dark">
        </label>
        <label class="flex cursor-pointer items-center justify-between gap-4 border border-ink/15 bg-white px-4 py-3">
          <span class="block text-sm font-medium">${esc(f.childSeatLabel)}</span>
          <input type="checkbox" id="bf-childseat" name="childseat" class="size-4 accent-gold-dark">
        </label>
      </div>

      <h2 class="mt-6 font-display text-3xl font-light italic">${esc(t.details.heading)}</h2>
      <div class="grid gap-6 sm:grid-cols-2">
        ${field(`${label('bf-name', f.nameLabel)}<input id="bf-name" name="name" type="text" required autocomplete="name" class="${inputCls}">`)}
        ${field(`${label('bf-phone', f.phoneLabel)}<input id="bf-phone" name="phone" type="tel" required autocomplete="tel" placeholder="${esc(t.details.phonePlaceholder)}" class="${inputCls}">`)}
      </div>
      ${field(`${label('bf-notes', f.notesLabel)}<textarea id="bf-notes" name="notes" rows="3" placeholder="${esc(f.notesPlaceholder)}" class="border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-dark"></textarea>`)}

      <p id="bf-error" class="hidden text-sm text-red-700">${esc(f.validation)}</p>

      <button type="submit" class="inline-flex h-14 items-center justify-center gap-3 bg-[#25d366] px-10 text-xs font-medium uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#1faa52]">
        ${esc(f.submit)}
      </button>
      <p class="text-xs leading-relaxed text-clay">${esc(f.submitNote)}</p>
      <div id="bf-success" class="hidden border border-gold-dark/40 bg-gold-pale/40 p-5 text-sm leading-relaxed text-ink">${esc(f.success)}</div>
    </form>

    <aside class="h-fit border border-ink/10 bg-white p-7 lg:sticky lg:top-28">
      <p class="eyebrow text-gold-dark">${esc(t.summary.title)}</p>
      <div id="bf-summary" class="mt-6 flex flex-col gap-3 text-sm text-clay">
        <p id="bf-summary-empty">${esc(t.summary.selectRoute)}</p>
        <div id="bf-summary-body" class="hidden flex-col gap-3">
          <p id="bf-summary-route" class="font-medium text-ink"></p>
          <div class="flex items-center justify-between border-t border-ink/10 pt-3">
            <span id="bf-summary-trip-label"></span>
            <span id="bf-summary-price" class="kicker text-3xl text-gold-dark"></span>
          </div>
          <p class="text-xs">${esc(t.summary.confirmationNote)}</p>
        </div>
      </div>
      <div class="mt-8 border-t border-ink/10 pt-6 text-sm">
        <p class="text-xs uppercase tracking-[0.18em] text-clay">${esc(f.orCall)}</p>
        <a href="tel:${config.phoneHref}" class="mt-3 block font-medium text-ink transition-colors hover:text-gold-dark">${config.phoneDisplay}</a>
        <a href="https://wa.me/${config.whatsapp}" target="_blank" rel="noopener noreferrer" class="mt-1 block text-gold-dark transition-colors hover:text-ink">WhatsApp</a>
      </div>
    </aside>
  </div>
</section>

<script>
window.__TAXSI_BOOK = {
  oneWayLabel: ${JSON.stringify(dict.book.summary.oneWay)},
  returnLabel: ${JSON.stringify(dict.book.summary.return)},
  waMessage: ${JSON.stringify(xtra.bookForm.waMessage)},
  waRoundTrip: ${JSON.stringify(xtra.bookForm.waRoundTrip)},
  waChildSeat: ${JSON.stringify(xtra.bookForm.waChildSeat)},
  waNotes: ${JSON.stringify(xtra.bookForm.waNotes)},
  lang: ${JSON.stringify(lang)},
}
</script>`

  return page(ctx, {
    title: t.meta.title,
    description: t.meta.description,
    path: '/book/',
    body,
  })
}
