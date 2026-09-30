import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms under which Yi Wisdom provides its educational content about the I Ching.',
  alternates: buildAlternates('/terms', 'en', getCounterpart('/terms')),
};

export default function TermsPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Terms · 条款</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">Terms of Use</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              Please read these terms before using the site. They describe what we
              offer and what we ask of you in return.
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Acceptance of terms</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                By accessing or using Yi Wisdom (&ldquo;the site&rdquo;), operated by the
                site operator, you agree to these Terms of Use. If you do not agree,
                please do not use the site.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Educational nature</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                All content on this site &mdash; including courses, articles, and
                Reflection Sessions &mdash; is educational and exploratory. It
                presents the I&nbsp;Ching as a living tradition of reflection and
                self-cultivation. It is not professional advice and is not a
                substitute for the services of a qualified professional. See our{' '}
                <Link href="/educational-disclaimer" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  Educational Disclaimer
                </Link>{' '}
                for the full statement.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">No guarantee of outcomes</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                The site offers interpretations and frameworks for reflection. We
                do not guarantee any specific outcome, prediction, or result from
                applying the material. How you use what you read here is your
                responsibility.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Intellectual property</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Site content &mdash; including original translations, commentary,
                course material, and visual design &mdash; is the intellectual
                property of the site operator and is protected by applicable
                copyright laws. You may read and use the material for your own
                personal, non-commercial study. You may not copy, redistribute,
                republish, or commercially exploit the content without prior
                written permission.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Acceptable use</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-ink/30">
                <li>Use the site for any unlawful or harmful purpose;</li>
                <li>Attempt to disrupt, scrape, or overload the site or its systems;</li>
                <li>Reproduce or redistribute site content in violation of the section above;</li>
                <li>Misrepresent the site&rsquo;s content as professional advice.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">No professional advice</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Nothing on this site constitutes medical, psychological, legal,
                financial, investment, employment, relationship, or emergency
                advice. For matters requiring professional expertise, please
                consult a qualified professional. The full statement is in our{' '}
                <Link href="/educational-disclaimer" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  Educational Disclaimer
                </Link>.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Governing terms</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                These terms are governed by the site operator&rsquo;s applicable
                jurisdiction, without reference to its conflict-of-laws principles.
                The site operator may update these terms from time to time; the
                current version is always the one published on this page.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
