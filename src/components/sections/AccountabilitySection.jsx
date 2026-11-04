import SectionBadge from '../common/SectionBadge';
import { accountabilityFeatures } from '../../data/siteData';
import {
  Briefcase,
  ShieldCheck,
  Palette,
  Clock,
  DollarSign,
  Award,
} from 'lucide-react';

const iconMap = {
  Briefcase,
  ShieldCheck,
  Palette,
  Clock,
  DollarSign,
  Award,
};

export default function AccountabilitySection() {
  return (
    <section id="advantages" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <SectionBadge text="Accountability" className="mb-2 sm:mb-3" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight leading-tight">
            One partner, accountable from first survey to final handover.
          </h2>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {accountabilityFeatures.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="bg-[#FAFCF9] rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-stone-200/80 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4 sm:mb-5">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E] mb-1.5 sm:mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
