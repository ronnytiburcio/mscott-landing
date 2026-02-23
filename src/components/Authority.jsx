import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, BarChart3, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    Icon: Target,
    title: 'Strategic Sourcing',
    description:
      'Stop fighting over MLS scraps. Learn to build engines that find off-market deals with zero competition.',
  },
  {
    Icon: BarChart3,
    title: 'Data-Driven Analysis',
    description:
      'Remove the emotion. Use proven models to evaluate flips, rentals, and house hacks instantly.',
  },
  {
    Icon: Settings,
    title: 'Operational Excellence',
    description:
      'Implement the exact Notion-based workflows used to manage the entire lifecycle of a deal, from first contact to final close.',
  },
];

export default function Authority() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.auth-anim',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
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
      id="authority"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-navy overflow-hidden"
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold/40" />

      <div className="max-w-5xl mx-auto">
        {/* Section Eyebrow */}
        <div className="auth-anim flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-gold" />
          <span className="font-mono text-gold text-xs tracking-[0.25em] uppercase">
            The Framework
          </span>
        </div>

        {/* Section Header */}
        <h2 className="auth-anim font-heading font-bold text-cream text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          Built on 8 Years of &ldquo;Boots on{' '}
          <span className="italic text-gold">the Ground</span>&rdquo; Reality.
        </h2>

        <p className="auth-anim font-body text-cream/50 text-base md:text-lg max-w-3xl leading-relaxed mb-14">
          M.Scott Consulting is not a coaching program born in a classroom. Our
          systems were forged through nearly a decade of full-time
          investing&mdash;from managing high-turnover short-term rentals to
          executing complex flips and building stable buy-and-hold portfolios.
        </p>

        <p className="auth-anim font-body text-cream/70 text-base md:text-lg max-w-3xl leading-relaxed mb-14">
          We provide the architectural framework to{' '}
          <span className="text-gold font-semibold">professionalize your operation.</span>
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="auth-anim group hover-lift bg-navy-light border border-gold/10 p-8"
              style={{ borderRadius: '1.5rem' }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold/20 mb-5" style={{ borderRadius: '0.75rem' }}>
                <pillar.Icon className="text-gold" size={22} />
              </div>
              <h3 className="font-heading font-bold text-cream text-lg md:text-xl mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-cream/50 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
