'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';
import { BackToHome } from '@/components/ui/BackToHome';

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
    <main className="min-h-screen bg-paper flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex w-[420px] flex-shrink-0 bg-ink text-paper flex-col justify-between p-14 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 80% 20%, rgba(45,106,79,0.10) 0%, transparent 70%)',
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
            乾
          </div>
          <blockquote className="font-display text-2xl italic leading-relaxed text-paper/70">
            &ldquo;Great indeed is the sublimity of the Creative,
            to which all things owe their beginning.&rdquo;
          </blockquote>
          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-paper/35">
            I Ching · Hexagram 1 · Qián
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
              <div className="eyebrow text-ink/45 mb-4">New Student</div>
              <h1 className="font-display text-5xl md:text-6xl leading-[0.95]">
                Begin your{' '}
                <span className="italic" style={{ color: 'rgba(14,20,25,0.50)' }}>
                  practice.
                </span>
              </h1>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] tracking-[0.35em] uppercase text-ink/45 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full bg-transparent border-b border-ink/25 py-3 text-sm focus:outline-none focus:border-ink transition-colors placeholder:text-ink/25"
                />
              </div>

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
                  placeholder="At least 6 characters"
                  required
                  minLength={6}
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
                    Creating account…
                  </>
                ) : (
                  <>Create Account →</>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-sm text-ink/50">
                  Already have an account?{' '}
                  <Link href="/login" className="text-ink hover:text-vermilion underline underline-offset-4 transition-colors">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>

            <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-ink/30 text-center">
              14-day money-back guarantee · No questions asked
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
