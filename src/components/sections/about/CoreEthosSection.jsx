import SectionBadge from '../../common/SectionBadge';
import { HeartHandshake, Leaf, Layers, ShieldCheck } from 'lucide-react';

export default function CoreEthosSection() {
  const ethosItems = [
    {
      icon: HeartHandshake,
      title: 'Human-First Ergonomics',
      desc: 'Focusing on employee posture, natural daylighting, and acoustic comfort to boost wellbeing and productivity.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      desc: 'Certified low-VOC finishes, sustainably sourced hardwoods, and recyclable acoustic panels for green spaces.',
    },
    {
      icon: Layers,
      title: 'Architectural Cohesion',
      desc: 'Seamless transition between architectural base-build structure and custom interior joinery elements.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Quality Standards',
      desc: 'Rigorous multi-stage factory and on-site audits ensuring zero tolerance for execution defects.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, description, 2x2 grid */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <SectionBadge text="Our Core Ethos" />

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight leading-tight">
              Crafting Spaces That Balance Human Wellbeing, Utility & Architectural Rigor.
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              We believe that exceptional commercial interiors are never born from standardized templates. Whether it's a high-speed rail headquarters, a multispecialty healthcare lobby, or an executive boardroom, our work unifies ergonomic science, acoustic comfort, and precision joinery.
            </p>

            {/* 2x2 Grid of Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ethosItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0D3B2E] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Photo with Dark Green Overlay Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-stone-100 aspect-4/5">
              <img
                src="/images/image-4-living-lounge.jpg"
                alt="MapleRoc architectural conference craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Overlay Green Banner Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-[#0D3B2E] text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-emerald-900/60 shadow-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  PRECISION EXECUTION
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                  “High precision craftsmanship from concept to completion.”
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

