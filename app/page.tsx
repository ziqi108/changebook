import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ModuleGrid } from '@/components/home/ModuleGrid';
import { DailyHexagram } from '@/components/home/DailyHexagram';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';
import { Testimonials } from '@/components/home/Testimonials';

const SITE_URL = 'https://ichingmaster.com';

export const metadata: Metadata = {
  title: {
    default: 'I Ching Master — Ancient Chinese Wisdom for Modern Life',
    template: '%s | I Ching Master',
  },
  description:
    'Learn the I Ching (Book of Changes) with authentic English courses, interactive hexagram readings, and private consultations with a master teacher. A modern gateway to 3,000 years of Chinese philosophy.',
  keywords: [
    'I Ching',
    'Book of Changes',
    'learn I Ching online',
    'hexagram reading',
    'Chinese philosophy course',
    'ancient wisdom',
    'bagua',
    'yin yang',
    'I Ching consultation',
    '易经',
    '易经学习',
  ],
  authors: [{ name: 'I Ching Master' }],
  creator: 'I Ching Master',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'I Ching Master — Ancient Chinese Wisdom for Modern Life',
    description:
      'A modern gateway to the I Ching. Study hexagrams, practice daily, and consult a master teacher. Courses, readings, and community in masterful English.',
    siteName: 'I Ching Master',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I Ching Master — Ancient Chinese Wisdom for Modern Life',
    description:
      'A modern gateway to the I Ching. Study hexagrams, practice daily, and consult a master teacher.',
    creator: '@ichingmaster',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'I Ching Master',
      description:
        'Online academy for learning the I Ching (Book of Changes) — hexagram courses, daily readings, and master consultations.',
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/articles?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'I Ching Master',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
      sameAs: [
        'https://twitter.com/ichingmaster',
        'https://www.youtube.com/@ichingmaster',
        'https://www.reddit.com/r/iching',
      ],
      description:
        'An online academy dedicated to teaching the I Ching in authentic English — bridging 3,000 years of Chinese wisdom with modern life.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CN',
        addressRegion: 'Global Online',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#eduorg`,
      name: 'I Ching Master Academy',
      url: SITE_URL,
      description:
        'Offers structured courses on the I Ching from beginner to advanced, plus private consultations with master teachers.',
      teaches: ['I Ching', 'Chinese Philosophy', 'Divination', 'Yin Yang', 'Bagua'],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <ModuleGrid />
        <DailyHexagram />
        <FeaturedArticles />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
