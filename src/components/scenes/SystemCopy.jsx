import Eyebrow from '../Eyebrow';

// Pure content component: no scroll logic, no backgrounds.
export default function SystemCopy({ data }) {
  return (
    <div className="max-w-4xl">
      <Eyebrow data-reveal>{data.eyebrow}</Eyebrow>
      <h2
        data-reveal
        className="headline-section font-display font-bold leading-tight text-paper"
      >
        {data.headline}
      </h2>
      <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-paper">
        {data.body}
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {data.points.map((point, i) => (
          <div
            key={point.title}
            data-reveal
            className="rounded-md border border-paper/10 bg-ink-2/70 p-5"
          >
            <span className="font-mono text-sm text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display font-semibold text-paper">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper">{point.body}</p>
          </div>
        ))}
      </div>
      <div data-reveal className="mt-5 rounded-md border border-accent/40 bg-accent/10 p-5">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
          {data.sample.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-paper">
          {data.sample.headline}
        </h3>
        <p className="mt-2 max-w-prose leading-relaxed text-paper">{data.sample.body}</p>
      </div>
      <p data-reveal className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-paper">
        {data.proofLine}
      </p>
    </div>
  );
}
