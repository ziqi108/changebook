import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';

export const metadata: Metadata = {
  title: 'Educational Disclaimer',
  description:
    'Yi Wisdom content is educational and exploratory, and is not professional advice of any kind.',
};

export default function EducationalDisclaimerPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Disclaimer · 免责</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">Educational Disclaimer</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              Please read this before applying anything you read on the site to
              your own life.
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section>
            <div className="border border-ink/8 rounded-2xl p-8 md:p-10 card-surface">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-vermilion/60" />
                <span className="eyebrow text-vermilion tracking-[0.38em]">Core statement</span>
              </div>
              <p className="font-display text-2xl md:text-3xl leading-snug text-ink">
                Reflection sessions and all content on this site are educational
                and exploratory. They do not provide medical, psychological, legal,
                financial, investment, employment, relationship, or emergency
                advice. No specific future outcome is guaranteed.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Reflection, not prediction</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                The I&nbsp;Ching is presented here as a living tradition of
                reflection and self-cultivation. Hexagrams, commentary, and
                Reflection Sessions are offered as prompts for your own thinking,
                not as predictions of what will happen or as instructions for what
                you should do.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Not a substitute for professional advice</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Nothing on this site is a substitute for the services of a
                qualified professional. If you are dealing with a medical,
                psychological, legal, financial, investment, employment, or
                relationship matter &mdash; or any other situation that calls for
                expertise &mdash; please seek out an appropriately qualified
                professional who can look at the specifics of your case.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">No prediction guarantees</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                No specific future outcome is guaranteed by anything you read here,
                and the site operator does not claim that the I&nbsp;Ching can
                predict events. How you interpret and act on the material is your
                own responsibility.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">If you are in crisis</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                If you are in crisis or feel you may be in danger, contact the
                emergency services available in your location immediately. This
                site is not an emergency resource.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Related</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                See also our{' '}
                <Link href="/terms" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  Terms of Use
                </Link>{' '}
                and{' '}
                <Link href="/contact" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  contact page
                </Link>.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
