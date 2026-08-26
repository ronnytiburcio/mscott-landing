import useReveal from '../hooks/useReveal';
import { faq } from '../content';

export default function Faq() {
  const containerRef = useReveal();

  return (
    <section id={faq.id} className="bg-ink px-6 py-28 md:px-16 lg:px-24">
      <div ref={containerRef} className="mx-auto max-w-3xl">
        <h2
          data-reveal
          className="headline-section font-display font-bold leading-tight text-paper"
        >
          {faq.headline}
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {faq.items.map((item) => (
            <details
              key={item.q}
              data-reveal
              className="group rounded-md border border-paper/10 bg-ink-2/60 px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-paper [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  className="relative h-4 w-4 flex-shrink-0 text-accent"
                  aria-hidden="true"
                >
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-paper">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
