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
    subtitle: 'Foundations of the Book of Changes — yin yang, the eight trigrams, and basic reading methods.',
    heroImage: 'from-ink to-ink-deep',
    level: 'Beginner',
    levelZh: '初 級',
    price: '$340',
    currency: 'USD',
    nextCohort: 'July 14, 2026',
    includes: [
      'Introduction to yin and yang',
      'The eight trigrams (Bagua)',
      'History and structure of the I Ching',
      'Basic coin-casting method',
      'How to formulate a question',
      'Beginner practice readings',
    ],
    chapters: [],
  },
  'intermediate-course': {
    slug: 'intermediate-course',
    title: 'Intermediate I Ching',
    subtitle: 'Deep dive into the 64 hexagrams — study each symbol in detail with classical commentaries.',
    heroImage: 'from-paper to-paper-soft',
    level: 'Intermediate',
    levelZh: '中 級',
    price: '$880',
    currency: 'USD',
    nextCohort: 'August 28, 2026',
    includes: [
      'Complete translation and commentary on all 64 hexagrams',
      'Classical texts: Tuan Zhuan, Xiang Zhuan, Wenyan Zhuan',
      'Symbolic correspondences and inner logic',
      'Case studies for daily life application',
      'Q&A sessions with the master teacher',
      'Community forum access',
    ],
    chapters: [
  {
    "id": "hex-01",
    "title": "Hexagram 1 · 乾 (Qián) — The Creative",
    "lessons": [
      {
        "id": "hex-01-1",
        "title": "Hexagram 1 · 乾 (Qián) — The Creative (乾为天)",
        "duration": "120 min",
        "description": "**Overview**\n\nHexagram 1, 乾 (Qián), is the 1st of the sixty-four symbols. It is formed by the heaven over heaven — 乾为天 — and embodies the principle of the creative. Students of the I Ching return to 乾 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 乾：元，亨，利，贞。\n> *Qian: Origination, Penetration, Advantage, Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 乾卦：Qian: Origination, Penetration, Advantage, Uprightness。\n   > *The Tuan Commentary on 乾: Qian: Origination, Penetration, Advantage, Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 天行健\n   > *The Image of 乾: 乾为天 (heaven over heaven). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 乾. *In the context of The Creative: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 乾. *In the context of The Creative: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 乾. *In the context of The Creative: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 乾. *In the context of The Creative: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 乾. *In the context of The Creative: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 乾. *In the context of The Creative: the summit of the hexagram — extreme position warns of reversal.*\n- **用九 (Using Nine)**: The hidden instruction of the pure 乾 hexagram — transcending the fixed polarity to grasp the living spirit of the creative.\n\n**Symbolic Correspondences (象征对应)**\n乾 (The Creative) corresponds to: heaven (天), metal (金), father (父), horse (马), northwest (西北), autumn (秋).\n\n**Practice (实践)**\nIn divination, 乾 (The Creative) advises reading the moment through the lens of the creative. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-02",
    "title": "Hexagram 2 · 坤 (Kūn) — The Earth",
    "lessons": [
      {
        "id": "hex-02-1",
        "title": "Hexagram 2 · 坤 (Kūn) — The Earth (坤为地)",
        "duration": "120 min",
        "description": "**Overview**\n\nHexagram 2, 坤 (Kūn), is the 2nd of the sixty-four symbols. It is formed by the earth over earth — 坤为地 — and embodies the principle of the earth. Students of the I Ching return to 坤 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 坤：元，亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞，吉。\n> *Kun: Origination, Penetration, and the Advantage of a mare's Uprightness. Peaceful Uprightness brings fortune。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 坤卦：Kun: Origination, Penetration, and the Advantage of a mare's Uprightness. Peaceful Uprightness brings fortune。\n   > *The Tuan Commentary on 坤: Kun: Origination, Penetration, and the Advantage of a mare's Uprightness. Peaceful Uprightness brings fortune.*\n\n2. **The Xiang Commentary (象传)**\n   > 地势坤\n   > *The Image of 坤: 坤为地 (earth over earth). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初六 (Initial Six)**: The yin line at initial position of 坤. *In the context of The Earth: the first stirring — small, hidden beginnings require caution and patience.*\n- **二九 (Second Nine)**: The yang line at second position of 坤. *In the context of The Earth: emergence and visibility — the line begins to act in the world.*\n- **三六 (Third Six)**: The yin line at third position of 坤. *In the context of The Earth: the lower trigram's summit — poised between advancement and reflection.*\n- **四九 (Fourth Nine)**: The yang line at fourth position of 坤. *In the context of The Earth: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五六 (Fifth Six)**: The yin line at fifth position of 坤. *In the context of The Earth: approaching the heights — influence grows, but humility is required.*\n- **上九 (Top Nine)**: The yang line at top position of 坤. *In the context of The Earth: the summit of the hexagram — extreme position warns of reversal.*\n- **用六 (Using Six)**: The hidden instruction of the pure 坤 hexagram — transcending the fixed polarity to grasp the living spirit of the earth.\n\n**Symbolic Correspondences (象征对应)**\n坤 (The Earth) corresponds to: earth (地), soil (土), mother (母), mare (牝马), southwest (西南), late summer (季夏).\n\n**Practice (实践)**\nIn divination, 坤 (The Earth) advises reading the moment through the lens of the earth. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-03",
    "title": "Hexagram 3 · 屯 (Zhūn) — Initial Difficulty",
    "lessons": [
      {
        "id": "hex-03-1",
        "title": "Hexagram 3 · 屯 (Zhūn) — Initial Difficulty (水雷屯)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 3, 屯 (Zhūn), is the 3rd of the sixty-four symbols. It is formed by the water over thunder — 水雷屯 — and embodies the principle of initial difficulty. Students of the I Ching return to 屯 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 屯：元亨利贞，勿用有攸往，利建侯。\n> *Zhun: Origination, Penetration, Advantage, Uprightness. Do not act; it is advantageous to establish helpers。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 屯卦：Zhun: Origination, Penetration, Advantage, Uprightness. Do not act; it is advantageous to establish helpers。\n   > *The Tuan Commentary on 屯: Zhun: Origination, Penetration, Advantage, Uprightness. Do not act; it is advantageous to establish helpers.*\n\n2. **The Xiang Commentary (象传)**\n   > 云雷屯\n   > *The Image of 屯: 水雷屯 (water over thunder). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 屯. *In the context of Initial Difficulty: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 屯. *In the context of Initial Difficulty: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 屯. *In the context of Initial Difficulty: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 屯. *In the context of Initial Difficulty: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 屯. *In the context of Initial Difficulty: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 屯. *In the context of Initial Difficulty: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n屯 (Initial Difficulty) corresponds to: the inner trigram and outer trigram of 屯, whose virtue initial difficulty manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 屯 (Initial Difficulty) advises reading the moment through the lens of initial difficulty. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-04",
    "title": "Hexagram 4 · 蒙 (Méng) — Youthful Folly",
    "lessons": [
      {
        "id": "hex-04-1",
        "title": "Hexagram 4 · 蒙 (Méng) — Youthful Folly (山水蒙)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 4, 蒙 (Méng), is the 4th of the sixty-four symbols. It is formed by the spring below mountain — 山水蒙 — and embodies the principle of youthful folly. Students of the I Ching return to 蒙 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 蒙：亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。\n> *Meng: Penetration. Not I seek the youthful, the youthful seeks me. The first oracle instructs; repeated questioning profanes。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 蒙卦：Meng: Penetration. Not I seek the youthful, the youthful seeks me. The first oracle instructs; repeated questioning profanes。\n   > *The Tuan Commentary on 蒙: Meng: Penetration. Not I seek the youthful, the youthful seeks me. The first oracle instructs; repeated questioning profanes.*\n\n2. **The Xiang Commentary (象传)**\n   > 山水蒙\n   > *The Image of 蒙: 山水蒙 (spring below mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 蒙. *In the context of Youthful Folly: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 蒙. *In the context of Youthful Folly: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 蒙. *In the context of Youthful Folly: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 蒙. *In the context of Youthful Folly: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 蒙. *In the context of Youthful Folly: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 蒙. *In the context of Youthful Folly: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n蒙 (Youthful Folly) corresponds to: the inner trigram and outer trigram of 蒙, whose virtue youthful folly manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 蒙 (Youthful Folly) advises reading the moment through the lens of youthful folly. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-05",
    "title": "Hexagram 5 · 需 (Xū) — Waiting",
    "lessons": [
      {
        "id": "hex-05-1",
        "title": "Hexagram 5 · 需 (Xū) — Waiting (水天需)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 5, 需 (Xū), is the 5th of the sixty-four symbols. It is formed by the water over heaven — 水天需 — and embodies the principle of waiting. Students of the I Ching return to 需 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 需：有孚，光亨，贞吉。\n> *Xu: With sincerity, radiant penetration; uprightness is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 需卦：Xu: With sincerity, radiant penetration; uprightness is auspicious。\n   > *The Tuan Commentary on 需: Xu: With sincerity, radiant penetration; uprightness is auspicious.*\n\n2. **The Xiang Commentary (象传)**\n   > 水天需\n   > *The Image of 需: 水天需 (water over heaven). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 需. *In the context of Waiting: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 需. *In the context of Waiting: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 需. *In the context of Waiting: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 需. *In the context of Waiting: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 需. *In the context of Waiting: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 需. *In the context of Waiting: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n需 (Waiting) corresponds to: the inner trigram and outer trigram of 需, whose virtue waiting manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 需 (Waiting) advises reading the moment through the lens of waiting. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-06",
    "title": "Hexagram 6 · 讼 (Sòng) — Conflict",
    "lessons": [
      {
        "id": "hex-06-1",
        "title": "Hexagram 6 · 讼 (Sòng) — Conflict (天水讼)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 6, 讼 (Sòng), is the 6th of the sixty-four symbols. It is formed by the heaven over water — 天水讼 — and embodies the principle of conflict. Students of the I Ching return to 讼 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 讼：有孚窒惕，中吉，终凶。利见大人，不利涉大川。\n> *Song: With sincerity, one stands in awe. Fortune in the middle, misfortune at the end. Advantage to see the great person。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 讼卦：Song: With sincerity, one stands in awe. Fortune in the middle, misfortune at the end. Advantage to see the great person。\n   > *The Tuan Commentary on 讼: Song: With sincerity, one stands in awe. Fortune in the middle, misfortune at the end. Advantage to see the great person.*\n\n2. **The Xiang Commentary (象传)**\n   > 天水讼\n   > *The Image of 讼: 天水讼 (heaven over water). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 讼. *In the context of Conflict: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 讼. *In the context of Conflict: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 讼. *In the context of Conflict: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 讼. *In the context of Conflict: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 讼. *In the context of Conflict: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 讼. *In the context of Conflict: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n讼 (Conflict) corresponds to: the inner trigram and outer trigram of 讼, whose virtue conflict manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 讼 (Conflict) advises reading the moment through the lens of conflict. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-07",
    "title": "Hexagram 7 · 师 (Shī) — The Army",
    "lessons": [
      {
        "id": "hex-07-1",
        "title": "Hexagram 7 · 师 (Shī) — The Army (地水师)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 7, 师 (Shī), is the 7th of the sixty-four symbols. It is formed by the earth over water — 地水师 — and embodies the principle of the army. Students of the I Ching return to 师 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 师：贞，丈人吉，无咎。\n> *Shi: Uprightness. A mature person of fortune; no blame。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 师卦：Shi: Uprightness. A mature person of fortune; no blame。\n   > *The Tuan Commentary on 师: Shi: Uprightness. A mature person of fortune; no blame.*\n\n2. **The Xiang Commentary (象传)**\n   > 地水师\n   > *The Image of 师: 地水师 (earth over water). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 师. *In the context of The Army: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 师. *In the context of The Army: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 师. *In the context of The Army: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 师. *In the context of The Army: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 师. *In the context of The Army: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 师. *In the context of The Army: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n师 (The Army) corresponds to: the inner trigram and outer trigram of 师, whose virtue the army manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 师 (The Army) advises reading the moment through the lens of the army. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-08",
    "title": "Hexagram 8 · 比 (Bǐ) — Closeness",
    "lessons": [
      {
        "id": "hex-08-1",
        "title": "Hexagram 8 · 比 (Bǐ) — Closeness (水地比)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 8, 比 (Bǐ), is the 8th of the sixty-four symbols. It is formed by the water over earth — 水地比 — and embodies the principle of closeness. Students of the I Ching return to 比 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 比：吉。原筮，元永贞，无咎。\n> *Bi: Auspicious. Let the oracle decide: eternal uprightness without blame。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 比卦：Bi: Auspicious. Let the oracle decide: eternal uprightness without blame。\n   > *The Tuan Commentary on 比: Bi: Auspicious. Let the oracle decide: eternal uprightness without blame.*\n\n2. **The Xiang Commentary (象传)**\n   > 水地比\n   > *The Image of 比: 水地比 (water over earth). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 比. *In the context of Closeness: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 比. *In the context of Closeness: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 比. *In the context of Closeness: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 比. *In the context of Closeness: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 比. *In the context of Closeness: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 比. *In the context of Closeness: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n比 (Closeness) corresponds to: the inner trigram and outer trigram of 比, whose virtue closeness manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 比 (Closeness) advises reading the moment through the lens of closeness. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-09",
    "title": "Hexagram 9 · 小畜 (Xiǎo Xù) — Small Taming",
    "lessons": [
      {
        "id": "hex-09-1",
        "title": "Hexagram 9 · 小畜 (Xiǎo Xù) — Small Taming (风天小畜)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 9, 小畜 (Xiǎo Xù), is the 9th of the sixty-four symbols. It is formed by the wind over heaven — 风天小畜 — and embodies the principle of small taming. Students of the I Ching return to 小畜 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 小畜：亨。密云不雨，自我西郊。\n> *Xiao Chu: Penetration. Dense clouds without rain come from our western suburb。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 小畜卦：Xiao Chu: Penetration. Dense clouds without rain come from our western suburb。\n   > *The Tuan Commentary on 小畜: Xiao Chu: Penetration. Dense clouds without rain come from our western suburb.*\n\n2. **The Xiang Commentary (象传)**\n   > 风天小畜\n   > *The Image of 小畜: 风天小畜 (wind over heaven). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 小畜. *In the context of Small Taming: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 小畜. *In the context of Small Taming: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 小畜. *In the context of Small Taming: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 小畜. *In the context of Small Taming: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 小畜. *In the context of Small Taming: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 小畜. *In the context of Small Taming: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n小畜 (Small Taming) corresponds to: the inner trigram and outer trigram of 小畜, whose virtue small taming manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 小畜 (Small Taming) advises reading the moment through the lens of small taming. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-10",
    "title": "Hexagram 10 · 履 (Lǚ) — Treading",
    "lessons": [
      {
        "id": "hex-10-1",
        "title": "Hexagram 10 · 履 (Lǚ) — Treading (天泽履)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 10, 履 (Lǚ), is the 10th of the sixty-four symbols. It is formed by the heaven over lake — 天泽履 — and embodies the principle of treading. Students of the I Ching return to 履 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 履：履虎尾，不咥人，亨。\n> *Lü: Treading on a tiger's tail without being bitten — penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 履卦：Lü: Treading on a tiger's tail without being bitten — penetration。\n   > *The Tuan Commentary on 履: Lü: Treading on a tiger's tail without being bitten — penetration.*\n\n2. **The Xiang Commentary (象传)**\n   > 天泽履\n   > *The Image of 履: 天泽履 (heaven over lake). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 履. *In the context of Treading: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 履. *In the context of Treading: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 履. *In the context of Treading: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 履. *In the context of Treading: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 履. *In the context of Treading: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 履. *In the context of Treading: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n履 (Treading) corresponds to: the inner trigram and outer trigram of 履, whose virtue treading manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 履 (Treading) advises reading the moment through the lens of treading. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-11",
    "title": "Hexagram 11 · 泰 (Tài) — Flourishing",
    "lessons": [
      {
        "id": "hex-11-1",
        "title": "Hexagram 11 · 泰 (Tài) — Flourishing (地天泰)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 11, 泰 (Tài), is the 11th of the sixty-four symbols. It is formed by the earth over heaven — 地天泰 — and embodies the principle of flourishing. Students of the I Ching return to 泰 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 泰：小往大来，吉亨。\n> *Tai: The small departs, the great comes — auspicious and penetrating。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 泰卦：Tai: The small departs, the great comes — auspicious and penetrating。\n   > *The Tuan Commentary on 泰: Tai: The small departs, the great comes — auspicious and penetrating.*\n\n2. **The Xiang Commentary (象传)**\n   > 地天泰\n   > *The Image of 泰: 地天泰 (earth over heaven). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 泰. *In the context of Flourishing: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 泰. *In the context of Flourishing: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 泰. *In the context of Flourishing: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 泰. *In the context of Flourishing: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 泰. *In the context of Flourishing: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 泰. *In the context of Flourishing: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n泰 (Flourishing) corresponds to: the inner trigram and outer trigram of 泰, whose virtue flourishing manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 泰 (Flourishing) advises reading the moment through the lens of flourishing. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-12",
    "title": "Hexagram 12 · 否 (Pǐ) — Decline",
    "lessons": [
      {
        "id": "hex-12-1",
        "title": "Hexagram 12 · 否 (Pǐ) — Decline (天地否)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 12, 否 (Pǐ), is the 12th of the sixty-four symbols. It is formed by the heaven over earth — 天地否 — and embodies the principle of decline. Students of the I Ching return to 否 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 否：否之匪人，不利君子贞。大往小来。\n> *Pi: Obstruction is not the time for humans. Not advantageous for the upright person. The great departs, the small comes。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 否卦：Pi: Obstruction is not the time for humans. Not advantageous for the upright person. The great departs, the small comes。\n   > *The Tuan Commentary on 否: Pi: Obstruction is not the time for humans. Not advantageous for the upright person. The great departs, the small comes.*\n\n2. **The Xiang Commentary (象传)**\n   > 天地否\n   > *The Image of 否: 天地否 (heaven over earth). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 否. *In the context of Decline: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 否. *In the context of Decline: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 否. *In the context of Decline: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 否. *In the context of Decline: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 否. *In the context of Decline: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 否. *In the context of Decline: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n否 (Decline) corresponds to: the inner trigram and outer trigram of 否, whose virtue decline manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 否 (Decline) advises reading the moment through the lens of decline. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-13",
    "title": "Hexagram 13 · 同人 (Tóng Rén) — Fellowship",
    "lessons": [
      {
        "id": "hex-13-1",
        "title": "Hexagram 13 · 同人 (Tóng Rén) — Fellowship (天火同人)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 13, 同人 (Tóng Rén), is the 13th of the sixty-four symbols. It is formed by the heaven over fire — 天火同人 — and embodies the principle of fellowship. Students of the I Ching return to 同人 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 同人：同人于野，亨。利涉大川，利君子贞。\n> *Tong Ren: Fellowship in the wilds — penetration. Advantage to cross the great river; advantageous for the upright person。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 同人卦：Tong Ren: Fellowship in the wilds — penetration. Advantage to cross the great river; advantageous for the upright person。\n   > *The Tuan Commentary on 同人: Tong Ren: Fellowship in the wilds — penetration. Advantage to cross the great river; advantageous for the upright person.*\n\n2. **The Xiang Commentary (象传)**\n   > 天火同人\n   > *The Image of 同人: 天火同人 (heaven over fire). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 同人. *In the context of Fellowship: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 同人. *In the context of Fellowship: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 同人. *In the context of Fellowship: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 同人. *In the context of Fellowship: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 同人. *In the context of Fellowship: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 同人. *In the context of Fellowship: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n同人 (Fellowship) corresponds to: the inner trigram and outer trigram of 同人, whose virtue fellowship manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 同人 (Fellowship) advises reading the moment through the lens of fellowship. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-14",
    "title": "Hexagram 14 · 大有 (Dàyǒu) — Great Possession",
    "lessons": [
      {
        "id": "hex-14-1",
        "title": "Hexagram 14 · 大有 (Dàyǒu) — Great Possession (火天大有)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 14, 大有 (Dàyǒu), is the 14th of the sixty-four symbols. It is formed by the fire over heaven — 火天大有 — and embodies the principle of great possession. Students of the I Ching return to 大有 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 大有：元亨。\n> *Da You: Origination and Penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 大有卦：Da You: Origination and Penetration。\n   > *The Tuan Commentary on 大有: Da You: Origination and Penetration.*\n\n2. **The Xiang Commentary (象传)**\n   > 火天大有\n   > *The Image of 大有: 火天大有 (fire over heaven). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 大有. *In the context of Great Possession: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 大有. *In the context of Great Possession: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 大有. *In the context of Great Possession: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 大有. *In the context of Great Possession: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 大有. *In the context of Great Possession: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 大有. *In the context of Great Possession: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n大有 (Great Possession) corresponds to: the inner trigram and outer trigram of 大有, whose virtue great possession manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 大有 (Great Possession) advises reading the moment through the lens of great possession. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-15",
    "title": "Hexagram 15 · 谦 (Qiān) — Modesty",
    "lessons": [
      {
        "id": "hex-15-1",
        "title": "Hexagram 15 · 谦 (Qiān) — Modesty (地山谦)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 15, 谦 (Qiān), is the 15th of the sixty-four symbols. It is formed by the earth over mountain — 地山谦 — and embodies the principle of modesty. Students of the I Ching return to 谦 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 谦：亨，君子有终。\n> *Qian: Penetration; the exemplary person has an end。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 谦卦：Qian: Penetration; the exemplary person has an end。\n   > *The Tuan Commentary on 谦: Qian: Penetration; the exemplary person has an end.*\n\n2. **The Xiang Commentary (象传)**\n   > 地山谦\n   > *The Image of 谦: 地山谦 (earth over mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 谦. *In the context of Modesty: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 谦. *In the context of Modesty: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 谦. *In the context of Modesty: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 谦. *In the context of Modesty: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 谦. *In the context of Modesty: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 谦. *In the context of Modesty: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n谦 (Modesty) corresponds to: the inner trigram and outer trigram of 谦, whose virtue modesty manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 谦 (Modesty) advises reading the moment through the lens of modesty. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-16",
    "title": "Hexagram 16 · 豫 (Yù) — Enthusiasm",
    "lessons": [
      {
        "id": "hex-16-1",
        "title": "Hexagram 16 · 豫 (Yù) — Enthusiasm (雷地豫)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 16, 豫 (Yù), is the 16th of the sixty-four symbols. It is formed by the thunder over earth — 雷地豫 — and embodies the principle of enthusiasm. Students of the I Ching return to 豫 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 豫：利建侯行师。\n> *Yu: Advantage in establishing helpers and mobilizing the army。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 豫卦：Yu: Advantage in establishing helpers and mobilizing the army。\n   > *The Tuan Commentary on 豫: Yu: Advantage in establishing helpers and mobilizing the army.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷地豫\n   > *The Image of 豫: 雷地豫 (thunder over earth). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 豫. *In the context of Enthusiasm: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 豫. *In the context of Enthusiasm: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 豫. *In the context of Enthusiasm: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 豫. *In the context of Enthusiasm: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 豫. *In the context of Enthusiasm: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 豫. *In the context of Enthusiasm: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n豫 (Enthusiasm) corresponds to: the inner trigram and outer trigram of 豫, whose virtue enthusiasm manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 豫 (Enthusiasm) advises reading the moment through the lens of enthusiasm. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-17",
    "title": "Hexagram 17 · 随 (Suí) — Following",
    "lessons": [
      {
        "id": "hex-17-1",
        "title": "Hexagram 17 · 随 (Suí) — Following (泽雷随)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 17, 随 (Suí), is the 17th of the sixty-four symbols. It is formed by the lake over thunder — 泽雷随 — and embodies the principle of following. Students of the I Ching return to 随 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 随：元亨利贞，无咎。\n> *Sui: Origination, Penetration, Advantage, Uprightness — no blame。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 随卦：Sui: Origination, Penetration, Advantage, Uprightness — no blame。\n   > *The Tuan Commentary on 随: Sui: Origination, Penetration, Advantage, Uprightness — no blame.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽雷随\n   > *The Image of 随: 泽雷随 (lake over thunder). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 随. *In the context of Following: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 随. *In the context of Following: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 随. *In the context of Following: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 随. *In the context of Following: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 随. *In the context of Following: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 随. *In the context of Following: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n随 (Following) corresponds to: the inner trigram and outer trigram of 随, whose virtue following manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 随 (Following) advises reading the moment through the lens of following. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-18",
    "title": "Hexagram 18 · 蛊 (Gǔ) — Remedying",
    "lessons": [
      {
        "id": "hex-18-1",
        "title": "Hexagram 18 · 蛊 (Gǔ) — Remedying (山风蛊)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 18, 蛊 (Gǔ), is the 18th of the sixty-four symbols. It is formed by the mountain over wind — 山风蛊 — and embodies the principle of remedying. Students of the I Ching return to 蛊 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 蛊：元亨。利涉大川。先甲三日，后甲三日。\n> *Gu: Origination, Penetration. Advantage to cross the great river. Three days before and three days after。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 蛊卦：Gu: Origination, Penetration. Advantage to cross the great river. Three days before and three days after。\n   > *The Tuan Commentary on 蛊: Gu: Origination, Penetration. Advantage to cross the great river. Three days before and three days after.*\n\n2. **The Xiang Commentary (象传)**\n   > 山风蛊\n   > *The Image of 蛊: 山风蛊 (mountain over wind). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 蛊. *In the context of Remedying: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 蛊. *In the context of Remedying: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 蛊. *In the context of Remedying: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 蛊. *In the context of Remedying: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 蛊. *In the context of Remedying: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 蛊. *In the context of Remedying: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n蛊 (Remedying) corresponds to: the inner trigram and outer trigram of 蛊, whose virtue remedying manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 蛊 (Remedying) advises reading the moment through the lens of remedying. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-19",
    "title": "Hexagram 19 · 临 (Lín) — Approach",
    "lessons": [
      {
        "id": "hex-19-1",
        "title": "Hexagram 19 · 临 (Lín) — Approach (地泽临)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 19, 临 (Lín), is the 19th of the sixty-four symbols. It is formed by the earth over lake — 地泽临 — and embodies the principle of approach. Students of the I Ching return to 临 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 临：元亨利贞。至于八月有凶。\n> *Lin: Origination, Penetration, Advantage, Uprightness. By the eighth month there will be misfortune。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 临卦：Lin: Origination, Penetration, Advantage, Uprightness. By the eighth month there will be misfortune。\n   > *The Tuan Commentary on 临: Lin: Origination, Penetration, Advantage, Uprightness. By the eighth month there will be misfortune.*\n\n2. **The Xiang Commentary (象传)**\n   > 地泽临\n   > *The Image of 临: 地泽临 (earth over lake). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 临. *In the context of Approach: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 临. *In the context of Approach: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 临. *In the context of Approach: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 临. *In the context of Approach: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 临. *In the context of Approach: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 临. *In the context of Approach: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n临 (Approach) corresponds to: the inner trigram and outer trigram of 临, whose virtue approach manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 临 (Approach) advises reading the moment through the lens of approach. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-20",
    "title": "Hexagram 20 · 观 (Guān) — Contemplation",
    "lessons": [
      {
        "id": "hex-20-1",
        "title": "Hexagram 20 · 观 (Guān) — Contemplation (风地观)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 20, 观 (Guān), is the 20th of the sixty-four symbols. It is formed by the wind over earth — 风地观 — and embodies the principle of contemplation. Students of the I Ching return to 观 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 观：盥而不荐，有孚颙若。\n> *Guan: Washing the hands but not yet offering — there is sincere respect。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 观卦：Guan: Washing the hands but not yet offering — there is sincere respect。\n   > *The Tuan Commentary on 观: Guan: Washing the hands but not yet offering — there is sincere respect.*\n\n2. **The Xiang Commentary (象传)**\n   > 风地观\n   > *The Image of 观: 风地观 (wind over earth). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 观. *In the context of Contemplation: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 观. *In the context of Contemplation: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 观. *In the context of Contemplation: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 观. *In the context of Contemplation: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 观. *In the context of Contemplation: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 观. *In the context of Contemplation: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n观 (Contemplation) corresponds to: the inner trigram and outer trigram of 观, whose virtue contemplation manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 观 (Contemplation) advises reading the moment through the lens of contemplation. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-21",
    "title": "Hexagram 21 · 噬嗑 (Shì Hé) — Biting Through",
    "lessons": [
      {
        "id": "hex-21-1",
        "title": "Hexagram 21 · 噬嗑 (Shì Hé) — Biting Through (火雷噬嗑)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 21, 噬嗑 (Shì Hé), is the 21st of the sixty-four symbols. It is formed by the fire over thunder — 火雷噬嗑 — and embodies the principle of biting through. Students of the I Ching return to 噬嗑 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 噬嗑：亨。利用狱。\n> *Shi He: Penetration. Advantage in administering justice。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 噬嗑卦：Shi He: Penetration. Advantage in administering justice。\n   > *The Tuan Commentary on 噬嗑: Shi He: Penetration. Advantage in administering justice.*\n\n2. **The Xiang Commentary (象传)**\n   > 火雷噬嗑\n   > *The Image of 噬嗑: 火雷噬嗑 (fire over thunder). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 噬嗑. *In the context of Biting Through: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 噬嗑. *In the context of Biting Through: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 噬嗑. *In the context of Biting Through: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 噬嗑. *In the context of Biting Through: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 噬嗑. *In the context of Biting Through: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 噬嗑. *In the context of Biting Through: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n噬嗑 (Biting Through) corresponds to: the inner trigram and outer trigram of 噬嗑, whose virtue biting through manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 噬嗑 (Biting Through) advises reading the moment through the lens of biting through. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-22",
    "title": "Hexagram 22 · 贲 (Bì) — Adornment",
    "lessons": [
      {
        "id": "hex-22-1",
        "title": "Hexagram 22 · 贲 (Bì) — Adornment (山火贲)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 22, 贲 (Bì), is the 22nd of the sixty-four symbols. It is formed by the mountain over fire — 山火贲 — and embodies the principle of adornment. Students of the I Ching return to 贲 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 贲：亨。小利有攸往。\n> *Bi: Penetration. Small advantage in having somewhere to go。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 贲卦：Bi: Penetration. Small advantage in having somewhere to go。\n   > *The Tuan Commentary on 贲: Bi: Penetration. Small advantage in having somewhere to go.*\n\n2. **The Xiang Commentary (象传)**\n   > 山火贲\n   > *The Image of 贲: 山火贲 (mountain over fire). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 贲. *In the context of Adornment: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 贲. *In the context of Adornment: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 贲. *In the context of Adornment: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 贲. *In the context of Adornment: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 贲. *In the context of Adornment: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 贲. *In the context of Adornment: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n贲 (Adornment) corresponds to: the inner trigram and outer trigram of 贲, whose virtue adornment manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 贲 (Adornment) advises reading the moment through the lens of adornment. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-23",
    "title": "Hexagram 23 · 剥 (Bō) — Stripping",
    "lessons": [
      {
        "id": "hex-23-1",
        "title": "Hexagram 23 · 剥 (Bō) — Stripping (山地剥)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 23, 剥 (Bō), is the 23rd of the sixty-four symbols. It is formed by the mountain over earth — 山地剥 — and embodies the principle of stripping. Students of the I Ching return to 剥 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 剥：不利有攸往。\n> *Bo: Not advantageous to have somewhere to go。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 剥卦：Bo: Not advantageous to have somewhere to go。\n   > *The Tuan Commentary on 剥: Bo: Not advantageous to have somewhere to go.*\n\n2. **The Xiang Commentary (象传)**\n   > 山地剥\n   > *The Image of 剥: 山地剥 (mountain over earth). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 剥. *In the context of Stripping: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 剥. *In the context of Stripping: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 剥. *In the context of Stripping: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 剥. *In the context of Stripping: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 剥. *In the context of Stripping: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 剥. *In the context of Stripping: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n剥 (Stripping) corresponds to: the inner trigram and outer trigram of 剥, whose virtue stripping manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 剥 (Stripping) advises reading the moment through the lens of stripping. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-24",
    "title": "Hexagram 24 · 复 (Fù) — Return",
    "lessons": [
      {
        "id": "hex-24-1",
        "title": "Hexagram 24 · 复 (Fù) — Return (地雷复)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 24, 复 (Fù), is the 24th of the sixty-four symbols. It is formed by the earth over thunder — 地雷复 — and embodies the principle of return. Students of the I Ching return to 复 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 复：亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。\n> *Fu: Penetration. Going out and coming in without injury; friends arrive without blame. Return to the Way。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 复卦：Fu: Penetration. Going out and coming in without injury; friends arrive without blame. Return to the Way。\n   > *The Tuan Commentary on 复: Fu: Penetration. Going out and coming in without injury; friends arrive without blame. Return to the Way.*\n\n2. **The Xiang Commentary (象传)**\n   > 地雷复\n   > *The Image of 复: 地雷复 (earth over thunder). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 复. *In the context of Return: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 复. *In the context of Return: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 复. *In the context of Return: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 复. *In the context of Return: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 复. *In the context of Return: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 复. *In the context of Return: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n复 (Return) corresponds to: the inner trigram and outer trigram of 复, whose virtue return manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 复 (Return) advises reading the moment through the lens of return. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-25",
    "title": "Hexagram 25 · 无妄 (Wú Wàng) — Innocence",
    "lessons": [
      {
        "id": "hex-25-1",
        "title": "Hexagram 25 · 无妄 (Wú Wàng) — Innocence (天雷无妄)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 25, 无妄 (Wú Wàng), is the 25th of the sixty-four symbols. It is formed by the heaven over thunder — 天雷无妄 — and embodies the principle of innocence. Students of the I Ching return to 无妄 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 无妄：元亨利贞。其正有眚，不利有攸往。\n> *Wu Wang: Origination, Penetration, Advantage, Uprightness. If one is not as he should be, there will be disaster。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 无妄卦：Wu Wang: Origination, Penetration, Advantage, Uprightness. If one is not as he should be, there will be disaster。\n   > *The Tuan Commentary on 无妄: Wu Wang: Origination, Penetration, Advantage, Uprightness. If one is not as he should be, there will be disaster.*\n\n2. **The Xiang Commentary (象传)**\n   > 天雷无妄\n   > *The Image of 无妄: 天雷无妄 (heaven over thunder). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 无妄. *In the context of Innocence: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 无妄. *In the context of Innocence: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 无妄. *In the context of Innocence: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 无妄. *In the context of Innocence: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 无妄. *In the context of Innocence: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 无妄. *In the context of Innocence: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n无妄 (Innocence) corresponds to: the inner trigram and outer trigram of 无妄, whose virtue innocence manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 无妄 (Innocence) advises reading the moment through the lens of innocence. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-26",
    "title": "Hexagram 26 · 大畜 (Dà Xù) — Great Taming",
    "lessons": [
      {
        "id": "hex-26-1",
        "title": "Hexagram 26 · 大畜 (Dà Xù) — Great Taming (山天大畜)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 26, 大畜 (Dà Xù), is the 26th of the sixty-four symbols. It is formed by the mountain over heaven — 山天大畜 — and embodies the principle of great taming. Students of the I Ching return to 大畜 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 大畜：利贞。不家食，吉，利涉大川。\n> *Da Chu: Advantage in Uprightness. Not eating at home is auspicious; advantage in crossing the great river。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 大畜卦：Da Chu: Advantage in Uprightness. Not eating at home is auspicious; advantage in crossing the great river。\n   > *The Tuan Commentary on 大畜: Da Chu: Advantage in Uprightness. Not eating at home is auspicious; advantage in crossing the great river.*\n\n2. **The Xiang Commentary (象传)**\n   > 山天大畜\n   > *The Image of 大畜: 山天大畜 (mountain over heaven). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 大畜. *In the context of Great Taming: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 大畜. *In the context of Great Taming: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 大畜. *In the context of Great Taming: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 大畜. *In the context of Great Taming: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 大畜. *In the context of Great Taming: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 大畜. *In the context of Great Taming: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n大畜 (Great Taming) corresponds to: the inner trigram and outer trigram of 大畜, whose virtue great taming manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 大畜 (Great Taming) advises reading the moment through the lens of great taming. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-27",
    "title": "Hexagram 27 · 颐 (Yí) — Nourishment",
    "lessons": [
      {
        "id": "hex-27-1",
        "title": "Hexagram 27 · 颐 (Yí) — Nourishment (山雷颐)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 27, 颐 (Yí), is the 27th of the sixty-four symbols. It is formed by the mountain over thunder — 山雷颐 — and embodies the principle of nourishment. Students of the I Ching return to 颐 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 颐：贞吉。观颐，自求口实。\n> *Yi: Uprightness is auspicious. Observe nourishment and seek the food for oneself。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 颐卦：Yi: Uprightness is auspicious. Observe nourishment and seek the food for oneself。\n   > *The Tuan Commentary on 颐: Yi: Uprightness is auspicious. Observe nourishment and seek the food for oneself.*\n\n2. **The Xiang Commentary (象传)**\n   > 山雷颐\n   > *The Image of 颐: 山雷颐 (mountain over thunder). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 颐. *In the context of Nourishment: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 颐. *In the context of Nourishment: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 颐. *In the context of Nourishment: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 颐. *In the context of Nourishment: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 颐. *In the context of Nourishment: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 颐. *In the context of Nourishment: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n颐 (Nourishment) corresponds to: the inner trigram and outer trigram of 颐, whose virtue nourishment manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 颐 (Nourishment) advises reading the moment through the lens of nourishment. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-28",
    "title": "Hexagram 28 · 大过 (Dà Guò) — Great Excess",
    "lessons": [
      {
        "id": "hex-28-1",
        "title": "Hexagram 28 · 大过 (Dà Guò) — Great Excess (泽风大过)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 28, 大过 (Dà Guò), is the 28th of the sixty-four symbols. It is formed by the lake over wind — 泽风大过 — and embodies the principle of great excess. Students of the I Ching return to 大过 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 大过：栋桡，利有攸往，亨。\n> *Da Guo: The beam is bent. Advantage in having somewhere to go; penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 大过卦：Da Guo: The beam is bent. Advantage in having somewhere to go; penetration。\n   > *The Tuan Commentary on 大过: Da Guo: The beam is bent. Advantage in having somewhere to go; penetration.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽风大过\n   > *The Image of 大过: 泽风大过 (lake over wind). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 大过. *In the context of Great Excess: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 大过. *In the context of Great Excess: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 大过. *In the context of Great Excess: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 大过. *In the context of Great Excess: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 大过. *In the context of Great Excess: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 大过. *In the context of Great Excess: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n大过 (Great Excess) corresponds to: the inner trigram and outer trigram of 大过, whose virtue great excess manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 大过 (Great Excess) advises reading the moment through the lens of great excess. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-29",
    "title": "Hexagram 29 · 坎 (Kǎn) — The Abyss",
    "lessons": [
      {
        "id": "hex-29-1",
        "title": "Hexagram 29 · 坎 (Kǎn) — The Abyss (坎为水)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 29, 坎 (Kǎn), is the 29th of the sixty-four symbols. It is formed by the water over water — 坎为水 — and embodies the principle of the abyss. Students of the I Ching return to 坎 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 坎：习坎，有孚，维心亨。\n> *Kan: Repeated Abyss. With sincerity, the heart is preserved in penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 坎卦：Kan: Repeated Abyss. With sincerity, the heart is preserved in penetration。\n   > *The Tuan Commentary on 坎: Kan: Repeated Abyss. With sincerity, the heart is preserved in penetration.*\n\n2. **The Xiang Commentary (象传)**\n   > 水洊至\n   > *The Image of 坎: 坎为水 (water over water). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 坎. *In the context of The Abyss: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 坎. *In the context of The Abyss: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 坎. *In the context of The Abyss: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 坎. *In the context of The Abyss: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 坎. *In the context of The Abyss: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 坎. *In the context of The Abyss: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n坎 (The Abyss) corresponds to: water (水), liquid (液), ear (耳), blood (血), north (北), winter (冬).\n\n**Practice (实践)**\nIn divination, 坎 (The Abyss) advises reading the moment through the lens of the abyss. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-30",
    "title": "Hexagram 30 · 离 (Lí) — Radiance",
    "lessons": [
      {
        "id": "hex-30-1",
        "title": "Hexagram 30 · 离 (Lí) — Radiance (离为火)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 30, 离 (Lí), is the 30th of the sixty-four symbols. It is formed by the fire over fire — 离为火 — and embodies the principle of radiance. Students of the I Ching return to 离 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 离：利贞，亨。畜牝牛，吉。\n> *Li: Advantage in Uprightness; Penetration. Nourishing a cow is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 离卦：Li: Advantage in Uprightness; Penetration. Nourishing a cow is auspicious。\n   > *The Tuan Commentary on 离: Li: Advantage in Uprightness; Penetration. Nourishing a cow is auspicious.*\n\n2. **The Xiang Commentary (象传)**\n   > 明两作\n   > *The Image of 离: 离为火 (fire over fire). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 离. *In the context of Radiance: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 离. *In the context of Radiance: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 离. *In the context of Radiance: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 离. *In the context of Radiance: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 离. *In the context of Radiance: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 离. *In the context of Radiance: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n离 (Radiance) corresponds to: fire (火), flame (焰), eye (目), brightness (明), south (南), summer (夏).\n\n**Practice (实践)**\nIn divination, 离 (Radiance) advises reading the moment through the lens of radiance. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-31",
    "title": "Hexagram 31 · 咸 (Xián) — Sensing",
    "lessons": [
      {
        "id": "hex-31-1",
        "title": "Hexagram 31 · 咸 (Xián) — Sensing (泽山咸)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 31, 咸 (Xián), is the 31st of the sixty-four symbols. It is formed by the lake over mountain — 泽山咸 — and embodies the principle of sensing. Students of the I Ching return to 咸 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 咸：亨，利贞，取女吉。\n> *Xian: Penetration, Advantage, Uprightness. Taking a woman is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 咸卦：Xian: Penetration, Advantage, Uprightness. Taking a woman is auspicious。\n   > *The Tuan Commentary on 咸: Xian: Penetration, Advantage, Uprightness. Taking a woman is auspicious.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有泽\n   > *The Image of 咸: 泽山咸 (lake over mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 咸. *In the context of Sensing: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 咸. *In the context of Sensing: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 咸. *In the context of Sensing: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 咸. *In the context of Sensing: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 咸. *In the context of Sensing: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 咸. *In the context of Sensing: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n咸 (Sensing) corresponds to: the inner trigram and outer trigram of 咸, whose virtue sensing manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 咸 (Sensing) advises reading the moment through the lens of sensing. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-32",
    "title": "Hexagram 32 · 恒 (Héng) — Persistence",
    "lessons": [
      {
        "id": "hex-32-1",
        "title": "Hexagram 32 · 恒 (Héng) — Persistence (雷风恒)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 32, 恒 (Héng), is the 32nd of the sixty-four symbols. It is formed by the thunder over wind — 雷风恒 — and embodies the principle of persistence. Students of the I Ching return to 恒 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 恒：亨，无咎，利贞，利有攸往。\n> *Heng: Penetration, no blame, advantage in Uprightness, advantage in having somewhere to go。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 恒卦：Heng: Penetration, no blame, advantage in Uprightness, advantage in having somewhere to go。\n   > *The Tuan Commentary on 恒: Heng: Penetration, no blame, advantage in Uprightness, advantage in having somewhere to go.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷风恒\n   > *The Image of 恒: 雷风恒 (thunder over wind). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 恒. *In the context of Persistence: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 恒. *In the context of Persistence: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 恒. *In the context of Persistence: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 恒. *In the context of Persistence: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 恒. *In the context of Persistence: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 恒. *In the context of Persistence: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n恒 (Persistence) corresponds to: the inner trigram and outer trigram of 恒, whose virtue persistence manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 恒 (Persistence) advises reading the moment through the lens of persistence. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-33",
    "title": "Hexagram 33 · 遁 (Dùn) — Retreat",
    "lessons": [
      {
        "id": "hex-33-1",
        "title": "Hexagram 33 · 遁 (Dùn) — Retreat (天山遁)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 33, 遁 (Dùn), is the 33rd of the sixty-four symbols. It is formed by the heaven over mountain — 天山遁 — and embodies the principle of retreat. Students of the I Ching return to 遁 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 遁：亨，小利贞。\n> *Dun: Penetration, small advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 遁卦：Dun: Penetration, small advantage in Uprightness。\n   > *The Tuan Commentary on 遁: Dun: Penetration, small advantage in Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 天下有山\n   > *The Image of 遁: 天山遁 (heaven over mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 遁. *In the context of Retreat: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 遁. *In the context of Retreat: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 遁. *In the context of Retreat: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 遁. *In the context of Retreat: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 遁. *In the context of Retreat: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 遁. *In the context of Retreat: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n遁 (Retreat) corresponds to: the inner trigram and outer trigram of 遁, whose virtue retreat manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 遁 (Retreat) advises reading the moment through the lens of retreat. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-34",
    "title": "Hexagram 34 · 大壮 (Dà Zhuàng) — Great Strength",
    "lessons": [
      {
        "id": "hex-34-1",
        "title": "Hexagram 34 · 大壮 (Dà Zhuàng) — Great Strength (雷天大壮)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 34, 大壮 (Dà Zhuàng), is the 34th of the sixty-four symbols. It is formed by the thunder over heaven — 雷天大壮 — and embodies the principle of great strength. Students of the I Ching return to 大壮 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 大壮：利贞。\n> *Da Zhuang: Advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 大壮卦：Da Zhuang: Advantage in Uprightness。\n   > *The Tuan Commentary on 大壮: Da Zhuang: Advantage in Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷天大壮\n   > *The Image of 大壮: 雷天大壮 (thunder over heaven). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 大壮. *In the context of Great Strength: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 大壮. *In the context of Great Strength: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 大壮. *In the context of Great Strength: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 大壮. *In the context of Great Strength: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 大壮. *In the context of Great Strength: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 大壮. *In the context of Great Strength: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n大壮 (Great Strength) corresponds to: the inner trigram and outer trigram of 大壮, whose virtue great strength manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 大壮 (Great Strength) advises reading the moment through the lens of great strength. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-35",
    "title": "Hexagram 35 · 晋 (Jìn) — Prosperity",
    "lessons": [
      {
        "id": "hex-35-1",
        "title": "Hexagram 35 · 晋 (Jìn) — Prosperity (火地晋)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 35, 晋 (Jìn), is the 35th of the sixty-four symbols. It is formed by the fire over earth — 火地晋 — and embodies the principle of prosperity. Students of the I Ching return to 晋 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 晋：康侯用锡马蕃庶，昼日三接。\n> *Jin: The prosperous lord uses the gift of horses, received three times in one day。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 晋卦：Jin: The prosperous lord uses the gift of horses, received three times in one day。\n   > *The Tuan Commentary on 晋: Jin: The prosperous lord uses the gift of horses, received three times in one day.*\n\n2. **The Xiang Commentary (象传)**\n   > 明出地上\n   > *The Image of 晋: 火地晋 (fire over earth). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 晋. *In the context of Prosperity: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 晋. *In the context of Prosperity: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 晋. *In the context of Prosperity: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 晋. *In the context of Prosperity: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 晋. *In the context of Prosperity: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 晋. *In the context of Prosperity: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n晋 (Prosperity) corresponds to: the inner trigram and outer trigram of 晋, whose virtue prosperity manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 晋 (Prosperity) advises reading the moment through the lens of prosperity. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-36",
    "title": "Hexagram 36 · 明夷 (Míng Yí) — Brightness Hiding",
    "lessons": [
      {
        "id": "hex-36-1",
        "title": "Hexagram 36 · 明夷 (Míng Yí) — Brightness Hiding (地火明夷)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 36, 明夷 (Míng Yí), is the 36th of the sixty-four symbols. It is formed by the earth over fire — 地火明夷 — and embodies the principle of brightness hiding. Students of the I Ching return to 明夷 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 明夷：利艰贞。\n> *Ming Yi: Advantage in difficult Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 明夷卦：Ming Yi: Advantage in difficult Uprightness。\n   > *The Tuan Commentary on 明夷: Ming Yi: Advantage in difficult Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 明入地中\n   > *The Image of 明夷: 地火明夷 (earth over fire). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 明夷. *In the context of Brightness Hiding: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 明夷. *In the context of Brightness Hiding: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 明夷. *In the context of Brightness Hiding: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 明夷. *In the context of Brightness Hiding: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 明夷. *In the context of Brightness Hiding: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 明夷. *In the context of Brightness Hiding: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n明夷 (Brightness Hiding) corresponds to: the inner trigram and outer trigram of 明夷, whose virtue brightness hiding manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 明夷 (Brightness Hiding) advises reading the moment through the lens of brightness hiding. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-37",
    "title": "Hexagram 37 · 家人 (Jiā Rén) — The Household",
    "lessons": [
      {
        "id": "hex-37-1",
        "title": "Hexagram 37 · 家人 (Jiā Rén) — The Household (风火家人)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 37, 家人 (Jiā Rén), is the 37th of the sixty-four symbols. It is formed by the wind over fire — 风火家人 — and embodies the principle of the household. Students of the I Ching return to 家人 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 家人：利女贞。\n> *Jia Ren: Advantage for a woman in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 家人卦：Jia Ren: Advantage for a woman in Uprightness。\n   > *The Tuan Commentary on 家人: Jia Ren: Advantage for a woman in Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 风自火出\n   > *The Image of 家人: 风火家人 (wind over fire). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 家人. *In the context of The Household: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 家人. *In the context of The Household: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 家人. *In the context of The Household: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 家人. *In the context of The Household: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 家人. *In the context of The Household: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 家人. *In the context of The Household: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n家人 (The Household) corresponds to: the inner trigram and outer trigram of 家人, whose virtue the household manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 家人 (The Household) advises reading the moment through the lens of the household. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-38",
    "title": "Hexagram 38 · 睽 (Kuí) — Opposition",
    "lessons": [
      {
        "id": "hex-38-1",
        "title": "Hexagram 38 · 睽 (Kuí) — Opposition (火泽睽)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 38, 睽 (Kuí), is the 38th of the sixty-four symbols. It is formed by the fire over lake — 火泽睽 — and embodies the principle of opposition. Students of the I Ching return to 睽 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 睽：小事吉。\n> *Kui: In small matters, auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 睽卦：Kui: In small matters, auspicious。\n   > *The Tuan Commentary on 睽: Kui: In small matters, auspicious.*\n\n2. **The Xiang Commentary (象传)**\n   > 上火下泽\n   > *The Image of 睽: 火泽睽 (fire over lake). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 睽. *In the context of Opposition: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 睽. *In the context of Opposition: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 睽. *In the context of Opposition: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 睽. *In the context of Opposition: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 睽. *In the context of Opposition: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 睽. *In the context of Opposition: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n睽 (Opposition) corresponds to: the inner trigram and outer trigram of 睽, whose virtue opposition manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 睽 (Opposition) advises reading the moment through the lens of opposition. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-39",
    "title": "Hexagram 39 · 蹇 (Jiǎn) — Limping",
    "lessons": [
      {
        "id": "hex-39-1",
        "title": "Hexagram 39 · 蹇 (Jiǎn) — Limping (水山蹇)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 39, 蹇 (Jiǎn), is the 39th of the sixty-four symbols. It is formed by the water over mountain — 水山蹇 — and embodies the principle of limping. Students of the I Ching return to 蹇 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 蹇：利西南，不利东北。利见大人，贞吉。\n> *Jian: Advantage in the southwest, not in the northeast. Advantage to see the great person; Uprightness is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 蹇卦：Jian: Advantage in the southwest, not in the northeast. Advantage to see the great person; Uprightness is auspicious。\n   > *The Tuan Commentary on 蹇: Jian: Advantage in the southwest, not in the northeast. Advantage to see the great person; Uprightness is auspicious.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有水\n   > *The Image of 蹇: 水山蹇 (water over mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 蹇. *In the context of Limping: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 蹇. *In the context of Limping: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 蹇. *In the context of Limping: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 蹇. *In the context of Limping: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 蹇. *In the context of Limping: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 蹇. *In the context of Limping: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n蹇 (Limping) corresponds to: the inner trigram and outer trigram of 蹇, whose virtue limping manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 蹇 (Limping) advises reading the moment through the lens of limping. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-40",
    "title": "Hexagram 40 · 解 (Jiě) — Release",
    "lessons": [
      {
        "id": "hex-40-1",
        "title": "Hexagram 40 · 解 (Jiě) — Release (雷水解)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 40, 解 (Jiě), is the 40th of the sixty-four symbols. It is formed by the thunder over water — 雷水解 — and embodies the principle of release. Students of the I Ching return to 解 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 解：利西南。无所往，其来复吉。有攸往，夙吉。\n> *Jie: Advantage in the southwest. If there is nowhere to go, return is auspicious. If there is somewhere to go, early action is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 解卦：Jie: Advantage in the southwest. If there is nowhere to go, return is auspicious. If there is somewhere to go, early action is auspicious。\n   > *The Tuan Commentary on 解: Jie: Advantage in the southwest. If there is nowhere to go, return is auspicious. If there is somewhere to go, early action is auspicious.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷雨作\n   > *The Image of 解: 雷水解 (thunder over water). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 解. *In the context of Release: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 解. *In the context of Release: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 解. *In the context of Release: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 解. *In the context of Release: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 解. *In the context of Release: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 解. *In the context of Release: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n解 (Release) corresponds to: the inner trigram and outer trigram of 解, whose virtue release manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 解 (Release) advises reading the moment through the lens of release. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-41",
    "title": "Hexagram 41 · 损 (Sǔn) — Loss",
    "lessons": [
      {
        "id": "hex-41-1",
        "title": "Hexagram 41 · 损 (Sǔn) — Loss (山泽损)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 41, 损 (Sǔn), is the 41st of the sixty-four symbols. It is formed by the mountain over lake — 山泽损 — and embodies the principle of loss. Students of the I Ching return to 损 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 损：有孚，元吉，无咎，可贞。利有攸往。\n> *Sun: With sincerity, great fortune, no blame, can be upright. Advantage in having somewhere to go。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 损卦：Sun: With sincerity, great fortune, no blame, can be upright. Advantage in having somewhere to go。\n   > *The Tuan Commentary on 损: Sun: With sincerity, great fortune, no blame, can be upright. Advantage in having somewhere to go.*\n\n2. **The Xiang Commentary (象传)**\n   > 山下有泽\n   > *The Image of 损: 山泽损 (mountain over lake). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 损. *In the context of Loss: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 损. *In the context of Loss: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 损. *In the context of Loss: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 损. *In the context of Loss: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 损. *In the context of Loss: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 损. *In the context of Loss: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n损 (Loss) corresponds to: the inner trigram and outer trigram of 损, whose virtue loss manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 损 (Loss) advises reading the moment through the lens of loss. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-42",
    "title": "Hexagram 42 · 益 (Yì) — Increase",
    "lessons": [
      {
        "id": "hex-42-1",
        "title": "Hexagram 42 · 益 (Yì) — Increase (风雷益)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 42, 益 (Yì), is the 42nd of the sixty-four symbols. It is formed by the wind over thunder — 风雷益 — and embodies the principle of increase. Students of the I Ching return to 益 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 益：利有攸往，利涉大川。\n> *Yi: Advantage in having somewhere to go; advantage in crossing the great river。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 益卦：Yi: Advantage in having somewhere to go; advantage in crossing the great river。\n   > *The Tuan Commentary on 益: Yi: Advantage in having somewhere to go; advantage in crossing the great river.*\n\n2. **The Xiang Commentary (象传)**\n   > 风雷益\n   > *The Image of 益: 风雷益 (wind over thunder). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 益. *In the context of Increase: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 益. *In the context of Increase: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 益. *In the context of Increase: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 益. *In the context of Increase: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 益. *In the context of Increase: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 益. *In the context of Increase: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n益 (Increase) corresponds to: the inner trigram and outer trigram of 益, whose virtue increase manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 益 (Increase) advises reading the moment through the lens of increase. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-43",
    "title": "Hexagram 43 · 夬 (Guài) — Breakthrough",
    "lessons": [
      {
        "id": "hex-43-1",
        "title": "Hexagram 43 · 夬 (Guài) — Breakthrough (泽天夬)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 43, 夬 (Guài), is the 43rd of the sixty-four symbols. It is formed by the lake over heaven — 泽天夬 — and embodies the principle of breakthrough. Students of the I Ching return to 夬 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 夬：扬于王庭，孚号有厉。告自邑，不利即戎，利有攸往。\n> *Guai: Announce in the court of the king. Cry with sincerity and there is danger. Report from your own city。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 夬卦：Guai: Announce in the court of the king. Cry with sincerity and there is danger. Report from your own city。\n   > *The Tuan Commentary on 夬: Guai: Announce in the court of the king. Cry with sincerity and there is danger. Report from your own city.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽上于天\n   > *The Image of 夬: 泽天夬 (lake over heaven). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 夬. *In the context of Breakthrough: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 夬. *In the context of Breakthrough: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 夬. *In the context of Breakthrough: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 夬. *In the context of Breakthrough: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 夬. *In the context of Breakthrough: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 夬. *In the context of Breakthrough: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n夬 (Breakthrough) corresponds to: the inner trigram and outer trigram of 夬, whose virtue breakthrough manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 夬 (Breakthrough) advises reading the moment through the lens of breakthrough. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-44",
    "title": "Hexagram 44 · 姤 (Gòu) — Encounter",
    "lessons": [
      {
        "id": "hex-44-1",
        "title": "Hexagram 44 · 姤 (Gòu) — Encounter (天风姤)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 44, 姤 (Gòu), is the 44th of the sixty-four symbols. It is formed by the heaven over wind — 天风姤 — and embodies the principle of encounter. Students of the I Ching return to 姤 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 姤：女壮，勿用取女。\n> *Gou: A woman who is strong; do not take such a woman。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 姤卦：Gou: A woman who is strong; do not take such a woman。\n   > *The Tuan Commentary on 姤: Gou: A woman who is strong; do not take such a woman.*\n\n2. **The Xiang Commentary (象传)**\n   > 天下有风\n   > *The Image of 姤: 天风姤 (heaven over wind). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 姤. *In the context of Encounter: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 姤. *In the context of Encounter: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 姤. *In the context of Encounter: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 姤. *In the context of Encounter: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 姤. *In the context of Encounter: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 姤. *In the context of Encounter: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n姤 (Encounter) corresponds to: the inner trigram and outer trigram of 姤, whose virtue encounter manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 姤 (Encounter) advises reading the moment through the lens of encounter. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-45",
    "title": "Hexagram 45 · 萃 (Cuì) — Gathering",
    "lessons": [
      {
        "id": "hex-45-1",
        "title": "Hexagram 45 · 萃 (Cuì) — Gathering (泽地萃)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 45, 萃 (Cuì), is the 45th of the sixty-four symbols. It is formed by the lake over earth — 泽地萃 — and embodies the principle of gathering. Students of the I Ching return to 萃 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 萃：亨。王假有庙，利见大人，亨，利贞。\n> *Cui: Penetration. The king approaches the temple. Advantage to see the great person。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 萃卦：Cui: Penetration. The king approaches the temple. Advantage to see the great person。\n   > *The Tuan Commentary on 萃: Cui: Penetration. The king approaches the temple. Advantage to see the great person.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽上于地\n   > *The Image of 萃: 泽地萃 (lake over earth). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 萃. *In the context of Gathering: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 萃. *In the context of Gathering: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 萃. *In the context of Gathering: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 萃. *In the context of Gathering: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 萃. *In the context of Gathering: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 萃. *In the context of Gathering: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n萃 (Gathering) corresponds to: the inner trigram and outer trigram of 萃, whose virtue gathering manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 萃 (Gathering) advises reading the moment through the lens of gathering. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-46",
    "title": "Hexagram 46 · 升 (Shēng) — Ascending",
    "lessons": [
      {
        "id": "hex-46-1",
        "title": "Hexagram 46 · 升 (Shēng) — Ascending (地风升)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 46, 升 (Shēng), is the 46th of the sixty-four symbols. It is formed by the earth over wind — 地风升 — and embodies the principle of ascending. Students of the I Ching return to 升 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 升：元亨，用见大人，勿恤，南征吉。\n> *Sheng: Origination, Penetration. Use to see the great person. Do not mourn; going south is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 升卦：Sheng: Origination, Penetration. Use to see the great person. Do not mourn; going south is auspicious。\n   > *The Tuan Commentary on 升: Sheng: Origination, Penetration. Use to see the great person. Do not mourn; going south is auspicious.*\n\n2. **The Xiang Commentary (象传)**\n   > 地中生木\n   > *The Image of 升: 地风升 (earth over wind). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 升. *In the context of Ascending: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 升. *In the context of Ascending: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 升. *In the context of Ascending: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 升. *In the context of Ascending: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 升. *In the context of Ascending: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 升. *In the context of Ascending: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n升 (Ascending) corresponds to: the inner trigram and outer trigram of 升, whose virtue ascending manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 升 (Ascending) advises reading the moment through the lens of ascending. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-47",
    "title": "Hexagram 47 · 困 (Kùn) — Exhaustion",
    "lessons": [
      {
        "id": "hex-47-1",
        "title": "Hexagram 47 · 困 (Kùn) — Exhaustion (泽水困)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 47, 困 (Kùn), is the 47th of the sixty-four symbols. It is formed by the lake over water — 泽水困 — and embodies the principle of exhaustion. Students of the I Ching return to 困 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 困：亨，贞，大人吉，无咎。有言不信。\n> *Kun: Penetration, Uprightness; the great person is fortunate, no blame. Words are not believed。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 困卦：Kun: Penetration, Uprightness; the great person is fortunate, no blame. Words are not believed。\n   > *The Tuan Commentary on 困: Kun: Penetration, Uprightness; the great person is fortunate, no blame. Words are not believed.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽中无水\n   > *The Image of 困: 泽水困 (lake over water). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 困. *In the context of Exhaustion: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 困. *In the context of Exhaustion: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 困. *In the context of Exhaustion: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 困. *In the context of Exhaustion: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 困. *In the context of Exhaustion: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 困. *In the context of Exhaustion: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n困 (Exhaustion) corresponds to: the inner trigram and outer trigram of 困, whose virtue exhaustion manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 困 (Exhaustion) advises reading the moment through the lens of exhaustion. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-48",
    "title": "Hexagram 48 · 井 (Jǐng) — The Well",
    "lessons": [
      {
        "id": "hex-48-1",
        "title": "Hexagram 48 · 井 (Jǐng) — The Well (水风井)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 48, 井 (Jǐng), is the 48th of the sixty-four symbols. It is formed by the water over wind — 水风井 — and embodies the principle of the well. Students of the I Ching return to 井 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 井：改邑不改井，无丧无得。往来井井。\n> *Jing: Changing the city but not the well — no loss, no gain. Coming and going, the well is always a well。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 井卦：Jing: Changing the city but not the well — no loss, no gain. Coming and going, the well is always a well。\n   > *The Tuan Commentary on 井: Jing: Changing the city but not the well — no loss, no gain. Coming and going, the well is always a well.*\n\n2. **The Xiang Commentary (象传)**\n   > 木上有水\n   > *The Image of 井: 水风井 (water over wind). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 井. *In the context of The Well: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 井. *In the context of The Well: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 井. *In the context of The Well: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 井. *In the context of The Well: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 井. *In the context of The Well: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 井. *In the context of The Well: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n井 (The Well) corresponds to: the inner trigram and outer trigram of 井, whose virtue the well manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 井 (The Well) advises reading the moment through the lens of the well. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-49",
    "title": "Hexagram 49 · 革 (Gé) — Revolution",
    "lessons": [
      {
        "id": "hex-49-1",
        "title": "Hexagram 49 · 革 (Gé) — Revolution (泽火革)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 49, 革 (Gé), is the 49th of the sixty-four symbols. It is formed by the lake over fire — 泽火革 — and embodies the principle of revolution. Students of the I Ching return to 革 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 革：己日乃孚，元亨利贞，悔亡。\n> *Ge: On the appointed day there will be sincerity. Origination, Penetration, Advantage, Uprightness; remorse vanishes。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 革卦：Ge: On the appointed day there will be sincerity. Origination, Penetration, Advantage, Uprightness; remorse vanishes。\n   > *The Tuan Commentary on 革: Ge: On the appointed day there will be sincerity. Origination, Penetration, Advantage, Uprightness; remorse vanishes.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽中有火\n   > *The Image of 革: 泽火革 (lake over fire). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 革. *In the context of Revolution: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 革. *In the context of Revolution: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 革. *In the context of Revolution: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 革. *In the context of Revolution: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 革. *In the context of Revolution: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 革. *In the context of Revolution: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n革 (Revolution) corresponds to: the inner trigram and outer trigram of 革, whose virtue revolution manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 革 (Revolution) advises reading the moment through the lens of revolution. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-50",
    "title": "Hexagram 50 · 鼎 (Dǐng) — The Cauldron",
    "lessons": [
      {
        "id": "hex-50-1",
        "title": "Hexagram 50 · 鼎 (Dǐng) — The Cauldron (火风鼎)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 50, 鼎 (Dǐng), is the 50th of the sixty-four symbols. It is formed by the fire over wind — 火风鼎 — and embodies the principle of the cauldron. Students of the I Ching return to 鼎 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 鼎：元吉，亨。\n> *Ding: Great fortune; Penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 鼎卦：Ding: Great fortune; Penetration。\n   > *The Tuan Commentary on 鼎: Ding: Great fortune; Penetration.*\n\n2. **The Xiang Commentary (象传)**\n   > 木上有火\n   > *The Image of 鼎: 火风鼎 (fire over wind). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 鼎. *In the context of The Cauldron: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 鼎. *In the context of The Cauldron: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 鼎. *In the context of The Cauldron: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 鼎. *In the context of The Cauldron: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 鼎. *In the context of The Cauldron: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 鼎. *In the context of The Cauldron: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n鼎 (The Cauldron) corresponds to: the inner trigram and outer trigram of 鼎, whose virtue the cauldron manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 鼎 (The Cauldron) advises reading the moment through the lens of the cauldron. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-51",
    "title": "Hexagram 51 · 震 (Zhèn) — Thunder",
    "lessons": [
      {
        "id": "hex-51-1",
        "title": "Hexagram 51 · 震 (Zhèn) — Thunder (震为雷)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 51, 震 (Zhèn), is the 51st of the sixty-four symbols. It is formed by the thunder over thunder — 震为雷 — and embodies the principle of thunder. Students of the I Ching return to 震 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 震：亨。震来虩虩，笑言哑哑。\n> *Zhen: Penetration. Thunder comes — fearful, then laughter and talk。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 震卦：Zhen: Penetration. Thunder comes — fearful, then laughter and talk。\n   > *The Tuan Commentary on 震: Zhen: Penetration. Thunder comes — fearful, then laughter and talk.*\n\n2. **The Xiang Commentary (象传)**\n   > 洊雷震\n   > *The Image of 震: 震为雷 (thunder over thunder). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 震. *In the context of Thunder: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 震. *In the context of Thunder: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 震. *In the context of Thunder: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 震. *In the context of Thunder: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 震. *In the context of Thunder: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 震. *In the context of Thunder: the summit of the hexagram — extreme position warns of reversal.*\n- **用九 (Using Nine)**: The hidden instruction of the pure 震 hexagram — transcending the fixed polarity to grasp the living spirit of thunder.\n\n**Symbolic Correspondences (象征对应)**\n震 (Thunder) corresponds to: thunder (雷), movement (动), foot (足), east (东), spring (春).\n\n**Practice (实践)**\nIn divination, 震 (Thunder) advises reading the moment through the lens of thunder. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-52",
    "title": "Hexagram 52 · 艮 (Gèn) — Resting",
    "lessons": [
      {
        "id": "hex-52-1",
        "title": "Hexagram 52 · 艮 (Gèn) — Resting (艮为山)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 52, 艮 (Gèn), is the 52nd of the sixty-four symbols. It is formed by the mountain over mountain — 艮为山 — and embodies the principle of resting. Students of the I Ching return to 艮 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 艮：艮其背，不获其身。行其庭，不见其人。无咎。\n> *Gen: Resting on his back, he does not obtain his body. Walking in his court, he does not see his people. No blame。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 艮卦：Gen: Resting on his back, he does not obtain his body. Walking in his court, he does not see his people. No blame。\n   > *The Tuan Commentary on 艮: Gen: Resting on his back, he does not obtain his body. Walking in his court, he does not see his people. No blame.*\n\n2. **The Xiang Commentary (象传)**\n   > 兼山艮\n   > *The Image of 艮: 艮为山 (mountain over mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 艮. *In the context of Resting: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 艮. *In the context of Resting: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 艮. *In the context of Resting: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 艮. *In the context of Resting: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 艮. *In the context of Resting: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 艮. *In the context of Resting: the summit of the hexagram — extreme position warns of reversal.*\n- **用六 (Using Six)**: The hidden instruction of the pure 艮 hexagram — transcending the fixed polarity to grasp the living spirit of resting.\n\n**Symbolic Correspondences (象征对应)**\n艮 (Resting) corresponds to: mountain (山), stillness (止), hand (手), northeast (东北).\n\n**Practice (实践)**\nIn divination, 艮 (Resting) advises reading the moment through the lens of resting. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-53",
    "title": "Hexagram 53 · 渐 (Jiàn) — Gradual Progress",
    "lessons": [
      {
        "id": "hex-53-1",
        "title": "Hexagram 53 · 渐 (Jiàn) — Gradual Progress (风山渐)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 53, 渐 (Jiàn), is the 53rd of the sixty-four symbols. It is formed by the wind over mountain — 风山渐 — and embodies the principle of gradual progress. Students of the I Ching return to 渐 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 渐：女归吉，利贞。\n> *Jian: A girl's marriage is auspicious; advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 渐卦：Jian: A girl's marriage is auspicious; advantage in Uprightness。\n   > *The Tuan Commentary on 渐: Jian: A girl's marriage is auspicious; advantage in Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有木\n   > *The Image of 渐: 风山渐 (wind over mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 渐. *In the context of Gradual Progress: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 渐. *In the context of Gradual Progress: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 渐. *In the context of Gradual Progress: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 渐. *In the context of Gradual Progress: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 渐. *In the context of Gradual Progress: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 渐. *In the context of Gradual Progress: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n渐 (Gradual Progress) corresponds to: the inner trigram and outer trigram of 渐, whose virtue gradual progress manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 渐 (Gradual Progress) advises reading the moment through the lens of gradual progress. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-54",
    "title": "Hexagram 54 · 归妹 (Guī Mèi) — The Maiden",
    "lessons": [
      {
        "id": "hex-54-1",
        "title": "Hexagram 54 · 归妹 (Guī Mèi) — The Maiden (雷泽归妹)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 54, 归妹 (Guī Mèi), is the 54th of the sixty-four symbols. It is formed by the thunder over lake — 雷泽归妹 — and embodies the principle of the maiden. Students of the I Ching return to 归妹 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 归妹：征凶，无攸利。\n> *Gui Mei: Going is fierce; nothing is advantageous。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 归妹卦：Gui Mei: Going is fierce; nothing is advantageous。\n   > *The Tuan Commentary on 归妹: Gui Mei: Going is fierce; nothing is advantageous.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷动泽随\n   > *The Image of 归妹: 雷泽归妹 (thunder over lake). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 归妹. *In the context of The Maiden: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 归妹. *In the context of The Maiden: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 归妹. *In the context of The Maiden: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 归妹. *In the context of The Maiden: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 归妹. *In the context of The Maiden: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 归妹. *In the context of The Maiden: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n归妹 (The Maiden) corresponds to: the inner trigram and outer trigram of 归妹, whose virtue the maiden manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 归妹 (The Maiden) advises reading the moment through the lens of the maiden. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-55",
    "title": "Hexagram 55 · 丰 (Fēng) — Abundance",
    "lessons": [
      {
        "id": "hex-55-1",
        "title": "Hexagram 55 · 丰 (Fēng) — Abundance (雷火丰)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 55, 丰 (Fēng), is the 55th of the sixty-four symbols. It is formed by the thunder over fire — 雷火丰 — and embodies the principle of abundance. Students of the I Ching return to 丰 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 丰：亨，王假之。勿忧，宜日中。\n> *Feng: Penetration. The king approaches. Do not worry; be like the sun at midday。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 丰卦：Feng: Penetration. The king approaches. Do not worry; be like the sun at midday。\n   > *The Tuan Commentary on 丰: Feng: Penetration. The king approaches. Do not worry; be like the sun at midday.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷电皆至\n   > *The Image of 丰: 雷火丰 (thunder over fire). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 丰. *In the context of Abundance: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 丰. *In the context of Abundance: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 丰. *In the context of Abundance: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 丰. *In the context of Abundance: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 丰. *In the context of Abundance: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 丰. *In the context of Abundance: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n丰 (Abundance) corresponds to: the inner trigram and outer trigram of 丰, whose virtue abundance manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 丰 (Abundance) advises reading the moment through the lens of abundance. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-56",
    "title": "Hexagram 56 · 旅 (Lǚ) — The Wanderer",
    "lessons": [
      {
        "id": "hex-56-1",
        "title": "Hexagram 56 · 旅 (Lǚ) — The Wanderer (火山旅)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 56, 旅 (Lǚ), is the 56th of the sixty-four symbols. It is formed by the fire over mountain — 火山旅 — and embodies the principle of the wanderer. Students of the I Ching return to 旅 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 旅：小亨，旅贞吉。\n> *Lü: Small penetration; the wanderer, if upright, is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 旅卦：Lü: Small penetration; the wanderer, if upright, is auspicious。\n   > *The Tuan Commentary on 旅: Lü: Small penetration; the wanderer, if upright, is auspicious.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有火\n   > *The Image of 旅: 火山旅 (fire over mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 旅. *In the context of The Wanderer: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 旅. *In the context of The Wanderer: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 旅. *In the context of The Wanderer: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 旅. *In the context of The Wanderer: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 旅. *In the context of The Wanderer: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 旅. *In the context of The Wanderer: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n旅 (The Wanderer) corresponds to: the inner trigram and outer trigram of 旅, whose virtue the wanderer manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 旅 (The Wanderer) advises reading the moment through the lens of the wanderer. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-57",
    "title": "Hexagram 57 · 巽 (Xùn) — The Gentle",
    "lessons": [
      {
        "id": "hex-57-1",
        "title": "Hexagram 57 · 巽 (Xùn) — The Gentle (巽为风)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 57, 巽 (Xùn), is the 57th of the sixty-four symbols. It is formed by the wind over wind — 巽为风 — and embodies the principle of the gentle. Students of the I Ching return to 巽 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 巽：小亨，利有攸往，利见大人。\n> *Xun: Small penetration; advantage in having somewhere to go; advantage to see the great person。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 巽卦：Xun: Small penetration; advantage in having somewhere to go; advantage to see the great person。\n   > *The Tuan Commentary on 巽: Xun: Small penetration; advantage in having somewhere to go; advantage to see the great person.*\n\n2. **The Xiang Commentary (象传)**\n   > 随风巽\n   > *The Image of 巽: 巽为风 (wind over wind). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 巽. *In the context of The Gentle: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 巽. *In the context of The Gentle: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 巽. *In the context of The Gentle: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 巽. *In the context of The Gentle: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 巽. *In the context of The Gentle: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 巽. *In the context of The Gentle: the summit of the hexagram — extreme position warns of reversal.*\n- **用九 (Using Nine)**: The hidden instruction of the pure 巽 hexagram — transcending the fixed polarity to grasp the living spirit of the gentle.\n\n**Symbolic Correspondences (象征对应)**\n巽 (The Gentle) corresponds to: wind (风), wood (木), penetration (入), elbow (肱), southeast (东南).\n\n**Practice (实践)**\nIn divination, 巽 (The Gentle) advises reading the moment through the lens of the gentle. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-58",
    "title": "Hexagram 58 · 兑 (Duì) — Joy",
    "lessons": [
      {
        "id": "hex-58-1",
        "title": "Hexagram 58 · 兑 (Duì) — Joy (兑为泽)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 58, 兑 (Duì), is the 58th of the sixty-four symbols. It is formed by the lake over lake — 兑为泽 — and embodies the principle of joy. Students of the I Ching return to 兑 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 兑：亨，利贞。\n> *Dui: Penetration; advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 兑卦：Dui: Penetration; advantage in Uprightness。\n   > *The Tuan Commentary on 兑: Dui: Penetration; advantage in Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 丽泽兑\n   > *The Image of 兑: 兑为泽 (lake over lake). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 兑. *In the context of Joy: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 兑. *In the context of Joy: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 兑. *In the context of Joy: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 兑. *In the context of Joy: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 兑. *In the context of Joy: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 兑. *In the context of Joy: the summit of the hexagram — extreme position warns of reversal.*\n- **用六 (Using Six)**: The hidden instruction of the pure 兑 hexagram — transcending the fixed polarity to grasp the living spirit of joy.\n\n**Symbolic Correspondences (象征对应)**\n兑 (Joy) corresponds to: lake (泽), marsh (沼), mouth (口), west (西).\n\n**Practice (实践)**\nIn divination, 兑 (Joy) advises reading the moment through the lens of joy. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-59",
    "title": "Hexagram 59 · 涣 (Huàn) — Dispersion",
    "lessons": [
      {
        "id": "hex-59-1",
        "title": "Hexagram 59 · 涣 (Huàn) — Dispersion (风水涣)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 59, 涣 (Huàn), is the 59th of the sixty-four symbols. It is formed by the wind over water — 风水涣 — and embodies the principle of dispersion. Students of the I Ching return to 涣 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 涣：亨。王假有庙，利涉大川。\n> *Huan: Penetration. The king approaches the temple; advantage in crossing the great river。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 涣卦：Huan: Penetration. The king approaches the temple; advantage in crossing the great river。\n   > *The Tuan Commentary on 涣: Huan: Penetration. The king approaches the temple; advantage in crossing the great river.*\n\n2. **The Xiang Commentary (象传)**\n   > 风行水上\n   > *The Image of 涣: 风水涣 (wind over water). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 涣. *In the context of Dispersion: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 涣. *In the context of Dispersion: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 涣. *In the context of Dispersion: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 涣. *In the context of Dispersion: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 涣. *In the context of Dispersion: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 涣. *In the context of Dispersion: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n涣 (Dispersion) corresponds to: the inner trigram and outer trigram of 涣, whose virtue dispersion manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 涣 (Dispersion) advises reading the moment through the lens of dispersion. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-60",
    "title": "Hexagram 60 · 节 (Jié) — Moderation",
    "lessons": [
      {
        "id": "hex-60-1",
        "title": "Hexagram 60 · 节 (Jié) — Moderation (水泽节)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 60, 节 (Jié), is the 60th of the sixty-four symbols. It is formed by the water over lake — 水泽节 — and embodies the principle of moderation. Students of the I Ching return to 节 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 节：亨。苦节不可贞。\n> *Jie: Penetration. Bitter moderation cannot be Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 节卦：Jie: Penetration. Bitter moderation cannot be Uprightness。\n   > *The Tuan Commentary on 节: Jie: Penetration. Bitter moderation cannot be Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽上有水\n   > *The Image of 节: 水泽节 (water over lake). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 节. *In the context of Moderation: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 节. *In the context of Moderation: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 节. *In the context of Moderation: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 节. *In the context of Moderation: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 节. *In the context of Moderation: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 节. *In the context of Moderation: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n节 (Moderation) corresponds to: the inner trigram and outer trigram of 节, whose virtue moderation manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 节 (Moderation) advises reading the moment through the lens of moderation. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-61",
    "title": "Hexagram 61 · 中孚 (Zhōng Fú) — Inner Truth",
    "lessons": [
      {
        "id": "hex-61-1",
        "title": "Hexagram 61 · 中孚 (Zhōng Fú) — Inner Truth (风泽中孚)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 61, 中孚 (Zhōng Fú), is the 61st of the sixty-four symbols. It is formed by the wind over lake — 风泽中孚 — and embodies the principle of inner truth. Students of the I Ching return to 中孚 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 中孚：豚鱼吉，利涉大川，利贞。\n> *Zhong Fu: Pigs and fish are auspicious; advantage in crossing the great river; advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 中孚卦：Zhong Fu: Pigs and fish are auspicious; advantage in crossing the great river; advantage in Uprightness。\n   > *The Tuan Commentary on 中孚: Zhong Fu: Pigs and fish are auspicious; advantage in crossing the great river; advantage in Uprightness.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽上有风\n   > *The Image of 中孚: 风泽中孚 (wind over lake). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 中孚. *In the context of Inner Truth: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 中孚. *In the context of Inner Truth: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 中孚. *In the context of Inner Truth: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 中孚. *In the context of Inner Truth: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 中孚. *In the context of Inner Truth: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 中孚. *In the context of Inner Truth: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n中孚 (Inner Truth) corresponds to: the inner trigram and outer trigram of 中孚, whose virtue inner truth manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 中孚 (Inner Truth) advises reading the moment through the lens of inner truth. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-62",
    "title": "Hexagram 62 · 小过 (Xiǎo Guò) — Small Excess",
    "lessons": [
      {
        "id": "hex-62-1",
        "title": "Hexagram 62 · 小过 (Xiǎo Guò) — Small Excess (雷山小过)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 62, 小过 (Xiǎo Guò), is the 62nd of the sixty-four symbols. It is formed by the thunder over mountain — 雷山小过 — and embodies the principle of small excess. Students of the I Ching return to 小过 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 小过：亨，利贞。可小事，不可大事。\n> *Xiao Guo: Penetration; advantage in Uprightness. Can do small things, cannot do great things。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 小过卦：Xiao Guo: Penetration; advantage in Uprightness. Can do small things, cannot do great things。\n   > *The Tuan Commentary on 小过: Xiao Guo: Penetration; advantage in Uprightness. Can do small things, cannot do great things.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有雷\n   > *The Image of 小过: 雷山小过 (thunder over mountain). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 小过. *In the context of Small Excess: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 小过. *In the context of Small Excess: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 小过. *In the context of Small Excess: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 小过. *In the context of Small Excess: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 小过. *In the context of Small Excess: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 小过. *In the context of Small Excess: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n小过 (Small Excess) corresponds to: the inner trigram and outer trigram of 小过, whose virtue small excess manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 小过 (Small Excess) advises reading the moment through the lens of small excess. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-63",
    "title": "Hexagram 63 · 既济 (Jì Jì) — Already Finished",
    "lessons": [
      {
        "id": "hex-63-1",
        "title": "Hexagram 63 · 既济 (Jì Jì) — Already Finished (水火既济)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 63, 既济 (Jì Jì), is the 63rd of the sixty-four symbols. It is formed by the water over fire — 水火既济 — and embodies the principle of already finished. Students of the I Ching return to 既济 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 既济：亨，小利贞。初吉终乱。\n> *Ji Ji: Penetration; small advantage in Uprightness. At first auspicious, finally confused。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 既济卦：Ji Ji: Penetration; small advantage in Uprightness. At first auspicious, finally confused。\n   > *The Tuan Commentary on 既济: Ji Ji: Penetration; small advantage in Uprightness. At first auspicious, finally confused.*\n\n2. **The Xiang Commentary (象传)**\n   > 水在火上\n   > *The Image of 既济: 水火既济 (water over fire). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 既济. *In the context of Already Finished: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 既济. *In the context of Already Finished: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 既济. *In the context of Already Finished: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 既济. *In the context of Already Finished: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 既济. *In the context of Already Finished: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 既济. *In the context of Already Finished: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n既济 (Already Finished) corresponds to: the inner trigram and outer trigram of 既济, whose virtue already finished manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 既济 (Already Finished) advises reading the moment through the lens of already finished. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  },
  {
    "id": "hex-64",
    "title": "Hexagram 64 · 未济 (Wèi Jì) — Not Yet Finished",
    "lessons": [
      {
        "id": "hex-64-1",
        "title": "Hexagram 64 · 未济 (Wèi Jì) — Not Yet Finished (火水未济)",
        "duration": "90 min",
        "description": "**Overview**\n\nHexagram 64, 未济 (Wèi Jì), is the 64th of the sixty-four symbols. It is formed by the fire over water — 火水未济 — and embodies the principle of not yet finished. Students of the I Ching return to 未济 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 未济：亨。小狐汔济，濡其尾，无攸利。\n> *Wei Ji: Penetration. The small fox nearly crosses, wets its tail — nothing advantageous。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 未济卦：Wei Ji: Penetration. The small fox nearly crosses, wets its tail — nothing advantageous。\n   > *The Tuan Commentary on 未济: Wei Ji: Penetration. The small fox nearly crosses, wets its tail — nothing advantageous.*\n\n2. **The Xiang Commentary (象传)**\n   > 火在水上\n   > *The Image of 未济: 火水未济 (fire over water). The exemplary person reflects upon this pattern.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: The yang line at initial position of 未济. *In the context of Not Yet Finished: the first stirring — small, hidden beginnings require caution and patience.*\n- **二六 (Second Six)**: The yin line at second position of 未济. *In the context of Not Yet Finished: emergence and visibility — the line begins to act in the world.*\n- **三九 (Third Nine)**: The yang line at third position of 未济. *In the context of Not Yet Finished: the lower trigram's summit — poised between advancement and reflection.*\n- **四六 (Fourth Six)**: The yin line at fourth position of 未济. *In the context of Not Yet Finished: the threshold — a crucial moment of transition from lower to upper trigram.*\n- **五九 (Fifth Nine)**: The yang line at fifth position of 未济. *In the context of Not Yet Finished: approaching the heights — influence grows, but humility is required.*\n- **上六 (Top Six)**: The yin line at top position of 未济. *In the context of Not Yet Finished: the summit of the hexagram — extreme position warns of reversal.*\n\n**Symbolic Correspondences (象征对应)**\n未济 (Not Yet Finished) corresponds to: the inner trigram and outer trigram of 未济, whose virtue not yet finished manifests through the interplay of yin and yang.\n\n**Practice (实践)**\nIn divination, 未济 (Not Yet Finished) advises reading the moment through the lens of not yet finished. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question."
      }
    ]
  }
],
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
