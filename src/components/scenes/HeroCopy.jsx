import StatsRow from './StatsRow';
import Eyebrow from '../Eyebrow';

// Pure content component: no scroll logic, no backgrounds. Portaled into
// a scrub engine in a future build; StaticWorld owns layout/background.
export default function HeroCopy({ data }) {
  const [line1, line2] = data.headline;

  return (
    <div className="max-w-2xl">
      <Eyebrow data-reveal>{data.eyebrow}</Eyebrow>
      <h1
        data-reveal
        className="font-display font-bold leading-[1.05] text-paper"
        style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
      >
        <span className="block">{line1}</span>
        <span className="block text-accent">{line2}</span>
      </h1>
      <p data-reveal className="mt-6 max-w-prose text-lg leading-relaxed text-paper">
        {data.sub}
      </p>
      <a
        data-reveal
        href={data.cta.href}
        className="mt-8 inline-flex items-center rounded-md bg-accent px-7 py-3.5 font-display font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-amber"
      >
        {data.cta.label}
      </a>
      <StatsRow stats={data.stats} footnote={data.statsFootnote} />
    </div>
  );
}
