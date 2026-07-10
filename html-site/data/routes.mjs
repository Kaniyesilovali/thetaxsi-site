// Rota verisi — SEO landing page'leri buradan üretilir.
// Yeni rota eklemek için bu diziye bir kayıt ekleyip `npm run build` çalıştırman yeterli.
export const routes = [
  {
    slug: 'larnaca-airport-to-nicosia',
    from: {
      en: 'Larnaca International Airport',
      tr: 'Larnaka Uluslararası Havalimanı',
      ru: 'Международный аэропорт Ларнаки',
    },
    to: {
      en: 'Nicosia City Centre',
      tr: 'Lefkoşa Şehir Merkezi',
      ru: 'Центр Никосии',
    },
    price: 45,
    roundTrip: 80,
    durationMin: 45,
    distanceKm: 50,
  },
  {
    slug: 'larnaca-airport-to-limassol',
    from: {
      en: 'Larnaca International Airport',
      tr: 'Larnaka Uluslararası Havalimanı',
      ru: 'Международный аэропорт Ларнаки',
    },
    to: {
      en: 'Limassol City Centre',
      tr: 'Limasol Şehir Merkezi',
      ru: 'Центр Лимассола',
    },
    price: 55,
    roundTrip: 100,
    durationMin: 50,
    distanceKm: 70,
  },
  {
    slug: 'larnaca-airport-to-ayia-napa',
    from: {
      en: 'Larnaca International Airport',
      tr: 'Larnaka Uluslararası Havalimanı',
      ru: 'Международный аэропорт Ларнаки',
    },
    to: {
      en: 'Ayia Napa Resort',
      tr: 'Ayia Napa',
      ru: 'Айя-Напа',
    },
    price: 50,
    roundTrip: 90,
    durationMin: 40,
    distanceKm: 48,
  },
  {
    slug: 'paphos-airport-to-limassol',
    from: {
      en: 'Paphos International Airport',
      tr: 'Baf Uluslararası Havalimanı',
      ru: 'Международный аэропорт Пафоса',
    },
    to: {
      en: 'Limassol City Centre',
      tr: 'Limasol Şehir Merkezi',
      ru: 'Центр Лимассола',
    },
    price: 50,
    roundTrip: 90,
    durationMin: 50,
    distanceKm: 65,
  },
  {
    slug: 'paphos-airport-to-nicosia',
    from: {
      en: 'Paphos International Airport',
      tr: 'Baf Uluslararası Havalimanı',
      ru: 'Международный аэропорт Пафоса',
    },
    to: {
      en: 'Nicosia City Centre',
      tr: 'Lefkoşa Şehir Merkezi',
      ru: 'Центр Никосии',
    },
    price: 70,
    roundTrip: 125,
    durationMin: 95,
    distanceKm: 150,
  },
  {
    slug: 'paphos-airport-to-paphos-city',
    from: {
      en: 'Paphos International Airport',
      tr: 'Baf Uluslararası Havalimanı',
      ru: 'Международный аэропорт Пафоса',
    },
    to: {
      en: 'Paphos City Centre',
      tr: 'Baf Şehir Merkezi',
      ru: 'Центр Пафоса',
    },
    price: 20,
    roundTrip: 35,
    durationMin: 20,
    distanceKm: 15,
  },
]
