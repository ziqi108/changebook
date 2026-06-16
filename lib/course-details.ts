export type Lesson = {
  id: string;
  title: string;
  duration: string;
  description: string;
};

export type CourseChapter = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type CourseDetail = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  level: string;
  levelZh: string;
  chapters: CourseChapter[];
  includes: string[];
  price: string;
  currency: string;
  nextCohort: string;
};

export const COURSE_DETAILS: Record<string, CourseDetail> = {
  'beginner-course': {
    slug: 'beginner-course',
    title: 'Beginner I Ching',
    subtitle: 'Foundations of the Book of Changes — yin yang, the eight trigrams, and your first hexagram readings.',
    heroImage: 'from-ink to-ink-deep',
    level: 'Beginner',
    levelZh: '初 級',
    price: '$340',
    currency: 'USD',
    nextCohort: 'July 14, 2026',
    includes: [],
    chapters: [],
  },
  'intermediate-course': {
    slug: 'intermediate-course',
    title: 'Intermediate I Ching',
    subtitle: 'Master the 64 hexagrams with depth — Jungian psychology, advanced interpretation, and live Q&A sessions.',
    heroImage: 'from-paper to-paper-soft',
    level: 'Intermediate',
    levelZh: '中 級',
    price: '$880',
    currency: 'USD',
    nextCohort: 'August 28, 2026',
    includes: [],
    chapters: [],
  },
  'advanced-course': {
    slug: 'advanced-course',
    title: 'Advanced I Ching',
    subtitle: 'The deepest layers of the I Ching — Xici commentary, Mei Hua numerology, Qimen Dunjia, and teaching certification.',
    heroImage: 'from-jade to-jade-deep',
    level: 'Advanced',
    levelZh: '高 級',
    price: '$1,880',
    currency: 'USD',
    nextCohort: 'October 12, 2026',
    includes: [],
    chapters: [],
  },
  'consult': {
    slug: 'consult',
    title: 'Private I Ching Consultation',
    subtitle: 'One-on-one session with a master teacher — personalized hexagram reading for your life questions.',
    heroImage: 'from-vermilion to-vermilion-deep',
    level: 'Private',
    levelZh: '私 人',
    price: '$220',
    currency: 'USD',
    nextCohort: 'Available now',
    includes: [
      '60-minute one-on-one video session',
      'Pre-session questionnaire & intake',
      'Full hexagram reading with report (PDF)',
      'Follow-up email summary within 48 hours',
      'Booking within 7 days of request',
      'Available in English, 中文, 日本語, Deutsch, Français',
    ],
    chapters: [],
  },
};

export const getCourseBySlug = (slug: string) => COURSE_DETAILS[slug];
