import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToHome } from '@/components/ui/BackToHome';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'Yi Wisdom currently offers free courses and unavailable Reflection Sessions, so no refund is applicable at this time.',
};

export default function RefundPolicyPage() {
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
              <span className="eyebrow text-ink/45 tracking-[0.38em]">Refunds · 退款</span>
            </div>

            <h1 className="display-lg max-w-3xl mb-8">Refund Policy</h1>

            <p className="text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
              A plain statement of where payments and refunds stand today.
            </p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 space-y-16">
          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Current state</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                All courses on Yi Wisdom are currently offered free of charge, and
                Reflection Sessions are currently unavailable. Because no payment
                is being collected for either, there is nothing to refund at this
                time.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Courses</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                As all current courses are offered free of charge, no payment is
                collected and no refund is applicable. Should paid programs be
                introduced in the future, a refund policy will be published here in
                advance of any purchase.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Reflection Sessions</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                Bookings for Reflection Sessions are currently unavailable. No
                payment is being collected for sessions, so no refund situation
                arises. If sessions reopen as a paid service in the future, the
                terms and any applicable refund process will be published here
                before any booking is taken.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">Contact</h2>
            <div className="space-y-5 text-ink/70 leading-[1.85] text-base">
              <p>
                If you believe a charge has appeared in error, or you have a
                question about this policy, please reach out through the{' '}
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
