import type { Metadata } from 'next';
import './globals.css';
import { ClientProviders } from '@/components/auth/ClientProviders';
import { DevHydrationGuard } from '@/components/dev/DevHydrationGuard';

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
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yi Wisdom | I Ching Philosophy and Self-Cultivation',
    description:
      'Explore the I Ching through classical sources, clear English explanations, and thoughtful reflection.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grain-overlay" suppressHydrationWarning>
        <DevHydrationGuard>
          <ClientProviders>{children}</ClientProviders>
        </DevHydrationGuard>
      </body>
    </html>
  );
}
