import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ZH_ARTICLES } from '@/lib/data';

/**
 * /zh/articles —— 中文文章索引页（已正式发布，可索引）
 * 当前收录 3 篇与英文版对应的中文文章；后续新文章在 lib/data.ts 登记。
 */

const SITE_URL = 'https://www.yiwisdom.org';

const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(
    new Date(iso)
  );

export const metadata: Metadata = {
  title: '易经文章与卦象解读',
  description:
    'Yi Wisdom 中文文章：以经典原文为根基的《易经》反思——卦象解读、阴阳之道与日常修养，提供反思而非预言。',
  alternates: { canonical: `${SITE_URL}/zh/articles` },
  openGraph: {
    type: 'website',
    title: '易经文章与卦象解读｜Yi Wisdom',
    description:
      '以经典原文为根基的《易经》中文反思文章——卦象解读、阴阳之道与日常修养，提供反思而非预言。',
    url: `${SITE_URL}/zh/articles`,
    locale: 'zh_CN',
    siteName: 'Yi Wisdom',
    images: [
      {
        url: '/og-article.png',
        width: 1200,
        height: 675,
        alt: 'Yi Wisdom 中文文章',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '易经文章与卦象解读｜Yi Wisdom',
    description: '以经典原文为根基的《易经》中文反思文章——卦象解读、阴阳之道与日常修养。',
    images: ['/og-article.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': `${SITE_URL}/zh/articles#blog`,
      name: 'Yi Wisdom 文章',
      description: '以经典原文为根基的《易经》中文反思文章——卦象解读、阴阳之道与日常修养。',
      url: `${SITE_URL}/zh/articles`,
      inLanguage: 'zh-CN',
      blogPost: ZH_ARTICLES.map((a) => ({
        '@type': 'BlogPosting',
        headline: a.title,
        url: `${SITE_URL}/zh/articles/${a.slug}`,
        datePublished: a.dateIso,
        author: { '@type': 'Person', name: a.author },
        keywords: a.tags.join(', '),
        inLanguage: 'zh-CN',
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: `${SITE_URL}/zh` },
        { '@type': 'ListItem', position: 2, name: '文章', item: `${SITE_URL}/zh/articles` },
      ],
    },
  ],
};

export default function ZhArticlesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header locale="zh-CN" />
      <main className="pt-28 pb-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">

          {/* 页头 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">文章</span>
            </div>
            <h1 className="display-lg max-w-2xl mb-6">
              关于变化的<span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>反思</span>。
            </h1>
            <p className="text-sm text-ink/50 leading-relaxed max-w-xl">
              以经典原文为根基的《易经》中文文章——卦象解读、阴阳之道与日常修养，
              提供反思，而非预言。
            </p>
          </div>

          {/* 文章列表 */}
          <ul className="divide-y divide-ink/8">
            {ZH_ARTICLES.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/zh/articles/${a.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 items-baseline hover:bg-ink/[0.012] px-2 -mx-2 rounded-xl transition-colors"
                >
                  <div className="md:col-span-2 text-[10px] tracking-[0.3em] text-vermilion">
                    {a.tags[0]}
                  </div>
                  <div className="md:col-span-7">
                    <h2 className="font-display text-2xl md:text-3xl leading-tight mb-3 group-hover:text-vermilion transition-colors duration-300">
                      {a.title}
                    </h2>
                    <p className="text-sm text-ink/55 leading-relaxed max-w-xl">{a.excerpt}</p>
                  </div>
                  <div className="md:col-span-3 flex md:flex-col items-start md:items-end justify-start gap-2 text-[10px] tracking-[0.2em] text-ink/35">
                    <span>{fmtDate(a.date)}</span>
                    <span>{a.readTime}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* 底部说明 */}
          <p className="mt-16 text-xs text-ink/40 leading-relaxed max-w-2xl">
            更多英文文章可在{' '}
            <Link href="/articles" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
              英文版文章
            </Link>
            页阅读；中文文章将随译文校对进度陆续发布。
          </p>
        </div>
      </main>
      <Footer locale="zh-CN" />
    </>
  );
}
