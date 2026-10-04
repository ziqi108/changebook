import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SELF_PATH = '/zh/about';

export const metadata: Metadata = {
  title: '关于我们',
  description:
    'Yi Wisdom 的使命：以诚恳、忠实于经典的方式，把《易经》的智慧带进现代生活。在这里了解我们的初衷、所珍视的价值，以及授课老师。',
  alternates: buildAlternates(SELF_PATH, 'zh-CN', getCounterpart(SELF_PATH)),
  openGraph: {
    title: '关于我们 | Yi Wisdom',
    description:
      'Yi Wisdom 的使命：以诚恳、忠实于经典的方式，把《易经》的智慧带进现代生活。在这里了解我们的初衷、所珍视的价值，以及授课老师。',
    url: 'https://www.yiwisdom.org/zh/about',
    locale: 'zh_CN',
    siteName: 'Yi Wisdom',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: '关于 Yi Wisdom——把《易经》的智慧带进现代生活',
      },
    ],
  },
};

const VALUES = [
  {
    glyph: '真',
    title: '真实',
    desc: '以经典文本为根基——不打折扣，不曲解原意。',
  },
  {
    glyph: '精',
    title: '精审',
    desc: '每一个字都经过斟酌，每一个解读都有出处。',
  },
  {
    glyph: '活',
    title: '鲜活',
    desc: '《易经》是活的传统，不是博物馆里的陈列品。',
  },
];

export default function ZhAboutPage() {
  return (
    <>
      <Header locale="zh-CN" />
      <main className="min-h-screen bg-paper">
        {/* Hero band */}
        <div className="pt-32 pb-24 px-6 md:px-10 border-b border-ink/8 relative overflow-hidden">
          <div
            className="absolute right-0 bottom-0 pointer-events-none select-none opacity-[0.03]"
            aria-hidden="true"
          >
            <span className="font-display text-[22rem] leading-none" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              道
            </span>
          </div>

          <div className="relative max-w-[1100px] mx-auto">
            <div className="mb-10">
              <BackToHome label="返回首页" href="/zh" />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">关于</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">
              我们的使命，{' '}
              <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
                朴素地说。
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              Yi Wisdom 希望把《易经》活的声音带入当代中文与英文世界——
              不稀释原意，不故弄玄虚，不丢失古典传统的严谨。
            </p>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 space-y-28">
          {/* Values */}
          <section>
            <div className="flex items-center gap-3 mb-12">
              <span className="h-px w-10 bg-ink/30" />
              <h2 className="eyebrow text-ink/40 tracking-[0.38em]">我们珍视什么</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {VALUES.map((v) => (
                <div key={v.glyph} className="border border-ink/8 rounded-2xl p-10 card-surface">
                  <div
                    className="font-display text-6xl text-ink/15 mb-6"
                    style={{ fontFamily: "'Noto Serif SC', serif" }}
                  >
                    {v.glyph}
                  </div>
                  <h3 className="font-display text-2xl mb-3">{v.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Story */}
          <section>
            <div className="flex items-center gap-3 mb-12">
              <span className="h-px w-10 bg-ink/30" />
              <h2 className="eyebrow text-ink/40 tracking-[0.38em]">我们的由来</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6 text-ink/70 leading-[1.85] text-base">
                <p>
                  Yi Wisdom 始于一个私人笔记项目——把多年研习《易经》的心得，
                  整理成清晰、可亲的文字，分享给一小群学习者。
                </p>
                <p>
                  随后出现了意想不到的变化：这些笔记开始自己“讲话”。
                  读过十本《易经》导读的学习者发现，自己第一次真正读懂了它。
                </p>
              </div>
              <div className="space-y-6 text-ink/70 leading-[1.85] text-base">
                <p>
                  今天，Yi Wisdom 向所有与《易经》相遇的读者提供免费课程与反思性文字——
                  无论你是把卦象带进咨询室的专业人士、正在经历转折的管理者，
                  还是在创作迷雾中寻找指南针的艺术家。
                </p>
                <p>
                  《易经》流传三千年，是因为它回应着人类经验中恒久不变的部分。
                  我们要做的，只是让它的声音保持清晰。
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border border-ink/8 rounded-2xl p-10 md:p-14 bg-ink/[0.012] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-2">准备开始了吗？</h2>
              <p className="text-sm text-ink/50">
                从初阶课程开始，或先了解我们的教育免责声明。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/zh/beginner-course"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300"
              >
                开始学习 →
              </Link>
              <Link
                href="/zh/educational-disclaimer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-ink/20 rounded-full text-sm text-ink/60 hover:text-ink hover:border-ink/40 transition-all duration-300"
              >
                教育免责声明
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer locale="zh-CN" />
    </>
  );
}
