// Blog yazıları — /blog/ sayfaları buradan üretilir.
// Yeni yazı eklemek için bu diziye bir kayıt ekleyip `npm run build` çalıştırman yeterli.
// body alanı HTML kabul eder; başlıklar için <h2>, paragraflar için <p> kullan.
// Yazılar tarihe göre yeniden eskiye sıralanır (date alanı ISO formatında: YYYY-MM-DD).
export const posts = [
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
<p>Kıbrıs'a üç havalimanı hizmet verir; doğru olanı seçmek — ve yolculuğunuzun adayı bölen hattı geçip geçmeyeceğini bilmek — sorunsuz bir transferin anahtarıdır. İşte karşılaştırması ve sizi bekleyenler.</p>
<h2>Üç havalimanı</h2>
<p><strong>Ercan Havalimanı (ECN)</strong> kuzeyde, Lefkoşa yakınındadır ve Girne, Gazimağusa, İskele ile Güzelyurt'a en yakın havalimanıdır. <strong>Larnaka (LCA)</strong> ve <strong>Baf (PFO)</strong> güneydedir ve Avrupa seferlerinin çoğunu taşır — bu yüzden kuzeye gelen birçok ziyaretçi aslında Larnaka'ya inip sınırı karayoluyla geçer.</p>
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
<h2>Kuzey Kıbrıs'a geçiş</h2>
<p>Larnaka veya Baf'a inip oteliniz kuzeydeyse — Girne, İskele, Güzelyurt ya da Lefke — transferiniz Yeşil Hat'tı bir kontrol noktasında geçer. Bu rutin bir işlemdir: pasaportunuzu yanınıza alın, arabada kalın, gerisini şoförünüz halleder. Güzelyurt ve Lefke gibi batıdaki noktalar için, Lefkoşa üzerinden gitmekten daha hızlı olan Bostancı (Astromeritis) geçişini kullanırız.</p>
<h2>Neden özel transfer?</h2>
<p>Kıbrıs'ta toplu taşıma, özellikle şehir dışında ve hattın iki yakası arasında sınırlıdır. Özel transfer size şunları sunar:</p>
<ul>
  <li><strong>Sabit fiyat</strong> — önceden kararlaştırılmış, taksimetre yok</li>
  <li><strong>Kapıdan kapıya hizmet</strong> — paylaşımlı servis yok, ara durak yok</li>
  <li><strong>Uçuş takibi</strong> — sürücünüz gecikmeler için ayarlama yapar</li>
  <li><strong>Sınır tecrübesi</strong> — kontrol noktasını her gün geçiyoruz</li>
</ul>
<h2>Rezervasyon İpuçları</h2>
<ol>
  <li>En az 24 saat önceden rezervasyon yapın</li>
  <li>Notlar alanına uçuş numaranızı ekleyin — varışınızı takip ederiz</li>
  <li>Dönüş yolculuğu gerekiyorsa gidiş-dönüş seçeneğini seçin</li>
  <li>Çocuk koltuğu gibi ekstraları rezervasyon sırasında seçin</li>
</ol>
<p>Transferinizi rezerve etmeye hazır mısınız? <a href="/tr/book/">Rezervasyon yap</a> veya <a href="/tr/routes/">tüm güzergahların sabit fiyatlarına</a> göz atın.</p>`,
      ru: `
<p>Кипр обслуживают три аэропорта, и выбрать правильный — а также понять, пересекает ли ваша поездка разделительную линию острова, — ключ к спокойному трансферу. Вот их сравнение и чего ожидать.</p>
<h2>Три аэропорта</h2>
<p><strong>Аэропорт Эрджан (ECN)</strong> расположен на севере, рядом с Никосией, и ближе всего к Кирении, Фамагусте, Искеле и Гюзельюрту. <strong>Ларнака (LCA)</strong> и <strong>Пафос (PFO)</strong> находятся на юге и принимают большинство европейских рейсов — поэтому многие гости севера прилетают именно в Ларнаку и пересекают границу по дороге.</p>
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
<h2>Пересечение в Северный Кипр</h2>
<p>Если вы приземляетесь в Ларнаке или Пафосе, а отель на севере — Кирения, Искеле, Гюзельюрт или Лефке — трансфер пересекает «зелёную линию» на контрольно-пропускном пункте. Это обычная процедура: возьмите паспорт, оставайтесь в машине, остальное сделает водитель. Для западных направлений, таких как Гюзельюрт и Лефке, мы используем переход Бостанджи (Астромеритис) — это быстрее, чем ехать через Никосию.</p>
<h2>Почему стоит выбрать частный трансфер?</h2>
<p>На Кипре ограниченный общественный транспорт, особенно за пределами городов и между двумя частями острова. Частный трансфер даёт:</p>
<ul>
  <li><strong>Фиксированная цена</strong> — оговорена заранее, счётчик не работает</li>
  <li><strong>Услуга «от двери до двери»</strong> — без совместных маршрутных такси</li>
  <li><strong>Отслеживание рейса</strong> — водитель скорректирует время при задержке</li>
  <li><strong>Опыт на границе</strong> — мы пересекаем пункт каждый день</li>
</ul>
<h2>Советы по бронированию</h2>
<ol>
  <li>Бронируйте минимум за 24 часа</li>
  <li>Укажите номер рейса в примечаниях</li>
  <li>Выбирайте «туда и обратно», если нужна обратная поездка</li>
  <li>Заказывайте детское кресло при бронировании</li>
</ol>
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
<p>Larnaca International Airport is compact by European standards — from the moment your wheels touch the runway, you are rarely more than twenty minutes from the arrivals hall. Here is how a typical arrival unfolds, and where your chauffeur will be waiting.</p>
<h2>Passport control and luggage</h2>
<p>EU passport holders usually clear immigration in under ten minutes. Non-EU travellers should allow fifteen to twenty-five minutes at peak hours (roughly 10:00–14:00 and 20:00–23:00 in summer). Baggage reclaim is directly after passport control — trolleys are free.</p>
<h2>Where we meet you</h2>
<p>Your chauffeur waits in the arrivals hall, directly opposite the exit doors, holding a sign with your name. There is no need to call or search — walk out, look ahead, and you will see us. We track your flight, so a delayed landing never shortens your included waiting time.</p>
<h2>The first minutes of your transfer</h2>
<p>Your chauffeur handles the luggage, walks you to the car — a Mercedes E-Class or equivalent, parked minutes away — and confirms your destination before setting off. Bottled water is waiting in the cabin. From kerb to highway takes about five minutes.</p>
<p>Travelling onwards to Kyrenia, Famagusta or Güzelyurt — or crossing to the north? Fixed prices for every route are on our routes page — no meters, no surprises.</p>`,
      tr: `
<p>Larnaka Uluslararası Havalimanı Avrupa standartlarına göre kompakt bir havalimanı — tekerlekler piste değdiği andan itibaren varış salonuna nadiren yirmi dakikadan uzun sürer. İşte tipik bir varış nasıl ilerler ve şoförünüz sizi nerede bekler.</p>
<h2>Pasaport kontrolü ve bagaj</h2>
<p>AB pasaportu sahipleri genellikle on dakikadan kısa sürede pasaport kontrolünden geçer. AB dışı yolcular yoğun saatlerde (yazın kabaca 10:00–14:00 ve 20:00–23:00) on beş ila yirmi beş dakika ayırmalı. Bagaj alımı pasaport kontrolünün hemen ardındadır — arabalar ücretsizdir.</p>
<h2>Sizi nerede karşılıyoruz</h2>
<p>Şoförünüz varış salonunda, çıkış kapılarının tam karşısında, adınızın yazılı olduğu tabelayla bekler. Aramanıza ya da etrafa bakınmanıza gerek yok — dışarı çıkın, karşıya bakın, bizi göreceksiniz. Uçuşunuzu takip ederiz; rötarlı bir iniş, dahil olan bekleme sürenizi asla kısaltmaz.</p>
<h2>Transferinizin ilk dakikaları</h2>
<p>Şoförünüz bagajlarınızı alır, sizi birkaç dakika mesafede park etmiş araca — Mercedes E-Serisi veya muadili — götürür ve yola çıkmadan önce varış noktanızı teyit eder. Kabinde su hazırdır. Kapıdan otoyola çıkış yaklaşık beş dakika sürer.</p>
<p>Girne, Gazimağusa veya Güzelyurt'a mı devam ediyorsunuz — ya da kuzeye mi geçiyorsunuz? Tüm güzergahların sabit fiyatları güzergahlar sayfamızda — taksimetre yok, sürpriz yok.</p>`,
      ru: `
<p>Международный аэропорт Ларнаки компактен по европейским меркам — с момента касания полосы до зала прилёта редко проходит больше двадцати минут. Вот как обычно проходит прибытие и где вас будет ждать водитель.</p>
<h2>Паспортный контроль и багаж</h2>
<p>Владельцы паспортов ЕС обычно проходят контроль менее чем за десять минут. Путешественникам не из ЕС в часы пик (летом примерно 10:00–14:00 и 20:00–23:00) стоит заложить пятнадцать–двадцать пять минут. Выдача багажа находится сразу за паспортным контролем, тележки бесплатны.</p>
<h2>Где мы вас встречаем</h2>
<p>Ваш водитель ждёт в зале прилёта, прямо напротив выходных дверей, с табличкой с вашим именем. Не нужно звонить или искать — выходите, смотрите прямо перед собой, и вы нас увидите. Мы отслеживаем ваш рейс, поэтому задержка посадки никогда не сокращает включённое время ожидания.</p>
<h2>Первые минуты трансфера</h2>
<p>Водитель возьмёт багаж, проводит вас к автомобилю — Mercedes E-Class или аналогу, припаркованному в паре минут — и подтвердит пункт назначения перед выездом. В салоне вас ждёт вода. От выхода до шоссе — около пяти минут.</p>
<p>Едете дальше в Кирению, Фамагусту или Гюзельюрт — или пересекаете границу на север? Фиксированные цены на все маршруты — на странице маршрутов. Без счётчиков и сюрпризов.</p>`,
    },
  },
  {
    slug: 'larnaca-airport-to-kyrenia-border-crossing-guide',
    date: '2026-07-11',
    title: {
      en: 'Larnaca Airport to Kyrenia: The Complete Border-Crossing Guide',
      tr: "Larnaka Havalimanından Girne'ye: Eksiksiz Sınır Geçiş Rehberi",
      ru: 'Из аэропорта Ларнаки в Кирению: полный гид по пересечению границы',
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
<p>Ercan (ECN) is North Cyprus's own airport — small, calm and only a short drive from Nicosia, Kyrenia and Famagusta. If you're flying in via Istanbul or another Turkish hub, this is where your holiday really begins. Here's how a typical arrival unfolds.</p>
<h2>Passport control</h2>
<p>Ercan is rarely crowded. Most visitors clear passport control in ten to fifteen minutes; you'll be asked for your passport and are usually given entry on arrival with no advance visa. Officers can stamp a separate slip rather than your passport if you ask.</p>
<h2>Luggage and the terminal</h2>
<p>A new terminal opened here, and baggage reclaim is quick and clearly signed. Trolleys are free. There are car-rental desks, a currency exchange and a few cafés, but the airport is compact — you won't get lost.</p>
<h2>Money and a SIM card</h2>
<p>The local currency is the Turkish Lira, though many hotels and drivers also accept euros and sterling. Change a small amount at the airport for incidentals, and pick up a local SIM (Turkcell or KKTCELL) from the arrivals desk if you want data straight away.</p>
<h2>Where we meet you</h2>
<p>Your chauffeur waits in the arrivals hall opposite the exit doors, holding a sign with your name. We track your flight, so a delay never shortens your included waiting time. No calls, no searching — walk out and look ahead.</p>
<h2>How far to your hotel</h2>
<p>Ercan is central. Typical drives: Kyrenia about 35 minutes, Famagusta about 40, İskele/Long Beach about 45, Güzelyurt about 50. Every route has a fixed fare agreed before you travel.</p>
<p>Ready for when you land? <a href="/en/routes/">See fixed prices for every route</a> or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>Ercan (ECN), Kuzey Kıbrıs'ın kendi havalimanıdır — küçük, sakin ve Lefkoşa, Girne ile Gazimağusa'ya kısa mesafede. İstanbul veya başka bir Türk aktarma noktası üzerinden geliyorsanız, tatiliniz asıl burada başlar. İşte tipik bir varış nasıl ilerler.</p>
<h2>Pasaport kontrolü</h2>
<p>Ercan nadiren kalabalıktır. Çoğu ziyaretçi pasaport kontrolünden on ila on beş dakikada geçer; pasaportunuz istenir ve genellikle önceden vize olmadan varışta giriş verilir. İsterseniz görevliler pasaportunuza değil ayrı bir kağıda mühür basabilir.</p>
<h2>Bagaj ve terminal</h2>
<p>Burada yeni bir terminal açıldı; bagaj alımı hızlı ve açık şekilde yönlendirilmiştir. Arabalar ücretsizdir. Araç kiralama bankoları, döviz bürosu ve birkaç kafe var, ama havalimanı kompakt — kaybolmazsınız.</p>
<h2>Para ve SIM kart</h2>
<p>Yerel para birimi Türk Lirası'dır, yine de birçok otel ve sürücü euro ve sterlin de kabul eder. Ufak masraflar için havalimanında az miktarda bozdurun ve hemen internet isterseniz varış bankosundan yerel bir SIM (Turkcell veya KKTCELL) alın.</p>
<h2>Sizi nerede karşılıyoruz</h2>
<p>Şoförünüz varış salonunda, çıkış kapılarının karşısında, adınızın yazılı olduğu tabelayla bekler. Uçuşunuzu takip ederiz; gecikme, dahil olan bekleme sürenizi asla kısaltmaz. Arama yok, aranma yok — dışarı çıkın ve karşıya bakın.</p>
<h2>Otelinize ne kadar var</h2>
<p>Ercan merkezîdir. Tipik süreler: Girne yaklaşık 35 dakika, Gazimağusa yaklaşık 40, İskele/Long Beach yaklaşık 45, Güzelyurt yaklaşık 50. Her güzergahın, yola çıkmadan kararlaştırılan sabit bir ücreti vardır.</p>
<p>İndiğiniz an için hazır mıyız? <a href="/tr/routes/">Tüm güzergahların sabit fiyatlarına bakın</a> ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Эрджан (ECN) — собственный аэропорт Северного Кипра: небольшой, спокойный и всего в нескольких минутах езды от Никосии, Кирении и Фамагусты. Если вы летите через Стамбул или другой турецкий хаб, именно здесь начинается ваш отдых. Вот как обычно проходит прибытие.</p>
<h2>Паспортный контроль</h2>
<p>В Эрджане редко бывает людно. Большинство гостей проходят контроль за десять–пятнадцать минут; у вас попросят паспорт и, как правило, дадут въезд по прибытии без предварительной визы. По желанию штамп могут поставить на отдельный листок, а не в паспорт.</p>
<h2>Багаж и терминал</h2>
<p>Здесь открылся новый терминал, выдача багажа быстрая и с понятными указателями. Тележки бесплатны. Есть стойки проката авто, обмен валюты и несколько кафе, но аэропорт компактный — вы не заблудитесь.</p>
<h2>Деньги и SIM-карта</h2>
<p>Местная валюта — турецкая лира, хотя многие отели и водители принимают также евро и фунты. Обменяйте небольшую сумму в аэропорту на мелкие расходы и возьмите местную SIM (Turkcell или KKTCELL) на стойке в зоне прилёта, если интернет нужен сразу.</p>
<h2>Где мы вас встречаем</h2>
<p>Ваш водитель ждёт в зале прилёта напротив выходных дверей с табличкой с вашим именем. Мы отслеживаем рейс, поэтому задержка никогда не сокращает включённое время ожидания. Не нужно звонить или искать — выходите и смотрите прямо перед собой.</p>
<h2>Сколько ехать до отеля</h2>
<p>Эрджан расположен центрально. Типичное время: Кирения около 35 минут, Фамагуста около 40, Искеле/Лонг-Бич около 45, Гюзельюрт около 50. У каждого маршрута фиксированная цена, оговорённая до поездки.</p>
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
<p>It's the most common question we're asked before a transfer, so here's a clear, practical answer. Rules can change, so treat this as guidance and check your own nationality's requirements before you travel.</p>
<h2>You need a passport</h2>
<p>A valid passport is required to enter North Cyprus, whether you land at Ercan or cross from the south. Most nationalities do not need a visa in advance — entry is granted on arrival for a stay of up to 90 days.</p>
<h2>Will they stamp my passport?</h2>
<p>Usually not. Border officers routinely stamp a separate piece of paper rather than your passport, so a North Cyprus entry leaves no mark. If you'd prefer this, simply ask — it's the norm, not a special request.</p>
<h2>Flying into Ercan</h2>
<p>If you arrive directly at Ercan, you clear passport control at the airport and you're done. Your chauffeur is waiting on the other side of the doors.</p>
<h2>Crossing from Larnaca or Paphos</h2>
<p>If you land in the south and cross the Green Line by car, you show your passport at the checkpoint. You stay in the vehicle, there is no fee for passengers, and your chauffeur knows the procedure. Having entered through Larnaca or Paphos, you are already legally in Cyprus; the crossing simply moves you north.</p>
<h2>Rental cars are the exception</h2>
<p>The one thing to know: a hire car picked up in the south often cannot be taken north (and vice versa), and insurance rarely covers the crossing. A private transfer avoids the problem entirely — one car, both sides, no paperwork for you.</p>
<p>Planning a crossing? <a href="/en/routes/">See fixed transfer prices</a> or <a href="/en/book/">book in two minutes</a>.</p>`,
      tr: `
<p>Transferden önce bize en sık sorulan soru budur, işte net ve pratik bir yanıt. Kurallar değişebilir; bunu bir rehber olarak görün ve yola çıkmadan kendi vatandaşlığınızın koşullarını kontrol edin.</p>
<h2>Pasaport gerekir</h2>
<p>Kuzey Kıbrıs'a girmek için geçerli bir pasaport gereklidir — ister Ercan'a inin ister güneyden geçin. Çoğu ülke vatandaşının önceden vizeye ihtiyacı yoktur; giriş, 90 güne kadar konaklama için varışta verilir.</p>
<h2>Pasaportuma mühür basılır mı?</h2>
<p>Genellikle hayır. Sınır görevlileri çoğunlukla pasaportunuza değil ayrı bir kağıda mühür basar, böylece Kuzey Kıbrıs girişi iz bırakmaz. Bunu tercih ederseniz sadece söyleyin — bu istisna değil, olağan uygulamadır.</p>
<h2>Ercan'a uçarken</h2>
<p>Doğrudan Ercan'a inerseniz pasaport kontrolünü havalimanında geçer ve işlem tamamlanır. Şoförünüz kapıların diğer tarafında bekler.</p>
<h2>Larnaka veya Baf'tan geçerken</h2>
<p>Güneye inip Yeşil Hat'tı arabayla geçerseniz kontrol noktasında pasaportunuzu gösterirsiniz. Araçta kalırsınız, yolculardan ücret alınmaz ve şoförünüz prosedürü bilir. Larnaka veya Baf üzerinden girdiğiniz için zaten yasal olarak Kıbrıs'tasınız; geçiş sizi yalnızca kuzeye taşır.</p>
<h2>Kiralık araçlar istisnadır</h2>
<p>Bilinmesi gereken tek şey: güneyden alınan kiralık araç çoğu zaman kuzeye geçirilemez (ve tersi), sigorta da geçişi nadiren kapsar. Özel transfer bu sorunu tamamen ortadan kaldırır — tek araç, iki yaka, size hiç evrak işi yok.</p>
<p>Geçiş mi planlıyorsunuz? <a href="/tr/routes/">Sabit transfer fiyatlarına bakın</a> ya da <a href="/tr/book/">iki dakikada rezerve edin</a>.</p>`,
      ru: `
<p>Это самый частый вопрос перед трансфером, поэтому дадим понятный практический ответ. Правила могут меняться — воспринимайте это как ориентир и проверьте требования для вашего гражданства перед поездкой.</p>
<h2>Паспорт нужен</h2>
<p>Для въезда в Северный Кипр требуется действующий паспорт — прилетаете ли вы в Эрджан или переезжаете с юга. Большинству гостей виза заранее не нужна: въезд даётся по прибытии на срок до 90 дней.</p>
<h2>Поставят ли штамп в паспорт?</h2>
<p>Обычно нет. Пограничники, как правило, ставят штамп на отдельный листок, а не в паспорт, поэтому въезд в Северный Кипр не оставляет следа. Если вам так удобнее — просто попросите, это обычная практика.</p>
<h2>Прилёт в Эрджан</h2>
<p>Если вы прилетаете прямо в Эрджан, паспортный контроль проходите в аэропорту — и всё. Водитель ждёт вас сразу за дверями.</p>
<h2>Переезд из Ларнаки или Пафоса</h2>
<p>Если вы приземляетесь на юге и пересекаете «зелёную линию» на машине, вы показываете паспорт на пункте пропуска. Вы остаётесь в автомобиле, с пассажиров плата не берётся, а водитель знает процедуру. Въехав через Ларнаку или Пафос, вы уже легально на Кипре; переход лишь перемещает вас на север.</p>
<h2>Аренда авто — исключение</h2>
<p>Единственное, что нужно знать: арендованную на юге машину часто нельзя перегнать на север (и наоборот), а страховка редко покрывает переезд. Частный трансфер полностью снимает проблему — одна машина, обе стороны, никаких бумаг с вашей стороны.</p>
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
<p>Kyrenia (Girne) is the north's most popular base, and you can reach it from two very different airports. Here's how Ercan and Larnaca compare so you can book the flight that suits you.</p>
<h2>Ercan: closer, simpler</h2>
<p>Ercan sits just east of Nicosia, about 35 minutes from Kyrenia with no border to cross. Arrival is quick, the transfer is short, and it's usually the cheapest door-to-door option. The trade-off: flights are almost all via Turkey, so you'll likely connect through Istanbul or another Turkish hub.</p>
<h2>Larnaca: more flights, a border</h2>
<p>Larnaca is a full international airport with direct flights from across Europe — often cheaper tickets and no connection. The catch is distance and the crossing: Larnaca to Kyrenia is around 75 minutes and passes through a Green Line checkpoint. With a private transfer the crossing is effortless, but it does add time.</p>
<h2>At a glance</h2>
<ul>
  <li><strong>Fastest transfer:</strong> Ercan (~35 min) vs Larnaca (~75 min)</li>
  <li><strong>Lower transfer fare:</strong> Ercan</li>
  <li><strong>Widest flight choice / direct from Europe:</strong> Larnaca</li>
  <li><strong>No border crossing:</strong> Ercan</li>
</ul>
<h2>Our honest advice</h2>
<p>If a convenient direct flight into Larnaca is noticeably cheaper, take it — the transfer and crossing are smooth and we handle everything. If flight prices are similar, Ercan wins on time and cost once you're on the ground. Either way, you land to a fixed-price car and a chauffeur who tracks your flight.</p>
<p>Compare both routes: <a href="/en/routes/ercan-airport-to-kyrenia/">Ercan to Kyrenia</a> and <a href="/en/routes/larnaca-airport-to-kyrenia/">Larnaca to Kyrenia</a> — or <a href="/en/book/">book now</a>.</p>`,
      tr: `
<p>Girne, kuzeyin en popüler üssüdür ve buraya birbirinden çok farklı iki havalimanından ulaşabilirsiniz. İşte size uygun uçuşu seçebilmeniz için Ercan ile Larnaka karşılaştırması.</p>
<h2>Ercan: daha yakın, daha basit</h2>
<p>Ercan, Lefkoşa'nın hemen doğusundadır; Girne'ye yaklaşık 35 dakika ve geçilecek sınır yoktur. Varış hızlı, transfer kısa ve genellikle kapıdan kapıya en ucuz seçenektir. Bedeli: uçuşların neredeyse tamamı Türkiye üzerinden olduğundan büyük olasılıkla İstanbul veya başka bir Türk aktarma noktasından bağlanırsınız.</p>
<h2>Larnaka: daha çok uçuş, bir sınır</h2>
<p>Larnaka, Avrupa'nın her yerinden direkt uçuşları olan tam bir uluslararası havalimanıdır — çoğu zaman daha ucuz bilet ve aktarmasız. İşin püf noktası mesafe ve geçiştir: Larnaka'dan Girne'ye yaklaşık 75 dakika sürer ve bir Yeşil Hat kontrol noktasından geçer. Özel transferle geçiş zahmetsizdir ama süreye eklenir.</p>
<h2>Bir bakışta</h2>
<ul>
  <li><strong>En hızlı transfer:</strong> Ercan (~35 dk) — Larnaka (~75 dk)</li>
  <li><strong>Daha düşük transfer ücreti:</strong> Ercan</li>
  <li><strong>En geniş uçuş seçeneği / Avrupa'dan direkt:</strong> Larnaka</li>
  <li><strong>Sınır geçişi yok:</strong> Ercan</li>
</ul>
<h2>Dürüst tavsiyemiz</h2>
<p>Larnaka'ya uygun bir direkt uçuş belirgin şekilde daha ucuzsa onu tercih edin — transfer ve geçiş sorunsuzdur, her şeyi biz hallederiz. Uçuş fiyatları benzerse, yere indiğinizde Ercan zaman ve maliyette öne geçer. Her iki durumda da sabit fiyatlı bir araca ve uçuşunuzu takip eden bir şoföre inersiniz.</p>
<p>İki güzergahı karşılaştırın: <a href="/tr/routes/ercan-airport-to-kyrenia/">Ercan–Girne</a> ve <a href="/tr/routes/larnaca-airport-to-kyrenia/">Larnaka–Girne</a> — ya da <a href="/tr/book/">hemen rezerve edin</a>.</p>`,
      ru: `
<p>Кирения (Гирне) — самая популярная база на севере, и добраться до неё можно из двух очень разных аэропортов. Вот сравнение Эрджана и Ларнаки, чтобы вы выбрали подходящий рейс.</p>
<h2>Эрджан: ближе и проще</h2>
<p>Эрджан находится сразу к востоку от Никосии, около 35 минут до Кирении и без пересечения границы. Прибытие быстрое, трансфер короткий, и это обычно самый недорогой вариант «от двери до двери». Компромисс: почти все рейсы идут через Турцию, так что вы, скорее всего, полетите со стыковкой в Стамбуле или другом турецком хабе.</p>
<h2>Ларнака: больше рейсов, но граница</h2>
<p>Ларнака — полноценный международный аэропорт с прямыми рейсами со всей Европы: часто билеты дешевле и без стыковок. Нюанс — расстояние и переход: от Ларнаки до Кирении около 75 минут через пункт «зелёной линии». С частным трансфером переход проходит легко, но добавляет время.</p>
<h2>Коротко</h2>
<ul>
  <li><strong>Самый быстрый трансфер:</strong> Эрджан (~35 мин) — Ларнака (~75 мин)</li>
  <li><strong>Ниже цена трансфера:</strong> Эрджан</li>
  <li><strong>Больше выбор рейсов / прямые из Европы:</strong> Ларнака</li>
  <li><strong>Без пересечения границы:</strong> Эрджан</li>
</ul>
<h2>Наш честный совет</h2>
<p>Если удобный прямой рейс в Ларнаку заметно дешевле — берите его: трансфер и переход проходят гладко, всё берём на себя. Если цены на билеты близки, Эрджан выигрывает по времени и стоимости на месте. В любом случае вас встретит машина по фиксированной цене и водитель, отслеживающий ваш рейс.</p>
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
<p>İskele's Long Beach has become one of North Cyprus's fastest-growing resort strips — a run of golden sand backed by big, self-contained hotels like Grand Sapphire, Caesar Resort and Courtyard Long Beach. Here's how to get there from each airport, and what to expect on arrival.</p>
<h2>Transfer times and airports</h2>
<p>Long Beach sits on the island's east coast, a little south of Boğaz. Typical drives:</p>
<ul>
  <li><strong>Ercan:</strong> about 45 minutes — the closest airport and usually the best value</li>
  <li><strong>Larnaca:</strong> around 1h 15m, crossing the Green Line by car</li>
  <li><strong>Paphos:</strong> a longer run from the west, best booked as a fixed-price private transfer</li>
</ul>
<h2>Big resorts, exact drop-offs</h2>
<p>The Long Beach hotels are large and spread along the shore, so the entrance you need matters. When you book, tell us the exact hotel — Grand Sapphire, Caesar Resort & Spa, Courtyard Long Beach or another — and your chauffeur takes you to the right reception, not the nearest gate.</p>
<h2>Late flights are normal here</h2>
<p>Many flights into Ercan land late in the evening. We track every arrival, so a midnight touchdown is no problem — your driver is waiting whatever the hour, and your fare doesn't change.</p>
<h2>Getting out and about</h2>
<p>Long Beach is self-contained, but if you want to explore — Famagusta's old town, the Karpaz peninsula, or dinner in İskele — we arrange those trips at fixed prices too, so you're never at the mercy of a meter.</p>
<p>Heading to Long Beach? <a href="/en/routes/">See fixed transfer prices</a> or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>İskele'nin Long Beach'i, Kuzey Kıbrıs'ın en hızlı büyüyen tatil bölgelerinden biri hâline geldi — Grand Sapphire, Caesar Resort ve Courtyard Long Beach gibi büyük, kendi içinde her şeyi barındıran otellerle çevrili altın renkli bir kumsal şeridi. İşte her havalimanından oraya nasıl ulaşacağınız ve varışta sizi neler beklediği.</p>
<h2>Transfer süreleri ve havalimanları</h2>
<p>Long Beach, adanın doğu kıyısında, Boğaz'ın biraz güneyinde yer alır. Tipik süreler:</p>
<ul>
  <li><strong>Ercan:</strong> yaklaşık 45 dakika — en yakın havalimanı ve genellikle en avantajlısı</li>
  <li><strong>Larnaka:</strong> yaklaşık 1 saat 15 dakika, Yeşil Hat'tı arabayla geçerek</li>
  <li><strong>Baf:</strong> batıdan daha uzun bir yolculuk; en iyisi sabit fiyatlı özel transfer olarak rezerve edilir</li>
</ul>
<h2>Büyük tatil köyleri, doğru bırakma noktaları</h2>
<p>Long Beach otelleri büyüktür ve kıyı boyunca yayılır, bu yüzden gireceğiniz kapı önemlidir. Rezervasyon yaparken tam otel adını bize söyleyin — Grand Sapphire, Caesar Resort & Spa, Courtyard Long Beach ya da bir başkası — şoförünüz sizi en yakın kapıya değil doğru resepsiyona götürür.</p>
<h2>Geç uçuşlar burada normaldir</h2>
<p>Ercan'a gelen birçok uçuş akşam geç saatlerde iner. Her varışı takip ederiz, bu yüzden gece yarısı bir iniş sorun değildir — saat kaç olursa olsun sürücünüz bekler ve ücretiniz değişmez.</p>
<h2>Çevreyi keşfetmek</h2>
<p>Long Beach kendi içinde her şeyi barındırır, ama keşfe çıkmak isterseniz — Gazimağusa'nın eski şehri, Karpaz yarımadası ya da İskele'de bir akşam yemeği — bu gezileri de sabit fiyatlarla düzenleriz, böylece asla bir taksimetrenin insafına kalmazsınız.</p>
<p>Long Beach'e mi gidiyorsunuz? <a href="/tr/routes/">Sabit transfer fiyatlarına bakın</a> ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Лонг-Бич в Искеле стал одним из самых быстрорастущих курортных участков Северного Кипра — полоса золотого песка с крупными самодостаточными отелями вроде Grand Sapphire, Caesar Resort и Courtyard Long Beach. Вот как добраться сюда из каждого аэропорта и чего ждать по прибытии.</p>
<h2>Время в пути и аэропорты</h2>
<p>Лонг-Бич находится на восточном побережье острова, чуть южнее Богаза. Типичное время:</p>
<ul>
  <li><strong>Эрджан:</strong> около 45 минут — ближайший аэропорт и обычно самый выгодный</li>
  <li><strong>Ларнака:</strong> примерно 1 ч 15 мин, с пересечением «зелёной линии» на машине</li>
  <li><strong>Пафос:</strong> более долгая поездка с запада; лучше бронировать как частный трансфер по фиксированной цене</li>
</ul>
<h2>Большие курорты, точная высадка</h2>
<p>Отели Лонг-Бич большие и растянуты вдоль берега, поэтому важно, к какому входу вам нужно. При бронировании укажите точный отель — Grand Sapphire, Caesar Resort & Spa, Courtyard Long Beach или другой — и водитель отвезёт вас к нужной стойке регистрации, а не к ближайшим воротам.</p>
<h2>Поздние рейсы здесь — норма</h2>
<p>Многие рейсы в Эрджан приземляются поздно вечером. Мы отслеживаем каждое прибытие, поэтому посадка в полночь — не проблема: водитель ждёт в любой час, а стоимость не меняется.</p>
<h2>Поездки по округе</h2>
<p>Лонг-Бич самодостаточен, но если захотите осмотреться — старый город Фамагусты, полуостров Карпаз или ужин в Искеле — мы организуем эти поездки тоже по фиксированным ценам, так что вы никогда не зависите от счётчика.</p>
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
<p>North Cyprus runs on the Turkish Lira, but as a visitor you'll find things more flexible than you might expect. Here's what to bring and how paying works — including the question everyone asks about tipping.</p>
<h2>The local currency is the Lira</h2>
<p>Shops, cafés and local taxis price in Turkish Lira (TL). It's worth carrying some cash for small purchases, markets and rural spots where cards aren't taken.</p>
<h2>But euros and sterling go a long way</h2>
<p>Hotels, resorts, larger restaurants and most transfer drivers happily accept euros — and often sterling too. If you're arriving from the south or on a short stay, you don't need to rush to change money at the airport; a small amount is plenty to start.</p>
<h2>Cards and ATMs</h2>
<p>Cards work in hotels, supermarkets and bigger restaurants, and ATMs are easy to find in towns. They typically dispense Lira; some also offer euros. Tell your bank you're travelling so a Cyprus transaction isn't flagged.</p>
<h2>Paying for your transfer</h2>
<p>With TheTaxsi the fare is fixed and agreed before you travel — no meter. You can pay in cash to the chauffeur on arrival, in euros or Lira, unless you've arranged otherwise in advance. Nothing to work out at the roadside.</p>
<h2>Do you tip the driver?</h2>
<p>Tipping is appreciated but never expected. If your chauffeur helped with heavy luggage or waited through a long delay, rounding up or adding 5–10% is a kind gesture — but the price you were quoted is the price you owe. There's no obligation.</p>
<p>Ready to travel? <a href="/en/routes/">See fixed prices</a> or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>Kuzey Kıbrıs Türk Lirası ile döner, ama bir ziyaretçi olarak işleri beklediğinizden daha esnek bulacaksınız. İşte yanınıza ne almalı ve ödeme nasıl işler — herkesin sorduğu bahşiş sorusu dahil.</p>
<h2>Yerel para birimi Lira'dır</h2>
<p>Dükkânlar, kafeler ve yerel taksiler Türk Lirası (TL) ile fiyat verir. Küçük alışverişler, pazarlar ve kartın geçmediği kırsal noktalar için biraz nakit taşımakta fayda var.</p>
<h2>Ama euro ve sterlin de işinizi görür</h2>
<p>Oteller, tatil köyleri, büyük restoranlar ve çoğu transfer sürücüsü euro'yu seve seve kabul eder — çoğu zaman sterlini de. Güneyden geliyorsanız veya kısa bir konaklamadaysanız havalimanında para bozdurmak için acele etmenize gerek yok; başlangıç için az bir miktar yeterlidir.</p>
<h2>Kartlar ve ATM'ler</h2>
<p>Kartlar otellerde, süpermarketlerde ve büyük restoranlarda geçer; ATM'leri şehirlerde kolayca bulursunuz. Genellikle Lira verir, bazıları euro da sunar. Kıbrıs işleminin şüpheli görülmemesi için bankanıza seyahat ettiğinizi bildirin.</p>
<h2>Transferinizin ödemesi</h2>
<p>TheTaxsi ile ücret sabittir ve yola çıkmadan kararlaştırılır — taksimetre yok. Önceden aksini ayarlamadıysanız varışta şoföre nakit olarak, euro ya da Lira ile ödeyebilirsiniz. Yol kenarında hesaplanacak bir şey yok.</p>
<h2>Sürücüye bahşiş verilir mi?</h2>
<p>Bahşiş takdir edilir ama asla beklenmez. Şoförünüz ağır bagajınıza yardım ettiyse ya da uzun bir gecikmede beklediyse, ödemeyi yukarı yuvarlamak veya %5–10 eklemek nazik bir jesttir — ama size verilen fiyat ödemeniz gereken fiyattır. Hiçbir zorunluluk yok.</p>
<p>Yola çıkmaya hazır mısınız? <a href="/tr/routes/">Sabit fiyatlara bakın</a> ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Северный Кипр живёт на турецкой лире, но как гость вы найдёте всё гибче, чем ожидаете. Вот что взять с собой и как проходит оплата — включая вопрос о чаевых, который задают все.</p>
<h2>Местная валюта — лира</h2>
<p>Магазины, кафе и местные такси указывают цены в турецких лирах (TL). Стоит иметь немного наличных для мелких покупок, рынков и сельских мест, где карты не принимают.</p>
<h2>Но евро и фунты тоже в ходу</h2>
<p>Отели, курорты, крупные рестораны и большинство водителей трансфера охотно принимают евро — а часто и фунты. Если вы приезжаете с юга или на короткий срок, не нужно спешить менять деньги в аэропорту; для начала достаточно небольшой суммы.</p>
<h2>Карты и банкоматы</h2>
<p>Карты принимают в отелях, супермаркетах и больших ресторанах, а банкоматы легко найти в городах. Обычно они выдают лиры, некоторые — и евро. Предупредите банк о поездке, чтобы операция на Кипре не была заблокирована.</p>
<h2>Оплата трансфера</h2>
<p>С TheTaxsi цена фиксированная и оговорена до поездки — без счётчика. Если заранее не договорились иначе, вы можете заплатить водителю наличными по прибытии, в евро или лирах. Ничего не нужно высчитывать на обочине.</p>
<h2>Давать ли чаевые водителю?</h2>
<p>Чаевые приятны, но никогда не обязательны. Если водитель помог с тяжёлым багажом или ждал во время долгой задержки, округлить сумму вверх или добавить 5–10% — добрый жест, но названная цена и есть то, что вы должны. Никаких обязательств.</p>
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
<p>Paphos International Airport (PFO) is small, sunny and refreshingly quick to get through — the western gateway to Cyprus. Whether you're staying nearby or crossing north, here's how a smooth arrival unfolds.</p>
<h2>Passport control and luggage</h2>
<p>Paphos serves mostly European flights, and as an EU entry point it's fast — EU passport holders often clear in minutes, and non-EU travellers rarely wait long outside peak times. Baggage reclaim is a few steps beyond passport control, and trolleys are free.</p>
<h2>Where we meet you</h2>
<p>Your chauffeur waits in the arrivals hall opposite the exit, holding a sign with your name. We track your flight, so an early or delayed landing never shortens your included waiting time. Walk out, look ahead, and you'll see us.</p>
<h2>Staying in the west</h2>
<p>Paphos town and its resort areas are only 15–20 minutes away, and your fare is fixed before you travel — no meter, whatever the traffic.</p>
<h2>Crossing to the north</h2>
<p>Heading to Kyrenia, Famagusta or Güzelyurt? Paphos is the western gateway to the north. For destinations like Güzelyurt and Lefke we use the Bostancı (Astromeritis) crossing, which is more direct than routing through Nicosia. It's a longer drive than from Ercan, but with a fixed price and a driver who crosses the border daily, it's completely straightforward.</p>
<h2>The first minutes</h2>
<p>Your chauffeur handles the luggage, walks you to the car and confirms your destination before setting off. Water is waiting in the cabin. From kerb to open road takes only a few minutes.</p>
<p>Arriving at Paphos? <a href="/en/routes/">See fixed prices for every route</a> or <a href="/en/book/">book your transfer</a>.</p>`,
      tr: `
<p>Baf Uluslararası Havalimanı (PFO) küçük, güneşli ve geçişi ferahlatıcı derecede hızlıdır — Kıbrıs'ın batı kapısı. İster yakında kalın ister kuzeye geçin, işte sorunsuz bir varış nasıl ilerler.</p>
<h2>Pasaport kontrolü ve bagaj</h2>
<p>Baf çoğunlukla Avrupa uçuşlarına hizmet eder ve bir AB giriş noktası olarak hızlıdır — AB pasaportu sahipleri çoğu zaman dakikalar içinde geçer, AB dışı yolcular ise yoğun saatler dışında nadiren uzun bekler. Bagaj alımı pasaport kontrolünün birkaç adım ötesindedir ve arabalar ücretsizdir.</p>
<h2>Sizi nerede karşılıyoruz</h2>
<p>Şoförünüz varış salonunda, çıkışın karşısında, adınızın yazılı olduğu tabelayla bekler. Uçuşunuzu takip ederiz; erken ya da rötarlı bir iniş, dahil olan bekleme sürenizi asla kısaltmaz. Dışarı çıkın, karşıya bakın, bizi göreceksiniz.</p>
<h2>Batıda kalmak</h2>
<p>Baf şehri ve tatil bölgeleri yalnızca 15–20 dakika uzaklıktadır ve ücretiniz yola çıkmadan sabitlenir — trafik ne olursa olsun taksimetre yok.</p>
<h2>Kuzeye geçiş</h2>
<p>Girne, Gazimağusa veya Güzelyurt'a mı gidiyorsunuz? Baf, kuzeyin batı kapısıdır. Güzelyurt ve Lefke gibi noktalar için Lefkoşa üzerinden gitmekten daha doğrudan olan Bostancı (Astromeritis) geçişini kullanırız. Ercan'dan daha uzun bir yolculuktur, ama sabit bir fiyat ve sınırı her gün geçen bir sürücüyle tamamen zahmetsizdir.</p>
<h2>İlk dakikalar</h2>
<p>Şoförünüz bagajlarınızı alır, sizi araca götürür ve yola çıkmadan varış noktanızı teyit eder. Kabinde su hazırdır. Kapıdan açık yola çıkış yalnızca birkaç dakika sürer.</p>
<p>Baf'a mı iniyorsunuz? <a href="/tr/routes/">Tüm güzergahların sabit fiyatlarına bakın</a> ya da <a href="/tr/book/">transferinizi rezerve edin</a>.</p>`,
      ru: `
<p>Международный аэропорт Пафоса (PFO) — небольшой, солнечный и приятно быстрый в прохождении — западные ворота Кипра. Остаётесь ли вы поблизости или едете на север, вот как проходит спокойное прибытие.</p>
<h2>Паспортный контроль и багаж</h2>
<p>Пафос обслуживает в основном европейские рейсы и как пункт въезда в ЕС проходится быстро — владельцы паспортов ЕС часто проходят за минуты, а путешественники не из ЕС редко ждут долго вне часов пик. Выдача багажа — в нескольких шагах за паспортным контролем, тележки бесплатны.</p>
<h2>Где мы вас встречаем</h2>
<p>Ваш водитель ждёт в зале прилёта напротив выхода с табличкой с вашим именем. Мы отслеживаем рейс, поэтому ранняя или задержанная посадка никогда не сокращает включённое время ожидания. Выходите, смотрите вперёд — и увидите нас.</p>
<h2>Если вы остаётесь на западе</h2>
<p>Город Пафос и его курортные районы всего в 15–20 минутах, а цена фиксируется до поездки — без счётчика, каким бы ни был трафик.</p>
<h2>Переезд на север</h2>
<p>Едете в Кирению, Фамагусту или Гюзельюрт? Пафос — западные ворота на север. Для таких мест, как Гюзельюрт и Лефке, мы используем переход Бостанджи (Астромеритис), который удобнее, чем ехать через Никосию. Дорога длиннее, чем из Эрджана, но с фиксированной ценой и водителем, который пересекает границу каждый день, всё совершенно просто.</p>
<h2>Первые минуты</h2>
<p>Водитель возьмёт багаж, проводит вас к машине и подтвердит пункт назначения перед выездом. В салоне ждёт вода. От выхода до открытой дороги — всего несколько минут.</p>
<p>Прилетаете в Пафос? <a href="/ru/routes/">Смотрите фиксированные цены на все маршруты</a> или <a href="/ru/book/">забронируйте трансфер</a>.</p>`,
    },
  },
]
