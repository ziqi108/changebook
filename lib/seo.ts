import type { Metadata } from 'next';
import { getCourseBySlug } from '@/lib/course-details';
import { INSTRUCTORS } from '@/lib/instructors';

const SITE_URL = 'https://ichingmaster.com';

function formatStartDate(dateStr: string): string {
  const months: Record<string, string> = {
    January: '01', February: '02', March: '03', April: '04',
    May: '05', June: '06', July: '07', August: '08',
    September: '09', October: '10', November: '11', December: '12',
  };
  const match = dateStr.match(/(\w+)\s+(\d{1,2}),\s+(\d{4})/);
  if (match) {
    const month = months[match[1]];
    const day = match[2].padStart(2, '0');
    const year = match[3];
    return `${year}-${month}-${day}`;
  }
  return dateStr;
}

export function generateCourseMetadata(slug: string): Metadata {
  const course = getCourseBySlug(slug);
  if (!course) return {};

  const title = `${course.title} — Online Study Program`;
  const description = course.subtitle;

  const keywords = [
    'I Ching',
    'Book of Changes',
    `${course.level} I Ching`,
    'learn I Ching online',
    'hexagram course',
    'Chinese philosophy',
    '易经',
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${SITE_URL}/${slug}` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${SITE_URL}/${slug}`,
      siteName: 'I Ching Master',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function generateCourseJsonLd(slug: string) {
  const course = getCourseBySlug(slug);
  if (!course) return null;

  const instructor = INSTRUCTORS.find((i) => i.id === 'master-lian');
  const totalLessons = course.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
  const lastChapter = course.chapters[course.chapters.length - 1];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': `${SITE_URL}/${slug}/#course`,
        name: course.title,
        description: course.subtitle,
        url: `${SITE_URL}/${slug}`,
        image: `${SITE_URL}/og-course.png`,
        provider: {
          '@type': 'Organization',
          name: 'I Ching Master',
          url: SITE_URL,
        },
        author: instructor
          ? {
              '@type': 'Person',
              name: instructor.name,
              jobTitle: instructor.title,
              url: `${SITE_URL}/about`,
            }
          : undefined,
        inLanguage: 'en',
        learningResourceType: 'Course',
        courseMode: 'online',
        timeToComplete: `PT${totalLessons * 45}M`,
        numberOfCredits: totalLessons,
        educationalProgramMode: 'online',
        startDate: formatStartDate(course.nextCohort),
        offers: {
          '@type': 'Offer',
          price: course.price.replace(/[^0-9.]/g, ''),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/${slug}`,
        },
        syllabusSections: course.chapters.map((ch) => ({
          '@type': 'SyllabusSection',
          name: ch.title,
          hasCourseMode: 'online',
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: course.title,
            item: `${SITE_URL}/${slug}`,
          },
        ],
      },
    ].filter(Boolean),
  };
}
