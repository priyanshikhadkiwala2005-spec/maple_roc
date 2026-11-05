import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FeaturedProjectCard() {
  const thumbnails = [
    { src: '/images/image-15-healthcare-clinic.jpg', alt: 'Healthcare Clinic Facility' },
    { src: '/images/image-16-hospital-icu-ward.jpg', alt: 'Specialized Ward Fitout' },
    { src: '/images/image-18-clinic-lobby-reception.jpg', alt: 'Clinic Reception & Waiting Lobby' },
  ];

  return (
    <section id="featured-project" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xs p-6 sm:p-8 lg:p-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 sm:mb-8 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-sm">★</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F6146]">
              Featured Turnkey Build
            </span>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            Handover Certificate Issued: March 2026
          </span>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Main Image + 3 Thumbnails */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-stone-100 border border-stone-200/80 shadow-xs">
              <img
                src="/images/image-3-conference-hall.jpg"
                alt="Executive Boardroom and Headquarters Suite by MapleRoc"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-semibold text-stone-900 border border-white/70 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>100% On-Time Turnkey Delivery</span>
              </div>
            </div>

            {/* 3 Thumbnails Row */}
            <div className="grid grid-cols-3 gap-3">
              {thumbnails.map((thumb) => (
                <div
                  key={thumb.alt}
                  className="rounded-xl overflow-hidden aspect-4/3 border border-stone-200/80 bg-stone-100 hover:opacity-90 transition-opacity"
                >
                  <img
                    src={thumb.src}
                    alt={thumb.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Project Details & Client Testimonial */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-[#2F6146] uppercase tracking-wider block mb-2">
                Corporate Workplace | Turnkey Fitout
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#1F3D2B] font-normal tracking-tight leading-tight mb-3">
                Executive Boardroom & High-Density Headquarters
              </h3>

              <p className="text-stone-600 text-xs sm:text-[13.5px] leading-relaxed mb-6">
                Delivered turnkey in 72 days for a Fortune 500 enterprise. Full scope encompassed architectural layouts, custom acoustic wall panelling, motorized board table with hidden AV connections, HVAC balancing, and 120 ergonomic workstations.
              </p>

              {/* 3 Spec Callout Cards */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7FAF8] border border-stone-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6146] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-stone-900">
                      18,500 Sq.Ft. Turnkey Execution
                    </h5>
                    <p className="text-stone-500 text-[11px] leading-relaxed">
                      Full civil, electrical, MEP, HVAC, and access-controlled acoustic glass partitions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7FAF8] border border-stone-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6146] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-stone-900">
                      Custom Joinery & Acoustic Panelling
                    </h5>
                    <p className="text-stone-500 text-[11px] leading-relaxed">
                      Solid American walnut veneer, NRC 0.85 acoustic fabric walls, and motorized pop-up sockets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7FAF8] border border-stone-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6146] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-stone-900">
                      Zero Handover Snags on Day 1
                    </h5>
                    <p className="text-stone-500 text-[11px] leading-relaxed">
                      100% pre-commissioned AV, air balancing, and statutory fire compliance certification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Quote Box */}
            <div className="bg-[#F1F6F3] border border-[#D5E4DB] rounded-2xl p-4 sm:p-5">
              <p className="italic text-xs sm:text-[13px] text-stone-700 leading-relaxed mb-3">
                &ldquo;MapleRoc delivered our new corporate floor 10 days ahead of schedule with zero change-orders. The bespoke board table and acoustic detailing surpassed our global benchmarks.&rdquo;
              </p>
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#D5E4DB]">
                <span className="text-[11px] font-semibold text-stone-800">
                  VP Corporate Real Estate, Enterprise Client
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2F6146] hover:text-[#1F3D2B]"
                >
                  <span>Explore Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

