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
  rating: number;
  students: number;
  price: string;
};

export const MODULES: ModuleItem[] = [
  {
    slug: 'beginner-course',
    level: 'beginner',
    title: 'Beginner Course',
    tagline: 'The Gateway',
    description:
      'Foundations of yin & yang, the eight trigrams, coin casting, and your first hexagram. Designed for complete newcomers.',
    accent: 'ink',
    hexagramIds: [1, 2],
    duration: '4 weeks',
    lessons: 22,
    features: ['Yin & Yang foundations', 'Eight trigrams', 'Coin casting practice', 'First 10 hexagrams', 'Daily ritual guide'],
    rating: 4.92,
    students: 4280,
    price: '$340',
  },
  {
    slug: 'intermediate-course',
    level: 'intermediate',
    title: 'Intermediate Course',
    tagline: 'The 64 Hexagrams',
    description:
      'A guided journey through all sixty-four hexagrams with modern life applications — relationships, career, self-cultivation.',
    accent: 'gold',
    hexagramIds: [11, 12],
    duration: '12 weeks',
    lessons: 64,
    features: ['Full 64 hexagram canon', 'Jungian interpretation', 'Monthly live Q&A', 'Psychological framework', 'Lifetime access'],
    rating: 4.95,
    students: 2840,
    price: '$880',
  },
  {
    slug: 'advanced-course',
    level: 'advanced',
    title: 'Advanced Course',
    tagline: 'The Classical Texts',
    description:
      'Deep study of the Xici (Great Commentary), the Shuo Gua, and Mei Hua numerology. Bridging I Ching with Jungian psychology.',
    accent: 'jade',
    hexagramIds: [63, 64],
    duration: '20 weeks',
    lessons: 36,
    features: ['Xici & Shuo Gua classics', 'Mei Hua numerology', 'Qimen Dunjia', 'Depth psychology', 'Printed texts included'],
    rating: 4.98,
    students: 1240,
    price: '$1,880',
  },
  {
    slug: 'consult',
    level: 'consult',
    title: 'Private Consultation',
    tagline: 'Direct Guidance',
    description:
      'A one-on-one reading with a master teacher. Career decisions, relationship clarity, life transitions — meet the wisdom face to face.',
    accent: 'vermilion',
    hexagramIds: [3, 4],
    duration: '60 min',
    lessons: 1,
    features: ['60-min video session', 'Full hexagram report', 'Follow-up summary', 'Multilingual available', '7-day booking'],
    rating: 4.99,
    students: 10200,
    price: '$220',
  },
];

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverGradient: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  authorInitials: string;
  featured?: boolean;
};

export const FEATURED_ARTICLES: Article[] = [
  {
    slug: 'yin-yang-in-modern-life',
    title: 'Yin & Yang in Modern Life: Balancing Doing and Being',
    subtitle: 'The ancient duality offers a surprisingly modern vocabulary for burnout, rest, and creative flow.',
    excerpt:
      'How the ancient duality of the I Ching offers a surprisingly modern vocabulary for burnout, rest, and creative flow.',
    coverGradient: 'from-ink to-ink-soft',
    date: 'May 28, 2026',
    readTime: '7 min read',
    tags: ['Philosophy', 'Wellness'],
    author: 'Master Yang Wen',
    authorInitials: 'YW',
    featured: true,
  },
  {
    slug: 'hexagram-11-flow',
    title: 'Hexagram 11 — Tài: The Art of Flow in Relationship',
    subtitle: 'When heaven and earth unite, everything flows.',
    excerpt:
      'When heaven and earth unite, everything flows. A practical reading of Tài for couples, teammates, and creative partnerships.',
    coverGradient: 'from-vermilion to-vermilion-deep',
    date: 'May 21, 2026',
    readTime: '9 min read',
    tags: ['Hexagrams', 'Relationships'],
    author: 'Master Lian Chen',
    authorInitials: 'LC',
  },
  {
    slug: 'i-ching-vs-tarot',
    title: 'I Ching vs. Tarot: Which Divination System Fits You?',
    subtitle: 'Two powerful traditions, two very different spirits.',
    excerpt:
      'Two powerful traditions, two very different spirits. A thoughtful comparison for the modern spiritual seeker.',
    coverGradient: 'from-jade to-jade-soft',
    date: 'May 14, 2026',
    readTime: '6 min read',
    tags: ['Comparison', 'Divination'],
    author: 'Master Wu Xi',
    authorInitials: 'WX',
  },
  {
    slug: 'decision-making-64-hexagrams',
    title: 'Making Better Decisions: A Week with the 64 Hexagrams',
    subtitle: 'A seven-day practice of consulting the I Ching on small daily choices.',
    excerpt:
      'A seven-day practice of consulting the I Ching on small daily choices — and noticing how your intuition sharpens.',
    coverGradient: 'from-gold to-vermilion',
    date: 'May 7, 2026',
    readTime: '11 min read',
    tags: ['Practice', 'Decision Making'],
    author: 'Master Yang Wen',
    authorInitials: 'YW',
  },
  {
    slug: 'burnout-as-yin-deficit',
    title: 'Burnout as Yin Deficit: An I Ching Diagnosis',
    subtitle: 'Why constant doing depletes your life force — and how to restore it.',
    excerpt:
      'The I Ching views burnout not as a failure of willpower but as an imbalance of yin and yang. Understanding the diagnosis is the first step toward restoration.',
    coverGradient: 'from-ink-deep to-jade',
    date: 'April 30, 2026',
    readTime: '8 min read',
    tags: ['Wellness', 'Philosophy'],
    author: 'Master Wu Xi',
    authorInitials: 'WX',
  },
  {
    slug: 'career-cycles-hexagram-24',
    title: 'Career Cycles & Hexagram 24: The Return',
    subtitle: 'Why hitting rock bottom in your career is actually a sacred moment.',
    excerpt:
      'Hexagram 24 (復) describes the smallest return — a single light emerging from darkness. This reading explores how career rock-bottoms are often the beginning of a more authentic path.',
    coverGradient: 'from-vermilion-soft to-gold',
    date: 'April 23, 2026',
    readTime: '10 min read',
    tags: ['Career', 'Hexagrams'],
    author: 'Master Lian Chen',
    authorInitials: 'LC',
  },
  {
    slug: 'synchronicity-and-the-i-ching',
    title: 'Synchronicity and the I Ching: Jung\'s Red Book Connection',
    subtitle: 'How Carl Jung\'s encounter with the I Ching reshaped depth psychology.',
    excerpt:
      'Long before the Red Book was published, Carl Jung was consulting the I Ching daily. This article explores how the ancient oracle shaped his understanding of synchronicity and the collective unconscious.',
    coverGradient: 'from-jade-deep to-ink',
    date: 'April 16, 2026',
    readTime: '12 min read',
    tags: ['Psychology', 'History'],
    author: 'Master Yang Wen',
    authorInitials: 'YW',
  },
  {
    slug: 'reading-hexagrams-for-creatives',
    title: 'Reading Hexagrams for Creatives: Artists, Writers, and Musicians',
    subtitle: 'How the I Ching can unlock creative blocks and guide artistic vision.',
    excerpt:
      'For the creative practitioner, the I Ching is more than a decision-making tool — it is a mirror for the creative process itself. This guide offers a special casting ritual for artists.',
    coverGradient: 'from-gold to-vermilion-deep',
    date: 'April 9, 2026',
    readTime: '9 min read',
    tags: ['Creativity', 'Practice'],
    author: 'Master Wu Xi',
    authorInitials: 'WX',
  },
  {
    slug: 'the-eight-trigrams-explained',
    title: 'The Eight Trigrams Explained: A Complete Visual Guide',
    subtitle: 'From Heaven to Earth, Thunder to Wind — the building blocks of the I Ching.',
    excerpt:
      'Before there were 64 hexagrams, there were 8 trigrams (八卦). Understanding these eight symbols is the foundation of all I Ching study. Here is your complete visual guide.',
    coverGradient: 'from-ink-soft to-gold',
    date: 'April 2, 2026',
    readTime: '14 min read',
    tags: ['Foundations', 'Education'],
    author: 'Master Lian Chen',
    authorInitials: 'LC',
  },
];

export const GET_ARTICLE_BY_SLUG = (slug: string) =>
  FEATURED_ARTICLES.find((a) => a.slug === slug);

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
    answer: 'Currently, all courses are in English with bilingual (English-Chinese) texts in the classical sections. Our master teachers are available for private consultations in English, 中文, 日本語, Deutsch, and Français.',
  },
  {
    question: 'What if I am not satisfied with the course?',
    answer: 'We offer a 14-day money-back guarantee, no questions asked. If the I Ching does not resonate with you in the first two weeks, we will refund your full tuition. We are confident in the quality because we have seen the transformation for thousands of students.',
  },
  {
    question: 'How does a private consultation work?',
    answer: 'After booking, you will receive a detailed intake form. The master will prepare your session in advance, casting the hexagrams based on your question. The 60-minute video session includes the full reading, interpretation, and a written report delivered within 48 hours.',
  },
  {
    question: 'Can I take multiple courses simultaneously?',
    answer: 'We recommend completing the Beginner Course before starting Intermediate, but it is not mandatory. Many students take the Intermediate course after self-studying the basics. The Advanced course requires completion of at least one prior course or an assessment call with a master.',
  },
];

export type DispatchItem = {
  id: string;
  title: string;
  tag: string;
  date: string;
};

export const DISPATCHES: DispatchItem[] = [
  {
    id: 'd1',
    title: 'The monthly dispatch: What the I Ching says about 2026',
    tag: 'Cosmic Calendar',
    date: 'June 1, 2026',
  },
  {
    id: 'd2',
    title: 'Master Lian\'s summer retreat: Booking opens July 1',
    tag: 'Announcement',
    date: 'May 28, 2026',
  },
  {
    id: 'd3',
    title: 'New Mei Hua course starts in October — early access for alumni',
    tag: 'Course News',
    date: 'May 15, 2026',
  },
  {
    id: 'd4',
    title: 'Reader spotlight: How therapists are using hexagrams with clients',
    tag: 'Community',
    date: 'May 1, 2026',
  },
];

export type StatItem = {
  number: string;
  label: string;
  sublabel?: string;
};

export const GLOBAL_STATS: StatItem[] = [
  { number: '12,400+', label: 'Students Worldwide', sublabel: 'Across 38 countries' },
  { number: '3', label: 'Master Teachers', sublabel: 'Lineage-holding practitioners' },
  { number: '4.96', label: 'Average Rating', sublabel: 'From 2,400+ verified reviews' },
  { number: '64', label: 'Hexagrams Taught', sublabel: 'Complete canonical canon' },
];
