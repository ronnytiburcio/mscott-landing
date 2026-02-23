export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-gold/5 px-6 md:px-16 lg:px-24 pt-12 md:pt-16 pb-8">
      <div className="max-w-5xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gold/5">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-cream text-lg mb-2">
              M. Scott Consulting
            </h3>
            <p className="font-body text-cream/40 text-sm leading-relaxed">
              Precision-engineered systems for off-market real estate investing.
              Built on 8 years of full-time experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#authority' },
                { label: 'Systems', href: '#systems' },
                { label: 'Book Audit', href: '#decision' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="gold-underline font-body text-sm text-cream/40 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-cream/60">Ronny Tiburcio</li>
              <li>
                <a
                  href="mailto:M.scott8189@gmail.com"
                  className="gold-underline font-body text-sm text-cream/40 hover:text-cream transition-colors"
                >
                  M.scott8189@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://thesolocloser.etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-underline font-body text-sm text-cream/40 hover:text-cream transition-colors"
                >
                  The Solo Closer — Etsy Shop
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCP-Yha1_7uvJ6mIdRimif2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-underline font-body text-sm text-cream/40 hover:text-cream transition-colors"
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="font-body text-xs text-cream/20">
            &copy; {new Date().getFullYear()} M.Scott Consulting LLC. All rights
            reserved.
          </p>

          {/* System Operational */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
            <span className="font-mono text-xs text-cream/20 tracking-wider">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
