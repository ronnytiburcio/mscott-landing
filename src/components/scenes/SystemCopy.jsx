// The exact sentence from content.js (system.points[1].body) that gets a
// visual highlight. Kept as a constant so the split is explicit and this
// component never rewrites copy, only how one sentence within it renders.
const HIGHLIGHT_SENTENCE = 'You’re on one right now.';

function renderBodyWithHighlight(body) {
  if (!body.includes(HIGHLIGHT_SENTENCE)) return body;
  const [before, after] = body.split(HIGHLIGHT_SENTENCE);
  return (
    <>
      {before}
      <span className="font-semibold text-accent">{HIGHLIGHT_SENTENCE}</span>
      {after}
    </>
  );
}

import Eyebrow from '../Eyebrow';

// Pure content component: no scroll logic, no backgrounds.
export default function SystemCopy({ data }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow data-reveal>{data.eyebrow}</Eyebrow>
      <h2
        data-reveal
        className="headline-section font-display font-bold leading-tight text-paper"
      >
        {data.headline}
      </h2>
      <p data-reveal className="mt-6 max-w-prose text-lg leading-relaxed text-paper">
        {data.body}
      </p>
      <div className="mt-8 flex flex-col gap-4">
        {data.points.map((point, i) => (
          <div
            key={point.title}
            data-reveal
            className="rounded-md border border-paper/10 bg-ink-2/60 p-5"
          >
            <div className="flex items-start gap-4">
              <span className="mt-1 font-mono text-sm text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display font-semibold text-paper">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-paper">
                  {renderBodyWithHighlight(point.body)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p data-reveal className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-paper">
        {data.proofLine}
      </p>
    </div>
  );
}
