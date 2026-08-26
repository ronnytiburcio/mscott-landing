import { brand, footer, nav } from '../content';

export default function Footer() {
  const [wordFirst, wordRest] = brand.wordmark.split('.');

  return (
    <footer className="border-t border-paper/10 bg-ink-2 px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <span className="font-display text-lg font-bold text-paper">
            {wordFirst}
            <span className="text-accent">.</span>
            {wordRest}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-paper/80">{footer.blurb}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Navigate</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {nav.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-light transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-sm text-slate-light transition-colors hover:text-paper"
                >
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Legal</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-light transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-paper/10 pt-6">
        <p className="text-xs text-slate-light">{footer.copyright}</p>
      </div>
    </footer>
  );
}
