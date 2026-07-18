import { esc, icons, page, pageHero } from './layout.mjs'
import { config } from '../site.config.mjs'
import { fieldLabelCls, lightInputCls } from './home.mjs'

// Açık zeminli metin alanı — lightInputCls ile aynı dilde (yuvarlak, ince çizgi, deniz odağı)
const lightTextareaCls =
  'w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-all focus:border-sea focus:ring-2 focus:ring-sea/20 [color-scheme:light]'

export function renderAbout(ctx) {
  const { lang, dict } = ctx
  const t = dict.about
  const base = `/${lang}`

  const chapters = [t.story, t.mission]

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto flex max-w-6xl flex-col gap-16 px-5 sm:px-8">
    ${chapters
      .map(
        (c, i) => `
    <div class="grid gap-4 border-t border-line pt-8 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-16">
      <div class="flex items-baseline gap-4">
        <span class="text-sm font-medium tabular-nums text-sea">0${i + 1}</span>
        <h2 class="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">${esc(c.title)}</h2>
      </div>
      <p class="max-w-2xl text-[16px] leading-relaxed text-slate">${esc(c.body)}</p>
    </div>`,
      )
      .join('')}
    <div class="border-t border-line pt-8">
      <h2 class="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">${esc(t.values.title)}</h2>
      <div class="mt-10 grid gap-4 md:grid-cols-3">
        ${t.values.items
          .map(
            (v) => `
        <div class="rounded-3xl border border-line bg-paper p-7">
          <h3 class="text-lg font-semibold text-ink">${esc(v.title)}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-slate">${esc(v.desc)}</p>
        </div>`,
          )
          .join('')}
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-10">
      <p class="text-sm font-medium text-sea">${esc(config.brand)}</p>
      <a href="${base}/book/" class="inline-flex h-12 items-center rounded-full bg-sea px-8 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep">${esc(t.cta)}</a>
    </div>
  </div>
</section>`

  return page(ctx, {
    title: t.meta?.title ?? `${t.title} — ${config.brand}`,
    description: t.meta?.description ?? t.subtitle,
    path: '/about/',
    body,
  })
}

export function renderContact(ctx) {
  const { lang, dict, xtra } = ctx
  const t = dict.contact
  const ft = dict.footer
  const inputCls = lightInputCls

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
    <div class="flex flex-col gap-8">
      <div class="rounded-3xl border border-line bg-paper p-7">
        <p class="text-sm font-medium text-sea">${esc(t.directHeading)}</p>
        <ul class="mt-6 flex flex-col gap-6 text-sm">
          <li>
            <p class="${fieldLabelCls}">${esc(t.phoneLabel)}</p>
            <a href="tel:${config.phoneHref}" class="mt-1.5 flex items-center gap-3 font-medium text-ink transition-colors hover:text-sea"><span class="text-sea">${icons.phone}</span>${config.phoneDisplay}</a>
          </li>
          <li>
            <p class="${fieldLabelCls}">${esc(t.emailLabel)}</p>
            <a href="mailto:${config.email}" class="mt-1.5 flex items-center gap-3 font-medium text-ink transition-colors hover:text-sea"><span class="text-sea">${icons.mail}</span>${config.email}</a>
          </li>
          <li>
            <p class="${fieldLabelCls}">${esc(t.whatsappLabel)}</p>
            <a href="https://wa.me/${config.whatsapp}" target="_blank" rel="noopener noreferrer" class="mt-1.5 flex items-center gap-3 font-medium text-ink transition-colors hover:text-sea"><span class="text-sea">${icons.whatsapp}</span>+${config.whatsapp}</a>
          </li>
        </ul>
      </div>
      <div class="rounded-3xl border border-line bg-paper p-7">
        <p class="flex items-center gap-2 text-sm font-medium text-sea"><span class="size-1.5 shrink-0 rounded-full bg-sea"></span>${esc(ft.hours)}</p>
        <div class="mt-4 space-y-1 text-sm text-slate">
          ${ft.addressLines.map((line) => `<p>${esc(line)}</p>`).join('\n          ')}
        </div>
      </div>
    </div>
    <form id="contact-form" class="flex flex-col gap-6 rounded-3xl border border-line bg-paper p-7 sm:p-9" novalidate>
      <h2 class="text-2xl font-semibold tracking-tight text-ink">${esc(t.form.title)}</h2>
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="flex flex-col gap-2">
          <label for="cf-name" class="${fieldLabelCls}">${esc(t.form.name)}</label>
          <input id="cf-name" name="name" type="text" required autocomplete="name" class="${inputCls}">
        </div>
        <div class="flex flex-col gap-2">
          <label for="cf-email" class="${fieldLabelCls}">${esc(t.form.emailField)}</label>
          <input id="cf-email" name="email" type="email" required autocomplete="email" class="${inputCls}">
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="cf-message" class="${fieldLabelCls}">${esc(t.form.message)}</label>
        <textarea id="cf-message" name="message" rows="8" required class="${lightTextareaCls}"></textarea>
      </div>
      <p id="cf-error" class="hidden text-sm text-red-600">${esc(t.form.error)}</p>
      <p id="cf-success" class="hidden rounded-2xl border border-sea/30 bg-sea/5 p-5 text-sm text-ink">${esc(xtra.contactForm.success)}</p>
      <button type="submit" class="inline-flex h-12 w-fit items-center rounded-full bg-sea px-8 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep" data-sending-label="${esc(t.form.sending)}">${esc(t.form.submit)}</button>
      <p class="text-xs leading-relaxed text-slate">${esc(xtra.contactForm.fallback)} <a href="mailto:${config.email}" class="font-medium text-sea underline underline-offset-2">${config.email}</a></p>
    </form>
  </div>
</section>`

  return page(ctx, {
    title: t.meta?.title ?? `${t.title} — ${config.brand}`,
    description: t.meta?.description ?? t.subtitle,
    path: '/contact/',
    body,
  })
}

export function renderFaq(ctx) {
  const { dict } = ctx
  const t = dict.faq

  const body = `
${pageHero({ eyebrow: t.eyebrow, title: t.title, subtitle: t.subtitle })}
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto flex max-w-3xl flex-col gap-12 px-5 sm:px-8">
    ${t.sections
      .map(
        (section) => `
    <div>
      <h2 class="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">${esc(section.title)}</h2>
      <div class="mt-6 overflow-hidden rounded-3xl border border-line bg-paper">
        ${section.items
          .map(
            (item) => `
        <div class="border-b border-line px-6 py-5 last:border-b-0">
          <h3 class="text-[15px] font-medium text-ink">${esc(item.q)}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-slate">${esc(item.a)}</p>
        </div>`,
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
    title: t.meta?.title ?? `${t.title} — ${config.brand}`,
    description: t.meta?.description ?? t.subtitle,
    path: '/faq/',
    body,
    jsonld,
    faq: false,
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

// Yasal sayfa meta açıklamaları — SERP için 120-150 karakter, dile göre gerçek özet.
const legalMeta = {
  privacy: {
    en: 'How TheTaxsi collects, uses and protects your booking data for Cyprus airport transfers. Your rights, data storage and how to request deletion.',
    tr: 'TheTaxsi’nin Kıbrıs havalimanı transferlerinde rezervasyon verilerinizi nasıl topladığı, kullandığı ve koruduğu. Haklarınız ve veri silme talebi.',
    ru: 'Как TheTaxsi собирает, использует и защищает данные бронирования трансферов на Кипре. Ваши права, хранение данных и запрос на удаление.',
  },
  terms: {
    en: 'Booking terms for TheTaxsi Cyprus airport transfers: reservations, cancellations, flight delays, payment and liability. Fixed fares, clear conditions.',
    tr: 'TheTaxsi Kıbrıs havalimanı transferleri için koşullar: rezervasyon, iptal, uçuş rötarı, ödeme ve sorumluluk. Sabit fiyat, açık şartlar.',
    ru: 'Условия трансферов TheTaxsi на Кипре: бронирование, отмена, задержки рейсов, оплата и ответственность. Фиксированные цены и понятные условия.',
  },
}

export function renderLegal(ctx, kind) {
  const { lang, dict } = ctx
  const t = dict[kind]
  const sections = legalContent[kind][lang]

  const body = `
${pageHero({ eyebrow: config.brand, title: t.title, subtitle: t.lastUpdated })}
<section class="bg-fog py-20 lg:py-28">
  <div class="mx-auto flex max-w-3xl flex-col gap-8 px-5 sm:px-8">
    ${sections
      .map(
        ([h, p], i) => `
    <div class="rounded-3xl border border-line bg-paper p-7">
      <h2 class="text-xl font-semibold tracking-tight text-ink"><span class="mr-2 tabular-nums text-sea">${i + 1}.</span>${esc(h)}</h2>
      <p class="mt-3 text-[15px] leading-relaxed text-slate">${esc(p)}</p>
    </div>`,
      )
      .join('')}
  </div>
</section>`

  return page(ctx, {
    title: `${t.title} — ${config.brand}`,
    description: legalMeta[kind][lang],
    path: `/${kind}/`,
    body,
  })
}

export function render404(ctx) {
  const { lang, dict } = ctx
  const t = dict.errors.notFound
  const base = `/${lang}`

  const body = `
<section class="relative flex min-h-[70vh] items-center overflow-hidden bg-fog">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0">
    <div class="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(18,165,188,.07),transparent 70%)"></div>
  </div>
  <div class="relative mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
    <p class="text-sm font-medium text-sea">${esc(t.eyebrow)}</p>
    <h1 class="mt-5 text-[clamp(2.6rem,8vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">${esc(t.title)}</h1>
    <p class="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-slate">${esc(t.body)}</p>
    <div class="mt-10 flex flex-wrap justify-center gap-3">
      <a href="${base}/" class="inline-flex h-12 items-center rounded-full border border-ink/15 px-7 text-[14px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper">${esc(t.home)}</a>
      <a href="${base}/book/" class="inline-flex h-12 items-center rounded-full bg-sea px-7 text-[14px] font-semibold text-white transition-colors hover:bg-sea-deep">${esc(t.book)}</a>
    </div>
  </div>
</section>`

  return page(ctx, {
    title: `404 — ${config.brand}`,
    description: t.title,
    path: '/404.html',
    body,
    faq: false,
  })
}
