// Merkezi yapısal veri (JSON-LD) — tek kaynak.
//
// Neden burada: eskiden her şablon (home/routes/blog) kendi "LocalBusiness"ını
// ayrı ayrı, sadece isim+telefonla basıyordu. Sonuç: 342 sayfada 342 kopuk
// işletme bildirimi. Google bunların AYNI işletme olduğunu anlayamıyordu.
//
// Çözüm: tek bir `@id`'li işletme düğümü (`businessNode`) her sayfaya bir kez
// basılır; tüm şablonlar provider/publisher alanında ona `businessRef` ile
// referans verir. Böylece Google 366 sayfadaki bildirimleri tek varlıkta
// birleştirir (entity consolidation).
//
// KURAL: buraya yalnızca DOĞRULANABİLİR veri girer. Uydurma adres, koordinat
// veya sahte sosyal hesap YOK — yanlış yapısal veri hem güveni hem sıralamayı
// düşürür. sameAs yalnızca site.config'teki hesaplar gerçek doldurulunca eklenir.

import { config } from '../site.config.mjs'

// Kararlı kimlik — domain'e sabitli, dile bağlı değil. Tüm referanslar buna gider.
export const businessId = `${config.siteUrl}/#business`

// Placeholder sosyal hesapları schema'ya sokma: yalnızca kök alan adından
// (instagram.com/) daha derin, gerçek bir profil yolu olanları al.
function realSocials() {
  return [config.instagram, config.facebook]
    .filter((u) => typeof u === 'string' && /^https?:\/\/[^/]+\/.+/.test(u.trim()))
}

// Merkezi işletme düğümü. Her sayfada bir kez basılır (layout.page üzerinden).
export function businessNode(lang = config.defaultLang) {
  const socials = realSocials()
  const node = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: config.brand,
    url: `${config.siteUrl}/${lang}/`,
    telephone: config.phoneHref,
    email: config.email,
    priceRange: '£45–£300',
    image: `${config.siteUrl}/assets/img/og.jpg`,
    logo: `${config.siteUrl}/assets/img/og.jpg`,
    // Konumlandırma: Kuzey ana hizmet alanı; Larnaka/Baf ise güneyden geliş
    // (sınır geçişli) kalkış noktaları. Güney Kıbrıs içi transfer iddiası yok.
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Northern Cyprus' },
      { '@type': 'City', name: 'Larnaca' },
      { '@type': 'City', name: 'Paphos' },
    ],
    address: { '@type': 'PostalAddress', addressCountry: 'CY' },
    // Footer'da beyan edilen "24/7 çok dilli dispatch" — gerçek çalışma saati.
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    // availableLanguage doğrudan LocalBusiness'te GEÇERSİZ — schema.org'da yalnızca
    // ContactPoint / Course / LodgingBusiness / ServiceChannel / TouristAttraction
    // alanlarında tanımlı. Doğru yeri, işletmenin iletişim noktası düğümü.
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: config.phoneHref,
      email: config.email,
      availableLanguage: [
        { '@type': 'Language', name: 'English' },
        { '@type': 'Language', name: 'Turkish' },
        { '@type': 'Language', name: 'Russian' },
      ],
    },
  }
  if (socials.length) node.sameAs = socials
  return node
}

// Şablonların provider/publisher alanında kullanacağı hafif referans.
export const businessRef = { '@id': businessId }
