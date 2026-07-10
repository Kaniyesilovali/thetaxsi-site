# Taxsi — Statik Site

Next.js tanıtım sitesinin statik HTML + Tailwind CSS sürümü. Sunucu gerektirmez;
herhangi bir statik hostinge (Cloudflare Pages, Netlify, cPanel…) yüklenebilir.

## Komutlar

```bash
npm install        # ilk kurulum (yalnızca Tailwind CLI)
npm run build      # dist/ klasörüne siteyi üretir
npm run serve      # dist/ klasörünü localhost:8080'de sunar
npm run dev        # build + serve
```

## Yapı

| Yol | Ne işe yarar |
|---|---|
| `site.config.mjs` | Domain, telefon, WhatsApp, e-posta, Sheets endpoint — **canlıya çıkmadan güncelle** |
| `data/routes.mjs` | Rota verisi — yeni rota eklemek = yeni SEO landing page |
| `data/posts.mjs` | Blog yazıları — yeni yazı eklemek = yeni blog sayfası (3 dilde) |
| `data/dictionaries/` | 3 dilin metinleri (frontend'den kopyalandı) |
| `data/extra.mjs` | Statik siteye özgü ek metinler (form, rota sayfaları) |
| `templates/` | Sayfa şablonları (JS template literal) |
| `public/js/main.js` | Menü + form etkileşimi (build'de config değerleri gömülür) |
| `apps-script/` | Google Sheets entegrasyonu — bkz. `README-sheets.md` |
| `dist/` | Üretilen site (git'e girmez) |

## Üretilen sayfalar

Her dil (en/tr/ru) için: ana sayfa, rezervasyon, rota listesi, 6 rota landing page'i,
blog listesi + blog yazıları, hakkımızda, iletişim, SSS, gizlilik, şartlar + 404.
Ayrıca kök yönlendirme, `sitemap.xml` (hreflang'li) ve `robots.txt`.

## Blog

Yazılar `data/posts.mjs` içinde tutulur: her kayıt tek `slug` + `date` ve üç dilde
`title` / `description` / `body` (HTML) içerir. Yeni yazı eklemek için diziye kayıt
ekleyip `npm run build` çalıştırman yeterli — liste sayfası, yazı sayfası, sitemap
ve BlogPosting JSON-LD otomatik üretilir. Frontend'deki MDX yazı
(`cyprus-airport-transfer-guide`) buraya taşındı.

## Rezervasyon akışı

Form gönderildiğinde: (1) kayıt Google Sheets'e düşer (endpoint kuruluysa),
(2) rezervasyon detayları hazır yazılmış WhatsApp mesajı açılır — onay kanalı WhatsApp'tır.

## Canlıya çıkmadan önce

- [ ] `site.config.mjs` → gerçek telefon/WhatsApp numarası, domain, e-posta
- [ ] `apps-script/README-sheets.md` kurulumu → `sheetsEndpoint` doldur
- [ ] Unsplash placeholder fotoğraflarını gerçek çekimlerle değiştir (`templates/home.mjs` başı)
