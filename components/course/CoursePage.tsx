'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthContext';
import { getCourseBySlug } from '@/lib/course-details';
import { INSTRUCTORS } from '@/lib/instructors';
import { BackToHome } from '@/components/ui/BackToHome';
import { LogOut, Lock, Video, FileText, Users, CheckCircle2, Star, Calendar } from 'lucide-react';

const PUBLIC_COURSES = new Set(['beginner-course', 'intermediate-course']);
const PROTECTED_COURSES = new Set(['advanced-course', 'consult']);

const LEVEL_COLORS: Record<string, string> = {
  Beginner:     'text-ink bg-ink/8',
  Intermediate: 'text-gold bg-gold/10',
  Advanced:     'text-jade bg-jade/10',
  Private:      'text-vermilion bg-vermilion/10',
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
      return;
    }
    if (!isPublic && !isProtected) {
      router.replace('/');
    }
  }, [user, isLoading, router, courseSlug, isPublic, isProtected]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-sm text-ink/40 tracking-widest">Loading…</div>
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
          <Link
            href={`/login?redirect=${encodeURIComponent(`/${courseSlug}`)}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300"
          >
            Sign In →
          </Link>
        </div>
      </main>
    );
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center">
        Course not found.
      </main>
    );
  }

  const instructor = INSTRUCTORS.find((i) => i.id === 'master-lian');
  const hasContent = course.chapters.length > 0;
  const hasIncludes = course.includes.length > 0;
  const levelColor = LEVEL_COLORS[course.level] ?? 'text-ink bg-ink/8';

  return (
    <main className="min-h-screen bg-paper">
      {/* Hero band */}
      <div className="bg-ink text-paper pt-28 pb-20 px-6 md:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(192,57,43,0.08) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Background glyph */}
        <div
          className="absolute right-0 bottom-0 pointer-events-none select-none opacity-[0.03]"
          aria-hidden="true"
        >
          <span className="font-display text-[22rem] leading-none" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            {course.levelZh.replace(' ', '')}
          </span>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-14">
            <BackToHome label="All Courses" href="/" />
            {user && (
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-paper/15 text-paper flex items-center justify-center text-xs font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm text-paper/60 hidden sm:inline">{user.name.split(' ')[0]}</span>
                </div>
                <button
                  onClick={logout}
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase text-paper/35 hover:text-paper/70 transition-colors"
                >
                  <LogOut size={12} />
                  Sign out
                </button>
              </div>
            )}
          </div>

          {/* Level badge */}
          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-medium mb-6 ${levelColor}`}>
            {course.level} · {course.levelZh}
          </span>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none text-paper mb-6 max-w-3xl">
            {course.title}
          </h1>

          <p className="text-lg text-paper/55 leading-relaxed max-w-2xl mb-10">
            {course.subtitle}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 text-xs tracking-[0.25em] uppercase text-paper/35">
            {hasContent && (
              <>
                <span className="flex items-center gap-1.5">
                  <Video size={13} />
                  {course.chapters.length} Chapters
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText size={13} />
                  Course content
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={13} />
                  Cohort {course.nextCohort.split(',')[0]}
                </span>
              </>
            )}
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              Next: {course.nextCohort}
            </span>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-20">

        {/* Empty state */}
        {!hasContent && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink/45">Course Content</span>
            </div>
            <div className="py-24 border border-dashed border-ink/15 rounded-2xl text-center">
              <Star size={24} className="mx-auto mb-4 text-ink/20" />
              <p className="text-sm text-ink/40">Content is currently being prepared</p>
              <p className="text-xs text-ink/25 mt-2">Enrolled students receive early access.</p>
            </div>
          </section>
        )}

        {/* What's included */}
        {hasIncludes && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink/45">What&apos;s included</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-4 border-b border-ink/8">
                  <CheckCircle2 size={15} className="text-vermilion mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-ink/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Curriculum */}
        {hasContent && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink/45">Curriculum</span>
            </div>
            <div className="space-y-10">
              {course.chapters.map((ch, ci) => (
                <div key={ch.id}>
                  <h3 className="font-display text-2xl mb-5">
                    {String(ci + 1).padStart(2, '0')} · {ch.title}
                  </h3>
                  <ul className="space-y-0">
                    {ch.lessons.map((lesson, li) => (
                      <li
                        key={lesson.id}
                        className="flex items-baseline gap-4 py-3.5 border-b border-ink/7 hover:bg-ink/[0.015] px-2 -mx-2 rounded-lg transition-colors"
                      >
                        <span className="font-display text-sm text-ink/30 w-8 flex-shrink-0">
                          {String(li + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-sm text-ink/80">{lesson.title}</span>
                        <span className="text-[10px] tracking-[0.25em] uppercase text-ink/35">
                          {lesson.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Instructor */}
        {instructor && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink/45">Your Instructor</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10 border border-ink/8 rounded-2xl bg-ink/[0.012]">
              <div className="w-20 h-20 rounded-full bg-ink/10 flex items-center justify-center font-display text-4xl flex-shrink-0">
                {instructor.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl mb-1">{instructor.name}</h3>
                <div className="text-[10px] tracking-[0.3em] uppercase text-vermilion mb-4">
                  {instructor.title}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{instructor.bio}</p>
              </div>
            </div>
          </section>
        )}

        {/* Enroll CTA */}
        <section>
          <div className="bg-ink text-paper p-10 md:p-14 rounded-2xl relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 50% 80% at 0% 100%, rgba(192,57,43,0.10) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="font-display text-3xl md:text-4xl mb-2">Join the next cohort</div>
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-paper/40">
                  <Calendar size={12} />
                  Starts · {course.nextCohort}
                </div>
                <div className="mt-3 font-display text-2xl text-vermilion">{course.price}</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-paper text-ink rounded-full text-sm tracking-wide hover:bg-vermilion hover:text-paper transition-all duration-300">
                  Enroll Now →
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm text-paper/50 border border-paper/15 rounded-full hover:text-paper hover:border-paper/30 transition-all duration-300"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
