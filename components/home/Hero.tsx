'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { HexagramSvg } from '@/components/hexagram/HexagramSvg';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; r: number; vx: number; vy: number; o: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.12,
        o: Math.random() * 0.18 + 0.04,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14,20,25,${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-paper text-ink flex flex-col justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(245,241,232,0.45) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative vertical lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-ink/5 hidden lg:block" aria-hidden="true" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-ink/5 hidden lg:block" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 py-40 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="fade-in flex items-center gap-4 mb-14">
          <span className="h-px w-10 bg-ink/20" />
          <span className="eyebrow text-ink/40 tracking-[0.5em]">Vol. I · MMXXVI</span>
          <span className="h-px w-10 bg-ink/20" />
        </div>

        {/* Headline */}
        <h1 className="relative fade-in-delay-1">
          <span className="display-xl block leading-none text-ink">The Book</span>
          <span className="display-xl block italic leading-none" style={{ color: 'rgba(14,20,25,0.50)' }}>
            of{' '}
            <span className="text-vermilion not-italic relative">
              Changes
              <span
                className="absolute -bottom-2 left-0 right-0 h-px bg-vermilion/40"
                style={{ animation: 'drawLine 1.2s 0.8s ease-out both' }}
              />
            </span>
          </span>
        </h1>

        {/* Chinese subtitle */}
        <div className="my-12 flex items-center gap-5 fade-in-delay-2">
          <span className="h-px w-20 bg-ink/15" />
          <span className="text-sm tracking-[0.5em] text-ink/40 font-serif-cn seal">
            周 · 易 · 經
          </span>
          <span className="h-px w-20 bg-ink/15" />
        </div>

        {/* Descriptor */}
        <p className="fade-in-delay-3 text-base md:text-lg text-ink/55 leading-relaxed max-w-lg mb-14 font-light">
          A living philosophy of change, harmony, and self‑mastery — now
          accessible in masterful English. Study the 64 hexagrams, practice
          daily, and consult a teacher when the path seems unclear.
        </p>

        {/* CTA row */}
        <div className="fade-in-delay-4 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/beginner-course"
            className="group inline-flex items-center gap-3 px-9 py-4 bg-ink text-paper rounded-full text-sm tracking-wide hover:bg-vermilion transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-vermilion/20"
          >
            Begin Your Study
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/consult"
            className="inline-flex items-center gap-2 px-7 py-4 text-sm text-ink/60 hover:text-ink border border-ink/15 rounded-full hover:border-ink/40 transition-all duration-300"
          >
            Book a Reading
          </Link>
        </div>

        {/* Hexagram feature */}
        <div className="mt-28 fade-in-delay-5 flex flex-col items-center gap-8">
          <div className="h-px w-16 bg-ink/10" />
          <div className="flex items-center gap-10">
            <div className="animate-float">
              <HexagramSvg
                lines={['yang', 'yang', 'yang', 'yin', 'yin', 'yin']}
                size={64}
                color="#0E1419"
              />
            </div>
            <div className="text-left">
              <div className="font-display text-3xl leading-none mb-1">泰 · Tài</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-ink/35 mt-2">
                Hexagram #11 · Flowering
              </div>
              <div className="text-xs text-ink/45 mt-2 italic font-display">
                "Heaven and earth in accord"
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-24 w-full max-w-2xl grid grid-cols-3 gap-px bg-ink/8 rounded-xl overflow-hidden fade-in-delay-5">
          {[
            { n: '12,400+', l: 'Students worldwide' },
            { n: '64', l: 'Hexagrams taught' },
            { n: '4.96', l: 'Average rating' },
          ].map((s) => (
            <div key={s.n} className="bg-paper px-6 py-5 text-center">
              <div className="font-display text-2xl md:text-3xl text-ink">{s.n}</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-ink/40 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 fade-in-delay-5">
        <span className="text-[9px] tracking-[0.4em] uppercase text-ink/30">Scroll</span>
        <div className="w-px h-10 bg-ink/15 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-1/2 bg-ink/40"
            style={{ animation: 'floatSlow 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}
