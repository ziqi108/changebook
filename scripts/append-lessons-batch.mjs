import { readFileSync, writeFileSync } from 'node:fs';

const stripBom = (s) => s.replace(/^\uFEFF/, '');
const temp = process.env.TEMP;

const lessons = [
  {
    src: 'C:\\Users\\Administrator\\AppData\\Roaming\\Trae CN\\User\\workspaceStorage\\296eefd83860c0263139a93d0bc1d62d\\long-text\\6abb556e347f35b738e7824e\\mv08fi80-qty7\\009 Lesson....txt',
    id: 'lesson-09',
    enTitle: 'Lesson 9 · Rise, Decline, and Transformation: Understanding Life Cycles',
    zhTitle: '第9课 · 盛衰与转化：看懂人生周期',
    enSkip: 1, zhSkip: 1, // 009 只有中英各一个标题（第2行是修订说明）
  },
  {
    src: 'C:\\Users\\Administrator\\AppData\\Roaming\\Trae CN\\User\\workspaceStorage\\296eefd83860c0263139a93d0bc1d62d\\long-text\\6abb556e347f35b738e7824e\\mv08fp48-4y24\\010 Lesson....txt',
    id: 'lesson-10',
    enTitle: 'Lesson 10 · The Movement of Heaven Is Strong: Building Sustainable Growth',
    zhTitle: '第10课 · 天行健：建立可持续的成长力量',
    enSkip: 2, zhSkip: 1,
  },
  {
    src: 'C:\\Users\\Administrator\\AppData\\Roaming\\Trae CN\\User\\workspaceStorage\\296eefd83860c0263139a93d0bc1d62d\\long-text\\6abb556e347f35b738e7824e\\mv08fuw0-o8nk\\011 Lesson....txt',
    id: 'lesson-11',
    enTitle: 'Lesson 11 · Those Who Know Themselves Are Clear: Self-Knowledge Through Observation and Feedback',
    zhTitle: '第11课 · 自知者明：在观察与反馈中认识自己',
    enSkip: 2, zhSkip: 1,
  },
];

const cnPattern = /[\u4e00-\u9fff]/;
const stripFootnotes = (l) => l.replace(/\s*\[[a-z0-9.-]+\.(com|org|cn|net|edu|io|tw)\][\w\s,.\-]*/g, '').replace(/\s+/g, ' ').trim();

function splitAndParse(src, enSkip, zhSkip) {
  const raw = stripBom(readFileSync(src, 'utf8'));
  const lines = raw.split(/\r?\n/);
  const en = [], zh = [];
  for (const l of lines) {
    const c = stripFootnotes(l);
    if (!c) continue;
    if (cnPattern.test(c)) zh.push(c);
    else en.push(c);
  }
  const enBody = en.slice(enSkip).join('\n').replace(/(\n){3,}/g, '\n\n').trim();
  const zhBody = zh.slice(zhSkip).join('\n').replace(/(\n){3,}/g, '\n\n').trim();
  return { enBody, zhBody };
}

// 加载两门课程
const enPath = 'content/courses/beginner-course.en.json';
const zhPath = 'content/courses/beginner-course.zh.json';
const en = JSON.parse(stripBom(readFileSync(enPath, 'utf8')));
const zh = JSON.parse(stripBom(readFileSync(zhPath, 'utf8')));

for (const L of lessons) {
  const { enBody, zhBody } = splitAndParse(L.src, L.enSkip, L.zhSkip);
  en.chapters.push({
    id: L.id,
    title: L.enTitle,
    lessons: [{ id: `${L.id}-1`, title: L.enTitle, duration: '60 min', description: enBody }],
  });
  zh.chapters.push({
    id: L.id,
    title: L.zhTitle,
    lessons: [{ id: `${L.id}-1`, title: L.zhTitle, duration: '60 分钟', description: zhBody }],
  });
  console.log(`${L.id}: EN ${enBody.length} chars, ZH ${zhBody.length} chars`);
}

writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
writeFileSync(zhPath, JSON.stringify(zh, null, 2), 'utf8');
console.log('EN chapters:', en.chapters.length, 'ZH chapters:', zh.chapters.length);
