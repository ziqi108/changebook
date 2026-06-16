'use client';

import Link from 'next/link';
import { TESTIMONIALS } from '@/lib/testimonials';

export function Testimonials() {
  const t = TESTIMONIALS[0];

  return (
    <section className="py-32 md:py-40 bg-paper text-ink border-t border-ink/10">
      <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-ink/40" />
          <span className="eyebrow text-ink/50 tracking-[0.35em]">Chapter · 04</span>
          <span className="h-px w-10 bg-ink/40" />
        </div>

        <p className="font-display text-2xl md:text-3xl leading-[1.5] italic text-ink/85 mb-12">
          "{t.quote}"
        </p>

        <div className="h-px w-16 bg-ink/15 mx-auto mb-8" />

        <div>
          <div className="font-display text-lg">{t.author}</div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mt-2">
            {t.role} · {t.location}
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-vermilion mt-2">
            {t.course}
          </div>
        </div>

        <div className="mt-16">
          <Link
            href="/beginner-course"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-colors"
          >
            Begin Your Study
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
