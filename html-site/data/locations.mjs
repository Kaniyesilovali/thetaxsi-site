// Nereden / Nereye seçeneklerinin tek kaynağı — hero picker ve rezervasyon formu
// buradan beslenir. Yeni konum eklemek için ilgili gruba bir kayıt ekle.
// Grup sırası ekrandaki sırayı belirler: Havalimanları → Otel Bölgeleri → Bölgeler.
// `value` dilden bağımsız gönderilir (form/WhatsApp); `label` ekranda dile göre gösterilir.
const loc = (tr, en, ru) => ({
  value: tr,
  label: { tr, en: en ?? tr, ru: ru ?? en ?? tr },
})

// Bölge kayıtları "Merkez" ekiyle gösterilir: "Lapta Merkez" / "Lapta Centre" / "Лапта (центр)"
const center = (tr, en, ru) =>
  loc(`${tr} Merkez`, `${en ?? tr} Centre`, `${ru ?? en ?? tr} (центр)`)

export const locationGroups = [
  {
    id: 'airports',
    label: { tr: 'Havalimanları', en: 'Airports', ru: 'Аэропорты' },
    locations: [
      loc('Ercan Havalimanı', 'Ercan Airport', 'Аэропорт Эрджан'),
      loc('Larnaka Havalimanı', 'Larnaca Airport', 'Аэропорт Ларнака'),
      loc('Baf Havalimanı', 'Paphos Airport', 'Аэропорт Пафос'),
    ],
  },
  {
    id: 'hotels',
    label: { tr: 'Otel Bölgeleri', en: 'Hotel Areas', ru: 'Отельные зоны' },
    // `hotels`: bölge seçilince rezervasyon formunda çıkan otel listesi — şoförün
    // gideceği kapıyı netleştirir. Otel adları dilden bağımsızdır (marka adı).
    // Listede olmayan oteli müşteri elle yazabilir; yeni otel eklemek için diziye ekle.
    locations: [
      {
        ...loc('Bafra Oteller Bölgesi', 'Bafra Hotels Area', 'Отельная зона Бафра'),
        hotels: [
          'Kaya Artemis Resort & Casino',
          "Noah's Ark Deluxe Hotel & Spa",
          'Concorde Luxury Resort',
          'Limak Cyprus Deluxe Hotel',
        ],
      },
      {
        ...loc('Girne Oteller Bölgesi', 'Kyrenia Hotels Area', 'Отельная зона Кирения'),
        hotels: [
          "Lord's Palace Hotel",
          'Rocks Hotel & Casino',
          'Dome Hotel',
          'Savoy Ottoman Palace',
          'Grand Pasha Hotel',
          'Pia Bella Hotel',
          'Colony Hotel',
        ],
      },
      {
        ...loc('İskele Long Beach', 'Iskele Long Beach', 'Искеле Лонг-Бич'),
        hotels: ['Grand Sapphire Resort', 'Caesar Resort & Spa', 'Courtyard Long Beach'],
      },
      {
        ...loc('Esentepe Oteller Bölgesi', 'Esentepe Hotels Area', 'Отельная зона Эсентепе'),
        hotels: ['Korineum Golf & Beach Resort'],
      },
      {
        ...loc('Çatalköy Oteller Bölgesi', 'Catalkoy Hotels Area', 'Отельная зона Чаталкёй'),
        hotels: [
          'Elexus Hotel & Resort',
          'Cratos Premium Hotel',
          'Acapulco Resort & Convention',
          'Malpas Hotel',
          'Chamada Prestige Hotel',
        ],
      },
      {
        ...loc('Alsancak Oteller Bölgesi', 'Alsancak Hotels Area', 'Отельная зона Алсанджак'),
        hotels: [
          'Merit Royal Premium',
          'Merit Royal Hotel',
          'Merit Park Hotel',
          'Merit Crystal Cove Hotel',
          'Riverside Garden Resort',
          'Denizkızı Hotel',
          'Camelot Beach Hotel',
        ],
      },
      {
        ...loc('Karpaz Otelleri', 'Karpaz Hotels', 'Отели Карпаза'),
        hotels: ['Karpaz Gate Marina', 'Theresa Hotel'],
      },
    ],
  },
  {
    id: 'regions',
    label: { tr: 'Bölgeler', en: 'Regions', ru: 'Регионы' },
    locations: [
      center('Lefkoşa', 'Nicosia', 'Никосия'),
      center('Girne', 'Kyrenia', 'Кирения'),
      center('Gazimağusa', 'Famagusta', 'Фамагуста'),
      center('İskele', 'Iskele', 'Искеле'),
      center('Yeniboğaziçi', 'Yenibogazici', 'Енибогазичи'),
      center('Bafra', 'Bafra', 'Бафра'),
      center('Boğaz', 'Bogaz', 'Богаз'),
      center('Tatlısu', 'Tatlisu', 'Татлысу'),
      center('Esentepe', 'Esentepe', 'Эсентепе'),
      center('Çatalköy', 'Catalkoy', 'Чаталкёй'),
      center('Ozanköy', 'Ozankoy', 'Озанкёй'),
      center('Bellapais', 'Bellapais', 'Беллапаис'),
      center('Lapta', 'Lapta', 'Лапта'),
      center('Karşıyaka', 'Karsiyaka', 'Каршияка'),
      center('Alsancak', 'Alsancak', 'Алсанджак'),
      center('Karaoğlanoğlu', 'Karaoglanoglu', 'Караогланоглу'),
      center('Zeytinlik', 'Zeytinlik', 'Зейтинлик'),
      center('Karmi', 'Karmi', 'Карми'),
      center('Edremit', 'Edremit', 'Эдремит'),
      center('Dikmen', 'Dikmen', 'Дикмен'),
      center('Değirmenlik', 'Degirmenlik', 'Дегирменлик'),
      center('Geçitkale', 'Gecitkale', 'Гечиткале'),
      center('Güzelyurt', 'Guzelyurt', 'Гюзельюрт'),
      center('Lefke', 'Lefke', 'Лефке'),
      center('Gemikonağı', 'Gemikonagi', 'Гемиконагы'),
      center('Yeşilırmak', 'Yesilirmak', 'Ешилырмак'),
      center('Dipkarpaz', 'Dipkarpaz', 'Дипкарпаз'),
      center('Yeni Erenköy', 'Yeni Erenkoy', 'Ени-Эренкёй'),
      center('Karpaz', 'Karpaz', 'Карпаз'),
      center('Kalecik', 'Kalecik', 'Каледжик'),
    ],
  },
  {
    id: 'south',
    label: { tr: 'Güney Kıbrıs', en: 'South Cyprus', ru: 'Южный Кипр' },
    locations: [center('Limasol', 'Limassol', 'Лимассол')],
  },
]
