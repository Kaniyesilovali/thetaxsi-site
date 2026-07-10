import { esc, page } from './layout.mjs'
import { config } from '../site.config.mjs'
import { posts } from '../data/posts.mjs'

const localeOf = { en: 'en-GB', tr: 'tr-TR', ru: 'ru-RU' }

export function formatDate(iso, lang) {
  return new Intl.DateTimeFormat(localeOf[lang] ?? lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T12:00:00Z`))
}

export function sortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function renderBlogIndex(ctx) {
  const { lang, xtra } = ctx
  const t = xtra.blog
  const base = `/${lang}`

  const body = `
<section class="relative bg-night py-24 text-white lg:py-32">
  <div class="grain"></div>
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
    <p class="eyebrow text-gold">${esc(t.eyebrow)}</p>
    <h1 class="mt-4 font-display text-5xl font-light italic sm:text-6xl">${esc(t.title)}</h1>
    <p class="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">${esc(t.subtitle)}</p>
  </div>
</section>
<section class="bg-cream py-20 lg:py-28">
  <div class="mx-auto max-w-3xl px-4 sm:px-6">
    <div class="flex flex-col gap-px overflow-hidden border border-ink/10 bg-ink/10">
      ${sortedPosts()
        .map(
          (p) => `
      <a href="${base}/blog/${p.slug}/" class="group flex flex-col gap-3 bg-cream p-8 transition-colors hover:bg-white">
        <p class="text-[11px] uppercase tracking-[0.2em] text-clay">${esc(formatDate(p.date, lang))}</p>
        <h2 class="font-display text-3xl font-light italic leading-snug">${esc(p.title[lang])}</h2>
        <p class="text-sm leading-relaxed text-clay">${esc(p.description[lang])}</p>
        <span class="mt-2 text-xs uppercase tracking-[0.2em] text-gold-dark opacity-70 transition-opacity group-hover:opacity-100">${esc(t.readMore)} →</span>
      </a>`,
        )
        .join('')}
    </div>
  </div>
</section>`

  return page(ctx, {
    title: `${t.title} — ${config.brand}`,
    description: t.subtitle,
    path: '/blog/',
    body,
  })
}

export function renderBlogPost(ctx, post) {
  const { lang, xtra } = ctx
  const t = xtra.blog
  const base = `/${lang}`
  const path = `/blog/${post.slug}/`
  const title = post.title[lang]
  const description = post.description[lang]
  const others = sortedPosts().filter((p) => p.slug !== post.slug).slice(0, 3)

  const body = `
<section class="relative bg-night py-24 text-white lg:py-32">
  <div class="grain"></div>
  <div class="relative mx-auto max-w-3xl px-4 sm:px-6">
    <nav class="text-[11px] uppercase tracking-[0.2em] text-white/40" aria-label="Breadcrumb">
      <a href="${base}/blog/" class="transition-colors hover:text-white">${esc(t.title)}</a>
      <span class="mx-2 text-white/25">/</span>
      <span class="text-gold">${esc(formatDate(post.date, lang))}</span>
    </nav>
    <h1 class="mt-10 font-display text-4xl font-light italic leading-tight sm:text-5xl">${esc(title)}</h1>
    <p class="mt-6 text-sm leading-relaxed text-white/60 sm:text-base">${esc(description)}</p>
  </div>
</section>
<section class="bg-cream py-20 lg:py-28">
  <article class="article-body mx-auto max-w-3xl px-4 sm:px-6">
    ${post.body[lang]}
  </article>
  <div class="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
    <div class="border-t border-ink/10 pt-10">
      <a href="${base}/book/" class="inline-flex h-13 items-center bg-gold px-10 text-xs font-medium uppercase tracking-[0.28em] text-night transition-colors hover:bg-gold-dark">${esc(t.cta)}</a>
    </div>
    ${
      others.length
        ? `
    <div class="mt-16">
      <h2 class="font-display text-3xl font-light italic">${esc(t.otherPosts)}</h2>
      <div class="mt-8 grid gap-px overflow-hidden border border-ink/10 bg-ink/10">
        ${others
          .map(
            (p) => `
        <a href="${base}/blog/${p.slug}/" class="group flex items-center justify-between gap-4 bg-cream p-5 transition-colors hover:bg-white">
          <p class="text-sm leading-snug">${esc(p.title[lang])}</p>
          <span class="whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-clay">${esc(formatDate(p.date, lang))}</span>
        </a>`,
          )
          .join('')}
      </div>
    </div>`
        : ''
    }
  </div>
</section>`

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      datePublished: post.date,
      inLanguage: lang,
      url: `${config.siteUrl}/${lang}${path}`,
      publisher: { '@type': 'LocalBusiness', name: config.brand, telephone: config.phoneHref },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.title, item: `${config.siteUrl}/${lang}/blog/` },
        { '@type': 'ListItem', position: 2, name: title, item: `${config.siteUrl}/${lang}${path}` },
      ],
    },
  ]

  return page(ctx, {
    title: `${title} — ${config.brand}`,
    description,
    path,
    body,
    jsonld,
  })
}
