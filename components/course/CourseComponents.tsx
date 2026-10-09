'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { CourseDetail, Lesson } from '@/lib/course-details';
import type { Instructor } from '@/lib/instructors';
import type { Locale } from '@/lib/i18n';
import { BackToHome } from '@/components/ui/BackToHome';
import { Video, FileText, Users, CheckCircle2, Star, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const UI = {
  en: {
    backLabel: 'All Courses',
    backHref: '/',
    chapters: 'Chapters',
    content: 'Course content',
    cohort: 'Cohort',
    next: 'Next: ',
    sectionEmpty: 'Course Content',
    emptyPrep: 'Content is currently being prepared',
    emptyNote: 'Enrolled students receive early access.',
    includes: "What's included",
    objectives: 'Course Objectives',
    curriculum: 'Curriculum',
    instructor: 'Your Instructor',
    studying: 'Begin studying',
    freeStudy: 'Begin Free Study →',
    backHome: 'Back to Home',
    disclaimer: 'Educational Disclaimer',
    disclaimerHref: '/educational-disclaimer',
    devTitle: 'In Development',
    unavailTitle: 'Currently Unavailable',
    newsletter: 'Join the newsletter for updates.',
  },
  zh: {
    backLabel: '返回首页',
    backHref: '/zh',
    chapters: '章',
    content: '课程内容',
    cohort: '班期',
    next: '下一期：',
    sectionEmpty: '课程内容',
    emptyPrep: '内容正在准备中',
    emptyNote: '已报名学员将提前获得访问权限。',
    includes: '课程包含',
    objectives: '课程目标',
    curriculum: '课程大纲',
    instructor: '授课讲师',
    studying: '开始学习',
    freeStudy: '免费开始学习 →',
    backHome: '返回首页',
    disclaimer: '教育免责声明',
    disclaimerHref: '/zh/educational-disclaimer',
    devTitle: '开发中',
    unavailTitle: '暂不可用',
    newsletter: '订阅通讯，获取最新课程动态。',
  },
} as const;

const UNAVAILABLE_SENTINELS = ['Currently unavailable', 'TBA', '暂不可用', '待定'];

function LessonContent({ lesson }: { lesson: Lesson }) {
  const [open, setOpen] = useState(false);

  const renderInline = (text: string) => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`/g;
    let lastIdx = 0;
    let match: RegExpExecArray | null;
    let key = 0;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIdx) parts.push(text.slice(lastIdx, match.index));
      if (match[1]) parts.push(<strong key={`b-${key++}`}>{match[1]}</strong>);
      else if (match[2]) parts.push(<em key={`i-${key++}`}>{match[2]}</em>);
      else if (match[3]) parts.push(<code key={`c-${key++}`} className="font-mono text-xs bg-black/5 px-1 py-0.5 rounded">{match[3]}</code>);
      lastIdx = regex.lastIndex;
    }
    if (lastIdx < text.length) parts.push(text.slice(lastIdx));
    return parts;
  };

  const renderContent = (desc: string) => {
    const lines = desc.split('\n');
    const blocks: string[] = [];
    let currentBlock: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
      } else if (/^[-*] /.test(trimmed)) {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
        }
        currentBlock = [line];
      } else if (/^> /.test(trimmed) && currentBlock.length > 0 && /^[-*] /.test(currentBlock[currentBlock.length - 1].trim())) {
        currentBlock.push(line);
      } else {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
        currentBlock = [line];
      }
    }
    if (currentBlock.length > 0) {
      blocks.push(currentBlock.join('\n'));
    }

    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (/^[-*] /.test(trimmed)) {
        const linesArr = trimmed.split('\n');
        const items: { text: string; quote?: string }[] = [];
        let currentItem: { text: string; quote?: string } | null = null;

        for (const line of linesArr) {
          const lineTrimmed = line.trim();
          if (/^[-*] /.test(lineTrimmed)) {
            if (currentItem) items.push(currentItem);
            currentItem = { text: lineTrimmed.replace(/^[-*] /, '') };
          } else if (/^> /.test(lineTrimmed) && currentItem) {
            currentItem.quote = lineTrimmed.replace(/^> /, '');
          }
        }
        if (currentItem) items.push(currentItem);

        return (
          <ul key={idx} className="my-3 space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(192,57,43,0.60)' }} />
                <div className="flex-1">
                  <div className="text-sm leading-relaxed" style={{ color: 'rgba(14,20,25,0.85)' }}>
                    {renderInline(item.text)}
                  </div>
                  {item.quote && (
                    <blockquote className="mt-1.5 pl-3 py-1 border-l-2 text-xs italic" style={{ borderColor: 'rgba(192,57,43,0.35)', color: 'rgba(14,20,25,0.60)', backgroundColor: 'rgba(192,57,43,0.03)' }}>
                      {renderInline(item.quote)}
                    </blockquote>
                  )}
                </div>
              </li>
            ))}
          </ul>
        );
      }

      if (/^> /.test(trimmed)) {
        const linesArr = trimmed.split('\n').filter(l => l.startsWith('> ')).map(l => l.replace(/^> /, ''));
        return (
          <blockquote key={idx} className="my-3 pl-4 py-2 border-l-2 text-sm italic" style={{ borderColor: 'rgba(192,57,43,0.35)', color: 'rgba(14,20,25,0.65)', backgroundColor: 'rgba(192,57,43,0.04)' }}>
            {linesArr.map((line, i) => (
              <p key={i} className="leading-relaxed">{renderInline(line)}</p>
            ))}
          </blockquote>
        );
      }

      return (
        <p key={idx} className="my-3 text-sm leading-relaxed" style={{ color: 'rgba(14,20,25,0.70)' }}>
          {renderInline(trimmed)}
        </p>
      );
    });
  };

  return (
    <li className="rounded-lg transition-colors" style={{ borderBottom: '1px solid rgba(14,20,25,0.07)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-baseline gap-4 py-3.5 px-2 -mx-2 text-left rounded-lg hover:bg-black/[0.015] transition-colors"
        aria-expanded={open}
      >
        <span className="font-display text-sm w-8 flex-shrink-0" style={{ color: 'rgba(14,20,25,0.30)' }}>
          &nbsp;
        </span>
        <span className="flex-1 text-sm" style={{ color: 'rgba(14,20,25,0.80)' }}>{lesson.title}</span>
        <span className="text-[10px] tracking-[0.25em] uppercase flex items-center gap-1" style={{ color: 'rgba(14,20,25,0.35)' }}>
          {lesson.duration}
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </span>
      </button>
      {open && (
        <div className="px-2 pb-5 pt-1 -mx-2" style={{ backgroundColor: 'rgba(14,20,25,0.015)' }}>
          <div className="px-5 py-4 rounded-lg" style={{ border: '1px solid rgba(14,20,25,0.06)', backgroundColor: 'rgba(255,255,255,0.7)' }}>
            {renderContent(lesson.description)}
          </div>
        </div>
      )}
    </li>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 mb-8">
      <span className="h-px w-10" style={{ backgroundColor: 'rgba(14,20,25,0.28)' }} />
      <span className="eyebrow" style={{ color: 'rgba(14,20,25,0.45)' }}>{children}</span>
    </h2>
  );
}

export function CourseHero({ course, levelText, hasContent, locale = 'en' }: {
  course: CourseDetail;
  levelText: string;
  hasContent: boolean;
  locale?: Locale;
}) {
  const t = UI[locale === 'zh-CN' ? 'zh' : 'en'];
  return (
    <div className="bg-ink text-paper pt-28 pb-20 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(192,57,43,0.08) 0%, transparent 70%)' }} />
      <div className="relative max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between mb-14">
          <BackToHome label={t.backLabel} href={t.backHref} />
        </div>
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-medium mb-6 bg-white/10 ${levelText}`}>
          {locale === 'zh-CN' ? (course.levelZh || course.level) : course.level}
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
              <span className="flex items-center gap-1.5"><Video size={13} /> {course.chapters.length} {t.chapters}</span>
              <span className="flex items-center gap-1.5"><FileText size={13} /> {t.content}</span>
              <span className="flex items-center gap-1.5"><Users size={13} /> {t.cohort} {course.nextCohort.split(',')[0]}</span>
            </>
          )}
          <span className="flex items-center gap-1.5"><Calendar size={13} /> {t.next}{course.nextCohort}</span>
        </div>
      </div>
    </div>
  );
}

export function CourseBody({ course, instructor, hasContent, hasIncludes, locale = 'en' }: {
  course: CourseDetail;
  instructor: Instructor | undefined;
  hasContent: boolean;
  hasIncludes: boolean;
  locale?: Locale;
}) {
  const t = UI[locale === 'zh-CN' ? 'zh' : 'en'];
  const isZh = locale === 'zh-CN';

  return (
    <>
      {!hasContent && (
        <section className="mb-20">
          <SectionLabel>{t.sectionEmpty}</SectionLabel>
          <div className="py-24 rounded-2xl text-center" style={{ border: '1px dashed rgba(14,20,25,0.15)' }}>
            <Star size={24} className="mx-auto mb-4" style={{ color: 'rgba(14,20,25,0.20)' }} />
            <p className="text-sm" style={{ color: 'rgba(14,20,25,0.40)' }}>{t.emptyPrep}</p>
            <p className="text-xs mt-2" style={{ color: 'rgba(14,20,25,0.25)' }}>{t.emptyNote}</p>
          </div>
        </section>
      )}

      {hasIncludes && (
        <section className="mb-20">
          <SectionLabel>{t.includes}</SectionLabel>
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

      {course.objectives.length > 0 && (
        <section className="mb-20">
          <SectionLabel>{t.objectives}</SectionLabel>
          <ul className="space-y-4">
            {course.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-display text-vermilion text-lg leading-none mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(14,20,25,0.75)' }}>{obj}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasContent && (
        <section className="mb-20">
          <SectionLabel>{t.curriculum}</SectionLabel>
          <div className="space-y-10">
            {course.chapters.map((ch, ci) => (
              <div key={ch.id}>
                <h3 className="font-display text-2xl mb-5">{String(ci + 1).padStart(2, '0')} · {ch.title}</h3>
                <ul className="divide-y divide-black/[0.05]">
                  {ch.lessons.map((lesson) => (
                    <LessonContent key={lesson.id} lesson={lesson} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {instructor && (
        <section className="mb-20">
          <SectionLabel>{t.instructor}</SectionLabel>
          <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-2xl"
            style={{ border: '1px solid rgba(14,20,25,0.08)', backgroundColor: 'rgba(14,20,25,0.012)' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center font-display text-4xl flex-shrink-0"
              style={{ backgroundColor: 'rgba(14,20,25,0.10)' }}>
              {(isZh ? instructor.nameZh : instructor.name).charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl mb-1">{isZh ? instructor.nameZh : instructor.name}</h3>
              <div className="text-[10px] tracking-[0.3em] uppercase text-vermilion mb-4">
                {isZh ? (instructor.titleZh ?? instructor.title) : instructor.title}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(14,20,25,0.60)' }}>
                {isZh ? (instructor.bioZh ?? instructor.bio) : instructor.bio}
              </p>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="bg-ink text-paper p-10 md:p-14 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse 50% 80% at 0% 100%, rgba(192,57,43,0.10) 0%, transparent 60%)' }} />
          {UNAVAILABLE_SENTINELS.includes(course.nextCohort) ? (
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="font-display text-3xl md:text-4xl mb-2">
                  {course.nextCohort === 'Currently unavailable' || course.nextCohort === '暂不可用'
                    ? t.unavailTitle
                    : t.devTitle}
                </div>
                <div className="text-sm" style={{ color: 'rgba(245,241,232,0.55)' }}>
                  {t.newsletter}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={t.backHref} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-paper text-ink rounded-full text-sm tracking-wide hover:bg-vermilion hover:text-paper transition-all duration-300">
                  {t.backHome}
                </Link>
                <Link href={t.disclaimerHref} className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm rounded-full transition-all duration-300"
                  style={{ color: 'rgba(245,241,232,0.50)', border: '1px solid rgba(245,241,232,0.15)' }}>
                  {t.disclaimer}
                </Link>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="font-display text-3xl md:text-4xl mb-2">{t.studying}</div>
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(245,241,232,0.40)' }}>
                  <Calendar size={12} /> {course.nextCohort}
                </div>
                <div className="mt-3 font-display text-2xl text-vermilion">{course.price}</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-paper text-ink rounded-full text-sm tracking-wide hover:bg-vermilion hover:text-paper transition-all duration-300">
                  {t.freeStudy}
                </button>
                <Link href={t.backHref} className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm rounded-full transition-all duration-300"
                  style={{ color: 'rgba(245,241,232,0.50)', border: '1px solid rgba(245,241,232,0.15)' }}>
                  {t.backHome}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
