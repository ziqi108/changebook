'use client';

import { useState } from 'react';
import { HexagramSvg } from '@/components/hexagram/HexagramSvg';
import { HEXAGRAMS, DAILY_HEXAGRAM_IDS } from '@/lib/hexagrams';

export function DailyHexagram() {
  const [index, setIndex] = useState(0);
  const hex = HEXAGRAMS.find((h) => h.id === DAILY_HEXAGRAM_IDS[index]) ?? HEXAGRAMS[0];

  const next = () => setIndex((i) => (i + 1) % DAILY_HEXAGRAM_IDS.length);
  const prev = () => setIndex((i) => (i - 1 + DAILY_HEXAGRAM_IDS.length) % DAILY_HEXAGRAM_IDS.length);

  return (
    <section className="py-32 md:py-40 bg-paper text-ink border-y border-ink/10">
      <div className="max-w-[960px] mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-ink/40" />
          <span className="eyebrow text-ink/50 tracking-[0.35em]">Chapter · 02</span>
          <span className="h-px w-10 bg-ink/40" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-20">
          Let the hexagram <span className="italic text-vermilion">speak to you.</span>
        </h2>

        <div key={hex.id} className="fade-in">
          <div className="flex justify-center mb-10">
            <HexagramSvg lines={hex.lines} size={140} color="#0E1419" />
          </div>

          <div className="mb-8">
            <div className="font-display text-3xl">{hex.nameZh}</div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-ink/40 mt-2">
              {hex.namePinyin} · #{String(hex.id).padStart(2, '0')} · {hex.element}
            </div>
          </div>

          <div className="mx-auto h-px w-16 bg-ink/15 mb-8" />

          <blockquote className="font-display text-xl md:text-2xl italic text-ink/80 leading-relaxed max-w-2xl mx-auto">
            "{hex.description}"
          </blockquote>

          <p className="mt-10 text-sm text-ink/60 leading-relaxed max-w-2xl mx-auto">
            {hex.question}
          </p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="text-ink/50 hover:text-ink transition-colors text-sm tracking-widest"
          >
            ← PREV
          </button>
          <span className="text-ink/20">·</span>
          <button
            onClick={next}
            className="text-ink/50 hover:text-ink transition-colors text-sm tracking-widest"
          >
            NEXT →
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {DAILY_HEXAGRAM_IDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all ${
                i === index ? 'w-8 bg-ink' : 'w-3 bg-ink/15 hover:bg-ink/30'
              }`}
              aria-label={`Hexagram ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
