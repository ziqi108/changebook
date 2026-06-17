'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';
import { BackToHome } from '@/components/ui/BackToHome';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/beginner-course';

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.success) {
      setError(res.error || 'Login failed');
      return;
    }
    router.push(redirect);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <label className="block text-[10px] tracking-[0.35em] uppercase text-ink/45 mb-3">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full bg-transparent border-b border-ink/25 py-3 text-sm focus:outline-none focus:border-ink transition-colors placeholder:text-ink/25"
        />
      </div>

      <div>
        <label className="block text-[10px] tracking-[0.35em] uppercase text-ink/45 mb-3">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className="w-full bg-transparent border-b border-ink/25 py-3 text-sm focus:outline-none focus:border-ink transition-colors placeholder:text-ink/25"
        />
      </div>

      {error && (
        <div className="text-sm text-vermilion bg-vermilion/5 border border-vermilion/15 rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-ink text-paper text-sm tracking-wide rounded-full hover:bg-vermilion transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-vermilion/20"
      >
        {loading ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Signing in…
          </>
        ) : (
          <>Sign In →</>
        )}
      </button>

      <div className="text-center pt-2">
        <p className="text-sm text-ink/50">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-ink hover:text-vermilion underline underline-offset-4 transition-colors">
            Create one
          </Link>
        </p>
      </div>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-paper flex">
      {/* Left decorative panel — hidden on mobile */}
      <div className="hidden lg:flex w-[420px] flex-shrink-0 bg-ink text-paper flex-col justify-between p-14 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(192,57,43,0.12) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <Link href="/" className="font-display text-xl text-paper hover:text-vermilion transition-colors">
            ChangeBook
          </Link>
        </div>
        <div className="relative">
          <div
            className="font-display text-[11rem] leading-none text-paper/[0.06] select-none mb-8"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
            aria-hidden="true"
          >
            易
          </div>
          <blockquote className="font-display text-2xl italic leading-relaxed text-paper/70">
            &ldquo;The superior man makes his character correct
            and resolves firmly on what he will do.&rdquo;
          </blockquote>
          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-paper/35">
            I Ching · Hexagram 23
          </div>
        </div>
        <div className="relative text-[10px] tracking-[0.25em] uppercase text-paper/25">
          © 2026 ChangeBook
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col">
        <div className="px-6 md:px-14 pt-10">
          <BackToHome />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 md:px-14 py-16">
          <div className="w-full max-w-sm">
            <div className="mb-12">
              <div className="eyebrow text-ink/45 mb-4">Member Login</div>
              <h1 className="font-display text-5xl md:text-6xl leading-[0.95]">
                Welcome{' '}
                <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
                  back.
                </span>
              </h1>
            </div>

            <Suspense fallback={<div className="text-sm text-ink/35">Loading…</div>}>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
