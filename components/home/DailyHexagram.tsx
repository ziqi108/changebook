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
    <section className="relative py-36 md:py-48 bg-ink text-paper overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 15% 50%, rgba(192,57,43,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 85% 50%, rgba(45,106,79,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Large background glyph */}
      <div
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 opacity-[0.025] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[20rem] leading-none seal">{hex.nameZh}</span>
      </div>

      <div className="relative max-w-[960px] mx-auto px-6 md:px-10 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-10 bg-paper/20" />
          <span className="eyebrow text-paper/40 tracking-[0.38em]">Chapter · 02</span>
          <span className="h-px w-10 bg-paper/20" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-20 text-paper">
          Let the hexagram{' '}
          <span className="italic text-vermilion">speak to you.</span>
        </h2>

        {/* Oracle panel */}
        <div key={hex.id} className="fade-in">
          {/* Hexagram symbol */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-[-28px] rounded-full border border-vermilion/10"
                style={{ animation: 'pulseRing 3.5s ease-in-out infinite' }}
              />
              <div className="absolute inset-[-14px] rounded-full border border-paper/5" />
              <HexagramSvg lines={hex.lines} size={120} color="#F5F1E8" />
            </div>
          </div>

          {/* Name row */}
          <div className="mb-8">
            <div className="font-display text-4xl md:text-5xl text-paper mb-2">
              {hex.nameZh}
            </div>
            <div className="text-[10px] tracking-[0.45em] uppercase text-paper/35 mt-3">
              {hex.namePinyin} &nbsp;·&nbsp; #{String(hex.id).padStart(2, '0')} &nbsp;·&nbsp; {hex.element}
            </div>
          </div>

          <div className="mx-auto h-px w-16 bg-paper/15 mb-10" />

          {/* Quote */}
          <blockquote className="font-display text-xl md:text-2xl lg:text-3xl italic text-paper/75 leading-relaxed max-w-2xl mx-auto">
            &ldquo;{hex.description}&rdquo;
          </blockquote>

          {/* Reflection question */}
          <p className="mt-10 text-sm text-paper/50 leading-relaxed max-w-xl mx-auto">
            {hex.question}
          </p>
        </div>

        {/* Navigation controls */}
        <div className="mt-16 flex items-center justify-center gap-8">
          <button
            onClick={prev}
            aria-label="Previous hexagram"
            className="flex items-center gap-2 text-paper/40 hover:text-paper transition-colors text-sm tracking-[0.3em] uppercase group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Prev</span>
          </button>

          <div className="flex items-center gap-1.5">
            {DAILY_HEXAGRAM_IDS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Hexagram ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 h-1 bg-vermilion'
                    : 'w-2 h-1 bg-paper/15 hover:bg-paper/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next hexagram"
            className="flex items-center gap-2 text-paper/40 hover:text-paper transition-colors text-sm tracking-[0.3em] uppercase group"
          >
            <span>Next</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Counter */}
        <div className="mt-6 text-[10px] tracking-[0.3em] uppercase text-paper/25">
          {String(index + 1).padStart(2, '0')} / {String(DAILY_HEXAGRAM_IDS.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}
