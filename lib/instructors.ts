export type Instructor = {
  id: string;
  name: string;
  nameZh: string;
  title: string;
  bio: string;
  specialties: string[];
  experience: string;
  avatar: string;
  rating: number;
  sessions: number;
  languages: string[];
};

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'liu-xize',
    name: 'Liu Xize',
    nameZh: '刘锡泽',
    title: 'I Ching Practical Mentor',
    bio: 'Proficient in BaZi, Purple Star Astrology, He Luo Five Elements, and residential Feng Shui. Free of empty and exaggerated formulas. He interprets destiny based on real-life scenarios including modern careers, property investment, and family life. He analyzes the underlying patterns of career development, wealth fortune, spiritual blessing, and physical health, and teaches practical methods of Five Elements adjustment and spiritual cultivation to gather blessings. Provides systematic I Ching courses for beginners, guiding learners to understand the Yin-Yang laws of the Book of Changes, plan life with ancient wisdom, pursue good fortune, accumulate wealth, and stabilize body and mind.',
    specialties: ['BaZi', 'Purple Star Astrology', 'He Luo Five Elements', 'Feng Shui'],
    experience: '15 years',
    avatar: 'LX',
    rating: 4.98,
    sessions: 3847,
    languages: ['English', '中文'],
  },
];

export const getInstructorById = (id: string) =>
  INSTRUCTORS.find((i) => i.id === id) ?? INSTRUCTORS[0];
