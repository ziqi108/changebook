import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';

export const metadata: Metadata = {
  title: 'About',
  description: 'Our mission to share authentic Chinese wisdom with the modern world.',
};

const MASTERS = [
  {
    name: 'Master Yang Wen',
    initials: 'YW',
    title: 'Senior I Ching Teacher',
    zh: '楊文',
    bio: 'Over 25 years of dedicated study in the classical I Ching tradition. Trained in Sichuan Province under two lineage holders. Author of three works on Jungian applications of the Book of Changes.',
  },
  {
    name: 'Master Lian Chen',
    initials: 'LC',
    title: 'Hexagram & Mei Hua Specialist',
    zh: '廉晨',
    bio: 'Specialises in Mei Hua numerology and the Xici Great Commentary. Has taught privately for 18 years across Europe and Asia. Conducts consultations in English, 中文, and Deutsch.',
  },
  {
    name: 'Master Wu Xi',
    initials: 'WX',
    title: 'Depth Psychology & I Ching',
    zh: '吳曦',
    bio: 'Bridges classical I Ching practice with contemporary depth psychology. PhD in Comparative Religion. Former visiting scholar at the C. G. Jung Institute, Zürich.',
  },
];

const VALUES = [
  { zh: '真', en: 'Authenticity', desc: 'Rooted in the classical texts — never diluted, never distorted.' },
  { zh: '精', en: 'Precision', desc: 'Every word is chosen with care. Every interpretation is earned.' },
  { zh: '活', en: 'Aliveness', desc: 'The I Ching is a living tradition, not a museum piece.' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-paper">

        {/* Hero band */}
        <div className="pt-32 pb-24 px-6 md:px-10 border-b border-ink/8 relative overflow-hidden">
          <div
            className="absolute right-0 bottom-0 pointer-events-none select-none opacity-[0.03]"
            aria-hidden="true"
          >
            <span className="font-display text-[22rem] leading-none" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              道
            </span>
          </div>

          <div className="relative max-w-[1100px] mx-auto">
            <div className="mb-10">
              <BackToHome />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">About · 关于</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">
              Our mission,{' '}
              <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
                quietly stated.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              ChangeBook exists to carry the living voice of the I Ching into
              contemporary English — without dilution, without mysticism, and without
              losing the rigour of the classical tradition.
            </p>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 space-y-28">

          {/* Values */}
          <section>
            <div className="flex items-center gap-3 mb-12">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink/40 tracking-[0.38em]">What we stand for</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {VALUES.map((v) => (
                <div key={v.en} className="border border-ink/8 rounded-2xl p-10 card-surface">
                  <div
                    className="font-display text-6xl text-ink/15 mb-6"
                    style={{ fontFamily: "'Noto Serif SC', serif" }}
                  >
                    {v.zh}
                  </div>
                  <h3 className="font-display text-2xl mb-3">{v.en}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Story */}
          <section>
            <div className="flex items-center gap-3 mb-12">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink/40 tracking-[0.38em]">Our story</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6 text-ink/70 leading-[1.85] text-base">
                <p>
                  ChangeBook began as a private notes project — a single master teacher
                  translating her decades of practice into precise, living English for
                  a small group of Western students.
                </p>
                <p>
                  What emerged was something unexpected: the translations were teaching
                  themselves. Students who had read ten books on the I Ching found they
                  were, for the first time, actually understanding it.
                </p>
              </div>
              <div className="space-y-6 text-ink/70 leading-[1.85] text-base">
                <p>
                  Today, ChangeBook serves students in 38 countries — from therapists
                  using hexagrams with clients, to executives navigating transitions,
                  to artists seeking a compass for the creative unknown.
                </p>
                <p>
                  The I Ching has survived 3,000 years because it speaks to something
                  permanent in human experience. Our work is simply to keep its voice
                  clear.
                </p>
              </div>
            </div>
          </section>

          {/* Masters */}
          <section>
            <div className="flex items-center gap-3 mb-12">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink/40 tracking-[0.38em]">Our teachers</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {MASTERS.map((m) => (
                <div key={m.name} className="border border-ink/8 rounded-2xl p-8 card-surface flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center font-display text-2xl">
                      {m.initials}
                    </div>
                    <div>
                      <div className="font-display text-xl leading-tight">{m.name}</div>
                      <div
                        className="text-sm text-ink/35 mt-0.5"
                        style={{ fontFamily: "'Noto Serif SC', serif" }}
                      >
                        {m.zh}
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-vermilion">
                    {m.title}
                  </div>
                  <p className="text-sm text-ink/55 leading-relaxed flex-1">{m.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="border border-ink/8 rounded-2xl p-10 md:p-14 bg-ink/[0.012] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-2">
                Ready to begin?
              </h2>
              <p className="text-sm text-ink/50">Start with the beginner course — or book a private reading.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/beginner-course"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300"
              >
                Begin Study →
              </Link>
              <Link
                href="/consult"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-ink/20 rounded-full text-sm text-ink/60 hover:text-ink hover:border-ink/40 transition-all duration-300"
              >
                Book a Reading
              </Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
