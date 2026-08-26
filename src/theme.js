// Single source of truth for brand tokens.
// Consumed by tailwind.config.js (import) and mirrored by hand in:
//   - src/index.css :root block
//   - public/privacy.html and public/terms.html :root blocks
// Update all three when changing values here.

export const colors = {
  ink: '#12151A', // page base, headline text on light
  'ink-2': '#1C2129', // raised surfaces on dark
  paper: '#F6F1E8', // warm off-white surfaces, text on dark
  'paper-dim': '#E9E2D4', // borders/dividers on light
  accent: '#FF6B1A', // safety orange — 6.5:1 on ink (AA); on paper use for large/graphic only
  'accent-deep': '#C24E0A', // orange for text on light surfaces (AA on paper)
  amber: '#FFB020', // secondary energy, stats/highlights on dark
  slate: '#64748B', // cool secondary, muted text
  'slate-light': '#9AA6B8', // muted text on dark
};

export const fonts = {
  display: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
  body: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
  mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
};
