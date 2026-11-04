import { Landmark, Building2, Scale, Activity } from 'lucide-react';

export default function SpatialDisciplinesSection() {
  const disciplines = [
    {
      icon: Landmark,
      title: 'Government & PSUs',
      description:
        'High-security spatial zoning, NBC fire compliance, CPWD-standard material testing, and grand civic auditoria execution.',
      clients: ['NHSRCL', 'NHAI', 'SBI', 'GNFC'],
    },
    {
      icon: Building2,
      title: 'Corporate Campuses',
      description:
        'High-density modular workstation floors, executive board suites, agile huddle zones, and acoustic cafeterias.',
      clients: ['Reliance', 'Adani', 'L&T', 'Torrent'],
    },
    {
      icon: Scale,
      title: 'Financial & Legal',
      description:
        'Acoustically insulated demountable glass partitioning, executive partner chambers, and secure transaction hubs.',
      clients: ['HDFC Bank', 'SBI Capital', 'Axis', 'Kotak'],
    },
    {
      icon: Activity,
      title: 'Healthcare & Universities',
      description:
        'Cleanroom clinical environments, antimicrobial solid surfaces, tiered lecture auditoriums, and medical laboratories.',
      clients: ['Vitrag Hospital', 'Apex Clinic', 'Zydus', 'Charusat'],
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7FAF8] border-y border-[#E3ECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Mapped Spatial Capability</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              Specialized Spatial Disciplines
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            Tailored spatial execution calibrated to the rigorous operational and statutory demands of distinct enterprise sectors.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2F6146]" />
                  </div>
                  <h4 className="text-base font-semibold text-stone-900 mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {item.clients.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-0.5 rounded-full bg-[#F4F7F5] text-stone-600 text-[10px] font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

