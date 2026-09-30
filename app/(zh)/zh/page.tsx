import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DailyHexagramZh } from '@/components/home/DailyHexagramZh';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SELF_PATH = '/zh';

export const metadata: Metadata = {
  title: 'Yi Wisdom｜易经哲学与自我修养',
  description:
    '通过经典原文、清晰的中文阐释、诚恳的反思与切实的自我修养，学习《易经》。不提供虚假的确定性，不做任何保证结果的预言。',
  alternates: buildAlternates(SELF_PATH, 'zh-CN', getCounterpart(SELF_PATH)),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.yiwisdom.org/zh',
    title: 'Yi Wisdom｜易经哲学与自我修养',
    description:
      '通过经典原文、清晰的中文阐释与诚恳的反思，学习《易经》。不提供虚假的确定性，不做保证结果的预言。',
    siteName: 'Yi Wisdom',
  },
};

const SITE_URL = 'https://www.yiwisdom.org';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/zh/#website`,
      url: `${SITE_URL}/zh`,
      name: 'Yi Wisdom（易经智慧）',
      description:
        '以经典文本与诚恳反思学习《易经》的在线学习空间——卦象研读、每日反思与教育性课程。',
      inLanguage: 'zh-CN',
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Yi Wisdom',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
      description:
        '致力于以清晰的中文与英文讲解《易经》的在线学习空间——连接三千年中国智慧与现代生活。',
    },
  ],
};

const PILLARS = [
  {
    no: '01',
    title: '经典原文',
    desc: '所有讲解以《周易》经文与《易传》（尤其《系辞》）及历代注疏传统为根基——不使用杜撰的象征，也不诉诸私人启示。',
  },
  {
    no: '02',
    title: '切实反思',
    desc: '每一卦都作为照见自身处境的镜子呈现，配以反思式问题，而不是对你"必须怎么做"的断言。',
  },
  {
    no: '03',
    title: '不做保证性预言',
    desc: '我们视《易经》为自我修养的工具，而不是对未来具体结果的承诺，也不提供虚假的确定性。',
  },
];

const COURSES = [
  {
    title: '初阶课程',
    status: '开放报名',
    desc: '阴阳的基础、八卦、铜钱起卦法与你的第一个卦象。为零基础学习者设计。',
    href: '/beginner-course',
  },
  {
    title: '进阶课程',
    status: '开放报名',
    desc: '系统研读全部六十四卦，将《易经》带入关系、事业与自我修养等现代生活场景。',
    href: '/intermediate-course',
  },
  {
    title: '高阶研习',
    status: '开发中',
    desc: '面向《系辞》《说卦》等经典文本的深度研读。加入通讯以获取后续课程计划的更新。',
    href: '/advanced-course',
  },
  {
    title: '反思谈话',
    status: '暂不可用',
    desc: '一对一的教育性谈话，借助《易经》的概念反思变化、责任、优先级与可能的下一步。',
    href: '/consult',
  },
];

export default function ZhHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header locale="zh-CN" />
      <main>
        {/* —— 首屏 —— */}
        <section className="relative min-h-[92vh] bg-paper text-ink flex flex-col justify-center overflow-hidden">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-ink/5 hidden lg:block" aria-hidden="true" />
          <div className="absolute right-[8%] top-0 bottom-0 w-px bg-ink/5 hidden lg:block" aria-hidden="true" />

          <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 py-40 flex flex-col items-center text-center">
            <div className="fade-in flex items-center gap-4 mb-14">
              <span className="h-px w-10 bg-ink/20" />
              <span className="eyebrow text-ink/40 tracking-[0.5em]">易 · 經 · 智 · 慧</span>
              <span className="h-px w-10 bg-ink/20" />
            </div>

            <h1 className="relative fade-in-delay-1">
              <span className="display-xl block leading-none text-ink">变化的</span>
              <span className="display-xl block leading-none" style={{ color: 'rgba(14,20,25,0.50)' }}>
                <span className="text-vermilion relative">
                  智慧
                  <span
                    className="absolute -bottom-2 left-0 right-0 h-px bg-vermilion/40"
                    style={{ animation: 'drawLine 1.2s 0.8s ease-out both' }}
                  />
                </span>
              </span>
            </h1>

            <div className="my-12 flex items-center gap-5 fade-in-delay-2">
              <span className="h-px w-20 bg-ink/15" />
              <span className="text-sm tracking-[0.5em] text-ink/40 font-serif-cn seal">
                古 · 老 · 智 · 慧 · 现 · 代 · 生 · 活
              </span>
              <span className="h-px w-20 bg-ink/15" />
            </div>

            <p className="fade-in-delay-3 text-base md:text-lg text-ink/55 leading-relaxed max-w-lg mb-14 font-light">
              《易经》是一门关于变化、和谐与自我修养的活的哲学。我们以经典原文为根基，
              用清晰的中文阐释它，让三千年前的智慧照进今天的生活——
              用于反思，而非预测。
            </p>

            <div className="fade-in-delay-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/beginner-course"
                className="group inline-flex items-center gap-3 px-9 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-vermilion/20"
              >
                开始学习（英文课程）
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/zh/about"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm text-ink/60 hover:text-ink border border-ink/15 rounded-full hover:border-ink/40 transition-all duration-300"
              >
                了解我们的使命
              </Link>
            </div>
          </div>
        </section>

        {/* —— 教学方法 —— */}
        <section className="py-32 md:py-44 bg-paper text-ink border-t border-ink/8">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">教学方式</span>
              <span className="h-px w-10 bg-ink/35" />
            </div>
            <h2 className="display-lg text-center mb-6">
              一种<span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>诚恳的</span>学习方式。
            </h2>
            <p className="text-sm text-ink/50 leading-relaxed text-center max-w-xl mx-auto mb-20">
              学习《易经》，不制造虚假的确定性。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {PILLARS.map((p) => (
                <div key={p.no} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display text-xs tracking-[0.4em] text-ink/30">{p.no}</span>
                    <span className="h-px w-8 bg-ink/15" />
                  </div>
                  <h3 className="font-display text-xl mb-4 text-ink">{p.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/beginner-course"
                className="group inline-flex items-center gap-3 px-9 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-vermilion/20"
              >
                开始学习（英文课程）
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* —— 卦象反思 —— */}
        <DailyHexagramZh />

        {/* —— 课程与反思谈话 —— */}
        <section className="py-32 md:py-44 bg-paper text-ink">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-12">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink/40 tracking-[0.38em]">课程与谈话</span>
            </div>
            <h2 className="display-lg max-w-2xl mb-6">
              按自己的<span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>节奏</span>学习。
            </h2>
            <p className="text-sm text-ink/50 leading-relaxed max-w-xl mb-16">
              以下课程页面目前为英文版；中文版课程页面正在筹备中。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {COURSES.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group border border-ink/8 rounded-2xl p-10 card-surface flex flex-col hover:border-ink/20 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-2xl">{c.title}</h3>
                    <span
                      className={`text-[10px] tracking-[0.25em] px-3 py-1.5 rounded-full ${
                        c.status === '开放报名'
                          ? 'bg-jade/10 text-jade'
                          : 'bg-ink/5 text-ink/45'
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="text-sm text-ink/55 leading-relaxed flex-1">{c.desc}</p>
                  <span className="mt-8 text-[11px] tracking-[0.3em] uppercase text-ink/35 group-hover:text-vermilion transition-colors">
                    查看页面（英文） →
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-12 text-xs text-ink/40 leading-relaxed max-w-2xl">
              说明：本站所有内容均为教育性质，不提供医疗、心理、法律、金融、投资、就业、
              情感关系或紧急事务方面的建议，也不保证任何具体结果。详见{' '}
              <Link href="/zh/educational-disclaimer" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                教育免责声明
              </Link>
              。
            </p>
          </div>
        </section>
      </main>
      <Footer locale="zh-CN" />
    </>
  );
}
