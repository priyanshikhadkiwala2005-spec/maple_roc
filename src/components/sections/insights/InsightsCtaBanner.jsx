import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function InsightsCtaBanner() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#132A1C] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl border border-[#1d3d29]">
          
          <div className="relative z-10 max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-[11px] font-semibold uppercase tracking-wider mb-4">
              <span>Spatial Consultation</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight mb-4 leading-tight">
              Have an Upcoming Architectural or Turnkey Fitout Mandate?
            </h2>

            {/* Description */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Engage with our research-backed interior engineering team. Receive a feasibility study and locked-in cost model based on verified sector benchmarks.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-stone-100 text-[#132A1C] text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Initiate Feasibility Review</span>
                <ArrowRight className="w-4 h-4 text-[#132A1C]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Download Spatial Research Deck</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

