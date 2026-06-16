import type { Metadata } from 'next';
import { CoursePage } from '@/components/course/CoursePage';
import { generateCourseMetadata, generateCourseJsonLd } from '@/lib/seo';

export const metadata: Metadata = generateCourseMetadata('advanced-course');

const jsonLd = generateCourseJsonLd('advanced-course');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursePage courseSlug="advanced-course" />
    </>
  );
}
