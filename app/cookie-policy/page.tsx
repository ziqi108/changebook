import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'The types of cookies Yi Wisdom uses and how to manage them in your browser.',
};

export default function CookiePolicyPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Cookies · Cookie</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">Cookie Policy</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              We use cookies sparingly &mdash; only for the site to work. No
              third-party analytics or advertising cookies are currently deployed.
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">What cookies are</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Cookies are small text files stored on your device by your browser
                when you visit a website. They allow the site to remember things
                like your preferences between visits. This policy explains the
                cookies used by Yi Wisdom (&ldquo;the site&rdquo;).
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Types of cookies we use</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <ul className="list-disc pl-6 space-y-3 marker:text-ink/30">
                <li>
                  <span className="text-ink">Essential cookies.</span> These are
                  required for the site to function at all &mdash; for example, to
                  remember basic display choices. The site cannot work properly
                  without them.
                </li>
                <li>
                  <span className="text-ink">Analytics cookies.</span> At the
                  time of writing, no third-party analytics cookies are deployed
                  on this site. If privacy-friendly, aggregate-only analytics is
                  introduced in the future, this page will be updated in advance.
                  Such data would never be used to identify individuals.
                </li>
              </ul>
              <p>
                We do <span className="text-ink">not</span> use advertising cookies,
                cross-site tracking cookies, or cookies from advertising networks.
                The site does not show targeted advertising.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Managing cookies in your browser</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                You can view, block, or delete cookies through your browser&rsquo;s
                settings. Most browsers offer a privacy or cookies section where
                you can control which sites may set cookies and clear those already
                stored. Disabling essential cookies may affect basic site function;
                disabling analytics cookies will not prevent you from reading the
                content.
              </p>
              <p>
                For browser-specific instructions, see the help documentation
                provided by your browser.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Changes</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                If the way the site uses cookies changes, this page will be
                updated. For the broader picture of how we handle personal data,
                see our{' '}
                <Link href="/privacy" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  Privacy Policy
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
