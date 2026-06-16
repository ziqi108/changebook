import Link from 'next/link';

const FOOTER = {
  Learn: [
    { label: 'Beginner Course', href: '/beginner-course' },
    { label: 'Intermediate', href: '/intermediate-course' },
    { label: 'Advanced', href: '/advanced-course' },
    { label: 'Journal', href: '/articles' },
  ],
  Practice: [
    { label: 'Consult a Master', href: '/consult' },
    { label: 'Free Hexagram Tool', href: '/articles' },
    { label: 'Meditations', href: '/articles' },
  ],
  About: [
    { label: 'Our Mission', href: '/about' },
    { label: 'Teachers', href: '/consult' },
    { label: 'Contact', href: '/about' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-paper border-t border-ink/15">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          <div>
            <Link href="/" className="font-display text-xl tracking-wide block mb-4">
              ChangeBook
            </Link>
            <p className="text-sm text-ink/55 leading-relaxed max-w-xs">
              A modern gateway to the <span className="italic">I Ching</span> —
              carrying 3,000 years of Chinese wisdom into contemporary life.
            </p>
          </div>

          {Object.entries(FOOTER).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[10px] tracking-[0.35em] uppercase text-ink/40 mb-6">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink/70 hover:text-ink transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-ink/40">
          <span>© 2026 ChangeBook · All rights reserved</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-ink/70 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
