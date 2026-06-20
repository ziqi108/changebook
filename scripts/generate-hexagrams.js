// scripts/generate-hexagrams.js
// Generates full structured data for all 64 hexagrams in course-details.ts format

const fs = require('fs');
const path = require('path');
const { validators } = require('./content-validator.cjs');
const { getLines, getUse } = require('./hexagram-lines.js');

// Standard I Ching 64 hexagrams: name, pinyin, English, judgment, symbol, elements
const HEXAGRAMS = [
  { num: 1,  cn: '乾', py: 'Qián',   en: 'The Creative',    judgment: '元，亨，利，贞。',                                               en_j: 'Qian: Origination, Penetration, Advantage, Uprightness.',                                              symbol: '乾为天', inner: 'heaven over heaven' },
  { num: 2,  cn: '坤', py: 'Kūn',    en: 'The Earth',       judgment: '元，亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞，吉。', en_j: 'Kun: Origination, Penetration, and the Advantage of a mare\'s Uprightness. The superior man has somewhere to go: first he loses his way, then he finds his master. Advantage in the southwest to gain companions, in the northeast to lose them. Peaceful Uprightness brings fortune.', symbol: '坤为地', inner: 'earth over earth' },
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

// Tuan commentary (彖传) — classical Chinese text with English translation for all 64 hexagrams
const tuanMap = {
  "1": {
    "zh": "大哉乾元，万物资始，乃统天。云行雨施，品物流形。大明终始，六位时成。时乘六龙以御天。乾道变化，各正性命。保合太和，乃利贞。首出庶物，万国咸宁。",
    "en": "Great is the Qian yuan, the source of all things, governing heaven itself. Clouds move and rain descends, giving form to every being. The great light illuminates beginning and end; the six positions take shape in time. Riding the six dragons at the right moment, one guides heaven. The way of Qian transforms and evolves, each thing attaining its proper nature and destiny. Preserving the great harmony, one finds advantage and uprightness. It brings forth all things and the whole world finds peace."
  },
  "2": {
    "zh": "至哉坤元，万物资生，乃顺承天。坤厚载物，德合无疆。含弘光大，品物咸亨。牝马地类，行地无疆。柔顺利贞，君子攸行。先迷失道，后顺得常。西南得朋，乃与类行。东北丧朋，乃终有庆。安贞之吉，应地无疆。",
    "en": "Ultimate is the Kun yuan, the source of all beings born, receiving heaven in obedience. Kun is vast and carries all things, its virtue boundless as the earth. It embraces, expands, shines and illumines; all beings find penetration. The mare belongs to the nature of earth, journeying without bound across the land. Soft, yielding and upright — this is the exemplary person's way. First one loses the path, then follows and finds constancy. Gaining companions in the southwest, one walks with one's kind; losing them in the northeast, one finds joy in the end. The fortune of peaceful uprightness responds to the boundless earth."
  },
  "3": {
    "zh": "云雷，屯；君子以经纶。",
    "en": "Cloud and thunder form Tun; the exemplary person weaves the pattern of governance."
  },
  "4": {
    "zh": "山下出泉，蒙；君子以果行育德。",
    "en": "A spring emerges beneath the mountain — Meng; the exemplary person acts resolutely and cultivates virtue."
  },
  "5": {
    "zh": "云上于天，需；君子以饮食宴乐。",
    "en": "Clouds above heaven — Xu; the exemplary person feasts, drinks and enjoys leisure while waiting."
  },
  "6": {
    "zh": "天与水违行，讼；君子以作事谋始。",
    "en": "Heaven and water move in contrary directions — Song; the exemplary person plans carefully from the outset."
  },
  "7": {
    "zh": "地中有水，师；君子以容民畜众。",
    "en": "Water within the earth — Shi; the exemplary person contains the people and nourishes the multitude."
  },
  "8": {
    "zh": "地上有水，比；先王以建万国，亲诸侯。",
    "en": "Water upon the earth — Bi; the former kings established the myriad states and drew the feudal lords into closeness."
  },
  "9": {
    "zh": "风行天上，小畜；君子以懿文德。",
    "en": "Wind moves across heaven — Xiao Chu; the exemplary person refines and beautifies virtue."
  },
  "10": {
    "zh": "上天下泽，履；君子以辩上下，定民志。",
    "en": "Above is heaven, below is the lake — Lü; the exemplary person distinguishes high and low, and settles the will of the people."
  },
  "11": {
    "zh": "天地交，泰。后以财成天地之道，辅相天地之宜，以左右民。",
    "en": "Heaven and earth commune — Tai. The sovereign regulates the way of heaven and earth, assists what is appropriate, and aids the people."
  },
  "12": {
    "zh": "天地不交，否。君子以俭德辟难，不可荣以禄。",
    "en": "Heaven and earth do not commune — Pi. The exemplary person conceals virtue and avoids difficulty; one cannot be honored with rank and salary."
  },
  "13": {
    "zh": "天与火，同人。君子以类族辨物。",
    "en": "Heaven and fire — Tong Ren. The exemplary person groups clans and distinguishes things."
  },
  "14": {
    "zh": "火在天上，大有。君子以遏恶扬善，顺天休命。",
    "en": "Fire above heaven — Da You. The exemplary person restrains evil and promotes good, following heaven's benevolent mandate."
  },
  "15": {
    "zh": "地中有山，谦。君子以裒多益寡，称物平施。",
    "en": "A mountain within the earth — Qian. The exemplary person takes from surplus and adds to scarcity, weighing things and distributing fairly."
  },
  "16": {
    "zh": "雷出地奋，豫。先王以作乐崇德，殷荐之上帝，以配祖考。",
    "en": "Thunder bursts forth from the earth — Yu. The former kings created music to exalt virtue, making a grand offering to the Supreme Lord, in concert with ancestors."
  },
  "17": {
    "zh": "泽中有雷，随。君子以向晦入宴息。",
    "en": "Thunder within the lake — Sui. The exemplary person turns to evening and enters to rest."
  },
  "18": {
    "zh": "山下有风，蛊。君子以振民育德。",
    "en": "Wind beneath the mountain — Gu. The exemplary person rouses the people and cultivates virtue."
  },
  "19": {
    "zh": "泽上有地，临。君子以教思无穷，容保民无疆。",
    "en": "Earth above the lake — Lin. The exemplary person teaches with endless thought, containing and protecting the people without bound."
  },
  "20": {
    "zh": "风行地上，观。先王以省方观民设教。",
    "en": "Wind moves over the earth — Guan. The former kings inspected the regions, observed the people, and established teachings."
  },
  "21": {
    "zh": "雷电噬嗑。先王以明罚敕法。",
    "en": "Thunder and lightning — Shi He. The former kings made penalties clear and rectified the laws."
  },
  "22": {
    "zh": "山下有火，贲。君子以明庶政，无敢折狱。",
    "en": "Fire beneath the mountain — Bi. The exemplary person illumines the manifold affairs of government, but dares not decide lawsuits."
  },
  "23": {
    "zh": "山地剥。上以厚下安宅。",
    "en": "Mountain over earth — Bo. Those above enrich those below and dwell securely."
  },
  "24": {
    "zh": "地雷复。先王以至日闭关，商旅不行，后不省方。",
    "en": "Earth over thunder — Fu. The former kings closed the frontier on the shortest day; merchants and travelers did not go forth, and the sovereign did not inspect the regions."
  },
  "25": {
    "zh": "天下雷行，物与无妄。先王以茂对时育万物。",
    "en": "Thunder moves beneath heaven — Wu Wang. The former kings vigorously responded to the time and nourished the myriad beings."
  },
  "26": {
    "zh": "天在山中，大畜。君子以多识前言往行，以畜其德。",
    "en": "Heaven within the mountain — Da Chu. The exemplary person learns much from the words and deeds of the ancients to accumulate virtue."
  },
  "27": {
    "zh": "山下有雷，颐。君子以慎言语，节饮食。",
    "en": "Thunder beneath the mountain — Yi. The exemplary person is careful in speech and moderate in eating and drinking."
  },
  "28": {
    "zh": "泽无风，大过。君子以独立不惧，遁世无闷。",
    "en": "Lake without wind — Da Guo. The exemplary person stands alone without fear, withdraws from the world without resentment."
  },
  "29": {
    "zh": "水洊至，习坎。君子以常德行，习教事。",
    "en": "Water comes again and again — Xi Kan. The exemplary person preserves constant virtue and practices teaching."
  },
  "30": {
    "zh": "明两作，离。大人以继明照于四方。",
    "en": "Two lights arise — Li. The great person continues the light and illumines the four quarters."
  },
  "31": {
    "zh": "山上有泽，咸。君子以虚受人。",
    "en": "A lake upon the mountain — Xian. The exemplary person empties oneself and receives others."
  },
  "32": {
    "zh": "雷风恒。君子以立不易方。",
    "en": "Thunder and wind — Heng. The exemplary person stands firm and does not change one's direction."
  },
  "33": {
    "zh": "天下有山，遁。君子以远小人，不恶而严。",
    "en": "A mountain beneath heaven — Dun. The exemplary person keeps distant from the petty person, without hatred yet with severity."
  },
  "34": {
    "zh": "雷在天上，大壮。君子以非礼弗履。",
    "en": "Thunder upon heaven — Da Zhuang. The exemplary person does not tread where propriety does not permit."
  },
  "35": {
    "zh": "明出地上，晋。君子以自昭明德。",
    "en": "Light emerges above the earth — Jin. The exemplary person manifests one's own clear virtue."
  },
  "36": {
    "zh": "明入地中，明夷。君子以莅众，用晦而明。",
    "en": "Light enters into the earth — Ming Yi. The exemplary person approaches the multitude, using darkness yet preserving clarity."
  },
  "37": {
    "zh": "风自火出，家人。君子以言有物而行有恒。",
    "en": "Wind comes forth from fire — Jia Ren. The exemplary person speaks with substance and acts with constancy."
  },
  "38": {
    "zh": "上火下泽，睽。君子以同而异。",
    "en": "Fire above, lake below — Kui. The exemplary person unites yet preserves differences."
  },
  "39": {
    "zh": "山上有水，蹇。君子以反身修德。",
    "en": "Water upon the mountain — Jian. The exemplary person turns inward to cultivate virtue."
  },
  "40": {
    "zh": "雷雨作，解。君子以赦过宥罪。",
    "en": "Thunder and rain arise — Jie. The exemplary person pardons faults and forgives crimes."
  },
  "41": {
    "zh": "山下有泽，损。君子以惩忿窒欲。",
    "en": "A lake beneath the mountain — Sun. The exemplary person curbs anger and checks desire."
  },
  "42": {
    "zh": "风雷益。君子以见善则迁，有过则改。",
    "en": "Wind and thunder — Yi. The exemplary person moves toward what is good and corrects one's faults."
  },
  "43": {
    "zh": "泽上于天，夬。君子以施禄及下，居德则忌。",
    "en": "Lake above heaven — Guai. The exemplary person bestows benefits on those below; dwelling in virtue alone is despised."
  },
  "44": {
    "zh": "天下有风，姤。后以施命诰四方。",
    "en": "Wind beneath heaven — Gou. The sovereign issues commands to the four quarters."
  },
  "45": {
    "zh": "泽上于地，萃。君子以除戎器，戒不虞。",
    "en": "Lake above the earth — Cui. The exemplary person prepares weapons and guards against the unexpected."
  },
  "46": {
    "zh": "地中生木，升。君子以顺德，积小以高大。",
    "en": "Wood grows from the earth — Sheng. The exemplary person follows virtue and accumulates the small to reach the high and great."
  },
  "47": {
    "zh": "泽中无水，困。君子以致命遂志。",
    "en": "No water in the lake — Kun. The exemplary person gives up life to fulfill one's will."
  },
  "48": {
    "zh": "木上有水，井。君子以劳民劝相。",
    "en": "Water above wood — Jing. The exemplary person toils for the people and encourages mutual aid."
  },
  "49": {
    "zh": "泽中有火，革。君子以治历明时。",
    "en": "Fire within the lake — Ge. The exemplary person regulates the calendar and clarifies the seasons."
  },
  "50": {
    "zh": "木上有火，鼎。君子以正位凝命。",
    "en": "Fire above wood — Ding. The exemplary person rectifies one's position and consolidates the mandate."
  },
  "51": {
    "zh": "洊雷震。君子以恐惧修省。",
    "en": "Repeated thunder shakes — Zhen. The exemplary person is fearful, trembles, and cultivates self-examination."
  },
  "52": {
    "zh": "兼山艮。君子以思不出其位。",
    "en": "Mountains joined — Gen. The exemplary person thinks not beyond one's position."
  },
  "53": {
    "zh": "山上有木，渐。君子以居贤德善俗。",
    "en": "Wood upon the mountain — Jian. The exemplary person dwells in worthy virtue and improves customs."
  },
  "54": {
    "zh": "雷动泽随，归妹。君子以永终知敝。",
    "en": "Thunder moves, lake follows — Gui Mei. The exemplary person contemplates the end and knows the decay."
  },
  "55": {
    "zh": "雷电皆至，丰。君子以折狱致刑。",
    "en": "Both thunder and lightning arrive — Feng. The exemplary person decides lawsuits and metes out punishment."
  },
  "56": {
    "zh": "山上有火，旅。君子以明慎用刑而不留狱。",
    "en": "Fire upon the mountain — Lü. The exemplary person is clear and cautious in punishment and does not delay judgments."
  },
  "57": {
    "zh": "随风巽。君子以申命行事。",
    "en": "Following the wind — Xun. The exemplary person repeats commands and carries out affairs."
  },
  "58": {
    "zh": "丽泽兑。君子以朋友讲习。",
    "en": "Adjacent lakes — Dui. The exemplary person studies and practices with friends."
  },
  "59": {
    "zh": "风行水上，涣。先王以享于帝立庙。",
    "en": "Wind moves upon water — Huan. The former kings sacrificed to the Lord and established temples."
  },
  "60": {
    "zh": "泽上有水，节。君子以制数度，议德行。",
    "en": "Water above the lake — Jie. The exemplary person establishes measures and discusses conduct."
  },
  "61": {
    "zh": "泽上有风，中孚。君子以议狱缓死。",
    "en": "Wind above the lake — Zhong Fu. The exemplary person discusses lawsuits and delays the death penalty."
  },
  "62": {
    "zh": "山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。",
    "en": "Thunder upon the mountain — Xiao Guo. The exemplary person exceeds in reverence, in mourning exceeds in grief, and in use exceeds in frugality."
  },
  "63": {
    "zh": "水在火上，既济。君子以思患而预防之。",
    "en": "Water above fire — Ji Ji. The exemplary person thinks on calamity and prevents it."
  },
  "64": {
    "zh": "火在水上，未济。君子以慎辨物居方。",
    "en": "Fire above water — Wei Ji. The exemplary person is careful in distinguishing things and assigning them to their places."
  }
};

// Commentary templates (classical formulation)
const tuanTemplate = (h) => {
  const t = tuanMap[h.num];
  if (t) {
    return `**The Tuan Commentary (彖传)**\n   > ${h.cn}卦：${t.zh}\n   > *The Tuan Commentary on ${h.cn}: ${t.en}*`;
  }
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
const xiangMeaning = {
  "1": "The exemplary person vigorously strives and never ceases.",
  "2": "The exemplary person holds the earth's virtue and supports all.",
  "3": "The exemplary person weaves the pattern of governance through difficulty.",
  "4": "The exemplary person acts resolutely and cultivates virtue.",
  "5": "The exemplary person waits with dignity, feasting and enjoying leisure.",
  "6": "The exemplary person plans carefully from the very beginning.",
  "7": "The exemplary person contains the people and nourishes the multitude.",
  "8": "The exemplary person establishes states and draws the lords into closeness.",
  "9": "The exemplary person refines and beautifies virtue.",
  "10": "The exemplary person distinguishes high and low and settles the people.",
  "11": "The sovereign regulates the way of heaven and earth.",
  "12": "The exemplary person conceals virtue and avoids difficulty.",
  "13": "The exemplary person groups clans and distinguishes things.",
  "14": "The exemplary person restrains evil and promotes good.",
  "15": "The exemplary person takes from surplus and adds to scarcity.",
  "16": "The former kings created music to exalt virtue.",
  "17": "The exemplary person follows the time and rests.",
  "18": "The exemplary person rouses the people and cultivates virtue.",
  "19": "The exemplary person teaches with endless thought and protects the people.",
  "20": "The former kings inspected regions and established teachings.",
  "21": "The former kings made penalties clear and rectified laws.",
  "22": "The exemplary person illumines government but dares not decide lawsuits.",
  "23": "Those above enrich those below and dwell securely.",
  "24": "The former kings closed the frontier on the shortest day.",
  "25": "The former kings responded to time and nourished all beings.",
  "26": "The exemplary person learns much from the ancients to accumulate virtue.",
  "27": "The exemplary person is careful in speech and moderate in eating.",
  "28": "The exemplary person stands alone without fear.",
  "29": "The exemplary person preserves constant virtue and practices teaching.",
  "30": "The great person continues the light to illumine the four quarters.",
  "31": "The exemplary person empties oneself and receives others.",
  "32": "The exemplary person stands firm and does not change direction.",
  "33": "The exemplary person keeps distant from the petty person.",
  "34": "The exemplary person does not tread where propriety does not permit.",
  "35": "The exemplary person manifests one's own clear virtue.",
  "36": "The exemplary person approaches the multitude using darkness yet preserving clarity.",
  "37": "The exemplary person speaks with substance and acts with constancy.",
  "38": "The exemplary person unites yet preserves differences.",
  "39": "The exemplary person turns inward to cultivate virtue.",
  "40": "The exemplary person pardons faults and forgives crimes.",
  "41": "The exemplary person curbs anger and checks desire.",
  "42": "The exemplary person moves toward good and corrects faults.",
  "43": "The exemplary person bestows benefits on those below.",
  "44": "The sovereign issues commands to the four quarters.",
  "45": "The exemplary person prepares weapons and guards against the unexpected.",
  "46": "The exemplary person follows virtue and accumulates the small.",
  "47": "The exemplary person gives up life to fulfill one's will.",
  "48": "The exemplary person toils for the people and encourages mutual aid.",
  "49": "The exemplary person regulates the calendar and clarifies seasons.",
  "50": "The exemplary person rectifies one's position and consolidates the mandate.",
  "51": "The exemplary person is fearful and cultivates self-examination.",
  "52": "The exemplary person thinks not beyond one's position.",
  "53": "The exemplary person dwells in worthy virtue and improves customs.",
  "54": "The exemplary person contemplates the end and knows the decay.",
  "55": "The exemplary person decides lawsuits and metes out punishment.",
  "56": "The exemplary person is clear and cautious in punishment.",
  "57": "The exemplary person repeats commands and carries out affairs.",
  "58": "The exemplary person studies and practices with friends.",
  "59": "The former kings sacrificed to the Lord and established temples.",
  "60": "The exemplary person establishes measures and discusses conduct.",
  "61": "The exemplary person discusses lawsuits and delays the death penalty.",
  "62": "The exemplary person exceeds in reverence and grief.",
  "63": "The exemplary person thinks on calamity and prevents it.",
  "64": "The exemplary person is careful in distinguishing things and assigning their places."
};
const xiangTemplate = (h) => `**The Xiang Commentary (象传)**\n   > ${xiangMap[h.num] || h.symbol}\n   > *The Image of ${h.cn}: ${h.symbol} (${h.inner}). ${xiangMeaning[h.num] || 'The exemplary person reflects upon this pattern.'}*`;

// Line (爻辞) rendering based on classical I Ching text
const YAO_POSITIONS = ['初', '二', '三', '四', '五', '上'];
const YAO_POSITIONS_EN = ['Initial', 'Second', 'Third', 'Fourth', 'Fifth', 'Top'];

// Determine yáo suffix (九 or 六) for each line of hexagram `num`.
// Rules:
//   - 乾卦 (1) uses 九 for all six lines, with 用九 instruction.
//   - 坤卦 (2) uses 六 for all six lines, with 用六 instruction.
//   - Other hexagrams alternate based on yáo parity: 初/三/五 are 九, 二/四/上 are 六.
const YAO_TYPE_MAP = {
  1: '九', 2: '六', 3: '九', 4: '六', 5: '九', 6: '六',
};

function isPureYang(num) { return num === 1; }
function isPureYin(num) { return num === 2; }

const lineTemplates = (h) => {
  const linesData = getLines(h.num);
  const lines = [];

  for (let i = 0; i < 6; i++) {
    const data = linesData[i];
    const pos = YAO_POSITIONS[i];
    const posEn = YAO_POSITIONS_EN[i];

    let yaoTypeChar;
    if (isPureYang(h.num)) {
      yaoTypeChar = '九';
    } else if (isPureYin(h.num)) {
      yaoTypeChar = '六';
    } else {
      yaoTypeChar = YAO_TYPE_MAP[i + 1];
    }

    const zh = i === 0 ? `初${yaoTypeChar}` : i === 5 ? `上${yaoTypeChar}` : `${pos}${yaoTypeChar}`;
    const enYaoType = yaoTypeChar === '九' ? 'Nine' : 'Six';

    lines.push(
      `- **${zh} (${posEn} ${enYaoType})**: ${data.cn}\n   > *${data.en}*`,
    );
  }

  // Append 用九 / 用六 for the pure hexagrams
  const use = getUse(h.num);
  if (use) {
    const useLabel = h.num === 1 ? '用九 (Using Nine)' : h.num === 2 ? '用六 (Using Six)' : null;
    if (useLabel) {
      lines.push(
        `- **${useLabel}**: ${use.cn}\n   > *${use.en}*`,
      );
    }
  }

  return lines.join('\n');
};

// Symbolic correspondences — complete map for all 64 hexagrams
const symbolicMap = {
  "1": "heaven (天), metal (金), father (父), horse (马), northwest (西北), autumn (秋), white (白), creation (健)",
  "2": "earth (地), soil (土), mother (母), mare (牝马), southwest (西南), late summer (季夏), yellow (黄), reception (顺)",
  "3": "cloud (云), thunder (雷), water (水), sprout (芽), movement (动) — beginning of growth amidst difficulty",
  "4": "spring water (泉水), mountain (山), child (童), student (学生) — youthful seeking and first instruction",
  "5": "cloud (云), heaven (天), water (水), dragon (龙) — patient anticipation before action",
  "6": "heaven (天), water (水), sword (剑), debate (争) — contention between opposed forces",
  "7": "earth (地), water (水), army (师), soldiers (兵), commander (将) — disciplined collective action",
  "8": "water (水), earth (地), friend (友), companion (伴), alliance (盟) — bonding and mutual support",
  "9": "wind (风), heaven (天), cloud (云), rain (雨) — small accumulation of influence",
  "10": "heaven (天), lake (泽), tiger (虎), foot (足), step (步) — cautious treading on dangerous ground",
  "11": "earth (地), heaven (天), harmony (和), union (交), peace (平) — flourishing through communion",
  "12": "heaven (天), earth (地), barrier (障), decline (衰), isolation (隔离) — obstruction and withdrawal",
  "13": "heaven (天), fire (火), community (同人), fellowship (交) — open fellowship in the wild",
  "14": "fire (火), heaven (天), treasure (宝), wealth (富), sun (日) — great possession and abundance",
  "15": "earth (地), mountain (山), modesty (谦), humility (虚) — hidden virtue within",
  "16": "thunder (雷), earth (地), music (乐), drum (鼓), joy (豫) — enthusiasm stirring the multitude",
  "17": "lake (泽), thunder (雷), follow (随), companion (伴) — following the rhythm of time",
  "18": "mountain (山), wind (风), remedy (治), reform (革) — correcting decay from the root",
  "19": "earth (地), lake (泽), approach (临), supervision (监) — drawing near and overseeing",
  "20": "wind (风), earth (地), contemplate (观), worship (祭) — observing and being observed",
  "21": "fire (火), thunder (雷), bite (噬), chew (啮) — biting through obstruction with clarity",
  "22": "mountain (山), fire (火), adornment (饰), beauty (美) — outward adornment of form",
  "23": "mountain (山), earth (地), peel (剥), decay (衰) — stripping away to the core",
  "24": "earth (地), thunder (雷), return (复), comeback (返) — return of light after darkness",
  "25": "heaven (天), thunder (雷), innocence (妄), spontaneity (自然) — natural action without contrivance",
  "26": "mountain (山), heaven (天), accumulate (畜), store (蓄) — great accumulation of strength",
  "27": "mountain (山), thunder (雷), nourish (养), mouth (口) — nourishment of body and mind",
  "28": "lake (泽), wind (风), beam (梁), wood (木) — great excess bearing heavy weight",
  "29": "water (水), abyss (渊), danger (险), ear (耳), blood (血), north (北), winter (冬) — repeated peril",
  "30": "fire (火), light (光), radiance (明), eye (目), south (南), summer (夏) — clinging and illumination",
  "31": "lake (泽), mountain (山), sense (感), touch (触), heart (心) — mutual influence and response",
  "32": "thunder (雷), wind (风), persist (恒), endure (久) — long continuance and constancy",
  "33": "heaven (天), mountain (山), retreat (遁), withdraw (退) — timely withdrawal from the world",
  "34": "thunder (雷), heaven (天), strength (壮), power (力) — great strength in the ascendancy",
  "35": "fire (火), earth (地), advance (晋), rise (升), sun (日) — brilliant progress into the light",
  "36": "earth (地), fire (火), light hidden (明夷), darkness (暗) — brightness concealed within",
  "37": "wind (风), fire (火), home (家), household (户) — order within the family",
  "38": "fire (火), lake (泽), opposition (睽), contrariety (乖) — things out of alignment",
  "39": "water (水), mountain (山), limp (蹇), halt (停) — difficult progress, must turn inward",
  "40": "thunder (雷), water (水), release (解), deliver (释) — loosing and resolving tension",
  "41": "mountain (山), lake (泽), decrease (损), loss (失) — decreasing the lower to benefit the high",
  "42": "wind (风), thunder (雷), increase (益), benefit (利) — adding to the lower from above",
  "43": "lake (泽), heaven (天), breakthrough (夬), resolve (决) — decisive breakthrough and announcement",
  "44": "heaven (天), wind (风), encounter (姤), meet (遇) — unexpected meeting, caution needed",
  "45": "lake (泽), earth (地), gather (萃), collect (集) — gathering together in assembly",
  "46": "earth (地), wind (风), ascend (升), rise (升) — ascending like a tree from the earth",
  "47": "lake (泽), water (水), exhaust (困), distress (厄) — parched lake, words without water",
  "48": "water (水), wind (风), well (井), spring (泉) — the well, source of shared water",
  "49": "lake (泽), fire (火), revolution (革), change (变) — radical change and renewal",
  "50": "fire (火), wind (风), cauldron (鼎), vessel (器) — transformation through refinement",
  "51": "thunder (雷), shake (震), tremble (动), foot (足), east (东), spring (春) — thunderous shock",
  "52": "mountain (山), rest (止), stop (停), hand (手), northeast (东北) — stillness and cessation",
  "53": "wind (风), mountain (山), progress (渐), advance (进), tree (木) — gradual progress step by step",
  "54": "thunder (雷), lake (泽), maiden (归妹), bride (妻) — the younger woman marrying",
  "55": "thunder (雷), fire (火), abundance (丰), fullness (盛) — fullness and the zenith of light",
  "56": "fire (火), mountain (山), wander (旅), travel (行) — the lonely traveler on the road",
  "57": "wind (风), gentle (巽), penetrate (入), elbow (肱), southeast (东南) — subtle penetration of wind",
  "58": "lake (泽), joy (兑), pleasure (悦), mouth (口), west (西) — joy and spoken delight",
  "59": "wind (风), water (水), disperse (涣), scatter (散) — dispersing tension and binding",
  "60": "water (水), lake (泽), moderation (节), measure (度) — regulated balance and measure",
  "61": "wind (风), lake (泽), inner truth (中孚), sincerity (诚) — inward sincerity reaching even fish",
  "62": "thunder (雷), mountain (山), small excess (小过) — small matters exceed the mark",
  "63": "water (水), fire (火), already finished (既济) — completion already past",
  "64": "fire (火), water (水), not yet finished (未济), unfinished (未) — not yet across the river"
};

// Practice guidance for each hexagram
const practiceMap = {
  "1": "Embody creative initiative and strength; lead with virtue and vision.",
  "2": "Embody receptive support and patience; nurture rather than command.",
  "3": "In new beginnings, weave order through persistent effort.",
  "4": "Approach learning with sincere humility and resolution.",
  "5": "Wait with composure; timing favors the prepared.",
  "6": "Plan from the start; avoid contention when possible.",
  "7": "Organize collective effort with disciplined leadership.",
  "8": "Build alliances through sincerity and mutual respect.",
  "9": "Accumulate small deeds of influence and refinement.",
  "10": "Tread carefully amid danger; uphold ritual and propriety.",
  "11": "Cherish harmony and the open exchange of ideas.",
  "12": "In times of obstruction, conceal virtue and wait.",
  "13": "Seek fellowship in the open; be transparent and inclusive.",
  "14": "Use abundance to benefit others; restrain evil, promote good.",
  "15": "Cultivate hidden virtue; humility draws fortune.",
  "16": "Stir enthusiasm in others through music and shared vision.",
  "17": "Follow the right people and the natural rhythm of time.",
  "18": "Address decay at its source; reform with vigor.",
  "19": "Approach others with teaching and protective care.",
  "20": "Observe deeply; be mindful of how you appear to others.",
  "21": "Bite through obstacles with clarity and decisive action.",
  "22": "Adorn outward forms, but keep inner substance paramount.",
  "23": "When stripping away, nourish the foundation before rebuilding.",
  "24": "After return, nurture the seed of new light patiently.",
  "25": "Act naturally without contrivance; remain innocent in intent.",
  "26": "Accumulate knowledge and strength for the great task ahead.",
  "27": "Nourish your own body and mind before nourishing others.",
  "28": "Stand alone in your truth even when the weight is heavy.",
  "29": "In repeated peril, keep your heart constant and sincere.",
  "30": "Cling to what is right and bright; shine without burning.",
  "31": "Empty yourself to truly sense and respond to others.",
  "32": "Persevere in your direction; let constancy mark your path.",
  "33": "Know when to retreat; withdraw before exhaustion.",
  "34": "Use strength with restraint; never violate propriety.",
  "35": "Advance openly; let your clear virtue shine forth.",
  "36": "Hide your light when the world is dark; preserve clarity within.",
  "37": "Order the household through sincere speech and steady conduct.",
  "38": "Find unity amid differences; avoid unnecessary conflict.",
  "39": "Turn inward when the path is blocked; cultivate virtue.",
  "40": "Release and forgive; loosen what has been bound too long.",
  "41": "Curb anger and desire; decrease the lower to gain the higher.",
  "42": "Act swiftly when you see good; correct faults without delay.",
  "43": "Announce your breakthrough sincerely; bestow benefits below.",
  "44": "Be cautious of unexpected encounters; guard your boundaries.",
  "45": "Gather the right people; prepare for the unexpected.",
  "46": "Ascend gradually like a tree; let virtue grow steadily.",
  "47": "In exhaustion, hold to your will even if speech fails.",
  "48": "Be a source for others; ensure your wellspring never runs dry.",
  "49": "Know the time for radical change; reform decisively when ripe.",
  "50": "Rectify your position; be the vessel that refines virtue.",
  "51": "Meet shock with fear and trembling; then reflect and improve.",
  "52": "Rest where you stand; go not beyond your proper place.",
  "53": "Advance gradually; each step prepares the next.",
  "54": "Contemplate the end from the beginning; know when to hold back.",
  "55": "Enjoy abundance while it lasts; the full moon wanes.",
  "56": "As a traveler, keep your belongings close and your heart light.",
  "57": "Penetrate gently like wind; repeat commands with subtlety.",
  "58": "Speak with joy and care; words unite or divide.",
  "59": "Disperse tension and boundaries; foster openness and flow.",
  "60": "Set measures; find the sweet spot between excess and want.",
  "61": "Let sincerity reach even the fishes; trust transforms hearts.",
  "62": "In small matters, exceed only in reverence and frugality.",
  "63": "After completion, guard against disorder; anticipate decay.",
  "64": "Before completion, be cautious at every step; the fox almost slips."
};

const symbolic = (h) => {
  const sym = symbolicMap[h.num] || `the inner trigram and outer trigram of ${h.cn}`;
  const practice = practiceMap[h.num] || 'Reflect on the pattern and let it guide your conduct.';
  return `**Symbolic Correspondences (象征对应)**\n${h.cn} (${h.en}) corresponds to: ${sym}.\n\n**Practice (实践)**\nIn divination, ${h.cn} (${h.en}) advises: ${practice} Carry its pattern into daily life — as reflection, timing, guidance in relationship and work.`;
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
