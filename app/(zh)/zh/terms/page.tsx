import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SELF_PATH = '/zh/terms';

export const metadata: Metadata = {
  title: '服务条款',
  description: 'Yi Wisdom 提供《易经》教育内容所依据的条款。',
  alternates: buildAlternates(SELF_PATH, 'zh-CN', getCounterpart(SELF_PATH)),
  openGraph: {
    title: '服务条款 | Yi Wisdom',
    description: 'Yi Wisdom 提供《易经》教育内容所依据的条款。',
    url: 'https://www.yiwisdom.org/zh/terms',
    locale: 'zh_CN',
    siteName: 'Yi Wisdom',
    type: 'website',
  },
};

export default function ZhTermsPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Terms · 条款</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">服务条款</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              在使用本网站之前，请先阅读以下条款。它们说明了我们提供什么，以及我们希望您如何使用。
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">条款的接受</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                访问或使用 Yi Wisdom（&ldquo;本网站&rdquo;，由本网站运营者运营），即表示您同意本服务条款。如果您不同意，请不要使用本网站。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">教育性质</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                本网站的所有内容——包括课程、文章与静思会谈（Reflection
                Sessions）——均属教育与探索性质。它将《易经》呈现为一种富有生命力的反思与自我修养传统，不构成专业建议，也不能替代合资质专业人员的服务。完整说明请参阅我们的{' '}
                <Link href="/zh/educational-disclaimer" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  教育免责声明
                </Link>
                。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">不保证任何结果</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                本网站提供的是供反思的解读与思考框架。我们不对您运用这些内容所产生的任何具体结果、预测或成效作出保证。如何使用在这里读到的内容，由您自行负责。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">知识产权</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                本网站的内容——包括原创翻译、注释、课程材料与视觉设计——均为本网站运营者的知识产权，受适用的版权法保护。您可以出于个人非商业学习目的阅读和使用这些材料；未经事先书面许可，不得复制、传播、重新发布或将内容用于商业用途。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">合理使用</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>您同意不从事以下行为：</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-ink/30">
                <li>将本网站用于任何违法或有害的目的；</li>
                <li>试图干扰、抓取或使本网站及其系统过载；</li>
                <li>违反上一条的约定复制或传播本网站内容；</li>
                <li>将本网站的内容冒充为专业建议。</li>
              </ul>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">不构成专业建议</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                本网站的任何内容均不构成医疗、心理、法律、金融、投资、就业、情感关系或紧急事务方面的建议。凡涉及需要专业判断的事项，请咨询合资质的专业人士。完整说明见我们的{' '}
                <Link href="/zh/educational-disclaimer" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  教育免责声明
                </Link>
                。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">适用法律与条款更新</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                本条款受本网站运营者所在适用司法辖区的法律管辖，且不援引其法律冲突原则。本网站运营者可能不时更新本条款；现行版本始终以本页面发布的内容为准。
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer locale="zh-CN" />
    </>
  );
}
