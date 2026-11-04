import { CheckCircle2 } from 'lucide-react';

export default function PartnerFinishesSection() {
  const points = [
    {
      title: 'BIFMA X5.1 & EN 1335 Certified',
      text: 'Rigorously tested for structural integrity, drop loads, and 24/7 commercial durability.',
    },
    {
      title: 'Zero-VOC & Low-Emission Fabrics',
      text: 'GREENGUARD Gold accredited upholstery for healthy, allergen-free indoor office air quality.',
    },
    {
      title: 'Custom Factory RAL Powder-Coating',
      text: 'Exact corporate brand color matching on workstation steel legs, beams, and cable raceways.',
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Sample Board & Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100 aspect-4/3 sm:aspect-5/4">
              <img
                src="/images/image-25-institutional-campus-aerial.jpg"
                alt="MapleRoc architectural material finishes and craft library"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/70 shadow-md">
                <span className="text-[10px] font-bold text-[#2F6146] uppercase tracking-wider block mb-0.5">
                  Craft & Material Archives
                </span>
                <p className="text-xs sm:text-[13px] font-semibold text-stone-900 leading-tight">
                  Original OEM sample boards, solid timber veneers, and powder-coat RAL swatches
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3 w-fit">
              <span>Materials & Testing</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight leading-tight mb-4">
              Curated Finishes, Uncompromising Standards
            </h2>

            <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed mb-6">
              Every finish option in our portfolio is laboratory-tested for commercial abrasion resistance, fire retardancy (FR), and VOC emissions. We provide physical sample boards directly to architects and client leadership teams for tactile review.
            </p>

            {/* 3 Check items with descriptions */}
            <div className="space-y-4 mb-2">
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
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

