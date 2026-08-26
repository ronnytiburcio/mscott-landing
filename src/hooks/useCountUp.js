import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../lib/motion';

// Ticks a number from 0 up to `value` over ~1.2s once the element scrolls
// into view. Uses IntersectionObserver so it fires exactly once. Respects
// prefers-reduced-motion by starting (and staying) at the final value.
export function useCountUp(value, { duration = 1200 } = {}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(() =>
    prefersReducedMotion() ? value : 0
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return undefined;

    let frame;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();

            const tick = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - (1 - progress) * (1 - progress);
              setDisplay(Math.round(eased * value));

              if (progress < 1) {
                frame = requestAnimationFrame(tick);
              } else {
                setDisplay(value);
              }
            };

            frame = requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return { ref, value: display };
}

export default useCountUp;
