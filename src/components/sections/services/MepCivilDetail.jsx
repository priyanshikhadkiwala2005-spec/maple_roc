import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, FileCheck } from 'lucide-react';

export default function MepCivilDetail() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'In-House MEP Engineering',
      description:
        'Coordinated conduit, ducting, and power distribution drawings that eliminate clashes before physical site execution begins.',
    },
    {
      icon: Clock,
      title: 'Daily Milestones & Open Milestone Dashboards',
      description:
        'Real-time client progress updates with photo logs, material testing certificates, and transparent delivery milestones.',
    },
    {
      icon: FileCheck,
      title: 'Handover & After-Handover Warranty Support',
      description:
        'Comprehensive as-built drawings, operations manuals, and 12-month post-handover preventative maintenance coverage.',
    },
  ];

  return (
    <section id="mep-detail" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3 w-fit">
              <span>PMC & Site Execution</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight leading-tight mb-4">
              Integrated MEP, Civil & Turnkey Engineering
            </h2>

            <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed mb-6">
              Complete coordination of mechanical, electrical, plumbing, fire protection, and ceiling acoustics. One site team handles all trades, preventing the disputes and delays common in multi-contractor fitouts.
            </p>

            {/* 3 Check items with descriptions */}
            <div className="space-y-4 mb-7">
              {points.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F6146]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900 mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>Explore Our Contracting Standards</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Real MEP & Site Execution Photo */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100 aspect-4/3 sm:aspect-5/4">
              <img
                src="/images/image-34-brick-arch-building-night.jpg"
                alt="On-site turnkey fitout and MEP execution by MapleRoc"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating SLA Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/70 shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <p className="text-xs sm:text-sm font-semibold text-stone-900">
                    Zero-Delay Turnkey Handover SLA
                  </p>
                </div>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
                  aria-label="Fitout inquiry"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

