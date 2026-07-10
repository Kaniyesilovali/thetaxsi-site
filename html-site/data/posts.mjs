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
      en: 'A complete guide to getting from Larnaca and Paphos airports to your destination in Cyprus.',
      tr: "Larnaca ve Paphos havalimanlarından Kıbrıs'taki hedefinize ulaşmanın tam rehberi.",
      ru: 'Полное руководство по маршрутам из аэропортов Ларнаки и Пафоса.',
    },
    body: {
      en: `
<p>Cyprus has two international airports: <strong>Larnaca International Airport (LCA)</strong> in the east and <strong>Paphos International Airport (PFO)</strong> in the west. Knowing which one you're flying into — and how far your destination is — makes all the difference when planning your transfer.</p>
<h2>Larnaca Airport</h2>
<p>Larnaca is the busier of the two airports and serves the majority of international routes. It's centrally located on the island, making it the closest airport to Nicosia, Limassol, and Ayia Napa.</p>
<p><strong>Typical transfer times from Larnaca:</strong></p>
<ul>
  <li>Nicosia: 40–50 minutes</li>
  <li>Limassol: 45–55 minutes</li>
  <li>Ayia Napa: 30–40 minutes</li>
</ul>
<h2>Paphos Airport</h2>
<p>Paphos Airport serves the western part of the island and is popular with tourists heading to Paphos city and the surrounding resort areas.</p>
<p><strong>Typical transfer times from Paphos:</strong></p>
<ul>
  <li>Paphos City: 15–20 minutes</li>
  <li>Limassol: 50–60 minutes</li>
  <li>Nicosia: 90–100 minutes</li>
</ul>
<h2>Why Choose a Private Transfer?</h2>
<p>Cyprus has limited public transport, particularly outside major cities. A private transfer offers:</p>
<ul>
  <li><strong>Fixed price</strong> — agreed in advance, no meter running</li>
  <li><strong>Door-to-door service</strong> — no shared shuttles, no stops</li>
  <li><strong>Flight monitoring</strong> — your driver adjusts for delays</li>
</ul>
<h2>Booking Tips</h2>
<ol>
  <li>Book at least 24 hours in advance</li>
  <li>Include your flight number in the notes — we use it to track your arrival</li>
  <li>Choose round trip if you need a return journey — it saves money</li>
  <li>Select extras like child seats when booking, not at the last minute</li>
</ol>
<p>Ready to book your transfer? <a href="/en/book/">Book now</a></p>`,
      tr: `
<p>Kıbrıs'ta iki uluslararası havalimanı bulunur: doğuda <strong>Larnaca Uluslararası Havalimanı (LCA)</strong> ve batıda <strong>Paphos Uluslararası Havalimanı (PFO)</strong>. Hangi havalimanına ineceğinizi ve hedefinize olan mesafeyi bilmek, transferinizi planlamada büyük fark yaratır.</p>
<h2>Larnaca Havalimanı</h2>
<p>Larnaca, iki havalimanından daha yoğun olanıdır ve uluslararası seferlerin büyük bölümüne hizmet eder. Adanın merkezinde yer aldığından Lefkoşa, Limassol ve Ayia Napa'ya en yakın havalimanıdır.</p>
<p><strong>Larnaca'dan tipik transfer süreleri:</strong></p>
<ul>
  <li>Lefkoşa: 40–50 dakika</li>
  <li>Limassol: 45–55 dakika</li>
  <li>Ayia Napa: 30–40 dakika</li>
</ul>
<h2>Paphos Havalimanı</h2>
<p>Paphos Havalimanı adanın batı bölgesine hizmet eder ve Paphos şehrine yönelen turistler arasında popülerdir.</p>
<p><strong>Paphos'tan tipik transfer süreleri:</strong></p>
<ul>
  <li>Paphos Merkez: 15–20 dakika</li>
  <li>Limassol: 50–60 dakika</li>
  <li>Lefkoşa: 90–100 dakika</li>
</ul>
<h2>Neden Özel Transfer?</h2>
<p>Kıbrıs'ta toplu taşıma, özellikle büyük şehirler dışında oldukça sınırlıdır. Özel transfer size şunları sunar:</p>
<ul>
  <li><strong>Sabit fiyat</strong> — önceden kararlaştırılmış, taksimetre yok</li>
  <li><strong>Kapıdan kapıya hizmet</strong> — paylaşımlı servis yok, ara durak yok</li>
  <li><strong>Uçuş takibi</strong> — sürücünüz gecikmeler için ayarlama yapar</li>
</ul>
<h2>Rezervasyon İpuçları</h2>
<ol>
  <li>En az 24 saat önceden rezervasyon yapın</li>
  <li>Notlar alanına uçuş numaranızı ekleyin</li>
  <li>Dönüş yolculuğu gerekiyorsa gidiş-dönüş seçeneğini seçin</li>
  <li>Çocuk koltuğu gibi ekstraları rezervasyon sırasında seçin</li>
</ol>
<p>Transferinizi rezerve etmeye hazır mısınız? <a href="/tr/book/">Rezervasyon yap</a></p>`,
      ru: `
<p>На Кипре два международных аэропорта: <strong>Международный аэропорт Ларнаки (LCA)</strong> на востоке и <strong>Международный аэропорт Пафоса (PFO)</strong> на западе.</p>
<h2>Аэропорт Ларнаки</h2>
<p>Ларнака — самый загруженный аэропорт острова, через который проходит большинство международных рейсов.</p>
<p><strong>Типичное время трансфера из Ларнаки:</strong></p>
<ul>
  <li>Никосия: 40–50 минут</li>
  <li>Лимасол: 45–55 минут</li>
  <li>Айя-Напа: 30–40 минут</li>
</ul>
<h2>Аэропорт Пафоса</h2>
<p>Аэропорт Пафоса обслуживает западную часть острова и популярен среди туристов, направляющихся в город Пафос.</p>
<p><strong>Типичное время трансфера из Пафоса:</strong></p>
<ul>
  <li>Центр Пафоса: 15–20 минут</li>
  <li>Лимасол: 50–60 минут</li>
  <li>Никосия: 90–100 минут</li>
</ul>
<h2>Почему стоит выбрать частный трансфер?</h2>
<ul>
  <li><strong>Фиксированная цена</strong> — оговорена заранее, счётчик не работает</li>
  <li><strong>Услуга «от двери до двери»</strong> — без совместных маршрутных такси</li>
  <li><strong>Отслеживание рейса</strong> — водитель скорректирует время при задержке</li>
</ul>
<h2>Советы по бронированию</h2>
<ol>
  <li>Бронируйте минимум за 24 часа</li>
  <li>Укажите номер рейса в примечаниях</li>
  <li>Выбирайте «туда и обратно», если нужна обратная поездка</li>
  <li>Заказывайте детское кресло при бронировании</li>
</ol>
<p>Готовы забронировать трансфер? <a href="/ru/book/">Забронировать</a></p>`,
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
<p>Travelling onwards to Nicosia, Limassol or Ayia Napa? Fixed prices for every route are on our routes page — no meters, no surprises.</p>`,
      tr: `
<p>Larnaka Uluslararası Havalimanı Avrupa standartlarına göre kompakt bir havalimanı — tekerlekler piste değdiği andan itibaren varış salonuna nadiren yirmi dakikadan uzun sürer. İşte tipik bir varış nasıl ilerler ve şoförünüz sizi nerede bekler.</p>
<h2>Pasaport kontrolü ve bagaj</h2>
<p>AB pasaportu sahipleri genellikle on dakikadan kısa sürede pasaport kontrolünden geçer. AB dışı yolcular yoğun saatlerde (yazın kabaca 10:00–14:00 ve 20:00–23:00) on beş ila yirmi beş dakika ayırmalı. Bagaj alımı pasaport kontrolünün hemen ardındadır — arabalar ücretsizdir.</p>
<h2>Sizi nerede karşılıyoruz</h2>
<p>Şoförünüz varış salonunda, çıkış kapılarının tam karşısında, adınızın yazılı olduğu tabelayla bekler. Aramanıza ya da etrafa bakınmanıza gerek yok — dışarı çıkın, karşıya bakın, bizi göreceksiniz. Uçuşunuzu takip ederiz; rötarlı bir iniş, dahil olan bekleme sürenizi asla kısaltmaz.</p>
<h2>Transferinizin ilk dakikaları</h2>
<p>Şoförünüz bagajlarınızı alır, sizi birkaç dakika mesafede park etmiş araca — Mercedes E-Serisi veya muadili — götürür ve yola çıkmadan önce varış noktanızı teyit eder. Kabinde su hazırdır. Kapıdan otoyola çıkış yaklaşık beş dakika sürer.</p>
<p>Lefkoşa, Limasol veya Ayia Napa'ya mı devam ediyorsunuz? Tüm güzergahların sabit fiyatları güzergahlar sayfamızda — taksimetre yok, sürpriz yok.</p>`,
      ru: `
<p>Международный аэропорт Ларнаки компактен по европейским меркам — с момента касания полосы до зала прилёта редко проходит больше двадцати минут. Вот как обычно проходит прибытие и где вас будет ждать водитель.</p>
<h2>Паспортный контроль и багаж</h2>
<p>Владельцы паспортов ЕС обычно проходят контроль менее чем за десять минут. Путешественникам не из ЕС в часы пик (летом примерно 10:00–14:00 и 20:00–23:00) стоит заложить пятнадцать–двадцать пять минут. Выдача багажа находится сразу за паспортным контролем, тележки бесплатны.</p>
<h2>Где мы вас встречаем</h2>
<p>Ваш водитель ждёт в зале прилёта, прямо напротив выходных дверей, с табличкой с вашим именем. Не нужно звонить или искать — выходите, смотрите прямо перед собой, и вы нас увидите. Мы отслеживаем ваш рейс, поэтому задержка посадки никогда не сокращает включённое время ожидания.</p>
<h2>Первые минуты трансфера</h2>
<p>Водитель возьмёт багаж, проводит вас к автомобилю — Mercedes E-Class или аналогу, припаркованному в паре минут — и подтвердит пункт назначения перед выездом. В салоне вас ждёт вода. От выхода до шоссе — около пяти минут.</p>
<p>Едете дальше в Никосию, Лимассол или Айя-Напу? Фиксированные цены на все маршруты — на странице маршрутов. Без счётчиков и сюрпризов.</p>`,
    },
  },
]
