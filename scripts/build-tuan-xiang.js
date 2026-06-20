// Build new content for tuanMap and symbolicMap to be inserted into generate-hexagrams.js
const fs = require('fs');
const path = require('path');

const tuanMap = {
  1: { zh: '大哉乾元，万物资始，乃统天。云行雨施，品物流形。大明终始，六位时成。时乘六龙以御天。乾道变化，各正性命。保合太和，乃利贞。首出庶物，万国咸宁。',
       en: 'Great is the Qian yuan, the source of all things, governing heaven itself. Clouds move and rain descends, giving form to every being. The great light illuminates beginning and end; the six positions take shape in time. Riding the six dragons at the right moment, one guides heaven. The way of Qian transforms and evolves, each thing attaining its proper nature and destiny. Preserving the great harmony, one finds advantage and uprightness. It brings forth all things and the whole world finds peace.' },
  2: { zh: '至哉坤元，万物资生，乃顺承天。坤厚载物，德合无疆。含弘光大，品物咸亨。牝马地类，行地无疆。柔顺利贞，君子攸行。先迷失道，后顺得常。西南得朋，乃与类行。东北丧朋，乃终有庆。安贞之吉，应地无疆。',
       en: 'Ultimate is the Kun yuan, the source of all beings born, receiving heaven in obedience. Kun is vast and carries all things, its virtue boundless as the earth. It embraces, expands, shines and illumines; all beings find penetration. The mare belongs to the nature of earth, journeying without bound across the land. Soft, yielding and upright — this is the exemplary person\'s way. First one loses the path, then follows and finds constancy. Gaining companions in the southwest, one walks with one\'s kind; losing them in the northeast, one finds joy in the end. The fortune of peaceful uprightness responds to the boundless earth.' },
  3: { zh: '云雷，屯；君子以经纶。',
       en: 'Cloud and thunder form Tun; the exemplary person weaves the pattern of governance.' },
  4: { zh: '山下出泉，蒙；君子以果行育德。',
       en: 'A spring emerges beneath the mountain — Meng; the exemplary person acts resolutely and cultivates virtue.' },
  5: { zh: '云上于天，需；君子以饮食宴乐。',
       en: 'Clouds above heaven — Xu; the exemplary person feasts, drinks and enjoys leisure while waiting.' },
  6: { zh: '天与水违行，讼；君子以作事谋始。',
       en: 'Heaven and water move in contrary directions — Song; the exemplary person plans carefully from the outset.' },
  7: { zh: '地中有水，师；君子以容民畜众。',
       en: 'Water within the earth — Shi; the exemplary person contains the people and nourishes the multitude.' },
  8: { zh: '地上有水，比；先王以建万国，亲诸侯。',
       en: 'Water upon the earth — Bi; the former kings established the myriad states and drew the feudal lords into closeness.' },
  9: { zh: '风行天上，小畜；君子以懿文德。',
       en: 'Wind moves across heaven — Xiao Chu; the exemplary person refines and beautifies virtue.' },
  10: { zh: '上天下泽，履；君子以辩上下，定民志。',
       en: 'Above is heaven, below is the lake — Lü; the exemplary person distinguishes high and low, and settles the will of the people.' },
  11: { zh: '天地交，泰。后以财成天地之道，辅相天地之宜，以左右民。',
       en: 'Heaven and earth commune — Tai. The sovereign regulates the way of heaven and earth, assists what is appropriate, and aids the people.' },
  12: { zh: '天地不交，否。君子以俭德辟难，不可荣以禄。',
       en: 'Heaven and earth do not commune — Pi. The exemplary person conceals virtue and avoids difficulty; one cannot be honored with rank and salary.' },
  13: { zh: '天与火，同人。君子以类族辨物。',
       en: 'Heaven and fire — Tong Ren. The exemplary person groups clans and distinguishes things.' },
  14: { zh: '火在天上，大有。君子以遏恶扬善，顺天休命。',
       en: 'Fire above heaven — Da You. The exemplary person restrains evil and promotes good, following heaven\'s benevolent mandate.' },
  15: { zh: '地中有山，谦。君子以裒多益寡，称物平施。',
       en: 'A mountain within the earth — Qian. The exemplary person takes from surplus and adds to scarcity, weighing things and distributing fairly.' },
  16: { zh: '雷出地奋，豫。先王以作乐崇德，殷荐之上帝，以配祖考。',
       en: 'Thunder bursts forth from the earth — Yu. The former kings created music to exalt virtue, making a grand offering to the Supreme Lord, in concert with ancestors.' },
  17: { zh: '泽中有雷，随。君子以向晦入宴息。',
       en: 'Thunder within the lake — Sui. The exemplary person turns to evening and enters to rest.' },
  18: { zh: '山下有风，蛊。君子以振民育德。',
       en: 'Wind beneath the mountain — Gu. The exemplary person rouses the people and cultivates virtue.' },
  19: { zh: '泽上有地，临。君子以教思无穷，容保民无疆。',
       en: 'Earth above the lake — Lin. The exemplary person teaches with endless thought, containing and protecting the people without bound.' },
  20: { zh: '风行地上，观。先王以省方观民设教。',
       en: 'Wind moves over the earth — Guan. The former kings inspected the regions, observed the people, and established teachings.' },
  21: { zh: '雷电噬嗑。先王以明罚敕法。',
       en: 'Thunder and lightning — Shi He. The former kings made penalties clear and rectified the laws.' },
  22: { zh: '山下有火，贲。君子以明庶政，无敢折狱。',
       en: 'Fire beneath the mountain — Bi. The exemplary person illumines the manifold affairs of government, but dares not decide lawsuits.' },
  23: { zh: '山地剥。上以厚下安宅。',
       en: 'Mountain over earth — Bo. Those above enrich those below and dwell securely.' },
  24: { zh: '地雷复。先王以至日闭关，商旅不行，后不省方。',
       en: 'Earth over thunder — Fu. The former kings closed the frontier on the shortest day; merchants and travelers did not go forth, and the sovereign did not inspect the regions.' },
  25: { zh: '天下雷行，物与无妄。先王以茂对时育万物。',
       en: 'Thunder moves beneath heaven — Wu Wang. The former kings vigorously responded to the time and nourished the myriad beings.' },
  26: { zh: '天在山中，大畜。君子以多识前言往行，以畜其德。',
       en: 'Heaven within the mountain — Da Chu. The exemplary person learns much from the words and deeds of the ancients to accumulate virtue.' },
  27: { zh: '山下有雷，颐。君子以慎言语，节饮食。',
       en: 'Thunder beneath the mountain — Yi. The exemplary person is careful in speech and moderate in eating and drinking.' },
  28: { zh: '泽无风，大过。君子以独立不惧，遁世无闷。',
       en: 'Lake without wind — Da Guo. The exemplary person stands alone without fear, withdraws from the world without resentment.' },
  29: { zh: '水洊至，习坎。君子以常德行，习教事。',
       en: 'Water comes again and again — Xi Kan. The exemplary person preserves constant virtue and practices teaching.' },
  30: { zh: '明两作，离。大人以继明照于四方。',
       en: 'Two lights arise — Li. The great person continues the light and illumines the four quarters.' },
  31: { zh: '山上有泽，咸。君子以虚受人。',
       en: 'A lake upon the mountain — Xian. The exemplary person empties oneself and receives others.' },
  32: { zh: '雷风恒。君子以立不易方。',
       en: 'Thunder and wind — Heng. The exemplary person stands firm and does not change one\'s direction.' },
  33: { zh: '天下有山，遁。君子以远小人，不恶而严。',
       en: 'A mountain beneath heaven — Dun. The exemplary person keeps distant from the petty person, without hatred yet with severity.' },
  34: { zh: '雷在天上，大壮。君子以非礼弗履。',
       en: 'Thunder upon heaven — Da Zhuang. The exemplary person does not tread where propriety does not permit.' },
  35: { zh: '明出地上，晋。君子以自昭明德。',
       en: 'Light emerges above the earth — Jin. The exemplary person manifests one\'s own clear virtue.' },
  36: { zh: '明入地中，明夷。君子以莅众，用晦而明。',
       en: 'Light enters into the earth — Ming Yi. The exemplary person approaches the multitude, using darkness yet preserving clarity.' },
  37: { zh: '风自火出，家人。君子以言有物而行有恒。',
       en: 'Wind comes forth from fire — Jia Ren. The exemplary person speaks with substance and acts with constancy.' },
  38: { zh: '上火下泽，睽。君子以同而异。',
       en: 'Fire above, lake below — Kui. The exemplary person unites yet preserves differences.' },
  39: { zh: '山上有水，蹇。君子以反身修德。',
       en: 'Water upon the mountain — Jian. The exemplary person turns inward to cultivate virtue.' },
  40: { zh: '雷雨作，解。君子以赦过宥罪。',
       en: 'Thunder and rain arise — Jie. The exemplary person pardons faults and forgives crimes.' },
  41: { zh: '山下有泽，损。君子以惩忿窒欲。',
       en: 'A lake beneath the mountain — Sun. The exemplary person curbs anger and checks desire.' },
  42: { zh: '风雷益。君子以见善则迁，有过则改。',
       en: 'Wind and thunder — Yi. The exemplary person moves toward what is good and corrects one\'s faults.' },
  43: { zh: '泽上于天，夬。君子以施禄及下，居德则忌。',
       en: 'Lake above heaven — Guai. The exemplary person bestows benefits on those below; dwelling in virtue alone is despised.' },
  44: { zh: '天下有风，姤。后以施命诰四方。',
       en: 'Wind beneath heaven — Gou. The sovereign issues commands to the four quarters.' },
  45: { zh: '泽上于地，萃。君子以除戎器，戒不虞。',
       en: 'Lake above the earth — Cui. The exemplary person prepares weapons and guards against the unexpected.' },
  46: { zh: '地中生木，升。君子以顺德，积小以高大。',
       en: 'Wood grows from the earth — Sheng. The exemplary person follows virtue and accumulates the small to reach the high and great.' },
  47: { zh: '泽中无水，困。君子以致命遂志。',
       en: 'No water in the lake — Kun. The exemplary person gives up life to fulfill one\'s will.' },
  48: { zh: '木上有水，井。君子以劳民劝相。',
       en: 'Water above wood — Jing. The exemplary person toils for the people and encourages mutual aid.' },
  49: { zh: '泽中有火，革。君子以治历明时。',
       en: 'Fire within the lake — Ge. The exemplary person regulates the calendar and clarifies the seasons.' },
  50: { zh: '木上有火，鼎。君子以正位凝命。',
       en: 'Fire above wood — Ding. The exemplary person rectifies one\'s position and consolidates the mandate.' },
  51: { zh: '洊雷震。君子以恐惧修省。',
       en: 'Repeated thunder shakes — Zhen. The exemplary person is fearful, trembles, and cultivates self-examination.' },
  52: { zh: '兼山艮。君子以思不出其位。',
       en: 'Mountains joined — Gen. The exemplary person thinks not beyond one\'s position.' },
  53: { zh: '山上有木，渐。君子以居贤德善俗。',
       en: 'Wood upon the mountain — Jian. The exemplary person dwells in worthy virtue and improves customs.' },
  54: { zh: '雷动泽随，归妹。君子以永终知敝。',
       en: 'Thunder moves, lake follows — Gui Mei. The exemplary person contemplates the end and knows the decay.' },
  55: { zh: '雷电皆至，丰。君子以折狱致刑。',
       en: 'Both thunder and lightning arrive — Feng. The exemplary person decides lawsuits and metes out punishment.' },
  56: { zh: '山上有火，旅。君子以明慎用刑而不留狱。',
       en: 'Fire upon the mountain — Lü. The exemplary person is clear and cautious in punishment and does not delay judgments.' },
  57: { zh: '随风巽。君子以申命行事。',
       en: 'Following the wind — Xun. The exemplary person repeats commands and carries out affairs.' },
  58: { zh: '丽泽兑。君子以朋友讲习。',
       en: 'Adjacent lakes — Dui. The exemplary person studies and practices with friends.' },
  59: { zh: '风行水上，涣。先王以享于帝立庙。',
       en: 'Wind moves upon water — Huan. The former kings sacrificed to the Lord and established temples.' },
  60: { zh: '泽上有水，节。君子以制数度，议德行。',
       en: 'Water above the lake — Jie. The exemplary person establishes measures and discusses conduct.' },
  61: { zh: '泽上有风，中孚。君子以议狱缓死。',
       en: 'Wind above the lake — Zhong Fu. The exemplary person discusses lawsuits and delays the death penalty.' },
  62: { zh: '山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。',
       en: 'Thunder upon the mountain — Xiao Guo. The exemplary person exceeds in reverence, in mourning exceeds in grief, and in use exceeds in frugality.' },
  63: { zh: '水在火上，既济。君子以思患而预防之。',
       en: 'Water above fire — Ji Ji. The exemplary person thinks on calamity and prevents it.' },
  64: { zh: '火在水上，未济。君子以慎辨物居方。',
       en: 'Fire above water — Wei Ji. The exemplary person is careful in distinguishing things and assigning them to their places.' },
};

const symbolicMap = {
  1: 'heaven (天), metal (金), father (父), horse (马), northwest (西北), autumn (秋), white (白), creation (健)',
  2: 'earth (地), soil (土), mother (母), mare (牝马), southwest (西南), late summer (季夏), yellow (黄), reception (顺)',
  3: 'cloud (云), thunder (雷), water (水), sprout (芽), movement (动), spring (春) — beginning of growth amidst difficulty',
  4: 'spring water (泉水), mountain (山), child (童), student (学生), wood (木) — youthful seeking and first instruction',
  5: 'cloud (云), heaven (天), water (水), dragon (龙), waiting (等待), timing (时机) — patient anticipation before action',
  6: 'heaven (天), water (水), sword (剑), debate (争), warrior (士) — contention between opposed forces',
  7: 'earth (地), water (水), army (师), soldiers (兵), commander (将), camp (营) — disciplined collective action',
  8: 'water (水), earth (地), friend (友), companion (伴), alliance (盟), worship (祭) — bonding and mutual support',
  9: 'wind (风), heaven (天), cloud (云), rain (雨), herd (群), gathering (聚) — small accumulation of influence',
  10: 'heaven (天), lake (泽), tiger (虎), foot (足), step (步), ritual (礼) — cautious treading on dangerous ground',
  11: 'earth (地), heaven (天), harmony (和), union (交), prosperity (盛), peace (平) — flourishing through communion',
  12: 'heaven (天), earth (地), barrier (障), decline (衰), darkness (暗), withdrawal (退) — obstruction and isolation',
  13: 'heaven (天), fire (火), community (同人), fellowship (交), hunter (猎), battle (战) — open fellowship in the wild',
  14: 'fire (火), heaven (天), treasure (宝), wealth (富), sun (日), brilliance (光) — great possession and abundance',
  15: 'earth (地), mountain (山), modesty (谦), humility (虚), grain (谷), underground (地下) — hidden virtue within',
  16: 'thunder (雷), earth (地), music (乐), drum (鼓), joy (豫), festival (祭) — enthusiasm stirring the multitude',
  17: 'lake (泽), thunder (雷), follow (随), companion (伴), evening (昏), rest (息) — following the rhythm of time',
  18: 'mountain (山), wind (风), remedy (治), reform (革), father (父), son (子) — correcting decay from the root',
  19: 'earth (地), lake (泽), approach (临), visit (访), supervision (监), earth (土) — drawing near and overseeing',
  20: 'wind (风), earth (地), contemplate (观), watch (察), worship (祭), bell (钟) — observing and being observed',
  21: 'fire (火), thunder (雷), bite (噬), chew (啮), yolk (黄), justice (法) — biting through obstruction with clarity',
  22: 'mountain (山), fire (火), adornment (饰), decoration (装), beetle (甲), beauty (美) — outward adornment of form',
  23: 'mountain (山), earth (地), peel (剥), decay (衰), house (屋), collapse (崩) — stripping away to the core',
  24: 'earth (地), thunder (雷), return (复), comeback (返), seed (种), sunrise (日出) — return of light after darkness',
  25: 'heaven (天), thunder (雷), innocence (妄), spontaneity (自然), ox (牛), field (田) — natural action without contrivance',
  26: 'mountain (山), heaven (天), accumulate (畜), store (蓄), ox (牛), wagon (车) — great accumulation of strength',
  27: 'mountain (山), thunder (雷), nourish (养), feed (喂), mouth (口), jaw (颚) — nourishment of body and mind',
  28: 'lake (泽), wind (风), beam (梁), wood (木), decline (朽), boat (舟) — great excess bearing heavy weight',
  29: 'water (水), water (水), abyss (渊), danger (险), ear (耳), blood (血), north (北), winter (冬) — repeated peril and depth',
  30: 'fire (火), fire (火), light (光), radiance (明), eye (目), sun (日), south (南), summer (夏) — clinging and illumination',
  31: 'lake (泽), mountain (山), sense (感), touch (触), mouth (口), heart (心) — mutual influence and response',
  32: 'thunder (雷), wind (风), persist (恒), endure (久), road (路), wood (木) — long continuance and constancy',
  33: 'heaven (天), mountain (山), retreat (遁), withdraw (退), scholar (士), deer (鹿) — timely withdrawal from the world',
  34: 'thunder (雷), heaven (天), strength (壮), power (力), thigh (股), road (路) — great strength in the ascendancy',
  35: 'fire (火), earth (地), advance (晋), rise (升), sun (日), morning (朝) — brilliant progress into the light',
  36: 'earth (地), fire (火), light hidden (明夷), darkness (暗), sun (日), bird (鸟) — brightness concealed within',
  37: 'wind (风), fire (火), home (家), household (户), woman (女), fire (火) — order within the family',
  38: 'fire (火), lake (泽), opposition (睽), contrariety (乖), eyes (目), heart (心) — things out of alignment',
  39: 'water (水), mountain (山), limp (蹇), halt (停), foot (足), mountain (山) — difficult progress, must turn inward',
  40: 'thunder (雷), water (水), release (解), deliver (释), hand (手), rain (雨) — loosing and resolving tension',
  41: 'mountain (山), lake (泽), decrease (损), loss (失), vessel (器), sacrifice (祭) — decreasing the lower to benefit the high',
  42: 'wind (风), thunder (雷), increase (益), benefit (利), wind (风), thunder (雷) — adding to the lower from above',
  43: 'lake (泽), heaven (天), breakthrough (夬), resolve (决), sheep (羊), joy (悦) — decisive breakthrough and announcement',
  44: 'heaven (天), wind (风), encounter (姤), meet (遇), woman (女), wind (风) — unexpected meeting, caution needed',
  45: 'lake (泽), earth (地), gather (萃), collect (集), crowd (众), temple (庙) — gathering together in assembly',
  46: 'earth (地), wind (风), ascend (升), rise (升), wood (木), tree (树) — ascending like a tree from the earth',
  47: 'lake (泽), water (水), exhaust (困), distress (厄), mouth (口), speech (言) — parched lake, words without water',
  48: 'water (水), wind (风), well (井), spring (泉), wood (木), rope (绳) — the well, source of shared water',
  49: 'lake (泽), fire (火), revolution (革), change (变), skin (皮), fire (火) — radical change and renewal',
  50: 'fire (火), wind (风), cauldron (鼎), vessel (器), wood (木), fire (火) — transformation through refinement',
  51: 'thunder (雷), thunder (雷), shake (震), tremble (动), foot (足), road (路), east (东), spring (春) — thunderous shock and vigilance',
  52: 'mountain (山), mountain (山), rest (止), stop (停), hand (手), finger (指), northeast (东北) — stillness and cessation',
  53: 'wind (风), mountain (山), progress (渐), advance (进), tree (木), wood (木) — gradual progress step by step',
  54: 'thunder (雷), lake (泽), maiden (归妹), bride (妻), woman (女), thunder (雷) — the younger woman marrying',
  55: 'thunder (雷), fire (火), abundance (丰), fullness (盛), sun (日), moon (月) — fullness and the zenith of light',
  56: 'fire (火), mountain (山), wander (旅), travel (行), fire (火), mountain (山) — the lonely traveler on the road',
  57: 'wind (风), wind (风), gentle (巽), penetrate (入), elbow (肱), wood (木), southeast (东南) — the subtle penetration of wind',
  58: 'lake (泽), lake (泽), joy (兑), pleasure (悦), mouth (口), tongue (舌), west (西) — joy and spoken delight',
  59: 'wind (风), water (水), disperse (涣), scatter (散), wind (风), water (水) — dispersing tension and binding',
  60: 'water (水), lake (泽), moderation (节), measure (度), bamboo (竹), water (水) — regulated balance and measure',
  61: 'wind (风), lake (泽), inner truth (中孚), sincerity (诚), pig (豚), fish (鱼) — inward sincerity reaching even fish',
  62: 'thunder (雷), mountain (山), small excess (小过), over-pass (过), bird (鸟), mountain (山) — small matters exceed the mark',
  63: 'water (水), fire (火), already finished (既济), complete (成), water (水), fire (火) — completion already past',
  64: 'fire (火), water (水), not yet finished (未济), unfinished (未), fox (狐), tail (尾) — not yet across the river',
};

const lines = fs.readFileSync(path.join(__dirname, 'generate-hexagrams.js'), 'utf8').split(/\r?\n/);

const outLines = [];
let i = 0;
let state = 'start';
while (i < lines.length) {
  const line = lines[i];
  
  // Detect start of old tuanTemplate section
  if (state === 'start' && line.trim().startsWith('// Tuan & Xiang commentary templates')) {
    // Insert tuanMap and new tuanTemplate
    outLines.push('// Tuan commentary (彖传) — classical Chinese text with English translation for all 64 hexagrams');
    outLines.push('const tuanMap = ' + JSON.stringify(tuanMap, null, 2).replace(/"([^"]+)":/g, '$1:') + ';');
    outLines.push('');
    outLines.push('// Tuan & Xiang commentary templates (classical formulation)');
    outLines.push('const tuanTemplate = (h) => {');
    outLines.push('  const t = tuanMap[h.num];');
    outLines.push('  if (t) {');
    outLines.push('    return `**The Tuan Commentary (彖传)**\\n   > ${h.cn}卦：${t.zh}\\n   > *The Tuan Commentary on ${h.cn}: ${t.en}*`;');
    outLines.push('  }');
    outLines.push('  const enBody = h.en_j.replace(/\\*[^*]+\\*/g, \'\');');
    outLines.push('  const firstClauseRaw = enBody.split(/[。！？]/)[0].replace(/[.!?]+$/g, \'\').trim();');
    outLines.push('  const firstClauseClean = validators.judgmentClause(firstClauseRaw);');
    outLines.push('  const enComment = validators.commentaryBody(enBody.replace(/\\n/g, \' \'));');
    outLines.push('  return `**The Tuan Commentary (彖传)**\\n   > ${h.cn}卦：${firstClauseClean}\\n   > *The Tuan Commentary on ${h.cn}: ${enComment}*`;');
    outLines.push('};');
    // Skip the old tuanTemplate body until we hit the xiangMap block
    state = 'skip-tuan';
    i++;
    while (i < lines.length && !lines[i].trim().startsWith('const xiangMap')) {
      i++;
    }
    // i now points to "const xiangMap"
    state = 'keep-xiang';
    continue;
  }
  
  // Replace xiangTemplate line
  if (state === 'keep-xiang' && line.trim().startsWith('const xiangTemplate')) {
    outLines.push('const xiangMeaning = {');
    outLines.push('  1: \'The exemplary person vigorously strives and never ceases.\',');
    outLines.push('  2: \'The exemplary person holds the earth\'s virtue and supports all.\',');
    outLines.push('  3: \'The exemplary person weaves the pattern of governance through difficulty.\',');
    outLines.push('  4: \'The exemplary person acts resolutely and cultivates virtue.\',');
    outLines.push('  5: \'The exemplary person waits with dignity, feasting and enjoying leisure.\',');
    outLines.push('  6: \'The exemplary person plans carefully from the very beginning.\',');
    outLines.push('  7: \'The exemplary person contains the people and nourishes the multitude.\',');
    outLines.push('  8: \'The exemplary person establishes states and draws the lords into closeness.\',');
    outLines.push('  9: \'The exemplary person refines and beautifies virtue.\',');
    outLines.push('  10: \'The exemplary person distinguishes high and low and settles the people.\',');
    outLines.push('  11: \'The sovereign regulates the way of heaven and earth.\',');
    outLines.push('  12: \'The exemplary person conceals virtue and avoids difficulty.\',');
    outLines.push('  13: \'The exemplary person groups clans and distinguishes things.\',');
    outLines.push('  14: \'The exemplary person restrains evil and promotes good.\',');
    outLines.push('  15: \'The exemplary person takes from surplus and adds to scarcity.\',');
    outLines.push('  16: \'The former kings created music to exalt virtue.\',');
    outLines.push('  17: \'The exemplary person follows the time and rests.\',');
    outLines.push('  18: \'The exemplary person rouses the people and cultivates virtue.\',');
    outLines.push('  19: \'The exemplary person teaches with endless thought and protects the people.\',');
    outLines.push('  20: \'The former kings inspected regions and established teachings.\',');
    outLines.push('  21: \'The former kings made penalties clear and rectified laws.\',');
    outLines.push('  22: \'The exemplary person illumines government but dares not decide lawsuits.\',');
    outLines.push('  23: \'Those above enrich those below and dwell securely.\',');
    outLines.push('  24: \'The former kings closed the frontier on the shortest day.\',');
    outLines.push('  25: \'The former kings responded to time and nourished all beings.\',');
    outLines.push('  26: \'The exemplary person learns much from the ancients to accumulate virtue.\',');
    outLines.push('  27: \'The exemplary person is careful in speech and moderate in eating.\',');
    outLines.push('  28: \'The exemplary person stands alone without fear.\',');
    outLines.push('  29: \'The exemplary person preserves constant virtue and practices teaching.\',');
    outLines.push('  30: \'The great person continues the light to illumine the four quarters.\',');
    outLines.push('  31: \'The exemplary person empties oneself and receives others.\',');
    outLines.push('  32: \'The exemplary person stands firm and does not change direction.\',');
    outLines.push('  33: \'The exemplary person keeps distant from the petty person.\',');
    outLines.push('  34: \'The exemplary person does not tread where propriety does not permit.\',');
    outLines.push('  35: \'The exemplary person manifests one\'s own clear virtue.\',');
    outLines.push('  36: \'The exemplary person approaches the multitude using darkness yet preserving clarity.\',');
    outLines.push('  37: \'The exemplary person speaks with substance and acts with constancy.\',');
    outLines.push('  38: \'The exemplary person unites yet preserves differences.\',');
    outLines.push('  39: \'The exemplary person turns inward to cultivate virtue.\',');
    outLines.push('  40: \'The exemplary person pardons faults and forgives crimes.\',');
    outLines.push('  41: \'The exemplary person curbs anger and checks desire.\',');
    outLines.push('  42: \'The exemplary person moves toward good and corrects faults.\',');
    outLines.push('  43: \'The exemplary person bestows benefits on those below.\',');
    outLines.push('  44: \'The sovereign issues commands to the four quarters.\',');
    outLines.push('  45: \'The exemplary person prepares weapons and guards against the unexpected.\',');
    outLines.push('  46: \'The exemplary person follows virtue and accumulates the small.\',');
    outLines.push('  47: \'The exemplary person gives up life to fulfill one\'s will.\',');
    outLines.push('  48: \'The exemplary person toils for the people and encourages mutual aid.\',');
    outLines.push('  49: \'The exemplary person regulates the calendar and clarifies seasons.\',');
    outLines.push('  50: \'The exemplary person rectifies one\'s position and consolidates the mandate.\',');
    outLines.push('  51: \'The exemplary person is fearful and cultivates self-examination.\',');
    outLines.push('  52: \'The exemplary person thinks not beyond one\'s position.\',');
    outLines.push('  53: \'The exemplary person dwells in worthy virtue and improves customs.\',');
    outLines.push('  54: \'The exemplary person contemplates the end and knows the decay.\',');
    outLines.push('  55: \'The exemplary person decides lawsuits and metes out punishment.\',');
    outLines.push('  56: \'The exemplary person is clear and cautious in punishment.\',');
    outLines.push('  57: \'The exemplary person repeats commands and carries out affairs.\',');
    outLines.push('  58: \'The exemplary person studies and practices with friends.\',');
    outLines.push('  59: \'The former kings sacrificed to the Lord and established temples.\',');
    outLines.push('  60: \'The exemplary person establishes measures and discusses conduct.\',');
    outLines.push('  61: \'The exemplary person discusses lawsuits and delays the death penalty.\',');
    outLines.push('  62: \'The exemplary person exceeds in reverence and grief.\',');
    outLines.push('  63: \'The exemplary person thinks on calamity and prevents it.\',');
    outLines.push('  64: \'The exemplary person is careful in distinguishing things and assigning their places.\',');
    outLines.push('};');
    outLines.push('');
    outLines.push('const xiangTemplate = (h) => `**The Xiang Commentary (象传)**\\n   > ${xiangMap[h.num] || h.symbol}\\n   > *The Image of ${h.cn}: ${h.symbol} (${h.inner}). ${xiangMeaning[h.num] || \'The exemplary person reflects upon this pattern.\'}*`;');
    state = 'keep-symbolic';
    i++;
    continue;
  }
  
  // Replace symbolic function
  if (state === 'keep-symbolic' && line.trim().startsWith('// Symbolic correspondences generator')) {
    outLines.push('// Symbolic correspondences — complete map for all 64 hexagrams');
    outLines.push('const symbolicMap = ' + JSON.stringify(symbolicMap, null, 2).replace(/"([^"]+)":/g, '$1:') + ';');
    outLines.push('');
    outLines.push('// Practice guidance for each hexagram');
    outLines.push('const practiceMap = {');
    outLines.push('  1: \'Embody creative initiative and strength; lead with virtue and vision.\',');
    outLines.push('  2: \'Embody receptive support and patience; nurture rather than command.\',');
    outLines.push('  3: \'In new beginnings, weave order through persistent effort.\',');
    outLines.push('  4: \'Approach learning with sincere humility and resolution.\',');
    outLines.push('  5: \'Wait with composure; timing favors the prepared.\',');
    outLines.push('  6: \'Plan from the start; avoid contention when possible.\',');
    outLines.push('  7: \'Organize collective effort with disciplined leadership.\',');
    outLines.push('  8: \'Build alliances through sincerity and mutual respect.\',');
    outLines.push('  9: \'Accumulate small deeds of influence and refinement.\',');
    outLines.push('  10: \'Tread carefully amid danger; uphold ritual and propriety.\',');
    outLines.push('  11: \'Cherish harmony and the open exchange of ideas.\',');
    outLines.push('  12: \'In times of obstruction, conceal virtue and wait.\',');
    outLines.push('  13: \'Seek fellowship in the open; be transparent and inclusive.\',');
    outLines.push('  14: \'Use abundance to benefit others; restrain evil, promote good.\',');
    outLines.push('  15: \'Cultivate hidden virtue; humility draws fortune.\',');
    outLines.push('  16: \'Stir enthusiasm in others through music and shared vision.\',');
    outLines.push('  17: \'Follow the right people and the natural rhythm of time.\',');
    outLines.push('  18: \'Address decay at its source; reform with vigor.\',');
    outLines.push('  19: \'Approach others with teaching and protective care.\',');
    outLines.push('  20: \'Observe deeply; be mindful of how you appear to others.\',');
    outLines.push('  21: \'Bite through obstacles with clarity and decisive action.\',');
    outLines.push('  22: \'Adorn outward forms, but keep inner substance paramount.\',');
    outLines.push('  23: \'When stripping away, nourish the foundation before rebuilding.\',');
    outLines.push('  24: \'After return, nurture the seed of new light patiently.\',');
    outLines.push('  25: \'Act naturally without contrivance; remain innocent in intent.\',');
    outLines.push('  26: \'Accumulate knowledge and strength for the great task ahead.\',');
    outLines.push('  27: \'Nourish your own body and mind before nourishing others.\',');
    outLines.push('  28: \'Stand alone in your truth even when the weight is heavy.\',');
    outLines.push('  29: \'In repeated peril, keep your heart constant and sincere.\',');
    outLines.push('  30: \'Cling to what is right and bright; shine without burning.\',');
    outLines.push('  31: \'Empty yourself to truly sense and respond to others.\',');
    outLines.push('  32: \'Persevere in your direction; let constancy mark your path.\',');
    outLines.push('  33: \'Know when to retreat; withdraw before exhaustion.\',');
    outLines.push('  34: \'Use strength with restraint; never violate propriety.\',');
    outLines.push('  35: \'Advance openly; let your clear virtue shine forth.\',');
    outLines.push('  36: \'Hide your light when the world is dark; preserve clarity within.\',');
    outLines.push('  37: \'Order the household through sincere speech and steady conduct.\',');
    outLines.push('  38: \'Find unity amid differences; avoid unnecessary conflict.\',');
    outLines.push('  39: \'Turn inward when the path is blocked; cultivate virtue.\',');
    outLines.push('  40: \'Release and forgive; loosen what has been bound too long.\',');
    outLines.push('  41: \'Curb anger and desire; decrease the lower to gain the higher.\',');
    outLines.push('  42: \'Act swiftly when you see good; correct faults without delay.\',');
    outLines.push('  43: \'Announce your breakthrough sincerely; bestow benefits below.\',');
    outLines.push('  44: \'Be cautious of unexpected encounters; guard your boundaries.\',');
    outLines.push('  45: \'Gather the right people; prepare for the unexpected.\',');
    outLines.push('  46: \'Ascend gradually like a tree; let virtue grow steadily.\',');
    outLines.push('  47: \'In exhaustion, hold to your will even if speech fails.\',');
    outLines.push('  48: \'Be a source for others; ensure your wellspring never runs dry.\',');
    outLines.push('  49: \'Know the time for radical change; reform decisively when ripe.\',');
    outLines.push('  50: \'Rectify your position; be the vessel that refines virtue.\',');
    outLines.push('  51: \'Meet shock with fear and trembling; then reflect and improve.\',');
    outLines.push('  52: \'Rest where you stand; go not beyond your proper place.\',');
    outLines.push('  53: \'Advance gradually; each step prepares the next.\',');
    outLines.push('  54: \'Contemplate the end from the beginning; know when to hold back.\',');
    outLines.push('  55: \'Enjoy abundance while it lasts; the full moon wanes.\',');
    outLines.push('  56: \'As a traveler, keep your belongings close and your heart light.\',');
    outLines.push('  57: \'Penetrate gently like wind; repeat commands with subtlety.\',');
    outLines.push('  58: \'Speak with joy and care; words unite or divide.\',');
    outLines.push('  59: \'Disperse tension and boundaries; foster openness and flow.\',');
    outLines.push('  60: \'Set measures; find the sweet spot between excess and want.\',');
    outLines.push('  61: \'Let sincerity reach even the fishes; trust transforms hearts.\',');
    outLines.push('  62: \'In small matters, exceed only in reverence and frugality.\',');
    outLines.push('  63: \'After completion, guard against disorder; anticipate decay.\',');
    outLines.push('  64: \'Before completion, be cautious at every step; the fox almost slips.\',');
    outLines.push('};');
    outLines.push('');
    outLines.push('const symbolic = (h) => {');
    outLines.push('  const sym = symbolicMap[h.num] || `the inner trigram and outer trigram of ${h.cn}`;');
    outLines.push('  const practice = practiceMap[h.num] || \'Reflect on the pattern and let it guide your conduct.\';');
    outLines.push('  return `**Symbolic Correspondences (象征对应)**\\n${h.cn} (${h.en}) corresponds to: ${sym}.\\n\\n**Practice (实践)**\\nIn divination, ${h.cn} (${h.en}) advises: ${practice} Carry its pattern into daily life — as reflection, timing, guidance in relationship and work.`;');
    outLines.push('};');
    state = 'done';
    i++;
    // Skip until we reach buildLesson
    while (i < lines.length && !lines[i].trim().startsWith('// Generate full description')) {
      i++;
    }
    continue;
  }
  
  outLines.push(line);
  i++;
}

fs.writeFileSync(path.join(__dirname, 'generate-hexagrams.js'), outLines.join('\n'), 'utf8');
console.log('Patched generate-hexagrams.js successfully');
console.log('tuanMap entries:', Object.keys(tuanMap).length);
console.log('symbolicMap entries:', Object.keys(symbolicMap).length);
