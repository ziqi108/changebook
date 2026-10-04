/**
 * 中文课程数据源：content/courses/<slug>.zh.json（CMS 事实源）。
 * 构建前由 scripts/generate-content.mjs 生成 lib/generated/courses.generated.ts。
 */
import type { CourseDetail } from '@/lib/course-details';
import { COURSE_DETAILS_ZH_DATA } from './generated/courses.generated';

export const COURSE_DETAILS_ZH: Record<string, CourseDetail> = COURSE_DETAILS_ZH_DATA;

export const getCourseBySlugZh = (slug: string): CourseDetail | undefined =>
  COURSE_DETAILS_ZH[slug];
