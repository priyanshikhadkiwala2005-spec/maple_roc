import { DollarSign, ShieldCheck, Cpu, Box, Clock, HeartHandshake } from 'lucide-react';

export default function PartnerValueSection() {
  const values = [
    {
      icon: DollarSign,
      title: 'Direct Factory Pricing',
      description:
        'Eliminate dealer markups and middleman margins. Save 15-25% on volume commercial furniture procurement through our direct master OEM agreements.',
    },
    {
      icon: ShieldCheck,
      title: 'Genuine & Certified Warranty',
      description:
        'Every workstation, ergonomic task chair, and acoustic system comes backed by authentic manufacturer warranty certificates and traceable serial numbers.',
    },
    {
      icon: Cpu,
      title: 'Integrated Civil & MEP Fitout',
      description:
        'Zero disputes between furniture vendors and site contractors. We coordinate in-floor raceways, electrical power feeds, and data drops directly.',
    },
    {
      icon: Box,
      title: 'On-Site Mockups & Live Demos',
      description:
        'Evaluate ergonomics and finishes before placing volume orders. We build full-scale mockups right inside your actual site shell space.',
    },
    {
      icon: Clock,
      title: 'Global Lead-Time Assurance',
      description:
        'Priority container allocation and direct factory dispatch ensure guaranteed delivery dates that align with your overall project handover SLA.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated OEM Maintenance SLA',
      description:
        'Trained technicians provide rapid-response warranty servicing, reconfigurations, fabric protection, and genuine OEM spare parts availability.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Direct Procurement Value</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              Why Enterprise Clients Choose Direct MapleRoc Execution
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            Bypassing multi-tier dealers and distributors gives our clients significant cost advantages, authentic warranties, and seamless turnkey coordination.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {values.map((item) => {
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

