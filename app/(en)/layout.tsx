import type { Metadata } from 'next';
import '../globals.css';
import { ClientProviders } from '@/components/auth/ClientProviders';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yiwisdom.org'),
  title: {
    default: 'Yi Wisdom | I Ching Philosophy and Self-Cultivation',
    template: '%s | Yi Wisdom',
  },
  description:
    'Explore the I Ching through classical sources, clear English explanations, thoughtful reflection, and practical self-cultivation. No false certainty or guaranteed predictions.',
  keywords: [
    'I Ching',
    'Book of Changes',
    'learn I Ching',
    'hexagram reflection',
    'Chinese philosophy',
    'ancient wisdom',
    'bagua',
    'yin yang',
    'I Ching course',
    'I Ching self-cultivation',
  ],
  authors: [{ name: 'Yi Wisdom' }],
  openGraph: {
    title: 'Yi Wisdom | I Ching Philosophy and Self-Cultivation',
    description:
      'Explore the I Ching through classical sources, clear English explanations, thoughtful reflection, and practical self-cultivation.',
    url: 'https://www.yiwisdom.org',
    siteName: 'Yi Wisdom',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: 'Yi Wisdom — I Ching philosophy and self-cultivation in clear English',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yi Wisdom | I Ching Philosophy and Self-Cultivation',
    description:
      'Explore the I Ching through classical sources, clear English explanations, and thoughtful reflection.',
    images: ['/og-image.png'],
  },
};

const FONT_STYLESHEET =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=Noto+Sans+SC:wght@400;500&family=Noto+Serif+SC:wght@400;500;600;700&display=swap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_STYLESHEET} />
      </head>
      <body className="grain-overlay" suppressHydrationWarning>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
