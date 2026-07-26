# Arama Görünürlüğü Programı — TheTaxsi

**Rota:** retrofit (uyarlanmış — aşağıdaki Kararlar bölümüne bak)
**Başlangıç:** 2026-07-24
**Son güncelleme:** 2026-07-24
**Mevcut faz:** Claude tarafı bağımsız işler bitti (2026-07-26) — kullanıcı girdisi bekleniyor
**Öncelik:** dengeli (SEO + AEO + GEO)

## Kurulum

| Alan | Değer |
|---|---|
| Site | https://thetaxsi.com |
| Site tipi | yerel hizmet (Kuzey Kıbrıs havalimanı transferi / şoförlü araç) |
| Çok dilli | evet (en / tr / ru) — hreflang izi Faz 2'de zorunlu |
| Kod tabanı | `/Users/mac14/taxsi/html-site` (statik HTML + Tailwind, `npm run build`) |
| Sayfa sayısı | 366 URL (3 dil × ~122 sayfa: 92 rota + 21 blog + kurumsal) |
| Kapasite | ~2-4 sa/hafta kullanıcı (onay + Cloudflare/hosting); metin ve kod Claude'da |
| Sıralama durumu | Canlı, henüz anlamlı organik sıralama yok |
| **AI bot erişimi** | **⛔ ENGELLİ — 2026-07-24 kontrol edildi.** Aşağıya bak |

### AI bot erişimi — açık bulgu

Canlı `robots.txt` repo'daki `dist/robots.txt` ile aynı değil. Cloudflare'in
**Managed robots.txt / AI Crawl Control** özelliği araya giriyor ve şunları engelliyor:

```
Content-Signal: search=yes, ai-train=no, use=reference
Disallow: GPTBot · ClaudeBot · Google-Extended · CCBot ·
          Applebot-Extended · Bytespider · meta-externalagent ·
          Amazonbot · CloudflareBrowserRenderingCrawler
```

Engellenmeyenler: `PerplexityBot`, `OAI-SearchBot`, `Googlebot`, `Bingbot`.

**Etkisi:** ChatGPT'nin eğitim/derleme tarayıcısı, Claude ve Google AI Overviews
siteyi okuyamıyor. Bu ayar açık kaldığı sürece programın GEO yarısı ölçülemez ve
büyütülemez. Repo'dan düzeltilemez — Cloudflare panelinden kapatılması gerekiyor.

Kullanıcı kaldıracağını belirtti (2026-07-24). Faz 6 Adım 1'de yeniden doğrulanacak.

## Faz Durumu

| # | Faz | Beceri | Durum | Çıktılar |
|---|---|---|---|---|
| 0 | Bağlam temeli | product-marketing | ✅ | `.agents/product-marketing.md` (v2) |
| 1a | Teknik teşhis | seo-audit | ✅ | `.agents/seo-audit.md` |
| 1b | Ölçüm kurulumu | analytics | ▶ | |
| 2 | AI görünürlük taban ölçümü | ai-seo (yalnız Adım 1) | ☐ | |
| 3a | Müşteri araştırması | customer-research | ☐ | |
| 3b | Rakip profilleri | competitor-profiling | ✅ | `competitor-profiles/` (4 profil + özet) |
| 4 | İçerik stratejisi (boşluk analizi) | content-strategy | ✅ | `.agents/content-strategy.md` |
| 5 | İçerik AEO'ya uyarlama | copy-editing + copywriting | ▶ | 4 yeni blog (EN/TR/RU) — `content-strategy.md` |
| 6 | Yapısal veri | schema | ✅ | `data/schema.mjs` + blog FAQPage (`blog.mjs`) |
| 7 | Site mimarisi | site-architecture | ☐ / n/a | yalnız yapısal sorun çıkarsa |
| 8 | AEO + GEO çekirdeği | ai-seo (tam) | ☐ | |
| 9 | Site dışı otorite | directory-submissions, public-relations, community-marketing, social | ☐ | |
| 10 | Ölçüm (raporlama) | analytics | ☐ | kurulum Faz 1'e alındı |
| 11 | Dönüşüm | cro, popups, emails | ☐ | |
| 12 | Döngüler | marketing-loops | ☐ | |

Durum: ☐ bekliyor · ▶ devam ediyor · ✅ bitti · ⏸ bloke · n/a kapsam dışı

## Mevcut Faz

**Durum (2026-07-26):** Claude'un girdi gerektirmeyen tüm işleri tamamlandı.
Program şimdi kullanıcı tarafındaki 4 girdiye bloke. Aşağıdaki "Kullanıcı bekleyen
işler" tamamlanınca Claude devam edebilir.

### ✅ Claude tarafı bitenler (2026-07-26 push edildi + canlıda doğrulandı — deploy push'ta otomatik)
- `.htaccess` www→https zinciri düzeltmesi (`0f3b76d`)
- Merkezi `@id`'li LocalBusiness schema — entity consolidation (`c909967`)
- Blog FAQPage schema — 75 sayfa, 281 soru, önce 0 (`f24d060`)
- `llms.txt` + `pricing.md` makine-okunur dosyalar (`72df1f0`)
- Pillar-farkında blog iç linkleme (`c1b6a95`)
- 4 yeni blog yazısı EN/TR/RU: karşılaştırma, glossary, sabit-fiyat, güvenlik
  (`2eb4999`, `c0566b4`)
- Denetim + rakip profilleri + içerik stratejisi (`.agents/`, `competitor-profiles/`)

### ⏸ Kullanıcı bekleyen işler (bunlar gelince Claude devam eder)
1. **GA4 measurement ID** → Faz 1b ölçüm. Verilince `layout.mjs` + `main.js`'e
   `booking_form_submit`/`whatsapp_click`/`phone_click` (rota+dil boyutlu) gömülür.
2. **Şoför bilgisi** (isim, ~yıl, hangi hatlar, fotoğraf, filo, işletme yaşı) →
   Faz 5'in en yüksek-değerli parçaları: şoför profilleri (#1), rota şoför notları
   (#2, 46 ince ters-yön sayfasını da çözer), RU sınır rehberi (#4). Person schema.
3. **`sharp` bağımlılık onayı** → görselleri WebP'ye çevir (Bulgu 6). `.htaccess`
   cache tarafı hazır; onay gelince `scripts/img-webp.mjs` + `<picture>`.
4. ✅ **Cloudflare AI Crawl Control — BİTTİ (2026-07-26).** "Managed robots.txt"
   toggle kapatıldı; Cloudflare'in enjekte ettiği `Disallow: /` (ClaudeBot/GPTBot/
   CCBot/Google-Extended/Bytespider/meta-externalagent) + `ai-train=no` sinyali
   kalktı, sitenin kendi `Allow: /` robots.txt'i serve ediliyor (curl ile doğrulandı).
   Gün-0 GEO baseline alındı → "GEO Taban Ölçümü (Faz 2)". Botlar yeni robots.txt'i
   tarayınca (~2-4 hafta) aynı 20 sorgu yeniden ölçülecek.

### Kalan Claude-bağımsız işler (opsiyonel, istenince)
- Hub/pillar sayfaları (#7/#10/#11) — YENİ URL demek, site-architecture kararı;
  denetim IA'yı "sağlam" bulduğu için zorunlu değil, kullanıcı isterse.
- OG görselleri per-page — `sharp`'a bağlı (bkz. madde 3).

### Faz 1a sonucu — teknik denetim

**Genel sağlık: iyi.** Beklenenden çok daha sağlam kurulmuş. Doğru olanlar:
hreflang (self-ref + karşılıklı + x-default, HTML/sitemap uyumlu), canonical
(diller arası canonical yok), sitemap (`xhtml` namespace, tam alternates),
orphan sayfa 0, 366/366 sayfada tek H1, tekrar eden title/description 0,
36/36 görselde alt+boyut+lazy, RU/TR içerik gerçekten çevrilmiş.

Öncelikli 5 bulgu — ayrıntı `.agents/seo-audit.md`:

| # | Bulgu | Nerede çözülecek |
|---|---|---|
| 1 | 46 ters-yön rota sayfası ince içerik (~%10 özgün, ~55-60 kelime) | Faz 5 — ⏸ şoför görüşmesi bekliyor |
| 2 | E-E-A-T sıfır: Person schema 0, yazar 0, güncelleme tarihi 2/366, yorum 0 | Faz 5 + 9 — ⏸ şoför görüşmesi bekliyor |
| 3 | Hiç ölçüm yok | Faz 1b (şimdi) |
| 4 | ~~`LocalBusiness` eksik, `@id` yok, `areaServed` çelişiyor~~ | ✅ `data/schema.mjs` |
| 5 | ~~`www` → `http` → `https` üç adımlı zincir~~ | ✅ `0f3b76d` |
| 6 | Görseller WebP değil (~2.3 MB JPEG) | ⏸ `sharp` bağımlılık onayı bekliyor |

**2026-07-25 — Faz 1a bulguları ele alındı (kullanıcı: "teknik olanları şimdi",
içerik işi "önce şoförlerle konuşayım").** Bağımlılık gerektirmeyen tüm teknik
bulgular kapatıldı (4, 5); WebP `sharp` kararına, ince içerik + E-E-A-T ise şoför
görüşmelerine bırakıldı (uydurma yerel bilgi yazılmayacak — kullanıcı kararı).

### Faz 0'da ortaya çıkan yapısal bulgular

1. **⭐ ~35 yıllık şoför deneyimi sitede hiç geçmiyor.** Elde olan tek gerçek kanıt
   ve rakiplerin kopyalayamayacağı tek varlık. E-E-A-T'nin *Experience* ayağı ve
   GEO'da alıntılanmanın birinci-el kaynağı. Faz 5'in ilk işi.
2. **Sosyal kanıt sıfır.** Google Business Profile yok/bilinmiyor, tek yorum yok.
   Yerel hizmet işletmesi için GBP en yüksek getirili tek adım — yerel paket,
   harita görünürlüğü, yorum altyapısı, `LocalBusiness` schema `sameAs` hep oradan.
   Faz 9'un birinci maddesi, ama GBP açılışı beklenmemeli — bugün başlatılabilir.
3. **Analytics hiç kurulu değil.** `google-site-verification` var, GA4/GTM/Clarity
   yok. Hiçbir form gönderimi veya WhatsApp tıklaması ölçülmüyor → `analytics`
   Faz 10'dan Faz 1'e alındı.
4. **Sınır geçişli rota (Larnaka/Baf → Kuzey) net bir rekabet boşluğu.** Güney
   merkezli firmaların çoğu bu hattı vermiyor; en yüksek anksiyeteli senaryo
   olduğu için en yüksek dönüşüm ve alıntılanma potansiyeli burada.

## İleriye Taşınanlar

Fazlar arası girdiler — burada tutulmazsa kaybolur.

**Dağıtım hedefleri** (Faz 3a → Faz 9)
- _henüz doldurulmadı_

**AI taban ölçümü sorgu seti** (Faz 0 Müşteri Dili + Faz 3b → Faz 2/8)
İçerik stratejisi ve rakip aramalarından türedi — Faz 8 baseline'da kullan:
- EN: "how to get from Ercan airport to Kyrenia", "Larnaca airport to North Cyprus
  taxi border crossing", "do I need a visa for North Cyprus", "Ercan or Larnaca for
  Kyrenia", "North Cyprus airport transfer price", "is it safe to cross into North Cyprus"
- TR: "Ercan havalimanı Girne transfer", "Ercan Girne taksi kaç para", "Larnaka
  Kuzey Kıbrıs geçiş", "KKTC vize pasaport"
- RU: "трансфер аэропорт Эрджан Кирения", "трансфер Ларнака Северный Кипр",
  "такси Кипр аэропорт заказать", "виза Северный Кипр"
- (Faz 8'de 20'ye tamamla; her sorguda kim alıntılanıyor kaydet)

**Backlink hedef sayfaları** (Faz 5 → Faz 9)
- 92 rota landing sayfası (canlı) — kalite doğrulaması Faz 1'de
- `/en/routes/` liste sayfası (canlı)

**Dağıtım hedefleri** (Faz 3b'de bulundu → Faz 9)
- RU: vc.ru (transfer listeleri), cypruser.ru, turktrip.ru, northcyprusinform.com
- EN: whatsonintrnc.com, amyvillas.co.uk (villa+transfer)
- Yorum platformları: TripAdvisor, Google Maps, Reviews.co.uk (rakipler burada güçlü)
- Rakiplerin güçlü olduğu yer = bizim de görünmemiz gereken yer

**Faz 3b stratejik sonuçları** (Faz 4 içerik stratejisi + Faz 5 metin girdisi)
- Fiyatta yarışma — premium'u 35 yıl şoför + içerik + güvenle haklı çıkar
- Çok dillilik (özellikle RU) gerçek hendek — RU sınır-geçiş içeriğine yatır
- İçerikte öndeyiz ama E-E-A-T yok — yazar/tarih/şoför eklemek bizi Carrington'ın
  önüne geçirir
- "Güney niş" cyprustaxi.net ile çakışıyor — Larnaka hattında £15 ucuzuz (£80 vs £95),
  bunu + RU sınır rehberini öne çıkar
- Eksik veri: DataForSEO metrikleri, gnctaxi.com (403), ercantaxi/kibristransferim

## GEO Taban Ölçümü (Faz 2)

Kayıt tarihi: **2026-07-26** (Cloudflare Managed robots.txt kapatıldığı gün — gün-0).
Yöntem: **arama-retrieval vekili** (WebSearch, US-locale). Bu, ChatGPT/Perplexity/
Google-AI/Claude'un canlı citation logu DEĞİL — o dört ürünü doğrudan sorgulayacak
araç yok. WebSearch, motorların RAG için çektiği retrieval havuzunu ölçer: taxsi
yüzeye çıkıyor mu + kim domine ediyor. Robots.txt bloğu yeni kalktığı için botlar
henüz yeni hali taramadı; bu, düzeltmenin **öncesi** anlık görüntüsü.

**Baş sonuç: 20/20 sorguda thetaxsi.com GÖRÜNMÜYOR.** Markalı sorguda bile
("thetaxsi north cyprus airport transfer") motor "böyle bir servis bulunamadı" dedi
→ marka sıfır tanınırlıkta.

Retrieval'ı domine edenler (tekrar edenler, azalan sıklıkla):
- **EN:** gonorthcyprus.com, carringtontransfers.com / carringtoncyprus.com,
  cyprustaxi.net, ncyprustaxi.com, ercantaxi.com, easycyprustransfers.com,
  gnctaxi.com, whatsonintrnc.com + kiprarent.com (rehber), amyvillas.co.uk,
  aggregator'lar (holidaytaxis, rome2rio, mytransfers, kiwitaxi)
- **TR:** ercantaksi.com, kibristransfer.com, kibrisviptransfer.com,
  ercanhavalimanitaksi.com, becemtravel.com; vize/rehber: flypgs.com, kiprarent.com
- **RU:** kiwitaxi.ru, cypruser.ru, turktrip.ru, prokipr.ru, taxi-cyprus.eu,
  таксинакипре.com; vize/rehber: visasam.ru, avianity.ru

| # | Sorgu | Dil | taxsi retrieval'da? | Domine eden kaynaklar |
|---|---|---|---|---|
| 1 | how to get from Ercan airport to Kyrenia | EN | ❌ | mytransfers, rome2rio, ercanairport.taxi, holidaytaxis, cyprustaxi.net |
| 2 | Larnaca airport to North Cyprus taxi border crossing | EN | ❌ | amyvillas, gonorthcyprus, carringtoncyprus, whatsonintrnc, ncyprustaxi |
| 3 | North Cyprus airport transfer price | EN | ❌ | falaktransfer, ncyprustaxi, carringtontransfers, purpleparking |
| 4 | Ercan or Larnaca for Kyrenia | EN | ❌ | gonorthcyprus, TripAdvisor, kyreniatransfers, ercantaxi, carrington |
| 5 | do I need a visa for North Cyprus | EN | ❌ | Wikipedia, visitncy, flypgs, kiprarent, whatsonintrnc |
| 6 | is it safe to cross into North Cyprus border | EN | ❌ | hazelstravels, giveback.guide, whatsonintrnc, kiprarent |
| 7 | Ercan airport to Famagusta transfer taxi | EN | ❌ | gonorthcyprus, uptransfers, holidaytaxis, ercantaxi, ncyprustaxi, cyprustaxi.net |
| 8 | best North Cyprus airport transfer company reliable | EN | ❌ | gnctaxi, ncyprustaxi, cyprusparadise, carrington, easycyprustransfers, gonorthcyprus |
| 9 | Larnaca to Kyrenia transfer price cheapest | EN | ❌ | rome2rio, kiwitaxi, cheap-taxis, suntransfers, ercantaxi |
| 10 | Ercan havalimanı Girne transfer taksi kaç para | TR | ❌ | yeniistiklal, kibrisviptransfer, ercantaksi, kibristransfer |
| 11 | Larnaka Kuzey Kıbrıs sınır geçiş transfer | TR | ❌ | becemtravel, booking2cyprus, kuzeykibrisevler, kiprarent |
| 12 | KKTC vize pasaport gerekli mi | TR | ❌ | neredekal, ayazrentacar, flypgs, ercanhavalimani |
| 13 | Ercan Gazimağusa transfer taksi | TR | ❌ | ercanhavalimanitaksi, ercantaksi, magusaulastaksi, kibrisviptransfer |
| 14 | Kıbrıs havalimanı transfer güvenilir şoför | TR | ❌ | araltransfer, falaktransfer, kibristransfervetur, seyahatkibris |
| 15 | трансфер аэропорт Эрджан Кирения такси | RU | ❌ | kiwitaxi.ru, cypruser.ru, taxi-cyprus.eu, turktrip.ru, prokipr.ru |
| 16 | трансфер Ларнака Северный Кипр заказать | RU | ❌ | vc.ru, kiwitaxi.ru, cyprus24.taxi, larnaca-taxi.ru, таксинакипре |
| 17 | виза Северный Кипр нужна ли | RU | ❌ | visasam, letsfly, avianity, vizavsem, kipr-tp |
| 18 | такси Эрджан Фамагуста трансфер | RU | ❌ | kiwitaxi.ru, cypruser.ru, prokipr.ru, unitaxi.ru |
| 19 | thetaxsi north cyprus airport transfer (marka) | EN | ❌ | suntransfers, gonorthcyprus, gnctaxi, ncyprustaxi — "taxsi bulunamadı" |
| 20 | taxsi Ercan transfer Kıbrıs (marka) | TR | ❌ | ayazrentacar, kibrishavaalanitransfer, kibristransferim, ercantaksi |

**Okuma:** gonorthcyprus + carrington + cyprustaxi.net + ncyprustaxi EN'de; ercantaksi
+ kibristransfer TR'de; kiwitaxi.ru + cypruser.ru RU'da tekrar tekrar çıkan "varsayılan"
kaynaklar. Bunlar Faz 9 backlink/dağıtım ve Faz 8 içerik hedeflerinin ölçütü.
Yeniden ölçüm: botlar yeni robots.txt'i tarayınca (~2-4 hafta), aynı 20 sorgu.

## Kararlar

- **2026-07-24 — Uyarlanmış retrofit rotası seçildi.** Site canlı ve 366 URL'i var
  ama sıralaması yok. Standart retrofit'in "mevcut sıralamayı koru" kısıtı geçerli
  değil → içerik serbestçe yeniden yazılabilir (yalnız `copy-editing` değil,
  `copywriting` de kullanılabilir). Buna karşılık "teşhis planlamadan önce gelir"
  ve "URL değişikliği pahalıdır" kısıtları geçerli → `seo-audit` öne alındı,
  `site-architecture` sona bırakıldı.
- **2026-07-24 — `customer-research` retrofit sırasına eklendi.** Referans tabloda
  yok ama Müşteri Dili ve Faz 9 dağıtım hedef listesi başka yerden gelmiyor.
- **2026-07-24 — Cloudflare AI-bot engeli kaldırılacak.** Kullanıcı onayladı.
  Kaldırılmazsa Faz 8'in GEO yarısı ve Faz 9'un bir kısmı düşer.
- **2026-07-24 — İkili konumlandırma: Kuzey ana, Güney sınır-geçişli niş.**
  Çekirdek sayfalar "North Cyprus"; Larnaka/Baf/Limassol ayrı bir "Güney'den geliş"
  kümesi. Güney Kıbrıs içi transfer iddiası yok.
- **2026-07-24 — EN / TR / RU eşit ağırlık.** Hiçbir dil ikincil çeviri değil.
  Düşük kapasiteyle birleşince sonuç: daha az konu, üç dilde eşzamanlı.
- **2026-07-24 — Yalnız B2C.** Kurumsal/otel/üniversite anlaşmaları kapsam dışı.
- **2026-07-24 — `analytics` Faz 10'dan Faz 1'e alındı.** Sitede hiç ölçüm yok;
  programın "önce taban ölçüm" ilkesi ihlal ediliyordu.

## Açık İşler

- [ ] **Cloudflare panelinden AI Crawl Control / Managed robots.txt kapatılacak** — kullanıcı.
      **Ertelendi (2026-07-24 kullanıcı kararı).** Faz 1-7 boyunca bloke değil;
      **Faz 8'de (ai-seo taban ölçümü) bloke olur** — engel açıkken alınan GEO
      taban ölçümü anlamsız olur, sonradan tekrar ölçmek gerekir.
- [ ] **Google Business Profile açık mı?** Yoksa açılacak — Faz 9'un birinci maddesi
      ama bugün başlatılabilir, olgunlaşması haftalar alıyor
- [ ] **Şoför bilgisi toplanacak:** kaç şoför, her birinin kaç yıllık deneyimi, isim,
      fotoğraf, işletme kaç yıldır faaliyette, filo büyüklüğü — Faz 5 girdisi
- [ ] `site.config.mjs` içindeki Instagram/Facebook placeholder'ları gerçek hesaplarla
      değiştir — Faz 6 Organization schema `sameAs` için gerekli
- [x] ~~Google Search Console + GA4 kurulu mu, doğrula~~ → GSC doğrulama etiketi var,
      **analytics hiç yok** (2026-07-24)
