import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CoursePage } from '@/components/course/CoursePage';
import { generateCourseMetadata, generateCourseJsonLd } from '@/lib/seo';
import { COURSE_DETAILS } from '@/lib/course-details';

export function generateStaticParams() {
  return Object.keys(COURSE_DETAILS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = COURSE_DETAILS[params.slug];
  if (!course) return {};
  return generateCourseMetadata(params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  const course = COURSE_DETAILS[params.slug];
  if (!course) {
    notFound();
  }

  const jsonLd = generateCourseJsonLd(params.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursePage courseSlug={params.slug} />
    </>
  );
}
