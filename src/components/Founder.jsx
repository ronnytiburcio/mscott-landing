import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import founderImg from '../assets/founder.png';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.founder-anim',
        { y: 50, opacity: 0 },
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
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-navy-light overflow-hidden"
    >
      {/* Accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold/20" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Photo Placeholder */}
          <div className="md:col-span-4 founder-anim">
            <div
              className="relative aspect-[3/4] bg-navy border border-gold/15 overflow-hidden"
              style={{ borderRadius: '1.5rem' }}
            >
              <img
                src={founderImg}
                alt="M. Scott — Founder"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/30" />
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-8">
            <div className="founder-anim flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="font-mono text-gold text-xs tracking-[0.25em] uppercase">
                The Founder
              </span>
            </div>

            <h2 className="founder-anim font-heading font-bold text-cream text-3xl md:text-4xl leading-tight mb-6">
              From Full-Time Hustle to{' '}
              <span className="italic text-gold">Precision Engineering</span>
            </h2>

            <div className="space-y-4">
              <p className="founder-anim font-body text-cream/50 text-sm md:text-base leading-relaxed">
                For the past eight years, I have operated at every level of the
                real estate game. My experience wasn&apos;t built watching videos;
                it was forged through the high-stakes reality of managing
                contractor timelines on flips, navigating the logistics of
                short-term rental turnover, and the long-term discipline of
                building buy-and-hold portfolios and private lending.
              </p>

              <p className="founder-anim font-body text-cream/50 text-sm md:text-base leading-relaxed">
                I know exactly what &ldquo;The Hustle&rdquo; feels like because
                I&apos;ve lived it full-time. But as a husband of 10 years and a
                father of two, I realized early on that raw passion doesn&apos;t
                scale&mdash;<span className="text-cream/80 font-medium">systems do</span>.
              </p>

              <p className="founder-anim font-body text-cream/50 text-sm md:text-base leading-relaxed">
                I founded{' '}
                <strong className="text-gold font-semibold">M.Scott Consulting LLC</strong>{' '}
                to solve the two biggest leaks I see in an investor&apos;s
                business: paralysis when analyzing deals, and chaos when managing
                leads.
              </p>

              <p className="founder-anim font-body text-cream/70 text-sm md:text-base leading-relaxed italic">
                My mission is simple: To help you stop trading your sanity for
                &ldquo;deals&rdquo; and start running a precision-engineered
                investment business.
              </p>
            </div>

            {/* Signature */}
            <div className="founder-anim mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-gold/40" />
              <div>
                <p className="font-heading italic text-gold text-lg">M. Scott</p>
                <p className="font-body text-cream/30 text-xs uppercase tracking-wider">
                  Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
