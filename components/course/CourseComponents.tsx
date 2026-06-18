'use client';

import Link from 'next/link';
import type { CourseDetail } from '@/lib/course-details';
import type { User as AuthUser } from '@/components/auth/AuthContext';
import type { Instructor } from '@/lib/instructors';
import { BackToHome } from '@/components/ui/BackToHome';
import { LogOut, Video, FileText, Users, CheckCircle2, Star, Calendar } from 'lucide-react';

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="h-px w-10" style={{ backgroundColor: 'rgba(14,20,25,0.28)' }} />
      <span className="eyebrow" style={{ color: 'rgba(14,20,25,0.45)' }}>{children}</span>
    </div>
  );
}

export function CourseHero({ course, user, logout, levelText, hasContent }: {
  course: CourseDetail;
  user: AuthUser | null;
  logout: () => void;
  levelText: string;
  hasContent: boolean;
}) {
  return (
    <div className="bg-ink text-paper pt-28 pb-20 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(192,57,43,0.08) 0%, transparent 70%)' }} />
      <div className="absolute right-0 bottom-0 pointer-events-none select-none" style={{ opacity: 0.03 }} aria-hidden="true">
        <span className="font-display text-[22rem] leading-none" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          {course.levelZh.replace(' ', '')}
        </span>
      </div>
      <div className="relative max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between mb-14">
          <BackToHome label="All Courses" href="/" />
          {user && (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: 'rgba(245,241,232,0.15)', color: '#F5F1E8' }}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm hidden sm:inline" style={{ color: 'rgba(245,241,232,0.60)' }}>
                  {user.name.split(' ')[0]}
                </span>
              </div>
              <button onClick={logout}
                className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase hover:opacity-70 transition-opacity"
                style={{ color: 'rgba(245,241,232,0.35)' }}>
                <LogOut size={12} /> Sign out
              </button>
            </div>
          )}
        </div>
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-medium mb-6 bg-white/10 ${levelText}`}>
          {course.level} &nbsp;·&nbsp; {course.levelZh}
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none text-paper mb-6 max-w-3xl">
          {course.title}
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: 'rgba(245,241,232,0.55)' }}>
          {course.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-6 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(245,241,232,0.35)' }}>
          {hasContent && (
            <>
              <span className="flex items-center gap-1.5"><Video size={13} /> {course.chapters.length} Chapters</span>
              <span className="flex items-center gap-1.5"><FileText size={13} /> Course content</span>
              <span className="flex items-center gap-1.5"><Users size={13} /> Cohort {course.nextCohort.split(',')[0]}</span>
            </>
          )}
          <span className="flex items-center gap-1.5"><Calendar size={13} /> Next: {course.nextCohort}</span>
        </div>
      </div>
    </div>
  );
}

export function CourseBody({ course, instructor, hasContent, hasIncludes }: {
  course: CourseDetail;
  instructor: Instructor | undefined;
  hasContent: boolean;
  hasIncludes: boolean;
}) {
  return (
    <>
      {!hasContent && (
        <section className="mb-20">
          <SectionLabel>Course Content</SectionLabel>
          <div className="py-24 rounded-2xl text-center" style={{ border: '1px dashed rgba(14,20,25,0.15)' }}>
            <Star size={24} className="mx-auto mb-4" style={{ color: 'rgba(14,20,25,0.20)' }} />
            <p className="text-sm" style={{ color: 'rgba(14,20,25,0.40)' }}>Content is currently being prepared</p>
            <p className="text-xs mt-2" style={{ color: 'rgba(14,20,25,0.25)' }}>Enrolled students receive early access.</p>
          </div>
        </section>
      )}

      {hasIncludes && (
        <section className="mb-20">
          <SectionLabel>{"What's included"}</SectionLabel>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 py-4" style={{ borderBottom: '1px solid rgba(14,20,25,0.08)' }}>
                <CheckCircle2 size={15} className="text-vermilion mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(14,20,25,0.75)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasContent && (
        <section className="mb-20">
          <SectionLabel>Curriculum</SectionLabel>
          <div className="space-y-10">
            {course.chapters.map((ch, ci) => (
              <div key={ch.id}>
                <h3 className="font-display text-2xl mb-5">{String(ci + 1).padStart(2, '0')} · {ch.title}</h3>
                <ul>
                  {ch.lessons.map((lesson, li) => (
                    <li key={lesson.id} className="flex items-baseline gap-4 py-3.5 px-2 -mx-2 rounded-lg transition-colors hover:bg-black/[0.015]"
                      style={{ borderBottom: '1px solid rgba(14,20,25,0.07)' }}>
                      <span className="font-display text-sm w-8 flex-shrink-0" style={{ color: 'rgba(14,20,25,0.30)' }}>
                        {String(li + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-sm" style={{ color: 'rgba(14,20,25,0.80)' }}>{lesson.title}</span>
                      <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(14,20,25,0.35)' }}>{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {instructor && (
        <section className="mb-20">
          <SectionLabel>Your Instructor</SectionLabel>
          <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-2xl"
            style={{ border: '1px solid rgba(14,20,25,0.08)', backgroundColor: 'rgba(14,20,25,0.012)' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center font-display text-4xl flex-shrink-0"
              style={{ backgroundColor: 'rgba(14,20,25,0.10)' }}>
              {instructor.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl mb-1">{instructor.name}</h3>
              <div className="text-[10px] tracking-[0.3em] uppercase text-vermilion mb-4">{instructor.title}</div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(14,20,25,0.60)' }}>{instructor.bio}</p>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="bg-ink text-paper p-10 md:p-14 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse 50% 80% at 0% 100%, rgba(192,57,43,0.10) 0%, transparent 60%)' }} />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="font-display text-3xl md:text-4xl mb-2">Join the next cohort</div>
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(245,241,232,0.40)' }}>
                <Calendar size={12} /> Starts · {course.nextCohort}
              </div>
              <div className="mt-3 font-display text-2xl text-vermilion">{course.price}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-paper text-ink rounded-full text-sm tracking-wide hover:bg-vermilion hover:text-paper transition-all duration-300">
                Enroll Now →
              </button>
              <Link href="/" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm rounded-full transition-all duration-300"
                style={{ color: 'rgba(245,241,232,0.50)', border: '1px solid rgba(245,241,232,0.15)' }}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
