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
    id: 'master-lian',
    name: 'Master Lian Chen',
    nameZh: '陳蓮',
    title: 'Chief I Ching Master · Lineage Holder',
    bio: 'Third-generation I Ching teacher trained in the Mei Hua numerology tradition. Studied under Master Wang Deshan in Chengdu for 12 years before beginning to teach internationally. Specializes in life transition readings and career counseling.',
    specialties: ['Career Guidance', 'Life Transitions', 'Mei Hua Numerology'],
    experience: '22 years',
    avatar: 'LC',
    rating: 4.98,
    sessions: 3847,
    languages: ['English', '中文', '日本語'],
  },
  {
    id: 'master-yang',
    name: 'Master Yang Wen',
    nameZh: '楊文',
    title: 'Hexagram Scholar · Jungian Reader',
    bio: 'Bridges classical I Ching scholarship with depth psychology. Former research fellow at the Chinese Academy of Social Sciences. Author of "The Psychology of the 64 Hexagrams." Teaches the Xici (Great Commentary) and Shuo Gua traditions.',
    specialties: ['Depth Psychology', 'Xici Commentary', 'Relationship Dynamics'],
    experience: '15 years',
    avatar: 'YW',
    rating: 4.95,
    sessions: 2156,
    languages: ['English', '中文', 'Deutsch'],
  },
  {
    id: 'master-wu',
    name: 'Master Wu Xi',
    nameZh: '吳曦',
    title: 'Divination Teacher · Taoist Practitioner',
    bio: 'Taoist priest and divination instructor trained on Wudang Mountain. Specializes in practical daily I Ching practice, Qimen Dunjia strategic reading, and seasonal rhythm alignment. Known for clear, grounded guidance.',
    specialties: ['Daily Practice', 'Qimen Dunjia', 'Seasonal Rhythms'],
    experience: '18 years',
    avatar: 'WX',
    rating: 4.97,
    sessions: 2912,
    languages: ['English', '中文', 'Français'],
  },
];

export const getInstructorById = (id: string) =>
  INSTRUCTORS.find((i) => i.id === id) ?? INSTRUCTORS[0];
