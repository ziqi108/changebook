'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await register(name, email, password);
    setLoading(false);
    if (!res.success) {
      setError(res.error || 'Registration failed');
      return;
    }
    router.push('/beginner-course');
  };

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
          <div className="eyebrow text-ink/50 mb-4">New Student</div>
          <h1 className="font-display text-5xl md:text-6xl leading-[0.95]">
            Begin your <span className="italic text-ink/60">practice.</span>
          </h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label className="block text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-3">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
              className="w-full bg-transparent border-b border-ink/30 py-3 text-sm focus:outline-none focus:border-ink transition-colors"
            />
          </div>

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
              placeholder="At least 6 characters"
              required
              minLength={6}
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
              <><Loader2 size={14} className="animate-spin" />Creating account...</>
            ) : (
              <>Create Account →</>
            )}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-ink/60">
            Already have an account?{' '}
            <Link href="/login" className="text-ink underline underline-offset-4">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
