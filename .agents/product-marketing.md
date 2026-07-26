# Product Marketing Context — TheTaxsi

**Document version:** v4
**Last updated:** 2026-07-26

> ⚠️ Bu belge canlı siteden ve repo'dan otomatik çıkarıldı. **⚠️ VARSAYIM** işaretli
> satırlar tahmindir — düzeltilmeden Faz 4 (içerik stratejisi) ve Faz 5 (metin) bunları
> gerçek kabul eder. Müşteri Dili bölümü bu programın en yüksek değerli bölümüdür:
> Faz 5'te H2 başlıklarına, Faz 2'de AI taban ölçümü sorgu setine dönüşür.

## Product Overview

**One-liner:**
Kıbrıs'ta sabit fiyatlı, şoförlü özel havalimanı transferi — uçağınız indiğinde
şoförünüz kapıda.

**What it does:**
TheTaxsi, Kıbrıs'ın üç havalimanı (Ercan, Larnaka, Baf) ile adanın her yerleşimi
arasında özel araç transferi sağlar. Fiyat rezervasyondan önce sabitlenir; taksimetre,
güzergâh şişirme veya varışta "havalimanı ek ücreti" yoktur. Rezervasyon web
formundan veya WhatsApp'tan yapılır, onay dakikalar içinde WhatsApp'tan gelir —
üyelik ve peşin ödeme gerekmez.

**Product category (müşterinin aradığı raf):**
Kuzey Kıbrıs havalimanı transferi / North Cyprus airport transfer / трансфер Северный Кипр.
Müşteri kendini "taksi" kategorisinde arar ama satın alırken "önceden ayarlanmış
özel transfer" bekler — marka bu ikisinin arasında konumlanıyor (`TheTaxsi` adı taksi,
tonu şoförlü hizmet).

**Konumlandırma kararı (2026-07-24, kilitli):** **İkili — Kuzey ana, Güney niş.**
Marka, ana sayfa ve tüm çekirdek sayfalar **North Cyprus** üzerine konumlanır.
Larnaka / Baf / Limassol sayfaları ayrı bir **"Güney'den Kuzey'e sınır geçişli geliş"**
kümesi olarak durur — Güney Kıbrıs içi transfer iddiasında bulunulmaz.
Bu karar Faz 4 ve Faz 5'in tamamını yönetir; sonradan değiştirmek 366 sayfayı
yeniden yazmak demektir.

**Product type:** yerel hizmet işletmesi — **yalnız B2C.** Kurumsal / otel / üniversite
anlaşmaları bu programın kapsamı dışında (2026-07-24 kararı).

**Öncelikli pazar:** EN / TR / RU **eşit ağırlık.** İçerik bütçesi ve Faz 2 sorgu seti
üçe bölünür; hiçbir dil "ikincil çeviri" muamelesi görmez. Kapasite düşük olduğu için
bu, sayfa başına derinlik yerine üç dilde eşzamanlı ilerlemeyi gerektirir — Faz 4'te
konu sayısı buna göre kısılacak.

**Business model & pricing:**
Rota başına sabit ücret, GBP cinsinden. Tek yön **£45–£300**, gidiş-dönüş indirimli
(ör. Ercan→Lefkoşa £45 tek yön / £80 gidiş-dönüş). Fiyata dahil: transfer, otoyol
ve otopark ücretleri, canlı uçuş takibi, havalimanında 45 dakikaya kadar bekleme.
Ekstralar (çocuk koltuğu, VIP) ayrıca ve rezervasyondan önce gösterilir.
Ödeme: varışta şoföre nakit **veya** Stripe üzerinden online kart.

**Filo:** binek (3-4 kişi) · Vito / V-Class (6-8 kişi) · 16 kişilik Sprinter.

**Kapsam:** 46 tanımlı rota + 46 otomatik ters yön = 92 rota sayfası, 3 dilde
(en/tr/ru), toplam 366 URL.

---

## Target Audience

**Target müşteri tipleri:**

| Segment | Kim | Neden alır |
|---|---|---|
| Tatilci (birincil) | Kuzey Kıbrıs otel bölgelerine uçan İngiltere/AB yolcusu; Bafra, İskele Long Beach, Girne oteller bölgesi, Esentepe | Gece yarısı inen uçaktan sonra pazarlıkla uğraşmak istemiyor |
| Rusça konuşan yolcu | Rusya/Ukrayna/Kazakistan kaynaklı tatilci ve mülk sahibi | Dil bariyeri; RU dispatch ayırt edici |
| Türkiyeli yolcu | Ercan üzerinden gelen aile ve iş yolcusu | Fiyat şeffaflığı; Ercan→Girne/Lefkoşa hattı |
| Üniversite öğrencisi & velisi | DAÜ, YDÜ, UKÜ, ODTÜ KKTC vb. kampüslere gelen öğrenci | Dönem başı/sonu havalimanı transferi, veli için güvenlik |
| Mülk sahibi / expat | Kuzey Kıbrıs'ta ev almış, yılda birkaç kez gelen | Tekrarlayan aynı rota; tanıdık şoför |

**Karar verici:** B2C — yolcunun kendisi veya seyahati organize eden aile üyesi.
Kurumsal segment kapsam dışı (2026-07-24).

**Primary use case:**
Havalimanına iniş anında, önceden fiyatı belli özel araçla varış noktasına gitmek.

**Jobs to be done:**
1. "Uçaktan indiğim anda ne olacağını bilmek istiyorum" — belirsizliği ortadan kaldırma
2. "Ne ödeyeceğimi önceden bilmek istiyorum" — fiyat riskini ortadan kaldırma
3. "Uçağım rötar yaparsa mahsur kalmak istemiyorum" — aksaklık sigortası

**Use cases:**
- Gece varışı (Ercan'a gece inen uçuşlar — taksi bulmak zor)
- **Larnaka/Baf → Kuzey Kıbrıs sınır geçişli transfer** (en yüksek anksiyete taşıyan senaryo)
- Otel bölgesine grup transferi (aile, 6-8 kişi, bagajlı)
- Öğrenci dönem transferi
- Şehir içi / şehirler arası noktadan noktaya (havalimanı dışı)

---

## Personas

B2C ağırlıklı olduğu için klasik B2B persona tablosu yerine yolcu segmentleri:

| Persona | Neye önem verir | Zorluğu | Vaadimiz |
|---|---|---|---|
| İlk kez gelen tatilci | Öngörülebilirlik | Adayı, mesafeleri, sınırı bilmiyor | "İnin, gerisini biz hallederiz" — isim tabelası, sabit ücret |
| Rusça konuşan yolcu | Anlaşılmak | İngilizce/Türkçe dispatch ile iletişememe | Rusça rezervasyon, Rusça sayfa, Rusça dispatch |
| Sınır geçen yolcu (Larnaka/Baf) | Belirsizliği kapatmak | Güney→Kuzey geçişte ne olacağını bilmiyor | Geçiş prosedürünü açıklayan rehber + tek araçla uçtan uca |
| Öğrenci velisi | Güvenlik | Çocuğunu tanımadığı ülkede tanımadığı araca bindirmek | Ehliyetli, kayıtlı şoför; önceden isim/telefon/plaka bildirimi |
| Tekrar eden mülk sahibi | Kolaylık | Her seferinde sıfırdan ayarlamak | WhatsApp'tan tek mesajla aynı rota |

---

## Problems & Pain Points

**Core problem:**
Kıbrıs'ta havalimanı transferi öngörülemez. Taksimetre çalışır, şoför rotayı bilmez,
aynı mesafeye farklı fiyatlar çıkar — ve bunu yolcu ancak varışta öğrenir.
(Bu, sitenin kendi "Our Story" bölümünün ifadesi.)

**Why alternatives fall short:**
- **Havalimanı taksi durağı** — fiyat varışta belli olur, pazarlık gerekir, gece kuyruk olur
- **Otelin ayarladığı transfer** — komisyonlu, genelde daha pahalı, esnek değil
- **Araç kiralama** — sağdan direksiyon, bilinmeyen yollar, park, sınır sigortası derdi
- **Kombi / dolmuş** — bagajla, gece, otel kapısına kadar gitmiyor
- **Fiyat vermeyen rakip transfer siteleri** ⚠️ VARSAYIM — "teklif isteyin" duvarı;
  bu aynı zamanda GEO fırsatı: fiyatı açık yayınlayan taraf AI asistanlarında alıntılanır

**What it costs them:**
Fazla ödenen 20-50 £; havalimanında kaybedilen 30-60 dakika; rötarda mahsur kalma riski.

**Emotional tension:**
Tatilin ilk 60 dakikası. Yorgun, bagajlı, yabancı ülkede, çoğu zaman gece.
Burada yaşanan aksaklık tüm tatile ton veriyor. Duygusal ihtiyaç *ucuzluk değil,
kesinlik*.

---

## Competitive Landscape

> ✅ Faz 3b (2026-07-25) ile dolduruldu — ayrıntı `competitor-profiles/`. SEO
> metrikleri (domain rank/backlink/trafik) DataForSEO olmadığı için bu turda alınamadı.

**Direct — yerel transfer firmaları.** ncyprustaxi.com, cyprustaxi.net, gnctaxi.com,
ercantaxi.com, kibristransferim.com. Hepsi rota bazlı, sabit fiyatlı, form+WhatsApp
rezervasyonlu. **Gerçek durum varsayımdan farklı çıktı:**
- Fiyat listesi **var** ve **bizden ucuzlar** — Ercan→Girne: ncyprustaxi £45,
  cyprustaxi.net £50, **TheTaxsi £55**. Yani "fiyat gizliyorlar" varsayımı yanlıştı.
- ncyprustaxi **KITSAB lisanslı (#227)**; cyprustaxi.net **10 yıllık marka +
  TripAdvisor/Google/FB/IG + testimonial**. İkisinde de bizde olmayan güven sinyali var.
- **Ama neredeyse hepsi yalnız İngilizce (biri +Yunanca) — RU/TR yok.** Bizim tam
  EN/TR/RU yerelleştirmemiz ve 35 yıllık şoförümüz gerçek hendek.

**Secondary — aggregatörler.** Kiwitaxi, uptransfers, uni-transfers, GetTransfer.
Yerel şoförleri toplayıp online ön ödemeyle satıyorlar. **Yerel firmalardan pahalı**
(Ercan→Girne ~$117 ≈ £90 vs bizim £55) ama **çok güçlü yorum altyapısı** (Kiwitaxi:
TripAdvisor 4.5/574+, Reviews.co.uk 4.6/1194+). Marka/organik aramada güçlüler;
dile özel + rota bazlı uzun kuyruklu sorgularda zayıflar. Dil garantisi vermiyorlar.

**İçerik/lead-gen — Carrington Cyprus.** Emlak şirketi, 2.500+ kelimelik transfer
rehberleriyle SEO'da sınır-geçişi ve "Larnaka vs Ercan" sorgularını kapıyor. Ama
yazar/tarih künyesi yok ve rezervasyon yok → içerikte geçilebilir.

**Indirect** — arkadaş/akraba karşılaması, kombi, "orada bakarız" yaklaşımı.

**⚠️ En kritik rekabet bulgusu:** TheTaxsi yerel rakipler arasında **en pahalısı**
ve **tek güven sinyali taşımıyor**. Fiyatta kazanılamaz; premium'u haklı çıkaran tek
şey (35 yıllık şoför + derin içerik + görünür güven) şu an sitede yok. Bu, E-E-A-T
(Faz 5) ve yorum toplama (Faz 9) işini "iyi olur"dan "zorunlu"ya taşıyor.

---

## Differentiation

**Key differentiators:**

1. **~35 yıllık Kıbrıs taksicileriyle çalışıyoruz.** ⭐ **En güçlü ve şu an tamamen
   kullanılmayan varlık.** Bu bir pazarlama iddiası değil, doğrulanabilir bir
   deneyim beyanı — Google'ın E-E-A-T'sindeki *Experience* ayağının tam karşılığı ve
   AI modellerinin alıntılamak için aradığı birinci-el bilgi kaynağı. Bir yazılım
   şirketinin taklit edemeyeceği tek şey. **Sitede şu an hiçbir yerde geçmiyor.**
2. **Rota bazlı, fiyatı yayınlanmış 92 sayfa** — rakiplerin çoğu fiyatı gizliyor
3. **Sınır geçişli rotalar** (Larnaka/Baf → Kuzey) — birçok firma bu hattı vermiyor
4. **3 dil, tam yerelleştirilmiş adresler** — TR ve RU sayfalar kendi dilinde URL'e sahip
5. **Üyeliksiz, peşin ödemesiz rezervasyon** — WhatsApp onaylı, sürtünmesiz
6. **Uçuş takibi + 45 dk ücretsiz bekleme** fiyata dahil
7. **16 kişiye kadar filo** — grup ve öğrenci transferini tek elden

**How we do it differently:**
Fiyatı önce söyleriz, sonra araç göndeririz — sektörün varsayılanı bunun tersi.
Ve aracı kullanan kişi, o yolu 35 yıldır kullanan biri.

**Why that's better:**
Yolcu satın alma kararını havalimanında yorgunken değil, evde uçuş planlarken verir.
Deneyim tarafında ise fark somut: hangi kapının hangi saatte sıkıştığını, hangi
güzergâhın yağmurda kapandığını, otelin hangi girişine yanaşılacağını yalnızca
o yolu on yıllardır süren biri bilir.

**Why customers choose us:** ⚠️ VARSAYIM — gerçek müşteri gerekçesi Faz 3a'da doğrulanacak

**İçerik stratejisi sonucu (Faz 4'e taşınacak):**
35 yıllık şoför deneyimi bir *satır* değil, bir *içerik hattı* olmalı. Somut biçimleri:
şoför profil sayfaları (isim, kaç yıldır, hangi hatlar), rota sayfalarında
"şoförün notu" bloğu, "yerel bilgi" tipi blog yazıları. Bunlar aynı anda üç şeyi
birden besliyor: E-E-A-T, dönüşüm için gereken güven, ve GEO'da alıntılanabilir
birinci-el pasaj.

---

## Objections

| İtiraz | Yanıt |
|---|---|
| "Havalimanından taksi daha ucuza gelmez mi?" | Gelmez — durak taksisi taksimetreyle çalışır ve gece tarifesi uygular. Bizim ücret sabit ve otoyol/otopark dahil. Rota sayfasında rakam yazıyor. |
| "Peşin ödeme istemiyorum / kartımı vermek istemiyorum" | Peşin ödeme yok. Varışta şoföre nakit ödeyebilirsiniz. Kart isteyen için Stripe var. |
| "Uçağım rötar yaparsa param yanar mı?" | Hayır. Uçuşu takip ediyoruz, kalkış saatini biz kaydırıyoruz, ilk 45 dk bekleme ücretsiz. |
| "Bilmediğim bir firmaya nasıl güveneyim?" | **Kısmi yanıt var ama kullanılmıyor:** ~35 yıllık Kıbrıs taksicileriyle çalışıyoruz. Sitede yorum, GBP veya şoför bilgisi olmadığı için bu şu an okunmuyor. Faz 5 (şoför profilleri) + Faz 9 (GBP + ilk yorumlar) bunu kapatacak. |
| "Larnaka'dan Kuzey'e geçiş sorun çıkarır mı?" | Çıkarmaz — sınır geçişi rehberimizde adım adım yazılı, aynı araçla uçtan uca gidersiniz. |

**Anti-persona:**
- Sırt çantalı, en ucuzu arayan bütçe yolcusu — kombi/dolmuş onun çözümü
- Kendi aracını kiralayıp adayı gezmek isteyen yolcu
- Güney Kıbrıs içi kalan, kuzeye hiç geçmeyen yolcu (şu an rota kapsamı zayıf)

---

## Switching Dynamics

**Push (mevcut çözümden iten):**
Havalimanında pazarlık, gece taksi bulamama, "kaç tutar?" belirsizliği, dil bariyeri,
tanıdıktan tanıdığa telefon numarası arama.

**Pull (bize çeken):**
Rakamı sayfada görmek. WhatsApp'tan tek mesajla teyit. Kendi dilinde sayfa.
Uçuş takibi vaadi.

**Habit (yerinde tutan):**
"Nasılsa orada taksi vardır." Otelin önerdiği transferi sorgusuz kabul etmek.
Geçen sefer kullandığı şoförün numarası.

**Anxiety (geçişte endişelendiren):**
"Ya gelmezse?" — bilmediği ülkede, gece, ödeme yapmadan rezerve ettiği bir hizmetin
gerçekten gelip gelmeyeceği. **Bu programın çözmesi gereken bir numaralı endişe;
teknik SEO değil, sosyal kanıt problemi (Faz 9).**

---

## Customer Language

> ⚠️ Aşağısı sitenin kendi diliyle ve blog başlıklarının sorgu biçimiyle çıkarıldı.
> **Gerçek verbatim müşteri ifadesi Faz 3a'da (Reddit / TripAdvisor / Facebook grupları /
> WhatsApp yazışmaları) toplanacak.** Faz 5'in H2 başlıkları buradan gelecek.

**Problemi nasıl anlatıyorlar (sorgu biçiminde — blog başlıklarından türetildi):**
- "how to get from Ercan airport to Kyrenia"
- "Larnaca airport to North Cyprus — can a taxi cross the border?"
- "do I need a visa for North Cyprus"
- "Ercan or Larnaca — which airport for Kyrenia?"
- "how much is a taxi from Ercan to Girne"
- "euro or lira in North Cyprus"
- "Ercan havalimanından Girne'ye nasıl gidilir"
- "Ercan havalimanı Girne taksi kaç para"
- "как добраться из аэропорта Эрджан в Кирению"
- "трансфер Ларнака Северный Кипр"

**Bizi nasıl anlatıyorlar:** ⚠️ VARSAYIM — Faz 3a gerekli

**Kullanılacak kelimeler:**
transfer · sabit fiyat / fixed fare · şoför / chauffeur · özel araç / private
karşılama · uçuş takibi · bekleme dahil · sınır geçişi · noktadan noktaya

**Kaçınılacak kelimeler:**
- "taksimetre", "tarife" (rakibin dili)
- "lüks", "VIP" abartısı — marka tonu sakin, gösterişsiz olmalı
- "en ucuz" — anti-persona çeker, konumlandırmayı bozar
- **"Cyprus" tek başına** — konumlandırma kararı gereği çekirdek sayfalarda
  **"North Cyprus" / "Kuzey Kıbrıs" / "Северный Кипр"** kullanılacak. "Cyprus"
  yalnız sınır geçişli geliş kümesinde ve marka cümlelerinde kalabilir.

**Glossary:**

| Terim | Anlamı |
|---|---|
| Ercan (ECN) | Kuzey Kıbrıs'ın havalimanı; yalnız Türkiye aktarmalı uçuş |
| Larnaka (LCA) / Baf (PFO) | Güney Kıbrıs havalimanları; doğrudan AB/İngiltere uçuşu — Kuzey'e gitmek için sınır geçişi gerekir |
| Sınır geçişi / border crossing | Yeşil Hat kapısı; transferin en çok soru alan aşaması |
| Long Beach / İskele | Doğu sahilinde hızla büyüyen otel-rezidans bölgesi |
| Bafra | Kuzey'in beş yıldızlı otel koridoru |
| Kombi | Yerel dolmuş — bütçe alternatifi |

---

## Brand Voice

**Tone:** sakin, kendinden emin, abartısız. Sitenin kendi cümlesi tonu özetliyor:
*"Land. We'll take it from here."*

**Style:** kısa cümle, doğrudan, sayı verir. Satış dili değil, bilgilendirme dili.
Uzun paragraf yok.

**Personality:** güvenilir · sakin · şeffaf · yerel · gösterişsiz

**Görsel dil:** Apple-clean nötr temel (beyaz / #F5F7F9 / near-black) + tek turkuaz
aksan. Renkli/temalı paletlerden kaçınılıyor — bkz. proje hafızası.

---

## Proof Points

> ⚠️ **Bu bölüm programın en zayıf noktası.** Şu an sitede tek bir sayı, yorum veya
> müşteri kanıtı yok. Princeton GEO çalışmasına göre istatistik eklemek alıntılanmayı
> **+%37**, kaynak göstermek **+%40** artırıyor; düşük otoriteli bir domain için
> kazanç **+%115**'e kadar çıkıyor. Yani buradaki boşluk doğrudan AI görünürlüğü
> kaybı demek.

**Elimizdeki gerçek kanıtlar (kullanıcıdan):**
1. **Yaklaşık 35 yıllık deneyimli Kıbrıs taksicileriyle çalışılıyor** (2026-07-24).
2. **Şoförler Kıbrıs Türk Taksici Dernekleri Federasyonu'na bağlı** (2026-07-26) —
   kayıtlı, lisanslı taksiciler. Rakip ncyprustaxi'nin KITSAB #227'sinin dengi bir
   kurumsal güven sinyali. İlk uygulandığı yer: güvenlik yazısı (`is-it-safe-book-
   transfer-without-prepayment`, EN/TR/RU, "What makes TheTaxsi a safe choice?").
   **Doğru ifade:** şoförler federasyona bağlı; şirketin kendisi üye değil — bu yüzden
   schema'ya `memberOf` OLARAK EKLENMEDİ (abartı olurdu). Yayılabilecek yerler:
   glossary tanımı, about sayfası, güven pillar hub'ı.

Bunlar hâlâ çoğu sayfada geçmiyor. Faz 5'in işi bunları şablonlara yerleştirmek.

Bunu kullanılabilir kanıta çevirmek için Faz 5 öncesi toplanması gerekenler:
- Kaç şoför, her birinin kaç yıllık deneyimi (isim + fotoğraf + yıl)
- İşletme kaç yıldır faaliyette
- Filo büyüklüğü (kaç araç, hangi sınıflar)
- Şoförlerin yerel bilgi örnekleri — rota sayfalarındaki "şoför notu" bloklarını
  bu besleyecek

**Metrics:** yok — ⚠️ toplanacak (tamamlanan transfer sayısı, ortalama karşılama süresi,
rötar sonrası bekleme kaydı, tekrar eden müşteri oranı)

**Customers:** kapsam dışı — B2C-only kararı gereği kurumsal logo hedefi yok

**Testimonials:** yok — ⚠️ **Google Business Profile mevcut değil veya bilinmiyor.**
Yerel hizmet işletmesi için GBP en yüksek getirili tek adım: yerel paket sıralaması,
harita görünürlüğü, yorum altyapısı ve `LocalBusiness` schema'nın `sameAs` bağlantısı
hep buradan geliyor. Faz 9'un birinci maddesi.

**Value themes:**

| Tema | Kanıt | Durum |
|---|---|---|
| Sabit fiyat | 92 rota sayfasında yayınlanmış rakam | ✅ güçlü |
| Çok dilli hizmet | EN/TR/RU tam yerelleştirme | ✅ güçlü |
| Sınır geçişi uzmanlığı | 2 ayrıntılı rehber yazısı | ✅ güçlü |
| **Şoför deneyimi** | **~35 yıllık taksiciler** | ⚠️ kanıt var, yalnız güvenlik yazısında kullanılıyor — diğer sayfalara yayılmalı |
| **Kurumsal güven** | **Kıbrıs Türk Taksici Dernekleri Federasyonu üyesi şoförler** | ✅ güvenlik yazısına eklendi (2026-07-26); diğer sayfalara yayılmalı |
| Güvenilirlik (sosyal kanıt) | — | ⛔ yorum ve GBP yok |
| Uçuş takibi | — | ⛔ iddia var, kanıt yok |

---

## Goals

**Business goal:** ⚠️ VARSAYIM — organik kanaldan gelen rezervasyon hacmini büyütmek
(rakamsal hedef kullanıcıdan alınacak)

**Conversion action (birincil):** rezervasyon formunun gönderilmesi → WhatsApp onayı
**İkincil:** doğrudan WhatsApp mesajı, telefon araması

**Current metrics:** **ölçüm yok.** 2026-07-24 kontrolü: canlı sayfada
`google-site-verification` etiketi var (Search Console muhtemelen bağlı) ama
**GA4, GTM, Clarity veya başka hiçbir analytics kurulu değil.** Yani şu an
hiçbir dönüşüm, form gönderimi veya WhatsApp tıklaması ölçülmüyor.
Bu, programın "önce taban ölçüm" ilkesini doğrudan ihlal ediyor — `analytics`
becerisi Faz 10'dan **Faz 1'e alınmalı** (bkz. program state, Kararlar).

---

## Changelog

- v4 (2026-07-26) — Yeni gerçek güven sinyali eklendi: şoförler Kıbrıs Türk Taksici Dernekleri Federasyonu'na bağlı. Kanıt Noktaları güncellendi, güvenlik yazısına (EN/TR/RU) işlendi. Schema'ya memberOf EKLENMEDİ (şirket üye değil, şoförler bağlı — abartı olmasın).

- v3 (2026-07-25) — Faz 3b rakip profilleme sonucu Rekabet Ortamı bölümü ⚠️
  varsayımdan gerçek veriye çevrildi (`competitor-profiles/`). Kritik düzeltme:
  yerel rakipler fiyat gizlemiyor ve bizden ucuz; TheTaxsi en pahalı ve güven
  sinyali sıfır. Çok dillilik + 35 yıllık şoför gerçek hendek olarak doğrulandı.
- v2 (2026-07-24) — Kullanıcı doğrulaması sonrası dört karar işlendi: ikili
  konumlandırma (Kuzey ana / Güney sınır-geçişli niş), EN-TR-RU eşit ağırlık,
  yalnız B2C (kurumsal segment çıkarıldı), ve **~35 yıllık şoför deneyiminin
  birincil farklılaştırıcı olarak eklenmesi** — Farklılaşma, Kanıt Noktaları ve
  İtirazlar bölümleri buna göre yeniden yazıldı. Ayrıca analytics'in hiç kurulu
  olmadığı tespiti Hedefler'e işlendi.
- v1 (2026-07-24) — Canlı siteden ve `html-site/` repo'sundan otomatik ilk taslak.
  12 bölüm dolduruldu; Rekabet, Müşteri Dili, Kanıt Noktaları ve Hedefler bölümleri
  ⚠️ işaretli varsayımlar içeriyor ve Faz 3a/3b'de doğrulanacak.
