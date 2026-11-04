import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function PartnerHero() {
  const metrics = [
    { value: 'Direct', label: 'OEM Supply Contracts' },
    { value: '3 Global', label: 'Manufacturing Giants' },
    { value: 'Volume', label: 'Factory-Tier Pricing' },
    { value: '10-Year+', label: 'Warranty Coverage' },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-10 sm:pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Metric counters */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EE] border border-[#D1E5D9] text-[#2F6146] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6146]"></span>
              <span>Curated Alliance of Global Manufacturers</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-normal tracking-tight text-[#132A1C] leading-[1.15] mb-5">
              Global manufacturing power,{' '}
              <span className="italic text-[#2F6146]">local spatial execution.</span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-7 max-w-2xl">
              At MapleRoc, we forge direct alliances with the world&apos;s most distinguished workplace engineering and furniture brands. By bypassing multi-tier broker markups, we deliver authentic OEM warranties, factory-direct volume pricing, and guaranteed delivery coordination for India&apos;s leading corporate headquarters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#brand-giants"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>Request Brand Catalogues</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>OEM Specification Guide</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* 4-Metric Counter Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-stone-200/80">
              {metrics.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-2xl sm:text-3xl font-normal text-[#1F3D2B] tracking-tight mb-0.5">
                    {item.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-stone-500 font-medium leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 aspect-4/3 sm:aspect-5/4 lg:aspect-4/3">
              <img
                src="/images/image-23-radial-campus-stupa.jpg"
                alt="MapleRoc Global OEM Alliance Execution"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

              {/* Top Tag Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-stone-900 tracking-wider uppercase border border-white/70 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Authorized Direct OEM Alliance</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-[#2F6146] uppercase tracking-wider block mb-0.5">
                    Direct Factory Supply
                  </span>
                  <p className="text-xs sm:text-[13px] font-semibold text-stone-900 leading-tight">
                    Certified Installation Protocol & Original OEM Warranty
                  </p>
                </div>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
                  aria-label="Direct procurement inquiry"
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

