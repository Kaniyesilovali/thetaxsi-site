// Rota landing page'lerinin özgün metinleri — slug başına, dil başına.
//
// Neden ayrı dosya: data/routes.mjs fiyat/süre/mesafe gibi *veriyi* tutar, burası
// *metni* tutar. Şablon (templates/routes.mjs) buradaki kaydı bulamazsa ilgili
// bloğu hiç basmaz; yani eksik rota build'i bozmaz, sadece sade sayfa üretir.
//
// Anahtar = gidiş yönündeki slug (`ercan-airport-to-kyrenia`). Ters yön sayfası
// (`kyrenia-to-ercan-airport`) aynı kaydı `baseSlug` üzerinden bulur ve
// `intro`/`notes`/`faq` yerine yalnızca `returnIntro` metnini kullanır.
//
// Yazım kuralları:
// - Fiyat RAKAMI yazma. Rakam data/routes.mjs'te; metinde tekrarlanırsa fiyat
//   güncellenince metin yalan söyler.
// - Somut ol: yol, geçit, sınır kapısı, otel bölgesi, yürüme mesafesi. Genel
//   pazarlama cümlesi ("konforlu ve güvenli yolculuk") yazma.
// - Ünlem işareti yok. Övgü sıfatı yerine olayı anlat.
// - notes: 3 madde, bu güzergaha özgü pratik bilgi.
// - faq: 2 soru-cevap, bu güzergaha özgü — genel SSS zaten ayrı sayfada.
export const routeCopy = {
  'ercan-airport-to-kyrenia': {
    guide: 'kyrenia-harbour-castle-old-town-guide',
    en: {
      intro:
        'Ercan to Kyrenia is the first drive most visitors to the north make. You cross the Mesarya plain, climb the Beşparmak ridge, and somewhere near the top the mountains open and the sea appears below you. Thirty-five minutes later you are on the harbour road — bags in the boot, nothing asked of you.',
      notes: [
        'The mountain pass is the only slow stretch. In summer we set off a little earlier rather than hurry it.',
        "Kyrenia's old harbour is pedestrianised. We stop at the closest point a car can reach and carry your cases the rest of the way — give us the hotel name when you book.",
        'Ercan is the closest airport to Kyrenia by some margin. The same trip from Larnaca takes over an hour and adds a border crossing.',
      ],
      faq: [
        {
          q: 'How long does the Ercan to Kyrenia transfer take?',
          a: 'About 35 minutes over the Beşparmak pass, a little longer in July and August. We track your flight and move the pickup with it, so a delay never eats into your waiting time.',
        },
        {
          q: 'Can you drop me at a hotel outside Kyrenia centre?',
          a: 'Yes. The hotel strip east and west of town is a separate fare — see Ercan Airport to Kyrenia Hotels Area. If you are not sure which one applies, send us the hotel name and we will tell you.',
        },
      ],
      returnIntro:
        'Kyrenia to Ercan is the same road in reverse, and the easiest airport run on the island. The climb out of town is the slow part, so we leave with time in hand rather than push the pass.',
    },
    tr: {
      intro:
        "Ercan'dan Girne'ye, kuzeye gelenlerin ilk yolculuğu. Mesarya ovasını geçip Beşparmak sırtına tırmanırsınız; zirveye yaklaşırken dağlar açılır ve aşağıda deniz görünür. Otuz beş dakika sonra liman yolundasınız — valizler bagajda, sizden istenen hiçbir şey yok.",
      notes: [
        'Yolun tek yavaş kısmı dağ geçidi. Yazın acele etmek yerine biraz erken çıkmayı tercih ediyoruz.',
        "Girne'nin eski limanı araç trafiğine kapalı. Aracın girebildiği en yakın noktada durur, valizleri gerisini biz taşırız — rezervasyonda otel adını yazmanız yeterli.",
        "Girne'ye en yakın havalimanı açık ara Ercan. Aynı yolculuk Larnaka'dan bir saati aşar ve üstüne sınır geçişi ekler.",
      ],
      faq: [
        {
          q: 'Ercan – Girne transferi ne kadar sürer?',
          a: 'Beşparmak geçidi üzerinden yaklaşık 35 dakika; temmuz-ağustosta biraz daha uzun. Uçuşunuzu takip eder, alış saatini ona göre kaydırırız — rötar bekleme sürenizden yemez.',
        },
        {
          q: 'Girne merkez dışındaki bir otele bırakır mısınız?',
          a: 'Evet. Şehrin doğusu ve batısındaki otel bölgesi ayrı bir tarifedir — Ercan Havalimanı – Girne Oteller Bölgesi sayfasına bakın. Hangisi olduğundan emin değilseniz otel adını yazın, biz söyleyelim.',
        },
      ],
      returnIntro:
        "Girne'den Ercan'a aynı yol, ters yönde — adanın en kolay havalimanı yolculuğu. Şehirden çıkıştaki tırmanış yavaş kısmı olduğu için geçidi zorlamak yerine elimizde zamanla yola çıkarız.",
    },
    ru: {
      intro:
        'Из Эрджана в Кирению — первая дорога, которую проделывает почти каждый гость севера. Сначала равнина Месария, затем подъём на хребет Бешпармак, и где-то у перевала горы расступаются, а внизу открывается море. Через тридцать пять минут вы уже на набережной — чемоданы в багажнике, от вас не требуется ничего.',
      notes: [
        'Единственный медленный участок — горный перевал. Летом мы выезжаем чуть раньше, вместо того чтобы спешить на нём.',
        'Старая гавань Кирении пешеходная. Мы подъезжаем к ближайшей доступной для машины точке и донесём чемоданы сами — укажите название отеля при бронировании.',
        'Эрджан — самый близкий к Кирении аэропорт, с заметным отрывом. Та же поездка из Ларнаки занимает больше часа и добавляет пересечение границы.',
      ],
      faq: [
        {
          q: 'Сколько занимает трансфер Эрджан — Кирения?',
          a: 'Около 35 минут через перевал Бешпармак, в июле и августе немного дольше. Мы отслеживаем рейс и сдвигаем подачу вместе с ним, поэтому задержка не съедает ваше время ожидания.',
        },
        {
          q: 'Довезёте ли до отеля за пределами центра Кирении?',
          a: 'Да. Отельная зона к востоку и западу от города — отдельный тариф, см. «Аэропорт Эрджан — Отельная зона Кирения». Если не уверены, какой вариант ваш, пришлите название отеля, и мы подскажем.',
        },
      ],
      returnIntro:
        'Из Кирении в Эрджан — та же дорога в обратную сторону и самый простой выезд в аэропорт на острове. Медленная часть — подъём из города, поэтому мы выезжаем с запасом, а не гоним перевал.',
    },
  },
}
