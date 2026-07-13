// Site geneli yapılandırma — canlıya çıkmadan önce bu dosyayı güncelle.
export const config = {
  // Canlı domain (hreflang, canonical, sitemap için). Sonunda / olmasın.
  siteUrl: 'https://taxsi.cy',

  brand: 'TheTaxsi',

  // İletişim — TODO: gerçek numarayla değiştir
  phoneDisplay: '+357 99 000 000',
  phoneHref: '+35799000000',
  whatsapp: '35799000000', // wa.me formatı: ülke kodu + numara, boşluksuz, + işaretsiz
  email: 'concierge@taxsi.cy',

  // Sosyal medya — TODO: gerçek hesaplarla değiştir. Boş bırakılırsa footer'da gizlenir.
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',

  // Google Apps Script Web App URL'i — apps-script/README-sheets.md'deki
  // kurulumu yaptıktan sonra buraya yapıştır. Boşsa form yalnızca WhatsApp'a yönlendirir.
  sheetsEndpoint: '',

  languages: ['en', 'tr', 'ru'],
  defaultLang: 'en',
}
