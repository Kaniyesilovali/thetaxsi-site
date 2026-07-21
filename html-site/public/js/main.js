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

  /* ---------- Konum combobox'ı (Nereden/Nereye) ---------- */
  // Yazılan harflere göre listeyi filtreler; aksan/Türkçe karakter duyarsız eşleşir
  // ("catalkoy" → "Çatalköy"). Gizli input canonical değeri taşır, seçim değişince
  // wrapper üzerinden 'change' event'i yükselir.
  var ACTIVE_CLS = 'bg-sea/15'

  function normText(s) {
    return s
      .toLocaleLowerCase('tr')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ı/g, 'i')
  }

  function initLocCombo(root) {
    var hidden = root.querySelector('input[type="hidden"]')
    var input = root.querySelector('input[type="text"]')
    var list = root.querySelector('[data-combo-list]')
    var emptyMsg = list.querySelector('[data-combo-empty]')
    var options = [].slice.call(list.querySelectorAll('[data-combo-option]'))
    var groups = [].slice.call(list.querySelectorAll('[data-combo-group]'))
    var activeIdx = -1
    // Mod sekmeleri bazı grupları kapatabilir (null = hepsi açık)
    var allowedGroups = null

    function groupAllowed(id) {
      return !allowedGroups || allowedGroups.indexOf(id) !== -1
    }

    function isOpen() {
      return !list.classList.contains('hidden')
    }

    function openList() {
      list.classList.remove('hidden')
      input.setAttribute('aria-expanded', 'true')
    }

    function closeList() {
      list.classList.add('hidden')
      input.setAttribute('aria-expanded', 'false')
      setActive(-1)
    }

    function visibleOptions() {
      return options.filter(function (o) {
        return !o.classList.contains('hidden')
      })
    }

    function setActive(idx) {
      var vis = visibleOptions()
      if (activeIdx >= 0 && vis[activeIdx]) vis[activeIdx].classList.remove(ACTIVE_CLS)
      activeIdx = idx
      if (activeIdx >= 0 && vis[activeIdx]) {
        vis[activeIdx].classList.add(ACTIVE_CLS)
        vis[activeIdx].scrollIntoView({ block: 'nearest' })
      }
    }

    function filterList() {
      var q = normText(input.value.trim())
      var any = false
      options.forEach(function (o) {
        var hit =
          groupAllowed(o.getAttribute('data-group')) &&
          (!q ||
            normText(o.textContent).indexOf(q) !== -1 ||
            normText(o.getAttribute('data-value')).indexOf(q) !== -1)
        o.classList.toggle('hidden', !hit)
        if (hit) any = true
      })
      groups.forEach(function (g) {
        g.classList.toggle('hidden', !g.querySelector('[data-combo-option]:not(.hidden)'))
      })
      emptyMsg.classList.toggle('hidden', any)
      setActive(-1)
    }

    function fireChange() {
      var ev
      try {
        ev = new Event('change', { bubbles: true })
      } catch (e) {
        ev = document.createEvent('Event')
        ev.initEvent('change', true, false)
      }
      hidden.dispatchEvent(ev)
    }

    function commit(opt) {
      hidden.value = opt.getAttribute('data-value')
      hidden.setAttribute('data-group', opt.getAttribute('data-group'))
      input.value = opt.textContent.trim()
      closeList()
      fireChange()
    }

    function clearSelection() {
      if (!hidden.value) return
      hidden.value = ''
      hidden.removeAttribute('data-group')
      fireChange()
    }

    // Yazılan metin bir seçenekle birebir eşleşiyorsa (URL prefill / elle tam yazım) otomatik seç
    function commitExactMatch() {
      var q = normText(input.value.trim())
      if (!q) return
      for (var i = 0; i < options.length; i++) {
        if (
          groupAllowed(options[i].getAttribute('data-group')) &&
          (normText(options[i].textContent) === q || normText(options[i].getAttribute('data-value')) === q)
        ) {
          commit(options[i])
          return
        }
      }
    }

    input.addEventListener('input', function () {
      clearSelection()
      filterList()
      openList()
    })

    input.addEventListener('focus', function () {
      filterList()
      openList()
    })

    input.addEventListener('keydown', function (e) {
      var vis = visibleOptions()
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (!isOpen()) openList()
        setActive(activeIdx < vis.length - 1 ? activeIdx + 1 : 0)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActive(activeIdx > 0 ? activeIdx - 1 : vis.length - 1)
      } else if (e.key === 'Enter') {
        if (isOpen()) {
          e.preventDefault()
          if (activeIdx >= 0 && vis[activeIdx]) commit(vis[activeIdx])
          else if (vis.length === 1) commit(vis[0])
          else commitExactMatch()
        }
      } else if (e.key === 'Escape') {
        closeList()
      }
    })

    options.forEach(function (opt) {
      // mousedown: input blur olmadan seçimi yakala
      opt.addEventListener('mousedown', function (e) {
        e.preventDefault()
        commit(opt)
      })
    })

    document.addEventListener('click', function (e) {
      if (!root.contains(e.target)) {
        if (isOpen()) {
          if (!hidden.value) commitExactMatch()
          closeList()
        }
      }
    })

    root.locCombo = {
      getValue: function () {
        return hidden.value
      },
      getLabel: function () {
        return hidden.value ? input.value.trim() : ''
      },
      // Serbest metin: listede olmayan değerler için (örn. otel adı elle yazılır)
      getText: function () {
        return input.value.trim()
      },
      getGroup: function () {
        return hidden.getAttribute('data-group') || ''
      },
      setValue: function (value) {
        for (var i = 0; i < options.length; i++) {
          if (options[i].getAttribute('data-value') === value && groupAllowed(options[i].getAttribute('data-group'))) {
            commit(options[i])
            return
          }
        }
      },
      // Mod sekmesi değişince izinli grupları daralt; mevcut seçim dışarıda kaldıysa temizle
      setGroups: function (groupIds) {
        allowedGroups = groupIds
        if (hidden.value && !groupAllowed(hidden.getAttribute('data-group'))) {
          hidden.value = ''
          hidden.removeAttribute('data-group')
          input.value = ''
          fireChange()
        }
        filterList()
      },
    }
  }

  var comboRoots = [].slice.call(document.querySelectorAll('[data-loc-combo]'))
  comboRoots.forEach(initLocCombo)

  /* ---------- Noktadan noktaya form akışı ---------- */
  // Nereden/Nereye artık serbesttir: her iki alan da tüm grupları (havalimanı, otel,
  // şehir merkezi) listeler, böylece merkezden merkeze dahil her rota kurulabilir.
  // Tek yardım: kalkış seçilince varış listesi kendiliğinden açılır.
  function initJourneyForm(form) {
    var fromField = form.querySelector('input[name="from"]')
    var toField = form.querySelector('input[name="to"]')
    if (!fromField || !toField) return
    var fromCombo = fromField.closest('[data-loc-combo]')
    var toCombo = toField.closest('[data-loc-combo]')
    if (!fromCombo || !toCombo) return

    fromCombo.addEventListener('change', function () {
      // Kalkış seçilince ve varış boşken varış listesini aç (yalnızca kullanıcı
      // etkileşiminde — URL prefill'inde odak combobox'ta olmaz)
      if (fromCombo.locCombo.getValue() && !toCombo.locCombo.getValue() && fromCombo.contains(document.activeElement)) {
        // Ertelenir: aynı tıklamanın "dışarı tıklama" dinleyicisi listeyi kapatmasın
        setTimeout(function () {
          toCombo.querySelector('input[type="text"]').focus()
        }, 0)
      }
    })
  }

  ;[].slice.call(document.querySelectorAll('form')).forEach(initJourneyForm)

  /* ---------- Rezervasyon formu ---------- */
  var bookForm = document.getElementById('booking-form')
  if (bookForm && window.__TAXSI_BOOK) {
    var cfg = window.__TAXSI_BOOK
    var fromRoot = document.getElementById('bf-from').closest('[data-loc-combo]')
    var toRoot = document.getElementById('bf-to').closest('[data-loc-combo]')
    var from = fromRoot.locCombo
    var to = toRoot.locCombo
    var flight = document.getElementById('bf-flight')
    var flightWrap = document.getElementById('bf-flight-wrap')
    var flightError = document.getElementById('bf-flight-error')
    var hotelRoot = document.getElementById('bf-hotel').closest('[data-loc-combo]')
    var hotel = hotelRoot.locCombo
    var hotelWrap = document.getElementById('bf-hotel-wrap')
    var hotelError = document.getElementById('bf-hotel-error')
    var address = document.getElementById('bf-address')
    var addressWrap = document.getElementById('bf-address-wrap')
    var date = document.getElementById('bf-date')
    var time = document.getElementById('bf-time')
    var pax = document.getElementById('bf-pax')
    var lugBig = document.getElementById('bf-lugbig')
    var lugSmall = document.getElementById('bf-lugsmall')
    var roundtrip = document.getElementById('bf-roundtrip')
    var returnWrap = document.getElementById('bf-return-wrap')
    var returnDate = document.getElementById('bf-return-date')
    var returnTime = document.getElementById('bf-return-time')
    var returnPickup = document.getElementById('bf-return-pickup')
    var childseat = document.getElementById('bf-childseat')
    var name = document.getElementById('bf-name')
    var phone = document.getElementById('bf-phone')
    var notes = document.getElementById('bf-notes')

    // Kaydedilen "mode" artık seçilen uçların gruplarından türetilir (havalimanı/otel/
    // bölge) — sabit bir sekme değil. Ops ekibi rota türünü yine görebilsin diye tutulur.
    function journeyMode() {
      return (from.getGroup() || 'other') + '>' + (to.getGroup() || 'other')
    }

    // URL parametrelerinden ön doldurma (hero picker ve rota landing CTA'ları buraya
    // yönlendirir). Nereden/Nereye serbest olduğundan mod uygulamaya gerek yok.
    var params = new URLSearchParams(location.search)
    if (params.get('from')) from.setValue(params.get('from'))
    if (params.get('to')) to.setValue(params.get('to'))
    if (params.get('date')) date.value = params.get('date')
    if (params.get('pax')) pax.value = params.get('pax')
    // Hero search kartındaki tek yön/gidiş-dönüş seçimi (tek yön boş değer taşır)
    if (params.get('roundtrip')) roundtrip.checked = true

    // Geçmiş tarih seçilmesin
    date.min = new Date().toISOString().slice(0, 10)
    returnDate.min = date.min

    // Gidiş-dönüş seçilince dönüş tarih/saat alanları açılır ve dönüş tarihi zorunlu olur
    function toggleReturn() {
      var need = roundtrip.checked
      returnWrap.classList.toggle('hidden', !need)
      returnWrap.classList.toggle('grid', need)
      returnDate.required = need
      // Dönüş, gidişten önce olamaz
      if (need && date.value) returnDate.min = date.value
    }

    function routeText() {
      return from.getLabel() + ' → ' + to.getLabel()
    }

    // Havalimanından kalkışta uçuş kodu zorunlu — şoför uçuşu takip eder
    function fromIsAirport() {
      return from.getGroup() === 'airports'
    }

    function toggleFlight() {
      var need = fromIsAirport()
      flightWrap.classList.toggle('hidden', !need)
      flightWrap.classList.toggle('flex', need)
      flight.required = need
      if (!need) flightError.classList.add('hidden')
    }

    // Otel bölgesi seçilince otel alanı açılır ve liste o bölgenin otellerine daralır —
    // şoför gideceği kapıyı net bilsin. Listede olmayan otel elle yazılabilir.
    function hotelArea() {
      if (from.getGroup() === 'hotels') return from.getValue()
      if (to.getGroup() === 'hotels') return to.getValue()
      return ''
    }

    function hotelValue() {
      return hotel.getValue() || hotel.getText()
    }

    function toggleHotel() {
      var area = hotelArea()
      hotelWrap.classList.toggle('hidden', !area)
      hotelWrap.classList.toggle('flex', Boolean(area))
      if (area) hotel.setGroups([area])
      else hotelError.classList.add('hidden')
    }

    // Şehir/bölge merkezi seçilince açık adres alanı açılır — şoför tam noktayı bilsin.
    // Adres serbest metindir ve zorunlu değildir.
    function regionSelected() {
      return from.getGroup() === 'regions' || to.getGroup() === 'regions'
    }

    function addressValue() {
      return regionSelected() ? address.value.trim() : ''
    }

    function toggleAddress() {
      var need = regionSelected()
      addressWrap.classList.toggle('hidden', !need)
      addressWrap.classList.toggle('flex', need)
    }

    function updateSummary() {
      var empty = document.getElementById('bf-summary-empty')
      var body = document.getElementById('bf-summary-body')
      if (!from.getValue() || !to.getValue()) {
        empty.classList.remove('hidden')
        body.classList.add('hidden')
        body.classList.remove('flex')
        return
      }
      empty.classList.add('hidden')
      body.classList.remove('hidden')
      body.classList.add('flex')
      document.getElementById('bf-summary-route').textContent = routeText()
      var tripLabel = roundtrip.checked ? cfg.returnLabel : cfg.oneWayLabel
      if (roundtrip.checked && returnDate.value) tripLabel += ' · ' + returnDate.value + (returnTime.value ? ' ' + returnTime.value : '')
      document.getElementById('bf-summary-trip-label').textContent = tripLabel
    }

    fromRoot.addEventListener('change', function () {
      updateSummary()
      toggleFlight()
      toggleHotel()
      toggleAddress()
    })
    toRoot.addEventListener('change', function () {
      updateSummary()
      toggleHotel()
      toggleAddress()
    })
    roundtrip.addEventListener('change', function () {
      toggleReturn()
      updateSummary()
    })
    date.addEventListener('change', function () {
      if (roundtrip.checked && date.value) returnDate.min = date.value
    })
    returnDate.addEventListener('change', updateSummary)
    returnTime.addEventListener('change', updateSummary)
    updateSummary()
    toggleReturn()
    toggleFlight()
    toggleHotel()
    toggleAddress()

    bookForm.addEventListener('submit', function (e) {
      e.preventDefault()
      var error = document.getElementById('bf-error')
      var flightMissing = fromIsAirport() && !flight.value.trim()
      flightError.classList.toggle('hidden', !flightMissing)
      var hotelMissing = Boolean(hotelArea()) && !hotelValue()
      hotelError.classList.toggle('hidden', !hotelMissing)
      var returnMissing = roundtrip.checked && !returnDate.value
      var valid = from.getValue() && to.getValue() && date.value && lugBig.value !== '' && lugSmall.value !== '' && name.value.trim() && phone.value.trim() && !flightMissing && !hotelMissing && !returnMissing
      error.classList.toggle('hidden', Boolean(valid))
      if (!valid) return

      var ref = 'TX-' + Date.now().toString(36).toUpperCase().slice(-6)
      var isReturn = roundtrip.checked

      recordToSheets({
        type: 'booking',
        ref: ref,
        lang: cfg.lang,
        mode: journeyMode(),
        route: routeText(),
        from: from.getValue(),
        to: to.getValue(),
        hotel: hotelArea() ? hotelValue() : '',
        address: addressValue(),
        flight: flight.value.trim(),
        date: date.value,
        time: time.value,
        passengers: pax.value,
        luggageBig: lugBig.value,
        luggageSmall: lugSmall.value,
        roundTrip: isReturn ? 'yes' : 'no',
        returnDate: isReturn ? returnDate.value : '',
        returnTime: isReturn ? returnTime.value : '',
        returnPickup: isReturn ? returnPickup.value.trim() : '',
        childSeat: childseat.value,
        name: name.value.trim(),
        phone: phone.value.trim(),
        notes: notes.value.trim(),
        page: location.href,
      })

      var message = tmpl(cfg.waMessage, {
        route: routeText(),
        hotel: hotelArea() && hotelValue() ? tmpl(cfg.waHotel, { hotel: hotelValue() }) : '',
        address: addressValue() ? tmpl(cfg.waAddress, { address: addressValue() }) : '',
        flight: flight.value.trim() ? tmpl(cfg.waFlight, { flight: flight.value.trim() }) : '',
        luggage: tmpl(cfg.waLuggage, { big: lugBig.value, small: lugSmall.value }),
        date: date.value,
        time: time.value || '',
        passengers: pax.value,
        roundTrip: isReturn
          ? tmpl(cfg.waRoundTrip, {
              returnDate: returnDate.value,
              returnTime: returnTime.value || '',
              returnPickup: returnPickup.value.trim() ? tmpl(cfg.waReturnPickup, { pickup: returnPickup.value.trim() }) : '',
            })
          : '',
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

  /* ---------- Güzergah listesi: havalimanı filtresi ---------- */
  var filterBar = document.querySelector('[data-route-filters]')
  if (filterBar) {
    var filterBtns = filterBar.querySelectorAll('[data-route-filter]')
    var routeCards = document.querySelectorAll('[data-route-from]')
    var ACTIVE = ['border-ink', 'bg-ink', 'text-paper']
    var IDLE = ['border-line', 'bg-paper', 'text-ink', 'hover:border-ink']

    var applyFilter = function (value) {
      for (var i = 0; i < filterBtns.length; i++) {
        var btn = filterBtns[i]
        var on = btn.getAttribute('data-route-filter') === value
        btn.setAttribute('aria-pressed', String(on))
        btn.classList.remove.apply(btn.classList, on ? IDLE : ACTIVE)
        btn.classList.add.apply(btn.classList, on ? ACTIVE : IDLE)
      }
      for (var j = 0; j < routeCards.length; j++) {
        var card = routeCards[j]
        var show = value === 'all' || card.getAttribute('data-route-from') === value
        card.classList.toggle('hidden', !show)
      }
    }

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-route-filter]')
      if (btn) applyFilter(btn.getAttribute('data-route-filter'))
    })
  }

  /* ---------- Bölge vitrini karuseli ---------- */
  var carousel = document.querySelector('[data-carousel]')
  if (carousel) {
    var track = carousel.querySelector('[data-carousel-track]')
    var prevBtn = document.querySelector('[data-carousel-prev]')
    var nextBtn = document.querySelector('[data-carousel-next]')

    var stepWidth = function () {
      var card = track.firstElementChild
      if (!card) return track.clientWidth
      var styles = getComputedStyle(track)
      var gap = parseFloat(styles.columnGap || styles.gap) || 16
      return card.getBoundingClientRect().width + gap
    }
    var atEnd = function () {
      return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    }
    var goNext = function () {
      if (atEnd()) track.scrollTo({ left: 0, behavior: 'smooth' })
      else track.scrollBy({ left: stepWidth(), behavior: 'smooth' })
    }
    var goPrev = function () {
      if (track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
      else track.scrollBy({ left: -stepWidth(), behavior: 'smooth' })
    }
    if (nextBtn) nextBtn.addEventListener('click', goNext)
    if (prevBtn) prevBtn.addEventListener('click', goPrev)

    // Otomatik dönüş — hover / dokunma / sekme gizliyken duraklat, azalt-hareket tercihine saygı duy
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) {
      var timer = null
      var play = function () { if (!timer) timer = setInterval(goNext, 4500) }
      var pause = function () { if (timer) { clearInterval(timer); timer = null } }
      carousel.addEventListener('mouseenter', pause)
      carousel.addEventListener('mouseleave', play)
      carousel.addEventListener('touchstart', pause, { passive: true })
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) pause()
        else play()
      })
      play()
    }
  }
})()
