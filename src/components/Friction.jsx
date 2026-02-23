import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    Icon: Brain,
    title: 'Analysis Paralysis',
    description:
      'You run the numbers, then run them again. The spreadsheets stack up but the offers never go out. Overthinking kills more deals than bad markets.',
  },
  {
    Icon: Zap,
    title: 'Lead Gen Chaos',
    description:
      'Leads come in from six different channels with no system to track them. Your best opportunities slip through the cracks while you chase the wrong ones.',
  },
];

export default function Friction() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.friction-anim',
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
      id="friction"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-cream"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="friction-anim mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight">
            The Hustle Isn&apos;t Scalable.
          </h2>
        </div>

        <p className="friction-anim font-body text-navy/70 text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          You have the capital and the drive, but the market is crowded. Most
          investors fail to launch not because they lack effort, but because they
          drown in <strong className="text-navy font-semibold">Analysis Paralysis</strong> or
          lose their best leads to{' '}
          <strong className="text-navy font-semibold">Lead Gen Chaos</strong>.
        </p>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="friction-anim card-hover bg-white border border-navy/5 p-8 md:p-10"
              style={{ borderRadius: '1.5rem' }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-navy/5 mb-5" style={{ borderRadius: '0.75rem' }}>
                <point.Icon className="text-gold" size={24} />
              </div>
              <h3 className="font-heading font-bold text-navy text-xl md:text-2xl mb-3">
                {point.title}
              </h3>
              <p className="font-body text-navy/60 text-sm md:text-base leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Punchline */}
        <p className="friction-anim font-body text-navy/80 text-base md:text-lg mt-10 max-w-3xl leading-relaxed">
          You don&apos;t need more &ldquo;hustle&rdquo;&mdash;you need a better{' '}
          <span className="font-heading italic text-gold font-semibold">blueprint.</span>
        </p>
      </div>
    </section>
  );
}
