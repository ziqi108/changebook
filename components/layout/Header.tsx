'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/components/auth/AuthContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/beginner-course', label: 'Learn' },
    { href: '/consult', label: 'Consult' },
    { href: '/articles', label: 'Journal' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="font-display text-lg tracking-wide">ChangeBook</div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-ink/40 hidden sm:inline">
            易
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink/65 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {user ? (
            <>
              <span className="text-sm text-ink/70 hidden sm:inline">
                {user.name.split(' ')[0]}
              </span>
              <button
                onClick={logout}
                className="text-xs tracking-[0.2em] uppercase text-ink/40 hover:text-ink transition-colors"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-sm text-ink/70 hover:text-ink transition-colors"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
