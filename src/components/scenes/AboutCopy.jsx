import founderPhoto from '../../assets/founder.webp';
import Eyebrow from '../Eyebrow';

// Pure content component: no scroll logic, no backgrounds.
export default function AboutCopy({ data }) {
  return (
    <div className="max-w-2xl md:max-w-4xl">
      <Eyebrow data-reveal>{data.eyebrow}</Eyebrow>
      <div className="grid gap-10 md:grid-cols-[minmax(0,220px)_1fr] md:items-start">
        <div data-reveal className="w-40 sm:w-48 md:w-full">
          <img
            src={founderPhoto}
            alt="Ron, founder of M. Scott Consulting"
            className="w-full rounded-lg border border-paper/10 object-cover"
          />
        </div>
        <div>
          <h2
            data-reveal
            className="headline-section font-display font-bold leading-tight text-paper"
          >
            {data.headline}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {data.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                data-reveal
                className="max-w-prose leading-relaxed text-paper"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p data-reveal className="mt-6 font-mono text-sm uppercase tracking-[0.1em] text-accent">
            {data.signature}
          </p>
        </div>
      </div>
    </div>
  );
}
