import type { Metadata } from 'next';
import './globals.css';
import { ClientProviders } from '@/components/auth/ClientProviders';
import { DevHydrationGuard } from '@/components/dev/DevHydrationGuard';

export const metadata: Metadata = {
  metadataBase: new URL('https://ichingmaster.com'),
  title: {
    default: 'I Ching Master — Ancient Chinese Wisdom for Modern Life',
    template: '%s | I Ching Master',
  },
  description:
    'Learn the I Ching (Book of Changes) with authentic English courses, interactive hexagram readings, and private consultations with a master teacher. A modern gateway to ancient Chinese philosophy.',
  keywords: [
    'I Ching',
    'Book of Changes',
    'learn I Ching',
    'hexagram reading',
    'Chinese philosophy',
    'ancient wisdom',
    'bagua',
    'yin yang',
    'I Ching course',
    'I Ching consultation',
  ],
  authors: [{ name: 'I Ching Master' }],
  openGraph: {
    title: 'I Ching Master — Ancient Chinese Wisdom for Modern Life',
    description:
      'A modern gateway to the I Ching. Study hexagrams, consult a master, and integrate ancient Chinese wisdom into daily life.',
    url: 'https://ichingmaster.com',
    siteName: 'I Ching Master',
    type: 'website',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I Ching Master — Ancient Chinese Wisdom for Modern Life',
    description:
      'A modern gateway to the I Ching. Study hexagrams, consult a master, and integrate ancient Chinese wisdom into daily life.',
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
