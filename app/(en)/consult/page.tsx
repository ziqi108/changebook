import type { Metadata } from 'next';
import { CoursePage } from '@/components/course/CoursePage';
import { generateCourseMetadata, generateCourseJsonLd } from '@/lib/seo';

export const metadata: Metadata = generateCourseMetadata('consult');

const jsonLd = generateCourseJsonLd('consult');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursePage courseSlug="consult" />
    </>
  );
}
