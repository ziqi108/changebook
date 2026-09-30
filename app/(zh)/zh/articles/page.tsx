import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

/**
 * /zh/articles —— 占位页（noindex）
 *
 * 中文文章尚未发布：
 * - robots: noindex（不进搜索引擎索引）
 * - 不加入 sitemap（见 app/sitemap.ts 注释）
 * - 不加入语言切换器、不输出 hreflang（不在 ROUTE_MAP 中）
 * 不生成空白文章列表，只作诚实说明并引流至英文版 Journal。
 */
export const metadata: Metadata = {
  title: '文章',
  description: 'Yi Wisdom 中文文章正在翻译整理中，敬请期待。',
  robots: { index: false, follow: true },
};

export default function ZhArticlesPage() {
  return (
    <>
      <Header locale="zh-CN" />
      <main className="min-h-screen bg-paper">
        <div className="pt-32 pb-24 px-6 md:px-10 border-b border-ink/8">
          <div className="relative max-w-[1100px] mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">文章 · Journal</span>
            </div>
            <h1 className="display-lg max-w-3xl mb-8">文章，正在路上。</h1>
            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              中文版的《易经》反思文章正在翻译与整理中。我们只在内容经过校对、
              达到与英文版相同的水准后才会发布，不会以机器翻译充数。
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-10">
          <p className="text-ink/70 leading-[1.85] text-base">
            如果你想现在就开始阅读，可以访问英文版 Journal（内容为英文）：
          </p>
          <div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300"
            >
              阅读英文版 Journal
              <span>→</span>
            </Link>
          </div>
          <p className="text-sm text-ink/45 leading-relaxed">
            中文文章发布后，本页面将改为正式的文章索引页。
          </p>
        </div>
      </main>
      <Footer locale="zh-CN" />
    </>
  );
}
