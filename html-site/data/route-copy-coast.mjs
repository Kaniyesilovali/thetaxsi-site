// Kıyı şeridi, batı ve Karpaz hatlarının özgün metinleri.
//
// Neden ayrı dosya: data/route-copy.mjs 146 KB'a ulaşmıştı; yeni 24 rotanın metni
// oraya eklenince dosya tek oturumda okunamaz hale geliyordu. Yapı birebir aynı —
// slug → { guide, en, tr, ru } — ve route-copy.mjs bu kaydı kendi tablosuyla
// birleştirip tek `routeCopy` olarak dışa verir. Şablon tarafında hiçbir fark yok.
//
// Yeni rota metni eklerken: hangi dosyaya yazdığın önemli değil, ikisi de aynı
// tabloya akar. Aynı slug iki dosyada varsa buradaki kazanır.
export const routeCopyCoast = {
  // ---------------------------------------------------------------- Ercan ----
  'ercan-airport-to-catalkoy-hotels': {
    guide: 'kyrenia-harbour-castle-old-town-guide',
    en: {
      intro:
        'Çatalköy sits on the coast road about eight kilometres east of Kyrenia, and the run from Ercan climbs over the Beşparmak range and drops onto it without going through the town centre at all. Forty-five minutes, and the car stops at the resort entrance you named rather than at the roundabout where the coast road begins.',
      notes: [
        'Elexus, Cratos and Acapulco each have a long private drive and more than one gate. Give us the hotel name and we use the guest entrance, not the casino coach bay.',
        'Malpas is the exception on this stretch: it is up the hillside towards Bellapais rather than on the coast, and the last two kilometres are steep and narrow. A normal drop-off, just not a coastal one.',
        'Late arrivals from Turkey are the norm here. Nothing waits outside these resorts after midnight, so the return leg is worth booking at the same time as the arrival.',
      ],
      faq: [
        {
          q: 'Is Çatalköy the same as the Kyrenia hotels area?',
          a: 'No, and the fares differ. The Kyrenia hotels area means the properties in and immediately around the town — Dome, Rocks, Lord’s Palace. Çatalköy is the cluster eight kilometres east on the coast road, Elexus and Cratos among them. Book the area your hotel actually sits in and the driver goes straight there.',
        },
        {
          q: 'Can the driver take us into Kyrenia during our stay?',
          a: 'Yes. Çatalköy to Kyrenia harbour is about ten minutes and runs at a fixed local fare, as do Bellapais, Alagadi and the Esentepe golf course. Arrange it with your driver on arrival or message us the day before.',
        },
      ],
      returnIntro:
        'Leaving Çatalköy for Ercan takes about forty-five minutes over the range, and the coast road is empty early. We collect from the resort entrance rather than the coach bay, so nobody is hunting for the car at six in the morning.',
    },
    tr: {
      intro:
        'Çatalköy, Girne’nin yaklaşık sekiz kilometre doğusunda, sahil yolu üzerindedir; Ercan’dan gelen yol Beşparmak’ı aşar ve şehir merkezine hiç girmeden buraya iner. Kırk beş dakika sonra araç, sahil yolunun başladığı kavşakta değil, adını verdiğiniz tesisin girişinde durur.',
      notes: [
        'Elexus, Cratos ve Acapulco’nun uzun özel giriş yolları ve birden fazla kapısı var. Otel adını yazın; casino otobüs peronunu değil misafir girişini kullanalım.',
        'Bu şeritte Malpas istisnadır: sahilde değil, Bellapais yönünde yamaçtadır ve son iki kilometre dik ve dardır. Sıradan bir varış noktası, sadece sahilde olanı değil.',
        'Türkiye’den gece inen uçuşlar bu hatta olağandır. Gece yarısından sonra bu tesislerin önünde bekleyen araç bulunmaz; dönüşü de gelişle birlikte ayırtmakta fayda var.',
      ],
      faq: [
        {
          q: 'Çatalköy ile Girne Oteller Bölgesi aynı şey mi?',
          a: 'Değil, ücretleri de farklı. Girne Oteller Bölgesi şehrin içindeki ve hemen çevresindeki tesisler demek: Dome, Rocks, Lord’s Palace. Çatalköy ise sahil yolunda sekiz kilometre doğudaki küme; Elexus ve Cratos oradadır. Otelinizin gerçekten bulunduğu bölgeyi seçin, şoför doğrudan oraya gitsin.',
        },
        {
          q: 'Konaklama sırasında şoför bizi Girne’ye götürebilir mi?',
          a: 'Evet. Çatalköy’den Girne limanına on dakika ve sabit yerel ücretle gidilir; Bellapais, Alagadi ve Esentepe golf sahası da öyle. Varışta şoförünüzle konuşun ya da bir gün önceden bize yazın.',
        },
      ],
      returnIntro:
        'Çatalköy’den Ercan’a dönüş dağ yolundan yaklaşık kırk beş dakika sürer ve sahil yolu sabahın erken saatinde boştur. Sizi otobüs peronundan değil tesis girişinden alırız; kimse altıda araç aramaz.',
    },
    ru: {
      intro:
        'Чаталкёй лежит на прибрежном шоссе примерно в восьми километрах к востоку от Кирении, и дорога из Эрджана переваливает через хребет Бешпармак и выходит прямо сюда, минуя центр города. Сорок пять минут — и машина останавливается у входа названного вами отеля, а не у развязки, где начинается прибрежное шоссе.',
      notes: [
        'У Elexus, Cratos и Acapulco длинные частные подъезды и несколько ворот. Укажите отель — мы подъедем к гостевому входу, а не к площадке казиночных автобусов.',
        'Malpas на этом участке — исключение: он не на побережье, а выше по склону в сторону Беллапаиса, и последние два километра круты и узки. Обычная точка высадки, просто не прибрежная.',
        'Поздние рейсы из Турции здесь обычное дело. После полуночи у этих отелей не стоит ни одной свободной машины, поэтому обратную дорогу стоит забронировать сразу вместе с прилётом.',
      ],
      faq: [
        {
          q: 'Чаталкёй и отельная зона Кирении — это одно и то же?',
          a: 'Нет, и цены отличаются. Отельная зона Кирении — это отели в самом городе и рядом с ним: Dome, Rocks, Lord’s Palace. Чаталкёй — кластер в восьми километрах восточнее по прибрежному шоссе, там Elexus и Cratos. Выбирайте ту зону, где действительно стоит ваш отель, и водитель поедет прямо туда.',
        },
        {
          q: 'Может ли водитель отвезти нас в Кирению во время отдыха?',
          a: 'Да. От Чаталкёя до гавани Кирении около десяти минут по фиксированному местному тарифу; так же — Беллапаис, Алагади и поле для гольфа в Эсентепе. Договоритесь с водителем по приезде или напишите нам накануне.',
        },
      ],
      returnIntro:
        'Обратный путь из Чаталкёя в Эрджан занимает около сорока пяти минут через хребет, и рано утром прибрежное шоссе пустое. Забираем от входа в отель, а не от автобусной площадки, чтобы в шесть утра никто не искал машину.',
    },
  },

  'ercan-airport-to-alsancak-hotels': {
    guide: 'kyrenia-harbour-castle-old-town-guide',
    en: {
      intro:
        'Alsancak is the strip west of Kyrenia where the Merit properties sit almost on top of each other, and the drive from Ercan is forty-five minutes over the pass and along the coast. The distinction that matters here is not the town but the building: four hotels share a name and a couple of kilometres of road.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park and Merit Crystal Cove are four separate hotels. Royal and Royal Premium share a forecourt; Park and Crystal Cove are further along. Tell us which one and you will not be walking between them with cases.',
        'Riverside Garden Resort is set back inland off the main road rather than on the sea front, and the turning is easy to miss in the dark. We take it as a matter of course.',
        'Escape Beach, Denizkızı and Camelot are on this same stretch. Local runs into Kyrenia, up to Lapta or across to Karşıyaka are fixed-price and can be arranged with your driver.',
      ],
      faq: [
        {
          q: 'There are four Merit hotels — how do I make sure I am dropped at the right one?',
          a: 'Put the exact property in the booking: Merit Royal, Merit Royal Premium, Merit Park or Merit Crystal Cove. They are all on the Alsancak fare, so the price does not change, but the gates are up to two kilometres apart and the difference matters at one in the morning.',
        },
        {
          q: 'Is Alsancak far from Kyrenia town?',
          a: 'About ten kilometres, fifteen minutes on the coast road. Close enough that the harbour and the castle are an easy evening out, far enough that you will not find a taxi waiting outside the hotel to bring you back. We run that leg at a fixed local fare.',
        },
      ],
      returnIntro:
        'Departures from Alsancak mean an early car along a quiet coast road, then the climb over the pass to Ercan — about forty-five minutes in all. Tell us which of the Merit forecourts you are standing on and the driver comes to that one.',
    },
    tr: {
      intro:
        'Alsancak, Girne’nin batısında Merit tesislerinin neredeyse iç içe dizildiği şerittir; Ercan’dan yolculuk dağ geçidi ve sahil yoluyla kırk beş dakika sürer. Burada önemli olan ayrım kasaba değil bina: dört otel aynı adı ve birkaç kilometrelik yolu paylaşıyor.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park ve Merit Crystal Cove dört ayrı oteldir. Royal ile Royal Premium aynı ön avluyu paylaşır; Park ve Crystal Cove daha ileridedir. Hangisi olduğunu yazın, bavullarla aralarında yürümek zorunda kalmayın.',
        'Riverside Garden Resort deniz kenarında değil, ana yoldan içeride kalır ve sapağı karanlıkta kolayca kaçırılır. Biz o sapağı zaten biliyoruz.',
        'Escape Beach, Denizkızı ve Camelot aynı şerit üzerindedir. Girne’ye, Lapta’ya ya da Karşıyaka’ya yerel yolculuklar sabit fiyatlıdır; şoförünüzle ayarlayabilirsiniz.',
      ],
      faq: [
        {
          q: 'Dört tane Merit var — doğru olanın önünde indiğimden nasıl emin olurum?',
          a: 'Rezervasyona tesisin tam adını yazın: Merit Royal, Merit Royal Premium, Merit Park ya da Merit Crystal Cove. Hepsi Alsancak ücretine dahildir, fiyat değişmez; ama kapılar arasında iki kilometreye varan mesafe vardır ve bu fark gece birde önem kazanır.',
        },
        {
          q: 'Alsancak Girne merkeze uzak mı?',
          a: 'Yaklaşık on kilometre, sahil yolundan on beş dakika. Liman ve kale rahat bir akşam gezisi olacak kadar yakın; otelin önünde sizi geri götürecek taksi bulamayacağınız kadar da uzak. O bacağı sabit yerel ücretle biz yaparız.',
        },
      ],
      returnIntro:
        'Alsancak’tan dönüşler sakin bir sahil yolu ve ardından Ercan’a tırmanan geçit demektir — toplamda kırk beş dakika. Hangi Merit’in ön avlusunda beklediğinizi söyleyin, şoför oraya gelsin.',
    },
    ru: {
      intro:
        'Алсанджак — полоса к западу от Кирении, где отели Merit стоят почти вплотную друг к другу, а дорога из Эрджана занимает сорок пять минут через перевал и вдоль побережья. Здесь важен не посёлок, а конкретное здание: четыре отеля делят одно название и пару километров дороги.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park и Merit Crystal Cove — четыре разных отеля. У Royal и Royal Premium общий двор, Park и Crystal Cove дальше по дороге. Назовите нужный, и вам не придётся идти между ними с чемоданами.',
        'Riverside Garden Resort стоит не на берегу, а в стороне от главной дороги вглубь, и поворот легко пропустить в темноте. Мы сворачиваем туда как само собой разумеющееся.',
        'Escape Beach, Denizkızı и Camelot — на этом же участке. Поездки в Кирению, в Лапту или в Каршияку идут по фиксированной цене, договориться можно с водителем.',
      ],
      faq: [
        {
          q: 'Отелей Merit четыре — как не ошибиться с высадкой?',
          a: 'Укажите в брони точное название: Merit Royal, Merit Royal Premium, Merit Park или Merit Crystal Cove. Все они входят в тариф Алсанджака, цена не меняется, но между воротами до двух километров, и в час ночи эта разница ощутима.',
        },
        {
          q: 'Далеко ли Алсанджак от центра Кирении?',
          a: 'Около десяти километров, пятнадцать минут по прибрежной дороге. Достаточно близко, чтобы гавань и замок стали лёгкой вечерней прогулкой, и достаточно далеко, чтобы у отеля не оказалось такси на обратный путь. Этот отрезок мы возим по фиксированному местному тарифу.',
        },
      ],
      returnIntro:
        'Выезд из Алсанджака — это ранняя машина по пустой прибрежной дороге и подъём на перевал к Эрджану, всего около сорока пяти минут. Скажите, у какого из дворов Merit вы стоите, и водитель подъедет именно туда.',
    },
  },

  'ercan-airport-to-lapta': {
    guide: 'kyrenia-harbour-castle-old-town-guide',
    en: {
      intro:
        'Lapta is two places with one name: a village of narrow lanes climbing the hillside, and a coastal strip below it with the hotels and the walkway. Fifty minutes from Ercan gets you to either, but they are a steep couple of kilometres apart and the driver needs to know which one you mean.',
      notes: [
        'If you are staying in the old village, send the street or a pin. The lanes above the main road are narrow, and several are one-way in a direction the map does not always show.',
        'The Lapta coastal walkway, the hotels and most holiday rentals are on the lower strip, straight off the Kyrenia road. That is the simpler drop-off of the two.',
        'Lapta has a long-stay and expat population rather than a resort centre, so there is no taxi rank. Fixed-price runs into Kyrenia, Alsancak or Karşıyaka are the practical way around.',
      ],
      faq: [
        {
          q: 'I have a villa in Lapta but only a site name, no street address. Is that enough?',
          a: 'Usually yes — the developments here are known by name and our drivers work this coast daily. Send the site name when you book and a pin if you have one; between the two we will find the door without a phone call at midnight.',
        },
        {
          q: 'How far is Lapta from Kyrenia?',
          a: 'Sixteen kilometres, around twenty minutes on the coast road. Alsancak and Escape Beach are closer still. All three run at fixed local fares, which is worth knowing since nothing waits outside in Lapta after dinner.',
        },
      ],
      returnIntro:
        'Getting out of Lapta for a flight means the coast road east and then the climb to the pass — about fifty minutes to Ercan. If you are up in the village, tell us and the driver comes up rather than waiting on the main road below.',
    },
    tr: {
      intro:
        'Lapta tek adla iki yerdir: yamaca tırmanan dar sokaklı köy ve onun altında otellerin ve yürüyüş yolunun bulunduğu sahil şeridi. Ercan’dan elli dakika ikisine de götürür, ama aralarında dik birkaç kilometre vardır ve şoförün hangisini kastettiğinizi bilmesi gerekir.',
      notes: [
        'Eski köyde kalıyorsanız sokak adını ya da konum işaretini gönderin. Ana yolun üstündeki sokaklar dardır ve birkaçı haritanın her zaman göstermediği yönde tek yönlüdür.',
        'Lapta yürüyüş yolu, oteller ve tatil kiralamalarının çoğu alt şerittedir, Girne yolundan doğrudan sapılır. İkisinden daha kolay olanı budur.',
        'Lapta’da tatil merkezi değil, uzun süreli ve yabancı yerleşik bir nüfus vardır; dolayısıyla taksi durağı yoktur. Girne, Alsancak ya da Karşıyaka’ya sabit fiyatlı yolculuklar pratik çözümdür.',
      ],
      faq: [
        {
          q: 'Lapta’da villam var ama sadece site adı biliyorum, sokak adresi yok. Yeter mi?',
          a: 'Genelde yeter — buradaki siteler adlarıyla bilinir ve şoförlerimiz bu sahilde her gün çalışır. Rezervasyonda site adını, varsa konum işaretini gönderin; ikisiyle birlikte gece yarısı telefon açmadan kapıyı buluruz.',
        },
        {
          q: 'Lapta Girne’ye ne kadar uzak?',
          a: 'On altı kilometre, sahil yolundan yaklaşık yirmi dakika. Alsancak ve Escape Beach daha da yakın. Üçü de sabit yerel ücretle gidilir; akşam yemeğinden sonra Lapta’da bekleyen araç bulunmadığı için bunu bilmekte fayda var.',
        },
      ],
      returnIntro:
        'Uçuş için Lapta’dan çıkmak, doğuya sahil yolu ve ardından geçide tırmanış demektir — Ercan’a yaklaşık elli dakika. Köyde yukarıdaysanız söyleyin, şoför aşağıda ana yolda beklemek yerine yukarı çıksın.',
    },
    ru: {
      intro:
        'Лапта — это два места под одним названием: деревня с узкими улочками, взбирающаяся по склону, и прибрежная полоса под ней с отелями и набережной. Пятьдесят минут из Эрджана довезут до любой из них, но между ними пара километров крутого подъёма, и водителю нужно знать, какая вам нужна.',
      notes: [
        'Если вы живёте в старой деревне, пришлите улицу или метку на карте. Улочки выше главной дороги узкие, и часть из них односторонние в направлении, которое карта показывает не всегда.',
        'Набережная Лапты, отели и большинство апартаментов — на нижней полосе, сразу с дороги на Кирению. Из двух вариантов это более простая высадка.',
        'В Лапте живут подолгу — это не курортный центр, и стоянки такси здесь нет. Поездки в Кирению, Алсанджак или Каршияку по фиксированной цене — практичный выход.',
      ],
      faq: [
        {
          q: 'У меня вилла в Лапте, но известно только название комплекса, без адреса. Этого хватит?',
          a: 'Обычно да — здешние комплексы известны по названиям, а наши водители работают на этом побережье каждый день. Пришлите название при бронировании и метку, если она есть; вдвоём этого достаточно, чтобы найти дверь без звонка в полночь.',
        },
        {
          q: 'Далеко ли Лапта от Кирении?',
          a: 'Шестнадцать километров, около двадцати минут по прибрежной дороге. Алсанджак и Escape Beach ещё ближе. Все три — по фиксированному местному тарифу, и это стоит иметь в виду: после ужина у отелей в Лапте машин не остаётся.',
        },
      ],
      returnIntro:
        'Уехать из Лапты на рейс — это прибрежная дорога на восток и затем подъём к перевалу, около пятидесяти минут до Эрджана. Если вы наверху в деревне, скажите — водитель поднимется, а не будет ждать внизу на главной дороге.',
    },
  },

  'ercan-airport-to-karsiyaka': {
    guide: 'north-cyprus-villages-heritage-guide',
    en: {
      intro:
        'Karşıyaka is the last of the coastal villages before the road west empties out towards Kayalar and the tip of the island. Fifty-five minutes from Ercan, and the last stretch runs with the Beşparmak on one side and open sea on the other. Almost everyone arriving here is going to a house rather than a hotel.',
      notes: [
        'Addresses out here are site names and landmarks, not street numbers. Send whatever you have — the development, the nearest restaurant, a pin — and the driver will work from that.',
        'The village proper climbs the slope above the main road and the lanes narrow quickly. If your place is up there, say so and we will not stop at the bottom and leave you the hill.',
        'There is no taxi rank in Karşıyaka and very little passing traffic in the evening. Runs to Lapta, Alsancak, Kyrenia or the Sunday market are fixed price and worth arranging in advance.',
      ],
      faq: [
        {
          q: 'Is the road to Karşıyaka difficult at night?',
          a: 'It is a good coastal road, but unlit for long stretches once you pass Lapta, and the turnings into the developments are unmarked. That is precisely why a booked car with a driver who knows the sites beats trying to direct a stranger from the back seat.',
        },
        {
          q: 'Can you collect us from Karşıyaka for a day out?',
          a: 'Yes. Kyrenia harbour, Bellapais, the Alsancak beaches and the Güzelyurt side are all standard fixed-price local runs from here. Tell the driver on arrival or message us and we will set a time.',
        },
      ],
      returnIntro:
        'Leaving Karşıyaka means fifty-five minutes back along the coast and over the pass to Ercan. There is nothing passing at dawn out here, so the pickup is arranged rather than hailed — give us the site name and the driver comes to the door.',
    },
    tr: {
      intro:
        'Karşıyaka, yol batıya doğru Kayalar ve adanın ucuna boşalmadan önceki son sahil köyüdür. Ercan’dan elli beş dakika; son bölümde bir yanda Beşparmak, diğer yanda açık deniz vardır. Buraya gelenlerin neredeyse tamamı otele değil bir eve gider.',
      notes: [
        'Buradaki adresler sokak numarası değil, site adı ve tarif noktalarıdır. Elinizde ne varsa gönderin — site, en yakın lokanta, konum işareti — şoför onunla çalışır.',
        'Köyün kendisi ana yolun üstünde yamaca tırmanır ve sokaklar hızla daralır. Eviniz yukarıdaysa söyleyin; aşağıda durup yokuşu size bırakmayalım.',
        'Karşıyaka’da taksi durağı yoktur ve akşam geçen araç da azdır. Lapta, Alsancak, Girne ya da pazar yerine yolculuklar sabit fiyatlıdır; önceden ayarlamakta fayda var.',
      ],
      faq: [
        {
          q: 'Karşıyaka yolu geceleri zor mu?',
          a: 'Sahil yolu iyidir ama Lapta’yı geçtikten sonra uzun bölümleri aydınlatmasızdır ve sitelerin sapakları işaretsizdir. Siteleri bilen bir şoförle önceden ayrılmış araç, arka koltuktan yabancı birine tarif vermeye çalışmaktan tam da bu yüzden iyidir.',
        },
        {
          q: 'Gezi için bizi Karşıyaka’dan alabilir misiniz?',
          a: 'Evet. Girne limanı, Bellapais, Alsancak plajları ve Güzelyurt tarafı buradan sabit fiyatlı olağan yerel yolculuklardır. Varışta şoföre söyleyin ya da bize yazın, saatini belirleyelim.',
        },
      ],
      returnIntro:
        'Karşıyaka’dan ayrılmak, sahil boyunca geri ve geçit üzerinden Ercan’a elli beş dakika demektir. Şafakta buradan geçen araç olmaz; alım el kaldırarak değil önceden ayarlanır — site adını verin, şoför kapıya gelsin.',
    },
    ru: {
      intro:
        'Каршияка — последняя прибрежная деревня перед тем, как дорога на запад пустеет в сторону Каялара и оконечности острова. Пятьдесят пять минут из Эрджана, и на последнем отрезке с одной стороны Бешпармак, с другой открытое море. Почти все, кто сюда едет, направляются в дом, а не в отель.',
      notes: [
        'Адреса здесь — это названия комплексов и ориентиры, а не номера домов. Присылайте что есть: комплекс, ближайший ресторан, метку на карте — водитель разберётся.',
        'Сама деревня поднимается по склону над главной дорогой, и улочки быстро сужаются. Если ваш дом наверху, скажите — мы не остановимся внизу, оставив вам подъём.',
        'Стоянки такси в Каршияке нет, а вечером и попутных машин почти не бывает. Поездки в Лапту, Алсанджак, Кирению или на воскресный рынок идут по фиксированной цене, и их стоит согласовать заранее.',
      ],
      faq: [
        {
          q: 'Сложна ли дорога в Каршияку ночью?',
          a: 'Прибрежная дорога хорошая, но после Лапты длинные участки не освещены, а съезды к комплексам не обозначены. Именно поэтому заранее заказанная машина с водителем, знающим эти комплексы, лучше попыток объяснять дорогу незнакомому человеку с заднего сиденья.',
        },
        {
          q: 'Можете забрать нас из Каршияки на дневную поездку?',
          a: 'Да. Гавань Кирении, Беллапаис, пляжи Алсанджака и сторона Гюзельюрта — обычные местные маршруты по фиксированной цене. Скажите водителю по приезде или напишите нам, и мы назначим время.',
        },
      ],
      returnIntro:
        'Уехать из Каршияки — это пятьдесят пять минут обратно вдоль побережья и через перевал к Эрджану. На рассвете здесь ничего не проезжает, так что машину не ловят, а заказывают: назовите комплекс, и водитель подъедет к двери.',
    },
  },

  'ercan-airport-to-esentepe-hotels': {
    guide: 'kyrenia-harbour-castle-old-town-guide',
    en: {
      intro:
        'Esentepe is twenty-five kilometres east of Kyrenia, where the coast opens out and the hillside is covered in golf villas and resort developments rather than a village core. Fifty-five minutes from Ercan. The address here is almost never a street — it is Korineum, or a site name, or a plot number on a hill.',
      notes: [
        'Korineum Golf & Beach Resort has its own approach road off the coast road; the clubhouse and the hotel reception are not the same drop-off. Say which and we go to it directly.',
        'The developments above Esentepe spread across several kilometres of unlit hillside with unnamed turnings. A site name plus a pin makes the difference between arriving and circling.',
        'Alagadi turtle beach, Kyrenia and Bellapais are the usual runs from here and all are fixed price. There is no taxi rank in Esentepe at any hour.',
      ],
      faq: [
        {
          q: 'Do you deliver to villas and golf developments, not just hotels?',
          a: 'Yes — most of our Esentepe work is exactly that. Give us the development name and, if you have it, the plot or block. Our drivers know Korineum and the sites around it, so you are not directing anyone in the dark.',
        },
        {
          q: 'How far is Esentepe from Kyrenia for evenings out?',
          a: 'Twenty-five kilometres, about half an hour on the coast road. Far enough that nothing will be waiting to bring you home, which is why the return leg is worth fixing with your driver before you go.',
        },
      ],
      returnIntro:
        'The run from Esentepe to Ercan is about fifty-five minutes, west along the coast and then over the pass. We come up to the villa or the resort reception rather than meeting on the coast road below — the hillside is no place to stand with luggage.',
    },
    tr: {
      intro:
        'Esentepe, Girne’nin yirmi beş kilometre doğusunda, sahilin açıldığı ve yamacın köy dokusu yerine golf villaları ve sitelerle kaplandığı yerdedir. Ercan’dan elli beş dakika. Buradaki adres neredeyse hiç sokak olmaz — Korineum’dur, bir site adıdır ya da tepedeki bir parsel numarasıdır.',
      notes: [
        'Korineum Golf & Beach Resort’un sahil yolundan ayrılan kendi giriş yolu vardır; kulüp binası ile otel resepsiyonu aynı iniş noktası değildir. Hangisi olduğunu söyleyin, doğrudan oraya gidelim.',
        'Esentepe’nin üstündeki siteler, aydınlatmasız ve sapakları adsız birkaç kilometrelik yamaca yayılır. Site adı ve konum işareti, varmakla tur atmak arasındaki farktır.',
        'Alagadi kaplumbağa plajı, Girne ve Bellapais buradan olağan yolculuklardır ve hepsi sabit fiyatlıdır. Esentepe’de hiçbir saatte taksi durağı bulunmaz.',
      ],
      faq: [
        {
          q: 'Sadece otellere değil, villalara ve golf sitelerine de geliyor musunuz?',
          a: 'Evet — Esentepe işimizin çoğu tam olarak budur. Site adını, varsa parsel ya da blok numarasını verin. Şoförlerimiz Korineum’u ve çevresindeki siteleri bilir; karanlıkta kimseye tarif vermek zorunda kalmazsınız.',
        },
        {
          q: 'Akşam gezmeleri için Esentepe Girne’ye ne kadar uzak?',
          a: 'Yirmi beş kilometre, sahil yolundan yaklaşık yarım saat. Sizi geri getirecek bir aracın hazır beklemeyeceği kadar uzak; bu yüzden dönüş bacağını çıkmadan önce şoförünüzle netleştirmekte fayda var.',
        },
      ],
      returnIntro:
        'Esentepe’den Ercan’a yolculuk yaklaşık elli beş dakikadır: batıya sahil yolu, ardından geçit. Aşağıda sahil yolunda buluşmak yerine villaya ya da tesis resepsiyonuna kadar çıkarız — yamaç, bavulla beklenecek yer değildir.',
    },
    ru: {
      intro:
        'Эсентепе лежит в двадцати пяти километрах к востоку от Кирении, там, где побережье раскрывается, а склон занят гольф-виллами и жилыми комплексами, а не деревенским центром. Пятьдесят пять минут из Эрджана. Адрес здесь почти никогда не улица — это Korineum, или название комплекса, или номер участка на холме.',
      notes: [
        'У Korineum Golf & Beach Resort собственная подъездная дорога с прибрежного шоссе, и клубный дом с ресепшн отеля — разные точки высадки. Скажите, какая нужна, и мы поедем прямо туда.',
        'Комплексы выше Эсентепе разбросаны по нескольким километрам неосвещённого склона с безымянными съездами. Название комплекса плюс метка на карте — это разница между «приехали» и «кружим».',
        'Черепаший пляж Алагади, Кирения и Беллапаис — обычные маршруты отсюда, все по фиксированной цене. Стоянки такси в Эсентепе нет ни в какое время суток.',
      ],
      faq: [
        {
          q: 'Вы возите к виллам и в гольф-комплексы, а не только в отели?',
          a: 'Да, и в Эсентепе это большая часть нашей работы. Назовите комплекс и, если знаете, участок или корпус. Наши водители знают Korineum и соседние комплексы, так что объяснять дорогу в темноте не придётся.',
        },
        {
          q: 'Далеко ли Эсентепе от Кирении для вечерних выездов?',
          a: 'Двадцать пять километров, около получаса по прибрежной дороге. Достаточно далеко, чтобы обратно вас никто не ждал, — поэтому обратный отрезок стоит обговорить с водителем заранее.',
        },
      ],
      returnIntro:
        'Дорога из Эсентепе в Эрджан занимает около пятидесяти пяти минут: на запад вдоль побережья, затем через перевал. Мы поднимаемся к вилле или к ресепшн, а не встречаемся внизу на шоссе, — склон не то место, где стоят с чемоданами.',
    },
  },

  'ercan-airport-to-bogaz': {
    guide: 'long-beach-iskele-things-to-do',
    en: {
      intro:
        'Boğaz is the fishing harbour where the east coast road meets the turning for the Karpaz, about fifty minutes from Ercan. It is a working harbour with a line of fish restaurants along it rather than a resort, which is most of its appeal — and the reason nothing waits outside to take you anywhere afterwards.',
      notes: [
        'The harbour, the restaurants and the hotels sit within a few hundred metres of each other, so a restaurant name is a perfectly good drop-off point here.',
        'This is the junction for the Karpaz. If you are heading up the peninsula later in the week, it is the same driver and a fixed price rather than a negotiation at the roadside.',
        'Long Beach and İskele are ten minutes south, Famagusta about twenty-five. Both run at fixed local fares, which is the practical way to eat out and get back.',
      ],
      faq: [
        {
          q: 'Is Boğaz a good base for the Karpaz peninsula?',
          a: 'It is the last proper stop before the peninsula road, so yes — Golden Beach and the monastery at Apostolos Andreas are a long but straightforward day from here. We run it as a fixed-price day trip with the driver staying with you rather than dropping and leaving.',
        },
        {
          q: 'Can we be dropped straight at one of the fish restaurants?',
          a: 'Yes, and it is the usual request. Give the restaurant name in the booking. The harbour front is compact enough that we can set you down at the door and collect from the same spot later at a fixed fare.',
        },
      ],
      returnIntro:
        'From Boğaz back to Ercan is about fifty minutes down the coast and inland across the Mesarya. Nothing passes the harbour early, so the car is booked rather than found — tell us the hotel or the restaurant and we are there.',
    },
    tr: {
      intro:
        'Boğaz, doğu sahil yolunun Karpaz sapağıyla buluştuğu balıkçı limanıdır; Ercan’a yaklaşık elli dakika. Tatil beldesi değil, boyunca balık lokantaları dizilmiş çalışan bir limandır — cazibesinin çoğu buradan gelir, sonrasında sizi bir yere götürecek aracın önünde beklememesinin sebebi de budur.',
      notes: [
        'Liman, lokantalar ve oteller birkaç yüz metre içinde toplandığı için burada lokanta adı gayet iyi bir iniş noktasıdır.',
        'Burası Karpaz’ın sapağıdır. Hafta içinde yarımadaya çıkacaksanız, yol kenarında pazarlık yerine aynı şoför ve sabit fiyat geçerlidir.',
        'Long Beach ve İskele on dakika güneyde, Gazimağusa yaklaşık yirmi beş dakika. İkisi de sabit yerel ücretle gidilir; dışarıda yemek yiyip dönmenin pratik yolu budur.',
      ],
      faq: [
        {
          q: 'Karpaz yarımadası için Boğaz iyi bir üs mü?',
          a: 'Yarımada yolundan önceki son düzgün duraktır, dolayısıyla evet — Altınkum ve Apostolos Andreas manastırı buradan uzun ama sorunsuz bir gün eder. Bunu sabit fiyatlı günlük tur olarak yaparız; şoför bırakıp gitmez, sizinle kalır.',
        },
        {
          q: 'Doğrudan balık lokantalarından birinin önünde inebilir miyiz?',
          a: 'Evet, en sık gelen istek de budur. Rezervasyona lokanta adını yazın. Liman önü yeterince derli topludur; kapıda indirir, sonra aynı noktadan sabit ücretle alırız.',
        },
      ],
      returnIntro:
        'Boğaz’dan Ercan’a dönüş, sahil boyunca aşağı ve Mesarya’yı geçerek yaklaşık elli dakikadır. Erken saatte limanın önünden araç geçmez; araba bulunmaz, ayrılır — otel ya da lokanta adını söyleyin, oradayız.',
    },
    ru: {
      intro:
        'Богаз — рыбацкая гавань там, где восточное прибрежное шоссе встречается с поворотом на Карпаз, примерно в пятидесяти минутах от Эрджана. Это не курорт, а работающая гавань с вереницей рыбных ресторанов вдоль неё — в этом её главная прелесть и причина, по которой после ужина здесь никто вас никуда не увезёт.',
      notes: [
        'Гавань, рестораны и отели умещаются в несколько сотен метров, поэтому название ресторана здесь — вполне точная точка высадки.',
        'Отсюда начинается дорога на Карпаз. Если позже на неделе вы поедете на полуостров, это будет тот же водитель и фиксированная цена, а не торг на обочине.',
        'Лонг-Бич и Искеле в десяти минутах южнее, Фамагуста примерно в двадцати пяти. И туда, и туда — фиксированный местный тариф; это практичный способ поужинать и вернуться.',
      ],
      faq: [
        {
          q: 'Годится ли Богаз как база для полуострова Карпаз?',
          a: 'Это последняя настоящая остановка перед дорогой на полуостров, так что да: Золотой пляж и монастырь Апостола Андрея — долгий, но несложный день отсюда. Мы возим это как поездку по фиксированной цене, и водитель остаётся с вами, а не высаживает и уезжает.',
        },
        {
          q: 'Можно высадиться прямо у одного из рыбных ресторанов?',
          a: 'Да, и просят об этом чаще всего. Укажите название ресторана при бронировании. Набережная компактная: высадим у двери и позже заберём с того же места по фиксированной цене.',
        },
      ],
      returnIntro:
        'От Богаза до Эрджана около пятидесяти минут вниз вдоль побережья и вглубь через Месарью. Рано утром мимо гавани ничего не проезжает, поэтому машину заказывают, а не находят: назовите отель или ресторан — и мы на месте.',
    },
  },

  'ercan-airport-to-karpaz-hotels': {
    guide: 'karpaz-golden-beach-guide',
    en: {
      intro:
        'The Karpaz is the long finger of land running north-east off the island, and getting to it is a proper journey: a hundred and ten kilometres and about an hour and thirty-five minutes from Ercan, most of it on a single road that thins out as the peninsula narrows. There is no bus, no rank, and no second option once you are out there.',
      notes: [
        'Karpaz Gate Marina sits near Yeni Erenköy; the Theresa and the smaller places are further out towards Dipkarpaz. They are half an hour apart, so name the property rather than the region.',
        'Yeni Erenköy is the last town with fuel, an ATM and a pharmacy. If you need any of the three, say so and the driver stops — after that there is very little for a long way.',
        'Wild donkeys stand in the road beyond Dipkarpaz, day and night, and they do not move for headlights. It is part of the drive, not a problem, but it is the reason the last stretch is taken slowly.',
      ],
      faq: [
        {
          q: 'Can I get a taxi back from the Karpaz if I do not book one?',
          a: 'Realistically, no. There is no rank on the peninsula and very little passing traffic, particularly out of season. Anyone travelling to the Karpaz should have the return leg booked before they set off — it is the one route on the island where improvising does not work.',
        },
        {
          q: 'Is Golden Beach reachable from the hotels?',
          a: 'Yes. Golden Beach is at the far end past Dipkarpaz, roughly forty minutes from the marina, and the last kilometres are rough track. We run it as a fixed-price trip with the driver waiting, which is the sensible way given there is nothing at the beach to arrange a lift from.',
        },
      ],
      returnIntro:
        'Coming back off the Karpaz to Ercan is an hour and thirty-five minutes, and there is nothing on the peninsula to fall back on if the arrangement goes wrong. We confirm the pickup the evening before and the driver comes to the hotel door.',
    },
    tr: {
      intro:
        'Karpaz, adanın kuzeydoğusuna uzanan uzun parmaktır ve oraya gitmek gerçek bir yolculuktur: Ercan’dan yüz on kilometre ve yaklaşık bir saat otuz beş dakika; çoğu, yarımada daraldıkça incelen tek bir yol üzerinde. Otobüs yok, durak yok ve bir kez oraya çıktınız mı ikinci seçenek de yok.',
      notes: [
        'Karpaz Gate Marina Yeni Erenköy yakınındadır; Theresa ve daha küçük tesisler Dipkarpaz yönünde daha ileridedir. Aralarında yarım saat vardır; bölge değil tesis adını yazın.',
        'Yeni Erenköy akaryakıt, bankamatik ve eczanenin bulunduğu son kasabadır. Üçünden birine ihtiyacınız varsa söyleyin, şoför durur — sonrasında uzun bir süre pek bir şey yoktur.',
        'Dipkarpaz’ı geçince yolda gece gündüz yaban eşekleri durur ve farlara aldırmazlar. Bu yolculuğun parçasıdır, sorun değil; ama son bölümün yavaş alınmasının sebebi budur.',
      ],
      faq: [
        {
          q: 'Ayırtmazsam Karpaz’dan dönüşte taksi bulabilir miyim?',
          a: 'Gerçekçi olmak gerekirse hayır. Yarımadada durak yoktur ve özellikle sezon dışında geçen araç da çok azdır. Karpaz’a gidecek herkesin dönüş bacağını yola çıkmadan ayırtması gerekir — adada doğaçlamanın işlemediği tek güzergah budur.',
        },
        {
          q: 'Otellerden Altınkum’a gidilebiliyor mu?',
          a: 'Evet. Altınkum, Dipkarpaz’ı geçtikten sonra en uçtadır, marinadan kabaca kırk dakika ve son kilometreler stabilize yoldur. Bunu şoför bekleyecek şekilde sabit fiyatlı yaparız; plajda araç ayarlayacak bir yer olmadığı düşünülürse makul olan da budur.',
        },
      ],
      returnIntro:
        'Karpaz’dan Ercan’a dönüş bir saat otuz beş dakikadır ve düzenleme aksarsa yarımadada başvurulacak bir seçenek yoktur. Alımı bir önceki akşam teyit eder, şoförü otel kapısına göndeririz.',
    },
    ru: {
      intro:
        'Карпаз — длинный «палец» суши, уходящий на северо-восток, и добраться туда значит проделать настоящий путь: сто десять километров и около полутора часов с небольшим от Эрджана, почти всё — по единственной дороге, которая сужается вместе с полуостровом. Ни автобусов, ни стоянок такси, ни запасного варианта, когда вы уже там.',
      notes: [
        'Karpaz Gate Marina стоит близ Ени-Эренкёя, а Theresa и небольшие гостиницы — дальше, в сторону Дипкарпаза. Между ними полчаса езды, поэтому называйте отель, а не регион.',
        'Ени-Эренкёй — последний городок с заправкой, банкоматом и аптекой. Нужно что-то из трёх — скажите, водитель остановится: дальше надолго почти ничего нет.',
        'За Дипкарпазом на дороге днём и ночью стоят дикие ослы, и фары их не смущают. Это часть поездки, а не проблема, но именно поэтому последний отрезок проходят медленно.',
      ],
      faq: [
        {
          q: 'Можно ли уехать с Карпаза на такси, если не бронировать заранее?',
          a: 'Реалистично — нет. Стоянок на полуострове нет, попутных машин мало, особенно вне сезона. Кто едет на Карпаз, должен забронировать обратную дорогу до выезда: это единственный маршрут на острове, где импровизация не работает.',
        },
        {
          q: 'Можно ли доехать до Золотого пляжа от отелей?',
          a: 'Да. Золотой пляж — на самом конце за Дипкарпазом, примерно сорок минут от марины, и последние километры идут по грунтовке. Мы возим туда по фиксированной цене с ожиданием водителя: на пляже договориться о машине попросту не с кем.',
        },
      ],
      returnIntro:
        'Обратная дорога с Карпаза до Эрджана занимает час тридцать пять, и если договорённость сорвётся, на полуострове её нечем заменить. Мы подтверждаем подачу накануне вечером, и водитель подъезжает к дверям отеля.',
    },
  },

  'ercan-airport-to-lefke': {
    guide: 'guzelyurt-soli-vouni-west-cyprus-guide',
    en: {
      intro:
        'Lefke lies at the western end of the island under the Troodos foothills, an old citrus town with Ottoman streets and a university that fills and empties it twice a year. Seventy minutes from Ercan across the Mesarya and past Güzelyurt, and the last stretch runs through orange groves rather than scrub.',
      notes: [
        'European University of Lefke arrivals are a large part of this route. Term-start weekends are busy — book ahead, and tell us if you are going to a dormitory rather than the main campus gate.',
        'The old town streets are narrow and steeply graded. For addresses up in the town, a pin or a landmark saves a good deal of reversing.',
        'Gemikonağı harbour, the Soli mosaics and the Vouni palace are all within fifteen minutes of Lefke and run at fixed local fares if you want to see them without a hire car.',
      ],
      faq: [
        {
          q: 'Do you handle student arrivals for the university at Lefke?',
          a: 'Regularly, and often with a lot of luggage. Tell us the number of cases when you book so we send a vehicle with the boot space — a first arrival with a year’s belongings does not fit a saloon, and the Vito is the right car for it.',
        },
        {
          q: 'Is Lefke better reached from Ercan or from Paphos?',
          a: 'It depends where you are flying from. Ercan is seventy minutes and is the usual choice from Turkey. Paphos is actually closer in distance — Lefke is the nearest northern town to that airport — so for a direct European flight it is worth comparing the two.',
        },
      ],
      returnIntro:
        'Leaving Lefke for Ercan is seventy minutes back through the groves and across the Mesarya. It is a long enough run that the pickup hour matters — give us the flight time and we set it, including the two hours the airline asks for.',
    },
    tr: {
      intro:
        'Lefke, adanın batı ucunda Troodos eteklerinin altında, Osmanlı sokaklı eski bir narenciye kasabasıdır; yılda iki kez dolup boşalan bir üniversitesi vardır. Ercan’dan Mesarya’yı geçip Güzelyurt’u aşarak yetmiş dakika; son bölüm makilik değil portakal bahçeleri arasından geçer.',
      notes: [
        'Lefke Avrupa Üniversitesi varışları bu rotanın büyük bölümünü oluşturur. Dönem başı hafta sonları yoğundur — önceden ayırtın ve ana kampüs kapısı yerine yurda gidiyorsanız belirtin.',
        'Eski kasaba sokakları dar ve dik eğimlidir. Yukarıdaki adresler için konum işareti ya da bir tarif noktası epey geri manevradan kurtarır.',
        'Gemikonağı limanı, Soli mozaikleri ve Vouni sarayı Lefke’ye on beş dakika mesafededir; kiralık araç olmadan görmek isterseniz sabit yerel ücretle gidilir.',
      ],
      faq: [
        {
          q: 'Lefke’deki üniversite için öğrenci karşılaması yapıyor musunuz?',
          a: 'Düzenli olarak, çoğu zaman da bol bavulla. Rezervasyonda valiz sayısını yazın ki bagajı yeten aracı gönderelim — bir yıllık eşyayla gelen ilk varış salona sığmaz, doğru araç Vito’dur.',
        },
        {
          q: 'Lefke’ye Ercan’dan mı Baf’tan mı gitmek daha iyi?',
          a: 'Nereden uçtuğunuza bağlı. Ercan yetmiş dakikadır ve Türkiye’den gelenlerin olağan tercihidir. Baf mesafe olarak aslında daha yakındır — Lefke o havalimanına en yakın kuzey kasabasıdır — dolayısıyla Avrupa’dan direkt uçuşta ikisini karşılaştırmakta fayda var.',
        },
      ],
      returnIntro:
        'Lefke’den Ercan’a dönüş, bahçelerin arasından ve Mesarya’yı geçerek yetmiş dakikadır. Alım saatinin önem kazandığı kadar uzun bir yol; uçuş saatinizi verin, havayolunun istediği iki saati de hesaba katarak biz belirleyelim.',
    },
    ru: {
      intro:
        'Лефке лежит на западном конце острова под предгорьями Троодоса — старый цитрусовый городок с османскими улицами и университетом, который дважды в год наполняет и опустошает его. Семьдесят минут от Эрджана через Месарью и мимо Гюзельюрта, и последний отрезок идёт не через кустарник, а через апельсиновые сады.',
      notes: [
        'Прилёты студентов Европейского университета Лефке — заметная часть этого маршрута. Выходные в начале семестра загружены: бронируйте заранее и укажите, если едете в общежитие, а не к главным воротам кампуса.',
        'Улицы старого города узкие и с крутым уклоном. Для адресов наверху метка на карте или ориентир избавляют от долгого движения задним ходом.',
        'Гавань Гемиконагы, мозаики Соли и дворец Вуни — в пятнадцати минутах от Лефке, и добраться до них можно по фиксированному местному тарифу без аренды машины.',
      ],
      faq: [
        {
          q: 'Встречаете ли вы студентов университета в Лефке?',
          a: 'Регулярно, и часто с большим багажом. Укажите при бронировании количество мест — мы пришлём машину с подходящим багажником: первый приезд с вещами на год в седан не помещается, для этого есть Vito.',
        },
        {
          q: 'Откуда удобнее добираться в Лефке — из Эрджана или из Пафоса?',
          a: 'Зависит от того, откуда вы летите. Эрджан — семьдесят минут и обычный выбор при рейсах из Турции. Пафос по расстоянию на самом деле ближе — Лефке ближайший северный город к этому аэропорту, — так что для прямого европейского рейса стоит сравнить оба варианта.',
        },
      ],
      returnIntro:
        'Обратный путь из Лефке в Эрджан — семьдесят минут через сады и Месарью. Дорога достаточно длинная, чтобы час подачи имел значение: сообщите время вылета, и мы рассчитаем его вместе с двумя часами, которые просит авиакомпания.',
    },
  },

  // -------------------------------------------------------------- Larnaka ----
  'larnaca-airport-to-catalkoy-hotels': {
    guide: 'larnaca-airport-to-kyrenia-border-crossing-guide',
    en: {
      intro:
        'From Larnaca to Çatalköy is eighty-five minutes: motorway past Nicosia, the checkpoint, then over the range and east along the coast road. The crossing is the part people worry about and the part that turns out to be routine — passports out, a couple of minutes, and on. There is no surcharge for it.',
      notes: [
        'A hire car picked up in the south is the usual reason people get stuck at the checkpoint over insurance. A booked transfer sidesteps it: the vehicle and the driver are already documented for both sides.',
        'Elexus, Cratos, Acapulco and Chamada each have their own gate and a long drive in. Name the hotel and we use the guest entrance rather than the coach bay.',
        'Direct European flights into Larnaca often land in the evening. The coast road east of Kyrenia is quiet and unlit at that hour, which is fine in a car that knows the turnings and less fine otherwise.',
      ],
      faq: [
        {
          q: 'How long does the border crossing add to the journey?',
          a: 'A few minutes in normal conditions, and it is already inside the eighty-five we quote. Passports are checked at the barrier and you stay in the car. Peak summer evenings can be slower, which is why we build slack in rather than quoting the best case.',
        },
        {
          q: 'Should I fly to Larnaca or Ercan for Çatalköy?',
          a: 'Ercan is far closer — forty-five minutes against eighty-five — and cheaper on the transfer. Larnaca wins on flights: it takes direct services from across Europe while Ercan requires a stop in Turkey. Most people let the flight decide and the transfer follows.',
        },
      ],
      returnIntro:
        'Heading back to Larnaca from Çatalköy is about eighty-five minutes with the checkpoint on the way. We allow for it and for the morning traffic around Nicosia, so tell us the flight time and let us set the pickup hour.',
    },
    tr: {
      intro:
        'Larnaka’dan Çatalköy’e yolculuk seksen beş dakikadır: Lefkoşa’yı geçen otoyol, kontrol noktası, ardından dağ geçidi ve doğuya sahil yolu. Geçiş, insanların endişelendiği ama sıradan çıkan kısımdır — pasaportlar çıkar, birkaç dakika sürer, devam edilir. Bunun için ek ücret alınmaz.',
      notes: [
        'Güneyden kiralanan araç, insanların kontrol noktasında sigorta yüzünden takılmasının olağan sebebidir. Önceden ayrılmış transfer bunu tümden atlar: araç da şoför de iki taraf için zaten kayıtlıdır.',
        'Elexus, Cratos, Acapulco ve Chamada’nın kendi kapıları ve uzun giriş yolları vardır. Otel adını yazın, otobüs peronunu değil misafir girişini kullanalım.',
        'Larnaka’ya Avrupa’dan direkt uçuşlar çoğu zaman akşam iner. Girne’nin doğusundaki sahil yolu o saatte sakin ve aydınlatmasızdır; sapakları bilen bir araçta sorun değildir, aksi halde öyle değildir.',
      ],
      faq: [
        {
          q: 'Sınır geçişi yolculuğa ne kadar ekliyor?',
          a: 'Normal koşullarda birkaç dakika ve bu zaten söylediğimiz seksen beş dakikanın içindedir. Pasaportlar bariyerde kontrol edilir, siz araçta kalırsınız. Yaz akşamlarının yoğun saatleri daha yavaş olabilir; bu yüzden en iyi ihtimali değil, payı da katarak süre veririz.',
        },
        {
          q: 'Çatalköy için Larnaka’ya mı Ercan’a mı uçmalıyım?',
          a: 'Ercan çok daha yakındır — seksen beşe karşı kırk beş dakika — ve transferi de ucuzdur. Larnaka uçuşta öne geçer: Avrupa’nın her yerinden direkt sefer alır, Ercan ise Türkiye aktarması ister. Çoğu kişi kararı uçuşa bırakır, transfer ona uyar.',
        },
      ],
      returnIntro:
        'Çatalköy’den Larnaka’ya dönüş, yolda kontrol noktasıyla birlikte yaklaşık seksen beş dakikadır. Hem onu hem Lefkoşa çevresindeki sabah trafiğini hesaba katarız; uçuş saatinizi söyleyin, alım saatini biz belirleyelim.',
    },
    ru: {
      intro:
        'От Ларнаки до Чаталкёя восемьдесят пять минут: шоссе мимо Никосии, пункт пропуска, затем через хребет и на восток по прибрежной дороге. Переход — та часть, из-за которой волнуются и которая оказывается рутинной: паспорта, пара минут, едем дальше. Наценки за него нет.',
      notes: [
        'Машина, взятая напрокат на юге, — обычная причина застрять на пункте пропуска из-за страховки. Заказанный трансфер снимает вопрос: и автомобиль, и водитель оформлены для обеих сторон.',
        'У Elexus, Cratos, Acapulco и Chamada свои ворота и длинные подъезды. Назовите отель — подъедем к гостевому входу, а не к автобусной площадке.',
        'Прямые европейские рейсы в Ларнаку часто садятся вечером. Прибрежная дорога к востоку от Кирении в этот час тиха и не освещена: в машине, которая знает съезды, это нормально, в любой другой — нет.',
      ],
      faq: [
        {
          q: 'Сколько времени добавляет переход границы?',
          a: 'В обычных условиях несколько минут, и они уже входят в заявленные восемьдесят пять. Паспорта проверяют у шлагбаума, вы остаётесь в машине. Летними вечерами в пик бывает медленнее — поэтому мы закладываем запас, а не называем лучший случай.',
        },
        {
          q: 'Куда лететь ради Чаталкёя — в Ларнаку или в Эрджан?',
          a: 'Эрджан заметно ближе — сорок пять минут против восьмидесяти пяти — и трансфер дешевле. Ларнака выигрывает по рейсам: туда летают напрямую со всей Европы, а в Эрджан нужна пересадка в Турции. Обычно выбирают по рейсу, а трансфер подстраивается.',
        },
      ],
      returnIntro:
        'Обратно из Чаталкёя в Ларнаку — около восьмидесяти пяти минут вместе с пунктом пропуска. Мы закладываем и его, и утренние пробки вокруг Никосии: назовите время вылета, а час подачи рассчитаем мы.',
    },
  },

  'larnaca-airport-to-alsancak-hotels': {
    guide: 'larnaca-airport-to-kyrenia-border-crossing-guide',
    en: {
      intro:
        'Alsancak is west of Kyrenia and about eighty-five minutes from Larnaca, checkpoint included. The drive is straightforward; the part worth getting right is the end of it, because the four Merit hotels sit within two kilometres of each other and the wrong gate at midnight is a long walk with cases.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park and Merit Crystal Cove are separate properties on one fare. Name yours in the booking and the driver goes to that forecourt.',
        'The crossing is routine and included in the price — no surcharge, no change of vehicle, and you stay in the car while passports are checked.',
        'Riverside Garden Resort is inland off the main road, not on the sea front. It is an easy turning to miss after dark and a standard one for us.',
      ],
      faq: [
        {
          q: 'Can one car take us all the way from Larnaca to Alsancak?',
          a: 'Yes. One vehicle, one driver, one fare, straight through the checkpoint. You do not change cars at the border and there is no separate crossing charge — the price you see is the price for the whole journey.',
        },
        {
          q: 'Is Larnaca or Ercan better for the Merit hotels?',
          a: 'Ercan is closer at forty-five minutes and cheaper. Larnaca takes the direct European flights, so it is often the only sensible option coming from the UK or Germany, and eighty-five minutes with the crossing is a perfectly normal transfer.',
        },
      ],
      returnIntro:
        'From Alsancak back to Larnaca is around eighty-five minutes with the checkpoint. Tell us which Merit forecourt you will be standing on and the flight time, and we set the pickup with the crossing and the morning traffic already allowed for.',
    },
    tr: {
      intro:
        'Alsancak Girne’nin batısındadır ve kontrol noktası dahil Larnaka’dan yaklaşık seksen beş dakikadır. Yolculuk düz; doğru yapılması gereken kısım sonudur, çünkü dört Merit oteli iki kilometre içinde sıralanır ve gece yarısı yanlış kapı, bavullarla uzun bir yürüyüş demektir.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park ve Merit Crystal Cove tek ücrete tabi ayrı tesislerdir. Rezervasyonda hangisi olduğunu yazın, şoför o ön avluya gitsin.',
        'Geçiş sıradandır ve fiyata dahildir — ek ücret yok, araç değişikliği yok; pasaportlar kontrol edilirken siz araçta kalırsınız.',
        'Riverside Garden Resort deniz kenarında değil, ana yoldan içeridedir. Karanlıkta kaçırılması kolay bir sapaktır, bizim için olağandır.',
      ],
      faq: [
        {
          q: 'Larnaka’dan Alsancak’a tek araçla gidilebiliyor mu?',
          a: 'Evet. Tek araç, tek şoför, tek ücret, kontrol noktasından doğrudan geçiş. Sınırda araç değiştirmezsiniz ve ayrı bir geçiş ücreti yoktur — gördüğünüz fiyat yolculuğun tamamınındır.',
        },
        {
          q: 'Merit otelleri için Larnaka mı Ercan mı daha iyi?',
          a: 'Ercan kırk beş dakikayla daha yakın ve daha ucuz. Larnaka Avrupa’dan direkt uçuşları alır; İngiltere ya da Almanya’dan gelirken çoğu zaman tek mantıklı seçenek odur ve geçişle birlikte seksen beş dakika gayet olağan bir transferdir.',
        },
      ],
      returnIntro:
        'Alsancak’tan Larnaka’ya dönüş kontrol noktasıyla birlikte yaklaşık seksen beş dakikadır. Hangi Merit’in ön avlusunda bekleyeceğinizi ve uçuş saatinizi söyleyin; geçişi ve sabah trafiğini hesaba katarak alım saatini biz ayarlayalım.',
    },
    ru: {
      intro:
        'Алсанджак лежит к западу от Кирении, примерно в восьмидесяти пяти минутах от Ларнаки вместе с пунктом пропуска. Дорога простая; внимания требует финал, потому что четыре отеля Merit стоят в пределах двух километров, и не те ворота в полночь означают долгий путь пешком с чемоданами.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park и Merit Crystal Cove — разные отели по одному тарифу. Укажите свой при бронировании, и водитель подъедет именно к этому двору.',
        'Переход рутинный и входит в цену: без наценки, без пересадки в другую машину; пока проверяют паспорта, вы остаётесь в салоне.',
        'Riverside Garden Resort стоит в стороне от главной дороги вглубь, а не на берегу. Поворот к нему легко пропустить в темноте — для нас он привычный.',
      ],
      faq: [
        {
          q: 'Довезёт ли одна машина от Ларнаки прямо до Алсанджака?',
          a: 'Да. Одна машина, один водитель, один тариф, прямо через пункт пропуска. Пересаживаться на границе не нужно, отдельной платы за переход нет — указанная цена покрывает всю дорогу.',
        },
        {
          q: 'Что лучше для отелей Merit — Ларнака или Эрджан?',
          a: 'Эрджан ближе, сорок пять минут, и дешевле. В Ларнаку летают прямые европейские рейсы, поэтому из Великобритании или Германии это часто единственный разумный вариант, а восемьдесят пять минут с переходом — совершенно обычный трансфер.',
        },
      ],
      returnIntro:
        'Из Алсанджака обратно в Ларнаку — около восьмидесяти пяти минут с пунктом пропуска. Скажите, у какого двора Merit вы будете стоять, и время вылета: час подачи мы рассчитаем с учётом перехода и утреннего трафика.',
    },
  },

  'larnaca-airport-to-lapta': {
    guide: 'larnaca-airport-to-kyrenia-border-crossing-guide',
    en: {
      intro:
        'Ninety minutes from Larnaca to Lapta, which is about as far west along the north coast as most visitors go. The complication is not the distance or the checkpoint but the village itself: the old lanes climb steeply above the main road while the hotels and rentals sit on the strip below.',
      notes: [
        'Say whether you are up in the village or down on the coast strip. The two are a steep couple of kilometres apart and the lanes above are narrow and partly one-way.',
        'Many Lapta arrivals are long stays and returning residents rather than hotel guests. A development name works fine as an address here; a pin makes it certain.',
        'The checkpoint is inside the ninety minutes and carries no surcharge. Passports are checked at the barrier and you stay in the car.',
      ],
      faq: [
        {
          q: 'Is Lapta too far from Larnaca to be practical?',
          a: 'Ninety minutes is a long transfer but a routine one, and it is a single car door to door. If your flight is direct into Larnaca it is usually still the better answer than routing through Turkey to save half an hour on the road.',
        },
        {
          q: 'Will the driver take us up into the old village?',
          a: 'Yes. The lanes are narrow but our drivers work this coast daily and know which ones a car can take. Send the street or a pin and we go to the door rather than stopping on the main road below and pointing uphill.',
        },
      ],
      returnIntro:
        'Lapta to Larnaca runs about ninety minutes including the checkpoint, and the coast road is empty at the hour most departures need. If you are up in the village the driver comes up — there is no sense dragging cases down the hill at five in the morning.',
    },
    tr: {
      intro:
        'Larnaka’dan Lapta’ya doksan dakika; kuzey sahilinde çoğu ziyaretçinin gittiği en batı nokta sayılır. Zorluk mesafe ya da kontrol noktası değil, köyün kendisidir: eski sokaklar ana yolun üstünde dik biçimde tırmanırken oteller ve kiralıklar aşağıdaki şeritte kalır.',
      notes: [
        'Köyde yukarıda mı yoksa aşağıda sahil şeridinde mi olduğunuzu belirtin. İkisi arasında dik birkaç kilometre vardır ve üstteki sokaklar dar, kısmen tek yönlüdür.',
        'Lapta’ya gelenlerin çoğu otel misafiri değil, uzun süreli kalanlar ve dönen yerleşiklerdir. Burada site adı adres olarak yeterlidir; konum işareti kesinleştirir.',
        'Kontrol noktası doksan dakikanın içindedir ve ek ücreti yoktur. Pasaportlar bariyerde kontrol edilir, siz araçta kalırsınız.',
      ],
      faq: [
        {
          q: 'Lapta, Larnaka’ya pratik olamayacak kadar uzak mı?',
          a: 'Doksan dakika uzun ama olağan bir transferdir ve kapıdan kapıya tek araçtır. Uçuşunuz Larnaka’ya direktse, yolda yarım saat kazanmak için Türkiye üzerinden aktarma yapmaktan genelde yine de daha iyi bir cevaptır.',
        },
        {
          q: 'Şoför bizi köyün yukarısına çıkarır mı?',
          a: 'Evet. Sokaklar dardır ama şoförlerimiz bu sahilde her gün çalışır ve hangisinden araç geçtiğini bilir. Sokak adını ya da konum işaretini gönderin; aşağıda ana yolda durup yokuşu göstermek yerine kapıya gidelim.',
        },
      ],
      returnIntro:
        'Lapta’dan Larnaka’ya yolculuk kontrol noktası dahil yaklaşık doksan dakikadır ve çoğu kalkışın gerektirdiği saatte sahil yolu boştur. Köyde yukarıdaysanız şoför yukarı çıkar — sabahın beşinde bavulları yokuş aşağı indirmenin anlamı yok.',
    },
    ru: {
      intro:
        'Девяносто минут от Ларнаки до Лапты — это примерно самая западная точка северного побережья, куда обычно доезжают гости. Сложность не в расстоянии и не в пункте пропуска, а в самой деревне: старые улочки круто поднимаются над главной дорогой, а отели и апартаменты стоят на полосе внизу.',
      notes: [
        'Уточните, вы наверху в деревне или внизу на прибрежной полосе. Между ними пара километров крутого подъёма, а верхние улочки узкие и местами односторонние.',
        'Многие, кто прилетает в Лапту, — это долгие приезды и возвращающиеся жители, а не гости отелей. Название комплекса здесь вполне работает как адрес, метка на карте делает его точным.',
        'Пункт пропуска входит в эти девяносто минут и не оплачивается отдельно. Паспорта проверяют у шлагбаума, вы остаётесь в машине.',
      ],
      faq: [
        {
          q: 'Не слишком ли Лапта далеко от Ларнаки?',
          a: 'Девяносто минут — длинный, но обычный трансфер, и это одна машина от двери до двери. Если у вас прямой рейс в Ларнаку, это чаще всего лучше, чем лететь через Турцию ради получаса экономии на дороге.',
        },
        {
          q: 'Поднимется ли водитель в старую деревню?',
          a: 'Да. Улочки узкие, но наши водители работают на этом побережье каждый день и знают, где машина проходит. Пришлите улицу или метку — мы подъедем к двери, а не остановимся внизу, показав рукой на гору.',
        },
      ],
      returnIntro:
        'Из Лапты в Ларнаку около девяноста минут вместе с пунктом пропуска, и в час, нужный для большинства вылетов, прибрежная дорога пуста. Если вы наверху в деревне, водитель поднимется: тащить чемоданы вниз в пять утра незачем.',
    },
  },

  'larnaca-airport-to-karsiyaka': {
    guide: 'larnaca-airport-to-kyrenia-border-crossing-guide',
    en: {
      intro:
        'Karşıyaka is ninety-five minutes from Larnaca and the furthest west of our regular coastal runs. Past Lapta the road empties, the lighting stops and the turnings into the housing developments are unmarked — which is why nearly everyone who travels this route books rather than improvises at the arrivals hall.',
      notes: [
        'Addresses are site names, not street numbers. Send the development, a nearby landmark or a pin and the driver will work from it.',
        'A hire car from the south is where the checkpoint becomes a problem, usually over insurance. A booked transfer crosses without any of that and there is no surcharge for it.',
        'There is no rank in Karşıyaka and almost no passing traffic in the evening. Fixed-price local runs cover Lapta, Alsancak, Kyrenia and the Sunday market.',
      ],
      faq: [
        {
          q: 'Is it worth flying to Larnaca if I am staying in Karşıyaka?',
          a: 'It is a ninety-five minute transfer against fifty-five from Ercan, so Ercan wins on the road. But Larnaca takes direct flights from most of Europe and Ercan does not, and an hour and a half in a car beats a connection in Istanbul for most people.',
        },
        {
          q: 'Can you find a villa with only the site name?',
          a: 'Usually, yes — the developments out here are known by name and our drivers cover this coast regularly. Send a pin as well if you have one and we will not be phoning you from a dark road at midnight.',
        },
      ],
      returnIntro:
        'Karşıyaka to Larnaca is around ninety-five minutes with the checkpoint. Nothing passes out here before dawn, so the car is arranged the night before — give us the site name and the driver is at the door at the hour we agree.',
    },
    tr: {
      intro:
        'Karşıyaka Larnaka’dan doksan beş dakikadır ve düzenli sahil hatlarımızın en batıdakidir. Lapta’dan sonra yol boşalır, aydınlatma biter ve sitelerin sapakları işaretsizdir — bu rotayı kullananların neredeyse tamamının varış salonunda doğaçlama yapmak yerine önceden ayırtmasının sebebi budur.',
      notes: [
        'Adresler sokak numarası değil site adıdır. Siteyi, yakın bir tarif noktasını ya da konum işaretini gönderin; şoför onunla çalışır.',
        'Kontrol noktasının sorun haline geldiği yer güneyden kiralanan araçtır, genelde sigorta yüzünden. Önceden ayrılmış transfer bunların hiçbirine takılmadan geçer ve ek ücreti yoktur.',
        'Karşıyaka’da durak yoktur ve akşam geçen araç da neredeyse hiç olmaz. Sabit fiyatlı yerel yolculuklar Lapta, Alsancak, Girne ve pazar yerini kapsar.',
      ],
      faq: [
        {
          q: 'Karşıyaka’da kalacaksam Larnaka’ya uçmak mantıklı mı?',
          a: 'Ercan’dan elli beş dakikaya karşı doksan beş dakikalık bir transfer; yol olarak Ercan kazanır. Ama Larnaka Avrupa’nın çoğundan direkt uçuş alır, Ercan almaz ve çoğu kişi için arabada bir buçuk saat, İstanbul aktarmasından iyidir.',
        },
        {
          q: 'Sadece site adıyla villayı bulabiliyor musunuz?',
          a: 'Genelde evet — buradaki siteler adlarıyla bilinir ve şoförlerimiz bu sahile düzenli gider. Varsa konum işaretini de gönderin; gece yarısı karanlık bir yoldan sizi aramak zorunda kalmayalım.',
        },
      ],
      returnIntro:
        'Karşıyaka’dan Larnaka’ya kontrol noktasıyla birlikte yaklaşık doksan beş dakika. Şafaktan önce buradan araç geçmez; araba bir önceki akşamdan ayarlanır — site adını verin, şoför anlaştığımız saatte kapıda olsun.',
    },
    ru: {
      intro:
        'Каршияка — девяносто пять минут от Ларнаки и самый западный из наших регулярных прибрежных маршрутов. За Лаптой дорога пустеет, освещение заканчивается, а съезды к жилым комплексам не обозначены — поэтому почти все, кто едет сюда, бронируют заранее, а не импровизируют в зале прилёта.',
      notes: [
        'Адрес здесь — название комплекса, а не номер дома. Пришлите комплекс, ближайший ориентир или метку, и водитель разберётся.',
        'Проблемой пункт пропуска становится с арендованной на юге машиной, обычно из-за страховки. Заказанный трансфер проходит его без всего этого и без наценки.',
        'Стоянки в Каршияке нет, вечером попутных машин почти не бывает. Местные поездки по фиксированной цене — Лапта, Алсанджак, Кирения и воскресный рынок.',
      ],
      faq: [
        {
          q: 'Стоит ли лететь в Ларнаку, если я живу в Каршияке?',
          a: 'Это трансфер на девяносто пять минут против пятидесяти пяти из Эрджана, так что по дороге выигрывает Эрджан. Но в Ларнаку летают напрямую из большей части Европы, а в Эрджан нет, и полтора часа в машине для многих лучше стыковки в Стамбуле.',
        },
        {
          q: 'Найдёте ли виллу по одному названию комплекса?',
          a: 'Обычно да — здешние комплексы известны по названиям, и наши водители бывают на этом побережье регулярно. Пришлите заодно метку, если она есть, и нам не придётся звонить вам с тёмной дороги в полночь.',
        },
      ],
      returnIntro:
        'Из Каршияки в Ларнаку около девяноста пяти минут вместе с пунктом пропуска. До рассвета здесь ничего не проезжает, поэтому машину согласуют накануне: назовите комплекс, и водитель будет у двери в оговорённый час.',
    },
  },

  'larnaca-airport-to-esentepe-hotels': {
    guide: 'larnaca-airport-to-kyrenia-border-crossing-guide',
    en: {
      intro:
        'Esentepe is ninety minutes from Larnaca, out where the north coast opens up and the hillside is golf villas and resort developments rather than a village. The last part of the journey is the part that needs an address, because the sites spread over several kilometres of unlit hill with unnamed turnings.',
      notes: [
        'Korineum Golf & Beach Resort has its own approach off the coast road, and the clubhouse and hotel reception are different drop-offs. Tell us which one.',
        'For villas, the development name plus a plot or block number is what makes the difference. Our drivers know the sites above Esentepe; a stranger with a map generally does not.',
        'The checkpoint is inside the ninety minutes and there is no surcharge. You stay in the car and passports are checked at the barrier.',
      ],
      faq: [
        {
          q: 'Do you drive to villas on the Esentepe hillside, or only to hotels?',
          a: 'Both, and villas are most of the work here. Give us the development name and any plot or block detail. The approach roads are unlit and unsigned, so a driver who already knows them is worth considerably more than a postcode.',
        },
        {
          q: 'Is the golf course easy to reach from other parts of the coast?',
          a: 'Korineum is about half an hour east of Kyrenia and twenty minutes from Çatalköy, and we run those legs at fixed local fares. Convenient if you are staying elsewhere on the coast and playing here for the day.',
        },
      ],
      returnIntro:
        'From Esentepe to Larnaca is roughly ninety minutes with the checkpoint. We come up to the villa or the resort reception rather than meeting on the coast road below, then allow for the crossing and the Nicosia traffic on the way down.',
    },
    tr: {
      intro:
        'Esentepe Larnaka’dan doksan dakikadır; kuzey sahilinin açıldığı, yamacın köy değil golf villaları ve sitelerle kaplı olduğu yerdedir. Yolculuğun adres gerektiren kısmı sonudur, çünkü siteler aydınlatmasız ve sapakları adsız birkaç kilometrelik tepeye yayılır.',
      notes: [
        'Korineum Golf & Beach Resort’un sahil yolundan kendi girişi vardır; kulüp binası ile otel resepsiyonu ayrı iniş noktalarıdır. Hangisi olduğunu söyleyin.',
        'Villalar için farkı yaratan şey site adı ve parsel ya da blok numarasıdır. Şoförlerimiz Esentepe’nin üstündeki siteleri bilir; haritayla gelen bir yabancı genelde bilmez.',
        'Kontrol noktası doksan dakikanın içindedir ve ek ücret yoktur. Siz araçta kalırsınız, pasaportlar bariyerde kontrol edilir.',
      ],
      faq: [
        {
          q: 'Esentepe yamacındaki villalara da gidiyor musunuz, yoksa sadece otellere mi?',
          a: 'İkisine de; burada işin çoğu villadır. Site adını, varsa parsel ya da blok bilgisini verin. Giriş yolları aydınlatmasız ve levhasızdır; onları zaten bilen bir şoför, posta kodundan epey daha değerlidir.',
        },
        {
          q: 'Golf sahasına sahilin diğer noktalarından kolay gidiliyor mu?',
          a: 'Korineum, Girne’nin yaklaşık yarım saat doğusunda ve Çatalköy’den yirmi dakika mesafededir; bu bacakları sabit yerel ücretle yaparız. Sahilde başka yerde kalıp günübirlik oynayacaksanız pratik olur.',
        },
      ],
      returnIntro:
        'Esentepe’den Larnaka’ya kontrol noktasıyla birlikte kabaca doksan dakika. Aşağıda sahil yolunda buluşmak yerine villaya ya da tesis resepsiyonuna çıkar, inerken geçişi ve Lefkoşa trafiğini hesaba katarız.',
    },
    ru: {
      intro:
        'Эсентепе — девяносто минут от Ларнаки, там, где северное побережье раскрывается, а склон занят гольф-виллами и комплексами, а не деревней. Адрес нужен именно на последнем участке: комплексы разбросаны по нескольким километрам неосвещённого холма с безымянными съездами.',
      notes: [
        'У Korineum Golf & Beach Resort свой съезд с прибрежной дороги, и клубный дом с ресепшн отеля — разные точки высадки. Скажите, какая нужна.',
        'Для вилл всё решает название комплекса плюс номер участка или корпуса. Наши водители знают комплексы выше Эсентепе; посторонний человек с картой — обычно нет.',
        'Пункт пропуска входит в эти девяносто минут, наценки нет. Вы остаётесь в машине, паспорта проверяют у шлагбаума.',
      ],
      faq: [
        {
          q: 'Вы возите к виллам на склоне Эсентепе или только в отели?',
          a: 'И туда, и туда, причём виллы — основная часть работы здесь. Назовите комплекс и, если знаете, участок или корпус. Подъездные дороги без освещения и указателей, так что водитель, который их уже знает, стоит куда больше, чем почтовый индекс.',
        },
        {
          q: 'Легко ли добраться до поля для гольфа с других участков побережья?',
          a: 'Korineum примерно в получасе к востоку от Кирении и в двадцати минутах от Чаталкёя; эти отрезки мы возим по фиксированному местному тарифу. Удобно, если вы живёте в другом месте на побережье, а играете здесь.',
        },
      ],
      returnIntro:
        'От Эсентепе до Ларнаки примерно девяносто минут с пунктом пропуска. Мы поднимаемся к вилле или к ресепшн, а не встречаемся внизу на шоссе, и закладываем на спуск переход и трафик вокруг Никосии.',
    },
  },

  'larnaca-airport-to-bogaz': {
    guide: 'larnaca-airport-arrival-guide',
    en: {
      intro:
        'Boğaz is eighty minutes from Larnaca, and the route is the flattest and quickest of the northern runs — motorway, checkpoint, then straight up the east coast past Famagusta. The harbour at the end is a working one with fish restaurants along it, and the road beyond it is the one that goes to the Karpaz.',
      notes: [
        'A restaurant name is a perfectly good drop-off here. The harbour front is compact and the hotels sit within a few hundred metres of it.',
        'The checkpoint is inside the eighty minutes and carries no surcharge. Passports are checked at the barrier while you stay in the car.',
        'Famagusta is twenty-five minutes south and Long Beach ten, both at fixed local fares. Nothing waits outside the harbour in the evening, so the way back is worth arranging with the driver.',
      ],
      faq: [
        {
          q: 'Which airport is best for Boğaz?',
          a: 'Larnaca is genuinely competitive here — eighty minutes against fifty from Ercan, and the east coast route avoids the mountain pass entirely. For a direct European flight it is usually the better combination of the two.',
        },
        {
          q: 'Can we go on to the Karpaz from Boğaz?',
          a: 'Yes, and Boğaz is the natural jumping-off point since the peninsula road starts here. Golden Beach and the Apostolos Andreas monastery make a long day; we run it fixed-price with the driver staying with you, because there is nothing to hail out there.',
        },
      ],
      returnIntro:
        'Boğaz back to Larnaca is around eighty minutes down the east coast and through the checkpoint. It is a flat, straightforward run, but nothing passes the harbour early — give us the flight time and we will be at the hotel or the restaurant door.',
    },
    tr: {
      intro:
        'Boğaz Larnaka’dan seksen dakikadır ve kuzey hatlarının en düz, en hızlısıdır — otoyol, kontrol noktası, ardından Gazimağusa’yı geçerek doğrudan doğu sahili. Sondaki liman, boyunca balık lokantaları dizilmiş çalışan bir limandır; ötesindeki yol da Karpaz’a gidendir.',
      notes: [
        'Burada lokanta adı gayet iyi bir iniş noktasıdır. Liman önü derli topludur ve oteller birkaç yüz metre içindedir.',
        'Kontrol noktası seksen dakikanın içindedir ve ek ücreti yoktur. Siz araçta kalırken pasaportlar bariyerde kontrol edilir.',
        'Gazimağusa yirmi beş dakika güneyde, Long Beach on dakika; ikisi de sabit yerel ücretle. Akşam limanın önünde bekleyen araç olmaz, dönüşü şoförle ayarlamakta fayda var.',
      ],
      faq: [
        {
          q: 'Boğaz için hangi havalimanı en iyisi?',
          a: 'Larnaka burada gerçekten rekabetçi — Ercan’dan elli dakikaya karşı seksen dakika ve doğu sahili rotası dağ geçidine hiç girmez. Avrupa’dan direkt uçuşta genelde ikisinin daha iyi bileşimidir.',
        },
        {
          q: 'Boğaz’dan Karpaz’a devam edebilir miyiz?',
          a: 'Evet; yarımada yolu buradan başladığı için Boğaz doğal çıkış noktasıdır. Altınkum ve Apostolos Andreas manastırı uzun bir gün eder. Bunu sabit fiyatlı, şoför sizinle kalacak şekilde yaparız; çünkü orada el kaldırılacak bir şey yoktur.',
        },
      ],
      returnIntro:
        'Boğaz’dan Larnaka’ya dönüş, doğu sahilinden aşağı ve kontrol noktasından geçerek yaklaşık seksen dakikadır. Düz ve sorunsuz bir yol, ama erken saatte limanın önünden araç geçmez — uçuş saatinizi verin, otel ya da lokanta kapısında olalım.',
    },
    ru: {
      intro:
        'Богаз — восемьдесят минут от Ларнаки, и это самый ровный и быстрый из северных маршрутов: шоссе, пункт пропуска, затем прямо вверх по восточному побережью мимо Фамагусты. Гавань в конце — рабочая, с рыбными ресторанами вдоль неё, а дорога за ней ведёт на Карпаз.',
      notes: [
        'Название ресторана здесь — вполне годная точка высадки. Набережная компактная, отели стоят в нескольких сотнях метров от неё.',
        'Пункт пропуска входит в эти восемьдесят минут и не оплачивается отдельно. Паспорта проверяют у шлагбаума, вы остаётесь в машине.',
        'Фамагуста в двадцати пяти минутах южнее, Лонг-Бич в десяти — обе по фиксированному местному тарифу. Вечером у гавани машин не остаётся, так что обратную дорогу стоит обговорить с водителем.',
      ],
      faq: [
        {
          q: 'Какой аэропорт лучше для Богаза?',
          a: 'Ларнака здесь действительно конкурентна: восемьдесят минут против пятидесяти из Эрджана, а маршрут по восточному побережью вовсе обходит горный перевал. Для прямого европейского рейса это обычно лучшее сочетание.',
        },
        {
          q: 'Можно ли поехать дальше на Карпаз из Богаза?',
          a: 'Да, и Богаз — естественная отправная точка: дорога на полуостров начинается здесь. Золотой пляж и монастырь Апостола Андрея складываются в длинный день; возим по фиксированной цене, водитель остаётся с вами — поймать там попросту нечего.',
        },
      ],
      returnIntro:
        'Из Богаза обратно в Ларнаку около восьмидесяти минут вниз по восточному побережью и через пункт пропуска. Дорога ровная и простая, но рано утром мимо гавани ничего не идёт: назовите время вылета, и мы будем у дверей отеля или ресторана.',
    },
  },

  'larnaca-airport-to-karpaz-hotels': {
    guide: 'karpaz-golden-beach-guide',
    en: {
      intro:
        'This is the longest transfer we run from Larnaca: a hundred and fifty-five kilometres and about two hours and a quarter to the Karpaz hotels, taking in the motorway, the checkpoint, the east coast and then the peninsula road as it narrows towards the tip. It is a proper journey, and it is also the only realistic way to get there.',
      notes: [
        'Karpaz Gate Marina is near Yeni Erenköy; the Theresa and the smaller guesthouses are further out towards Dipkarpaz, another half hour on. Name the property.',
        'Yeni Erenköy is the last town with fuel, an ATM and a pharmacy. Say the word and the driver stops — there is very little after it.',
        'Book the return before you travel. There is no rank anywhere on the peninsula and almost no passing traffic, and a two-hour journey is not one to leave to chance.',
      ],
      faq: [
        {
          q: 'Two and a quarter hours — is there a faster way to the Karpaz?',
          a: 'Not from Larnaca. Ercan cuts it to about an hour and thirty-five minutes, so if you can route through Turkey it is the shorter road. From a direct European flight this is simply what the journey takes, and it is a single car door to door.',
        },
        {
          q: 'What is the road like at the far end?',
          a: 'Good tarmac as far as Dipkarpaz, then rough track towards Golden Beach. Wild donkeys stand in the road beyond the village, day and night, and they do not move for headlights — the last stretch is taken slowly for that reason.',
        },
      ],
      returnIntro:
        'Coming off the Karpaz to Larnaca is a two-and-a-quarter-hour run with the checkpoint at the far end of it. There is nothing on the peninsula to fall back on, so we confirm the pickup the evening before and the driver comes to the hotel door.',
    },
    tr: {
      intro:
        'Larnaka’dan yaptığımız en uzun transfer budur: Karpaz otellerine yüz elli beş kilometre ve yaklaşık iki saat çeyrek; otoyol, kontrol noktası, doğu sahili ve ardından uca doğru daralan yarımada yolu. Gerçek bir yolculuk ve oraya gitmenin tek gerçekçi yolu da bu.',
      notes: [
        'Karpaz Gate Marina Yeni Erenköy yakınındadır; Theresa ve küçük pansiyonlar Dipkarpaz yönünde, yarım saat daha ileridedir. Tesis adını yazın.',
        'Yeni Erenköy akaryakıt, bankamatik ve eczanenin bulunduğu son kasabadır. Söyleyin, şoför dursun — sonrasında pek bir şey yok.',
        'Dönüşü yola çıkmadan ayırtın. Yarımadanın hiçbir yerinde durak yoktur, geçen araç da neredeyse hiç; iki saatlik bir yolculuk şansa bırakılacak yolculuk değildir.',
      ],
      faq: [
        {
          q: 'İki saat çeyrek — Karpaz’a daha hızlı bir yol var mı?',
          a: 'Larnaka’dan yok. Ercan bunu bir saat otuz beş dakikaya indirir; Türkiye üzerinden gelebiliyorsanız kısa yol odur. Avrupa’dan direkt uçuşta yolculuk basitçe bu kadar sürer ve kapıdan kapıya tek araçtır.',
        },
        {
          q: 'Yolun sonundaki durum nasıl?',
          a: 'Dipkarpaz’a kadar iyi asfalt, sonra Altınkum yönünde stabilize. Köyü geçince yolda gece gündüz yaban eşekleri durur ve farlara aldırmazlar — son bölümün yavaş alınmasının sebebi budur.',
        },
      ],
      returnIntro:
        'Karpaz’dan Larnaka’ya dönüş, sonunda kontrol noktası olan iki saat çeyreklik bir yoldur. Yarımadada başvurulacak bir seçenek yok; alımı bir önceki akşam teyit eder, şoförü otel kapısına göndeririz.',
    },
    ru: {
      intro:
        'Это самый длинный трансфер, который мы возим из Ларнаки: сто пятьдесят пять километров и около двух с четвертью часов до отелей Карпаза — шоссе, пункт пропуска, восточное побережье и затем дорога по полуострову, сужающаяся к оконечности. Настоящее путешествие и единственный реальный способ туда попасть.',
      notes: [
        'Karpaz Gate Marina — близ Ени-Эренкёя; Theresa и небольшие гостевые дома дальше, в сторону Дипкарпаза, ещё полчаса пути. Называйте отель.',
        'Ени-Эренкёй — последний городок с заправкой, банкоматом и аптекой. Скажите — водитель остановится: дальше почти ничего нет.',
        'Бронируйте обратную дорогу до поездки. Стоянок на полуострове нет нигде, попутных машин почти не бывает, а двухчасовой путь не тот случай, чтобы полагаться на удачу.',
      ],
      faq: [
        {
          q: 'Два с четвертью часа — есть ли способ добраться на Карпаз быстрее?',
          a: 'Из Ларнаки нет. Эрджан сокращает путь до полутора часов с небольшим, так что если вы можете лететь через Турцию — дорога короче. При прямом европейском рейсе поездка занимает именно столько, и это одна машина от двери до двери.',
        },
        {
          q: 'Какая дорога на дальнем конце?',
          a: 'До Дипкарпаза хороший асфальт, затем в сторону Золотого пляжа — грунтовка. За деревней днём и ночью на дороге стоят дикие ослы, и фары их не смущают: поэтому последний отрезок проходят медленно.',
        },
      ],
      returnIntro:
        'Дорога с Карпаза в Ларнаку — два с четвертью часа, и пункт пропуска ждёт в самом конце. На полуострове подстраховаться нечем, поэтому подачу мы подтверждаем накануне вечером, и водитель подъезжает к дверям отеля.',
    },
  },

  'larnaca-airport-to-lefke': {
    guide: 'guzelyurt-soli-vouni-west-cyprus-guide',
    en: {
      intro:
        'Lefke sits at the western end of the island and the run from Larnaca crosses almost all of it — a hundred and twenty-two kilometres and about two hours, through the checkpoint and out past Güzelyurt into the citrus country. The university at the end of it is the reason a good share of this traffic exists.',
      notes: [
        'European University of Lefke arrivals cluster around the start of term. Book early for those weekends and tell us if you are heading to a dormitory rather than the main gate.',
        'Students arriving for a first year travel heavy. Give us the number of cases at booking and we send a Vito rather than a saloon.',
        'Gemikonağı, the Soli mosaics and the Vouni palace are fifteen minutes away and run at fixed local fares — useful when the nearest hire desk is a long way off.',
      ],
      faq: [
        {
          q: 'Two hours from Larnaca — would Paphos be quicker?',
          a: 'Considerably. Lefke is the closest northern town to Paphos airport, about ninety-five minutes, against two hours from Larnaca. If both airports work for your flight it is worth checking Paphos first for this particular destination.',
        },
        {
          q: 'Can you meet a student arriving alone?',
          a: 'Yes, and we do it regularly. The driver waits in arrivals with a name sign, and if the flight is delayed the included waiting time is not shortened. Parents can have the pickup confirmed by message once the student is in the car.',
        },
      ],
      returnIntro:
        'Lefke to Larnaca is a two-hour run back through Güzelyurt and the checkpoint. It is long enough that the pickup hour matters — give us the flight time and we set it, including the two hours the airline asks for at check-in.',
    },
    tr: {
      intro:
        'Lefke adanın batı ucundadır ve Larnaka’dan yolculuk adanın neredeyse tamamını geçer — yüz yirmi iki kilometre ve yaklaşık iki saat; kontrol noktasından ve Güzelyurt’u aşarak narenciye bölgesine. Sondaki üniversite, bu trafiğin önemli bir bölümünün varlık sebebidir.',
      notes: [
        'Lefke Avrupa Üniversitesi varışları dönem başında yoğunlaşır. O hafta sonları için erken ayırtın ve ana kapı yerine yurda gidiyorsanız belirtin.',
        'İlk yılına gelen öğrenciler ağır seyahat eder. Rezervasyonda valiz sayısını verin, salon yerine Vito gönderelim.',
        'Gemikonağı, Soli mozaikleri ve Vouni sarayı on beş dakika mesafede ve sabit yerel ücretlidir — en yakın kiralama ofisi epey uzakken işe yarar.',
      ],
      faq: [
        {
          q: 'Larnaka’dan iki saat — Baf daha hızlı olur mu?',
          a: 'Belirgin biçimde. Lefke, Baf havalimanına en yakın kuzey kasabasıdır; yaklaşık doksan beş dakika, Larnaka’dan ise iki saat. Uçuşunuz için iki havalimanı da uyuyorsa, bu varış noktası için önce Baf’a bakmakta fayda var.',
        },
        {
          q: 'Tek başına gelen bir öğrenciyi karşılayabilir misiniz?',
          a: 'Evet, düzenli olarak yapıyoruz. Şoför varış salonunda isim tabelasıyla bekler; uçuş rötar yaparsa dahil olan bekleme süresi kısalmaz. Öğrenci araca bindiğinde aileye mesajla teyit gönderilebilir.',
        },
      ],
      returnIntro:
        'Lefke’den Larnaka’ya dönüş, Güzelyurt ve kontrol noktası üzerinden iki saatlik bir yoldur. Alım saatinin önem kazandığı kadar uzun; uçuş saatinizi verin, havayolunun check-in için istediği iki saati de katarak biz belirleyelim.',
    },
    ru: {
      intro:
        'Лефке стоит на западном конце острова, и дорога из Ларнаки пересекает почти весь его — сто двадцать два километра и около двух часов, через пункт пропуска и дальше мимо Гюзельюрта в цитрусовый край. Университет в конце пути и объясняет заметную долю этого трафика.',
      notes: [
        'Прилёты студентов Европейского университета Лефке приходятся на начало семестра. На эти выходные бронируйте заранее и уточните, если едете в общежитие, а не к главным воротам.',
        'Первокурсники везут много вещей. Укажите при бронировании число мест багажа — пришлём Vito вместо седана.',
        'Гемиконагы, мозаики Соли и дворец Вуни — в пятнадцати минутах и по фиксированному местному тарифу; удобно, когда ближайший прокат далеко.',
      ],
      faq: [
        {
          q: 'Два часа из Ларнаки — из Пафоса будет быстрее?',
          a: 'Заметно. Лефке — ближайший северный город к аэропорту Пафоса, около девяноста пяти минут против двух часов из Ларнаки. Если по рейсу подходят оба аэропорта, для этого направления стоит сначала посмотреть Пафос.',
        },
        {
          q: 'Встретите ли вы студента, который летит один?',
          a: 'Да, мы делаем это регулярно. Водитель ждёт в зале прилёта с табличкой, а при задержке рейса включённое время ожидания не сокращается. Родителям можно прислать подтверждение сообщением, когда студент сядет в машину.',
        },
      ],
      returnIntro:
        'Из Лефке в Ларнаку — двухчасовая дорога обратно через Гюзельюрт и пункт пропуска. Она достаточно длинная, чтобы час подачи имел значение: сообщите время вылета, и мы рассчитаем его вместе с двумя часами, которые авиакомпания просит на регистрацию.',
    },
  },

  // ------------------------------------------------------------------ Baf ----
  'paphos-airport-to-catalkoy-hotels': {
    guide: 'paphos-airport-arrival-guide',
    en: {
      intro:
        'Paphos to Çatalköy is the long way across the island: a hundred and seventy-three kilometres, a little over two hours, up the west coast and past Güzelyurt before the road turns east along the northern shore. It is the least obvious airport for these hotels and occasionally the only one with a direct flight from home.',
      notes: [
        'This is a two-hour drive and we treat it as one — a comfort stop on the way is normal, and the driver will offer rather than wait to be asked.',
        'Elexus, Cratos, Acapulco, Malpas and Chamada each have their own gate. Give us the hotel name so the last two minutes of a long journey are not spent finding the right entrance.',
        'Paphos handles direct flights from the UK and northern Europe. If yours connects through Turkey, Ercan is forty-five minutes from Çatalköy and much cheaper — worth comparing before you book the flight.',
      ],
      faq: [
        {
          q: 'Is a two-hour transfer from Paphos really worth it?',
          a: 'It depends entirely on the flight. If Paphos is your only direct option, two hours in one car with a fixed fare is straightforward and cheaper than an extra flight leg. If Ercan or Larnaca work for you, both are much closer to this coast.',
        },
        {
          q: 'Does the border crossing add time on this route?',
          a: 'The west-coast crossing is quieter than the Nicosia ones and is already inside the time we quote. There is no surcharge and no change of vehicle — passports are checked at the barrier and you stay in the car.',
        },
      ],
      returnIntro:
        'Çatalköy to Paphos is a two-hour run west along the coast and down past Güzelyurt. On a journey this long the pickup hour is the thing to get right — give us the flight time and we work back from it, crossing included.',
    },
    tr: {
      intro:
        'Baf’tan Çatalköy’e adanın uzun yolundan gidilir: yüz yetmiş üç kilometre, iki saatin biraz üzeri; batı sahilinden yukarı, Güzelyurt’u geçtikten sonra yol kuzey kıyısı boyunca doğuya döner. Bu oteller için en akla gelmeyecek havalimanıdır ve bazen evden direkt uçuşu olan tek havalimanıdır.',
      notes: [
        'Bu iki saatlik bir yolculuktur ve öyle davranırız — yolda mola olağandır; şoför sorulmasını beklemeden teklif eder.',
        'Elexus, Cratos, Acapulco, Malpas ve Chamada’nın kendi kapıları vardır. Otel adını verin ki uzun bir yolculuğun son iki dakikası doğru girişi aramakla geçmesin.',
        'Baf, İngiltere ve Kuzey Avrupa’dan direkt uçuş alır. Sizinki Türkiye aktarmalıysa Ercan, Çatalköy’e kırk beş dakika ve çok daha ucuzdur — uçuşu ayırtmadan karşılaştırmakta fayda var.',
      ],
      faq: [
        {
          q: 'Baf’tan iki saatlik transfer gerçekten mantıklı mı?',
          a: 'Tümüyle uçuşa bağlı. Baf tek direkt seçeneğinizse, sabit ücretle tek araçta iki saat sorunsuzdur ve fazladan bir uçuş bacağından ucuzdur. Ercan ya da Larnaka size uyuyorsa, ikisi de bu sahile çok daha yakındır.',
        },
        {
          q: 'Bu rotada sınır geçişi süre ekliyor mu?',
          a: 'Batı sahilindeki geçiş Lefkoşa’dakilerden sakindir ve verdiğimiz sürenin zaten içindedir. Ek ücret yok, araç değişikliği yok — pasaportlar bariyerde kontrol edilir, siz araçta kalırsınız.',
        },
      ],
      returnIntro:
        'Çatalköy’den Baf’a yolculuk, sahil boyunca batıya ve Güzelyurt’u geçerek aşağıya iki saattir. Bu uzunlukta bir yolda doğru ayarlanması gereken şey alım saatidir — uçuş saatinizi verin, geçiş dahil geriye doğru hesaplayalım.',
    },
    ru: {
      intro:
        'Из Пафоса в Чаталкёй ведёт длинный путь через весь остров: сто семьдесят три километра, чуть больше двух часов — вверх по западному побережью и мимо Гюзельюрта, после чего дорога поворачивает на восток вдоль северного берега. Для этих отелей это наименее очевидный аэропорт и иногда единственный с прямым рейсом из дома.',
      notes: [
        'Это двухчасовая поездка, и мы относимся к ней соответственно: остановка в пути — обычное дело, водитель предложит её сам, не дожидаясь просьбы.',
        'У Elexus, Cratos, Acapulco, Malpas и Chamada свои ворота. Назовите отель, чтобы последние две минуты длинной дороги не ушли на поиск нужного входа.',
        'В Пафос летают прямые рейсы из Великобритании и Северной Европы. Если у вас пересадка в Турции, Эрджан всего в сорока пяти минутах от Чаталкёя и заметно дешевле — стоит сравнить до покупки билета.',
      ],
      faq: [
        {
          q: 'Оправдан ли двухчасовой трансфер из Пафоса?',
          a: 'Всё зависит от рейса. Если Пафос — ваш единственный прямой вариант, два часа в одной машине по фиксированной цене это просто и дешевле лишнего перелёта. Если подходят Эрджан или Ларнака, оба заметно ближе к этому побережью.',
        },
        {
          q: 'Добавляет ли переход границы время на этом маршруте?',
          a: 'Переход на западном побережье спокойнее никосийских и уже входит в заявленное время. Наценки нет, пересадки нет — паспорта проверяют у шлагбаума, вы остаётесь в машине.',
        },
      ],
      returnIntro:
        'Из Чаталкёя в Пафос — два часа на запад вдоль побережья и вниз мимо Гюзельюрта. На такой дистанции главное — верно выбрать час подачи: назовите время вылета, и мы отсчитаем назад, включая переход.',
    },
  },

  'paphos-airport-to-alsancak-hotels': {
    guide: 'kyrenia-harbour-castle-old-town-guide',
    en: {
      intro:
        'Alsancak is a hundred and sixty-three kilometres from Paphos, just over two hours up the west of the island and along the north coast. It works out slightly shorter and cheaper than the run to Kyrenia town itself, because the coast road reaches Alsancak first coming from this direction.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park and Merit Crystal Cove are four different hotels within two kilometres. Name yours — after two hours in the car, the wrong forecourt is the last thing anyone needs.',
        'The west-coast crossing near Güzelyurt is quieter than the Nicosia checkpoints and is inside the quoted time. No surcharge, and you stay in the vehicle.',
        'A stop on the way is normal on a journey of this length, and the driver will suggest one rather than press straight through.',
      ],
      faq: [
        {
          q: 'Why is Paphos to Alsancak cheaper than Paphos to Kyrenia?',
          a: 'Because of the direction of travel. Coming up the west coast, Alsancak sits before Kyrenia on the road — about two kilometres less and a few minutes shorter. From Ercan or Larnaca the order reverses and Alsancak costs a little more than the town.',
        },
        {
          q: 'Should I book Paphos or Ercan for the Merit hotels?',
          a: 'Ercan is forty-five minutes away against just over two hours from Paphos, and the transfer is a fraction of the price. Paphos only makes sense if it is where your direct flight lands — in which case the transfer is routine and fixed price.',
        },
      ],
      returnIntro:
        'Alsancak to Paphos runs a little over two hours down the west of the island. Tell us which Merit forecourt you will be waiting at and your flight time, and we set a pickup hour that allows for the crossing and check-in.',
    },
    tr: {
      intro:
        'Alsancak, Baf’tan yüz altmış üç kilometre; adanın batısından yukarı ve kuzey sahili boyunca iki saatin biraz üzeri. Girne merkeze göre biraz daha kısa ve ucuza denk gelir, çünkü bu yönden gelirken sahil yolu önce Alsancak’a ulaşır.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park ve Merit Crystal Cove iki kilometre içinde dört ayrı oteldir. Hangisi olduğunu yazın — arabada iki saatten sonra kimsenin ihtiyacı olan son şey yanlış ön avludur.',
        'Güzelyurt yakınındaki batı sahili geçişi Lefkoşa kontrol noktalarından sakindir ve verilen sürenin içindedir. Ek ücret yoktur, araçta kalırsınız.',
        'Bu uzunlukta bir yolculukta yolda mola olağandır; şoför doğrudan devam etmek yerine mola önerir.',
      ],
      faq: [
        {
          q: 'Baf–Alsancak neden Baf–Girne’den ucuz?',
          a: 'Gidiş yönünden dolayı. Batı sahilinden yukarı çıkarken Alsancak yolda Girne’den önce gelir — yaklaşık iki kilometre az ve birkaç dakika kısa. Ercan ya da Larnaka’dan sıra tersine döner ve Alsancak merkezden biraz pahalı olur.',
        },
        {
          q: 'Merit otelleri için Baf mı Ercan mı ayırtmalıyım?',
          a: 'Ercan kırk beş dakika, Baf ise iki saatin biraz üzeri ve transfer ücreti kat kat düşük. Baf yalnızca direkt uçuşunuzun indiği yer olduğunda mantıklıdır — o durumda transfer olağan ve sabit fiyatlıdır.',
        },
      ],
      returnIntro:
        'Alsancak’tan Baf’a yolculuk adanın batısından aşağı iki saatin biraz üzerindedir. Hangi Merit’in ön avlusunda bekleyeceğinizi ve uçuş saatinizi söyleyin; geçişi ve check-in’i hesaba katan bir alım saati belirleyelim.',
    },
    ru: {
      intro:
        'Алсанджак — сто шестьдесят три километра от Пафоса, чуть больше двух часов вверх по западу острова и вдоль северного побережья. Выходит немного короче и дешевле, чем поездка в саму Кирению: с этой стороны прибрежная дорога доходит до Алсанджака первым.',
      notes: [
        'Merit Royal, Merit Royal Premium, Merit Park и Merit Crystal Cove — четыре разных отеля в пределах двух километров. Назовите свой: после двух часов в машине не тот двор — последнее, что нужно.',
        'Переход у Гюзельюрта спокойнее никосийских и входит в заявленное время. Без наценки, из машины выходить не нужно.',
        'На такой дистанции остановка в пути — норма, и водитель предложит её сам, а не поедет напролом.',
      ],
      faq: [
        {
          q: 'Почему Пафос — Алсанджак дешевле, чем Пафос — Кирения?',
          a: 'Из-за направления. Поднимаясь по западному побережью, Алсанджак вы проезжаете раньше Кирении — примерно на два километра и несколько минут ближе. Из Эрджана или Ларнаки порядок обратный, и Алсанджак стоит чуть дороже центра.',
        },
        {
          q: 'Что выбрать для отелей Merit — Пафос или Эрджан?',
          a: 'Эрджан в сорока пяти минутах против двух с лишним часов из Пафоса, и трансфер в разы дешевле. Пафос имеет смысл, только если туда садится ваш прямой рейс, — тогда трансфер обычный и по фиксированной цене.',
        },
      ],
      returnIntro:
        'Из Алсанджака в Пафос — чуть больше двух часов вниз по западу острова. Скажите, у какого двора Merit вы будете ждать, и время вылета: час подачи мы подберём с учётом перехода и регистрации.',
    },
  },

  'paphos-airport-to-lapta': {
    guide: 'kyrenia-harbour-castle-old-town-guide',
    en: {
      intro:
        'Lapta is a hundred and fifty-seven kilometres from Paphos, a shade under two hours, and one of the few northern destinations that is closer to this airport than to Kyrenia town. Coming up the west coast you reach Lapta before anything else on that shore.',
      notes: [
        'The old village above the main road and the coastal strip below it are two different drop-offs a steep couple of kilometres apart. Say which one you need.',
        'Long stays are the norm in Lapta and a development name works fine as an address. Add a pin if you have one and the last few hundred metres take care of themselves.',
        'The crossing near Güzelyurt is inside the quoted time and carries no surcharge. On a journey this long the driver will offer a stop rather than push straight through.',
      ],
      faq: [
        {
          q: 'Is Paphos a sensible airport for Lapta?',
          a: 'More sensible than most people expect. It is under two hours and cheaper than the same run to Kyrenia or Çatalköy, because Lapta sits at the near end of the north coast coming from the west. If your direct flight lands at Paphos, it is a perfectly practical pairing.',
        },
        {
          q: 'Can the car reach a house in the old village?',
          a: 'Yes, with the caveat that the lanes are narrow and some are one-way in a direction maps get wrong. Our drivers know which ones take a car. Send the street or a pin and we come to the door.',
        },
      ],
      returnIntro:
        'Lapta to Paphos is a little under two hours down the west coast. If you are up in the old village the driver comes up rather than waiting on the main road, and we allow for the crossing on the way south.',
    },
    tr: {
      intro:
        'Lapta, Baf’tan yüz elli yedi kilometre, iki saatin biraz altı; bu havalimanına Girne merkezden daha yakın olan sayılı kuzey noktasından biridir. Batı sahilinden yukarı çıkarken o kıyıda ilk ulaştığınız yer Lapta’dır.',
      notes: [
        'Ana yolun üstündeki eski köy ile altındaki sahil şeridi, aralarında dik birkaç kilometre olan iki ayrı iniş noktasıdır. Hangisini istediğinizi söyleyin.',
        'Lapta’da uzun süreli kalışlar olağandır ve site adı adres olarak yeterlidir. Varsa konum işaretini de ekleyin, son birkaç yüz metre kendiliğinden halloluyor.',
        'Güzelyurt yakınındaki geçiş verilen sürenin içindedir ve ek ücreti yoktur. Bu uzunlukta bir yolda şoför doğrudan devam etmek yerine mola önerir.',
      ],
      faq: [
        {
          q: 'Lapta için Baf mantıklı bir havalimanı mı?',
          a: 'Çoğu kişinin beklediğinden daha mantıklı. İki saatin altında ve aynı yolun Girne ya da Çatalköy’e olan versiyonundan ucuz; çünkü batıdan gelirken Lapta kuzey sahilinin yakın ucundadır. Direkt uçuşunuz Baf’a iniyorsa gayet pratik bir eşleşmedir.',
        },
        {
          q: 'Araç eski köydeki bir eve ulaşabiliyor mu?',
          a: 'Evet; sokakların dar olduğu ve bazılarının haritaların yanlış gösterdiği yönde tek yönlü olduğu kaydıyla. Şoförlerimiz hangisinden araç geçtiğini bilir. Sokak adını ya da konum işaretini gönderin, kapıya gelelim.',
        },
      ],
      returnIntro:
        'Lapta’dan Baf’a yolculuk batı sahilinden aşağı iki saatin biraz altındadır. Eski köyde yukarıdaysanız şoför ana yolda beklemek yerine yukarı çıkar; güneye inerken geçişi de hesaba katarız.',
    },
    ru: {
      intro:
        'Лапта — сто пятьдесят семь километров от Пафоса, чуть меньше двух часов, и одно из немногих северных направлений, что ближе к этому аэропорту, чем к центру Кирении. Поднимаясь по западному побережью, на этом берегу вы попадаете в Лапту первой.',
      notes: [
        'Старая деревня над главной дорогой и прибрежная полоса под ней — две разные точки высадки, между ними пара километров крутого подъёма. Скажите, какая нужна.',
        'В Лапте обычно живут подолгу, и название комплекса вполне работает как адрес. Добавьте метку, если она есть, и последние сотни метров решатся сами.',
        'Переход у Гюзельюрта входит в заявленное время и не оплачивается отдельно. На такой дистанции водитель предложит остановку, а не поедет напролом.',
      ],
      faq: [
        {
          q: 'Разумный ли Пафос аэропорт для Лапты?',
          a: 'Разумнее, чем обычно думают. Меньше двух часов и дешевле, чем та же дорога в Кирению или Чаталкёй, потому что с запада Лапта стоит в ближнем конце северного побережья. Если ваш прямой рейс садится в Пафосе, сочетание вполне практичное.',
        },
        {
          q: 'Доедет ли машина до дома в старой деревне?',
          a: 'Да, с оговоркой: улочки узкие, а часть из них односторонние в направлении, которое карты показывают неверно. Наши водители знают, где машина проходит. Пришлите улицу или метку — подъедем к двери.',
        },
      ],
      returnIntro:
        'Из Лапты в Пафос — чуть меньше двух часов вниз по западному побережью. Если вы наверху в старой деревне, водитель поднимется, а не станет ждать на главной дороге; на путь к югу мы закладываем переход.',
    },
  },

  'paphos-airport-to-karsiyaka': {
    guide: 'north-cyprus-villages-heritage-guide',
    en: {
      intro:
        'Karşıyaka is the closest point on the north coast to Paphos: a hundred and fifty kilometres and under two hours, which makes this the cheapest of our Paphos coastal fares. Coming from the west you round the end of the Beşparmak and arrive from the quiet side rather than through Kyrenia.',
      notes: [
        'Addresses here are site names and landmarks. Send the development, the nearest restaurant or a pin — street numbers are of limited use in Karşıyaka.',
        'The village climbs the slope above the main road. If your place is up there, say so and the driver takes the hill rather than stopping at the bottom.',
        'The west-coast crossing near Güzelyurt is the quiet one and is inside the quoted time. No surcharge, and no change of vehicle at the barrier.',
      ],
      faq: [
        {
          q: 'Is Karşıyaka really closer to Paphos than to Larnaca?',
          a: 'Yes — a hundred and fifty kilometres against a hundred and two, but the Paphos road is faster and the fare works out lower than several nearer destinations. Coming up the west coast you reach Karşıyaka before Lapta, Alsancak or Kyrenia.',
        },
        {
          q: 'Will you find a villa with no street address?',
          a: 'Usually. The developments along this coast are known by name and our drivers cover it regularly. Give us the site name plus a pin if you have one and we will not be calling you from an unlit road late at night.',
        },
      ],
      returnIntro:
        'Karşıyaka to Paphos is under two hours and the shortest of our Paphos coastal runs. Nothing passes out here before dawn, so we agree the hour the night before and the driver is at the door — give us the site name.',
    },
    tr: {
      intro:
        'Karşıyaka, kuzey sahilinin Baf’a en yakın noktasıdır: yüz elli kilometre ve iki saatin altı; bu da onu Baf sahil ücretlerimizin en ucuzu yapar. Batıdan gelirken Beşparmak’ın ucunu dolanır ve Girne’den değil, sakin taraftan varırsınız.',
      notes: [
        'Buradaki adresler site adları ve tarif noktalarıdır. Siteyi, en yakın lokantayı ya da konum işaretini gönderin — Karşıyaka’da sokak numarasının faydası sınırlıdır.',
        'Köy ana yolun üstünde yamaca tırmanır. Eviniz yukarıdaysa söyleyin, şoför aşağıda durmak yerine yokuşu çıksın.',
        'Güzelyurt yakınındaki batı sahili geçişi sakin olanıdır ve verilen sürenin içindedir. Ek ücret yok, bariyerde araç değişikliği yok.',
      ],
      faq: [
        {
          q: 'Karşıyaka gerçekten Baf’a Larnaka’dan daha mı yakın?',
          a: 'Evet — yüz elli kilometreye karşı yüz iki; ama Baf yolu daha hızlıdır ve ücret, daha yakın birkaç varış noktasından düşük çıkar. Batı sahilinden yukarı çıkarken Karşıyaka’ya Lapta, Alsancak ya da Girne’den önce ulaşırsınız.',
        },
        {
          q: 'Sokak adresi olmayan bir villayı bulabiliyor musunuz?',
          a: 'Genellikle evet. Bu sahildeki siteler adlarıyla bilinir ve şoförlerimiz düzenli olarak gelir. Site adını, varsa konum işaretiyle birlikte verin; gece geç saatte aydınlatmasız bir yoldan sizi aramayalım.',
        },
      ],
      returnIntro:
        'Karşıyaka’dan Baf’a yolculuk iki saatin altındadır ve Baf sahil hatlarımızın en kısasıdır. Şafaktan önce buradan araç geçmez; saati bir önceki akşam kararlaştırır, şoförü kapıya göndeririz — site adını verin yeter.',
    },
    ru: {
      intro:
        'Каршияка — ближайшая к Пафосу точка северного побережья: сто пятьдесят километров и меньше двух часов, что делает этот тариф самым дешёвым среди наших прибрежных маршрутов из Пафоса. С запада вы огибаете край Бешпармака и приезжаете с тихой стороны, а не через Кирению.',
      notes: [
        'Адреса здесь — названия комплексов и ориентиры. Пришлите комплекс, ближайший ресторан или метку: номера домов в Каршияке помогают мало.',
        'Деревня поднимается по склону над главной дорогой. Если ваш дом наверху, скажите — водитель поедет в гору, а не остановится внизу.',
        'Переход у Гюзельюрта — самый спокойный, и он входит в заявленное время. Без наценки и без пересадки у шлагбаума.',
      ],
      faq: [
        {
          q: 'Каршияка правда ближе к Пафосу, чем к Ларнаке?',
          a: 'Да: сто пятьдесят километров против ста двух, но дорога из Пафоса быстрее, и цена выходит ниже, чем до нескольких более близких мест. Поднимаясь по западному побережью, вы доезжаете до Каршияки раньше, чем до Лапты, Алсанджака или Кирении.',
        },
        {
          q: 'Найдёте ли виллу без уличного адреса?',
          a: 'Обычно да. Комплексы вдоль этого побережья известны по названиям, и наши водители бывают здесь регулярно. Дайте название и метку, если есть, — и нам не придётся звонить вам с неосвещённой дороги поздно вечером.',
        },
      ],
      returnIntro:
        'Из Каршияки в Пафос — меньше двух часов, самый короткий из наших прибрежных маршрутов в этот аэропорт. До рассвета здесь ничего не проезжает, поэтому час согласуем накануне, и водитель подъедет к двери: достаточно назвать комплекс.',
    },
  },

  'paphos-airport-to-esentepe-hotels': {
    guide: 'paphos-airport-arrival-guide',
    en: {
      intro:
        'Esentepe is a hundred and eighty-eight kilometres from Paphos, around two hours and twenty minutes — the far end of the north coast reached from the far end of the south. Everything east of Kyrenia costs more from this airport, and this is the stretch where the distance really shows.',
      notes: [
        'Korineum Golf & Beach Resort has its own approach road; the clubhouse and the hotel reception are separate drop-offs. Tell us which.',
        'Villa addresses on the hillside above Esentepe need a development name and, ideally, a plot or block. The approach roads are unlit and unsigned.',
        'On a journey of this length a stop is normal. The driver will suggest one at a sensible point rather than waiting to be asked.',
      ],
      faq: [
        {
          q: 'Is there a shorter way to Esentepe than two hours twenty?',
          a: 'From Paphos, no — it is the longest diagonal on the island short of the Karpaz. Ercan is fifty-five minutes and Larnaca ninety. Paphos is worth it only when it is where your direct flight lands, and then the fare is fixed and the car is yours door to door.',
        },
        {
          q: 'Do you go to the golf villas, not just the resort?',
          a: 'Yes, and villas are most of our Esentepe work. Send the development name and any block or plot number. The sites spread over several kilometres of hillside, so an address the driver already recognises is worth more than a map reference.',
        },
      ],
      returnIntro:
        'Esentepe to Paphos is a two-hour-twenty run west along the coast and down the far side of the island. We collect from the villa or the resort reception, and on a journey this long we work the pickup hour back from your flight time.',
    },
    tr: {
      intro:
        'Esentepe, Baf’tan yüz seksen sekiz kilometre, yaklaşık iki saat yirmi dakika — güneyin en ucundan kuzey sahilinin en ucuna. Girne’nin doğusundaki her yer bu havalimanından daha pahalıdır ve mesafenin gerçekten hissedildiği bölüm burasıdır.',
      notes: [
        'Korineum Golf & Beach Resort’un kendi giriş yolu vardır; kulüp binası ile otel resepsiyonu ayrı iniş noktalarıdır. Hangisi olduğunu söyleyin.',
        'Esentepe’nin üstündeki yamaçta villa adresleri için site adı ve tercihen parsel ya da blok gerekir. Giriş yolları aydınlatmasız ve levhasızdır.',
        'Bu uzunlukta bir yolculukta mola olağandır. Şoför sorulmasını beklemeden uygun bir noktada mola önerir.',
      ],
      faq: [
        {
          q: 'Esentepe’ye iki saat yirmiden kısa bir yol var mı?',
          a: 'Baf’tan yok — Karpaz hariç adanın en uzun çaprazıdır. Ercan elli beş dakika, Larnaka doksan dakika. Baf yalnızca direkt uçuşunuzun indiği yerse değer; o zaman da ücret sabittir ve araç kapıdan kapıya sizindir.',
        },
        {
          q: 'Sadece tesise değil, golf villalarına da gidiyor musunuz?',
          a: 'Evet; Esentepe işimizin çoğu villadır. Site adını, varsa blok ya da parsel numarasını gönderin. Siteler birkaç kilometrelik yamaca yayılır; şoförün zaten tanıdığı bir adres, harita koordinatından değerlidir.',
        },
      ],
      returnIntro:
        'Esentepe’den Baf’a yolculuk, sahil boyunca batıya ve adanın öbür ucundan aşağıya iki saat yirmi dakikadır. Villadan ya da tesis resepsiyonundan alırız; bu uzunlukta bir yolda alım saatini uçuş saatinizden geriye doğru hesaplarız.',
    },
    ru: {
      intro:
        'Эсентепе — сто восемьдесят восемь километров от Пафоса, около двух часов двадцати минут: дальний конец северного побережья, куда едут с дальнего конца южного. Всё, что восточнее Кирении, из этого аэропорта дороже, и именно здесь расстояние ощущается по-настоящему.',
      notes: [
        'У Korineum Golf & Beach Resort своя подъездная дорога, а клубный дом и ресепшн отеля — разные точки высадки. Скажите, какая нужна.',
        'Для вилл на склоне над Эсентепе нужно название комплекса и желательно номер участка или корпуса. Подъездные дороги без освещения и указателей.',
        'На такой дистанции остановка в пути — норма. Водитель предложит её в удобном месте сам, не дожидаясь просьбы.',
      ],
      faq: [
        {
          q: 'Есть ли путь в Эсентепе короче двух часов двадцати?',
          a: 'Из Пафоса нет — это самая длинная диагональ острова, если не считать Карпаза. Эрджан — пятьдесят пять минут, Ларнака — девяносто. Пафос оправдан, только если туда садится ваш прямой рейс; тогда цена фиксированная, а машина ваша от двери до двери.',
        },
        {
          q: 'Возите ли вы к гольф-виллам, а не только в отель?',
          a: 'Да, и виллы — основная часть нашей работы в Эсентепе. Пришлите название комплекса и номер корпуса или участка. Комплексы разбросаны по нескольким километрам склона, так что знакомый водителю адрес полезнее координат на карте.',
        },
      ],
      returnIntro:
        'Из Эсентепе в Пафос — два часа двадцать на запад вдоль побережья и вниз по дальней стороне острова. Забираем от виллы или от ресепшн, а час подачи на такой дистанции отсчитываем назад от времени вылета.',
    },
  },

  'paphos-airport-to-bogaz': {
    guide: 'paphos-airport-arrival-guide',
    en: {
      intro:
        'Paphos to Boğaz crosses the island corner to corner: two hundred and twenty-five kilometres and around two hours forty-five, from the south-west tip to the harbour where the Karpaz road begins. It is one of the longest transfers we run and, for a direct flight into Paphos, the only single-vehicle way to do it.',
      notes: [
        'Expect a comfort stop; on a journey approaching three hours the driver will build one in rather than push through.',
        'Ercan is fifty minutes from Boğaz and Larnaca eighty. If your flight can route into either, the saving on this leg is substantial — worth checking before the ticket is booked.',
        'The harbour front is compact, so a restaurant or hotel name is drop-off enough. Beyond it the road runs up the Karpaz peninsula.',
      ],
      faq: [
        {
          q: 'Nearly three hours in a car — is that really the best option?',
          a: 'It is the best option from Paphos, and for a direct flight it beats a connection. But be clear-eyed: Ercan is fifty minutes from Boğaz and Larnaca eighty. This route exists for people whose flight lands at Paphos, not because it is the natural way to reach the east coast.',
        },
        {
          q: 'Can you continue to the Karpaz on the same booking?',
          a: 'Yes. Boğaz is where the peninsula road starts, so it is a natural break in the journey. Tell us at the time of booking and we quote the whole thing at a fixed price rather than treating it as two separate jobs.',
        },
      ],
      returnIntro:
        'Boğaz to Paphos is a two-hour-forty-five run across the width of the island. On a journey this long the pickup hour is worked back from your flight time, crossing and check-in included, and the driver comes to the hotel door.',
    },
    tr: {
      intro:
        'Baf’tan Boğaz’a adayı köşeden köşeye geçersiniz: iki yüz yirmi beş kilometre ve yaklaşık iki saat kırk beş dakika; güneybatı ucundan Karpaz yolunun başladığı limana. Yaptığımız en uzun transferlerden biridir ve Baf’a direkt uçuş için bunu tek araçla yapmanın tek yoludur.',
      notes: [
        'Mola bekleyin; üç saate yaklaşan bir yolculukta şoför devam etmek yerine molayı programa katar.',
        'Ercan Boğaz’a elli dakika, Larnaka seksen dakika. Uçuşunuz ikisinden birine inebiliyorsa bu bacaktaki tasarruf ciddidir — bilet alınmadan bakmakta fayda var.',
        'Liman önü derli topludur; lokanta ya da otel adı iniş noktası olarak yeter. Ötesinde yol Karpaz yarımadasına çıkar.',
      ],
      faq: [
        {
          q: 'Arabada neredeyse üç saat — gerçekten en iyi seçenek bu mu?',
          a: 'Baf’tan en iyi seçenek budur ve direkt uçuş için aktarmadan iyidir. Ama açık konuşalım: Ercan Boğaz’a elli dakika, Larnaka seksen dakika. Bu rota, uçuşu Baf’a inenler için vardır; doğu sahiline ulaşmanın doğal yolu olduğu için değil.',
        },
        {
          q: 'Aynı rezervasyonla Karpaz’a devam edebilir miyiz?',
          a: 'Evet. Yarımada yolu Boğaz’dan başladığı için yolculukta doğal bir moladır. Rezervasyon sırasında söyleyin, iki ayrı iş gibi değil, tamamını sabit fiyatla fiyatlandıralım.',
        },
      ],
      returnIntro:
        'Boğaz’dan Baf’a yolculuk adayı enine geçen iki saat kırk beş dakikalık bir yoldur. Bu uzunlukta alım saati, geçiş ve check-in dahil uçuş saatinizden geriye hesaplanır; şoför otel kapısına gelir.',
    },
    ru: {
      intro:
        'Из Пафоса в Богаз остров пересекают по диагонали: двести двадцать пять километров и около двух часов сорока пяти минут — от юго-западной оконечности до гавани, где начинается дорога на Карпаз. Это один из самых длинных наших трансферов и единственный способ проехать его одной машиной при прямом рейсе в Пафос.',
      notes: [
        'Остановка будет: на дороге, подбирающейся к трём часам, водитель заложит её сам, а не поедет напролом.',
        'Эрджан в пятидесяти минутах от Богаза, Ларнака — в восьмидесяти. Если рейс может сесть в один из них, экономия на этом отрезке существенная: стоит посмотреть до покупки билета.',
        'Набережная компактная, так что названия ресторана или отеля достаточно для высадки. Дальше дорога уходит на полуостров Карпаз.',
      ],
      faq: [
        {
          q: 'Почти три часа в машине — это правда лучший вариант?',
          a: 'Из Пафоса — да, и для прямого рейса это лучше стыковки. Но будем откровенны: Эрджан в пятидесяти минутах от Богаза, Ларнака в восьмидесяти. Этот маршрут существует для тех, чей рейс садится в Пафосе, а не потому, что это естественный путь к восточному побережью.',
        },
        {
          q: 'Можно ли продолжить на Карпаз в рамках той же брони?',
          a: 'Да. От Богаза начинается дорога на полуостров, так что это естественная точка перелома маршрута. Скажите при бронировании, и мы посчитаем всё целиком по фиксированной цене, а не как две отдельные поездки.',
        },
      ],
      returnIntro:
        'Из Богаза в Пафос — два часа сорок пять поперёк всего острова. На такой дистанции час подачи отсчитывается назад от времени вылета, включая переход и регистрацию, и водитель подъезжает к дверям отеля.',
    },
  },

  'paphos-airport-to-karpaz-hotels': {
    guide: 'karpaz-golden-beach-guide',
    en: {
      intro:
        'This is the longest journey on the site: two hundred and seventy-five kilometres and about three and a half hours from Paphos to the Karpaz hotels, corner to corner across Cyprus and then out along the peninsula. We run it, and we are straight about what it is — a half-day of driving that only makes sense when Paphos is where your flight lands.',
      notes: [
        'Stops are built in on a run of this length. The driver will plan them rather than ask you to endure three and a half hours straight.',
        'Ercan is an hour thirty-five from the Karpaz and Larnaca two hours fifteen. Both are dramatically shorter. If your itinerary has any flexibility, use it here more than on any other route.',
        'Yeni Erenköy is the last town with fuel and an ATM, and beyond Dipkarpaz wild donkeys stand in the road at all hours. The final stretch is deliberately unhurried.',
      ],
      faq: [
        {
          q: 'Three and a half hours — would you advise this route?',
          a: 'Only if Paphos is where you land. It is a fixed price, one car, one driver, and it is comfortable, but it is a long day either side of a flight. If you can fly into Ercan instead, the drive drops to an hour thirty-five and the fare falls by more than half.',
        },
        {
          q: 'Is the return leg from the Karpaz bookable in advance?',
          a: 'It should be booked in advance — there is no rank on the peninsula and virtually no passing traffic. For a three-and-a-half-hour journey to a fixed flight time, we confirm the pickup the evening before and the driver comes to the hotel.',
        },
      ],
      returnIntro:
        'The Karpaz to Paphos is three and a half hours across the whole island, so the pickup is early and arranged well ahead. There is nothing on the peninsula to fall back on, which is why we confirm the night before and come to the hotel door.',
    },
    tr: {
      intro:
        'Sitedeki en uzun yolculuk budur: Baf’tan Karpaz otellerine iki yüz yetmiş beş kilometre ve yaklaşık üç buçuk saat; Kıbrıs’ı köşeden köşeye geçip yarımadaya çıkarak. Bu hattı yapıyoruz ve ne olduğu konusunda açığız — yarım günlük bir sürüş; yalnızca uçuşunuz Baf’a iniyorsa mantıklıdır.',
      notes: [
        'Bu uzunlukta bir yolda molalar plana dahildir. Şoför, size üç buçuk saati aralıksız çektirmek yerine molaları önceden planlar.',
        'Ercan Karpaz’a bir saat otuz beş dakika, Larnaka iki saat on beş dakika. İkisi de çarpıcı biçimde kısadır. Programınızda esneklik varsa, onu başka hiçbir rotada olmadığı kadar burada kullanın.',
        'Yeni Erenköy akaryakıt ve bankamatiğin bulunduğu son kasabadır; Dipkarpaz’ı geçince yolda her saat yaban eşekleri durur. Son bölüm bilerek acelesizdir.',
      ],
      faq: [
        {
          q: 'Üç buçuk saat — bu rotayı önerir misiniz?',
          a: 'Yalnızca Baf’a iniyorsanız. Sabit fiyat, tek araç, tek şoför ve konforlu; ama uçuşun iki yanında da uzun bir gün demektir. Ercan’a uçabiliyorsanız yol bir saat otuz beş dakikaya iner ve ücret yarıdan fazla düşer.',
        },
        {
          q: 'Karpaz’dan dönüş bacağı önceden ayrılabiliyor mu?',
          a: 'Önceden ayrılmalıdır — yarımadada durak yoktur ve geçen araç da fiilen yoktur. Sabit bir uçuş saatine üç buçuk saatlik yolculuk için alımı bir önceki akşam teyit eder, şoförü otele göndeririz.',
        },
      ],
      returnIntro:
        'Karpaz’dan Baf’a yolculuk adanın tamamını geçen üç buçuk saattir; dolayısıyla alım erken ve epey önceden ayarlanır. Yarımadada başvurulacak bir seçenek yok; bu yüzden bir önceki akşam teyit eder, otel kapısına geliriz.',
    },
    ru: {
      intro:
        'Это самая длинная поездка на сайте: двести семьдесят пять километров и около трёх с половиной часов от Пафоса до отелей Карпаза — через весь Кипр по диагонали и затем вдоль полуострова. Мы её возим и честно говорим, что это такое: полдня за рулём, оправданные лишь тогда, когда ваш рейс садится в Пафосе.',
      notes: [
        'На такой дистанции остановки заложены заранее. Водитель спланирует их сам, а не заставит вас выдержать три с половиной часа подряд.',
        'Эрджан — час тридцать пять до Карпаза, Ларнака — два пятнадцать. Оба несравнимо ближе. Если в маршруте есть хоть какая-то гибкость, используйте её здесь больше, чем где-либо ещё.',
        'Ени-Эренкёй — последний городок с заправкой и банкоматом, а за Дипкарпазом на дороге в любое время стоят дикие ослы. Финальный отрезок намеренно неспешный.',
      ],
      faq: [
        {
          q: 'Три с половиной часа — вы бы советовали этот маршрут?',
          a: 'Только если вы прилетаете в Пафос. Это фиксированная цена, одна машина, один водитель, и ехать удобно, но по обе стороны от рейса выходит длинный день. Если можно прилететь в Эрджан, дорога сокращается до часа тридцати пяти, а цена падает больше чем вдвое.',
        },
        {
          q: 'Можно ли забронировать обратную дорогу с Карпаза заранее?',
          a: 'Её и нужно бронировать заранее: стоянок на полуострове нет, попутных машин практически тоже. Для трёхчасовой с половиной дороги к фиксированному вылету мы подтверждаем подачу накануне вечером, и водитель подъезжает к отелю.',
        },
      ],
      returnIntro:
        'С Карпаза до Пафоса — три с половиной часа через весь остров, поэтому выезд ранний и согласуется сильно заранее. На полуострове подстраховаться нечем: подтверждаем накануне вечером и подаём машину к дверям отеля.',
    },
  },

  'paphos-airport-to-lefke': {
    guide: 'guzelyurt-soli-vouni-west-cyprus-guide',
    en: {
      intro:
        'Lefke is the closest northern town to Paphos airport — ninety-eight kilometres and about an hour and thirty-five minutes, which makes this the shortest and cheapest transfer we run from Paphos. The road follows the west coast and the crossing near Güzelyurt is the quietest on the island.',
      notes: [
        'If you are flying in for the university, this pairing is worth knowing: Paphos is nearer to Lefke than Larnaca is, and the transfer costs less than either alternative.',
        'First-year students travel with a great deal of luggage. Tell us the number of cases at booking and we send a Vito instead of a saloon.',
        'Gemikonağı harbour, the Soli mosaics and the Vouni palace are all within fifteen minutes of Lefke and run at fixed local fares.',
      ],
      faq: [
        {
          q: 'Is Paphos really the best airport for Lefke?',
          a: 'For distance and price, yes — an hour thirty-five against two hours from Larnaca and seventy minutes from Ercan but at a much lower fare than the Larnaca run. The deciding factor is usually which airport your direct flight serves.',
        },
        {
          q: 'Do you handle arrivals for the European University of Lefke?',
          a: 'Regularly, including students travelling alone. The driver waits in arrivals with a name sign, delays do not shorten the included waiting time, and we can message a confirmation to parents once the student is in the car.',
        },
      ],
      returnIntro:
        'Lefke to Paphos is an hour and thirty-five minutes down the west coast — the shortest airport run on this side of the island. Give us the flight time and we set the pickup with the crossing and check-in already allowed for.',
    },
    tr: {
      intro:
        'Lefke, Baf havalimanına en yakın kuzey kasabasıdır — doksan sekiz kilometre ve yaklaşık bir saat otuz beş dakika; bu da onu Baf’tan yaptığımız en kısa ve en ucuz transfer yapar. Yol batı sahilini izler ve Güzelyurt yakınındaki geçiş adanın en sakinidir.',
      notes: [
        'Üniversite için geliyorsanız bu eşleşmeyi bilmekte fayda var: Baf, Lefke’ye Larnaka’dan yakındır ve transfer her iki alternatiften de ucuza gelir.',
        'Birinci sınıf öğrencileri bol bagajla gelir. Rezervasyonda valiz sayısını söyleyin, salon yerine Vito gönderelim.',
        'Gemikonağı limanı, Soli mozaikleri ve Vouni sarayı Lefke’ye on beş dakika mesafededir ve sabit yerel ücretle gidilir.',
      ],
      faq: [
        {
          q: 'Lefke için gerçekten en iyi havalimanı Baf mı?',
          a: 'Mesafe ve fiyat açısından evet — Larnaka’dan iki saate karşı bir saat otuz beş dakika; Ercan yetmiş dakikadır ama Larnaka hattından çok daha düşük ücretle. Belirleyici olan genelde direkt uçuşunuzun hangi havalimanına indiğidir.',
        },
        {
          q: 'Lefke Avrupa Üniversitesi varışlarını karşılıyor musunuz?',
          a: 'Düzenli olarak, tek başına seyahat eden öğrenciler dahil. Şoför varış salonunda isim tabelasıyla bekler, rötar dahil bekleme süresini kısaltmaz ve öğrenci araca bindiğinde aileye mesajla teyit gönderebiliriz.',
        },
      ],
      returnIntro:
        'Lefke’den Baf’a yolculuk batı sahilinden aşağı bir saat otuz beş dakikadır — adanın bu yanındaki en kısa havalimanı hattı. Uçuş saatinizi verin, geçişi ve check-in’i hesaba katarak alım saatini belirleyelim.',
    },
    ru: {
      intro:
        'Лефке — ближайший северный город к аэропорту Пафоса: девяносто восемь километров и около часа тридцати пяти минут, а значит, самый короткий и дешёвый трансфер из тех, что мы возим из Пафоса. Дорога идёт вдоль западного побережья, а переход у Гюзельюрта — самый спокойный на острове.',
      notes: [
        'Если вы летите ради университета, это сочетание стоит запомнить: Пафос ближе к Лефке, чем Ларнака, и трансфер дешевле обоих альтернативных вариантов.',
        'Первокурсники приезжают с большим количеством вещей. Укажите при бронировании число мест багажа — пришлём Vito вместо седана.',
        'Гавань Гемиконагы, мозаики Соли и дворец Вуни — в пятнадцати минутах от Лефке и по фиксированному местному тарифу.',
      ],
      faq: [
        {
          q: 'Пафос действительно лучший аэропорт для Лефке?',
          a: 'По расстоянию и цене — да: час тридцать пять против двух часов из Ларнаки; из Эрджана семьдесят минут, но тариф из Пафоса заметно ниже ларнакского. Решает обычно то, куда летит ваш прямой рейс.',
        },
        {
          q: 'Встречаете ли вы прилетающих в Европейский университет Лефке?',
          a: 'Регулярно, в том числе студентов, летящих в одиночку. Водитель ждёт в зале прилёта с табличкой, задержки не сокращают включённое время ожидания, а родителям можно прислать подтверждение, когда студент сядет в машину.',
        },
      ],
      returnIntro:
        'Из Лефке в Пафос — час тридцать пять вниз по западному побережью, самый короткий аэропортовый маршрут на этой стороне острова. Сообщите время вылета, и мы назначим подачу с учётом перехода и регистрации.',
    },
  },
}
