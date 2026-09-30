import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SELF_PATH = '/zh/cookie-policy';

export const metadata: Metadata = {
  title: 'Cookie 政策',
  description: 'Yi Wisdom 使用的 Cookie 类型，以及如何在您的浏览器中管理它们。',
  alternates: buildAlternates(SELF_PATH, 'zh-CN', getCounterpart(SELF_PATH)),
  openGraph: {
    title: 'Cookie 政策 | Yi Wisdom',
    description: 'Yi Wisdom 使用的 Cookie 类型，以及如何在您的浏览器中管理它们。',
    url: 'https://www.yiwisdom.org/zh/cookie-policy',
    locale: 'zh_CN',
    siteName: 'Yi Wisdom',
    type: 'website',
  },
};

export default function ZhCookiePolicyPage() {
  return (
    <>
      <Header locale="zh-CN" />
      <main className="min-h-screen bg-paper">
        {/* Hero band */}
        <div className="pt-32 pb-24 px-6 md:px-10 border-b border-ink/8">
          <div className="relative max-w-[1100px] mx-auto">
            <div className="mb-10">
              <BackToHome label="返回首页" href="/zh" />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Cookies · Cookie</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">Cookie 政策</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              我们尽量少用 Cookie——只为本网站正常运行所必需。目前未部署任何第三方分析或广告 Cookie。
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">什么是 Cookie</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Cookie 是您访问网站时，由浏览器存储在您设备上的小型文本文件。它能让网站在您下次访问时记住您的偏好等信息。本政策说明 Yi Wisdom（&ldquo;本网站&rdquo;）所使用的 Cookie。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">我们使用的 Cookie 类型</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <ul className="list-disc pl-6 space-y-3 marker:text-ink/30">
                <li>
                  <span className="text-ink">必要 Cookie。</span>{' '}
                  这类 Cookie 是网站得以正常运行所必需的，例如记住基本的显示设置。没有它们，网站无法正常工作。
                </li>
                <li>
                  <span className="text-ink">分析 Cookie。</span>{' '}
                  截至撰写本文时，本网站未部署任何第三方分析 Cookie。如果未来引入注重隐私、仅做汇总的分析工具，本页面会提前更新说明。此类数据绝不会用于识别个人身份。
                </li>
              </ul>
              <p>
                我们<span className="text-ink">不</span>使用广告 Cookie、跨站跟踪 Cookie，也不使用来自广告网络的 Cookie。本网站不展示定向广告。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">在浏览器中管理 Cookie</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                您可以通过浏览器的设置查看、屏蔽或删除 Cookie。大多数浏览器都提供隐私或 Cookie 设置区块，您可以据此控制哪些网站可以设置 Cookie，并清除已经存储的 Cookie。禁用必要 Cookie 可能影响网站的基本功能；禁用分析 Cookie 则不会妨碍您阅读内容。
              </p>
              <p>各浏览器的具体操作方法，请参阅您的浏览器帮助文档。</p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">政策变更</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                如果本网站使用 Cookie 的方式发生变化，本页面将会更新。关于我们如何处理个人数据的整体说明，请参阅我们的{' '}
                <Link href="/zh/privacy" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  隐私政策
                </Link>
                。
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer locale="zh-CN" />
    </>
  );
}
