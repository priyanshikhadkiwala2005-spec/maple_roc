import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

export default function ServicesCtaBanner() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#132A1C] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl border border-[#1d3d29]">
          
          {/* Subtle background decoration */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-900/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-[11px] font-semibold uppercase tracking-wider mb-4">
              <span>Ready to Start Your Fitout?</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-4 leading-tight">
              Ready to Transform Your Workplace?
            </h2>

            {/* Description */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              From initial workplace audit to turnkey handover, speak directly with our senior interior consultants. Schedule a site walk or download our spatial capability brochure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-stone-100 text-[#132A1C] text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#132A1C]" />
              </a>

              <a
                href="tel:+917359551555"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 73595 51555</span>
              </a>
            </div>

            {/* Bottom 3 checklist points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-stone-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fixed Budget Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-stone-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Guaranteed Handover SLA</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-stone-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Single Contract Accountability</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

