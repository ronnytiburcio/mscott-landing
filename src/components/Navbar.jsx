import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { brand, nav } from '../content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wordFirst, wordRest] = brand.wordmark.split('.');

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-72px 0px 0px 0px' }
    );
    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-paper/10 bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#hero" className="font-display text-lg font-bold text-paper">
          {wordFirst}
          <span className="text-accent">.</span>
          {wordRest}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-light transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="inline-flex items-center rounded-md bg-accent px-5 py-2 font-display text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-amber"
          >
            {nav.cta.label}
          </a>
        </div>

        <button
          type="button"
          className="text-paper md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 flex flex-col gap-6 bg-ink px-6 py-10 md:hidden">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-2xl font-semibold text-paper"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 font-display font-semibold text-ink"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}
