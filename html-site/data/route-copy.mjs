// Rota landing page'lerinin özgün metinleri — slug başına, dil başına.
//
// Bu dosya havalimanı ↔ ana varış hatlarını tutar. Kıyı şeridi, batı ve Karpaz
// hatlarının metni data/route-copy-coast.mjs'te; dosya 146 KB'ı geçince ikiye
// ayrıldı. Yapı ikisinde de aynı ve aşağıda tek `routeCopy` olarak birleşiyorlar,
// dolayısıyla şablon tarafında hiçbir fark yok. Yeni metni hangisine yazdığın
// önemli değil; aynı slug ikisinde de varsa coast dosyası kazanır.
//
// Neden ayrı dosya: data/routes.mjs fiyat/süre/mesafe gibi *veriyi* tutar, burası
// *metni* tutar. Şablon (templates/routes.mjs) buradaki kaydı bulamazsa ilgili
// bloğu hiç basmaz; yani eksik rota build'i bozmaz, sadece sade sayfa üretir.
//
// Anahtar = gidiş yönündeki slug ('ercan-airport-to-kyrenia'). Ters yön sayfası
// ('kyrenia-to-ercan-airport') aynı kaydı 'baseSlug' üzerinden bulur ve
// intro/notes/faq yerine yalnızca 'returnIntro' metnini kullanır.
//
// Yazım kuralları:
// - Fiyat RAKAMI yazma. Rakam data/routes.mjs'te; metinde tekrarlanırsa fiyat
//   güncellenince metin yalan söyler.
// - Somut ol: yol, geçit, sınır kapısı, otel bölgesi, yürüme mesafesi. Genel
//   pazarlama cümlesi ("konforlu ve güvenli yolculuk") yazma.
// - Ünlem işareti yok. Övgü sıfatı yerine olayı anlat.
// - notes: 3 madde, bu güzergaha özgü pratik bilgi.
// - faq: 2 soru-cevap, bu güzergaha özgü — genel SSS zaten ayrı sayfada.
// - Metinde geçen yer/otel/kapı adları content/blog/ altındaki rehberlerle
//   doğrulanmıştır; yeni rota yazarken aynı kaynağa dayan.
//
// Sıra data/routes.mjs ile aynıdır.
import { routeCopyCoast } from './route-copy-coast.mjs'

const routeCopyMain = {
  "ercan-airport-to-nicosia": {
    "guide": "nicosia-lefkosa-city-transfer-guide",
    "en": {
      "intro": "Nicosia is the closest city to Ercan, and the drive shows it: eighteen kilometres of flat road across the Mesarya, twenty minutes, and you are at the walls. Most arrivals are inside the old city before they have finished reading the road signs. We take you to the door of the hotel, not to the nearest gate.",
      "notes": [
        "Parking inside the Venetian walls is difficult, so we set down at the closest gate to your address — Kyrenia Gate for the north side, Famagusta Gate for the east.",
        "Nicosia is a working capital, not a resort: far fewer empty taxis circle here than in Kyrenia, so evening returns are worth booking rather than hoping for.",
        "The Ledra Street crossing into the south is on foot and takes minutes. We drop you at the northern end of Arasta and collect you back there."
      ],
      "faq": [
        {
          "q": "How long does it take from Ercan Airport to Nicosia?",
          "a": "Around 20 minutes over 18 km, which makes Nicosia the quickest arrival on the island. We watch the flight and move the pickup with it, so a delayed landing does not shorten the waiting time included."
        },
        {
          "q": "Can you drop me at a hospital or a university campus in Nicosia?",
          "a": "Yes. Near East University Hospital, the Burhan Nalbantoğlu state hospital and the campuses on the edge of the city are all standard drop-offs. For an appointment the driver can wait and take you back afterwards."
        }
      ],
      "returnIntro": "Leaving Nicosia for a flight is the shortest airport run in Cyprus — twenty minutes if the roads behave. We still build in slack for the morning traffic around the walls, and we come to your door rather than a meeting point."
    },
    "tr": {
      "intro": "Ercan'a en yakın şehir Lefkoşa; yol da bunu gösteriyor. Mesarya üzerinden on sekiz kilometre düz asfalt, yirmi dakika ve surların önündesiniz. Çoğu yolcu, tabelaları okumayı bitirmeden Surlariçi'ne varıyor. Şoför, gelişte adınızın yazılı olduğu tabelayla çıkış kapısının karşısında bekler; sizi en yakın kapıya değil, otelin kapısına bırakır.",
      "notes": [
        "Venedik surlarının içinde park etmek gerçekten zor; bu yüzden adresinize en yakın kapıda ineriz — kuzey için Girne Kapısı, doğu için Mağusa Kapısı.",
        "Lefkoşa tatil kasabası değil, çalışan bir başkent. Girne'deki gibi boşta dolaşan taksi yok; akşam dönüşünü şansa bırakmak yerine ayarlamakta fayda var.",
        "Lokmacı (Ledra) kapısından güneye geçiş yaya ve birkaç dakika sürüyor. Sizi Arasta'nın başında bırakır, dönüşte aynı noktadan alırız."
      ],
      "faq": [
        {
          "q": "Ercan Havalimanı – Lefkoşa transferi ne kadar sürer?",
          "a": "On sekiz kilometre, yaklaşık 20 dakika; adadaki en kısa havalimanı yolculuğu, üstelik yolda sınır kapısı ya da dağ geçidi yok. Uçuşunuzu takip eder, alış saatini inişe göre kaydırırız; rötar dahil olan bekleme sürenizi kısaltmaz."
        },
        {
          "q": "Hastaneye ya da üniversite kampüsüne bırakıyor musunuz?",
          "a": "Evet. Yakın Doğu Üniversitesi Hastanesi, Dr. Burhan Nalbantoğlu Devlet Hastanesi ve şehrin çeperindeki kampüsler düzenli bıraktığımız adresler. Randevunuz varsa şoför bekler ve sizi geri getirir; bekleme düzenini rezervasyonda belirtmeniz yeterli."
        }
      ],
      "returnIntro": "Lefkoşa'dan uçağa gitmek adanın en kısa havalimanı yolculuğu; yollar akarsa yirmi dakika. Yine de sabah surların çevresindeki trafik için pay bırakır, buluşma noktası yerine kapınıza geliriz. Uçuş saatinizi verin, kalkışı ona göre planlayalım."
    },
    "ru": {
      "intro": "Никосия — ближайший к Эрджану город, и дорога это подтверждает: восемнадцать километров ровной трассы через Месарию, двадцать минут — и вы у венецианских стен. Большинство гостей оказывается в старом городе раньше, чем успевает разобраться с указателями. Мы подвозим к дверям отеля, а не к ближайшим воротам.",
      "notes": [
        "Парковка внутри стен действительно трудная, поэтому мы высаживаем у тех ворот, что ближе к вашему адресу: Киренийские с севера, Фамагустские с востока.",
        "Никосия — рабочая столица, а не курорт: свободных такси на улице заметно меньше, чем в Кирении, поэтому вечерний обратный путь лучше заказать заранее.",
        "Переход Ледра (Локмаджи) на юг — пеший и занимает несколько минут. Мы высаживаем в начале улицы Араста и забираем оттуда же."
      ],
      "faq": [
        {
          "q": "Сколько ехать из аэропорта Эрджан в Никосию?",
          "a": "Восемнадцать километров, около 20 минут — самый короткий трансфер из аэропорта на острове. Мы следим за рейсом и сдвигаем подачу вслед за посадкой, поэтому задержка не съедает включённое время ожидания."
        },
        {
          "q": "Отвезёте в больницу или в университетский кампус?",
          "a": "Да. Больница Ближневосточного университета, государственная больница д-ра Бурхана Налбантоглу и кампусы на окраинах — обычные адреса высадки. Если у вас приём, водитель подождёт и отвезёт обратно: достаточно указать это при бронировании."
        }
      ],
      "returnIntro": "Выезд из Никосии в аэропорт — самая короткая дорога на острове, двадцать минут при спокойном движении. Утренний трафик у стен мы всё же закладываем в запас, а машина подаётся к вашей двери, а не к точке встречи."
    }
  },
  "ercan-airport-to-kyrenia": {
    "guide": "kyrenia-harbour-castle-old-town-guide",
    "en": {
      "intro": "Ercan to Kyrenia is the first drive most visitors to the north make. You cross the Mesarya plain, climb the Beşparmak ridge, and somewhere near the top the mountains open and the sea appears below you. Thirty-five minutes later you are on the harbour road — bags in the boot, nothing asked of you.",
      "notes": [
        "The mountain pass is the only slow stretch. In summer we set off a little earlier rather than hurry it.",
        "Kyrenia's old harbour is pedestrianised. We stop at the closest point a car can reach and carry your cases the rest of the way — give us the hotel name when you book.",
        "Ercan is the closest airport to Kyrenia by some margin. The same trip from Larnaca takes over an hour and adds a border crossing."
      ],
      "faq": [
        {
          "q": "How long does the Ercan to Kyrenia transfer take?",
          "a": "About 35 minutes over the Beşparmak pass, a little longer in July and August. We track your flight and move the pickup with it, so a delay never eats into your waiting time."
        },
        {
          "q": "Can you drop me at a hotel outside Kyrenia centre?",
          "a": "Yes. The hotel strip east and west of town is a separate fare — see Ercan Airport to Kyrenia Hotels Area. If you are not sure which one applies, send us the hotel name and we will tell you."
        }
      ],
      "returnIntro": "Kyrenia to Ercan is the same road in reverse, and the easiest airport run on the island. The climb out of town is the slow part, so we leave with time in hand rather than push the pass."
    },
    "tr": {
      "intro": "Ercan'dan Girne'ye, kuzeye gelenlerin ilk yolculuğu. Mesarya ovasını geçip Beşparmak sırtına tırmanırsınız; zirveye yaklaşırken dağlar açılır ve aşağıda deniz görünür. Otuz beş dakika sonra liman yolundasınız — valizler bagajda, sizden istenen hiçbir şey yok.",
      "notes": [
        "Yolun tek yavaş kısmı dağ geçidi. Yazın acele etmek yerine biraz erken çıkmayı tercih ediyoruz.",
        "Girne'nin eski limanı araç trafiğine kapalı. Aracın girebildiği en yakın noktada durur, valizleri gerisini biz taşırız — rezervasyonda otel adını yazmanız yeterli.",
        "Girne'ye en yakın havalimanı açık ara Ercan. Aynı yolculuk Larnaka'dan bir saati aşar ve üstüne sınır geçişi ekler."
      ],
      "faq": [
        {
          "q": "Ercan – Girne transferi ne kadar sürer?",
          "a": "Beşparmak geçidi üzerinden yaklaşık 35 dakika; temmuz-ağustosta biraz daha uzun. Uçuşunuzu takip eder, alış saatini ona göre kaydırırız — rötar bekleme sürenizden yemez."
        },
        {
          "q": "Girne merkez dışındaki bir otele bırakır mısınız?",
          "a": "Evet. Şehrin doğusu ve batısındaki otel bölgesi ayrı bir tarifedir — Ercan Havalimanı – Girne Oteller Bölgesi sayfasına bakın. Hangisi olduğundan emin değilseniz otel adını yazın, biz söyleyelim."
        }
      ],
      "returnIntro": "Girne'den Ercan'a aynı yol, ters yönde — adanın en kolay havalimanı yolculuğu. Şehirden çıkıştaki tırmanış yavaş kısmı olduğu için geçidi zorlamak yerine elimizde zamanla yola çıkarız."
    },
    "ru": {
      "intro": "Из Эрджана в Кирению — первая дорога, которую проделывает почти каждый гость севера. Сначала равнина Месария, затем подъём на хребет Бешпармак, и где-то у перевала горы расступаются, а внизу открывается море. Через тридцать пять минут вы уже на набережной — чемоданы в багажнике, от вас не требуется ничего.",
      "notes": [
        "Единственный медленный участок — горный перевал. Летом мы выезжаем чуть раньше, вместо того чтобы спешить на нём.",
        "Старая гавань Кирении пешеходная. Мы подъезжаем к ближайшей доступной для машины точке и донесём чемоданы сами — укажите название отеля при бронировании.",
        "Эрджан — самый близкий к Кирении аэропорт, с заметным отрывом. Та же поездка из Ларнаки занимает больше часа и добавляет пересечение границы."
      ],
      "faq": [
        {
          "q": "Сколько занимает трансфер Эрджан — Кирения?",
          "a": "Около 35 минут через перевал Бешпармак, в июле и августе немного дольше. Мы отслеживаем рейс и сдвигаем подачу вместе с ним, поэтому задержка не съедает ваше время ожидания."
        },
        {
          "q": "Довезёте ли до отеля за пределами центра Кирении?",
          "a": "Да. Отельная зона к востоку и западу от города — отдельный тариф, см. «Аэропорт Эрджан — Отельная зона Кирения». Если не уверены, какой вариант ваш, пришлите название отеля, и мы подскажем."
        }
      ],
      "returnIntro": "Из Кирении в Эрджан — та же дорога в обратную сторону и самый простой выезд в аэропорт на острове. Медленная часть — подъём из города, поэтому мы выезжаем с запасом, а не гоним перевал."
    }
  },
  "ercan-airport-to-kyrenia-hotels": {
    "guide": "kyrenia-harbour-castle-old-town-guide",
    "en": {
      "intro": "The hotels do not sit in Kyrenia town. They run along the coast road in both directions, some fifteen minutes west towards Escape Beach, others east towards Alagadi, and the last part of the drive is the part that varies. Give us the hotel name and the forty minutes ends at the right reception.",
      "notes": [
        "The pass over Beşparmak is shared with the town route; what differs is the run along the coast afterwards, which adds five to ten minutes each way.",
        "Several hotels along this strip share an approach road with a neighbour. The block or wing name matters as much as the hotel name when you book.",
        "Bellapais is five kilometres uphill and St Hilarion about twenty-five minutes away; both have narrow approach roads and little parking, which is why guests book a car for the day."
      ],
      "faq": [
        {
          "q": "Is the hotels area a different transfer from Kyrenia town?",
          "a": "Yes. Anything on the coast road outside the centre is priced as the hotels area, and the drive is about forty minutes rather than thirty-five. If you are unsure which side your hotel falls on, send the name."
        },
        {
          "q": "Can the driver take us to the beach or Bellapais during the stay?",
          "a": "Yes. Escape Beach is about fifteen minutes west of Kyrenia and Alagadi twenty-five east, and Bellapais sits above the coast. These run as fixed local fares, arranged when you book or by message later."
        }
      ],
      "returnIntro": "From the hotel strip the airport run starts with the coast road, then the climb to the pass, so we allow more time than a departure from the town centre. Morning flights mean an early door knock; the fare is the same."
    },
    "tr": {
      "intro": "Oteller Girne merkezinde değil. Sahil yolu boyunca iki yöne birden dizilirler: kimi batıda Escape Beach tarafında, kimi doğuda Alagadi yönünde. Yolun değişen kısmı da son bölüm. Merkez dışında, sahil yolu üzerindeki adreslerin tamamı bu tarifeye girer. Otel adını verin, kırk dakikanın sonunda doğru resepsiyonda inin.",
      "notes": [
        "Beşparmak geçidi merkeze giden yolla ortak; fark, geçitten sonra sahil boyunca sürülen bölümde — her yön için beş on dakika ekler.",
        "Bu şeritteki bazı oteller komşusuyla aynı giriş yolunu paylaşır. Rezervasyonda blok ya da bölüm adı, otel adı kadar iş görür.",
        "Bellapais sahilden beş kilometre yukarıda, St Hilarion yaklaşık yirmi beş dakika; ikisinin de yolu dar, park yeri kısıtlı. Gün boyu şoförlü araç bu yüzden tercih ediliyor."
      ],
      "faq": [
        {
          "q": "Oteller bölgesi Girne merkezden farklı bir transfer mi?",
          "a": "Evet. Merkez dışında, sahil yolu üzerindeki her adres oteller bölgesi tarifesine girer ve yolculuk otuz beş yerine yaklaşık kırk dakika sürer. Otelinizin hangi tarafta kaldığından emin değilseniz adını yazın, blok adı varsa onu da ekleyin."
        },
        {
          "q": "Konaklama sırasında plaja ya da Bellapais’e götürür müsünüz?",
          "a": "Evet. Escape Beach Girne'nin yaklaşık on beş dakika batısında, Alagadi yirmi beş dakika doğusunda, Bellapais ise sahilin yukarısında. Bunlar sabit yerel tarifeyle yürür; rezervasyonda ya da sonradan mesajla ayarlanır, ücret yola çıkmadan bellidir."
        }
      ],
      "returnIntro": "Oteller bölgesinden havalimanına çıkış önce sahil yolu, sonra geçide tırmanış demek; bu yüzden merkezden kalkışa göre daha fazla pay bırakırız. Sabah uçuşlarında kapı saati erken olur, ücret değişmez. Valizleri araca biz yükleriz."
    },
    "ru": {
      "intro": "Отели стоят не в самой Кирении. Они растянуты по прибрежной дороге в обе стороны: одни к западу, в сторону Escape Beach, другие к востоку, к Алагади. Меняется именно последний отрезок пути, и точный адрес мы уточняем при бронировании. Назовите отель — и сорок минут закончатся у нужной стойки регистрации.",
      "notes": [
        "Перевал Бешпармак общий с дорогой в центр; разница — в участке вдоль побережья после него, он добавляет пять-десять минут в каждую сторону.",
        "Некоторые отели на этой полосе делят подъездную дорогу с соседями. При бронировании название корпуса важно не меньше, чем название отеля.",
        "Беллапаис — в пяти километрах вверх от побережья, Святой Иларион примерно в двадцати пяти минутах; дороги узкие, парковки мало. Поэтому машину с водителем берут на день."
      ],
      "faq": [
        {
          "q": "Отельная зона — это другой трансфер, не центр Кирении?",
          "a": "Да. Любой адрес на прибрежной дороге за пределами центра идёт по тарифу отельной зоны, и дорога занимает около сорока минут вместо тридцати пяти. Не уверены, к какой стороне относится отель, — пришлите название."
        },
        {
          "q": "Можно ли съездить на пляж или в Беллапаис во время отдыха?",
          "a": "Да. Escape Beach примерно в пятнадцати минутах западнее Кирении, Алагади — в двадцати пяти восточнее, Беллапаис выше по склону. Это фиксированные местные тарифы: закажите при бронировании или напишите на месте."
        }
      ],
      "returnIntro": "Из отельной зоны дорога в аэропорт начинается с побережья и только потом уходит на перевал, поэтому запаса времени мы берём больше, чем при выезде из центра. На утренние рейсы подача ранняя, цена та же."
    }
  },
  "ercan-airport-to-famagusta": {
    "guide": "famagusta-beaches-old-city-guide",
    "en": {
      "intro": "Fifty kilometres east of Ercan, Famagusta is two towns in one: a Venetian walled city you cross on foot in fifteen minutes, and a modern university quarter around it. Forty minutes on the road, and the only question we need answered is which of the two you are staying in.",
      "notes": [
        "The walled city is compact and flat, its sights fifteen minutes apart on foot. We set down at the Land Gate or the Sea Gate, whichever is nearer your address.",
        "Eastern Mediterranean University and the student streets around it are a separate part of town from the walls; name the block or the faculty and the driver goes straight there.",
        "Salamis lies about ten minutes north of the city and Glapsides and Silver beaches are on the same stretch of coast, which makes an afternoon out easy to add."
      ],
      "faq": [
        {
          "q": "How long is the transfer from Ercan Airport to Famagusta?",
          "a": "Roughly 40 minutes across 50 kilometres of open road, with no border and no mountain pass. Term-start weeks in late September and early February are the busiest, and that is when booking ahead matters most."
        },
        {
          "q": "Can you drop students at the EMU campus with luggage?",
          "a": "Yes, and the campus gate you need matters. Two large suitcases and hand luggage fit a standard car; tell us if there are more bags or a family group and we quote the seven-seat minibus before you travel."
        }
      ],
      "returnIntro": "Famagusta to Ercan runs west across the plain and takes about forty minutes at any hour. End-of-term flights often leave early, so the pickup is usually before sunrise, when nothing is waiting outside the halls anyway."
    },
    "tr": {
      "intro": "Ercan'ın elli kilometre doğusundaki Gazimağusa aslında iki şehir: yürüyerek on beş dakikada geçtiğiniz Venedik surlariçi ve çevresine yayılan üniversite mahallesi. Yol ovadan doğuya, sınır kapısı ve dağ geçidi olmadan kırk dakika sürüyor; bizim bilmemiz gereken tek şey, ikisinden hangisinde kalacağınız. Adresi rezervasyonda yazmanız yeterli, gerisini şoför halleder.",
      "notes": [
        "Surlariçi küçük ve düz; başlıca duraklar yürüyerek on beş dakika arayla. Adresinize göre Kara Kapı ya da Deniz Kapısı'nda ineriz.",
        "Doğu Akdeniz Üniversitesi ve çevresindeki öğrenci sokakları surlardan ayrı bir bölge. Blok ya da fakülte adını söyleyin, şoför doğrudan oraya gitsin.",
        "Salamis şehrin yaklaşık on dakika kuzeyinde; Glapsides ve Silver plajları da aynı kıyı şeridinde. Öğleden sonrasına bir gezi eklemek kolay."
      ],
      "faq": [
        {
          "q": "Ercan Havalimanı – Gazimağusa transferi ne kadar sürer?",
          "a": "Elli kilometre, yaklaşık 40 dakika; sınır yok, dağ geçidi yok. Eylül sonu ve şubat başındaki kayıt haftaları en yoğun dönem; araçlar erken doluyor, önceden rezervasyon en çok o günlerde işe yarar."
        },
        {
          "q": "Öğrencileri bavullarıyla DAÜ kampüsüne bırakıyor musunuz?",
          "a": "Evet, hangi kapıdan gireceğimiz de önemli. İki büyük valiz ve el bagajı standart araca rahat sığar; daha fazla bavul ya da aile varsa yazın, yedi kişilik minibüsü fiyatıyla birlikte yola çıkmadan bildirelim."
        }
      ],
      "returnIntro": "Gazimağusa'dan Ercan'a dönüş ovadan batıya, saat kaç olursa olsun yaklaşık kırk dakika. Dönem sonu uçuşları çoğu zaman sabah erken; alış gün doğmadan olur, zaten o saatte yurtların önünde bekleyen araç bulunmaz."
    },
    "ru": {
      "intro": "В пятидесяти километрах восточнее Эрджана Фамагуста живёт как два города сразу: венецианский старый город, который пересекаешь пешком за пятнадцать минут, и университетский квартал вокруг него. Дорога идёт по равнине, без перевалов, и занимает сорок минут; единственное, что нам нужно знать, — в какой из двух частей вы остановитесь.",
      "notes": [
        "Старый город компактный и ровный, главные точки — минутах в пятнадцати ходьбы друг от друга. Высаживаем у Сухопутных или у Морских ворот, смотря что ближе к вашему адресу.",
        "Восточно-Средиземноморский университет и студенческие улицы вокруг — отдельный район, а не стены. Назовите корпус или факультет, и водитель поедет прямо туда.",
        "Саламис примерно в десяти минутах севернее города, пляжи Глапсидес и Сильвер — на том же берегу, поэтому вылазку после обеда добавить несложно."
      ],
      "faq": [
        {
          "q": "Сколько занимает трансфер Эрджан — Фамагуста?",
          "a": "Пятьдесят километров, около 40 минут: без границы и без горного перевала. Самые загруженные недели — конец сентября и начало февраля, старт семестров, и именно тогда бронь заранее решает больше всего."
        },
        {
          "q": "Довезёте студента с чемоданами до кампуса EMU?",
          "a": "Да, и важно, к каким воротам. Два больших чемодана с ручной кладью спокойно входят в стандартную машину; если багажа больше или едет семья, напишите — цену семиместного микроавтобуса назовём до поездки."
        }
      ],
      "returnIntro": "Обратно из Фамагусты в Эрджан — на запад через равнину, около сорока минут в любое время суток. В конце семестра рейсы часто ранние, подача выходит до рассвета: в этот час у общежитий всё равно никто не стоит."
    }
  },
  "ercan-airport-to-iskele-long-beach": {
    "guide": "iskele-long-beach-hotels-transfer-guide",
    "en": {
      "intro": "Long Beach is a purpose-built strip on the east coast, just south of Boğaz in the İskele district: Grand Sapphire, Caesar Resort and Courtyard set back from a long run of sand. Fifty-five kilometres from Ercan, three quarters of an hour, and the resorts are large enough that the gate matters.",
      "notes": [
        "Several of these resorts have more than one entrance and a long internal road. Apartment guests should give the block name as well as the complex.",
        "Evening flights into Ercan are the norm on this route, and nothing waits outside the gates after dark, so the return leg is worth booking with the arrival.",
        "Famagusta old town is about twenty minutes south and the Karpaz a day out to the north; both run as fixed local fares from the resort."
      ],
      "faq": [
        {
          "q": "Which airport is closest to Long Beach?",
          "a": "Ercan, at about 45 minutes. Larnaca is roughly an hour and a quarter with a border crossing on the way, and Paphos is a long run from the far west of the island. All three are quoted as fixed fares."
        },
        {
          "q": "Will you take me to the right reception inside the complex?",
          "a": "Yes. Give the exact hotel — Grand Sapphire, Caesar Resort and Spa, Courtyard Long Beach or another — and the block if you are in a rental apartment. The driver stops at that reception, not the nearest barrier."
        }
      ],
      "returnIntro": "Going the other way, the car comes to your reception rather than the resort entrance, and we allow for the fifty-five kilometres back across to Ercan. Early departures are common here, and the fare does not change for the hour."
    },
    "tr": {
      "intro": "Long Beach, doğu kıyısında Boğaz'ın hemen güneyinde, İskele bölgesinde planlı kurulmuş bir tatil şeridi: Grand Sapphire, Caesar Resort ve Courtyard, uzun kumsalın gerisinde sıralanır. Ercan'a elli beş kilometre, kırk beş dakika — ve tesisler hangi kapıdan girildiğini önemseyecek kadar büyük. Rezervasyonda tesis adını yazmanız işi çözer.",
      "notes": [
        "Bu tesislerin bazılarının birden fazla girişi ve uzun bir iç yolu var. Kompleks içindeki kiralık dairelerde kalıyorsanız blok adını da verin.",
        "Bu hatta akşam inen uçuş normaldir ve hava karardıktan sonra kapıların önünde bekleyen araç olmaz; dönüşü gidişle birlikte ayırtmakta fayda var.",
        "Gazimağusa surlariçi yaklaşık yirmi dakika güneyde, Karpaz ise kuzeyde tam günlük bir gezi. İkisi de tesisten sabit yerel tarifeyle kalkar."
      ],
      "faq": [
        {
          "q": "Long Beach'e en yakın havalimanı hangisi?",
          "a": "Yaklaşık 45 dakikayla Ercan. Larnaka bir saat on beş civarı ve yolda sınır geçişi var; Baf ise adanın batı ucundan uzun bir yolculuk. Üçü de sabit ücretle verilir ve üçünde de uçuşunuzu takip ederiz."
        },
        {
          "q": "Beni kompleksin içindeki doğru resepsiyona bırakır mısınız?",
          "a": "Evet. Otelin tam adını yazın — Grand Sapphire, Caesar Resort & Spa, Courtyard Long Beach ya da başkası — daire kiraladıysanız blok adını da ekleyin. Şoför en yakın bariyere değil, o resepsiyona yanaşır."
        }
      ],
      "returnIntro": "Ters yönde araç tesis girişine değil, kaldığınız resepsiyona gelir; Ercan'a kadarki elli beş kilometreyi hesaba katarak yola çıkarız. Burada erken kalkışlar sık görülür, saat ücreti değiştirmez. Şoför kararlaştırılan saatte kapıda olur."
    },
    "ru": {
      "intro": "Лонг Бич — построенная с нуля курортная полоса на восточном побережье, чуть южнее Богаза, в районе Искеле: Grand Sapphire, Caesar Resort и Courtyard стоят за длинной полосой песка. От Эрджана пятьдесят пять километров и сорок пять минут, а комплексы велики настолько, что въезд имеет значение.",
      "notes": [
        "У части комплексов не один въезд и длинная внутренняя дорога. Если вы снимаете апартаменты внутри, укажите ещё и название корпуса.",
        "Вечерние прилёты здесь обычное дело, а после темноты у ворот никто не дежурит, поэтому обратную поездку стоит забронировать вместе с прилётом.",
        "Старый город Фамагусты примерно в двадцати минутах южнее, Карпаз — поездка на целый день на север. Оба маршрута идут от отеля по фиксированному местному тарифу."
      ],
      "faq": [
        {
          "q": "Какой аэропорт ближе всего к Лонг Бич?",
          "a": "Эрджан, около 45 минут. Ларнака — примерно час пятнадцать с пересечением границы по дороге, Пафос — долгий путь с западного края острова. Цена по всем трём фиксируется заранее, и рейс мы отслеживаем в любом случае."
        },
        {
          "q": "Довезёте до нужной стойки регистрации внутри комплекса?",
          "a": "Да. Укажите точное название отеля — Grand Sapphire, Caesar Resort & Spa, Courtyard Long Beach или другой — и корпус, если это съёмные апартаменты. Водитель остановится у этой стойки, а не у ближайшего шлагбаума."
        }
      ],
      "returnIntro": "В обратную сторону машина подаётся к вашей стойке регистрации, а не к воротам комплекса, и выезжаем мы с расчётом на пятьдесят пять километров до Эрджана. Ранние вылеты здесь частые, и час подачи цену не меняет."
    }
  },
  "ercan-airport-to-bafra-hotels": {
    "guide": "bafra-hotels-transfer-guide",
    "en": {
      "intro": "Bafra is four large hotels on an empty coast north-east of Famagusta, where the road turns towards the Karpaz. Kaya Artemis, Noah's Ark, Concorde and Limak, and nothing else — no town, no high street, no rank outside the gate. Eighty kilometres from Ercan, an hour, and the last stretch is dark.",
      "notes": [
        "The final twenty kilometres run through open country with almost no lighting. It is a fine drive by day and a reason to have someone waiting for you at night.",
        "Each property has private beaches, more than one entrance and a long driveway, so we record the hotel by name rather than logging the trip as Bafra.",
        "A hotel shuttle usually pools several flights and calls at each property along the strip; a private car leaves as soon as you are through the doors."
      ],
      "faq": [
        {
          "q": "Do you cover flights landing after midnight at Ercan?",
          "a": "Yes, night arrivals are routine on the Bafra run and there is no surcharge for the hour. Send the flight number, we follow the landing, and the driver is at arrivals whenever the aircraft actually gets in."
        },
        {
          "q": "Can we have a child seat for the hour-long drive?",
          "a": "Yes, add it to the booking and it is fitted before you land. Families arriving with several cases or in a group larger than four should say so too, and we quote the seven-seat minibus before you travel."
        }
      ],
      "returnIntro": "Leaving Bafra is the harder half to arrange on the day, because there is nothing to flag down on the strip. Book it with the arrival and the car is at your reception at the agreed hour for the hour-long run to Ercan."
    },
    "tr": {
      "intro": "Bafra, Gazimağusa'nın kuzeydoğusunda, yolun Karpaz'a döndüğü yerde boş bir kıyıya dizilmiş dört büyük otel demek: Kaya Artemis, Noah's Ark, Concorde ve Limak. Etrafında kasaba yok, çarşı yok, kapıda bekleyen taksi yok. Ercan'a seksen kilometre, bir saat; son bölüm karanlık. Bu yüzden buraya gelenler ulaşımı önceden ayarlar.",
      "notes": [
        "Son yirmi kilometre neredeyse aydınlatmasız açık arazi. Gündüz güzel bir yol; gece ise sizi bekleyen birinin olması için yeterli sebep.",
        "Tesislerin özel plajları, birden fazla girişi ve uzun iç yolları var; bu yüzden yolculuğu Bafra diye değil, otel adıyla kaydederiz.",
        "Otel servisi genelde birkaç uçuşu birleştirir ve şeritteki her tesise sırayla uğrar; özel araç ise siz kapıdan çıkar çıkmaz hareket eder."
      ],
      "faq": [
        {
          "q": "Gece yarısından sonra inen uçuşlara da geliyor musunuz?",
          "a": "Evet, Bafra hattında gece transferi rutin ve saat için ek ücret yok. Uçuş numarasını verin; inişi takip eder, şoför uçağın gerçekte indiği saatte gelişte hazır olur. Rötar dahil olan bekleme sürenizi kısaltmaz."
        },
        {
          "q": "Bir saatlik yol için çocuk koltuğu var mı?",
          "a": "Evet, rezervasyona yazın; çocuğun yaşını da belirtirseniz uygun koltuk siz inmeden araca takılır. Bavul sayısı fazlaysa ya da grup dörtten kalabalıksa bunu da yazın, yedi kişilik minibüsü yola çıkmadan fiyatıyla birlikte bildiririz."
        }
      ],
      "returnIntro": "Bafra'dan çıkış, gün gelince ayarlaması zor olan taraf; şeritte el kaldıracağınız bir araç yok. Gidişle birlikte ayırtın, araç kararlaştırılan saatte resepsiyonunuzda olsun; Ercan'a yol bir saat, gece de gündüz de aynı."
    },
    "ru": {
      "intro": "Бафра — это четыре крупных отеля на пустом побережье северо-восточнее Фамагусты, там, где дорога уходит на Карпаз: Kaya Artemis, Noah's Ark, Concorde и Limak. Ни городка, ни торговой улицы, ни стоянки такси у ворот. От Эрджана восемьдесят километров, час пути, и последний отрезок тёмный, поэтому машину сюда заказывают заранее.",
      "notes": [
        "Последние двадцать километров идут по открытой местности почти без освещения. Днём это красивая дорога, ночью — повод, чтобы вас кто-то встречал.",
        "У каждого комплекса свой пляж, несколько въездов и длинная внутренняя дорога, поэтому мы записываем поездку по названию отеля, а не как «Бафра».",
        "Отельный шаттл обычно собирает несколько рейсов и заезжает по очереди в каждый комплекс полосы; частная машина трогается, как только вы вышли из терминала."
      ],
      "faq": [
        {
          "q": "Возите ли на рейсы, которые садятся после полуночи?",
          "a": "Да, ночные трансферы на бафрском направлении — обычная работа, доплаты за час нет. Пришлите номер рейса: мы следим за посадкой, и водитель ждёт в зале прилёта к фактическому времени. Задержка не сокращает включённое ожидание."
        },
        {
          "q": "Будет ли детское кресло на часовую дорогу?",
          "a": "Да, укажите это в брони — кресло установят до вашего прилёта. Если чемоданов много или в группе больше четырёх человек, напишите и об этом: цену семиместного микроавтобуса назовём до выезда."
        }
      ],
      "returnIntro": "Уехать из Бафры сложнее, чем приехать: на полосе некого остановить рукой. Забронируйте обратную поездку вместе с прилётом — машина подойдёт к вашей стойке в согласованный час, до Эрджана час дороги."
    }
  },
  "ercan-airport-to-guzelyurt": {
    "guide": "guzelyurt-morphou-transfer-guide",
    "en": {
      "intro": "Güzelyurt, Morphou on older maps, sits in the citrus country west of Nicosia. From Ercan it is fifty-two kilometres straight across the middle of the island, about fifty minutes, no border and no mountain. The line is run directly by Halit Yeşilovalı, who also drives the town and campus runs.",
      "notes": [
        "The town is low and wide with few taxis on the street, and almost none late, so an evening ride here is something you book rather than find.",
        "Kalkanlı and the METU campus, the European University of Lefke and KSTÜ all sit within the same half hour, and term-start arrivals go straight to the halls.",
        "Soli and Vouni are out along the west coast, and Lefke and Gemikonağı are about twenty minutes away — half a day covers the archaeology and a swim."
      ],
      "faq": [
        {
          "q": "How long does Ercan Airport to Güzelyurt take?",
          "a": "About 50 minutes for 52 kilometres, across the middle of the island with no crossing to make. For the METU campus at Kalkanlı add a few minutes; tell us the campus and the driver goes to the right gate."
        },
        {
          "q": "Do you also run in-town and student rides in Güzelyurt?",
          "a": "Yes. The same line covers short local trips — the market, the hospital, dorm to campus, a ride home at night — at fixed local prices. Friends heading the same way can share one car and split the fare."
        }
      ],
      "returnIntro": "Güzelyurt to Ercan is fifty minutes back across the plain, and the pickup usually comes to a house, a dorm or a campus gate rather than a hotel. Early term-end flights are the common case, and repeat runs can be agreed in advance."
    },
    "tr": {
      "intro": "Eski haritalarda Omorfo diye geçen Güzelyurt, Lefkoşa'nın batısındaki narenciye bölgesinin merkezi. Ercan'dan elli iki kilometre, adanın ortasından dümdüz, yaklaşık elli dakika; sınır da yok dağ da. Hattı doğrudan Halit Yeşilovalı yürütüyor; şehir içi ve kampüs yolculuklarını da o sürüyor. Uçuş numaranızı verin, iniş saatine göre kapıda olalım.",
      "notes": [
        "Şehir alçak ve geniş; sokakta bekleyen taksi az, gece neredeyse hiç yok. Buradaki akşam yolculuğu bulunacak değil, önceden ayarlanacak bir şey.",
        "Kalkanlı'daki ODTÜ Kuzey Kıbrıs Kampüsü, Lefke Avrupa Üniversitesi ve KSTÜ aynı yarım saatlik çember içinde; dönem başı gelenleri doğrudan yurda bırakırız.",
        "Soli ve Vouni batı kıyısında biraz ileride, Lefke ile Gemikonağı yaklaşık yirmi dakika; yarım gün hem antik kentlere hem denize yetiyor."
      ],
      "faq": [
        {
          "q": "Ercan Havalimanı – Güzelyurt yolu ne kadar sürer?",
          "a": "Elli iki kilometre, yaklaşık 50 dakika; adanın ortasından geçer, sınır kapısı yoktur. Kalkanlı'daki ODTÜ kampüsü için birkaç dakika ekleyin — üniversiteyi söyleyin, şoför doğru kapıya yanaşsın. Lefke ve KSTÜ için de aynı hat çalışır."
        },
        {
          "q": "Güzelyurt'ta şehir içi ve öğrenci yolculukları da yapıyor musunuz?",
          "a": "Evet. Aynı hat kısa yolculukları da alır — pazar, hastane, yurttan kampüse, gece eve dönüş — sabit yerel fiyatla. Aynı yöne giden arkadaşlar tek araca binip ücreti paylaşabilir; düzenli güzergahları aylık olarak da bağlarız."
        }
      ],
      "returnIntro": "Güzelyurt'tan Ercan'a dönüş yine ovadan elli dakika; alış çoğu zaman evin, yurdun ya da kampüs kapısının önünden olur, otelden değil. Dönem sonu uçuşları erken saatte; düzenli yolculuklar önceden karara bağlanır."
    },
    "ru": {
      "intro": "Гюзельюрт — на старых картах Морфу — центр цитрусового края к западу от Никосии. От Эрджана пятьдесят два километра напрямую через середину острова, около пятидесяти минут, без границы и без гор. Направление ведёт лично Халит Йешиловалы: он встречает в аэропорту с табличкой и он же возит по городу и на кампусы.",
      "notes": [
        "Город низкий и растянутый, такси на улице мало, а поздним вечером почти нет: поездку здесь заказывают заранее, а не ищут на месте.",
        "Калканлы с кампусом METU, Европейский университет Лефке и KSTÜ укладываются в те же полчаса, а приезд к началу семестра идёт прямо к общежитию.",
        "Соли и Вуни лежат дальше по западному побережью, Лефке и Гемиконагы — примерно в двадцати минутах: полдня хватает на археологию и купание."
      ],
      "faq": [
        {
          "q": "Сколько ехать из аэропорта Эрджан в Гюзельюрт?",
          "a": "Около 50 минут на пятьдесят два километра, через середину острова и без пересечения границы. До кампуса METU в Калканлы добавьте несколько минут; назовите университет, и водитель подъедет к нужным воротам."
        },
        {
          "q": "Делаете ли поездки по городу и студенческие рейсы в Гюзельюрте?",
          "a": "Да. То же направление берёт короткие местные поездки — рынок, больница, общежитие и кампус, дорога домой поздним вечером — по фиксированным местным ценам. Друзьям по пути можно ехать одной машиной и делить цену."
        }
      ],
      "returnIntro": "Из Гюзельюрта в Эрджан — пятьдесят минут обратно через равнину, и подача чаще всего к дому, общежитию или воротам кампуса, а не к отелю. Обычный случай — ранний рейс в конце семестра; повторные поездки согласуем заранее."
    }
  },
  "larnaca-airport-to-nicosia": {
    "guide": "larnaca-airport-arrival-guide",
    "en": {
      "intro": "Nicosia is the closest northern destination to Larnaca, and the only one where the crossing happens at the capital's own edge rather than somewhere out on the road. You come up the motorway from the coast in about forty minutes, reach the edge of the city, and cross at one of its vehicle checkpoints. Fifty minutes after the arrivals hall you are inside the Venetian walls.",
      "notes": [
        "The checkpoint is the only stop. You stay in the car with passports out, and an officer may glance at the vehicle documents your driver carries. Passengers pay nothing.",
        "Ledra Street (Lokmacı) is the pedestrian crossing between the two halves of the old city — useful during your stay, but not the one a car uses.",
        "Parking inside the walls is difficult and there are few empty taxis cruising, so we also run fixed-price rides around the city once you have arrived."
      ],
      "faq": [
        {
          "q": "Can a taxi cross from Larnaca Airport into north Nicosia?",
          "a": "Yes. Licensed transfer vehicles cross the Green Line every day and you stay in the same car throughout — there is no changing vehicles at the checkpoint. An officer checks passports, passengers pay no fee, and we add no border surcharge."
        },
        {
          "q": "Do I need a visa to cross into the north?",
          "a": "Most nationalities are given entry on arrival for stays of up to ninety days, with no advance visa. Officers usually stamp a separate slip rather than your passport. Rules can change, so check what your own passport requires before you fly."
        }
      ],
      "returnIntro": "Leaving Nicosia for a Larnaca flight puts the checkpoint first, minutes after you pull away from the hotel, with the motorway afterwards. We build the crossing into the pickup time rather than hope for a quiet lane."
    },
    "tr": {
      "intro": "Lefkoşa, Larnaka'dan kuzeye giden en kısa yol ve geçişin yolda değil doğrudan başkentin kenarında yaşandığı tek güzergah. Sahilden otoyolla yaklaşık kırk dakikada şehrin kenarına çıkar, araç kapılarından birinden geçersiniz. Varış salonundan elli dakika sonra Venedik surlarının içindesiniz.",
      "notes": [
        "Tek durak kontrol noktası. Araçta kalırsınız, pasaportlar elinizde; görevli şoförün taşıdığı araç belgelerine bakabilir. Yolculardan ücret alınmaz.",
        "Ledra (Lokmacı) eski şehrin iki yarısını birleştiren yaya geçidi — kalışınız sırasında işinize yarar ama araçların kullandığı kapı o değil.",
        "Sur içinde park etmek zor, boşta dolaşan taksi de az. Vardıktan sonra şehir içi yolculukları da sabit fiyatla yapıyoruz."
      ],
      "faq": [
        {
          "q": "Larnaka Havalimanı'ndan taksi Lefkoşa'nın kuzeyine geçebilir mi?",
          "a": "Evet. Lisanslı transfer araçları Yeşil Hat'tan her gün geçer ve yolculuğun tamamında aynı araçta kalırsınız — kontrol noktasında araç değiştirmezsiniz. Görevli pasaportlara bakar, yolcudan ücret alınmaz, fiyata sınır farkı eklemeyiz."
        },
        {
          "q": "Kuzeye geçmek için vize gerekiyor mu?",
          "a": "Çoğu ülke vatandaşına önceden vizeye gerek olmadan, 90 güne kadar varışta giriş veriliyor. Görevliler genelde pasaporta değil ayrı bir kağıda mühür basar. Kurallar değişebilir; uçmadan önce kendi pasaportunuzun koşullarını kontrol edin."
        }
      ],
      "returnIntro": "Lefkoşa'dan Larnaka uçuşuna çıkarken kontrol noktası ilk sırada: otelden ayrıldıktan birkaç dakika sonra geçer, otoyol ondan sonra başlar. Şeridin boş çıkmasını ummak yerine geçişi alış saatine baştan ekleriz."
    },
    "ru": {
      "intro": "Никосия — ближайшее северное направление от Ларнаки и единственное, где переход происходит у самого края столицы, а не где-то на трассе. От побережья по шоссе около сорока минут до окраины города, затем один из его автомобильных пунктов пропуска. Через пятьдесят минут после зала прилёта вы уже внутри венецианских стен.",
      "notes": [
        "Единственная остановка — пункт пропуска. Вы остаётесь в машине с паспортами в руках, сотрудник может взглянуть на документы на автомобиль. С пассажиров плата не берётся.",
        "Улица Ледра (Локмаджи) — пешеходный переход между двумя половинами старого города: пригодится во время поездки, но машины идут не там.",
        "Парковка внутри стен трудная, а свободных такси на улицах мало. Поэтому после приезда мы возим и по городу — по фиксированным ценам."
      ],
      "faq": [
        {
          "q": "Может ли такси из аэропорта Ларнаки проехать в северную Никосию?",
          "a": "Да. Лицензированные трансферные машины пересекают «зелёную линию» ежедневно, и всю дорогу вы остаётесь в одном автомобиле — менять транспорт на пункте не нужно. Паспорта проверяют, с пассажиров плату не берут, наценки за границу у нас нет."
        },
        {
          "q": "Нужна ли виза, чтобы попасть на север?",
          "a": "Большинству гостей въезд оформляют по прибытии на срок до 90 дней, без предварительной визы. Штамп обычно ставят на отдельный листок, а не в паспорт. Правила могут меняться, поэтому проверьте требования для своего паспорта перед вылетом."
        }
      ],
      "returnIntro": "При выезде из Никосии на рейс из Ларнаки пункт пропуска идёт первым — через несколько минут после отеля, а шоссе уже потом. Мы закладываем переход во время подачи, а не надеемся на пустую полосу."
    }
  },
  "larnaca-airport-to-kyrenia": {
    "guide": "larnaca-airport-to-kyrenia-border-crossing-guide",
    "en": {
      "intro": "The drive to Kyrenia splits into three clear parts: about forty-five minutes of motorway to the edge of Nicosia, five to fifteen minutes at the Metehan (Ağırdağ) checkpoint depending on the hour, then twenty to twenty-five minutes over the mountains and down into town. Seventy-five minutes in all, in one car, with your passport the only thing asked of you.",
      "notes": [
        "Metehan is the checkpoint we use for Kyrenia. Early mornings and late evenings are quietest; weekday rush hours and summer afternoons are when the lanes build up.",
        "A hire car picked up in the south usually cannot be taken north, and rental insurance rarely covers the line. One car on both sides avoids the question entirely.",
        "Ercan is closer to Kyrenia, but its flights connect through Turkey. If a direct flight into Larnaca suits you better, the extra half hour on the road is the trade."
      ],
      "faq": [
        {
          "q": "How long does the border crossing to Kyrenia take?",
          "a": "Usually five to fifteen minutes at Metehan, depending on the time of day — which is what turns a fifty-minute drive into a seventy-five-minute one. You stay in the vehicle throughout and there is no fee for passengers."
        },
        {
          "q": "Should I fly into Ercan instead for Kyrenia?",
          "a": "Ercan is closer and needs no crossing, but almost all of its flights connect through Turkey. A direct Larnaca ticket is often cheaper overall, and because the transfer fare is fixed you can compare door to door before booking."
        }
      ],
      "returnIntro": "Kyrenia to Larnaca starts with the climb out of town, then the checkpoint, then the motorway south — three stages, each with a delay of its own. On a departure day we set the pickup by the slowest of them, not the fastest."
    },
    "tr": {
      "intro": "Girne yolu üç net parçaya ayrılır: Lefkoşa'nın kenarına kadar yaklaşık kırk beş dakika otoyol, saate göre beş ila on beş dakika Metehan (Ağırdağ) kontrol noktası, ardından dağları aşıp şehre inen yirmi-yirmi beş dakika. Toplam yetmiş beş dakika, tek araçta; sizden istenen tek şey pasaport.",
      "notes": [
        "Girne için kullandığımız kapı Metehan. En sakin saatler sabah erken ve akşam geç; hafta içi trafik saatleri ile yaz öğleden sonraları şeritlerin uzadığı zamanlardır.",
        "Güneyden kiralanan araç genelde kuzeye geçemez, kiralama sigortası da hattı çoğunlukla kapsamaz. Tek araçla iki taraf bu meseleyi tamamen ortadan kaldırır.",
        "Girne'ye Ercan daha yakın ama uçuşları Türkiye üzerinden aktarmalı. Larnaka'ya direkt uçuş size daha uygunsa, yoldaki fazladan yarım saat bunun karşılığı."
      ],
      "faq": [
        {
          "q": "Girne'ye sınır geçişi ne kadar sürer?",
          "a": "Metehan'da günün saatine göre genellikle beş ila on beş dakika; elli dakikalık bir sürüşü yetmiş beş dakikaya çıkaran da bu. Yol boyunca araçta kalırsınız ve yolculardan ücret alınmaz."
        },
        {
          "q": "Girne için Ercan'a mı inmeliyim?",
          "a": "Ercan daha yakın ve sınır yok, ama uçuşlarının neredeyse tamamı Türkiye aktarmalı. Direkt Larnaka bileti çoğu zaman toplamda daha hesaplı; transfer ücreti sabit olduğu için kapıdan kapıya maliyeti rezervasyondan önce karşılaştırabilirsiniz."
        }
      ],
      "returnIntro": "Girne'den Larnaka'ya önce şehirden çıkıştaki tırmanış, sonra kontrol noktası, sonra güneye otoyol — üçünün de kendi gecikmesi var. Uçuş gününde alış saatini en hızlısına göre değil en yavaşına göre belirleriz."
    },
    "ru": {
      "intro": "Дорога в Кирению делится на три понятные части: около сорока пяти минут по шоссе до края Никосии, от пяти до пятнадцати минут на пункте Метехан (Агырдаг) в зависимости от часа и ещё двадцать–двадцать пять минут через горы вниз в город. Итого семьдесят пять минут в одной машине, и всё, что нужно от вас, — паспорт.",
      "notes": [
        "Для Кирении мы идём через Метехан. Тише всего ранним утром и поздним вечером; очереди собираются в будние часы пик и летом после полудня.",
        "Машину, взятую напрокат на юге, обычно нельзя везти на север, и страховка редко покрывает переход. Одна машина по обе стороны снимает вопрос целиком.",
        "Эрджан ближе к Кирении, но его рейсы идут со стыковкой через Турцию. Если прямой рейс в Ларнаку удобнее, лишние полчаса в дороге — плата за него."
      ],
      "faq": [
        {
          "q": "Сколько занимает переход границы по пути в Кирению?",
          "a": "Обычно пять–пятнадцать минут на Метехане, в зависимости от времени суток — именно это превращает пятидесятиминутную поездку в семидесятипятиминутную. Вы всю дорогу остаётесь в машине, с пассажиров плата не берётся."
        },
        {
          "q": "Может, ради Кирении лучше лететь в Эрджан?",
          "a": "Эрджан ближе и без границы, но почти все его рейсы со стыковкой через Турцию. Прямой билет в Ларнаку часто выгоднее в сумме, а цена трансфера фиксирована, поэтому сравнить стоимость «от двери до двери» можно до брони."
        }
      ],
      "returnIntro": "Из Кирении в Ларнаку сначала подъём из города, потом пункт пропуска, потом шоссе на юг — у каждого этапа своя задержка. В день вылета мы назначаем подачу по самому медленному из них, а не по самому быстрому."
    }
  },
  "larnaca-airport-to-kyrenia-hotels": {
    "guide": "larnaca-airport-to-kyrenia-border-crossing-guide",
    "en": {
      "intro": "Kyrenia's hotels sit east and west of the town rather than in it, strung along the coast either side of the centre. Once the mountain road has dropped you to sea level, the last stretch depends entirely on which property you booked — so we take the hotel name with the booking and stop at its own reception.",
      "notes": [
        "This is a separate fare from Kyrenia city centre. If you are not sure which one covers your hotel, send us the name and we will tell you.",
        "The larger properties have more than one gate and a long internal road. If you are in a rented apartment inside a complex, the block name helps too.",
        "Taxis do not sit outside the resorts in the evening, so we also run fixed-price local trips — the harbour for dinner, Bellapais, a day in Famagusta."
      ],
      "faq": [
        {
          "q": "Is the hotels area a different price from Kyrenia centre?",
          "a": "Yes. The strip outside town is priced as its own route and takes a few minutes longer. Send us the hotel name with your booking and we will confirm which of the two applies before you travel."
        },
        {
          "q": "Will the driver take me right to the hotel after the border?",
          "a": "Yes. The same car crosses the checkpoint and carries on to your reception — there is no change of vehicle at the line and nothing to arrange on the far side. Tell us the hotel and, in a complex, the block."
        }
      ],
      "returnIntro": "Hotels along the Kyrenia coast are spread out, so the run to Larnaca begins with the coast road, then the pass, then the checkpoint. We collect from your reception and set off with the crossing already counted in."
    },
    "tr": {
      "intro": "Girne'nin otelleri şehrin içinde değil, merkezin iki yanında sahil boyunca sıralanır. Dağ yolu sizi deniz seviyesine indirdikten sonra son bölüm tamamen hangi tesiste kaldığınıza bağlı; bu yüzden otel adını rezervasyonda alır, aracı kendi resepsiyonunuzun önünde durdururuz.",
      "notes": [
        "Bu, Girne merkezden ayrı bir tarife. Otelinizin hangisine girdiğinden emin değilseniz adını yazın, biz söyleyelim.",
        "Büyük tesislerin birden fazla kapısı ve uzun bir iç yolu var. Site içinde kiralık dairede kalıyorsanız blok adını da eklemeniz işi kolaylaştırır.",
        "Akşamları tesislerin önünde bekleyen taksi olmuyor. Sabit fiyatlı yerel yolculuklar da yapıyoruz — akşam yemeği için liman, Bellapais, Gazimağusa'da bir gün."
      ],
      "faq": [
        {
          "q": "Oteller bölgesi Girne merkezden farklı fiyatta mı?",
          "a": "Evet. Şehir dışındaki otel hattı kendi güzergahı olarak fiyatlanır ve birkaç dakika daha uzun sürer. Rezervasyonda otel adını gönderin, yola çıkmadan önce hangisinin geçerli olduğunu teyit edelim."
        },
        {
          "q": "Şoför sınırdan sonra beni otelime kadar götürüyor mu?",
          "a": "Evet. Aynı araç kontrol noktasından geçer ve resepsiyonunuza kadar devam eder — hatta araç değişimi yok, karşı tarafta ayarlamanız gereken bir şey de yok. Otel adını, sitedeyseniz blok adını yazmanız yeterli."
        }
      ],
      "returnIntro": "Girne sahilindeki oteller birbirinden uzak, bu yüzden Larnaka yolculuğu önce sahil yoluyla, sonra geçitle, sonra kontrol noktasıyla ilerler. Sizi resepsiyondan alır, geçişi baştan hesaba katarak çıkarız."
    },
    "ru": {
      "intro": "Отели Кирении стоят не в самом городе, а к востоку и западу от него, вдоль побережья по обе стороны от центра. После спуска с гор последний участок целиком зависит от того, какой комплекс вы забронировали, поэтому мы берём название отеля вместе с бронью и останавливаемся у его стойки регистрации.",
      "notes": [
        "Это отдельный тариф от центра Кирении. Если не уверены, под какой из них попадает ваш отель, пришлите название — мы подскажем.",
        "У крупных комплексов не одни ворота и длинная внутренняя дорога. Если вы в арендованных апартаментах внутри комплекса, укажите ещё и название корпуса.",
        "Вечером у отелей такси не дежурят, поэтому мы возим и по местным маршрутам за фиксированную цену — гавань на ужин, Беллапаис, день в Фамагусте."
      ],
      "faq": [
        {
          "q": "Отельная зона стоит иначе, чем центр Кирении?",
          "a": "Да. Полоса за городом считается отдельным маршрутом и занимает на несколько минут больше. Пришлите название отеля вместе с бронью, и мы подтвердим, какой из двух вариантов ваш, ещё до поездки."
        },
        {
          "q": "Водитель довезёт до отеля после границы?",
          "a": "Да. Та же машина проходит пункт пропуска и едет дальше до вашей стойки регистрации — пересадки на линии нет, и на той стороне ничего организовывать не нужно. Укажите отель, а в комплексе — корпус."
        }
      ],
      "returnIntro": "Отели вдоль побережья Кирении разбросаны, поэтому дорога в Ларнаку начинается с прибрежного шоссе, затем перевал, затем пункт пропуска. Мы забираем от стойки и выезжаем, уже заложив переход в расчёт."
    }
  },
  "larnaca-airport-to-famagusta": {
    "guide": "famagusta-beaches-old-city-guide",
    "en": {
      "intro": "Famagusta is the quickest of the Larnaca crossings to the coast: baggage reclaim, the motorway east, a checkpoint, and about an hour later the Venetian walls. Inside them the city is flat and compact — the Gothic cathedral turned mosque to the sea castle is fifteen minutes on foot.",
      "notes": [
        "The walled city is best entered on foot. We can set you down at the Land Gate and collect you at the Sea Gate rather than circle the narrow streets.",
        "Salamis, the ruined ancient capital, lies ten minutes north of the walls with almost no shade. Morning arrivals often go there first and swim afterwards.",
        "Keep passports to hand for the checkpoint. Officers stamp a separate slip by default, so your passport is left unmarked."
      ],
      "faq": [
        {
          "q": "How long is Larnaca Airport to Famagusta with the border?",
          "a": "Around sixty minutes door to door, checkpoint included. The crossing itself is normally short: you stay in the vehicle, passports are checked, passengers pay nothing, and the fare carries no border surcharge."
        },
        {
          "q": "Can the driver take me on to Salamis or the beaches?",
          "a": "Yes. Beyond the airport run we do fixed-price local journeys — Salamis and the Royal Tombs, St Barnabas Monastery, or Glapsides and Silver Beach on the bay. Ask when you book, or message us during your stay."
        }
      ],
      "returnIntro": "Leaving Famagusta for a flight puts the checkpoint before the motorway rather than after it. It is the shortest of our Larnaca departures, but the crossing still sets the pickup time, not the distance."
    },
    "tr": {
      "intro": "Larnaka'dan sınır geçen güzergahlar içinde sahile en çabuk varanı Gazimağusa: bagaj bandı, doğuya otoyol, kontrol noktası ve yaklaşık bir saat sonra Venedik surları. Surların içi düz ve derli toplu — camiye çevrilmiş Gotik katedralden deniz kenarındaki kaleye yürüyerek on beş dakika.",
      "notes": [
        "Surlariçi yürüyerek gezilir, araçla değil. Sizi batıdaki Kara Kapısı'nda bırakıp gezinin sonunda Deniz Kapısı'ndan alabiliriz; dar sokaklarda tur atmaktan çok daha rahat.",
        "Surların on dakika kuzeyindeki Salamis Harabeleri neredeyse gölgesiz. Sabah gelenler genelde önce oraya çıkar, denize sonra girer.",
        "Kontrol noktası için pasaportlar elinizin altında dursun. Görevliler varsayılan olarak ayrı bir kağıda mühür basar, pasaportunuzda iz kalmaz."
      ],
      "faq": [
        {
          "q": "Larnaka Havalimanı – Gazimağusa sınır dahil ne kadar sürer?",
          "a": "Kontrol noktası dahil kapıdan kapıya yaklaşık altmış dakika. Geçişin kendisi genelde kısadır: araçta kalırsınız, pasaportlara bakılır, yolcudan ücret alınmaz ve fiyata sınır farkı eklenmez."
        },
        {
          "q": "Şoför beni Salamis'e ya da plajlara da götürür mü?",
          "a": "Evet. Havalimanı transferinin dışında sabit fiyatlı yerel yolculuklar yapıyoruz — Salamis ve Kral Mezarları, St. Barnabas Manastırı ya da körfezde Glapsides ve Silver Beach. Rezervasyonda söyleyin veya tatiliniz sırasında yazın."
        }
      ],
      "returnIntro": "Gazimağusa'dan uçuşa çıkarken kontrol noktası otoyoldan önce gelir, sonra değil. Larnaka kalkışlarımızın en kısası, ama alış saatini yine de yolun uzunluğu değil geçişin ne kadar süreceği belirler."
    },
    "ru": {
      "intro": "Фамагуста — самый быстрый из ларнакских маршрутов с переходом: выдача багажа, шоссе на восток, пункт пропуска — и примерно через час венецианские стены. Внутри них город плоский и компактный: от готического собора, ставшего мечетью, до крепости у воды пятнадцать минут пешком.",
      "notes": [
        "Старый город осматривают пешком. Мы можем высадить вас у Сухопутных ворот и забрать у Морских, вместо того чтобы кружить по узким улицам.",
        "Руины Саламина лежат в десяти минутах к северу от стен, тени там почти нет. Приехавшие утром обычно едут туда первым делом, а купаться идут после.",
        "Паспорта держите под рукой для проверки. Штамп по умолчанию ставят на отдельный листок, так что в самом паспорте следа не остаётся."
      ],
      "faq": [
        {
          "q": "Сколько ехать из аэропорта Ларнаки в Фамагусту с учётом границы?",
          "a": "Около шестидесяти минут от двери до двери вместе с пунктом пропуска. Сам переход обычно короткий: вы остаётесь в машине, паспорта проверяют, с пассажиров плату не берут, наценки за границу в цене нет."
        },
        {
          "q": "Отвезёт ли водитель дальше — в Саламин или на пляжи?",
          "a": "Да. Помимо трансфера мы делаем местные поездки по фиксированным ценам — Саламин и Царские гробницы, монастырь Святого Варнавы или пляжи Glapsides и Silver Beach в заливе. Скажите при брони или напишите на месте."
        }
      ],
      "returnIntro": "При выезде из Фамагусты на рейс пункт пропуска идёт до шоссе, а не после. Это самый короткий из наших выездов в Ларнаку, но время подачи задаёт всё равно переход, а не километры."
    }
  },
  "larnaca-airport-to-iskele-long-beach": {
    "guide": "iskele-long-beach-hotels-transfer-guide",
    "en": {
      "intro": "Long Beach runs along the east coast just south of Boğaz, and the flights that serve it often land after dark. Seventy-five minutes covers the motorway, the checkpoint and the coast road, and at the end of it the car stops at your own reception rather than at the entrance to the strip.",
      "notes": [
        "Grand Sapphire, Caesar Resort and Courtyard are large, with more than one gate. Give us the hotel and, if you are in an apartment, the block name.",
        "We track the flight from departure, so a landing after midnight is met at the time you actually arrive and your included waiting time is not shortened.",
        "Taxis do not wait outside the resorts, particularly in the evening. Fixed-price local runs cover İskele, Boğaz, Famagusta's old city and the Karpaz."
      ],
      "faq": [
        {
          "q": "Ercan or Larnaca for Long Beach — which is better?",
          "a": "Ercan is closer, about forty-five minutes, and usually the better value. Larnaca suits direct European flights and takes around an hour and a quarter with the crossing, which is routine and adds no surcharge to the fare."
        },
        {
          "q": "What happens if my flight lands at two in the morning?",
          "a": "Night arrivals are routine on this route. Your driver is there at the time you actually land, a delay does not shorten your included waiting time, and the fare agreed when you booked does not change."
        }
      ],
      "returnIntro": "Departures from Long Beach usually mean an early car, and the resorts have nothing waiting outside at that hour. We collect from your reception and allow for the checkpoint on the way down to Larnaca."
    },
    "tr": {
      "intro": "Long Beach, Boğaz'ın hemen güneyinde doğu sahili boyunca uzanır ve buraya gelen uçuşların çoğu hava karardıktan sonra iner. Yetmiş beş dakika otoyolu, kontrol noktasını ve sahil yolunu kapsar; sonunda araç sitenin girişinde değil, kendi resepsiyonunuzun önünde durur.",
      "notes": [
        "Grand Sapphire, Caesar Resort ve Courtyard geniş tesisler, birden fazla kapıları var. Otel adını, dairede kalıyorsanız blok adını da yazın.",
        "Uçuşu kalkıştan itibaren takip ederiz; gece yarısını geçen bir iniş gerçek varış saatinde karşılanır ve dahil olan bekleme süreniz kısalmaz.",
        "Tesislerin önünde, özellikle akşam, bekleyen taksi olmaz. Sabit fiyatlı yerel yolculuklar İskele, Boğaz, Gazimağusa surlariçi ve Karpaz'ı kapsar."
      ],
      "faq": [
        {
          "q": "Long Beach için Ercan mı Larnaka mı?",
          "a": "Ercan daha yakın, yaklaşık kırk beş dakika ve genelde daha hesaplı. Larnaka Avrupa'dan direkt uçuşlara uygun; geçişle birlikte yaklaşık bir saat on beş dakika sürer ve geçiş için ücrete ek yapılmaz."
        },
        {
          "q": "Uçağım gece ikide inerse ne oluyor?",
          "a": "Bu hatta gece varışları olağan. Şoförünüz gerçekten indiğiniz saatte orada olur, rötar dahil olan bekleme sürenizi kısaltmaz ve rezervasyonda anlaştığınız ücret değişmez."
        }
      ],
      "returnIntro": "Long Beach'ten dönüşler genelde erken saatte olur ve o saatte tesislerin önünde bekleyen bir araç bulunmaz. Sizi resepsiyondan alır, Larnaka'ya inerken kontrol noktasını da hesaba katarız."
    },
    "ru": {
      "intro": "Лонг-Бич тянется по восточному побережью сразу к югу от Богаза, и рейсы сюда часто садятся уже затемно. Семьдесят пять минут — это шоссе, пункт пропуска и прибрежная дорога, а в конце машина останавливается у вашей стойки регистрации, а не у въезда на курортную полосу.",
      "notes": [
        "Grand Sapphire, Caesar Resort и Courtyard — большие комплексы с несколькими воротами. Указывайте отель, а для апартаментов ещё и корпус.",
        "Мы следим за рейсом с момента вылета: посадку после полуночи встречают по фактическому времени прилёта, и включённое время ожидания не сокращается.",
        "Такси у курортов не дежурят, особенно вечером. Местные поездки по фиксированной цене — Искеле, Богаз, старый город Фамагусты, Карпаз."
      ],
      "faq": [
        {
          "q": "Что лучше для Лонг-Бич — Эрджан или Ларнака?",
          "a": "Эрджан ближе, около сорока пяти минут, и обычно выгоднее. Ларнака удобна для прямых европейских рейсов: с переходом дорога занимает примерно час с четвертью, а сам переход рутинный и наценки к цене не добавляет."
        },
        {
          "q": "Что будет, если рейс садится в два часа ночи?",
          "a": "Ночные прилёты здесь обычное дело. Водитель на месте к фактическому времени посадки, задержка не сокращает включённое время ожидания, а цена, согласованная при бронировании, не меняется."
        }
      ],
      "returnIntro": "Выезд с Лонг-Бич обычно ранний, а в этот час у курортов не стоит ни одной свободной машины. Мы забираем от стойки регистрации и закладываем пункт пропуска в дорогу до Ларнаки."
    }
  },
  "larnaca-airport-to-bafra-hotels": {
    "guide": "bafra-hotels-transfer-guide",
    "en": {
      "intro": "Bafra is four hotels on an empty coast north-east of Famagusta, where the road turns towards the Karpaz. There is no town around them and no rank of taxis at the gate, so the ninety minutes from Larnaca ends the way it should: at the right reception, with someone who was expecting you.",
      "notes": [
        "The final twenty kilometres past İskele and Boğaz are almost unlit. It is a fine drive in daylight and a very dark one at night.",
        "Kaya Artemis, Noah's Ark, Concorde and Limak each have long internal driveways. The hotel name on the booking is what puts you at the door instead of a barrier.",
        "Guests arrive here as families, with a lot of luggage. Tell us the group size and suitcase count and we will come back with vehicle options, minibus included."
      ],
      "faq": [
        {
          "q": "Is there a taxi rank at the Bafra hotels?",
          "a": "No. The strip has no town around it and nothing idling outside the gates, which is why guests book both directions in advance. Finding a car out of Bafra on your last morning is the difficult part."
        },
        {
          "q": "How long is Larnaca Airport to Bafra including the crossing?",
          "a": "About ninety minutes over one hundred and ten kilometres, with the Green Line checkpoint inside that time. You stay in the vehicle, passports are checked, there is no passenger fee and nothing is added to the fare."
        }
      ],
      "returnIntro": "There is nothing to hail outside a Bafra hotel at five in the morning, which is why the return is worth booking with the outbound. Before your Larnaca flight we allow for the empty coast road and the checkpoint."
    },
    "tr": {
      "intro": "Bafra, Gazimağusa'nın kuzeydoğusunda, yolun Karpaz'a döndüğü yerde boş bir sahile dizilmiş dört otel. Çevrelerinde ne kasaba var ne de kapıda bekleyen taksi; bu yüzden Larnaka'dan gelen doksan dakika olması gerektiği gibi biter: doğru resepsiyonda, sizi bekleyen biriyle.",
      "notes": [
        "İskele ve Boğaz'ı geçtikten sonraki son yirmi kilometre neredeyse ışıksız. Gündüz keyifli bir yol, gece oldukça karanlık.",
        "Kaya Artemis, Noah's Ark, Concorde ve Limak'ın her birinin uzun bir iç yolu var. Sizi bariyere değil kapıya götüren şey rezervasyondaki otel adı.",
        "Buraya gelenlerin çoğu ailece ve bol bagajla geliyor. Kişi sayısını ve valiz adedini yazın, minibüs dahil araç seçenekleriyle size dönelim."
      ],
      "faq": [
        {
          "q": "Bafra otellerinin önünde taksi durağı var mı?",
          "a": "Yok. Çevrede kasaba olmadığı gibi kapıların önünde bekleyen araç da bulunmaz; misafirlerin iki yönü birden rezerve etmesinin sebebi bu. Zor kısım, son sabah Bafra'dan araç bulmak."
        },
        {
          "q": "Larnaka Havalimanı – Bafra sınır dahil ne kadar sürüyor?",
          "a": "Yüz on kilometrede yaklaşık doksan dakika; Yeşil Hat kontrol noktası bu sürenin içinde. Araçta kalırsınız, pasaportlara bakılır, yolcudan ücret alınmaz ve ücrete bir şey eklenmez."
        }
      ],
      "returnIntro": "Sabahın beşinde Bafra otelinin önünde el kaldıracağınız bir araç yok; dönüşü gidişle birlikte ayırtmaya değmesinin sebebi bu. Larnaka uçuşunuzdan önce boş sahil yolunu ve kontrol noktasını hesaba katarız."
    },
    "ru": {
      "intro": "Бафра — это четыре отеля на пустом побережье к северо-востоку от Фамагусты, там, где дорога уходит на Карпаз. Городка вокруг нет, стоянки такси у ворот тоже, поэтому девяносто минут из Ларнаки заканчиваются так, как надо: у нужной стойки, где вас ждут.",
      "notes": [
        "Последние двадцать километров за Искеле и Богазом почти без освещения. Днём это красивая дорога, ночью — очень тёмная.",
        "У Kaya Artemis, Noah's Ark, Concorde и Limak длинные внутренние подъезды. К нужной двери, а не к шлагбауму вас приводит название отеля в брони.",
        "Сюда чаще всего едут семьями и с большим багажом. Напишите число пассажиров и чемоданов — вернёмся с вариантами машин, включая минивэн."
      ],
      "faq": [
        {
          "q": "Есть ли у отелей Бафры стоянка такси?",
          "a": "Нет. Вокруг нет городка, и у ворот никто не дежурит — поэтому гости бронируют оба направления заранее. Сложность именно в том, чтобы найти машину из Бафры в последнее утро."
        },
        {
          "q": "Сколько занимает Ларнака — Бафра с переходом границы?",
          "a": "Около девяноста минут на сто десять километров, и пункт пропуска на «зелёной линии» уже входит в это время. Вы остаётесь в машине, паспорта проверяют, с пассажиров плату не берут, к цене ничего не добавляется."
        }
      ],
      "returnIntro": "В пять утра у отеля в Бафре некого поймать — поэтому обратную дорогу стоит бронировать вместе с прямой. Перед вылетом из Ларнаки мы закладываем и пустую прибрежную трассу, и пункт пропуска."
    }
  },
  "larnaca-airport-to-guzelyurt": {
    "guide": "guzelyurt-morphou-transfer-guide",
    "en": {
      "intro": "Güzelyurt is the one Larnaca route that never goes near the Nicosia checkpoints. We cross west of the capital at Bostancı (Astromeritis), which sits just south of the town, and come into the citrus country from below. On the clock it is the longest of these drives, around an hour and three quarters, and also the most direct.",
      "notes": [
        "Bostancı is the western crossing and by far the fastest way in. Drivers who default to the Nicosia checkpoints take you the long way round.",
        "The check at Bostancı is usually a few minutes. You stay in the car with passports ready, and passengers pay nothing.",
        "Evening taxis are scarce here. We run fixed-price local rides — the town centre, the orange and lemon groves, the coast at Lefke and Gemikonağı."
      ],
      "faq": [
        {
          "q": "Which border crossing is used for Güzelyurt?",
          "a": "Bostancı, known as Astromeritis on the southern side. It lies just south of Güzelyurt, so the route leaves the road west of the capital instead of driving into Nicosia and back out again."
        },
        {
          "q": "Why does Güzelyurt take longer than Kyrenia from Larnaca?",
          "a": "It sits further west — about thirty-five kilometres beyond Nicosia — so the distance is simply greater. The Bostancı crossing keeps the drive as short as it can be; routing through the capital would add to it."
        }
      ],
      "returnIntro": "Güzelyurt to Larnaca leaves through the same western checkpoint at Bostancı, so you are on the southern road within half an hour of the orange groves. Cars are hard to find here early in the morning, so book the leg ahead."
    },
    "tr": {
      "intro": "Güzelyurt, Lefkoşa kapılarına hiç uğramayan tek Larnaka güzergahı. Başkentin batısında, kasabanın hemen güneyindeki Bostancı (Astromeritis) kapısından geçer, narenciye bölgesine aşağıdan gireriz. Saat olarak bu güzergahların en uzunu, yaklaşık bir saat kırk beş dakika, ama aynı zamanda en doğrudan olanı.",
      "notes": [
        "Bostancı batı kapısıdır ve açık ara en hızlı giriş. Lefkoşa kapılarını varsayılan kabul eden şoförler sizi uzun yoldan götürür.",
        "Bostancı'daki kontrol genellikle birkaç dakikayla sınırlı. Pasaportlar elinizde hazır, siz araçtan inmezsiniz ve yolculardan hiçbir ücret alınmaz.",
        "Burada akşam taksi bulmak zor. Sabit fiyatlı yerel yolculuklar yapıyoruz — şehir merkezi, portakal ve limon bahçeleri, Lefke ve Gemikonağı sahili."
      ],
      "faq": [
        {
          "q": "Güzelyurt için hangi sınır kapısı kullanılıyor?",
          "a": "Güney tarafında Astromeritis adıyla bilinen Bostancı kapısı. Güzelyurt'un hemen güneyinde durduğu için güzergah, Lefkoşa'ya girip aynı yoldan tekrar çıkmak yerine başkentin batısında yoldan ayrılıyor."
        },
        {
          "q": "Larnaka'dan Güzelyurt neden Girne'den uzun sürüyor?",
          "a": "Daha batıda kalıyor — Lefkoşa'nın yaklaşık otuz beş kilometre ötesinde — yani mesafe basitçe daha uzun. Bostancı geçişi yolu mümkün olan en kısa hale getirir; başkent üzerinden gitmek süreyi artırır."
        }
      ],
      "returnIntro": "Güzelyurt'tan Larnaka'ya çıkış yine batıdaki Bostancı kapısından; portakal bahçelerinden yarım saat sonra güneydeki yoldasınız. Sabahın erken saatinde burada araç bulmak zor, dönüş bacağını önceden ayırtın."
    },
    "ru": {
      "intro": "Гюзельюрт — единственный ларнакский маршрут, который вовсе не подходит к никосийским пунктам пропуска. Мы переходим западнее столицы, на Бостанджи (Астромеритис), сразу к югу от города, и въезжаем в цитрусовый край снизу. По часам это самая длинная из этих поездок, около часа сорока пяти минут, и при этом самая прямая.",
      "notes": [
        "Бостанджи — западный пункт и самый быстрый въезд. Водители, привыкшие к никосийским пунктам, везут сюда длинной дорогой.",
        "Проверка на Бостанджи обычно занимает несколько минут. Вы остаётесь в машине с паспортами наготове, с пассажиров плата не берётся.",
        "Вечером такси здесь почти не найти. Мы делаем местные поездки по фиксированной цене — центр города, апельсиновые и лимонные сады, побережье у Лефке и Гемиконагы."
      ],
      "faq": [
        {
          "q": "Через какой пункт пропуска едут в Гюзельюрт?",
          "a": "Через Бостанджи, на южной стороне он называется Астромеритис. Он расположен сразу к югу от Гюзельюрта, поэтому маршрут сворачивает западнее столицы, а не заезжает в Никосию и не выезжает обратно."
        },
        {
          "q": "Почему из Ларнаки в Гюзельюрт дольше, чем в Кирению?",
          "a": "Он лежит западнее — примерно в тридцати пяти километрах за Никосией, то есть расстояние просто больше. Переход Бостанджи делает дорогу настолько короткой, насколько это возможно; через столицу вышло бы дольше."
        }
      ],
      "returnIntro": "Из Гюзельюрта в Ларнаку выезжают через тот же западный Бостанджи: через полчаса после апельсиновых садов вы уже на южной трассе. Ранним утром машину здесь найти трудно, поэтому бронируйте обратный отрезок заранее."
    }
  },
  "paphos-airport-to-nicosia": {
    "guide": "paphos-airport-arrival-guide",
    "en": {
      "intro": "Paphos sits at the western tip of the island and Nicosia sits in the middle of it, so this transfer covers 145 kilometres and takes about an hour and three quarters. You come off a European flight, pass one passport check along the way, and finish inside the Venetian walls of the last divided capital.",
      "notes": [
        "Nicosia is twenty minutes from Ercan and about fifty from Larnaca. From Paphos it is a genuine cross-island drive, worth knowing before you book the flight.",
        "Parking inside the walls is difficult and empty taxis are rare here, so tell us the hotel and we stop at its door rather than the nearest gate.",
        "Once you are in the old city the Ledra Street crossing is on foot: a checkpoint each side, passports shown, minutes to walk through."
      ],
      "faq": [
        {
          "q": "How long does a taxi from Paphos Airport to Nicosia take?",
          "a": "About one hour forty-five minutes for 145 kilometres, including the passport check on the way. We track your flight and set off when you actually land, so a delay does not shorten the waiting time included with your booking."
        },
        {
          "q": "Would Larnaca be a better airport for Nicosia?",
          "a": "For the capital alone, yes — Larnaca is around fifty minutes away against nearly two hours from Paphos. Fly into Paphos when the timing or the price of the flight suits you better, and we cover the distance in one car."
        }
      ],
      "returnIntro": "Leaving Nicosia for a Paphos flight means the hour you set off decides everything else. Allow the drive across the island, the checkpoint and the queue at the desk, and we will agree a pickup time that carries all three."
    },
    "tr": {
      "intro": "Baf adanın en batı ucunda, Lefkoşa tam ortasında; arada 145 kilometre ve yaklaşık bir saat kırk beş dakikalık yol var. Avrupa uçuşundan iner, yol üzerinde tek bir pasaport kontrolünden geçer ve Venedik surlarının içinde, dünyanın son bölünmüş başkentinde arabadan inersiniz. Ücret rezervasyon anında bellidir; taksimetre yoktur.",
      "notes": [
        "Lefkoşa Ercan'a yirmi, Larnaka'ya yaklaşık elli dakika uzaklıkta. Baf'tan geliş ise adanın bir ucundan diğerine bir yolculuk; uçuşu almadan önce bilmekte fayda var.",
        "Sur içinde park yeri bulmak zor, boş taksi de az. Otel adını yazarsanız sizi en yakın kapıya değil, otelin önüne bırakırız.",
        "Sur içine yerleştikten sonra Lokmacı (Ledra) kapısı yaya geçiştir: iki tarafta birer kontrol noktası, pasaport gösterimi ve birkaç dakikalık yürüyüş."
      ],
      "faq": [
        {
          "q": "Baf Havalimanı – Lefkoşa taksi ne kadar sürer?",
          "a": "145 kilometre için yaklaşık bir saat kırk beş dakika, yol üzerindeki pasaport kontrolü dahil. Yol adanın batı ucundan ortasına kadar kesintisiz sürer. Uçuşunuzu takip eder, gerçekte indiğiniz saatte yola çıkarız; rötar, rezervasyonunuza dahil bekleme süresini kısaltmaz."
        },
        {
          "q": "Lefkoşa için Larnaka daha mı uygun?",
          "a": "Sadece başkente gidecekseniz evet: Larnaka yaklaşık elli dakika, Baf ise iki saate yakın. Uçuşun saati ya da fiyatı Baf'ta daha iyiyse yine de gelin; mesafeyi tek araçla, araç değiştirmeden alırız."
        }
      ],
      "returnIntro": "Lefkoşa'dan Baf uçuşuna çıkarken her şeyi belirleyen tek şey yola çıkış saatidir. Adayı boydan boya geçmeyi, kontrol noktasını ve kontuar sırasını hesaba katar, alış saatini üçünü de kapsayacak şekilde birlikte belirleriz."
    },
    "ru": {
      "intro": "Пафос — на западной оконечности острова, Никосия — ровно посередине: 145 километров и около часа сорока пяти минут дороги. Вы выходите с европейского рейса, по пути проходите одну проверку паспортов и оказываетесь внутри венецианских стен последней разделённой столицы. Машина одна на весь путь, цена известна при бронировании.",
      "notes": [
        "От Эрджана до Никосии двадцать минут, от Ларнаки около пятидесяти. Из Пафоса это поездка через весь остров — об этом стоит знать до покупки билета.",
        "Парковка внутри стен трудная, свободных такси мало. Назовите отель, и мы подвезём к его двери, а не к ближайшим воротам.",
        "Уже в старом городе переход на улице Ледра проходится пешком: по пункту с каждой стороны, паспорт в руке, несколько минут ходу."
      ],
      "faq": [
        {
          "q": "Сколько ехать на такси из аэропорта Пафос в Никосию?",
          "a": "Около часа сорока пяти минут на 145 километров, включая паспортную проверку по дороге. Мы следим за рейсом и выезжаем в момент фактической посадки, поэтому задержка не сокращает включённое время ожидания."
        },
        {
          "q": "Не лучше ли лететь в Ларнаку, если нужна Никосия?",
          "a": "Если речь только о столице — да: Ларнака примерно в пятидесяти минутах против почти двух часов из Пафоса. Но если по времени или цене вам подходит рейс в Пафос, мы довезём одной машиной, без пересадки на границе."
        }
      ],
      "returnIntro": "Выезд из Никосии к рейсу из Пафоса упирается в один вопрос — во сколько тронуться. Мы считаем дорогу через весь остров, пункт пропуска и очередь на стойке и назначаем подачу так, чтобы всё это уместилось."
    }
  },
  "paphos-airport-to-kyrenia": {
    "guide": "paphos-airport-arrival-guide",
    "en": {
      "intro": "Two hours and 165 kilometres separate Paphos Airport from Kyrenia harbour. It is the longest way to reach the north coast, and most people who book it do so because the flight from home landed here rather than at Ercan. One car, one driver, one passport check, and no changing vehicles at the line.",
      "notes": [
        "Taxis picked up outside a southern terminal sometimes hand passengers over at the border. We do not: the same car and driver take you from arrivals to your hotel.",
        "You stay seated at the checkpoint while passports are looked at. There is no fee for passengers and nothing is added to your fare for the crossing.",
        "Two hours is long enough to want a break. Water is in the cabin, and the driver stops where you ask rather than pushing straight through."
      ],
      "faq": [
        {
          "q": "How long from Paphos to Kyrenia by taxi?",
          "a": "Around two hours for 165 kilometres, plus a few minutes at the checkpoint. Traffic and the hour do not change the fare, which is set when you book rather than read off a meter on arrival."
        },
        {
          "q": "Is it worth flying into Ercan instead?",
          "a": "For Kyrenia, Ercan is forty to forty-five minutes away with no border, so if a Turkey connection suits you it wins on driving time. Paphos makes sense when the direct European flight is the reason you chose it."
        }
      ],
      "returnIntro": "Kyrenia to Paphos is the whole width of the island before check-in, so the departure hour is the decision that matters. Give us the flight time and we work backwards from it, counting the mountain descent and the checkpoint."
    },
    "tr": {
      "intro": "Baf Havalimanı ile Girne limanı arasında 165 kilometre ve iki saat var. Kuzey sahiline ulaşmanın en uzun yolu bu; çoğu yolcu Ercan'a değil buraya inen bir uçuş bulduğu için tercih ediyor. Yolun büyük kısmı güneyden geçer, kuzeye giriş sona doğrudur. Tek araç, tek sürücü, tek pasaport kontrolü — sınırda araç değiştirme yok.",
      "notes": [
        "Güneydeki terminalin önünden alınan taksiler bazen yolcuyu sınırda başka bir araca devreder. Biz etmiyoruz: varış salonundan otelinize kadar aynı araba, aynı sürücü.",
        "Kontrol noktasında yerinizden kalkmazsınız, pasaportlara bakılır. Yolcudan geçiş ücreti alınmaz ve ücretinize sınır için bir ek yapılmaz.",
        "İki saat, mola isteyecek kadar uzun bir yol. Araçta su hazır; sürücü düz gitmek yerine siz nerede isterseniz orada durur."
      ],
      "faq": [
        {
          "q": "Baf'tan Girne'ye taksiyle ne kadar sürer?",
          "a": "165 kilometre için yaklaşık iki saat, üstüne kontrol noktasında birkaç dakika. Trafik de saat de ücreti değiştirmez; rakam rezervasyonda bellidir, varışta taksimetreden okunmaz. Yol üzerinde verilen mola da fiyata bir şey eklemez."
        },
        {
          "q": "Bunun yerine Ercan'a uçmak mantıklı mı?",
          "a": "Girne için Ercan kırk-kırk beş dakika ve sınır yok; Türkiye aktarması size uyuyorsa yol süresinde açık ara kazanır. Baf'ı direkt Avrupa uçuşu için seçtiyseniz o da anlamlıdır — ikisini de yapıyoruz."
        }
      ],
      "returnIntro": "Girne'den Baf'a giderken önce adanın tamamını geçer, sonra check-in'e yetişirsiniz; dolayısıyla asıl karar çıkış saatidir. Uçuş saatinizi verin, dağ inişini ve kontrol noktasını sayarak geriye doğru hesaplayalım. Bagaj sayısını da baştan yazın."
    },
    "ru": {
      "intro": "Между аэропортом Пафоса и киренийской гаванью — 165 километров и два часа. Это самый долгий способ добраться до северного побережья, и выбирают его обычно потому, что рейс из дома сел здесь, а не в Эрджане. Одна машина, один водитель, одна проверка паспортов и никакой пересадки на линии.",
      "notes": [
        "Такси, взятое у южного терминала, иногда передаёт пассажиров другой машине на границе. У нас так не бывает: от зала прилёта до отеля везёт один и тот же автомобиль.",
        "На пункте пропуска вы остаётесь на своих местах, паспорта просто показывают. С пассажиров ничего не берут, и к вашей цене за переход ничего не добавляется.",
        "Два часа — достаточно, чтобы захотеть паузу. Вода в салоне есть, а водитель остановится там, где вы попросите, а не поедет напролом."
      ],
      "faq": [
        {
          "q": "Сколько ехать из Пафоса в Кирению на такси?",
          "a": "Около двух часов на 165 километров плюс несколько минут на пункте пропуска. Ни пробки, ни время суток цену не меняют: она зафиксирована при бронировании, а не считается счётчиком по приезде."
        },
        {
          "q": "Может, стоит лететь в Эрджан?",
          "a": "Для Кирении Эрджан в сорока-сорока пяти минутах и без границы, так что при удобной стыковке через Турцию он выигрывает по времени в пути. Пафос имеет смысл, когда вы выбрали прямой европейский рейс."
        }
      ],
      "returnIntro": "Из Кирении в Пафос — сначала весь остров поперёк, потом регистрация, поэтому решает только час выезда. Назовите время вылета, и мы отсчитаем назад, заложив спуск с перевала и пункт пропуска."
    }
  },
  "paphos-airport-to-kyrenia-hotels": {
    "guide": "kyrenia-harbour-castle-old-town-guide",
    "en": {
      "intro": "The hotel strip runs east and west of Kyrenia along the coast, and the last stretch of this transfer depends entirely on which property you are booked into. From Paphos the drive is a little over two hours. The difference between the town-centre fare and this one is those final kilometres past the harbour.",
      "notes": [
        "Send the hotel name with your booking. Some properties sit twenty minutes beyond the centre, and the driver takes the coast road that serves yours rather than stopping in town.",
        "If you are not sure whether your hotel counts as the centre or the strip, write us the name and we will tell you which fare applies.",
        "A saloon carries two large suitcases and hand luggage. For a bigger group or a fourth case we quote a seven-seat Vito in writing before you travel."
      ],
      "faq": [
        {
          "q": "What is the difference between Kyrenia centre and the Kyrenia hotels area?",
          "a": "Distance, mostly. The centre means the harbour and the streets around it; the hotels area covers the coastal properties either side of town, which adds a few kilometres and carries a separate fixed fare. The hotel name settles which one you need."
        },
        {
          "q": "Can you fit a family and all the luggage?",
          "a": "Four passengers with normal suitcases travel in the standard car. Beyond that, tell us the group size and the number of bags and we arrange the larger vehicle, with the price confirmed in writing rather than at the kerb. Child seats need only a note on the booking."
        }
      ],
      "returnIntro": "Your driver comes to your own reception rather than the main gate, which matters when the grounds are large and the road in is long. From the strip to Paphos is a little over two hours, so we set the pickup around your flight."
    },
    "tr": {
      "intro": "Oteller bölgesi Girne'nin doğusu ve batısı boyunca sahil yolunda uzanır; bu transferin son bölümü hangi tesiste kaldığınıza göre değişir. Baf'tan yol iki saati biraz geçer. Baf'tan çıkışta ilk saatler güneyde geçer. Merkez tarifesiyle bu tarife arasındaki fark, limanı geçtikten sonraki o son kilometrelerdir. Adres netse sürücü doğru sahil yoluna girer.",
      "notes": [
        "Rezervasyona otel adını yazın. Bazı tesisler merkezin yirmi dakika ötesinde; sürücü şehirde durmak yerine sizin otelinize giden sahil yolunu kullanır.",
        "Oteliniz merkez mi oteller bölgesi mi, emin değilseniz adını bize yazın; hangi tarifenin geçerli olduğunu biz söyleyelim.",
        "Binek araç iki büyük valiz ve el bagajını rahat alır. Daha kalabalık grup ya da fazladan valiz için yedi kişilik Vito'yu yola çıkmadan yazılı fiyatlandırırız."
      ],
      "faq": [
        {
          "q": "Girne merkez ile Girne oteller bölgesi arasındaki fark ne?",
          "a": "Büyük ölçüde mesafe. Merkez, liman ve çevresindeki sokaklar demek; oteller bölgesi şehrin iki yanındaki sahil tesislerini kapsar, birkaç kilometre ekler ve ayrı bir sabit tarifesi vardır. Hangisi olduğunu otel adı belirler."
        },
        {
          "q": "Bir aile ve tüm bagajlar sığar mı?",
          "a": "Normal valizlerle dört yolcu standart araçla rahat gider. Bunun ötesinde kişi sayısını ve valiz adedini yazın, büyük aracı ayarlayalım; fiyatını kapıda değil, önceden yazılı veririz. Çocuk koltuğu için rezervasyona bir not düşmeniz yeterli."
        }
      ],
      "returnIntro": "Sürücünüz ana kapıya değil, kendi resepsiyonunuza gelir; tesis büyük ve içerideki yol uzunsa bu fark eder. Oteller bölgesinden Baf'a yol iki saati biraz geçtiği için alış saatini uçuşunuza göre kurarız."
    },
    "ru": {
      "intro": "Отельная полоса тянется вдоль побережья к востоку и западу от Кирении, и последний отрезок этой поездки целиком зависит от того, в каком отеле вы живёте. Из Пафоса дорога занимает чуть больше двух часов. Разница между тарифом на центр и этим тарифом — как раз те километры за гаванью.",
      "notes": [
        "Укажите название отеля в брони. Некоторые из них стоят в двадцати минутах за центром, и водитель сразу уходит на нужную прибрежную дорогу, не заезжая в город.",
        "Не уверены, центр у вас или отельная зона? Напишите нам название отеля — мы скажем, какой тариф ваш и сколько это займёт.",
        "Седан спокойно берёт два больших чемодана и ручную кладь. Для группы побольше или лишнего места мы письменно называем цену семиместного Vito до выезда."
      ],
      "faq": [
        {
          "q": "Чем центр Кирении отличается от отельной зоны?",
          "a": "В основном расстоянием. Центр — это гавань и улицы вокруг неё; отельная зона — прибрежные комплексы по обе стороны города, это лишние километры и отдельный фиксированный тариф. Название отеля решает вопрос."
        },
        {
          "q": "Поместится ли семья со всем багажом?",
          "a": "Четверо пассажиров с обычными чемоданами едут в стандартной машине. Если вас больше или мест больше, напишите число людей и чемоданов — подберём вместительный автомобиль и подтвердим цену письменно заранее, а не у обочины. Детское кресло — просто пометка в брони."
        }
      ],
      "returnIntro": "Водитель подъезжает к вашей собственной стойке регистрации, а не к главным воротам — на большой территории с длинным внутренним проездом это заметно. От отельной полосы до Пафоса чуть больше двух часов, поэтому подачу ставим от времени вылета."
    }
  },
  "paphos-airport-to-famagusta": {
    "guide": "famagusta-beaches-old-city-guide",
    "en": {
      "intro": "Two and a half hours, 200 kilometres, from the western tip of Cyprus to the walled city on the east coast. A good share of this run is students arriving for term at Eastern Mediterranean University with a year of luggage, and families whose direct flight landed at Paphos rather than Larnaca. The road is long and we plan around that rather than around it.",
      "notes": [
        "Term-start arrivals mean heavy bags. Tell us the case count when you book so the right car turns up, not one whose boot will not close.",
        "Famagusta's sights sit inside the Venetian walls and are walkable, but your accommodation may not be. Give the address or the campus block and we stop there.",
        "From Larnaca the same journey is about an hour and from Ercan roughly forty minutes, which is worth weighing while the ticket can still be changed."
      ],
      "faq": [
        {
          "q": "How long does Paphos Airport to Famagusta take?",
          "a": "Around two hours thirty for 200 kilometres, with a passport check on the way where you stay in the car. The fare is fixed when you book, so the length of the drive and the time of night make no difference to it."
        },
        {
          "q": "Do we stop on the way?",
          "a": "Yes, if you want to. On a drive this long most passengers ask for a few minutes somewhere, and stopping adds nothing to the price. Water is already in the car, and there is no charge for the minutes the wheels are not turning."
        }
      ],
      "returnIntro": "Famagusta to Paphos is the long diagonal back across the island, and on this route the departure hour is the whole plan. Count two and a half hours of driving, the checkpoint and the check-in desk before you pick a pickup time."
    },
    "tr": {
      "intro": "İki buçuk saat, 200 kilometre: Kıbrıs'ın batı ucundan doğu sahilindeki surlu şehre. Gazimağusa surlarına varana kadar adanın neredeyse tamamını geçersiniz. Bu hattı en çok dönem başında bir yıllık bagajla gelen Doğu Akdeniz Üniversitesi öğrencileri ve Larnaka yerine Baf'a direkt uçuş bulmuş aileler kullanıyor. Yol uzun; bunu saklamak yerine ona göre planlıyoruz.",
      "notes": [
        "Dönem başı demek ağır bagaj demek. Rezervasyonda valiz sayısını belirtin ki bagajı zor kapanan bir araç değil, doğru araç gelsin.",
        "Gazimağusa'nın görülecek yerleri surların içinde ve yürünebilir; ama kaldığınız yer olmayabilir. Adresi ya da kampüs bloğunu verin, orada duralım.",
        "Aynı yol Larnaka'dan yaklaşık bir saat, Ercan'dan kırk dakika. Uçuş biletiniz hâlâ değiştirilebilirken bunu tartmakta fayda var."
      ],
      "faq": [
        {
          "q": "Baf Havalimanı'ndan Gazimağusa'ya ne kadar sürer?",
          "a": "200 kilometre için yaklaşık iki buçuk saat; yol üzerinde, araçtan inmediğiniz bir pasaport kontrolü var. Ücret rezervasyonda sabitlenir; yolun uzunluğu da gecenin saati de onu değiştirmez. Uçuş numarasını verirseniz inişi takip eder, alışı ona göre kaydırırız."
        },
        {
          "q": "Yolda mola veriyor musunuz?",
          "a": "İsterseniz evet. Bu uzunlukta bir yolda çoğu yolcu birkaç dakika durmak istiyor ve durmak fiyata bir şey eklemiyor. Nerede duracağınızı sürücüye söylemeniz yeterli. Araçta su zaten var; tekerlek dönmediği dakikalar için ücret işlemez."
        }
      ],
      "returnIntro": "Gazimağusa'dan Baf'a dönüş, adanın uzun köşegeni. Bu hatta bütün plan çıkış saatine bağlı: iki buçuk saatlik yolu, kontrol noktasını ve kontuar kuyruğunu sayıp alış saatini ona göre koyarız. Uçuş numarasını vermeniz yeterli."
    },
    "ru": {
      "intro": "Два с половиной часа, 200 километров — от западной оконечности Кипра до города в венецианских стенах на восточном побережье. Заметную часть этого маршрута занимают студенты Восточно-Средиземноморского университета, приезжающие к началу семестра с багажом на год, и семьи, у которых прямой рейс оказался в Пафосе, а не в Ларнаке.",
      "notes": [
        "Начало семестра означает тяжёлый багаж. Укажите количество мест при бронировании, чтобы приехала подходящая машина, а не та, у которой не закроется багажник.",
        "Достопримечательности Фамагусты внутри стен и обходятся пешком, а вот жильё может стоять в стороне. Дайте адрес или корпус кампуса — остановимся там.",
        "Из Ларнаки та же дорога занимает около часа, из Эрджана примерно сорок минут. Это стоит взвесить, пока билет ещё можно поменять."
      ],
      "faq": [
        {
          "q": "Сколько занимает дорога из аэропорта Пафоса в Фамагусту?",
          "a": "Около двух с половиной часов на 200 километров, с паспортной проверкой по пути, во время которой вы не выходите из машины. Цена фиксируется при бронировании, и ни длина дороги, ни ночное время её не меняют."
        },
        {
          "q": "Делаете ли вы остановку в пути?",
          "a": "Да, если захотите. На такой дистанции почти все просят несколько минут где-нибудь передохнуть, и остановка ничего не добавляет к цене. Вода в машине уже есть, а за минуты стоянки ничего не начисляется."
        }
      ],
      "returnIntro": "Из Фамагусты в Пафос — длинная диагональ через остров, и весь план держится на часе выезда. Считаем два с половиной часа дороги, пункт пропуска и стойку регистрации, и уже от этого назначаем подачу."
    }
  },
  "paphos-airport-to-iskele-long-beach": {
    "guide": "long-beach-iskele-things-to-do",
    "en": {
      "intro": "Long Beach lies on the east coast in the İskele district, roughly two hours forty from Paphos. The resorts there are large and self-contained, with long internal roads and more than one gate, and nothing waiting outside them in the way of taxis. That is the whole reason this run gets booked in advance, and the reason it matters more on a night arrival.",
      "notes": [
        "Name the hotel: Grand Sapphire, Caesar Resort, Courtyard Long Beach or another. If you are in a rented apartment inside a complex, add the block.",
        "Evenings on the strip work the same way. Nothing idles outside the gate, so book dinner at Boğaz or an outing to Famagusta with a return pickup time.",
        "Ercan is about forty-five minutes from Long Beach against nearly three hours from Paphos, so the flight price is usually what decides this one."
      ],
      "faq": [
        {
          "q": "How long is the transfer from Paphos Airport to Long Beach?",
          "a": "About two hours forty for 215 kilometres, plus a short passport check. We follow the flight number, so a late landing moves the pickup instead of costing you the car or changing the fixed fare."
        },
        {
          "q": "Do you stop on the way for children?",
          "a": "Yes. Nearly three hours is a lot to ask of a child after a flight, so we plan a break rather than pretending this is a short hop. Child seats need only a note on the booking, and there is water in the car."
        }
      ],
      "returnIntro": "Leaving Long Beach for a Paphos flight is the earliest morning of the holiday, so we work backwards from the departure board: nearly three hours of road, the checkpoint, then the desk. Your driver comes to the reception you name."
    },
    "tr": {
      "intro": "Long Beach, doğu sahilinde İskele bölgesinde; Baf'tan yaklaşık iki saat kırk dakika. Buradaki tesisler büyük ve kendi içine kapalı: uzun iç yollar, birden fazla kapı ve dışarıda bekleyen taksi yok. Bu hattın önceden ayarlanmasının sebebi tam olarak bu, gece inen uçuşlarda ise fark daha da belirgin.",
      "notes": [
        "Otel adını yazın: Grand Sapphire, Caesar Resort, Courtyard Long Beach ya da bir diğeri. Site içinde kiralık dairede kalıyorsanız blok adını da ekleyin.",
        "Akşamları da durum aynı. Kapının önünde bekleyen araç olmadığı için Boğaz'da yemeği ya da Gazimağusa turunu dönüş saatiyle birlikte ayarlayın.",
        "Long Beach Ercan'a yaklaşık kırk beş dakika, Baf'a üç saate yakın. Bu hatta seçimi genelde uçuş fiyatı yapıyor."
      ],
      "faq": [
        {
          "q": "Baf Havalimanı'ndan Long Beach'e transfer ne kadar sürer?",
          "a": "215 kilometre için yaklaşık iki saat kırk dakika, üstüne kısa bir pasaport kontrolü. Uçuş numarasını takip ederiz; geç iniş aracı kaçırmanıza da sabit ücretin değişmesine de yol açmaz. Yol üzerinde verilen mola da ücrete yansımaz."
        },
        {
          "q": "Çocuklar için yolda mola veriyor musunuz?",
          "a": "Evet. Uçuştan sonra üç saate yakın yol bir çocuk için uzun; bunu kısa bir sıçrama gibi göstermek yerine molayı baştan planlarız. Çocuk koltuğu için rezervasyona not düşmeniz yeterli, araçta su var."
        }
      ],
      "returnIntro": "Long Beach'ten Baf uçuşuna çıkmak tatilin en erken sabahıdır. Kalkış saatinden geriye doğru hesaplarız: üç saate yakın yol, kontrol noktası, sonra kontuar. Sürücünüz söylediğiniz resepsiyona gelir, kapıda beklemezsiniz. Uçuş saatinizi vermeniz yeterli."
    },
    "ru": {
      "intro": "Лонг-Бич лежит на восточном побережье в районе Искеле, примерно в двух часах сорока минутах от Пафоса. Отели здесь большие и самодостаточные: длинные внутренние дороги, не один въезд и никаких такси у ворот. Именно поэтому такой трансфер заказывают заранее, а при ночном прилёте это чувствуется сильнее всего.",
      "notes": [
        "Назовите отель: Grand Sapphire, Caesar Resort, Courtyard Long Beach или другой. Если вы в съёмной квартире внутри комплекса, добавьте название корпуса.",
        "Вечером работает то же правило: у ворот никто не стоит. Ужин в Богазе или поездку в Фамагусту заказывайте сразу со временем обратной подачи.",
        "От Эрджана до Лонг-Бич около сорока пяти минут, из Пафоса почти три часа. Обычно выбор здесь определяет цена авиабилета."
      ],
      "faq": [
        {
          "q": "Сколько занимает трансфер из аэропорта Пафоса на Лонг-Бич?",
          "a": "Около двух часов сорока минут на 215 километров плюс короткая проверка паспортов. Мы ведём рейс по номеру, поэтому поздняя посадка сдвигает подачу, а не лишает вас машины и не меняет фиксированную цену."
        },
        {
          "q": "Останавливаетесь ли вы в дороге ради детей?",
          "a": "Да. Почти три часа после перелёта — много для ребёнка, поэтому паузу мы закладываем сразу, а не делаем вид, что это короткий перегон. Детское кресло достаточно отметить в брони, вода в машине есть."
        }
      ],
      "returnIntro": "Отъезд с Лонг-Бич к рейсу из Пафоса — самое раннее утро за всю поездку. Мы считаем назад от табло: почти три часа дороги, пункт пропуска, потом стойка. Машину водитель подаёт к той стойке регистрации, которую вы назовёте."
    }
  },
  "paphos-airport-to-bafra-hotels": {
    "guide": "bafra-hotels-transfer-guide",
    "en": {
      "intro": "Bafra is four large hotels on an empty stretch of north-east coast — Kaya Artemis, Noah's Ark, Concorde and Limak — with no town around them. From Paphos it is the longest transfer we run: about two hours fifty-five and 230 kilometres, ending on a road with almost nothing on it.",
      "notes": [
        "The last twenty kilometres are beautiful in daylight and very dark after it. Nobody wants to be arranging a three-hour drive outside a terminal at that hour.",
        "Each property has more than one entrance and a long drive in. The hotel name on your booking is what puts you at reception instead of a barrier.",
        "Book the return at the same time. Finding a car out of Bafra on your last morning is the difficult half of the trip, not the arrival."
      ],
      "faq": [
        {
          "q": "How long is Paphos Airport to Bafra by taxi?",
          "a": "About two hours fifty-five minutes over 230 kilometres, including the border check. It is a long run and we say so plainly; it is done in one vehicle, with no change of car and no surcharge for the crossing."
        },
        {
          "q": "Should I fly into Ercan or Larnaca for Bafra instead?",
          "a": "If you can, yes. Ercan is around an hour from Bafra and Larnaca about an hour and a half, against nearly three hours from Paphos. Paphos earns its place when the flight itself is the better deal, and we run it either way."
        }
      ],
      "returnIntro": "Bafra to Paphos is close to three hours before you even reach the terminal, so the alarm clock is the real subject here. Tell us the flight and we set a pickup that leaves room for the checkpoint. Night departures work the same way."
    },
    "tr": {
      "intro": "Bafra, kuzeydoğu sahilinde boş bir kıyıya dizilmiş dört büyük otel demek: Kaya Artemis, Noah's Ark, Concorde ve Limak. Etrafında kasaba yok. Baf'tan bu, yaptığımız en uzun transfer: yaklaşık iki saat elli beş dakika ve 230 kilometre, sonu neredeyse bomboş bir yol. Bu yüzden aracın önceden ayarlanması burada bir tercih değil, gerekliliktir.",
      "notes": [
        "Son yirmi kilometre gündüz güzel, karanlıkta çok ıssız. Kimse o saatte terminalin önünde üç saatlik bir yolculuğun pazarlığını yapmak istemez.",
        "Her tesisin birden fazla girişi ve uzun bir iç yolu var. Rezervasyondaki otel adı, sizi bariyere değil resepsiyona götüren şeydir.",
        "Dönüşü de aynı anda ayarlayın. Bafra'da zor olan kısım varış değil, son sabah oradan çıkacak aracı bulmaktır."
      ],
      "faq": [
        {
          "q": "Baf Havalimanı – Bafra taksi ne kadar sürer?",
          "a": "230 kilometre için yaklaşık iki saat elli beş dakika, sınır kontrolü dahil. Uzun bir yol ve bunu açıkça söylüyoruz; tek araçla, araç değişikliği olmadan ve geçiş için ek ücret alınmadan yapılıyor."
        },
        {
          "q": "Bafra için Ercan ya da Larnaka'ya uçmak daha mı iyi?",
          "a": "İmkânınız varsa evet. Bafra Ercan'a yaklaşık bir saat, Larnaka'ya bir buçuk saat; Baf'tan ise üç saate yakın. Uçuşun kendisi belirgin şekilde uygunsa Baf da yerini bulur ve o hattı da işletiyoruz."
        }
      ],
      "returnIntro": "Bafra'dan Baf'a terminale varmadan önce üç saate yakın yol var; dolayısıyla asıl konu çalar saattir. Uçuşunuzu söyleyin, kontrol noktasına da pay bırakan bir alış saati koyalım. Gece kalkışlarda da aynı şekilde çalışırız."
    },
    "ru": {
      "intro": "Бафра — это четыре больших отеля на пустом северо-восточном берегу: Kaya Artemis, Noah’s Ark, Concorde и Limak. Города вокруг них нет. Из Пафоса это самый длинный наш трансфер: около двух часов пятидесяти пяти минут и 230 километров, а заканчивается он на дороге, где почти ничего нет.",
      "notes": [
        "Последние двадцать километров днём красивы, а после заката очень темны. Договариваться о трёхчасовой поездке у выхода из терминала в такой час не хочется никому.",
        "У каждого отеля не один вход и длинный внутренний проезд. Название отеля в брони — это то, что приводит вас к стойке, а не к шлагбауму.",
        "Обратную дорогу бронируйте сразу. Сложная половина поездки в Бафру — не приезд, а поиск машины отсюда в последнее утро."
      ],
      "faq": [
        {
          "q": "Сколько ехать из аэропорта Пафоса в Бафру?",
          "a": "Около двух часов пятидесяти пяти минут на 230 километров, включая пограничную проверку. Дорога длинная, и мы говорим об этом прямо; проходит она на одной машине, без пересадки и без надбавки за переход."
        },
        {
          "q": "Может, для Бафры лучше лететь в Эрджан или Ларнаку?",
          "a": "Если есть выбор — да. От Эрджана до Бафры около часа, от Ларнаки примерно полтора, а из Пафоса почти три. Пафос оправдан, когда сам билет заметно выгоднее, и этот маршрут мы возим так же."
        }
      ],
      "returnIntro": "От Бафры до Пафоса почти три часа ещё до входа в терминал, так что главный герой здесь — будильник. Назовите рейс, и мы поставим подачу с запасом на пункт пропуска. Ночные вылеты возим так же."
    }
  },
  "paphos-airport-to-guzelyurt": {
    "guide": "guzelyurt-morphou-transfer-guide",
    "en": {
      "intro": "Of everywhere in the north, Güzelyurt is the one place Paphos genuinely suits: 115 kilometres towards the citrus plain rather than a crossing of the whole island. We use the Bostancı (Astromeritis) checkpoint just south of the town, which avoids doubling back through Nicosia. The drive runs about an hour and fifty.",
      "notes": [
        "Bostancı is a quiet checkpoint and usually takes a few minutes. You stay in the car with passports ready, and passengers pay nothing at the crossing.",
        "This line is run directly by Halit Yeşilovalı, who drives it regularly and knows which lane moves at which hour.",
        "A seven-seat Vito is on the fixed price list for this route, so a large family or a term of luggage is priced before you fly rather than after."
      ],
      "faq": [
        {
          "q": "Which airport is closest to Güzelyurt?",
          "a": "Ercan, at about fifty minutes and with no border. From the south, Larnaca and Paphos work out a similar distance away — both roughly an hour three quarters to two hours — so fly into whichever your direct European flight uses."
        },
        {
          "q": "Do you take students to the METU campus at Kalkanlı?",
          "a": "Yes, and term-start runs are regular work on this line. Give the campus, the block and the number of suitcases when you book, and if the bags outgrow a saloon we send the Vito at its fixed price."
        }
      ],
      "returnIntro": "Güzelyurt back to Paphos runs through Bostancı and down the west of the island in under two hours, which still means an early start for a morning flight. Ask Halit for the pickup time and give him the bag count while you are at it."
    },
    "tr": {
      "intro": "Kuzeyde Baf'ın gerçekten yakıştığı tek yer Güzelyurt: adanın tamamını geçmek yerine narenciye ovasına doğru 115 kilometre. Kasabanın hemen güneyindeki Bostancı (Astromeritis) kapısını kullanırız; bu, Lefkoşa üzerinden dolaşmayı ortadan kaldırır. Yol yaklaşık bir saat elli dakika sürer. Baf, kuzeyin batısına gelenler için gerçekten kullanışlı bir kapıdır.",
      "notes": [
        "Bostancı sakin bir kapıdır, genelde birkaç dakika sürer. Pasaportlar elinizde araçta oturursunuz; yolcudan geçişte ücret alınmaz.",
        "Bu hattı doğrudan Halit Yeşilovalı işletiyor. Yolu düzenli gidiyor, hangi şeridin hangi saatte aktığını biliyor.",
        "Yedi kişilik Vito bu güzergâhta sabit fiyat listesinde yer alıyor; kalabalık bir aile ya da bir dönemlik bagaj uçmadan önce fiyatlanıyor, sonrasında değil."
      ],
      "faq": [
        {
          "q": "Güzelyurt'a en yakın havalimanı hangisi?",
          "a": "Ercan: yaklaşık elli dakika ve sınır yok. Güneyden bakarsanız Larnaka ile Baf birbirine yakın mesafede; ikisi de yaklaşık bir saat kırk beş dakika ile iki saat arasında sürüyor. Direkt Avrupa uçuşunuz hangisine iniyorsa oraya gelin."
        },
        {
          "q": "ODTÜ Kuzey Kıbrıs Kampüsü'ne (Kalkanlı) öğrenci taşıyor musunuz?",
          "a": "Evet, dönem başı yolculukları bu hattın düzenli işi. Rezervasyonda kampüsü, bloğu ve valiz sayısını yazın; bagaj binek aracı aşarsa sabit fiyatlı Vito'yu gönderiyoruz. Kampüs içinde hangi kapıda inmek istediğinizi de belirtebilirsiniz."
        }
      ],
      "returnIntro": "Güzelyurt'tan Baf'a dönüş yine Bostancı üzerinden ve adanın batısından, iki saatin altında. Yine de sabah uçuşu erken kalkmak demek. Alış saatini Halit'e sorun, bagaj sayısını da o an söyleyin; sabahın erken saatinde de yola çıkarız."
    },
    "ru": {
      "intro": "Из всего севера Пафос по-настоящему подходит одному месту — Гюзельюрту: 115 километров в сторону цитрусовой равнины вместо переезда через весь остров. Мы идём через пункт Бостанджи (Астромеритис) сразу к югу от города, что снимает необходимость крюка через Никосию. Дорога занимает около часа пятидесяти. Машина одна на весь путь, пересадки на линии нет.",
      "notes": [
        "Бостанджи — спокойный переход, обычно несколько минут. Вы сидите в машине с паспортами наготове, платы с пассажиров нет.",
        "Линию ведёт лично Халит Йешиловалы: он ездит здесь регулярно и знает, какая полоса в какой час движется.",
        "Семиместный Vito на этом маршруте есть в фиксированном прайсе, поэтому большая семья или багаж на семестр считаются до вылета, а не после."
      ],
      "faq": [
        {
          "q": "Какой аэропорт ближе всего к Гюзельюрту?",
          "a": "Эрджан — около пятидесяти минут и без границы. С юга Ларнака и Пафос примерно равноудалены: и там и там выходит около часа сорока пяти минут — двух часов. Прилетайте туда, куда идёт ваш прямой европейский рейс."
        },
        {
          "q": "Возите ли вы студентов в кампус METU (ОДТЮ) в Калканлы?",
          "a": "Да, поездки к началу семестра — обычная работа на этой линии. Укажите кампус, корпус и число чемоданов при бронировании; если багаж не помещается в седан, отправим Vito по фиксированной цене."
        }
      ],
      "returnIntro": "Обратно из Гюзельюрта в Пафос — снова через Бостанджи и вниз по западу острова, меньше двух часов. Но утренний рейс всё равно означает ранний подъём. Спросите у Халита время подачи, он поставит его от вылета."
    }
  },
  "guzelyurt-to-limassol": {
    "guide": "guzelyurt-soli-vouni-west-cyprus-guide",
    "en": {
      "intro": "This is not an airport run. It is a town-to-town line across the middle of the island: 105 kilometres from the citrus plain at Güzelyurt down to the south coast at Limassol, about an hour and forty. One car takes you to both sides of the line, and it can wait for you if you are coming back the same day.",
      "notes": [
        "A hire car picked up in the north usually cannot cross, and the insurance rarely covers it. This is the trip where that catches people out.",
        "Carry your passport in both directions. The check takes a few minutes each way, you stay seated, and nothing is charged to passengers.",
        "The two sides use different currencies. Cards work in most places in Limassol, but a little cash on each side makes the day simpler."
      ],
      "faq": [
        {
          "q": "How long does Güzelyurt to Limassol take by taxi?",
          "a": "About one hour forty for 105 kilometres, plus the checkpoint. The fare is agreed before you set off and does not move for traffic. If you want the car to wait in Limassol and bring you home, say so when you book and that is priced up front too."
        },
        {
          "q": "Can I take a hire car from the north to Limassol?",
          "a": "Usually not. Cars rented on one side of the line often cannot be taken to the other, and rental insurance rarely covers the crossing. A private transfer avoids the question: one vehicle, both sides, no paperwork on yours."
        }
      ],
      "returnIntro": "Coming back north from Limassol, the checkpoint is the only fixed point in the day; the rest is yours to decide. Agree the pickup place and hour before you are dropped off, and Halit will be there."
    },
    "tr": {
      "intro": "Bu bir havalimanı hattı değil. Adanın ortasından geçen bir şehirlerarası hat: Güzelyurt'un narenciye ovasından güney sahiline, Limasol'a 105 kilometre ve yaklaşık bir saat kırk dakika. Havalimanı yok, uçuş takibi yok; saati siz koyarsınız. Tek araç sizi hattın iki tarafına da götürür; aynı gün döneceksiniz beklemesi de ayarlanabilir.",
      "notes": [
        "Kuzeyden kiralanan araç genelde karşıya geçemez, sigorta da bunu çoğu zaman kapsamaz. İnsanların en çok burada takıldığı yolculuk budur.",
        "Pasaportunuzu iki yönde de yanınızda bulundurun. Kontrol her yönde birkaç dakika sürer, araçtan inmezsiniz ve yolcudan ücret alınmaz.",
        "İki tarafta farklı para birimi geçiyor. Limasol'da kart çoğu yerde çalışıyor ama her iki tarafa da bir miktar nakit günü kolaylaştırır."
      ],
      "faq": [
        {
          "q": "Güzelyurt – Limasol taksi ne kadar sürer?",
          "a": "105 kilometre için yaklaşık bir saat kırk dakika, üstüne kontrol noktası. Ücret yola çıkmadan bellidir ve trafiğe göre değişmez. Aracın Limasol'da beklemesini ve sizi geri getirmesini isterseniz onu da önceden fiyatlandırırız."
        },
        {
          "q": "Kuzeyden kiraladığım arabayla Limasol'a geçebilir miyim?",
          "a": "Genelde hayır. Hattın bir tarafında kiralanan araçlar çoğu zaman diğer tarafa götürülemiyor ve kiralama sigortası geçişi nadiren kapsıyor. Özel transfer bu soruyu ortadan kaldırır: tek araç, iki taraf, sizin tarafınızda evrak yok."
        }
      ],
      "returnIntro": "Limasol'dan kuzeye dönerken günün tek sabit noktası kontrol noktasıdır; gerisi size kalmış. Bırakılmadan önce alış yerini ve saatini kararlaştırın, Halit dönüş için orada olsun. Planınız uzarsa haber vermeniz yeterli, saat ona göre kaydırılır."
    },
    "ru": {
      "intro": "Это не аэропортовый маршрут и не встреча рейса, а обычная междугородняя линия через середину острова: 105 километров от цитрусовой равнины Гюзельюрта до южного побережья в Лимассоле, около часа сорока. Одна машина везёт вас по обе стороны линии, а если вы возвращаетесь в тот же день, водитель может подождать.",
      "notes": [
        "Машина, взятая напрокат на севере, обычно не может пересечь линию, а страховка это редко покрывает. Именно на такой поездке люди на этом и спотыкаются.",
        "Паспорт нужен в обе стороны. Проверка занимает несколько минут в каждом направлении, из машины выходить не надо, с пассажиров ничего не берут.",
        "На двух сторонах разные валюты. В Лимассоле почти везде принимают карты, но немного наличных на каждой стороне упрощает день."
      ],
      "faq": [
        {
          "q": "Сколько ехать из Гюзельюрта в Лимассол на такси?",
          "a": "Около часа сорока минут на 105 километров плюс пункт пропуска. Цена согласуется до выезда и не меняется из-за пробок. Если нужно, чтобы машина подождала в Лимассоле и отвезла обратно, скажите заранее — это считается сразу."
        },
        {
          "q": "Можно ли доехать до Лимассола на арендованной на севере машине?",
          "a": "Как правило нет. Автомобили, арендованные по одну сторону линии, обычно нельзя перегонять на другую, а страховка переход редко покрывает. Частный трансфер снимает вопрос: одна машина, обе стороны, никаких бумаг с вашей стороны."
        }
      ],
      "returnIntro": "На обратном пути из Лимассола на север единственная фиксированная точка дня — пункт пропуска, остальное решаете вы. Договоритесь о месте и часе подачи до высадки, и Халит будет там. Если планы затянутся, просто напишите."
    }
  }
}

// Şablonun gördüğü tek tablo. İki dosya da aynı biçimde yazıldığı için birleşim
// düz bir yayma; çakışma olursa (aynı slug iki yerde) coast dosyası kazanır.
export const routeCopy = { ...routeCopyMain, ...routeCopyCoast }
