import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { prefersReducedMotion } from '../lib/motion';

// Shared scroll reveal for a group of elements within a container.
// Animates matching children from y:40/opacity:0 up to their natural
// position, staggered, triggered as the container scrolls into view.
// Skips entirely (elements stay visible, no animation) when the visitor
// has prefers-reduced-motion set.
//
// A container that is already inside the reveal threshold at mount time
// (the hero section on load, for example) plays immediately instead of
// waiting on ScrollTrigger: ScrollTrigger only fires onEnter on a scroll
// position transitioning into its start/end range, not on a container
// that was already inside that range the moment it was created.
export function useReveal(selector = '[data-reveal]', options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    if (prefersReducedMotion()) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const targets = container.querySelectorAll(selector);
      if (!targets.length) return;

      const rect = container.getBoundingClientRect();
      const alreadyInView = rect.top <= window.innerHeight * 0.75;

      gsap.fromTo(
        targets,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: alreadyInView
            ? undefined
            : {
                trigger: container,
                start: 'top 75%',
                ...options.scrollTrigger,
              },
        }
      );
    }, container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  return containerRef;
}

export default useReveal;
