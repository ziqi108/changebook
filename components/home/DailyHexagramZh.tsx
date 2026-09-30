'use client';

import { useState } from 'react';
import { HexagramSvg } from '@/components/hexagram/HexagramSvg';
import { HEXAGRAMS, DAILY_HEXAGRAM_IDS } from '@/lib/hexagrams';

/**
 * 中文版卦象反思区
 * - 与英文版同一卦象数据，但 UI 文案为中文
 * - 用于反思，而非预测：反思式问题，不输出预言式提问
 * - 不显示"01/44"式计数器（数据未覆盖 64 卦时不宣称总数）
 * - hex.description 为英文，中文版不渲染（待人工翻译，见 TRANSLATION_TODO）
 */
const REFLECTION_QUESTIONS = [
  '这个处境中，正在变化的是什么？',
  '哪些责任需要被认真对待？',
  '还有哪些信息可能仍然缺失？',
  '在当前条件下，怎样的行动才是恰当的？',
];

export function DailyHexagramZh() {
  const [index, setIndex] = useState(0);
  const hex = HEXAGRAMS.find((h) => h.id === DAILY_HEXAGRAM_IDS[index]) ?? HEXAGRAMS[0];
  const question = REFLECTION_QUESTIONS[index % REFLECTION_QUESTIONS.length];

  const next = () => setIndex((i) => (i + 1) % DAILY_HEXAGRAM_IDS.length);
  const prev = () => setIndex((i) => (i - 1 + DAILY_HEXAGRAM_IDS.length) % DAILY_HEXAGRAM_IDS.length);

  return (
    <section className="relative py-36 md:py-48 bg-ink text-paper overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 15% 50%, rgba(192,57,43,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 85% 50%, rgba(45,106,79,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 opacity-[0.025] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[20rem] leading-none seal">{hex.nameZh}</span>
      </div>

      <div className="relative max-w-[960px] mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-10 bg-paper/20" />
          <span className="eyebrow text-paper/40 tracking-[0.38em]">每日一卦 · 反思</span>
          <span className="h-px w-10 bg-paper/20" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6 text-paper">
          让卦象<span className="italic text-vermilion">照见你的处境。</span>
        </h2>
        <p className="text-sm text-paper/45 tracking-[0.2em] mb-16">用于反思，而非预测。</p>

        <div key={hex.id} className="fade-in">
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div
                className="absolute inset-[-28px] rounded-full border border-vermilion/10"
                style={{ animation: 'pulseRing 3.5s ease-in-out infinite' }}
              />
              <div className="absolute inset-[-14px] rounded-full border border-paper/5" />
              <HexagramSvg lines={hex.lines} size={120} color="#F5F1E8" />
            </div>
          </div>

          <div className="mb-8">
            <div className="font-display text-4xl md:text-5xl text-paper mb-2">{hex.nameZh}</div>
            <div className="text-[10px] tracking-[0.45em] uppercase text-paper/35 mt-3">
              第 {String(hex.id).padStart(2, '0')} 卦 &nbsp;·&nbsp; {hex.namePinyin} &nbsp;·&nbsp; {hex.element}
            </div>
          </div>

          <div className="mx-auto h-px w-16 bg-paper/15 mb-10" />

          <p className="text-base md:text-lg text-paper/60 leading-relaxed max-w-xl mx-auto font-display">
            {question}
          </p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8">
          <button
            onClick={prev}
            aria-label="上一卦"
            className="flex items-center gap-2 text-paper/40 hover:text-paper transition-colors text-sm tracking-[0.3em] uppercase group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>上一卦</span>
          </button>

          <div className="flex items-center gap-1.5">
            {DAILY_HEXAGRAM_IDS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`第 ${i + 1} 个卦象`}
                className={`rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 h-1 bg-vermilion' : 'w-2 h-1 bg-paper/15 hover:bg-paper/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="下一卦"
            className="flex items-center gap-2 text-paper/40 hover:text-paper transition-colors text-sm tracking-[0.3em] uppercase group"
          >
            <span>下一卦</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
