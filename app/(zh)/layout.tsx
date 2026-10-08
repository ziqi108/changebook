import type { Metadata } from 'next';
import '../globals.css';
import { ClientProviders } from '@/components/auth/ClientProviders';

/**
 * 简体中文根布局（路由组 (zh)）
 * - <html lang="zh-CN">
 * - 中文 SEO 元数据（独立于英文，不直译关键词）
 * - body 挂 .lang-zh：中文字体回退 + 长标题防溢出
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.yiwisdom.org'),
  title: {
    default: 'Yi Wisdom｜易经哲学与自我修养',
    template: '%s | Yi Wisdom',
  },
  description:
    '通过经典原文、清晰的中文阐释、诚恳的反思与切实的自我修养，学习《易经》。不提供虚假的确定性，不做任何保证结果的预言。',
  keywords: [
    '易经',
    '周易',
    '易经学习',
    '六十四卦',
    '卦象反思',
    '中国哲学',
    '自我修养',
    '阴阳',
    '八卦',
    '易经课程',
  ],
  authors: [{ name: 'Yi Wisdom' }],
  openGraph: {
    title: 'Yi Wisdom｜易经哲学与自我修养',
    description:
      '通过经典原文、清晰的中文阐释与诚恳的反思，学习《易经》。不提供虚假的确定性，不做保证结果的预言。',
    url: 'https://www.yiwisdom.org/zh',
    siteName: 'Yi Wisdom',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: 'Yi Wisdom｜易经哲学与自我修养',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yi Wisdom｜易经哲学与自我修养',
    description: '通过经典原文与诚恳的反思，学习《易经》。',
    images: ['/og-image.png'],
  },
};

const FONT_STYLESHEET =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=Noto+Sans+SC:wght@400;500&family=Noto+Serif+SC:wght@400;500;600;700&display=swap';

export default function ZhRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_STYLESHEET} />
      </head>
      <body className="grain-overlay lang-zh" suppressHydrationWarning>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
