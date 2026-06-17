'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/testimonials';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="py-32 md:py-44 bg-paper text-ink border-t border-ink/8">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="h-px w-10 bg-ink/35" />
          <span className="eyebrow text-ink/45 tracking-[0.38em]">Chapter · 04</span>
          <span className="h-px w-10 bg-ink/35" />
        </div>

        <h2 className="display-lg text-center mb-20">
          Voices from{' '}
          <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
            the practice.
          </span>
        </h2>

        {/* Main testimonial */}
        <div key={t.id} className="fade-in max-w-[800px] mx-auto text-center mb-16">
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-vermilion text-sm">★</span>
            ))}
          </div>

          <blockquote className="font-display text-2xl md:text-3xl lg:text-[2rem] italic leading-[1.55] text-ink/80 mb-12">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="h-px w-16 bg-ink/12 mx-auto mb-8" />

          <div className="flex flex-col items-center gap-1.5">
            <div className="font-display text-xl text-ink">{t.author}</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-ink/45">
              {t.role} · {t.location}
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-vermilion mt-1">
              {t.course}
            </div>
          </div>
        </div>

        {/* Selector row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-20">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs transition-all duration-300 ${
                i === active
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-transparent text-ink/50 border-ink/15 hover:border-ink/35 hover:text-ink/80'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                  i === active ? 'bg-paper/20 text-paper' : 'bg-ink/8 text-ink/60'
                }`}
              >
                {item.initials}
              </div>
              <span className="tracking-wide hidden sm:inline">{item.author.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/beginner-course"
            className="group inline-flex items-center gap-3 px-9 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-vermilion/20"
          >
            Begin Your Study
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <p className="mt-5 text-[10px] tracking-[0.25em] uppercase text-ink/35">
            14-day money-back guarantee · No questions asked
          </p>
        </div>
      </div>
    </section>
  );
}
