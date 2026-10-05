import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { FEATURED_ARTICLES, GET_TRANSLATION } from '@/lib/data';
import { buildAlternates } from '@/lib/i18n';

const SITE_URL = 'https://www.yiwisdom.org';

/**
 * Per-article SERP overrides: display titles/excerpts stay untouched in the UI;
 * these only tighten <title>/meta description for Google's length limits.
 */
const SEO_META: Record<string, { title?: string; description: string }> = {
  'career-cycles-hexagram-24': {
    description:
      'Hexagram 24 (The Return) describes the smallest return — a single light emerging from darkness. How career rock-bottoms can begin a more authentic path.',
  },
  'synchronicity-and-the-i-ching': {
    title: "Synchronicity and the I Ching: Jung's Connection",
    description:
      'Long before the Red Book was published, Carl Jung consulted the I Ching daily — and it shaped his ideas of synchronicity and the collective unconscious.',
  },
  'reading-hexagrams-for-creatives': {
    title: 'Reading Hexagrams for Creatives: A Practical Guide',
    description:
      'For artists, writers, and musicians, the I Ching is a mirror for the creative process itself — plus a casting ritual for working through creative blocks.',
  },
  'i-ching-and-stoicism-two-maps': {
    description:
      'Stoicism and the I Ching share one insight: we cannot control events, only our response. A comparative reading of Marcus Aurelius and the Book of Changes.',
  },
  'hexagram-64-beauty-of-the-unfinished': {
    description:
      'Hexagram 64, Wèi Jì (Before Completion), ends the Book of Changes on the brink of becoming — a meditation on why the unfinished is not failure.',
  },
};

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return FEATURED_ARTICLES.filter((a) => a.locale === 'en').map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = FEATURED_ARTICLES.find((a) => a.slug === params.slug && a.locale === 'en');
  if (!article) return {};
  /**
   * 守卫式 hreflang：仅当存在另一语言的已发布对应文章（translationKey 相同）时
   * 才输出双向 hreflang；否则只输出英文自引用 canonical，绝不指向 404/noindex。
   */
  const zhCounterpart = GET_TRANSLATION(article, 'zh-CN');
  const seoTitle = SEO_META[article.slug]?.title ?? article.title;
  const seoDescription = SEO_META[article.slug]?.description ?? article.excerpt;
  return {
    title: seoTitle,
    description: seoDescription,
    keywords: article.tags,
    alternates: buildAlternates(
      `/articles/${article.slug}`,
      'en',
      zhCounterpart ? `/zh/articles/${zhCounterpart.slug}` : null
    ),
    openGraph: {
      type: 'article',
      title: seoTitle,
      description: seoDescription,
      url: `${SITE_URL}/articles/${article.slug}`,
      publishedTime: article.dateIso,
      authors: [article.author],
      tags: article.tags,
      locale: 'en_US',
      images: [
        {
          url: '/og-article.png',
          width: 1200,
          height: 675,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: ['/og-article.png'],
    },
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = FEATURED_ARTICLES.find((a) => a.slug === params.slug && a.locale === 'en');
  if (!article) notFound();

  // 语言切换器按 translationKey 查找中文对应文章；不存在则不显示中文链接
  const zhCounterpart = GET_TRANSLATION(article, 'zh-CN');

  const related = FEATURED_ARTICLES.filter(
    (a) =>
      a.locale === 'en' &&
      a.slug !== article.slug &&
      a.tags.some((t) => article.tags.includes(t))
  ).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${SITE_URL}/articles/${article.slug}#post`,
        headline: article.title,
        description: SEO_META[article.slug]?.description ?? article.excerpt,
        image: `${SITE_URL}/og-article.png`,
        datePublished: article.dateIso,
        dateModified: article.dateIso,
        author: { '@type': 'Person', name: article.author, url: `${SITE_URL}/about` },
        publisher: { '@type': 'Organization', name: 'Yi Wisdom', url: SITE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/articles/${article.slug}` },
        keywords: article.tags.join(', '),
        inLanguage: 'en',
        wordCount: 800,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'The Journal', item: `${SITE_URL}/articles` },
          { '@type': 'ListItem', position: 3, name: article.title },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header
        counterpartOverride={
          zhCounterpart ? `/zh/articles/${zhCounterpart.slug}` : undefined
        }
      />
      <main className="pt-28 pb-28">
        <div className="max-w-[780px] mx-auto px-6 md:px-10">

          {/* Breadcrumb nav */}
          <div className="flex items-center gap-3 mb-12 text-[10px] tracking-[0.3em] uppercase text-ink/35">
            <BackToHome label="Home" href="/" />
            <span className="text-ink/20">·</span>
            <Link href="/articles" className="hover:text-ink transition-colors">Journal</Link>
            <span className="text-ink/20">·</span>
            <span className="text-ink/50 truncate max-w-[180px]">{article.tags[0]}</span>
          </div>

          {/* Article header */}
          <header className="mb-12">
            <div className="text-[10px] tracking-[0.4em] uppercase text-vermilion mb-5">
              {article.tags[0]}
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight mb-6 text-ink">
              {article.title}
            </h1>

            <p className="text-xl text-ink/55 italic leading-relaxed font-display mb-8">
              {article.subtitle}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-y border-ink/8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center text-xs font-bold">
                  {article.authorInitials}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">{article.author}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-ink/40">
                    Writer
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-ink/40">
                <span>{article.date}</span>
                <span className="text-ink/15">·</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article body */}
          <div className="space-y-7 text-ink/80">
            <p className="text-xl leading-relaxed font-light text-ink/85">
              {article.excerpt}
            </p>

            {article.body ? (
              article.body.map((block, i) =>
                block.type === 'quote' ? (
                  <blockquote key={i} className="border-l-2 border-vermilion pl-8 py-3 my-10">
                    <p className="font-display text-2xl italic leading-relaxed text-ink/75">
                      {block.text}
                    </p>
                  </blockquote>
                ) : (
                  <p key={i} className="text-base leading-[1.85]">
                    {block.text}
                  </p>
                )
              )
            ) : (
              <>
                <p className="text-base leading-[1.85]">
                  The I Ching speaks not in dogma but in living metaphor. Every line, every hexagram,
                  offers a mirror for the reader&apos;s own inner process — inviting us to see ourselves
                  more clearly, and to act in harmony with the currents around us.
                </p>

                <blockquote className="border-l-2 border-vermilion pl-8 py-3 my-10">
                  <p className="font-display text-2xl italic leading-relaxed text-ink/75">
                    &ldquo;The I Ching is not a book to be read, but a practice to be entered.&rdquo;
                  </p>
                </blockquote>

                <p className="text-base leading-[1.85]">
                  In this article, we explore the deeper dimensions of{' '}
                  {article.tags[0] ? <em>{article.tags[0].toLowerCase()}</em> : 'change'}{' '}
                  through the lens of the I Ching&apos;s
                  3,000-year-old wisdom tradition. Drawing on classical commentaries and
                  contemporary lived practice, we see how the ancient text remains remarkably
                  alive for the modern reader.
                </p>

                <p className="text-base leading-[1.85]">
                  Each hexagram is not merely a symbol — it is an event, a moment in the
                  eternal cycle of change that the ancient Chinese sages mapped so precisely.
                  When we cast the yarrow stalks or toss the coins, we are not invoking
                  superstition; we are invoking attentiveness. We are asking: what is
                  the shape of this moment?
                </p>

                <p className="text-base leading-[1.85]">
                  Whether you are a newcomer encountering the Book of Changes for the
                  first time, or a seasoned student returning to its wellsprings, the
                  reflections that follow are written for you. May they offer a doorway,
                  a path, and ultimately a mirror.
                </p>
              </>
            )}
          </div>

          {/* Tags */}
          <div className="mt-14 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 bg-ink/5 text-ink/55 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author card */}
          <div className="mt-14 p-8 border border-ink/8 rounded-2xl bg-ink/[0.012] flex gap-6">
            <div className="w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center text-xl font-bold font-display flex-shrink-0">
              {article.authorInitials}
            </div>
            <div>
              <div className="font-display text-xl mb-1">{article.author}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-vermilion mb-3">
                Writer · Yi Wisdom
              </div>
              <p className="text-sm text-ink/55 leading-relaxed">
                {article.author} writes on the I Ching and the classical Chinese
                tradition, offering reflections rather than predictions.
              </p>
            </div>
          </div>

          {/* Navigation footer */}
          <div className="mt-14 pt-10 border-t border-ink/8 flex items-center justify-between gap-6 flex-wrap">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink transition-colors group"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
              All Articles
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-ink/8">
            <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-16">
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-10 bg-ink/30" />
                <h2 className="eyebrow text-ink/40 tracking-[0.38em]">Continue Reading</h2>
              </div>
              <ul className="divide-y divide-ink/8">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/articles/${a.slug}`}
                      className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 items-baseline hover:bg-ink/[0.012] px-2 -mx-2 rounded-xl transition-colors"
                    >
                      <div className="md:col-span-2 text-[10px] tracking-[0.3em] uppercase text-vermilion">
                        {a.tags[0]}
                      </div>
                      <div className="md:col-span-7">
                        <h3 className="font-display text-2xl leading-tight group-hover:text-vermilion transition-colors duration-300">
                          {a.title}
                        </h3>
                      </div>
                      <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3 text-[10px] tracking-[0.2em] uppercase text-ink/35">
                        <span>{a.readTime}</span>
                        <span className="group-hover:text-vermilion transition-colors">→</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
