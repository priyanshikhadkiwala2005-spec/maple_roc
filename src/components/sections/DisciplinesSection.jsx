import SectionBadge from '../common/SectionBadge';
import { disciplines } from '../../data/siteData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function DisciplinesSection() {
  return (
    <section id="disciplines" className="py-12 sm:py-16 md:py-24 bg-stone-50/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <SectionBadge text="Disciplines" className="mb-2 sm:mb-3" />
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight">
              Four disciplines. One team.
            </h2>
          </div>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0D3B2E] hover:text-emerald-700 transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Vertical Cards Grid (1 col on mobile, 2 on sm/md, 4 on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {disciplines.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-stone-200/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800/40 group-hover:text-[#0D3B2E] transition-colors">
                    {item.id}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0D3B2E] mb-2 sm:mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed mb-4 sm:mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold text-[#0D3B2E] uppercase tracking-wider group-hover:text-emerald-700">
                  {item.linkText}
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-stone-100 group-hover:bg-[#0D3B2E] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
