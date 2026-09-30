import Link from 'next/link';
import { APPROACH_PILLARS } from '@/lib/testimonials';

export function Testimonials() {
  return (
    <section className="py-32 md:py-44 bg-paper text-ink border-t border-ink/8">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="h-px w-10 bg-ink/35" />
          <span className="eyebrow text-ink/45 tracking-[0.38em]">Chapter · 04</span>
          <span className="h-px w-10 bg-ink/35" />
        </div>

        <h2 className="display-lg text-center mb-6">
          A Thoughtful{' '}
          <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
            Approach.
          </span>
        </h2>

        <p className="text-sm text-ink/50 leading-relaxed text-center max-w-xl mx-auto mb-20">
          Study the I Ching without false certainty.
        </p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {APPROACH_PILLARS.map((pillar, i) => (
            <div key={pillar.id} className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-display text-xs tracking-[0.4em] text-ink/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px w-8 bg-ink/15" />
              </div>
              <h3 className="font-display text-xl mb-4 text-ink">{pillar.title}</h3>
              <p className="text-sm text-ink/55 leading-relaxed">{pillar.description}</p>
            </div>
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
        </div>
      </div>
    </section>
  );
}
