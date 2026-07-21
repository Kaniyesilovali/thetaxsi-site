# thetaxsi-site

Taksi — TheTaxsi'nin (thetaxsi.com) statik web sitesi.

## Yapı

| Klasör | Ne var |
|---|---|
| `html-site/` | **Canlıya çıkan site.** Kendi build script'i olan statik jeneratör (HTML + Tailwind). EN/TR/RU, 110 sayfa. |
| `frontend/` | Ayrı bir Next.js projesi — kendi repo'sunda tutulur (`Kaniyesilovali/taxi`), bu repo'ya dahil değil. |

## Geliştirme

```bash
cd html-site
npm install
npm run dev      # build + http://localhost:8080
```

> `node build.mjs` komutunu tek başına çalıştırma — `dist/` klasörünü siler ama CSS'i üretmez,
> site stilsiz kalır. Her zaman `npm run build` kullan.

## Deploy

`main` branch'ine push → GitHub Actions otomatik olarak build alır ve `html-site/dist/`
içeriğini FTPS ile sunucudaki `/public_html` klasörüne senkronlar.
Sadece `html-site/**` altında değişiklik olduğunda tetiklenir.

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

Gereken repo secret'ları: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

Actions sekmesinden **Run workflow** ile elle de tetiklenebilir.

### FTP olmadan (yedek yöntem)

```bash
cd html-site
npm run deploy   # ../public_html hazırlar, FileZilla ile elle yüklenir
```

## Form kayıtları

Rezervasyon ve iletişim formları WhatsApp'a yönlendirir; aynı anda kayıt bir Google
Sheet'e düşer (Apps Script web app). Kurulum: [`html-site/apps-script/README-sheets.md`](html-site/apps-script/README-sheets.md)
