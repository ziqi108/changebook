'use client';

import Link from 'next/link';
import { MODULES, ModuleItem } from '@/lib/data';
import { HexagramSvg } from '@/components/hexagram/HexagramSvg';
import { HEXAGRAMS } from '@/lib/hexagrams';

const ACCENT_STYLES: Record<string, { border: string; tag: string; arrow: string; bg: string }> = {
  ink:      { border: 'hover:border-ink/40',       tag: 'text-ink/60',      arrow: 'group-hover:text-ink',      bg: 'group-hover:bg-ink/[0.02]'  },
  vermilion:{ border: 'hover:border-vermilion/40',  tag: 'text-vermilion',   arrow: 'group-hover:text-vermilion', bg: 'group-hover:bg-vermilion/[0.02]' },
  jade:     { border: 'hover:border-jade/40',       tag: 'text-jade',        arrow: 'group-hover:text-jade',      bg: 'group-hover:bg-jade/[0.02]'  },
  gold:     { border: 'hover:border-gold/40',       tag: 'text-gold',        arrow: 'group-hover:text-gold',      bg: 'group-hover:bg-gold/[0.02]'  },
};

export function ModuleGrid() {
  return (
    <section className="py-32 md:py-44 bg-paper text-ink border-t border-ink/8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Chapter · 01</span>
            </div>
            <h2 className="display-lg">
              Four paths{' '}
              <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
                into wisdom.
              </span>
            </h2>
          </div>
          <p className="text-sm text-ink/50 leading-relaxed max-w-xs">
            From your first hexagram to the classical texts —
            each path is carefully sequenced by our master teachers.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MODULES.map((mod, idx) => (
            <ModuleCard key={mod.slug} mod={mod} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ mod, index }: { mod: ModuleItem; index: number }) {
  const accent = ACCENT_STYLES[mod.accent] ?? ACCENT_STYLES.ink;
  const hex = HEXAGRAMS.find((h) => h.id === mod.hexagramIds[0]);

  return (
    <Link
      href={`/${mod.slug}`}
      className={`group relative bg-paper border border-ink/8 rounded-2xl p-10 md:p-12 flex flex-col transition-all duration-500 card-surface ${accent.border} ${accent.bg}`}
    >
      {/* Card header */}
      <div className="flex items-start justify-between mb-10">
        <span className="font-display text-xs tracking-[0.4em] text-ink/30">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`text-[10px] tracking-[0.3em] uppercase font-medium ${accent.tag}`}>
          {mod.tagline}
        </span>
      </div>

      {/* Hexagram visual */}
      {hex && (
        <div className="mb-8 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
          <HexagramSvg lines={hex.lines} size={44} color="#0E1419" />
        </div>
      )}

      {/* Title */}
      <h3 className="font-display text-3xl md:text-[2.1rem] leading-tight mb-4 max-w-sm">
        {mod.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-ink/55 leading-relaxed mb-10 line-clamp-2 flex-1">
        {mod.description}
      </p>

      {/* Divider */}
      <div className="h-px w-full bg-ink/8 mb-6" />

      {/* Footer row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-ink/35 mb-0.5">Duration</div>
            <div className="text-xs text-ink/60">{mod.duration}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-ink/35 mb-0.5">Lessons</div>
            <div className="text-xs text-ink/60">{mod.lessons}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-ink/35 mb-0.5">Price</div>
            <div className="text-xs font-medium text-ink/80">{mod.price}</div>
          </div>
        </div>
        <span className={`text-xl transition-all duration-300 ${accent.arrow} group-hover:translate-x-1`}>
          →
        </span>
      </div>
    </Link>
  );
}
