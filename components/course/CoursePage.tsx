'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthContext';
import { getCourseBySlug } from '@/lib/course-details';
import { INSTRUCTORS } from '@/lib/instructors';
import { LogOut, Lock, Video, FileText, Users, CheckCircle2, Star } from 'lucide-react';

const PUBLIC_COURSES = new Set(['beginner-course', 'intermediate-course']);
const PROTECTED_COURSES = new Set(['advanced-course', 'consult']);

function logAccess(event: string, payload: Record<string, unknown>) {
  const ts = new Date().toISOString();
  const entry = { ts, event, ...payload };
  const tag = '[CourseAccess]';
  switch (event) {
    case 'public_course_allowed':
      console.info(`${tag} ${event}`, entry);
      break;
    case 'protected_course_denied':
      console.warn(`${tag} ${event}`, entry);
      break;
    case 'protected_course_allowed':
      console.info(`${tag} ${event}`, entry);
      break;
    case 'bypass_attempt':
      console.error(`${tag} ${event}`, entry);
      break;
    default:
      console.info(`${tag} ${event}`, entry);
  }
  if (typeof window !== 'undefined') {
    const key = 'changebook_access_logs';
    try {
      const prev = JSON.parse(sessionStorage.getItem(key) || '[]');
      prev.push(entry);
      sessionStorage.setItem(key, JSON.stringify(prev.slice(-200)));
    } catch {}
  }
}

export function CoursePage({ courseSlug }: { courseSlug: string }) {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const course = getCourseBySlug(courseSlug);
  const isPublic = PUBLIC_COURSES.has(courseSlug);
  const isProtected = PROTECTED_COURSES.has(courseSlug);

  useEffect(() => {
    if (isLoading) return;

    if (isPublic) {
      logAccess('public_course_allowed', {
        courseSlug,
        user: user?.email || null,
        path: typeof window !== 'undefined' ? window.location.pathname : '',
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        ua: typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 120) : '',
      });
    }

    if (isProtected && !user) {
      logAccess('protected_course_denied', {
        courseSlug,
        path: typeof window !== 'undefined' ? window.location.pathname : '',
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        ua: typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 120) : '',
        clientTime: Date.now(),
      });
      router.replace(`/login?redirect=${encodeURIComponent(`/${courseSlug}`)}`);
      return;
    }

    if (isProtected && user) {
      logAccess('protected_course_allowed', {
        courseSlug,
        user: user.email,
        role: user.role,
        enrolled: user.enrolledCourses,
      });
    }

    if (!isPublic && !isProtected) {
      logAccess('bypass_attempt', {
        courseSlug,
        user: user?.email || null,
        reason: 'unknown course slug — not in public or protected allowlists',
        path: typeof window !== 'undefined' ? window.location.pathname : '',
      });
      router.replace('/');
      return;
    }
  }, [user, isLoading, router, courseSlug, isPublic, isProtected]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-sm text-ink/50 tracking-widest">Loading...</div>
      </main>
    );
  }

  if (!isPublic && !user) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <Lock size={28} className="mx-auto mb-6 text-ink/40" />
          <h1 className="font-display text-4xl mb-4">Sign in to continue</h1>
          <p className="text-sm text-ink/60 mb-10">
            This course requires an account. Sign in or create one to begin.
          </p>
          <Link
            href={`/login?redirect=${encodeURIComponent(`/${courseSlug}`)}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-colors"
          >
            Sign In →
          </Link>
        </div>
      </main>
    );
  }

  if (!course) {
    useEffect(() => {
      logAccess('bypass_attempt', {
        courseSlug,
        user: user?.email || null,
        reason: 'course slug not found in COURSE_DETAILS',
        path: typeof window !== 'undefined' ? window.location.pathname : '',
      });
    }, []);
    return <main className="min-h-screen bg-paper flex items-center justify-center">Course not found.</main>;
  }

  const instructor = INSTRUCTORS.find((i) => i.id === 'master-lian');
  const hasContent = course.chapters.length > 0;
  const hasIncludes = course.includes.length > 0;

  return (
    <main className="min-h-screen bg-paper">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 pt-40 pb-24">
        {user && (
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center text-xs font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm">{user.name}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-ink/50">Student</div>
              </div>
            </div>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-ink/50 hover:text-ink transition-colors"
            >
              <LogOut size={14} />
              Sign out
            </button>
          </div>
        )}

        <div className={`h-px bg-ink/10 ${user ? 'mb-16' : 'mb-16'}`} />

        <section className="mb-24">
          <div className="eyebrow text-ink/50 mb-4">
            {course.level} Course · {course.levelZh}
          </div>
          <h1 className="display-lg mb-6">
            {course.title}
          </h1>
          <p className="text-lg text-ink/60 leading-relaxed max-w-2xl mb-10">
            {course.subtitle}
          </p>

          {hasContent && (
            <div className="flex items-center gap-8 text-xs tracking-[0.25em] uppercase text-ink/50">
              <span className="flex items-center gap-2"><Video size={14} /> {course.chapters.length} Chapters</span>
              <span className="flex items-center gap-2"><FileText size={14} /> Course Content</span>
              <span className="flex items-center gap-2"><Users size={14} /> Cohort {course.nextCohort.split(',')[0]}</span>
            </div>
          )}
        </section>

        {!hasContent && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ink/40" />
              <span className="eyebrow text-ink/50">Course Content</span>
            </div>
            <div className="py-20 border border-dashed border-ink/20 rounded-lg text-center">
              <Star size={28} className="mx-auto mb-4 text-ink/20" />
              <p className="text-sm text-ink/40">Content coming soon</p>
              <p className="text-xs text-ink/30 mt-2">This course is currently being prepared.</p>
            </div>
          </section>
        )}

        {hasIncludes && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ink/40" />
              <span className="eyebrow text-ink/50">What's included</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-3">
                  <CheckCircle2 size={16} className="text-vermilion mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasContent && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ink/40" />
              <span className="eyebrow text-ink/50">Curriculum</span>
            </div>
            <div className="space-y-10">
              {course.chapters.map((ch, ci) => (
                <div key={ch.id}>
                  <h3 className="font-display text-xl mb-4">
                    {String(ci + 1).padStart(2, '0')} · {ch.title}
                  </h3>
                  <ul className="space-y-2">
                    {ch.lessons.map((lesson, li) => (
                      <li key={lesson.id} className="flex items-baseline gap-4 py-2 border-b border-ink/5">
                        <span className="text-ink/40 font-display text-sm w-8">
                          {String(li + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-sm">{lesson.title}</span>
                        <span className="text-[10px] tracking-[0.25em] uppercase text-ink/40">
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

        {instructor && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ink/40" />
              <span className="eyebrow text-ink/50">Your Instructor</span>
            </div>
            <div className="flex flex-col md:flex-row gap-10 py-10 border-y border-ink/10">
              <div className="w-24 h-24 rounded-full bg-ink/10 flex items-center justify-center font-display text-4xl flex-shrink-0">
                {instructor.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl mb-2">{instructor.name}</h3>
                <div className="text-[10px] tracking-[0.3em] uppercase text-vermilion mb-4">
                  {instructor.title}
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{instructor.bio}</p>
              </div>
            </div>
          </section>
        )}

        <section className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ink/40" />
            <span className="eyebrow text-ink/50">Enroll Now</span>
          </div>
          <div className="bg-ink text-paper p-10 md:p-14 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="font-display text-3xl mb-2">Join the next cohort</div>
                <div className="text-xs tracking-[0.25em] uppercase text-paper/60">
                  Starts · {course.nextCohort}
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-paper text-ink rounded-full text-sm tracking-wide hover:bg-vermilion hover:text-paper transition-colors">
                Enroll Now →
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
