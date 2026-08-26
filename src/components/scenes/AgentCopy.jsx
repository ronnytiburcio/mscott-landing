import Eyebrow from '../Eyebrow';

// Pure content component: no scroll logic, no backgrounds.
export default function AgentCopy({ data }) {
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
        {data.intro}
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {data.jobs.map((job, i) => (
          <div
            key={job.title}
            data-reveal
            className="rounded-md border border-paper/10 bg-ink-2/60 p-5"
          >
            <span className="font-mono text-sm text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 font-display font-semibold text-paper">{job.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper">{job.body}</p>
          </div>
        ))}
      </div>
      <p
        data-reveal
        className="mt-6 max-w-prose border-l-2 border-amber pl-4 leading-relaxed text-paper"
      >
        {data.contrast}
      </p>
    </div>
  );
}
