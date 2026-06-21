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
    price: '免费',
    currency: '',
    nextCohort: 'July 14, 2026',
    includes: [
      'Introduction to yin and yang',
      'The eight trigrams (Bagua)',
      'History and structure of the I Ching',
      'Basic coin-casting method',
      'How to formulate a question',
      'Beginner practice readings',
    ],
    chapters: [
  {
    "id": "lesson-01",
    "title": "Lesson 1 · 观天象与易之道 (Observing Celestial Phenomena and the Way of the I Ching)",
    "lessons": [
      {
        "id": "lesson-01-1",
        "title": "Lesson 1 · 观天象与易之道",
        "duration": "60 min",
        "description": "**引言 (Introduction)**\n\n自古以来，历代领导者皆注重观察天象，推量日月星辰的运行。到了五帝、三代发扬光大，但皆以中国为内，夷狄为外。在上观察天上的星象，在下取法地上的物类。\n\nSince ancient times, leaders of all generations have emphasized observing celestial phenomena and deducing the movements of the sun, moon, and stars. During the Five Emperors and Three Dynasties, this knowledge flourished. The Chinese regarded themselves as the center and treated foreign peoples as peripheral. Above, they observed the starry heavens; below, they modeled the patterns of earthly things.\n\n---\n\n**天地之道 (The Way of Heaven and Earth)**\n\n天有日月，地有阴阳，天有五星（木、火、土、金、水），地有五行，天有列宿，地有疆界。古之圣人能综合天地的事物，以象来分析推理。\n\nHeaven has the sun and moon; earth has yin and yang. Heaven has the five planets (Jupiter, Mars, Saturn, Venus, Mercury); earth has the five elements (wood, fire, earth, metal, water). Heaven has its constellations; earth has its boundaries. The ancient sages could synthesize the affairs of heaven and earth, analyzing and reasoning through symbolic imagery.\n\n---\n\n**古代天官与现代气象 (Ancient Astronomers vs. Modern Meteorology)**\n\n古代传授天数的有多位圣贤，名之曰天官。天官即今日之气象台，但形同神不同。今之气象台所报只是天象的变化，气候的分析，且多于事后发现不正确，于事前即有所知，但却无法预防及长远之推测。故时至今日，人类乃会困于天灾，而无法事先避免或预防，但能做的只是事后的弥补。\n\nIn ancient times, several sages transmitted the science of heaven, known as the \"Heavenly Officials\" (天官). These were like today's meteorological stations, but similar in form yet different in spirit. Modern weather stations only report changes in celestial phenomena and analyze climate, and their forecasts are often inaccurate after the event. They may know beforehand, but cannot prevent or make long-term predictions. Thus, humanity is still beset by natural disasters, unable to avoid them in advance, able only to remedy them afterward.\n\n---\n\n**星象学与人心 (Astrology and the Human Heart)**\n\n目前最先进的星象学，但知天上布列的星宿与地球间有引力，互相影响，却不知此影响力能达于人心，能深入人间的每一个环节。人类茫茫然的但知度日，终日于权力、财富间徘徊，而不知只是浩大宇宙中的一粒小砂。执迷不悟，有小利得则沾沾自喜，稍一富有却又罔顾法纪。时人崇尚富有，人心腐败，是非不分。\n\nThe most advanced astrology today knows only that the stars and constellations exert gravitational influence on Earth, but not that this influence reaches human hearts and penetrates every aspect of human life. Humanity blindly passes its days, lingering between power and wealth, not knowing it is but a speck of sand in the vast universe. Obsessed and unawakened, people rejoice at small gains, and when slightly prosperous, disregard laws and discipline. Society worships wealth; hearts become corrupt, and right and wrong are no longer distinguished.\n\n---\n\n**易之智慧 (The Wisdom of the I Ching)**\n\n吾人今日为此特别提出古圣先贤之大智慧。《易》所谓：「君子事天，小人事人」，向天下所有之小人示戒。今乃危亡之始，劝大众从善如流，善恶之分，君子道复，治世乃临也。\n\nToday, we particularly present the great wisdom of the ancient sages. The I Ching says: \"The superior man serves heaven; the small man serves other men.\" This is a warning to all the small men of the world. Now is the beginning of peril and decline. We urge everyone to follow goodness as naturally as water flows. When good and evil are distinguished, the way of the superior man returns, and a world of order arrives.\n\n---\n\n**天运循环 (The Cycles of Heavenly Destiny)**\n\n天运古有记载：三十年一小变，一百年一中变，五百年为一大变，三大变为一纪，经三纪而成一完整之循环，共为四千五百年。治国者，一定要看三十年的小变，并视察前之一千年，然后整个天地与人的关系，才能随着天运而趋于完备。顺天而治者昌，逆天而治者亡。\n\nAncient records describe the cycles of heavenly destiny: thirty years bring a small change; a hundred years, a medium change; five hundred years, a great change. Three great changes form one era (纪); three eras complete a full cycle of four thousand five hundred years. Those who govern must observe the thirty-year small changes and examine the preceding millennium. Only then can the relationship between heaven, earth, and humanity become complete in accordance with heavenly destiny. Those who govern in harmony with heaven prosper; those who defy heaven perish.\n\n---\n\n**五星与二十八宿 (The Five Planets and Twenty-Eight Constellations)**\n\n天上布列的星辰，古来共分五大部，亦称为「五宫」。其列宿于天，共有二十八宿，分列东南西北。今之论述，除了讨论各宿所主管之事，并论及日月五星（木、火、土、金、水）所谓「七政」与二十八宿布列的关系，从而推之对地球、人类产生之影响。不但可以从天垂象得知世间变化，且因知事之初，故可预防其灾厄之产生。\n\nThe stars in heaven have been traditionally divided into five major sections, called the \"Five Palaces\" (五宫). The constellations number twenty-eight, distributed across the four directions: east, south, west, and north. This discourse discusses not only the matters governed by each constellation but also the relationships between the sun, moon, and five planets (the \"Seven Governments\" 七政) and the twenty-eight constellations, thereby inferring their influence on Earth and humanity. Not only can worldly changes be known from the celestial signs, but because we know the beginning of events, we can prevent the emergence of calamities.\n\n---\n\n**古圣智慧 (The Wisdom of the Ancient Sages)**\n\n它与现今之专家学者们研究的角度不同。今人往往在事后的探讨，但伤害已成，即令花再多的钱，亦无法弥补。故此本人摘录古籍上的天象，来对应今世之局势。致令全天下炎黄子孙，以身为中华民族一员而为荣，在茶余饭后亦能深切体会古圣先哲的智慧。\n\nThis approach differs from modern scholars' research methods. People today often investigate after the event, but when harm has already been done, no amount of money can repair it. Therefore, I have excerpted the celestial phenomena from ancient texts to correspond with the situations of today's world. May all descendants of the Yellow Emperor and Yan Emperor feel proud to be part of the Chinese nation, and in the leisure after meals and tea, deeply appreciate the wisdom of the ancient sages and philosophers."
      }
    ]
  }
],
  },
  'intermediate-course': {
    slug: 'intermediate-course',
    title: 'Intermediate I Ching',
    subtitle: 'Deep dive into the 64 hexagrams — study each symbol in detail with classical commentaries.',
    heroImage: 'from-paper to-paper-soft',
    level: 'Intermediate',
    levelZh: '中 級',
    price: '免费',
    currency: '',
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
        "description": "**Overview**\n\nHexagram 1, 乾 (Qián), is the 1st of the sixty-four symbols. It is formed by the heaven over heaven — 乾为天 — and embodies the principle of the creative. Students of the I Ching return to 乾 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 乾：元，亨，利，贞。\n> *Qian: Origination, Penetration, Advantage, Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 乾卦：大哉乾元，万物资始，乃统天。云行雨施，品物流形。大明终始，六位时成。时乘六龙以御天。乾道变化，各正性命。保合太和，乃利贞。首出庶物，万国咸宁。\n   > *The Tuan Commentary on 乾: Great is the Qian yuan, the source of all things, governing heaven itself. Clouds move and rain descends, giving form to every being. The great light illuminates beginning and end; the six positions take shape in time. Riding the six dragons at the right moment, one guides heaven. The way of Qian transforms and evolves, each thing attaining its proper nature and destiny. Preserving the great harmony, one finds advantage and uprightness. It brings forth all things and the whole world finds peace.*\n\n2. **The Xiang Commentary (象传)**\n   > 天行健\n   > *The Image of 乾: 乾为天 (heaven over heaven). The exemplary person vigorously strives and never ceases.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 潜龙勿用。\n   > *The hidden dragon: do not act.*\n- **二九 (Second Nine)**: 见龙在田，利见大人。\n   > *The dragon appears in the field: it is advantageous to see the great man.*\n- **三九 (Third Nine)**: 君子终日乾乾，夕惕若厉，无咎。\n   > *The superior man is active and cautious all the day; at night he is still vigilant as though in danger — no mistake.*\n- **四九 (Fourth Nine)**: 或跃在渊，无咎。\n   > *He may leap into the abyss — no mistake.*\n- **五九 (Fifth Nine)**: 飞龙在天，利见大人。\n   > *The dragon flies in the sky: it is advantageous to see the great man.*\n- **上九 (Top Nine)**: 亢龙有悔。\n   > *The dragon reaches the limit: there will be regret.*\n- **用九 (Using Nine)**: 用九：见群龙无首，吉。\n   > *Using the nine: a host of dragons appears without claiming leadership — good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n乾 (The Creative) corresponds to: heaven (天), metal (金), father (父), horse (马), northwest (西北), autumn (秋), white (白), creation (健).\n\n**Practice (实践)**\nIn divination, 乾 (The Creative) advises: Embody creative initiative and strength; lead with virtue and vision. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 2, 坤 (Kūn), is the 2nd of the sixty-four symbols. It is formed by the earth over earth — 坤为地 — and embodies the principle of the earth. Students of the I Ching return to 坤 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 坤：元，亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞，吉。\n> *Kun: Origination, Penetration, and the Advantage of a mare's Uprightness. The superior man has somewhere to go: first he loses his way, then he finds his master. Advantage in the southwest to gain companions, in the northeast to lose them. Peaceful Uprightness brings fortune。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 坤卦：至哉坤元，万物资生，乃顺承天。坤厚载物，德合无疆。含弘光大，品物咸亨。牝马地类，行地无疆。柔顺利贞，君子攸行。先迷失道，后顺得常。西南得朋，乃与类行。东北丧朋，乃终有庆。安贞之吉，应地无疆。\n   > *The Tuan Commentary on 坤: Ultimate is the Kun yuan, the source of all beings born, receiving heaven in obedience. Kun is vast and carries all things, its virtue boundless as the earth. It embraces, expands, shines and illumines; all beings find penetration. The mare belongs to the nature of earth, journeying without bound across the land. Soft, yielding and upright — this is the exemplary person's way. First one loses the path, then follows and finds constancy. Gaining companions in the southwest, one walks with one's kind; losing them in the northeast, one finds joy in the end. The fortune of peaceful uprightness responds to the boundless earth.*\n\n2. **The Xiang Commentary (象传)**\n   > 地势坤\n   > *The Image of 坤: 坤为地 (earth over earth). The exemplary person holds the earth's virtue and supports all.*\n\n**The Lines (爻辞)**\n\n- **初六 (Initial Six)**: 履霜，坚冰至。\n   > *Treading on frost: solid ice will arrive.*\n- **二六 (Second Six)**: 直方大，不习无不利。\n   > *Square, straight, great — by nature, not by discipline, there is nothing not advantageous.*\n- **三六 (Third Six)**: 含章可贞。或从王事，无成有终。\n   > *Embracing ornament, one may be firm and correct. Or one may follow the king's affairs: without completing them, yet with a good end.*\n- **四六 (Fourth Six)**: 括囊，无咎无誉。\n   > *Closing the sack — no blame, no praise.*\n- **五六 (Fifth Six)**: 黄裳元吉。\n   > *A yellow skirt — original good fortune.*\n- **上六 (Top Six)**: 龙战于野，其血玄黄。\n   > *Dragons fight in the wild, their blood is dark and yellow.*\n- **用六 (Using Six)**: 用六：利永贞。\n   > *Using the six: advantageous to be perpetually firm and correct.*\n\n**Symbolic Correspondences (象征对应)**\n坤 (The Earth) corresponds to: earth (地), soil (土), mother (母), mare (牝马), southwest (西南), late summer (季夏), yellow (黄), reception (顺).\n\n**Practice (实践)**\nIn divination, 坤 (The Earth) advises: Embody receptive support and patience; nurture rather than command. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 3, 屯 (Zhūn), is the 3rd of the sixty-four symbols. It is formed by the water over thunder — 水雷屯 — and embodies the principle of initial difficulty. Students of the I Ching return to 屯 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 屯：元亨利贞，勿用有攸往，利建侯。\n> *Zhun: Origination, Penetration, Advantage, Uprightness. Do not act; it is advantageous to establish helpers。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 屯卦：云雷，屯；君子以经纶。\n   > *The Tuan Commentary on 屯: Cloud and thunder form Tun; the exemplary person weaves the pattern of governance.*\n\n2. **The Xiang Commentary (象传)**\n   > 云雷屯\n   > *The Image of 屯: 水雷屯 (water over thunder). The exemplary person weaves the pattern of governance through difficulty.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 磐桓，利居贞，利建侯。\n   > *Hesitation and delay — advantageous to be firm and correct, advantageous to set up princes.*\n- **二六 (Second Six)**: 屯如邅如，乘马班如，匪寇婚媾。女子贞不字，十年乃字。\n   > *Difficulties and hindrances — the horses are arrayed but not advancing. Not robbers, but suitors. The maid is firm and correct, and does not rush into marriage — after ten years she weds.*\n- **三九 (Third Nine)**: 即鹿无虞，惟入于林中。君子几不如舍，往吝。\n   > *Going after deer without a forester — one only enters the forest. The superior man, perceiving the opportunity, would rather let it go; to go on would be regret.*\n- **四六 (Fourth Six)**: 乘马班如，求婚媾，往吉，无不利。\n   > *Horses arrayed — seeking a marriage alliance: going yields good fortune, nothing disadvantageous.*\n- **五九 (Fifth Nine)**: 屯其膏，小贞吉，大贞凶。\n   > *Difficulties anointing — small correctness yields good fortune, great correctness yields misfortune.*\n- **上六 (Top Six)**: 乘马班如，泣血涟如。\n   > *Horses arrayed — weeping tears of blood flow down.*\n\n**Symbolic Correspondences (象征对应)**\n屯 (Initial Difficulty) corresponds to: cloud (云), thunder (雷), water (水), sprout (芽), movement (动) — beginning of growth amidst difficulty.\n\n**Practice (实践)**\nIn divination, 屯 (Initial Difficulty) advises: In new beginnings, weave order through persistent effort. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 4, 蒙 (Méng), is the 4th of the sixty-four symbols. It is formed by the spring below mountain — 山水蒙 — and embodies the principle of youthful folly. Students of the I Ching return to 蒙 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 蒙：亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。\n> *Meng: Penetration. Not I seek the youthful, the youthful seeks me. The first oracle instructs; repeated questioning profanes。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 蒙卦：山下出泉，蒙；君子以果行育德。\n   > *The Tuan Commentary on 蒙: A spring emerges beneath the mountain — Meng; the exemplary person acts resolutely and cultivates virtue.*\n\n2. **The Xiang Commentary (象传)**\n   > 山水蒙\n   > *The Image of 蒙: 山水蒙 (spring below mountain). The exemplary person acts resolutely and cultivates virtue.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 蒙：发蒙，利用刑人，用说桎梏，以往吝。\n   > *Ignorance: at the first awakening, it is advantageous to use punishment, yet even with shackles removed, going forward brings regret.*\n- **二六 (Second Six)**: 包蒙吉。纳妇吉，子克家。\n   > *Enveloped in ignorance — good fortune. Taking a wife — good fortune; a son manages the household.*\n- **三九 (Third Nine)**: 勿用取女，见金夫，不有躬，无攸利。\n   > *Do not take such a woman: she sees a man of gold and loses herself — nothing advantageous.*\n- **四六 (Fourth Six)**: 困蒙，吝。\n   > *Confined in ignorance — regret.*\n- **五九 (Fifth Nine)**: 童蒙，吉。\n   > *Childlike ignorance — good fortune.*\n- **上六 (Top Six)**: 击蒙，不利为寇，利御寇。\n   > *Striking ignorance — disadvantageous to act as an aggressor, advantageous to repel aggression.*\n\n**Symbolic Correspondences (象征对应)**\n蒙 (Youthful Folly) corresponds to: spring water (泉水), mountain (山), child (童), student (学生) — youthful seeking and first instruction.\n\n**Practice (实践)**\nIn divination, 蒙 (Youthful Folly) advises: Approach learning with sincere humility and resolution. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 5, 需 (Xū), is the 5th of the sixty-four symbols. It is formed by the water over heaven — 水天需 — and embodies the principle of waiting. Students of the I Ching return to 需 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 需：有孚，光亨，贞吉。\n> *Xu: With sincerity, radiant penetration; uprightness is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 需卦：云上于天，需；君子以饮食宴乐。\n   > *The Tuan Commentary on 需: Clouds above heaven — Xu; the exemplary person feasts, drinks and enjoys leisure while waiting.*\n\n2. **The Xiang Commentary (象传)**\n   > 水天需\n   > *The Image of 需: 水天需 (water over heaven). The exemplary person waits with dignity, feasting and enjoying leisure.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 需于郊，利用恒，无咎。\n   > *Waiting in the suburbs — advantageous to be constant, no blame.*\n- **二六 (Second Six)**: 需于沙，小有言，终吉。\n   > *Waiting in the sand — there may be some small words, but in the end good fortune.*\n- **三九 (Third Nine)**: 需于泥，致寇至。\n   > *Waiting in the mud — this invites the arrival of robbers.*\n- **四六 (Fourth Six)**: 需于血，出自穴。\n   > *Waiting in the blood — one comes forth from the pit.*\n- **五九 (Fifth Nine)**: 需于酒食，贞吉。\n   > *Waiting over wine and food — firm correctness yields good fortune.*\n- **上六 (Top Six)**: 入于穴，有不速之客三人来，敬之终吉。\n   > *Entering the pit, three uninvited guests arrive; receive them respectfully and in the end good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n需 (Waiting) corresponds to: cloud (云), heaven (天), water (水), dragon (龙) — patient anticipation before action.\n\n**Practice (实践)**\nIn divination, 需 (Waiting) advises: Wait with composure; timing favors the prepared. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 6, 讼 (Sòng), is the 6th of the sixty-four symbols. It is formed by the heaven over water — 天水讼 — and embodies the principle of conflict. Students of the I Ching return to 讼 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 讼：有孚窒惕，中吉，终凶。利见大人，不利涉大川。\n> *Song: With sincerity, one stands in awe. Fortune in the middle, misfortune at the end. Advantage to see the great person。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 讼卦：天与水违行，讼；君子以作事谋始。\n   > *The Tuan Commentary on 讼: Heaven and water move in contrary directions — Song; the exemplary person plans carefully from the outset.*\n\n2. **The Xiang Commentary (象传)**\n   > 天水讼\n   > *The Image of 讼: 天水讼 (heaven over water). The exemplary person plans carefully from the very beginning.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 不永所事，小有言，终吉。\n   > *Not perpetuating one's affairs — some small words, but in the end good fortune.*\n- **二六 (Second Six)**: 不克讼，归而逋，其邑人三百户无眚。\n   > *Not victorious in dispute — returning, one escapes; the people of one's city of three hundred households have no calamity.*\n- **三九 (Third Nine)**: 食旧德，贞厉，终吉。或从王事，无成。\n   > *Living on one's old merits — firm correctness despite difficulty, in the end good fortune. Or one may follow the king's affairs, without completion.*\n- **四六 (Fourth Six)**: 不克讼，复即命渝，安贞吉。\n   > *Not victorious in dispute — one returns and changes, dwelling in correctness — good fortune.*\n- **五九 (Fifth Nine)**: 讼，元吉。\n   > *In dispute — original good fortune.*\n- **上六 (Top Six)**: 或锡之鞶带，终朝三褫之。\n   > *One may be presented with a girdle of distinction — in a single morning it is three times taken away.*\n\n**Symbolic Correspondences (象征对应)**\n讼 (Conflict) corresponds to: heaven (天), water (水), sword (剑), debate (争) — contention between opposed forces.\n\n**Practice (实践)**\nIn divination, 讼 (Conflict) advises: Plan from the start; avoid contention when possible. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 7, 师 (Shī), is the 7th of the sixty-four symbols. It is formed by the earth over water — 地水师 — and embodies the principle of the army. Students of the I Ching return to 师 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 师：贞，丈人吉，无咎。\n> *Shi: Uprightness. A mature person of fortune; no blame。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 师卦：地中有水，师；君子以容民畜众。\n   > *The Tuan Commentary on 师: Water within the earth — Shi; the exemplary person contains the people and nourishes the multitude.*\n\n2. **The Xiang Commentary (象传)**\n   > 地水师\n   > *The Image of 师: 地水师 (earth over water). The exemplary person contains the people and nourishes the multitude.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 师出以律，否臧凶。\n   > *The army goes forth with discipline; ill discipline brings misfortune.*\n- **二六 (Second Six)**: 在师中吉，无咎，王三锡命。\n   > *In the midst of the army — good fortune, no blame; the king three times confers orders.*\n- **三九 (Third Nine)**: 师或舆尸，凶。\n   > *The army may return with corpses — misfortune.*\n- **四六 (Fourth Six)**: 师左次，无咎。\n   > *The army retreats and camps — no blame.*\n- **五九 (Fifth Nine)**: 田有禽，利执言，无咎。\n   > *There are beasts in the field — advantageous to speak out, no blame.*\n- **上六 (Top Six)**: 大君有命，开国承家，小人勿用。\n   > *The great ruler has orders — to establish states and receive homesteads; the small man is not to be used.*\n\n**Symbolic Correspondences (象征对应)**\n师 (The Army) corresponds to: earth (地), water (水), army (师), soldiers (兵), commander (将) — disciplined collective action.\n\n**Practice (实践)**\nIn divination, 师 (The Army) advises: Organize collective effort with disciplined leadership. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 8, 比 (Bǐ), is the 8th of the sixty-four symbols. It is formed by the water over earth — 水地比 — and embodies the principle of closeness. Students of the I Ching return to 比 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 比：吉。原筮，元永贞，无咎。\n> *Bi: Auspicious. Let the oracle decide: eternal uprightness without blame。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 比卦：地上有水，比；先王以建万国，亲诸侯。\n   > *The Tuan Commentary on 比: Water upon the earth — Bi; the former kings established the myriad states and drew the feudal lords into closeness.*\n\n2. **The Xiang Commentary (象传)**\n   > 水地比\n   > *The Image of 比: 水地比 (water over earth). The exemplary person establishes states and draws the lords into closeness.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 有孚比之，无咎。有孚盈缶，终来有他吉。\n   > *With sincerity, one draws others — no blame. When sincerity fills the vessels, in the end there come others with good fortune.*\n- **二六 (Second Six)**: 比之自内，贞吉。\n   > *Drawing them from within — firm correctness yields good fortune.*\n- **三九 (Third Nine)**: 比之匪人。\n   > *Drawing the wrong people.*\n- **四六 (Fourth Six)**: 外比之，贞吉。\n   > *Drawing them from without — firm correctness yields good fortune.*\n- **五九 (Fifth Nine)**: 显比，王用三驱，失前禽，邑人不诫，吉。\n   > *Drawing them openly — the king uses three drives, loses the foremost beast, and the people of the city are not dismayed — good fortune.*\n- **上六 (Top Six)**: 比之无首，凶。\n   > *Drawing without a head — misfortune.*\n\n**Symbolic Correspondences (象征对应)**\n比 (Closeness) corresponds to: water (水), earth (地), friend (友), companion (伴), alliance (盟) — bonding and mutual support.\n\n**Practice (实践)**\nIn divination, 比 (Closeness) advises: Build alliances through sincerity and mutual respect. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 9, 小畜 (Xiǎo Xù), is the 9th of the sixty-four symbols. It is formed by the wind over heaven — 风天小畜 — and embodies the principle of small taming. Students of the I Ching return to 小畜 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 小畜：亨。密云不雨，自我西郊。\n> *Xiao Chu: Penetration. Dense clouds without rain come from our western suburb。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 小畜卦：风行天上，小畜；君子以懿文德。\n   > *The Tuan Commentary on 小畜: Wind moves across heaven — Xiao Chu; the exemplary person refines and beautifies virtue.*\n\n2. **The Xiang Commentary (象传)**\n   > 风天小畜\n   > *The Image of 小畜: 风天小畜 (wind over heaven). The exemplary person refines and beautifies virtue.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 复自道，何其咎，吉。\n   > *Returning by the way — what blame? Good fortune.*\n- **二六 (Second Six)**: 牵复，吉。\n   > *Leading them back — good fortune.*\n- **三九 (Third Nine)**: 舆说辐，夫妻反目。\n   > *The carriage is without spokes; husband and wife look askance at one another.*\n- **四六 (Fourth Six)**: 有孚，血去惕出，无咎。\n   > *With sincerity, the fear passes and one goes forth — no blame.*\n- **五九 (Fifth Nine)**: 有孚挛如，富以其邻。\n   > *With sincerity, they are drawn together — one enriches his neighbor.*\n- **上六 (Top Six)**: 既雨既处，尚德载。妇贞厉。\n   > *When the rain has fallen and stops, it still bears — the woman is firm and correct despite difficulty.*\n\n**Symbolic Correspondences (象征对应)**\n小畜 (Small Taming) corresponds to: wind (风), heaven (天), cloud (云), rain (雨) — small accumulation of influence.\n\n**Practice (实践)**\nIn divination, 小畜 (Small Taming) advises: Accumulate small deeds of influence and refinement. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 10, 履 (Lǚ), is the 10th of the sixty-four symbols. It is formed by the heaven over lake — 天泽履 — and embodies the principle of treading. Students of the I Ching return to 履 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 履：履虎尾，不咥人，亨。\n> *Lü: Treading on a tiger's tail without being bitten — penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 履卦：上天下泽，履；君子以辩上下，定民志。\n   > *The Tuan Commentary on 履: Above is heaven, below is the lake — Lü; the exemplary person distinguishes high and low, and settles the will of the people.*\n\n2. **The Xiang Commentary (象传)**\n   > 天泽履\n   > *The Image of 履: 天泽履 (heaven over lake). The exemplary person distinguishes high and low and settles the people.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 素履，往无咎。\n   > *Plain treading — going forward, no blame.*\n- **二六 (Second Six)**: 履道坦坦，幽人贞吉。\n   > *Treading the level road — the hidden man is firm and correct and receives good fortune.*\n- **三九 (Third Nine)**: 眇能视，跛能履，履虎尾，咥人，凶。\n   > *One-eyed yet able to see, lame yet able to tread — treading on a tiger's tail, the tiger bites — misfortune.*\n- **四六 (Fourth Six)**: 履虎尾，愬愬终吉。\n   > *Treading on a tiger's tail — trembling, in the end good fortune.*\n- **五九 (Fifth Nine)**: 夬履，贞厉。\n   > *Treading resolutely — firm correctness with vigilance.*\n- **上六 (Top Six)**: 视履考祥，其还元吉。\n   > *Inspecting one's steps and contemplating good fortune — in the return, original good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n履 (Treading) corresponds to: heaven (天), lake (泽), tiger (虎), foot (足), step (步) — cautious treading on dangerous ground.\n\n**Practice (实践)**\nIn divination, 履 (Treading) advises: Tread carefully amid danger; uphold ritual and propriety. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 11, 泰 (Tài), is the 11th of the sixty-four symbols. It is formed by the earth over heaven — 地天泰 — and embodies the principle of flourishing. Students of the I Ching return to 泰 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 泰：小往大来，吉亨。\n> *Tai: The small departs, the great comes — auspicious and penetrating。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 泰卦：天地交，泰。后以财成天地之道，辅相天地之宜，以左右民。\n   > *The Tuan Commentary on 泰: Heaven and earth commune — Tai. The sovereign regulates the way of heaven and earth, assists what is appropriate, and aids the people.*\n\n2. **The Xiang Commentary (象传)**\n   > 地天泰\n   > *The Image of 泰: 地天泰 (earth over heaven). The sovereign regulates the way of heaven and earth.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 拔茅茹，以其汇，征吉。\n   > *Pulling up the grass — the whole clump comes with it; going is good fortune.*\n- **二六 (Second Six)**: 包荒，用冯河，不遐遗，朋亡，得尚于中行。\n   > *Embracing the wide, using the ford, not forgetting the distant — friends are lost, yet one gains the esteem of the middle way.*\n- **三九 (Third Nine)**: 无平不陂，无往不复。艰贞无咎。\n   > *There is no level that does not slope, no going that does not return — in difficulty, firm correctness, no blame.*\n- **四六 (Fourth Six)**: 翩翩，不富以其邻，不戒以孚。\n   > *Fluttering — one does not enrich his neighbor, yet by sincerity is not warned.*\n- **五九 (Fifth Nine)**: 帝乙归妹，以祉元吉。\n   > *The king's second sister is given in marriage — great blessing and original good fortune.*\n- **上六 (Top Six)**: 城复于隍，勿用师，自邑告命，贞吝。\n   > *The walls fall back into the moat — do not use the army; from one's own city, orders are announced — firm correctness with regret.*\n\n**Symbolic Correspondences (象征对应)**\n泰 (Flourishing) corresponds to: earth (地), heaven (天), harmony (和), union (交), peace (平) — flourishing through communion.\n\n**Practice (实践)**\nIn divination, 泰 (Flourishing) advises: Cherish harmony and the open exchange of ideas. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 12, 否 (Pǐ), is the 12th of the sixty-four symbols. It is formed by the heaven over earth — 天地否 — and embodies the principle of decline. Students of the I Ching return to 否 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 否：否之匪人，不利君子贞。大往小来。\n> *Pi: Obstruction is not the time for humans. Not advantageous for the upright person. The great departs, the small comes。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 否卦：天地不交，否。君子以俭德辟难，不可荣以禄。\n   > *The Tuan Commentary on 否: Heaven and earth do not commune — Pi. The exemplary person conceals virtue and avoids difficulty; one cannot be honored with rank and salary.*\n\n2. **The Xiang Commentary (象传)**\n   > 天地否\n   > *The Image of 否: 天地否 (heaven over earth). The exemplary person conceals virtue and avoids difficulty.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 拔茅茹，以其汇，贞吉，亨。\n   > *Pulling up the grass — the whole clump comes with it; firm correctness yields good fortune and prosperity.*\n- **二六 (Second Six)**: 包承，小人吉，大人否亨。\n   > *Embracing submission — the small man is fortunate; the great man is blocked yet prospers.*\n- **三九 (Third Nine)**: 包羞。\n   > *Embracing shame.*\n- **四六 (Fourth Six)**: 有命无咎，畴离祉。\n   > *Having a command, no blame — companions partake of the blessing.*\n- **五九 (Fifth Nine)**: 休否，大人吉。其亡其亡，系于苞桑。\n   > *Ceasing the obstruction — the great man is fortunate. \"Will he perish? Will he perish?\" — he binds it to the broom-mulberry.*\n- **上六 (Top Six)**: 倾否，先否后喜。\n   > *Overthrowing the obstruction — first obstruction, then joy.*\n\n**Symbolic Correspondences (象征对应)**\n否 (Decline) corresponds to: heaven (天), earth (地), barrier (障), decline (衰), isolation (隔离) — obstruction and withdrawal.\n\n**Practice (实践)**\nIn divination, 否 (Decline) advises: In times of obstruction, conceal virtue and wait. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 13, 同人 (Tóng Rén), is the 13th of the sixty-four symbols. It is formed by the heaven over fire — 天火同人 — and embodies the principle of fellowship. Students of the I Ching return to 同人 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 同人：同人于野，亨。利涉大川，利君子贞。\n> *Tong Ren: Fellowship in the wilds — penetration. Advantage to cross the great river; advantageous for the upright person。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 同人卦：天与火，同人。君子以类族辨物。\n   > *The Tuan Commentary on 同人: Heaven and fire — Tong Ren. The exemplary person groups clans and distinguishes things.*\n\n2. **The Xiang Commentary (象传)**\n   > 天火同人\n   > *The Image of 同人: 天火同人 (heaven over fire). The exemplary person groups clans and distinguishes things.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 同人于门，无咎。\n   > *Associating with men at the gate — no blame.*\n- **二六 (Second Six)**: 同人于宗，吝。\n   > *Associating with men in the ancestral temple — regret.*\n- **三九 (Third Nine)**: 伏戎于莽，升其高陵，三岁不兴。\n   > *Lying in wait in the grass, ascending the high mound — for three years they do not rise.*\n- **四六 (Fourth Six)**: 乘其墉，弗克攻，吉。\n   > *Mounting the walls, not able to attack — good fortune.*\n- **五九 (Fifth Nine)**: 同人，先号咷而后笑，大师克相遇。\n   > *Associating with men — first weeping, then laughing; the great army meets.*\n- **上六 (Top Six)**: 同人于郊，无悔。\n   > *Associating with men in the suburbs — no regret.*\n\n**Symbolic Correspondences (象征对应)**\n同人 (Fellowship) corresponds to: heaven (天), fire (火), community (同人), fellowship (交) — open fellowship in the wild.\n\n**Practice (实践)**\nIn divination, 同人 (Fellowship) advises: Seek fellowship in the open; be transparent and inclusive. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 14, 大有 (Dàyǒu), is the 14th of the sixty-four symbols. It is formed by the fire over heaven — 火天大有 — and embodies the principle of great possession. Students of the I Ching return to 大有 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 大有：元亨。\n> *Da You: Origination and Penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 大有卦：火在天上，大有。君子以遏恶扬善，顺天休命。\n   > *The Tuan Commentary on 大有: Fire above heaven — Da You. The exemplary person restrains evil and promotes good, following heaven's benevolent mandate.*\n\n2. **The Xiang Commentary (象传)**\n   > 火天大有\n   > *The Image of 大有: 火天大有 (fire over heaven). The exemplary person restrains evil and promotes good.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 无咎。\n   > *No blame.*\n- **二六 (Second Six)**: 大车以载，有攸往，无咎。\n   > *Great carts for carrying — there is a destination, no blame.*\n- **三九 (Third Nine)**: 公用亨于天子，小人弗克。\n   > *The lord presents offerings to the Son of Heaven — the small man cannot.*\n- **四六 (Fourth Six)**: 匪其彭，无咎。\n   > *Not boasting — no blame.*\n- **五九 (Fifth Nine)**: 厥孚交如，威如，吉。\n   > *Sincerity and prestige — good fortune.*\n- **上六 (Top Six)**: 自天祐之，吉无不利。\n   > *Heaven protects — good fortune, nothing disadvantageous.*\n\n**Symbolic Correspondences (象征对应)**\n大有 (Great Possession) corresponds to: fire (火), heaven (天), treasure (宝), wealth (富), sun (日) — great possession and abundance.\n\n**Practice (实践)**\nIn divination, 大有 (Great Possession) advises: Use abundance to benefit others; restrain evil, promote good. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 15, 谦 (Qiān), is the 15th of the sixty-four symbols. It is formed by the earth over mountain — 地山谦 — and embodies the principle of modesty. Students of the I Ching return to 谦 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 谦：亨，君子有终。\n> *Qian: Penetration; the exemplary person has an end。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 谦卦：地中有山，谦。君子以裒多益寡，称物平施。\n   > *The Tuan Commentary on 谦: A mountain within the earth — Qian. The exemplary person takes from surplus and adds to scarcity, weighing things and distributing fairly.*\n\n2. **The Xiang Commentary (象传)**\n   > 地山谦\n   > *The Image of 谦: 地山谦 (earth over mountain). The exemplary person takes from surplus and adds to scarcity.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 谦谦君子，用涉大川，吉。\n   > *The very humble superior man can cross great rivers — good fortune.*\n- **二六 (Second Six)**: 鸣谦，贞吉。\n   > *Humble in reputation — firm correctness yields good fortune.*\n- **三九 (Third Nine)**: 劳谦君子，有终吉。\n   > *The hardworking and humble superior man has a good end — good fortune.*\n- **四六 (Fourth Six)**: 无不利，撝谦。\n   > *Nothing disadvantageous — displaying humility.*\n- **五九 (Fifth Nine)**: 不富以其邻，利用侵伐，无不利。\n   > *Not enriching one's neighbor — advantageous to invade and punish, nothing disadvantageous.*\n- **上六 (Top Six)**: 鸣谦，利用行师，征邑国。\n   > *Humble in reputation — advantageous to use the army, to chastise cities and states.*\n\n**Symbolic Correspondences (象征对应)**\n谦 (Modesty) corresponds to: earth (地), mountain (山), modesty (谦), humility (虚) — hidden virtue within.\n\n**Practice (实践)**\nIn divination, 谦 (Modesty) advises: Cultivate hidden virtue; humility draws fortune. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 16, 豫 (Yù), is the 16th of the sixty-four symbols. It is formed by the thunder over earth — 雷地豫 — and embodies the principle of enthusiasm. Students of the I Ching return to 豫 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 豫：利建侯行师。\n> *Yu: Advantage in establishing helpers and mobilizing the army。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 豫卦：雷出地奋，豫。先王以作乐崇德，殷荐之上帝，以配祖考。\n   > *The Tuan Commentary on 豫: Thunder bursts forth from the earth — Yu. The former kings created music to exalt virtue, making a grand offering to the Supreme Lord, in concert with ancestors.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷地豫\n   > *The Image of 豫: 雷地豫 (thunder over earth). The former kings created music to exalt virtue.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 鸣豫，凶。\n   > *Pleasure reputed — misfortune.*\n- **二六 (Second Six)**: 介于石，不终日，贞吉。\n   > *Firm as a stone — not for a whole day; firm correctness yields good fortune.*\n- **三九 (Third Nine)**: 盱豫，悔。\n   > *Gazing for pleasure — regret.*\n- **四六 (Fourth Six)**: 由豫，大有得，勿疑。朋盍簪。\n   > *Through pleasure, great gains; do not doubt. Friends gather as hairpins.*\n- **五九 (Fifth Nine)**: 贞疾，恒不死。\n   > *Firm as an illness — enduring, not dying.*\n- **上六 (Top Six)**: 冥豫成，有渝无咎。\n   > *Dark pleasure completed — change, no blame.*\n\n**Symbolic Correspondences (象征对应)**\n豫 (Enthusiasm) corresponds to: thunder (雷), earth (地), music (乐), drum (鼓), joy (豫) — enthusiasm stirring the multitude.\n\n**Practice (实践)**\nIn divination, 豫 (Enthusiasm) advises: Stir enthusiasm in others through music and shared vision. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 17, 随 (Suí), is the 17th of the sixty-four symbols. It is formed by the lake over thunder — 泽雷随 — and embodies the principle of following. Students of the I Ching return to 随 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 随：元亨利贞，无咎。\n> *Sui: Origination, Penetration, Advantage, Uprightness — no blame。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 随卦：泽中有雷，随。君子以向晦入宴息。\n   > *The Tuan Commentary on 随: Thunder within the lake — Sui. The exemplary person turns to evening and enters to rest.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽雷随\n   > *The Image of 随: 泽雷随 (lake over thunder). The exemplary person follows the time and rests.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 官有渝，贞吉。出门交有功。\n   > *The rule changes — firm correctness yields good fortune. Going out to meet, one has merit.*\n- **二六 (Second Six)**: 系小子，失丈夫。\n   > *Attached to the small man — losing the great man.*\n- **三九 (Third Nine)**: 系丈夫，失小子。随有求得。\n   > *Attached to the great man — losing the small man. Following, one obtains what is sought.*\n- **四六 (Fourth Six)**: 随有获，贞凶。有孚在道，以明，何咎。\n   > *Following, one gains — firm correctness with vigilance. Sincerity in the way — to be clear, what blame?*\n- **五九 (Fifth Nine)**: 孚于嘉，吉。\n   > *Sincerity in the excellent — good fortune.*\n- **上六 (Top Six)**: 系乃维之，王用亨于西山。\n   > *Bound, then tied — the king uses worship on the Western Mountain.*\n\n**Symbolic Correspondences (象征对应)**\n随 (Following) corresponds to: lake (泽), thunder (雷), follow (随), companion (伴) — following the rhythm of time.\n\n**Practice (实践)**\nIn divination, 随 (Following) advises: Follow the right people and the natural rhythm of time. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 18, 蛊 (Gǔ), is the 18th of the sixty-four symbols. It is formed by the mountain over wind — 山风蛊 — and embodies the principle of remedying. Students of the I Ching return to 蛊 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 蛊：元亨。利涉大川。先甲三日，后甲三日。\n> *Gu: Origination, Penetration. Advantage to cross the great river. Three days before and three days after。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 蛊卦：山下有风，蛊。君子以振民育德。\n   > *The Tuan Commentary on 蛊: Wind beneath the mountain — Gu. The exemplary person rouses the people and cultivates virtue.*\n\n2. **The Xiang Commentary (象传)**\n   > 山风蛊\n   > *The Image of 蛊: 山风蛊 (mountain over wind). The exemplary person rouses the people and cultivates virtue.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 干父之蛊，有子，考无咎。厉终吉。\n   > *Correcting the father's work — having a son, the father is blameless. Difficulties, in the end good fortune.*\n- **二六 (Second Six)**: 干母之蛊，不可贞。\n   > *Correcting the mother's work — one cannot be firm.*\n- **三九 (Third Nine)**: 干父之蛊，小有悔，无大咎。\n   > *Correcting the father's work — small regret, no great blame.*\n- **四六 (Fourth Six)**: 裕父之蛊，往见吝。\n   > *Preserving the father's work — going, one sees regret.*\n- **五九 (Fifth Nine)**: 干父之蛊，用誉。\n   > *Correcting the father's work — used with praise.*\n- **上六 (Top Six)**: 不事王侯，高尚其事。\n   > *Not serving kings and princes — one elevates one's affairs.*\n\n**Symbolic Correspondences (象征对应)**\n蛊 (Remedying) corresponds to: mountain (山), wind (风), remedy (治), reform (革) — correcting decay from the root.\n\n**Practice (实践)**\nIn divination, 蛊 (Remedying) advises: Address decay at its source; reform with vigor. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 19, 临 (Lín), is the 19th of the sixty-four symbols. It is formed by the earth over lake — 地泽临 — and embodies the principle of approach. Students of the I Ching return to 临 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 临：元亨利贞。至于八月有凶。\n> *Lin: Origination, Penetration, Advantage, Uprightness. By the eighth month there will be misfortune。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 临卦：泽上有地，临。君子以教思无穷，容保民无疆。\n   > *The Tuan Commentary on 临: Earth above the lake — Lin. The exemplary person teaches with endless thought, containing and protecting the people without bound.*\n\n2. **The Xiang Commentary (象传)**\n   > 地泽临\n   > *The Image of 临: 地泽临 (earth over lake). The exemplary person teaches with endless thought and protects the people.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 咸临，贞吉。\n   > *Approaching with influence — firm correctness yields good fortune.*\n- **二六 (Second Six)**: 咸临，吉无不利。\n   > *Approaching with influence — good fortune, nothing disadvantageous.*\n- **三九 (Third Nine)**: 甘临，无攸利。既忧之，无咎。\n   > *Sweet approaching — nothing advantageous. Once one worries, no blame.*\n- **四六 (Fourth Six)**: 至临，无咎。\n   > *Sincere approaching — no blame.*\n- **五九 (Fifth Nine)**: 知临，大君之宜，吉。\n   > *Wise approaching — fitting for the great ruler — good fortune.*\n- **上六 (Top Six)**: 敦临，吉无咎。\n   > *Honest approaching — good fortune, no blame.*\n\n**Symbolic Correspondences (象征对应)**\n临 (Approach) corresponds to: earth (地), lake (泽), approach (临), supervision (监) — drawing near and overseeing.\n\n**Practice (实践)**\nIn divination, 临 (Approach) advises: Approach others with teaching and protective care. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 20, 观 (Guān), is the 20th of the sixty-four symbols. It is formed by the wind over earth — 风地观 — and embodies the principle of contemplation. Students of the I Ching return to 观 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 观：盥而不荐，有孚颙若。\n> *Guan: Washing the hands but not yet offering — there is sincere respect。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 观卦：风行地上，观。先王以省方观民设教。\n   > *The Tuan Commentary on 观: Wind moves over the earth — Guan. The former kings inspected the regions, observed the people, and established teachings.*\n\n2. **The Xiang Commentary (象传)**\n   > 风地观\n   > *The Image of 观: 风地观 (wind over earth). The former kings inspected regions and established teachings.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 观我生，进退。\n   > *Looking at my life — to advance or retreat.*\n- **二六 (Second Six)**: 窥观，利女贞。\n   > *Peeping — advantageous for the woman to be correct.*\n- **三九 (Third Nine)**: 观我生，观民无咎。\n   > *Looking at my life — looking at the people, no blame.*\n- **四六 (Fourth Six)**: 观国之光，利用宾于王。\n   > *Looking at the light of the state — advantageous to be a guest of the king.*\n- **五九 (Fifth Nine)**: 观我生，君子无咎。\n   > *Looking at my life — the superior man is blameless.*\n- **上六 (Top Six)**: 观其生，君子无咎。\n   > *Looking at his life — the superior man is blameless.*\n\n**Symbolic Correspondences (象征对应)**\n观 (Contemplation) corresponds to: wind (风), earth (地), contemplate (观), worship (祭) — observing and being observed.\n\n**Practice (实践)**\nIn divination, 观 (Contemplation) advises: Observe deeply; be mindful of how you appear to others. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 21, 噬嗑 (Shì Hé), is the 21st of the sixty-four symbols. It is formed by the fire over thunder — 火雷噬嗑 — and embodies the principle of biting through. Students of the I Ching return to 噬嗑 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 噬嗑：亨。利用狱。\n> *Shi He: Penetration. Advantage in administering justice。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 噬嗑卦：雷电噬嗑。先王以明罚敕法。\n   > *The Tuan Commentary on 噬嗑: Thunder and lightning — Shi He. The former kings made penalties clear and rectified the laws.*\n\n2. **The Xiang Commentary (象传)**\n   > 火雷噬嗑\n   > *The Image of 噬嗑: 火雷噬嗑 (fire over thunder). The former kings made penalties clear and rectified laws.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 屦校灭趾，无咎。\n   > *The shoe over the foot destroys the toes — no blame.*\n- **二六 (Second Six)**: 噬肤灭鼻，无咎。\n   > *Biting the skin destroys the nose — no blame.*\n- **三九 (Third Nine)**: 噬腊肉，遇毒。小吝，无咎。\n   > *Biting dried meat — encountering poison. Small regret, no blame.*\n- **四六 (Fourth Six)**: 噬干胏，得金矢，利艰贞，吉。\n   > *Biting dry bone — obtaining a golden arrow. Advantageous to be firm in difficulty — good fortune.*\n- **五九 (Fifth Nine)**: 噬干肉，得黄金，贞厉，无咎。\n   > *Biting dry meat — obtaining gold and yellow metal. Firm correctness with vigilance, no blame.*\n- **上六 (Top Six)**: 何校灭耳，凶。\n   > *The collar over the ear destroys the ear — misfortune.*\n\n**Symbolic Correspondences (象征对应)**\n噬嗑 (Biting Through) corresponds to: fire (火), thunder (雷), bite (噬), chew (啮) — biting through obstruction with clarity.\n\n**Practice (实践)**\nIn divination, 噬嗑 (Biting Through) advises: Bite through obstacles with clarity and decisive action. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 22, 贲 (Bì), is the 22nd of the sixty-four symbols. It is formed by the mountain over fire — 山火贲 — and embodies the principle of adornment. Students of the I Ching return to 贲 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 贲：亨。小利有攸往。\n> *Bi: Penetration. Small advantage in having somewhere to go。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 贲卦：山下有火，贲。君子以明庶政，无敢折狱。\n   > *The Tuan Commentary on 贲: Fire beneath the mountain — Bi. The exemplary person illumines the manifold affairs of government, but dares not decide lawsuits.*\n\n2. **The Xiang Commentary (象传)**\n   > 山火贲\n   > *The Image of 贲: 山火贲 (mountain over fire). The exemplary person illumines government but dares not decide lawsuits.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 贲其趾，舍车而徒。\n   > *Adorning the toes — leaving the carriage and walking on foot.*\n- **二六 (Second Six)**: 贲其须。\n   > *Adorning the beard.*\n- **三九 (Third Nine)**: 贲如濡如，永贞吉。\n   > *Adorned and moistened — perpetual firmness yields good fortune.*\n- **四六 (Fourth Six)**: 贲如皤如，白马翰如，匪寇婚媾。\n   > *Adorned and plain — white horses galloping, not robbers but suitors.*\n- **五九 (Fifth Nine)**: 贲于丘园，束帛戋戋。吝，终吉。\n   > *Adorning the hill gardens — bundles of silk, meager. Regret, in the end good fortune.*\n- **上六 (Top Six)**: 白贲，无咎。\n   > *Plain adornment — no blame.*\n\n**Symbolic Correspondences (象征对应)**\n贲 (Adornment) corresponds to: mountain (山), fire (火), adornment (饰), beauty (美) — outward adornment of form.\n\n**Practice (实践)**\nIn divination, 贲 (Adornment) advises: Adorn outward forms, but keep inner substance paramount. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 23, 剥 (Bō), is the 23rd of the sixty-four symbols. It is formed by the mountain over earth — 山地剥 — and embodies the principle of stripping. Students of the I Ching return to 剥 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 剥：不利有攸往。\n> *Bo: Not advantageous to have somewhere to go。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 剥卦：山地剥。上以厚下安宅。\n   > *The Tuan Commentary on 剥: Mountain over earth — Bo. Those above enrich those below and dwell securely.*\n\n2. **The Xiang Commentary (象传)**\n   > 山地剥\n   > *The Image of 剥: 山地剥 (mountain over earth). Those above enrich those below and dwell securely.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 剥床以足，蔑贞凶。\n   > *Stripping the bed at its foot — disregarding correctness, misfortune.*\n- **二六 (Second Six)**: 剥床以辨，蔑贞凶。\n   > *Stripping the bed at its frame — disregarding correctness, misfortune.*\n- **三九 (Third Nine)**: 剥之，无咎。\n   > *Stripping it — no blame.*\n- **四六 (Fourth Six)**: 剥床以肤，凶。\n   > *Stripping the bed of its skin — misfortune.*\n- **五九 (Fifth Nine)**: 贯鱼，以宫人宠，无不利。\n   > *Fish in a row — the palace ladies gain favor, nothing disadvantageous.*\n- **上六 (Top Six)**: 硕果不食，君子得舆，小人剥庐。\n   > *The great fruit uneaten — the superior man gets a carriage; the small man strips the hut.*\n\n**Symbolic Correspondences (象征对应)**\n剥 (Stripping) corresponds to: mountain (山), earth (地), peel (剥), decay (衰) — stripping away to the core.\n\n**Practice (实践)**\nIn divination, 剥 (Stripping) advises: When stripping away, nourish the foundation before rebuilding. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 24, 复 (Fù), is the 24th of the sixty-four symbols. It is formed by the earth over thunder — 地雷复 — and embodies the principle of return. Students of the I Ching return to 复 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 复：亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。\n> *Fu: Penetration. Going out and coming in without injury; friends arrive without blame. Return to the Way。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 复卦：地雷复。先王以至日闭关，商旅不行，后不省方。\n   > *The Tuan Commentary on 复: Earth over thunder — Fu. The former kings closed the frontier on the shortest day; merchants and travelers did not go forth, and the sovereign did not inspect the regions.*\n\n2. **The Xiang Commentary (象传)**\n   > 地雷复\n   > *The Image of 复: 地雷复 (earth over thunder). The former kings closed the frontier on the shortest day.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 不远复，无祗悔，元吉。\n   > *Not far to return — no great regret, original good fortune.*\n- **二六 (Second Six)**: 休复，吉。\n   > *Turning back to rest — good fortune.*\n- **三九 (Third Nine)**: 频复，厉无咎。\n   > *Repeatedly returning — difficulty, no blame.*\n- **四六 (Fourth Six)**: 中行独复。\n   > *In the middle, alone returning.*\n- **五九 (Fifth Nine)**: 敦复，无悔。\n   > *Sincerely returning — no regret.*\n- **上六 (Top Six)**: 迷复，凶，有灾眚。\n   > *Lost in returning — misfortune, calamity.*\n\n**Symbolic Correspondences (象征对应)**\n复 (Return) corresponds to: earth (地), thunder (雷), return (复), comeback (返) — return of light after darkness.\n\n**Practice (实践)**\nIn divination, 复 (Return) advises: After return, nurture the seed of new light patiently. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 25, 无妄 (Wú Wàng), is the 25th of the sixty-four symbols. It is formed by the heaven over thunder — 天雷无妄 — and embodies the principle of innocence. Students of the I Ching return to 无妄 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 无妄：元亨利贞。其正有眚，不利有攸往。\n> *Wu Wang: Origination, Penetration, Advantage, Uprightness. If one is not as he should be, there will be disaster。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 无妄卦：天下雷行，物与无妄。先王以茂对时育万物。\n   > *The Tuan Commentary on 无妄: Thunder moves beneath heaven — Wu Wang. The former kings vigorously responded to the time and nourished the myriad beings.*\n\n2. **The Xiang Commentary (象传)**\n   > 天雷无妄\n   > *The Image of 无妄: 天雷无妄 (heaven over thunder). The former kings responded to time and nourished all beings.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 无妄，往吉。\n   > *Without pretense — going, good fortune.*\n- **二六 (Second Six)**: 不耕获，不菑畲，则利有攸往。\n   > *Not farming for the harvest, not clearing new ground — then advantageous to have a destination.*\n- **三九 (Third Nine)**: 无妄之灾，或系之牛，行人之得，邑人之灾。\n   > *Without pretense, calamity: someone's ox is tied; the traveler gets it, the townsman suffers.*\n- **四六 (Fourth Six)**: 可贞，无咎。\n   > *May be firm, no blame.*\n- **五九 (Fifth Nine)**: 无妄之疾，勿药有喜。\n   > *Without pretense, illness — no medicine, yet joy.*\n- **上六 (Top Six)**: 无妄，行有眚，无攸利。\n   > *Without pretense — action brings calamity, nothing advantageous.*\n\n**Symbolic Correspondences (象征对应)**\n无妄 (Innocence) corresponds to: heaven (天), thunder (雷), innocence (妄), spontaneity (自然) — natural action without contrivance.\n\n**Practice (实践)**\nIn divination, 无妄 (Innocence) advises: Act naturally without contrivance; remain innocent in intent. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 26, 大畜 (Dà Xù), is the 26th of the sixty-four symbols. It is formed by the mountain over heaven — 山天大畜 — and embodies the principle of great taming. Students of the I Ching return to 大畜 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 大畜：利贞。不家食，吉，利涉大川。\n> *Da Chu: Advantage in Uprightness. Not eating at home is auspicious; advantage in crossing the great river。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 大畜卦：天在山中，大畜。君子以多识前言往行，以畜其德。\n   > *The Tuan Commentary on 大畜: Heaven within the mountain — Da Chu. The exemplary person learns much from the words and deeds of the ancients to accumulate virtue.*\n\n2. **The Xiang Commentary (象传)**\n   > 山天大畜\n   > *The Image of 大畜: 山天大畜 (mountain over heaven). The exemplary person learns much from the ancients to accumulate virtue.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 有厉，利已。\n   > *There is difficulty — advantageous to stop.*\n- **二六 (Second Six)**: 不耕获，不菑畲，则利有攸往。\n   > *Not farming for the harvest, not clearing new ground — advantageous to have a destination.*\n- **三九 (Third Nine)**: 利贞。\n   > *Advantageous to be correct.*\n- **四六 (Fourth Six)**: 童牛之牿，元吉。\n   > *The wood on the young cow — original good fortune.*\n- **五九 (Fifth Nine)**: 豮豕之牙，吉。\n   > *The teeth of the castrated boar — good fortune.*\n- **上六 (Top Six)**: 何天之衢，亨。\n   > *What is the heaven's highway — prosperity.*\n\n**Symbolic Correspondences (象征对应)**\n大畜 (Great Taming) corresponds to: mountain (山), heaven (天), accumulate (畜), store (蓄) — great accumulation of strength.\n\n**Practice (实践)**\nIn divination, 大畜 (Great Taming) advises: Accumulate knowledge and strength for the great task ahead. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 27, 颐 (Yí), is the 27th of the sixty-four symbols. It is formed by the mountain over thunder — 山雷颐 — and embodies the principle of nourishment. Students of the I Ching return to 颐 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 颐：贞吉。观颐，自求口实。\n> *Yi: Uprightness is auspicious. Observe nourishment and seek the food for oneself。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 颐卦：山下有雷，颐。君子以慎言语，节饮食。\n   > *The Tuan Commentary on 颐: Thunder beneath the mountain — Yi. The exemplary person is careful in speech and moderate in eating and drinking.*\n\n2. **The Xiang Commentary (象传)**\n   > 山雷颐\n   > *The Image of 颐: 山雷颐 (mountain over thunder). The exemplary person is careful in speech and moderate in eating.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 往明，利涉大川。\n   > *One looks to one's vision — advantageous to cross the great river.*\n- **二六 (Second Six)**: 颠颐，拂经，于丘颐，征凶。\n   > *Reversed nourishment — transgressing the classics, seeking nourishment on the hill — going is misfortune.*\n- **三九 (Third Nine)**: 拂颐，贞凶，十年勿用，无攸利。\n   > *Transgressing nourishment — firm correctness with vigilance; for ten years not to be used, nothing advantageous.*\n- **四六 (Fourth Six)**: 颠颐，吉。虎视眈眈，其欲逐逐，无咎。\n   > *Reversed nourishment — good fortune. The tiger looks intently, its desire is urgent — no blame.*\n- **五九 (Fifth Nine)**: 拂经，居贞吉，不可涉大川。\n   > *Transgressing the classics — dwelling in correctness yields good fortune; one cannot cross the great river.*\n- **上六 (Top Six)**: 由颐，厉吉，利涉大川。\n   > *Through nourishment — difficulty yields good fortune; advantageous to cross the great river.*\n\n**Symbolic Correspondences (象征对应)**\n颐 (Nourishment) corresponds to: mountain (山), thunder (雷), nourish (养), mouth (口) — nourishment of body and mind.\n\n**Practice (实践)**\nIn divination, 颐 (Nourishment) advises: Nourish your own body and mind before nourishing others. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 28, 大过 (Dà Guò), is the 28th of the sixty-four symbols. It is formed by the lake over wind — 泽风大过 — and embodies the principle of great excess. Students of the I Ching return to 大过 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 大过：栋桡，利有攸往，亨。\n> *Da Guo: The beam is bent. Advantage in having somewhere to go; penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 大过卦：泽无风，大过。君子以独立不惧，遁世无闷。\n   > *The Tuan Commentary on 大过: Lake without wind — Da Guo. The exemplary person stands alone without fear, withdraws from the world without resentment.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽风大过\n   > *The Image of 大过: 泽风大过 (lake over wind). The exemplary person stands alone without fear.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 藉用白茅，无咎。\n   > *Using white grass as a mat — no blame.*\n- **二六 (Second Six)**: 枯杨生稊，老夫得其女妻，无不利。\n   > *The withered poplar sprouts — the old man obtains a young wife, nothing disadvantageous.*\n- **三九 (Third Nine)**: 栋桡，凶。\n   > *The ridgepole bends — misfortune.*\n- **四六 (Fourth Six)**: 栋隆，吉。有它吝。\n   > *The ridgepole is high — good fortune. Elsewhere, regret.*\n- **五九 (Fifth Nine)**: 枯杨生华，老妇得其士夫，无咎无誉。\n   > *The withered poplar flowers — the old woman obtains a young husband, no blame no praise.*\n- **上六 (Top Six)**: 过涉灭顶，凶，无咎。\n   > *Crossing and drowning — misfortune, no blame.*\n\n**Symbolic Correspondences (象征对应)**\n大过 (Great Excess) corresponds to: lake (泽), wind (风), beam (梁), wood (木) — great excess bearing heavy weight.\n\n**Practice (实践)**\nIn divination, 大过 (Great Excess) advises: Stand alone in your truth even when the weight is heavy. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 29, 坎 (Kǎn), is the 29th of the sixty-four symbols. It is formed by the water over water — 坎为水 — and embodies the principle of the abyss. Students of the I Ching return to 坎 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 坎：习坎，有孚，维心亨。\n> *Kan: Repeated Abyss. With sincerity, the heart is preserved in penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 坎卦：水洊至，习坎。君子以常德行，习教事。\n   > *The Tuan Commentary on 坎: Water comes again and again — Xi Kan. The exemplary person preserves constant virtue and practices teaching.*\n\n2. **The Xiang Commentary (象传)**\n   > 水洊至\n   > *The Image of 坎: 坎为水 (water over water). The exemplary person preserves constant virtue and practices teaching.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 习坎，入坎，凶。\n   > *Repeated pitfall — entering the pit, misfortune.*\n- **二六 (Second Six)**: 坎有险，求小得。\n   > *The pitfall has dangers — seeking small gain.*\n- **三九 (Third Nine)**: 来之坎坎，险且枕，入于坎窞，勿用。\n   > *The pitfall comes and comes — dangerous and resting; entering the deepest pit, do not act.*\n- **四六 (Fourth Six)**: 樽酒簋贰，用缶，纳约自牖，终无咎。\n   > *A jar of wine and two baskets — using earthenware, receiving covenants through the window, in the end no blame.*\n- **五九 (Fifth Nine)**: 坎不盈，祗既平，无咎。\n   > *The pitfall is not full — the mound is already level, no blame.*\n- **上六 (Top Six)**: 系用徽纆，寘于丛棘，三岁不得，凶。\n   > *Bound with black and yellow cords, placed among thorn trees — for three years not to be obtained, misfortune.*\n\n**Symbolic Correspondences (象征对应)**\n坎 (The Abyss) corresponds to: water (水), abyss (渊), danger (险), ear (耳), blood (血), north (北), winter (冬) — repeated peril.\n\n**Practice (实践)**\nIn divination, 坎 (The Abyss) advises: In repeated peril, keep your heart constant and sincere. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 30, 离 (Lí), is the 30th of the sixty-four symbols. It is formed by the fire over fire — 离为火 — and embodies the principle of radiance. Students of the I Ching return to 离 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 离：利贞，亨。畜牝牛，吉。\n> *Li: Advantage in Uprightness; Penetration. Nourishing a cow is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 离卦：明两作，离。大人以继明照于四方。\n   > *The Tuan Commentary on 离: Two lights arise — Li. The great person continues the light and illumines the four quarters.*\n\n2. **The Xiang Commentary (象传)**\n   > 明两作\n   > *The Image of 离: 离为火 (fire over fire). The great person continues the light to illumine the four quarters.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 履错然，敬之无咎。\n   > *Treading confused — respecting it, no blame.*\n- **二六 (Second Six)**: 黄离，元吉。\n   > *Yellow brilliance — original good fortune.*\n- **三九 (Third Nine)**: 日昃之离，不鼓缶而歌，则大耋之嗟，凶。\n   > *The brilliance of the setting sun — if one does not beat the pot and sing, then the old man's lament — misfortune.*\n- **四六 (Fourth Six)**: 突如其来如，焚如，死如，弃如。\n   > *Suddenly — burning, dying, abandoned.*\n- **五九 (Fifth Nine)**: 出涕沱若，戚嗟若，吉。\n   > *Shedding tears as a flood, mourning with sighs — good fortune.*\n- **上六 (Top Six)**: 王用出征，有嘉折首，获匪其丑，无咎。\n   > *The king goes forth — there is a reward for taking the head; the captive is not his follower — no blame.*\n\n**Symbolic Correspondences (象征对应)**\n离 (Radiance) corresponds to: fire (火), light (光), radiance (明), eye (目), south (南), summer (夏) — clinging and illumination.\n\n**Practice (实践)**\nIn divination, 离 (Radiance) advises: Cling to what is right and bright; shine without burning. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 31, 咸 (Xián), is the 31st of the sixty-four symbols. It is formed by the lake over mountain — 泽山咸 — and embodies the principle of sensing. Students of the I Ching return to 咸 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 咸：亨，利贞，取女吉。\n> *Xian: Penetration, Advantage, Uprightness. Taking a woman is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 咸卦：山上有泽，咸。君子以虚受人。\n   > *The Tuan Commentary on 咸: A lake upon the mountain — Xian. The exemplary person empties oneself and receives others.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有泽\n   > *The Image of 咸: 泽山咸 (lake over mountain). The exemplary person empties oneself and receives others.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 咸其拇。\n   > *Its thumb is moved.*\n- **二六 (Second Six)**: 咸其腓，凶，居吉。\n   > *Its calf is moved — misfortune; dwelling, good fortune.*\n- **三九 (Third Nine)**: 咸其股，执其随，往吝。\n   > *Its thigh is moved — holding to one's followers, going brings regret.*\n- **四六 (Fourth Six)**: 贞吉悔亡。憧憧往来，朋从尔思。\n   > *Firm correctness yields good fortune, regret disappears. Coming and going, your friends follow your thoughts.*\n- **五九 (Fifth Nine)**: 咸其脢，无悔。\n   > *Its back-flesh is moved — no regret.*\n- **上六 (Top Six)**: 咸其辅颊舌。\n   > *Its cheeks and tongue are moved.*\n\n**Symbolic Correspondences (象征对应)**\n咸 (Sensing) corresponds to: lake (泽), mountain (山), sense (感), touch (触), heart (心) — mutual influence and response.\n\n**Practice (实践)**\nIn divination, 咸 (Sensing) advises: Empty yourself to truly sense and respond to others. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 32, 恒 (Héng), is the 32nd of the sixty-four symbols. It is formed by the thunder over wind — 雷风恒 — and embodies the principle of persistence. Students of the I Ching return to 恒 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 恒：亨，无咎，利贞，利有攸往。\n> *Heng: Penetration, no blame, advantage in Uprightness, advantage in having somewhere to go。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 恒卦：雷风恒。君子以立不易方。\n   > *The Tuan Commentary on 恒: Thunder and wind — Heng. The exemplary person stands firm and does not change one's direction.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷风恒\n   > *The Image of 恒: 雷风恒 (thunder over wind). The exemplary person stands firm and does not change direction.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 浚恒，贞凶，无攸利。\n   > *Seeking perseverance — firm correctness with vigilance, nothing advantageous.*\n- **二六 (Second Six)**: 悔亡。\n   > *Regret disappears.*\n- **三九 (Third Nine)**: 不恒其德，或承之羞，贞吝。\n   > *Not persevering in one's virtue — one may incur shame, firm correctness with regret.*\n- **四六 (Fourth Six)**: 田无禽。\n   > *The field has no game.*\n- **五九 (Fifth Nine)**: 恒其德，贞。妇人吉，夫子凶。\n   > *Persevering in one's virtue — correct. The woman is fortunate, the man is unfortunate.*\n- **上六 (Top Six)**: 振恒，凶。\n   > *Shaking perseverance — misfortune.*\n\n**Symbolic Correspondences (象征对应)**\n恒 (Persistence) corresponds to: thunder (雷), wind (风), persist (恒), endure (久) — long continuance and constancy.\n\n**Practice (实践)**\nIn divination, 恒 (Persistence) advises: Persevere in your direction; let constancy mark your path. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 33, 遁 (Dùn), is the 33rd of the sixty-four symbols. It is formed by the heaven over mountain — 天山遁 — and embodies the principle of retreat. Students of the I Ching return to 遁 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 遁：亨，小利贞。\n> *Dun: Penetration, small advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 遁卦：天下有山，遁。君子以远小人，不恶而严。\n   > *The Tuan Commentary on 遁: A mountain beneath heaven — Dun. The exemplary person keeps distant from the petty person, without hatred yet with severity.*\n\n2. **The Xiang Commentary (象传)**\n   > 天下有山\n   > *The Image of 遁: 天山遁 (heaven over mountain). The exemplary person keeps distant from the petty person.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 遁尾，厉。\n   > *Retreating to the tail — difficulty.*\n- **二六 (Second Six)**: 执之用黄牛之革，莫之胜说。\n   > *Bound with the skin of the yellow ox — none can prevail to loose it.*\n- **三九 (Third Nine)**: 系遁，有疾厉，畜臣妾吉。\n   > *Bound retreat — illness with difficulty; keeping servants and women, good fortune.*\n- **四六 (Fourth Six)**: 好遁，君子吉，小人否。\n   > *Fond of retreat — the superior man is fortunate, the small man not.*\n- **五九 (Fifth Nine)**: 嘉遁，贞吉。\n   > *Excellent retreat — firm correctness yields good fortune.*\n- **上六 (Top Six)**: 肥遁，无不利。\n   > *Rich retreat — nothing disadvantageous.*\n\n**Symbolic Correspondences (象征对应)**\n遁 (Retreat) corresponds to: heaven (天), mountain (山), retreat (遁), withdraw (退) — timely withdrawal from the world.\n\n**Practice (实践)**\nIn divination, 遁 (Retreat) advises: Know when to retreat; withdraw before exhaustion. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 34, 大壮 (Dà Zhuàng), is the 34th of the sixty-four symbols. It is formed by the thunder over heaven — 雷天大壮 — and embodies the principle of great strength. Students of the I Ching return to 大壮 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 大壮：利贞。\n> *Da Zhuang: Advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 大壮卦：雷在天上，大壮。君子以非礼弗履。\n   > *The Tuan Commentary on 大壮: Thunder upon heaven — Da Zhuang. The exemplary person does not tread where propriety does not permit.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷天大壮\n   > *The Image of 大壮: 雷天大壮 (thunder over heaven). The exemplary person does not tread where propriety does not permit.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 壮于趾，征贞凶，有孚。\n   > *Strong in the toes — going with firmness is misfortune, with sincerity.*\n- **二六 (Second Six)**: 贞吉。\n   > *Firm correctness yields good fortune.*\n- **三九 (Third Nine)**: 壮于大舆之輹，贞凶。\n   > *Strong in the axles of the great carriage — firm correctness with vigilance.*\n- **四六 (Fourth Six)**: 贞吉悔亡。\n   > *Firm correctness yields good fortune, regret disappears.*\n- **五九 (Fifth Nine)**: 丧羊于易，无悔。\n   > *Losing a goat at the easy ford — no regret.*\n- **上六 (Top Six)**: 羝羊触藩，不能退，不能遂，无攸利，艰则吉。\n   > *The ram buttocks the fence — cannot retreat, cannot advance; nothing advantageous, in difficulty then good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n大壮 (Great Strength) corresponds to: thunder (雷), heaven (天), strength (壮), power (力) — great strength in the ascendancy.\n\n**Practice (实践)**\nIn divination, 大壮 (Great Strength) advises: Use strength with restraint; never violate propriety. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 35, 晋 (Jìn), is the 35th of the sixty-four symbols. It is formed by the fire over earth — 火地晋 — and embodies the principle of prosperity. Students of the I Ching return to 晋 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 晋：康侯用锡马蕃庶，昼日三接。\n> *Jin: The prosperous lord uses the gift of horses, received three times in one day。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 晋卦：明出地上，晋。君子以自昭明德。\n   > *The Tuan Commentary on 晋: Light emerges above the earth — Jin. The exemplary person manifests one's own clear virtue.*\n\n2. **The Xiang Commentary (象传)**\n   > 明出地上\n   > *The Image of 晋: 火地晋 (fire over earth). The exemplary person manifests one's own clear virtue.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 晋如摧如，贞吉。罔孚，裕无咎。\n   > *Advancing and retreating — firm correctness yields good fortune. Without sincerity, generous — no blame.*\n- **二六 (Second Six)**: 晋如愁如，贞吉。受兹介福于其王母。\n   > *Advancing and sorrowful — firm correctness yields good fortune. Receiving this great blessing from the king's mother.*\n- **三九 (Third Nine)**: 众允，悔亡。\n   > *Accepted by the multitude — regret disappears.*\n- **四六 (Fourth Six)**: 晋如鼫鼠，贞厉。\n   > *Advancing like a rat — firm correctness with vigilance.*\n- **五九 (Fifth Nine)**: 悔亡，失得勿恤。往吉，无不利。\n   > *Regret disappears — loss and gain need not be worried about. Going is good fortune, nothing disadvantageous.*\n- **上六 (Top Six)**: 晋其角，维用伐邑，厉吉无咎，贞吝。\n   > *Advancing its horns — only used to chastise cities; difficulty yields good fortune and no blame, firm correctness with regret.*\n\n**Symbolic Correspondences (象征对应)**\n晋 (Prosperity) corresponds to: fire (火), earth (地), advance (晋), rise (升), sun (日) — brilliant progress into the light.\n\n**Practice (实践)**\nIn divination, 晋 (Prosperity) advises: Advance openly; let your clear virtue shine forth. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 36, 明夷 (Míng Yí), is the 36th of the sixty-four symbols. It is formed by the earth over fire — 地火明夷 — and embodies the principle of brightness hiding. Students of the I Ching return to 明夷 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 明夷：利艰贞。\n> *Ming Yi: Advantage in difficult Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 明夷卦：明入地中，明夷。君子以莅众，用晦而明。\n   > *The Tuan Commentary on 明夷: Light enters into the earth — Ming Yi. The exemplary person approaches the multitude, using darkness yet preserving clarity.*\n\n2. **The Xiang Commentary (象传)**\n   > 明入地中\n   > *The Image of 明夷: 地火明夷 (earth over fire). The exemplary person approaches the multitude using darkness yet preserving clarity.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 明夷于飞，垂其翼。君子于行，三日不食。\n   > *In the wounded brightness flying, it droops its wings. The superior man on his journey does not eat for three days.*\n- **二六 (Second Six)**: 明夷，夷于左股，用拯马壮吉。\n   > *Brightness wounded — wounded in the left thigh; using a strong horse to rescue, good fortune.*\n- **三九 (Third Nine)**: 明夷于南狩，得其大首，不可疾贞。\n   > *Brightness wounded in the southern hunt — obtaining the great head; one cannot be swift, but correct.*\n- **四六 (Fourth Six)**: 入于左腹，获明夷之心，于出门庭。\n   > *Entering the left belly, obtaining the heart of the wounded brightness — going out through the gate and court.*\n- **五九 (Fifth Nine)**: 箕子之明夷，利贞。\n   > *The Viscount of Ji's wounded brightness — advantageous to be correct.*\n- **上六 (Top Six)**: 不明晦，初登于天，后入于地。\n   > *Not bright but dark — first ascending to heaven, then entering the earth.*\n\n**Symbolic Correspondences (象征对应)**\n明夷 (Brightness Hiding) corresponds to: earth (地), fire (火), light hidden (明夷), darkness (暗) — brightness concealed within.\n\n**Practice (实践)**\nIn divination, 明夷 (Brightness Hiding) advises: Hide your light when the world is dark; preserve clarity within. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 37, 家人 (Jiā Rén), is the 37th of the sixty-four symbols. It is formed by the wind over fire — 风火家人 — and embodies the principle of the household. Students of the I Ching return to 家人 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 家人：利女贞。\n> *Jia Ren: Advantage for a woman in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 家人卦：风自火出，家人。君子以言有物而行有恒。\n   > *The Tuan Commentary on 家人: Wind comes forth from fire — Jia Ren. The exemplary person speaks with substance and acts with constancy.*\n\n2. **The Xiang Commentary (象传)**\n   > 风自火出\n   > *The Image of 家人: 风火家人 (wind over fire). The exemplary person speaks with substance and acts with constancy.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 闲有家，悔亡。\n   > *Regulating the home — regret disappears.*\n- **二六 (Second Six)**: 无攸遂，在中馈，贞吉。\n   > *Not accomplishing anything — attending to the central household affairs; firm correctness yields good fortune.*\n- **三九 (Third Nine)**: 家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。\n   > *The household stern — regret, difficulty, good fortune. Wife and children laughing and joking — in the end regret.*\n- **四六 (Fourth Six)**: 富家，大吉。\n   > *Enriching the home — great good fortune.*\n- **五九 (Fifth Nine)**: 王假有家，勿恤吉。\n   > *The king reaches the home — do not worry, good fortune.*\n- **上六 (Top Six)**: 有孚威如，终吉。\n   > *Sincerity and prestige — in the end good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n家人 (The Household) corresponds to: wind (风), fire (火), home (家), household (户) — order within the family.\n\n**Practice (实践)**\nIn divination, 家人 (The Household) advises: Order the household through sincere speech and steady conduct. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 38, 睽 (Kuí), is the 38th of the sixty-four symbols. It is formed by the fire over lake — 火泽睽 — and embodies the principle of opposition. Students of the I Ching return to 睽 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 睽：小事吉。\n> *Kui: In small matters, auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 睽卦：上火下泽，睽。君子以同而异。\n   > *The Tuan Commentary on 睽: Fire above, lake below — Kui. The exemplary person unites yet preserves differences.*\n\n2. **The Xiang Commentary (象传)**\n   > 上火下泽\n   > *The Image of 睽: 火泽睽 (fire over lake). The exemplary person unites yet preserves differences.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 悔亡。\n   > *Regret disappears.*\n- **二六 (Second Six)**: 丧马勿逐自复，见恶人无咎。\n   > *Losing a horse — do not pursue, it returns of itself; seeing evil people, no blame.*\n- **三九 (Third Nine)**: 见舆曳，其牛掣，其人天且劓，无初有终。\n   > *Seeing a carriage drawn, its oxen hampered — the man has his head and nose cut; no beginning, but an end.*\n- **四六 (Fourth Six)**: 睽孤，遇元夫，交孚，厉无咎。\n   > *Alone in opposition — meeting the original man, mutual sincerity; difficulty, no blame.*\n- **五九 (Fifth Nine)**: 悔亡。\n   > *Regret disappears.*\n- **上六 (Top Six)**: 睽孤，见豕负涂，载鬼一车。\n   > *Alone in opposition — seeing a pig covered with dirt, a carriage of ghosts.*\n\n**Symbolic Correspondences (象征对应)**\n睽 (Opposition) corresponds to: fire (火), lake (泽), opposition (睽), contrariety (乖) — things out of alignment.\n\n**Practice (实践)**\nIn divination, 睽 (Opposition) advises: Find unity amid differences; avoid unnecessary conflict. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 39, 蹇 (Jiǎn), is the 39th of the sixty-four symbols. It is formed by the water over mountain — 水山蹇 — and embodies the principle of limping. Students of the I Ching return to 蹇 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 蹇：利西南，不利东北。利见大人，贞吉。\n> *Jian: Advantage in the southwest, not in the northeast. Advantage to see the great person; Uprightness is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 蹇卦：山上有水，蹇。君子以反身修德。\n   > *The Tuan Commentary on 蹇: Water upon the mountain — Jian. The exemplary person turns inward to cultivate virtue.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有水\n   > *The Image of 蹇: 水山蹇 (water over mountain). The exemplary person turns inward to cultivate virtue.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 往蹇，来誉。\n   > *Going is lame, coming is praise.*\n- **二六 (Second Six)**: 王臣蹇蹇，匪躬之故。\n   > *The king's ministers are lame — not for their own sake.*\n- **三九 (Third Nine)**: 往蹇，来反。\n   > *Going is lame, coming is the opposite.*\n- **四六 (Fourth Six)**: 往蹇，来连。\n   > *Going is lame, coming is connected.*\n- **五九 (Fifth Nine)**: 大蹇，朋来。\n   > *Great lameness — friends come.*\n- **上六 (Top Six)**: 往蹇，来硕，吉。利见大人。\n   > *Going is lame, coming is great — good fortune. Advantageous to see the great man.*\n\n**Symbolic Correspondences (象征对应)**\n蹇 (Limping) corresponds to: water (水), mountain (山), limp (蹇), halt (停) — difficult progress, must turn inward.\n\n**Practice (实践)**\nIn divination, 蹇 (Limping) advises: Turn inward when the path is blocked; cultivate virtue. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 40, 解 (Jiě), is the 40th of the sixty-four symbols. It is formed by the thunder over water — 雷水解 — and embodies the principle of release. Students of the I Ching return to 解 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 解：利西南。无所往，其来复吉。有攸往，夙吉。\n> *Jie: Advantage in the southwest. If there is nowhere to go, return is auspicious. If there is somewhere to go, early action is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 解卦：雷雨作，解。君子以赦过宥罪。\n   > *The Tuan Commentary on 解: Thunder and rain arise — Jie. The exemplary person pardons faults and forgives crimes.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷雨作\n   > *The Image of 解: 雷水解 (thunder over water). The exemplary person pardons faults and forgives crimes.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 无咎。\n   > *No blame.*\n- **二六 (Second Six)**: 田获三狐，得黄矢，贞吉。\n   > *The field yields three foxes, obtaining a yellow arrow — firm correctness yields good fortune.*\n- **三九 (Third Nine)**: 负且乘，致寇至。\n   > *Carrying and riding — this invites robbers.*\n- **四六 (Fourth Six)**: 解而拇，朋至斯孚。\n   > *Relieving the thumb — friends come, and there is sincerity.*\n- **五九 (Fifth Nine)**: 君子维有解，吉。有孚于小人。\n   > *The superior man alone has relief — good fortune. Sincerity reaches the small man.*\n- **上六 (Top Six)**: 公用射隼于高墉之上，获之，无不利。\n   > *The lord shoots the falcon from the high wall, obtaining it — nothing disadvantageous.*\n\n**Symbolic Correspondences (象征对应)**\n解 (Release) corresponds to: thunder (雷), water (水), release (解), deliver (释) — loosing and resolving tension.\n\n**Practice (实践)**\nIn divination, 解 (Release) advises: Release and forgive; loosen what has been bound too long. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 41, 损 (Sǔn), is the 41st of the sixty-four symbols. It is formed by the mountain over lake — 山泽损 — and embodies the principle of loss. Students of the I Ching return to 损 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 损：有孚，元吉，无咎，可贞。利有攸往。\n> *Sun: With sincerity, great fortune, no blame, can be upright. Advantage in having somewhere to go。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 损卦：山下有泽，损。君子以惩忿窒欲。\n   > *The Tuan Commentary on 损: A lake beneath the mountain — Sun. The exemplary person curbs anger and checks desire.*\n\n2. **The Xiang Commentary (象传)**\n   > 山下有泽\n   > *The Image of 损: 山泽损 (mountain over lake). The exemplary person curbs anger and checks desire.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 已事遄往，无咎，酌损之。\n   > *After the affair, hasten away — no blame, consider diminishing.*\n- **二六 (Second Six)**: 利贞，征凶，弗损益之。\n   > *Advantageous to be correct; going is misfortune — neither diminishment nor increase.*\n- **三九 (Third Nine)**: 三人行则损一人，一人行则得其友。\n   > *Three people walking — one is diminished; one walking finds a friend.*\n- **四六 (Fourth Six)**: 损其疾，使遄有喜，无咎。\n   > *Diminishing one's illness — to hasten, there is joy; no blame.*\n- **五九 (Fifth Nine)**: 益之，使元吉，无咎，弗损益之。\n   > *Increasing it — making it originally good fortune, no blame; neither diminishment nor increase.*\n- **上六 (Top Six)**: 弗损益之，无咎，贞吉，利有攸往。\n   > *Neither diminishing nor increasing — no blame, firm correctness yields good fortune, advantageous to have a destination.*\n\n**Symbolic Correspondences (象征对应)**\n损 (Loss) corresponds to: mountain (山), lake (泽), decrease (损), loss (失) — decreasing the lower to benefit the high.\n\n**Practice (实践)**\nIn divination, 损 (Loss) advises: Curb anger and desire; decrease the lower to gain the higher. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 42, 益 (Yì), is the 42nd of the sixty-four symbols. It is formed by the wind over thunder — 风雷益 — and embodies the principle of increase. Students of the I Ching return to 益 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 益：利有攸往，利涉大川。\n> *Yi: Advantage in having somewhere to go; advantage in crossing the great river。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 益卦：风雷益。君子以见善则迁，有过则改。\n   > *The Tuan Commentary on 益: Wind and thunder — Yi. The exemplary person moves toward what is good and corrects one's faults.*\n\n2. **The Xiang Commentary (象传)**\n   > 风雷益\n   > *The Image of 益: 风雷益 (wind over thunder). The exemplary person moves toward good and corrects faults.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 利用为大作，元吉，无咎。\n   > *Advantageous to do great works — original good fortune, no blame.*\n- **二六 (Second Six)**: 或益之十朋之龟，弗克违，永贞吉。\n   > *One may be benefited by the ten-pair tortoise — cannot be contrary; perpetual firmness yields good fortune.*\n- **三九 (Third Nine)**: 益之用凶事，无咎。有孚中行，告公用圭。\n   > *Using benefit in austere affairs — no blame. With sincerity in the middle, one announces to the lord with the jade tablet.*\n- **四六 (Fourth Six)**: 中行告公从，利用为依迁国。\n   > *In the middle, announcing to the lord who follows — advantageous to depend on this to move states.*\n- **五九 (Fifth Nine)**: 有孚惠心，勿问元吉。有孚惠我德。\n   > *Sincere, beneficent heart — do not ask, original good fortune. Sincere, beneficent my virtue.*\n- **上六 (Top Six)**: 莫益之，或击之，立心勿恒，凶。\n   > *None benefit it; one may strike it. If the heart is not constant — misfortune.*\n\n**Symbolic Correspondences (象征对应)**\n益 (Increase) corresponds to: wind (风), thunder (雷), increase (益), benefit (利) — adding to the lower from above.\n\n**Practice (实践)**\nIn divination, 益 (Increase) advises: Act swiftly when you see good; correct faults without delay. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 43, 夬 (Guài), is the 43rd of the sixty-four symbols. It is formed by the lake over heaven — 泽天夬 — and embodies the principle of breakthrough. Students of the I Ching return to 夬 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 夬：扬于王庭，孚号有厉。告自邑，不利即戎，利有攸往。\n> *Guai: Announce in the court of the king. Cry with sincerity and there is danger. Report from your own city。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 夬卦：泽上于天，夬。君子以施禄及下，居德则忌。\n   > *The Tuan Commentary on 夬: Lake above heaven — Guai. The exemplary person bestows benefits on those below; dwelling in virtue alone is despised.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽上于天\n   > *The Image of 夬: 泽天夬 (lake over heaven). The exemplary person bestows benefits on those below.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 壮于前趾，往不胜为咎。\n   > *Strong in the front toes — going, one cannot prevail; this is blame.*\n- **二六 (Second Six)**: 惕号，莫夜有戎，勿恤。\n   > *Trembling and crying — at night there may be war; do not worry.*\n- **三九 (Third Nine)**: 壮于頄，有凶。君子夬夬独行。\n   > *Strong in the cheeks — misfortune. The superior man resolute and alone.*\n- **四六 (Fourth Six)**: 臀无肤，其行次且。牵羊悔亡。\n   > *The buttocks have no skin — one's steps are halting. Leading the sheep, regret disappears.*\n- **五九 (Fifth Nine)**: 苋陆夬夬，中行无咎。\n   > *The goat resolute — in the middle way, no blame.*\n- **上六 (Top Six)**: 无号，终有凶。\n   > *No cry — in the end misfortune.*\n\n**Symbolic Correspondences (象征对应)**\n夬 (Breakthrough) corresponds to: lake (泽), heaven (天), breakthrough (夬), resolve (决) — decisive breakthrough and announcement.\n\n**Practice (实践)**\nIn divination, 夬 (Breakthrough) advises: Announce your breakthrough sincerely; bestow benefits below. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 44, 姤 (Gòu), is the 44th of the sixty-four symbols. It is formed by the heaven over wind — 天风姤 — and embodies the principle of encounter. Students of the I Ching return to 姤 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 姤：女壮，勿用取女。\n> *Gou: A woman who is strong; do not take such a woman。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 姤卦：天下有风，姤。后以施命诰四方。\n   > *The Tuan Commentary on 姤: Wind beneath heaven — Gou. The sovereign issues commands to the four quarters.*\n\n2. **The Xiang Commentary (象传)**\n   > 天下有风\n   > *The Image of 姤: 天风姤 (heaven over wind). The sovereign issues commands to the four quarters.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 系于金柅，贞吉。\n   > *Bound to the metal stopper — firm correctness yields good fortune.*\n- **二六 (Second Six)**: 包有鱼，无咎，不利宾。\n   > *There is a fish in the basket — no blame, disadvantageous as a guest.*\n- **三九 (Third Nine)**: 臀无肤，其行次且。厉，无大咎。\n   > *The buttocks have no skin — one's steps are halting. Difficulty, no great blame.*\n- **四六 (Fourth Six)**: 包无鱼，起凶。\n   > *The basket has no fish — this causes misfortune.*\n- **五九 (Fifth Nine)**: 以杞包瓜，含章，有陨自天。\n   > *Wrapping melons with the branch of the qi tree — containing beauty; falling from heaven.*\n- **上六 (Top Six)**: 姤其角，吝无咎。\n   > *Meeting its horn — regret, no blame.*\n\n**Symbolic Correspondences (象征对应)**\n姤 (Encounter) corresponds to: heaven (天), wind (风), encounter (姤), meet (遇) — unexpected meeting, caution needed.\n\n**Practice (实践)**\nIn divination, 姤 (Encounter) advises: Be cautious of unexpected encounters; guard your boundaries. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 45, 萃 (Cuì), is the 45th of the sixty-four symbols. It is formed by the lake over earth — 泽地萃 — and embodies the principle of gathering. Students of the I Ching return to 萃 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 萃：亨。王假有庙，利见大人，亨，利贞。\n> *Cui: Penetration. The king approaches the temple. Advantage to see the great person。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 萃卦：泽上于地，萃。君子以除戎器，戒不虞。\n   > *The Tuan Commentary on 萃: Lake above the earth — Cui. The exemplary person prepares weapons and guards against the unexpected.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽上于地\n   > *The Image of 萃: 泽地萃 (lake over earth). The exemplary person prepares weapons and guards against the unexpected.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 有孚不终，乃乱乃萃。若号一握为笑。\n   > *Sincerity without end — confusion and gathering. If one calls out, a handshake becomes laughter.*\n- **二六 (Second Six)**: 引吉，无咎。孚乃利用禴。\n   > *Drawing is good fortune — no blame. Sincerity, advantageous to use the spring sacrifice.*\n- **三九 (Third Nine)**: 萃如嗟如，无攸利。往无咎，小吝。\n   > *Gathering and sighing — nothing advantageous. Going, no blame, small regret.*\n- **四六 (Fourth Six)**: 大吉，无咎。\n   > *Great good fortune, no blame.*\n- **五九 (Fifth Nine)**: 萃有位，无咎。匪孚，元永贞，悔亡。\n   > *Gathering with a position — no blame. Not sincere, yet perpetually correct — regret disappears.*\n- **上六 (Top Six)**: 赍咨涕洟，无咎。\n   > *Lamenting with tears and snivel — no blame.*\n\n**Symbolic Correspondences (象征对应)**\n萃 (Gathering) corresponds to: lake (泽), earth (地), gather (萃), collect (集) — gathering together in assembly.\n\n**Practice (实践)**\nIn divination, 萃 (Gathering) advises: Gather the right people; prepare for the unexpected. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 46, 升 (Shēng), is the 46th of the sixty-four symbols. It is formed by the earth over wind — 地风升 — and embodies the principle of ascending. Students of the I Ching return to 升 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 升：元亨，用见大人，勿恤，南征吉。\n> *Sheng: Origination, Penetration. Use to see the great person. Do not mourn; going south is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 升卦：地中生木，升。君子以顺德，积小以高大。\n   > *The Tuan Commentary on 升: Wood grows from the earth — Sheng. The exemplary person follows virtue and accumulates the small to reach the high and great.*\n\n2. **The Xiang Commentary (象传)**\n   > 地中生木\n   > *The Image of 升: 地风升 (earth over wind). The exemplary person follows virtue and accumulates the small.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 允升，大吉。\n   > *Believing and ascending — great good fortune.*\n- **二六 (Second Six)**: 孚乃利用禴，无咎。\n   > *Sincerity, advantageous to use the spring sacrifice — no blame.*\n- **三九 (Third Nine)**: 升虚邑。\n   > *Ascending to the empty city.*\n- **四六 (Fourth Six)**: 王用亨于岐山，吉，无咎。\n   > *The king uses worship on Mount Qi — good fortune, no blame.*\n- **五九 (Fifth Nine)**: 贞吉，升阶。\n   > *Firm correctness yields good fortune — ascending the steps.*\n- **上六 (Top Six)**: 冥升，利于不息之贞。\n   > *Darkly ascending — advantageous for ceaseless firmness.*\n\n**Symbolic Correspondences (象征对应)**\n升 (Ascending) corresponds to: earth (地), wind (风), ascend (升), rise (升) — ascending like a tree from the earth.\n\n**Practice (实践)**\nIn divination, 升 (Ascending) advises: Ascend gradually like a tree; let virtue grow steadily. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 47, 困 (Kùn), is the 47th of the sixty-four symbols. It is formed by the lake over water — 泽水困 — and embodies the principle of exhaustion. Students of the I Ching return to 困 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 困：亨，贞，大人吉，无咎。有言不信。\n> *Kun: Penetration, Uprightness; the great person is fortunate, no blame. Words are not believed。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 困卦：泽中无水，困。君子以致命遂志。\n   > *The Tuan Commentary on 困: No water in the lake — Kun. The exemplary person gives up life to fulfill one's will.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽中无水\n   > *The Image of 困: 泽水困 (lake over water). The exemplary person gives up life to fulfill one's will.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 臀困于株木，入于幽谷，三岁不觌。\n   > *The buttocks are in want under the stump — entering the dark valley, for three years not to be seen.*\n- **二六 (Second Six)**: 困于酒食，朱绂方来，利用享祀。\n   > *In want of food and drink — the red belt is just coming; advantageous to use the sacrifice.*\n- **三九 (Third Nine)**: 困于石，据于蒺藜，入于其宫，不见其妻，凶。\n   > *In want under the stone, resting on thorn — entering his palace, not seeing his wife; misfortune.*\n- **四六 (Fourth Six)**: 来徐徐，困于金车，吝，有终。\n   > *Coming slowly — in want under the golden carriage; regret, yet an end.*\n- **五九 (Fifth Nine)**: 劓刖，困于赤绂，乃徐有说，利用祭祀。\n   > *Nose and feet cut — in want under the red belt; slowly there is release, advantageous to use the sacrifice.*\n- **上六 (Top Six)**: 困于葛藟，于臲卼，曰动悔有悔，征吉。\n   > *In want under vines, tottering — moving brings regret; going is good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n困 (Exhaustion) corresponds to: lake (泽), water (水), exhaust (困), distress (厄) — parched lake, words without water.\n\n**Practice (实践)**\nIn divination, 困 (Exhaustion) advises: In exhaustion, hold to your will even if speech fails. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 48, 井 (Jǐng), is the 48th of the sixty-four symbols. It is formed by the water over wind — 水风井 — and embodies the principle of the well. Students of the I Ching return to 井 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 井：改邑不改井，无丧无得。往来井井。\n> *Jing: Changing the city but not the well — no loss, no gain. Coming and going, the well is always a well。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 井卦：木上有水，井。君子以劳民劝相。\n   > *The Tuan Commentary on 井: Water above wood — Jing. The exemplary person toils for the people and encourages mutual aid.*\n\n2. **The Xiang Commentary (象传)**\n   > 木上有水\n   > *The Image of 井: 水风井 (water over wind). The exemplary person toils for the people and encourages mutual aid.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 井泥不食，旧井无禽。\n   > *The well is muddy and not drunk — the old well has no birds.*\n- **二六 (Second Six)**: 井谷射鲋，瓮敝漏。\n   > *The well's cleft shoots at carp — the jar is broken and leaks.*\n- **三九 (Third Nine)**: 井渫不食，为我心恻。可汲而用。\n   > *The well is cleaned and not drunk — my heart is sorry. May be drawn and used.*\n- **四六 (Fourth Six)**: 井甃，无咎。\n   > *The well is walled — no blame.*\n- **五九 (Fifth Nine)**: 井冽，寒泉食。\n   > *The well is clear — the cold spring is drunk.*\n- **上六 (Top Six)**: 井收勿幕，有孚元吉。\n   > *The well is drawn but not covered — with sincerity, original good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n井 (The Well) corresponds to: water (水), wind (风), well (井), spring (泉) — the well, source of shared water.\n\n**Practice (实践)**\nIn divination, 井 (The Well) advises: Be a source for others; ensure your wellspring never runs dry. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 49, 革 (Gé), is the 49th of the sixty-four symbols. It is formed by the lake over fire — 泽火革 — and embodies the principle of revolution. Students of the I Ching return to 革 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 革：己日乃孚，元亨利贞，悔亡。\n> *Ge: On the appointed day there will be sincerity. Origination, Penetration, Advantage, Uprightness; remorse vanishes。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 革卦：泽中有火，革。君子以治历明时。\n   > *The Tuan Commentary on 革: Fire within the lake — Ge. The exemplary person regulates the calendar and clarifies the seasons.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽中有火\n   > *The Image of 革: 泽火革 (lake over fire). The exemplary person regulates the calendar and clarifies seasons.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 巩用黄牛之革。\n   > *Bound with the yellow ox's hide.*\n- **二六 (Second Six)**: 己日乃革之，征吉，无咎。\n   > *On the已有 day, then change — going is good fortune, no blame.*\n- **三九 (Third Nine)**: 征凶，贞厉。革言三就，有孚。\n   > *Going is misfortune, firm correctness with vigilance. Speaking of change three times — with sincerity.*\n- **四六 (Fourth Six)**: 悔亡，有孚改命，吉。\n   > *Regret disappears, sincere and changing the mandate — good fortune.*\n- **五九 (Fifth Nine)**: 大人虎变，未占有孚。\n   > *The great man changes like a tiger — without divination, sincere.*\n- **上六 (Top Six)**: 君子豹变，小人革面。征凶，贞居吉。\n   > *The superior man changes like a leopard — the small man changes his face. Going is misfortune; dwelling is firm and correct, good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n革 (Revolution) corresponds to: lake (泽), fire (火), revolution (革), change (变) — radical change and renewal.\n\n**Practice (实践)**\nIn divination, 革 (Revolution) advises: Know the time for radical change; reform decisively when ripe. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 50, 鼎 (Dǐng), is the 50th of the sixty-four symbols. It is formed by the fire over wind — 火风鼎 — and embodies the principle of the cauldron. Students of the I Ching return to 鼎 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 鼎：元吉，亨。\n> *Ding: Great fortune; Penetration。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 鼎卦：木上有火，鼎。君子以正位凝命。\n   > *The Tuan Commentary on 鼎: Fire above wood — Ding. The exemplary person rectifies one's position and consolidates the mandate.*\n\n2. **The Xiang Commentary (象传)**\n   > 木上有火\n   > *The Image of 鼎: 火风鼎 (fire over wind). The exemplary person rectifies one's position and consolidates the mandate.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 鼎颠趾，利出否。\n   > *The tripod overturns — advantageous to put out the vile.*\n- **二六 (Second Six)**: 鼎有实，我仇有疾，不我能即，吉。\n   > *The tripod has substance — my enemy is ill, cannot approach me; good fortune.*\n- **三九 (Third Nine)**: 鼎耳革，其行塞，雉膏不食。\n   > *The tripod's ears change — its action is blocked; the pheasant's fat is not eaten.*\n- **四六 (Fourth Six)**: 鼎折足，覆公餗，其形渥，凶。\n   > *The tripod's legs break — spilling the duke's soup, its form disgraced; misfortune.*\n- **五九 (Fifth Nine)**: 鼎黄耳金铉，利贞。\n   > *The tripod has yellow ears and a golden crossbar — advantageous to be correct.*\n- **上六 (Top Six)**: 鼎玉铉，大吉，无不利。\n   > *The tripod has a jade crossbar — great good fortune, nothing disadvantageous.*\n\n**Symbolic Correspondences (象征对应)**\n鼎 (The Cauldron) corresponds to: fire (火), wind (风), cauldron (鼎), vessel (器) — transformation through refinement.\n\n**Practice (实践)**\nIn divination, 鼎 (The Cauldron) advises: Rectify your position; be the vessel that refines virtue. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 51, 震 (Zhèn), is the 51st of the sixty-four symbols. It is formed by the thunder over thunder — 震为雷 — and embodies the principle of thunder. Students of the I Ching return to 震 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 震：亨。震来虩虩，笑言哑哑。\n> *Zhen: Penetration. Thunder comes — fearful, then laughter and talk。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 震卦：洊雷震。君子以恐惧修省。\n   > *The Tuan Commentary on 震: Repeated thunder shakes — Zhen. The exemplary person is fearful, trembles, and cultivates self-examination.*\n\n2. **The Xiang Commentary (象传)**\n   > 洊雷震\n   > *The Image of 震: 震为雷 (thunder over thunder). The exemplary person is fearful and cultivates self-examination.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 震来虩虩，后笑言哑哑，吉。\n   > *Thunder comes — trembling; afterwards laughing and speaking freely — good fortune.*\n- **二六 (Second Six)**: 震来虩虩，后笑言哑哑，吉。\n   > *Thunder comes — trembling; afterwards laughing and speaking freely — good fortune.*\n- **三九 (Third Nine)**: 震来厉，亿丧贝，跻于九陵。\n   > *Thunder comes with severity — one loses the currency, ascending the ninth hill.*\n- **四六 (Fourth Six)**: 震遂泥。\n   > *Thunder proceeding to the mud.*\n- **五九 (Fifth Nine)**: 震往来厉，亿无丧，有事。\n   > *Thunder comes and goes with difficulty — no loss; there are affairs.*\n- **上六 (Top Six)**: 震索索，视矍矍，征凶。\n   > *Thunder trembling — looking startled; going is misfortune.*\n\n**Symbolic Correspondences (象征对应)**\n震 (Thunder) corresponds to: thunder (雷), shake (震), tremble (动), foot (足), east (东), spring (春) — thunderous shock.\n\n**Practice (实践)**\nIn divination, 震 (Thunder) advises: Meet shock with fear and trembling; then reflect and improve. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 52, 艮 (Gèn), is the 52nd of the sixty-four symbols. It is formed by the mountain over mountain — 艮为山 — and embodies the principle of resting. Students of the I Ching return to 艮 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 艮：艮其背，不获其身。行其庭，不见其人。无咎。\n> *Gen: Resting on his back, he does not obtain his body. Walking in his court, he does not see his people. No blame。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 艮卦：兼山艮。君子以思不出其位。\n   > *The Tuan Commentary on 艮: Mountains joined — Gen. The exemplary person thinks not beyond one's position.*\n\n2. **The Xiang Commentary (象传)**\n   > 兼山艮\n   > *The Image of 艮: 艮为山 (mountain over mountain). The exemplary person thinks not beyond one's position.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 艮其趾，无咎，利永贞。\n   > *Stopping at the toes — no blame, advantageous to be perpetually correct.*\n- **二六 (Second Six)**: 艮其腓，不拯其随，其心不快。\n   > *Stopping at the calves — not saving one's followers, his heart is not pleased.*\n- **三九 (Third Nine)**: 艮其限，列其夤，厉薰心。\n   > *Stopping at the waist — his back is split, difficulty as smoke to the heart.*\n- **四六 (Fourth Six)**: 艮其身，无咎。\n   > *Stopping at the body — no blame.*\n- **五九 (Fifth Nine)**: 艮其辅，言有序，悔亡。\n   > *Stopping at the jaws — speech is ordered, regret disappears.*\n- **上六 (Top Six)**: 敦艮，吉。\n   > *Sincere stopping — good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n艮 (Resting) corresponds to: mountain (山), rest (止), stop (停), hand (手), northeast (东北) — stillness and cessation.\n\n**Practice (实践)**\nIn divination, 艮 (Resting) advises: Rest where you stand; go not beyond your proper place. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 53, 渐 (Jiàn), is the 53rd of the sixty-four symbols. It is formed by the wind over mountain — 风山渐 — and embodies the principle of gradual progress. Students of the I Ching return to 渐 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 渐：女归吉，利贞。\n> *Jian: A girl's marriage is auspicious; advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 渐卦：山上有木，渐。君子以居贤德善俗。\n   > *The Tuan Commentary on 渐: Wood upon the mountain — Jian. The exemplary person dwells in worthy virtue and improves customs.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有木\n   > *The Image of 渐: 风山渐 (wind over mountain). The exemplary person dwells in worthy virtue and improves customs.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 鸿渐于干，小子厉，有言，无咎。\n   > *The swan gradually reaches the shore — the young man is in difficulty, there are words, no blame.*\n- **二六 (Second Six)**: 鸿渐于磐，饮食衎衎。\n   > *The swan gradually reaches the rock — eating and drinking contentedly.*\n- **三九 (Third Nine)**: 鸿渐于木，或得其桷。\n   > *The swan gradually reaches the wood — finding perhaps a flat branch.*\n- **四六 (Fourth Six)**: 鸿渐于陵，妇三岁不孕，终莫之胜，吉。\n   > *The swan gradually reaches the mound — the wife has not been pregnant for three years; in the end nothing prevails against her — good fortune.*\n- **五九 (Fifth Nine)**: 鸿渐于陆，其羽可用为仪，吉。\n   > *The swan gradually reaches the height — its feathers may be used as adornment — good fortune.*\n- **上六 (Top Six)**: 鸿渐于阿，其羽可用为仪，吉。\n   > *The swan gradually reaches the hill — its feathers may be used as adornment — good fortune.*\n\n**Symbolic Correspondences (象征对应)**\n渐 (Gradual Progress) corresponds to: wind (风), mountain (山), progress (渐), advance (进), tree (木) — gradual progress step by step.\n\n**Practice (实践)**\nIn divination, 渐 (Gradual Progress) advises: Advance gradually; each step prepares the next. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 54, 归妹 (Guī Mèi), is the 54th of the sixty-four symbols. It is formed by the thunder over lake — 雷泽归妹 — and embodies the principle of the maiden. Students of the I Ching return to 归妹 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 归妹：征凶，无攸利。\n> *Gui Mei: Going is fierce; nothing is advantageous。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 归妹卦：雷动泽随，归妹。君子以永终知敝。\n   > *The Tuan Commentary on 归妹: Thunder moves, lake follows — Gui Mei. The exemplary person contemplates the end and knows the decay.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷动泽随\n   > *The Image of 归妹: 雷泽归妹 (thunder over lake). The exemplary person contemplates the end and knows the decay.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 归妹以娣，跛能履，征吉。\n   > *A maid going home as a concubine — lame yet able to tread; going is good fortune.*\n- **二六 (Second Six)**: 眇能视，利幽人之贞。\n   > *One-eyed yet able to see — advantageous for the hidden man to be correct.*\n- **三九 (Third Nine)**: 归妹以须，反归以娣。\n   > *A maid going home by waiting — returning home as a concubine.*\n- **四六 (Fourth Six)**: 归妹愆期，迟归有时。\n   > *A maid going home misses her period — late homecoming has its time.*\n- **五九 (Fifth Nine)**: 帝乙归妹，其君之袂不如其娣之袂良。\n   > *The king's second sister weds — her robe is not as good as her maid's robe.*\n- **上六 (Top Six)**: 女承筐无实，士刲羊无血。\n   > *The woman carries a basket without fruit; the man shears a sheep without blood.*\n\n**Symbolic Correspondences (象征对应)**\n归妹 (The Maiden) corresponds to: thunder (雷), lake (泽), maiden (归妹), bride (妻) — the younger woman marrying.\n\n**Practice (实践)**\nIn divination, 归妹 (The Maiden) advises: Contemplate the end from the beginning; know when to hold back. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 55, 丰 (Fēng), is the 55th of the sixty-four symbols. It is formed by the thunder over fire — 雷火丰 — and embodies the principle of abundance. Students of the I Ching return to 丰 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 丰：亨，王假之。勿忧，宜日中。\n> *Feng: Penetration. The king approaches. Do not worry; be like the sun at midday。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 丰卦：雷电皆至，丰。君子以折狱致刑。\n   > *The Tuan Commentary on 丰: Both thunder and lightning arrive — Feng. The exemplary person decides lawsuits and metes out punishment.*\n\n2. **The Xiang Commentary (象传)**\n   > 雷电皆至\n   > *The Image of 丰: 雷火丰 (thunder over fire). The exemplary person decides lawsuits and metes out punishment.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 遇其配主，虽旬无咎，往有尚。\n   > *Meeting one's match — though equal, no blame; going has praise.*\n- **二六 (Second Six)**: 丰其蔀，日中见斗。遇其夷主，吉。\n   > *Abundant is the covering — at midday one sees the dipper. Meeting one's equal master — good fortune.*\n- **三九 (Third Nine)**: 丰其沛，日中见沫。折其右肱，无咎。\n   > *Abundant is the canopy — at midday one sees the small stars. Breaking one's right arm — no blame.*\n- **四六 (Fourth Six)**: 丰其蔀，日中见斗。遇其丰，吉。\n   > *Abundant is the covering — at midday one sees the dipper. Meeting abundance — good fortune.*\n- **五九 (Fifth Nine)**: 来章，有庆誉，吉。\n   > *Coming forth with brightness — there is celebration and praise — good fortune.*\n- **上六 (Top Six)**: 丰其屋，蔀其家，窥其户，阒其无人。\n   > *Abundant is his house — covered is his home; looking through the door, silent and empty.*\n\n**Symbolic Correspondences (象征对应)**\n丰 (Abundance) corresponds to: thunder (雷), fire (火), abundance (丰), fullness (盛) — fullness and the zenith of light.\n\n**Practice (实践)**\nIn divination, 丰 (Abundance) advises: Enjoy abundance while it lasts; the full moon wanes. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 56, 旅 (Lǚ), is the 56th of the sixty-four symbols. It is formed by the fire over mountain — 火山旅 — and embodies the principle of the wanderer. Students of the I Ching return to 旅 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 旅：小亨，旅贞吉。\n> *Lü: Small penetration; the wanderer, if upright, is auspicious。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 旅卦：山上有火，旅。君子以明慎用刑而不留狱。\n   > *The Tuan Commentary on 旅: Fire upon the mountain — Lü. The exemplary person is clear and cautious in punishment and does not delay judgments.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有火\n   > *The Image of 旅: 火山旅 (fire over mountain). The exemplary person is clear and cautious in punishment.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 旅琐琐，斯其所取灾。\n   > *The traveler meanly — this is how he takes calamity.*\n- **二六 (Second Six)**: 旅即次，怀其资，得童仆贞。\n   > *The traveler arrives at his lodging — his money is safe, and he gains a faithful servant.*\n- **三九 (Third Nine)**: 旅焚其次，丧其童仆，贞厉。\n   > *The traveler burns his lodging — loses his servant; firm correctness with vigilance.*\n- **四六 (Fourth Six)**: 旅于处，得其资斧，心不快。\n   > *The traveler in his dwelling — obtains his wealth and axe; his heart is not pleased.*\n- **五九 (Fifth Nine)**: 射雉，一矢亡，终以誉命。\n   > *Shooting a pheasant — one arrow is lost; in the end by praise and command.*\n- **上六 (Top Six)**: 鸟焚其巢，旅人先笑后号咷。\n   > *The bird burns its nest — the traveler first laughs, then weeps.*\n\n**Symbolic Correspondences (象征对应)**\n旅 (The Wanderer) corresponds to: fire (火), mountain (山), wander (旅), travel (行) — the lonely traveler on the road.\n\n**Practice (实践)**\nIn divination, 旅 (The Wanderer) advises: As a traveler, keep your belongings close and your heart light. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 57, 巽 (Xùn), is the 57th of the sixty-four symbols. It is formed by the wind over wind — 巽为风 — and embodies the principle of the gentle. Students of the I Ching return to 巽 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 巽：小亨，利有攸往，利见大人。\n> *Xun: Small penetration; advantage in having somewhere to go; advantage to see the great person。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 巽卦：随风巽。君子以申命行事。\n   > *The Tuan Commentary on 巽: Following the wind — Xun. The exemplary person repeats commands and carries out affairs.*\n\n2. **The Xiang Commentary (象传)**\n   > 随风巽\n   > *The Image of 巽: 巽为风 (wind over wind). The exemplary person repeats commands and carries out affairs.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 进退，利武人之贞。\n   > *Advancing and retreating — advantageous for the martial man to be correct.*\n- **二六 (Second Six)**: 直，利见大人，不习无不利。\n   > *Straight — advantageous to see the great man; by nature not by discipline, nothing disadvantageous.*\n- **三九 (Third Nine)**: 巽在床下，用史巫纷若，吉无咎。\n   > *Concealed beneath the couch — using the scribe and wizard in profusion; good fortune, no blame.*\n- **四六 (Fourth Six)**: 无咎，悔亡。\n   > *No blame — regret disappears.*\n- **五九 (Fifth Nine)**: 贞吉，悔亡，无不利。无初有终。\n   > *Firm correctness yields good fortune, regret disappears, nothing disadvantageous — no beginning, but an end.*\n- **上六 (Top Six)**: 巽在床下，丧其资斧，贞凶。\n   > *Concealed beneath the couch — losing one's wealth and axe; firm correctness with vigilance.*\n\n**Symbolic Correspondences (象征对应)**\n巽 (The Gentle) corresponds to: wind (风), gentle (巽), penetrate (入), elbow (肱), southeast (东南) — subtle penetration of wind.\n\n**Practice (实践)**\nIn divination, 巽 (The Gentle) advises: Penetrate gently like wind; repeat commands with subtlety. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 58, 兑 (Duì), is the 58th of the sixty-four symbols. It is formed by the lake over lake — 兑为泽 — and embodies the principle of joy. Students of the I Ching return to 兑 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 兑：亨，利贞。\n> *Dui: Penetration; advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 兑卦：丽泽兑。君子以朋友讲习。\n   > *The Tuan Commentary on 兑: Adjacent lakes — Dui. The exemplary person studies and practices with friends.*\n\n2. **The Xiang Commentary (象传)**\n   > 丽泽兑\n   > *The Image of 兑: 兑为泽 (lake over lake). The exemplary person studies and practices with friends.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 兑（说），无咎。\n   > *Speaking — no blame.*\n- **二六 (Second Six)**: 和兑（说），吉。\n   > *Speaking in harmony — good fortune.*\n- **三九 (Third Nine)**: 来兑（说），凶。\n   > *Coming to speak — misfortune.*\n- **四六 (Fourth Six)**: 商兑（说），咎。\n   > *Discussing — blame.*\n- **五九 (Fifth Nine)**: 贞厉。\n   > *Firm correctness with vigilance.*\n- **上六 (Top Six)**: 引兑（说）。\n   > *Drawing one to speak.*\n\n**Symbolic Correspondences (象征对应)**\n兑 (Joy) corresponds to: lake (泽), joy (兑), pleasure (悦), mouth (口), west (西) — joy and spoken delight.\n\n**Practice (实践)**\nIn divination, 兑 (Joy) advises: Speak with joy and care; words unite or divide. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 59, 涣 (Huàn), is the 59th of the sixty-four symbols. It is formed by the wind over water — 风水涣 — and embodies the principle of dispersion. Students of the I Ching return to 涣 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 涣：亨。王假有庙，利涉大川。\n> *Huan: Penetration. The king approaches the temple; advantage in crossing the great river。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 涣卦：风行水上，涣。先王以享于帝立庙。\n   > *The Tuan Commentary on 涣: Wind moves upon water — Huan. The former kings sacrificed to the Lord and established temples.*\n\n2. **The Xiang Commentary (象传)**\n   > 风行水上\n   > *The Image of 涣: 风水涣 (wind over water). The former kings sacrificed to the Lord and established temples.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 用拯马壮，吉。\n   > *Using rescue with a strong horse — good fortune.*\n- **二六 (Second Six)**: 涣奔其机，悔亡。\n   > *Dispersing to rush to his desk — regret disappears.*\n- **三九 (Third Nine)**: 涣其躬，无悔。\n   > *Dispersing his body — no regret.*\n- **四六 (Fourth Six)**: 涣其群，元吉。涣有丘，匪夷所思。\n   > *Dispersing his crowd — original good fortune. Dispersing has hills — not what one would think.*\n- **五九 (Fifth Nine)**: 涣汗其大号，涣王居，无咎。\n   > *Dispersing his great commands — dispersing the king's dwelling — no blame.*\n- **上六 (Top Six)**: 涣其血，去逖出，无咎。\n   > *Dispersing its blood — going far out — no blame.*\n\n**Symbolic Correspondences (象征对应)**\n涣 (Dispersion) corresponds to: wind (风), water (水), disperse (涣), scatter (散) — dispersing tension and binding.\n\n**Practice (实践)**\nIn divination, 涣 (Dispersion) advises: Disperse tension and boundaries; foster openness and flow. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 60, 节 (Jié), is the 60th of the sixty-four symbols. It is formed by the water over lake — 水泽节 — and embodies the principle of moderation. Students of the I Ching return to 节 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 节：亨。苦节不可贞。\n> *Jie: Penetration. Bitter moderation cannot be Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 节卦：泽上有水，节。君子以制数度，议德行。\n   > *The Tuan Commentary on 节: Water above the lake — Jie. The exemplary person establishes measures and discusses conduct.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽上有水\n   > *The Image of 节: 水泽节 (water over lake). The exemplary person establishes measures and discusses conduct.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 不出户庭，无咎。\n   > *Not going out of the door and court — no blame.*\n- **二六 (Second Six)**: 不出户庭，凶。\n   > *Not going out of the door and court — misfortune.*\n- **三九 (Third Nine)**: 不节若，则嗟若，无咎。\n   > *If not regulated, then one sighs — no blame.*\n- **四六 (Fourth Six)**: 安节，亨。\n   > *Contented regulation — prosperity.*\n- **五九 (Fifth Nine)**: 甘节，吉，往有尚。\n   > *Sweet regulation — good fortune, going has praise.*\n- **上六 (Top Six)**: 苦节不可贞。\n   > *Bitter regulation — cannot be correct.*\n\n**Symbolic Correspondences (象征对应)**\n节 (Moderation) corresponds to: water (水), lake (泽), moderation (节), measure (度) — regulated balance and measure.\n\n**Practice (实践)**\nIn divination, 节 (Moderation) advises: Set measures; find the sweet spot between excess and want. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 61, 中孚 (Zhōng Fú), is the 61st of the sixty-four symbols. It is formed by the wind over lake — 风泽中孚 — and embodies the principle of inner truth. Students of the I Ching return to 中孚 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 中孚：豚鱼吉，利涉大川，利贞。\n> *Zhong Fu: Pigs and fish are auspicious; advantage in crossing the great river; advantage in Uprightness。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 中孚卦：泽上有风，中孚。君子以议狱缓死。\n   > *The Tuan Commentary on 中孚: Wind above the lake — Zhong Fu. The exemplary person discusses lawsuits and delays the death penalty.*\n\n2. **The Xiang Commentary (象传)**\n   > 泽上有风\n   > *The Image of 中孚: 风泽中孚 (wind over lake). The exemplary person discusses lawsuits and delays the death penalty.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 虞吉，有他不燕。\n   > *Careful — good fortune; if otherwise, no peace.*\n- **二六 (Second Six)**: 鸣鹤在阴，其子和之。\n   > *The crane cries in the shade — its child responds.*\n- **三九 (Third Nine)**: 得敌，或鼓或罢，或泣或歌。\n   > *Meeting an enemy — one may drum, or stop, or weep, or sing.*\n- **四六 (Fourth Six)**: 月几望，马匹亡，无咎。\n   > *The moon nearly full — the horse loses its mate — no blame.*\n- **五九 (Fifth Nine)**: 有孚挛如，无咎。\n   > *With sincerity, drawn together — no blame.*\n- **上六 (Top Six)**: 翰音登于天，贞凶。\n   > *The cock's voice ascends to heaven — firm correctness with vigilance.*\n\n**Symbolic Correspondences (象征对应)**\n中孚 (Inner Truth) corresponds to: wind (风), lake (泽), inner truth (中孚), sincerity (诚) — inward sincerity reaching even fish.\n\n**Practice (实践)**\nIn divination, 中孚 (Inner Truth) advises: Let sincerity reach even the fishes; trust transforms hearts. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 62, 小过 (Xiǎo Guò), is the 62nd of the sixty-four symbols. It is formed by the thunder over mountain — 雷山小过 — and embodies the principle of small excess. Students of the I Ching return to 小过 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 小过：亨，利贞。可小事，不可大事。\n> *Xiao Guo: Penetration; advantage in Uprightness. Can do small things, cannot do great things。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 小过卦：山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。\n   > *The Tuan Commentary on 小过: Thunder upon the mountain — Xiao Guo. The exemplary person exceeds in reverence, in mourning exceeds in grief, and in use exceeds in frugality.*\n\n2. **The Xiang Commentary (象传)**\n   > 山上有雷\n   > *The Image of 小过: 雷山小过 (thunder over mountain). The exemplary person exceeds in reverence and grief.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 飞鸟以凶。\n   > *The bird flies low — misfortune.*\n- **二六 (Second Six)**: 过其祖，遇其妣。不及其君，遇其臣，无咎。\n   > *Passing his grandfather, meeting his grandmother — not reaching his lord, meeting his servant — no blame.*\n- **三九 (Third Nine)**: 弗过防之，从或戕之，凶。\n   > *Not guarding — one may be slain; misfortune.*\n- **四六 (Fourth Six)**: 无咎，弗过遇之。往厉必戒，勿用永贞。\n   > *No blame — not passing, one meets it. Going is dangerous, must be cautious — do not use perpetual correctness.*\n- **五九 (Fifth Nine)**: 密云不雨，自我西郊。\n   > *Dense cloud, no rain — from my western suburb.*\n- **上六 (Top Six)**: 弗遇过之，飞鸟离之，凶，是谓灾眚。\n   > *Not meeting, passing it — the bird flies away — misfortune; this means calamity.*\n\n**Symbolic Correspondences (象征对应)**\n小过 (Small Excess) corresponds to: thunder (雷), mountain (山), small excess (小过) — small matters exceed the mark.\n\n**Practice (实践)**\nIn divination, 小过 (Small Excess) advises: In small matters, exceed only in reverence and frugality. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 63, 既济 (Jì Jì), is the 63rd of the sixty-four symbols. It is formed by the water over fire — 水火既济 — and embodies the principle of already finished. Students of the I Ching return to 既济 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 既济：亨，小利贞。初吉终乱。\n> *Ji Ji: Penetration; small advantage in Uprightness. At first auspicious, finally confused。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 既济卦：水在火上，既济。君子以思患而预防之。\n   > *The Tuan Commentary on 既济: Water above fire — Ji Ji. The exemplary person thinks on calamity and prevents it.*\n\n2. **The Xiang Commentary (象传)**\n   > 水在火上\n   > *The Image of 既济: 水火既济 (water over fire). The exemplary person thinks on calamity and prevents it.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 曳其轮，濡其尾，无咎。\n   > *Dragging the wheel, wetting the tail — no blame.*\n- **二六 (Second Six)**: 妇丧其茀，勿逐，七日得。\n   > *The woman loses her ornament — do not pursue, in seven days she shall recover.*\n- **三九 (Third Nine)**: 高宗伐鬼方，三年克之，小人勿用。\n   > *Gao Zong attacks the ghost region — three years to overcome it; the small man is not to be used.*\n- **四六 (Fourth Six)**: 繻有衣袽，终日戒。\n   > *The rudder has worn clothes — all day warning.*\n- **五九 (Fifth Nine)**: 东邻杀牛，不如西邻之禴祭，实受其福。\n   > *The eastern neighbor kills an ox — not as good as the western neighbor's spring sacrifice; truly receiving its blessing.*\n- **上六 (Top Six)**: 濡其首，厉。\n   > *Wetting the head — difficulty.*\n\n**Symbolic Correspondences (象征对应)**\n既济 (Already Finished) corresponds to: water (水), fire (火), already finished (既济) — completion already past.\n\n**Practice (实践)**\nIn divination, 既济 (Already Finished) advises: After completion, guard against disorder; anticipate decay. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
        "description": "**Overview**\n\nHexagram 64, 未济 (Wèi Jì), is the 64th of the sixty-four symbols. It is formed by the fire over water — 火水未济 — and embodies the principle of not yet finished. Students of the I Ching return to 未济 again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> 未济：亨。小狐汔济，濡其尾，无攸利。\n> *Wei Ji: Penetration. The small fox nearly crosses, wets its tail — nothing advantageous。*\n\n**Classical Commentaries (经典解读)**\n\n1. **The Tuan Commentary (彖传)**\n   > 未济卦：火在水上，未济。君子以慎辨物居方。\n   > *The Tuan Commentary on 未济: Fire above water — Wei Ji. The exemplary person is careful in distinguishing things and assigning them to their places.*\n\n2. **The Xiang Commentary (象传)**\n   > 火在水上\n   > *The Image of 未济: 火水未济 (fire over water). The exemplary person is careful in distinguishing things and assigning their places.*\n\n**The Lines (爻辞)**\n\n- **初九 (Initial Nine)**: 濡其尾，吝。\n   > *Wetting the tail — regret.*\n- **二六 (Second Six)**: 曳其轮，贞吉。\n   > *Dragging the wheel — firm correctness yields good fortune.*\n- **三九 (Third Nine)**: 未济，征凶，利涉大川。\n   > *Not yet crossed — going is misfortune, advantageous to cross the great river.*\n- **四六 (Fourth Six)**: 贞吉悔亡。震用伐鬼方，三年有赏于大国。\n   > *Firm correctness yields good fortune, regret disappears. Thunder used to attack the ghost region — three years, and there is reward in the great state.*\n- **五九 (Fifth Nine)**: 贞吉，无悔。君子之光，有孚吉。\n   > *Firm correctness yields good fortune, no regret. The light of the superior man — sincere, good fortune.*\n- **上六 (Top Six)**: 有孚于饮酒，无咎。濡其首，有孚失是。\n   > *Sincerity in drinking wine — no blame. Wetting the head — sincerity loses this.*\n\n**Symbolic Correspondences (象征对应)**\n未济 (Not Yet Finished) corresponds to: fire (火), water (水), not yet finished (未济), unfinished (未) — not yet across the river.\n\n**Practice (实践)**\nIn divination, 未济 (Not Yet Finished) advises: Before completion, be cautious at every step; the fox almost slips. Carry its pattern into daily life — as reflection, timing, guidance in relationship and work."
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
