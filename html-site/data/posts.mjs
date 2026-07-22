// Blog yazıları — /blog/ sayfaları buradan üretilir.
// Yeni yazı eklemek için bu diziye bir kayıt ekleyip `npm run build` çalıştırman yeterli.
// body alanı HTML kabul eder; başlıklar için <h2>, paragraflar için <p> kullan.
// Yazılar tarihe göre yeniden eskiye sıralanır (date alanı ISO formatında: YYYY-MM-DD).
export const posts = [
  /* --- Bölge rehberleri: ana sayfadaki destinasyon kartları buraya bağlanır --- */
{
    slug: 'kyrenia-harbour-castle-old-town-guide',
    date: '2026-07-22',
    title: {
      en: 'Kyrenia Guide: Harbour, Castle, Abbey and Beaches',
      tr: 'Girne Rehberi: Liman, Kale, Manastır ve Plajlar',
      ru: 'Гид по Кирении: гавань, замок, аббатство и пляжи',
    },
    description: {
      en: 'What to see in Kyrenia: the old harbour, the castle and Shipwreck Museum, Bellapais Abbey, St Hilarion and the beaches — with timings and practical tips.',
      tr: "Girne'de ne görülür: eski liman, kale ve Batık Gemi Müzesi, Beylerbeyi Manastırı, Aziz Hilarion Kalesi ve plajlar — süreler ve pratik ipuçlarıyla.",
      ru: 'Что посмотреть в Кирении: старая гавань, замок и Музей затонувшего корабля, аббатство Беллапаис, Святой Иларион и пляжи — со временем и советами.',
    },
    body: {
      en: `
<p>Kyrenia (Girne) is the town most visitors to North Cyprus see first, and the one they come back to. A horseshoe harbour with a castle at one end, a mountain ridge behind it carrying two of the finest medieval buildings on the island, and beaches twenty minutes away in either direction. Here is what to see, how long each stop takes, and when to go.</p>
<h2>The old harbour</h2>
<p>The harbour is the heart of the town: a curved stone quay, fishing boats and gulets tied against it, and a row of former carob warehouses now working as restaurants and bars. It was a working port from antiquity until the 1970s, and the trade is still visible in the buildings — high doors, thick walls, small windows.</p>
<p>Allow an hour to walk it end to end, longer if you sit down. Late afternoon into sunset is the best light, and the quay is calmest before about eleven in the morning.</p>
<h2>Kyrenia Castle and the Shipwreck Museum</h2>
<p>The castle closes the eastern end of the harbour. Byzantine in origin, rebuilt by the Lusignans and reshaped by the Venetians into the squat artillery fort you see now, it is large enough for a proper walk — ramparts, a chapel, dungeons, and long views over the harbour and out to the Taurus mountains on a clear day.</p>
<p>Inside is the <strong>Shipwreck Museum</strong>, the single most important thing to see in Kyrenia. The Kyrenia ship is a Greek merchant vessel that sank off the coast in the fourth century BC and was recovered in the 1960s. What survives is the hull itself, conserved and displayed, with amphorae and almonds from the cargo — one of the oldest recovered trading ships anywhere.</p>
<p>Budget <strong>90 minutes to two hours</strong> for both. The ramparts are exposed, so go early or late in summer, and wear something with grip — the ramps and stairs are worn stone.</p>
<h2>Bellapais Abbey</h2>
<p>Five kilometres up the hill behind Kyrenia, in the village of Beylerbeyi, stands the Gothic abbey of Bellapais — a ruin, but a remarkably complete one: the cloister, the refectory with its rose window, and a terrace looking down over the coastal plain to the sea. The drive up takes about fifteen minutes on a road that is steep and narrow in places.</p>
<p>Allow <strong>an hour</strong>, plus a coffee in the village square under the tree Lawrence Durrell wrote about in <em>Bitter Lemons</em>. Concerts are sometimes held in the refectory in summer; check locally first.</p>
<h2>St Hilarion Castle</h2>
<p>St Hilarion sits on a crag above the Kyrenia pass, about twenty-five minutes from town. It climbs the mountain in three wards, and the top ward is a genuine ascent — several hundred uneven steps with drops beside them. The reward is a view across the whole northern coast and, in good weather, towards the Turkish mainland.</p>
<p>Allow <strong>two hours</strong> if you intend to reach the top, and take water. Above the second ward it is not suitable for anyone unsteady on stairs. The approach road passes through a military area, so photography is restricted along the way — signs make it clear where.</p>
<h2>The beaches</h2>
<ul>
  <li><strong>Escape Beach</strong> — about fifteen minutes west of town, sandy and organised, with loungers and food. The reliable choice for a full beach day with children.</li>
  <li><strong>Alagadi (Turtle Beach)</strong> — around twenty-five minutes east, a long protected stretch where loggerhead and green turtles nest in summer. Nesting sections are fenced and the beach closes at night in season. Conservation volunteers sometimes run evening walks; ask locally first.</li>
  <li><strong>Camelot Beach</strong> — west of Escape, quieter, a broad open bay with fewer facilities. Good when the organised beaches are busy.</li>
</ul>
<p>The sea here is usually calm from May to October, and there is little natural shade on any of the three.</p>
<h2>Planning a day around it</h2>
<p>A workable single day: castle and Shipwreck Museum in the morning, lunch at the harbour, St Hilarion in the afternoon, Bellapais at golden hour. Two days lets you add a beach. The roads up to Bellapais and St Hilarion are narrow and steep and parking at both is limited, which is why many visitors book a car with a driver for the day — the chauffeur waits at each stop, at a fare agreed before you set off.</p>
<h2>Frequently asked questions</h2>
<h3>How many days do you need in Kyrenia?</h3>
<p>Two full days covers the harbour, the castle and museum, Bellapais, St Hilarion and one beach without rushing. One day does the town plus a single hilltop site.</p>
<h3>What is the best time of year to visit?</h3>
<p>May, June, September and October give warm sea and manageable heat. In July and August the hilltop castles are best done before ten or after five.</p>
<h3>Can you walk to St Hilarion or Bellapais from Kyrenia?</h3>
<p>Not realistically. Both are uphill on roads with no pavement, and both need a car, a taxi or a driver for the day.</p>
<h3>How far is Kyrenia from Ercan Airport?</h3>
<p>About 40 to 45 minutes by road. Transfers run at a fixed price agreed in advance, with the flight tracked so a late landing does not cost you the car.</p>
<h3>Is Kyrenia Castle worth it if you only see one thing?</h3>
<p>Yes. The Shipwreck Museum inside it is the most significant single exhibit in North Cyprus, and the ramparts give you the best view of the harbour you will get.</p>
<p>Planning your days around Kyrenia? <a href="/en/routes/">See fixed transfer prices</a> or <a href="/en/book/">book a car and driver</a>.</p>`,
      tr: `
<p>Girne, Kuzey Kıbrıs'a gelenlerin çoğunun ilk gördüğü ve sonra tekrar döndüğü kasabadır. At nalı biçiminde bir liman, bir ucunda kale, arkasında adanın en güzel ortaçağ yapılarından ikisini taşıyan dağ sırtı ve iki yöne de yirmi dakika mesafede uzanan bir sahil. Temel duraklar bir buçuk günde görülür ama kasaba yavaşlığı ödüllendirir. İşte ne görülür, her durak ne kadar sürer ve ne zaman gidilir.</p>
<h2>Eski liman</h2>
<p>Liman kasabanın kalbidir: kavisli taş rıhtım, ona bağlı balıkçı tekneleri ve guletler, bir sıra eski keçiboynuzu deposu — bugün restoran ve bar olarak çalışıyor. Antik çağdan 1970'lere kadar işleyen bir limandı ve ticaretin biçimi yapılarda hâlâ okunuyor: yüksek kapılar, kalın duvarlar, küçük pencereler.</p>
<p>Baştan sona yürüyüp levhaları okumak için bir saat ayırın; oturursanız daha fazlası. En iyi ışık ikindiden gün batımına doğrudur ve rıhtım sabah on birden önce en sakin halindedir. Su kenarındaki masalar bir sokak arkadakilerden pahalıdır; ikisi de iyidir.</p>
<h2>Girne Kalesi ve Batık Gemi Müzesi</h2>
<p>Kale limanın doğu ucunu kapatır. Kökeni Bizans'tır, Lüzinyanlar yeniden inşa etmiş, Venedikliler ise bugün gördüğünüz basık, kalın duvarlı topçu kalesine dönüştürmüştür. İçinde gerçek bir yürüyüş yapacak kadar geniştir: surlar, şapel, zindanlar ve açık havada limanın üzerinden Toroslar'a uzanan manzara.</p>
<p>İçeride <strong>Batık Gemi Müzesi</strong> var ve Girne'de görülecek en önemli tek şey odur. Girne gemisi, MÖ dördüncü yüzyılda kıyı açıklarında batmış ve 1960'larda çıkarılmış bir Yunan ticaret gemisidir. Ayakta kalan şey, korunarak sergilenen teknenin kendisi ile yükünden kalan amforalar ve bademlerdir. Dünyada çıkarılmış en eski ticaret gemilerinden biridir.</p>
<p>Kale ve müze için birlikte <strong>90 dakika ile iki saat</strong> ayırın. Surlar açıktadır, yazın erken ya da geç saatte gidin ve tabanı tutan ayakkabı giyin — rampalar ve merdivenler aşınmış taştır.</p>
<h2>Beylerbeyi Manastırı</h2>
<p>Girne'nin arkasındaki yamaçta, beş kilometre yukarıda, Beylerbeyi köyünde Gotik Bellapais Manastırı durur. Bir harabedir ama olağanüstü eksiksiz bir harabe: revak, gül pencereli yemekhane ve doğrudan sahil ovasına, oradan denize bakan bir teras. Yukarı çıkış yaklaşık on beş dakika sürer, yol yer yer dik ve dardır.</p>
<p><strong>Bir saat</strong> ayırın; üstüne köy meydanında, Lawrence Durrell'in <em>Bitter Lemons</em> kitabında yazdığı ağacın altında bir kahve. Yaz aylarında yemekhanede zaman zaman konser düzenlenir; akşamınızı buna göre kurmadan önce yerel olarak teyit edin.</p>
<h2>Aziz Hilarion Kalesi</h2>
<p>Aziz Hilarion Kalesi, Girne geçidinin üzerindeki kayalıkta, kasabadan yaklaşık yirmi beş dakika uzaklıkta oturur. Dağ boyunca üç bölüm halinde yükselir ve en üst bölüm gerçek bir tırmanış ister: yüzlerce basamak, düzensiz ve uçurumlu. Karşılığı, tüm kuzey sahiline ve havanın iyi olduğu günlerde Türkiye kıyılarına doğru uzanan bir manzaradır.</p>
<p>Zirveye çıkmayı düşünüyorsanız <strong>iki saat</strong> ayırın ve su alın. İkinci bölümün üstü, merdivenlerde rahat olmayan kimse için uygun değildir; alt kademeler ise kolayca gezilir. Yaklaşım yolu askeri bölgeden geçtiği için güzergah boyunca fotoğraf çekimi kısıtlıdır; levhalar nerede olduğunu açıkça gösterir.</p>
<h2>Plajlar</h2>
<ul>
  <li><strong>Escape Beach</strong> — kasabanın yaklaşık on beş dakika batısında, kumlu ve düzenli; şezlong ve yemek var. Çocuklu tam gün plaj günü için güvenli seçim.</li>
  <li><strong>Alagadi (Kaplumbağa Plajı)</strong> — yaklaşık yirmi beş dakika doğuda, yazın caretta caretta ve yeşil deniz kaplumbağalarının yuvaladığı uzun, korumalı bir kum şeridi. Yuvalama bölümleri çitle ayrılır ve sezonda plaj geceleri kapanır. Koruma gönüllüleri bazen akşam turları düzenler; gidip beklemek yerine önceden sorun.</li>
  <li><strong>Camelot Plajı</strong> — Escape'in batısında, daha sakin, geniş açık bir koy ve daha az tesis. Düzenli plajlar kalabalıkken iyi bir seçenek.</li>
</ul>
<p>Bu sahilde deniz mayıstan ekime kadar genellikle sakindir. Üçünde de doğal gölge azdır; öğleden sonraya kalacaksanız yanınıza gölgelik alın.</p>
<h2>Günü nasıl kurmalı</h2>
<p>İşleyen bir tek gün planı: sabah kale ve Batık Gemi Müzesi, limanda öğle yemeği, öğleden sonra Aziz Hilarion, gün batımına yakın Beylerbeyi. İki gün, araya bir plaj ekleyip her şeyi yavaşlatmanızı sağlar. Beylerbeyi ve Aziz Hilarion yolları dar ve diktir, ikisinde de park yeri sınırlıdır; çoğu ziyaretçinin gün boyu şoförlü araç tutmasının sebebi budur — şoför her durakta bekler, park derdi tümden ortadan kalkar. Tam gün kiralamada ücret yola çıkmadan kararlaştırılır.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Girne için kaç gün gerekir?</h3>
<p>İki tam gün; limanı, kale ve müzeyi, Beylerbeyi'ni, Aziz Hilarion'u ve bir plajı acele etmeden kapsar. Bir gün, kasabanın kendisi artı tek bir tepe kalesi için yeterlidir.</p>
<h3>Yılın hangi zamanı daha iyi?</h3>
<p>Mayıs, haziran, eylül ve ekim; deniz ılık, sıcaklık ise yönetilebilir olur. Temmuz ve ağustosta tepe kalelerini sabah ondan önce ya da öğleden sonra beşten sonra gezmek daha akıllıcadır.</p>
<h3>Aziz Hilarion'a ya da Beylerbeyi'ne Girne'den yürünür mü?</h3>
<p>Gerçekçi değil. İkisi de yokuş yukarı ve kaldırımsız yollarda. Beylerbeyi kısa bir araç yolculuğu, Aziz Hilarion ise dağ yolunda daha uzun bir yolculuktur; ikisi için de araç, taksi ya da gün boyu şoför gerekir.</p>
<h3>Girne, Ercan Havalimanı'na ne kadar uzakta?</h3>
<p>Karayoluyla yaklaşık 40-45 dakika. Transferler önceden kararlaştırılan sabit fiyatla yapılır ve uçuş takip edilir; geç iniş aracınıza mal olmaz.</p>
<h3>Tek bir yer görecek olsam Girne Kalesi değer mi?</h3>
<p>Evet. İçindeki Batık Gemi Müzesi Kuzey Kıbrıs'ın en önemli tek sergisidir ve surlar limanın görebileceğiniz en iyi manzarasını verir.</p>
<p>Günlerinizi Girne çevresinde mi kuruyorsunuz? <a href="/tr/routes/">Sabit transfer fiyatlarına bakın</a> ya da <a href="/tr/book/">şoförlü araç ayırtın</a>.</p>`,
      ru: `
<p>Кирения (Гирне) — город, который большинство гостей Северного Кипра видят первым и куда чаще всего возвращаются. Подковообразная гавань с замком на одном конце, горный хребет за спиной, несущий два лучших средневековых сооружения острова, и побережье с пляжами в двадцати минутах в обе стороны. Основное можно охватить за полтора дня, но город вознаграждает неспешность. Вот что смотреть, сколько времени занимает каждая остановка и когда ехать.</p>
<h2>Старая гавань</h2>
<p>Гавань — сердце города: изогнутая каменная набережная, пришвартованные рыбацкие лодки и гулеты, ряд бывших складов рожкового дерева, которые теперь работают как рестораны и бары. Порт действовал с античности до 1970-х годов, и форма прежней торговли до сих пор читается в зданиях: высокие двери, толстые стены, маленькие окна.</p>
<p>Заложите час, чтобы пройти набережную из конца в конец и прочитать таблички, больше — если сядете за стол. Лучший свет с позднего дня до заката, а тише всего на причале примерно до одиннадцати утра. Столики у самой воды дороже, чем в улочке кварталом выше; хороши и те и другие.</p>
<h2>Киренийский замок и Музей затонувшего корабля</h2>
<p>Замок закрывает восточный конец гавани. Византийский по происхождению, перестроенный Лузиньянами и затем превращённый венецианцами в приземистый артиллерийский форт с толстыми стенами, он достаточно велик для настоящей прогулки: крепостные стены, часовня, подземелья и дальние виды на гавань, а в ясный день — на Таврские горы.</p>
<p>Внутри находится <strong>Музей затонувшего корабля</strong>, и это самое важное, что стоит увидеть в Кирении. Киренийский корабль — греческое торговое судно, затонувшее у побережья в четвёртом веке до нашей эры и поднятое в 1960-х. Сохранился сам корпус, законсервированный и выставленный, вместе с амфорами и миндалём из груза. Это одно из старейших поднятых торговых судов в мире.</p>
<p>На замок и музей вместе заложите <strong>от 90 минут до двух часов</strong>. Стены открыты солнцу, поэтому летом идите рано или поздно, и обуйтесь во что-то нескользящее: пандусы и лестницы из стёртого камня.</p>
<h2>Аббатство Беллапаис</h2>
<p>В пяти километрах вверх по склону за Киренией, в деревне Бейлербейи, стоит готическое аббатство Беллапаис. Это руина, но на редкость целая: клуатр, трапезная с розовым окном и терраса с видом прямо вниз, через прибрежную равнину к морю. Подъём занимает около пятнадцати минут, дорога местами крутая и узкая.</p>
<p>Отведите <strong>час</strong> плюс время на кофе на деревенской площади под деревом, о котором писал Лоуренс Даррелл в книге <em>Горькие лимоны</em>. Летом в трапезной иногда проходят концерты; уточните на месте, прежде чем строить вечер вокруг этого.</p>
<h2>Замок Святого Илариона</h2>
<p>Святой Иларион стоит на скале над Киренийским перевалом, примерно в двадцати пяти минутах от города. Он поднимается по горе тремя ярусами, и верхний ярус требует настоящего подъёма: несколько сотен неровных ступеней с обрывами. Награда — вид на всё северное побережье, а в хорошую погоду почти до турецкого берега.</p>
<p>Если собираетесь наверх, заложите <strong>два часа</strong> и возьмите воду. Выше второго яруса место не подходит тем, кто неуверенно чувствует себя на лестницах, зато нижние уровни проходятся спокойно. Подъездная дорога идёт через военную зону, поэтому фотосъёмка вдоль неё ограничена — знаки ясно показывают где.</p>
<h2>Пляжи</h2>
<ul>
  <li><strong>Escape Beach</strong> — примерно в пятнадцати минутах к западу от города, песчаный и организованный, с лежаками и едой. Надёжный выбор для целого пляжного дня с детьми.</li>
  <li><strong>Алагади (Черепаший пляж)</strong> — около двадцати пяти минут к востоку, длинная охраняемая полоса песка, где летом гнездятся головастые и зелёные черепахи. Гнездовые участки огорожены, и в сезон пляж закрыт ночью. Волонтёры-натуралисты иногда водят вечерние прогулки; лучше спросить заранее, чем приехать в расчёте на них.</li>
  <li><strong>Camelot Beach</strong> — западнее Escape, тише, с широкой открытой бухтой и меньшим числом удобств. Хорош, когда организованные пляжи заполнены.</li>
</ul>
<p>С мая по октябрь море на этом побережье обычно спокойное. Естественной тени почти нет ни на одном из трёх пляжей, так что берите с собой укрытие, если останетесь после полудня.</p>
<h2>Как собрать день</h2>
<p>Рабочий вариант на один день: утром замок и Музей затонувшего корабля, обед в гавани, днём Святой Иларион, к закату Беллапаис. Два дня позволяют добавить пляж и сбавить темп. Дороги к Беллапаису и Святому Илариону узкие и крутые, парковка у обоих ограничена — поэтому многие берут машину с водителем на весь день: шофёр ждёт на каждой остановке, а парковка перестаёт быть вашей заботой. Цена дневной аренды согласуется до выезда.</p>
<h2>Частые вопросы</h2>
<h3>Сколько дней нужно на Кирению?</h3>
<p>Двух полных дней хватает на гавань, замок с музеем, Беллапаис, Святой Иларион и один пляж без спешки. Одного дня достаточно на сам город плюс один замок в горах.</p>
<h3>Когда лучше приезжать?</h3>
<p>Май, июнь, сентябрь и октябрь дают тёплое море и переносимую жару. В июле и августе горные замки лучше осматривать до десяти утра или после пяти вечера.</p>
<h3>Можно ли дойти пешком до Святого Илариона или Беллапаиса?</h3>
<p>Реально — нет. Оба вверх по склону и по дорогам без тротуара. До Беллапаиса — короткая поездка, до Святого Илариона — длиннее и по горной дороге; в обоих случаях нужна машина, такси или водитель на день.</p>
<h3>Далеко ли Кирения от аэропорта Эрджан?</h3>
<p>Около 40-45 минут по дороге. Трансферы идут по фиксированной цене, согласованной заранее, с отслеживанием рейса, так что задержка не стоит вам машины.</p>
<h3>Стоит ли Киренийский замок посещения, если время только на одно место?</h3>
<p>Да. Музей затонувшего корабля внутри — самый значимый экспонат Северного Кипра, а со стен открывается лучший вид на гавань.</p>
<p>Строите маршрут по Кирении? <a href="/ru/routes/">Смотрите фиксированные цены на трансфер</a> или <a href="/ru/book/">закажите машину с водителем</a>.</p>`,
    },
  },
  {
    slug: 'karpaz-golden-beach-guide',
    date: '2026-07-22',
    title: {
      en: 'Karpaz Peninsula Guide: Golden Beach and the Wild North',
      tr: 'Karpaz Rehberi: Altınkum Plajı ve Yabani Kuzey',
      ru: 'Гид по Карпасу: Золотой пляж и дикий север',
    },
    description: {
      en: 'A full-day guide to the Karpaz peninsula: Golden Beach, the wild donkeys, Apostolos Andreas Monastery, Dipkarpaz and the ruins near Yeni Erenköy.',
      tr: "Karpaz yarımadası için tam gün rehberi: Altınkum Plajı, yabani eşekler, Apostolos Andreas Manastırı, Dipkarpaz ve Yeni Erenköy yakınındaki kalıntılar.",
      ru: 'Гид на целый день по полуострову Карпас: Золотой пляж, дюны, дикие ослы, монастырь Апостола Андрея, деревня Дипкарпаз и руины у Йени Эренкёя.',
    },
    body: {
      en: `
<p>The Karpaz is the long finger of land running north-east off the top of Cyprus, and the emptiest part of the island. No resorts, almost no development, a single road down the spine, and at the end of it a beach that has stayed the way beaches used to be. It is a full day out from anywhere and needs planning, because past Dipkarpaz the facilities stop. Here is what is there and how to do it properly.</p>
<h2>Golden Beach (Altınkum)</h2>
<p>Golden Beach is a long run of pale sand backed by dunes, near the far end of the peninsula. There are no hotels behind it and no promenade — a handful of simple beach huts and small restaurants sit at the access points, and the rest is open sand. The dunes behind shift, hold scrub and in places rise several metres.</p>
<p>The water shelves gently and is usually calm from May through October. There is no lifeguard, no shade beyond what you bring, and the sand gets genuinely hot by midday. Allow <strong>two to three hours</strong> for a swim and a walk, which is the point of coming.</p>
<h2>The wild donkeys</h2>
<p>The Karpaz donkeys descend from working animals released decades ago and now roam free across the peninsula. You will meet them on the road in small groups, often standing exactly where you want to drive, and they are used to cars.</p>
<ul>
  <li><strong>Slow right down</strong> when you see them; they do not move predictably.</li>
  <li><strong>Do not feed them.</strong> It teaches them to crowd cars and makes them ill.</li>
  <li><strong>Keep windows up</strong> if you have food inside.</li>
  <li><strong>Do not get between a jenny and her foal</strong> — these are wild animals, not pets.</li>
</ul>
<h2>Apostolos Andreas Monastery</h2>
<p>Near the tip of the peninsula, at Zafer Burnu, stands the monastery of Apostolos Andreas. It has been a pilgrimage site for centuries and remains one for Cypriots of both communities. A restoration completed in recent years brought the church back into good order.</p>
<p>Allow <strong>45 minutes to an hour</strong>. Dress as you would for any working church — covered shoulders and knees. Beyond it the road runs a short way to the cape itself, the north-easternmost point of Cyprus, where the coast breaks into rocks and islets.</p>
<h2>Dipkarpaz village</h2>
<p>Dipkarpaz (Rizokarpaso) is the last real village on the peninsula and the last place with a shop, a petrol station and somewhere to eat. It is also one of the few villages in the north with a continuous Greek Cypriot population, which is why a church and a mosque are both in use in the same small place.</p>
<h2>Ayfilon and Aphendrika near Yeni Erenköy</h2>
<p>East of Yeni Erenköy the coast holds two sets of ruins most visitors drive straight past. <strong>Ayfilon (Agios Philon)</strong> is a ruined basilica standing alone above a small harbour, with mosaic fragments and a single palm, on the site of ancient Karpasia. A few kilometres on, <strong>Aphendrika</strong> spreads across open ground: three ruined churches and the remains of a city classical writers list among the more important towns of Cyprus. Neither is well signposted; both are unfenced and free to walk.</p>
<p>Allow <strong>an hour for both</strong>, more if you like ruins with nobody else present.</p>
<h2>Getting there and why it is a full day</h2>
<ul>
  <li><strong>From Kyrenia:</strong> roughly 2 hours 30 minutes to 3 hours each way to Golden Beach</li>
  <li><strong>From Famagusta:</strong> roughly 2 hours each way</li>
  <li><strong>From Ercan Airport:</strong> roughly 2 hours 15 minutes to 2 hours 30 minutes</li>
  <li><strong>From İskele or Bafra:</strong> roughly 1 hour 30 minutes</li>
</ul>
<p>Add stops and you are looking at eight to ten hours door to door, which is why the Karpaz does not work as a half-day.</p>
<h2>Practical warnings</h2>
<p><strong>Fuel up before Dipkarpaz.</strong> Beyond the village there is no petrol station, no pharmacy and no cash machine, and mobile signal is patchy in the dunes and on parts of the coast road. Carry more water than you think you need and do not rely on finding lunch open out of season — several beach restaurants run summer hours only. Roads here are surfaced but narrow, with livestock on them, and driving after dark is best avoided.</p>
<p>Because of the distance, many visitors take the Karpaz as a full-day hire with a driver: one fixed price agreed in advance, the chauffeur waiting at the monastery and the beach, and nobody facing three hours at the wheel after a day in the sun.</p>
<h2>Frequently asked questions</h2>
<h3>Can you visit the Karpaz in half a day?</h3>
<p>No. From Kyrenia the driving alone is five to six hours return. Plan a full day and leave early.</p>
<h3>Is Golden Beach suitable for children?</h3>
<p>The water shelves gently and is usually calm, which suits families, but there is no lifeguard and very little shade. Bring shade, water and sun cover.</p>
<h3>Where are the wild donkeys?</h3>
<p>Along the main road, mostly between Dipkarpaz and the monastery. You do not need to look for them — they find the cars. Slow down and do not feed them.</p>
<h3>Is there anywhere to eat and refuel out there?</h3>
<p>Dipkarpaz is the last village with a petrol station, a shop and reliable food. A few simple restaurants open near Golden Beach in summer, but do not plan around them.</p>
<h3>Do you need a four-wheel drive?</h3>
<p>Not for the main road or the marked access points. Some tracks down to the dunes are soft sand; an ordinary car is better left at the top.</p>
<p>Planning a day on the peninsula? <a href="/en/routes/">See fixed prices</a> or <a href="/en/book/">book a full-day car and driver</a>.</p>`,
      tr: `
<p>Karpaz, Kıbrıs'ın kuzeydoğusuna doğru uzanan uzun parmak biçimli topraktır ve adanın en boş bölgesidir. Tatil köyü yok, neredeyse hiç yapılaşma yok, sırt boyunca tek bir yol var ve yolun sonunda plajların eskiden olduğu gibi kalmış bir plajı. Nereden giderseniz gidin tam gün süren bir gezidir ve planlama ister; çünkü Dipkarpaz'ı geçtikten sonra tesisler biter. İşte orada ne var ve nasıl düzgün yapılır.</p>
<h2>Altınkum Plajı</h2>
<p>Altınkum, yarımadanın uç kısmına yakın, kumullarla çevrili uzun ve açık renkli bir kum şerididir. Arkasında otel yok, sahil yürüyüş yolu yok; giriş noktalarında birkaç basit plaj kulübesi ve küçük lokanta var, gerisi açık kum. Arkadaki kumullar hareket eder, çalı tutar ve yer yer birkaç metre yükselir.</p>
<p>Deniz yumuşak eğimlidir ve mayıstan ekime kadar genellikle sakindir. Cankurtaran yok, yanınızda getirdiğiniz ya da kulübelerin sunduğu dışında gölge yok ve kum öğleye doğru gerçekten ısınır. Doğru düzgün bir yüzme ve kum boyunca bir yürüyüş için <strong>iki üç saat</strong> ayırın; buraya gelmenin sebebi zaten bu.</p>
<h2>Karpaz eşekleri</h2>
<p>Karpaz eşekleri, onlarca yıl önce serbest bırakılmış çalışma hayvanlarının torunlarıdır ve bugün yarımada boyunca özgürce dolaşırlar. Onlarla yolda karşılaşırsınız; genellikle küçük gruplar halinde, çoğu zaman tam da geçmek istediğiniz yerde dururlar. Araçlara alışkındırlar ve camlara yaklaşırlar.</p>
<ul>
  <li>Gördüğünüzde <strong>hızınızı iyice düşürün</strong>; hareketleri tahmin edilebilir değildir.</li>
  <li><strong>Yem vermeyin.</strong> Bu onlara araçların etrafını sarmayı öğretir ve hasta eder.</li>
  <li>İçeride yiyecek varsa <strong>camları kapalı tutun</strong>. İçeri uzanırlar.</li>
  <li><strong>Anne ile yavrunun arasına girmeyin</strong> — bunlar evcil değil, yabani hayvanlardır.</li>
</ul>
<h2>Apostolos Andreas Manastırı</h2>
<p>Yarımadanın ucuna yakın, Zafer Burnu'nda Apostolos Andreas Manastırı bulunur. Yüzyıllardır bir hac yeri olmuştur ve her iki toplumdan Kıbrıslılar için hâlâ öyledir. Son yıllarda tamamlanan kapsamlı restorasyon, uzun bir ihmalin ardından kiliseyi ve yapılarını tekrar iyi duruma getirdi.</p>
<p><strong>45 dakika ile bir saat</strong> ayırın. İbadete açık herhangi bir kiliseye gider gibi giyinin — omuzlar ve dizler kapalı. Manastırın ötesinde yol kısa bir mesafe daha, Kıbrıs'ın en kuzeydoğu noktası olan burnun kendisine kadar devam eder; orada kıyı kayalıklara ve küçük adacıklara bölünür.</p>
<h2>Dipkarpaz köyü</h2>
<p>Dipkarpaz, yarımadadaki son gerçek köy ve dükkânı, benzin istasyonu ve yemek yenecek yeri olan son yerdir. Aynı zamanda kuzeyde kesintisiz Kıbrıslı Rum nüfusu bulunan az sayıdaki köyden biridir; bu yüzden aynı küçük yerleşimde hem kullanılan bir kilise hem bir cami görürsünüz. İhtiyacınız olduğunu düşünseniz de düşünmeseniz de yakıt ve yemek için burada durun.</p>
<h2>Yeni Erenköy yakınında Ayfilon ve Aphendrika</h2>
<p>Yeni Erenköy'ün doğusunda, çoğu ziyaretçinin yanından geçip gittiği iki kalıntı grubu vardır. <strong>Ayfilon (Agios Philon)</strong>, küçük bir limanın üzerinde tek başına duran yıkık bir bazilikadır; mozaik parçaları ve tek bir palmiye ile — antik Karpasia'nın yeri. Birkaç kilometre ötede <strong>Aphendrika</strong> açık araziye yayılır: üç yıkık kilise ve klasik yazarların Kıbrıs'ın önemli kentleri arasında saydığı bir şehrin kalıntıları. İkisi de iyi işaretlenmemiştir. İkisi de açık, çitsiz ve ücretsiz gezilir.</p>
<p>İkisi için birlikte <strong>bir saat</strong> ayırın; kimsenin olmadığı kalıntılarda dolaşmayı seviyorsanız daha fazla — ki genellikle kimse olmaz.</p>
<h2>Nasıl gidilir ve neden tam gün sürer</h2>
<ul>
  <li><strong>Girne'den:</strong> Altınkum'a tek yön yaklaşık 2 saat 30 dakika - 3 saat</li>
  <li><strong>Gazimağusa'dan:</strong> tek yön yaklaşık 2 saat</li>
  <li><strong>Ercan Havalimanı'ndan:</strong> yaklaşık 2 saat 15 dakika - 2 saat 30 dakika</li>
  <li><strong>İskele ya da Bafra'dan:</strong> yaklaşık 1 saat 30 dakika</li>
</ul>
<p>Duraklar eklendiğinde kapıdan kapıya sekiz on saatlik bir gün çıkar. Aritmetik bu kadar dürüsttür ve Karpaz'ın neden yarım günlük bir gezi olmadığını açıklar.</p>
<h2>Pratik uyarılar</h2>
<p><strong>Dipkarpaz'dan önce depoyu doldurun.</strong> Köyün ötesinde benzin istasyonu, eczane ve ATM yoktur; kumullarda ve sahil yolunun bazı bölümlerinde telefon çekmez. Gerekeceğini düşündüğünüzden fazla su taşıyın, gölgenizi yanınızda götürün ve sezon dışında açık bir lokanta bulmaya güvenmeyin — plaj lokantalarının birçoğu yalnızca yaz saatlerinde çalışır. Yarımadadaki yollar asfalttır ama dardır, üzerlerinde küçükbaş hayvan ve eşek bulunur; hava karardıktan sonra araç kullanmaktan kaçının.</p>
<p>Mesafe ve günün uzunluğu yüzünden çoğu ziyaretçi Karpaz'ı gün boyu şoförlü araçla yapar: önceden kararlaştırılmış tek bir sabit fiyat, manastırda ve plajda bekleyen bir şoför ve güneşte geçen bir günün ardından üç saat direksiyon başında kalmama rahatlığı.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Karpaz yarım günde gezilir mi?</h3>
<p>Hayır. Girne'den yalnızca yol gidiş-dönüş beş altı saattir. Tam gün planlayın, erken çıkın ve Dipkarpaz öncesindeki her şeyi hedef değil ikramiye olarak görün.</p>
<h3>Altınkum çocuklar için uygun mu?</h3>
<p>Deniz yumuşak eğimli ve genellikle sakindir, bu da aileler için iyidir; ama cankurtaran yok ve gölge çok az. Gölgelik, su ve güneş koruması götürün, rüzgâr varsa denizden gözünüzü ayırmayın.</p>
<h3>Yabani eşekler nerede?</h3>
<p>Yarımadanın ana yolu boyunca, çoğunlukla Dipkarpaz ile manastır arasında. Aramanıza gerek yok — onlar araçları bulur. Yavaşlayın ve yem vermeyin.</p>
<h3>Orada yemek yenecek ve yakıt alınacak yer var mı?</h3>
<p>Dipkarpaz, benzin istasyonu, dükkânı ve güvenilir yemeği olan son köydür. Altınkum yakınında yazın birkaç basit lokanta çalışır ama günü onların açık olacağına göre kurmayın.</p>
<h3>Dört çeker araç gerekir mi?</h3>
<p>Ana yol ve işaretli giriş noktaları için gerekmez; bunlar asfalt ya da sıkı zeminlidir. Kumullara inen bazı patikalar gevşek kumdur; sıradan bir aracı yukarıda bırakıp yürüyerek inmek daha doğrudur.</p>
<p>Yarımadada bir gün mü planlıyorsunuz? <a href="/tr/routes/">Sabit fiyatlara bakın</a> ya da <a href="/tr/book/">tam gün şoförlü araç ayırtın</a>.</p>`,
      ru: `
<p>Карпас — длинный палец суши, уходящий на северо-восток от верхушки Кипра, и самая пустая часть острова. Ни курортов, ни почти никакой застройки, одна дорога вдоль хребта, а в конце неё пляж, оставшийся таким, какими пляжи были раньше. Откуда бы вы ни ехали, это поездка на целый день, и она требует подготовки: за Дипкарпазом инфраструктура заканчивается. Вот что там есть и как сделать это правильно.</p>
<h2>Золотой пляж (Алтынкум)</h2>
<p>Золотой пляж — длинная полоса светлого песка с дюнами за спиной, ближе к дальнему концу полуострова. За ним нет отелей и набережной: у точек выхода стоят несколько простых пляжных хижин и маленьких ресторанов, всё остальное — открытый песок. Дюны позади подвижны, держат кустарник и местами поднимаются на несколько метров.</p>
<p>Дно уходит полого, море с мая по октябрь обычно спокойное. Спасателей нет, тени нет, кроме той, что вы привезли или дают хижины, и песок к полудню становится по-настоящему горячим. На нормальное купание и прогулку вдоль воды заложите <strong>два-три часа</strong> — ради этого сюда и едут.</p>
<h2>Дикие ослы</h2>
<p>Ослы Карпаса — потомки рабочих животных, отпущенных десятилетия назад, и сегодня они свободно бродят по всему полуострову. Вы встретите их на дороге, обычно небольшими группами, часто ровно там, где вам надо проехать. Они привыкли к машинам и подходят к окнам.</p>
<ul>
  <li><strong>Сильно сбавляйте скорость</strong>, когда видите их: они двигаются непредсказуемо.</li>
  <li><strong>Не кормите их.</strong> Это приучает их толпиться у машин и вредит их здоровью.</li>
  <li><strong>Держите окна закрытыми</strong>, если в салоне есть еда. Они заглядывают внутрь.</li>
  <li><strong>Не вставайте между ослицей и жеребёнком</strong> — это дикие животные, а не домашние.</li>
</ul>
<h2>Монастырь Апостола Андрея</h2>
<p>Недалеко от оконечности полуострова, у мыса Зафер Бурну, стоит монастырь Апостола Андрея. Веками он был местом паломничества и остаётся им для киприотов обеих общин. Завершённая в последние годы масштабная реставрация вернула храм и его постройки в порядок после долгого запустения.</p>
<p>Заложите <strong>45 минут — час</strong>. Одевайтесь как для действующего храма: закрытые плечи и колени. За монастырём дорога идёт ещё немного до самого мыса, северо-восточной оконечности Кипра, где берег распадается на скалы и мелкие островки.</p>
<h2>Деревня Дипкарпаз</h2>
<p>Дипкарпаз (Ризокарпасо) — последняя настоящая деревня на полуострове и последнее место с магазином, заправкой и едой. Это также одна из немногих деревень севера с непрерывно живущим греко-кипрским населением, поэтому в одном небольшом селении вы увидите действующие церковь и мечеть. Остановитесь здесь за топливом и обедом, даже если кажется, что не нужно.</p>
<h2>Айфилон и Афендрика у Йени Эренкёя</h2>
<p>К востоку от Йени Эренкёя на побережье лежат две группы руин, мимо которых большинство проезжает не останавливаясь. <strong>Айфилон (Агиос Филон)</strong> — разрушенная базилика, стоящая в одиночестве над маленькой гаванью, с фрагментами мозаик и одной пальмой; это место древней Карпасии. Ещё несколькими километрами дальше <strong>Афендрика</strong> раскинулась по открытой земле: три разрушенные церкви и остатки города, который античные авторы называли среди значимых городов Кипра. Ни то ни другое не обозначено толком. Оба места открыты, не огорожены и бесплатны.</p>
<p>На оба заложите <strong>час</strong>, больше — если вам нравится бродить по руинам в полном одиночестве, что здесь обычное дело.</p>
<h2>Как добраться и почему это целый день</h2>
<ul>
  <li><strong>Из Кирении:</strong> примерно 2 ч 30 мин — 3 часа в одну сторону до Золотого пляжа</li>
  <li><strong>Из Фамагусты:</strong> примерно 2 часа в одну сторону</li>
  <li><strong>Из аэропорта Эрджан:</strong> примерно 2 ч 15 мин — 2 ч 30 мин</li>
  <li><strong>Из Искеле или Бафры:</strong> примерно 1 ч 30 мин</li>
</ul>
<p>Добавьте остановки — и получится восемь-десять часов от двери до двери. Это честная арифметика, и именно поэтому Карпас не помещается в полдня.</p>
<h2>Практические предупреждения</h2>
<p><strong>Заправляйтесь до Дипкарпаза.</strong> За деревней нет ни заправки, ни аптеки, ни банкомата, а связь в дюнах и на отдельных участках прибрежной дороги неустойчивая. Возьмите воды больше, чем кажется нужным, привезите свою тень и не рассчитывайте найти открытый обед вне сезона — многие пляжные рестораны работают только летом. Дороги на полуострове асфальтированы, но узкие, на них выходит скот и ослы, а ездить после темноты лучше не стоит.</p>
<p>Из-за расстояния и длины дня многие берут Карпас как дневную аренду с водителем: одна фиксированная цена, согласованная заранее, шофёр, ожидающий у монастыря и на пляже, и никакой необходимости провести три часа за рулём после дня на солнце.</p>
<h2>Частые вопросы</h2>
<h3>Можно ли осмотреть Карпас за полдня?</h3>
<p>Нет. Из Кирении одна только дорога занимает пять-шесть часов туда и обратно. Планируйте полный день, выезжайте рано и считайте всё до Дипкарпаза бонусом, а не целью.</p>
<h3>Подходит ли Золотой пляж для детей?</h3>
<p>Дно уходит полого, море обычно спокойное — это удобно для семей, но спасателей нет и тени почти нет. Берите тень, воду и защиту от солнца, а при ветре не спускайте глаз с моря.</p>
<h3>Где искать диких ослов?</h3>
<p>Вдоль главной дороги полуострова, в основном между Дипкарпазом и монастырём. Искать их не нужно — они сами находят машины. Сбавьте скорость и не кормите их.</p>
<h3>Есть ли там где поесть и заправиться?</h3>
<p>Дипкарпаз — последняя деревня с заправкой, магазином и надёжной едой. Летом у Золотого пляжа работают несколько простых ресторанов, но не стройте день на том, что они будут открыты.</p>
<h3>Нужен ли полный привод?</h3>
<p>Для главной дороги и обозначенных подъездов — нет, они с покрытием или плотные. Часть колей к дюнам идёт по рыхлому песку; обычную машину лучше оставить наверху и спуститься пешком.</p>
<p>Планируете день на полуострове? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">закажите машину с водителем на весь день</a>.</p>`,
    },
  },
{
    slug: 'famagusta-beaches-old-city-guide',
    date: '2026-07-22',
    title: {
      en: 'Famagusta Guide: Old City, Salamis and the Beaches',
      tr: 'Gazimağusa Rehberi: Surlariçi, Salamis ve Plajlar',
      ru: 'Фамагуста: старый город, Саламин и пляжи залива',
    },
    description: {
      en: 'A walking guide to Famagusta: the walled old city, Othello Castle, Salamis and the Royal Tombs, St Barnabas, and the beaches of Famagusta Bay.',
      tr: "Gazimağusa gezi rehberi: surlariçi, Othello Kalesi, Salamis Harabeleri ve Kral Mezarları, St. Barnabas Manastırı ve Mağusa Körfezi plajları.",
      ru: 'Гид по Фамагусте: старый город в венецианских стенах, замок Отелло, руины Саламина, Царские гробницы, монастырь Святого Варнавы и пляжи залива.',
    },
    body: {
      en: `
<p>Famagusta (Gazimağusa) rewards a slow day. Inside the Venetian walls you walk from a Gothic cathedral turned mosque to a sea castle in about fifteen minutes, and ten minutes up the coast the ruined Roman city of Salamis runs down to an empty beach. It is the densest concentration of history in North Cyprus, and it is hot, open and short on shade. Here is a walking order for the old city, what lies outside it, and how to time the day.</p>
<h2>The walled old city, in walking order</h2>
<p>Start at the <strong>Land Gate and the Ravelin</strong> on the western side, the bastion the Venetians rebuilt as the main landward defence. Climbing it first gives you the shape of everything else — the walls, the roofs, the sea. Then walk east to the centre.</p>
<p>You come out in the square before the <strong>Lala Mustafa Pasha Mosque</strong>, the former Cathedral of St Nicholas: a French Gothic cathedral begun in the fourteenth century, where the Lusignan kings were crowned kings of Jerusalem. A minaret was added to one tower after 1571 and it has been a mosque since. The west front, with its three portals and rose window, is the finest architecture on the island. Visit outside prayer times, and remove shoes at the door.</p>
<p>Around the square sit the Venetian loggia, the <strong>Namık Kemal dungeon</strong> and cafes under trees — the one properly shaded spot in the old city, so break here.</p>
<p>Walk north-east to <strong>Othello Castle</strong>, the Lusignan citadel the Venetians reshaped, named for the Shakespeare play set in a port of Cyprus. Inside is mostly bare stone, but the great hall is cool and the ramparts look down into the harbour.</p>
<p>Loop back through the roofless Gothic churches between the houses — the largest survivor is the <strong>Sinan Pasha Mosque</strong>, formerly St Peter and St Paul — and leave by the <strong>Sea Gate</strong>, with its Venetian lion.</p>
<h2>Salamis and the Royal Tombs</h2>
<p>About ten minutes north, <strong>Salamis</strong> is the ruined capital of ancient Cyprus, spread over pine and sand down to the shore. The gymnasium with its colonnade and statues, the Roman theatre, the baths and the basilicas are the set pieces. The site is large, flat and almost unshaded: allow two hours, take water, and wear real shoes for the broken paving.</p>
<p>A short drive inland are the <strong>Royal Tombs</strong>, the burial ground of Salamis, where chariots and horses were buried in the entrance ramps of the chamber tombs. Smaller and quieter than the main site.</p>
<h2>St Barnabas Monastery</h2>
<p>Close by, the <strong>Monastery of St Barnabas</strong> stands over the traditional tomb of the apostle. The buildings hold an icon collection and an archaeological collection around a courtyard with palms and a well — small, shaded and cool.</p>
<h2>The beaches of Famagusta Bay</h2>
<p>The bay curves north from the city in a long line of sand. Three stretches are the ones people use:</p>
<ul>
  <li><strong>Glapsides Beach</strong> — closest to town, wide and sandy, with beach clubs and food. Busy at weekends.</li>
  <li><strong>Silver Beach</strong> — beside the Salamis site, quieter, shallow water and a simple beach restaurant. Good for ruins in the morning and a swim after.</li>
  <li><strong>Palm Beach</strong> — at the southern end of the bay, next to the fenced quarter of Varosha (Kapalı Maraş), with the empty high-rises behind the sand.</li>
</ul>
<p><strong>Varosha</strong> is a fenced-off district of Famagusta, closed since 1974. Part of it has been opened to visitors, who may walk or cycle along marked routes through some of the streets; the rest remains behind the fence.</p>
<h2>Timing, heat and shade</h2>
<p>From May to September, do the open sites early. Salamis and the walls are best before about eleven; the narrow streets keep some shade until midday, and the monastery and museums are comfortable at any hour. Between roughly one and four, be on a beach or indoors.</p>
<p>A full day covering the old city, Salamis and a beach is a lot of moving in the heat. Many visitors from Kyrenia, Long Beach or Nicosia book a car for the day: the chauffeur drops you at the Land Gate, collects you at the Sea Gate and runs you out to Salamis and the beach, at a fixed price.</p>
<h2>Frequently asked questions</h2>
<h3>How long do I need in Famagusta?</h3>
<p>A half day covers the walled city on foot. A full day adds Salamis, the Royal Tombs, St Barnabas and a swim in the bay.</p>
<h3>Can you walk around the old city?</h3>
<p>Yes, and it is the best way to see it. The walled area is compact and flat, and the main sights are about fifteen minutes apart on foot. Bring shoes with grip for the old stone.</p>
<h3>Can visitors go into Varosha?</h3>
<p>Part of the quarter is open on foot and by bicycle along marked routes. The rest stays behind the fence, and entering the buildings is not permitted.</p>
<h3>Is there shade at Salamis?</h3>
<p>Very little — open ground with pines only at the edges. Go early or late, carry water and use a hat.</p>
<h3>What is the easiest way to reach Famagusta?</h3>
<p>By road — roughly 45 minutes from Ercan Airport, about an hour from Kyrenia and around 20 minutes from Long Beach. A full-day hire keeps the same chauffeur with you between the sites.</p>
<p>Planning a day in Famagusta? <a href="/en/routes/">See fixed prices</a> or <a href="/en/book/">book a car for the day</a>.</p>`,
      tr: `
<p>Gazimağusa yavaş geçirilen bir günü hak eder. Venedik surlarının içinde, camiye dönüştürülmüş Gotik bir katedralden deniz kenarındaki bir kaleye yaklaşık on beş dakikada yürürsünüz; kıyıdan on dakika kuzeyde ise antik Salamis kenti harabeleri boş bir kumsala kadar iner. Kuzey Kıbrıs'ın tarih bakımından en yoğun noktasıdır ve yılın büyük bölümünde sıcak, açık ve gölgesizdir. Bu rehber surlariçi için mantıklı bir yürüyüş sırası, dışarıda görülecekler, sonrasında nerede yüzüleceği ve sıcağın size karşı değil sizin lehinize çalışması için günü nasıl planlayacağınızı anlatıyor.</p>
<h2>Surlariçi — yürüyüş sırasıyla</h2>
<p>Batı tarafındaki <strong>Kara Kapısı ve Ravelin</strong> ile başlayın. Venedikliler kara yönündeki ana savunmayı burada yeniden inşa etti; ilk buraya çıkmak diğer her şeyin şemasını verir — surların hattı, surlariçinin damları, arkadaki deniz. Oradan Namık Kemal Caddesi boyunca doğuya, merkeze doğru yürüyün.</p>
<p>Yürüyüş sizi <strong>Lala Mustafa Paşa Camii</strong>'nin, yani eski St. Nicholas Katedrali'nin önündeki meydana çıkarır. On dördüncü yüzyılda başlanmış bir Fransız Gotik katedralidir; Lusignan kralları burada Kudüs kralı olarak taç giydi. 1571 sonrasında kulelerden birine minare eklendi ve yapı o günden beri cami olarak kullanılıyor. Üç portali ve gül penceresiyle batı cephesi, adadaki en güçlü mimari parçadır. Namaz vakitleri dışında ziyaret edilebilir; omuz ve dizleri kapatın, kapıda ayakkabılarınızı çıkarın.</p>
<p>Çevresindeki meydan merkezin geri kalanını barındırır: caminin yanındaki Venedik Sarayı, Osmanlı şairinin tutulduğu <strong>Namık Kemal Zindanı</strong> ve ağaç altındaki birkaç kafe. Surlariçinde doğru dürüst gölge bulunan tek yer burasıdır, molanızı buraya göre planlayın.</p>
<p>Kuzeydoğuya yürüdüğünüzde <strong>Othello Kalesi</strong>'ne varırsınız — Venediklilerin yeniden biçimlendirdiği Lusignan iç kalesi. Adını, Kıbrıs'ta bir limanda geçen Shakespeare oyunundan alır. İç mekân büyük ölçüde çıplak taştır ama büyük salon serindir ve surlardan doğrudan limana bakarsınız. Burçlarda rüzgâr ve güneş serttir; şapka zor durur.</p>
<p>Dönüşte sokaklara dağılmış yıkık Gotik kiliselerin arasından geçin. Gazimağusa'da bir zamanlar onlarca kilise vardı ve birçoğu evlerin arasında çatısız ayakta duruyor. En büyük kalıntı, eski Aziz Petrus ve Pavlus Kilisesi olan <strong>Sinan Paşa Camii</strong>'dir. Surları ve suyu tek karede görmek isterseniz, Venedik aslanının bulunduğu <strong>Deniz Kapısı</strong>'ndan çıkın.</p>
<h2>Salamis Harabeleri ve Kral Mezarları</h2>
<p>Şehrin yaklaşık on dakika kuzeyindeki <strong>Salamis Harabeleri</strong>, antik Kıbrıs'ın başkentidir; çam ve kum üzerine yayılmış geniş bir alandır. Sütunlu gymnasium ve heykelleri, Roma tiyatrosu, hamamlar ve bazilikalar başlıca duraklardır ve alan kıyıya kadar iner. Büyük, düz ve neredeyse tamamen gölgesizdir. İki saat ayırın, düşündüğünüzden fazla su alın ve kırık döşemeler için düzgün ayakkabı giyin.</p>
<p>İçeri doğru kısa bir sürüşle <strong>Kral Mezarları</strong>'na varılır. Salamis'in mezarlığıdır; oda mezarların giriş rampalarına savaş arabaları ve atlar gömülmüştür. Daha sessiz, daha küçük bir alandır ve harabeleri iyi tamamlar.</p>
<h2>St. Barnabas Manastırı</h2>
<p>Kral Mezarları'nın yakınında, havarinin geleneksel mezarının üzerinde <strong>St. Barnabas Manastırı</strong> yükselir. Manastır binaları bugün bir ikona koleksiyonu ile arkeoloji koleksiyonunu barındırır; hepsi palmiyeli ve kuyulu bir avlunun çevresinde dizilidir. Küçük, gölgeli ve serindir — sıcak bir sabahın doğal son durağı.</p>
<h2>Mağusa Körfezi plajları</h2>
<p>Körfez, şehirden kuzeye doğru uzun ve sığ bir kum hattı çizer. Üç bölüm çok kullanılır:</p>
<ul>
  <li><strong>Glapsides Plajı</strong> — şehre en yakını; geniş, kumlu, beach club'lar, şezlong ve yemek imkânı var. Hafta sonları kalabalıklaşır, öğrenciler arasında popülerdir.</li>
  <li><strong>Silver Beach</strong> — Salamis alanının hemen yanında, daha sakin, sığ su ve sade bir plaj lokantası. Sabah harabe, hemen ardından deniz isteyenler için ideal.</li>
  <li><strong>Palm Beach</strong> — körfezin güney ucunda, kapalı bölge Kapalı Maraş'ın hemen bitişiğinde. Kum, şezlong ve sakin su; arkada bölgenin boş yüksek binaları.</li>
</ul>
<p><strong>Kapalı Maraş</strong>, Gazimağusa'nın 1974'ten beri kapalı olan çitle çevrili bir mahallesidir. Bir bölümü ziyarete açıldı; ziyaretçiler bazı sokaklarda işaretli güzergâhlar boyunca yürüyerek veya bisikletle dolaşabiliyor. Geri kalanı çitin arkasındadır ve binalara girilemez. Fotoğraf kuralları girişte asılıdır; makineyi kaldırmadan önce okumakta fayda var.</p>
<h2>Zamanlama, sıcak ve gölge</h2>
<p>Mayıs–Eylül arasında açık alanları erken gezin. Salamis ve surlar için en iyi zaman saat on birden öncesidir; surlariçinin dar sokakları öğlene kadar bir miktar gölge tutar, manastır ve müzeler ise her saatte rahattır. Öğleden sonra bir ile dört arası plajda ya da kapalı bir yerde olun. Katedral cephesi ve Othello Kalesi'nden liman manzarası için en iyi ışık ikindidir.</p>
<p>Surlariçi, Salamis ve bir plajı kapsayan tam gün, sıcakta epey hareket demektir. Girne, Long Beach ya da Lefkoşa'dan gelen birçok ziyaretçi kendi araç kullanmak yerine günlük araç tutuyor: şoför sizi Kara Kapısı'nda bırakır, bekler, Deniz Kapısı'ndan alır ve Salamis ile plaja götürür. Fiyat yola çıkmadan sabitlenir; uzun bir öğle yemeği ödediğiniz tutarı değiştirmez.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Gazimağusa için ne kadar süre ayırmalıyım?</h3>
<p>Yarım gün, surlariçini yürüyerek gezmeye yeter. Tam gün buna Salamis'i, Kral Mezarları'nı, St. Barnabas'ı ve körfezde bir denizi ekler. İki gün ise Kapalı Maraş'ı da dahil ederek işi yavaşlatmanızı sağlar.</p>
<h3>Surlariçi yürünerek gezilir mi?</h3>
<p>Evet ve görmenin en iyi yolu budur. Surlarla çevrili alan derli toplu ve düzdür; başlıca noktalar birbirine yürüyerek yaklaşık on beş dakikadır. Zemin eski taştır, tabanı tutan ayakkabı getirin.</p>
<h3>Kapalı Maraş'a girilebiliyor mu?</h3>
<p>Mahallenin bir bölümü işaretli güzergâhlar boyunca yaya ve bisikletli ziyarete açık. Geri kalanı çitin arkasında kalıyor ve binalara girmek serbest değil. Girişte asılı kurallara uyun.</p>
<h3>Salamis'te gölge var mı?</h3>
<p>Neredeyse yok. Alan açık arazidir, çamlar yalnızca kenarlardadır; erken ya da geç gidin, su taşıyın, şapka kullanın. Aynısı surlar için de geçerli.</p>
<h3>Gazimağusa'ya en kolay nasıl gidilir?</h3>
<p>Karayoluyla. Ercan Havalimanı'ndan yaklaşık 45 dakika, Girne'den yaklaşık bir saat, Long Beach'ten yaklaşık 20 dakikadır. Sabit fiyatlı transfer sizi kapıdan kapıya götürür; günlük kiralamada ise aynı şoför sizi surlariçi, Salamis ve plaj arasında gezdirir.</p>
<p>Gazimağusa'da bir gün mü planlıyorsunuz? <a href="/tr/routes/">Sabit fiyatlara bakın</a> ya da <a href="/tr/book/">günlük araç ayarlayın</a>.</p>`,
      ru: `
<p>Фамагуста (Газимагуса) создана для неспешного дня. Внутри венецианских стен вы за пятнадцать минут дойдёте от готического собора, ставшего мечетью, до крепости у самой воды, а в десяти минутах вдоль побережья руины античного Саламина спускаются к пустому пляжу. Это самая плотная концентрация истории на Северном Кипре — и одновременно место жаркое, открытое и почти лишённое тени большую часть года. Ниже — разумный порядок пешей прогулки по старому городу, что смотреть за его стенами, где потом купаться и как выстроить день, чтобы жара работала на вас.</p>
<h2>Старый город: маршрут по порядку</h2>
<p>Начните с <strong>Сухопутных ворот и Равелина</strong> на западной стороне. Венецианцы перестроили этот бастион как главную защиту со стороны суши, и подъём сюда в самом начале даёт понимание всей планировки — линию стен, крыши старого города, море за ними. Дальше идите на восток по улице Намыка Кемаля к центру.</p>
<p>Вы выйдете на главную площадь перед <strong>мечетью Лала Мустафы-паши</strong> — бывшим собором Святого Николая. Это французский готический собор, начатый в XIV веке, где короли Лузиньяны короновались королями Иерусалима. После 1571 года к одной из башен пристроили минарет, и с тех пор здание служит мечетью. Западный фасад с тремя порталами и розой — самая сильная архитектура на острове. Вход открыт вне времени молитвы: прикройте плечи и колени, обувь снимите у дверей.</p>
<p>Вокруг сосредоточен остальной центр: венецианская лоджия, <strong>темница Намыка Кемаля</strong>, где содержали османского поэта, и несколько кафе под деревьями. Это единственное по-настоящему тенистое место в старом городе — перерыв планируйте здесь.</p>
<p>Дальше на северо-восток стоит <strong>замок Отелло</strong> — цитадель Лузиньянов, перестроенная венецианцами и названная по пьесе Шекспира, действие которой происходит в кипрском порту. Внутри в основном голый камень, но большой зал прохладен, а со стен видно прямо вниз, в гавань.</p>
<p>На обратном пути пройдите мимо готических церквей, разбросанных по улицам: когда-то их в Фамагусте были десятки, и многие стоят без крыш между жилыми домами. Самая крупная уцелевшая — <strong>мечеть Синан-паши</strong>, бывшая церковь Святых Петра и Павла. Выходите через <strong>Морские ворота</strong> с венецианским львом.</p>
<h2>Саламин и Царские гробницы</h2>
<p>Примерно в десяти минутах к северу от города лежит <strong>Саламин</strong> — руины столицы античного Кипра на большой территории среди сосен и песка. Главное здесь: гимнасий с колоннадой и статуями, римский театр, бани и базилики; территория доходит до самого берега. Она обширная, ровная и почти без тени. Заложите два часа, возьмите больше воды, чем кажется нужным, и обуйтесь как следует — мощение разбитое.</p>
<p>Чуть вглубь острова находятся <strong>Царские гробницы</strong> — некрополь Саламина, где в спусках к погребальным камерам хоронили колесницы и лошадей. Место тише и меньше и хорошо дополняет руины.</p>
<h2>Монастырь Святого Варнавы</h2>
<p>Рядом с гробницами стоит <strong>монастырь Святого Варнавы</strong>, над традиционной гробницей апостола. В монастырских корпусах сегодня размещены собрание икон и археологическая коллекция, расставленные вокруг двора с пальмами и колодцем. Небольшой, тенистый и прохладный — естественная последняя точка жаркого утра.</p>
<h2>Пляжи залива Фамагусты</h2>
<p>Залив уходит от города на север длинной пологой полосой песка. Чаще всего используют три участка:</p>
<ul>
  <li><strong>Glapsides</strong> — ближайший к городу, широкий и песчаный, с пляжными клубами, лежаками и едой. По выходным людно, популярен у студентов.</li>
  <li><strong>Silver Beach</strong> — рядом с территорией Саламина, спокойнее, мелкая вода и простой пляжный ресторан. Удобно, если утром руины, а сразу после — купание.</li>
  <li><strong>Palm Beach</strong> — на южном краю залива, вплотную к огороженному кварталу Вароша (Капалы Мараш). Песок, лежаки, спокойная вода, а позади — пустые высотные дома квартала.</li>
</ul>
<p><strong>Вароша</strong> — огороженный квартал Фамагусты, закрытый с 1974 года. Часть его открыта для посетителей: по размеченным маршрутам можно пройти пешком или проехать на велосипеде по некоторым улицам. Остальное остаётся за ограждением, входить в здания нельзя. Правила фотосъёмки вывешены у входа, их стоит прочитать до того, как поднимете камеру.</p>
<h2>Время дня, жара и тень</h2>
<p>С мая по сентябрь открытые объекты смотрите рано. Саламин и стены лучше всего до одиннадцати; узкие улицы старого города держат немного тени до полудня, а монастырь и музеи комфортны в любой час. Примерно с часа до четырёх дня будьте на пляже или в помещении.</p>
<p>Полный день со старым городом, Саламином и пляжем — это много перемещений по жаре. Многие гости из Кирении, Лонг-Бич или Никосии берут машину с водителем на день: шофёр высаживает вас у Сухопутных ворот, забирает у Морских и везёт дальше к Саламину и на пляж, по цене, зафиксированной до выезда.</p>
<h2>Частые вопросы</h2>
<h3>Сколько времени нужно на Фамагусту?</h3>
<p>Полдня хватает на старый город пешком. Полный день добавляет Саламин, Царские гробницы, монастырь Святого Варнавы и купание в заливе.</p>
<h3>По старому городу можно ходить пешком?</h3>
<p>Да, и это лучший способ его увидеть. Территория внутри стен компактная и ровная, между главными точками около пятнадцати минут ходьбы. Покрытие — старый камень, нужна обувь с хорошим сцеплением.</p>
<h3>Можно ли попасть в Варошу?</h3>
<p>Часть квартала открыта для посещения пешком и на велосипеде по размеченным маршрутам. Остальное остаётся за ограждением, вход в здания не разрешён.</p>
<h3>Есть ли тень в Саламине?</h3>
<p>Почти нет. Это открытая местность, сосны только по краям — идите рано или поздно, берите воду и головной убор. То же касается городских стен.</p>
<h3>Как проще всего добраться до Фамагусты?</h3>
<p>По дороге. Примерно 45 минут от аэропорта Эрджан, около часа от Кирении и около 20 минут от Лонг-Бич. Трансфер по фиксированной цене довезёт от двери до двери, а аренда машины с водителем на день позволит одному и тому же шофёру возить вас между старым городом, Саламином и пляжем.</p>
<p>Планируете день в Фамагусте? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">закажите машину на день</a>.</p>`,
    },
  },
  {
    slug: 'long-beach-iskele-things-to-do',
    date: '2026-07-22',
    title: {
      en: 'Long Beach and İskele: Things to Do on the East Coast',
      tr: 'Long Beach ve İskele: Doğu Kıyısında Yapılacaklar',
      ru: 'Лонг-Бич и Искеле: что делать на восточном берегу',
    },
    description: {
      en: 'What to do at Long Beach and İskele — the sand, beach clubs, Bafra, the Boğaz and Kumyalı harbours, the Icon Museum and day trips along the east coast.',
      tr: "Long Beach ve İskele'de yapılacaklar: kumsal, beach club'lar, Bafra, Boğaz ve Kumyalı limanları, İkon Müzesi ve doğu kıyısından günübirlik geziler.",
      ru: 'Чем заняться на Лонг-Бич и в Искеле: песок и пляжные клубы, отели Бафры, гавани Богаз и Кумьялы, Музей икон и поездки по восточному побережью.',
    },
    body: {
      en: `
<p>Long Beach is the longest continuous stretch of sand in North Cyprus, running for several kilometres along the east coast in the İskele district. Behind it stands a line of large resort hotels and apartment complexes, and around it sits a quieter countryside of villages, fishing harbours and Byzantine churches most guests never look at. Here is what there is to do, who the area suits, and how to get around without a car.</p>
<h2>The beach itself</h2>
<p>The sand is soft, pale and wide, and the water shelves gently for a long way out, which is the main reason families choose this coast over the rockier north. The beach is exposed, so afternoons can be breezy, and there is little natural shade beyond what the clubs and hotels provide.</p>
<p>Access varies along the strip. Hotel guests use their own section, with loungers included or charged at the door. Between the hotels are public stretches with no facilities, so bring water and an umbrella.</p>
<h2>Beach clubs and evenings</h2>
<p>Several beach clubs sit along the shore, mostly attached to the larger resorts, and a day pass typically buys a lounger, an umbrella and use of the pool and bar. In the evening, most activity is inside the hotels — restaurants, bars, entertainment programmes and, at the bigger properties, a casino. This is a resort coast rather than a town.</p>
<h2>Bafra hotel strip</h2>
<p>About twenty minutes north, <strong>Bafra</strong> is a separate purpose-built hotel zone on its own bay, home to several of the island's largest five-star and casino resorts. Even if you are not staying there it works as an evening out. The road is easy but unlit in stretches, so many guests book a car with a return pickup.</p>
<h2>Boğaz and Kumyalı fishing harbours</h2>
<p><strong>Boğaz</strong>, ten minutes north, is the closest thing to a proper evening out beyond the hotels: a working fishing harbour lined with fish restaurants, where the catch is displayed on ice and priced by weight. Go around sunset and walk the quay first.</p>
<p><strong>Kumyalı</strong> is smaller and further up the Karpaz road, roughly half an hour on — a village harbour with a few tables by the water and little else.</p>
<h2>Panayia Theotokos and the İskele Icon Museum</h2>
<p>In the middle of İskele town stands the Byzantine church of <strong>Panayia Theotokos</strong>, now the <strong>İskele Icon Museum</strong>. The building has two layers of history — a domed church with wall paintings from the twelfth century, extended later — and the frescoes are the reason to come. Small, cool, about half an hour.</p>
<h2>Day trips from Long Beach</h2>
<p>The quiet advantage of Long Beach is its position, within reach of the best of the east.</p>
<ul>
  <li><strong>Famagusta (Gazimağusa)</strong> — about 20 minutes. The walled old city, the Gothic cathedral turned mosque, Othello Castle and the fenced quarter of Varosha, part of which is open on foot and by bicycle along marked routes.</li>
  <li><strong>Salamis and St Barnabas</strong> — about 20 minutes. A large Roman site running down to the sea, with the Royal Tombs and the monastery museum nearby.</li>
  <li><strong>The Karpaz peninsula</strong> — wild beaches, free-roaming donkeys and the Apostolos Andreas Monastery near the tip, roughly an hour and a half each way.</li>
  <li><strong>Kantara Castle</strong> — around 40 minutes inland and up, with a view over both coasts.</li>
  <li><strong>Nicosia (Lefkoşa)</strong> — about an hour, for the walled capital and the Selimiye Mosque.</li>
</ul>
<h2>Who the area suits</h2>
<p>Long Beach works best for people who want a base rather than a tour. Families do well here because of the shallow water, the space on the sand and the all-in resort setup. Long-stay and winter visitors take apartments in the complexes and treat it as a quiet coastal address. If you want old streets and nightlife on your doorstep, Kyrenia suits better.</p>
<h2>Getting around without a car</h2>
<p>The resorts are self-contained and spread out, public transport along the strip is limited, and taxis do not wait outside the hotels in the evening.</p>
<p>For a single outing — dinner at Boğaz, a night at Bafra, the museum at İskele — book a car with a fixed price each way and a return pickup time. For a full day out, a full-day hire is simpler: the chauffeur waits at each stop, at a price agreed before you leave. If you are still planning your arrival, our <a href="/en/blog/iskele-long-beach-hotels-transfer-guide/">Long Beach hotel transfer guide</a> covers the airport run.</p>
<h2>Frequently asked questions</h2>
<h3>Is Long Beach good for families?</h3>
<p>Yes. The water is shallow a long way out, the sand is soft and wide, and the resorts are built around pools, kids' clubs and all-inclusive catering.</p>
<h3>How far is Famagusta from Long Beach?</h3>
<p>About 20 minutes by road — close enough for a morning in the walled city and an afternoon on the beach.</p>
<h3>Do I need a hire car at Long Beach?</h3>
<p>Not necessarily. If you leave the resort most days a car helps; if you go out a few times a week, fixed-price rides with an arranged pickup are simpler.</p>
<h3>When is the best time to visit?</h3>
<p>May, June, September and October give warm sea and manageable heat. July and August are hot and the beach is exposed, so mornings and late afternoons are the comfortable hours.</p>
<p>Planning your days on the east coast? <a href="/en/routes/">See fixed prices</a> or <a href="/en/book/">book a car</a>.</p>`,
      tr: `
<p>Long Beach, Kuzey Kıbrıs'ın kesintisiz en uzun kum şerididir; doğu kıyısında, İskele bölgesinde birkaç kilometre boyunca uzanır. Arkasında büyük tatil otelleri ve site kompleksleri sıralanır; çevresinde ise misafirlerin çoğunun hiç bakmadığı sakin bir taşra vardır — köyler, balıkçı limanları, Bizans kiliseleri. Bu rehber burada gerçekten yapılacak şeyleri, bölgenin kime uyduğunu ve araba getirmediyseniz nasıl dolaşacağınızı anlatıyor.</p>
<h2>Kumsalın kendisi</h2>
<p>Kum yumuşak, açık renkli ve geniştir; deniz uzun süre sığ ilerler. Ailelerin bu kıyıyı daha kayalık kuzeye tercih etmesinin başlıca nedeni budur. Kumsal açıktır, öğleden sonraları rüzgâr artabilir ve doğal gölge neredeyse yoktur; gölge yalnızca kulüplerin ve otellerin sağladığı kadardır.</p>
<p>Şerit boyunca erişim değişir. Otel misafirleri genellikle kendi bölümlerini kullanır; şezlong ve servis ya dahildir ya girişte ücretlendirilir. Oteller arasında herkese açık kısımlar vardır, yürüyerek girip yakına park edip yüzebilirsiniz ama buralarda tesis yoktur; su ve şemsiye götürün.</p>
<h2>Beach club'lar ve akşamlar</h2>
<p>Kıyı boyunca, çoğu büyük tatil köylerine bağlı birkaç beach club sıralanır. Günlük giriş genelde şezlong, şemsiye ve havuz ile bar kullanımını kapsar; şeridin gündüz müziği ve yemeği buralarda olur. Akşam hareketi ise büyük ölçüde otellerin içindedir — restoranlar, barlar, eğlence programları ve birkaç büyük tesiste casino. Burası bir kasaba değil, tatil kıyısıdır; bağımsız barlarla dolu bir sahil caddesi beklemeyin.</p>
<h2>Bafra otel şeridi</h2>
<p>Yaklaşık yirmi dakika kuzeydeki <strong>Bafra</strong>, kendi koyunda ayrı ve planlı bir otel bölgesidir; adanın en büyük beş yıldızlı ve casinolu tesislerinden birkaçı buradadır. Orada kalmasanız bile bir akşam çıkışı olarak işe yarar: yemek, gösteri ya da casino katları, ardından aynı gece Long Beach'e dönüş. Yol kolaydır ama bazı bölümleri aydınlatmasızdır; birçok misafirin kendi sürmek yerine dönüş alımı ayarlanmış araç tutmasının bir nedeni de budur.</p>
<h2>Boğaz ve Kumyalı balıkçı limanları</h2>
<p><strong>Boğaz</strong>, Long Beach'in on dakika kuzeyindedir ve otellerin dışında bölgenin doğru dürüst akşam çıkışına en yakın yeridir. Çalışan bir balıkçı limanıdır; rıhtım boyunca balık lokantaları dizilidir, günün avı genelde buz üzerinde sergilenir ve kilo ile fiyatlanır. Gün batımına doğru gidin, önce rıhtımı ve tekneleri yürüyün, sonra yemeğe oturun.</p>
<p><strong>Kumyalı</strong> daha küçüktür ve Karpaz yolunda, yaklaşık yarım saat ileridedir. Suyun kenarında birkaç masası olan gerçek bir köy limanıdır, başka pek bir şey yoktur; kıyıyı tatil köyü bağlamı olmadan görmek isteyene yolu değer.</p>
<h2>Panayia Theotokos ve İskele İkon Müzesi</h2>
<p>İskele kasabasının ortasında, birkaç dakika içeride, Bizans dönemine ait <strong>Panayia Theotokos Kilisesi</strong> bulunur; bugün <strong>İskele İkon Müzesi</strong> olarak düzenlenmiştir. Yapının iki katmanlı bir tarihi vardır — on ikinci yüzyıl duvar resimlerini taşıyan kubbeli bir kilise, sonradan genişletilmiş — ve gelmenin asıl sebebi içerideki freskolardır. Küçüktür, serindir ve yarım saat sürer. Köy meydanında bir yürüyüş ve bir kahveyle birleştirin.</p>
<h2>Long Beach'ten günübirlik geziler</h2>
<p>Long Beach'in sessiz avantajı konumudur: doğunun en iyisi menzilinizdedir.</p>
<ul>
  <li><strong>Gazimağusa</strong> — yaklaşık 20 dakika. Surlariçi, camiye dönüşmüş Gotik katedral, Othello Kalesi ve bir bölümü işaretli güzergâhlar boyunca yaya ve bisikletli ziyarete açık olan Kapalı Maraş.</li>
  <li><strong>Salamis ve St. Barnabas</strong> — yaklaşık 20 dakika. Denize kadar inen geniş bir Roma alanı; yakınında Kral Mezarları ve manastır müzesi.</li>
  <li><strong>Karpaz Yarımadası</strong> — kuzeydoğunuzdaki uzun parmak; yabani plajlar, serbest dolaşan eşekler ve uçtaki Apostolos Andreas Manastırı. Tam gün ayırın; uca gidiş yaklaşık bir buçuk saattir.</li>
  <li><strong>Kantara Kalesi</strong> — içeriye ve yukarıya doğru yaklaşık 40 dakika. Üç dağ kalesinin en doğudakidir, iki kıyıyı birden görür.</li>
  <li><strong>Lefkoşa</strong> — yaklaşık bir saat. Surlarla çevrili başkent, çarşı ve Selimiye Camii.</li>
</ul>
<h2>Bölge kime uygun?</h2>
<p>Long Beach, gezi turundan çok bir üs isteyenlere göredir. Aileler burada rahat eder: sığ su, kumsalda yer ve her şeyi içeren tesis düzeni. Uzun süreli ve kış misafirleri sitelerde daire tutar ve burayı sakin bir sahil adresi olarak kullanır. Eski sokaklar, yürüme mesafesinde bağımsız restoranlar ve kapı önünde gece hayatı istiyorsanız Girne size daha uygundur — ama Long Beach çok daha fazla kumsal verir.</p>
<h2>Araba olmadan dolaşmak</h2>
<p>Önceden planlanmaya değen tek pratik konu budur. Tesisler kendi içinde kapalıdır ve birbirinden uzaktır, şerit boyunca toplu ulaşım sınırlıdır ve özellikle akşam otellerin önünde taksi beklemez. Kompleksler arasında yürümek mümkündür ama yol kenarı sıcakta pek konforlu değildir.</p>
<p>Misafirlerin çoğu bunu iki yoldan biriyle çözer. Tek bir çıkış için — Boğaz'da balık, Bafra'da bir gece, İskele'de müze — gidiş ve dönüşü sabit fiyatlı, dönüş alım saati belirlenmiş bir araçla ayarlayın. Gazimağusa ile Salamis ya da Karpaz gibi tam gün için ise günlük kiralama daha kolaydır: şoför her durakta bekler, her noktada yeniden araç aramazsınız ve fiyat yola çıkmadan kararlaşır. Henüz varışınızı planlıyorsanız, <a href="/tr/blog/iskele-long-beach-hotels-transfer-guide/">Long Beach otel transfer rehberimiz</a> havalimanı yolculuğunu ve otel bırakmalarını ayrıntılı anlatıyor.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Long Beach aileler için uygun mu?</h3>
<p>Evet. Deniz uzun mesafe sığdır, kum yumuşak ve geniştir, tesisler havuz, çocuk kulübü ve yarım pansiyon ya da her şey dahil düzen üzerine kuruludur. Açık kısımlar için gölge götürün.</p>
<h3>Kumsal dışında ne yapılır?</h3>
<p>İskele'deki İkon Müzesi, Boğaz ve Kumyalı balıkçı limanları, Bafra'daki otel ve casino şeridi ve Gazimağusa, Salamis, Kantara Kalesi ile Karpaz Yarımadası'na günübirlik geziler.</p>
<h3>Gazimağusa Long Beach'e ne kadar uzak?</h3>
<p>Karayoluyla yaklaşık 20 dakika. Sabahı surlariçinde geçirip öğleden sonra kumsala dönecek kadar yakın.</p>
<h3>Long Beach'te kiralık arabaya ihtiyacım var mı?</h3>
<p>Şart değil. Neredeyse her gün tesisten çıkacaksanız araba işinizi kolaylaştırır. Haftada birkaç kez çıkıyorsanız, alım saati ayarlanmış sabit fiyatlı yolculuklar genelde gece yabancı yollarda sürmekten ve park yeri aramaktan daha pratiktir.</p>
<h3>En iyi ziyaret zamanı ne zaman?</h3>
<p>Mayıs, haziran, eylül ve ekim ılık deniz ve dayanılabilir sıcak sunar. Temmuz ve ağustos sıcaktır ve kumsal açıktır; rahat saatler sabah ve ikindidir. Kış ılıman ve çok sakindir, uzun konaklamalara uyar.</p>
<p>Doğu kıyısındaki günlerinizi mi planlıyorsunuz? <a href="/tr/routes/">Sabit fiyatlara bakın</a> ya da <a href="/tr/book/">araç ayarlayın</a>.</p>`,
      ru: `
<p>Лонг-Бич — самая длинная непрерывная полоса песка на Северном Кипре: несколько километров вдоль восточного побережья в районе Искеле. За ней тянется линия крупных курортных отелей и жилых комплексов, а вокруг лежит тихая сельская местность с деревнями, рыбацкими гаванями и византийскими церквями, на которую большинство гостей так и не смотрит. Ниже — чем здесь заняться, кому подходит это место и как передвигаться без машины.</p>
<h2>Сам пляж</h2>
<p>Песок мягкий, светлый и широкий, дно уходит вглубь очень полого — именно поэтому семьи выбирают этот берег, а не более скалистый север. Пляж открытый, во второй половине дня бывает ветрено, и естественной тени почти нет: тень дают только клубы и отели.</p>
<p>Доступ вдоль полосы разный. Гости отелей пользуются своим участком с лежаками — включёнными или оплачиваемыми на входе. Между отелями есть общедоступные отрезки, где можно просто выйти к воде и купаться, но инфраструктуры там нет, так что берите воду и зонт.</p>
<h2>Пляжные клубы и вечера</h2>
<p>Вдоль берега работает несколько пляжных клубов при крупных курортах; дневной вход обычно даёт лежак, зонт и доступ к бассейну и бару. Вечером почти вся жизнь идёт внутри отелей — рестораны, бары, развлекательные программы, а в нескольких крупных комплексах и казино. Это курортный берег, а не город, так что набережной с независимыми барами здесь ждать не стоит.</p>
<h2>Отельная зона Бафра</h2>
<p>Примерно в двадцати минутах к северу находится <strong>Бафра</strong> — отдельная спланированная отельная зона в собственной бухте, где стоят несколько крупнейших пятизвёздочных и казино-курортов острова. Даже если вы живёте не там, это вариант вечернего выезда: ужин, шоу или игровые залы, а затем возвращение на Лонг-Бич в ту же ночь. Дорога простая, но местами без освещения — одна из причин, по которой многие берут машину с водителем и заранее назначенным обратным временем.</p>
<h2>Рыбацкие гавани Богаз и Кумьялы</h2>
<p><strong>Богаз</strong> лежит в десяти минутах к северу и остаётся ближайшим настоящим вечерним выходом за пределами отелей: рабочая рыбацкая гавань, вдоль причала — рыбные рестораны, где дневной улов обычно выложен на льду и продаётся на вес. Приезжайте к закату и сначала пройдитесь по причалу.</p>
<p><strong>Кумьялы</strong> меньше и дальше по дороге на Карпаз, примерно ещё полчаса — деревенская гавань с несколькими столами у воды и почти ничем больше. Стоит поездки, если хочется побережья без курортного обрамления.</p>
<h2>Панагия Теотокос и Музей икон в Искеле</h2>
<p>В центре городка Искеле стоит византийская церковь <strong>Панагия Теотокос</strong>, ныне <strong>Музей икон Искеле</strong>. У здания два слоя истории — купольная церковь с настенной живописью XII века, позже расширенная, — и ради фресок внутри сюда и едут. Небольшое, прохладное, полчаса.</p>
<h2>Поездки на день с Лонг-Бич</h2>
<p>Тихое преимущество Лонг-Бич — расположение: лучшее на востоке острова находится в пределах досягаемости.</p>
<ul>
  <li><strong>Фамагуста (Газимагуса)</strong> — около 20 минут. Старый город в стенах, готический собор, ставший мечетью, замок Отелло и огороженный квартал Вароша, часть которого открыта для пеших и велосипедных прогулок по размеченным маршрутам.</li>
  <li><strong>Саламин и монастырь Св. Варнавы</strong> — около 20 минут. Обширный римский комплекс, спускающийся к морю, рядом Царские гробницы и музей в монастыре.</li>
  <li><strong>Полуостров Карпаз</strong> — дикие пляжи, свободно живущие ослы и монастырь Апостола Андрея у самой оконечности; до мыса около полутора часов в одну сторону.</li>
  <li><strong>Замок Кантара</strong> — примерно 40 минут вглубь и вверх, с видом сразу на оба побережья.</li>
  <li><strong>Никосия (Лефкоша)</strong> — около часа: столица в стенах, базар и мечеть Селимие.</li>
</ul>
<h2>Кому подходит это место</h2>
<p>Лонг-Бич лучше всего работает для тех, кому нужна база, а не маршрут. Семьям здесь удобно из-за мелкой воды, простора на песке и формата курорта со всем включённым. Гости на долгий срок и зимующие снимают квартиры в комплексах и живут здесь как по тихому приморскому адресу. Если нужны старые улицы и ночная жизнь под окном, лучше подойдёт Кирения.</p>
<h2>Как передвигаться без машины</h2>
<p>Это единственное, что стоит продумать заранее. Комплексы самодостаточны и разбросаны, общественный транспорт вдоль полосы ограничен, а такси у отелей не стоят, особенно вечером. Идти пешком между комплексами можно, но обочина в жару не самая приятная.</p>
<p>Большинство гостей решают это одним из двух способов. Для разовой поездки — ужин в Богазе, вечер в Бафре, музей в Искеле — заказывают машину с фиксированной ценой в обе стороны и назначенным временем возврата. Для полного дня, например Фамагуста с Саламином или Карпаз, проще аренда с водителем на день: шофёр ждёт на каждой остановке, вам не приходится искать транспорт у каждого объекта, а цена согласована до выезда. Если вы ещё планируете приезд, наш <a href="/ru/blog/iskele-long-beach-hotels-transfer-guide/">гид по трансферу в отели Лонг-Бич</a> подробно разбирает дорогу из аэропорта и высадку у отелей.</p>
<h2>Частые вопросы</h2>
<h3>Подходит ли Лонг-Бич для семей?</h3>
<p>Да. Вода мелкая далеко от берега, песок мягкий и широкий, а курорты построены вокруг бассейнов, детских клубов и питания по системе полупансиона или всё включено. На открытых участках берите с собой тень.</p>
<h3>Чем заняться, кроме пляжа?</h3>
<p>Музей икон в Искеле, рыбацкие гавани Богаз и Кумьялы, отельно-казиношная зона Бафра и поездки на день в Фамагусту, Саламин, замок Кантара и на полуостров Карпаз.</p>
<h3>Далеко ли Фамагуста от Лонг-Бич?</h3>
<p>Около 20 минут по дороге. Достаточно близко, чтобы провести утро в старом городе и вернуться на пляж к середине дня.</p>
<h3>Нужна ли на Лонг-Бич арендованная машина?</h3>
<p>Не обязательно. Если вы собираетесь выезжать почти каждый день, машина пригодится. Если выбираетесь пару раз в неделю, поездки по фиксированной цене с заранее назначенной подачей обычно проще, чем парковка и незнакомые дороги ночью.</p>
<h3>Когда лучше приезжать?</h3>
<p>Май, июнь, сентябрь и октябрь дают тёплое море и терпимую жару. В июле и августе жарко, а пляж открытый, так что комфортны утро и ближе к вечеру. Зима мягкая и очень тихая — хороший вариант для долгого пребывания.</p>
<p>Планируете дни на востоке? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">закажите машину</a>.</p>`,
    },
  },
{
    slug: 'guzelyurt-soli-vouni-west-cyprus-guide',
    date: '2026-07-22',
    title: {
      en: 'Güzelyurt, Soli and Vouni: A Day in West North Cyprus',
      tr: 'Güzelyurt, Soli ve Vouni: Batı Kıbrıs Gezi Rehberi',
      ru: 'Гюзельюрт, Соли и Вуни: день на западе Северного Кипра',
    },
    description: {
      en: 'A day guide to west North Cyprus: Güzelyurt museum and St Mammas, the Soli mosaics, Vouni Palace, Lefke, Gemikonağı and the quiet bay beaches.',
      tr: 'Batı Kıbrıs için bir günlük gezi rehberi: Güzelyurt Müzesi ve Aya Mamas, Soli mozaikleri, Vouni Sarayı, Lefke, Gemikonağı ve sakin körfez plajları.',
      ru: 'Гид на день по западу Северного Кипра: музей Гюзельюрта и церковь Айя-Мамас, мозаики Соли, дворец Вуни, Лефке, Гемиконагы и тихие пляжи залива.',
    },
    body: {
      en: `
<p>West of Nicosia the island changes character. The hills flatten into the citrus plain around Güzelyurt, the road runs out towards a coast with almost nothing built on it, and the ruins you stop at are usually empty apart from a caretaker and a cat. This is the quietest quarter of North Cyprus and the easiest to see in one unhurried loop — a museum, a Roman theatre and its mosaics, a hilltop palace over the sea, an Ottoman-era town and a long, plain beach. Half a day covers the highlights; a full day adds lunch and still gets you back before dark.</p>
<h2>A suggested route</h2>
<p>From Kyrenia the drive to Güzelyurt takes roughly 45 minutes; from Nicosia about 30 to 35. This order keeps the driving short and puts the coast in the afternoon light:</p>
<ul>
  <li><strong>Güzelyurt</strong> — museum and St Mammas, about 1 hour</li>
  <li><strong>Soli</strong> — 20 minutes west, allow an hour</li>
  <li><strong>Vouni Palace</strong> — about 10 minutes further, 45 minutes on site</li>
  <li><strong>Gemikonağı and Lefke</strong> — 15 minutes back east, lunch and a walk</li>
  <li><strong>Güzelyurt Bay beaches</strong> — on the way home if there is light left</li>
</ul>
<h2>Güzelyurt: the museum and St Mammas</h2>
<p>Güzelyurt — Morphou on older maps — sits in the middle of the orange and lemon groves that made its name. In spring the whole plain smells of citrus blossom.</p>
<p>The <strong>Güzelyurt Museum of Archaeology and Nature</strong> occupies the buildings beside the church of <strong>St Mammas</strong>, and the two are seen together. Downstairs is an old-fashioned natural history collection; upstairs the archaeology runs from Bronze Age pottery to Roman glass, including a well-known Artemis figure. Next door, the church is the reason many people come: a domed building with a carved and gilded iconostasis, and the tomb of St Mammas set into the wall. It is cool, dim and completely silent.</p>
<h2>Soli: theatre, basilica and mosaics</h2>
<p>Soli was one of the ancient city-kingdoms of Cyprus, and what survives sits on a slope facing the sea. The <strong>theatre</strong> has been substantially reconstructed and looks straight out over the gulf. Above it, under a modern shelter, lies the floor of a large <strong>basilica</strong> whose mosaics are the real draw — geometric panels, animals, and the small swan that appears on half the postcards in the region. A Roman street and the remains of a colonnade lie below. Bring a hat: there is very little shade.</p>
<h2>Vouni Palace</h2>
<p>Ten minutes further west, a narrow road climbs to <strong>Vouni Palace</strong>, a fifth-century BC hilltop residence whose foundations, cisterns and stairways are still legible on the ground. Historians argue about who built it and why. The position is not in doubt: the hill drops to the sea on one side and the plain on the other, and on a clear day the view runs far along the coast.</p>
<p>The last stretch of road is steep and single-track with few passing places. If you are driving yourself, take it slowly; a chauffeur who knows the turn can wait at the top instead.</p>
<h2>Lefke, Gemikonağı and the coast</h2>
<p><strong>Lefke</strong> is the most likeable town in the west: water running in open channels, palm trees, an old mosque, and streets of Ottoman-era houses with wooden balconies and heavy doors. It grew on copper and citrus and has kept a slower rhythm than the north coast. Coffee in the shade of the square is the right way to spend an hour.</p>
<p><strong>Gemikonağı</strong>, on the shore below, is the old mining port — the ruined loading pier out in the water is the landmark, and simple fish restaurants line the road. East of there the <strong>beaches of Güzelyurt Bay</strong> are long, flat and mostly undeveloped, with few facilities — precisely the appeal on a hot afternoon.</p>
<h2>Practical notes</h2>
<ul>
  <li>No public transport links these sites usefully. A car or a driver is the only sensible way to do the loop.</li>
  <li>Sites open through the day but close earlier in winter. Be at Soli and Vouni by mid-afternoon at the latest.</li>
  <li>Carry cash for entry fees and small cafés.</li>
  <li>Wear shoes with grip — Soli and Vouni are both uneven underfoot.</li>
</ul>
<p>If you want the day without the driving, a <strong>full-day hire at a fixed price</strong> works well here: the chauffeur waits at each stop, the price is agreed before you set off, and nothing is metered while you are inside a museum. For arrivals and hotel runs to the same area, see our <a href="/en/blog/guzelyurt-morphou-transfer-guide/">Güzelyurt transfer guide</a>.</p>
<h2>Frequently asked questions</h2>
<h3>Can I see Güzelyurt, Soli and Vouni in one day?</h3>
<p>Comfortably. The three sites are within about half an hour of each other, and adding Lefke and the coast still makes a relaxed full day from Kyrenia or Nicosia.</p>
<h3>How far is Güzelyurt from Kyrenia?</h3>
<p>About 45 minutes by road. From Nicosia it is roughly 30 to 35 minutes, and from Ercan Airport around 50 minutes.</p>
<h3>Is the road to Vouni Palace difficult?</h3>
<p>The final climb is narrow, steep and single-track. It is manageable in a normal car driven carefully, but many visitors prefer a driver for that stretch.</p>
<h3>What is the best time of year to visit the west?</h3>
<p>Spring, when the citrus is in blossom, and autumn. Midsummer works if you start early — Soli and Vouni offer very little shade.</p>
<h3>Are the beaches at Güzelyurt Bay worth stopping for?</h3>
<p>If you want quiet, yes. They are long, open and largely undeveloped. For sunbeds and beach clubs, the Kyrenia coast instead.</p>
<p>Planning the loop? <a href="/en/routes/">See fixed prices</a> or <a href="/en/book/">book a car in two minutes</a>.</p>`,
      tr: `
<p>Lefkoşa'nın batısında ada karakter değiştirir. Tepeler Güzelyurt çevresindeki narenciye ovasına iner, yol neredeyse hiç yapılaşmamış bir sahile doğru uzanır ve durduğunuz antik alanlarda genelde bir bekçi ile bir kediden başkası olmaz. Burası Kuzey Kıbrıs'ın en sakin köşesi ve tek bir telaşsız turla görülmesi en kolay olanı — bir müze, bir Roma tiyatrosu ve mozaikleri, deniz üstünde bir tepe sarayı, Osmanlı dönemi bir kasaba ve uzun, sade bir kumsal. Yarım gün ana durakları kapsar. Tam gün ise oturup öğle yemeği yemenize ve yine de hava kararmadan dönmenize izin verir.</p>
<h2>Önerilen güzergah</h2>
<p>Girne'den Güzelyurt'a yolculuk yaklaşık 45 dakika, Lefkoşa'dan 30–35 dakika sürer. Turu şu sırayla yapmak yolu kısaltır ve sahili öğleden sonranın ışığına denk getirir:</p>
<ul>
  <li><strong>Güzelyurt</strong> — müze ve Aya Mamas, yaklaşık 1 saat</li>
  <li><strong>Soli Harabeleri</strong> — 20 dakika batıda, bir saat ayırın</li>
  <li><strong>Vouni Sarayı</strong> — 10 dakika ileride, alanda 45 dakika</li>
  <li><strong>Gemikonağı ve Lefke</strong> — 15 dakika doğuda, yemek ve kısa bir yürüyüş</li>
  <li><strong>Güzelyurt Körfezi plajları</strong> — dönüş yolunda, ışık kaldıysa</li>
</ul>
<h2>Güzelyurt: müze ve Aya Mamas</h2>
<p>Eski haritalarda Omorfo olarak geçen Güzelyurt, kasabanın adını duyuran portakal ve limon bahçelerinin tam ortasındadır. İlkbaharda bütün ova narenciye çiçeği kokar, yol kenarındaki tezgahlar meyveyi ve suyunu kasayla satar.</p>
<p><strong>Güzelyurt Arkeoloji ve Doğa Müzesi</strong>, <strong>Aya Mamas Kilisesi</strong>'nin yanındaki binalarda yer alır ve ikisi birlikte gezilir. Alt katta doğa tarihi bölümü Kıbrıs faunasına dair açık sözlü, eski usul bir koleksiyon barındırır; üst katta arkeoloji Tunç Çağı seramiğinden Roma camına uzanır ve bilinen Artemis heykeli buradadır. Yan taraftaki kilise ise çoğu ziyaretçinin asıl gelme sebebidir: kubbeli bir yapı, oyma ve yaldızlı ahşap ikonostasis, duvara yerleştirilmiş Aya Mamas lahdi. Serin, loş ve tamamen sessizdir; acele etmeden geçirilen on dakikayı hak eder.</p>
<h2>Soli Harabeleri: tiyatro, bazilika ve mozaikler</h2>
<p>Soli, Kıbrıs'ın antik şehir krallıklarından biriydi ve ayakta kalanlar denize bakan bir yamaca yayılır. <strong>Tiyatro</strong> büyük ölçüde yeniden yapılandırılmıştır ve doğrudan körfeze bakar. Üstünde, modern bir çatının altında, büyük bir <strong>bazilikanın</strong> tabanı ve asıl ilgiyi çeken mozaikleri uzanır — geometrik panolar, hayvan figürleri ve bölgedeki kartpostalların yarısında görünen o küçük kuğu. Aşağıda bir Roma caddesi ile sütunlu yolun kalıntıları vardır.</p>
<p>Şapka alın. Çatı ile tiyatro arasında neredeyse hiç gölge yoktur ve alan günün büyük bölümünde açıktır.</p>
<h2>Vouni Sarayı</h2>
<p>On dakika daha batıda dar bir yol, MÖ 5. yüzyıla tarihlenen <strong>Vouni Sarayı</strong>'na tırmanır; temelleri, sarnıçları ve merdivenleri zeminde hâlâ okunabilir. Sarayı kimin ve neden yaptırdığı tartışılmaya devam eder, alan da bu belirsizliğin verdiği hoş havayı taşır. Tartışmasız olan konumudur: tepe bir yanda denize, diğer yanda ovaya iner ve açık bir günde manzara sahil boyunca uzanır.</p>
<p>Yolun son bölümü dik, tek şeritli ve geçiş cebi azdır. Kendi aracınızı kullanıyorsanız yavaş gidin. Dönemeci bilen bir şoför bu bölümü kolaylaştırır ve siz aceleyle inmek yerine yukarıda bekleyebilir.</p>
<h2>Lefke, Gemikonağı ve sahil</h2>
<p><strong>Lefke</strong> batının en sevimli kasabasıdır: açık kanallarda akan su, palmiyeler, eski bir cami ve ahşap balkonlu, ağır kapılı Osmanlı dönemi evlerin sıralandığı sokaklar. Bakır ve narenciyeyle büyümüş, kuzey sahilindeki her yerden daha yavaş bir ritmi korumuştur. Meydanın gölgesinde bir kahve, burada bir saat geçirmenin doğru yoludur.</p>
<p>Aşağıdaki sahilde yer alan <strong>Gemikonağı</strong> eski maden limanıdır — suyun içinde duran yıkık yükleme iskelesi buranın simgesidir, yol boyunca sade balık lokantaları vardır. Doğusunda <strong>Güzelyurt Körfezi plajları</strong> uzun, düz ve büyük ölçüde yapılaşmamıştır. Tatil köyü plajı değildirler ve tesis neredeyse yoktur; sıcak bir öğleden sonra çekiciliği de tam olarak budur.</p>
<h2>Pratik notlar</h2>
<ul>
  <li>Bu noktaları birbirine bağlayan işe yarar bir toplu taşıma yoktur. Tur için araç ya da şoför tek makul seçenektir.</li>
  <li>Alanlar gün boyu açıktır ama kışın saatler kısalır. En geç öğleden sonranın ortasında Soli ve Vouni'de olmayı hedefleyin.</li>
  <li>Giriş ücretleri ve küçük kafeler için nakit bulundurun.</li>
  <li>Tabanı tutan ayakkabı giyin — Soli de Vouni de engebelidir.</li>
</ul>
<p>Günü direksiyon başında geçirmek istemiyorsanız burada <strong>sabit fiyatlı tam gün araç kiralama</strong> iyi çalışır: şoför her durakta bekler, fiyat yola çıkmadan kararlaşır ve siz müzedeyken taksimetre işlemez. Aynı bölgeye varış ve otel yolculukları için <a href="/tr/blog/guzelyurt-morphou-transfer-guide/">Güzelyurt transfer rehberimize</a> bakın.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Güzelyurt, Soli ve Vouni'yi bir günde görebilir miyim?</h3>
<p>Rahatlıkla. Üç nokta birbirine yaklaşık yarım saat mesafededir; Lefke ve sahili eklemek bile Girne ya da Lefkoşa'dan rahat bir tam gün eder.</p>
<h3>Girne'den Güzelyurt ne kadar uzakta?</h3>
<p>Karayoluyla yaklaşık 45 dakika. Lefkoşa'dan 30–35 dakika, Ercan Havalimanı'ndan ise yaklaşık 50 dakika sürer.</p>
<h3>Vouni Sarayı'na çıkan yol zor mu?</h3>
<p>Son tırmanış dar, dik ve tek şeritlidir, geçiş yeri sınırlıdır. Dikkatli sürülen normal bir otomobille çıkılabilir, ama çoğu ziyaretçi bu bölüm için şoför tercih eder.</p>
<h3>Batıyı gezmek için en iyi mevsim hangisi?</h3>
<p>Narenciyenin çiçek açtığı ve ovanın yeşerdiği ilkbahar ile sonbahar. Yaz ortasında da olur, yeter ki erken çıkın — Soli ve Vouni'de gölge çok azdır.</p>
<h3>Güzelyurt Körfezi plajları uğramaya değer mi?</h3>
<p>Sessizlik istiyorsanız evet. Uzun, açık ve büyük ölçüde doğaldırlar, tesis azdır. Şezlong ve beach club için Girne sahili daha uygundur.</p>
<p>Turu planlıyor musunuz? <a href="/tr/routes/">Sabit fiyatlara bakın</a> ya da <a href="/tr/book/">iki dakikada araç ayırtın</a>.</p>`,
      ru: `
<p>К западу от Никосии остров меняет характер. Холмы переходят в цитрусовую равнину вокруг Гюзельюрта, дорога уходит к побережью, на котором почти ничего не построено, а на античных площадках вы обычно застаёте только смотрителя и кошку. Это самая тихая четверть Северного Кипра и самая удобная для одного неспешного круга — музей, римский театр с мозаиками, дворец на холме над морем, городок османской эпохи и длинный простой пляж. Полдня хватает на главное. Полный день позволяет спокойно пообедать и вернуться до темноты.</p>
<h2>Предлагаемый маршрут</h2>
<p>Из Кирении до Гюзельюрта ехать примерно 45 минут, из Никосии — 30–35. Такой порядок сокращает дорогу и оставляет побережье на послеполуденный свет:</p>
<ul>
  <li><strong>Гюзельюрт</strong> — музей и церковь Айя-Мамас, около часа</li>
  <li><strong>Соли</strong> — 20 минут западнее, заложите час</li>
  <li><strong>Дворец Вуни</strong> — ещё около 10 минут, 45 минут на месте</li>
  <li><strong>Гемиконагы и Лефке</strong> — 15 минут обратно на восток, обед и прогулка</li>
  <li><strong>Пляжи залива Гюзельюрт</strong> — по дороге назад, если остаётся свет</li>
</ul>
<h2>Гюзельюрт: музей и Айя-Мамас</h2>
<p>Гюзельюрт — на старых картах Морфу — стоит посреди апельсиновых и лимонных садов, которые и создали городу имя. Весной вся равнина пахнет цитрусовым цветом, а придорожные лотки продают фрукты и сок ящиками.</p>
<p><strong>Музей археологии и природы Гюзельюрта</strong> занимает здания рядом с церковью <strong>Айя-Мамас</strong>, и осматривают их вместе. Внизу залы естественной истории с прямолинейной, старомодной коллекцией кипрской фауны; наверху археология — от керамики бронзового века до римского стекла, включая известную фигуру Артемиды. Рядом сама церковь, ради которой многие и приезжают: купольное здание с резным золочёным иконостасом и гробницей святого Мамаса, встроенной в стену. Внутри прохладно, сумрачно и совершенно тихо, и десять неторопливых минут здесь окупаются.</p>
<h2>Соли: театр, базилика и мозаики</h2>
<p>Соли был одним из античных городов-царств Кипра, и то, что уцелело, лежит на склоне лицом к морю. <strong>Театр</strong> в значительной мере восстановлен и смотрит прямо на залив. Выше, под современным навесом, — пол большой <strong>базилики</strong> с мозаиками, ради которых сюда и едут: геометрические панно, животные и тот самый маленький лебедь с половины местных открыток. Ниже сохранились римская улица и остатки колоннады.</p>
<p>Возьмите шляпу. Между навесом и театром тени почти нет, и площадка открыта солнцу большую часть дня.</p>
<h2>Дворец Вуни</h2>
<p>В десяти минутах западнее узкая дорога поднимается к <strong>дворцу Вуни</strong> — резиденции V века до нашей эры, чьи фундаменты, цистерны и лестницы до сих пор читаются на земле. Историки спорят, кто и зачем его построил, и площадка сохраняет приятную неопределённость. Бесспорно одно — положение: холм обрывается к морю с одной стороны и к равнине с другой, и в ясный день вид уходит далеко вдоль берега.</p>
<p>Последний отрезок дороги крутой, однополосный, с редкими карманами для разъезда. Если едете сами, не торопитесь. Водитель, знающий этот поворот, снимает сложность, и машина может подождать наверху, вместо того чтобы вы спешили вниз.</p>
<h2>Лефке, Гемиконагы и побережье</h2>
<p><strong>Лефке</strong> — самый располагающий город запада: вода в открытых каналах, пальмы, старая мечеть и улицы домов османской эпохи с деревянными балконами и тяжёлыми дверями. Город вырос на меди и цитрусовых и сохранил ритм медленнее, чем где-либо на северном побережье. Кофе в тени площади — правильный способ провести здесь час.</p>
<p><strong>Гемиконагы</strong> на берегу внизу — старый рудничный порт: разрушенный погрузочный пирс, стоящий в воде, служит его ориентиром, вдоль дороги работают простые рыбные таверны. Восточнее <strong>пляжи залива Гюзельюрт</strong> длинные, плоские и почти незастроенные. Это не курортные пляжи, инфраструктуры там мало — в жаркий день именно в этом их привлекательность.</p>
<h2>Практические заметки</h2>
<ul>
  <li>Общественного транспорта, который разумно связывал бы эти точки, нет. Машина или водитель — единственный практичный вариант.</li>
  <li>Площадки открыты днём, зимой часы короче. Планируйте быть в Соли и Вуни не позже середины дня.</li>
  <li>Держите наличные на входные билеты и небольшие кафе.</li>
  <li>Обувь — с хорошей подошвой: и в Соли, и в Вуни под ногами неровно.</li>
</ul>
<p>Если хочется дня без руля, здесь хорошо работает <strong>аренда машины с водителем на полный день по фиксированной цене</strong>: шофёр ждёт на каждой остановке, цена согласована до выезда, и счётчик не идёт, пока вы в музее. О встрече в аэропорту и поездках в отели этого района — в нашем <a href="/ru/blog/guzelyurt-morphou-transfer-guide/">гиде по трансферам в Гюзельюрт</a>.</p>
<h2>Частые вопросы</h2>
<h3>Можно ли увидеть Гюзельюрт, Соли и Вуни за один день?</h3>
<p>Спокойно. Три точки лежат примерно в получасе друг от друга, а с Лефке и побережьем получается неспешный полный день из Кирении или Никосии.</p>
<h3>Далеко ли Гюзельюрт от Кирении?</h3>
<p>Около 45 минут по дороге. Из Никосии — примерно 30–35 минут, из аэропорта Эрджан — около 50 минут.</p>
<h3>Сложна ли дорога к дворцу Вуни?</h3>
<p>Финальный подъём узкий, крутой и однополосный, разъехаться почти негде. На обычной машине при аккуратной езде проехать можно, но многие предпочитают на этом участке водителя.</p>
<h3>Когда лучше ехать на запад?</h3>
<p>Весной, когда цветут цитрусовые и равнина зелёная, и осенью. В разгар лета тоже реально, если выезжать рано — в Соли и Вуни тени почти нет.</p>
<h3>Стоит ли заезжать на пляжи залива Гюзельюрт?</h3>
<p>Если нужна тишина — да. Они длинные, открытые и почти не застроенные, удобств мало. За шезлонгами и пляжными клубами лучше на побережье Кирении.</p>
<p>Планируете маршрут? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">забронируйте машину за две минуты</a>.</p>`,
    },
  },
  {
    slug: 'north-cyprus-villages-heritage-guide',
    date: '2026-07-22',
    title: {
      en: 'North Cyprus Villages: A Slow Day of Stone and Shade',
      tr: 'Kuzey Kıbrıs Köyleri: Taş, Gölge ve Yavaş Bir Gün',
      ru: 'Деревни Северного Кипра: медленный день камня и тени',
    },
    description: {
      en: 'A slow village day in North Cyprus: Bellapais abbey, Karmi, Ozanköy, Lapta, Büyükkonuk and Kalkanlı, with coffee-house etiquette and parking tips.',
      tr: 'Kuzey Kıbrıs köylerinde yavaş bir gün: Beylerbeyi Manastırı, Karaman, Ozanköy, Lapta, Büyükkonuk ve Kalkanlı, kahve adabı ve park önerileriyle.',
      ru: 'Медленный день по деревням Северного Кипра: аббатство Беллапаис, Карми, Озанкёй, Лапта, Бююкконук и Калканлы, с этикетом кофейни и советами о парковке.',
    },
    body: {
      en: `
<p>Most visitors to North Cyprus spend their days on the coast. The villages behind it are the counterpoint: stone churches with the doors ajar, squares under a single old tree, lanes too narrow for two cars, and a rhythm that does not respond to hurry. A village day is not a checklist. Pick three or four places, leave the map loose, and let a coffee run long.</p>
<h2>Bellapais and the villages above Kyrenia</h2>
<p><strong>Bellapais (Beylerbeyi)</strong> is the obvious start, and it earns it. The Gothic abbey stands on a shelf of rock with the mountains behind and the sea below, and the cloister and refectory survive well enough to read the whole plan from inside. The village around it is small and steep, with cafés facing the abbey walls. Go early or late — the middle of the day brings the coaches.</p>
<p><strong>Karmi (Karaman)</strong>, higher up the range, is different in kind: houses painted in ochre, blue and pink, gardens spilling over walls, and lanes that climb in short flights of steps. The setting among pines, with a long view down to the coast, is the reason to walk it. Park at the entrance and go on foot; inside, the lanes are barely a car wide.</p>
<p><strong>Ozanköy</strong> and <strong>Çatalköy</strong> sit lower, closer to Kyrenia — less picturesque but more lived-in, with olive presses, a couple of good village restaurants and a church tower above the roofs. Places to eat rather than photograph.</p>
<h2>Lapta and the western foothills</h2>
<p><strong>Lapta (Lapithos)</strong> spreads up the hillside west of Kyrenia in terraces, held together by the springs that made it prosperous. Water still runs in channels through the upper village, lemon and mulberry trees shade the lanes, and the old quarter keeps its arched doorways and courtyards. Drive up rather than staying on the coast road — the difference between lower and upper Lapta is the difference between a strip and a village.</p>
<p>Further west and inland, <strong>Kalkanlı</strong> is known for its ancient olive grove, where trees of enormous girth stand in open ground. It takes twenty quiet minutes and is worth the detour if you are heading towards Güzelyurt.</p>
<h2>East: Büyükkonuk and Tatlısu</h2>
<p><strong>Büyükkonuk</strong> has positioned itself as North Cyprus's eco-village: restored stone houses, craft workshops, village guesthouses, and seasonal festivals where local food and old trades are on show. It is one of the few places where you can watch bread being made rather than just eat it.</p>
<p>The road east from Çatalköy along the north coast to <strong>Tatlısu</strong> is one of the best drives on the island — the Beşparmak range on one side, empty sea on the other. Tatlısu is a small coastal village with a harbour and fish restaurants, and from there the mountain road climbs south towards the interior.</p>
<h2>Coffee-house etiquette</h2>
<p>Every village has a <strong>kahve</strong> — a coffee house on the square, usually with plastic chairs outside and backgammon within earshot. Visitors are welcome; a few things make it easier:</p>
<ul>
  <li>Sit down and wait to be served. There is no counter queue.</li>
  <li>Order Turkish coffee by sweetness: <strong>sade</strong> (no sugar), <strong>orta</strong> (medium), <strong>şekerli</strong> (sweet).</li>
  <li>Say <strong>merhaba</strong> on arrival. It is noticed.</li>
  <li>Pay at the end, in cash.</li>
  <li>Nobody will hurry you out. An hour over one coffee is the point.</li>
</ul>
<h2>What a village breakfast is</h2>
<p>A Cypriot village breakfast — <strong>köy kahvaltısı</strong> — arrives as many small plates at once: white cheese and hellim, olives, tomato and cucumber, eggs, honey and clotted cream, local jams, bread, and endless tea. It comes late morning rather than early, shared rather than portioned, and is normally enough that lunch becomes unnecessary. Order it for the table and go hungry.</p>
<h2>Practicalities: lanes, parking and pace</h2>
<ul>
  <li><strong>Lanes are narrow.</strong> In Karmi, upper Lapta and old Bellapais, streets were built for donkeys. Park at the edge and walk in.</li>
  <li><strong>Reversing is the norm.</strong> If you meet a car, one of you goes back — often a long way. This is where a driver who knows the village earns their keep.</li>
  <li><strong>Cash.</strong> Village cafés and small shops often take nothing else.</li>
  <li><strong>Shade.</strong> Squares are shaded; the walks between them are not. Go in the morning or after four.</li>
  <li><strong>Midday.</strong> Some village restaurants close in the afternoon. Call ahead if you are set on one.</li>
</ul>
<p>A village day works badly with a tight schedule and well with a <strong>full-day chauffeur at a fixed price</strong>: someone else handles the reversing on the narrow lanes, waits while you finish your coffee, and adjusts the route when a village turns out to be worth another hour.</p>
<h2>Frequently asked questions</h2>
<h3>Which North Cyprus village is worth visiting if I only have time for one?</h3>
<p>Bellapais, for the abbey and the setting. If you would rather walk lanes than see a monument, choose Karmi instead.</p>
<h3>How many villages can I see in a day?</h3>
<p>Three or four at a comfortable pace, especially if one includes a long breakfast or lunch. Trying for more turns the day into driving.</p>
<h3>Can I drive into the villages myself?</h3>
<p>Yes, but park at the edge. In the old centres of Karmi, Bellapais and upper Lapta, turning around is difficult and passing another car often means reversing.</p>
<h3>Do I need to book a village breakfast?</h3>
<p>At weekends it helps, as village restaurants fill with local families. On weekdays you can usually arrive and sit down.</p>
<h3>Is it acceptable to walk into a village coffee house as a visitor?</h3>
<p>Yes. Greet people, sit outside if the inside looks like a regulars' room, order coffee and pay in cash at the end.</p>
<p>Want the villages without the reversing? <a href="/en/routes/">See fixed prices</a> or <a href="/en/book/">book a car in two minutes</a>.</p>`,
      tr: `
<p>Kuzey Kıbrıs'a gelenlerin çoğu günlerini sahilde geçirir. Arkadaki köyler ise bunun karşı ağırlığıdır: kapısı aralık taş kiliseler, tek bir yaşlı ağacın altındaki meydanlar, iki araca yetmeyen sokaklar ve acele ettirilmeye cevap vermeyen bir ritim. Köy günü bir liste değildir. Üç dört yer seçin, haritayı gevşek tutun, kahve uzasın. İşte o günü etrafında kurmaya değer yerler.</p>
<h2>Beylerbeyi ve Girne'nin üstündeki köyler</h2>
<p><strong>Beylerbeyi</strong> bariz başlangıçtır ve bunu hak eder. Gotik <strong>Beylerbeyi Manastırı</strong> arkasında dağlar, altında deniz olan bir kaya sekisinde durur; avlu ve yemekhane, planın tamamını içeriden okuyabileceğiniz kadar iyi korunmuştur. Çevresindeki köy küçük ve diktir, kafeler manastır duvarlarına bakar. Erken ya da geç gidin — günün ortası tur otobüslerinin saatidir.</p>
<p>Dağın daha yukarısındaki <strong>Karaman</strong> ise başka bir tür: okra, mavi ve pembe boyalı evler, duvarlardan taşan bahçeler, kısa merdivenlerle tırmanan sokaklar. Büyük ölçüde uzun süredir burada yaşayan yabancılar tarafından restore edilmiştir ve öyle de görünür; ama çamların arasındaki konumu ve sahile inen uzun manzarası yürümek için asıl sebeptir. Girişte park edip yürüyün; içeride sokaklar ancak bir araç genişliğindedir.</p>
<p><strong>Ozanköy</strong> ve <strong>Çatalköy</strong> daha aşağıda, Girne'ye yakındır; daha az kartpostal, daha çok yaşanan yerlerdir — zeytin değirmenleri, birkaç iyi köy lokantası, damların üstünde bir çan kulesi. Fotoğraflamaktan çok yemek yenecek yerlerdir.</p>
<h2>Lapta ve batı etekleri</h2>
<p><strong>Lapta</strong>, Girne'nin batısında yamaca teraslar halinde yayılır; onu bir arada tutan şey, zenginleştiren kaynak sularıdır. Üst köyde su hâlâ kanallarda akar, limon ve dut ağaçları sokakları gölgeler, eski mahallede kemerli kapılı ve avlulu evler vardır. Sahil yolunda kalmayın, yukarı çıkın — aşağı Lapta ile yukarı Lapta arasındaki fark, bir yol kenarı ile bir köy arasındaki farktır.</p>
<p>Daha batıda ve içeride <strong>Kalkanlı</strong>, asırlık zeytinlikleriyle bilinir; devasa gövdeli ağaçlar açık arazide durur. Sessiz bir duraktır, yirmi dakika sürer, ama ağaçlar gerçekten yaşlıdır ve Güzelyurt yönüne gidiyorsanız sapmaya değer.</p>
<h2>Doğu: Büyükkonuk ve Tatlısu</h2>
<p><strong>Büyükkonuk</strong> kendini Kuzey Kıbrıs'ın eko-köyü olarak konumlandırmıştır: restore edilmiş taş evler, geleneksel el sanatları atölyeleri, köy pansiyonları ve yerel yemekle eski zanaatların sergilendiği mevsimlik festivaller. Ekmeğin sadece yenmediği, yapılışının da izlendiği birkaç yerden biridir.</p>
<p>Çatalköy'den kuzey sahili boyunca doğuya, <strong>Tatlısu</strong>'ya giden yol adanın en iyi sürüşlerinden biridir — bir yanda Beşparmak Dağları, diğer yanda boş deniz, aralarda hiç yapı olmayan uzun bölümler. Tatlısu'nun kendisi balık lokantaları ve küçük bir limanı olan sahil köyüdür. Oradan dağ yolu güneye, iç kesimlere ve Karpaz yoluna doğru tırmanır.</p>
<h2>Kahvehane adabı</h2>
<p>Her köyün bir <strong>kahvesi</strong> vardır — meydanda, dışarıda plastik sandalyeler, içeride kâğıt ya da tavla oynayanlar. Ziyaretçiler hoş karşılanır; birkaç şey işi kolaylaştırır:</p>
<ul>
  <li>Oturun ve servisi bekleyin. Tezgâhta sıra yoktur.</li>
  <li>Kahveyi şekerine göre söyleyin: <strong>sade</strong>, <strong>orta</strong>, <strong>şekerli</strong>.</li>
  <li>Girerken selam verin. Fark edilir.</li>
  <li>Hesabı sonunda ve nakit ödeyin. Küçük banknot makbuldür.</li>
  <li>Kimse sizi kaldırmaz. Tek kahveyle bir saat oturmak zaten meselenin kendisidir.</li>
</ul>
<h2>Köy kahvaltısı nedir?</h2>
<p><strong>Köy kahvaltısı</strong> tek seferde çok sayıda küçük tabak olarak gelir: beyaz peynir ve hellim, zeytin, domates ve salatalık, yumurta, bal ve kaymak, yöresel meyvelerden reçeller, ekmek ve bitmeyen çay. Erken değil, kuşluk vakti servis edilir; porsiyonlanmaz, sofra olarak paylaşılır ve genelde öğle yemeğini gereksiz kılacak kadar doyurucudur. Kişi başı değil, sofra olarak sipariş edin ve aç gidin.</p>
<h2>Pratik: dar sokaklar, park ve tempo</h2>
<ul>
  <li><strong>Sokaklar dardır.</strong> Karaman'da, yukarı Lapta'da ve eski Beylerbeyi'nde sokaklar eşek için yapılmıştır. Kenarda park edip yürüyün.</li>
  <li><strong>Geri gitmek normaldir.</strong> Karşıdan araç gelirse biriniz geri gider, çoğu zaman epeyce. Köyü bilen bir şoförün değerini burada anlarsınız.</li>
  <li><strong>Nakit.</strong> Köy kahveleri ve küçük dükkânlar çoğu zaman başka bir şey kabul etmez.</li>
  <li><strong>Gölge.</strong> Meydanlar gölgelidir, aralarındaki yürüyüşler değil. Sabah ya da dörtten sonra gidin.</li>
  <li><strong>Öğle arası.</strong> Bazı köy lokantaları öğleden sonra kapanır. Gözünüz bir yerde kaldıysa önceden arayın.</li>
</ul>
<p>Köy günü, kiralık araç ve sıkı programla kötü; <strong>sabit fiyatlı tam gün şoförle</strong> iyi gider: dar sokaklarda geri manevrayı başkası yapar, kahveniz bitene kadar beklenir ve bir köy bir saat daha hak ettiğinde güzergah kolayca değişir.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Tek bir köye vaktim varsa hangisini görmeliyim?</h3>
<p>Manastırı ve konumu için Beylerbeyi. Anıt görmek yerine sokak yürümek istiyorsanız Karaman'ı seçin.</p>
<h3>Bir günde kaç köy gezilir?</h3>
<p>Rahat tempoda üç ya da dört; biri uzun bir kahvaltı veya yemek içeriyorsa özellikle. Fazlası günü sürüşe çevirir.</p>
<h3>Köylere kendi aracımla girebilir miyim?</h3>
<p>Evet, ama kenarda park edin. Karaman, Beylerbeyi ve yukarı Lapta'nın eski merkezlerinde dönmek zordur ve karşılaşan araçlardan biri genelde geri gitmek zorunda kalır.</p>
<h3>Köy kahvaltısı için rezervasyon gerekir mi?</h3>
<p>Hafta sonu işe yarar; köy lokantaları yerli ailelerle dolar. Hafta içi genelde gidip oturabilirsiniz.</p>
<h3>Ziyaretçi olarak köy kahvesine girmek uygun mu?</h3>
<p>Evet. Selam verin, içerisi müdavim odası gibi duruyorsa dışarı oturun, kahve söyleyin ve sonunda nakit ödeyin. Orası kamusal bir yerdir, ziyaretçi olağandır.</p>
<p>Köyleri geri manevra derdi olmadan gezmek ister misiniz? <a href="/tr/routes/">Sabit fiyatlara bakın</a> ya da <a href="/tr/book/">iki dakikada araç ayırtın</a>.</p>`,
      ru: `
<p>Большинство приезжающих на Северный Кипр проводит дни на побережье. Деревни за ним — противовес: каменные церкви с приоткрытой дверью, площади под единственным старым деревом, переулки, в которые не разъедутся две машины, и ритм, который не отзывается на спешку. Деревенский день — не список галочек. Выберите три-четыре места, оставьте маршрут свободным и позвольте кофе затянуться. Вот вокруг чего стоит строить такой день.</p>
<h2>Беллапаис и деревни над Киренией</h2>
<p><strong>Беллапаис (Бейлербей)</strong> — очевидное начало, и оно того стоит. Готическое аббатство стоит на скальной полке: горы за спиной, море внизу; клуатр и трапезная сохранились настолько, что весь план читается изнутри. Деревня вокруг маленькая и крутая, кафе смотрят на стены аббатства. Приезжайте рано или ближе к вечеру — в середине дня подходят автобусы.</p>
<p><strong>Карми (Караман)</strong> выше по хребту — другого рода: дома, крашенные охрой, синим и розовым, сады, переваливающиеся через стены, переулки, поднимающиеся короткими лестницами. Деревню во многом восстановили давно живущие здесь иностранцы, и это заметно, но настоящая причина пройтись — положение среди сосен и длинный вид вниз, к побережью. Оставьте машину на въезде и идите пешком: внутри переулки едва в ширину автомобиля.</p>
<p><strong>Озанкёй</strong> и <strong>Чаталкёй</strong> лежат ниже, ближе к Кирении: менее открыточные, зато более обжитые — оливковые давильни, пара хороших деревенских ресторанов, колокольня над крышами. Сюда едут есть, а не фотографировать.</p>
<h2>Лапта и западные предгорья</h2>
<p><strong>Лапта (Лапитос)</strong> поднимается террасами по склону западнее Кирении, и держат её источники, которые когда-то сделали её зажиточной. В верхней деревне вода до сих пор идёт по открытым каналам, лимонные и тутовые деревья дают тень, а в старом квартале стоят дома с арочными входами и внутренними дворами. Не оставайтесь на прибрежной дороге, поднимитесь наверх — разница между нижней и верхней Лаптой это разница между шоссе и деревней.</p>
<p>Западнее и вглубь острова <strong>Калканлы</strong> известен древней оливковой рощей: деревья огромного обхвата стоят на открытой земле. Остановка тихая, минут на двадцать, но деревья действительно старые и стоят крюка, если вы едете в сторону Гюзельюрта.</p>
<h2>Восток: Бююкконук и Татлысу</h2>
<p><strong>Бююкконук</strong> заявил себя как эко-деревня Северного Кипра: восстановленные каменные дома, мастерские традиционных ремёсел, деревенские гостевые дома и сезонные фестивали, где показывают местную еду и старые ремёсла. Это одно из немногих мест, где хлеб можно не только съесть, но и увидеть, как его пекут.</p>
<p>Дорога на восток от Чаталкёя вдоль северного берега к <strong>Татлысу</strong> — одна из лучших на острове: хребет Бешпармак с одной стороны, пустое море с другой и длинные отрезки без единой постройки. Сам Татлысу — небольшая прибрежная деревня с рыбными тавернами и гаванью. Оттуда горная дорога уходит на юг, к внутренним районам и дороге на Карпаз.</p>
<h2>Этикет деревенской кофейни</h2>
<p>В каждой деревне есть <strong>кахве</strong> — кофейня на площади, обычно с пластиковыми стульями снаружи и картами или нардами внутри. Гостям здесь рады; несколько правил упрощают дело:</p>
<ul>
  <li>Садитесь и ждите, пока подойдут. Очереди у стойки нет.</li>
  <li>Заказывайте турецкий кофе по сладости: <strong>sade</strong> (без сахара), <strong>orta</strong> (средний), <strong>şekerli</strong> (сладкий).</li>
  <li>Поздоровайтесь при входе — это замечают.</li>
  <li>Платите в конце и наличными. Мелкие купюры кстати.</li>
  <li>Вас никто не поторопит. Просидеть час над одной чашкой — это и есть смысл.</li>
</ul>
<h2>Что такое деревенский завтрак</h2>
<p>Кипрский деревенский завтрак — <strong>köy kahvaltısı</strong> — приносят разом множеством маленьких тарелок: белый сыр и хелим, оливки, помидоры и огурцы, яйца, мёд и каймак, варенья из местных фруктов, хлеб и бесконечный чай. Подают его ближе к полудню, а не рано утром; он общий, а не порционный, и его обычно столько, что обед становится лишним. Заказывайте на стол, а не на человека, и приезжайте голодными.</p>
<h2>Практика: переулки, парковка и темп</h2>
<ul>
  <li><strong>Переулки узкие.</strong> В Карми, верхней Лапте и старом Беллапаисе улицы строили под ослов. Ставьте машину на краю и идите пешком.</li>
  <li><strong>Сдавать назад — норма.</strong> При встрече кто-то один отъезжает, часто далеко. Здесь водитель, знающий деревню, окупается.</li>
  <li><strong>Наличные.</strong> Деревенские кофейни и лавки часто ничего другого не принимают.</li>
  <li><strong>Тень.</strong> Площади в тени, дорога между ними — нет. Идите утром или после четырёх.</li>
  <li><strong>Дневной перерыв.</strong> Часть деревенских ресторанов закрывается днём. Если нацелились на конкретный, позвоните заранее.</li>
</ul>
<p>Деревенский день плохо сочетается с прокатной машиной и плотным расписанием и хорошо — с <strong>водителем на полный день по фиксированной цене</strong>: манёвры в узких переулках берёт на себя он, машина ждёт, пока вы допьёте кофе, а маршрут легко меняется, когда деревня заслуживает ещё часа.</p>
<h2>Частые вопросы</h2>
<h3>Какую деревню выбрать, если время есть только на одну?</h3>
<p>Беллапаис — ради аббатства и вида. Если хочется не памятника, а прогулки по переулкам, выбирайте Карми.</p>
<h3>Сколько деревень реально осмотреть за день?</h3>
<p>Три-четыре в спокойном темпе, особенно если в одной из них будет долгий завтрак или обед. Больше — и день превратится в дорогу.</p>
<h3>Можно ли въезжать в деревни на своей машине?</h3>
<p>Да, но паркуйтесь на краю. В старых центрах Карми, Беллапаиса и верхней Лапты развернуться трудно, а разъезд часто означает движение задним ходом.</p>
<h3>Нужно ли бронировать деревенский завтрак?</h3>
<p>На выходных лучше забронировать: деревенские рестораны заполняются местными семьями. В будни обычно можно просто приехать и сесть.</p>
<h3>Прилично ли гостю зайти в деревенскую кофейню?</h3>
<p>Да. Поздоровайтесь, сядьте снаружи, если внутри явно комната завсегдатаев, закажите кофе и заплатите наличными в конце. Это общественное место, и гости там обычное дело.</p>
<p>Хотите деревни без манёвров задним ходом? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">забронируйте машину за две минуты</a>.</p>`,
    },
  },
  {
    slug: 'guzelyurt-taksi-sehir-ici-sehir-disi-ogrenci',
    date: '2026-07-13',
    title: {
      en: 'Güzelyurt Taxi: In-Town, Out-of-Town and Student Rides',
      tr: 'Güzelyurt Taksi: Şehir İçi, Şehir Dışı ve Öğrenci Rehberi',
      ru: 'Такси в Гюзельюрте: по городу, за город и для студентов',
    },
    description: {
      en: 'A practical Güzelyurt taxi guide: fixed-price in-town rides, out-of-town trips to Nicosia, Kyrenia and Ercan Airport, and student rides.',
      tr: "Güzelyurt taksi rehberi: sabit fiyatlı şehir içi yolculuklar, Lefkoşa, Girne ve Ercan Havalimanı'na şehir dışı transferler ve öğrenci ulaşımı.",
      ru: 'Гид по такси в Гюзельюрте: поездки по городу по фиксированной цене, за город — в Никосию, Кирению и аэропорт Эрджан, и поездки для студентов.',
    },
    body: {
      en: `
<p>Güzelyurt is a spread-out, unhurried town, and that shapes how a taxi works here. Cars rarely wait on the street, evenings can be quiet, and the places people actually need — the town centre, the campuses, the coast at Lefke, the airport across the island — are all a little apart. A fixed-price Güzelyurt taxi solves that in one call: you know the fare before you leave, the car comes to your door, and the same service covers a five-minute hop and a cross-island run alike. Here's how in-town, out-of-town and student rides work.</p>
<h2>Why a taxi in Güzelyurt works differently</h2>
<p>Unlike the resort towns on the coast, Güzelyurt has few taxis circling for fares, and almost none waiting late at night. The town is also low and wide, so walking between the centre, the residential edges and the campuses isn't always practical — especially with shopping, luggage or after dark. Booking ahead with a fixed price removes the two usual worries: whether a car will actually turn up, and what it will cost when it does.</p>
<h2>In-town rides — around Güzelyurt</h2>
<p>Short, everyday journeys at a fixed local price, so a quick trip never turns into a haggle:</p>
<ul>
  <li>Into the <strong>town centre</strong> for the market, a bank or a meal</li>
  <li>To the <strong>hospital, a clinic or the pharmacy</strong></li>
  <li>Between your <strong>home or dorm and the campus</strong></li>
  <li>To the surrounding <strong>villages and the citrus groves</strong></li>
  <li>A safe ride <strong>home in the evening</strong> when nothing is on the street</li>
</ul>
<h2>Out-of-town and intercity rides</h2>
<p>The same fixed-price service takes you across the island without a meter running. Typical drive times from Güzelyurt:</p>
<ul>
  <li><strong>Nicosia (Lefkoşa):</strong> about 30–35 minutes</li>
  <li><strong>Ercan Airport:</strong> about 50 minutes</li>
  <li><strong>Kyrenia (Girne):</strong> about 45 minutes</li>
  <li><strong>Lefke &amp; Gemikonağı coast:</strong> about 20 minutes</li>
  <li><strong>Famagusta (Gazimağusa):</strong> about 1 hour 15 minutes</li>
</ul>
<p>Every out-of-town fare is agreed before you travel, and airport runs include flight tracking, so a delayed landing never costs you the car or the price.</p>
<h2>Rides built around student life</h2>
<p>Güzelyurt and the area around it are university country — the <strong>METU Northern Cyprus Campus</strong> at Kalkanlı, the <strong>European University of Lefke</strong>, and the <strong>Cyprus University of Health and Social Sciences (KSTÜ)</strong> — and a lot of what we do is student-shaped:</p>
<ul>
  <li><strong>Term-start and term-end airport runs</strong> — Ercan, or Larnaca/Paphos across the border — with luggage and a fixed price you can plan for</li>
  <li><strong>Campus and dorm trips</strong>, day or night — Kalkanlı (METU), Lefke and the KSTÜ area</li>
  <li><strong>Late, safe rides home</strong> when there's nothing waiting outside</li>
  <li><strong>Share the fare</strong> — split one car between friends heading the same way and the per-person cost drops</li>
  <li><strong>Regular runs</strong> — a weekly shop, a repeated campus route, or a monthly arrangement we quote up front</li>
</ul>
<p>Tell us it's a student trip when you book and we'll match the car to the group and the bags.</p>
<h2>Why a fixed-price taxi</h2>
<ul>
  <li><strong>Price agreed first</strong> — no meter, no surprise at the door</li>
  <li><strong>Comes to you</strong> — home, dorm, campus or hotel</li>
  <li><strong>Reliable after dark</strong> — booked ahead, not hoped for</li>
  <li><strong>One service for everything</strong> — a short hop or a cross-island run</li>
</ul>
<h2>Frequently asked questions</h2>
<h3>Can I get a taxi in Güzelyurt at night?</h3>
<p>Yes — book ahead and the car comes to your door at the agreed time. Because few taxis wait on the street late, an evening or late-night ride is exactly where booking a fixed-price car pays off.</p>
<h3>How long is a taxi from Güzelyurt to Ercan Airport?</h3>
<p>About 50 minutes, straight across the middle of the island with no border. The fare is fixed in advance and we track your flight for the return.</p>
<h3>Is there anything cheaper for students?</h3>
<p>Share the fare. Split one car between friends travelling the same way — to the airport at term-start, or a regular campus route — and the per-person cost drops. We also quote monthly or repeated runs up front.</p>
<h3>Do you do short in-town trips too, not just long ones?</h3>
<p>Yes. Short local rides around Güzelyurt run at a fixed local price — the centre, the campus, the hospital or an evening out.</p>
<h3>Can I set up a regular or monthly ride?</h3>
<p>Yes. If you have a repeated route — a weekly shop, a campus commute — tell us and we'll agree a fixed arrangement so the same car is there each time.</p>
<p><strong>Güzelyurt line — direct contact.</strong> Güzelyurt rides are handled directly by Halit Yeşilovalı — call or WhatsApp <a href="tel:+905488616939">+90 548 861 69 39</a> for availability and pickup.</p>
<p>Need a ride now or on a schedule? <a href="/en/routes/">See fixed prices</a> or <a href="/en/book/">book in two minutes</a>.</p>`,
      tr: `
<p>Güzelyurt geniş yayılan, telaşsız bir kasabadır ve bu, taksinin burada nasıl çalıştığını doğrudan belirler. Araçlar sokakta pek beklemez, akşamlar sessiz olabilir ve insanların gerçekten gitmesi gereken yerler — şehir merkezi, kampüsler, Lefke sahili, adanın öbür ucundaki havalimanı — hep birbirinden biraz uzaktır. Sabit fiyatlı bir <strong>Güzelyurt taksi</strong> hizmeti bunu tek aramayla çözer: ücreti yola çıkmadan bilirsiniz, araç kapınıza gelir ve aynı hizmet hem beş dakikalık kısa bir yolu hem de ada boyu bir yolculuğu kapsar. İşte şehir içi, şehir dışı ve öğrenciye özel yolculukların nasıl işlediği.</p>
<h2>Güzelyurt'ta taksi neden farklı çalışır?</h2>
<p>Sahildeki tatil kasabalarının aksine Güzelyurt'ta müşteri için tur atan çok az taksi vardır, gece geç saatte ise neredeyse hiç bulunmaz. Kasaba alçak ve geniştir; merkez, konut kenarları ve kampüsler arasında yürümek — özellikle alışverişle, bagajla ya da hava karardıktan sonra — her zaman pratik değildir. Önceden ve sabit fiyatla rezervasyon, iki klasik endişeyi ortadan kaldırır: araç gerçekten gelecek mi ve geldiğinde ne kadar tutacak.</p>
<h2>Şehir içi yolculuklar — Güzelyurt ve çevresi</h2>
<p>Sabit yerel fiyatla kısa, günlük yolculuklar; kısacık bir yol asla pazarlığa dönüşmez:</p>
<ul>
  <li>Pazar, banka ya da yemek için <strong>şehir merkezine</strong></li>
  <li><strong>Hastane, klinik ya da eczaneye</strong></li>
  <li><strong>Ev ya da yurt ile kampüs arasına</strong></li>
  <li>Çevre <strong>köylere ve narenciye bahçelerine</strong></li>
  <li>Sokakta hiçbir şey olmadığında <strong>akşam güvenle eve dönüş</strong></li>
</ul>
<h2>Şehir dışı ve şehirler arası yolculuklar</h2>
<p>Aynı sabit fiyatlı hizmet, taksimetre olmadan sizi adanın öbür ucuna götürür. Güzelyurt'tan tipik yolculuk süreleri:</p>
<ul>
  <li><strong>Lefkoşa:</strong> yaklaşık 30–35 dakika</li>
  <li><strong>Ercan Havalimanı:</strong> yaklaşık 50 dakika</li>
  <li><strong>Girne:</strong> yaklaşık 45 dakika</li>
  <li><strong>Lefke ve Gemikonağı sahili:</strong> yaklaşık 20 dakika</li>
  <li><strong>Gazimağusa:</strong> yaklaşık 1 saat 15 dakika</li>
</ul>
<p>Her şehir dışı ücret yola çıkmadan kararlaştırılır ve havalimanı yolculukları uçuş takibi içerir; böylece rötarlı bir iniş asla ne aracınıza ne de fiyatınıza mal olur.</p>
<h2>Öğrenciye özel ulaşım</h2>
<p>Güzelyurt ve çevresi bir üniversite bölgesidir — <strong>Kalkanlı'daki ODTÜ Kuzey Kıbrıs Kampüsü</strong>, <strong>Lefke Avrupa Üniversitesi</strong> ve <strong>Kıbrıs Sağlık ve Toplum Bilimleri Üniversitesi (KSTÜ)</strong> — ve yaptığımız işin büyük kısmı öğrenciye göre kurgulanır:</p>
<ul>
  <li><strong>Dönem başı ve dönem sonu havalimanı yolculukları</strong> — Ercan ya da sınır ötesinde Larnaka/Baf — bagajla ve önceden planlayabileceğiniz sabit fiyatla</li>
  <li>Gündüz ya da gece <strong>kampüs ve yurt yolculukları</strong> — Kalkanlı (ODTÜ), Lefke Avrupa ve KSTÜ bölgesi</li>
  <li>Dışarıda bekleyen hiçbir şey olmadığında <strong>geç saatte güvenli eve dönüş</strong></li>
  <li><strong>Ücreti paylaşın</strong> — aynı yöne giden arkadaşlarla tek aracı bölüşün, kişi başı maliyet düşsün</li>
  <li><strong>Düzenli yolculuklar</strong> — haftalık alışveriş, tekrar eden bir kampüs güzergahı ya da önceden fiyatladığımız aylık anlaşma</li>
</ul>
<p>Rezervasyon sırasında öğrenci yolculuğu olduğunu söyleyin; aracı gruba ve bagaja göre ayarlayalım.</p>
<h2>Neden sabit fiyatlı taksi?</h2>
<ul>
  <li><strong>Fiyat önce kararlaşır</strong> — taksimetre yok, kapıda sürpriz yok</li>
  <li><strong>Size gelir</strong> — ev, yurt, kampüs ya da otel</li>
  <li><strong>Hava karardıktan sonra da güvenilir</strong> — umut değil, önceden rezervasyon</li>
  <li><strong>Her şey için tek hizmet</strong> — kısa bir yol ya da ada boyu yolculuk</li>
</ul>
<h2>Sıkça sorulan sorular</h2>
<h3>Güzelyurt'ta gece taksi bulabilir miyim?</h3>
<p>Evet — önceden rezervasyon yapın, araç kararlaştırılan saatte kapınıza gelsin. Geç saatte sokakta çok az taksi beklediğinden, akşam ya da gece yolculuğu tam olarak sabit fiyatlı bir aracın işe yaradığı yerdir.</p>
<h3>Güzelyurt'tan Ercan Havalimanı'na taksi ne kadar sürer?</h3>
<p>Yaklaşık 50 dakika; adanın tam ortasından, sınır olmadan. Ücret önceden sabittir ve dönüş için uçuşunuzu takip ederiz.</p>
<h3>Öğrenciler için daha uygun bir seçenek var mı?</h3>
<p>Ücreti paylaşın. Aynı yöne giden arkadaşlarla tek aracı bölüşün — dönem başında havalimanına ya da düzenli bir kampüs güzergahında — kişi başı maliyet düşer. Aylık ya da tekrar eden yolculukları da önceden fiyatlarız.</p>
<h3>Sadece uzun yol değil, kısa şehir içi yolculuk da yapıyor musunuz?</h3>
<p>Evet. Güzelyurt içindeki kısa yerel yolculuklar sabit yerel fiyatla yapılır — merkez, kampüs, hastane ya da akşam gezmesi.</p>
<h3>Düzenli ya da aylık yolculuk ayarlayabilir miyim?</h3>
<p>Evet. Tekrar eden bir güzergahınız varsa — haftalık alışveriş, kampüs gidiş-gelişi — bize söyleyin, aynı araç her seferinde orada olacak şekilde sabit bir anlaşma yapalım.</p>
<p><strong>Güzelyurt hattı — doğrudan iletişim.</strong> Güzelyurt yolculuklarını doğrudan Halit Yeşilovalı yürütür — uygunluk ve alım için <a href="tel:+905488616939">+90 548 861 69 39</a> numarasını arayın ya da WhatsApp'tan yazın.</p>
<p>Şimdi ya da düzenli bir yolculuk mu lazım? <a href="/tr/routes/">Sabit fiyatlara bakın</a> ya da <a href="/tr/book/">iki dakikada rezervasyon yapın</a>.</p>`,
      ru: `
<p>Гюзельюрт — растянутый, неспешный город, и это определяет, как здесь работает такси. Машины редко стоят на улице, вечера бывают тихими, а места, куда действительно нужно попасть — центр, кампусы, побережье у Лефке, аэропорт на другом конце острова, — все немного в стороне друг от друга. Такси в Гюзельюрте по фиксированной цене решает это одним звонком: цену вы знаете до выезда, машина приезжает к двери, и одна и та же услуга покрывает и пятиминутную поездку, и дорогу через весь остров. Вот как устроены поездки по городу, за город и для студентов.</p>
<h2>Почему такси в Гюзельюрте работает иначе</h2>
<p>В отличие от курортных городов на побережье, в Гюзельюрте мало такси, кружащих в поисках пассажиров, и почти нет их поздно вечером. Город низкий и просторный, поэтому идти пешком между центром, жилыми окраинами и кампусами не всегда удобно — особенно с покупками, багажом или после наступления темноты. Бронирование заранее с фиксированной ценой снимает две обычные тревоги: приедет ли машина и сколько это будет стоить.</p>
<h2>Поездки по городу — по Гюзельюрту</h2>
<p>Короткие ежедневные поездки по фиксированной местной цене, чтобы короткий путь никогда не превращался в торг:</p>
<ul>
  <li>В <strong>центр города</strong> — на рынок, в банк или поесть</li>
  <li>В <strong>больницу, клинику или аптеку</strong></li>
  <li>Между <strong>домом или общежитием и кампусом</strong></li>
  <li>В окрестные <strong>деревни и цитрусовые сады</strong></li>
  <li>Безопасная поездка <strong>домой вечером</strong>, когда на улице ничего нет</li>
</ul>
<h2>Поездки за город и между городами</h2>
<p>Та же услуга с фиксированной ценой везёт вас через остров без счётчика. Типичное время в пути из Гюзельюрта:</p>
<ul>
  <li><strong>Никосия (Лефкоша):</strong> около 30–35 минут</li>
  <li><strong>Аэропорт Эрджан:</strong> около 50 минут</li>
  <li><strong>Кирения (Гирне):</strong> около 45 минут</li>
  <li><strong>Побережье Лефке и Гемиконагы:</strong> около 20 минут</li>
  <li><strong>Фамагуста (Газимагуса):</strong> около 1 ч 15 мин</li>
</ul>
<p>Цена любой загородной поездки согласуется до выезда, а поездки в аэропорт включают отслеживание рейса, так что задержка посадки никогда не стоит вам ни машины, ни цены.</p>
<h2>Поездки под студенческую жизнь</h2>
<p>Гюзельюрт и его окрестности — университетский край: <strong>кампус METU (ODTÜ) Северного Кипра</strong> в Калканлы, <strong>Европейский университет Лефке</strong> и <strong>Кипрский университет здоровья и социальных наук (KSTÜ)</strong>, — и многое из того, что мы делаем, устроено под студентов:</p>
<ul>
  <li><strong>Поездки в аэропорт в начале и конце семестра</strong> — Эрджан или Ларнака/Пафос через границу — с багажом и фиксированной ценой, которую можно спланировать</li>
  <li><strong>Поездки к кампусу и общежитию</strong>, днём и ночью — Калканлы (METU/ODTÜ), Лефке и район KSTÜ</li>
  <li><strong>Поздняя безопасная дорога домой</strong>, когда снаружи ничего не ждёт</li>
  <li><strong>Разделите цену</strong> — поделите одну машину с друзьями по пути, и цена на человека падает</li>
  <li><strong>Регулярные поездки</strong> — еженедельные покупки, повторяющийся маршрут к кампусу или месячная договорённость, которую мы оцениваем заранее</li>
</ul>
<p>Скажите при бронировании, что это студенческая поездка, и мы подберём машину под группу и багаж.</p>
<h2>Почему такси с фиксированной ценой</h2>
<ul>
  <li><strong>Цена согласована заранее</strong> — без счётчика и без сюрприза у двери</li>
  <li><strong>Приезжает к вам</strong> — дом, общежитие, кампус или отель</li>
  <li><strong>Надёжно после темноты</strong> — забронировано, а не наудачу</li>
  <li><strong>Одна услуга на всё</strong> — короткий путь или дорога через остров</li>
</ul>
<h2>Частые вопросы</h2>
<h3>Можно ли взять такси в Гюзельюрте ночью?</h3>
<p>Да — забронируйте заранее, и машина приедет к двери в согласованное время. Поскольку поздно вечером такси на улице почти нет, вечерняя или ночная поездка — именно тот случай, когда машина с фиксированной ценой окупается.</p>
<h3>Сколько ехать на такси из Гюзельюрта до аэропорта Эрджан?</h3>
<p>Около 50 минут, прямо через центр острова, без границы. Цена фиксируется заранее, а для обратной дороги мы отслеживаем ваш рейс.</p>
<h3>Есть ли что-то дешевле для студентов?</h3>
<p>Разделите цену. Поделите одну машину с друзьями по пути — в аэропорт в начале семестра или на регулярном маршруте к кампусу — и цена на человека падает. Месячные и повторяющиеся поездки мы также оцениваем заранее.</p>
<h3>Вы делаете и короткие поездки по городу, не только дальние?</h3>
<p>Да. Короткие местные поездки по Гюзельюрту идут по фиксированной местной цене — центр, кампус, больница или вечерний выход.</p>
<h3>Можно ли договориться о регулярной или месячной поездке?</h3>
<p>Да. Если у вас есть повторяющийся маршрут — еженедельные покупки, дорога к кампусу — скажите нам, и мы согласуем фиксированную договорённость, чтобы та же машина была на месте каждый раз.</p>
<p><strong>Линия Гюзельюрт — прямой контакт.</strong> Поездки в Гюзельюрт выполняет напрямую Халит Йешиловалы — звоните или пишите в WhatsApp на <a href="tel:+905488616939">+90 548 861 69 39</a> для уточнения и подачи.</p>
<p>Нужна поездка сейчас или по расписанию? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">забронируйте за две минуты</a>.</p>`,
    },
  },
  {
    // frontend/content/blog/*/… MDX yazısından taşındı.
    slug: 'cyprus-airport-transfer-guide',
    date: '2026-05-01',
    title: {
      en: 'Cyprus Airport Transfer Guide: Everything You Need to Know',
      tr: 'Kıbrıs Havalimanı Transfer Rehberi: Bilmeniz Gereken Her Şey',
      ru: 'Гид по трансферам из аэропортов Кипра: всё, что нужно знать',
    },
    description: {
      en: "A complete guide to Cyprus's three airports — Ercan, Larnaca and Paphos — including crossing to the north to Kyrenia, Famagusta, İskele and Güzelyurt.",
      tr: "Kıbrıs'ın üç havalimanı — Ercan, Larnaka ve Baf — ve Girne, Gazimağusa, İskele ile Güzelyurt gibi kuzey hedeflerine geçiş için eksiksiz rehber.",
      ru: 'Полный гид по трём аэропортам Кипра — Эрджан, Ларнака и Пафос — включая переезд на север в Кирению, Фамагусту, Искеле и Гюзельюрт.',
    },
    body: {
      en: `
<p>Cyprus is served by three airports, and choosing the right one — and knowing whether your journey crosses the island's dividing line — is the key to a smooth transfer. This guide walks through all three, how long each takes to the main destinations, how the border crossing works, and how a private transfer handles both the airport run and getting around once you're there.</p>
<h2>The three airports</h2>
<p><strong>Ercan Airport (ECN)</strong> sits in the north, near Nicosia, and is the closest airport to Kyrenia, Famagusta, İskele and Güzelyurt. It's served almost entirely by flights connecting through Turkey. <strong>Larnaca (LCA)</strong> and <strong>Paphos (PFO)</strong> are in the south and carry most direct European routes — so many visitors heading north actually fly into Larnaca and cross the border by road. Larnaca is the busiest and most central; Paphos is the western gateway, handy for the west coast and, via the Bostancı crossing, for Güzelyurt and Lefke.</p>
<h2>Typical transfer times</h2>
<p><strong>From Ercan:</strong></p>
<ul>
  <li>Kyrenia (Girne): about 35 minutes</li>
  <li>Famagusta (Gazimağusa): about 40 minutes</li>
  <li>İskele / Long Beach: about 45 minutes</li>
  <li>Güzelyurt (Morphou): about 50 minutes</li>
</ul>
<p><strong>From Larnaca, crossing the border:</strong></p>
<ul>
  <li>Nicosia: about 50 minutes</li>
  <li>Kyrenia: about 75 minutes</li>
  <li>Famagusta: about 60 minutes</li>
  <li>Güzelyurt: about 1h 45m via the western crossing</li>
</ul>
<p>Paphos is the longest run to the north, so for northern hotels it's usually chosen only when the flight is much cheaper or more convenient than the alternatives.</p>
<h2>Which airport should you choose?</h2>
<p>If you can find a direct flight, the honest answer is often "whichever is cheapest door to door." Ercan wins on distance and simplicity for northern hotels but almost always means a connection through Turkey. Larnaca and Paphos offer direct European flights and more choice of times; the border crossing adds 20–30 minutes but is completely routine. Because every transfer fare is fixed and quoted before you book, you can compare the true landed cost of each option in advance rather than guessing.</p>
<h2>Crossing to North Cyprus</h2>
<p>If you land at Larnaca or Paphos but your hotel is in the north — Kyrenia, İskele, Güzelyurt or Lefke — your transfer crosses the Green Line at a checkpoint. It's routine: bring your passport, stay in the car, and your chauffeur handles the rest. There's no fee for passengers, and officers usually stamp a separate slip rather than your passport. For destinations in the west, such as Güzelyurt and Lefke, we use the Bostancı (Astromeritis) crossing, which is faster than routing through Nicosia.</p>
<h2>Why choose a private transfer?</h2>
<p>Cyprus has limited public transport, especially outside the cities and across the divide. A private transfer offers:</p>
<ul>
  <li><strong>Fixed price</strong> — agreed in advance, no meter running</li>
  <li><strong>Door-to-door service</strong> — no shared shuttles, no stops</li>
  <li><strong>Flight monitoring</strong> — your driver adjusts for delays</li>
  <li><strong>Border know-how</strong> — we cross the checkpoint every day</li>
</ul>
<h2>Not just the airport — local rides too</h2>
<p>The same fixed-price service works once you've arrived. Beyond airport runs we handle <strong>şehir içi (in-town) and inter-town journeys</strong> at fixed local prices — dinner on Kyrenia harbour, a day trip to Famagusta's old town or the Karpaz peninsula, a hospital or pharmacy run, a casino-hotel evening, or simply getting between your resort and the town centre when local taxis are scarce. Arrange it when you book, or message us during your stay.</p>
<h2>Booking tips</h2>
<ol>
  <li>Book at least 24 hours in advance</li>
  <li>Include your flight number in the notes — we use it to track your arrival</li>
  <li>Choose round trip if you need a return journey — it saves money</li>
  <li>Select extras like child seats when booking, not at the last minute</li>
</ol>
<h2>Frequently asked questions</h2>
<h3>Which airport is cheapest for North Cyprus?</h3>
<p>It depends on your flight. Ercan is closest but usually needs a Turkey connection; a cheap direct flight into Larnaca can work out lower door-to-door even with the crossing. Compare fixed transfer fares before you book.</p>
<h3>Can one transfer take me across the border?</h3>
<p>Yes — you stay in the same car the whole way. The crossing adds about 20–30 minutes and there's no passenger fee.</p>
<h3>Do you only do airport transfers?</h3>
<p>No. We also run local and inter-town trips at fixed prices, so you're covered for the whole stay, not just the airport.</p>
<p>Ready to book your transfer? <a href="/en/book/">Book now</a> or see <a href="/en/routes/">fixed prices for every route</a>.</p>`,
      tr: `
<p>Kıbrıs'a üç havalimanı hizmet verir; doğru olanı seçmek — ve yolculuğunuzun adayı bölen hattı geçip geçmeyeceğini bilmek — sorunsuz bir transferin anahtarıdır. Bu rehber, üç havalimanını, ana hedeflere sürelerini, sınır geçişinin nasıl işlediğini ve özel bir transferin hem havalimanı yolculuğunu hem de vardıktan sonra ulaşımı nasıl hallettiğini anlatır.</p>
<h2>Üç havalimanı</h2>
<p><strong>Ercan Havalimanı (ECN)</strong> kuzeyde, Lefkoşa yakınındadır ve Girne, Gazimağusa, İskele ile Güzelyurt'a en yakın havalimanıdır. Neredeyse tamamen Türkiye üzerinden aktarmalı uçuşlarla hizmet verir. <strong>Larnaka (LCA)</strong> ve <strong>Baf (PFO)</strong> güneydedir ve direkt Avrupa seferlerinin çoğunu taşır — bu yüzden kuzeye gelen birçok ziyaretçi aslında Larnaka'ya inip sınırı karayoluyla geçer. Larnaka en yoğun ve en merkezî olanıdır; Baf ise batı kapısıdır, batı kıyısı için ve Bostancı geçişi üzerinden Güzelyurt ile Lefke için elverişlidir.</p>
<h2>Tipik transfer süreleri</h2>
<p><strong>Ercan'dan:</strong></p>
<ul>
  <li>Girne: yaklaşık 35 dakika</li>
  <li>Gazimağusa: yaklaşık 40 dakika</li>
  <li>İskele / Long Beach: yaklaşık 45 dakika</li>
  <li>Güzelyurt: yaklaşık 50 dakika</li>
</ul>
<p><strong>Larnaka'dan, sınır geçişiyle:</strong></p>
<ul>
  <li>Lefkoşa: yaklaşık 50 dakika</li>
  <li>Girne: yaklaşık 75 dakika</li>
  <li>Gazimağusa: yaklaşık 60 dakika</li>
  <li>Güzelyurt: batı geçişiyle yaklaşık 1 saat 45 dakika</li>
</ul>
<p>Baf, kuzeye en uzun yolculuktur; bu yüzden kuzey otelleri için genellikle yalnızca uçuş diğerlerinden çok daha ucuz veya uygun olduğunda tercih edilir.</p>
<h2>Hangi havalimanını seçmeli?</h2>
<p>Direkt uçuş bulabiliyorsanız, dürüst cevap çoğu zaman "kapıdan kapıya hangisi en ucuzsa" olur. Ercan, kuzey otelleri için mesafe ve basitlikte kazanır ama neredeyse her zaman Türkiye üzerinden aktarma demektir. Larnaka ve Baf direkt Avrupa uçuşları ve daha çok saat seçeneği sunar; sınır geçişi 20–30 dakika ekler ama tamamen rutindir. Her transfer ücreti önceden sabit olarak verildiğinden, tahmin yürütmek yerine her seçeneğin gerçek toplam maliyetini önceden karşılaştırabilirsiniz.</p>
<h2>Kuzey Kıbrıs'a geçiş</h2>
<p>Larnaka veya Baf'a inip oteliniz kuzeydeyse — Girne, İskele, Güzelyurt ya da Lefke — transferiniz Yeşil Hat'tı bir kontrol noktasında geçer. Bu rutin bir işlemdir: pasaportunuzu yanınıza alın, arabada kalın, gerisini şoförünüz halleder. Yolculardan ücret alınmaz ve görevliler genellikle pasaportunuza değil ayrı bir kağıda mühür basar. Güzelyurt ve Lefke gibi batıdaki noktalar için, Lefkoşa üzerinden gitmekten daha hızlı olan Bostancı (Astromeritis) geçişini kullanırız.</p>
<h2>Neden özel transfer?</h2>
<p>Kıbrıs'ta toplu taşıma, özellikle şehir dışında ve hattın iki yakası arasında sınırlıdır. Özel transfer size şunları sunar:</p>
<ul>
  <li><strong>Sabit fiyat</strong> — önceden kararlaştırılmış, taksimetre yok</li>
  <li><strong>Kapıdan kapıya hizmet</strong> — paylaşımlı servis yok, ara durak yok</li>
  <li><strong>Uçuş takibi</strong> — sürücünüz gecikmeler için ayarlama yapar</li>
  <li><strong>Sınır tecrübesi</strong> — kontrol noktasını her gün geçiyoruz</li>
</ul>
<h2>Yalnızca havalimanı değil — şehir içi de</h2>
<p>Aynı sabit fiyatlı hizmet, vardıktan sonra da geçerlidir. Havalimanı yolculuklarının ötesinde <strong>şehir içi ve şehirler arası yolculukları</strong> sabit yerel fiyatlarla düzenliyoruz — Girne limanında akşam yemeği, Gazimağusa'nın eski şehrine ya da Karpaz yarımadasına günübirlik gezi, hastane ya da eczane yolculuğu, casino oteli akşamı ya da yerel taksilerin az olduğu saatlerde tesisinizle şehir merkezi arasında gidip gelme. Rezervasyon sırasında ayarlayın ya da konaklamanız sırasında bize yazın.</p>
<h2>Rezervasyon İpuçları</h2>
<ol>
  <li>En az 24 saat önceden rezervasyon yapın</li>
  <li>Notlar alanına uçuş numaranızı ekleyin — varışınızı takip ederiz</li>
  <li>Dönüş yolculuğu gerekiyorsa gidiş-dönüş seçeneğini seçin</li>
  <li>Çocuk koltuğu gibi ekstraları rezervasyon sırasında seçin</li>
</ol>
<h2>Sıkça sorulan sorular</h2>
<h3>Kuzey Kıbrıs için hangi havalimanı en ucuz?</h3>
<p>Uçuşunuza bağlıdır. Ercan en yakınıdır ama genellikle Türkiye aktarması gerektirir; Larnaka'ya ucuz bir direkt uçuş, geçişle bile kapıdan kapıya daha uygun çıkabilir. Rezervasyondan önce sabit transfer ücretlerini karşılaştırın.</p>
<h3>Tek bir transfer beni sınırın öbür tarafına götürebilir mi?</h3>
<p>Evet — yol boyunca aynı araçta kalırsınız. Geçiş yaklaşık 20–30 dakika ekler ve yolcu ücreti yoktur.</p>
<h3>Sadece havalimanı transferi mi yapıyorsunuz?</h3>
<p>Hayır. Yerel ve şehirler arası yolculukları da sabit fiyatlarla yaparız, böylece yalnızca havalimanı için değil tüm tatiliniz boyunca yanınızdayız.</p>
<p>Transferinizi rezerve etmeye hazır mısınız? <a href="/tr/book/">Rezervasyon yap</a> veya <a href="/tr/routes/">tüm güzergahların sabit fiyatlarına</a> göz atın.</p>`,
      ru: `
<p>Кипр обслуживают три аэропорта, и выбрать правильный — а также понять, пересекает ли ваша поездка разделительную линию острова, — ключ к спокойному трансферу. Этот гид проходит по всем трём: сколько ехать до основных мест, как работает переход границы и как частный трансфер берёт на себя и дорогу из аэропорта, и передвижение на месте.</p>
<h2>Три аэропорта</h2>
<p><strong>Аэропорт Эрджан (ECN)</strong> расположен на севере, рядом с Никосией, и ближе всего к Кирении, Фамагусте, Искеле и Гюзельюрту. Его обслуживают почти исключительно рейсы со стыковкой через Турцию. <strong>Ларнака (LCA)</strong> и <strong>Пафос (PFO)</strong> находятся на юге и принимают большинство прямых европейских рейсов — поэтому многие гости севера прилетают именно в Ларнаку и пересекают границу по дороге. Ларнака — самый загруженный и центральный; Пафос — западные ворота, удобные для западного побережья и, через переход Бостанджи, для Гюзельюрта и Лефке.</p>
<h2>Типичное время трансфера</h2>
<p><strong>Из Эрджана:</strong></p>
<ul>
  <li>Кирения (Гирне): около 35 минут</li>
  <li>Фамагуста (Газимагуса): около 40 минут</li>
  <li>Искеле / Лонг-Бич: около 45 минут</li>
  <li>Гюзельюрт (Морфу): около 50 минут</li>
</ul>
<p><strong>Из Ларнаки, с пересечением границы:</strong></p>
<ul>
  <li>Никосия: около 50 минут</li>
  <li>Кирения: около 75 минут</li>
  <li>Фамагуста: около 60 минут</li>
  <li>Гюзельюрт: около 1 ч 45 мин через западный переход</li>
</ul>
<p>Пафос — самая долгая дорога на север, поэтому для северных отелей его выбирают обычно только тогда, когда рейс заметно дешевле или удобнее остальных.</p>
<h2>Какой аэропорт выбрать?</h2>
<p>Если удаётся найти прямой рейс, честный ответ часто — «тот, что дешевле от двери до двери». Эрджан выигрывает в расстоянии и простоте для северных отелей, но почти всегда означает стыковку через Турцию. Ларнака и Пафос дают прямые европейские рейсы и больше выбора по времени; переход добавляет 20–30 минут, но это совершенно обычное дело. Поскольку цена каждого трансфера фиксируется и называется до бронирования, вы можете заранее сравнить реальную итоговую стоимость каждого варианта, а не гадать.</p>
<h2>Пересечение в Северный Кипр</h2>
<p>Если вы приземляетесь в Ларнаке или Пафосе, а отель на севере — Кирения, Искеле, Гюзельюрт или Лефке — трансфер пересекает «зелёную линию» на контрольно-пропускном пункте. Это обычная процедура: возьмите паспорт, оставайтесь в машине, остальное сделает водитель. С пассажиров плата не берётся, а штамп обычно ставят на отдельный листок, а не в паспорт. Для западных направлений, таких как Гюзельюрт и Лефке, мы используем переход Бостанджи (Астромеритис) — это быстрее, чем ехать через Никосию.</p>
<h2>Почему стоит выбрать частный трансфер?</h2>
<p>На Кипре ограниченный общественный транспорт, особенно за пределами городов и между двумя частями острова. Частный трансфер даёт:</p>
<ul>
  <li><strong>Фиксированная цена</strong> — оговорена заранее, счётчик не работает</li>
  <li><strong>Услуга «от двери до двери»</strong> — без совместных маршрутных такси</li>
  <li><strong>Отслеживание рейса</strong> — водитель скорректирует время при задержке</li>
  <li><strong>Опыт на границе</strong> — мы пересекаем пункт каждый день</li>
</ul>
<h2>Не только аэропорт — поездки по городу тоже</h2>
<p>Та же услуга по фиксированной цене работает и после приезда. Помимо трансферов из аэропорта мы организуем <strong>поездки по городу (şehir içi) и между городами</strong> по фиксированным местным ценам — ужин в гавани Кирении, поездку на день в старый город Фамагусты или на полуостров Карпаз, дорогу в больницу или аптеку, вечер в казино-отеле или просто путь между вашим курортом и центром города, когда местных такси мало. Договоритесь при бронировании или напишите нам во время поездки.</p>
<h2>Советы по бронированию</h2>
<ol>
  <li>Бронируйте минимум за 24 часа</li>
  <li>Укажите номер рейса в примечаниях — мы отследим прибытие</li>
  <li>Выбирайте «туда и обратно», если нужна обратная поездка</li>
  <li>Заказывайте детское кресло при бронировании</li>
</ol>
<h2>Частые вопросы</h2>
<h3>Какой аэропорт дешевле для Северного Кипра?</h3>
<p>Зависит от рейса. Эрджан ближе всего, но обычно требует стыковки через Турцию; дешёвый прямой рейс в Ларнаку может выйти дешевле от двери до двери даже с переходом. Сравните фиксированные цены трансфера до бронирования.</p>
<h3>Может ли один трансфер провезти меня через границу?</h3>
<p>Да — вы остаётесь в той же машине всю дорогу. Переход добавляет около 20–30 минут, и платы с пассажиров нет.</p>
<h3>Вы делаете только трансферы из аэропорта?</h3>
<p>Нет. Мы также возим по городу и между городами по фиксированным ценам, так что вы под опекой всю поездку, а не только в аэропорту.</p>
<p>Готовы забронировать трансфер? <a href="/ru/book/">Забронировать</a> или посмотрите <a href="/ru/routes/">фиксированные цены на все маршруты</a>.</p>`,
    },
  },
  {
    slug: 'larnaca-airport-arrival-guide',
    date: '2026-07-01',
    title: {
      en: 'Landing at Larnaca Airport: A Calm Arrival Guide',
      tr: 'Larnaka Havalimanına İniş: Sakin Bir Varış Rehberi',
      ru: 'Прилёт в аэропорт Ларнаки: спокойный гид по прибытию',
    },
    description: {
      en: 'What to expect from touchdown to your chauffeur — passport control, luggage, and where we meet you at Larnaca International Airport.',
      tr: 'İnişten şoförünüze kadar sizi neler bekliyor — pasaport kontrolü, bagaj ve Larnaka Havalimanında sizi nerede karşıladığımız.',
      ru: 'Что ждёт вас от посадки до встречи с водителем — паспортный контроль, багаж и место встречи в аэропорту Ларнаки.',
    },
    body: {
      en: `
<p>Larnaca International Airport (LCA) is compact by European standards — from the moment your wheels touch the runway, you are rarely more than twenty minutes from the arrivals hall. It's the island's busiest airport and, for many travellers heading to either side of Cyprus, the first taste of the holiday. Here is how a typical arrival unfolds, where your chauffeur will be waiting, and what happens next.</p>
<h2>Passport control and luggage</h2>
<p>EU passport holders usually clear immigration in under ten minutes. Non-EU travellers should allow fifteen to twenty-five minutes at peak hours — roughly 10:00–14:00 and 20:00–23:00 in summer, when several flights land together. Baggage reclaim is directly after passport control, and trolleys are free. There's an ATM, a currency exchange and a SIM-card desk in the hall if you need them before you set off.</p>
<h2>Where we meet you</h2>
<p>Your chauffeur waits in the arrivals hall, directly opposite the exit doors, holding a sign with your name. There is no need to call or search — walk out, look ahead, and you will see us. We track your flight from departure, so a delayed landing never shortens your included waiting time, and an early one is no problem either.</p>
<h2>The first minutes of your transfer</h2>
<p>Your chauffeur handles the luggage, walks you to the car — a Mercedes E-Class or equivalent, parked minutes away — and confirms your destination before setting off. Bottled water is waiting in the cabin. From kerb to highway takes about five minutes, and the fare was fixed before you travelled, so there's nothing to agree at the roadside.</p>
<h2>Onward across the island — including the north</h2>
<p>Larnaca is central, which makes it a practical arrival point for the whole island. Nicosia is about 50 minutes; the north — Kyrenia, Famagusta, İskele, Bafra or Güzelyurt — is reached by crossing the Green Line, a routine part of the drive that adds only 20–30 minutes. You stay in the car, passports ready, no passenger fee. For western destinations like Güzelyurt and Lefke we use the faster Bostancı (Astromeritis) crossing rather than routing through Nicosia.</p>
<h2>Not just the airport — local rides too</h2>
<p>Once you've arrived, the same fixed-price service covers getting around. We run <strong>şehir içi (in-town) and inter-town journeys</strong> too — a restaurant across town, a day trip, a hospital or pharmacy run, or the return leg to the airport — so you're looked after for the whole stay, not just the landing.</p>
<h2>Frequently asked questions</h2>
<h3>How long from landing to leaving the airport?</h3>
<p>Usually 20–30 minutes: passport control, baggage, and a short walk to the car. Non-EU passports at peak times can add a little.</p>
<h3>What if my flight is delayed?</h3>
<p>We track it and adjust. Your driver is there when you actually land, and your included waiting time isn't shortened.</p>
<h3>Can you take me across the border to the north?</h3>
<p>Yes — it's one of our most common routes. The same car crosses the checkpoint; there's no passenger fee and the fare is fixed.</p>
<p>Travelling onwards to Kyrenia, Famagusta or Güzelyurt — or crossing to the north? Fixed prices for every route are on our <a href="/en/routes/">routes page</a> — no meters, no surprises — or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>Larnaka Uluslararası Havalimanı (LCA) Avrupa standartlarına göre kompakt bir havalimanı — tekerlekler piste değdiği andan itibaren varış salonuna nadiren yirmi dakikadan uzun sürer. Adanın en yoğun havalimanıdır ve Kıbrıs'ın her iki yakasına gidenler için çoğu zaman tatilin ilk tadıdır. İşte tipik bir varış nasıl ilerler, şoförünüz sizi nerede bekler ve sonrasında ne olur.</p>
<h2>Pasaport kontrolü ve bagaj</h2>
<p>AB pasaportu sahipleri genellikle on dakikadan kısa sürede pasaport kontrolünden geçer. AB dışı yolcular yoğun saatlerde — yazın kabaca 10:00–14:00 ve 20:00–23:00, birkaç uçuşun birlikte indiği saatler — on beş ila yirmi beş dakika ayırmalı. Bagaj alımı pasaport kontrolünün hemen ardındadır ve arabalar ücretsizdir. Yola çıkmadan önce ihtiyacınız olursa salonda ATM, döviz bürosu ve SIM kart bankosu bulunur.</p>
<h2>Sizi nerede karşılıyoruz</h2>
<p>Şoförünüz varış salonunda, çıkış kapılarının tam karşısında, adınızın yazılı olduğu tabelayla bekler. Aramanıza ya da etrafa bakınmanıza gerek yok — dışarı çıkın, karşıya bakın, bizi göreceksiniz. Uçuşunuzu kalkıştan itibaren takip ederiz; rötarlı bir iniş dahil olan bekleme sürenizi asla kısaltmaz, erken bir iniş de sorun değildir.</p>
<h2>Transferinizin ilk dakikaları</h2>
<p>Şoförünüz bagajlarınızı alır, sizi birkaç dakika mesafede park etmiş araca — Mercedes E-Serisi veya muadili — götürür ve yola çıkmadan önce varış noktanızı teyit eder. Kabinde su hazırdır. Kapıdan otoyola çıkış yaklaşık beş dakika sürer ve ücret yola çıkmadan sabitlendiğinden yol kenarında anlaşılacak bir şey yoktur.</p>
<h2>Ada genelinde devam — kuzey dahil</h2>
<p>Larnaka merkezîdir; bu da onu tüm ada için pratik bir varış noktası yapar. Lefkoşa yaklaşık 50 dakikadır; kuzeye — Girne, Gazimağusa, İskele, Bafra ya da Güzelyurt — Yeşil Hat'tı geçerek ulaşılır; bu, yolculuğun yalnızca 20–30 dakika ekleyen rutin bir parçasıdır. Araçta kalırsınız, pasaportlar hazır, yolcu ücreti yok. Güzelyurt ve Lefke gibi batı noktaları için, Lefkoşa üzerinden gitmek yerine daha hızlı olan Bostancı (Astromeritis) geçişini kullanırız.</p>
<h2>Yalnızca havalimanı değil — şehir içi de</h2>
<p>Vardıktan sonra, aynı sabit fiyatlı hizmet ulaşımınızı da kapsar. <strong>Şehir içi ve şehirler arası yolculukları</strong> da yaparız — şehrin öbür ucundaki bir restoran, günübirlik gezi, hastane ya da eczane yolculuğu veya havalimanına dönüş — böylece yalnızca inişte değil tüm tatil boyunca yanınızdayız.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>İnişten havalimanından çıkışa kadar ne kadar sürer?</h3>
<p>Genellikle 20–30 dakika: pasaport kontrolü, bagaj ve araca kısa bir yürüyüş. Yoğun saatlerde AB dışı pasaportlar biraz ekleyebilir.</p>
<h3>Uçuşum rötar yaparsa ne olur?</h3>
<p>Takip eder ve ayarlarız. Şoförünüz siz gerçekten indiğinizde oradadır ve dahil olan bekleme süreniz kısalmaz.</p>
<h3>Beni sınırdan kuzeye geçirebilir misiniz?</h3>
<p>Evet — bu en sık güzergahlarımızdan biridir. Aynı araç kontrol noktasını geçer; yolcu ücreti yoktur ve fiyat sabittir.</p>
<p>Girne, Gazimağusa veya Güzelyurt'a mı devam ediyorsunuz — ya da kuzeye mi geçiyorsunuz? Tüm güzergahların sabit fiyatları <a href="/tr/routes/">güzergahlar sayfamızda</a> — taksimetre yok, sürpriz yok — ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Международный аэропорт Ларнаки (LCA) компактен по европейским меркам — с момента касания полосы до зала прилёта редко проходит больше двадцати минут. Это самый загруженный аэропорт острова и для многих, кто едет в любую из частей Кипра, первое ощущение отпуска. Вот как обычно проходит прибытие, где вас будет ждать водитель и что происходит дальше.</p>
<h2>Паспортный контроль и багаж</h2>
<p>Владельцы паспортов ЕС обычно проходят контроль менее чем за десять минут. Путешественникам не из ЕС в часы пик — летом примерно 10:00–14:00 и 20:00–23:00, когда садится сразу несколько рейсов — стоит заложить пятнадцать–двадцать пять минут. Выдача багажа находится сразу за паспортным контролем, тележки бесплатны. В зале есть банкомат, обмен валюты и стойка SIM-карт, если они нужны вам до выезда.</p>
<h2>Где мы вас встречаем</h2>
<p>Ваш водитель ждёт в зале прилёта, прямо напротив выходных дверей, с табличкой с вашим именем. Не нужно звонить или искать — выходите, смотрите прямо перед собой, и вы нас увидите. Мы отслеживаем ваш рейс с момента вылета, поэтому задержка посадки никогда не сокращает включённое время ожидания, а ранняя посадка тоже не проблема.</p>
<h2>Первые минуты трансфера</h2>
<p>Водитель возьмёт багаж, проводит вас к автомобилю — Mercedes E-Class или аналогу, припаркованному в паре минут — и подтвердит пункт назначения перед выездом. В салоне вас ждёт вода. От выхода до шоссе — около пяти минут, а цена была зафиксирована до поездки, так что на обочине ни о чём договариваться не нужно.</p>
<h2>Дальше по острову — включая север</h2>
<p>Ларнака расположена центрально, что делает её удобной точкой прибытия для всего острова. Никосия — около 50 минут; на север — Кирения, Фамагуста, Искеле, Бафра или Гюзельюрт — добираются, пересекая «зелёную линию»; это обычная часть дороги, добавляющая лишь 20–30 минут. Вы остаётесь в машине, паспорта наготове, платы с пассажиров нет. Для западных направлений вроде Гюзельюрта и Лефке мы используем более быстрый переход Бостанджи (Астромеритис), а не едем через Никосию.</p>
<h2>Не только аэропорт — поездки по городу тоже</h2>
<p>После приезда та же услуга по фиксированной цене покрывает и передвижение. Мы возим и <strong>по городу (şehir içi), и между городами</strong> — ресторан на другом конце города, поездка на день, дорога в больницу или аптеку или обратный путь в аэропорт — так что вы под опекой всю поездку, а не только при посадке.</p>
<h2>Частые вопросы</h2>
<h3>Сколько времени от посадки до выхода из аэропорта?</h3>
<p>Обычно 20–30 минут: паспортный контроль, багаж и короткий путь к машине. Паспорта не из ЕС в часы пик могут добавить немного.</p>
<h3>Что если рейс задержится?</h3>
<p>Мы отслеживаем и подстраиваемся. Водитель на месте, когда вы действительно приземлитесь, а включённое время ожидания не сокращается.</p>
<h3>Можете ли вы отвезти меня через границу на север?</h3>
<p>Да — это один из самых частых наших маршрутов. Та же машина пересекает пункт; платы с пассажиров нет, а цена фиксированная.</p>
<p>Едете дальше в Кирению, Фамагусту или Гюзельюрт — или пересекаете границу на север? Фиксированные цены на все маршруты — на <a href="/ru/routes/">странице маршрутов</a>, без счётчиков и сюрпризов — или <a href="/ru/book/">забронируйте трансфер</a>.</p>`,
    },
  },
  {
    slug: 'larnaca-airport-to-kyrenia-border-crossing-guide',
    date: '2026-07-11',
    title: {
      en: 'Larnaca Airport to Kyrenia: Border-Crossing Guide',
      tr: "Larnaka Havalimanından Girne'ye: Sınır Geçiş Rehberi",
      ru: 'Из аэропорта Ларнаки в Кирению: пересечение границы',
    },
    description: {
      en: 'How the North Cyprus border crossing really works — checkpoints, passports, visas, and the western route to Güzelyurt and Lefke.',
      tr: "Kuzey Kıbrıs sınır geçişi gerçekte nasıl işler — kontrol noktaları, pasaport, vize ve Güzelyurt ile Lefke'ye giden batı güzergahı.",
      ru: 'Как на самом деле работает переход границы Северного Кипра — пункты пропуска, паспорта, визы и западный маршрут в Гюзельюрт и Лефке.',
    },
    body: {
      en: `
<p>Your flight lands at Larnaca, but your hotel is in Kyrenia — so how do you actually get across the border? In short: a private transfer collects you at arrivals, drives to a Green Line checkpoint, shows your passport for a quick check, and continues north. The whole Larnaca-to-Kyrenia journey takes around 75 minutes door to door, the crossing itself adds only 20–30 minutes, and there is no fee for passengers. Below is exactly how it works — checkpoint by checkpoint — plus the western route for Güzelyurt and how we get you around once you arrive.</p>
<h2>Why fly into Larnaca for a hotel in the north?</h2>
<p>Larnaca International Airport (LCA) is the island's busiest gateway, with direct flights from across Europe and the UK. Ercan, the north's own airport, is closer to Kyrenia but is served almost entirely by connecting flights through Turkey. For many travellers that means Larnaca offers a cheaper ticket, a direct flight and a wider choice of departure times — well worth the extra half hour on the road. Because your transfer fare is fixed and agreed in advance, you can compare the true door-to-door cost of each airport before you book the flight, not after.</p>
<h2>How long does the crossing take?</h2>
<p>Plan on roughly 75 minutes from the arrivals hall at Larnaca to a hotel in central Kyrenia. Of that, the drive to the edge of Nicosia is about 45 minutes, the checkpoint itself is usually five to fifteen minutes depending on the time of day, and the descent over the mountains into Kyrenia is another 20–25 minutes. Early mornings and late evenings are quietest; the busiest periods are weekday rush hours and summer afternoons.</p>
<h2>What happens at the checkpoint</h2>
<p>Your route crosses at one of Nicosia's vehicle checkpoints — usually Metehan (Ağırdağ) when you're heading for Kyrenia. You stay in the car throughout. An officer may ask to see everyone's passport and glance at the vehicle documents your chauffeur carries. There is no charge for passengers, and the check is normally brief. Your driver does this every day and knows which lane to use and what to have ready, so there is nothing for you to prepare beyond having passports to hand.</p>
<h2>Do you need a visa or a stamp?</h2>
<p>Most nationalities are given entry on arrival with no advance visa, for stays of up to 90 days. Border officers routinely stamp a separate slip of paper rather than your passport, so a visit to the north leaves no mark in the document itself — useful to know if you travel onward to countries that ask about it. Rules can change, so check your own passport's requirements before you fly; but for the vast majority of visitors, the passport in your pocket is all you need.</p>
<h2>Crossing to the west: Güzelyurt, Lefke and the Bostancı checkpoint</h2>
<p>If your destination is in the western half of the north — <strong>Güzelyurt (Morphou)</strong>, Lefke or Gemikonağı — we don't route through Nicosia at all. Instead we use the <strong>Bostancı (Astromeritis) crossing</strong>, which sits just south of Güzelyurt and is by far the fastest way in. A <strong>Larnaca to Güzelyurt</strong> transfer takes about 1 hour 45 minutes this way; from <strong>Paphos to Güzelyurt</strong> the western crossing is more direct still, as it avoids doubling back through the capital. Choosing the right checkpoint for your destination is one of the quiet ways a local driver saves you time you would never get back with a generic taxi.</p>
<h2>Getting around once you've arrived — local rides too</h2>
<p>A transfer doesn't have to end at your hotel door. Once you're settled, we also handle <strong>local, in-town journeys</strong> at fixed local prices — a run into Kyrenia harbour for dinner, a morning at Bellapais Abbey, a hospital or pharmacy trip, an evening at a casino hotel, or simply getting between your resort and the town centre when taxis are thin on the ground. In Güzelyurt and the western villages, where evening taxis are especially scarce, these <strong>şehir içi (in-town) rides</strong> are often the most useful part of the service: into the town centre, out to the orange groves, or along the coast to Lefke. Ask when you book, or message us during your stay.</p>
<h2>Luggage, timing and flight delays</h2>
<p>We track your flight from the moment it leaves, so a late landing never eats into your included waiting time and your driver is there whenever you actually arrive. Your chauffeur meets you inside the arrivals hall with a name sign, handles the luggage, and walks you to a car parked minutes away. Bottled water is waiting in the cabin. There is nothing to arrange at the roadside and no meter ticking while you load bags.</p>
<h2>Frequently asked questions</h2>
<h3>Can a taxi or transfer actually cross the border?</h3>
<p>Yes. Licensed transfer vehicles cross the Green Line daily. You remain in the same car for the whole journey — there is no need to change vehicles at the checkpoint.</p>
<h3>Is it cheaper to fly into Ercan instead?</h3>
<p>Sometimes. Ercan is closer to Kyrenia, but its flights almost always connect through Turkey. If a direct flight into Larnaca is cheaper or more convenient, the crossing is easy and the fixed transfer fare means no surprises.</p>
<h3>Will my passport be stamped?</h3>
<p>Usually not — officers stamp a separate paper by default. If you would prefer that, you don't even need to ask; it is the norm.</p>
<h3>How much does the crossing add to the price?</h3>
<p>Nothing beyond the distance. Our fares are fixed by route, with no border surcharge and no meter.</p>
<p>Ready to plan your crossing? <a href="/en/routes/">See fixed prices for every route</a> — from Larnaca or Paphos to Kyrenia, Famagusta, İskele, Bafra and Güzelyurt — or <a href="/en/book/">book your transfer</a> in two minutes.</p>`,
      tr: `
<p>Uçağınız Larnaka'ya iniyor ama oteliniz Girne'de — peki sınırı tam olarak nasıl geçeceksiniz? Kısacası: özel bir transfer sizi varış salonundan alır, sizi Yeşil Hat üzerindeki bir kontrol noktasına götürür, hızlı bir kontrol için pasaportunuzu gösterir ve kuzeye devam eder. Larnaka–Girne yolculuğunun tamamı kapıdan kapıya yaklaşık 75 dakika sürer, geçişin kendisi yalnızca 20–30 dakika ekler ve yolculardan ücret alınmaz. Aşağıda bunun nasıl işlediğini, Güzelyurt için batı güzergahını ve vardıktan sonra sizi nasıl gezdirdiğimizi bulacaksınız.</p>
<h2>Kuzeydeki bir otel için neden Larnaka'ya inmeli?</h2>
<p>Larnaka Uluslararası Havalimanı (LCA), adanın en yoğun kapısıdır; Avrupa ve İngiltere'den direkt uçuşları vardır. Kuzeyin kendi havalimanı Ercan, Girne'ye daha yakındır ama neredeyse tamamen Türkiye üzerinden aktarmalı uçuşlarla hizmet verir. Birçok yolcu için bu, Larnaka'nın daha ucuz bir bilet, direkt bir uçuş ve daha fazla kalkış saati seçeneği sunması demektir — yolda geçen fazladan yarım saate değer. Transfer ücretiniz önceden sabitlendiği için, uçuşunuzu rezerve etmeden önce her havalimanının gerçek kapıdan kapıya maliyetini karşılaştırabilirsiniz.</p>
<h2>Geçiş ne kadar sürer?</h2>
<p>Larnaka varış salonundan Girne merkezindeki bir otele yaklaşık 75 dakika hesaplayın. Bunun yaklaşık 45 dakikası Lefkoşa kenarına kadar sürüş, beş ila on beş dakikası günün saatine göre kontrol noktası ve 20–25 dakikası dağları aşıp Girne'ye iniştir. En sakin saatler sabah erken ve akşam geç saatlerdir; en yoğun dönemler hafta içi trafik saatleri ve yaz öğleden sonralarıdır.</p>
<h2>Kontrol noktasında ne olur</h2>
<p>Güzergahınız Lefkoşa'nın araç kontrol noktalarından birinden geçer — Girne'ye giderken genellikle Metehan (Ağırdağ). Boyunca araçta kalırsınız. Bir görevli herkesin pasaportunu görmek ve şoförünüzün taşıdığı araç belgelerine bakmak isteyebilir. Yolculardan ücret alınmaz ve kontrol genellikle kısadır. Şoförünüz bunu her gün yapar; hangi şeridi kullanacağını ve neyi hazır tutacağını bilir, bu yüzden pasaportları elinizin altında tutmanız dışında hazırlamanız gereken bir şey yoktur.</p>
<h2>Vize veya mühür gerekir mi?</h2>
<p>Çoğu ülke vatandaşına önceden vize olmadan, 90 güne kadar konaklama için varışta giriş verilir. Sınır görevlileri çoğunlukla pasaportunuza değil ayrı bir kağıda mühür basar, böylece kuzeye yapılan ziyaret belgede iz bırakmaz — bunu soran ülkelere devam edecekseniz işinize yarar. Kurallar değişebilir, bu yüzden uçmadan önce kendi pasaportunuzun koşullarını kontrol edin; ama ziyaretçilerin büyük çoğunluğu için cebinizdeki pasaport yeterlidir.</p>
<h2>Batıya geçiş: Güzelyurt, Lefke ve Bostancı kapısı</h2>
<p>Hedefiniz kuzeyin batı yarısındaysa — <strong>Güzelyurt (Morphou)</strong>, Lefke veya Gemikonağı — Lefkoşa üzerinden hiç gitmeyiz. Bunun yerine, Güzelyurt'un hemen güneyinde yer alan ve açık ara en hızlı giriş olan <strong>Bostancı (Astromeritis) geçişini</strong> kullanırız. Bu yolla <strong>Larnaka–Güzelyurt</strong> transferi yaklaşık 1 saat 45 dakika sürer; <strong>Baf–Güzelyurt</strong> için batı geçişi daha da doğrudandır, çünkü başkente geri dönmeyi önler. Hedefiniz için doğru kapıyı seçmek, yerel bir şoförün sıradan bir taksiyle asla geri kazanamayacağınız zamanı size kazandırmasının sessiz yollarından biridir.</p>
<h2>Vardıktan sonra ulaşım — şehir içi de</h2>
<p>Bir transfer otel kapınızda bitmek zorunda değil. Yerleştikten sonra <strong>şehir içi kısa yolculukları</strong> da sabit yerel fiyatlarla düzenliyoruz — akşam yemeği için Girne limanına bir sefer, Bellapais Manastırı'nda bir sabah, hastane ya da eczane yolculuğu, bir casino otelinde akşam ya da taksi bulmanın zor olduğu saatlerde tesisinizle şehir merkezi arasında gidip gelme. Akşam taksilerinin özellikle az olduğu Güzelyurt ve batı köylerinde bu <strong>şehir içi yolculuklar</strong> çoğu zaman hizmetin en faydalı kısmıdır: şehir merkezine, portakal bahçelerine ya da sahil boyunca Lefke'ye. Rezervasyon sırasında sorun veya konaklamanız sırasında bize yazın.</p>
<h2>Bagaj, zamanlama ve uçuş rötarları</h2>
<p>Uçuşunuzu kalktığı andan itibaren takip ederiz, böylece geç bir iniş dahil olan bekleme sürenizi asla yemez ve şoförünüz siz ne zaman varırsanız oradadır. Şoförünüz sizi varış salonunda isimli tabelayla karşılar, bagajları alır ve sizi birkaç dakika mesafede park etmiş araca götürür. Kabinde su hazırdır. Yol kenarında ayarlanacak bir şey ve siz bavul yüklerken çalışan bir taksimetre yoktur.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Taksi veya transfer gerçekten sınırı geçebilir mi?</h3>
<p>Evet. Lisanslı transfer araçları her gün Yeşil Hat'tı geçer. Yolculuğun tamamında aynı araçta kalırsınız — kontrol noktasında araç değiştirmenize gerek yoktur.</p>
<h3>Ercan'a inmek daha mı ucuz?</h3>
<p>Bazen. Ercan Girne'ye daha yakındır ama uçuşları neredeyse her zaman Türkiye üzerinden aktarmalıdır. Larnaka'ya direkt uçuş daha ucuz ya da daha uygunsa, geçiş kolaydır ve sabit transfer ücreti sürpriz olmaması demektir.</p>
<h3>Pasaportuma mühür basılır mı?</h3>
<p>Genellikle hayır — görevliler varsayılan olarak ayrı bir kağıda mühür basar. Bunu tercih ederseniz istemenize bile gerek yok; olağan uygulama budur.</p>
<h3>Geçiş fiyata ne kadar ekler?</h3>
<p>Mesafe dışında hiçbir şey. Ücretlerimiz güzergaha göre sabittir; sınır ek ücreti ve taksimetre yoktur.</p>
<p>Geçişinizi planlamaya hazır mısınız? <a href="/tr/routes/">Tüm güzergahların sabit fiyatlarına bakın</a> — Larnaka veya Baf'tan Girne, Gazimağusa, İskele, Bafra ve Güzelyurt'a — ya da iki dakikada <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Ваш рейс садится в Ларнаке, а отель — в Кирении. Как именно пересечь границу? Коротко: частный трансфер встречает вас в зоне прилёта, довозит до пункта пропуска на «зелёной линии», показывает паспорт для быстрой проверки и продолжает путь на север. Вся поездка Ларнака–Кирения занимает около 75 минут от двери до двери, сам переход добавляет лишь 20–30 минут, а с пассажиров плата не берётся. Ниже — как это работает по пунктам, западный маршрут для Гюзельюрта и как мы возим вас после приезда.</p>
<h2>Зачем лететь в Ларнаку ради отеля на севере?</h2>
<p>Международный аэропорт Ларнаки (LCA) — самые загруженные ворота острова, с прямыми рейсами со всей Европы и из Великобритании. Собственный аэропорт севера, Эрджан, ближе к Кирении, но обслуживается почти исключительно стыковочными рейсами через Турцию. Для многих путешественников это значит, что Ларнака предлагает более дешёвый билет, прямой рейс и больше вариантов по времени вылета — что стоит лишних получаса в дороге. Поскольку цена трансфера фиксируется заранее, вы можете сравнить реальную стоимость «от двери до двери» для каждого аэропорта ещё до покупки авиабилета.</p>
<h2>Сколько занимает переход?</h2>
<p>Рассчитывайте примерно на 75 минут от зала прилёта Ларнаки до отеля в центре Кирении. Из них около 45 минут — дорога до края Никосии, пять–пятнадцать минут — сам пункт пропуска в зависимости от времени суток, и ещё 20–25 минут — спуск через горы в Кирению. Тише всего ранним утром и поздним вечером; самые загруженные периоды — будние часы пик и летние послеобеденные часы.</p>
<h2>Что происходит на пункте пропуска</h2>
<p>Ваш маршрут проходит через один из автомобильных пунктов Никосии — обычно Метехан (Агырдаг) по пути в Кирению. Всю дорогу вы остаётесь в машине. Сотрудник может попросить показать паспорта всех и взглянуть на документы на автомобиль, которые везёт водитель. С пассажиров плата не берётся, и проверка обычно короткая. Ваш водитель делает это каждый день и знает, какую полосу использовать и что держать наготове, так что вам не нужно готовить ничего, кроме паспортов под рукой.</p>
<h2>Нужна ли виза или штамп?</h2>
<p>Большинству гостей въезд даётся по прибытии без предварительной визы, на срок до 90 дней. Пограничники, как правило, ставят штамп на отдельный листок, а не в паспорт, поэтому визит на север не оставляет следа в самом документе — полезно знать, если вы едете дальше в страны, которые об этом спрашивают. Правила могут меняться, поэтому проверьте требования для вашего паспорта перед вылетом; но для подавляющего большинства гостей достаточно паспорта в кармане.</p>
<h2>Переход на запад: Гюзельюрт, Лефке и пункт Бостанджи</h2>
<p>Если ваша цель в западной части севера — <strong>Гюзельюрт (Морфу)</strong>, Лефке или Гемиконагы — мы вовсе не едем через Никосию. Вместо этого мы используем <strong>переход Бостанджи (Астромеритис)</strong>, который находится сразу к югу от Гюзельюрта и является самым быстрым въездом. Так трансфер <strong>Ларнака–Гюзельюрт</strong> занимает около 1 часа 45 минут; из <strong>Пафоса в Гюзельюрт</strong> западный переход ещё удобнее, поскольку избавляет от возврата через столицу. Выбор правильного пункта для вашего направления — один из тихих способов, которыми местный водитель экономит вам время, которое вы бы не вернули с обычным такси.</p>
<h2>Передвижение на месте — и поездки по городу</h2>
<p>Трансфер не обязан заканчиваться у дверей отеля. Когда вы устроитесь, мы также организуем <strong>короткие поездки по городу</strong> по фиксированным местным ценам — заезд в гавань Кирении на ужин, утро в аббатстве Беллапаис, поездку в больницу или аптеку, вечер в казино-отеле или просто дорогу между вашим курортом и центром города, когда такси не найти. В Гюзельюрте и западных деревнях, где вечерних такси особенно мало, эти <strong>поездки по городу (şehir içi)</strong> часто оказываются самой полезной частью услуги: в центр города, к апельсиновым садам или вдоль побережья в Лефке. Спросите при бронировании или напишите нам во время поездки.</p>
<h2>Багаж, время и задержки рейсов</h2>
<p>Мы отслеживаем ваш рейс с момента вылета, поэтому поздняя посадка никогда не сокращает включённое время ожидания, а водитель на месте, когда бы вы ни прилетели. Ваш водитель встречает вас в зале прилёта с табличкой с именем, берёт багаж и провожает к машине, припаркованной в паре минут. В салоне ждёт вода. Ничего не нужно решать на обочине, и никакой счётчик не тикает, пока вы грузите чемоданы.</p>
<h2>Частые вопросы</h2>
<h3>Может ли такси или трансфер действительно пересечь границу?</h3>
<p>Да. Лицензированные трансферные автомобили пересекают «зелёную линию» ежедневно. Всю поездку вы остаётесь в той же машине — менять транспорт на пункте не нужно.</p>
<h3>Дешевле ли лететь в Эрджан?</h3>
<p>Иногда. Эрджан ближе к Кирении, но его рейсы почти всегда со стыковкой через Турцию. Если прямой рейс в Ларнаку дешевле или удобнее, переход прост, а фиксированная цена трансфера означает отсутствие сюрпризов.</p>
<h3>Поставят ли штамп в паспорт?</h3>
<p>Обычно нет — по умолчанию сотрудники ставят штамп на отдельный листок. Если вам так удобнее, даже просить не нужно: это норма.</p>
<h3>Насколько переход увеличивает цену?</h3>
<p>Ни на сколько, кроме расстояния. Наши цены фиксированы по маршруту, без пограничной наценки и счётчика.</p>
<p>Готовы спланировать переход? <a href="/ru/routes/">Смотрите фиксированные цены на все маршруты</a> — из Ларнаки или Пафоса в Кирению, Фамагусту, Искеле, Бафру и Гюзельюрт — или <a href="/ru/book/">забронируйте трансфер</a> за две минуты.</p>`,
    },
  },
  {
    slug: 'ercan-airport-arrival-guide',
    date: '2026-07-11',
    title: {
      en: 'Landing at Ercan Airport: Your Arrival Guide',
      tr: 'Ercan Havalimanına İniş: Varış Rehberiniz',
      ru: 'Прилёт в аэропорт Эрджан: гид по прибытию',
    },
    description: {
      en: 'What to expect at Ercan Airport — passport control, luggage, SIM cards and where your chauffeur meets you for Kyrenia, Famagusta and beyond.',
      tr: "Ercan Havalimanında sizi neler bekliyor — pasaport kontrolü, bagaj, SIM kart ve Girne, Gazimağusa ve ötesi için şoförünüzün sizi nerede karşıladığı.",
      ru: 'Что ждёт вас в аэропорту Эрджан — паспортный контроль, багаж, SIM-карты и где вас встретит водитель для поездки в Кирению, Фамагусту и дальше.',
    },
    body: {
      en: `
<p>Ercan (ECN) is North Cyprus's own airport — small, calm and only a short drive from Nicosia, Kyrenia and Famagusta. If you're flying in via Istanbul or another Turkish hub, this is where your holiday really begins. Here's how a typical arrival unfolds, from the runway to your hotel door — and how we help you get around afterwards.</p>
<h2>Passport control</h2>
<p>Ercan is rarely crowded, so it's one of the quickest airports on the island to clear. Most visitors are through passport control in ten to fifteen minutes; you'll be asked for your passport and are usually given entry on arrival with no advance visa, for stays of up to 90 days. If you'd rather keep your passport clean, officers will stamp a separate slip instead — just ask, it's routine.</p>
<h2>Luggage and the terminal</h2>
<p>Ercan's new terminal is bright and easy to navigate, with quick, clearly signed baggage reclaim and free trolleys. You'll find car-rental desks, a currency exchange, a pharmacy and a few cafés, but the building is compact enough that you won't get lost or lose your driver. Step out of the baggage hall and the arrivals meeting point is right in front of you.</p>
<h2>Money and a SIM card</h2>
<p>The local currency is the Turkish Lira, though many hotels, restaurants and drivers also accept euros and sterling. It's worth changing a small amount at the airport for incidentals and tips. If you want data the moment you land, pick up a local SIM (Turkcell or KKTCELL) from the desk in arrivals — bring your passport, as registration is required.</p>
<h2>Where we meet you</h2>
<p>Your chauffeur waits in the arrivals hall opposite the exit doors, holding a sign with your name. We track your flight from departure, so a delay never shortens your included waiting time and there's no rush on your side. No calls, no searching — walk out, look ahead, and we're there.</p>
<h2>How far to your hotel</h2>
<p>Ercan is central, so most journeys are short:</p>
<ul>
  <li>Kyrenia (Girne): about 35 minutes</li>
  <li>Famagusta (Gazimağusa): about 40 minutes</li>
  <li>İskele / Long Beach: about 45 minutes</li>
  <li>Güzelyurt (Morphou): about 50 minutes</li>
</ul>
<p>Every route has a fixed fare agreed before you travel — no meter, and your driver takes you to your exact hotel reception, not the nearest junction.</p>
<h2>Getting around during your stay — local rides</h2>
<p>The service doesn't stop at check-in. We also handle <strong>şehir içi (in-town) and around-the-island journeys</strong> at fixed local prices — an evening on Kyrenia harbour, a day at a casino hotel, a university drop-off, a hospital or pharmacy run, or a trip out to Famagusta or the Karpaz. In the quieter towns, where taxis rarely wait around after dark, this is often the handiest part of the service. Arrange it when you book, or message us during your stay.</p>
<h2>Frequently asked questions</h2>
<h3>Do I need a visa to land at Ercan?</h3>
<p>Most nationalities receive entry on arrival with no advance visa, for up to 90 days. Bring a valid passport; a stamp can go on a separate slip if you prefer.</p>
<h3>Can I pay the driver in euros?</h3>
<p>Yes. Euros and sterling are widely accepted alongside the Lira, and your transfer fare is fixed in advance either way.</p>
<h3>Do you do local trips too, or only airport transfers?</h3>
<p>Both. We run in-town and cross-island rides at fixed local prices throughout your stay.</p>
<p>Ready for when you land? <a href="/en/routes/">See fixed prices for every route</a> or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>Ercan (ECN), Kuzey Kıbrıs'ın kendi havalimanıdır — küçük, sakin ve Lefkoşa, Girne ile Gazimağusa'ya kısa mesafede. İstanbul veya başka bir Türk aktarma noktası üzerinden geliyorsanız, tatiliniz asıl burada başlar. İşte pistten otel kapınıza kadar tipik bir varış nasıl ilerler — ve sonrasında sizi nasıl gezdirdiğimiz.</p>
<h2>Pasaport kontrolü</h2>
<p>Ercan nadiren kalabalıktır, bu yüzden adanın en hızlı geçilen havalimanlarından biridir. Çoğu ziyaretçi pasaport kontrolünden on ila on beş dakikada geçer; pasaportunuz istenir ve genellikle önceden vize olmadan, 90 güne kadar konaklama için varışta giriş verilir. Pasaportunuzu temiz tutmayı tercih ederseniz görevliler mührü ayrı bir kağıda basar — sadece söyleyin, olağan bir işlemdir.</p>
<h2>Bagaj ve terminal</h2>
<p>Ercan'ın yeni terminali aydınlık ve kolay yönlendirmelidir; hızlı, açık işaretli bagaj alımı ve ücretsiz arabalar vardır. Araç kiralama bankoları, döviz bürosu, bir eczane ve birkaç kafe bulursunuz, ama bina kaybolmayacağınız ya da şoförünüzü kaçırmayacağınız kadar kompakttır. Bagaj salonundan çıkın, varış buluşma noktası tam karşınızdadır.</p>
<h2>Para ve SIM kart</h2>
<p>Yerel para birimi Türk Lirası'dır, yine de birçok otel, restoran ve sürücü euro ve sterlin de kabul eder. Ufak masraflar ve bahşişler için havalimanında az miktarda bozdurmakta fayda var. İner inmez internet isterseniz varış salonundaki bankodan yerel bir SIM (Turkcell veya KKTCELL) alın — kayıt gerektiğinden pasaportunuzu yanınıza alın.</p>
<h2>Sizi nerede karşılıyoruz</h2>
<p>Şoförünüz varış salonunda, çıkış kapılarının karşısında, adınızın yazılı olduğu tabelayla bekler. Uçuşunuzu kalkıştan itibaren takip ederiz; gecikme dahil olan bekleme sürenizi asla kısaltmaz ve sizin acele etmenize gerek yoktur. Arama yok, aranma yok — dışarı çıkın, karşıya bakın, oradayız.</p>
<h2>Otelinize ne kadar var</h2>
<p>Ercan merkezîdir, bu yüzden çoğu yolculuk kısadır:</p>
<ul>
  <li>Girne: yaklaşık 35 dakika</li>
  <li>Gazimağusa: yaklaşık 40 dakika</li>
  <li>İskele / Long Beach: yaklaşık 45 dakika</li>
  <li>Güzelyurt: yaklaşık 50 dakika</li>
</ul>
<p>Her güzergahın, yola çıkmadan kararlaştırılan sabit bir ücreti vardır — taksimetre yok ve şoförünüz sizi en yakın kavşağa değil, tam otel resepsiyonunuza götürür.</p>
<h2>Konaklamanız boyunca ulaşım — şehir içi yolculuklar</h2>
<p>Hizmet, otele girişte bitmez. <strong>Şehir içi ve ada geneli yolculukları</strong> da sabit yerel fiyatlarla düzenliyoruz — Girne limanında bir akşam, bir casino otelinde bir gün, üniversiteye bırakma, hastane ya da eczane yolculuğu veya Gazimağusa ya da Karpaz'a bir gezi. Taksilerin karanlıktan sonra nadiren beklediği daha sakin kasabalarda bu çoğu zaman hizmetin en kullanışlı kısmıdır. Rezervasyon sırasında ayarlayın ya da konaklamanız sırasında bize yazın.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Ercan'a inmek için vize gerekir mi?</h3>
<p>Çoğu ülke vatandaşı önceden vize olmadan, 90 güne kadar varışta giriş alır. Geçerli bir pasaport getirin; isterseniz mühür ayrı bir kağıda basılabilir.</p>
<h3>Sürücüye euro ile ödeyebilir miyim?</h3>
<p>Evet. Lira'nın yanı sıra euro ve sterlin yaygın olarak kabul edilir ve transfer ücretiniz her hâlükârda önceden sabittir.</p>
<h3>Sadece havalimanı transferi mi, yoksa yerel yolculuklar da mı yapıyorsunuz?</h3>
<p>İkisi de. Konaklamanız boyunca şehir içi ve ada geneli yolculukları sabit yerel fiyatlarla yaparız.</p>
<p>İndiğiniz an için hazır mıyız? <a href="/tr/routes/">Tüm güzergahların sabit fiyatlarına bakın</a> ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Эрджан (ECN) — собственный аэропорт Северного Кипра: небольшой, спокойный и всего в нескольких минутах езды от Никосии, Кирении и Фамагусты. Если вы летите через Стамбул или другой турецкий хаб, именно здесь начинается ваш отдых. Вот как обычно проходит прибытие — от полосы до дверей отеля — и как мы помогаем передвигаться потом.</p>
<h2>Паспортный контроль</h2>
<p>В Эрджане редко бывает людно, поэтому это один из самых быстрых аэропортов острова. Большинство гостей проходят контроль за десять–пятнадцать минут; у вас попросят паспорт и, как правило, дадут въезд по прибытии без предварительной визы, на срок до 90 дней. Если хотите сохранить паспорт «чистым», штамп поставят на отдельный листок — просто попросите, это обычное дело.</p>
<h2>Багаж и терминал</h2>
<p>Новый терминал Эрджана светлый и удобный, с быстрой выдачей багажа по понятным указателям и бесплатными тележками. Есть стойки проката авто, обмен валюты, аптека и несколько кафе, но здание достаточно компактное, чтобы не заблудиться и не потерять водителя. Выйдите из зоны багажа — точка встречи прилёта прямо перед вами.</p>
<h2>Деньги и SIM-карта</h2>
<p>Местная валюта — турецкая лира, хотя многие отели, рестораны и водители принимают также евро и фунты. Стоит обменять небольшую сумму в аэропорту на мелкие расходы и чаевые. Если интернет нужен сразу после посадки, возьмите местную SIM (Turkcell или KKTCELL) на стойке в зоне прилёта — возьмите паспорт, так как нужна регистрация.</p>
<h2>Где мы вас встречаем</h2>
<p>Ваш водитель ждёт в зале прилёта напротив выходных дверей с табличкой с вашим именем. Мы отслеживаем рейс с момента вылета, поэтому задержка никогда не сокращает включённое время ожидания, и вам некуда спешить. Не нужно звонить или искать — выходите, смотрите вперёд, мы на месте.</p>
<h2>Сколько ехать до отеля</h2>
<p>Эрджан расположен центрально, поэтому большинство поездок короткие:</p>
<ul>
  <li>Кирения (Гирне): около 35 минут</li>
  <li>Фамагуста (Газимагуса): около 40 минут</li>
  <li>Искеле / Лонг-Бич: около 45 минут</li>
  <li>Гюзельюрт (Морфу): около 50 минут</li>
</ul>
<p>У каждого маршрута фиксированная цена, оговорённая до поездки — без счётчика, и водитель довезёт вас к самой стойке отеля, а не к ближайшему перекрёстку.</p>
<h2>Передвижение во время отдыха — поездки по городу</h2>
<p>Услуга не заканчивается при заселении. Мы также организуем <strong>поездки по городу (şehir içi) и по всему острову</strong> по фиксированным местным ценам — вечер в гавани Кирении, день в казино-отеле, поездку в университет, дорогу в больницу или аптеку или выезд в Фамагусту или на Карпаз. В более тихих городах, где такси редко дежурят после наступления темноты, это часто самая удобная часть услуги. Договоритесь при бронировании или напишите нам во время поездки.</p>
<h2>Частые вопросы</h2>
<h3>Нужна ли виза, чтобы прилететь в Эрджан?</h3>
<p>Большинству гостей въезд даётся по прибытии без предварительной визы, на срок до 90 дней. Возьмите действующий паспорт; при желании штамп поставят на отдельный листок.</p>
<h3>Можно ли заплатить водителю в евро?</h3>
<p>Да. Наряду с лирой широко принимают евро и фунты, а цена трансфера в любом случае фиксируется заранее.</p>
<h3>Вы делаете и местные поездки, или только трансферы из аэропорта?</h3>
<p>И то, и другое. В течение всего отдыха мы возим по городу и по острову по фиксированным местным ценам.</p>
<p>Готовы к моменту посадки? <a href="/ru/routes/">Смотрите фиксированные цены на все маршруты</a> или <a href="/ru/book/">забронируйте трансфер</a>.</p>`,
    },
  },
  {
    slug: 'north-cyprus-visa-passport-border-crossing',
    date: '2026-07-11',
    title: {
      en: 'Do You Need a Visa or Passport to Enter North Cyprus?',
      tr: "Kuzey Kıbrıs'a Girmek için Vize veya Pasaport Gerekir mi?",
      ru: 'Нужны ли виза и паспорт для въезда в Северный Кипр?',
    },
    description: {
      en: 'A clear, practical answer on passports, visas and stamps for North Cyprus — whether you fly into Ercan or cross from the south.',
      tr: "Kuzey Kıbrıs için pasaport, vize ve mühür konusunda net ve pratik bir yanıt — ister Ercan'a inin ister güneyden geçin.",
      ru: 'Понятный практический ответ о паспортах, визах и штампах для Северного Кипра — прилетаете ли вы в Эрджан или переезжаете с юга.',
    },
    body: {
      en: `
<p>It's the most common question we're asked before a transfer: do you need a visa or passport to enter North Cyprus? Here's a clear, practical answer for both routes in — flying into Ercan and crossing from the south. Rules can change, so treat this as guidance and check your own nationality's requirements before you travel.</p>
<h2>You need a passport</h2>
<p>A valid passport is required to enter North Cyprus, whether you land at Ercan or cross the Green Line from the south. Most nationalities — including UK, EU, US, Gulf and Turkish citizens — do not need a visa in advance. Entry is granted on arrival, normally for a stay of up to 90 days. Check that your passport has reasonable validity remaining, and if you're unsure about your nationality, confirm with your airline before departure.</p>
<h2>Will they stamp my passport?</h2>
<p>Usually not. Border officers routinely stamp a separate piece of paper — a small entry slip — rather than your passport, so a North Cyprus entry leaves no mark in the document itself. This is standard practice, useful if you later travel to countries that ask about it. Keep the slip with your passport until you leave. If you'd like the stamp on the slip rather than the page, you rarely even need to ask.</p>
<h2>Flying into Ercan</h2>
<p>If you arrive directly at Ercan, you clear passport control at the airport and you're done — there's no second checkpoint on the way to your hotel. Your chauffeur is waiting on the other side of the doors, and the drive to Kyrenia, Famagusta or İskele is short.</p>
<h2>Crossing from Larnaca or Paphos</h2>
<p>If you land in the south and cross the Green Line by car, you show your passport at a checkpoint along the way. You stay in the vehicle, there is no fee for passengers, and your chauffeur knows the procedure and the quickest lane. Having entered the island through Larnaca or Paphos, you are already legally in Cyprus; the crossing simply moves you between the two administrations. For western destinations such as Güzelyurt and Lefke we use the Bostancı (Astromeritis) crossing.</p>
<h2>Rental cars are the exception</h2>
<p>The one thing worth knowing: a hire car picked up in the south often cannot be taken north (and vice versa), and rental insurance rarely covers crossing the line. It's the single most common trip-up for first-time visitors. A private transfer avoids the problem entirely — one car, both sides of the island, and no paperwork or insurance worries for you. It also means you can move freely between north and south without swapping vehicles.</p>
<h2>Getting around once you're in</h2>
<p>Beyond the airport run and the crossing, we also handle <strong>şehir içi (in-town) and cross-island journeys</strong> at fixed local prices — including day trips that cross back and forth between north and south, which is exactly where a driver who does the checkpoint daily saves you time and uncertainty.</p>
<h2>Frequently asked questions</h2>
<h3>Do I need a visa for North Cyprus?</h3>
<p>Most nationalities don't — entry is on arrival for up to 90 days with a valid passport. Check your specific nationality before travelling.</p>
<h3>Will North Cyprus stamp my passport?</h3>
<p>Normally no. Officers stamp a separate slip by default, leaving your passport unmarked.</p>
<h3>Can I take a rental car across the border?</h3>
<p>Usually not, and insurance rarely covers it. A private transfer crosses freely with no paperwork on your side.</p>
<h3>Do I need anything to cross back to the south?</h3>
<p>Just your passport again for a brief check. You stay in the car and there's no passenger fee.</p>
<p>Planning a crossing? <a href="/en/routes/">See fixed transfer prices</a> or <a href="/en/book/">book in two minutes</a>.</p>`,
      tr: `
<p>Transferden önce bize en sık sorulan soru budur: Kuzey Kıbrıs'a girmek için vize veya pasaport gerekir mi? İşte iki giriş yolu için de net ve pratik bir yanıt — Ercan'a uçmak ve güneyden geçmek. Kurallar değişebilir; bunu bir rehber olarak görün ve yola çıkmadan kendi vatandaşlığınızın koşullarını kontrol edin.</p>
<h2>Pasaport gerekir</h2>
<p>Kuzey Kıbrıs'a girmek için geçerli bir pasaport gereklidir — ister Ercan'a inin ister güneyden Yeşil Hat'tı geçin. İngiltere, AB, ABD, Körfez ve Türkiye vatandaşları dahil çoğu ülke vatandaşının önceden vizeye ihtiyacı yoktur. Giriş varışta verilir, genellikle 90 güne kadar konaklama için. Pasaportunuzun makul bir geçerlilik süresi kaldığından emin olun ve vatandaşlığınızdan emin değilseniz kalkıştan önce havayolunuza danışın.</p>
<h2>Pasaportuma mühür basılır mı?</h2>
<p>Genellikle hayır. Sınır görevlileri çoğunlukla pasaportunuza değil ayrı bir kağıda — küçük bir giriş fişine — mühür basar, böylece Kuzey Kıbrıs girişi belgede iz bırakmaz. Bu standart bir uygulamadır; ileride bunu soran ülkelere gidecekseniz işinize yarar. Fişi çıkışa kadar pasaportunuzla birlikte saklayın. Mührün sayfaya değil fişe basılmasını istemenize genellikle gerek bile kalmaz.</p>
<h2>Ercan'a uçarken</h2>
<p>Doğrudan Ercan'a inerseniz pasaport kontrolünü havalimanında geçer ve işlem tamamlanır — otelinize giderken ikinci bir kontrol noktası yoktur. Şoförünüz kapıların diğer tarafında bekler; Girne, Gazimağusa ya da İskele'ye yolculuk kısadır.</p>
<h2>Larnaka veya Baf'tan geçerken</h2>
<p>Güneye inip Yeşil Hat'tı arabayla geçerseniz yol üzerindeki bir kontrol noktasında pasaportunuzu gösterirsiniz. Araçta kalırsınız, yolculardan ücret alınmaz ve şoförünüz prosedürü ve en hızlı şeridi bilir. Adaya Larnaka veya Baf üzerinden girdiğiniz için zaten yasal olarak Kıbrıs'tasınız; geçiş sizi yalnızca iki yönetim arasında taşır. Güzelyurt ve Lefke gibi batı noktaları için Bostancı (Astromeritis) geçişini kullanırız.</p>
<h2>Kiralık araçlar istisnadır</h2>
<p>Bilinmesi gereken tek şey: güneyden alınan kiralık araç çoğu zaman kuzeye geçirilemez (ve tersi), kiralama sigortası da hattı geçmeyi nadiren kapsar. İlk kez gelenlerin en sık takıldığı nokta budur. Özel transfer bu sorunu tamamen ortadan kaldırır — tek araç, adanın iki yakası ve size hiç evrak ya da sigorta derdi yok. Ayrıca araç değiştirmeden kuzey ile güney arasında serbestçe hareket edebilirsiniz.</p>
<h2>İçeri girdikten sonra ulaşım</h2>
<p>Havalimanı yolculuğu ve geçişin ötesinde, <strong>şehir içi ve ada geneli yolculukları</strong> da sabit yerel fiyatlarla düzenliyoruz — kuzey ile güney arasında gidip gelen günübirlik geziler dahil; kontrol noktasını her gün geçen bir şoförün size zaman ve belirsizlikten tasarruf ettirdiği yer tam da burasıdır.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Kuzey Kıbrıs için vize gerekir mi?</h3>
<p>Çoğu ülke vatandaşı için gerekmez — giriş, geçerli bir pasaportla 90 güne kadar varışta verilir. Yola çıkmadan kendi vatandaşlığınızı kontrol edin.</p>
<h3>Kuzey Kıbrıs pasaportuma mühür basar mı?</h3>
<p>Normalde hayır. Görevliler varsayılan olarak ayrı bir fişe mühür basar, pasaportunuz işaretsiz kalır.</p>
<h3>Kiralık aracı sınırdan geçirebilir miyim?</h3>
<p>Genellikle hayır ve sigorta nadiren kapsar. Özel transfer size hiç evrak olmadan serbestçe geçer.</p>
<h3>Güneye geri geçmek için bir şey gerekir mi?</h3>
<p>Kısa bir kontrol için yine yalnızca pasaportunuz. Araçta kalırsınız ve yolcu ücreti yoktur.</p>
<p>Geçiş mi planlıyorsunuz? <a href="/tr/routes/">Sabit transfer fiyatlarına bakın</a> ya da <a href="/tr/book/">iki dakikada rezerve edin</a>.</p>`,
      ru: `
<p>Это самый частый вопрос перед трансфером: нужны ли виза и паспорт для въезда в Северный Кипр? Вот понятный практический ответ для обоих вариантов въезда — прилёт в Эрджан и переезд с юга. Правила могут меняться — воспринимайте это как ориентир и проверьте требования для вашего гражданства перед поездкой.</p>
<h2>Паспорт нужен</h2>
<p>Для въезда в Северный Кипр требуется действующий паспорт — прилетаете ли вы в Эрджан или пересекаете «зелёную линию» с юга. Большинству гостей — включая граждан Великобритании, ЕС, США, стран Залива и Турции — виза заранее не нужна. Въезд даётся по прибытии, обычно на срок до 90 дней. Убедитесь, что у паспорта достаточный срок действия, и, если сомневаетесь по своему гражданству, уточните у авиакомпании перед вылетом.</p>
<h2>Поставят ли штамп в паспорт?</h2>
<p>Обычно нет. Пограничники, как правило, ставят штамп на отдельный листок — небольшой въездной талон, — а не в паспорт, поэтому въезд в Северный Кипр не оставляет следа в самом документе. Это стандартная практика, полезная, если позже вы поедете в страны, которые об этом спрашивают. Храните талон вместе с паспортом до выезда. Чтобы штамп поставили на талон, а не на страницу, просить обычно даже не нужно.</p>
<h2>Прилёт в Эрджан</h2>
<p>Если вы прилетаете прямо в Эрджан, паспортный контроль проходите в аэропорту — и всё; по дороге в отель второго пункта нет. Водитель ждёт вас сразу за дверями, а дорога до Кирении, Фамагусты или Искеле короткая.</p>
<h2>Переезд из Ларнаки или Пафоса</h2>
<p>Если вы приземляетесь на юге и пересекаете «зелёную линию» на машине, вы показываете паспорт на пункте пропуска по пути. Вы остаётесь в автомобиле, с пассажиров плата не берётся, а водитель знает процедуру и самую быструю полосу. Въехав на остров через Ларнаку или Пафос, вы уже легально на Кипре; переход лишь перемещает вас между двумя администрациями. Для западных направлений, таких как Гюзельюрт и Лефке, мы используем переход Бостанджи (Астромеритис).</p>
<h2>Аренда авто — исключение</h2>
<p>Единственное, что стоит знать: арендованную на юге машину часто нельзя перегнать на север (и наоборот), а страховка проката редко покрывает пересечение линии. Это самая частая ошибка новичков. Частный трансфер полностью снимает проблему — одна машина, обе части острова и никаких бумаг или забот о страховке. К тому же вы свободно перемещаетесь между севером и югом, не меняя транспорт.</p>
<h2>Передвижение после въезда</h2>
<p>Помимо дороги из аэропорта и перехода мы также организуем <strong>поездки по городу (şehir içi) и по всему острову</strong> по фиксированным местным ценам — включая поездки на день туда и обратно между севером и югом; именно здесь водитель, проходящий пункт каждый день, экономит вам время и избавляет от неопределённости.</p>
<h2>Частые вопросы</h2>
<h3>Нужна ли виза в Северный Кипр?</h3>
<p>Большинству гостей — нет: въезд по прибытии на срок до 90 дней с действующим паспортом. Проверьте своё гражданство перед поездкой.</p>
<h3>Поставят ли в Северном Кипре штамп в паспорт?</h3>
<p>Обычно нет. По умолчанию штамп ставят на отдельный талон, и паспорт остаётся без отметок.</p>
<h3>Можно ли перегнать арендованную машину через границу?</h3>
<p>Обычно нет, и страховка это редко покрывает. Частный трансфер пересекает свободно, без бумаг с вашей стороны.</p>
<h3>Нужно ли что-то, чтобы вернуться на юг?</h3>
<p>Снова только паспорт для короткой проверки. Вы остаётесь в машине, и платы с пассажиров нет.</p>
<p>Планируете переезд? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">забронируйте за две минуты</a>.</p>`,
    },
  },
  {
    slug: 'ercan-vs-larnaca-for-kyrenia',
    date: '2026-07-11',
    title: {
      en: 'Ercan vs Larnaca: Which Airport Is Best for Kyrenia?',
      tr: 'Ercan mı Larnaka mı: Girne için Hangi Havalimanı Daha İyi?',
      ru: 'Эрджан или Ларнака: какой аэропорт лучше для Кирении?',
    },
    description: {
      en: 'Time, cost and convenience compared for reaching Kyrenia hotels — flying into Ercan versus Larnaca and crossing the border.',
      tr: "Girne otellerine ulaşmak için zaman, maliyet ve kolaylık karşılaştırması — Ercan'a inmek mi yoksa Larnaka'ya inip sınırı geçmek mi.",
      ru: 'Сравнение времени, цены и удобства для поездки в отели Кирении — прилёт в Эрджан против Ларнаки с пересечением границы.',
    },
    body: {
      en: `
<p>Kyrenia (Girne) is the north's most popular base, and you can reach it from two very different airports: Ercan, the north's own, and Larnaca in the south. One is closer; the other has more flights. Here's how they compare on time, cost and hassle, so you can book the flight that actually suits you — and what happens on the ground once you land.</p>
<h2>Ercan: closer, simpler</h2>
<p>Ercan sits just east of Nicosia, about 35 minutes from Kyrenia with no border to cross. Arrival is quick, the terminal is calm, the transfer is short, and it's usually the cheapest option door to door. The trade-off is flights: almost all of them route through Turkey, so from Europe you'll typically connect through Istanbul or another Turkish hub, which adds time and a change of plane.</p>
<h2>Larnaca: more flights, a border</h2>
<p>Larnaca is a full international airport with direct flights from across Europe and the UK — often cheaper tickets and no connection at all. The catch is distance and the crossing: Larnaca to Kyrenia is around 75 minutes and passes through a Green Line checkpoint near Nicosia. With a private transfer the crossing is effortless — you stay in the car, show your passport briefly, and there's no passenger fee — but it does add 20–30 minutes to the drive.</p>
<h2>At a glance</h2>
<ul>
  <li><strong>Fastest transfer:</strong> Ercan (~35 min) vs Larnaca (~75 min)</li>
  <li><strong>Lower transfer fare:</strong> Ercan</li>
  <li><strong>Widest flight choice / direct from Europe:</strong> Larnaca</li>
  <li><strong>No border crossing:</strong> Ercan</li>
  <li><strong>Often the cheaper flight:</strong> Larnaca</li>
</ul>
<h2>How the crossing works from Larnaca</h2>
<p>If you fly into Larnaca, the drive to Kyrenia crosses the Green Line at one of Nicosia's vehicle checkpoints (usually Metehan/Ağırdağ). You remain in the same car the whole way, an officer may glance at passports, and there's no charge for passengers. Your chauffeur does this daily and knows the quickest lanes — so what sounds complicated is, in practice, a brief pause in an otherwise ordinary drive.</p>
<h2>Don't forget the return</h2>
<p>Weigh the whole trip, not just the arrival. If you fly in and out of Larnaca, you'll cross the border twice — still easy, but factor in the extra time on your departure day so you reach the airport comfortably. We build that into your return pickup time automatically when you book a round trip.</p>
<h2>Beyond the airport — local rides</h2>
<p>Whichever airport you choose, the same fixed-price service covers getting around once you're in Kyrenia. We run <strong>şehir içi (in-town) and around-the-island journeys</strong> too — the harbour for dinner, Bellapais, a casino hotel, a hospital run, or a day trip to Famagusta — so you're looked after for the whole stay.</p>
<h2>Our honest advice</h2>
<p>If a convenient direct flight into Larnaca is noticeably cheaper, take it — the transfer and crossing are smooth and we handle everything. If flight prices are similar, Ercan wins on time and cost once you're on the ground. Either way, you land to a fixed-price car and a chauffeur who tracks your flight.</p>
<h2>Frequently asked questions</h2>
<h3>Which is cheaper overall, Ercan or Larnaca?</h3>
<p>It depends on the flight. Ercan's transfer is cheaper, but a direct Larnaca flight can beat an Ercan connection on the total cost. Compare the fixed transfer fares alongside the ticket prices.</p>
<h3>Is the Larnaca border crossing difficult?</h3>
<p>No. You stay in the car, passports ready, no passenger fee — it adds about 20–30 minutes and your driver handles it.</p>
<h3>Can I fly into one airport and out of the other?</h3>
<p>Yes, and it's common. Just tell us both airports when you book and we'll price each leg.</p>
<p>Compare both routes: <a href="/en/routes/ercan-airport-to-kyrenia/">Ercan to Kyrenia</a> and <a href="/en/routes/larnaca-airport-to-kyrenia/">Larnaca to Kyrenia</a> — or <a href="/en/book/">book now</a>.</p>`,
      tr: `
<p>Girne, kuzeyin en popüler üssüdür ve buraya birbirinden çok farklı iki havalimanından ulaşabilirsiniz: kuzeyin kendi havalimanı Ercan ve güneydeki Larnaka. Biri daha yakın; diğerinin daha çok uçuşu var. İşte zaman, maliyet ve zahmet açısından karşılaştırmaları — size gerçekten uygun uçuşu seçebilmeniz için — ve indiğinizde yerde neler olduğu.</p>
<h2>Ercan: daha yakın, daha basit</h2>
<p>Ercan, Lefkoşa'nın hemen doğusundadır; Girne'ye yaklaşık 35 dakika ve geçilecek sınır yoktur. Varış hızlı, terminal sakin, transfer kısa ve genellikle kapıdan kapıya en ucuz seçenektir. Bedeli uçuşlardır: neredeyse tamamı Türkiye üzerinden gittiğinden, Avrupa'dan genellikle İstanbul veya başka bir Türk aktarma noktasından bağlanırsınız; bu da zaman ve bir uçak değişikliği ekler.</p>
<h2>Larnaka: daha çok uçuş, bir sınır</h2>
<p>Larnaka, Avrupa ve İngiltere'nin her yerinden direkt uçuşları olan tam bir uluslararası havalimanıdır — çoğu zaman daha ucuz bilet ve hiç aktarmasız. İşin püf noktası mesafe ve geçiştir: Larnaka'dan Girne'ye yaklaşık 75 dakika sürer ve Lefkoşa yakınında bir Yeşil Hat kontrol noktasından geçer. Özel transferle geçiş zahmetsizdir — araçta kalırsınız, pasaportunuzu kısaca gösterirsiniz ve yolcu ücreti yoktur — ama yolculuğa 20–30 dakika ekler.</p>
<h2>Bir bakışta</h2>
<ul>
  <li><strong>En hızlı transfer:</strong> Ercan (~35 dk) — Larnaka (~75 dk)</li>
  <li><strong>Daha düşük transfer ücreti:</strong> Ercan</li>
  <li><strong>En geniş uçuş seçeneği / Avrupa'dan direkt:</strong> Larnaka</li>
  <li><strong>Sınır geçişi yok:</strong> Ercan</li>
  <li><strong>Çoğu zaman daha ucuz uçuş:</strong> Larnaka</li>
</ul>
<h2>Larnaka'dan geçiş nasıl işler</h2>
<p>Larnaka'ya inerseniz, Girne'ye yolculuk Lefkoşa'nın araç kontrol noktalarından birinde (genellikle Metehan/Ağırdağ) Yeşil Hat'tı geçer. Yol boyunca aynı araçta kalırsınız, bir görevli pasaportlara bakabilir ve yolculardan ücret alınmaz. Şoförünüz bunu her gün yapar ve en hızlı şeritleri bilir — yani kulağa karmaşık gelen şey, pratikte sıradan bir yolculukta kısa bir moladır.</p>
<h2>Dönüşü unutmayın</h2>
<p>Yalnızca varışı değil, tüm yolculuğu değerlendirin. Larnaka'ya gidip Larnaka'dan dönerseniz sınırı iki kez geçersiniz — yine kolay, ama kalkış gününüzde havalimanına rahatça ulaşmak için fazladan süreyi hesaba katın. Gidiş-dönüş rezervasyonu yaptığınızda bunu dönüş alış saatinize otomatik olarak ekleriz.</p>
<h2>Havalimanının ötesinde — şehir içi yolculuklar</h2>
<p>Hangi havalimanını seçerseniz seçin, Girne'ye vardıktan sonra aynı sabit fiyatlı hizmet ulaşımınızı kapsar. <strong>Şehir içi ve ada geneli yolculukları</strong> da yaparız — akşam yemeği için liman, Bellapais, bir casino oteli, hastane yolculuğu ya da Gazimağusa'ya günübirlik gezi — böylece tüm konaklama boyunca yanınızdayız.</p>
<h2>Dürüst tavsiyemiz</h2>
<p>Larnaka'ya uygun bir direkt uçuş belirgin şekilde daha ucuzsa onu tercih edin — transfer ve geçiş sorunsuzdur, her şeyi biz hallederiz. Uçuş fiyatları benzerse, yere indiğinizde Ercan zaman ve maliyette öne geçer. Her iki durumda da sabit fiyatlı bir araca ve uçuşunuzu takip eden bir şoföre inersiniz.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Genel olarak hangisi daha ucuz, Ercan mı Larnaka mı?</h3>
<p>Uçuşa bağlıdır. Ercan'ın transferi daha ucuzdur, ama direkt bir Larnaka uçuşu toplam maliyette bir Ercan aktarmasını geçebilir. Sabit transfer ücretlerini bilet fiyatlarıyla birlikte karşılaştırın.</p>
<h3>Larnaka sınır geçişi zor mu?</h3>
<p>Hayır. Araçta kalırsınız, pasaportlar hazır, yolcu ücreti yok — yaklaşık 20–30 dakika ekler ve şoförünüz halleder.</p>
<h3>Bir havalimanına inip diğerinden uçabilir miyim?</h3>
<p>Evet, üstelik yaygındır. Rezervasyon sırasında her iki havalimanını söyleyin, her ayağı ayrı fiyatlandıralım.</p>
<p>İki güzergahı karşılaştırın: <a href="/tr/routes/ercan-airport-to-kyrenia/">Ercan–Girne</a> ve <a href="/tr/routes/larnaca-airport-to-kyrenia/">Larnaka–Girne</a> — ya da <a href="/tr/book/">hemen rezerve edin</a>.</p>`,
      ru: `
<p>Кирения (Гирне) — самая популярная база на севере, и добраться до неё можно из двух очень разных аэропортов: собственного северного Эрджана и южной Ларнаки. Один ближе, у другого больше рейсов. Вот их сравнение по времени, цене и хлопотам — чтобы вы выбрали рейс, который вам действительно подходит, — и что происходит на земле после посадки.</p>
<h2>Эрджан: ближе и проще</h2>
<p>Эрджан находится сразу к востоку от Никосии, около 35 минут до Кирении и без пересечения границы. Прибытие быстрое, терминал спокойный, трансфер короткий, и это обычно самый недорогой вариант «от двери до двери». Компромисс — рейсы: почти все идут через Турцию, так что из Европы вы обычно летите со стыковкой в Стамбуле или другом турецком хабе, а это добавляет время и пересадку.</p>
<h2>Ларнака: больше рейсов, но граница</h2>
<p>Ларнака — полноценный международный аэропорт с прямыми рейсами со всей Европы и из Великобритании: часто билеты дешевле и вовсе без стыковок. Нюанс — расстояние и переход: от Ларнаки до Кирении около 75 минут через пункт «зелёной линии» у Никосии. С частным трансфером переход проходит легко — вы остаётесь в машине, кратко показываете паспорт, платы с пассажиров нет, — но добавляет к дороге 20–30 минут.</p>
<h2>Коротко</h2>
<ul>
  <li><strong>Самый быстрый трансфер:</strong> Эрджан (~35 мин) — Ларнака (~75 мин)</li>
  <li><strong>Ниже цена трансфера:</strong> Эрджан</li>
  <li><strong>Больше выбор рейсов / прямые из Европы:</strong> Ларнака</li>
  <li><strong>Без пересечения границы:</strong> Эрджан</li>
  <li><strong>Часто более дешёвый рейс:</strong> Ларнака</li>
</ul>
<h2>Как проходит переход из Ларнаки</h2>
<p>Если вы прилетаете в Ларнаку, дорога в Кирению пересекает «зелёную линию» на одном из автомобильных пунктов Никосии (обычно Метехан/Агырдаг). Вы остаётесь в той же машине всю дорогу, сотрудник может взглянуть на паспорта, и платы с пассажиров нет. Ваш водитель делает это ежедневно и знает самые быстрые полосы — так что то, что звучит сложно, на практике лишь короткая пауза в обычной поездке.</p>
<h2>Не забудьте про обратный путь</h2>
<p>Оценивайте всю поездку, а не только прилёт. Если вы летите туда и обратно через Ларнаку, границу вы пересечёте дважды — по-прежнему легко, но в день вылета заложите дополнительное время, чтобы спокойно добраться до аэропорта. При бронировании «туда-обратно» мы автоматически учитываем это во времени обратной подачи.</p>
<h2>За пределами аэропорта — поездки по городу</h2>
<p>Какой бы аэропорт вы ни выбрали, после приезда в Кирению та же услуга по фиксированной цене покрывает передвижение. Мы также возим <strong>по городу (şehir içi) и по всему острову</strong> — в гавань на ужин, в Беллапаис, в казино-отель, в больницу или на день в Фамагусту — так что вы под опекой всю поездку.</p>
<h2>Наш честный совет</h2>
<p>Если удобный прямой рейс в Ларнаку заметно дешевле — берите его: трансфер и переход проходят гладко, всё берём на себя. Если цены на билеты близки, Эрджан выигрывает по времени и стоимости на месте. В любом случае вас встретит машина по фиксированной цене и водитель, отслеживающий ваш рейс.</p>
<h2>Частые вопросы</h2>
<h3>Что в итоге дешевле — Эрджан или Ларнака?</h3>
<p>Зависит от рейса. Трансфер из Эрджана дешевле, но прямой рейс в Ларнаку может выиграть по общей стоимости у стыковки через Эрджан. Сравнивайте фиксированные цены трансфера вместе с ценами билетов.</p>
<h3>Сложен ли переход границы из Ларнаки?</h3>
<p>Нет. Вы остаётесь в машине, паспорта наготове, платы с пассажиров нет — добавляет около 20–30 минут, и водитель всё делает сам.</p>
<h3>Можно ли прилететь в один аэропорт, а улететь из другого?</h3>
<p>Да, и это обычное дело. Просто укажите оба аэропорта при бронировании, и мы рассчитаем каждый отрезок.</p>
<p>Сравните оба маршрута: <a href="/ru/routes/ercan-airport-to-kyrenia/">Эрджан–Кирения</a> и <a href="/ru/routes/larnaca-airport-to-kyrenia/">Ларнака–Кирения</a> — или <a href="/ru/book/">забронируйте сейчас</a>.</p>`,
    },
  },
  {
    slug: 'guzelyurt-morphou-transfer-guide',
    date: '2026-07-11',
    title: {
      en: 'Güzelyurt (Morphou): Airport Transfers and Area Guide',
      tr: 'Güzelyurt: Havalimanı Transferleri ve Bölge Rehberi',
      ru: 'Гюзельюрт (Морфу): трансферы из аэропорта и гид по региону',
    },
    description: {
      en: 'How to reach Güzelyurt from Ercan, Larnaca and Paphos, local rides around town, and what the citrus country of the northwest is known for.',
      tr: "Ercan, Larnaka ve Baf'tan Güzelyurt'a nasıl ulaşılır, şehir içi yolculuklar ve kuzeybatının narenciye diyarının öne çıkanları.",
      ru: 'Как добраться до Гюзельюрта из Эрджана, Ларнаки и Пафоса, поездки по городу и чем известен цитрусовый край северо-запада.',
    },
    body: {
      en: `
<p>Güzelyurt — Morphou to many older maps — is the quiet heart of North Cyprus's northwest: a landscape of citrus groves, an unhurried town centre, and some of the island's finest archaeology just down the road. It sees far fewer visitors than the coast, which is exactly its charm — but it also means transport can be thin, so a little planning pays off. Here's how to reach Güzelyurt from each airport, how the border crossing works from the south, and how we get you around once you've arrived.</p>
<h2>Where is Güzelyurt?</h2>
<p>Güzelyurt sits in the northwest of the island, about 35 km west of Nicosia and a short drive from the west coast at Gemikonağı and Lefke. It's inland but close to the sea, ringed by the orange and lemon orchards that give the whole district its name and its economy. The nearest airport is Ercan; from the south — Larnaca or Paphos — you reach it by crossing the Green Line at the western Bostancı checkpoint.</p>
<h2>Getting to Güzelyurt from the airports</h2>
<p>From <strong>Ercan</strong> it's an easy drive of about 50 minutes straight across the middle of the island — no border, no fuss. From the south, we take the western route so you're not dragged the long way through the capital:</p>
<ul>
  <li><strong>Larnaca to Güzelyurt:</strong> about 1 hour 45 minutes, crossing the Green Line at the Bostancı (Astromeritis) checkpoint</li>
  <li><strong>Paphos to Güzelyurt:</strong> a similar distance, with the western crossing more direct than routing through Nicosia</li>
</ul>
<p>Every route has a fixed fare agreed before you travel — no meter, and no surcharge for the border. Tell us your flight number when you book and we'll track it, so a delayed landing never leaves you stranded or shortens your waiting time.</p>
<h2>Crossing the border for Güzelyurt</h2>
<p>If you fly into Larnaca or Paphos, your transfer crosses the Green Line by car. For Güzelyurt we use the <strong>Bostancı (Astromeritis) crossing</strong>, which sits just south of the town — far quicker than the Nicosia checkpoints most drivers default to. You stay in the car, have your passport ready for a brief check, and there is no fee for passengers. Because our chauffeurs run this route regularly, they know the fastest lanes and the quietest times to cross.</p>
<h2>Getting around once you're here — local rides</h2>
<p>Güzelyurt is spread out and, unlike the resort towns, has very few taxis waiting around — especially in the evening. This is where a local driver earns their keep. We handle <strong>şehir içi (in-town) and around-town journeys</strong> at fixed local prices, so you're never stuck:</p>
<ul>
  <li>Into the <strong>town centre</strong> for the market, a bank or a meal</li>
  <li>Out to the <strong>orange and lemon groves</strong> and the surrounding villages</li>
  <li>Along the coast to <strong>Lefke and Gemikonağı</strong> for lunch or the sea</li>
  <li>To the university, a hospital or pharmacy, or an evening out</li>
</ul>
<p>Arrange these when you book, or simply message us during your stay and we'll send a car.</p>
<h2>What the area is known for</h2>
<p>The region is famous above all for its citrus — the <strong>Orange Festival</strong> each spring is a local institution, filling the town with produce, music and stalls. Just west along the coast lies the ancient city of <strong>Soli</strong>, with its Roman mosaic floors and hillside theatre, and above it the hilltop <strong>Vouni Palace</strong>, whose ruins look out over the Mediterranean. In the town itself, the handsome <strong>Church of Agios Mamas</strong>, now a museum, is the landmark most visitors come to see. It's an easy, local pace you won't find on the busy northern coast — a half-day here pairs perfectly with a beach afternoon at Gemikonağı.</p>
<h2>Frequently asked questions</h2>
<h3>Which airport is best for Güzelyurt?</h3>
<p>Ercan is closest at about 50 minutes and involves no border. From Europe without a Turkey connection, Larnaca or Paphos work well too — the western Bostancı crossing keeps the drive direct.</p>
<h3>Do you do local trips around Güzelyurt, not just airport transfers?</h3>
<p>Yes. We run in-town and around-town rides at fixed local prices — the town centre, the groves, Lefke, the university, or an evening out. Just ask.</p>
<h3>How long does the border crossing take?</h3>
<p>Usually only a few minutes at Bostancı. You stay in the car, show passports, and there is no charge for passengers.</p>
<p><strong>Güzelyurt line — direct contact.</strong> Güzelyurt rides are handled directly by Halit Yeşilovalı — call or WhatsApp <a href="tel:+905488616939">+90 548 861 69 39</a> for availability and pickup.</p>
<p>Arriving, leaving, or just getting around — <a href="/en/routes/">see fixed prices</a> or <a href="/en/book/">book your transfer</a> in two minutes.</p>`,
      tr: `
<p>Güzelyurt — eski haritalarda Omorfo/Morphou — Kuzey Kıbrıs'ın kuzeybatısının sakin kalbidir: narenciye bahçeleri, telaşsız bir şehir merkezi ve hemen yanı başında adanın en güzel arkeolojik alanlarından bazıları. Sahile kıyasla çok daha az ziyaretçi alır; işte tam da bu onun cazibesidir — ama aynı zamanda ulaşımın az olabileceği anlamına gelir, bu yüzden biraz planlama işe yarar. İşte her havalimanından Güzelyurt'a nasıl ulaşacağınız, güneyden sınır geçişinin nasıl işlediği ve vardıktan sonra sizi nasıl gezdirdiğimiz.</p>
<h2>Güzelyurt nerede?</h2>
<p>Güzelyurt, adanın kuzeybatısında, Lefkoşa'nın yaklaşık 35 km batısında ve Gemikonağı ile Lefke'deki batı kıyısına kısa mesafede yer alır. İç kesimdedir ama denize yakındır; tüm bölgeye adını ve ekonomisini veren portakal ve limon bahçeleriyle çevrilidir. En yakın havalimanı Ercan'dır; güneyden — Larnaka veya Baf — batıdaki Bostancı kapısından Yeşil Hat'tı geçerek ulaşırsınız.</p>
<h2>Havalimanlarından Güzelyurt'a ulaşım</h2>
<p><strong>Ercan'dan</strong> adanın tam ortasından geçen yaklaşık 50 dakikalık rahat bir yolculuktur — sınır yok, dert yok. Güneyden, sizi başkentin uzun yolundan sürüklemeyelim diye batı güzergahını kullanırız:</p>
<ul>
  <li><strong>Larnaka–Güzelyurt:</strong> yaklaşık 1 saat 45 dakika, Yeşil Hat'tı Bostancı (Astromeritis) kapısından geçerek</li>
  <li><strong>Baf–Güzelyurt:</strong> benzer mesafe; batı geçişi Lefkoşa üzerinden gitmekten daha doğrudandır</li>
</ul>
<p>Her güzergahın, yola çıkmadan kararlaştırılan sabit bir ücreti vardır — taksimetre ve sınır için ek ücret yok. Rezervasyon sırasında uçuş numaranızı verin, takip edelim; böylece rötarlı bir iniş sizi asla yolda bırakmaz veya bekleme sürenizi kısaltmaz.</p>
<h2>Güzelyurt için sınır geçişi</h2>
<p>Larnaka veya Baf'a inerseniz transferiniz Yeşil Hat'tı arabayla geçer. Güzelyurt için, kasabanın hemen güneyinde yer alan <strong>Bostancı (Astromeritis) geçişini</strong> kullanırız — çoğu sürücünün varsayılan olarak kullandığı Lefkoşa kapılarından çok daha hızlı. Araçta kalırsınız, kısa bir kontrol için pasaportunuzu hazır tutarsınız ve yolculardan ücret alınmaz. Şoförlerimiz bu güzergahı düzenli olarak yaptığından en hızlı şeritleri ve geçiş için en sakin saatleri bilirler.</p>
<h2>Vardıktan sonra ulaşım — şehir içi yolculuklar</h2>
<p>Güzelyurt geniş bir alana yayılır ve tatil kasabalarının aksine etrafta bekleyen çok az taksi vardır — özellikle akşamları. İşte yerel bir şoförün değerini gösterdiği yer burasıdır. <strong>Şehir içi ve kasaba çevresi yolculuklarını</strong> sabit yerel fiyatlarla düzenliyoruz, böylece asla yolda kalmazsınız:</p>
<ul>
  <li>Pazar, banka ya da yemek için <strong>şehir merkezine</strong></li>
  <li><strong>Portakal ve limon bahçelerine</strong> ve çevre köylere</li>
  <li>Öğle yemeği veya deniz için sahil boyunca <strong>Lefke ve Gemikonağı'na</strong></li>
  <li>Üniversiteye, hastane ya da eczaneye, veya akşam gezmesine</li>
</ul>
<p>Bunları rezervasyon sırasında ayarlayın ya da konaklamanız sırasında bize yazın, aracı gönderelim.</p>
<h2>Bölgenin öne çıkanları</h2>
<p>Yöre her şeyden önce narenciyesiyle ünlüdür — her ilkbahar düzenlenen <strong>Portakal Festivali</strong> köklü bir gelenektir; kasabayı ürün, müzik ve tezgahlarla doldurur. Sahil boyunca hemen batıda, Roma mozaik zeminleri ve yamaç tiyatrosuyla antik <strong>Soli</strong> kenti, onun üzerinde ise kalıntıları Akdeniz'e bakan tepedeki <strong>Vouni Sarayı</strong> yer alır. Kasabanın kendisinde, artık müze olan güzel <strong>Aya Mamas Kilisesi</strong> çoğu ziyaretçinin görmeye geldiği simgedir. Kalabalık kuzey sahilinde bulamayacağınız sakin, yerel bir tempo — buradaki yarım gün, Gemikonağı'nda bir plaj öğleden sonrasıyla mükemmel uyum sağlar.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Güzelyurt için hangi havalimanı en iyisi?</h3>
<p>Ercan yaklaşık 50 dakikayla en yakınıdır ve sınır içermez. Türkiye aktarması olmadan Avrupa'dan gelenler için Larnaka veya Baf da iyi çalışır — batıdaki Bostancı geçişi yolculuğu doğrudan tutar.</p>
<h3>Sadece havalimanı transferi değil, Güzelyurt çevresinde yerel yolculuklar da yapıyor musunuz?</h3>
<p>Evet. Şehir içi ve kasaba çevresi yolculuklarını sabit yerel fiyatlarla yaparız — şehir merkezi, bahçeler, Lefke, üniversite ya da akşam gezmesi. Sormanız yeterli.</p>
<h3>Sınır geçişi ne kadar sürer?</h3>
<p>Bostancı'da genellikle yalnızca birkaç dakika. Araçta kalırsınız, pasaport gösterirsiniz ve yolculardan ücret alınmaz.</p>
<p><strong>Güzelyurt hattı — doğrudan iletişim.</strong> Güzelyurt yolculuklarını doğrudan Halit Yeşilovalı yürütür — uygunluk ve alım için <a href="tel:+905488616939">+90 548 861 69 39</a> numarasını arayın ya da WhatsApp'tan yazın.</p>
<p>Geliş, gidiş ya da yalnızca gezinmek — <a href="/tr/routes/">sabit fiyatlara bakın</a> veya iki dakikada <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Гюзельюрт — на старых картах Морфу — тихое сердце северо-запада Северного Кипра: цитрусовые сады, неспешный центр города и одни из лучших археологических памятников острова совсем рядом. Сюда приезжает гораздо меньше гостей, чем на побережье, — в этом и есть его очарование, но это же значит, что транспорта немного, и немного планирования окупается. Вот как добраться до Гюзельюрта из каждого аэропорта, как проходит переход границы с юга и как мы возим вас после приезда.</p>
<h2>Где находится Гюзельюрт?</h2>
<p>Гюзельюрт расположен на северо-западе острова, примерно в 35 км к западу от Никосии и недалеко от западного побережья у Гемиконагы и Лефке. Он в глубине суши, но близко к морю, окружён апельсиновыми и лимонными садами, которые дали всему округу его имя и его экономику. Ближайший аэропорт — Эрджан; с юга (Ларнака или Пафос) вы добираетесь, пересекая «зелёную линию» на западном пункте Бостанджи.</p>
<h2>Как добраться до Гюзельюрта из аэропортов</h2>
<p>Из <strong>Эрджана</strong> — лёгкая поездка около 50 минут прямо через центр острова: без границы и хлопот. С юга мы едем западным маршрутом, чтобы не везти вас долгой дорогой через столицу:</p>
<ul>
  <li><strong>Ларнака–Гюзельюрт:</strong> около 1 ч 45 мин, с пересечением «зелёной линии» на пункте Бостанджи (Астромеритис)</li>
  <li><strong>Пафос–Гюзельюрт:</strong> схожее расстояние; западный переход удобнее, чем ехать через Никосию</li>
</ul>
<p>У каждого маршрута фиксированная цена, оговорённая до поездки — без счётчика и без наценки за границу. Укажите номер рейса при бронировании, и мы его отследим, так что задержка посадки никогда не оставит вас без машины и не сократит время ожидания.</p>
<h2>Пересечение границы для Гюзельюрта</h2>
<p>Если вы прилетаете в Ларнаку или Пафос, трансфер пересекает «зелёную линию» на машине. Для Гюзельюрта мы используем <strong>переход Бостанджи (Астромеритис)</strong>, который находится сразу к югу от города, — намного быстрее пунктов Никосии, которые большинство водителей выбирают по умолчанию. Вы остаётесь в машине, держите паспорт наготове для короткой проверки, и с пассажиров плата не берётся. Поскольку наши водители ездят этим маршрутом регулярно, они знают самые быстрые полосы и самое спокойное время для перехода.</p>
<h2>Передвижение на месте — поездки по городу</h2>
<p>Гюзельюрт растянут и, в отличие от курортных городов, такси здесь почти не дежурят — особенно вечером. Именно здесь местный водитель незаменим. Мы организуем <strong>поездки по городу (şehir içi) и по окрестностям</strong> по фиксированным местным ценам, так что вы никогда не застрянете:</p>
<ul>
  <li>В <strong>центр города</strong> — на рынок, в банк или поесть</li>
  <li>К <strong>апельсиновым и лимонным садам</strong> и в окрестные деревни</li>
  <li>Вдоль побережья в <strong>Лефке и Гемиконагы</strong> — на обед или к морю</li>
  <li>В университет, больницу или аптеку, или на вечерний выход</li>
</ul>
<p>Договоритесь об этом при бронировании или просто напишите нам во время поездки — и мы пришлём машину.</p>
<h2>Чем известен регион</h2>
<p>Край прежде всего славится цитрусовыми — весенний <strong>Фестиваль апельсинов</strong> здесь давняя традиция, наполняющая город продукцией, музыкой и лотками. Западнее по побережью лежит античный город <strong>Соли</strong> с римскими мозаичными полами и театром на склоне, а над ним — холмовой <strong>дворец Вуни</strong>, чьи руины смотрят на Средиземное море. В самом городе главная достопримечательность — красивая <strong>церковь Святого Мамаса</strong>, ныне музей. Это спокойный, местный ритм, которого не найти на оживлённом северном побережье; полдня здесь прекрасно сочетаются с пляжным вечером в Гемиконагы.</p>
<h2>Частые вопросы</h2>
<h3>Какой аэропорт лучше для Гюзельюрта?</h3>
<p>Эрджан ближе всего — около 50 минут и без границы. Из Европы без стыковки через Турцию хорошо подходят и Ларнака, и Пафос — западный переход Бостанджи делает дорогу прямой.</p>
<h3>Вы делаете местные поездки по Гюзельюрту, а не только трансферы из аэропорта?</h3>
<p>Да. Мы возим по городу и окрестностям по фиксированным местным ценам — центр, сады, Лефке, университет или вечерний выход. Просто спросите.</p>
<h3>Сколько занимает переход границы?</h3>
<p>Обычно всего несколько минут на Бостанджи. Вы остаётесь в машине, показываете паспорта, и с пассажиров плата не берётся.</p>
<p><strong>Линия Гюзельюрт — прямой контакт.</strong> Поездки в Гюзельюрт выполняет напрямую Халит Йешиловалы — звоните или пишите в WhatsApp на <a href="tel:+905488616939">+90 548 861 69 39</a> для уточнения и подачи.</p>
<p>Приезд, отъезд или просто передвижение — <a href="/ru/routes/">смотрите фиксированные цены</a> или <a href="/ru/book/">забронируйте трансфер</a> за две минуты.</p>`,
    },
  },
  {
    slug: 'iskele-long-beach-hotels-transfer-guide',
    date: '2026-07-11',
    title: {
      en: 'İskele Long Beach Hotels: Your Airport Transfer Guide',
      tr: 'İskele Long Beach Otelleri: Havalimanı Transfer Rehberiniz',
      ru: 'Отели Искеле Лонг-Бич: гид по трансферу из аэропорта',
    },
    description: {
      en: 'Reaching the Long Beach resorts at İskele — transfer times and fixed prices from Ercan, Larnaca and Paphos to Grand Sapphire, Caesar and Courtyard.',
      tr: "İskele'deki Long Beach tatil köylerine ulaşım — Ercan, Larnaka ve Baf'tan Grand Sapphire, Caesar ve Courtyard'a transfer süreleri ve sabit fiyatlar.",
      ru: 'Как добраться до курортов Лонг-Бич в Искеле — время в пути и фиксированные цены из Эрджана, Ларнаки и Пафоса до Grand Sapphire, Caesar и Courtyard.',
    },
    body: {
      en: `
<p>İskele's Long Beach has become one of North Cyprus's fastest-growing resort strips — a long run of golden sand backed by big, self-contained hotels like Grand Sapphire, Caesar Resort and Courtyard Long Beach. It's a modern, purpose-built holiday area, which is great for a relaxed beach break but also means the resorts sit some way from the nearest airport. Here's how to get there from each one, what to expect on arrival, and how we help you get around while you're there.</p>
<h2>Where is Long Beach?</h2>
<p>Long Beach runs along the east coast just south of Boğaz, in the İskele (Trikomo) district. It's north of Famagusta and well east of Nicosia, so all three airports involve a proper drive rather than a quick hop — which is exactly why a fixed-price transfer, booked ahead, saves the hassle of finding a taxi late at night.</p>
<h2>Transfer times and airports</h2>
<ul>
  <li><strong>Ercan:</strong> about 45 minutes — the closest airport and usually the best value</li>
  <li><strong>Larnaca:</strong> around 1h 15m, crossing the Green Line by car</li>
  <li><strong>Paphos:</strong> a longer run from the west, best booked as a fixed-price private transfer</li>
</ul>
<p>Every route is quoted as a fixed fare before you travel — no meter, no matter the traffic or the hour, and the crossing from the south adds no surcharge.</p>
<h2>Big resorts, exact drop-offs</h2>
<p>The Long Beach hotels are large and spread along the shore, so the entrance you need genuinely matters — some have more than one gate and a long internal road. When you book, tell us the exact hotel — Grand Sapphire, Caesar Resort & Spa, Courtyard Long Beach or another — and your chauffeur takes you to the right reception, not the nearest barrier. If you're staying in a rental apartment within one of the complexes, share the block name too.</p>
<h2>Late flights are normal here</h2>
<p>Many flights into Ercan land late in the evening, and Larnaca arrivals from Europe often touch down after dark too. We track every arrival, so a midnight landing is no problem — your driver is waiting whatever the hour, your included waiting time isn't shortened by a delay, and your fare doesn't change.</p>
<h2>Getting around during your stay — local rides</h2>
<p>Long Beach is self-contained, but taxis don't wait around outside the resorts, especially in the evening. That's where we come in beyond the airport run. We handle <strong>şehir içi (in-town) and around-the-area journeys</strong> at fixed local prices — into İskele or Boğaz for dinner, a supermarket or pharmacy run, a day trip to Famagusta's old town or the Karpaz peninsula, or a night out — so you're never stuck waiting or haggling over a meter. Arrange it when you book, or message us during your stay.</p>
<h2>Frequently asked questions</h2>
<h3>Which airport is best for Long Beach?</h3>
<p>Ercan is closest at about 45 minutes and usually cheapest. Larnaca works well for direct European flights, with a routine border crossing on the way.</p>
<h3>Will you drop me at my exact hotel?</h3>
<p>Yes — tell us the hotel name (and block, if it's an apartment) and we take you to the correct reception, not the nearest gate.</p>
<h3>Do you do trips once we're there, or only the airport transfer?</h3>
<p>Both. We run local and day-trip journeys at fixed prices throughout your stay.</p>
<p>Heading to Long Beach? <a href="/en/routes/">See fixed transfer prices</a> or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>İskele'nin Long Beach'i, Kuzey Kıbrıs'ın en hızlı büyüyen tatil bölgelerinden biri hâline geldi — Grand Sapphire, Caesar Resort ve Courtyard Long Beach gibi büyük, kendi içinde her şeyi barındıran otellerle çevrili uzun, altın renkli bir kumsal şeridi. Modern, planlı bir tatil bölgesidir; bu, rahat bir deniz tatili için harikadır ama tatil köylerinin en yakın havalimanına biraz uzak olduğu anlamına da gelir. İşte her havalimanından oraya nasıl ulaşacağınız, varışta sizi neler beklediği ve oradayken sizi nasıl gezdirdiğimiz.</p>
<h2>Long Beach nerede?</h2>
<p>Long Beach, doğu kıyısında Boğaz'ın hemen güneyinde, İskele (Trikomo) bölgesinde uzanır. Gazimağusa'nın kuzeyinde ve Lefkoşa'nın epey doğusundadır; bu yüzden üç havalimanı da kısa bir sıçrama değil, düzgün bir yolculuk gerektirir — önceden ayarlanmış sabit fiyatlı bir transferin, gece geç saatte taksi bulma derdinden kurtarmasının nedeni tam da budur.</p>
<h2>Transfer süreleri ve havalimanları</h2>
<ul>
  <li><strong>Ercan:</strong> yaklaşık 45 dakika — en yakın havalimanı ve genellikle en avantajlısı</li>
  <li><strong>Larnaka:</strong> yaklaşık 1 saat 15 dakika, Yeşil Hat'tı arabayla geçerek</li>
  <li><strong>Baf:</strong> batıdan daha uzun bir yolculuk; en iyisi sabit fiyatlı özel transfer olarak rezerve edilir</li>
</ul>
<p>Her güzergah, yola çıkmadan sabit bir ücretle verilir — trafik ya da saat ne olursa olsun taksimetre yok ve güneyden geçiş ek ücret getirmez.</p>
<h2>Büyük tatil köyleri, doğru bırakma noktaları</h2>
<p>Long Beach otelleri büyüktür ve kıyı boyunca yayılır, bu yüzden gireceğiniz kapı gerçekten önemlidir — bazılarının birden fazla kapısı ve uzun bir iç yolu vardır. Rezervasyon yaparken tam otel adını bize söyleyin — Grand Sapphire, Caesar Resort & Spa, Courtyard Long Beach ya da bir başkası — şoförünüz sizi en yakın bariyere değil doğru resepsiyona götürür. Bir kompleks içindeki kiralık bir dairede kalıyorsanız blok adını da paylaşın.</p>
<h2>Geç uçuşlar burada normaldir</h2>
<p>Ercan'a gelen birçok uçuş akşam geç saatlerde iner ve Larnaka'ya Avrupa'dan gelen uçuşlar da çoğu zaman hava karardıktan sonra iner. Her varışı takip ederiz, bu yüzden gece yarısı bir iniş sorun değildir — saat kaç olursa olsun sürücünüz bekler, dahil olan bekleme süreniz gecikmeyle kısalmaz ve ücretiniz değişmez.</p>
<h2>Konaklamanız boyunca ulaşım — şehir içi yolculuklar</h2>
<p>Long Beach kendi içinde her şeyi barındırır, ama taksiler tatil köylerinin dışında, özellikle akşamları beklemez. Havalimanı yolculuğunun ötesinde işte burada devreye gireriz. <strong>Şehir içi ve bölge içi yolculukları</strong> sabit yerel fiyatlarla düzenliyoruz — akşam yemeği için İskele ya da Boğaz'a, süpermarket ya da eczane yolculuğu, Gazimağusa'nın eski şehrine ya da Karpaz yarımadasına günübirlik gezi veya bir gece gezmesi — böylece asla beklemek ya da taksimetre pazarlığı yapmak zorunda kalmazsınız. Rezervasyon sırasında ayarlayın ya da konaklamanız sırasında bize yazın.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Long Beach için hangi havalimanı en iyisi?</h3>
<p>Ercan yaklaşık 45 dakikayla en yakınıdır ve genellikle en ucuzudur. Larnaka, yolda rutin bir sınır geçişiyle direkt Avrupa uçuşları için iyi çalışır.</p>
<h3>Beni tam otelime bırakır mısınız?</h3>
<p>Evet — otel adını (daire ise blok adını da) bize söyleyin, sizi en yakın kapıya değil doğru resepsiyona götürelim.</p>
<h3>Oradayken de gezi yapıyor musunuz, yoksa sadece havalimanı transferi mi?</h3>
<p>İkisi de. Konaklamanız boyunca yerel ve günübirlik yolculukları sabit fiyatlarla yaparız.</p>
<p>Long Beach'e mi gidiyorsunuz? <a href="/tr/routes/">Sabit transfer fiyatlarına bakın</a> ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Лонг-Бич в Искеле стал одним из самых быстрорастущих курортных участков Северного Кипра — длинная полоса золотого песка с крупными самодостаточными отелями вроде Grand Sapphire, Caesar Resort и Courtyard Long Beach. Это современная, специально построенная курортная зона: отлично для спокойного пляжного отдыха, но и означает, что курорты стоят довольно далеко от ближайшего аэропорта. Вот как добраться сюда из каждого, чего ждать по прибытии и как мы помогаем передвигаться на месте.</p>
<h2>Где находится Лонг-Бич?</h2>
<p>Лонг-Бич тянется вдоль восточного побережья сразу к югу от Богаза, в районе Искеле (Трикомо). Он севернее Фамагусты и заметно восточнее Никосии, поэтому все три аэропорта — это полноценная поездка, а не короткий переезд; именно поэтому фиксированный трансфер, заказанный заранее, избавляет от поисков такси поздно ночью.</p>
<h2>Время в пути и аэропорты</h2>
<ul>
  <li><strong>Эрджан:</strong> около 45 минут — ближайший аэропорт и обычно самый выгодный</li>
  <li><strong>Ларнака:</strong> примерно 1 ч 15 мин, с пересечением «зелёной линии» на машине</li>
  <li><strong>Пафос:</strong> более долгая поездка с запада; лучше бронировать как частный трансфер по фиксированной цене</li>
</ul>
<p>Каждый маршрут называется фиксированной ценой до поездки — без счётчика, независимо от трафика и часа, а переход с юга не даёт наценки.</p>
<h2>Большие курорты, точная высадка</h2>
<p>Отели Лонг-Бич большие и растянуты вдоль берега, поэтому важно, к какому входу вам нужно — у некоторых несколько ворот и длинная внутренняя дорога. При бронировании укажите точный отель — Grand Sapphire, Caesar Resort & Spa, Courtyard Long Beach или другой — и водитель отвезёт вас к нужной стойке регистрации, а не к ближайшему шлагбауму. Если вы живёте в арендованных апартаментах внутри комплекса, укажите и название корпуса.</p>
<h2>Поздние рейсы здесь — норма</h2>
<p>Многие рейсы в Эрджан приземляются поздно вечером, да и рейсы из Европы в Ларнаку часто садятся уже затемно. Мы отслеживаем каждое прибытие, поэтому посадка в полночь — не проблема: водитель ждёт в любой час, включённое время ожидания не сокращается из-за задержки, а стоимость не меняется.</p>
<h2>Передвижение во время отдыха — поездки по городу</h2>
<p>Лонг-Бич самодостаточен, но такси не дежурят у курортов, особенно вечером. Здесь мы и пригождаемся помимо дороги из аэропорта. Мы организуем <strong>поездки по городу (şehir içi) и по окрестностям</strong> по фиксированным местным ценам — в Искеле или Богаз на ужин, в супермаркет или аптеку, на день в старый город Фамагусты или на полуостров Карпаз или на вечерний выход — так что вам не придётся ждать или торговаться со счётчиком. Договоритесь при бронировании или напишите нам во время поездки.</p>
<h2>Частые вопросы</h2>
<h3>Какой аэропорт лучше для Лонг-Бич?</h3>
<p>Эрджан ближе всего — около 45 минут и обычно дешевле. Ларнака хорошо подходит для прямых европейских рейсов, с обычным переходом границы по пути.</p>
<h3>Довезёте ли вы меня до моего отеля?</h3>
<p>Да — назовите отель (и корпус, если это апартаменты), и мы отвезём к нужной стойке, а не к ближайшим воротам.</p>
<h3>Вы возите на месте, или только трансфер из аэропорта?</h3>
<p>И то, и другое. В течение всего отдыха мы делаем местные и дневные поездки по фиксированным ценам.</p>
<p>Едете на Лонг-Бич? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">забронируйте трансфер</a>.</p>`,
    },
  },
  {
    slug: 'north-cyprus-money-tipping-guide',
    date: '2026-07-11',
    title: {
      en: 'Euro or Lira? Money and Tipping in North Cyprus',
      tr: "Euro mu Lira mı? Kuzey Kıbrıs'ta Para ve Bahşiş",
      ru: 'Евро или лира? Деньги и чаевые на Северном Кипре',
    },
    description: {
      en: 'Which currency to bring, whether cards work, and how tipping works for taxis and transfers in North Cyprus — a quick practical guide.',
      tr: "Yanınıza hangi parayı almalı, kartlar geçer mi ve Kuzey Kıbrıs'ta taksi ve transferlerde bahşiş nasıl işler — kısa ve pratik bir rehber.",
      ru: 'Какую валюту брать, работают ли карты и как принято давать чаевые за такси и трансферы на Северном Кипре — короткий практический гид.',
    },
    body: {
      en: `
<p>North Cyprus runs on the Turkish Lira, but as a visitor you'll find paying more flexible than you might expect. Here's what to bring, how cards and cash work, and the answer to the question everyone asks — do you tip the driver?</p>
<h2>The local currency is the Lira</h2>
<p>Shops, cafés, markets and local taxis price in Turkish Lira (TL). It's worth carrying some cash for small purchases, street markets, village shops and rural spots where cards aren't taken. The Lira can move a lot against other currencies, so change smaller amounts more often rather than a big sum at once.</p>
<h2>But euros and sterling go a long way</h2>
<p>Hotels, resorts, larger restaurants and most transfer drivers happily accept euros — and often sterling too. If you're arriving from the south or on a short stay, you don't need to rush to change money at the airport; a small amount is plenty to start, and you can top up in town. Keep some small notes for tips and taxis.</p>
<h2>How much cash to bring</h2>
<p>For a typical week, a modest amount of cash for meals out, drinks, markets and tips covers most needs, with a card for hotels, supermarkets and bigger restaurants. There's no need to arrive with large sums — ATMs and exchange offices are easy to find once you're there.</p>
<h2>Cards and ATMs</h2>
<p>Cards work in hotels, supermarkets and bigger restaurants, and ATMs are easy to find in towns and resort areas. They typically dispense Lira; some also offer euros. Tell your bank you're travelling to Cyprus so a transaction here isn't flagged or blocked, and check your card's foreign-transaction fees before you rely on it.</p>
<h2>Paying for your transfer</h2>
<p>With TheTaxsi the fare is fixed and agreed before you travel — no meter, no border surcharge, no end-of-ride surprises. You can pay in cash to the chauffeur on arrival, in euros or Lira, unless you've arranged otherwise in advance. The same applies to any <strong>şehir içi (in-town) or local rides</strong> you add during your stay — a fixed local price, settled simply, with nothing to work out at the roadside.</p>
<h2>Do you tip the driver?</h2>
<p>Tipping is appreciated but never expected. If your chauffeur helped with heavy luggage, waited through a long delay, or ran an extra errand, rounding up or adding around 5–10% is a kind gesture — but the price you were quoted is the price you owe, and there's no obligation. In restaurants, a similar 5–10% is normal if service isn't already included; for hotel staff, a small note is a friendly touch.</p>
<h2>Frequently asked questions</h2>
<h3>Can I use euros in North Cyprus?</h3>
<p>Often, yes — hotels, resorts, bigger restaurants and most drivers accept euros, though the local price is in Lira and small local shops may want cash in TL.</p>
<h3>Do I need cash, or are cards enough?</h3>
<p>Cards cover hotels and larger venues, but carry some cash for markets, small cafés and tips.</p>
<h3>Should I tip my transfer driver?</h3>
<p>It's appreciated but not required. Your fixed fare is the price; a small round-up for good service is a kind extra.</p>
<p>Ready to travel? <a href="/en/routes/">See fixed prices</a> or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>Kuzey Kıbrıs Türk Lirası ile döner, ama bir ziyaretçi olarak ödemeyi beklediğinizden daha esnek bulacaksınız. İşte yanınıza ne almalı, kart ve nakit nasıl işler ve herkesin sorduğu sorunun yanıtı — sürücüye bahşiş verilir mi?</p>
<h2>Yerel para birimi Lira'dır</h2>
<p>Dükkânlar, kafeler, pazarlar ve yerel taksiler Türk Lirası (TL) ile fiyat verir. Küçük alışverişler, sokak pazarları, köy dükkânları ve kartın geçmediği kırsal noktalar için biraz nakit taşımakta fayda var. Lira diğer para birimlerine karşı çok oynayabilir, bu yüzden bir kerede büyük bir miktar yerine daha küçük tutarları daha sık bozdurun.</p>
<h2>Ama euro ve sterlin de işinizi görür</h2>
<p>Oteller, tatil köyleri, büyük restoranlar ve çoğu transfer sürücüsü euro'yu seve seve kabul eder — çoğu zaman sterlini de. Güneyden geliyorsanız veya kısa bir konaklamadaysanız havalimanında para bozdurmak için acele etmenize gerek yok; başlangıç için az bir miktar yeterlidir, şehirde tamamlayabilirsiniz. Bahşiş ve taksiler için biraz küçük banknot bulundurun.</p>
<h2>Ne kadar nakit getirmeli</h2>
<p>Tipik bir hafta için dışarıda yemek, içecek, pazar ve bahşişlere yetecek ölçülü bir nakit çoğu ihtiyacı karşılar; oteller, süpermarketler ve büyük restoranlar için bir kart yanınızda olsun. Büyük tutarlarla gelmenize gerek yok — vardığınızda ATM ve döviz büroları kolayca bulunur.</p>
<h2>Kartlar ve ATM'ler</h2>
<p>Kartlar otellerde, süpermarketlerde ve büyük restoranlarda geçer; ATM'leri şehirlerde ve tatil bölgelerinde kolayca bulursunuz. Genellikle Lira verir, bazıları euro da sunar. Buradaki bir işlemin şüpheli görülüp engellenmemesi için bankanıza Kıbrıs'a seyahat ettiğinizi bildirin ve güvenmeden önce kartınızın yurt dışı işlem ücretlerini kontrol edin.</p>
<h2>Transferinizin ödemesi</h2>
<p>TheTaxsi ile ücret sabittir ve yola çıkmadan kararlaştırılır — taksimetre yok, sınır ek ücreti yok, yolculuk sonunda sürpriz yok. Önceden aksini ayarlamadıysanız varışta şoföre nakit olarak, euro ya da Lira ile ödeyebilirsiniz. Aynısı, konaklamanız sırasında eklediğiniz <strong>şehir içi ve yerel yolculuklar</strong> için de geçerlidir — sabit yerel bir fiyat, kolayca ödenir, yol kenarında hesaplanacak bir şey yok.</p>
<h2>Sürücüye bahşiş verilir mi?</h2>
<p>Bahşiş takdir edilir ama asla beklenmez. Şoförünüz ağır bagajınıza yardım ettiyse, uzun bir gecikmede beklediyse ya da ekstra bir iş halletmişse, ödemeyi yukarı yuvarlamak veya yaklaşık %5–10 eklemek nazik bir jesttir — ama size verilen fiyat ödemeniz gereken fiyattır ve hiçbir zorunluluk yoktur. Restoranlarda, servis zaten dahil değilse benzer bir %5–10 olağandır; otel personeli için küçük bir banknot dostça bir dokunuştur.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Kuzey Kıbrıs'ta euro kullanabilir miyim?</h3>
<p>Çoğu zaman evet — oteller, tatil köyleri, büyük restoranlar ve çoğu sürücü euro kabul eder; yine de yerel fiyat Lira'dır ve küçük yerel dükkânlar TL nakit isteyebilir.</p>
<h3>Nakit mi gerekli, yoksa kart yeterli mi?</h3>
<p>Kartlar otelleri ve büyük mekânları karşılar, ama pazarlar, küçük kafeler ve bahşişler için biraz nakit taşıyın.</p>
<h3>Transfer sürücüme bahşiş vermeli miyim?</h3>
<p>Takdir edilir ama gerekli değildir. Sabit ücretiniz fiyattır; iyi hizmet için küçük bir yuvarlama nazik bir ekstradır.</p>
<p>Yola çıkmaya hazır mısınız? <a href="/tr/routes/">Sabit fiyatlara bakın</a> ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Северный Кипр живёт на турецкой лире, но как гость вы найдёте оплату гибче, чем ожидаете. Вот что взять с собой, как работают карты и наличные и ответ на вопрос, который задают все, — давать ли чаевые водителю?</p>
<h2>Местная валюта — лира</h2>
<p>Магазины, кафе, рынки и местные такси указывают цены в турецких лирах (TL). Стоит иметь немного наличных для мелких покупок, уличных рынков, деревенских лавок и сельских мест, где карты не принимают. Лира может сильно колебаться к другим валютам, поэтому меняйте меньшие суммы почаще, а не крупную разом.</p>
<h2>Но евро и фунты тоже в ходу</h2>
<p>Отели, курорты, крупные рестораны и большинство водителей трансфера охотно принимают евро — а часто и фунты. Если вы приезжаете с юга или на короткий срок, не нужно спешить менять деньги в аэропорту; для начала достаточно небольшой суммы, а пополнить можно в городе. Держите мелкие купюры для чаевых и такси.</p>
<h2>Сколько наличных брать</h2>
<p>На типичную неделю умеренной суммы наличными на еду вне отеля, напитки, рынки и чаевые хватает на большинство нужд, а карта — для отелей, супермаркетов и крупных ресторанов. Приезжать с большими суммами не нужно — банкоматы и обменники легко найти на месте.</p>
<h2>Карты и банкоматы</h2>
<p>Карты принимают в отелях, супермаркетах и больших ресторанах, а банкоматы легко найти в городах и курортных зонах. Обычно они выдают лиры, некоторые — и евро. Предупредите банк о поездке на Кипр, чтобы операцию здесь не заблокировали, и заранее проверьте комиссию за зарубежные операции по вашей карте.</p>
<h2>Оплата трансфера</h2>
<p>С TheTaxsi цена фиксированная и оговорена до поездки — без счётчика, без пограничной наценки, без сюрпризов в конце пути. Если заранее не договорились иначе, вы можете заплатить водителю наличными по прибытии, в евро или лирах. То же касается любых <strong>поездок по городу (şehir içi) и местных поездок</strong>, которые вы добавите во время отдыха, — фиксированная местная цена, оплачивается просто, ничего не нужно высчитывать на обочине.</p>
<h2>Давать ли чаевые водителю?</h2>
<p>Чаевые приятны, но никогда не обязательны. Если водитель помог с тяжёлым багажом, ждал во время долгой задержки или выполнил дополнительное поручение, округлить сумму вверх или добавить около 5–10% — добрый жест, но названная цена и есть то, что вы должны, и никаких обязательств нет. В ресторанах обычны те же 5–10%, если обслуживание не включено; персоналу отеля небольшая купюра — приятный знак.</p>
<h2>Частые вопросы</h2>
<h3>Можно ли расплачиваться евро на Северном Кипре?</h3>
<p>Часто да — отели, курорты, крупные рестораны и большинство водителей принимают евро, хотя местная цена в лирах, а маленькие лавки могут хотеть наличные в TL.</p>
<h3>Нужны ли наличные, или хватит карты?</h3>
<p>Карты покрывают отели и крупные заведения, но держите немного наличных для рынков, небольших кафе и чаевых.</p>
<h3>Нужно ли давать чаевые водителю трансфера?</h3>
<p>Приятно, но не обязательно. Ваша фиксированная цена — это и есть цена; небольшое округление за хороший сервис — добрый плюс.</p>
<p>Готовы в путь? <a href="/ru/routes/">Смотрите фиксированные цены</a> или <a href="/ru/book/">забронируйте трансфер</a>.</p>`,
    },
  },
  {
    slug: 'paphos-airport-arrival-guide',
    date: '2026-07-11',
    title: {
      en: 'Landing at Paphos Airport: A Calm Arrival Guide',
      tr: 'Baf Havalimanına İniş: Sakin Bir Varış Rehberi',
      ru: 'Прилёт в аэропорт Пафоса: спокойный гид по прибытию',
    },
    description: {
      en: 'What to expect at Paphos Airport — passport control, luggage, and where your chauffeur meets you, whether you stay in the south or cross north.',
      tr: "Baf Havalimanında sizi neler bekliyor — pasaport kontrolü, bagaj ve ister güneyde kalın ister kuzeye geçin şoförünüzün sizi nerede karşıladığı.",
      ru: 'Что ждёт вас в аэропорту Пафоса — паспортный контроль, багаж и где вас встретит водитель, останетесь ли вы на юге или поедете на север.',
    },
    body: {
      en: `
<p>Paphos International Airport (PFO) is small, sunny and refreshingly quick to get through — the western gateway to Cyprus. It handles mostly direct European flights, so for many visitors it's a fuss-free way onto the island. Whether you're staying nearby in the west, or crossing north to Kyrenia or Güzelyurt, here's how a smooth arrival unfolds and how we get you around afterwards.</p>
<h2>Passport control and luggage</h2>
<p>Paphos serves mostly European flights, and as an EU entry point it's fast — EU passport holders often clear in minutes, and non-EU travellers rarely wait long outside peak times. Baggage reclaim is a few steps beyond passport control, trolleys are free, and there's a car-rental line, an exchange and a café or two in the compact arrivals area. It's an easy airport to land at, even late in the evening.</p>
<h2>Where we meet you</h2>
<p>Your chauffeur waits in the arrivals hall opposite the exit, holding a sign with your name. We track your flight from departure, so an early or delayed landing never shortens your included waiting time and there's no need to call ahead. Walk out, look ahead, and you'll see us.</p>
<h2>Staying in the west</h2>
<p>Paphos town and its resort areas — Kato Paphos, Coral Bay, Peyia — are only 15–30 minutes away, and your fare is fixed before you travel, no meter whatever the traffic. Coming for Aphrodite's Rock, the harbour or the archaeological park? We drop you at the door, not a rank.</p>
<h2>Crossing to the north</h2>
<p>Heading to Kyrenia, Famagusta or Güzelyurt? Paphos is the western gateway to the north. For destinations like Güzelyurt and Lefke we use the Bostancı (Astromeritis) crossing, which is more direct than routing through Nicosia; for Kyrenia and the east the drive is longer, but with a fixed price and a driver who crosses the border daily, it's completely straightforward. You stay in the car, show your passport briefly at the checkpoint, and there's no fee for passengers.</p>
<h2>The first minutes</h2>
<p>Your chauffeur handles the luggage, walks you to the car and confirms your destination before setting off. Water is waiting in the cabin. From kerb to open road takes only a few minutes, and there's nothing to agree at the roadside — the fare is already set.</p>
<h2>Not just the airport — local rides</h2>
<p>Once you've arrived, the same fixed-price service covers getting around. We run <strong>şehir içi (in-town) and around-the-area journeys</strong> too — dinner at the harbour, a wine-village day in the hills, a supermarket or pharmacy run, or the return leg to the airport — so you're looked after for the whole stay, not just the landing.</p>
<h2>Frequently asked questions</h2>
<h3>How long from Paphos Airport to Paphos town?</h3>
<p>About 15–30 minutes depending on your resort, at a fixed fare set before you travel.</p>
<h3>Can you take me from Paphos to the north?</h3>
<p>Yes. We cross the Green Line daily; for Güzelyurt and Lefke we use the quicker western Bostancı crossing. You stay in the car and there's no passenger fee.</p>
<h3>Is my transfer fixed-price even if my flight is late?</h3>
<p>Yes. We track the flight and the quoted fare doesn't change; your included waiting time isn't shortened by a delay.</p>
<p>Arriving at Paphos? <a href="/en/routes/">See fixed prices for every route</a> or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>Baf Uluslararası Havalimanı (PFO) küçük, güneşli ve geçişi ferahlatıcı derecede hızlıdır — Kıbrıs'ın batı kapısı. Çoğunlukla direkt Avrupa uçuşlarına hizmet eder, bu yüzden birçok ziyaretçi için adaya dertsiz bir giriştir. İster batıda yakınlarda kalın, ister kuzeye Girne ya da Güzelyurt'a geçin, işte sorunsuz bir varış nasıl ilerler ve sonrasında sizi nasıl gezdirdiğimiz.</p>
<h2>Pasaport kontrolü ve bagaj</h2>
<p>Baf çoğunlukla Avrupa uçuşlarına hizmet eder ve bir AB giriş noktası olarak hızlıdır — AB pasaportu sahipleri çoğu zaman dakikalar içinde geçer, AB dışı yolcular ise yoğun saatler dışında nadiren uzun bekler. Bagaj alımı pasaport kontrolünün birkaç adım ötesindedir, arabalar ücretsizdir ve kompakt varış alanında bir araç kiralama sırası, döviz ve bir iki kafe bulunur. Akşam geç saatte bile inmesi kolay bir havalimanıdır.</p>
<h2>Sizi nerede karşılıyoruz</h2>
<p>Şoförünüz varış salonunda, çıkışın karşısında, adınızın yazılı olduğu tabelayla bekler. Uçuşunuzu kalkıştan itibaren takip ederiz; erken ya da rötarlı bir iniş dahil olan bekleme sürenizi asla kısaltmaz ve önceden aramanıza gerek yoktur. Dışarı çıkın, karşıya bakın, bizi göreceksiniz.</p>
<h2>Batıda kalmak</h2>
<p>Baf şehri ve tatil bölgeleri — Kato Baf, Coral Bay, Peyia — yalnızca 15–30 dakika uzaklıktadır ve ücretiniz yola çıkmadan sabitlenir; trafik ne olursa olsun taksimetre yok. Afrodit Kayası, liman ya da arkeoloji parkı için mi geliyorsunuz? Sizi bir durağa değil kapıya bırakırız.</p>
<h2>Kuzeye geçiş</h2>
<p>Girne, Gazimağusa veya Güzelyurt'a mı gidiyorsunuz? Baf, kuzeyin batı kapısıdır. Güzelyurt ve Lefke gibi noktalar için Lefkoşa üzerinden gitmekten daha doğrudan olan Bostancı (Astromeritis) geçişini kullanırız; Girne ve doğu için yolculuk daha uzundur, ama sabit bir fiyat ve sınırı her gün geçen bir sürücüyle tamamen zahmetsizdir. Araçta kalırsınız, kontrol noktasında pasaportunuzu kısaca gösterirsiniz ve yolculardan ücret alınmaz.</p>
<h2>İlk dakikalar</h2>
<p>Şoförünüz bagajlarınızı alır, sizi araca götürür ve yola çıkmadan varış noktanızı teyit eder. Kabinde su hazırdır. Kapıdan açık yola çıkış yalnızca birkaç dakika sürer ve yol kenarında anlaşılacak bir şey yoktur — ücret zaten bellidir.</p>
<h2>Yalnızca havalimanı değil — şehir içi yolculuklar</h2>
<p>Vardıktan sonra, aynı sabit fiyatlı hizmet ulaşımınızı da kapsar. <strong>Şehir içi ve bölge içi yolculukları</strong> da yaparız — limanda akşam yemeği, tepelerdeki şarap köylerinde bir gün, süpermarket ya da eczane yolculuğu veya havalimanına dönüş — böylece yalnızca inişte değil tüm tatil boyunca yanınızdayız.</p>
<h2>Sıkça sorulan sorular</h2>
<h3>Baf Havalimanı'ndan Baf şehrine ne kadar sürer?</h3>
<p>Tatil bölgenize göre yaklaşık 15–30 dakika, yola çıkmadan belirlenen sabit bir ücretle.</p>
<h3>Beni Baf'tan kuzeye götürebilir misiniz?</h3>
<p>Evet. Yeşil Hat'tı her gün geçeriz; Güzelyurt ve Lefke için daha hızlı olan batıdaki Bostancı geçişini kullanırız. Araçta kalırsınız ve yolcu ücreti yoktur.</p>
<h3>Uçuşum gecikse bile transferim sabit fiyatlı mı?</h3>
<p>Evet. Uçuşu takip ederiz ve verilen ücret değişmez; dahil olan bekleme süreniz gecikmeyle kısalmaz.</p>
<p>Baf'a mı iniyorsunuz? <a href="/tr/routes/">Tüm güzergahların sabit fiyatlarına bakın</a> ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Международный аэропорт Пафоса (PFO) — небольшой, солнечный и приятно быстрый в прохождении — западные ворота Кипра. Он принимает в основном прямые европейские рейсы, так что для многих гостей это беспроблемный въезд на остров. Остаётесь ли вы поблизости на западе или едете на север в Кирению или Гюзельюрт, вот как проходит спокойное прибытие и как мы возим вас потом.</p>
<h2>Паспортный контроль и багаж</h2>
<p>Пафос обслуживает в основном европейские рейсы и как пункт въезда в ЕС проходится быстро — владельцы паспортов ЕС часто проходят за минуты, а путешественники не из ЕС редко ждут долго вне часов пик. Выдача багажа — в нескольких шагах за паспортным контролем, тележки бесплатны, а в компактной зоне прилёта есть прокат авто, обмен валюты и пара кафе. Сюда легко прилетать даже поздно вечером.</p>
<h2>Где мы вас встречаем</h2>
<p>Ваш водитель ждёт в зале прилёта напротив выхода с табличкой с вашим именем. Мы отслеживаем рейс с момента вылета, поэтому ранняя или задержанная посадка никогда не сокращает включённое время ожидания, и звонить заранее не нужно. Выходите, смотрите вперёд — и увидите нас.</p>
<h2>Если вы остаётесь на западе</h2>
<p>Город Пафос и его курортные районы — Като-Пафос, Корал-Бэй, Пейя — всего в 15–30 минутах, а цена фиксируется до поездки, без счётчика при любом трафике. Едете к Скале Афродиты, гавани или в археологический парк? Мы высадим вас у входа, а не на стоянке.</p>
<h2>Переезд на север</h2>
<p>Едете в Кирению, Фамагусту или Гюзельюрт? Пафос — западные ворота на север. Для таких мест, как Гюзельюрт и Лефке, мы используем переход Бостанджи (Астромеритис), который удобнее, чем ехать через Никосию; до Кирении и востока дорога длиннее, но с фиксированной ценой и водителем, который пересекает границу каждый день, всё совершенно просто. Вы остаётесь в машине, кратко показываете паспорт на пункте, и платы с пассажиров нет.</p>
<h2>Первые минуты</h2>
<p>Водитель возьмёт багаж, проводит вас к машине и подтвердит пункт назначения перед выездом. В салоне ждёт вода. От выхода до открытой дороги — всего несколько минут, и на обочине ни о чём договариваться не нужно: цена уже определена.</p>
<h2>Не только аэропорт — поездки по городу</h2>
<p>После приезда та же услуга по фиксированной цене покрывает и передвижение. Мы также возим <strong>по городу (şehir içi) и по окрестностям</strong> — ужин в гавани, день в винных деревнях в горах, поездку в супермаркет или аптеку или обратный путь в аэропорт — так что вы под опекой всю поездку, а не только при посадке.</p>
<h2>Частые вопросы</h2>
<h3>Сколько ехать от аэропорта Пафоса до города Пафос?</h3>
<p>Около 15–30 минут в зависимости от курорта, по фиксированной цене, установленной до поездки.</p>
<h3>Можете ли вы отвезти меня из Пафоса на север?</h3>
<p>Да. Мы пересекаем «зелёную линию» ежедневно; для Гюзельюрта и Лефке используем более быстрый западный переход Бостанджи. Вы остаётесь в машине, платы с пассажиров нет.</p>
<h3>Будет ли трансфер по фиксированной цене, даже если рейс задержится?</h3>
<p>Да. Мы отслеживаем рейс, и названная цена не меняется; включённое время ожидания не сокращается из-за задержки.</p>
<p>Прилетаете в Пафос? <a href="/ru/routes/">Смотрите фиксированные цены на все маршруты</a> или <a href="/ru/book/">забронируйте трансфер</a>.</p>`,
    },
  },
]
