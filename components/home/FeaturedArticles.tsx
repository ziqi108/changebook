'use client';

import Link from 'next/link';
import { FEATURED_ARTICLES } from '@/lib/data';

export function FeaturedArticles() {
  const articles = FEATURED_ARTICLES.slice(0, 4);

  return (
    <section className="py-32 md:py-44 bg-paper text-ink">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Chapter · 03</span>
            </div>
            <h2 className="display-lg">
              Contemporary readings,{' '}
              <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
                ancient roots.
              </span>
            </h2>
          </div>
          <Link
            href="/articles"
            className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-ink/45 hover:text-ink border-b border-ink/20 hover:border-ink pb-0.5 transition-all duration-200"
          >
            All dispatches →
          </Link>
        </div>

        {/* Featured large card */}
        {articles[0] && (
          <Link
            href={`/articles/${articles[0].slug}`}
            className="group block mb-5 border border-ink/8 rounded-2xl p-8 md:p-12 card-surface hover:border-ink/20"
          >
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left: gradient swatch */}
              <div
                className={`w-full md:w-48 h-40 md:h-auto rounded-xl bg-gradient-to-br ${articles[0].coverGradient} flex-shrink-0 flex items-center justify-center`}
              >
                <span className="font-display text-4xl text-paper/70 seal">易</span>
              </div>
              {/* Right: content */}
              <div className="flex-1 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-vermilion">
                      {articles[0].tags[0]}
                    </span>
                    <span className="text-[10px] text-ink/25">·</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-ink/40">
                      Featured
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3 group-hover:text-vermilion transition-colors duration-300">
                    {articles[0].title}
                  </h3>
                  <p className="text-sm text-ink/55 leading-relaxed line-clamp-2">
                    {articles[0].excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-ink text-paper flex items-center justify-center text-xs font-bold">
                      {articles[0].authorInitials}
                    </div>
                    <span className="text-xs text-ink/50">{articles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-ink/40">
                    <span>{articles[0].date}</span>
                    <span className="text-ink/15">·</span>
                    <span>{articles[0].readTime}</span>
                    <span className="text-ink/30 group-hover:text-vermilion transition-colors">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Remaining articles list */}
        <ul className="divide-y divide-ink/8 border-t border-ink/8">
          {articles.slice(1).map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 items-baseline transition-colors hover:bg-ink/[0.012] px-2 -mx-2 rounded-xl"
              >
                <div className="md:col-span-2 text-[10px] tracking-[0.3em] uppercase text-vermilion">
                  {article.tags[0]}
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl md:text-[1.65rem] leading-tight group-hover:text-vermilion transition-colors duration-300">
                    {article.title}
                  </h3>
                </div>
                <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4 text-[10px] tracking-[0.25em] uppercase text-ink/40">
                  <span>{article.date}</span>
                  <span className="text-ink/15">·</span>
                  <span>{article.readTime}</span>
                  <span className="text-ink/25 group-hover:text-vermilion transition-colors">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile view all */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-ink/50 hover:text-ink border-b border-ink/20 pb-0.5 transition-colors"
          >
            All dispatches →
          </Link>
        </div>
      </div>
    </section>
  );
}
