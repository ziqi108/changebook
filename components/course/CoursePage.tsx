'use client';

import Link from 'next/link';
import { getCourseBySlug } from '@/lib/course-details';
import { getCourseBySlugZh } from '@/lib/course-details-zh';
import { INSTRUCTORS } from '@/lib/instructors';
import type { Locale } from '@/lib/i18n';
import { CourseHero, CourseBody } from '@/components/course/CourseComponents';

const LEVEL_TEXT: Record<string, string> = {
  Beginner: 'text-ink',
  Intermediate: 'text-gold',
  Advanced: 'text-jade',
  Private: 'text-vermilion',
};

const UI: Record<'en' | 'zh', {
  backLabel: string;
  backHref: string;
  notFound: string;
  backHome: string;
}> = {
  en: { backLabel: 'All Courses', backHref: '/', notFound: 'Course not found.', backHome: 'Back to Home' },
  zh: { backLabel: '返回首页', backHref: '/zh', notFound: '未找到课程', backHome: '返回首页' },
};

// All courses are currently public — authentication has been disabled site-wide.
export function CoursePage({ courseSlug, locale = 'en' }: { courseSlug: string; locale?: Locale }) {
  const course = locale === 'zh-CN' ? getCourseBySlugZh(courseSlug) : getCourseBySlug(courseSlug);
  const t = UI[locale === 'zh-CN' ? 'zh' : 'en'];

  if (!course) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <p className="text-ink/50 mb-6">{t.notFound}</p>
          <Link href={t.backHref} className="text-sm text-ink/60 hover:text-ink underline">
            {t.backHome}
          </Link>
        </div>
      </main>
    );
  }

  const instructor = INSTRUCTORS.find((i) => i.id === 'liu-xize');
  const hasContent = course.chapters.length > 0;
  const hasIncludes = course.includes.length > 0;
  const levelText = LEVEL_TEXT[course.level] ?? 'text-ink';

  return (
    <main className="min-h-screen bg-paper">
      <CourseHero
        course={course}
        levelText={levelText}
        hasContent={hasContent}
        locale={locale}
      />
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-20">
        <CourseBody
          course={course}
          instructor={instructor}
          hasContent={hasContent}
          hasIncludes={hasIncludes}
          locale={locale}
        />
      </div>
    </main>
  );
}
