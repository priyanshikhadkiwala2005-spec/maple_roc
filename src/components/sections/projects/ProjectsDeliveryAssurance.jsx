import { CheckCircle2 } from 'lucide-react';

export default function ProjectsDeliveryAssurance() {
  const steps = [
    {
      num: '01',
      title: '10-Day Pre-Audit & Locked BOQ',
      description:
        'Comprehensive site laser survey, 3D clash-detection, and locked-in line-item procurement before physical construction begins.',
    },
    {
      num: '02',
      title: 'Non-Stop Schedule Tracking',
      description:
        'Real-time milestone dashboard with weekly client site walk-throughs, live photo logs, and verified material testing certificates.',
    },
    {
      num: '03',
      title: 'Factory-Controlled Joinery',
      description:
        'High-density desking and bespoke millwork pre-assembled and inspected in our factory before white-glove on-site delivery.',
    },
    {
      num: '04',
      title: 'Snag-Free Handover & 12-Month SLA',
      description:
        'Pre-commissioned MEP, complete as-built CAD drawings, operational manuals, and dedicated 12-month post-handover warranty team.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7FAF8] border-y border-[#E3ECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Delivery Rigor & Assurance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              How we deliver spatial rigour with zero schedule overrun
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            From strict critical-path tracking to factory-controlled joinery, our turnkey methodology eliminates the common delays of commercial construction.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#2F6146]">
                    {step.num}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="text-sm sm:text-[15px] font-semibold text-stone-900 mb-2 leading-snug">
                  {step.title}
                </h4>

                <p className="text-stone-500 text-xs sm:text-[12.5px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

