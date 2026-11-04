import { ArrowRight, Layers, Cpu, Wrench } from 'lucide-react';

export default function FurnitureArchitectureDetail() {
  const phases = [
    {
      icon: Layers,
      step: 'Phase 1',
      title: 'Space Planning & Ergonomics',
      description: 'Workplace density mapping, line-of-sight acoustic studies, and anthropometric sizing for maximum occupant wellbeing.',
    },
    {
      icon: Cpu,
      step: 'Phase 2',
      title: 'CNC Joinery & Factory Build',
      description: 'Precision automated cutting, zero-joint PUR edge-banding, and commercial-grade high pressure laminate lamination.',
    },
    {
      icon: Wrench,
      step: 'Phase 3',
      title: 'White-Glove On-Site Assembly',
      description: 'Factory-certified installation crew, clean-room assembly protocols, and comprehensive snag-free handover inspection.',
    },
  ];

  return (
    <section id="furniture-detail" className="py-12 sm:py-16 bg-[#F7FAF8] border-y border-[#E5EDE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Real Workstations Photo Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-white aspect-4/3 sm:aspect-5/4">
              <img
                src="/images/image-32-cubicle-fitout-installation.jpg"
                alt="MapleRoc Modular Workstations and Acoustic Pods"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating bottom tag card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/70 shadow-md">
                <span className="text-[10px] font-bold text-[#2F6146] uppercase tracking-wider block mb-0.5">
                  Workplace Ergonomics
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-900">
                  Closed Focus Workstations with Integrated Wire Management & Acoustic Screens
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 3 Phases */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3 w-fit">
              <span>Bespoke Joinery</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight leading-tight mb-4">
              Detailed Furniture & Seating Architecture
            </h2>

            <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed mb-6">
              From executive board tables to high-density workstations, our factory-backed production and OEM alliances ensure unmatched finish, ergonomic compliance, and commercial longevity.
            </p>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-7">
              {phases.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.step}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 border border-stone-200/80 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-7 h-7 rounded-lg bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center mb-2.5">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F6146] block mb-0.5">
                        {item.step}
                      </span>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-stone-900 leading-snug mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-stone-500 text-[11px] sm:text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>Schedule a Showroom Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

