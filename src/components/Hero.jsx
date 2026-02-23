import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current.querySelectorAll('.hero-anim');
      gsap.fromTo(
        els,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.4,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full bg-navy overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Subtle gradient glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #C8A259 0%, transparent 70%)',
        }}
      />

      {/* Gold accent lines (matching logo style) */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-5xl"
      >
        {/* Eyebrow */}
        <div className="hero-anim flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="font-mono text-gold text-xs tracking-[0.25em] uppercase">
            M. Scott Consulting
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-anim">
          <span className="font-heading font-bold text-cream text-4xl md:text-6xl lg:text-7xl leading-[1.1] block">
            Stop Guessing.
          </span>
          <span className="font-heading font-bold italic text-gold text-4xl md:text-6xl lg:text-7xl leading-[1.1] block mt-1">
            Start Closing.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="hero-anim font-body text-cream/60 text-base md:text-lg lg:text-xl max-w-2xl mt-6 md:mt-8 leading-relaxed">
          Precision-engineered systems to turn off-market chaos into a scalable
          deal-flow engine.
        </p>

        {/* CTA Row */}
        <div className="hero-anim flex flex-wrap items-center gap-4 mt-8 md:mt-10">
          <a
            href="#decision"
            className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-sm md:text-base tracking-wide uppercase"
            style={{ borderRadius: '2rem' }}
          >
            <span className="btn-fill bg-gold-light" style={{ borderRadius: '2rem' }} />
            <span className="relative z-10">Book Your Free Strategy Audit</span>
          </a>

          <a
            href="#systems"
            className="inline-flex items-center gap-2 text-cream/50 hover:text-gold font-body text-sm transition-colors group"
          >
            Explore The Solo Closer Systems
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
