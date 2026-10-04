import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

const FOOTER_LINKS: Record<Locale, { group: string; items: { label: string; href: string }[] }[]> = {
  en: [
    {
      group: 'Learn',
      items: [
        { label: 'Beginner Course', href: '/beginner-course' },
        { label: 'Intermediate', href: '/intermediate-course' },
        { label: 'Advanced', href: '/advanced-course' },
        { label: 'Journal', href: '/articles' },
      ],
    },
    {
      group: 'Practice',
      items: [
        { label: 'Reflection Sessions', href: '/consult' },
        { label: 'Daily Hexagram', href: '/#hexagram' },
        { label: 'All Articles', href: '/articles' },
      ],
    },
    {
      group: 'About',
      items: [
        { label: 'Our Mission', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
  'zh-CN': [
    {
      group: '学习',
      items: [
        { label: '初阶课程', href: '/zh/beginner-course' },
        { label: '进阶课程', href: '/zh/intermediate-course' },
        { label: '高阶研习', href: '/zh/advanced-course' },
        { label: '文章', href: '/zh/articles' },
      ],
    },
    {
      group: '关于',
      items: [
        { label: '我们的使命', href: '/zh/about' },
        { label: '联系', href: '/zh/contact' },
      ],
    },
  ],
};

const LEGAL_LINKS: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookies', href: '/cookie-policy' },
    { label: 'Refunds', href: '/refund-policy' },
    { label: 'Disclaimer', href: '/educational-disclaimer' },
  ],
  'zh-CN': [
    { label: '隐私政策', href: '/zh/privacy' },
    { label: '服务条款', href: '/zh/terms' },
    { label: 'Cookie 政策', href: '/zh/cookie-policy' },
    { label: '退款政策', href: '/zh/refund-policy' },
    { label: '教育免责声明', href: '/zh/educational-disclaimer' },
  ],
};

export function Footer({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh-CN';
  return (
    <footer className="relative bg-paper border-t border-ink/10 overflow-hidden">
      {/* Background large seal character（中文站专属装饰） */}
      {isZh && (
        <div
          className="absolute right-0 bottom-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-display seal text-[28rem] leading-none text-ink/[0.018]"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            易
          </span>
        </div>
      )}

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-20 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 pb-16 border-b border-ink/8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href={isZh ? '/zh' : '/'} className="inline-block mb-5">
              <span className="font-display text-2xl tracking-tight hover:text-vermilion transition-colors duration-300">
                Yi Wisdom
              </span>
            </Link>
            <p className="text-sm text-ink/50 leading-relaxed max-w-xs mb-8">
              {isZh ? (
                '古老的中文智慧，照进现代生活。以经典文本与诚恳反思，读懂《易经》。'
              ) : (
                <>
                  Ancient Chinese Wisdom for Modern Life. Explore the{' '}
                  <span className="italic">I&nbsp;Ching</span> through classical sources
                  and thoughtful reflection.
                </>
              )}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS[locale].map(({ group, items }) => (
            <div key={group}>
              <p className="text-[10px] tracking-[0.4em] uppercase text-ink/35 mb-6 font-medium">
                {group}
              </p>
              <ul className="space-y-3.5">
                {items.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink/60 hover:text-ink transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-ink/30">
            © 2026 Yi Wisdom · {isZh ? '保留所有权利' : 'All rights reserved'}
          </span>
          <div className="flex items-center gap-6 flex-wrap">
            {LEGAL_LINKS[locale].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] tracking-[0.3em] uppercase text-ink/30 hover:text-ink/60 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
