import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
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
    title: article.title,
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

  const related = FEATURED_ARTICLES.filter(
    (a) => a.slug !== article.slug && a.tags.some((t) => article.tags.includes(t))
  ).slice(0, 3);

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
        author: { '@type': 'Person', name: article.author, url: `${SITE_URL}/about` },
        publisher: { '@type': 'Organization', name: 'I Ching Master', url: SITE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/articles/${article.slug}` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
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
                    Master Teacher
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
              <em>{article.tags[0].toLowerCase()}</em> through the lens of the I Ching&apos;s
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
                Master Teacher · ChangeBook
              </div>
              <p className="text-sm text-ink/55 leading-relaxed">
                A lineage-holding teacher of the I Ching with over two decades of
                practice, {article.author} teaches the classical tradition with
                clarity and depth.
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
                <span className="eyebrow text-ink/40 tracking-[0.38em]">Continue Reading</span>
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
