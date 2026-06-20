const { HEXAGRAM_LINES } = require('./hexagram-lines.js');

let issues = [];
let totalLines = 0;
let totalHexagrams = 0;

for (let i = 1; i <= 64; i++) {
  const entry = HEXAGRAM_LINES[i];
  if (!entry) {
    issues.push(`Hexagram #${i}: missing data`);
    continue;
  }
  totalHexagrams++;
  
  if (!entry.lines || entry.lines.length !== 6) {
    issues.push(`Hexagram #${i}: only ${entry.lines ? entry.lines.length + ' lines' : 'no lines'}`);
    continue;
  }
  
  for (let j = 0; j < 6; j++) {
    const line = entry.lines[j];
    totalLines++;
    
    if (!line.cn) {
      issues.push(`Hexagram #${i}, Line #${j+1}: missing Chinese text`);
    }
    if (!line.en) {
      issues.push(`Hexagram #${i}, Line #${j+1}: missing English translation`);
    }
  }
  
  if (entry.use) {
    if (!entry.use.cn) {
      issues.push(`Hexagram #${i} use line: missing Chinese text`);
    }
    if (!entry.use.en) {
      issues.push(`Hexagram #${i} use line: missing English translation`);
    }
  }
}

console.log('========================================');
console.log(' 64 Hexagram Lines Data Integrity Check');
console.log('========================================');
console.log('');
console.log('Check Items:');
console.log(`  Hexagrams: ${totalHexagrams}/64`);
console.log(`  Total Lines: ${totalLines}/384`);
console.log('');

if (issues.length === 0) {
  console.log('PASS - All data complete!');
  console.log('  - All 64 hexagrams present');
  console.log('  - Each has 6 lines');
  console.log('  - All lines have CN+EN bilingual content');
} else {
  console.log(`FAIL - Found ${issues.length} issues:`);
  issues.forEach((issue, idx) => {
    console.log(`  ${idx+1}. ${issue}`);
  });
}

console.log('');
console.log('========================================');
console.log(' Sample Data (Hexagram #1 - Qian)');
console.log('========================================');
const qian = HEXAGRAM_LINES[1];
qian.lines.forEach((line, idx) => {
  console.log(`  Line ${idx+1}: ${line.cn}`);
  console.log(`    EN: ${line.en}`);
});
if (qian.use) {
  console.log(`  Use: ${qian.use.cn}`);
  console.log(`    EN: ${qian.use.en}`);
}

console.log('');
console.log('========================================');
console.log(' Sample Data (Hexagram #64 - Weiji)');
console.log('========================================');
const weiji = HEXAGRAM_LINES[64];
weiji.lines.forEach((line, idx) => {
  console.log(`  Line ${idx+1}: ${line.cn}`);
  console.log(`    EN: ${line.en}`);
});