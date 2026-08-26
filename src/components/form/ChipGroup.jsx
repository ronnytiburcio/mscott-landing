import { useRef } from 'react';

// Accessible radiogroup of chip buttons. onChange(value, { advance })
// tells LeadForm whether this selection should auto-advance: clicks and
// Enter/Space confirm (advance: true); arrow-key browsing only selects
// (advance: false) so keyboard users are not yanked to the next step
// while comparing options.
export default function ChipGroup({ name, options, value, onChange }) {
  const chipRefs = useRef([]);

  const focusChip = (index) => {
    const el = chipRefs.current[index];
    if (el) el.focus();
  };

  const handleKeyDown = (event, index) => {
    const lastIndex = options.length - 1;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      const next = index === lastIndex ? 0 : index + 1;
      onChange(options[next], { advance: false });
      focusChip(next);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      const prev = index === 0 ? lastIndex : index - 1;
      onChange(options[prev], { advance: false });
      focusChip(prev);
    }
  };

  return (
    <div role="radiogroup" aria-label={name} className="flex flex-wrap gap-3">
      {options.map((option, index) => {
        const checked = value === option;
        const tabbable = value ? checked : index === 0;

        return (
          <button
            key={option}
            ref={(el) => {
              chipRefs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={tabbable ? 0 : -1}
            onClick={() => onChange(option, { advance: true })}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`inline-flex min-h-[44px] items-center rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-2 ${
              checked
                ? 'border-accent bg-accent text-ink'
                : 'border-paper/20 bg-ink/60 text-paper hover:border-accent/60 hover:text-accent'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
