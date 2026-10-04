import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SELF_PATH = '/zh/privacy';

export const metadata: Metadata = {
  title: '隐私政策',
  description:
    '隐私政策：Yi Wisdom 如何收集、使用与保护您分享的极少量个人数据——收集内容、使用方式与保留期限。',
  alternates: buildAlternates(SELF_PATH, 'zh-CN', getCounterpart(SELF_PATH)),
  openGraph: {
    title: '隐私政策 | Yi Wisdom',
    description:
    '隐私政策：Yi Wisdom 如何收集、使用与保护您分享的极少量个人数据——收集内容、使用方式与保留期限。',
    url: 'https://www.yiwisdom.org/zh/privacy',
    locale: 'zh_CN',
    siteName: 'Yi Wisdom',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: 'Yi Wisdom 隐私政策',
      },
    ],
  },
};

export default function ZhPrivacyPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">隐私</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">隐私政策</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              我们希望尽可能少地收集个人数据，并清楚地说明我们会如何使用这些数据。
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">概述</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Yi Wisdom（&ldquo;本网站&rdquo;）是一个关于《易经》的教育项目。本政策说明我们收集哪些个人数据、收集的原因，以及您可以作出的选择。它适用于 <Link href="/zh" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">yiwisdom.org</Link> 的所有访客。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">我们收集哪些数据</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>我们只收集您主动向我们提供的个人数据：</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-ink/30">
                <li>
                  <span className="text-ink">联系表单</span> —— 您通过{' '}
                  <Link href="/zh/contact" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">联系页面</Link>与我们联系时提供的姓名、电子邮箱和留言内容。
                </li>
                <li>
                  <span className="text-ink">邮件订阅邮箱</span> ——
                  您在首页订阅邮件通讯时提交的电子邮箱地址。
                </li>
              </ul>
              <p>
                我们不会有意识地收集敏感个人数据；阅读本网站的课程或文章，也无需注册任何账户。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">我们如何使用这些数据</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                您的留言只用于回复您的咨询；您的订阅邮箱只用于向您发送您订阅的更新内容。我们不会利用您的个人数据建立行为画像，也不会将其用于定向广告。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Cookie 与数据分析</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                本网站仅使用少量 Cookie 来保障基本功能，并借助注重隐私的数据分析，以汇总方式了解内容被阅读的情况。我们不使用广告 Cookie，也不进行跨站跟踪。详情以及如何在浏览器中管理 Cookie，请参阅我们的{' '}
                <Link href="/zh/cookie-policy" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  Cookie 政策
                </Link>
                。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">绝不出售个人数据</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                我们不出售、出租或交易您的个人数据，也不会为第三方的推广目的与其共享。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">数据保留</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                个人数据只在实现收集目的所需的期限内保留。订阅邮箱会保留至您退订为止——您可以随时通过任意邮件中的链接退订。联系留言会保留一段合理时间，以便我们回复并留存往来记录，之后即被删除。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">联系我们</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                如对本政策或您的个人数据有任何疑问，可以通过{' '}
                <Link href="/zh/contact" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  联系页面
                </Link>
                与我们联系。
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer locale="zh-CN" />
    </>
  );
}
