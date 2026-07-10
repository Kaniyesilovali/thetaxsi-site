# Google Sheets entegrasyonu — kurulum (5 dakika)

Rezervasyon ve iletişim formu kayıtlarını bir Google Sheet'e düşürmek için:

## 1. Sheet'i oluştur
1. [sheets.new](https://sheets.new) adresinden yeni bir tablo aç, adını `Taxsi Rezervasyonlar` yap.
2. Sekme oluşturmana gerek yok — script ilk kayıtta **Bookings** ve **Messages** sekmelerini kendisi açar.

## 2. Apps Script'i ekle
1. Tabloda **Extensions → Apps Script** menüsünü aç.
2. Açılan editördeki her şeyi silip `sheets.gs` dosyasının içeriğini yapıştır, kaydet (⌘S).

## 3. Web App olarak yayınla
1. Sağ üstte **Deploy → New deployment**.
2. Çark simgesinden tür olarak **Web app** seç.
3. Ayarlar:
   - **Execute as:** Me (kendi hesabın)
   - **Who has access:** **Anyone** ← önemli, form buraya anonim POST atar
4. **Deploy** → izinleri onayla → çıkan **Web app URL**'ini kopyala
   (`https://script.google.com/macros/s/.../exec` biçiminde).

## 4. Siteye bağla
1. `site.config.mjs` dosyasında `sheetsEndpoint` alanına bu URL'i yapıştır.
2. `npm run build` çalıştır ve siteyi yeniden yayınla.

## Test
- Web app URL'ini tarayıcıda açtığında `Taxsi sheets endpoint OK` yazmalı.
- Sitedeki rezervasyon formunu doldurup gönder — birkaç saniye içinde **Bookings** sekmesine satır düşer.

## Notlar
- Form `no-cors` modda gönderir: tarayıcı yanıtı okuyamaz, bu yüzden kayıt düşmese bile
  kullanıcı hata görmez — WhatsApp mesajı asıl onay kanalıdır, Sheet operasyon kaydıdır.
- Script'te değişiklik yaparsan **Deploy → Manage deployments → Edit → New version**
  ile yeniden yayınlamayı unutma (URL aynı kalır).
- Bildirim istersen: Sheet'te **Tools → Notification settings → "Any changes are made"**
  diyerek her yeni kayıtta e-posta alabilirsin.
