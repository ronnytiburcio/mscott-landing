import Eyebrow from '../Eyebrow';

// Pure content component: no scroll logic, no backgrounds.
export default function ProblemCopy({ data }) {
  return (
    <div className="max-w-xl">
      <Eyebrow data-reveal>{data.eyebrow}</Eyebrow>
      <h2
        data-reveal
        className="headline-section font-display font-bold leading-tight text-paper"
      >
        {data.headline}
      </h2>
      <div className="mt-8 flex flex-col gap-4">
        {data.burns.map((burn) => (
          <div
            key={burn.title}
            data-reveal
            className="rounded-md border border-paper/10 bg-ink-2/60 p-5"
          >
            <h3 className="font-display font-semibold text-paper">{burn.title}</h3>
            <p className="mt-2 leading-relaxed text-paper">{burn.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
