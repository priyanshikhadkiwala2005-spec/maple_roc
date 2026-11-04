import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative pt-6 sm:pt-10 pb-10 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EE] border border-[#D1E5D9] text-[#2F6146] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6146]"></span>
              <span>Turnkey Commercial Interior Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-normal tracking-tight text-[#132A1C] leading-[1.15] mb-5">
              Comprehensive spatial execution from{' '}
              <span className="italic text-[#2F6146]">concept through handover.</span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-7 max-w-2xl">
              At MapleRoc, we unify full-lifecycle design-build expertise under one roof: workplace strategy, bespoke joinery, MEP engineering, and on-site delivery without vendor handoffs. We take total single-contract accountability for design integrity, schedules, and transparent budgets.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#disciplines-grid"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>Explore Our Discipline Matrix</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>Download Brochure</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* 3 Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-stone-200/80">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#2F6146] shrink-0" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#2F6146] shrink-0" />
                <span>Single Point Accountability</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#2F6146] shrink-0" />
                <span>Fixed Price & Handover</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 aspect-4/3 sm:aspect-5/4 lg:aspect-4/3">
              <img
                src="/images/image-27-office-reception-fitout.jpg"
                alt="MapleRoc Commercial Fitout and Joinery Execution"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pill Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <p className="text-xs sm:text-[13px] font-semibold text-stone-900 leading-tight">
                    Single-point accountability from survey to turnkey delivery
                  </p>
                </div>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
                  aria-label="Inquire now"
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

