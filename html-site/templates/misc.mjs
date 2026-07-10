import { esc, icons, page } from './layout.mjs'
import { config } from '../site.config.mjs'

function pageHero({ eyebrow, title, subtitle }) {
  return `
<section class="relative bg-night py-24 text-white lg:py-32">
  <div class="grain"></div>
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
    <p class="eyebrow text-gold">${esc(eyebrow)}</p>
    <h1 class="mt-4 font-display text-5xl font-light italic sm:text-6xl">${esc(title)}</h1>
    ${subtitle ? `<p class="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">${esc(subtitle)}</p>` : ''}
  </div>
</section>`
}

export function renderAbout(ctx) {
  const { lang, dict } = ctx
  const t = dict.about
  const base = `/${lang}`

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-cream py-20 lg:py-28">
  <div class="mx-auto grid max-w-5xl gap-16 px-4 sm:px-6">
    <div class="grid gap-12 md:grid-cols-2">
      <div>
        <h2 class="font-display text-3xl font-light italic">${esc(t.story.title)}</h2>
        <p class="mt-5 text-sm leading-relaxed text-clay">${esc(t.story.body)}</p>
      </div>
      <div>
        <h2 class="font-display text-3xl font-light italic">${esc(t.mission.title)}</h2>
        <p class="mt-5 text-sm leading-relaxed text-clay">${esc(t.mission.body)}</p>
      </div>
    </div>
    <div>
      <h2 class="font-display text-3xl font-light italic">${esc(t.values.title)}</h2>
      <div class="mt-10 grid gap-10 md:grid-cols-3">
        ${t.values.items
          .map(
            (v, i) => `
        <div class="border-t border-ink/15 pt-6">
          <p class="kicker text-2xl text-gold-dark">0${i + 1}</p>
          <h3 class="mt-3 text-sm font-medium uppercase tracking-[0.14em]">${esc(v.title)}</h3>
          <p class="mt-2 text-sm leading-relaxed text-clay">${esc(v.desc)}</p>
        </div>`,
          )
          .join('')}
      </div>
    </div>
    <a href="${base}/book/" class="inline-flex h-13 w-fit items-center bg-gold px-10 text-xs font-medium uppercase tracking-[0.28em] text-night transition-colors hover:bg-gold-dark">${esc(t.cta)}</a>
  </div>
</section>`

  return page(ctx, {
    title: `${t.title} — ${config.brand}`,
    description: t.subtitle,
    path: '/about/',
    body,
  })
}

export function renderContact(ctx) {
  const { lang, dict, xtra } = ctx
  const t = dict.contact
  const inputCls = 'h-12 border border-ink/15 bg-white px-4 text-sm outline-none transition-colors focus:border-gold-dark'

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-cream py-20 lg:py-28">
  <div class="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[380px_1fr]">
    <div>
      <p class="eyebrow text-gold-dark">${esc(t.directHeading)}</p>
      <ul class="mt-8 flex flex-col gap-6 text-sm">
        <li>
          <p class="text-[11px] uppercase tracking-[0.18em] text-clay">${esc(t.phoneLabel)}</p>
          <a href="tel:${config.phoneHref}" class="mt-1 flex items-center gap-3 font-medium transition-colors hover:text-gold-dark"><span class="text-gold-dark">${icons.phone}</span>${config.phoneDisplay}</a>
        </li>
        <li>
          <p class="text-[11px] uppercase tracking-[0.18em] text-clay">${esc(t.emailLabel)}</p>
          <a href="mailto:${config.email}" class="mt-1 flex items-center gap-3 font-medium transition-colors hover:text-gold-dark"><span class="text-gold-dark">${icons.mail}</span>${config.email}</a>
        </li>
        <li>
          <p class="text-[11px] uppercase tracking-[0.18em] text-clay">${esc(t.whatsappLabel)}</p>
          <a href="https://wa.me/${config.whatsapp}" target="_blank" rel="noopener noreferrer" class="mt-1 flex items-center gap-3 font-medium transition-colors hover:text-gold-dark"><span class="text-gold-dark">${icons.whatsapp}</span>+${config.whatsapp}</a>
        </li>
      </ul>
    </div>
    <form id="contact-form" class="grid gap-6" novalidate>
      <h2 class="font-display text-3xl font-light italic">${esc(t.form.title)}</h2>
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="flex flex-col gap-2">
          <label for="cf-name" class="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">${esc(t.form.name)}</label>
          <input id="cf-name" name="name" type="text" required autocomplete="name" class="${inputCls}">
        </div>
        <div class="flex flex-col gap-2">
          <label for="cf-email" class="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">${esc(t.form.emailField)}</label>
          <input id="cf-email" name="email" type="email" required autocomplete="email" class="${inputCls}">
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="cf-message" class="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">${esc(t.form.message)}</label>
        <textarea id="cf-message" name="message" rows="6" required class="border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-dark"></textarea>
      </div>
      <p id="cf-error" class="hidden text-sm text-red-700">${esc(t.form.error)}</p>
      <p id="cf-success" class="hidden border border-gold-dark/40 bg-gold-pale/40 p-5 text-sm text-ink">${esc(xtra.contactForm.success)}</p>
      <button type="submit" class="inline-flex h-13 w-fit items-center bg-ink px-10 text-xs font-medium uppercase tracking-[0.24em] text-cream transition-colors hover:bg-gold-dark" data-sending-label="${esc(t.form.sending)}">${esc(t.form.submit)}</button>
      <p class="text-xs text-clay">${esc(xtra.contactForm.fallback)} <a href="mailto:${config.email}" class="text-gold-dark underline">${config.email}</a></p>
    </form>
  </div>
</section>`

  return page(ctx, {
    title: `${t.title} — ${config.brand}`,
    description: t.subtitle,
    path: '/contact/',
    body,
  })
}

export function renderFaq(ctx) {
  const { dict, lang } = ctx
  const t = dict.faq

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-cream py-20 lg:py-28">
  <div class="mx-auto flex max-w-3xl flex-col gap-14 px-4 sm:px-6">
    ${t.sections
      .map(
        (section) => `
    <div>
      <h2 class="font-display text-3xl font-light italic">${esc(section.title)}</h2>
      <div class="mt-6 border-t border-ink/10">
        ${section.items
          .map(
            (item) => `
        <details class="group border-b border-ink/10">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-medium [&::-webkit-details-marker]:hidden">
            ${esc(item.q)}
            <span class="text-gold-dark transition-transform group-open:rotate-45">+</span>
          </summary>
          <p class="pb-5 text-sm leading-relaxed text-clay">${esc(item.a)}</p>
        </details>`,
          )
          .join('')}
      </div>
    </div>`,
      )
      .join('')}
  </div>
</section>`

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.sections.flatMap((s) =>
        s.items.map((i) => ({
          '@type': 'Question',
          name: i.q,
          acceptedAnswer: { '@type': 'Answer', text: i.a },
        })),
      ),
    },
  ]

  return page(ctx, {
    title: `${t.title} — ${config.brand}`,
    description: t.subtitle,
    path: '/faq/',
    body,
    jsonld,
  })
}

const legalContent = {
  privacy: {
    en: [
      ['Data we collect', 'When you make a reservation we collect your name, phone number and, where provided, flight details and notes. This is the minimum needed to operate your transfer.'],
      ['How we use it', 'Your details are used solely to arrange and operate your transfer and to contact you about it. We do not sell or share your data with third parties for marketing.'],
      ['Where it is stored', 'Reservation details are stored in our booking records and in WhatsApp conversation history. You may request deletion at any time.'],
      ['Your rights', 'You may request a copy, correction, or deletion of your personal data by contacting us at the email address below.'],
      ['Contact', 'For any privacy question, write to us — we answer in person.'],
    ],
    tr: [
      ['Topladığımız veriler', 'Rezervasyon sırasında adınızı, telefon numaranızı ve paylaşmanız halinde uçuş bilgilerinizi ve notlarınızı alırız. Bu, transferinizi gerçekleştirmek için gereken asgari bilgidir.'],
      ['Nasıl kullanıyoruz', 'Bilgileriniz yalnızca transferinizi düzenlemek ve sizinle bu konuda iletişim kurmak için kullanılır. Verileriniz pazarlama amacıyla üçüncü taraflarla paylaşılmaz veya satılmaz.'],
      ['Nerede saklanıyor', 'Rezervasyon bilgileri rezervasyon kayıtlarımızda ve WhatsApp yazışma geçmişinde tutulur. Dilediğiniz an silinmesini talep edebilirsiniz.'],
      ['Haklarınız', 'Kişisel verilerinizin bir kopyasını, düzeltilmesini veya silinmesini aşağıdaki e-posta adresinden talep edebilirsiniz.'],
      ['İletişim', 'Gizlilikle ilgili her soru için bize yazın — bizzat yanıtlıyoruz.'],
    ],
    ru: [
      ['Какие данные мы собираем', 'При бронировании мы получаем ваше имя, номер телефона и, если указано, данные рейса и примечания. Это минимум, необходимый для выполнения трансфера.'],
      ['Как мы их используем', 'Ваши данные используются исключительно для организации трансфера и связи с вами. Мы не продаём и не передаём данные третьим лицам в маркетинговых целях.'],
      ['Где они хранятся', 'Данные бронирования хранятся в наших записях и в истории переписки WhatsApp. Вы можете запросить удаление в любой момент.'],
      ['Ваши права', 'Вы можете запросить копию, исправление или удаление персональных данных, написав нам на указанный ниже адрес.'],
      ['Контакты', 'По любым вопросам конфиденциальности напишите нам — мы отвечаем лично.'],
    ],
  },
  terms: {
    en: [
      ['Reservations', 'A reservation is confirmed once we reply to your WhatsApp message or call. The quoted fare is fixed and includes tolls, parking and up to 45 minutes of airport waiting.'],
      ['Cancellations', 'Cancellations made more than 24 hours before the transfer are free of charge. Later cancellations may be charged in full.'],
      ['Delays', 'We monitor flight arrivals; delays do not change your fare. For non-airport pickups, waiting beyond 15 minutes may incur a charge.'],
      ['Payment', 'Payment is made in cash to the chauffeur on arrival unless agreed otherwise in advance.'],
      ['Liability', 'We operate with licensed drivers and insured vehicles. Our liability is limited to the fare paid for the transfer.'],
    ],
    tr: [
      ['Rezervasyonlar', 'Rezervasyon, WhatsApp mesajınıza veya aramanıza yanıt vermemizle kesinleşir. Verilen fiyat sabittir; geçiş ücretleri, otopark ve havalimanında 45 dakikaya kadar bekleme dahildir.'],
      ['İptaller', 'Transferden 24 saatten daha önce yapılan iptaller ücretsizdir. Daha geç iptallerde ücretin tamamı tahsil edilebilir.'],
      ['Rötarlar', 'Uçuşları takip ediyoruz; rötar fiyatı değiştirmez. Havalimanı dışı alımlarda 15 dakikayı aşan bekleme ücrete tabi olabilir.'],
      ['Ödeme', 'Önceden aksi kararlaştırılmadıkça ödeme, varışta şoföre nakit olarak yapılır.'],
      ['Sorumluluk', 'Lisanslı şoförler ve sigortalı araçlarla çalışıyoruz. Sorumluluğumuz transfer için ödenen ücretle sınırlıdır.'],
    ],
    ru: [
      ['Бронирование', 'Бронь считается подтверждённой после нашего ответа на ваше сообщение в WhatsApp или звонок. Цена фиксированная и включает платные дороги, парковку и до 45 минут ожидания в аэропорту.'],
      ['Отмена', 'Отмена более чем за 24 часа до трансфера бесплатна. При более поздней отмене может взиматься полная стоимость.'],
      ['Задержки', 'Мы отслеживаем прилёты; задержка рейса не меняет цену. При подаче не из аэропорта ожидание свыше 15 минут может оплачиваться дополнительно.'],
      ['Оплата', 'Оплата производится наличными водителю по прибытии, если заранее не согласовано иное.'],
      ['Ответственность', 'Мы работаем с лицензированными водителями и застрахованными автомобилями. Наша ответственность ограничена стоимостью трансфера.'],
    ],
  },
}

export function renderLegal(ctx, kind) {
  const { lang, dict } = ctx
  const t = dict[kind]
  const sections = legalContent[kind][lang]

  const body = `
${pageHero({ eyebrow: config.brand, title: t.title, subtitle: t.lastUpdated })}
<section class="bg-cream py-20 lg:py-28">
  <div class="mx-auto flex max-w-3xl flex-col gap-10 px-4 sm:px-6">
    ${sections
      .map(
        ([h, p], i) => `
    <div class="border-t border-ink/10 pt-8">
      <h2 class="font-display text-2xl font-light italic">${i + 1}. ${esc(h)}</h2>
      <p class="mt-3 text-sm leading-relaxed text-clay">${esc(p)}</p>
    </div>`,
      )
      .join('')}
  </div>
</section>`

  return page(ctx, {
    title: `${t.title} — ${config.brand}`,
    description: `${t.title} · ${config.brand}`,
    path: `/${kind}/`,
    body,
  })
}

export function render404(ctx) {
  const { lang, dict } = ctx
  const t = dict.errors.notFound
  const base = `/${lang}`

  const body = `
<section class="relative flex min-h-[70vh] items-center bg-night text-white">
  <div class="grain"></div>
  <div class="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
    <p class="eyebrow text-gold">${esc(t.eyebrow)}</p>
    <h1 class="mt-6 font-display text-5xl font-light italic sm:text-6xl">${esc(t.title)}</h1>
    <p class="mt-6 text-sm leading-relaxed text-white/60">${esc(t.body)}</p>
    <div class="mt-10 flex flex-wrap justify-center gap-4">
      <a href="${base}/" class="inline-flex h-12 items-center border border-white/30 px-8 text-xs uppercase tracking-[0.24em] transition-colors hover:border-white">${esc(t.home)}</a>
      <a href="${base}/book/" class="inline-flex h-12 items-center bg-gold px-8 text-xs uppercase tracking-[0.24em] text-night transition-colors hover:bg-gold-dark">${esc(t.book)}</a>
    </div>
  </div>
</section>`

  return page(ctx, {
    title: `404 — ${config.brand}`,
    description: t.title,
    path: '/404.html',
    body,
  })
}
