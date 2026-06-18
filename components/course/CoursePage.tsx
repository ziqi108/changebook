'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthContext';
import { getCourseBySlug } from '@/lib/course-details';
import { INSTRUCTORS } from '@/lib/instructors';
import { Lock } from 'lucide-react';
import { CourseHero, CourseBody } from '@/components/course/CourseComponents';

const PUBLIC_COURSES = new Set(['beginner-course', 'intermediate-course']);
const PROTECTED_COURSES = new Set(['advanced-course', 'consult']);

const LEVEL_TEXT: Record<string, string> = {
  Beginner: 'text-ink',
  Intermediate: 'text-gold',
  Advanced: 'text-jade',
  Private: 'text-vermilion',
};

export function CoursePage({ courseSlug }: { courseSlug: string }) {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const course = getCourseBySlug(courseSlug);
  const isPublic = PUBLIC_COURSES.has(courseSlug);
  const isProtected = PROTECTED_COURSES.has(courseSlug);

  useEffect(() => {
    if (isLoading) return;
    if (isProtected && !user) {
      router.replace(`/login?redirect=${encodeURIComponent(`/${courseSlug}`)}`);
    }
    if (!isPublic && !isProtected) {
      router.replace('/');
    }
  }, [user, isLoading, router, courseSlug, isPublic, isProtected]);

  if (isLoading && !isPublic) {
    return (
      <main className="min-h-screen bg-paper flex flex-col items-center justify-center gap-5">
        <div className="w-10 h-10 rounded-full border-2 border-ink/10 border-t-ink/50 animate-spin" />
        <p className="text-xs tracking-[0.35em] uppercase text-ink/35">Verifying access</p>
      </main>
    );
  }

  if (!isPublic && !user) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <Lock size={24} className="mx-auto mb-6 text-ink/30" />
          <h1 className="font-display text-4xl mb-4">Sign in to continue</h1>
          <p className="text-sm text-ink/55 mb-10 leading-relaxed">
            This course requires an account. Sign in or create one to begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/login?redirect=${encodeURIComponent(`/${courseSlug}`)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-ink/20 rounded-full text-sm text-ink/60 hover:text-ink hover:border-ink/40 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

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
        user={user}
        logout={logout}
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
