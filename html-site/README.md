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
| `content/blog/` | Blog yazılarının kendisi — klasör başına bir yazı, dil başına bir `.md` |
| `data/posts.mjs` | `content/blog/` klasörünü okuyup yazı listesini üreten yükleyici |
| `scripts/content-check.mjs` | İçerik doğrulama — `npm run build` öncesi otomatik çalışır |
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

Yazılar `content/blog/` altında, klasör başına bir yazı olarak durur. Klasör adı = slug:

```
content/blog/ercan-airport-arrival-guide/
  meta.json      { "date": "2026-07-11", "order": 11 }
  en.md  tr.md  ru.md
```

Her `.md` dosyası `---` frontmatter (`title`, `description`) ile başlar, altında gövde gelir.
Gövde **Markdown**'dır (`## başlık`, `**kalın**`, `- liste`, `[metin](/tr/routes/)`) ve
gerektiğinde ham HTML de yazılabilir.

Yeni yazı eklemek için: klasörü aç, `meta.json` + üç dil dosyasını koy, `npm run build`
çalıştır. Liste sayfası, yazı sayfası, sitemap ve BlogPosting JSON-LD otomatik üretilir.
Şablon (`templates/blog.mjs`) hiç değişmez.

`meta.json` alanları: `date` (zorunlu, YYYY-AA-GG), `order` (aynı tarihli yazılar arasında
sıra — küçük olan önce), `updated` (opsiyonel, JSON-LD `dateModified`).

### İçerik kontrolü

`npm run build` önce `npm run content:check` çalıştırır; hata varsa build durur:

- eksik dil dosyası, eksik `meta.json`, boş başlık/açıklama/gövde
- slug biçimi, geçersiz veya gelecek tarih, `updated < date`
- başlık/açıklama SEO uzunlukları (~60 / ~160), aynı dilde tekrar eden başlık
- **kırık iç link** — gövdedeki her `/tr/...` yolu gerçekten üretilen bir sayfaya gitmeli
- yanlış dile link (`tr.md` içinde `/en/...`)
- `public/img` altında olmayan görsel, gövdede `<h1>` kullanımı

## Rezervasyon akışı

Form gönderildiğinde: (1) kayıt Google Sheets'e düşer (endpoint kuruluysa),
(2) rezervasyon detayları hazır yazılmış WhatsApp mesajı açılır — onay kanalı WhatsApp'tır.

## Canlıya çıkmadan önce

- [ ] `site.config.mjs` → gerçek telefon/WhatsApp numarası, domain, e-posta
- [ ] `apps-script/README-sheets.md` kurulumu → `sheetsEndpoint` doldur
- [ ] Unsplash placeholder fotoğraflarını gerçek çekimlerle değiştir (`templates/home.mjs` başı)
