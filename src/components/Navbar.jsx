import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

/* ── Diamond Logo SVG ── */
function DiamondLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      {/* Outer diamond — centered at (30,30) then rotated */}
      <rect
        x="12"
        y="12"
        width="36"
        height="36"
        rx="2"
        transform="rotate(45 30 30)"
        stroke="#C8A259"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner diamond — centered at (30,30) then rotated */}
      <rect
        x="16"
        y="16"
        width="28"
        height="28"
        rx="1"
        transform="rotate(45 30 30)"
        stroke="#C8A259"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#authority' },
  { label: 'Systems', href: '#systems' },
  { label: 'Contact', href: '#decision' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-light/90 backdrop-blur-xl border border-gold/10 shadow-lg shadow-navy/50'
          : 'bg-transparent border border-transparent'
      }`}
      style={{ borderRadius: '9999px' }}
    >
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-2">
        <DiamondLogo className="w-8 h-8" />
        <span className="font-body font-semibold text-cream text-sm tracking-wide hidden sm:inline">
          M. Scott
        </span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="gold-underline font-body text-cream/70 text-sm hover:text-cream transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#decision"
        className="hidden md:inline-flex btn-magnetic items-center px-5 py-2 bg-gold text-navy font-body font-semibold text-xs tracking-wide uppercase"
        style={{ borderRadius: '9999px' }}
      >
        <span className="btn-fill bg-gold-light" style={{ borderRadius: '9999px' }} />
        <span className="relative z-10">Book Audit</span>
      </a>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-cream"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-navy-light/95 backdrop-blur-xl border border-gold/10 p-6 flex flex-col gap-4 md:hidden"
          style={{ borderRadius: '1.5rem' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-cream/80 text-sm hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#decision"
            className="btn-magnetic inline-flex items-center justify-center px-5 py-2.5 bg-gold text-navy font-body font-semibold text-xs tracking-wide uppercase mt-2"
            style={{ borderRadius: '9999px' }}
            onClick={() => setMenuOpen(false)}
          >
            Book Audit
          </a>
        </div>
      )}
    </nav>
  );
}
