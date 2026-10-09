import { readFileSync, writeFileSync } from 'node:fs';

const stripBom = (s) => s.replace(/^\uFEFF/, '');

const lessons = [
  {
    src: 'C:\\Users\\Administrator\\AppData\\Roaming\\Trae CN\\User\\workspaceStorage\\296eefd83860c0263139a93d0bc1d62d\\long-text\\6abb556e347f35b738e7824e\\mv0bnnnw-6pas\\012 Lesson....txt',
    id: 'lesson-12',
    enTitle: 'Lesson 12 · Personality and Choice: Observing Behavioral Patterns Through the Images of the Eight Trigrams',
    zhTitle: '第12课 · 性格与选择：从八卦之象观察行为模式',
    enSkip: 2, zhSkip: 1,
  },
  {
    src: 'C:\\Users\\Administrator\\AppData\\Roaming\\Trae CN\\User\\workspaceStorage\\296eefd83860c0263139a93d0bc1d62d\\long-text\\6abb556e347f35b738e7824e\\mv0bnuo4-ndkx\\013 Lesson....txt',
    id: 'lesson-13',
    enTitle: 'Lesson 13 · Destiny and Choice: Understanding Life Through Conditions, Circumstances, and Action',
    zhTitle: '第13课 · 命运与选择：在条件、时势与行动之间理解人生',
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
