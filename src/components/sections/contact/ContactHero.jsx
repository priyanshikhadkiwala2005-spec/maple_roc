import { Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function ContactHero() {
  const highlights = [
    {
      icon: Clock,
      value: '24-Hour',
      label: 'Fast-Track Feasibility Turnaround',
    },
    {
      icon: ShieldCheck,
      value: 'Director-Led',
      label: 'Direct Technical Spatial Sessions',
    },
    {
      icon: MapPin,
      value: 'Bharuch HQ',
      label: '& Regional Field Stations',
    },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-10 sm:pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EE] border border-[#D1E5D9] text-[#2F6146] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6146]"></span>
              <span>Architectural Feasibility & Turnkey Consultation</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-normal tracking-tight text-[#132A1C] leading-[1.15] mb-5">
              Begin Your Architectural Dialogue with MapleRoc.
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Whether commissioning a corporate turnkey headquarters, consulting on specialized MEP engineering, or procuring BIFMA-certified systems across Western India, our executive spatial directors are directly accessible.
            </p>

            {/* 3 Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-stone-200/80">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.value}
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs"
                  >
                    <div className="flex items-center gap-2 mb-1 text-[#2F6146]">
                      <IconComponent className="w-4 h-4" />
                      <span className="font-serif text-lg font-bold text-[#1F3D2B]">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 font-medium leading-snug">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 aspect-4/3 sm:aspect-5/4 lg:aspect-4/3">
              <img
                src="/images/image-18-clinic-lobby-reception.jpg"
                alt="MapleRoc Corporate Secretariat Conference Room"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#2F6146]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-stone-900 leading-snug">
                    Corporate Secretariat
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-tight">
                    B-311, Alpha Arcades, MIPCO Chowkdi, G.I.D.C., Bharuch
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

