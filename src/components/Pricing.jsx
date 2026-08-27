import { Check } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import Eyebrow from './Eyebrow';
import { pricing } from '../content';

export default function Pricing() {
  const containerRef = useReveal();
  const { primary, addon } = pricing;

  return (
    <section id={pricing.id} className="bg-ink-2 px-6 py-28 md:px-16 lg:px-24">
      <div ref={containerRef} className="mx-auto max-w-5xl">
        <Eyebrow data-reveal>{pricing.eyebrow}</Eyebrow>
        <h2
          data-reveal
          className="headline-section font-display font-bold leading-tight text-paper"
        >
          {pricing.headline}
        </h2>

        <div
          data-reveal
          className="relative mt-12 overflow-hidden rounded-lg border border-accent bg-ink p-8 shadow-[0_0_40px_-12px_rgba(255,107,26,0.35)] md:p-10"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.6fr)] md:items-end">
            <div>
              <h3 className="font-display text-2xl font-semibold text-paper">{primary.name}</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {primary.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-paper"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-paper">{primary.note}</p>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-paper">{primary.price}</span>
                <span className="font-mono text-sm text-paper/70">{primary.per}</span>
              </div>
              <a
                href={primary.cta.href}
                className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-accent px-6 py-3 font-display font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-amber"
              >
                {primary.cta.label}
              </a>
            </div>
          </div>
        </div>

        <aside
          data-reveal
          className="mt-6 grid gap-6 rounded-lg border border-paper/10 bg-ink/60 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-8"
        >
          <div>
            <span className="inline-flex w-fit items-center rounded-full border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-amber">
              {addon.badge}
            </span>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
              <h3 className="font-display text-xl font-semibold text-paper">{addon.name}</h3>
              <p className="font-mono text-sm text-paper">{addon.price}</p>
            </div>
            <p className="mt-3 max-w-3xl leading-relaxed text-paper">{addon.body}</p>
            <p className="mt-2 text-sm leading-relaxed text-paper">{addon.note}</p>
          </div>
          <a
            href={addon.cta.href}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-paper/20 px-6 py-3 font-display font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
          >
            {addon.cta.label}
          </a>
        </aside>
      </div>
    </section>
  );
}
