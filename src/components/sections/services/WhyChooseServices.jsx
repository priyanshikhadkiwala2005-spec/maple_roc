import { Briefcase, ShieldCheck, Gem, Clock, Cpu, HeartHandshake } from 'lucide-react';

export default function WhyChooseServices() {
  const advantages = [
    {
      icon: Briefcase,
      title: '25+ Years of Proven Leadership',
      description:
        'Delivering spaces across corporate, industrial, and institutional sectors with an unmatched track record across Western India.',
    },
    {
      icon: ShieldCheck,
      title: 'Single-Point Accountability',
      description:
        'One contract, one point of contact, zero blame shifting between architects, MEP vendors, civil contractors, and joiners.',
    },
    {
      icon: Gem,
      title: 'Curated Brand Alliances',
      description:
        'Direct OEM access to premier commercial brands ensuring genuine warranty certificates, volume pricing, and priority dispatch.',
    },
    {
      icon: Clock,
      title: 'Guaranteed Engineering & Timelines',
      description:
        'Strict milestone tracking with guaranteed penalty-backed handover dates committed in our master commercial contract.',
    },
    {
      icon: Cpu,
      title: 'In-House MEP Coordination',
      description:
        'Comprehensive HVAC, electrical, and structured cabling integrated seamlessly into architectural layouts before site work starts.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Post-Handover Care',
      description:
        'Comprehensive 12-month operational warranty with rapid SLA response for any snagging, maintenance, adjustments, or additions.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
            <span>The MapleRoc Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
            Why Choose MapleRoc for Spatial Delivery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Built on a quarter-century of engineering consistency, our turnkey model delivers complete peace of mind to enterprise facility heads.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2F6146]" />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-semibold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

