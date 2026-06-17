import Link from 'next/link';

const FOOTER_LINKS = {
  Learn: [
    { label: 'Beginner Course', href: '/beginner-course' },
    { label: 'Intermediate', href: '/intermediate-course' },
    { label: 'Advanced', href: '/advanced-course' },
    { label: 'Journal', href: '/articles' },
  ],
  Practice: [
    { label: 'Consult a Master', href: '/consult' },
    { label: 'Daily Hexagram', href: '/#hexagram' },
    { label: 'All Articles', href: '/articles' },
  ],
  About: [
    { label: 'Our Mission', href: '/about' },
    { label: 'Teachers', href: '/consult' },
    { label: 'Contact', href: '/about' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-paper border-t border-ink/10 overflow-hidden">
      {/* Background large seal character */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display seal text-[28rem] leading-none text-ink/[0.018]"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
        >
          易
        </span>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-20 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 pb-16 border-b border-ink/8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="font-display text-2xl tracking-tight hover:text-vermilion transition-colors duration-300">
                ChangeBook
              </span>
            </Link>
            <p className="text-sm text-ink/50 leading-relaxed max-w-xs mb-8">
              A modern gateway to the{' '}
              <span className="italic">I&nbsp;Ching</span> — carrying 3,000&nbsp;years
              of Chinese wisdom into contemporary life.
            </p>
            {/* Social row */}
            <div className="flex items-center gap-5">
              {[
                { label: 'Twitter', href: 'https://twitter.com/ichingmaster' },
                { label: 'YouTube', href: 'https://youtube.com/@ichingmaster' },
                { label: 'Reddit', href: 'https://reddit.com/r/iching' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.25em] uppercase text-ink/35 hover:text-ink transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-ink/35 mb-6 font-medium">
                {group}
              </h4>
              <ul className="space-y-3.5">
                {items.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink/60 hover:text-ink transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-ink/30">
            © 2026 ChangeBook · All rights reserved
          </span>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] tracking-[0.3em] uppercase text-ink/30 hover:text-ink/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
