'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

type Props = {
  label?: string;
  href?: string;
  useHistory?: boolean;
};

export function BackToHome({ label = 'Home', href = '/', useHistory = false }: Props) {
  const router = useRouter();

  if (useHistory) {
    return (
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm text-ink/45 hover:text-ink transition-colors duration-200 group"
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-200 group-hover:-translate-x-0.5"
        />
        Back
      </button>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-ink/45 hover:text-ink transition-colors duration-200 group"
    >
      <ArrowLeft
        size={14}
        className="transition-transform duration-200 group-hover:-translate-x-0.5"
      />
      {label}
    </Link>
  );
}
