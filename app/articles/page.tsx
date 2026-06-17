import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { FEATURED_ARTICLES, Article } from '@/lib/data';

const SITE_URL = 'https://ichingmaster.com';

export const metadata: Metadata = {
  title: 'The Journal — I Ching Articles & Readings',
  description:
    'Contemporary articles on the I Ching, Chinese philosophy, daily practice, hexagram readings, and interviews with master teachers. New essays every week.',
  keywords: [
    'I Ching articles',
    'Book of Changes journal',
    'hexagram readings',
    'Chinese philosophy blog',
    'I Ching practice',
  ],
  alternates: { canonical: `${SITE_URL}/articles` },
  openGraph: {
    type: 'website',
    title: 'The Journal — I Ching Articles & Readings',
    description:
      'Contemporary articles on the I Ching, Chinese philosophy, and daily practice. New essays every week.',
    url: `${SITE_URL}/articles`,
    siteName: 'I Ching Master',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Journal — I Ching Articles & Readings',
    description:
      'Contemporary articles on the I Ching, Chinese philosophy, and daily practice.',
  },
};

const ALL_TAGS = Array.from(new Set(FEATURED_ARTICLES.flatMap((a) => a.tags)));

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': `${SITE_URL}/articles#blog`,
      name: 'The Journal',
      description:
        'Contemporary articles on the I Ching, Chinese philosophy, daily practice, and hexagram readings.',
      url: `${SITE_URL}/articles`,
      blogPost: FEATURED_ARTICLES.map((a) => ({
        '@type': 'BlogPosting',
        headline: a.title,
        url: `${SITE_URL}/articles/${a.slug}`,
        datePublished: a.date,
        author: { '@type': 'Person', name: a.author },
        keywords: a.tags.join(', '),
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'The Journal', item: `${SITE_URL}/articles` },
      ],
    },
  ],
};

export default function ArticlesListPage() {
  const featured = FEATURED_ARTICLES[0];
  const rest = FEATURED_ARTICLES.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-28 pb-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">

          {/* Back navigation */}
          <div className="mb-10">
            <BackToHome />
          </div>

          {/* Page header */}
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-ink/35" />
            <span className="eyebrow text-ink/45 tracking-[0.38em]">The Journal · 雜誌</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-6">
            <h1 className="display-lg">
              Contemporary readings,{' '}
              <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
                ancient roots.
              </span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-ink/50 leading-relaxed max-w-2xl mb-16">
            Essays, readings, and long-form articles on the I Ching. New pieces every
            week — never derivative, always anchored to the classical texts.
          </p>

          {/* Tag filter strip */}
          <div className="flex flex-wrap gap-2 mb-16">
            <span className="text-[10px] tracking-[0.25em] uppercase px-3.5 py-1.5 bg-ink text-paper rounded-full">
              All
            </span>
            {ALL_TAGS.slice(0, 8).map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.25em] uppercase px-3.5 py-1.5 bg-ink/5 text-ink/50 rounded-full hover:bg-ink/10 hover:text-ink transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Featured article hero */}
          {featured && (
            <Link
              href={`/articles/${featured.slug}`}
              className="group block mb-5 border border-ink/8 rounded-2xl overflow-hidden card-surface hover:border-ink/20"
            >
              <div className="flex flex-col md:flex-row">
                <div
                  className={`w-full md:w-56 h-52 md:h-auto bg-gradient-to-br ${featured.coverGradient} flex items-center justify-center flex-shrink-0`}
                >
                  <span
                    className="font-display text-6xl text-paper/30 select-none"
                    style={{ fontFamily: "'Noto Serif SC', serif" }}
                  >
                    易
                  </span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-between gap-6 flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-vermilion">
                        {featured.tags[0]}
                      </span>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-ink/25 bg-ink/5 px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl leading-tight mb-3 group-hover:text-vermilion transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-ink/50 leading-relaxed line-clamp-2">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-ink text-paper flex items-center justify-center text-[10px] font-bold">
                        {featured.authorInitials}
                      </div>
                      <span className="text-xs text-ink/45">{featured.author}</span>
                    </div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-ink/35">
                      {featured.date} · {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* All articles list */}
          <ul className="divide-y divide-ink/8 border-t border-ink/8 mt-10">
            {rest.map((article) => (
              <ArticleRow key={article.slug} article={article} />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <li>
      <Link
        href={`/articles/${article.slug}`}
        className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 items-baseline transition-colors hover:bg-ink/[0.012] px-2 -mx-2 rounded-xl"
      >
        <div className="md:col-span-2 text-[10px] tracking-[0.3em] uppercase text-vermilion">
          {article.tags[0]}
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-2xl md:text-[1.7rem] leading-tight group-hover:text-vermilion transition-colors duration-300">
            {article.title}
          </h2>
        </div>
        <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4 text-[10px] tracking-[0.25em] uppercase text-ink/35">
          <span>{article.date}</span>
          <span className="text-ink/15">·</span>
          <span>{article.readTime}</span>
          <span className="text-ink/25 group-hover:text-vermilion transition-colors">→</span>
        </div>
      </Link>
    </li>
  );
}
