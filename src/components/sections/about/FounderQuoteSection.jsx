import { Quote, ArrowRight } from 'lucide-react';

export default function FounderQuoteSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFCF9] rounded-3xl p-6 sm:p-10 lg:p-14 border border-stone-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Founder Photo & Profile */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-stone-200/80 pb-6 lg:pb-0 lg:pr-8">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-emerald-100 shadow-md mb-4 bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Dharmendra Surelia - Founder of MapleRoc"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0D3B2E] mb-1">
                Dharmendra Surelia
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                Founder & Managing Director
              </p>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
                Over 25+ years of pioneering turnkey commercial interiors, institutional campuses, and bespoke furniture manufacturing across India.
              </p>
            </div>

            {/* Right Column: Inspiring Quote & Story */}
            <div className="lg:col-span-8 space-y-5">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Quote className="w-5 h-5 fill-emerald-800" />
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#0D3B2E] italic font-normal leading-snug">
                “True turnkey architecture isn't simply handing over keys — it is honoring every millimeter of intent, so workspaces empower the human mind for decades.”
              </blockquote>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                When we founded MapleRoc more than 25 years ago in Bharuch, commercial interiors were fragmented between suppliers, local contractors, and multiple consultants. Our vision was clear: to create one single home where design intent, precision joinery, and turnkey contracting meet seamlessly with total accountability.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D3B2E] hover:text-emerald-700 uppercase tracking-wider group"
                >
                  <span>Connect With Dharmendra Surelia</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

