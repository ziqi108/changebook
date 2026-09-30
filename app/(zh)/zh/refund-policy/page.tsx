import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SELF_PATH = '/zh/refund-policy';

export const metadata: Metadata = {
  title: '退款政策',
  description:
    'Yi Wisdom 目前的课程均为免费提供，静思会谈暂未开放，因此现阶段不涉及退款。',
  alternates: buildAlternates(SELF_PATH, 'zh-CN', getCounterpart(SELF_PATH)),
  openGraph: {
    title: '退款政策 | Yi Wisdom',
    description:
      'Yi Wisdom 目前的课程均为免费提供，静思会谈暂未开放，因此现阶段不涉及退款。',
    url: 'https://www.yiwisdom.org/zh/refund-policy',
    locale: 'zh_CN',
    siteName: 'Yi Wisdom',
    type: 'website',
  },
};

export default function ZhRefundPolicyPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Refunds · 退款</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">退款政策</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              一份坦诚的说明：目前的付款与退款状况。
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">目前状况</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Yi Wisdom 目前的所有课程均免费提供，静思会谈（Reflection
                Sessions）目前暂停开放。由于两者均未收取任何费用，现阶段不存在需要退款的事项。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">课程</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                由于目前所有课程均为免费提供，不收取任何费用，因此不涉及退款。如未来推出付费课程，我们会在任何购买发生之前，先在本页面公布相应的退款政策。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">静思会谈</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                静思会谈的预约目前暂停开放。会谈不收取任何费用，因此不存在退款情形。如未来会谈以付费服务的形式重新开放，相关条款及适用的退款流程将在接受任何预约之前，先在本页面公布。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">联系我们</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                如果您发现有错误产生的扣款，或对本政策有任何疑问，请通过{' '}
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
