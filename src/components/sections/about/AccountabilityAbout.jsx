import SectionBadge from '../../common/SectionBadge';
import {
  Briefcase,
  ShieldCheck,
  Building2,
  Armchair,
  Clock,
  Award,
} from 'lucide-react';

export default function AccountabilityAbout() {
  const advantages = [
    {
      icon: Briefcase,
      title: '25+ Years of Industry Experience',
      desc: 'Proven track record delivering mission-critical government, tech, and healthcare projects across India.',
    },
    {
      icon: ShieldCheck,
      title: 'Single-Point Accountability',
      desc: 'One dedicated contractual point of contact handling architects, contractors, suppliers, and handovers.',
    },
    {
      icon: Building2,
      title: 'Turnkey Design-Build Prowess',
      desc: 'Seamless transition from spatial planning to civil MEP, partitions, ceilings, flooring, and joinery.',
    },
    {
      icon: Armchair,
      title: 'Custom Furniture & Joinery',
      desc: 'In-house manufacturing for executive desking, acoustic partitions, and ergonomic modular seating.',
    },
    {
      icon: Clock,
      title: 'Milestone-Locked Handover',
      desc: 'Critical-path scheduling and transparent reporting ensure delivery on the promised date without delays.',
    },
    {
      icon: Award,
      title: 'Certified Safety & Compliances',
      desc: 'Complete NBC fire compliance, ISO certifications, and green building environmental standards.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-stone-50/70 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <SectionBadge text="Our Advantage" className="mb-2 sm:mb-3" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight mb-3">
            One partner, accountable from first survey to final handover.
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            We assume single-source responsibility for design integrity, procurement, site safety, and milestone adherence.
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {advantages.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

