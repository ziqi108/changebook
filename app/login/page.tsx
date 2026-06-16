'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';

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

  const fillDemo = () => {
    setEmail('demo@changebook.com');
    setPassword('demo1234');
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-8">
        <div>
          <label className="block text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-3">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full bg-transparent border-b border-ink/30 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
          />
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-3">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full bg-transparent border-b border-ink/30 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
          />
        </div>

        {error && (
          <div className="text-sm text-vermilion">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-ink text-paper text-sm tracking-wide rounded-full hover:bg-vermilion transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {loading ? (
            <><Loader2 size={14} className="animate-spin" />Signing in...</>
          ) : (
            <>Sign In →</>
          )}
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-sm text-ink/60">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-ink underline underline-offset-4">
            Create one
          </Link>
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-ink/10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-ink/40">Demo Account</span>
          <button
            type="button"
            onClick={fillDemo}
            className="text-[10px] tracking-[0.25em] uppercase text-vermilion hover:text-vermilion/70 transition-colors"
          >
            Auto-fill
          </button>
        </div>
        <div className="text-xs text-ink/60 space-y-1">
          <div>demo@changebook.com</div>
          <div>demo1234</div>
        </div>
      </div>
    </>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-paper">
      <div className="max-w-md mx-auto px-6 py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <div className="mb-12">
          <div className="eyebrow text-ink/50 mb-4">Member Login</div>
          <h1 className="font-display text-5xl md:text-6xl leading-[0.95]">
            Welcome <span className="italic text-ink/60">back.</span>
          </h1>
        </div>

        <Suspense fallback={<div className="text-sm text-ink/40">Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
