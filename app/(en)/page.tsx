import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ModuleGrid } from '@/components/home/ModuleGrid';
import { DailyHexagram } from '@/components/home/DailyHexagram';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';
import { Testimonials } from '@/components/home/Testimonials';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

const SITE_URL = 'https://www.yiwisdom.org';

export const metadata: Metadata = {
  title: {
    default: 'Yi Wisdom | I Ching Philosophy and Self-Cultivation',
    template: '%s | Yi Wisdom',
  },
  description:
    'Study the I Ching with classical sources, clear English explanations, and practical self-cultivation — reflection, not prediction.',
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
    'I Ching self-cultivation',
  ],
  authors: [{ name: 'Yi Wisdom' }],
  creator: 'Yi Wisdom',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Yi Wisdom | I Ching Philosophy and Self-Cultivation',
    description:
      'Study the I Ching with classical sources, clear English explanations, and practical self-cultivation — reflection, not prediction.',
    siteName: 'Yi Wisdom',
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
      'Explore the I Ching through classical sources, clear English explanations, thoughtful reflection, and practical self-cultivation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: buildAlternates('/', 'en', getCounterpart('/')),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Yi Wisdom',
      description:
        'Online home for learning the I Ching (Book of Changes) — hexagram study, daily reflection, and educational courses.',
      inLanguage: 'en',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/articles?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Yi Wisdom',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
      description:
        'An online study space dedicated to the I Ching in clear English — bridging 3,000 years of Chinese wisdom with modern life.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CN',
        addressRegion: 'Global Online',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#eduorg`,
      name: 'Yi Wisdom',
      url: SITE_URL,
      description:
        'Offers structured study of the I Ching from beginner to advanced levels, plus educational reflection sessions.',
      teaches: ['I Ching', 'Chinese Philosophy', 'Yin Yang', 'Bagua'],
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
