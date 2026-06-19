// scripts/generate-hexagrams.js
// Generates full structured data for all 64 hexagrams in course-details.ts format

const fs = require('fs');
const path = require('path');
const { validators } = require('./content-validator.cjs');

// Standard I Ching 64 hexagrams: name, pinyin, English, judgment, symbol, elements
const HEXAGRAMS = [
  { num: 1,  cn: '乾', py: 'Qián',   en: 'The Creative',    judgment: '元，亨，利，贞。',                                               en_j: 'Qian: Origination, Penetration, Advantage, Uprightness.',                                              symbol: '乾为天', inner: 'heaven over heaven' },
  { num: 2,  cn: '坤', py: 'Kūn',    en: 'The Earth',       judgment: '元，亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞，吉。', en_j: 'Kun: Origination, Penetration, and the Advantage of a mare\'s Uprightness. Peaceful Uprightness brings fortune.', symbol: '坤为地', inner: 'earth over earth' },
  { num: 3,  cn: '屯', py: 'Zhūn',   en: 'Initial Difficulty', judgment: '元亨利贞，勿用有攸往，利建侯。',                                       en_j: 'Zhun: Origination, Penetration, Advantage, Uprightness. Do not act; it is advantageous to establish helpers.', symbol: '水雷屯', inner: 'water over thunder' },
  { num: 4,  cn: '蒙', py: 'Méng',   en: 'Youthful Folly',  judgment: '亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',                 en_j: 'Meng: Penetration. Not I seek the youthful, the youthful seeks me. The first oracle instructs; repeated questioning profanes.', symbol: '山水蒙', inner: 'spring below mountain' },
  { num: 5,  cn: '需', py: 'Xū',     en: 'Waiting',         judgment: '有孚，光亨，贞吉。',                                               en_j: 'Xu: With sincerity, radiant penetration; uprightness is auspicious.',                                    symbol: '水天需', inner: 'water over heaven' },
  { num: 6,  cn: '讼', py: 'Sòng',   en: 'Conflict',        judgment: '有孚窒惕，中吉，终凶。利见大人，不利涉大川。',                           en_j: 'Song: With sincerity, one stands in awe. Fortune in the middle, misfortune at the end. Advantage to see the great person.', symbol: '天水讼', inner: 'heaven over water' },
  { num: 7,  cn: '师', py: 'Shī',    en: 'The Army',        judgment: '贞，丈人吉，无咎。',                                               en_j: 'Shi: Uprightness. A mature person of fortune; no blame.',                                               symbol: '地水师', inner: 'earth over water' },
  { num: 8,  cn: '比', py: 'Bǐ',     en: 'Closeness',       judgment: '吉。原筮，元永贞，无咎。',                                           en_j: 'Bi: Auspicious. Let the oracle decide: eternal uprightness without blame.',                               symbol: '水地比', inner: 'water over earth' },
  { num: 9,  cn: '小畜', py: 'Xiǎo Xù', en: 'Small Taming',    judgment: '亨。密云不雨，自我西郊。',                                           en_j: 'Xiao Chu: Penetration. Dense clouds without rain come from our western suburb.',                          symbol: '风天小畜', inner: 'wind over heaven' },
  { num: 10, cn: '履', py: 'Lǚ',     en: 'Treading',        judgment: '履虎尾，不咥人，亨。',                                               en_j: 'Lü: Treading on a tiger\'s tail without being bitten — penetration.',                                    symbol: '天泽履', inner: 'heaven over lake' },
  { num: 11, cn: '泰', py: 'Tài',    en: 'Flourishing',     judgment: '小往大来，吉亨。',                                                   en_j: 'Tai: The small departs, the great comes — auspicious and penetrating.',                                  symbol: '地天泰', inner: 'earth over heaven' },
  { num: 12, cn: '否', py: 'Pǐ',     en: 'Decline',         judgment: '否之匪人，不利君子贞。大往小来。',                                     en_j: 'Pi: Obstruction is not the time for humans. Not advantageous for the upright person. The great departs, the small comes.', symbol: '天地否', inner: 'heaven over earth' },
  { num: 13, cn: '同人', py: 'Tóng Rén', en: 'Fellowship',     judgment: '同人于野，亨。利涉大川，利君子贞。',                                   en_j: 'Tong Ren: Fellowship in the wilds — penetration. Advantage to cross the great river; advantageous for the upright person.', symbol: '天火同人', inner: 'heaven over fire' },
  { num: 14, cn: '大有', py: 'Dàyǒu', en: 'Great Possession',judgment: '元亨。',                                                           en_j: 'Da You: Origination and Penetration.',                                                                 symbol: '火天大有', inner: 'fire over heaven' },
  { num: 15, cn: '谦', py: 'Qiān',   en: 'Modesty',         judgment: '亨，君子有终。',                                                     en_j: 'Qian: Penetration; the exemplary person has an end.',                                                    symbol: '地山谦', inner: 'earth over mountain' },
  { num: 16, cn: '豫', py: 'Yù',     en: 'Enthusiasm',      judgment: '利建侯行师。',                                                       en_j: 'Yu: Advantage in establishing helpers and mobilizing the army.',                                           symbol: '雷地豫', inner: 'thunder over earth' },
  { num: 17, cn: '随', py: 'Suí',    en: 'Following',       judgment: '元亨利贞，无咎。',                                                   en_j: 'Sui: Origination, Penetration, Advantage, Uprightness — no blame.',                                      symbol: '泽雷随', inner: 'lake over thunder' },
  { num: 18, cn: '蛊', py: 'Gǔ',     en: 'Remedying',       judgment: '元亨。利涉大川。先甲三日，后甲三日。',                                 en_j: 'Gu: Origination, Penetration. Advantage to cross the great river. Three days before and three days after.', symbol: '山风蛊', inner: 'mountain over wind' },
  { num: 19, cn: '临', py: 'Lín',    en: 'Approach',       judgment: '元亨利贞。至于八月有凶。',                                           en_j: 'Lin: Origination, Penetration, Advantage, Uprightness. By the eighth month there will be misfortune.',     symbol: '地泽临', inner: 'earth over lake' },
  { num: 20, cn: '观', py: 'Guān',   en: 'Contemplation',   judgment: '盥而不荐，有孚颙若。',                                               en_j: 'Guan: Washing the hands but not yet offering — there is sincere respect.',                               symbol: '风地观', inner: 'wind over earth' },
  { num: 21, cn: '噬嗑', py: 'Shì Hé', en: 'Biting Through', judgment: '亨。利用狱。',                                                     en_j: 'Shi He: Penetration. Advantage in administering justice.',                                                symbol: '火雷噬嗑', inner: 'fire over thunder' },
  { num: 22, cn: '贲', py: 'Bì',     en: 'Adornment',       judgment: '亨。小利有攸往。',                                                   en_j: 'Bi: Penetration. Small advantage in having somewhere to go.',                                              symbol: '山火贲', inner: 'mountain over fire' },
  { num: 23, cn: '剥', py: 'Bō',     en: 'Stripping',       judgment: '不利有攸往。',                                                       en_j: 'Bo: Not advantageous to have somewhere to go.',                                                            symbol: '山地剥', inner: 'mountain over earth' },
  { num: 24, cn: '复', py: 'Fù',     en: 'Return',         judgment: '亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。',                 en_j: 'Fu: Penetration. Going out and coming in without injury; friends arrive without blame. Return to the Way.', symbol: '地雷复', inner: 'earth over thunder' },
  { num: 25, cn: '无妄', py: 'Wú Wàng', en: 'Innocence',    judgment: '元亨利贞。其正有眚，不利有攸往。',                                     en_j: 'Wu Wang: Origination, Penetration, Advantage, Uprightness. If one is not as he should be, there will be disaster.', symbol: '天雷无妄', inner: 'heaven over thunder' },
  { num: 26, cn: '大畜', py: 'Dà Xù', en: 'Great Taming',   judgment: '利贞。不家食，吉，利涉大川。',                                         en_j: 'Da Chu: Advantage in Uprightness. Not eating at home is auspicious; advantage in crossing the great river.', symbol: '山天大畜', inner: 'mountain over heaven' },
  { num: 27, cn: '颐', py: 'Yí',     en: 'Nourishment',     judgment: '贞吉。观颐，自求口实。',                                             en_j: 'Yi: Uprightness is auspicious. Observe nourishment and seek the food for oneself.',                        symbol: '山雷颐', inner: 'mountain over thunder' },
  { num: 28, cn: '大过', py: 'Dà Guò', en: 'Great Excess',   judgment: '栋桡，利有攸往，亨。',                                               en_j: 'Da Guo: The beam is bent. Advantage in having somewhere to go; penetration.',                              symbol: '泽风大过', inner: 'lake over wind' },
  { num: 29, cn: '坎', py: 'Kǎn',    en: 'The Abyss',       judgment: '习坎，有孚，维心亨。',                                             en_j: 'Kan: Repeated Abyss. With sincerity, the heart is preserved in penetration.',                            symbol: '坎为水', inner: 'water over water' },
  { num: 30, cn: '离', py: 'Lí',     en: 'Radiance',        judgment: '利贞，亨。畜牝牛，吉。',                                               en_j: 'Li: Advantage in Uprightness; Penetration. Nourishing a cow is auspicious.',                                symbol: '离为火', inner: 'fire over fire' },
  { num: 31, cn: '咸', py: 'Xián',   en: 'Sensing',         judgment: '亨，利贞，取女吉。',                                                 en_j: 'Xian: Penetration, Advantage, Uprightness. Taking a woman is auspicious.',                                symbol: '泽山咸', inner: 'lake over mountain' },
  { num: 32, cn: '恒', py: 'Héng',   en: 'Persistence',     judgment: '亨，无咎，利贞，利有攸往。',                                         en_j: 'Heng: Penetration, no blame, advantage in Uprightness, advantage in having somewhere to go.',              symbol: '雷风恒', inner: 'thunder over wind' },
  { num: 33, cn: '遁', py: 'Dùn',    en: 'Retreat',         judgment: '亨，小利贞。',                                                       en_j: 'Dun: Penetration, small advantage in Uprightness.',                                                        symbol: '天山遁', inner: 'heaven over mountain' },
  { num: 34, cn: '大壮', py: 'Dà Zhuàng', en: 'Great Strength', judgment: '利贞。',                                                         en_j: 'Da Zhuang: Advantage in Uprightness.',                                                                     symbol: '雷天大壮', inner: 'thunder over heaven' },
  { num: 35, cn: '晋', py: 'Jìn',    en: 'Prosperity',      judgment: '康侯用锡马蕃庶，昼日三接。',                                           en_j: 'Jin: The prosperous lord uses the gift of horses, received three times in one day.',                       symbol: '火地晋', inner: 'fire over earth' },
  { num: 36, cn: '明夷', py: 'Míng Yí', en: 'Brightness Hiding', judgment: '利艰贞。',                                                         en_j: 'Ming Yi: Advantage in difficult Uprightness.',                                                             symbol: '地火明夷', inner: 'earth over fire' },
  { num: 37, cn: '家人', py: 'Jiā Rén', en: 'The Household',  judgment: '利女贞。',                                                             en_j: 'Jia Ren: Advantage for a woman in Uprightness.',                                                           symbol: '风火家人', inner: 'wind over fire' },
  { num: 38, cn: '睽', py: 'Kuí',    en: 'Opposition',      judgment: '小事吉。',                                                             en_j: 'Kui: In small matters, auspicious.',                                                                       symbol: '火泽睽', inner: 'fire over lake' },
  { num: 39, cn: '蹇', py: 'Jiǎn',   en: 'Limping',         judgment: '利西南，不利东北。利见大人，贞吉。',                                   en_j: 'Jian: Advantage in the southwest, not in the northeast. Advantage to see the great person; Uprightness is auspicious.', symbol: '水山蹇', inner: 'water over mountain' },
  { num: 40, cn: '解', py: 'Jiě',    en: 'Release',         judgment: '利西南。无所往，其来复吉。有攸往，夙吉。',                             en_j: 'Jie: Advantage in the southwest. If there is nowhere to go, return is auspicious. If there is somewhere to go, early action is auspicious.', symbol: '雷水解', inner: 'thunder over water' },
  { num: 41, cn: '损', py: 'Sǔn',    en: 'Loss',            judgment: '有孚，元吉，无咎，可贞。利有攸往。',                                 en_j: 'Sun: With sincerity, great fortune, no blame, can be upright. Advantage in having somewhere to go.',         symbol: '山泽损', inner: 'mountain over lake' },
  { num: 42, cn: '益', py: 'Yì',     en: 'Increase',        judgment: '利有攸往，利涉大川。',                                               en_j: 'Yi: Advantage in having somewhere to go; advantage in crossing the great river.',                           symbol: '风雷益', inner: 'wind over thunder' },
  { num: 43, cn: '夬', py: 'Guài',   en: 'Breakthrough',    judgment: '扬于王庭，孚号有厉。告自邑，不利即戎，利有攸往。',                     en_j: 'Guai: Announce in the court of the king. Cry with sincerity and there is danger. Report from your own city.', symbol: '泽天夬', inner: 'lake over heaven' },
  { num: 44, cn: '姤', py: 'Gòu',    en: 'Encounter',       judgment: '女壮，勿用取女。',                                                   en_j: 'Gou: A woman who is strong; do not take such a woman.',                                                    symbol: '天风姤', inner: 'heaven over wind' },
  { num: 45, cn: '萃', py: 'Cuì',    en: 'Gathering',       judgment: '亨。王假有庙，利见大人，亨，利贞。',                                 en_j: 'Cui: Penetration. The king approaches the temple. Advantage to see the great person.',                      symbol: '泽地萃', inner: 'lake over earth' },
  { num: 46, cn: '升', py: 'Shēng',  en: 'Ascending',      judgment: '元亨，用见大人，勿恤，南征吉。',                                     en_j: 'Sheng: Origination, Penetration. Use to see the great person. Do not mourn; going south is auspicious.',   symbol: '地风升', inner: 'earth over wind' },
  { num: 47, cn: '困', py: 'Kùn',    en: 'Exhaustion',      judgment: '亨，贞，大人吉，无咎。有言不信。',                                   en_j: 'Kun: Penetration, Uprightness; the great person is fortunate, no blame. Words are not believed.',            symbol: '泽水困', inner: 'lake over water' },
  { num: 48, cn: '井', py: 'Jǐng',   en: 'The Well',        judgment: '改邑不改井，无丧无得。往来井井。',                                   en_j: 'Jing: Changing the city but not the well — no loss, no gain. Coming and going, the well is always a well.', symbol: '水风井', inner: 'water over wind' },
  { num: 49, cn: '革', py: 'Gé',     en: 'Revolution',      judgment: '己日乃孚，元亨利贞，悔亡。',                                         en_j: 'Ge: On the appointed day there will be sincerity. Origination, Penetration, Advantage, Uprightness; remorse vanishes.', symbol: '泽火革', inner: 'lake over fire' },
  { num: 50, cn: '鼎', py: 'Dǐng',   en: 'The Cauldron',    judgment: '元吉，亨。',                                                         en_j: 'Ding: Great fortune; Penetration.',                                                                      symbol: '火风鼎', inner: 'fire over wind' },
  { num: 51, cn: '震', py: 'Zhèn',   en: 'Thunder',         judgment: '亨。震来虩虩，笑言哑哑。',                                           en_j: 'Zhen: Penetration. Thunder comes — fearful, then laughter and talk.',                                     symbol: '震为雷', inner: 'thunder over thunder' },
  { num: 52, cn: '艮', py: 'Gèn',    en: 'Resting',         judgment: '艮其背，不获其身。行其庭，不见其人。无咎。',                           en_j: 'Gen: Resting on his back, he does not obtain his body. Walking in his court, he does not see his people. No blame.', symbol: '艮为山', inner: 'mountain over mountain' },
  { num: 53, cn: '渐', py: 'Jiàn',   en: 'Gradual Progress',judgment: '女归吉，利贞。',                                                     en_j: 'Jian: A girl\'s marriage is auspicious; advantage in Uprightness.',                                        symbol: '风山渐', inner: 'wind over mountain' },
  { num: 54, cn: '归妹', py: 'Guī Mèi', en: 'The Maiden',    judgment: '征凶，无攸利。',                                                     en_j: 'Gui Mei: Going is fierce; nothing is advantageous.',                                                      symbol: '雷泽归妹', inner: 'thunder over lake' },
  { num: 55, cn: '丰', py: 'Fēng',   en: 'Abundance',       judgment: '亨，王假之。勿忧，宜日中。',                                         en_j: 'Feng: Penetration. The king approaches. Do not worry; be like the sun at midday.',                          symbol: '雷火丰', inner: 'thunder over fire' },
  { num: 56, cn: '旅', py: 'Lǚ',     en: 'The Wanderer',    judgment: '小亨，旅贞吉。',                                                     en_j: 'Lü: Small penetration; the wanderer, if upright, is auspicious.',                                          symbol: '火山旅', inner: 'fire over mountain' },
  { num: 57, cn: '巽', py: 'Xùn',    en: 'The Gentle',      judgment: '小亨，利有攸往，利见大人。',                                         en_j: 'Xun: Small penetration; advantage in having somewhere to go; advantage to see the great person.',          symbol: '巽为风', inner: 'wind over wind' },
  { num: 58, cn: '兑', py: 'Duì',    en: 'Joy',             judgment: '亨，利贞。',                                                         en_j: 'Dui: Penetration; advantage in Uprightness.',                                                            symbol: '兑为泽', inner: 'lake over lake' },
  { num: 59, cn: '涣', py: 'Huàn',   en: 'Dispersion',      judgment: '亨。王假有庙，利涉大川。',                                           en_j: 'Huan: Penetration. The king approaches the temple; advantage in crossing the great river.',                symbol: '风水涣', inner: 'wind over water' },
  { num: 60, cn: '节', py: 'Jié',    en: 'Moderation',      judgment: '亨。苦节不可贞。',                                                   en_j: 'Jie: Penetration. Bitter moderation cannot be Uprightness.',                                              symbol: '水泽节', inner: 'water over lake' },
  { num: 61, cn: '中孚', py: 'Zhōng Fú', en: 'Inner Truth',  judgment: '豚鱼吉，利涉大川，利贞。',                                           en_j: 'Zhong Fu: Pigs and fish are auspicious; advantage in crossing the great river; advantage in Uprightness.', symbol: '风泽中孚', inner: 'wind over lake' },
  { num: 62, cn: '小过', py: 'Xiǎo Guò', en: 'Small Excess',  judgment: '亨，利贞。可小事，不可大事。',                                       en_j: 'Xiao Guo: Penetration; advantage in Uprightness. Can do small things, cannot do great things.',             symbol: '雷山小过', inner: 'thunder over mountain' },
  { num: 63, cn: '既济', py: 'Jì Jì', en: 'Already Finished', judgment: '亨，小利贞。初吉终乱。',                                            en_j: 'Ji Ji: Penetration; small advantage in Uprightness. At first auspicious, finally confused.',                symbol: '水火既济', inner: 'water over fire' },
  { num: 64, cn: '未济', py: 'Wèi Jì', en: 'Not Yet Finished', judgment: '亨。小狐汔济，濡其尾，无攸利。',                                     en_j: 'Wei Ji: Penetration. The small fox nearly crosses, wets its tail — nothing advantageous.',                   symbol: '火水未济', inner: 'fire over water' },
];

// Tuan & Xiang commentary templates (classical formulation)
const tuanTemplate = (h) => {
  const enBody = h.en_j.replace(/\*[^*]+\*/g, '');
  const firstClauseRaw = enBody.split(/[。！？]/)[0].replace(/[.!?]+$/g, '').trim();
  const firstClauseClean = validators.judgmentClause(firstClauseRaw);
  const enComment = validators.commentaryBody(enBody.replace(/\n/g, ' '));
  return `**The Tuan Commentary (彖传)**\n   > ${h.cn}卦：${firstClauseClean}\n   > *The Tuan Commentary on ${h.cn}: ${enComment}*`;
};

const xiangMap = {
  1: '天行健',
  2: '地势坤',
  3: '云雷屯',
  4: '山水蒙',
  5: '水天需',
  6: '天水讼',
  7: '地水师',
  8: '水地比',
  9: '风天小畜',
  10: '天泽履',
  11: '地天泰',
  12: '天地否',
  13: '天火同人',
  14: '火天大有',
  15: '地山谦',
  16: '雷地豫',
  17: '泽雷随',
  18: '山风蛊',
  19: '地泽临',
  20: '风地观',
  21: '火雷噬嗑',
  22: '山火贲',
  23: '山地剥',
  24: '地雷复',
  25: '天雷无妄',
  26: '山天大畜',
  27: '山雷颐',
  28: '泽风大过',
  29: '水洊至',
  30: '明两作',
  31: '山上有泽',
  32: '雷风恒',
  33: '天下有山',
  34: '雷天大壮',
  35: '明出地上',
  36: '明入地中',
  37: '风自火出',
  38: '上火下泽',
  39: '山上有水',
  40: '雷雨作',
  41: '山下有泽',
  42: '风雷益',
  43: '泽上于天',
  44: '天下有风',
  45: '泽上于地',
  46: '地中生木',
  47: '泽中无水',
  48: '木上有水',
  49: '泽中有火',
  50: '木上有火',
  51: '洊雷震',
  52: '兼山艮',
  53: '山上有木',
  54: '雷动泽随',
  55: '雷电皆至',
  56: '山上有火',
  57: '随风巽',
  58: '丽泽兑',
  59: '风行水上',
  60: '泽上有水',
  61: '泽上有风',
  62: '山上有雷',
  63: '水在火上',
  64: '火在水上',
};
const xiangTemplate = (h) => `**The Xiang Commentary (象传)**\n   > ${xiangMap[h.num] || h.symbol}\n   > *The Image of ${h.cn}: ${h.symbol} (${h.inner}). The exemplary person reflects upon this pattern.*`;

// Generic line structure for each hexagram (based on position, yin/yang)
const lineTemplates = (h) => {
  // Distinguish yang hexagrams (1,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64)
  const yangHexs = new Set([1,3,4,5,6,7,8,11,12,13,14,25,26,27,28,32,33,34,39,40,41,42,43,44,45,46,47,48,51,52,55,56,57,58,59,60,61,62,63,64]);
  const isYang = yangHexs.has(h.num) || h.num === 9 || h.num === 10 || h.num === 15 || h.num === 16 || h.num === 17 || h.num === 18 || h.num === 19 || h.num === 20 || h.num === 21 || h.num === 22 || h.num === 23 || h.num === 24 || h.num === 29 || h.num === 30 || h.num === 31 || h.num === 35 || h.num === 36 || h.num === 37 || h.num === 38 || h.num === 49 || h.num === 50 || h.num === 53 || h.num === 54;

  const positions = ['Initial', 'Second', 'Third', 'Fourth', 'Fifth', 'Top'];
  const suffixes = ['初', '二', '三', '四', '五', '上'];
  const lines = [];

  const nature = isYang ? 'firm and active' : 'yielding and receptive';
  const element = h.cn;

  for (let i = 0; i < 6; i++) {
    const pos = positions[i];
    const suf = suffixes[i];
    const isYangLine = isYang ? (i === 0 || i === 2 || i === 4) : (i === 1 || i === 3 || i === 5);
    const lineType = isYangLine ? 'yang' : 'yin';
    const zh = (i === 5 ? `上${lineType === 'yang' ? '九' : '六'}` : `${lineType === 'yang' ? suffixes[i].replace('初','初') : suffixes[i].replace('初','初')}${lineType === 'yang' ? '九' : '六'}`);
    // Build line-specific insight
    let advice = '';
    if (i === 0) advice = 'the first stirring — small, hidden beginnings require caution and patience.';
    else if (i === 1) advice = 'emergence and visibility — the line begins to act in the world.';
    else if (i === 2) advice = 'the lower trigram\'s summit — poised between advancement and reflection.';
    else if (i === 3) advice = 'the threshold — a crucial moment of transition from lower to upper trigram.';
    else if (i === 4) advice = 'approaching the heights — influence grows, but humility is required.';
    else advice = 'the summit of the hexagram — extreme position warns of reversal.';

    lines.push(`- **${zh} (${pos} ${lineType === 'yang' ? 'Nine' : 'Six'})**: The ${lineType} line at ${pos.toLowerCase()} position of ${element}. *In the context of ${h.en}: ${advice}*`);
  }

  // Add 用九 / 用六 for pure hexagrams
  if ([1,2,29,30,51,52,57,58,63,64].includes(h.num)) {
    const use = [1,51,57].includes(h.num) ? '用九 (Using Nine)' : [2,52,58].includes(h.num) ? '用六 (Using Six)' : null;
    if (use) {
      lines.push(`- **${use}**: The hidden instruction of the pure ${element} hexagram — transcending the fixed polarity to grasp the living spirit of ${h.en.toLowerCase()}.`);
    }
  }

  return lines.join('\n');
};

// Symbolic correspondences generator
const symbolic = (h) => {
  const map = {
    1: 'heaven (天), metal (金), father (父), horse (马), northwest (西北), autumn (秋)',
    2: 'earth (地), soil (土), mother (母), mare (牝马), southwest (西南), late summer (季夏)',
    29: 'water (水), liquid (液), ear (耳), blood (血), north (北), winter (冬)',
    30: 'fire (火), flame (焰), eye (目), brightness (明), south (南), summer (夏)',
    51: 'thunder (雷), movement (动), foot (足), east (东), spring (春)',
    52: 'mountain (山), stillness (止), hand (手), northeast (东北)',
    57: 'wind (风), wood (木), penetration (入), elbow (肱), southeast (东南)',
    58: 'lake (泽), marsh (沼), mouth (口), west (西)',
  };
  const basic = map[h.num] || `the inner trigram and outer trigram of ${h.cn}, whose virtue ${h.en.toLowerCase()} manifests through the interplay of yin and yang`;
  return `**Symbolic Correspondences (象征对应)**\n${h.cn} (${h.en}) corresponds to: ${basic}.\n\n**Practice (实践)**\nIn divination, ${h.cn} (${h.en}) advises reading the moment through the lens of ${h.en.toLowerCase()}. Carry its pattern into daily life — whether as reflection, timing, or guidance in relationship and work — and let its classical wisdom speak to your present question.`;
};

// Generate full description for a hexagram
const buildLesson = (h) => {
  const rawJ = h.en_j.trim();
  const judgment = validators.judgmentClause(rawJ);
  const enClean = validators.hexEnTitle(h.en);
  const linesSection = lineTemplates(h);
  return `**Overview**\n\nHexagram ${h.num}, ${h.cn} (${h.py}), is the ${ordinal(h.num)} of the sixty-four symbols. It is formed by the ${h.inner} — ${h.symbol} — and embodies the principle of ${enClean.toLowerCase()}. Students of the I Ching return to ${h.cn} again and again, for its pattern illumines both personal conduct and the dynamics of situations.\n\n**The Judgment (卦辞)**\n> ${h.cn}：${h.judgment}\n> *${judgment}*\n\n**Classical Commentaries (经典解读)**\n\n1. ${tuanTemplate(h)}\n\n2. ${xiangTemplate(h)}\n\n**The Lines (爻辞)**\n\n${linesSection}\n\n${symbolic(h)}`;
};

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Build the chapters array
const chapters = HEXAGRAMS.map((h) => {
  const enTitle = validators.hexEnTitle(h.en);
  return {
    id: `hex-${String(h.num).padStart(2, '0')}`,
    title: `Hexagram ${h.num} · ${h.cn} (${h.py}) — ${enTitle}`,
    lessons: [
      {
        id: `hex-${String(h.num).padStart(2, '0')}-1`,
        title: `Hexagram ${h.num} · ${h.cn} (${h.py}) — ${enTitle} (${h.symbol})`,
        duration: h.num === 1 || h.num === 2 ? '120 min' : '90 min',
        description: buildLesson(h),
      },
    ],
  };
});

// Assemble final output
const output = `export type Lesson = {
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
    chapters: ${JSON.stringify(chapters, null, 2)},
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
`;

const outPath = path.join(__dirname, '..', 'lib', 'course-details.ts');
fs.writeFileSync(outPath, output, 'utf8');

// Log summary
console.log(`Generated ${chapters.length} hexagram chapters`);
console.log(`Hexagrams: ${chapters.map(c => c.id).join(', ')}`);
console.log(`Wrote to: ${outPath}`);
console.log(`File size: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
