import type { Metadata } from 'next';
import { CoursePage } from '@/components/course/CoursePage';
import { generateCourseMetadata, generateCourseJsonLd } from '@/lib/seo';

export const metadata: Metadata = generateCourseMetadata('intermediate-course');

const jsonLd = generateCourseJsonLd('intermediate-course');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursePage courseSlug="intermediate-course" />
    </>
  );
}
