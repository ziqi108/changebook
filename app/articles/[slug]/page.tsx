import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FEATURED_ARTICLES } from '@/lib/data';

const SITE_URL = 'https://ichingmaster.com';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return FEATURED_ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = FEATURED_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title}`,
    description: article.excerpt,
    keywords: article.tags,
    alternates: { canonical: `${SITE_URL}/articles/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/articles/${article.slug}`,
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = FEATURED_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${SITE_URL}/articles/${article.slug}#post`,
        headline: article.title,
        description: article.excerpt,
        image: `${SITE_URL}/og-article.png`,
        datePublished: article.date,
        dateModified: article.date,
        author: {
          '@type': 'Person',
          name: article.author,
          url: `${SITE_URL}/about`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'I Ching Master',
          url: SITE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/articles/${article.slug}`,
        },
        keywords: article.tags.join(', '),
        inLanguage: 'en-US',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-[10px] tracking-[0.35em] uppercase text-vermilion mb-4">
            {article.tags[0]}
          </div>

          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg text-ink/60 italic leading-relaxed mb-8">
            {article.subtitle}
          </p>

          <div className="flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-ink/50 pb-8 border-b border-ink/10">
            <span>{article.author}</span>
            <span className="text-ink/20">·</span>
            <span>{article.date}</span>
            <span className="text-ink/20">·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="prose prose-neutral max-w-none mt-12 text-ink/80 leading-relaxed space-y-6">
            <p className="text-lg leading-relaxed">{article.excerpt}</p>
            <p className="leading-relaxed text-base">
              The I Ching speaks not in dogma but in living metaphor. Every line,
              every hexagram, offers a mirror for the reader's own inner process —
              inviting us to see ourselves more clearly, and to act in harmony
              with the currents around us.
            </p>
            <p className="leading-relaxed text-base">
              In this article, we explore the deeper dimensions of {article.tags[0].toLowerCase()} through the lens of the I Ching's 3,000-year-old wisdom tradition. Drawing on classical commentaries and contemporary lived practice, we will see how the ancient text remains remarkably alive for the modern reader.
            </p>
            <blockquote className="border-l-2 border-vermilion pl-6 py-2 my-8 text-xl italic font-display text-ink/80">
              "The I Ching is not a book to be read, but a practice to be entered."
            </blockquote>
            <p className="leading-relaxed text-base">
              Whether you are a newcomer encountering the Book of Changes for the first time, or a seasoned student returning to its wellsprings, the reflections that follow are written for you. May they offer a doorway, a path, and ultimately a mirror.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-ink/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-1">Written by</div>
              <div className="font-display text-lg">{article.author}</div>
            </div>
            <Link
              href="/articles"
              className="text-xs tracking-[0.3em] uppercase text-ink/50 hover:text-ink transition-colors"
            >
              ← All Articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
