import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  meta: Metadata;
};

export function PlaceholderPage({ eyebrow, title, subtitle, description, meta }: Props) {
  return (
    <>
      <main className="min-h-screen bg-paper">
        <div className="relative pt-40 pb-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-[11px] tracking-[0.4em] uppercase text-ink/50 mb-6">
              {eyebrow}
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight text-ink max-w-5xl">
              {title}
              <span className="block italic text-ink/60 mt-2">{subtitle}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink/65 leading-relaxed">
              {description}
            </p>
            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm tracking-wide rounded-full hover:bg-vermilion transition-colors"
              >
                Back to Home
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export function generateMetadata(props: Props): Metadata {
  return props.meta;
}
