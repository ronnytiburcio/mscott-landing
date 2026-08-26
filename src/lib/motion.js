// Shared reduced-motion check used by any hook that drives a scroll or
// numeric animation (useReveal, useCountUp, ...).
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default prefersReducedMotion;
