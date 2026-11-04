import { ArrowRight, ArrowUpRight, Phone, MapPin, User } from 'lucide-react';

export default function PartnerCtaBanner() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#132A1C] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl border border-[#1d3d29]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-[11px] font-semibold uppercase tracking-wider mb-4">
                <span>Official Brand Partners</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight mb-4 leading-tight">
                Request Official Brand Catalogs & Spatial Mockup
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Looking to specify Haworth, HNI, or Okamura for your new corporate fitout? Speak with our senior product consultants for line-item pricing and physical sample delivery.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-stone-100 text-[#132A1C] text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <span>Request Official Catalog & Pricing</span>
                  <ArrowRight className="w-4 h-4 text-[#132A1C]" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Book In-Shell Spatial Mockup</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Right Card: Direct Procurement Desk */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                  Direct Procurement Desk
                </span>
                <a
                  href="tel:+917359551555"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-emerald-300 flex items-center gap-2.5 transition-colors"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+91 73595 51555</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    Founder: <strong className="text-white font-medium">Dharmendra Surelia</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    B-311, Alpha Arcades, MIPCO Chowkdi, G.I.D.C., Bharuch – 392015, Gujarat, India
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

