// Rota verisi — SEO landing page'leri buradan üretilir.
// Tüm rotalar havalimanı → şehir merkezi veya havalimanı → otel bölgesi şeklindedir;
// isimler data/locations.mjs ile uyumlu tutulur.
// fromValue/toValue, locations.mjs'teki `value` ile birebir aynı olmalı — landing
// sayfasındaki CTA rezervasyon formunu bu değerlerle önceden doldurur.
// Yeni rota eklemek için bu diziye bir kayıt ekleyip `npm run build` çalıştırman yeterli.
// Ters yön (şehir → havalimanı) elle yazılmaz; aşağıdaki `reverseRoutes` otomatik türetir.
export const routes = [
  // --- Ercan Havalimanı ---
  {
    slug: 'ercan-airport-to-nicosia',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Nicosia City Centre',
      tr: 'Lefkoşa Şehir Merkezi',
      ru: 'Центр Никосии',
    },
    toValue: 'Lefkoşa Merkez',
    price: 45,
    roundTrip: 80,
    durationMin: 20,
    distanceKm: 18,
  },
  {
    slug: 'ercan-airport-to-kyrenia',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Kyrenia City Centre',
      tr: 'Girne Şehir Merkezi',
      ru: 'Центр Кирении',
    },
    toValue: 'Girne Merkez',
    price: 55,
    roundTrip: 100,
    durationMin: 35,
    distanceKm: 40,
  },
  {
    slug: 'ercan-airport-to-kyrenia-hotels',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Kyrenia Hotels Area',
      tr: 'Girne Oteller Bölgesi',
      ru: 'Отельная зона Кирения',
    },
    toValue: 'Girne Oteller Bölgesi',
    price: 70,
    roundTrip: 125,
    durationMin: 40,
    distanceKm: 45,
  },
  {
    slug: 'ercan-airport-to-famagusta',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Famagusta City Centre',
      tr: 'Gazimağusa Şehir Merkezi',
      ru: 'Центр Фамагусты',
    },
    toValue: 'Gazimağusa Merkez',
    price: 55,
    roundTrip: 100,
    durationMin: 40,
    distanceKm: 50,
  },
  {
    slug: 'ercan-airport-to-iskele-long-beach',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Iskele Long Beach',
      tr: 'İskele Long Beach',
      ru: 'Искеле Лонг-Бич',
    },
    toValue: 'İskele Long Beach',
    price: 55,
    roundTrip: 100,
    durationMin: 45,
    distanceKm: 55,
  },
  {
    slug: 'ercan-airport-to-bafra-hotels',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Bafra Hotels Area',
      tr: 'Bafra Oteller Bölgesi',
      ru: 'Отельная зона Бафра',
    },
    toValue: 'Bafra Oteller Bölgesi',
    price: 80,
    roundTrip: 145,
    durationMin: 60,
    distanceKm: 80,
  },
  // Güzelyurt (Morphou) rotaları — tek yön fiyatlar hattı işleten Halit Yeşilovalı'dan
  // alınmıştır. `price`/`roundTrip` salon araç, `vitoPrice`/`vitoRoundTrip` Vito (7 kişi).
  // TODO: gidiş-dönüş rakamları tek yönün ×1.83'ü alınarak türetildi (Limasol hattındaki
  // 60/110 oranı) — operatörle teyit edilip netleştirilecek.
  {
    slug: 'ercan-airport-to-guzelyurt',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Guzelyurt (Morphou)',
      tr: 'Güzelyurt',
      ru: 'Гюзельюрт (Морфу)',
    },
    toValue: 'Güzelyurt Merkez',
    price: 55,
    roundTrip: 100,
    durationMin: 50,
    distanceKm: 52,
    // Güzelyurt hattı doğrudan Halit Yeşilovalı tarafından işletilir — gerçek iletişim.
    contactName: 'Halit Yeşilovalı',
    phoneDisplay: '+90 548 861 69 39',
    phoneHref: '+905488616939',
    whatsapp: '905488616939',
  },
  // --- Ercan: kıyı şeridi, batı ve Karpaz hatları ---
  // TODO: fiyat/süre/mesafe rakamları mevcut Ercan anahtarlarından (Girne Otelleri
  // 45 km / £70, Bafra 80 km / £80) mesafeye göre türetildi; gidiş-dönüş tek yönün
  // ≈1.8 katı. Yayına almadan önce operatörle teyit et.
  {
    slug: 'ercan-airport-to-catalkoy-hotels',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Catalkoy Hotels Area',
      tr: 'Çatalköy Oteller Bölgesi',
      ru: 'Отельная зона Чаталкёй',
    },
    toValue: 'Çatalköy Oteller Bölgesi',
    price: 70,
    roundTrip: 125,
    durationMin: 45,
    distanceKm: 48,
  },
  {
    slug: 'ercan-airport-to-alsancak-hotels',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Alsancak Hotels Area',
      tr: 'Alsancak Oteller Bölgesi',
      ru: 'Отельная зона Алсанджак',
    },
    toValue: 'Alsancak Oteller Bölgesi',
    price: 70,
    roundTrip: 125,
    durationMin: 45,
    distanceKm: 50,
  },
  {
    slug: 'ercan-airport-to-lapta',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Lapta',
      tr: 'Lapta',
      ru: 'Лапта',
    },
    toValue: 'Lapta Merkez',
    price: 75,
    roundTrip: 135,
    durationMin: 50,
    distanceKm: 56,
  },
  {
    slug: 'ercan-airport-to-karsiyaka',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Karsiyaka',
      tr: 'Karşıyaka',
      ru: 'Каршияка',
    },
    toValue: 'Karşıyaka Merkez',
    price: 80,
    roundTrip: 145,
    durationMin: 55,
    distanceKm: 62,
  },
  {
    slug: 'ercan-airport-to-esentepe-hotels',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Esentepe Hotels Area',
      tr: 'Esentepe Oteller Bölgesi',
      ru: 'Отельная зона Эсентепе',
    },
    toValue: 'Esentepe Oteller Bölgesi',
    price: 80,
    roundTrip: 145,
    durationMin: 55,
    distanceKm: 63,
  },
  {
    slug: 'ercan-airport-to-bogaz',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Bogaz',
      tr: 'Boğaz',
      ru: 'Богаз',
    },
    toValue: 'Boğaz Merkez',
    price: 70,
    roundTrip: 125,
    durationMin: 50,
    distanceKm: 65,
  },
  {
    slug: 'ercan-airport-to-karpaz-hotels',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Karpaz Hotels',
      tr: 'Karpaz Otelleri',
      ru: 'Отели Карпаза',
    },
    toValue: 'Karpaz Otelleri',
    price: 120,
    roundTrip: 215,
    durationMin: 95,
    distanceKm: 110,
  },
  {
    slug: 'ercan-airport-to-lefke',
    from: {
      en: 'Ercan Airport',
      tr: 'Ercan Havalimanı',
      ru: 'Аэропорт Эрджан',
    },
    fromValue: 'Ercan Havalimanı',
    to: {
      en: 'Lefke',
      tr: 'Lefke',
      ru: 'Лефке',
    },
    toValue: 'Lefke Merkez',
    price: 80,
    roundTrip: 145,
    durationMin: 70,
    distanceKm: 80,
  },
  // --- Larnaka Havalimanı ---
  {
    slug: 'larnaca-airport-to-nicosia',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Nicosia City Centre',
      tr: 'Lefkoşa Şehir Merkezi',
      ru: 'Центр Никосии',
    },
    toValue: 'Lefkoşa Merkez',
    price: 80,
    roundTrip: 150,
    durationMin: 50,
    distanceKm: 55,
  },
  {
    slug: 'larnaca-airport-to-kyrenia',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Kyrenia City Centre',
      tr: 'Girne Şehir Merkezi',
      ru: 'Центр Кирении',
    },
    toValue: 'Girne Merkez',
    price: 100,
    roundTrip: 190,
    durationMin: 75,
    distanceKm: 80,
  },
  {
    slug: 'larnaca-airport-to-kyrenia-hotels',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Kyrenia Hotels Area',
      tr: 'Girne Oteller Bölgesi',
      ru: 'Отельная зона Кирения',
    },
    toValue: 'Girne Oteller Bölgesi',
    price: 110,
    roundTrip: 210,
    durationMin: 80,
    distanceKm: 85,
  },
  {
    slug: 'larnaca-airport-to-famagusta',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Famagusta City Centre',
      tr: 'Gazimağusa Şehir Merkezi',
      ru: 'Центр Фамагусты',
    },
    toValue: 'Gazimağusa Merkez',
    price: 90,
    roundTrip: 170,
    durationMin: 60,
    distanceKm: 70,
  },
  {
    slug: 'larnaca-airport-to-iskele-long-beach',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Iskele Long Beach',
      tr: 'İskele Long Beach',
      ru: 'Искеле Лонг-Бич',
    },
    toValue: 'İskele Long Beach',
    price: 110,
    roundTrip: 200,
    durationMin: 75,
    distanceKm: 90,
  },
  {
    slug: 'larnaca-airport-to-bafra-hotels',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Bafra Hotels Area',
      tr: 'Bafra Oteller Bölgesi',
      ru: 'Отельная зона Бафра',
    },
    toValue: 'Bafra Oteller Bölgesi',
    price: 120,
    roundTrip: 220,
    durationMin: 90,
    distanceKm: 110,
  },
  {
    slug: 'larnaca-airport-to-guzelyurt',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Guzelyurt (Morphou)',
      tr: 'Güzelyurt',
      ru: 'Гюзельюрт (Морфу)',
    },
    toValue: 'Güzelyurt Merkez',
    price: 80,
    roundTrip: 145,
    vitoPrice: 100,
    vitoRoundTrip: 180,
    durationMin: 105,
    distanceKm: 100,
    // Güzelyurt hattı doğrudan Halit Yeşilovalı tarafından işletilir — gerçek iletişim.
    contactName: 'Halit Yeşilovalı',
    phoneDisplay: '+90 548 861 69 39',
    phoneHref: '+905488616939',
    whatsapp: '905488616939',
  },
  // --- Larnaka: kıyı şeridi, batı ve Karpaz hatları ---
  // TODO: rakamlar Larnaka anahtarlarından (Girne 80 km / £100, Girne Otelleri
  // 85 km / £110, Bafra 110 km / £120) türetildi — operatörle teyit edilecek.
  {
    slug: 'larnaca-airport-to-catalkoy-hotels',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Catalkoy Hotels Area',
      tr: 'Çatalköy Oteller Bölgesi',
      ru: 'Отельная зона Чаталкёй',
    },
    toValue: 'Çatalköy Oteller Bölgesi',
    price: 110,
    roundTrip: 200,
    durationMin: 85,
    distanceKm: 88,
  },
  {
    slug: 'larnaca-airport-to-alsancak-hotels',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Alsancak Hotels Area',
      tr: 'Alsancak Oteller Bölgesi',
      ru: 'Отельная зона Алсанджак',
    },
    toValue: 'Alsancak Oteller Bölgesi',
    price: 115,
    roundTrip: 210,
    durationMin: 85,
    distanceKm: 90,
  },
  {
    slug: 'larnaca-airport-to-lapta',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Lapta',
      tr: 'Lapta',
      ru: 'Лапта',
    },
    toValue: 'Lapta Merkez',
    price: 120,
    roundTrip: 220,
    durationMin: 90,
    distanceKm: 96,
  },
  {
    slug: 'larnaca-airport-to-karsiyaka',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Karsiyaka',
      tr: 'Karşıyaka',
      ru: 'Каршияка',
    },
    toValue: 'Karşıyaka Merkez',
    price: 125,
    roundTrip: 225,
    durationMin: 95,
    distanceKm: 102,
  },
  {
    slug: 'larnaca-airport-to-esentepe-hotels',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Esentepe Hotels Area',
      tr: 'Esentepe Oteller Bölgesi',
      ru: 'Отельная зона Эсентепе',
    },
    toValue: 'Esentepe Oteller Bölgesi',
    price: 125,
    roundTrip: 225,
    durationMin: 90,
    distanceKm: 103,
  },
  {
    slug: 'larnaca-airport-to-bogaz',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Bogaz',
      tr: 'Boğaz',
      ru: 'Богаз',
    },
    toValue: 'Boğaz Merkez',
    price: 115,
    roundTrip: 210,
    durationMin: 80,
    distanceKm: 95,
  },
  {
    slug: 'larnaca-airport-to-karpaz-hotels',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Karpaz Hotels',
      tr: 'Karpaz Otelleri',
      ru: 'Отели Карпаза',
    },
    toValue: 'Karpaz Otelleri',
    price: 165,
    roundTrip: 300,
    durationMin: 135,
    distanceKm: 155,
  },
  {
    slug: 'larnaca-airport-to-lefke',
    from: {
      en: 'Larnaca Airport',
      tr: 'Larnaka Havalimanı',
      ru: 'Аэропорт Ларнака',
    },
    fromValue: 'Larnaka Havalimanı',
    to: {
      en: 'Lefke',
      tr: 'Lefke',
      ru: 'Лефке',
    },
    toValue: 'Lefke Merkez',
    price: 120,
    roundTrip: 220,
    durationMin: 120,
    distanceKm: 122,
  },
  // --- Baf Havalimanı ---
  {
    slug: 'paphos-airport-to-nicosia',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Nicosia City Centre',
      tr: 'Lefkoşa Şehir Merkezi',
      ru: 'Центр Никосии',
    },
    toValue: 'Lefkoşa Merkez',
    price: 150,
    roundTrip: 270,
    durationMin: 105,
    distanceKm: 145,
  },
  {
    slug: 'paphos-airport-to-kyrenia',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Kyrenia City Centre',
      tr: 'Girne Şehir Merkezi',
      ru: 'Центр Кирении',
    },
    toValue: 'Girne Merkez',
    price: 170,
    roundTrip: 310,
    durationMin: 120,
    distanceKm: 165,
  },
  {
    slug: 'paphos-airport-to-kyrenia-hotels',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Kyrenia Hotels Area',
      tr: 'Girne Oteller Bölgesi',
      ru: 'Отельная зона Кирения',
    },
    toValue: 'Girne Oteller Bölgesi',
    price: 190,
    roundTrip: 350,
    durationMin: 125,
    distanceKm: 170,
  },
  {
    slug: 'paphos-airport-to-famagusta',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Famagusta City Centre',
      tr: 'Gazimağusa Şehir Merkezi',
      ru: 'Центр Фамагусты',
    },
    toValue: 'Gazimağusa Merkez',
    price: 200,
    roundTrip: 370,
    durationMin: 150,
    distanceKm: 200,
  },
  {
    slug: 'paphos-airport-to-iskele-long-beach',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Iskele Long Beach',
      tr: 'İskele Long Beach',
      ru: 'Искеле Лонг-Бич',
    },
    toValue: 'İskele Long Beach',
    price: 220,
    roundTrip: 400,
    durationMin: 160,
    distanceKm: 215,
  },
  {
    slug: 'paphos-airport-to-bafra-hotels',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Bafra Hotels Area',
      tr: 'Bafra Oteller Bölgesi',
      ru: 'Отельная зона Бафра',
    },
    toValue: 'Bafra Oteller Bölgesi',
    price: 240,
    roundTrip: 430,
    durationMin: 175,
    distanceKm: 230,
  },
  {
    slug: 'paphos-airport-to-guzelyurt',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Guzelyurt (Morphou)',
      tr: 'Güzelyurt',
      ru: 'Гюзельюрт (Морфу)',
    },
    toValue: 'Güzelyurt Merkez',
    price: 120,
    roundTrip: 215,
    vitoPrice: 140,
    vitoRoundTrip: 250,
    durationMin: 110,
    distanceKm: 115,
    // Güzelyurt hattı doğrudan Halit Yeşilovalı tarafından işletilir — gerçek iletişim.
    contactName: 'Halit Yeşilovalı',
    phoneDisplay: '+90 548 861 69 39',
    phoneHref: '+905488616939',
    whatsapp: '905488616939',
  },
  // --- Baf: kıyı şeridi, batı ve Karpaz hatları ---
  // TODO: rakamlar Baf anahtarlarından (Girne 165 km / £170, Girne Otelleri
  // 170 km / £190, Güzelyurt 115 km / £120) türetildi — operatörle teyit edilecek.
  // Batı hatları (Lefke, Karşıyaka, Lapta) Güzelyurt üzerinden gider; bu yüzden
  // Girne'den ucuzdurlar, doğu hatları (Boğaz, Karpaz) belirgin biçimde pahalı.
  {
    slug: 'paphos-airport-to-catalkoy-hotels',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Catalkoy Hotels Area',
      tr: 'Çatalköy Oteller Bölgesi',
      ru: 'Отельная зона Чаталкёй',
    },
    toValue: 'Çatalköy Oteller Bölgesi',
    price: 190,
    roundTrip: 345,
    durationMin: 130,
    distanceKm: 173,
  },
  {
    slug: 'paphos-airport-to-alsancak-hotels',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Alsancak Hotels Area',
      tr: 'Alsancak Oteller Bölgesi',
      ru: 'Отельная зона Алсанджак',
    },
    toValue: 'Alsancak Oteller Bölgesi',
    price: 170,
    roundTrip: 310,
    durationMin: 122,
    distanceKm: 163,
  },
  {
    slug: 'paphos-airport-to-lapta',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Lapta',
      tr: 'Lapta',
      ru: 'Лапта',
    },
    toValue: 'Lapta Merkez',
    price: 165,
    roundTrip: 300,
    durationMin: 117,
    distanceKm: 157,
  },
  {
    slug: 'paphos-airport-to-karsiyaka',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Karsiyaka',
      tr: 'Karşıyaka',
      ru: 'Каршияка',
    },
    toValue: 'Karşıyaka Merkez',
    price: 160,
    roundTrip: 290,
    durationMin: 112,
    distanceKm: 150,
  },
  {
    slug: 'paphos-airport-to-esentepe-hotels',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Esentepe Hotels Area',
      tr: 'Esentepe Oteller Bölgesi',
      ru: 'Отельная зона Эсентепе',
    },
    toValue: 'Esentepe Oteller Bölgesi',
    price: 205,
    roundTrip: 370,
    durationMin: 142,
    distanceKm: 188,
  },
  {
    slug: 'paphos-airport-to-bogaz',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Bogaz',
      tr: 'Boğaz',
      ru: 'Богаз',
    },
    toValue: 'Boğaz Merkez',
    price: 230,
    roundTrip: 415,
    durationMin: 165,
    distanceKm: 225,
  },
  {
    slug: 'paphos-airport-to-karpaz-hotels',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Karpaz Hotels',
      tr: 'Karpaz Otelleri',
      ru: 'Отели Карпаза',
    },
    toValue: 'Karpaz Otelleri',
    price: 300,
    roundTrip: 540,
    durationMin: 210,
    distanceKm: 275,
  },
  {
    slug: 'paphos-airport-to-lefke',
    from: {
      en: 'Paphos Airport',
      tr: 'Baf Havalimanı',
      ru: 'Аэропорт Пафос',
    },
    fromValue: 'Baf Havalimanı',
    to: {
      en: 'Lefke',
      tr: 'Lefke',
      ru: 'Лефке',
    },
    toValue: 'Lefke Merkez',
    price: 110,
    roundTrip: 200,
    durationMin: 95,
    distanceKm: 98,
  },
  // --- Güney Kıbrıs şehir hatları ---
  {
    slug: 'guzelyurt-to-limassol',
    from: {
      en: 'Guzelyurt (Morphou)',
      tr: 'Güzelyurt',
      ru: 'Гюзельюрт (Морфу)',
    },
    fromValue: 'Güzelyurt Merkez',
    to: {
      en: 'Limassol',
      tr: 'Limasol',
      ru: 'Лимассол',
    },
    toValue: 'Limasol Merkez',
    price: 50,
    roundTrip: 90,
    durationMin: 100,
    distanceKm: 105,
    // Güzelyurt hattı doğrudan Halit Yeşilovalı tarafından işletilir — gerçek iletişim.
    contactName: 'Halit Yeşilovalı',
    phoneDisplay: '+90 548 861 69 39',
    phoneHref: '+905488616939',
    whatsapp: '905488616939',
  },
]

// Her rotanın dönüş yönü — fiyat/süre/mesafe aynı, yön ve slug ters çevrilir.
// Örn. `ercan-airport-to-kyrenia` → `kyrenia-to-ercan-airport`.
function reverse(route) {
  const i = route.slug.indexOf('-to-')
  return {
    ...route,
    slug: `${route.slug.slice(i + 4)}-to-${route.slug.slice(0, i)}`,
    from: route.to,
    to: route.from,
    fromValue: route.toValue,
    toValue: route.fromValue,
    // Ters yönde çıkış noktası havalimanı değil; rota indeksindeki havalimanı
    // filtresi bu kayıtları dışarıda bırakabilsin diye işaretlenir.
    isReturn: true,
    // Özgün metinler gidiş yönündeki slug altında tutulur (data/route-copy.mjs);
    // ters yön sayfası kaydı bu anahtarla bulur.
    baseSlug: route.slug,
  }
}

export const reverseRoutes = routes.map(reverse)

// Sayfa üretimi ve rota-içi çapraz linkler tüm yönleri görür; ana sayfa ve
// /routes/ listesi sade kalsın diye yalnızca `routes` kullanır.
export const allRoutes = [...routes, ...reverseRoutes]

// Bir rotanın varış noktasından kalkan rotalar — landing sayfasındaki
// "devam güzergahları" bloğu bunları listeler. Az sonuç çıkarsa (ör. tek yönlü
// şehir hatları) aynı kalkış noktasının diğer varışlarıyla tamamlanır.
export function connectingRoutes(route, min = 3) {
  const seen = new Set([route.slug])
  const take = (list) => list.filter((r) => !seen.has(r.slug) && (seen.add(r.slug), true))

  const onward = take(allRoutes.filter((r) => r.fromValue === route.toValue))
  if (onward.length >= min) return onward
  return [...onward, ...take(allRoutes.filter((r) => r.fromValue === route.fromValue))]
}
