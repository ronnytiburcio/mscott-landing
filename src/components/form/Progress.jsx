// "Step X of 4" label + dot indicator. Pure presentation, no state.
// `label` is content.form.ui.stepLabel, passed down so the copy stays in
// content.js instead of being hardcoded here.
export default function Progress({ step, total, label }) {
  return (
    <div className="mb-8 flex items-center justify-between gap-4">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-light">
        {label(step, total)}
      </span>
      <div className="flex items-center gap-2" aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-6 rounded-full transition-colors ${
              i < step ? 'bg-accent' : 'bg-paper/15'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
