import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layout, Database, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ── Notion Dashboard Mockup ── */
function NotionMockup() {
  return (
    <div
      className="bg-navy-light border border-gold/10 p-1 shadow-2xl shadow-navy/50"
      style={{ borderRadius: '1rem' }}
    >
      {/* Window Chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gold/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cream/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-cream/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-cream/10" />
        </div>
        <span className="font-mono text-cream/30 text-[10px] ml-3">Deal Pipeline — M. Scott Systems</span>
      </div>

      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-48 border-r border-gold/5 p-4 space-y-3">
          {[
            { icon: Layout, label: 'Dashboard', active: true },
            { icon: Database, label: 'Deal Pipeline', active: false },
            { icon: FileText, label: 'SOPs', active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 px-3 py-2 text-xs font-body ${
                item.active
                  ? 'text-gold bg-gold/5 font-medium'
                  : 'text-cream/30'
              }`}
              style={{ borderRadius: '0.5rem' }}
            >
              <item.icon size={14} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 space-y-4">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Active Leads', value: '47', color: 'text-gold' },
              { label: 'Under Contract', value: '8', color: 'text-green-400' },
              { label: 'Closed MTD', value: '3', color: 'text-cream' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-navy/50 border border-gold/5 p-3"
                style={{ borderRadius: '0.75rem' }}
              >
                <p className="font-mono text-cream/30 text-[9px] uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className={`font-heading font-bold text-xl md:text-2xl ${stat.color} mt-1`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Pipeline Table */}
          <div className="space-y-1.5">
            <div className="grid grid-cols-4 gap-2 px-3 py-2">
              <span className="font-mono text-cream/25 text-[9px] uppercase tracking-wider">Property</span>
              <span className="font-mono text-cream/25 text-[9px] uppercase tracking-wider">Stage</span>
              <span className="font-mono text-cream/25 text-[9px] uppercase tracking-wider">ARV</span>
              <span className="font-mono text-cream/25 text-[9px] uppercase tracking-wider">Status</span>
            </div>
            {[
              { prop: '142 Elm St', stage: 'Analysis', arv: '$285K', status: 'In Progress', statusColor: 'bg-gold/20 text-gold' },
              { prop: '89 Oak Ave', stage: 'Under Contract', arv: '$412K', status: 'Active', statusColor: 'bg-green-500/20 text-green-400' },
              { prop: '23 Pine Dr', stage: 'Due Diligence', arv: '$198K', status: 'Review', statusColor: 'bg-blue-500/20 text-blue-400' },
              { prop: '567 Main St', stage: 'Closed', arv: '$335K', status: 'Complete', statusColor: 'bg-cream/10 text-cream/50' },
            ].map((row) => (
              <div
                key={row.prop}
                className="grid grid-cols-4 gap-2 px-3 py-2.5 bg-navy/30 border border-gold/5"
                style={{ borderRadius: '0.5rem' }}
              >
                <span className="font-body text-cream/70 text-xs">{row.prop}</span>
                <span className="font-body text-cream/50 text-xs">{row.stage}</span>
                <span className="font-mono text-cream/60 text-xs">{row.arv}</span>
                <span
                  className={`font-mono text-[10px] px-2 py-0.5 inline-flex items-center w-fit ${row.statusColor}`}
                  style={{ borderRadius: '9999px' }}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Systems() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sys-anim',
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
      id="systems"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-cream"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="sys-anim flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="font-mono text-gold text-xs tracking-[0.25em] uppercase">
              The Solo Closer
            </span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="sys-anim font-heading font-bold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight">
            Your Deal-Flow,{' '}
            <span className="italic text-gold">Systematized.</span>
          </h2>
          <p className="sys-anim font-body text-navy/60 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            The exact Notion-based frameworks, SOPs, and off-market strategies used
            to manage a full-time investment operation.
          </p>
        </div>

        {/* Notion Dashboard Mockup */}
        <div className="sys-anim">
          <NotionMockup />
        </div>

        {/* CTA link */}
        <div className="sys-anim text-center mt-10">
          <a
            href="#decision"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-body font-semibold text-sm transition-colors group"
          >
            See how these systems work for your deals
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
