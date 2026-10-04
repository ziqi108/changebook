import { COURSE_DETAILS_DATA } from './generated/courses.generated';

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

export const COURSE_DETAILS: Record<string, CourseDetail> = COURSE_DETAILS_DATA;

export const getCourseBySlug = (slug: string) => COURSE_DETAILS[slug];
