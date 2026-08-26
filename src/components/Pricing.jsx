import { Check } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import Eyebrow from './Eyebrow';
import { pricing } from '../content';

export default function Pricing() {
  const containerRef = useReveal();

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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pricing.cards.map((card) => (
            <div
              key={card.name}
              data-reveal
              className={`relative flex flex-col overflow-hidden rounded-lg border p-8 ${
                card.featured
                  ? 'border-accent bg-ink shadow-[0_0_40px_-12px_rgba(255,107,26,0.35)]'
                  : 'border-paper/10 bg-ink/60'
              }`}
            >
              {card.featured && (
                <span
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-amber"
                  aria-hidden="true"
                />
              )}

              {card.badge && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                  {card.badge}
                </span>
              )}

              <h3 className="font-display text-xl font-semibold text-paper">{card.name}</h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-paper">{card.price}</span>
                <span className="font-mono text-sm text-paper/70">{card.per}</span>
              </div>
              {card.secondary && (
                <p className="mt-1 font-mono text-sm text-paper/70">{card.secondary}</p>
              )}

              <ul className="mt-6 flex flex-col gap-3">
                {card.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-paper"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-paper/80">{card.note}</p>

              <a
                href={card.cta.href}
                className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-md px-6 py-3 font-display font-semibold transition-transform hover:-translate-y-0.5 ${
                  card.featured
                    ? 'bg-accent text-ink hover:bg-amber'
                    : 'border border-paper/20 text-paper hover:border-accent hover:text-accent'
                }`}
              >
                {card.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
