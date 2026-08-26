import useCountUp from '../../hooks/useCountUp';

function Stat({ stat }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div ref={ref} data-reveal className="flex flex-col gap-1">
      <span className="font-mono text-4xl font-medium tabular-nums text-paper sm:text-5xl">
        {stat.prefix}
        {value}
        {stat.suffix}
      </span>
      <span className="max-w-[16rem] text-sm text-paper">{stat.label}</span>
    </div>
  );
}

export default function StatsRow({ stats, footnote }) {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-x-10 gap-y-6">
        {stats.map((stat) => (
          <Stat key={stat.label} stat={stat} />
        ))}
      </div>
      {footnote && (
        <p data-reveal className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-paper">
          {footnote}
        </p>
      )}
    </div>
  );
}
