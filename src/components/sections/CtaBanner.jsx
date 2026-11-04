import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 bg-stone-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0D3B2E] via-[#0A3025] to-[#07241C] text-white p-6 sm:p-10 lg:p-16 shadow-2xl border border-emerald-900/40">
          
          {/* Subtle ambient light gradient */}
          <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-3xl space-y-4 sm:space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/70 border border-emerald-700/60 text-emerald-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
              Get In Touch Today
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Let's Transform Your Space.
            </h2>

            <p className="text-xs sm:text-base text-emerald-100/80 leading-relaxed max-w-2xl">
              From conceptual architectural space planning to custom workstation joinery and final handover—MapleRoc takes total single-source accountability. Schedule your initial consultation today.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-3">
              <a
                href="mailto:contact@mapleroc.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white text-[#0D3B2E] hover:bg-emerald-50 shadow-md transition-colors"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0D3B2E]" />
              </a>

              <a
                href="tel:+917359551555"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-emerald-900/60 hover:bg-emerald-900/90 text-white border border-emerald-700/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>+91 73595 51555</span>
              </a>
            </div>

            {/* 3 Trust Checkmarks */}
            <div className="pt-4 sm:pt-6 border-t border-emerald-800/60 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-200/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Initial Space Assessment</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Itemized BOQ</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Obligation Feasibility</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
