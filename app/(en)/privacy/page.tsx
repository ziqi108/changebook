import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';
import { buildAlternates, getCounterpart } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Privacy Policy — Data We Collect & How We Use It',
  description:
    'How Yi Wisdom collects, uses, and protects the minimal personal data you share with us.',
  alternates: buildAlternates('/privacy', 'en', getCounterpart('/privacy')),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Privacy Policy — Data We Collect & How We Use It | Yi Wisdom',
    description:
      'How Yi Wisdom collects, uses, and protects the minimal personal data you share with us.',
    url: 'https://www.yiwisdom.org/privacy',
    siteName: 'Yi Wisdom',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 675,
        alt: 'Yi Wisdom Privacy Policy',
      },
    ],
  },
};

export default function PrivacyPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Privacy</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">
              Privacy Policy
            </h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              We aim to collect as little personal data as possible, and to be
              clear about what we do with it.
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Overview</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Yi Wisdom (&ldquo;the site&rdquo;) is an educational project about the
                I&nbsp;Ching (Book of Changes). This policy explains what personal
                data we collect, why we collect it, and the choices you have. It
                applies to visitors of <Link href="/" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">yiwisdom.org</Link>.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">What we collect</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>We collect only the personal data you choose to share with us:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-ink/30">
                <li>
                  <span className="text-ink">Contact form submissions</span> &mdash; the
                  name, email, and message you provide when you reach out through
                  the <Link href="/contact" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">contact page</Link>.
                </li>
                <li>
                  <span className="text-ink">Newsletter email</span> &mdash; the email
                  address you submit when you join the newsletter on the home page.
                </li>
              </ul>
              <p>
                We do not knowingly collect sensitive personal data, and we do not
                require account creation to read the site&rsquo;s courses or articles.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">How we use it</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Your contact message is used only to respond to your inquiry. Your
                newsletter email is used only to send you updates you signed up to
                receive. We do not use your personal data to build a behavioural
                profile or for targeted advertising.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Cookies and analytics</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                The site uses a minimal set of cookies for essential function and
                privacy-friendly analytics that help us understand, in aggregate,
                how content is read. We do not use advertising cookies or
                cross-site tracking. See our{' '}
                <Link href="/cookie-policy" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  Cookie Policy
                </Link>{' '}
                for details and for how to manage cookies in your browser.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">No sale of personal data</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                We do not sell, rent, or trade your personal data. We do not share
                it with third parties for their own promotional purposes.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Data retention</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                We retain personal data only for as long as needed for the purpose
                it was shared. Newsletter emails are kept until you unsubscribe,
                which you may do at any time using the link in any message.
                Contact messages are retained for a reasonable period to allow us
                to respond and keep a record of correspondence, then deleted.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Contact</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Questions about this policy or your personal data can be sent
                through the{' '}
                <Link href="/contact" className="underline decoration-ink/30 hover:decoration-ink/70 underline-offset-4">
                  contact page
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
