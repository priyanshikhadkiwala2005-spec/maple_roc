import { CheckCircle2 } from 'lucide-react';

export default function PartnerSectorsSection() {
  const sectors = [
    {
      num: '01',
      title: 'Corporate & Tech HQ',
      description:
        'High-density open floors, acoustic focus pods, and sit-to-stand motorized desking engineered for 24/7 engineering and tech teams.',
    },
    {
      num: '02',
      title: 'Executive & Boardrooms',
      description:
        'Solid timber veneer board tables, luxury leather seating, and concealed motorized audio-visual presentation hubs.',
    },
    {
      num: '03',
      title: 'Healthcare & Labs',
      description:
        'Antimicrobial vinyl, bleach-cleanable seating, seamless chemical-resistant surfaces, and ergonomic nurse station desking.',
    },
    {
      num: '04',
      title: 'Institutions & Universities',
      description:
        'Heavy-duty lecture hall seating, mobile study tables, and acoustic auditoria seating built for 20-year commercial lifespans.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7FAF8] border-y border-[#E3ECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
            <span>Industry Calibration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight mb-2">
            Calibrated for Demanding Sectors
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Our brand partner portfolio is mapped to meet the specific technical and regulatory demands of varied commercial industries.
          </p>
        </div>

        {/* 4 Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec) => (
            <div
              key={sec.num}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#2F6146]">
                    {sec.num}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="text-sm sm:text-[15px] font-semibold text-stone-900 mb-2 leading-snug">
                  {sec.title}
                </h4>

                <p className="text-stone-500 text-xs sm:text-[12.5px] leading-relaxed">
                  {sec.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

