// Taxsi statik site — tüm etkileşim burada. Build sırasında __PLACEHOLDER__ değerleri
// site.config.mjs'ten doldurulur.
(function () {
  'use strict'

  var WHATSAPP = '__WHATSAPP__'
  var SHEETS_ENDPOINT = '__SHEETS_ENDPOINT__'
  var EMAIL = '__EMAIL__'

  /* ---------- Mobil menü ---------- */
  var toggle = document.querySelector('[data-menu-toggle]')
  var panel = document.querySelector('[data-menu-panel]')
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('hidden') === false
      toggle.setAttribute('aria-expanded', String(open))
      toggle.querySelector('[data-menu-icon-open]').classList.toggle('hidden', open)
      toggle.querySelector('[data-menu-icon-close]').classList.toggle('hidden', !open)
    })
  }

  /* ---------- Google Sheets kaydı (fire-and-forget) ---------- */
  function recordToSheets(payload) {
    if (!SHEETS_ENDPOINT) return
    try {
      var body = new URLSearchParams()
      Object.keys(payload).forEach(function (k) {
        body.append(k, payload[k] == null ? '' : String(payload[k]))
      })
      // no-cors: yanıt okunamaz ama kayıt düşer; Apps Script CORS preflight'ı desteklemez.
      fetch(SHEETS_ENDPOINT, { method: 'POST', mode: 'no-cors', body: body })
    } catch (e) {
      /* kayıt başarısız olsa bile WhatsApp akışı devam eder */
    }
  }

  function tmpl(str, vars) {
    return str.replace(/\{(\w+)\}/g, function (_, k) {
      return vars[k] != null ? vars[k] : ''
    })
  }

  /* ---------- Rezervasyon formu ---------- */
  var bookForm = document.getElementById('booking-form')
  if (bookForm && window.__TAXSI_BOOK) {
    var cfg = window.__TAXSI_BOOK
    var route = document.getElementById('bf-route')
    var date = document.getElementById('bf-date')
    var time = document.getElementById('bf-time')
    var pax = document.getElementById('bf-pax')
    var roundtrip = document.getElementById('bf-roundtrip')
    var childseat = document.getElementById('bf-childseat')
    var name = document.getElementById('bf-name')
    var phone = document.getElementById('bf-phone')
    var notes = document.getElementById('bf-notes')

    // URL parametrelerinden ön doldurma (ana sayfa hero picker'ı buraya yönlendirir)
    var params = new URLSearchParams(location.search)
    if (params.get('route')) route.value = params.get('route')
    if (params.get('date')) date.value = params.get('date')
    if (params.get('pax')) pax.value = params.get('pax')

    // Geçmiş tarih seçilmesin
    date.min = new Date().toISOString().slice(0, 10)

    function selectedOption() {
      return route.options[route.selectedIndex]
    }

    function updateSummary() {
      var empty = document.getElementById('bf-summary-empty')
      var body = document.getElementById('bf-summary-body')
      var opt = selectedOption()
      if (!route.value || !opt || !opt.dataset.label) {
        empty.classList.remove('hidden')
        body.classList.add('hidden')
        body.classList.remove('flex')
        return
      }
      empty.classList.add('hidden')
      body.classList.remove('hidden')
      body.classList.add('flex')
      document.getElementById('bf-summary-route').textContent = opt.dataset.label
      var isReturn = roundtrip.checked
      document.getElementById('bf-summary-trip-label').textContent = isReturn ? cfg.returnLabel : cfg.oneWayLabel
      document.getElementById('bf-summary-price').textContent = '€' + (isReturn ? opt.dataset.roundtrip : opt.dataset.price)
    }

    route.addEventListener('change', updateSummary)
    roundtrip.addEventListener('change', updateSummary)
    updateSummary()

    bookForm.addEventListener('submit', function (e) {
      e.preventDefault()
      var error = document.getElementById('bf-error')
      var opt = selectedOption()
      var valid = route.value && date.value && name.value.trim() && phone.value.trim()
      error.classList.toggle('hidden', Boolean(valid))
      if (!valid) return

      var ref = 'TX-' + Date.now().toString(36).toUpperCase().slice(-6)
      var isReturn = roundtrip.checked
      var price = isReturn ? opt.dataset.roundtrip : opt.dataset.price

      recordToSheets({
        type: 'booking',
        ref: ref,
        lang: cfg.lang,
        route: opt.dataset.label,
        date: date.value,
        time: time.value,
        passengers: pax.value,
        roundTrip: isReturn ? 'yes' : 'no',
        childSeat: childseat.checked ? 'yes' : 'no',
        price: '€' + price,
        name: name.value.trim(),
        phone: phone.value.trim(),
        notes: notes.value.trim(),
        page: location.href,
      })

      var message = tmpl(cfg.waMessage, {
        route: opt.dataset.label,
        date: date.value,
        time: time.value || '',
        passengers: pax.value,
        roundTrip: isReturn ? cfg.waRoundTrip : '',
        childSeat: childseat.checked ? cfg.waChildSeat : '',
        name: name.value.trim(),
        phone: phone.value.trim(),
        notes: notes.value.trim() ? tmpl(cfg.waNotes, { notes: notes.value.trim() }) : '',
        ref: ref,
      })

      document.getElementById('bf-success').classList.remove('hidden')
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(message), '_blank')
    })
  }

  /* ---------- İletişim formu ---------- */
  var contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault()
      var name = document.getElementById('cf-name')
      var email = document.getElementById('cf-email')
      var message = document.getElementById('cf-message')
      var error = document.getElementById('cf-error')
      var success = document.getElementById('cf-success')

      var valid = name.value.trim() && email.checkValidity() && message.value.trim()
      error.classList.toggle('hidden', Boolean(valid))
      if (!valid) return

      if (SHEETS_ENDPOINT) {
        recordToSheets({
          type: 'contact',
          lang: document.documentElement.lang,
          name: name.value.trim(),
          email: email.value.trim(),
          message: message.value.trim(),
          page: location.href,
        })
        success.classList.remove('hidden')
        contactForm.reset()
      } else {
        // Endpoint kurulmamışsa e-posta istemcisine düş
        location.href =
          'mailto:' + EMAIL +
          '?subject=' + encodeURIComponent('Website message from ' + name.value.trim()) +
          '&body=' + encodeURIComponent(message.value.trim() + '\n\n' + name.value.trim() + '\n' + email.value.trim())
      }
    })
  }
})()
