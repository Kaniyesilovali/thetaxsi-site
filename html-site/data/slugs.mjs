// Dile göre adresler — Türkçe sayfalar Türkçe, Rusça sayfalar Rusça URL'den
// yayınlanır. İngilizce (varsayılan dil) adresler olduğu gibi kalır.
//
// Şablonlar ve build her yerde "canonical" (İngilizce) yolu taşır:
//     /routes/ercan-airport-to-kyrenia/
// Adres basılırken href(lang, path) bunu hedef dile çevirir:
//     /tr/guzergahlar/ercan-havalimani-girne-transfer/
//     /ru/marshruty/transfer-aeroport-erdzhan-kireniya/
// Böylece dil değiştirici, hreflang, canonical, sitemap ve iç linkler tek bir
// yol tanımından beslenir; yeni dil eklemek tabloya bir sütun eklemek demektir.
import { config } from '../site.config.mjs'
import { allRoutes } from './routes.mjs'
import { posts } from './posts.mjs'

// Yolun ilk parçası (bölüm adı). Anahtar = canonical/İngilizce parça.
export const segments = {
  book: { en: 'book', tr: 'rezervasyon', ru: 'bronirovanie' },
  routes: { en: 'routes', tr: 'guzergahlar', ru: 'marshruty' },
  blog: { en: 'blog', tr: 'blog', ru: 'blog' },
  about: { en: 'about', tr: 'hakkimizda', ru: 'o-nas' },
  contact: { en: 'contact', tr: 'iletisim', ru: 'kontakty' },
  faq: { en: 'faq', tr: 'sss', ru: 'voprosy-i-otvety' },
  privacy: { en: 'privacy', tr: 'gizlilik-politikasi', ru: 'politika-konfidentsialnosti' },
  terms: { en: 'terms', tr: 'kullanim-kosullari', ru: 'usloviya-ispolzovaniya' },
}

// Rota sluglarındaki yer adları — anahtar, locations.mjs'teki dilden bağımsız
// `value` (routes.mjs'teki fromValue/toValue ile birebir aynı).
const places = {
  'Ercan Havalimanı': { en: 'ercan-airport', tr: 'ercan-havalimani', ru: 'aeroport-erdzhan' },
  'Larnaka Havalimanı': { en: 'larnaca-airport', tr: 'larnaka-havalimani', ru: 'aeroport-larnaka' },
  'Baf Havalimanı': { en: 'paphos-airport', tr: 'baf-havalimani', ru: 'aeroport-pafos' },
  'Lefkoşa Merkez': { en: 'nicosia', tr: 'lefkosa', ru: 'nikosiya' },
  'Girne Merkez': { en: 'kyrenia', tr: 'girne', ru: 'kireniya' },
  'Girne Oteller Bölgesi': { en: 'kyrenia-hotels', tr: 'girne-otelleri', ru: 'oteli-kirenii' },
  'Gazimağusa Merkez': { en: 'famagusta', tr: 'gazimagusa', ru: 'famagusta' },
  'İskele Long Beach': { en: 'iskele-long-beach', tr: 'iskele-long-beach', ru: 'iskele-long-bich' },
  'Bafra Oteller Bölgesi': { en: 'bafra-hotels', tr: 'bafra-otelleri', ru: 'oteli-bafry' },
  'Güzelyurt Merkez': { en: 'guzelyurt', tr: 'guzelyurt', ru: 'gyuzelyurt' },
  'Limasol Merkez': { en: 'limassol', tr: 'limasol', ru: 'limassol' },
  'Çatalköy Oteller Bölgesi': {
    en: 'catalkoy-hotels',
    tr: 'catalkoy-otelleri',
    ru: 'oteli-chatalkoya',
  },
  'Alsancak Oteller Bölgesi': {
    en: 'alsancak-hotels',
    tr: 'alsancak-otelleri',
    ru: 'oteli-alsandzhaka',
  },
  'Esentepe Oteller Bölgesi': {
    en: 'esentepe-hotels',
    tr: 'esentepe-otelleri',
    ru: 'oteli-esentepe',
  },
  'Karpaz Otelleri': { en: 'karpaz-hotels', tr: 'karpaz-otelleri', ru: 'oteli-karpaza' },
  'Lapta Merkez': { en: 'lapta', tr: 'lapta', ru: 'lapta' },
  'Karşıyaka Merkez': { en: 'karsiyaka', tr: 'karsiyaka', ru: 'karshiyaka' },
  'Boğaz Merkez': { en: 'bogaz', tr: 'bogaz', ru: 'bogaz' },
  'Lefke Merkez': { en: 'lefke', tr: 'lefke', ru: 'lefke' },
}

// Slug kalıbı dile göre değişir; her dilde o dilde aranan sözcük sırası kullanılır.
//   tr: "ercan-havalimani-girne-transfer"      (arama: "ercan havalimanı girne transfer")
//   ru: "transfer-aeroport-erdzhan-kireniya"   (arama: "трансфер аэропорт Эрджан Кирения")
//   en: "ercan-airport-to-kyrenia"             (routes.mjs'teki slug ile aynı olmalı)
function buildRouteSlug(route, lang) {
  const a = places[route.fromValue]?.[lang]
  const b = places[route.toValue]?.[lang]
  if (!a || !b) {
    throw new Error(
      `data/slugs.mjs: "${route.fromValue}" veya "${route.toValue}" için ${lang} slug parçası tanımlı değil (places tablosuna ekle)`,
    )
  }
  if (lang === 'tr') return `${a}-${b}-transfer`
  if (lang === 'ru') return `transfer-${a}-${b}`
  return `${a}-to-${b}`
}

// canonical slug → { en, tr, ru }
const routeSlugs = new Map()
for (const route of allRoutes) {
  const byLang = {}
  for (const lang of config.languages) byLang[lang] = buildRouteSlug(route, lang)
  // Güvenlik ağı: places tablosundaki bir yazım hatası İngilizce adresleri
  // sessizce değiştirmesin — canlıdaki EN URL'leri sabit kalmalı.
  if (byLang[config.defaultLang] !== route.slug) {
    throw new Error(
      `data/slugs.mjs: places tablosundan türeyen İngilizce slug "${byLang[config.defaultLang]}", routes.mjs'teki "${route.slug}" ile uyuşmuyor`,
    )
  }
  routeSlugs.set(route.slug, byLang)
}

// canonical slug → { en, tr, ru }; tr/ru content/blog/<slug>/meta.json içindeki `slugs`ten gelir.
const postSlugs = new Map()
for (const post of posts) {
  const byLang = { [config.defaultLang]: post.slug }
  for (const lang of config.languages) {
    if (lang === config.defaultLang) continue
    const slug = post.slugs?.[lang]
    if (!slug) {
      throw new Error(`content/blog/${post.slug}/meta.json: slugs.${lang} eksik`)
    }
    byLang[lang] = slug
  }
  postSlugs.set(post.slug, byLang)
}

// Aynı dilde iki sayfa aynı slug'a düşerse biri diğerinin üstüne yazılır — build'i durdur.
for (const [what, table] of [
  ['rota', routeSlugs],
  ['blog yazısı', postSlugs],
]) {
  for (const lang of config.languages) {
    const seen = new Map()
    for (const [canonical, byLang] of table) {
      const slug = byLang[lang]
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
        throw new Error(`data/slugs.mjs: ${what} slug'ı "${slug}" (${lang}) yalnızca küçük harf, rakam ve tire içermeli`)
      }
      if (seen.has(slug)) {
        throw new Error(`data/slugs.mjs: ${lang} dilinde "${slug}" slug'ı iki ${what}nda kullanılıyor — ${seen.get(slug)} ve ${canonical}`)
      }
      seen.set(slug, canonical)
    }
  }
}

/** Canonical yolu (/routes/x/) hedef dilin yoluna çevirir — dil ön eki EKLEMEDEN. */
export function localizePath(path, lang) {
  if (lang === config.defaultLang) return path
  const [clean, suffix = ''] = splitSuffix(path)
  // Sayfa yolları hep / ile biter; /404.html gibi dosya adresleri dile göre değişmez.
  if (!clean.endsWith('/')) return path
  const parts = clean.split('/').filter(Boolean)
  if (parts.length === 0) return `/${suffix}`

  const [section, slug] = parts
  const head = segments[section]?.[lang]
  if (!head) throw new Error(`data/slugs.mjs: "${section}" bölümü için ${lang} karşılığı yok (segments tablosuna ekle)`)
  if (!slug) return `/${head}/${suffix}`

  const table = section === 'routes' ? routeSlugs : section === 'blog' ? postSlugs : null
  const tail = table?.get(slug)?.[lang]
  if (!tail) throw new Error(`data/slugs.mjs: "${clean}" için ${lang} slug'ı bulunamadı`)
  return `/${head}/${tail}/${suffix}`
}

/** Sitede kullanılacak tam adres: dil ön eki + yerelleştirilmiş yol. */
export function href(lang, path) {
  return `/${lang}${localizePath(path, lang)}`
}

// Yoldaki ?query / #hash kısmını ayırır ki slug eşlemesi bozulmasın.
function splitSuffix(path) {
  const i = path.search(/[?#]/)
  return i === -1 ? [path, ''] : [path.slice(0, i), path.slice(i)]
}

// Blog gövdelerindeki iç linkler İngilizce sluglarla yazılır (ör. tr.md içinde
// /tr/routes/ercan-airport-to-kyrenia/). Yayından önce hedef dilin adresine çevrilir,
// böylece içerik dosyalarında slug tekrarlamak gerekmez.
export function localizeHtmlLinks(html, lang) {
  if (lang === config.defaultLang) return html
  const langPattern = config.languages.join('|')
  return html.replace(
    new RegExp(`href="/(${langPattern})(/[^"]*)"`, 'g'),
    (match, linkLang, rest) => `href="${href(linkLang, rest)}"`,
  )
}

/** Eski (İngilizce sluglı) tr/ru adresleri → yeni adresler. .htaccess 301'leri için. */
export function renamedPaths(paths) {
  const pairs = []
  for (const lang of config.languages) {
    if (lang === config.defaultLang) continue
    for (const path of paths) {
      const to = href(lang, path)
      const from = `/${lang}${path}`
      if (from !== to) pairs.push({ from, to })
    }
  }
  return pairs
}
