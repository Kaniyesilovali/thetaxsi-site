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
    var from = document.getElementById('bf-from')
    var to = document.getElementById('bf-to')
    var flight = document.getElementById('bf-flight')
    var flightWrap = document.getElementById('bf-flight-wrap')
    var flightError = document.getElementById('bf-flight-error')
    var date = document.getElementById('bf-date')
    var time = document.getElementById('bf-time')
    var pax = document.getElementById('bf-pax')
    var lugBig = document.getElementById('bf-lugbig')
    var lugSmall = document.getElementById('bf-lugsmall')
    var roundtrip = document.getElementById('bf-roundtrip')
    var childseat = document.getElementById('bf-childseat')
    var name = document.getElementById('bf-name')
    var phone = document.getElementById('bf-phone')
    var notes = document.getElementById('bf-notes')

    // URL parametrelerinden ön doldurma (ana sayfa hero picker'ı buraya yönlendirir)
    var params = new URLSearchParams(location.search)
    if (params.get('from')) from.value = params.get('from')
    if (params.get('to')) to.value = params.get('to')
    if (params.get('date')) date.value = params.get('date')
    if (params.get('pax')) pax.value = params.get('pax')

    // Geçmiş tarih seçilmesin
    date.min = new Date().toISOString().slice(0, 10)

    function selectedLabel(sel) {
      var opt = sel.options[sel.selectedIndex]
      return opt ? opt.textContent.trim() : ''
    }

    function routeText() {
      return selectedLabel(from) + ' → ' + selectedLabel(to)
    }

    // Havalimanından kalkışta uçuş kodu zorunlu — şoför uçuşu takip eder
    function fromIsAirport() {
      var opt = from.options[from.selectedIndex]
      var group = opt && opt.parentNode
      return Boolean(group && group.tagName === 'OPTGROUP' && group.dataset.group === 'airports')
    }

    function toggleFlight() {
      var need = fromIsAirport()
      flightWrap.classList.toggle('hidden', !need)
      flightWrap.classList.toggle('flex', need)
      flight.required = need
      if (!need) flightError.classList.add('hidden')
    }

    function updateSummary() {
      var empty = document.getElementById('bf-summary-empty')
      var body = document.getElementById('bf-summary-body')
      if (!from.value || !to.value) {
        empty.classList.remove('hidden')
        body.classList.add('hidden')
        body.classList.remove('flex')
        return
      }
      empty.classList.add('hidden')
      body.classList.remove('hidden')
      body.classList.add('flex')
      document.getElementById('bf-summary-route').textContent = routeText()
      document.getElementById('bf-summary-trip-label').textContent = roundtrip.checked ? cfg.returnLabel : cfg.oneWayLabel
    }

    from.addEventListener('change', function () {
      updateSummary()
      toggleFlight()
    })
    to.addEventListener('change', updateSummary)
    roundtrip.addEventListener('change', updateSummary)
    updateSummary()
    toggleFlight()

    bookForm.addEventListener('submit', function (e) {
      e.preventDefault()
      var error = document.getElementById('bf-error')
      var flightMissing = fromIsAirport() && !flight.value.trim()
      flightError.classList.toggle('hidden', !flightMissing)
      var valid = from.value && to.value && date.value && lugBig.value !== '' && lugSmall.value !== '' && name.value.trim() && phone.value.trim() && !flightMissing
      error.classList.toggle('hidden', Boolean(valid))
      if (!valid) return

      var ref = 'TX-' + Date.now().toString(36).toUpperCase().slice(-6)
      var isReturn = roundtrip.checked

      recordToSheets({
        type: 'booking',
        ref: ref,
        lang: cfg.lang,
        route: routeText(),
        from: from.value,
        to: to.value,
        flight: flight.value.trim(),
        date: date.value,
        time: time.value,
        passengers: pax.value,
        luggageBig: lugBig.value,
        luggageSmall: lugSmall.value,
        roundTrip: isReturn ? 'yes' : 'no',
        childSeat: childseat.value,
        name: name.value.trim(),
        phone: phone.value.trim(),
        notes: notes.value.trim(),
        page: location.href,
      })

      var message = tmpl(cfg.waMessage, {
        route: routeText(),
        flight: flight.value.trim() ? tmpl(cfg.waFlight, { flight: flight.value.trim() }) : '',
        luggage: tmpl(cfg.waLuggage, { big: lugBig.value, small: lugSmall.value }),
        date: date.value,
        time: time.value || '',
        passengers: pax.value,
        roundTrip: isReturn ? cfg.waRoundTrip : '',
        childSeat: Number(childseat.value) > 0 ? tmpl(cfg.waChildSeat, { count: childseat.value }) : '',
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
