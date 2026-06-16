'use client';

import Link from 'next/link';
import { FEATURED_ARTICLES } from '@/lib/data';

export function FeaturedArticles() {
  const articles = FEATURED_ARTICLES.slice(0, 3);

  return (
    <section className="py-32 md:py-40 bg-paper text-ink">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-ink/40" />
              <span className="eyebrow text-ink/50 tracking-[0.35em]">Chapter · 03</span>
            </div>
            <h2 className="display-lg">
              Contemporary readings, <span className="italic text-ink/60">ancient roots.</span>
            </h2>
          </div>
          <Link
            href="/articles"
            className="hidden md:inline-block text-xs tracking-[0.3em] uppercase text-ink/50 hover:text-ink transition-colors"
          >
            All dispatches →
          </Link>
        </div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 items-baseline transition-colors hover:bg-ink/[0.015] px-2 -mx-2"
              >
                <div className="md:col-span-2 text-[10px] tracking-[0.3em] uppercase text-vermilion">
                  {article.tags[0]}
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-vermilion transition-colors">
                    {article.title}
                  </h3>
                </div>
                <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4 text-[10px] tracking-[0.25em] uppercase text-ink/50">
                  <span>{article.date}</span>
                  <span className="text-ink/20">·</span>
                  <span>{article.readTime}</span>
                  <span className="text-ink/30 group-hover:text-vermilion transition-colors">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
