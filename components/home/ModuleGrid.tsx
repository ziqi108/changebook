'use client';

import Link from 'next/link';
import { MODULES, ModuleItem } from '@/lib/data';

export function ModuleGrid() {
  return (
    <section className="py-32 md:py-40 bg-paper text-ink border-t border-ink/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-ink/40" />
          <span className="eyebrow text-ink/50 tracking-[0.35em]">Chapter · 01</span>
        </div>

        <h2 className="display-lg mb-4">
          Four ways <span className="italic text-ink/60">into wisdom.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 mt-16">
          {MODULES.map((mod, idx) => (
            <ModuleCard key={mod.slug} mod={mod} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ mod, index }: { mod: ModuleItem; index: number }) {
  return (
    <Link
      href={`/${mod.slug}`}
      className="group bg-paper p-10 md:p-14 block transition-colors hover:bg-ink/[0.015]"
    >
      <div className="flex items-start justify-between mb-10">
        <span className="font-display text-xs tracking-[0.35em] text-ink/40">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-vermilion">
          {mod.tagline}
        </span>
      </div>

      <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4 max-w-sm">
        {mod.title}
      </h3>

      <p className="text-sm text-ink/60 leading-relaxed mb-10 line-clamp-2">
        {mod.description}
      </p>

      <div className="h-px w-full bg-ink/10 mb-6" />

      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-ink/40">
            {mod.duration}
          </span>
        </div>
        <span className="text-sm text-ink/60 group-hover:text-ink transition-colors">→</span>
      </div>
    </Link>
  );
}
