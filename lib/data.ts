import { ARTICLES } from './generated/articles.generated';

export type ModuleItem = {
  slug: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'consult';
  title: string;
  tagline: string;
  description: string;
  accent: 'ink' | 'vermilion' | 'jade' | 'gold';
  hexagramIds: number[];
  duration: string;
  lessons: number;
  features: string[];
  price: string;
  status: 'Available' | 'In Development' | 'Currently Unavailable';
};

export const MODULES: ModuleItem[] = [
  {
    slug: 'beginner-course',
    level: 'beginner',
    title: 'Beginner Course',
    tagline: 'The Gateway',
    description:
      'Foundations of yin & yang, the eight trigrams, and the Three Powers framework — a beginner path from observation to application.',
    accent: 'ink',
    hexagramIds: [1, 2],
    duration: '6 weeks',
    lessons: 6,
    features: ['Yin & Yang foundations', 'Eight trigrams', 'Three Powers framework', 'Your first hexagrams', 'Daily ritual guide'],
    price: 'Free',
    status: 'Available',
  },
  {
    slug: 'intermediate-course',
    level: 'intermediate',
    title: 'Intermediate Course',
    tagline: 'The Hexagram Path',
    description:
      'A guided journey through the hexagrams with modern life applications — relationships, career, self-cultivation.',
    accent: 'gold',
    hexagramIds: [11, 12],
    duration: '',
    lessons: 0,
    features: [],
    price: 'Free',
    status: 'Available',
  },
  {
    slug: 'advanced-course',
    level: 'advanced',
    title: 'Advanced Study',
    tagline: 'In Development',
    description:
      'Deep study of the classical commentaries. This program is currently in development; join the newsletter for future program updates.',
    accent: 'jade',
    hexagramIds: [63, 64],
    duration: '',
    lessons: 0,
    features: [],
    price: 'Free',
    status: 'In Development',
  },
  {
    slug: 'consult',
    level: 'consult',
    title: 'Private Reflection Session',
    tagline: 'Currently Unavailable',
    description:
      'A one-to-one educational conversation using I Ching concepts to reflect on change, responsibility, priorities, and possible next steps. Currently unavailable; join the newsletter for updates.',
    accent: 'vermilion',
    hexagramIds: [3, 4],
    duration: '',
    lessons: 0,
    features: [],
    price: 'Free',
    status: 'Currently Unavailable',
  },
];

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'quote'; text: string };

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverGradient: string;
  date: string;
  /** ISO 8601 日期（YYYY-MM-DD），供 metadata / JSON-LD / sitemap 使用；date 为展示文本 */
  dateIso: string;
  readTime: string;
  tags: string[];
  author: string;
  authorInitials: string;
  featured?: boolean;
  body?: ArticleBlock[];
  /**
   * i18n 字段：
   * - locale：文章语言（'en' | 'zh-CN'），每篇文章单一语言，不中英混排
   * - translationKey：中英文对应文章的稳定关联键（与语言、slug 无关）
   *   语言切换器和 hreflang 依据 translationKey 查找对应语言版本；
   *   对应翻译未发布时不得输出指向它的 hreflang/链接。
   */
  locale: 'en' | 'zh-CN';
  translationKey: string;
};

/**
 * 文章数据源：content/articles/<slug>.en.md / .zh.md（CMS 事实源）。
 * 构建前由 scripts/generate-content.mjs 生成 lib/generated/articles.generated.ts。
 * - locale：文章语言（'en' | 'zh-CN'），每篇文章单一语言，不中英混排
 * - translationKey：中英文对应文章的稳定关联键（multiple_files 结构下 = 文件 basename）
 *   语言切换器和 hreflang 依据 translationKey 查找对应语言版本；
 *   对应翻译未发布时不得输出指向它的 hreflang/链接。
 */
export const FEATURED_ARTICLES: Article[] = ARTICLES;

export const GET_ARTICLE_BY_SLUG = (slug: string) =>
  FEATURED_ARTICLES.find((a) => a.slug === slug);

export const EN_ARTICLES: Article[] = FEATURED_ARTICLES.filter((a) => a.locale === 'en');

export const ZH_ARTICLES: Article[] = FEATURED_ARTICLES.filter((a) => a.locale === 'zh-CN');

/**
 * 按 translationKey 查找另一语言版本的已发布文章。
 * 不存在时返回 undefined —— 调用方据此不输出 hreflang / 语言切换链接。
 */
export const GET_TRANSLATION = (
  article: Article,
  targetLocale: 'en' | 'zh-CN'
): Article | undefined =>
  FEATURED_ARTICLES.find(
    (a) =>
      a.translationKey === article.translationKey &&
      a.locale === targetLocale &&
      a.locale !== article.locale
  );

export type FAQ = {
  question: string;
  answer: string;
};

export const FAQS: FAQ[] = [
  {
    question: 'Do I need any prior knowledge of Chinese culture or the I Ching?',
    answer: 'Not at all. Our Beginner Course is designed for complete newcomers. We start from the very foundations — what yin and yang are, how the trigrams work, and how to hold your first casting. All cultural context is woven into the lessons naturally.',
  },
  {
    question: 'How much time should I dedicate each week?',
    answer: 'We recommend 4–6 hours for the Beginner Course, 6–8 hours for Intermediate, and 8–12 hours for Advanced. However, the courses are self-paced within your cohort\'s timeline, and lifetime access means you can revisit material anytime.',
  },
  {
    question: 'Is the content available in other languages?',
    answer: 'Currently, all courses are in English with bilingual (English-Chinese) texts in the classical sections. Reflection sessions are currently unavailable; join the newsletter for future updates.',
  },
  {
    question: 'What if the courses are not for me?',
    answer: 'All current courses are offered free of charge, so there is no payment to refund. If the material does not resonate, you are free to step away at any time, no questions asked.',
  },
  {
    question: 'What is a Private Reflection Session?',
    answer: 'A Reflection Session is a one-to-one educational conversation that uses I Ching concepts to reflect on change, responsibility, priorities, and possible next steps. It is educational and exploratory, and does not provide medical, psychological, legal, financial, or other professional advice. No specific future outcome is guaranteed. Sessions are currently unavailable; join the newsletter for updates.',
  },
  {
    question: 'Can I take multiple courses simultaneously?',
    answer: 'The Beginner Course is available now. The Intermediate and Advanced programs are currently in development. Join the newsletter to be notified as new programs become available.',
  },
];
