import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'About',
  description: 'Our mission to share authentic Chinese wisdom with the modern world.',
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="About · 关于"
      title="Our mission,"
      subtitle="quietly stated."
      description="ChangeBook exists to carry the living voice of the I Ching into contemporary English — without dilution, without mysticism, and without losing the rigor of the classical tradition."
      meta={metadata}
    />
  );
}
