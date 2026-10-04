import type { Metadata } from 'next';
import { CoursePage } from '@/components/course/CoursePage';
import { generateCourseMetadata, generateCourseJsonLd } from '@/lib/seo';

export const metadata: Metadata = generateCourseMetadata('intermediate-course', 'zh-CN');

const jsonLd = generateCourseJsonLd('intermediate-course', 'zh-CN');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursePage courseSlug="intermediate-course" locale="zh-CN" />
    </>
  );
}
