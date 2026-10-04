import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Contact Yi Wisdom — Email & Response Times',
  description:
    'How to reach Yi Wisdom, including the newsletter and where to direct questions.',
  alternates: buildAlternates('/contact', 'en', getCounterpart('/contact')),
  openGraph: {
    title: 'Contact Yi Wisdom — Email & Response Times | Yi Wisdom',
    description:
      'How to reach Yi Wisdom, including the newsletter and where to direct questions.',
    url: 'https://www.yiwisdom.org/contact',
    locale: 'en_US',
    siteName: 'Yi Wisdom',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: 'Contact Yi Wisdom',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-paper">
        {/* Hero band */}
        <div className="pt-32 pb-24 px-6 md:px-10 border-b border-ink/8">
          <div className="relative max-w-[1100px] mx-auto">
            <div className="mb-10">
              <BackToHome />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink/35" />
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Contact</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">Contact</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              A few honest notes on how to reach Yi Wisdom, and what to expect in
              return.
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Stay in touch</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                The simplest way to stay in touch is to{' '}
                <Link href="/" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  join the newsletter on the home page
                </Link>
                . The newsletter carries new courses, articles, and notes from the
                project, and is the most reliable channel for updates.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">A note on email</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                A contact email will be published here once verified. In the
                meantime, please use the newsletter to keep up with the site. We
                are not publishing an email address, phone number, or postal
                address until we can confirm a stable channel for receiving
                messages.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Response times</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Yi Wisdom is a small project, and response times vary. We may not
                be able to reply individually to every message. Please be assured
                that messages are read.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Before you write</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Please remember that this site does not provide professional
                advice. If your message is about a personal situation that calls
                for expertise &mdash; medical, psychological, legal, financial, or
                otherwise &mdash; please reach out to a qualified professional
                instead. See our{' '}
                <Link href="/educational-disclaimer" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  Educational Disclaimer
                </Link>{' '}
                for the full statement.
              </p>
              <p>
                You can also return to the{' '}
                <Link href="/" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  home page
                </Link>{' '}
                at any time.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
