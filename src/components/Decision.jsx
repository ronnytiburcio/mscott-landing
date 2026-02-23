import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Decision() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.decision-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="decision"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-navy overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #C8A259 0%, transparent 60%)',
        }}
      />

      {/* Gold borders */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold/40" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="decision-anim flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="font-mono text-gold text-xs tracking-[0.25em] uppercase">
            The Next Step
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>

        {/* Headline */}
        <h2 className="decision-anim font-heading font-bold text-cream text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          Strategy or Systems?{' '}
          <span className="italic text-gold block md:inline">Let&apos;s Find Out.</span>
        </h2>

        {/* Body Copy */}
        <p className="decision-anim font-body text-cream/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
          I offer a complimentary 30-minute consultation to audit your current
          approach to finding deals. By the end of our call, you&apos;ll know
          exactly what you need&mdash;whether it&apos;s plugging the right{' '}
          <strong className="text-cream/80">Solo Closer</strong> digital products
          into your workflow, or a full consulting build-out to get your business
          off the ground.
        </p>

        {/* CTA */}
        <div className="decision-anim mt-10">
          <a
            href="https://calendly.com/m-scott8189/free-strategy-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-3 px-10 py-5 bg-gold text-navy font-body font-bold text-sm md:text-base tracking-wide uppercase"
            style={{ borderRadius: '2rem' }}
          >
            <span className="btn-fill bg-gold-light" style={{ borderRadius: '2rem' }} />
            <Calendar size={18} className="relative z-10" />
            <span className="relative z-10">Schedule Your Free Audit</span>
          </a>
        </div>

        {/* Trust line */}
        <p className="decision-anim font-body text-cream/25 text-xs mt-6 tracking-wide">
          No sales pitch. No pressure. Just precision.
        </p>
      </div>
    </section>
  );
}
