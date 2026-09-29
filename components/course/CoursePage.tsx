'use client';

import Link from 'next/link';
import { getCourseBySlug } from '@/lib/course-details';
import { INSTRUCTORS } from '@/lib/instructors';
import { CourseHero, CourseBody } from '@/components/course/CourseComponents';

const LEVEL_TEXT: Record<string, string> = {
  Beginner: 'text-ink',
  Intermediate: 'text-gold',
  Advanced: 'text-jade',
  Private: 'text-vermilion',
};

// All courses are currently public — authentication has been disabled site-wide.
export function CoursePage({ courseSlug }: { courseSlug: string }) {
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <p className="text-ink/50 mb-6">Course not found.</p>
          <Link href="/" className="text-sm text-ink/60 hover:text-ink underline">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const instructor = INSTRUCTORS.find((i) => i.id === 'master-lian');
  const hasContent = course.chapters.length > 0;
  const hasIncludes = course.includes.length > 0;
  const levelText = LEVEL_TEXT[course.level] ?? 'text-ink';

  return (
    <main className="min-h-screen bg-paper">
      <CourseHero
        course={course}
        levelText={levelText}
        hasContent={hasContent}
      />
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-20">
        <CourseBody
          course={course}
          instructor={instructor}
          hasContent={hasContent}
          hasIncludes={hasIncludes}
        />
      </div>
    </main>
  );
}
