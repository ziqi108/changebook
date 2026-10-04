import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SELF_PATH = '/zh/educational-disclaimer';

export const metadata: Metadata = {
  title: '教育免责声明',
  description:
    '教育免责声明：Yi Wisdom 的内容属教育与探索性质，用于自我反思与学习，不构成医疗、法律、财务等专业建议，亦不作任何预测结果的保证。',
  alternates: buildAlternates(SELF_PATH, 'zh-CN', getCounterpart(SELF_PATH)),
  openGraph: {
    title: '教育免责声明 | Yi Wisdom',
    description:
    '教育免责声明：Yi Wisdom 的内容属教育与探索性质，用于自我反思与学习，不构成医疗、法律、财务等专业建议，亦不作任何预测结果的保证。',
    url: 'https://www.yiwisdom.org/zh/educational-disclaimer',
    locale: 'zh_CN',
    siteName: 'Yi Wisdom',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: 'Yi Wisdom 教育免责声明',
      },
    ],
  },
};

export default function ZhEducationalDisclaimerPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">免责声明</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">教育免责声明</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              在把本网站的内容应用到您自己的生活之前，请先阅读本文。
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section>
            <div className="border border-ink/8 rounded-2xl p-8 md:p-10 card-surface">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-vermilion/60" />
                <span className="eyebrow text-vermilion tracking-[0.38em]">核心声明</span>
              </div>
              <p className="font-display text-2xl md:text-3xl leading-snug text-ink">
                静思会谈与本网站的所有内容均属教育与探索性质，不提供医疗、心理、法律、金融、投资、就业、情感关系或紧急事务方面的建议，也不保证任何具体的未来结果。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">启发思考，而非预测</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                本网站将《易经》呈现为一种富有生命力的反思与自我修养传统。卦象、注释与静思会谈旨在为您的思考提供启发，而不是对将要发生之事的预测，也不是指示您应当如何行动。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">不能替代专业建议</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                本网站的任何内容都不能替代合资质专业人员的服务。如果您正在面对医疗、心理、法律、金融、投资、就业或情感方面的问题——或任何其他需要专业支持的处境——请寻求具备相应资质的专业人士，针对您的具体情况提供帮助。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">不作任何预测保证</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                您在本网站读到的任何内容都不保证会出现具体的未来结果，本网站运营者也不声称《易经》能够预测事件。如何理解这些内容并据此行动，由您自行判断并承担责任。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">如果您正处于危机之中</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                如果您正处于危机之中，或觉得自己可能面临危险，请立即联系您所在地区可用的紧急救援服务。本网站不是紧急救助资源。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">相关页面</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                另请参阅我们的{' '}
                <Link href="/zh/terms" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  服务条款
                </Link>{' '}
                与{' '}
                <Link href="/zh/contact" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  联系页面
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
