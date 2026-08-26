// Shared eyebrow: mono uppercase label above every section headline.
// No decorative rule marks (Ron: no dashes anywhere on the page).
// Spread any extra props (data-reveal, etc.) onto the root so callers
// keep hooking it into useReveal exactly as before.
export default function Eyebrow({ children, centered = false, ...props }) {
  return (
    <div {...props} className={`mb-6 flex items-center ${centered ? 'justify-center' : ''}`}>
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
        {children}
      </span>
    </div>
  );
}
