import Link from 'next/link';
import { BackToHome } from '@/components/ui/BackToHome';

export const metadata = {
  title: 'Registration Temporarily Closed',
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-paper flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex w-[420px] flex-shrink-0 bg-ink text-paper flex-col justify-between p-14 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 80% 20%, rgba(45,106,79,0.10) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <Link href="/" className="font-display text-xl text-paper hover:text-vermilion transition-colors">
            Yi Wisdom
          </Link>
        </div>
        <div className="relative">
          <div
            className="font-display text-[11rem] leading-none text-paper/[0.06] select-none mb-8"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
            aria-hidden="true"
          >
            坤
          </div>
          <blockquote className="font-display text-2xl italic leading-relaxed text-paper/70">
            &ldquo;The receptive earth brings the sublime success,
            if one perseveres in what is right.&rdquo;
          </blockquote>
          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-paper/35">
            I Ching · Hexagram 2 · Kūn
          </div>
        </div>
        <div className="relative text-[10px] tracking-[0.25em] uppercase text-paper/25">
          © 2026 Yi Wisdom
        </div>
      </div>

      {/* Right notice panel */}
      <div className="flex-1 flex flex-col">
        <div className="px-6 md:px-14 pt-10">
          <BackToHome />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 md:px-14 py-16">
          <div className="w-full max-w-sm">
            <div className="mb-12">
              <div className="eyebrow text-ink/45 mb-4">New Students</div>
              <h1 className="font-display text-5xl md:text-6xl leading-[0.95]">
                Registration{' '}
                <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
                  paused.
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-[1.85] text-ink/70">
                New account registration is temporarily closed. All courses and
                content are currently open to everyone — no account needed.
              </p>
              <p className="text-sm leading-relaxed text-ink/50">
                Member accounts will return in a future update. Have questions?
                Reach us through the contact page.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-3">
              <Link
                href="/beginner-course"
                className="w-full py-4 bg-ink text-paper text-sm tracking-wide text-center rounded-full hover:bg-vermilion transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-vermilion/20"
              >
                Start Learning →
              </Link>
              <Link
                href="/"
                className="w-full py-3 text-sm text-center text-ink/50 hover:text-ink transition-colors"
              >
                Back to Home
              </Link>
            </div>

            <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-ink/30 text-center">
              Thank you for your patience
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
