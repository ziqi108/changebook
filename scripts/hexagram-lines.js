// scripts/hexagram-lines.js
// Classical Yao (爻辞) for all 64 hexagrams.
// Each entry maps a hexagram number (1..64) to 6 lines (0..5 for bottom..top)
// plus optional "use" instruction for pure hexagrams (Qian / Kun).
// Fields:
//   cn   - classical Chinese text
//   en   - English translation (based on public-domain James Legge / Richard Wilhelm style)
// NOTE: This file is the source of truth for the "The Lines" section in each lesson.
// Keep entries faithful to the received Yi Jing tradition.

const HEXAGRAM_LINES = {
  1: {
    lines: [
      { cn: '潜龙勿用。', en: 'The hidden dragon: do not act.' },
      { cn: '见龙在田，利见大人。', en: 'The dragon appears in the field: it is advantageous to see the great man.' },
      { cn: '君子终日乾乾，夕惕若厉，无咎。', en: 'The superior man is active and cautious all the day; at night he is still vigilant as though in danger — no mistake.' },
      { cn: '或跃在渊，无咎。', en: 'He may leap into the abyss — no mistake.' },
      { cn: '飞龙在天，利见大人。', en: 'The dragon flies in the sky: it is advantageous to see the great man.' },
      { cn: '亢龙有悔。', en: 'The dragon reaches the limit: there will be regret.' },
    ],
    use: { cn: '用九：见群龙无首，吉。', en: 'Using the nine: a host of dragons appears without claiming leadership — good fortune.' },
  },
  2: {
    lines: [
      { cn: '履霜，坚冰至。', en: 'Treading on frost: solid ice will arrive.' },
      { cn: '直方大，不习无不利。', en: 'Square, straight, great — by nature, not by discipline, there is nothing not advantageous.' },
      { cn: '含章可贞。或从王事，无成有终。', en: 'Embracing ornament, one may be firm and correct. Or one may follow the king\'s affairs: without completing them, yet with a good end.' },
      { cn: '括囊，无咎无誉。', en: 'Closing the sack — no blame, no praise.' },
      { cn: '黄裳元吉。', en: 'A yellow skirt — original good fortune.' },
      { cn: '龙战于野，其血玄黄。', en: 'Dragons fight in the wild, their blood is dark and yellow.' },
    ],
    use: { cn: '用六：利永贞。', en: 'Using the six: advantageous to be perpetually firm and correct.' },
  },
  3: {
    lines: [
      { cn: '磐桓，利居贞，利建侯。', en: 'Hesitation and delay — advantageous to be firm and correct, advantageous to set up princes.' },
      { cn: '屯如邅如，乘马班如，匪寇婚媾。女子贞不字，十年乃字。', en: 'Difficulties and hindrances — the horses are arrayed but not advancing. Not robbers, but suitors. The maid is firm and correct, and does not rush into marriage — after ten years she weds.' },
      { cn: '即鹿无虞，惟入于林中。君子几不如舍，往吝。', en: 'Going after deer without a forester — one only enters the forest. The superior man, perceiving the opportunity, would rather let it go; to go on would be regret.' },
      { cn: '乘马班如，求婚媾，往吉，无不利。', en: 'Horses arrayed — seeking a marriage alliance: going yields good fortune, nothing disadvantageous.' },
      { cn: '屯其膏，小贞吉，大贞凶。', en: 'Difficulties anointing — small correctness yields good fortune, great correctness yields misfortune.' },
      { cn: '乘马班如，泣血涟如。', en: 'Horses arrayed — weeping tears of blood flow down.' },
    ],
  },
  4: {
    lines: [
      { cn: '蒙：发蒙，利用刑人，用说桎梏，以往吝。', en: 'Ignorance: at the first awakening, it is advantageous to use punishment, yet even with shackles removed, going forward brings regret.' },
      { cn: '包蒙吉。纳妇吉，子克家。', en: 'Enveloped in ignorance — good fortune. Taking a wife — good fortune; a son manages the household.' },
      { cn: '勿用取女，见金夫，不有躬，无攸利。', en: 'Do not take such a woman: she sees a man of gold and loses herself — nothing advantageous.' },
      { cn: '困蒙，吝。', en: 'Confined in ignorance — regret.' },
      { cn: '童蒙，吉。', en: 'Childlike ignorance — good fortune.' },
      { cn: '击蒙，不利为寇，利御寇。', en: 'Striking ignorance — disadvantageous to act as an aggressor, advantageous to repel aggression.' },
    ],
  },
  5: {
    lines: [
      { cn: '需于郊，利用恒，无咎。', en: 'Waiting in the suburbs — advantageous to be constant, no blame.' },
      { cn: '需于沙，小有言，终吉。', en: 'Waiting in the sand — there may be some small words, but in the end good fortune.' },
      { cn: '需于泥，致寇至。', en: 'Waiting in the mud — this invites the arrival of robbers.' },
      { cn: '需于血，出自穴。', en: 'Waiting in the blood — one comes forth from the pit.' },
      { cn: '需于酒食，贞吉。', en: 'Waiting over wine and food — firm correctness yields good fortune.' },
      { cn: '入于穴，有不速之客三人来，敬之终吉。', en: 'Entering the pit, three uninvited guests arrive; receive them respectfully and in the end good fortune.' },
    ],
  },
  6: {
    lines: [
      { cn: '不永所事，小有言，终吉。', en: 'Not perpetuating one\'s affairs — some small words, but in the end good fortune.' },
      { cn: '不克讼，归而逋，其邑人三百户无眚。', en: 'Not victorious in dispute — returning, one escapes; the people of one\'s city of three hundred households have no calamity.' },
      { cn: '食旧德，贞厉，终吉。或从王事，无成。', en: 'Living on one\'s old merits — firm correctness despite difficulty, in the end good fortune. Or one may follow the king\'s affairs, without completion.' },
      { cn: '不克讼，复即命渝，安贞吉。', en: 'Not victorious in dispute — one returns and changes, dwelling in correctness — good fortune.' },
      { cn: '讼，元吉。', en: 'In dispute — original good fortune.' },
      { cn: '或锡之鞶带，终朝三褫之。', en: 'One may be presented with a girdle of distinction — in a single morning it is three times taken away.' },
    ],
  },
  7: {
    lines: [
      { cn: '师出以律，否臧凶。', en: 'The army goes forth with discipline; ill discipline brings misfortune.' },
      { cn: '在师中吉，无咎，王三锡命。', en: 'In the midst of the army — good fortune, no blame; the king three times confers orders.' },
      { cn: '师或舆尸，凶。', en: 'The army may return with corpses — misfortune.' },
      { cn: '师左次，无咎。', en: 'The army retreats and camps — no blame.' },
      { cn: '田有禽，利执言，无咎。', en: 'There are beasts in the field — advantageous to speak out, no blame.' },
      { cn: '大君有命，开国承家，小人勿用。', en: 'The great ruler has orders — to establish states and receive homesteads; the small man is not to be used.' },
    ],
  },
  8: {
    lines: [
      { cn: '有孚比之，无咎。有孚盈缶，终来有他吉。', en: 'With sincerity, one draws others — no blame. When sincerity fills the vessels, in the end there come others with good fortune.' },
      { cn: '比之自内，贞吉。', en: 'Drawing them from within — firm correctness yields good fortune.' },
      { cn: '比之匪人。', en: 'Drawing the wrong people.' },
      { cn: '外比之，贞吉。', en: 'Drawing them from without — firm correctness yields good fortune.' },
      { cn: '显比，王用三驱，失前禽，邑人不诫，吉。', en: 'Drawing them openly — the king uses three drives, loses the foremost beast, and the people of the city are not dismayed — good fortune.' },
      { cn: '比之无首，凶。', en: 'Drawing without a head — misfortune.' },
    ],
  },
  9: {
    lines: [
      { cn: '复自道，何其咎，吉。', en: 'Returning by the way — what blame? Good fortune.' },
      { cn: '牵复，吉。', en: 'Leading them back — good fortune.' },
      { cn: '舆说辐，夫妻反目。', en: 'The carriage is without spokes; husband and wife look askance at one another.' },
      { cn: '有孚，血去惕出，无咎。', en: 'With sincerity, the fear passes and one goes forth — no blame.' },
      { cn: '有孚挛如，富以其邻。', en: 'With sincerity, they are drawn together — one enriches his neighbor.' },
      { cn: '既雨既处，尚德载。妇贞厉。', en: 'When the rain has fallen and stops, it still bears — the woman is firm and correct despite difficulty.' },
    ],
  },
  10: {
    lines: [
      { cn: '素履，往无咎。', en: 'Plain treading — going forward, no blame.' },
      { cn: '履道坦坦，幽人贞吉。', en: 'Treading the level road — the hidden man is firm and correct and receives good fortune.' },
      { cn: '眇能视，跛能履，履虎尾，咥人，凶。', en: 'One-eyed yet able to see, lame yet able to tread — treading on a tiger\'s tail, the tiger bites — misfortune.' },
      { cn: '履虎尾，愬愬终吉。', en: 'Treading on a tiger\'s tail — trembling, in the end good fortune.' },
      { cn: '夬履，贞厉。', en: 'Treading resolutely — firm correctness with vigilance.' },
      { cn: '视履考祥，其还元吉。', en: 'Inspecting one\'s steps and contemplating good fortune — in the return, original good fortune.' },
    ],
  },
  11: {
    lines: [
      { cn: '拔茅茹，以其汇，征吉。', en: 'Pulling up the grass — the whole clump comes with it; going is good fortune.' },
      { cn: '包荒，用冯河，不遐遗，朋亡，得尚于中行。', en: 'Embracing the wide, using the ford, not forgetting the distant — friends are lost, yet one gains the esteem of the middle way.' },
      { cn: '无平不陂，无往不复。艰贞无咎。', en: 'There is no level that does not slope, no going that does not return — in difficulty, firm correctness, no blame.' },
      { cn: '翩翩，不富以其邻，不戒以孚。', en: 'Fluttering — one does not enrich his neighbor, yet by sincerity is not warned.' },
      { cn: '帝乙归妹，以祉元吉。', en: 'The king\'s second sister is given in marriage — great blessing and original good fortune.' },
      { cn: '城复于隍，勿用师，自邑告命，贞吝。', en: 'The walls fall back into the moat — do not use the army; from one\'s own city, orders are announced — firm correctness with regret.' },
    ],
  },
  12: {
    lines: [
      { cn: '拔茅茹，以其汇，贞吉，亨。', en: 'Pulling up the grass — the whole clump comes with it; firm correctness yields good fortune and prosperity.' },
      { cn: '包承，小人吉，大人否亨。', en: 'Embracing submission — the small man is fortunate; the great man is blocked yet prospers.' },
      { cn: '包羞。', en: 'Embracing shame.' },
      { cn: '有命无咎，畴离祉。', en: 'Having a command, no blame — companions partake of the blessing.' },
      { cn: '休否，大人吉。其亡其亡，系于苞桑。', en: 'Ceasing the obstruction — the great man is fortunate. "Will he perish? Will he perish?" — he binds it to the broom-mulberry.' },
      { cn: '倾否，先否后喜。', en: 'Overthrowing the obstruction — first obstruction, then joy.' },
    ],
  },
  13: {
    lines: [
      { cn: '同人于门，无咎。', en: 'Associating with men at the gate — no blame.' },
      { cn: '同人于宗，吝。', en: 'Associating with men in the ancestral temple — regret.' },
      { cn: '伏戎于莽，升其高陵，三岁不兴。', en: 'Lying in wait in the grass, ascending the high mound — for three years they do not rise.' },
      { cn: '乘其墉，弗克攻，吉。', en: 'Mounting the walls, not able to attack — good fortune.' },
      { cn: '同人，先号咷而后笑，大师克相遇。', en: 'Associating with men — first weeping, then laughing; the great army meets.' },
      { cn: '同人于郊，无悔。', en: 'Associating with men in the suburbs — no regret.' },
    ],
  },
  14: {
    lines: [
      { cn: '无咎。', en: 'No blame.' },
      { cn: '大车以载，有攸往，无咎。', en: 'Great carts for carrying — there is a destination, no blame.' },
      { cn: '公用亨于天子，小人弗克。', en: 'The lord presents offerings to the Son of Heaven — the small man cannot.' },
      { cn: '匪其彭，无咎。', en: 'Not boasting — no blame.' },
      { cn: '厥孚交如，威如，吉。', en: 'Sincerity and prestige — good fortune.' },
      { cn: '自天祐之，吉无不利。', en: 'Heaven protects — good fortune, nothing disadvantageous.' },
    ],
  },
  15: {
    lines: [
      { cn: '谦谦君子，用涉大川，吉。', en: 'The very humble superior man can cross great rivers — good fortune.' },
      { cn: '鸣谦，贞吉。', en: 'Humble in reputation — firm correctness yields good fortune.' },
      { cn: '劳谦君子，有终吉。', en: 'The hardworking and humble superior man has a good end — good fortune.' },
      { cn: '无不利，撝谦。', en: 'Nothing disadvantageous — displaying humility.' },
      { cn: '不富以其邻，利用侵伐，无不利。', en: 'Not enriching one\'s neighbor — advantageous to invade and punish, nothing disadvantageous.' },
      { cn: '鸣谦，利用行师，征邑国。', en: 'Humble in reputation — advantageous to use the army, to chastise cities and states.' },
    ],
  },
  16: {
    lines: [
      { cn: '鸣豫，凶。', en: 'Pleasure reputed — misfortune.' },
      { cn: '介于石，不终日，贞吉。', en: 'Firm as a stone — not for a whole day; firm correctness yields good fortune.' },
      { cn: '盱豫，悔。', en: 'Gazing for pleasure — regret.' },
      { cn: '由豫，大有得，勿疑。朋盍簪。', en: 'Through pleasure, great gains; do not doubt. Friends gather as hairpins.' },
      { cn: '贞疾，恒不死。', en: 'Firm as an illness — enduring, not dying.' },
      { cn: '冥豫成，有渝无咎。', en: 'Dark pleasure completed — change, no blame.' },
    ],
  },
  17: {
    lines: [
      { cn: '官有渝，贞吉。出门交有功。', en: 'The rule changes — firm correctness yields good fortune. Going out to meet, one has merit.' },
      { cn: '系小子，失丈夫。', en: 'Attached to the small man — losing the great man.' },
      { cn: '系丈夫，失小子。随有求得。', en: 'Attached to the great man — losing the small man. Following, one obtains what is sought.' },
      { cn: '随有获，贞凶。有孚在道，以明，何咎。', en: 'Following, one gains — firm correctness with vigilance. Sincerity in the way — to be clear, what blame?' },
      { cn: '孚于嘉，吉。', en: 'Sincerity in the excellent — good fortune.' },
      { cn: '系乃维之，王用亨于西山。', en: 'Bound, then tied — the king uses worship on the Western Mountain.' },
    ],
  },
  18: {
    lines: [
      { cn: '干父之蛊，有子，考无咎。厉终吉。', en: 'Correcting the father\'s work — having a son, the father is blameless. Difficulties, in the end good fortune.' },
      { cn: '干母之蛊，不可贞。', en: 'Correcting the mother\'s work — one cannot be firm.' },
      { cn: '干父之蛊，小有悔，无大咎。', en: 'Correcting the father\'s work — small regret, no great blame.' },
      { cn: '裕父之蛊，往见吝。', en: 'Preserving the father\'s work — going, one sees regret.' },
      { cn: '干父之蛊，用誉。', en: 'Correcting the father\'s work — used with praise.' },
      { cn: '不事王侯，高尚其事。', en: 'Not serving kings and princes — one elevates one\'s affairs.' },
    ],
  },
  19: {
    lines: [
      { cn: '咸临，贞吉。', en: 'Approaching with influence — firm correctness yields good fortune.' },
      { cn: '咸临，吉无不利。', en: 'Approaching with influence — good fortune, nothing disadvantageous.' },
      { cn: '甘临，无攸利。既忧之，无咎。', en: 'Sweet approaching — nothing advantageous. Once one worries, no blame.' },
      { cn: '至临，无咎。', en: 'Sincere approaching — no blame.' },
      { cn: '知临，大君之宜，吉。', en: 'Wise approaching — fitting for the great ruler — good fortune.' },
      { cn: '敦临，吉无咎。', en: 'Honest approaching — good fortune, no blame.' },
    ],
  },
  20: {
    lines: [
      { cn: '观我生，进退。', en: 'Looking at my life — to advance or retreat.' },
      { cn: '窥观，利女贞。', en: 'Peeping — advantageous for the woman to be correct.' },
      { cn: '观我生，观民无咎。', en: 'Looking at my life — looking at the people, no blame.' },
      { cn: '观国之光，利用宾于王。', en: 'Looking at the light of the state — advantageous to be a guest of the king.' },
      { cn: '观我生，君子无咎。', en: 'Looking at my life — the superior man is blameless.' },
      { cn: '观其生，君子无咎。', en: 'Looking at his life — the superior man is blameless.' },
    ],
  },
  21: {
    lines: [
      { cn: '屦校灭趾，无咎。', en: 'The shoe over the foot destroys the toes — no blame.' },
      { cn: '噬肤灭鼻，无咎。', en: 'Biting the skin destroys the nose — no blame.' },
      { cn: '噬腊肉，遇毒。小吝，无咎。', en: 'Biting dried meat — encountering poison. Small regret, no blame.' },
      { cn: '噬干胏，得金矢，利艰贞，吉。', en: 'Biting dry bone — obtaining a golden arrow. Advantageous to be firm in difficulty — good fortune.' },
      { cn: '噬干肉，得黄金，贞厉，无咎。', en: 'Biting dry meat — obtaining gold and yellow metal. Firm correctness with vigilance, no blame.' },
      { cn: '何校灭耳，凶。', en: 'The collar over the ear destroys the ear — misfortune.' },
    ],
  },
  22: {
    lines: [
      { cn: '贲其趾，舍车而徒。', en: 'Adorning the toes — leaving the carriage and walking on foot.' },
      { cn: '贲其须。', en: 'Adorning the beard.' },
      { cn: '贲如濡如，永贞吉。', en: 'Adorned and moistened — perpetual firmness yields good fortune.' },
      { cn: '贲如皤如，白马翰如，匪寇婚媾。', en: 'Adorned and plain — white horses galloping, not robbers but suitors.' },
      { cn: '贲于丘园，束帛戋戋。吝，终吉。', en: 'Adorning the hill gardens — bundles of silk, meager. Regret, in the end good fortune.' },
      { cn: '白贲，无咎。', en: 'Plain adornment — no blame.' },
    ],
  },
  23: {
    lines: [
      { cn: '剥床以足，蔑贞凶。', en: 'Stripping the bed at its foot — disregarding correctness, misfortune.' },
      { cn: '剥床以辨，蔑贞凶。', en: 'Stripping the bed at its frame — disregarding correctness, misfortune.' },
      { cn: '剥之，无咎。', en: 'Stripping it — no blame.' },
      { cn: '剥床以肤，凶。', en: 'Stripping the bed of its skin — misfortune.' },
      { cn: '贯鱼，以宫人宠，无不利。', en: 'Fish in a row — the palace ladies gain favor, nothing disadvantageous.' },
      { cn: '硕果不食，君子得舆，小人剥庐。', en: 'The great fruit uneaten — the superior man gets a carriage; the small man strips the hut.' },
    ],
  },
  24: {
    lines: [
      { cn: '不远复，无祗悔，元吉。', en: 'Not far to return — no great regret, original good fortune.' },
      { cn: '休复，吉。', en: 'Turning back to rest — good fortune.' },
      { cn: '频复，厉无咎。', en: 'Repeatedly returning — difficulty, no blame.' },
      { cn: '中行独复。', en: 'In the middle, alone returning.' },
      { cn: '敦复，无悔。', en: 'Sincerely returning — no regret.' },
      { cn: '迷复，凶，有灾眚。', en: 'Lost in returning — misfortune, calamity.' },
    ],
  },
  25: {
    lines: [
      { cn: '无妄，往吉。', en: 'Without pretense — going, good fortune.' },
      { cn: '不耕获，不菑畲，则利有攸往。', en: 'Not farming for the harvest, not clearing new ground — then advantageous to have a destination.' },
      { cn: '无妄之灾，或系之牛，行人之得，邑人之灾。', en: 'Without pretense, calamity: someone\'s ox is tied; the traveler gets it, the townsman suffers.' },
      { cn: '可贞，无咎。', en: 'May be firm, no blame.' },
      { cn: '无妄之疾，勿药有喜。', en: 'Without pretense, illness — no medicine, yet joy.' },
      { cn: '无妄，行有眚，无攸利。', en: 'Without pretense — action brings calamity, nothing advantageous.' },
    ],
  },
  26: {
    lines: [
      { cn: '有厉，利已。', en: 'There is difficulty — advantageous to stop.' },
      { cn: '不耕获，不菑畲，则利有攸往。', en: 'Not farming for the harvest, not clearing new ground — advantageous to have a destination.' },
      { cn: '利贞。', en: 'Advantageous to be correct.' },
      { cn: '童牛之牿，元吉。', en: 'The wood on the young cow — original good fortune.' },
      { cn: '豮豕之牙，吉。', en: 'The teeth of the castrated boar — good fortune.' },
      { cn: '何天之衢，亨。', en: 'What is the heaven\'s highway — prosperity.' },
    ],
  },
  27: {
    lines: [
      { cn: '往明，利涉大川。', en: 'One looks to one\'s vision — advantageous to cross the great river.' },
      { cn: '颠颐，拂经，于丘颐，征凶。', en: 'Reversed nourishment — transgressing the classics, seeking nourishment on the hill — going is misfortune.' },
      { cn: '拂颐，贞凶，十年勿用，无攸利。', en: 'Transgressing nourishment — firm correctness with vigilance; for ten years not to be used, nothing advantageous.' },
      { cn: '颠颐，吉。虎视眈眈，其欲逐逐，无咎。', en: 'Reversed nourishment — good fortune. The tiger looks intently, its desire is urgent — no blame.' },
      { cn: '拂经，居贞吉，不可涉大川。', en: 'Transgressing the classics — dwelling in correctness yields good fortune; one cannot cross the great river.' },
      { cn: '由颐，厉吉，利涉大川。', en: 'Through nourishment — difficulty yields good fortune; advantageous to cross the great river.' },
    ],
  },
  28: {
    lines: [
      { cn: '藉用白茅，无咎。', en: 'Using white grass as a mat — no blame.' },
      { cn: '枯杨生稊，老夫得其女妻，无不利。', en: 'The withered poplar sprouts — the old man obtains a young wife, nothing disadvantageous.' },
      { cn: '栋桡，凶。', en: 'The ridgepole bends — misfortune.' },
      { cn: '栋隆，吉。有它吝。', en: 'The ridgepole is high — good fortune. Elsewhere, regret.' },
      { cn: '枯杨生华，老妇得其士夫，无咎无誉。', en: 'The withered poplar flowers — the old woman obtains a young husband, no blame no praise.' },
      { cn: '过涉灭顶，凶，无咎。', en: 'Crossing and drowning — misfortune, no blame.' },
    ],
  },
  29: {
    lines: [
      { cn: '习坎，入坎，凶。', en: 'Repeated pitfall — entering the pit, misfortune.' },
      { cn: '坎有险，求小得。', en: 'The pitfall has dangers — seeking small gain.' },
      { cn: '来之坎坎，险且枕，入于坎窞，勿用。', en: 'The pitfall comes and comes — dangerous and resting; entering the deepest pit, do not act.' },
      { cn: '樽酒簋贰，用缶，纳约自牖，终无咎。', en: 'A jar of wine and two baskets — using earthenware, receiving covenants through the window, in the end no blame.' },
      { cn: '坎不盈，祗既平，无咎。', en: 'The pitfall is not full — the mound is already level, no blame.' },
      { cn: '系用徽纆，寘于丛棘，三岁不得，凶。', en: 'Bound with black and yellow cords, placed among thorn trees — for three years not to be obtained, misfortune.' },
    ],
  },
  30: {
    lines: [
      { cn: '履错然，敬之无咎。', en: 'Treading confused — respecting it, no blame.' },
      { cn: '黄离，元吉。', en: 'Yellow brilliance — original good fortune.' },
      { cn: '日昃之离，不鼓缶而歌，则大耋之嗟，凶。', en: 'The brilliance of the setting sun — if one does not beat the pot and sing, then the old man\'s lament — misfortune.' },
      { cn: '突如其来如，焚如，死如，弃如。', en: 'Suddenly — burning, dying, abandoned.' },
      { cn: '出涕沱若，戚嗟若，吉。', en: 'Shedding tears as a flood, mourning with sighs — good fortune.' },
      { cn: '王用出征，有嘉折首，获匪其丑，无咎。', en: 'The king goes forth — there is a reward for taking the head; the captive is not his follower — no blame.' },
    ],
  },
  31: {
    lines: [
      { cn: '咸其拇。', en: 'Its thumb is moved.' },
      { cn: '咸其腓，凶，居吉。', en: 'Its calf is moved — misfortune; dwelling, good fortune.' },
      { cn: '咸其股，执其随，往吝。', en: 'Its thigh is moved — holding to one\'s followers, going brings regret.' },
      { cn: '贞吉悔亡。憧憧往来，朋从尔思。', en: 'Firm correctness yields good fortune, regret disappears. Coming and going, your friends follow your thoughts.' },
      { cn: '咸其脢，无悔。', en: 'Its back-flesh is moved — no regret.' },
      { cn: '咸其辅颊舌。', en: 'Its cheeks and tongue are moved.' },
    ],
  },
  32: {
    lines: [
      { cn: '浚恒，贞凶，无攸利。', en: 'Seeking perseverance — firm correctness with vigilance, nothing advantageous.' },
      { cn: '悔亡。', en: 'Regret disappears.' },
      { cn: '不恒其德，或承之羞，贞吝。', en: 'Not persevering in one\'s virtue — one may incur shame, firm correctness with regret.' },
      { cn: '田无禽。', en: 'The field has no game.' },
      { cn: '恒其德，贞。妇人吉，夫子凶。', en: 'Persevering in one\'s virtue — correct. The woman is fortunate, the man is unfortunate.' },
      { cn: '振恒，凶。', en: 'Shaking perseverance — misfortune.' },
    ],
  },
  33: {
    lines: [
      { cn: '遁尾，厉。', en: 'Retreating to the tail — difficulty.' },
      { cn: '执之用黄牛之革，莫之胜说。', en: 'Bound with the skin of the yellow ox — none can prevail to loose it.' },
      { cn: '系遁，有疾厉，畜臣妾吉。', en: 'Bound retreat — illness with difficulty; keeping servants and women, good fortune.' },
      { cn: '好遁，君子吉，小人否。', en: 'Fond of retreat — the superior man is fortunate, the small man not.' },
      { cn: '嘉遁，贞吉。', en: 'Excellent retreat — firm correctness yields good fortune.' },
      { cn: '肥遁，无不利。', en: 'Rich retreat — nothing disadvantageous.' },
    ],
  },
  34: {
    lines: [
      { cn: '壮于趾，征贞凶，有孚。', en: 'Strong in the toes — going with firmness is misfortune, with sincerity.' },
      { cn: '贞吉。', en: 'Firm correctness yields good fortune.' },
      { cn: '壮于大舆之輹，贞凶。', en: 'Strong in the axles of the great carriage — firm correctness with vigilance.' },
      { cn: '贞吉悔亡。', en: 'Firm correctness yields good fortune, regret disappears.' },
      { cn: '丧羊于易，无悔。', en: 'Losing a goat at the easy ford — no regret.' },
      { cn: '羝羊触藩，不能退，不能遂，无攸利，艰则吉。', en: 'The ram buttocks the fence — cannot retreat, cannot advance; nothing advantageous, in difficulty then good fortune.' },
    ],
  },
  35: {
    lines: [
      { cn: '晋如摧如，贞吉。罔孚，裕无咎。', en: 'Advancing and retreating — firm correctness yields good fortune. Without sincerity, generous — no blame.' },
      { cn: '晋如愁如，贞吉。受兹介福于其王母。', en: 'Advancing and sorrowful — firm correctness yields good fortune. Receiving this great blessing from the king\'s mother.' },
      { cn: '众允，悔亡。', en: 'Accepted by the multitude — regret disappears.' },
      { cn: '晋如鼫鼠，贞厉。', en: 'Advancing like a rat — firm correctness with vigilance.' },
      { cn: '悔亡，失得勿恤。往吉，无不利。', en: 'Regret disappears — loss and gain need not be worried about. Going is good fortune, nothing disadvantageous.' },
      { cn: '晋其角，维用伐邑，厉吉无咎，贞吝。', en: 'Advancing its horns — only used to chastise cities; difficulty yields good fortune and no blame, firm correctness with regret.' },
    ],
  },
  36: {
    lines: [
      { cn: '明夷于飞，垂其翼。君子于行，三日不食。', en: 'In the wounded brightness flying, it droops its wings. The superior man on his journey does not eat for three days.' },
      { cn: '明夷，夷于左股，用拯马壮吉。', en: 'Brightness wounded — wounded in the left thigh; using a strong horse to rescue, good fortune.' },
      { cn: '明夷于南狩，得其大首，不可疾贞。', en: 'Brightness wounded in the southern hunt — obtaining the great head; one cannot be swift, but correct.' },
      { cn: '入于左腹，获明夷之心，于出门庭。', en: 'Entering the left belly, obtaining the heart of the wounded brightness — going out through the gate and court.' },
      { cn: '箕子之明夷，利贞。', en: 'The Viscount of Ji\'s wounded brightness — advantageous to be correct.' },
      { cn: '不明晦，初登于天，后入于地。', en: 'Not bright but dark — first ascending to heaven, then entering the earth.' },
    ],
  },
  37: {
    lines: [
      { cn: '闲有家，悔亡。', en: 'Regulating the home — regret disappears.' },
      { cn: '无攸遂，在中馈，贞吉。', en: 'Not accomplishing anything — attending to the central household affairs; firm correctness yields good fortune.' },
      { cn: '家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。', en: 'The household stern — regret, difficulty, good fortune. Wife and children laughing and joking — in the end regret.' },
      { cn: '富家，大吉。', en: 'Enriching the home — great good fortune.' },
      { cn: '王假有家，勿恤吉。', en: 'The king reaches the home — do not worry, good fortune.' },
      { cn: '有孚威如，终吉。', en: 'Sincerity and prestige — in the end good fortune.' },
    ],
  },
  38: {
    lines: [
      { cn: '悔亡。', en: 'Regret disappears.' },
      { cn: '丧马勿逐自复，见恶人无咎。', en: 'Losing a horse — do not pursue, it returns of itself; seeing evil people, no blame.' },
      { cn: '见舆曳，其牛掣，其人天且劓，无初有终。', en: 'Seeing a carriage drawn, its oxen hampered — the man has his head and nose cut; no beginning, but an end.' },
      { cn: '睽孤，遇元夫，交孚，厉无咎。', en: 'Alone in opposition — meeting the original man, mutual sincerity; difficulty, no blame.' },
      { cn: '悔亡。', en: 'Regret disappears.' },
      { cn: '睽孤，见豕负涂，载鬼一车。', en: 'Alone in opposition — seeing a pig covered with dirt, a carriage of ghosts.' },
    ],
  },
  39: {
    lines: [
      { cn: '往蹇，来誉。', en: 'Going is lame, coming is praise.' },
      { cn: '王臣蹇蹇，匪躬之故。', en: 'The king\'s ministers are lame — not for their own sake.' },
      { cn: '往蹇，来反。', en: 'Going is lame, coming is the opposite.' },
      { cn: '往蹇，来连。', en: 'Going is lame, coming is connected.' },
      { cn: '大蹇，朋来。', en: 'Great lameness — friends come.' },
      { cn: '往蹇，来硕，吉。利见大人。', en: 'Going is lame, coming is great — good fortune. Advantageous to see the great man.' },
    ],
  },
  40: {
    lines: [
      { cn: '无咎。', en: 'No blame.' },
      { cn: '田获三狐，得黄矢，贞吉。', en: 'The field yields three foxes, obtaining a yellow arrow — firm correctness yields good fortune.' },
      { cn: '负且乘，致寇至。', en: 'Carrying and riding — this invites robbers.' },
      { cn: '解而拇，朋至斯孚。', en: 'Relieving the thumb — friends come, and there is sincerity.' },
      { cn: '君子维有解，吉。有孚于小人。', en: 'The superior man alone has relief — good fortune. Sincerity reaches the small man.' },
      { cn: '公用射隼于高墉之上，获之，无不利。', en: 'The lord shoots the falcon from the high wall, obtaining it — nothing disadvantageous.' },
    ],
  },
  41: {
    lines: [
      { cn: '已事遄往，无咎，酌损之。', en: 'After the affair, hasten away — no blame, consider diminishing.' },
      { cn: '利贞，征凶，弗损益之。', en: 'Advantageous to be correct; going is misfortune — neither diminishment nor increase.' },
      { cn: '三人行则损一人，一人行则得其友。', en: 'Three people walking — one is diminished; one walking finds a friend.' },
      { cn: '损其疾，使遄有喜，无咎。', en: 'Diminishing one\'s illness — to hasten, there is joy; no blame.' },
      { cn: '益之，使元吉，无咎，弗损益之。', en: 'Increasing it — making it originally good fortune, no blame; neither diminishment nor increase.' },
      { cn: '弗损益之，无咎，贞吉，利有攸往。', en: 'Neither diminishing nor increasing — no blame, firm correctness yields good fortune, advantageous to have a destination.' },
    ],
  },
  42: {
    lines: [
      { cn: '利用为大作，元吉，无咎。', en: 'Advantageous to do great works — original good fortune, no blame.' },
      { cn: '或益之十朋之龟，弗克违，永贞吉。', en: 'One may be benefited by the ten-pair tortoise — cannot be contrary; perpetual firmness yields good fortune.' },
      { cn: '益之用凶事，无咎。有孚中行，告公用圭。', en: 'Using benefit in austere affairs — no blame. With sincerity in the middle, one announces to the lord with the jade tablet.' },
      { cn: '中行告公从，利用为依迁国。', en: 'In the middle, announcing to the lord who follows — advantageous to depend on this to move states.' },
      { cn: '有孚惠心，勿问元吉。有孚惠我德。', en: 'Sincere, beneficent heart — do not ask, original good fortune. Sincere, beneficent my virtue.' },
      { cn: '莫益之，或击之，立心勿恒，凶。', en: 'None benefit it; one may strike it. If the heart is not constant — misfortune.' },
    ],
  },
  43: {
    lines: [
      { cn: '壮于前趾，往不胜为咎。', en: 'Strong in the front toes — going, one cannot prevail; this is blame.' },
      { cn: '惕号，莫夜有戎，勿恤。', en: 'Trembling and crying — at night there may be war; do not worry.' },
      { cn: '壮于頄，有凶。君子夬夬独行。', en: 'Strong in the cheeks — misfortune. The superior man resolute and alone.' },
      { cn: '臀无肤，其行次且。牵羊悔亡。', en: 'The buttocks have no skin — one\'s steps are halting. Leading the sheep, regret disappears.' },
      { cn: '苋陆夬夬，中行无咎。', en: 'The goat resolute — in the middle way, no blame.' },
      { cn: '无号，终有凶。', en: 'No cry — in the end misfortune.' },
    ],
  },
  44: {
    lines: [
      { cn: '系于金柅，贞吉。', en: 'Bound to the metal stopper — firm correctness yields good fortune.' },
      { cn: '包有鱼，无咎，不利宾。', en: 'There is a fish in the basket — no blame, disadvantageous as a guest.' },
      { cn: '臀无肤，其行次且。厉，无大咎。', en: 'The buttocks have no skin — one\'s steps are halting. Difficulty, no great blame.' },
      { cn: '包无鱼，起凶。', en: 'The basket has no fish — this causes misfortune.' },
      { cn: '以杞包瓜，含章，有陨自天。', en: 'Wrapping melons with the branch of the qi tree — containing beauty; falling from heaven.' },
      { cn: '姤其角，吝无咎。', en: 'Meeting its horn — regret, no blame.' },
    ],
  },
  45: {
    lines: [
      { cn: '有孚不终，乃乱乃萃。若号一握为笑。', en: 'Sincerity without end — confusion and gathering. If one calls out, a handshake becomes laughter.' },
      { cn: '引吉，无咎。孚乃利用禴。', en: 'Drawing is good fortune — no blame. Sincerity, advantageous to use the spring sacrifice.' },
      { cn: '萃如嗟如，无攸利。往无咎，小吝。', en: 'Gathering and sighing — nothing advantageous. Going, no blame, small regret.' },
      { cn: '大吉，无咎。', en: 'Great good fortune, no blame.' },
      { cn: '萃有位，无咎。匪孚，元永贞，悔亡。', en: 'Gathering with a position — no blame. Not sincere, yet perpetually correct — regret disappears.' },
      { cn: '赍咨涕洟，无咎。', en: 'Lamenting with tears and snivel — no blame.' },
    ],
  },
  46: {
    lines: [
      { cn: '允升，大吉。', en: 'Believing and ascending — great good fortune.' },
      { cn: '孚乃利用禴，无咎。', en: 'Sincerity, advantageous to use the spring sacrifice — no blame.' },
      { cn: '升虚邑。', en: 'Ascending to the empty city.' },
      { cn: '王用亨于岐山，吉，无咎。', en: 'The king uses worship on Mount Qi — good fortune, no blame.' },
      { cn: '贞吉，升阶。', en: 'Firm correctness yields good fortune — ascending the steps.' },
      { cn: '冥升，利于不息之贞。', en: 'Darkly ascending — advantageous for ceaseless firmness.' },
    ],
  },
  47: {
    lines: [
      { cn: '臀困于株木，入于幽谷，三岁不觌。', en: 'The buttocks are in want under the stump — entering the dark valley, for three years not to be seen.' },
      { cn: '困于酒食，朱绂方来，利用享祀。', en: 'In want of food and drink — the red belt is just coming; advantageous to use the sacrifice.' },
      { cn: '困于石，据于蒺藜，入于其宫，不见其妻，凶。', en: 'In want under the stone, resting on thorn — entering his palace, not seeing his wife; misfortune.' },
      { cn: '来徐徐，困于金车，吝，有终。', en: 'Coming slowly — in want under the golden carriage; regret, yet an end.' },
      { cn: '劓刖，困于赤绂，乃徐有说，利用祭祀。', en: 'Nose and feet cut — in want under the red belt; slowly there is release, advantageous to use the sacrifice.' },
      { cn: '困于葛藟，于臲卼，曰动悔有悔，征吉。', en: 'In want under vines, tottering — moving brings regret; going is good fortune.' },
    ],
  },
  48: {
    lines: [
      { cn: '井泥不食，旧井无禽。', en: 'The well is muddy and not drunk — the old well has no birds.' },
      { cn: '井谷射鲋，瓮敝漏。', en: 'The well\'s cleft shoots at carp — the jar is broken and leaks.' },
      { cn: '井渫不食，为我心恻。可汲而用。', en: 'The well is cleaned and not drunk — my heart is sorry. May be drawn and used.' },
      { cn: '井甃，无咎。', en: 'The well is walled — no blame.' },
      { cn: '井冽，寒泉食。', en: 'The well is clear — the cold spring is drunk.' },
      { cn: '井收勿幕，有孚元吉。', en: 'The well is drawn but not covered — with sincerity, original good fortune.' },
    ],
  },
  49: {
    lines: [
      { cn: '巩用黄牛之革。', en: 'Bound with the yellow ox\'s hide.' },
      { cn: '己日乃革之，征吉，无咎。', en: 'On the已有 day, then change — going is good fortune, no blame.' },
      { cn: '征凶，贞厉。革言三就，有孚。', en: 'Going is misfortune, firm correctness with vigilance. Speaking of change three times — with sincerity.' },
      { cn: '悔亡，有孚改命，吉。', en: 'Regret disappears, sincere and changing the mandate — good fortune.' },
      { cn: '大人虎变，未占有孚。', en: 'The great man changes like a tiger — without divination, sincere.' },
      { cn: '君子豹变，小人革面。征凶，贞居吉。', en: 'The superior man changes like a leopard — the small man changes his face. Going is misfortune; dwelling is firm and correct, good fortune.' },
    ],
  },
  50: {
    lines: [
      { cn: '鼎颠趾，利出否。', en: 'The tripod overturns — advantageous to put out the vile.' },
      { cn: '鼎有实，我仇有疾，不我能即，吉。', en: 'The tripod has substance — my enemy is ill, cannot approach me; good fortune.' },
      { cn: '鼎耳革，其行塞，雉膏不食。', en: 'The tripod\'s ears change — its action is blocked; the pheasant\'s fat is not eaten.' },
      { cn: '鼎折足，覆公餗，其形渥，凶。', en: 'The tripod\'s legs break — spilling the duke\'s soup, its form disgraced; misfortune.' },
      { cn: '鼎黄耳金铉，利贞。', en: 'The tripod has yellow ears and a golden crossbar — advantageous to be correct.' },
      { cn: '鼎玉铉，大吉，无不利。', en: 'The tripod has a jade crossbar — great good fortune, nothing disadvantageous.' },
    ],
  },
  51: {
    lines: [
      { cn: '震来虩虩，后笑言哑哑，吉。', en: 'Thunder comes — trembling; afterwards laughing and speaking freely — good fortune.' },
      { cn: '震来虩虩，后笑言哑哑，吉。', en: 'Thunder comes — trembling; afterwards laughing and speaking freely — good fortune.' },
      { cn: '震来厉，亿丧贝，跻于九陵。', en: 'Thunder comes with severity — one loses the currency, ascending the ninth hill.' },
      { cn: '震遂泥。', en: 'Thunder proceeding to the mud.' },
      { cn: '震往来厉，亿无丧，有事。', en: 'Thunder comes and goes with difficulty — no loss; there are affairs.' },
      { cn: '震索索，视矍矍，征凶。', en: 'Thunder trembling — looking startled; going is misfortune.' },
    ],
  },
  52: {
    lines: [
      { cn: '艮其趾，无咎，利永贞。', en: 'Stopping at the toes — no blame, advantageous to be perpetually correct.' },
      { cn: '艮其腓，不拯其随，其心不快。', en: 'Stopping at the calves — not saving one\'s followers, his heart is not pleased.' },
      { cn: '艮其限，列其夤，厉薰心。', en: 'Stopping at the waist — his back is split, difficulty as smoke to the heart.' },
      { cn: '艮其身，无咎。', en: 'Stopping at the body — no blame.' },
      { cn: '艮其辅，言有序，悔亡。', en: 'Stopping at the jaws — speech is ordered, regret disappears.' },
      { cn: '敦艮，吉。', en: 'Sincere stopping — good fortune.' },
    ],
  },
  53: {
    lines: [
      { cn: '鸿渐于干，小子厉，有言，无咎。', en: 'The swan gradually reaches the shore — the young man is in difficulty, there are words, no blame.' },
      { cn: '鸿渐于磐，饮食衎衎。', en: 'The swan gradually reaches the rock — eating and drinking contentedly.' },
      { cn: '鸿渐于木，或得其桷。', en: 'The swan gradually reaches the wood — finding perhaps a flat branch.' },
      { cn: '鸿渐于陵，妇三岁不孕，终莫之胜，吉。', en: 'The swan gradually reaches the mound — the wife has not been pregnant for three years; in the end nothing prevails against her — good fortune.' },
      { cn: '鸿渐于陆，其羽可用为仪，吉。', en: 'The swan gradually reaches the height — its feathers may be used as adornment — good fortune.' },
      { cn: '鸿渐于阿，其羽可用为仪，吉。', en: 'The swan gradually reaches the hill — its feathers may be used as adornment — good fortune.' },
    ],
  },
  54: {
    lines: [
      { cn: '归妹以娣，跛能履，征吉。', en: 'A maid going home as a concubine — lame yet able to tread; going is good fortune.' },
      { cn: '眇能视，利幽人之贞。', en: 'One-eyed yet able to see — advantageous for the hidden man to be correct.' },
      { cn: '归妹以须，反归以娣。', en: 'A maid going home by waiting — returning home as a concubine.' },
      { cn: '归妹愆期，迟归有时。', en: 'A maid going home misses her period — late homecoming has its time.' },
      { cn: '帝乙归妹，其君之袂不如其娣之袂良。', en: 'The king\'s second sister weds — her robe is not as good as her maid\'s robe.' },
      { cn: '女承筐无实，士刲羊无血。', en: 'The woman carries a basket without fruit; the man shears a sheep without blood.' },
    ],
  },
  55: {
    lines: [
      { cn: '遇其配主，虽旬无咎，往有尚。', en: 'Meeting one\'s match — though equal, no blame; going has praise.' },
      { cn: '丰其蔀，日中见斗。遇其夷主，吉。', en: 'Abundant is the covering — at midday one sees the dipper. Meeting one\'s equal master — good fortune.' },
      { cn: '丰其沛，日中见沫。折其右肱，无咎。', en: 'Abundant is the canopy — at midday one sees the small stars. Breaking one\'s right arm — no blame.' },
      { cn: '丰其蔀，日中见斗。遇其丰，吉。', en: 'Abundant is the covering — at midday one sees the dipper. Meeting abundance — good fortune.' },
      { cn: '来章，有庆誉，吉。', en: 'Coming forth with brightness — there is celebration and praise — good fortune.' },
      { cn: '丰其屋，蔀其家，窥其户，阒其无人。', en: 'Abundant is his house — covered is his home; looking through the door, silent and empty.' },
    ],
  },
  56: {
    lines: [
      { cn: '旅琐琐，斯其所取灾。', en: 'The traveler meanly — this is how he takes calamity.' },
      { cn: '旅即次，怀其资，得童仆贞。', en: 'The traveler arrives at his lodging — his money is safe, and he gains a faithful servant.' },
      { cn: '旅焚其次，丧其童仆，贞厉。', en: 'The traveler burns his lodging — loses his servant; firm correctness with vigilance.' },
      { cn: '旅于处，得其资斧，心不快。', en: 'The traveler in his dwelling — obtains his wealth and axe; his heart is not pleased.' },
      { cn: '射雉，一矢亡，终以誉命。', en: 'Shooting a pheasant — one arrow is lost; in the end by praise and command.' },
      { cn: '鸟焚其巢，旅人先笑后号咷。', en: 'The bird burns its nest — the traveler first laughs, then weeps.' },
    ],
  },
  57: {
    lines: [
      { cn: '进退，利武人之贞。', en: 'Advancing and retreating — advantageous for the martial man to be correct.' },
      { cn: '直，利见大人，不习无不利。', en: 'Straight — advantageous to see the great man; by nature not by discipline, nothing disadvantageous.' },
      { cn: '巽在床下，用史巫纷若，吉无咎。', en: 'Concealed beneath the couch — using the scribe and wizard in profusion; good fortune, no blame.' },
      { cn: '无咎，悔亡。', en: 'No blame — regret disappears.' },
      { cn: '贞吉，悔亡，无不利。无初有终。', en: 'Firm correctness yields good fortune, regret disappears, nothing disadvantageous — no beginning, but an end.' },
      { cn: '巽在床下，丧其资斧，贞凶。', en: 'Concealed beneath the couch — losing one\'s wealth and axe; firm correctness with vigilance.' },
    ],
  },
  58: {
    lines: [
      { cn: '兑（说），无咎。', en: 'Speaking — no blame.' },
      { cn: '和兑（说），吉。', en: 'Speaking in harmony — good fortune.' },
      { cn: '来兑（说），凶。', en: 'Coming to speak — misfortune.' },
      { cn: '商兑（说），咎。', en: 'Discussing — blame.' },
      { cn: '贞厉。', en: 'Firm correctness with vigilance.' },
      { cn: '引兑（说）。', en: 'Drawing one to speak.' },
    ],
  },
  59: {
    lines: [
      { cn: '用拯马壮，吉。', en: 'Using rescue with a strong horse — good fortune.' },
      { cn: '涣奔其机，悔亡。', en: 'Dispersing to rush to his desk — regret disappears.' },
      { cn: '涣其躬，无悔。', en: 'Dispersing his body — no regret.' },
      { cn: '涣其群，元吉。涣有丘，匪夷所思。', en: 'Dispersing his crowd — original good fortune. Dispersing has hills — not what one would think.' },
      { cn: '涣汗其大号，涣王居，无咎。', en: 'Dispersing his great commands — dispersing the king\'s dwelling — no blame.' },
      { cn: '涣其血，去逖出，无咎。', en: 'Dispersing its blood — going far out — no blame.' },
    ],
  },
  60: {
    lines: [
      { cn: '不出户庭，无咎。', en: 'Not going out of the door and court — no blame.' },
      { cn: '不出户庭，凶。', en: 'Not going out of the door and court — misfortune.' },
      { cn: '不节若，则嗟若，无咎。', en: 'If not regulated, then one sighs — no blame.' },
      { cn: '安节，亨。', en: 'Contented regulation — prosperity.' },
      { cn: '甘节，吉，往有尚。', en: 'Sweet regulation — good fortune, going has praise.' },
      { cn: '苦节不可贞。', en: 'Bitter regulation — cannot be correct.' },
    ],
  },
  61: {
    lines: [
      { cn: '虞吉，有他不燕。', en: 'Careful — good fortune; if otherwise, no peace.' },
      { cn: '鸣鹤在阴，其子和之。', en: 'The crane cries in the shade — its child responds.' },
      { cn: '得敌，或鼓或罢，或泣或歌。', en: 'Meeting an enemy — one may drum, or stop, or weep, or sing.' },
      { cn: '月几望，马匹亡，无咎。', en: 'The moon nearly full — the horse loses its mate — no blame.' },
      { cn: '有孚挛如，无咎。', en: 'With sincerity, drawn together — no blame.' },
      { cn: '翰音登于天，贞凶。', en: 'The cock\'s voice ascends to heaven — firm correctness with vigilance.' },
    ],
  },
  62: {
    lines: [
      { cn: '飞鸟以凶。', en: 'The bird flies low — misfortune.' },
      { cn: '过其祖，遇其妣。不及其君，遇其臣，无咎。', en: 'Passing his grandfather, meeting his grandmother — not reaching his lord, meeting his servant — no blame.' },
      { cn: '弗过防之，从或戕之，凶。', en: 'Not guarding — one may be slain; misfortune.' },
      { cn: '无咎，弗过遇之。往厉必戒，勿用永贞。', en: 'No blame — not passing, one meets it. Going is dangerous, must be cautious — do not use perpetual correctness.' },
      { cn: '密云不雨，自我西郊。', en: 'Dense cloud, no rain — from my western suburb.' },
      { cn: '弗遇过之，飞鸟离之，凶，是谓灾眚。', en: 'Not meeting, passing it — the bird flies away — misfortune; this means calamity.' },
    ],
  },
  63: {
    lines: [
      { cn: '曳其轮，濡其尾，无咎。', en: 'Dragging the wheel, wetting the tail — no blame.' },
      { cn: '妇丧其茀，勿逐，七日得。', en: 'The woman loses her ornament — do not pursue, in seven days she shall recover.' },
      { cn: '高宗伐鬼方，三年克之，小人勿用。', en: 'Gao Zong attacks the ghost region — three years to overcome it; the small man is not to be used.' },
      { cn: '繻有衣袽，终日戒。', en: 'The rudder has worn clothes — all day warning.' },
      { cn: '东邻杀牛，不如西邻之禴祭，实受其福。', en: 'The eastern neighbor kills an ox — not as good as the western neighbor\'s spring sacrifice; truly receiving its blessing.' },
      { cn: '濡其首，厉。', en: 'Wetting the head — difficulty.' },
    ],
  },
  64: {
    lines: [
      { cn: '濡其尾，吝。', en: 'Wetting the tail — regret.' },
      { cn: '曳其轮，贞吉。', en: 'Dragging the wheel — firm correctness yields good fortune.' },
      { cn: '未济，征凶，利涉大川。', en: 'Not yet crossed — going is misfortune, advantageous to cross the great river.' },
      { cn: '贞吉悔亡。震用伐鬼方，三年有赏于大国。', en: 'Firm correctness yields good fortune, regret disappears. Thunder used to attack the ghost region — three years, and there is reward in the great state.' },
      { cn: '贞吉，无悔。君子之光，有孚吉。', en: 'Firm correctness yields good fortune, no regret. The light of the superior man — sincere, good fortune.' },
      { cn: '有孚于饮酒，无咎。濡其首，有孚失是。', en: 'Sincerity in drinking wine — no blame. Wetting the head — sincerity loses this.' },
    ],
  },
};

/**
 * Look up the six yao (lines) for a given hexagram.
 * @param {number} num hexagram number (1..64)
 * @returns {Array<{cn: string, en: string}>} six lines from bottom to top
 */
function getLines(num) {
  const entry = HEXAGRAM_LINES[num];
  if (!entry) {
    throw new Error(`No lines data for hexagram ${num}`);
  }
  return entry.lines;
}

/**
 * Look up the "use" instruction for pure hexagrams (Qian / Kun) or null.
 */
function getUse(num) {
  const entry = HEXAGRAM_LINES[num];
  return entry && entry.use ? entry.use : null;
}

module.exports = {
  HEXAGRAM_LINES,
  getLines,
  getUse,
};
