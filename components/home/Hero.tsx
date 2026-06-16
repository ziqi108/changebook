'use client';

import Link from 'next/link';
import { HexagramSvg } from '@/components/hexagram/HexagramSvg';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-paper text-ink flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-32 flex flex-col items-center text-center">
        <span className="eyebrow text-ink/40 tracking-[0.4em] mb-10 fade-in">VOL. I · MMXXVI</span>

        <h1 className="fade-in">
          <span className="display-xl block leading-[0.95]">The Book</span>
          <span className="display-xl block italic text-ink/60 leading-[0.95]">
            of <span className="text-vermilion not-italic">Changes</span>
          </span>
        </h1>

        <div className="my-12 flex items-center gap-4 fade-in">
          <span className="h-px w-16 bg-ink/25" />
          <span className="text-xs tracking-[0.35em] text-ink/50 font-serif-cn">周 · 易 · 經</span>
          <span className="h-px w-16 bg-ink/25" />
        </div>

        <p className="text-base md:text-lg text-ink/60 leading-relaxed max-w-xl mb-12 fade-in">
          A living philosophy of change, harmony, and self-mastery — now
          accessible in masterful English. Study the 64 hexagrams, practice
          daily, and consult a teacher when the path seems unclear.
        </p>

        <div className="fade-in">
          <Link
            href="/beginner-course"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-colors"
          >
            Begin Your Study
            <span>→</span>
          </Link>
        </div>

        <div className="mt-24 w-full flex justify-center">
          <div className="h-px w-24 bg-ink/15" />
        </div>

        <div className="mt-14 flex items-center gap-10 fade-in">
          <HexagramSvg
            lines={['yang', 'yang', 'yang', 'yin', 'yin', 'yin']}
            size={56}
            color="#0E1419"
          />
          <div className="text-left">
            <div className="font-display text-2xl leading-none">泰 · Tài</div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-ink/40 mt-2">
              #11 · Flowering
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
