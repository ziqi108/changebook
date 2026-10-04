import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SELF_PATH = '/zh/contact';

export const metadata: Metadata = {
  title: '联系',
  description:
    '联系 Yi Wisdom：咨询邮箱、通常回复时间，以及写信前值得先了解的事项。我们会认真阅读每一封来信。',
  alternates: buildAlternates(SELF_PATH, 'zh-CN', getCounterpart(SELF_PATH)),
  openGraph: {
    title: '联系 | Yi Wisdom',
    description:
    '联系 Yi Wisdom：咨询邮箱、通常回复时间，以及写信前值得先了解的事项。我们会认真阅读每一封来信。',
    url: 'https://www.yiwisdom.org/zh/contact',
    locale: 'zh_CN',
    siteName: 'Yi Wisdom',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: '联系 Yi Wisdom',
      },
    ],
  },
};

export default function ZhContactPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">联系</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">联系我们</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              几点诚恳的说明：如何与 Yi Wisdom 取得联系，以及可以期待怎样的回复。
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">保持联系</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                与我们保持联系最简单的方式是关注首页的邮件订阅（目前为英文）。
                邮件通讯会发布新课程、新文章与项目动态，是最可靠的更新渠道。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">关于电子邮件的说明</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                联系邮箱在验证可用后会公布在这里。在此之前，请通过邮件订阅
                关注本站动态。在确认稳定的来信接收渠道之前，我们不会公布
                电子邮箱、电话或通信地址。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">回复时间</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Yi Wisdom 是一个小型项目，回复时间不固定，也可能无法逐一回复每封来信。
                但请放心，所有来信都会被认真阅读。
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">写信之前</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                请注意：本站不提供专业建议。如果你的来信涉及需要专业支持的私人处境——
                医疗、心理、法律、金融或其他领域——请向具备资质的专业人士求助。
                完整说明请参阅{' '}
                <Link
                  href="/zh/educational-disclaimer"
                  className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4"
                >
                  教育免责声明
                </Link>
                。
              </p>
              <p>
                你也可以随时{' '}
                <Link
                  href="/zh"
                  className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4"
                >
                  返回首页
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
