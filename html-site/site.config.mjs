// Site geneli yapılandırma — canlıya çıkmadan önce bu dosyayı güncelle.

// Denizli Taksi'nin (Güzelyurt/Lefke bölge hattı) numaraları — sırası önemli,
// ilki birincil hat. config.regionalContact bu listeden beslenir.
const denizliPhones = [
  { display: '+90 548 861 69 39', href: '+905488616939', whatsapp: '905488616939' },
  { display: '+90 542 861 69 39', href: '+905428616939', whatsapp: '' },
  { display: '+90 533 861 69 39', href: '+905338616939', whatsapp: '' },
]

export const config = {
  // Canlı domain (hreflang, canonical, sitemap için). Sonunda / olmasın.
  siteUrl: 'https://thetaxsi.com',

  brand: 'TheTaxsi',

  // İletişim — site geneli telefon/WhatsApp hattı.
  // TODO: yeni numara belirlenince üçünü de doldur. Boş bırakıldığı sürece
  // header/footer telefon satırı, yüzen WhatsApp butonu, iletişim sayfasındaki
  // telefon+WhatsApp kalemleri ve JSON-LD telephone alanı otomatik gizlenir;
  // rezervasyon formu WhatsApp yerine yalnızca Sheets'e kayıt geçer.
  phoneDisplay: '',
  phoneHref: '',
  whatsapp: '', // wa.me formatı: ülke kodu + numara, boşluksuz, + işaretsiz
  email: 'info@thetaxsi.com',

  // Bölgesel iletişim — Lefke/Güzelyurt hattını sahada Denizli Taksi yürütür.
  // Yalnızca bu bölgeye dokunan rota sayfalarında ve bölge rehberlerinde görünür;
  // site geneli iletişim bilgisi DEĞİLDİR (header/footer/schema'ya girmez).
  regionalContact: {
    name: 'Denizli Taksi',
    // Hattın tüm numaraları. İlk kayıt BİRİNCİL: meta başlık/açıklamalardaki
    // {phone}, rota sayfasındaki tek butonlu iletişim ve llms.txt onu kullanır;
    // diğerleri bölge sayfasındaki "diğer hatlar" satırında yedek olarak listelenir.
    // `whatsapp` boş bırakılan numara yalnızca arama linki alır (WhatsApp butonu çıkmaz).
    phones: denizliPhones,
    phoneDisplay: denizliPhones[0].display,
    phoneHref: denizliPhones[0].href,
    whatsapp: denizliPhones[0].whatsapp,
    // Bu iletişimin gösterileceği rota uçları (data/routes.mjs fromValue/toValue).
    areas: ['Güzelyurt Merkez', 'Lefke Merkez'],
  },

  // Sosyal medya — TODO: gerçek hesaplarla değiştir. Boş bırakılırsa footer'da gizlenir.
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',

  // Google Apps Script Web App URL'i — apps-script/README-sheets.md'deki
  // kurulumu yaptıktan sonra buraya yapıştır. Boşsa form yalnızca WhatsApp'a yönlendirir.
  sheetsEndpoint: 'https://script.google.com/macros/s/AKfycbyi1pR50kZvzAXW0D6yzZwiGal4OBAMWvYUhYjAtDIkzzG7ENIAaFiz3f7X_IdKN4OVPQ/exec',

  // Fiyat para birimi — data/routes.mjs'teki tüm rakamlar bu birimdedir.
  currencySymbol: '£',
  currencyCode: 'GBP',

  languages: ['en', 'tr', 'ru'],
  defaultLang: 'en',
}
