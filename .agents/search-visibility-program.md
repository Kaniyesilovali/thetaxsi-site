# Arama Görünürlüğü Programı — TheTaxsi

**Rota:** retrofit (uyarlanmış — aşağıdaki Kararlar bölümüne bak)
**Başlangıç:** 2026-07-24
**Son güncelleme:** 2026-07-24
**Mevcut faz:** 1 — Teknik Teşhis + Ölçüm Kurulumu
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
| 1 | Teknik teşhis + ölçüm | seo-audit + analytics | ☐ | |
| 2 | AI görünürlük taban ölçümü | ai-seo (yalnız Adım 1) | ☐ | |
| 3a | Müşteri araştırması | customer-research | ☐ | |
| 3b | Rakip profilleri | competitor-profiling | ☐ | |
| 4 | İçerik stratejisi (boşluk analizi) | content-strategy | ☐ | |
| 5 | İçerik AEO'ya uyarlama | copy-editing + copywriting | ☐ | |
| 6 | Yapısal veri | schema | ☐ | |
| 7 | Site mimarisi | site-architecture | ☐ / n/a | yalnız yapısal sorun çıkarsa |
| 8 | AEO + GEO çekirdeği | ai-seo (tam) | ☐ | |
| 9 | Site dışı otorite | directory-submissions, public-relations, community-marketing, social | ☐ | |
| 10 | Ölçüm (raporlama) | analytics | ☐ | kurulum Faz 1'e alındı |
| 11 | Dönüşüm | cro, popups, emails | ☐ | |
| 12 | Döngüler | marketing-loops | ☐ | |

Durum: ☐ bekliyor · ▶ devam ediyor · ✅ bitti · ⏸ bloke · n/a kapsam dışı

## Mevcut Faz

**Faz:** 1 — Teknik Teşhis + Ölçüm Kurulumu
**Beceriler:** `seo-audit`, ardından `analytics`
**Çıkış kriteri:** 366 sayfalık sitenin öncelik sıralı teknik bulgu listesi
(taranabilirlik, indeksleme, hreflang, Core Web Vitals, başlık/meta, iç link,
E-E-A-T) + GA4 kurulu ve rezervasyon/WhatsApp olayları ölçülüyor.
**Bloke eden:** yok
**Sonraki adım:** `seo-audit` becerisini çalıştır; çok dilli site olduğu için
International SEO & Localization bölümü zorunlu.

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

**AI taban ölçümü sorgu seti** (Faz 0 Müşteri Dili → Faz 2)
- _henüz doldurulmadı — ~20 sorgu, 3 dilde_

**Backlink hedef sayfaları** (Faz 5 → Faz 9)
- 92 rota landing sayfası (canlı) — kalite doğrulaması Faz 1'de
- `/en/routes/` liste sayfası (canlı)

## GEO Taban Ölçümü (Faz 2)

Kayıt tarihi: _henüz alınmadı_

| Sorgu | ChatGPT | Perplexity | Google AI | Claude | Onun yerine kim alıntılanıyor |
|---|---|---|---|---|---|
| | | | | | |

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
