import type { Metadata } from 'next';
import { getCourseBySlug } from '@/lib/course-details';
import { getCourseBySlugZh } from '@/lib/course-details-zh';
import { INSTRUCTORS } from '@/lib/instructors';
import { SITE_URL, inLanguage, buildAlternates, getCounterpart, type Locale } from '@/lib/i18n';

/**
 * 课程页元数据 / JSON-LD（中英文共用）。
 * locale='zh-CN' 时读取中文课程数据，canonical/og/url 均指向 /zh/ 路径。
 */
export function generateCourseMetadata(slug: string, locale: Locale = 'en'): Metadata {
  const course = locale === 'zh-CN' ? getCourseBySlugZh(slug) : getCourseBySlug(slug);
  if (!course) return {};

  const isZh = locale === 'zh-CN';
  const title = isZh ? `${course.title} — 线上研习课程` : `${course.title} — Online Study Program`;
  const description = course.subtitle;
  const selfPath = isZh ? `/zh/${slug}` : `/${slug}`;
  const url = `${SITE_URL}${selfPath}`;

  const keywords = isZh
    ? ['易经', '周易', `${course.title}`, '易经课程', '六十四卦', '学易经', '线上课程']
    : [
        'I Ching',
        'Book of Changes',
        `${course.level} I Ching`,
        'learn I Ching online',
        'hexagram course',
        'Chinese philosophy',
        'Yijing',
      ];

  return {
    title,
    description,
    keywords,
    alternates: buildAlternates(selfPath, locale, getCounterpart(selfPath)),
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: 'Yi Wisdom',
      locale: isZh ? 'zh_CN' : 'en_US',
      images: [
        {
          url: '/og-course.png',
          width: 1200,
          height: 675,
          alt: `${title} — Yi Wisdom`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-course.png'],
    },
    robots: { index: true, follow: true },
  };
}

export function generateCourseJsonLd(slug: string, locale: Locale = 'en') {
  const course = locale === 'zh-CN' ? getCourseBySlugZh(slug) : getCourseBySlug(slug);
  if (!course) return null;

  const isZh = locale === 'zh-CN';
  const instructor = INSTRUCTORS.find((i) => i.id === 'liu-xize');
  const selfPath = isZh ? `/zh/${slug}` : `/${slug}`;
  const url = `${SITE_URL}${selfPath}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': `${url}/#course`,
        name: course.title,
        description: course.subtitle,
        url,
        image: `${SITE_URL}/og-course.png`,
        provider: {
          '@type': 'Organization',
          name: 'Yi Wisdom',
          url: SITE_URL,
        },
        author: instructor
          ? {
              '@type': 'Person',
              name: isZh ? instructor.nameZh : instructor.name,
              jobTitle: isZh ? (instructor.titleZh ?? instructor.title) : instructor.title,
              url: isZh ? `${SITE_URL}/zh/about` : `${SITE_URL}/about`,
            }
          : undefined,
        inLanguage: inLanguage(locale),
        learningResourceType: 'Course',
        courseMode: 'online',
        educationalProgramMode: 'online',
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
            name: isZh ? '首页' : 'Home',
            item: isZh ? `${SITE_URL}/zh` : SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: course.title,
            item: url,
          },
        ],
      },
    ].filter(Boolean),
  };
}
