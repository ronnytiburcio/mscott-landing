import { Phone, Check } from 'lucide-react';
import Eyebrow from '../Eyebrow';

// Pure content component: no scroll logic, no backgrounds.
export default function HandoffCopy({ data }) {
  return (
    <div className="max-w-xl">
      <Eyebrow data-reveal>{data.eyebrow}</Eyebrow>
      <div
        data-reveal
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-paper/15 bg-ink-2 text-accent"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2
        data-reveal
        className="headline-section font-display font-bold leading-tight text-paper"
      >
        {data.headline}
      </h2>
      <p data-reveal className="mt-6 max-w-prose text-lg leading-relaxed text-paper">
        {data.body}
      </p>
      <ul className="mt-8 flex flex-col gap-3">
        {data.points.map((point) => (
          <li key={point} data-reveal className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
            <span className="text-paper">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
