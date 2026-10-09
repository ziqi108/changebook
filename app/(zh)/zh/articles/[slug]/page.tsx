import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { FEATURED_ARTICLES, ZH_ARTICLES, GET_TRANSLATION } from '@/lib/data';
import { buildAlternates } from '@/lib/i18n';
import { ArticleBody } from '@/components/article/ArticleBody';

const SITE_URL = 'https://www.yiwisdom.org';

/** 中文文章 SERP 覆盖：仅收紧 <title>/meta description，页面展示文本不变 */
const SEO_META: Record<string, { title?: string; description: string }> = {
  'iching-as-a-decision-tool': {
    description:
      '易经是一套结构化的决策反思框架，而非占卜。六十四个典型处境如何辅助现代决策与个人成长，结合心理学研究与实例分析。',
  },
};

const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(
    new Date(iso)
  );

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ZH_ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = ZH_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};
  /**
   * 守卫式 hreflang：仅当存在英文版对应文章（translationKey 相同）时
   * 才输出双向 hreflang；否则只输出中文自引用 canonical。
   */
  const enCounterpart = GET_TRANSLATION(article, 'en');
  const seoTitle = SEO_META[article.slug]?.title ?? article.title;
  const seoDescription = SEO_META[article.slug]?.description ?? article.excerpt;
  return {
    title: seoTitle,
    description: seoDescription,
    keywords: article.tags,
    alternates: buildAlternates(
      `/zh/articles/${article.slug}`,
      'zh-CN',
      enCounterpart ? `/articles/${enCounterpart.slug}` : null
    ),
    openGraph: {
      type: 'article',
      title: seoTitle,
      description: seoDescription,
      url: `${SITE_URL}/zh/articles/${article.slug}`,
      publishedTime: article.dateIso,
      authors: [article.author],
      tags: article.tags,
      locale: 'zh_CN',
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

export default function ZhArticlePage({ params }: { params: Params }) {
  const article = ZH_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  // 语言切换器按 translationKey 查找英文对应文章；不存在则不显示英文链接
  const enCounterpart = GET_TRANSLATION(article, 'en');

  // 与 generateMetadata 保持一致的 SERP 覆盖
  const seoTitle = SEO_META[article.slug]?.title ?? article.title;
  const seoDescription = SEO_META[article.slug]?.description ?? article.excerpt;

  const related = ZH_ARTICLES.filter(
    (a) => a.slug !== article.slug && a.tags.some((t) => article.tags.includes(t))
  ).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${SITE_URL}/zh/articles/${article.slug}#post`,
        headline: seoTitle,
        description: seoDescription,
        image: `${SITE_URL}/og-article.png`,
        datePublished: article.dateIso,
        dateModified: article.dateIso,
        author: { '@type': 'Person', name: article.author, url: `${SITE_URL}/zh/about` },
        publisher: { '@type': 'Organization', name: 'Yi Wisdom', url: SITE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/zh/articles/${article.slug}` },
        keywords: article.tags.join(', '),
        inLanguage: 'zh-CN',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: `${SITE_URL}/zh` },
          { '@type': 'ListItem', position: 2, name: '文章', item: `${SITE_URL}/zh/articles` },
          { '@type': 'ListItem', position: 3, name: article.title },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header
        locale="zh-CN"
        counterpartOverride={enCounterpart ? `/articles/${enCounterpart.slug}` : undefined}
      />
      <main className="pt-28 pb-28">
        <div className="max-w-[780px] mx-auto px-6 md:px-10">

          {/* 面包屑 */}
          <div className="flex items-center gap-3 mb-12 text-[10px] tracking-[0.3em] text-ink/35">
            <BackToHome label="首页" href="/zh" />
            <span className="text-ink/20">·</span>
            <Link href="/zh/articles" className="hover:text-ink transition-colors">文章</Link>
            <span className="text-ink/20">·</span>
            <span className="text-ink/50 truncate max-w-[180px]">{article.tags[0]}</span>
          </div>

          {/* 文章头部 */}
          <header className="mb-12">
            <div className="text-[10px] tracking-[0.4em] text-vermilion mb-5">
              {article.tags[0]}
            </div>

            <h1 className="font-display text-4xl md:text-5xl leading-[1.15] tracking-tight mb-6 text-ink">
              {article.title}
            </h1>

            <p className="text-xl text-ink/55 leading-relaxed font-display mb-8">
              {article.subtitle}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-y border-ink/8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center text-xs font-bold">
                  {article.authorInitials}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">{article.author}</div>
                  <div className="text-[10px] tracking-[0.2em] text-ink/40">
                    作者
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] tracking-[0.25em] text-ink/40">
                <span>{fmtDate(article.date)}</span>
                <span className="text-ink/15">·</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* 正文 */}
          <div className="space-y-7 text-ink/80" style={{ maxWidth: '70ch' }}>
            <p className="text-xl leading-relaxed font-light text-ink/85">
              {article.excerpt}
            </p>

            {article.body ? (
              <ArticleBody blocks={article.body} />
            ) : (
              <>
                <p className="text-base leading-[1.85]">
                  《易经》不言教条，而以活的隐喻言说。每一爻、每一卦，都是一面照见自身的镜子——
                  邀请我们更清楚地看见自己，并与周身的时势相协调地行动。
                </p>

                <blockquote className="border-l-2 border-vermilion pl-8 py-3 my-10">
                  <p className="font-display text-2xl leading-relaxed text-ink/75">
                    「《易经》不是一本用来阅读的书，而是一门需要亲身契入的功夫。」
                  </p>
                </blockquote>

                <p className="text-base leading-[1.85]">
                  本文以《易经》三千年的智慧传统为透镜，探讨
                  <em>{article.tags[0]}</em>
                  的深层面向。从经典传文与当代生活实践出发，
                  我们会看到：这部古老的典籍，对今天的读者依然鲜活。
                </p>

                <p className="text-base leading-[1.85]">
                  每一卦都不只是一个符号——它是一个事件，是古代圣人精密描画的
                  变化循环中的一个时刻。当我们揲蓍或掷币时，我们并非在求问吉凶，
                  而是在练习专注。我们真正在问的是：此时此刻，呈现为何种形状？
                </p>

                <p className="text-base leading-[1.85]">
                  无论你是初次接触《易经》的新读者，还是重返其源头的老学生，
                  以下这些反思都为你而写。愿它成为一扇门、一条路，最终成为一面镜子。
                </p>
              </>
            )}
          </div>

          {/* 标签 */}
          <div className="mt-14 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.25em] px-3 py-1.5 bg-ink/5 text-ink/55 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 作者卡片 */}
          <div className="mt-14 p-8 border border-ink/8 rounded-2xl bg-ink/[0.012] flex gap-6">
            <div className="w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center text-xl font-bold font-display flex-shrink-0">
              {article.authorInitials}
            </div>
            <div>
              <div className="font-display text-xl mb-1">{article.author}</div>
              <div className="text-[10px] tracking-[0.3em] text-vermilion mb-3">
                作者 · Yi Wisdom
              </div>
              <p className="text-sm text-ink/55 leading-relaxed">
                {article.author}撰写《易经》与中国古典传统的相关文章，提供反思，而非预言。
              </p>
            </div>
          </div>

          {/* 页脚导航 */}
          <div className="mt-14 pt-10 border-t border-ink/8 flex items-center justify-between gap-6 flex-wrap">
            <Link
              href="/zh/articles"
              className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink transition-colors group"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
              返回文章列表
            </Link>
            <Link
              href="/zh"
              className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>

        {/* 延伸阅读 */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-ink/8">
            <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-16">
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-10 bg-ink/30" />
                <h2 className="eyebrow text-ink/40 tracking-[0.38em]">延伸阅读</h2>
              </div>
              <ul className="divide-y divide-ink/8">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/zh/articles/${a.slug}`}
                      className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 items-baseline hover:bg-ink/[0.012] px-2 -mx-2 rounded-xl transition-colors"
                    >
                      <div className="md:col-span-2 text-[10px] tracking-[0.3em] text-vermilion">
                        {a.tags[0]}
                      </div>
                      <div className="md:col-span-7">
                        <h3 className="font-display text-2xl leading-tight group-hover:text-vermilion transition-colors duration-300">
                          {a.title}
                        </h3>
                      </div>
                      <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3 text-[10px] tracking-[0.2em] text-ink/35">
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
      <Footer locale="zh-CN" />
    </>
  );
}
