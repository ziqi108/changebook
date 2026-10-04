export type Instructor = {
  id: string;
  name: string;
  nameZh: string;
  title: string;
  titleZh?: string;
  bio: string;
  bioZh?: string;
  specialties: string[];
  experience: string;
  avatar: string;
  languages: string[];
};

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'liu-xize',
    name: 'Liu Xize',
    nameZh: '刘锡泽',
    title: 'I Ching Practical Mentor',
    titleZh: '《易经》实修导师',
    bio: 'Proficient in BaZi, Purple Star Astrology, He Luo Five Elements, and residential Feng Shui. Free of empty and exaggerated formulas. He interprets destiny based on real-life scenarios including modern careers, property investment, and family life. He analyzes the underlying patterns of career development, wealth fortune, spiritual blessing, and physical health, and teaches practical methods of Five Elements adjustment and spiritual cultivation to gather blessings. Provides systematic I Ching courses for beginners, guiding learners to understand the Yin-Yang laws of the Book of Changes, plan life with ancient wisdom, pursue good fortune, accumulate wealth, and stabilize body and mind.',
    bioZh: '精通八字、紫微斗数、河洛五行与阳宅风水，摒弃空泛夸饰之说。立足现代职场、置业与家庭生活等真实处境解读运势，分析事业发展、财富起伏、福报健康背后的规律，并传授五行调理与养心聚福的实修方法。同时面向初学者开设系统的《易经》课程，引导学习者理解《周易》的阴阳法则，以古老智慧规划人生，趋吉、聚财、安顿身心。',
    specialties: ['BaZi', 'Purple Star Astrology', 'He Luo Five Elements', 'Feng Shui'],
    experience: '15 years',
    avatar: 'LX',
    languages: ['English', '中文'],
  },
];

export const getInstructorById = (id: string) =>
  INSTRUCTORS.find((i) => i.id === id) ?? INSTRUCTORS[0];
