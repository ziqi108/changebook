'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';

const NAV_LINKS = [
  { href: '/beginner-course', label: 'Learn', zh: '学习' },
  { href: '/consult', label: 'Consult', zh: '咨询' },
  { href: '/articles', label: 'Journal', zh: '文章' },
  { href: '/about', label: 'About', zh: '关于' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-md border-b border-ink/8 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-[68px] md:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" suppressHydrationWarning className="flex items-center gap-3 group" aria-label="ChangeBook Home">
            <div className="relative">
              <span className="font-display text-xl md:text-2xl tracking-tight text-ink group-hover:text-vermilion transition-colors duration-300">
                ChangeBook
              </span>
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-vermilion scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
            <span className="text-[11px] tracking-[0.45em] text-ink/35 hidden sm:inline font-serif-cn mt-1">
              易
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-sm text-ink/60 hover:text-ink transition-colors duration-200 group py-1"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 right-0 h-px bg-vermilion scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {user ? (
              <div className="hidden md:flex items-center gap-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-ink text-paper flex items-center justify-center text-xs font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm text-ink/70">{user.name.split(' ')[0]}</span>
                </div>
                <button
                  onClick={logout}
                  className="text-[10px] tracking-[0.25em] uppercase text-ink/40 hover:text-ink transition-colors"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2 border border-ink/20 rounded-full text-ink/70 hover:text-ink hover:border-ink/50 transition-all duration-200"
              >
                Sign in
              </Link>
            )}

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-ink/5 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-paper border-l border-ink/10 flex flex-col transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[68px] border-b border-ink/8">
            <Link href="/" onClick={() => setMobileOpen(false)} className="font-display text-xl">
              ChangeBook
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ink/5"
            >
              <X size={16} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-10 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 border-b border-ink/8 text-ink/70 hover:text-ink transition-colors group"
              >
                <span className="font-display text-2xl">{l.label}</span>
                <span className="text-[10px] tracking-[0.3em] text-ink/30">{l.zh}</span>
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-10">
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 py-4 border-t border-ink/8">
                  <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center text-xs font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm">{user.name}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-ink/40">Student</div>
                  </div>
                </div>
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="w-full py-3 text-sm text-ink/60 border border-ink/15 rounded-full hover:bg-ink hover:text-paper transition-colors"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 pt-4 border-t border-ink/8">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 text-sm text-center border border-ink/20 rounded-full text-ink/70 hover:text-ink transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 text-sm text-center bg-ink text-paper rounded-full hover:bg-vermilion transition-colors"
                >
                  Create account
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
