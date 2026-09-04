// Bölge (hizmet alanı) sayfaları — /en/areas/…, /tr/bolge/…, /ru/rayony/…
//
// Neden ayrı bir sayfa tipi: rota sayfaları "A'dan B'ye" sorgusunu karşılar
// ("güzelyurt lefkoşa taksi"), blog yazıları ise rehber niyetini. Ama "güzelyurt
// taksi", "güzelyurt taksi durağı", "güzelyurt taksi numarası" gibi çıplak yerel
// sorguların hedefi yoktu: aranan şey bir güzergah değil, bölgede çalışan bir
// numara. Bu sayfalar tam olarak onu verir — telefon birinci eylem, fiyat tablosu
// değil.
//
// İletişim bilgisi burada TEKRARLANMAZ: şablon site.config.mjs'teki
// regionalContact'tan okur, böylece numara tek yerde durur.
//
// Yazım kuralları route-copy dosyalarıyla aynı: rakam uydurma, ünlem yok, genel
// pazarlama cümlesi yok. Buradaki mesafe/süre rakamları content/blog/
// guzelyurt-taksi-sehir-ici-sehir-disi-ogrenci ve metu-ncc-lefke-campus-transfer-guide
// içindeki tablolarla aynı kaynaktan gelir.
export const areas = [
  {
    id: 'guzelyurt',
    // Slug = sorgunun kendisi; rota sluglarının aksine kalıptan türemez.
    slugs: { en: 'guzelyurt-taxi', tr: 'guzelyurt-taksi', ru: 'taksi-gyuzelyurt' },
    // data/routes.mjs fromValue/toValue — sayfadaki güzergah listesi bununla süzülür.
    value: 'Güzelyurt Merkez',
    // İlgili rehberler (content/blog/<slug>) — sayfa sonundaki okuma bloğu.
    guides: [
      'guzelyurt-taksi-sehir-ici-sehir-disi-ogrenci',
      'guzelyurt-airport-taxi-ercan-larnaca-paphos',
      'guzelyurt-morphou-transfer-guide',
      'metu-ncc-lefke-campus-transfer-guide',
    ],
    en: {
      metaTitle: 'Guzelyurt Taxi — Local Rank, Call Direct | {phone}',
      metaDescription:
        'Taxi in Guzelyurt (Morphou), North Cyprus. Local rides, Ercan Airport transfers, METU and Lefke campus runs. Run on the ground by {name} — call or WhatsApp {phone}.',
      eyebrow: 'Service area',
      title: 'Guzelyurt Taxi',
      lead:
        'Almost nothing circles for hire in Guzelyurt. Rides here are worked by a local rank rather than caught on the street, which means one number does the whole town: a five-minute run to the hospital, a campus drop at Kalkanlı, or an airport pickup at the other end of the island.',
      callHeading: 'Guzelyurt taxi number',
      sectionsTitle: 'What the Guzelyurt taxi line covers',
      callNote:
        'The Guzelyurt and Lefke line is run on the ground by {name}. Call or message on WhatsApp for a car and the fare — both are answered day and night.',
      sections: [
        {
          title: 'Calling a taxi in Guzelyurt',
          body:
            'There is no queue of cars waiting in the centre, and after dark there is effectively none at all. A call is how a taxi arrives here: you say where you are and where you are going, the fare is agreed before the car moves, and it comes to the address rather than to a meeting point.',
        },
        {
          title: 'Local rides around town',
          body:
            'Short, everyday journeys inside Guzelyurt and the villages around it — the market, the bank, the hospital, the citrus groves, a run home in the evening when there is nothing on the street.',
        },
        {
          title: 'Ercan Airport transfers',
          body:
            'Ercan is the closest airport, about fifty minutes across the middle of the island with no border crossing. Larnaca and Paphos in the south are reached through the Bostancı (Astromeritis) crossing, which is far quicker for Guzelyurt than the Nicosia gates.',
        },
        {
          title: 'University and campus runs',
          body:
            'METU Northern Cyprus at Kalkanlı is about ten kilometres out on the Lefke road; European University of Lefke and the health sciences campus sit further along the same stretch. Term-start airport runs, late finishes and dorm-to-campus trips are a large part of the work here.',
        },
      ],
      localTitle: 'Where the local trips go',
      localNote: 'Common short journeys, agreed by phone before the car sets off.',
      local: [
        'Town centre — market, banks, restaurants',
        'Guzelyurt state hospital, clinics and pharmacies',
        'METU Northern Cyprus campus and dorms, Kalkanlı',
        'Gemikonağı beach and the Lefke coast road',
        'Soli mosaics and Vouni Palace',
        'Surrounding villages and the citrus groves',
        'Bostancı (Astromeritis) crossing to the south',
        'Evening runs home when nothing is on the street',
      ],
      routesTitle: 'Fares and routes from Guzelyurt',
      routesNote:
        'Airport transfers have a published fixed fare. The town-to-town lines are quoted on the phone, because the fare depends on the pickup point and the wait.',
      faqTitle: 'Guzelyurt taxi — common questions',
      faq: [
        {
          q: 'What is the taxi number for Guzelyurt?',
          a: 'The line is worked by {name} on {phone}, by call or on WhatsApp. The same number covers Guzelyurt, Kalkanlı, Gemikonağı and Lefke, so there is no separate rank to find for each village.',
        },
        {
          q: 'Is there a taxi rank in Guzelyurt?',
          a: 'Not one you can rely on standing at. A few cars pass through the centre during the day, but nothing waits there in the evening. Ringing ahead is the normal way to travel here, even for a short trip across town.',
        },
        {
          q: 'Can I get a taxi in Guzelyurt at night?',
          a: 'Yes, but by arrangement rather than by walking out and finding one. Late runs home, early airport departures and campus finishes are all standard — the earlier the call, the surer the car.',
        },
        {
          q: 'How long is Guzelyurt to Ercan Airport?',
          a: 'About fifty minutes over roughly fifty kilometres, straight across the middle of the island with no crossing on the way. The fare for that route is published, and flights are tracked so a delayed landing does not cost you the car.',
        },
        {
          q: 'Do you cover the METU Northern Cyprus campus?',
          a: 'Yes — the Kalkanlı campus is about ten kilometres out of Guzelyurt on the Lefke road, so it sits on the busiest line here. Name the dorm block or faculty building rather than just the campus and the driver comes to the right gate.',
        },
      ],
      guidesTitle: 'Guides for this region',
    },
    tr: {
      metaTitle: 'Güzelyurt Taksi — Bölgede Çalışan Numara | {phone}',
      metaDescription:
        'KKTC Güzelyurt taksi: şehir içi yolculuklar, Ercan Havalimanı transferi, ODTÜ ve Lefke kampüs hatları. Bölgede {name} yürütür — arayın ya da WhatsApp: {phone}.',
      eyebrow: 'Hizmet bölgesi',
      title: 'Güzelyurt Taksi',
      lead:
        'Güzelyurt’ta sokakta boşta dolaşan taksi neredeyse yoktur. Buradaki yolculuklar el kaldırılarak değil, aranarak çalışır; yani tek numara bütün kasabayı görür: hastaneye beş dakikalık bir yol, Kalkanlı’ya kampüs bırakışı ya da adanın öbür ucundan havalimanı alışı.',
      callHeading: 'Güzelyurt taksi numarası',
      sectionsTitle: 'Güzelyurt taksi hizmeti neleri kapsar',
      callNote:
        'Güzelyurt ve Lefke hattını sahada {name} yürütür. Araç ve ücret için arayın ya da WhatsApp’tan yazın — ikisi de gece gündüz açıktır.',
      sections: [
        {
          title: 'Güzelyurt’ta taksi çağırmak',
          body:
            'KKTC’nin kuzeybatısındaki Güzelyurt’ta merkezde sıra bekleyen araç dizisi yoktur, hava karardıktan sonra ise fiilen hiç yoktur. Burada taksi aramayla gelir: nerede olduğunuzu ve nereye gideceğinizi söylersiniz, ücret araç yola çıkmadan konuşulur ve araç buluşma noktasına değil adrese gelir.',
        },
        {
          title: 'Şehir içi yolculuklar',
          body:
            'Güzelyurt ve çevre köyler içinde kısa, günlük yolculuklar — pazar, banka, hastane, narenciye bahçeleri ve sokakta hiçbir şey kalmadığında akşam eve dönüş.',
        },
        {
          title: 'Ercan Havalimanı transferi',
          body:
            'En yakın havalimanı Ercan’dır; adanın tam ortasından yaklaşık elli dakika, sınır geçişi yok. Güneydeki Larnaka ve Baf’a ise Bostancı (Astromeritis) kapısından geçilir; Güzelyurt için bu kapı Lefkoşa kapılarından çok daha hızlıdır.',
        },
        {
          title: 'Üniversite ve kampüs yolculukları',
          body:
            'Kalkanlı’daki ODTÜ Kuzey Kıbrıs Kampüsü, Lefke yolunun yaklaşık on kilometre ilerisindedir; Lefke Avrupa Üniversitesi ve sağlık bilimleri kampüsü aynı şeridin devamındadır. Dönem başı havalimanı yolculukları, geç biten dersler ve yurt–kampüs arası hareket buradaki işin büyük bölümüdür.',
        },
      ],
      localTitle: 'Şehir içi yolculuklar nereye gider',
      localNote: 'En sık istenen kısa yolculuklar; ücret araç yola çıkmadan telefonda konuşulur.',
      local: [
        'Şehir merkezi — pazar, bankalar, lokantalar',
        'Güzelyurt Devlet Hastanesi, klinikler ve eczaneler',
        'ODTÜ Kuzey Kıbrıs kampüsü ve yurtları, Kalkanlı',
        'Gemikonağı sahili ve Lefke sahil yolu',
        'Soli mozaikleri ve Vouni Sarayı',
        'Çevre köyler ve narenciye bahçeleri',
        'Bostancı (Astromeritis) sınır kapısı',
        'Sokakta araç kalmadığında akşam eve dönüş',
      ],
      routesTitle: 'Güzelyurt çıkışlı ücretler ve güzergahlar',
      routesNote:
        'Havalimanı transferlerinin yayınlanmış sabit ücreti vardır. Şehirler arası hatlarda ücret telefonda konuşulur; çünkü alım noktasına ve bekleme süresine göre değişir.',
      faqTitle: 'Güzelyurt taksi — sık sorulanlar',
      faq: [
        {
          q: 'Güzelyurt taksi telefon numarası nedir?',
          a: 'Hattı {name} yürütür: {phone} — arayarak ya da WhatsApp’tan. Aynı numara Güzelyurt, Kalkanlı, Gemikonağı ve Lefke’yi kapsar; her köy için ayrı bir durak aramanız gerekmez.',
        },
        {
          q: 'Güzelyurt’ta taksi durağı var mı?',
          a: 'Gidip başında bekleyebileceğiniz türden bir durak yok. Gündüz merkezden birkaç araç geçer, akşam ise orada bekleyen olmaz. Kasaba içindeki kısa bir yol için bile önceden aramak buranın normal düzenidir.',
        },
        {
          q: 'Güzelyurt’ta gece taksi bulunur mu?',
          a: 'Bulunur, ama dışarı çıkıp aramakla değil, önceden ayarlayarak. Geç saatte eve dönüş, sabah erken havalimanı çıkışı ve kampüste geç biten günler olağan yolculuklardır — arama ne kadar erken olursa araç o kadar kesindir.',
        },
        {
          q: 'Güzelyurt Ercan Havalimanı arası ne kadar sürer?',
          a: 'Yaklaşık elli kilometre, elli dakika; adanın ortasından, yolda sınır kapısı olmadan. Bu güzergahın ücreti yayınlanmıştır ve uçuş takip edilir, rötarlı bir iniş aracınızı kaybettirmez.',
        },
        {
          q: 'ODTÜ Kuzey Kıbrıs kampüsüne gidiyor musunuz?',
          a: 'Evet. Kalkanlı kampüsü Güzelyurt’tan Lefke yolu üzerinde yaklaşık on kilometre uzaktadır, yani buranın en yoğun hattının üstündedir. “Kampüs” demek yerine yurt bloğunu ya da fakülte binasını söyleyin, şoför doğru kapıya gelsin.',
        },
      ],
      guidesTitle: 'Bu bölge için rehberler',
    },
    ru: {
      metaTitle: 'Такси Гюзельюрт — местная линия, звонок напрямую | {phone}',
      metaDescription:
        'Такси в Гюзельюрте (Морфу), Северный Кипр: поездки по городу, трансфер в аэропорт Эрджан, кампусы METU и Лефке. Линию ведёт {name} — звонок или WhatsApp: {phone}.',
      eyebrow: 'Зона обслуживания',
      title: 'Такси Гюзельюрт',
      lead:
        'Свободных машин на улицах Гюзельюрта практически не бывает. Такси здесь не ловят, а вызывают, и один номер закрывает весь город: пять минут до больницы, высадка у кампуса в Калканлы или встреча в аэропорту на другом конце острова.',
      callHeading: 'Номер такси в Гюзельюрте',
      sectionsTitle: 'Что покрывает линия такси Гюзельюрта',
      callNote:
        'Линию Гюзельюрт — Лефке ведёт на месте {name}. Позвоните или напишите в WhatsApp, чтобы вызвать машину и узнать цену: оба канала работают днём и ночью.',
      sections: [
        {
          title: 'Как вызвать такси в Гюзельюрте',
          body:
            'В центре нет очереди ожидающих машин, а после наступления темноты их нет вовсе. Такси здесь появляется по звонку: вы называете, где находитесь и куда едете, цена оговаривается до подачи, и машина подъезжает к адресу, а не к точке встречи.',
        },
        {
          title: 'Поездки по городу',
          body:
            'Короткие ежедневные маршруты по Гюзельюрту и окрестным деревням — рынок, банк, больница, цитрусовые сады и дорога домой вечером, когда на улице уже пусто.',
        },
        {
          title: 'Трансфер в аэропорт Эрджан',
          body:
            'Ближайший аэропорт — Эрджан: около пятидесяти минут через центр острова, без пункта пропуска. В южные Ларнаку и Пафос едут через переход Бостанджи (Астромеритис), который для Гюзельюрта заметно быстрее никосийских ворот.',
        },
        {
          title: 'Университеты и кампусы',
          body:
            'Кампус METU Северного Кипра в Калканлы стоит примерно в десяти километрах по дороге на Лефке; Европейский университет Лефке и кампус медицинских наук — дальше по той же полосе. Аэропортовые поездки в начале семестра, поздние возвращения и маршруты общежитие — кампус составляют большую часть здешней работы.',
        },
      ],
      localTitle: 'Куда идут городские поездки',
      localNote: 'Самые частые короткие маршруты; цена оговаривается по телефону до подачи.',
      local: [
        'Центр города — рынок, банки, кафе',
        'Государственная больница Гюзельюрта, клиники и аптеки',
        'Кампус и общежития METU Северного Кипра, Калканлы',
        'Пляж Гемиконагы и прибрежная дорога на Лефке',
        'Мозаики Соли и дворец Вуни',
        'Окрестные деревни и цитрусовые сады',
        'Переход Бостанджи (Астромеритис) на юг',
        'Вечерняя дорога домой, когда на улице пусто',
      ],
      routesTitle: 'Цены и маршруты из Гюзельюрта',
      routesNote:
        'У аэропортовых трансферов есть опубликованный фиксированный тариф. Междугородние линии считаются по телефону: цена зависит от точки подачи и ожидания.',
      faqTitle: 'Такси в Гюзельюрте — частые вопросы',
      faq: [
        {
          q: 'Какой номер такси в Гюзельюрте?',
          a: 'Линию ведёт {name}: {phone} — звонком или в WhatsApp. Этот же номер закрывает Гюзельюрт, Калканлы, Гемиконагы и Лефке, отдельную стоянку для каждой деревни искать не нужно.',
        },
        {
          q: 'Есть ли в Гюзельюрте стоянка такси?',
          a: 'Такой, у которой можно просто встать и ждать, — нет. Днём через центр проезжает несколько машин, вечером там не стоит никто. Позвонить заранее — обычный способ передвижения здесь, даже для короткой поездки через город.',
        },
        {
          q: 'Можно ли взять такси в Гюзельюрте ночью?',
          a: 'Да, но по договорённости, а не выйдя на улицу в поисках машины. Поздняя дорога домой, ранний вылет и поздно закончившийся день в кампусе — обычные поездки; чем раньше звонок, тем надёжнее машина.',
        },
        {
          q: 'Сколько ехать из Гюзельюрта в аэропорт Эрджан?',
          a: 'Около пятидесяти минут на пятьдесят километров, напрямую через центр острова, без пункта пропуска. Тариф на этот маршрут опубликован, рейс отслеживается — задержка не лишает вас машины.',
        },
        {
          q: 'Возите ли вы в кампус METU Северного Кипра?',
          a: 'Да. Кампус в Калканлы — примерно десять километров от Гюзельюрта по дороге на Лефке, то есть на самой загруженной здесь линии. Назовите корпус общежития или факультет, а не просто «кампус», — водитель подъедет к нужным воротам.',
        },
      ],
      guidesTitle: 'Гиды по этому региону',
    },
  },
  {
    id: 'lefke',
    slugs: { en: 'lefke-taxi', tr: 'lefke-taksi', ru: 'taksi-lefke' },
    value: 'Lefke Merkez',
    guides: [
      'metu-ncc-lefke-campus-transfer-guide',
      'guzelyurt-soli-vouni-west-cyprus-guide',
      'guzelyurt-taksi-sehir-ici-sehir-disi-ogrenci',
    ],
    en: {
      metaTitle: 'Lefke Taxi — Local Rank, Call Direct | {phone}',
      metaDescription:
        'Taxi in Lefke and Gemikonağı, North Cyprus. Campus runs for European University of Lefke, Ercan Airport transfers and local rides. Run by {name} — call or WhatsApp {phone}.',
      eyebrow: 'Service area',
      title: 'Lefke Taxi',
      lead:
        'Lefke sits at the western end of the island, and the practical consequence is simple: nothing passes through looking for a fare. The town, the campus, the Gemikonağı seafront and the villages up the coast all run off the same booked line, and the trips people actually need — a lecture, a flight, a hospital in the capital — start a long way from anywhere.',
      callHeading: 'Lefke taxi number',
      sectionsTitle: 'What the Lefke taxi line covers',
      callNote:
        'The Lefke and Güzelyurt line is run on the ground by {name}. Call or message on WhatsApp for a car and the fare — both are answered day and night.',
      sections: [
        {
          title: 'Calling a taxi in Lefke',
          body:
            'This is booked-car territory, not a place where you flag one down. Say where you are and where you are going, the fare is agreed before the car sets off, and it comes to the address — the campus gate, the seafront or a village up the coast.',
        },
        {
          title: 'University of Lefke and campus runs',
          body:
            'European University of Lefke sits in the town itself, and the health sciences campus and METU Northern Cyprus at Kalkanlı are along the same road east. Dorm-to-campus trips, late finishes and term-start airport runs with term-start luggage are the everyday work of this line.',
        },
        {
          title: 'Airport transfers',
          body:
            'Ercan is about seventy minutes east with no border on the way. Larnaca and Paphos in the south are reached through the Bostancı crossing; Paphos is the shortest southern run from this side of the island, straight down the west coast.',
        },
        {
          title: 'Local rides and the coast',
          body:
            'Gemikonağı beach, the Soli mosaics and Vouni Palace, Yeşilırmak at the western tip, and the everyday journeys inside Lefke itself — the market, the pharmacy, the bank, and the run home in the evening.',
        },
      ],
      localTitle: 'Where the local trips go',
      localNote: 'Common short journeys, agreed by phone before the car sets off.',
      local: [
        'Lefke town centre — market, bank, pharmacy',
        'European University of Lefke and student housing',
        'Health sciences campus and METU at Kalkanlı',
        'Gemikonağı seafront and harbour',
        'Soli mosaics and Vouni Palace',
        'Yeşilırmak and the villages at the western tip',
        'Güzelyurt hospital and the town centre',
        'Late finishes and evening runs home',
      ],
      routesTitle: 'Fares and routes from Lefke',
      routesNote:
        'Airport transfers have a published fixed fare. The town-to-town lines are quoted on the phone, because the fare depends on the pickup point and the wait.',
      faqTitle: 'Lefke taxi — common questions',
      faq: [
        {
          q: 'What is the taxi number for Lefke?',
          a: 'The line is worked by {name} on {phone}, by call or on WhatsApp. The same number covers Lefke, Gemikonağı, Kalkanlı and Güzelyurt, so one call reaches the whole western corner.',
        },
        {
          q: 'Is there a taxi rank in Lefke?',
          a: 'Not a reliable one. Lefke is the western end of the road rather than somewhere traffic passes through, so cars are booked rather than waiting. Calling ahead is normal here even for a short trip.',
        },
        {
          q: 'Do you do runs to European University of Lefke?',
          a: 'Yes, and they are a large share of the work on this line — campus, student housing and the trips out to Kalkanlı and Güzelyurt. Give the faculty or the housing block when you call so the driver comes to the right entrance.',
        },
        {
          q: 'How long is Lefke to Ercan Airport?',
          a: 'About seventy minutes over roughly eighty kilometres, east through Güzelyurt with no crossing on the way. The fare for that route is published, and the flight is tracked so a delay does not cost you the car.',
        },
        {
          q: 'Can I get to Paphos or Larnaca from Lefke?',
          a: 'Yes. Both go through the Bostancı crossing rather than the Nicosia gates, which keeps the journey direct from this side. Paphos is the shorter of the two from Lefke, straight down the west coast, and both fares are published.',
        },
      ],
      guidesTitle: 'Guides for this region',
    },
    tr: {
      metaTitle: 'Lefke Taksi — Bölgede Çalışan Numara | {phone}',
      metaDescription:
        'KKTC Lefke taksi: Lefke Avrupa Üniversitesi kampüs yolculukları, Gemikonağı sahili, Ercan Havalimanı transferi ve şehir içi yolculuklar. Bölgede {name} yürütür — {phone}.',
      eyebrow: 'Hizmet bölgesi',
      title: 'Lefke Taksi',
      lead:
        'Lefke adanın batı ucundadır ve bunun pratik sonucu basittir: buradan müşteri arayarak geçen araç olmaz. Kasaba, kampüs, Gemikonağı sahili ve sahil boyu köyler aynı çağrı hattından çalışır; insanların gerçekten gitmesi gereken yerler — bir ders, bir uçuş, başkentteki bir hastane — ise hepsi uzaktadır.',
      callHeading: 'Lefke taksi numarası',
      sectionsTitle: 'Lefke taksi hizmeti neleri kapsar',
      callNote:
        'Lefke ve Güzelyurt hattını sahada {name} yürütür. Araç ve ücret için arayın ya da WhatsApp’tan yazın — ikisi de gece gündüz açıktır.',
      sections: [
        {
          title: 'Lefke’de taksi çağırmak',
          body:
            'KKTC’nin batı ucundaki Lefke, el kaldırılan değil aranan bir yerdir. Nerede olduğunuzu ve nereye gideceğinizi söylersiniz, ücret araç yola çıkmadan konuşulur ve araç adrese gelir — kampüs kapısı, sahil ya da sahil yolundaki bir köy.',
        },
        {
          title: 'Lefke Avrupa Üniversitesi ve kampüs yolculukları',
          body:
            'Lefke Avrupa Üniversitesi kasabanın içindedir; sağlık bilimleri kampüsü ve Kalkanlı’daki ODTÜ Kuzey Kıbrıs aynı yolun doğu devamındadır. Yurt–kampüs yolculukları, geç biten dersler ve dönem başı bagajıyla havalimanı çıkışları bu hattın günlük işidir.',
        },
        {
          title: 'Havalimanı transferleri',
          body:
            'Ercan doğuya doğru yaklaşık yetmiş dakikadır ve yolda sınır kapısı yoktur. Güneydeki Larnaka ve Baf’a Bostancı kapısından geçilir; Baf, adanın bu yakasından yapılan en kısa güney yolculuğudur — dosdoğru batı sahilinden iner.',
        },
        {
          title: 'Şehir içi yolculuklar ve sahil',
          body:
            'Gemikonağı sahili, Soli mozaikleri ve Vouni Sarayı, batı ucundaki Yeşilırmak ve Lefke’nin kendi içindeki günlük yolculuklar — pazar, eczane, banka ve akşam eve dönüş.',
        },
      ],
      localTitle: 'Şehir içi yolculuklar nereye gider',
      localNote: 'En sık istenen kısa yolculuklar; ücret araç yola çıkmadan telefonda konuşulur.',
      local: [
        'Lefke merkez — pazar, banka, eczane',
        'Lefke Avrupa Üniversitesi ve öğrenci evleri',
        'Sağlık bilimleri kampüsü ve Kalkanlı’daki ODTÜ',
        'Gemikonağı sahili ve limanı',
        'Soli mozaikleri ve Vouni Sarayı',
        'Yeşilırmak ve batı ucundaki köyler',
        'Güzelyurt hastanesi ve şehir merkezi',
        'Geç biten dersler ve akşam eve dönüş',
      ],
      routesTitle: 'Lefke çıkışlı ücretler ve güzergahlar',
      routesNote:
        'Havalimanı transferlerinin yayınlanmış sabit ücreti vardır. Şehirler arası hatlarda ücret telefonda konuşulur; çünkü alım noktasına ve bekleme süresine göre değişir.',
      faqTitle: 'Lefke taksi — sık sorulanlar',
      faq: [
        {
          q: 'Lefke taksi telefon numarası nedir?',
          a: 'Hattı {name} yürütür: {phone} — arayarak ya da WhatsApp’tan. Aynı numara Lefke, Gemikonağı, Kalkanlı ve Güzelyurt’u kapsar; tek arama batı köşesinin tamamına ulaşır.',
        },
        {
          q: 'Lefke’de taksi durağı var mı?',
          a: 'Güvenip başında bekleyebileceğiniz bir durak yok. Lefke, trafiğin içinden geçtiği bir yer değil, yolun batı ucudur; araçlar bekler değil, çağrılır. Kısa bir yol için bile önceden aramak buranın olağan düzenidir.',
        },
        {
          q: 'Lefke Avrupa Üniversitesi’ne yolculuk yapıyor musunuz?',
          a: 'Evet, bu hattaki işin büyük bölümü zaten o — kampüs, öğrenci evleri ve Kalkanlı ile Güzelyurt’a uzanan yolculuklar. Ararken fakülteyi ya da bina adını söyleyin, şoför doğru girişe gelsin.',
        },
        {
          q: 'Lefke Ercan Havalimanı arası ne kadar sürer?',
          a: 'Yaklaşık seksen kilometre, yetmiş dakika; Güzelyurt üzerinden doğuya, yolda sınır kapısı olmadan. Bu güzergahın ücreti yayınlanmıştır ve uçuş takip edilir, rötar aracınızı kaybettirmez.',
        },
        {
          q: 'Lefke’den Baf ya da Larnaka’ya gidilir mi?',
          a: 'Evet. İkisi de Lefkoşa kapılarından değil, Bostancı kapısından geçer; bu yakadan yolculuğu doğrudan tutan da budur. Lefke’den bakınca Baf ikisinin kısası, batı sahilinden dümdüz iner; her iki hattın ücreti de yayınlanmıştır.',
        },
      ],
      guidesTitle: 'Bu bölge için rehberler',
    },
    ru: {
      metaTitle: 'Такси Лефке — местная линия, звонок напрямую | {phone}',
      metaDescription:
        'Такси в Лефке и Гемиконагы, Северный Кипр: поездки в Европейский университет Лефке, трансфер в аэропорт Эрджан, местные маршруты. Линию ведёт {name} — {phone}.',
      eyebrow: 'Зона обслуживания',
      title: 'Такси Лефке',
      lead:
        'Лефке стоит на западном краю острова, и практическое следствие простое: мимо не проезжает никто в поисках пассажира. Город, кампус, набережная Гемиконагы и деревни вдоль побережья держатся на одной вызывной линии, а всё, куда людям действительно нужно — лекция, рейс, больница в столице, — находится далеко.',
      callHeading: 'Номер такси в Лефке',
      sectionsTitle: 'Что покрывает линия такси Лефке',
      callNote:
        'Линию Лефке — Гюзельюрт ведёт на месте {name}. Позвоните или напишите в WhatsApp, чтобы вызвать машину и узнать цену: оба канала работают днём и ночью.',
      sections: [
        {
          title: 'Как вызвать такси в Лефке',
          body:
            'Здесь машину не ловят, а заказывают. Вы называете, где находитесь и куда едете, цена оговаривается до подачи, и машина подъезжает к адресу — к воротам кампуса, на набережную или в деревню на побережье.',
        },
        {
          title: 'Университет Лефке и поездки в кампусы',
          body:
            'Европейский университет Лефке находится в самом городе, а кампус медицинских наук и METU Северного Кипра в Калканлы — дальше по той же дороге на восток. Маршруты общежитие — кампус, поздние возвращения и аэропортовые поездки с багажом в начале семестра составляют повседневную работу этой линии.',
        },
        {
          title: 'Трансферы в аэропорты',
          body:
            'До Эрджана около семидесяти минут на восток, без пункта пропуска по дороге. В южные Ларнаку и Пафос едут через переход Бостанджи; Пафос — самая короткая южная поездка с этой стороны острова, прямо вниз по западному побережью.',
        },
        {
          title: 'Местные поездки и побережье',
          body:
            'Пляж Гемиконагы, мозаики Соли и дворец Вуни, Ешилырмак на западной оконечности — и обычные маршруты внутри самого Лефке: рынок, аптека, банк и дорога домой вечером.',
        },
      ],
      localTitle: 'Куда идут городские поездки',
      localNote: 'Самые частые короткие маршруты; цена оговаривается по телефону до подачи.',
      local: [
        'Центр Лефке — рынок, банк, аптека',
        'Европейский университет Лефке и student-жильё',
        'Кампус медицинских наук и METU в Калканлы',
        'Набережная и порт Гемиконагы',
        'Мозаики Соли и дворец Вуни',
        'Ешилырмак и деревни западной оконечности',
        'Больница и центр Гюзельюрта',
        'Поздние возвращения и вечерняя дорога домой',
      ],
      routesTitle: 'Цены и маршруты из Лефке',
      routesNote:
        'У аэропортовых трансферов есть опубликованный фиксированный тариф. Междугородние линии считаются по телефону: цена зависит от точки подачи и ожидания.',
      faqTitle: 'Такси в Лефке — частые вопросы',
      faq: [
        {
          q: 'Какой номер такси в Лефке?',
          a: 'Линию ведёт {name}: {phone} — звонком или в WhatsApp. Тот же номер закрывает Лефке, Гемиконагы, Калканлы и Гюзельюрт, так что один звонок достаёт до всего западного угла.',
        },
        {
          q: 'Есть ли в Лефке стоянка такси?',
          a: 'Надёжной — нет. Лефке не место, через которое идёт поток, а западный конец дороги, поэтому машины заказывают, а не ждут на стоянке. Позвонить заранее здесь нормально даже ради короткой поездки.',
        },
        {
          q: 'Возите ли вы в Европейский университет Лефке?',
          a: 'Да, и это большая часть работы линии — кампус, студенческое жильё и поездки в Калканлы и Гюзельюрт. Назовите при звонке факультет или корпус, чтобы водитель подъехал к нужному входу.',
        },
        {
          q: 'Сколько ехать из Лефке в аэропорт Эрджан?',
          a: 'Около семидесяти минут на восемьдесят километров, на восток через Гюзельюрт, без пункта пропуска. Тариф опубликован, рейс отслеживается — задержка не лишает вас машины.',
        },
        {
          q: 'Можно ли доехать из Лефке в Пафос или Ларнаку?',
          a: 'Да. Обе поездки идут через переход Бостанджи, а не через никосийские ворота, — так дорога с этой стороны остаётся прямой. Из Лефке Пафос ближе, прямо вниз по западному побережью; тарифы на оба маршрута опубликованы.',
        },
      ],
      guidesTitle: 'Гиды по этому региону',
    },
  },
]
