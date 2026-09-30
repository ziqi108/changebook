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
      'Foundations of yin & yang, the eight trigrams, coin casting, and your first hexagram. Designed for complete newcomers.',
    accent: 'ink',
    hexagramIds: [1, 2],
    duration: '4 weeks',
    lessons: 22,
    features: ['Yin & Yang foundations', 'Eight trigrams', 'Coin casting practice', 'First 10 hexagrams', 'Daily ritual guide'],
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
  readTime: string;
  tags: string[];
  author: string;
  authorInitials: string;
  featured?: boolean;
  body?: ArticleBlock[];
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
    author: 'Liu Xize',
    authorInitials: 'LX',
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
    author: 'Liu Xize',
    authorInitials: 'LX',
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
    author: 'Liu Xize',
    authorInitials: 'LX',
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
    author: 'Liu Xize',
    authorInitials: 'LX',
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
    author: 'Liu Xize',
    authorInitials: 'LX',
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
    author: 'Liu Xize',
    authorInitials: 'LX',
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
    author: 'Liu Xize',
    authorInitials: 'LX',
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
    author: 'Liu Xize',
    authorInitials: 'LX',
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
    author: 'Liu Xize',
    authorInitials: 'LX',
  },
  {
    slug: 'casting-the-coins-evening-ritual',
    title: 'Casting the Coins: A Beginner\'s Evening Ritual',
    subtitle: 'A simple, candlelit practice for consulting the Book of Changes — no expertise required.',
    excerpt:
      'A grounded, step-by-step evening ritual for casting the I Ching coins. Designed for newcomers who want a contemplative practice, not a party trick.',
    coverGradient: 'from-ink-deep to-vermilion-soft',
    date: 'September 24, 2026',
    readTime: '8 min read',
    tags: ['Practice', 'Ritual'],
    author: 'Liu Xize',
    authorInitials: 'LX',
    body: [
      { type: 'p', text: 'There is a particular kind of quiet that arrives at the end of a long day. The emails have been answered, the dishes stacked, the last scroll through the news abandoned. In that quiet, a question often surfaces — one you have been carrying all day without quite noticing.' },
      { type: 'p', text: 'For nearly three thousand years, readers of the I Ching have met that quiet with a small ritual: three coins, a candle, and a notebook. Not to predict the future, but to hear themselves more clearly. The Book of Changes is, in this sense, less a fortune-telling device than a conversation partner — one that happens to be older than many of the world’s living traditions.' },
      { type: 'p', text: 'You will need very little. A flat surface. Three coins (any coins; the sages were never particular about currency). A candle, if you like. A notebook and a pen. And a question — something real to you, held honestly in the heart rather than performed for an audience.' },
      { type: 'quote', text: '“To learn and at due times to practice what one has learned — is that not a pleasure?” — Confucius, Analects 1.1' },
      { type: 'p', text: 'Hold the question lightly in your mind as you shake the three coins in your cupped hands and let them fall. Heads count three, tails count two. Six such throws build a hexagram from the bottom up — six lines, each solid or broken, that together form one of sixty-four patterns. The pattern is your reading. There are apps that will identify the hexagram in seconds; a small printed reference card works just as well.' },
      { type: 'p', text: 'Here is the part most beginners skip, and the part that matters most. Do not ask what the hexagram means. Ask instead: where, in the six lines, do you recognize yourself? The Book of Changes will not tell you what to do. It will show you the shape of the moment you are standing inside — and leave the choosing to you.' },
      { type: 'p', text: 'When you are done, write down three things: the question you asked, the hexagram you received, and the first sentence that came to you as you read it. No more. The goal is not a neat conclusion. The goal is to mark the moment — to place a small stone in the river of an ordinary evening, so that the next morning, looking back, you can find it again.' },
      { type: 'quote', text: '“The I Ching does not offer itself to be mastered. It offers itself to be entered, line by line, over a lifetime.”' },
      { type: 'p', text: 'Three coins. Six lines. One honest question. That is the whole of it. The rest is practice.' },
    ],
  },
  {
    slug: 'i-ching-and-stoicism-two-maps',
    title: 'The I Ching and Stoicism: Two Maps for the Inner Life',
    subtitle: 'Marcus Aurelius met the Book of Changes — and they agreed more than you\'d think.',
    excerpt:
      'From two ends of the ancient world, Stoicism and the I Ching arrived at a strikingly similar insight: we cannot control events, only our response to them. A comparative reading for the modern seeker.',
    coverGradient: 'from-jade-deep to-gold',
    date: 'September 17, 2026',
    readTime: '11 min read',
    tags: ['Philosophy', 'Stoicism'],
    author: 'Liu Xize',
    authorInitials: 'LX',
    body: [
      { type: 'p', text: 'Around the year 170 CE, in a Roman fortress on the Danube, a man named Marcus Aurelius sat down to write to himself. “You have power over your mind — not outside events,” he reminded himself in his Meditations. “Realize this, and you will find strength.”' },
      { type: 'p', text: 'More than a millennium earlier, on the other end of the Eurasian landmass, the compilers of the I Ching had reached a strikingly similar insight — though they framed it differently. The Book of Changes speaks less of controlling the mind than of discerning the moment: knowing when the current is with you, when it is against you, and when it is about to turn.' },
      { type: 'quote', text: '“You have power over your mind — not outside events. Realize this, and you will find strength.” — Marcus Aurelius, Meditations' },
      { type: 'p', text: 'Two maps, then, drawn from two ends of the ancient world. The Stoic map is inward: the world is as it is; your task is to govern your response. The I Ching map is relational: the world is in motion; your task is to read the motion and place yourself within it well. Neither is complete on its own. Together, they form a more useful picture than either offers alone.' },
      { type: 'p', text: 'Consider a difficult conversation — with a partner, a colleague, a parent. The Stoic asks: What is within my control here? My words, my tone, my refusal to be dragged into reactivity. The rest — their mood, their history, the outcome — is not mine to manage. This is true, and freeing.' },
      { type: 'p', text: 'But the I Ching adds a question the Stoics tended to underplay: What is the time of this moment? Is this the hour to speak, or the hour to wait? Is the relationship in a season of opening, or a season of withdrawal? The Stoic cleans the instrument; the I Ching asks which way the wind is blowing before you play it.' },
      { type: 'quote', text: '“When one is in the right way, one may undertake something. When the right way is not there, one should not.” — from the commentary on Hexagram 2, Kūn' },
      { type: 'p', text: 'A simple practice brings the two together. In the morning, before the day begins, sit for two minutes with a Stoic question: What is genuinely within my power today? Name two or three things. Write them down. In the evening, after the day is done, sit for two minutes with an I Ching question: What time was this day? Was it a season for action, for patience, for repair? Write that down, too.' },
      { type: 'p', text: 'Over a month, you will notice something. The Stoic question sharpens your sense of agency. The I Ching question deepens your sense of timing. The first makes you less reactive; the second makes you less rigid. Together, they train something the ancient world called practical wisdom — the capacity to act well, in a particular situation, on a particular day.' },
      { type: 'p', text: 'Two maps. One territory. Carry both.' },
    ],
  },
  {
    slug: 'hexagram-64-beauty-of-the-unfinished',
    title: 'Hexagram 64 — Wèi Jì: The Beauty of the Unfinished',
    subtitle: 'The Book of Changes ends not with completion, but with the brink of becoming.',
    excerpt:
      'The 64th hexagram, Wèi Jì (Before Completion), holds a quietly radical teaching: that the unfinished is not a failure but the natural shape of being alive. A meditation for anyone who feels they are still "in progress."',
    coverGradient: 'from-vermilion-soft to-jade',
    date: 'September 10, 2026',
    readTime: '9 min read',
    tags: ['Hexagrams', 'Philosophy'],
    author: 'Liu Xize',
    authorInitials: 'LX',
    body: [
      { type: 'p', text: 'A book that has been in continuous use for three thousand years chooses, as its final chapter, a hexagram named Before Completion. Not “After Completion.” Not “Triumph.” But the moment just before the crossing.' },
      { type: 'p', text: 'The image of Wèi Jì (未济) is water over fire. In the I Ching’s symbolic grammar, fire rises and water descends; when the two are placed this way, they are moving toward each other but have not yet met. The fuel is laid, the kettle is set, the soup is not yet cooked. Everything is in motion. Nothing has arrived.' },
      { type: 'quote', text: '“Before Completion. Success. The young fox, crossing the river, gets his tail wet. Nothing furthers.” — Hexagram 64, Wèi Jì' },
      { type: 'p', text: 'This is the I Ching’s last word to its reader, and it is quietly radical. The book does not end with resolution. It ends with the brink. The implication is hard to miss: the unfinished is not a failure state. It is the natural shape of being alive.' },
      { type: 'p', text: 'Western readers, raised on a culture that worships the finished, often find this disorienting. We are taught to ship the product, close the deal, publish the book, complete the course. To be “a work in progress” is, in our idiom, an admission of inadequacy. The I Ching invites us to consider that the idiom itself may be the problem.' },
      { type: 'p', text: 'Consider the projects you carry that never quite finish: the relationship that is always becoming, the novel that is always being revised, the garden that is never done. Heraclitus called the world a river in which you cannot step twice. The I Ching says: yes — and that is not a defect of the river. That is what the river is.' },
      { type: 'quote', text: '“There is a crack in everything. That’s how the light gets in.” — Leonard Cohen' },
      { type: 'p', text: 'The practical teaching of Wèi Jì is not passivity. The hexagram’s text warns, vividly, against the young fox who tries to cross the river and gets his tail wet — an image of impatience, of forcing a crossing before the conditions are right. Before Completion is not a counsel to give up. It is a counsel to honor the state of becoming, to prepare carefully, and to refuse the false completion that rushing offers.' },
      { type: 'p', text: 'Looked at this way, the unfinished parts of your life are not the parts that are broken. They are the parts that are still alive. The finished parts — the certainties, the closed doors, the settled scores — are where nothing more can happen. The open ones, the restless ones, the ones that wake you at three in the morning: those are where your life is still being written.' },
      { type: 'p', text: 'The Book of Changes ends, after three thousand years, on the edge of the river, with the fox looking across. It does not tell us whether he makes it. It only tells us: the water is moving, the fire is lit, and the crossing is not yet done. That, it says, is enough to be going on with.' },
    ],
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
