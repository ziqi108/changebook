#!/usr/bin/env node
/**
 * 【已废弃】本脚本已完成历史使命：中文课程数据现以 content/courses/<slug>.zh.json 为事实源，
 * 由 scripts/generate-content.mjs 在构建前生成 lib/generated/。保留本文件仅供追溯历史迁移过程。
 *
 * build-course-zh.mjs — 从 git HEAD 双语课程源数据生成 lib/course-details-zh.ts
 *
 * 输入：项目根 _zh_source.tmp.ts（由 git HEAD 的 lib/course-details.ts 导出）
 * 输出：lib/course-details-zh.ts（纯中文 CourseDetail 数据）
 *
 * 转换规则：
 * - 中文段落逐字保留（经典原文不校勘）；英文段落/英文斜体引文整行删除
 * - `**中文 (English)**` → `**中文**`；`**English (中文)**` → `**中文**`
 * - 课程 Lesson N → 第N课；Hexagram N → 第N卦（汉字数字）
 * - 爻位标签规范化：二九→九二、二六→六二 等（按 HEAD 声明的阴阳属性，位置数字后置）
 * - 六十四卦的总览/象征对应/实践三个槽位用本脚本内嵌的中文表替换
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const SRC = '_zh_source.tmp.ts';
const TMP_MJS = '_zh_source_gen.tmp.mjs';
const OUT = 'lib/course-details-zh.ts';

const CJK = /[一-鿿㐀-䶿]/;
const hasCJK = (s) => CJK.test(s);

/* ---------- 六十四卦中文槽位表（p=总览核心句，a=实践建议） ---------- */
const HEX = {
  1: { p: '象征至刚至健的创造之力', a: '占得此卦，宜自强不息，以德领事，主动进取而不失中正。' },
  2: { p: '象征至柔至顺的包容承载', a: '宜柔顺守正，厚德载物，先随从而后有所成。' },
  3: { p: '象征万物初生时的艰难', a: '起步维艰，宜积蓄力量、建立根基，不可急于求成。' },
  4: { p: '象征蒙昧待启与学习之道', a: '宜虚心求教、循序学习，不明则问，切忌自以为是。' },
  5: { p: '象征等待时机与蓄养实力', a: '时机未至，宜耐心等待、养精蓄锐，冒进则有险。' },
  6: { p: '象征争讼与矛盾冲突', a: '宜凡事忍让、以和为贵；争讼虽或可胜，终非善策。' },
  7: { p: '象征兴师动众与严明纪律', a: '行事须有纪律与统帅之明，名正而后动，方能众志成城。' },
  8: { p: '象征亲比相依与团结', a: '宜择善而从、以诚相待，亲近贤者则上下相安。' },
  9: { p: '象征小有积蓄、以柔畜刚', a: '力量尚小，宜蓄势待时，以柔济刚，不可贪功冒进。' },
  10: { p: '象征履危而行、以礼自守', a: '如履虎尾，宜谨慎守礼、步步为营，慎行则无咎。' },
  11: { p: '象征天地交泰、通达安和', a: '居安思危，上下相通则诸事顺遂，泰极须防否来。' },
  12: { p: '象征天地不交、闭塞不通', a: '处否之世，宜俭德避难、退守静待，不可以荣华乱志。' },
  13: { p: '象征与人和同、同心协力', a: '宜开诚布公、志同道合，以正道聚合人心则事可成。' },
  14: { p: '象征盛大富有、所有者大', a: '富有之时更须以谦德自守，顺天休命，则大有多助。' },
  15: { p: '象征谦逊自处、损益得中', a: '谦谦君子，卑以自牧，有功而不居，则愈谦愈吉。' },
  16: { p: '象征和乐豫备、顺而以动', a: '顺理而动则乐，然乐极须防怠惰，宜居安思危、预作绸缪。' },
  17: { p: '象征随顺时势、择善而从', a: '宜随时而动、以诚相随，从正则彼此皆益。' },
  18: { p: '象征整治积弊、拨乱反正', a: '积弊须治，宜刚柔并济、正本清源，治蛊而后可致新。' },
  19: { p: '象征阳气增长、居上临下', a: '以宽厚临人，教导思虑务须周到，盛时而防其衰。' },
  20: { p: '象征观仰瞻视、省察大势', a: '宜静观大势、反观自身；观人亦为人所观，故须以诚示人。' },
  21: { p: '象征咬合断制、排除障碍', a: '遇梗阻须以明断除之，赏罚分明，刚柔相济则事通。' },
  22: { p: '象征文饰美观、质文相宜', a: '宜返朴归真、文质相称，不为浮华所惑，则小利有攸往。' },
  23: { p: '象征阴盛剥阳、剥落衰微', a: '剥落之时，宜厚下安宅、顺止其剥，守正以待阳复。' },
  24: { p: '象征一阳来复、迷途知返', a: '不远而复，宜养阳气于微，顺时而进，则出入无疾。' },
  25: { p: '象征不妄为、守正无妄', a: '动以天理，不妄行则无灾；妄求则有眚，宜守本分。' },
  26: { p: '象征大有畜聚、畜德养贤', a: '宜畜德养贤、厚积其力，止而蓄健，然后可以大行。' },
  27: { p: '象征颐养之道、慎言节食', a: '观其自养，宜慎言语、节饮食，养正则吉。' },
  28: { p: '象征阳刚过盛、非常之时', a: '非常之事须非常之行，然过极须防倾覆，宜量力慎行。' },
  29: { p: '象征重险相叠、行险守信', a: '处险之中，宜行险而不失其信、有常德，以诚破险则可出。' },
  30: { p: '象征光明附丽、柔顺守正', a: '宜重明以丽乎正，柔顺附丽于正道，则亨通有成。' },
  31: { p: '象征二气感应、以诚相感', a: '以虚受人、以诚相感，两情相悦则往来皆吉。' },
  32: { p: '象征恒久持守、立不易方', a: '宜持之以恒、守常不渝，变动失守则无成。' },
  33: { p: '象征退避远害、全身而退', a: '小人渐长，宜远小人、及时而退，退避非怯乃智。' },
  34: { p: '象征阳气壮盛、以正驭强', a: '壮而以正，非礼弗履；恃强则折，宜以德济力。' },
  35: { p: '象征光明上进、柔而日进', a: '顺而丽乎大明，宜柔进上行，昭明德于前路。' },
  36: { p: '象征光明受损、晦而转明', a: '用晦而明，处难宜内明外柔，藏才守正以待时。' },
  37: { p: '象征家道正位、内外有序', a: '宜正家而正天下，言有物而行有恒，则家道兴。' },
  38: { p: '象征背离乖异、异中求同', a: '宜存异求同、以小事吉，化睽为合而后通。' },
  39: { p: '象征前行遇阻、见险而止', a: '宜反身修德、借助贤友，难中守正则无碍。' },
  40: { p: '象征险难得解、宜速安宁', a: '险解之后宜赦过宥罪、速谋安宁，不宜久留往事。' },
  41: { p: '象征减损私欲、损下益上', a: '宜惩忿窒欲、损私奉公，先损后得，损而不已必益。' },
  42: { p: '象征增益于下、损上益民', a: '宜迁善改过、厚施于人，益以兴利则民说无疆。' },
  43: { p: '象征果决去邪、扬善决断', a: '决而去之须以正告众，恃勇则危，宜慎决而光。' },
  44: { p: '象征一阴始生、不期而遇', a: '宜见微知著、防微杜渐，不可姑息养成其势。' },
  45: { p: '象征荟萃聚集、聚人以正', a: '宜以诚敬聚众、顺天命而用人，则聚而有成。' },
  46: { p: '象征柔顺上升、积小成大', a: '宜循序而上、积小成高，用贤则升阶有据。' },
  47: { p: '象征身处困顿、困而守志', a: '处困而不失其守，宜少言多行、以命御困，困而不屈终可亨。' },
  48: { p: '象征井养不穷、修德养人', a: '宜修德不迁、养人不倦，济人利物而功不在一时。' },
  49: { p: '象征变革更新、顺天应人', a: '己日乃孚，革而信之；改故鼎新须待时而动。' },
  50: { p: '象征鼎新烹养、正位凝命', a: '宜正位凝命、养贤尚德，去故取新以承天道。' },
  51: { p: '象征震动惊惧、恐惧修省', a: '震来而惊不乱，宜恐惧修省，不失其所守则吉。' },
  52: { p: '象征止于所当止、敦笃安静', a: '时止则止，时行则行，宜思不出其位，止而得其所。' },
  53: { p: '象征循序渐进、进以正序', a: '宜徐行而不躁、循序以进，如鸿渐于陆则吉。' },
  54: { p: '象征守分处下、慎终如始', a: '位不当则宜守分知敝，正其始终则无咎。' },
  55: { p: '象征丰大光明、盛极须防', a: '日中则昃，宜守中不骄，盛大之时防其昏蔽。' },
  56: { p: '象征行旅在外、柔顺谨慎', a: '旅居之途，宜谨言慎行、柔顺中庸，小亨而莫求大居。' },
  57: { p: '象征随顺申命、谦卑行事', a: '重巽以申命，宜柔顺行事、刚断在中，则行得其宜。' },
  58: { p: '象征和悦相处、丽泽相滋', a: '宜以正相说、朋友讲习，和而不流则吉。' },
  59: { p: '象征涣散离散、聚涣为整', a: '风行水上，宜济聚人心、散私成公，则涣然冰释。' },
  60: { p: '象征节制有度、立为法度', a: '节以制度，宜安节而亨，不伤财不害民，过苦则不可贞。' },
  61: { p: '象征中心诚信、信及豚鱼', a: '宜诚存于中、感通于外，柔在内而刚得中则吉。' },
  62: { p: '象征小有越过、宜守其分', a: '宜小事吉而大事凶，行过乎恭、哀过乎戚，不可好高骛远。' },
  63: { p: '象征功成既济、守成防患', a: '初吉终乱，既济犹宜思患豫防、守成不怠。' },
  64: { p: '象征事未成形、慎始慎行', a: '宜辨物居方、循序而进，慎之又慎则终可既济。' },
};

/* ---------- 课程级中文元数据 ---------- */
const ZH_META = {
  'beginner-course': {
    title: '《易经》初阶课程',
    subtitle: '阴阳的基础、八卦之象与铜钱起卦法，从零开始完成你的第一个卦象。',
    levelZh: '初级',
    nextCohort: '开放报名',
    includes: {
      'Introduction to yin and yang': '阴阳基础',
      'The eight trigrams (Bagua)': '八卦详解',
      'History and structure of the I Ching': '《易经》的历史与结构',
      'Basic coin-casting method': '基本起卦方法',
      'How to formulate a question': '如何提出一个好问题',
      'Beginner practice readings': '初学解读练习',
    },
  },
  'intermediate-course': {
    title: '《易经》进阶课程',
    subtitle: '系统研读全部六十四卦，将《易经》带入关系、事业与自我修养等现代生活场景。',
    levelZh: '中级',
    nextCohort: '开放报名',
    includes: {
      'Translation and commentary on all 64 hexagrams': '六十四卦译文与注释',
      'Classical texts: Tuan Zhuan, Xiang Zhuan, Wenyan Zhuan': '经典传文：彖传、象传、文言传',
      'Symbolic correspondences and inner logic': '象征对应与内在义理',
      'Case studies for daily life application': '日常生活案例剖析',
      'Q&A sessions with the instructor': '讲师答疑环节',
      'Community forum access': '学员社区交流',
    },
  },
  'advanced-course': {
    title: '高阶研习',
    subtitle: '面向《系辞》《说卦》等经典文本的深度研习，课程正在筹备之中。',
    levelZh: '高级',
    nextCohort: '待定',
    includes: {},
  },
};

const CN_NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
function cnNum(n) {
  if (n <= 10) return CN_NUM[n];
  if (n < 20) return '十' + CN_NUM[n - 10];
  const t = Math.floor(n / 10);
  const o = n % 10;
  return CN_NUM[t] + '十' + (o ? CN_NUM[o] : '');
}

/* ---------- 行级转换 ---------- */
const YAO_SWAP = /^([二三四五])([九六])$/;

/** 清洗 **标签 (英文)**：返回中文标签；纯英文标签返回 null */
function cleanLabel(label) {
  label = label.trim();
  let base = label;
  let paren = '';
  const m = label.match(/^(.*?)\s*\(([^)]*)\)$/);
  if (m) {
    base = m[1].trim();
    paren = m[2].trim();
  }
  if (YAO_SWAP.test(base)) base = base[1] + base[0];
  if (hasCJK(base)) return base;
  if (hasCJK(paren)) return paren;
  return null;
}

/** 标题转换：Lesson 1 · X (Y) → 第1课 · X ；Hexagram 6 · 讼 (Sòng) — Conflict → 第六卦 · 讼 */
function convertTitle(title, kind) {
  if (kind === 'lesson') {
    const m = title.match(/^Lesson\s+(\d+)\s*·\s*(.+)$/);
    if (m) {
      const zh = m[2].replace(/\s*\([^)]*\)\s*$/, '').trim();
      return `第${m[1]}课 · ${zh}`;
    }
  }
  if (kind === 'hex') {
    const m = title.match(/^Hexagram\s+(\d+)\s*·\s*([一-鿿]+)([\s\S]*)$/);
    if (m) {
      const rest = m[3];
      // 课程（chapter）标题：丢弃英文名与拼音；课程内（lesson）标题保留（X为Y）卦象名
      const san = rest.match(/[(]([一-鿿]{3})[)]\s*$/);
      const base = `第${cnNum(Number(m[1]))}卦 · ${m[2]}`;
      return san ? `${base}（${san[1]}）` : base;
    }
  }
  throw new Error(`unconvertible title: ${title}`);
}

/**
 * 描述正文行级转换。槽位注入：
 * - `**Overview**` → `**总览**` + 中文总览句
 * - `**…象征对应**` → 头 + 中文对应行（英文行吞掉）
 * - `**…实践**` → 头 + 中文建议行（英文行吞掉）
 */
function convertDescription(desc, hexNum /* number | null */) {
  const lines = desc.split('\n');
  const out = [];
  let swallow = false; // 吞掉后续英文普通行，直到遇到下一个结构行
  let pendingCorr = null; // 在象征对应头之后注入
  let pendingPractice = null;
  let lastWasBlank = true;

  const push = (s) => {
    if (s === '') {
      if (!lastWasBlank) out.push('');
      lastWasBlank = true;
    } else {
      out.push(s);
      lastWasBlank = false;
    }
  };

  for (const raw of lines) {
    const t = raw.trim();
    if (!t) {
      push('');
      continue;
    }
    if (/^---$/.test(t)) {
      swallow = false;
      push('---');
      continue;
    }
    // 英文斜体引文行：> *...*
    if (/^>\s*\*[^*]+\*$/.test(t)) continue;
    // 中文引文行
    if (/^>/.test(t)) {
      swallow = false;
      push(t);
      continue;
    }
    // 标题/列表头行（可带 "- " / "1. " 前缀）
    const hm = t.match(/^(-\s+|\d+\.\s+)?\*\*([^*]+)\*\*(\s*:\s*|\s*：\s*)?(.*)$/);
    if (hm && hm[2]) {
      swallow = false;
      const prefix = hm[1] || '';
      const colon = hm[3] || '';
      const rest = hm[4] || '';
      let label = hm[2].trim();

      // Overview 槽位（纯英文头）→ 注入中文总览
      if (label === 'Overview' && hexNum) {
        push('**总览**');
        push('');
        push(HEX[hexNum].overview);
        swallow = true; // 吞掉后续英文总览段
        continue;
      }
      const cleaned = cleanLabel(label);
      if (cleaned === null) {
        // 纯英文头：若其内容含中文则原样保留，否则丢弃
        if (hasCJK(rest)) push(`${prefix}**${label}**${colon}${rest}`);
        continue;
      }
      label = cleaned;

      if (hexNum && /象征对应$/.test(label)) {
        push(`${prefix}**${label}**`);
        push('');
        push(HEX[hexNum].corr);
        swallow = true;
        continue;
      }
      if (hexNum && /^实践$/.test(label)) {
        push(`${prefix}**${label}**`);
        push('');
        push(HEX[hexNum].advice);
        swallow = true;
        continue;
      }
      if (rest && hasCJK(rest)) push(`${prefix}**${label}**${colon}${rest}`);
      else if (rest && !hasCJK(rest)) continue; // 英文尾注行丢弃
      else push(`${prefix}**${label}**`);
      continue;
    }
    // 普通行：以首个「文字字符」判断语言
    if (swallow) continue;
    const firstChar = (t.replace(/^[^一-鿿㐀-䶿A-Za-z0-9]+/, '') || ' ')[0];
    if (hasCJK(firstChar)) push(t);
    // 英文行丢弃
  }
  // 去掉尾部空行
  while (out.length && out[out.length - 1] === '') out.pop();
  return out.join('\n');
}

/* ---------- 主流程 ---------- */
// 1) 剥类型 → 临时 mjs
let src = readFileSync(SRC, 'utf8').replace(/^\uFEFF/, '');
const lines = src.split(/\r?\n/);
const startIdx = lines.findIndex((l) => l.startsWith('export const COURSE_DETAILS'));
if (startIdx < 0) throw new Error('COURSE_DETAILS not found in source');
const kept = lines.slice(startIdx).filter((l) => !l.startsWith('export const getCourseBySlug'));
kept[0] = 'export const COURSE_DETAILS = {';
writeFileSync(TMP_MJS, kept.join('\n'), 'utf8');

const { COURSE_DETAILS } = await import(pathToFileURL(TMP_MJS).href);

// 2) 总览句构建（从英文 Overview 提取三字卦象）
function buildOverviews() {
  const intermediate = COURSE_DETAILS['intermediate-course'];
  for (const ch of intermediate.chapters) {
    const m = ch.id.match(/^hex-(\d+)$/);
    if (!m) throw new Error(`bad chapter id ${ch.id}`);
    const n = Number(m[1]);
    const desc = ch.lessons[0].description;
    const om = desc.match(/formed by the (\w+) (?:over|below|above) (\w+)\s*—\s*([一-鿿]+?)\s*—/);
    if (!om) throw new Error(`no overview pattern in ${ch.id}`);
    const sanzi = om[3];
    const upper = sanzi[1] === '为' ? sanzi[0] : sanzi[0];
    const lower = sanzi[1] === '为' ? sanzi[0] : sanzi[1];
    const shape = upper === lower ? `上下皆${upper}` : `上${upper}下${lower}`;
    if (!HEX[n]) throw new Error(`missing HEX table entry ${n}`);
    HEX[n].overview = `${sanzi}，${shape}，${HEX[n].p}。`;
    HEX[n].advice = HEX[n].a;
  }
}
buildOverviews();

// 3) 提取象征对应行（英文行 → 中文顿号列表）
function buildCorrespondences() {
  const intermediate = COURSE_DETAILS['intermediate-course'];
  for (const ch of intermediate.chapters) {
    const n = Number(ch.id.match(/^hex-(\d+)$/)[1]);
    const desc = ch.lessons[0].description;
    const cm = desc.match(/corresponds to:\s*(.+)$/m);
    if (!cm) throw new Error(`no correspondences in ${ch.id}`);
    const tokens = cm[1]
      .split(/,\s*/)
      .map((tok) => {
        const m = tok.match(/\(([^)]*)\)/);
        return m && hasCJK(m[1]) ? m[1] : null;
      })
      .filter(Boolean);
    if (tokens.length < 3) throw new Error(`few correspondence tokens in ${ch.id}: ${tokens}`);
    HEX[n].corr = `象征对应：${tokens.join('、')}。`;
  }
}
buildCorrespondences();

// 4) 逐课程转换
function convertCourse(slug) {
  const c = COURSE_DETAILS[slug];
  if (!c) throw new Error(`missing course ${slug}`);
  const meta = ZH_META[slug];
  const isHex = slug === 'intermediate-course';

  const chapters = c.chapters.map((ch, i) => {
    const kind = isHex ? 'hex' : 'lesson';
    const hexNum = isHex ? Number(ch.id.match(/^hex-(\d+)$/)[1]) : null;
    return {
      id: ch.id,
      title: convertTitle(ch.title, kind),
      lessons: ch.lessons.map((ls) => ({
        id: ls.id,
        title: convertTitle(ls.title, kind),
        duration: ls.duration.replace(/^(\d+)\s*min$/, '$1 分钟'),
        description: convertDescription(ls.description, hexNum),
      })),
    };
  });

  const includes = c.includes.map((s) => {
    const zh = meta.includes[s];
    if (!zh) throw new Error(`unmapped include item: "${s}"`);
    return zh;
  });

  return {
    slug,
    title: meta.title,
    subtitle: meta.subtitle,
    heroImage: c.heroImage,
    level: c.level,
    levelZh: meta.levelZh,
    chapters,
    includes,
    price: '免费',
    currency: '',
    nextCohort: meta.nextCohort,
  };
}

const OUT_OBJ = {
  'beginner-course': convertCourse('beginner-course'),
  'intermediate-course': convertCourse('intermediate-course'),
  'advanced-course': convertCourse('advanced-course'),
};

// 5) 校验
{
  const b = OUT_OBJ['beginner-course'];
  const im = OUT_OBJ['intermediate-course'];
  if (b.chapters.length !== 3) throw new Error(`beginner chapters = ${b.chapters.length}`);
  if (im.chapters.length !== 64) throw new Error(`intermediate chapters = ${im.chapters.length}`);
  if (OUT_OBJ['advanced-course'].chapters.length !== 0) throw new Error('advanced should be empty');

  // 拉丁词残留检查：只查展示文本字段（id/slug/heroImage/level 为结构性字段，允许拉丁）
  const LATIN = /[A-Za-z][A-Za-z’'-]*/g;
  const DISPLAY_KEYS = new Set(['title', 'subtitle', 'levelZh', 'nextCohort', 'price', 'duration', 'description']);
  const hits = [];
  const walk = (o, path) => {
    if (typeof o === 'string') {
      const key = path.split('.').pop().replace(/\[\d+\]$/, '');
      if (DISPLAY_KEYS.has(key) || key === '') { // '' = includes 数组元素
        for (const m of o.matchAll(LATIN)) hits.push(`${path}: ${m[0]}`);
      }
    } else if (Array.isArray(o)) o.forEach((v, i) => walk(v, `${path}[${i}]`));
    else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) walk(v, `${path}.${k}`);
  };
  walk(OUT_OBJ, 'root');
  if (hits.length) {
    console.log('LATIN residue:');
    hits.slice(0, 40).forEach((h) => console.log('  ' + h));
    throw new Error(`latin residue count = ${hits.length}`);
  }

  // 爻位标签抽查：不得再有 二九/三九/四九/五九/二六/四六 形态
  for (const ch of im.chapters) {
    for (const ls of ch.lessons) {
      const bad = ls.description.match(/\*\*[二三四五][九六]\*\*/);
      if (bad) throw new Error(`bad yao label in ${ch.id}: ${bad[0]}`);
    }
  }
}

// 6) 写出
const ts = `/**
 * 中文课程数据 —— 由 scripts/build-course-zh.mjs 从 git HEAD 双语源数据生成。
 * 经典原文（卦辞/彖传/象传/爻辞）逐字保留，请勿在此文件手工编辑；
 * 需调整时修改生成脚本并重新运行：node scripts/build-course-zh.mjs
 */
import type { CourseDetail } from '@/lib/course-details';

export const COURSE_DETAILS_ZH: Record<string, CourseDetail> = ${JSON.stringify(OUT_OBJ, null, 2)};

export const getCourseBySlugZh = (slug: string): CourseDetail | undefined =>
  COURSE_DETAILS_ZH[slug];
`;
writeFileSync(OUT, ts.replace(/\r\n/g, '\n'), 'utf8');

// 抽查输出
console.log('== hex-01 title/desc head ==');
console.log(OUT_OBJ['intermediate-course'].chapters[0].lessons[0].title);
console.log(OUT_OBJ['intermediate-course'].chapters[0].lessons[0].description.split('\n').slice(0, 8).join('\n'));
console.log('== hex-06 ==');
console.log(OUT_OBJ['intermediate-course'].chapters[5].lessons[0].title);
console.log(OUT_OBJ['intermediate-course'].chapters[5].lessons[0].description.split('\n').slice(0, 6).join('\n'));
console.log('== hex-49 ==');
console.log(OUT_OBJ['intermediate-course'].chapters[48].lessons[0].title);
console.log('== hex-64 ==');
console.log(OUT_OBJ['intermediate-course'].chapters[63].lessons[0].title);
console.log('== beginner lesson-01 ==');
console.log(OUT_OBJ['beginner-course'].chapters[0].title);
console.log(OUT_OBJ['beginner-course'].chapters[0].lessons[0].title);
console.log(OUT_OBJ['beginner-course'].chapters[0].lessons[0].description.split('\n').slice(0, 8).join('\n'));
console.log('\nOK: wrote', OUT);
