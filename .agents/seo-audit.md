# SEO Teknik Denetimi — TheTaxsi

**Tarih:** 2026-07-24
**Kapsam:** tam site — 366 URL, 3 dil (en/tr/ru)
**Yöntem:** canlı site (`curl`, HTTP başlıkları, yönlendirme zincirleri) + `dist/`
build çıktısının tamamının programatik analizi (statik HTML olduğu için JSON-LD
doğrudan okunabiliyor; JS enjeksiyonu yok, bu yüzden schema tespiti güvenilir)
**Program:** Faz 1 — bkz. `.agents/search-visibility-program.md`

---

## Yönetici Özeti

**Genel sağlık: iyi.** Bu, teknik SEO'su beklenenin çok üzerinde kurulmuş bir site.
Çoğu denetimde bulunan klasik hataların neredeyse tamamı burada yok: hreflang
kusursuz, canonical'lar doğru, orphan sayfa yok, her sayfada tek H1, tekrar eden
title/description sıfır, tüm görsellerde alt metni ve boyut var, üç dilin içeriği
gerçekten çevrilmiş.

Dolayısıyla iş, "bozuğu tamir etmek" değil **eksik olanı eklemek**: içerik derinliği,
güven sinyalleri ve ölçüm.

### En öncelikli 5 bulgu

| # | Bulgu | Etki |
|---|---|---|
| 1 | 46 ters-yön rota sayfası ince içerik — sayfa başına ~%10 özgün metin | 🔴 Yüksek |
| 2 | E-E-A-T sinyali yok: yazar yok, şoför yok, tarih yok, yorum yok | 🔴 Yüksek |
| 3 | Hiç ölçüm yok — GA4/GTM kurulu değil | 🔴 Yüksek |
| 4 | ✅ **Çözüldü** — `@id`'li tek `LocalBusiness` düğümü + rota bazlı `areaServed` (`data/schema.mjs`) | 🟠 Orta-Yüksek |
| 5 | ✅ **Çözüldü** — `www` yönlendirmesi doğrudan https'e (`0f3b76d`) | 🟠 Orta |

### Hızlı kazanımlar (birkaç saat, hemen)

- `.htaccess`'teki bayat `www` kuralını düzelt → zincir 1 adıma iner
- `areaServed: "Cyprus"` → şehir/bölge bazlı değer
- `LocalBusiness`'a adres, `@id`, `image`, `url`, `openingHours` ekle
- Görselleri WebP'ye çevir → ~2.3 MB'tan ~700 KB'a

---

## ✅ Doğru Kurulmuş — Dokunma

Bunları raporda ayrıca listeliyorum çünkü sonraki fazlarda "acaba bu da mı bozuk"
diye tekrar bakılmasın:

| Alan | Durum |
|---|---|
| **hreflang** | Kusursuz. Her sayfada self-referencing + karşılıklı + geçerli kodlar + `x-default`. HTML ve sitemap birbiriyle uyumlu. |
| **Canonical** | Her dil kendine canonical veriyor. Diller arası canonical yok (en sık ve en yıkıcı hata — burada yok). |
| **Sitemap** | `xmlns:xhtml` var, her `<url>` tüm dilleri + `x-default`'u içeriyor, mutlak URL'ler, `lastmod` güncel. 366 URL = 367 HTML − kök yönlendirme. |
| **URL yapısı** | Dil ön ekleri tutarlı, TR/RU adresler kendi dilinde, eski adresler için 301'ler `.htaccess`'te otomatik üretiliyor. |
| **İç linkleme** | Orphan sayfa **0**. En az link alan sayfa bile 4 iç link alıyor. |
| **Başlık/açıklama** | Tekrar eden title **0**, tekrar eden description **0**. Uzunluklar hedefte (yalnız 7 TR başlığı 61 karakter — önemsiz). |
| **H1** | 366/366 sayfada tam olarak bir H1. |
| **Görseller** | 36/36 görselde `alt`, `width`, `height`, `loading="lazy"`. CLS riski yok. Hero `preload` + `fetchpriority="high"`. |
| **Çeviri kalitesi** | RU ve TR sayfalar gerçekten çevrilmiş — yalnız arayüz değil, gövde metni de özgün ve dile özel yazılmış. "Scaled content abuse" riski yok. |
| **Schema temeli** | Rota sayfalarında `Service` + `Offer` + `BreadcrumbList` + `FAQPage`; blogda `BlogPosting`. Sağlam temel. |
| **Sunucu** | HTTP/2, Brotli, `nosniff`, `X-Frame-Options`. Varlık cache'i doğru (CSS 7 gün, görsel/font 1 yıl, Cloudflare HIT). |

---

## 🔴 Yüksek Öncelikli Bulgular

### 1. 46 ters-yön rota sayfası ince içerik taşıyor

**Sorun.** 92 rota sayfasının gövdesi ortalama **%70 tekrar eden blok, %30 özgün**.
Dağılım eşit değil:

| Sayfa tipi | Özgün içerik oranı | Yaklaşık özgün kelime |
|---|---|---|
| İleri yön (havalimanı → yer) | %45-49 | ~260 kelime |
| **Ters yön (yer → havalimanı)** | **%9-11** | **~55-60 kelime** |

En kötü sekiz sayfa: `karpaz-hotels-to-ercan-airport` (%9), `bafra-hotels-to-larnaca-airport`
(%10), `catalkoy-hotels-to-ercan-airport`, `nicosia-to-larnaca-airport`,
`lefke-to-paphos-airport`, `karpaz-hotels-to-larnaca-airport`,
`guzelyurt-to-ercan-airport`, `famagusta-to-ercan-airport` (hepsi %11).

**Kanıt.** 6-gram Jaccard benzerliği: 92 sayfa arasında **284 çift %65'in üzerinde
benzer**, bu da **43 benzersiz sayfayı** kapsıyor. En yüksek çiftler %76-79.
Tüm sayfalarda ortak ~266 kelimelik blok var.

**Nüans — bu bir kopyala-yapıştır sitesi değil.** Her rotanın açılış paragrafı elle
yazılmış ve gerçekten iyi:

> *"Departures from Alsancak mean an early car along a quiet coast road, then the
> climb over the pass to Ercan… Tell us which of the Merit forecourts you are
> standing on and the driver comes to that one."*

Sorun bu metnin **kısa olması ve altındaki ortak bloğun onu boğması**. İleri yön
sayfalarında özgün metin yeterli; ters yön sayfaları otomatik türetildiği için
yalnız bir paragraf almış.

**Etki.** Google'ın helpful content sistemi **site geneli** çalışır — çok sayıda ince
sayfa, güçlü sayfaların sıralamasını da baskılar. 46 ince sayfa, 366 sayfalık sitenin
%13'ü. Ayrıca bu sayfalar `LocalBusiness` niyetli, yüksek ticari değerli sorguları
hedefliyor (otel → havalimanı dönüş transferi) — yani kaybedilen tam da dönüşen trafik.

**Çözüm.** Ters yön sayfalarına yön-spesifik özgün içerik ekle. Havalimanına *gidiş*,
havalimanından *geliş*ten farklı bir bilgi ihtiyacı doğurur — ve bu, elimizdeki
35 yıllık şoför bilgisinin doğal olarak dolduracağı boşluk:

- Otelden kaç saat önce çıkılmalı (uçuş saatine göre tablo)
- Hangi saatlerde hangi güzergâh sıkışır (yaz sabahı Girne çıkışı vb.)
- Check-in kuyruğu ve sınır kapısı için pay
- Dönüşte bagaj/alışveriş molası mümkün mü
- "Şoförün notu" bloğu — o hattı süren kişinin somut uyarısı

Hedef: ters yön sayfası başına **+200-250 özgün kelime**, özgün oranı %35+.
Bu iş `data/route-copy*.mjs` içinde yapılır, şablon değişmez.

**Öncelik:** 1 — Faz 5'in ilk işi.

---

### 2. E-E-A-T sinyali yok — ve elimizdeki en güçlü varlık kullanılmıyor

**Sorun.** Tüm sitede:

| Sinyal | Durum |
|---|---|
| `Person` schema (yazar/şoför) | **0 sayfa** |
| Görünür yazar adı ve künyesi | **0 sayfa** |
| Görünür "Son güncelleme" tarihi | **2 sayfa** / 366 |
| `Review` veya `aggregateRating` | **0 sayfa** |
| Şoför bilgisi (isim, deneyim, fotoğraf) | **0 sayfa** |

**Etki iki yönlü.**
*Google tarafı:* E-E-A-T dört bileşeninden **Experience** ve **Authoritativeness**
tamamen boş. Yerel hizmet + YMYL'ye yakın bir kategoride (insan taşıma, ödeme) bu
doğrudan sıralama tavanı demek.
*AI tarafı:* Princeton GEO çalışması (KDD 2024, Perplexity.ai üzerinde) — kaynak
göstermek alıntılanmayı **+%40**, istatistik **+%37**, alıntı **+%30**, otoriter ton
**+%25** artırıyor. Düşük otoriteli bir domain'de toplam kazanç **+%115**'e çıkıyor.
TheTaxsi tam olarak "düşük otoriteli yeni domain" — yani buradaki kazanç potansiyeli
sitenin en yükseği.

**Kritik nokta:** Faz 0'da ortaya çıktığı gibi işletme **~35 yıllık deneyimli Kıbrıs
taksicileriyle** çalışıyor. Bu, rakiplerin satın alamayacağı ve bir yazılımın
üretemeyeceği tek varlık — ve şu an 366 sayfanın hiçbirinde geçmiyor.

**Çözüm.**
1. Şoför profil sayfaları: isim, kaç yıldır, hangi hatlar, fotoğraf → `Person` schema
2. Her rota sayfasına "şoförün notu" bloğu (Bulgu 1'i de çözüyor)
3. Blog yazılarına gerçek yazar künyesi + `Person` author
4. Her önemli sayfaya görünür "Son güncelleme" tarihi
5. Google Business Profile → ilk yorumlar → `aggregateRating`

**Öncelik:** 1 — Faz 5 ve Faz 9.

---

### 3. Hiçbir ölçüm kurulu değil

**Sorun.** Canlı sayfada `google-site-verification` etiketi var (Search Console
muhtemelen bağlı) ama **GA4, GTM, Clarity, Plausible — hiçbiri yok.**

**Etki.** Şu an hiçbir rezervasyon formu gönderimi, WhatsApp tıklaması veya telefon
tıklaması ölçülmüyor. Yani: hangi rota sayfasının dönüştürdüğü, hangi dilin işe
yaradığı, bu programın işe yarayıp yaramadığı **kanıtlanamaz.**

**Çözüm.** GA4 + olay planı (`analytics` becerisi, bu fazın ikinci yarısı):
`booking_form_submit`, `whatsapp_click`, `phone_click`, `route_page_view`
(rota + dil boyutuyla).

**Öncelik:** 1 — bu fazın ikinci yarısı. İçerik işine başlamadan önce kurulmalı,
yoksa öncesi/sonrası karşılaştırması yapılamaz.

---

## 🟠 Orta Öncelikli Bulgular

### 4. `LocalBusiness` schema eksik ve `areaServed` konumlandırmayla çelişiyor

**Sorun.** Rota sayfalarındaki `Service.provider` şu kadar:

```json
{ "@type": "LocalBusiness", "name": "TheTaxsi", "telephone": "+905488616939" }
```

Eksikler: `address`, `geo`, `openingHours`, `image`, `url`, `@id`, `sameAs`,
`priceRange`, `aggregateRating`.

Ayrıca `areaServed: "Cyprus"` — Faz 0'daki konumlandırma kararı **"Kuzey ana,
Güney sınır-geçişli niş"** olduğu için bu değer hem çok geniş hem yanlış sinyal
veriyor.

**Etki.** Yerel hizmet işletmesi için `LocalBusiness` eksikliği doğrudan yerel paket
ve harita görünürlüğü kaybı. `@id` olmaması, 366 sayfadaki 342 `LocalBusiness`
bildiriminin **aynı işletme olduğunun anlaşılmaması** demek — Google bunları
birbirine bağlayamıyor.

**Çözüm.** Tek bir `@id` (`https://thetaxsi.com/#business`) etrafında tam bir
`LocalBusiness` düğümü kur, diğer tüm sayfalar ona referans versin.
`areaServed`'i rota bazlı yap (`Kyrenia`, `Nicosia`…). `sameAs`'e gerçek sosyal
hesapları ve Google Business Profile URL'ini ekle.

**✅ Çözüldü (2026-07-25).** `data/schema.mjs` merkezi modülü kuruldu:
- `businessNode(lang)` — `@id: .../#business` ile tekil düğüm; `url` (dile göre),
  `telephone`, `email`, `priceRange`, `image`/`logo`, `areaServed` (Kuzey Kıbrıs +
  Larnaka/Baf kalkış), `openingHoursSpecification` (24/7), `availableLanguage` (EN/TR/RU)
- `businessRef` — `home`/`routes`/`blog` şablonlarının provider/publisher alanı artık
  buna referans veriyor; kopuk LocalBusiness kopyaları kaldırıldı
- Rota `areaServed`: `'Cyprus'` → `[from, to]`; ana sayfa TaxiService: `'Northern Cyprus'`
- Düğüm `layout.page()` ile her sayfaya bir kez basılıyor → 366/366 sayfada tekil (doğrulandı)
- **Dürüstlük kuralı:** `site.config.mjs`'teki Instagram/Facebook hâlâ placeholder
  olduğu için `sameAs` bilinçli olarak eklenmedi (sahte sosyal hesap schema'ya girmez).
  Gerçek hesaplar/GBP gelince `realSocials()` otomatik dahil edecek.

**Kalan:** `aggregateRating` (Faz 9, yorumlar gelince), `sameAs` (gerçek hesaplar gelince).

**Öncelik:** 2 — ✅ tamam.

---

### 5. `www` → `http` → `https` üç adımlı yönlendirme zinciri

**Sorun.**

```
https://www.thetaxsi.com/  →301→  http://thetaxsi.com/  →301→  https://thetaxsi.com/
```

İki fazladan atlama ve ortada **şifresiz HTTP** üzerinden geçiş.

**Kanıt.** `public/.htaccess`:

```apache
# HTTPS zorunlu — SSL sertifikası kurulana kadar KAPALI.
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^ http://%1%{REQUEST_URI} [R=301,L]
```

Yorum satırı "sertifika yokken https'e yönlendirmek www'yu erişilemez yapar" diyor
— ama **sertifika artık var** (Cloudflare, HTTPS çalışıyor). Kural bayat kaldı.

**Etki.** Kayıp link değeri, boşa harcanan tarama bütçesi, güvensiz atlama.

**Çözüm.** Tek satır: `http://%1` → `https://%1`.

**Öncelik:** 2 — hızlı kazanım, dakikalar sürer.

---

### 6. Görseller optimize edilmemiş

**Sorun.** `public/img` toplam **2.3 MB**, tamamı JPEG. En büyükler:
`hero.jpg` 363 KB (LCP öğesi, preload'lu), `fleet-5.jpg` 301 KB, `dest-6.jpg` 215 KB.
WebP/AVIF yok, `srcset` yok — mobilde de 1000px görsel iniyor.

**Etki.** LCP doğrudan etkileniyor. Diğer her şey hızlı olduğu için (Brotli, HTTP/2,
TTFB 0.32s, doğru cache) Core Web Vitals'ta kalan tek anlamlı kaldıraç bu.

**Çözüm.** WebP'ye çevir (~%65 tasarruf → ~800 KB), `<picture>` + `srcset` ile
mobil varyant ver. Build adımına eklenebilir.

**⏸ Ertelendi (2026-07-25) — bağımlılık kararı gerekiyor.** Bu repo bilinçli
olarak minimal-bağımlılık (yalnız Tailwind CLI + marked). WebP dönüşümü için:
- macOS yerleşik `sips` bu makinede WebP yazamıyor (test edildi, başarısız)
- `cwebp` kurulu değil
- Tek yol: `sharp` (native, ~30 MB) devDependency olarak eklemek

`.htaccess` cache tarafı **zaten hazır** (`image/webp` bir yıllık tanımlı) — yalnız
dosyaların üretilmesi ve `<picture>` etiketi kaldı. Kullanıcı `sharp` eklemeye
onay verirse: `scripts/img-webp.mjs` yazılıp build zincirine eklenir, `templates`
içindeki `<img>` → `<picture>`. Öncelik 3 olduğu için toolchain kararı beklemeye değer.

**Öncelik:** 3 — ⏸ kullanıcı onayı bekliyor.

---

## 🟡 Düşük Öncelikli

| # | Bulgu | Not |
|---|---|---|
| 7 | Kök `/` sayfası JS + `meta refresh` ile yönlendiriyor | `noindex` var, `x-default` `/en/`'i gösteriyor — zararsız. Sunucu tarafı 301 daha temiz olurdu. |
| 8 | HTML `cache-control: max-age=0`, Cloudflare `DYNAMIC` | Statik site için HTML de kenarda cache'lenebilir; TTFB 0.32s'den ~0.05s'ye iner. |
| 9 | 7 adet TR başlığı 61 karakter | Sınırda, önemsiz. |
| 10 | Cloudflare AI-bot engeli | Faz 8'de bloke olur. Kullanıcı kararıyla ertelendi. |

---

## Öncelikli Eylem Planı

**Şimdi (bu faz):**
1. GA4 + olay planı kur — ölçüm olmadan sonrası kanıtlanamaz *(`analytics`)*
2. `.htaccess` `www` kuralını düzelt — 5 dakika

**Faz 5 (içerik):**
3. 46 ters yön rota sayfasına +200-250 özgün kelime, şoför bilgisiyle
4. Şoför profilleri + "şoförün notu" blokları + görünür güncelleme tarihleri

**Faz 6 (schema):**
5. `@id`'li tam `LocalBusiness` düğümü, rota bazlı `areaServed`, `Person` author

**Faz 9 (site dışı):**
6. Google Business Profile aç → ilk 10 yorum → `aggregateRating`

**Sürekli:**
7. Görselleri WebP'ye çevir *(build adımı)*
8. Cloudflare AI-bot engelini kaldır *(Faz 8 öncesi)*
