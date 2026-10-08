import { readFileSync, writeFileSync } from 'node:fs';

const stripBom = (s) => s.replace(/^\uFEFF/, '');
const enBody = stripBom(readFileSync(`${process.env.TEMP}\\lesson08-en.txt`, 'utf8')).trim();
const zhBody = stripBom(readFileSync(`${process.env.TEMP}\\lesson08-zh.txt`, 'utf8')).trim();

// 英文
const enPath = 'content/courses/beginner-course.en.json';
const en = JSON.parse(stripBom(readFileSync(enPath, 'utf8')));
en.chapters.push({
  id: 'lesson-08',
  title: 'Lesson 8 · The Wisdom of the Mean: Avoiding Extremes',
  lessons: [{
    id: 'lesson-08-1',
    title: 'Lesson 8 · The Wisdom of the Mean: Avoiding Extremes',
    duration: '60 min',
    description: enBody,
  }],
});
writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');

// 中文
const zhPath = 'content/courses/beginner-course.zh.json';
const zh = JSON.parse(stripBom(readFileSync(zhPath, 'utf8')));
zh.chapters.push({
  id: 'lesson-08',
  title: '第8课 · 中道智慧：避免极端的人生艺术',
  lessons: [{
    id: 'lesson-08-1',
    title: '第8课 · 中道智慧：避免极端的人生艺术',
    duration: '60 分钟',
    description: zhBody,
  }],
});
writeFileSync(zhPath, JSON.stringify(zh, null, 2), 'utf8');

console.log('EN chapters:', en.chapters.length, 'descLen:', enBody.length);
console.log('ZH chapters:', zh.chapters.length, 'descLen:', zhBody.length);
