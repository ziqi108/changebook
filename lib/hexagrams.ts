export type Hexagram = {
  id: number;
  nameZh: string;
  namePinyin: string;
  nameEn: string;
  judgment: string;
  lines: ('yang' | 'yin')[];
  element: string;
  description: string;
  question: string;
};

// 6 爻从下到上 (bottom to top)
// 乾 111111, 坤 000000, 屯 100010, 蒙 010001
// yang=1, yin=0
// Each hexagram stored bottom->top (初爻 -> 上爻)

export const HEXAGRAMS: Hexagram[] = [
  {
    id: 1,
    nameZh: '乾',
    namePinyin: 'Qián',
    nameEn: 'The Creative',
    judgment: '元亨利贞',
    lines: ['yang', 'yang', 'yang', 'yang', 'yang', 'yang'],
    element: '天',
    description:
      'The pure, creative force of heaven. Supreme success through perseverance. A time to initiate, lead, and act with unwavering strength.',
    question: 'Is this the moment to initiate my greatest vision?',
  },
  {
    id: 2,
    nameZh: '坤',
    namePinyin: 'Kūn',
    nameEn: 'The Receptive',
    judgment: '元亨，利牝马之贞',
    lines: ['yin', 'yin', 'yin', 'yin', 'yin', 'yin'],
    element: '地',
    description:
      'The receptive, yielding force of earth. Succeeding through devotion and following. A time to nurture rather than command.',
    question: 'Should I yield, receive, and nurture rather than push forward?',
  },
  {
    id: 3,
    nameZh: '屯',
    namePinyin: 'Zhūn',
    nameEn: 'Initial Difficulty',
    judgment: '元亨利贞，勿用有攸往',
    lines: ['yang', 'yin', 'yin', 'yin', 'yang', 'yin'],
    element: '水/雷',
    description:
      'The chaos of new beginnings. Birthing requires struggle. Do not rush — find helpers, small steps lead to emergence.',
    question: 'Am I facing the chaos of a new beginning, and can I find guides?',
  },
  {
    id: 4,
    nameZh: '蒙',
    namePinyin: 'Méng',
    nameEn: 'Youthful Folly',
    judgment: '亨。匪我求童蒙，童蒙求我',
    lines: ['yin', 'yang', 'yin', 'yin', 'yin', 'yang'],
    element: '山/水',
    description:
      'The fog of unknowing. True learning comes when the student seeks the teacher. Humility opens the path.',
    question: 'Am I approaching this with humble readiness to learn?',
  },
  {
    id: 5,
    nameZh: '需',
    namePinyin: 'Xū',
    nameEn: 'Waiting',
    judgment: '有孚，光亨，贞吉',
    lines: ['yang', 'yang', 'yang', 'yin', 'yang', 'yin'],
    element: '水/天',
    description:
      'The virtue of patient preparation. Trusted waiting brings clarity. Do not act prematurely — the time is not yet ripe.',
    question: 'Must I wait, prepare, and build trust before acting?',
  },
  {
    id: 6,
    nameZh: '訟',
    namePinyin: 'Sòng',
    nameEn: 'Dispute',
    judgment: '有孚窒惕，中吉，终凶',
    lines: ['yin', 'yang', 'yang', 'yang', 'yin', 'yin'],
    element: '天/水',
    description:
      'Conflict and dispute. Know when to stop. Persistence to the end brings misfortune — reconciliation is the higher path.',
    question: 'Am I caught in a cycle of conflict that I must release?',
  },
  {
    id: 11,
    nameZh: '泰',
    namePinyin: 'Tài',
    nameEn: 'Flowering',
    judgment: '小往大来，吉亨',
    lines: ['yang', 'yang', 'yang', 'yin', 'yin', 'yin'],
    element: '地/天',
    description:
      'Heaven and earth unite. Smooth flowing energy between above and below. Harmony and prosperity prevail.',
    question: 'Are the forces in my life aligning into harmony?',
  },
  {
    id: 12,
    nameZh: '否',
    namePinyin: 'Pǐ',
    nameEn: 'Decline',
    judgment: '否之匪人，不利君子贞',
    lines: ['yin', 'yin', 'yin', 'yang', 'yang', 'yang'],
    element: '天/地',
    description:
      'Heaven and earth diverge. Communication is blocked. A time for retreat, inner cultivation, and patience.',
    question: 'Should I withdraw and nurture my inner garden instead of engaging?',
  },
  {
    id: 13,
    nameZh: '同人',
    namePinyin: 'Tóng Rén',
    nameEn: 'Fellowship',
    judgment: '同人于野，亨',
    lines: ['yang', 'yin', 'yang', 'yang', 'yang', 'yang'],
    element: '天/火',
    description:
      'Fellowship with others in the open. Shared vision brings success. Seek common ground broadly, not narrowly.',
    question: 'Am I building genuine fellowship or strategic alliances?',
  },
  {
    id: 14,
    nameZh: '大有',
    namePinyin: 'Dà Yǒu',
    nameEn: 'Great Possession',
    judgment: '元亨',
    lines: ['yang', 'yang', 'yang', 'yang', 'yin', 'yang'],
    element: '火/天',
    description:
      'Great possession and wealth. Share generously with others. True abundance flows through giving and gratitude.',
    question: 'How can I use my abundance for the benefit of all?',
  },
  {
    id: 21,
    nameZh: '噬嗑',
    namePinyin: 'Shì Hé',
    nameEn: 'Biting Through',
    judgment: '亨。利用狱',
    lines: ['yang', 'yin', 'yin', 'yang', 'yin', 'yang'],
    element: '火/雷',
    description:
      'Breaking through obstacles. Justice and clarity are needed. Remove what blocks truth — decisively and justly.',
    question: 'What truth must I face and act on decisively?',
  },
  {
    id: 22,
    nameZh: '賁',
    namePinyin: 'Bì',
    nameEn: 'Adornment',
    judgment: '亨。小利有攸往',
    lines: ['yang', 'yang', 'yin', 'yin', 'yang', 'yang'],
    element: '山/火',
    description:
      'Beauty in form and appearance. Elegant style attracts, but substance must follow. Do not confuse adornment with essence.',
    question: 'Am I attending to the form while neglecting the essence?',
  },
  {
    id: 24,
    nameZh: '復',
    namePinyin: 'Fù',
    nameEn: 'The Return',
    judgment: '亨。出入无疾',
    lines: ['yang', 'yin', 'yin', 'yin', 'yin', 'yin'],
    element: '地/雷',
    description:
      'The return of light after darkness. A single step forward. Renewal comes through returning to your true path.',
    question: 'What must I return to in myself?',
  },
  {
    id: 25,
    nameZh: '無妄',
    namePinyin: 'Wú Wàng',
    nameEn: 'Without Contrivance',
    judgment: '元亨利贞',
    lines: ['yang', 'yin', 'yang', 'yin', 'yang', 'yang'],
    element: '天/雷',
    description:
      'Acting naturally without calculation. Spontaneity and innocence bring good fortune. Trust the authentic movement.',
    question: 'Am I acting naturally or from hidden motives?',
  },
  {
    id: 27,
    nameZh: '頤',
    namePinyin: 'Yí',
    nameEn: 'Nourishment',
    judgment: '贞吉。观颐，自求口实',
    lines: ['yang', 'yang', 'yin', 'yin', 'yin', 'yang'],
    element: '山/雷',
    description:
      'Nourishing others and oneself. Watch what you feed your life — physically, mentally, and spiritually.',
    question: 'Am I nourishing what truly matters?',
  },
  {
    id: 31,
    nameZh: '咸',
    namePinyin: 'Xián',
    nameEn: 'Influence',
    judgment: '亨，利贞，取女吉',
    lines: ['yin', 'yin', 'yang', 'yang', 'yang', 'yin'],
    element: '山/澤',
    description:
      'Mutual influence and responsiveness. True connection requires openness and feeling. A time for empathy.',
    question: 'Am I truly listening and responding to others?',
  },
  {
    id: 32,
    nameZh: '恆',
    namePinyin: 'Héng',
    nameEn: 'Persistence',
    judgment: '亨，无咎，利贞',
    lines: ['yang', 'yin', 'yin', 'yin', 'yang', 'yang'],
    element: '雷/風',
    description:
      'Enduring persistence. Consistency in long-term relationships and endeavors. Steadiness over intensity.',
    question: 'Where must I persist rather than change?',
  },
  {
    id: 36,
    nameZh: '明夷',
    namePinyin: 'Míng Yí',
    nameEn: 'Darkness',
    judgment: '利艰贞',
    lines: ['yang', 'yin', 'yin', 'yang', 'yin', 'yin'],
    element: '地/火',
    description:
      'Light hidden beneath darkness. A time to conceal your brilliance and wait. Inner light must be preserved.',
    question: 'Must I withdraw and hide my light for now?',
  },
  {
    id: 37,
    nameZh: '家人',
    namePinyin: 'Jiā Rén',
    nameEn: 'The Household',
    judgment: '利女贞',
    lines: ['yang', 'yin', 'yang', 'yin', 'yang', 'yang'],
    element: '火/風',
    description:
      'Order within the household. Clear roles and responsibilities maintain harmony. Start governance from within.',
    question: 'Is there order in my own house before I seek it outside?',
  },
  {
    id: 38,
    nameZh: '睽',
    namePinyin: 'Kuí',
    nameEn: 'Opposition',
    judgment: '小事吉',
    lines: ['yang', 'yang', 'yin', 'yang', 'yin', 'yang'],
    element: '火/澤',
    description:
      'Opposition and alienation. Fire and lake move apart. Seek small harmony rather than grand unity.',
    question: 'Where am I at odds with others — and can I find common ground?',
  },
  {
    id: 39,
    nameZh: '蹇',
    namePinyin: 'Jiǎn',
    nameEn: 'Obstruction',
    judgment: '利西南，不利东北',
    lines: ['yin', 'yin', 'yang', 'yang', 'yin', 'yin'],
    element: '水/山',
    description:
      'Obstruction and difficult progress. Turn back and find the easier path. Help is needed — do not struggle alone.',
    question: 'Am I pushing against an obstacle that requires a different approach?',
  },
  {
    id: 40,
    nameZh: '解',
    namePinyin: 'Xiè',
    nameEn: 'Release',
    judgment: '利西南',
    lines: ['yang', 'yin', 'yin', 'yang', 'yang', 'yin'],
    element: '雷/水',
    description:
      'Release and deliverance from tension. The storm passes. Act quickly to resolve what has been pent up.',
    question: 'What must I release to move forward?',
  },
  {
    id: 41,
    nameZh: '損',
    namePinyin: 'Sǔn',
    nameEn: 'Decrease',
    judgment: '有孚，元吉',
    lines: ['yang', 'yang', 'yin', 'yin', 'yin', 'yang'],
    element: '山/澤',
    description:
      'Decrease the excess to benefit what is below. True generosity reduces the giver and enriches the receiver.',
    question: 'What must I give up for the sake of something greater?',
  },
  {
    id: 42,
    nameZh: '益',
    namePinyin: 'Yì',
    nameEn: 'Increase',
    judgment: '利有攸往',
    lines: ['yang', 'yin', 'yin', 'yin', 'yang', 'yang'],
    element: '風/雷',
    description:
      'Increase and growth. When those above benefit those below, prosperity flows to all. A time for courageous action.',
    question: 'How can I increase the good in my sphere?',
  },
  {
    id: 43,
    nameZh: '夬',
    namePinyin: 'Guài',
    nameEn: 'Breakthrough',
    judgment: '扬于王庭',
    lines: ['yang', 'yang', 'yang', 'yang', 'yang', 'yin'],
    element: '澤/天',
    description:
      'A decisive breakthrough. Announce clearly to all. The old must be released before the new can emerge.',
    question: 'What must I decisively release from my life?',
  },
  {
    id: 44,
    nameZh: '姤',
    namePinyin: 'Gòu',
    nameEn: 'Meeting',
    judgment: '女壮，勿用取女',
    lines: ['yin', 'yang', 'yang', 'yang', 'yang', 'yang'],
    element: '天/風',
    description:
      'A chance meeting. The subtle first encounter must be examined carefully. Not all beginnings are auspicious.',
    question: 'What unexpected influence has entered my life?',
  },
  {
    id: 45,
    nameZh: '萃',
    namePinyin: 'Cuì',
    nameEn: 'Gathering',
    judgment: '亨。王假有庙',
    lines: ['yin', 'yin', 'yang', 'yang', 'yin', 'yin'],
    element: '澤/地',
    description:
      'Gathering together of people and resources. Union around a shared purpose creates great power.',
    question: 'Where should I focus my energy to gather the right forces?',
  },
  {
    id: 46,
    nameZh: '升',
    namePinyin: 'Shēng',
    nameEn: 'Ascending',
    judgment: '元亨，用见大人',
    lines: ['yin', 'yang', 'yang', 'yin', 'yin', 'yin'],
    element: '地/風',
    description:
      'Gradual ascent like wood growing from the earth. Progress through accumulated effort. Humility is key.',
    question: 'Am I ascending with integrity and patience?',
  },
  {
    id: 47,
    nameZh: '困',
    namePinyin: 'Kùn',
    nameEn: 'Exhaustion',
    judgment: '亨，贞吉。有言不信',
    lines: ['yin', 'yang', 'yang', 'yin', 'yin', 'yang'],
    element: '水/澤',
    description:
      'Exhaustion and difficult straits. Words carry no weight now. Preserve inner strength and wait for the tide to turn.',
    question: 'Am I in a time when silence is wiser than speech?',
  },
  {
    id: 48,
    nameZh: '井',
    namePinyin: 'Jǐng',
    nameEn: 'The Well',
    judgment: '改邑不改井',
    lines: ['yang', 'yin', 'yin', 'yang', 'yin', 'yang'],
    element: '木/水',
    description:
      'The well provides water for all. Be a source that nourishes without diminishing. Keep flowing.',
    question: 'Am I being a source of nourishment for others?',
  },
  {
    id: 49,
    nameZh: '革',
    namePinyin: 'Gé',
    nameEn: 'Revolution',
    judgment: '己日乃孚，元亨利贞',
    lines: ['yang', 'yin', 'yin', 'yang', 'yang', 'yang'],
    element: '澤/火',
    description:
      'Revolution and radical change. Timing is everything. The old order must truly end before the new can be born.',
    question: 'Is this the moment for radical transformation?',
  },
  {
    id: 50,
    nameZh: '鼎',
    namePinyin: 'Dǐng',
    nameEn: 'The Cauldron',
    judgment: '元吉，亨',
    lines: ['yang', 'yang', 'yang', 'yin', 'yang', 'yang'],
    element: '火/木',
    description:
      'The cauldron transforms raw ingredients into nourishing food. A time of alchemy — transforming the old into the valuable new.',
    question: 'What transformation is cooking in my life?',
  },
  {
    id: 51,
    nameZh: '震',
    namePinyin: 'Zhèn',
    nameEn: 'Thunder',
    judgment: '亨。震来虩虩',
    lines: ['yang', 'yin', 'yin', 'yang', 'yin', 'yang'],
    element: '雷/雷',
    description:
      'Thunder shakes and awakens. Fear gives way to laughter. Shock clears the way for clarity.',
    question: 'What must shake me awake to my deeper truth?',
  },
  {
    id: 52,
    nameZh: '艮',
    namePinyin: 'Gèn',
    nameEn: 'Mountain',
    judgment: '艮其背，不获其身',
    lines: ['yang', 'yang', 'yin', 'yang', 'yang', 'yin'],
    element: '山/山',
    description:
      'Stillness like a mountain. Knowing when to stop is wisdom. Rest where you stand — do not exceed your limits.',
    question: 'Where must I simply be still?',
  },
  {
    id: 53,
    nameZh: '漸',
    namePinyin: 'Jiàn',
    nameEn: 'Gradual Progress',
    judgment: '女归吉，利贞',
    lines: ['yang', 'yang', 'yin', 'yang', 'yin', 'yin'],
    element: '風/山',
    description:
      'Gradual progress like a goose flying south. Each stage has its proper time and place. Steadily, the goal is reached.',
    question: 'Am I trusting the slow and steady path?',
  },
  {
    id: 54,
    nameZh: '歸妹',
    namePinyin: 'Guī Mèi',
    nameEn: 'The Younger Sister',
    judgment: '征凶，无攸利',
    lines: ['yin', 'yin', 'yang', 'yang', 'yin', 'yin'],
    element: '雷/澤',
    description:
      'The younger sister marries. Know your place and expectations. Misaligned roles lead to misfortune.',
    question: 'Am I entering a relationship from a place of true self?',
  },
  {
    id: 55,
    nameZh: '豐',
    namePinyin: 'Fēng',
    nameEn: 'Abundance',
    judgment: '亨，王假之',
    lines: ['yang', 'yin', 'yin', 'yang', 'yang', 'yang'],
    element: '雷/火',
    description:
      'Great abundance and fullness. But peaks are followed by decline. Enjoy the height while preparing for the descent.',
    question: 'Am I at a peak that requires wise stewardship?',
  },
  {
    id: 56,
    nameZh: '旅',
    namePinyin: 'Lǚ',
    nameEn: 'The Traveler',
    judgment: '小亨，旅贞吉',
    lines: ['yang', 'yang', 'yin', 'yang', 'yin', 'yin'],
    element: '火/山',
    description:
      'Traveling as a stranger in a strange land. Modesty and caution serve the traveler well. This too is a journey.',
    question: 'Am I approaching this life phase as a traveler or a resident?',
  },
  {
    id: 57,
    nameZh: '巽',
    namePinyin: 'Xùn',
    nameEn: 'The Wind',
    judgment: '小亨，利有攸往',
    lines: ['yang', 'yin', 'yang', 'yang', 'yin', 'yang'],
    element: '風/風',
    description:
      'The wind penetrates everywhere. Gentle persistence achieves what force cannot. Influence through quiet continuity.',
    question: 'How can I penetrate gently rather than forcefully?',
  },
  {
    id: 58,
    nameZh: '兌',
    namePinyin: 'Duì',
    nameEn: 'Joy',
    judgment: '亨，利贞',
    lines: ['yang', 'yang', 'yang', 'yin', 'yang', 'yang'],
    element: '澤/澤',
    description:
      'Joy and delight. Inner joy radiates outward. Be genuine — false pleasure leads to harm.',
    question: 'Is my joy genuine or performative?',
  },
  {
    id: 59,
    nameZh: '渙',
    namePinyin: 'Huàn',
    nameEn: 'Dispersion',
    judgment: '亨。王假有庙',
    lines: ['yang', 'yin', 'yin', 'yin', 'yang', 'yang'],
    element: '風/水',
    description:
      'Dispersion and diffusion. What was scattered begins to flow together. A time to release barriers and unite.',
    question: 'What barriers must I dissolve?',
  },
  {
    id: 60,
    nameZh: '節',
    namePinyin: 'Jié',
    nameEn: 'Modesty',
    judgment: '亨。苦节不可贞',
    lines: ['yang', 'yang', 'yang', 'yin', 'yin', 'yin'],
    element: '水/澤',
    description:
      'Moderation and balance. Too much austerity causes bitterness. The middle path between excess and deficiency.',
    question: 'Am I living with wise moderation?',
  },
  {
    id: 61,
    nameZh: '中孚',
    namePinyin: 'Zhōng Fú',
    nameEn: 'Inner Truth',
    judgment: '豚鱼吉，利涉大川',
    lines: ['yang', 'yang', 'yin', 'yin', 'yang', 'yang'],
    element: '風/澤',
    description:
      'Inner truth and sincerity. Even fish and pigs respond to genuine feeling. Trust the power of authenticity.',
    question: 'Am I living from inner truth?',
  },
  {
    id: 62,
    nameZh: '小過',
    namePinyin: 'Xiǎo Guò',
    nameEn: 'Small Exceeding',
    judgment: '亨，利贞',
    lines: ['yin', 'yin', 'yang', 'yang', 'yin', 'yin'],
    element: '雷/山',
    description:
      'Small matters take precedence. A bird flies downward, not upward. Attend to the small things, the great follows.',
    question: 'Am I attending to the small matters that matter most?',
  },
  {
    id: 63,
    nameZh: '既濟',
    namePinyin: 'Jì Jì',
    nameEn: 'After Completion',
    judgment: '亨小，利贞。初吉终乱',
    lines: ['yang', 'yin', 'yang', 'yang', 'yin', 'yang'],
    element: '水/火',
    description:
      'A task is complete — yet the warning is clear: decline begins at the peak. Maintain vigilance and renew.',
    question: 'Am I resting too soon after victory, or preparing for what follows?',
  },
  {
    id: 64,
    nameZh: '未濟',
    namePinyin: 'Wèi Jì',
    nameEn: 'Before Completion',
    judgment: '亨。小狐汔济，濡其尾',
    lines: ['yin', 'yang', 'yang', 'yang', 'yin', 'yang'],
    element: '火/水',
    description:
      'The journey continues. Cross the river with caution. This is not an ending but an invitation to begin anew.',
    question: 'What final effort is needed before the crossing is complete?',
  },
];

export const DAILY_HEXAGRAM_IDS = [1, 2, 11, 12, 63, 64, 3, 4, 13, 14, 24, 25, 27, 31, 32, 36, 37, 38, 39, 40, 21, 22, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62];

export const getHexagramById = (id: number) =>
  HEXAGRAMS.find((h) => h.id === id) ?? HEXAGRAMS[0];
