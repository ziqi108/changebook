import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ink/40" />
            <span className="eyebrow text-ink/50 tracking-[0.35em]">The Journal · 雜誌</span>
          </div>

          <h1 className="display-lg mb-4">
            Contemporary readings, <span className="italic text-ink/60">ancient roots.</span>
          </h1>

          <p className="text-lg text-ink/60 leading-relaxed max-w-2xl mb-20">
            Essays, readings, and long-form articles on the I Ching. New pieces every week — never derivative, always anchored to the classical texts.
          </p>

          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {FEATURED_ARTICLES.map((article) => (
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
        className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 items-baseline transition-colors hover:bg-ink/[0.015] px-2 -mx-2"
      >
        <div className="md:col-span-2 text-[10px] tracking-[0.3em] uppercase text-vermilion">
          {article.tags[0]}
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-vermilion transition-colors">
            {article.title}
          </h2>
        </div>
        <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4 text-[10px] tracking-[0.25em] uppercase text-ink/50">
          <span>{article.date}</span>
          <span className="text-ink/20">·</span>
          <span>{article.readTime}</span>
          <span className="text-ink/30 group-hover:text-vermilion transition-colors">→</span>
        </div>
      </Link>
    </li>
  );
}
