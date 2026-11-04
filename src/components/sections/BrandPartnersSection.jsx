import SectionBadge from '../common/SectionBadge';
import { brandPartners } from '../../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export default function BrandPartnersSection() {
  return (
    <section id="partners" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <SectionBadge text="Partnerships" className="mb-2 sm:mb-3" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight mb-3">
            Our Trusted Brand Partners
          </h2>
          <p className="text-xs sm:text-base text-stone-500 leading-relaxed">
            We collaborate with premier international manufacturers to bring certified ergonomic furniture, acoustic panels, and sustainable workspace systems directly to your project.
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {brandPartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-[#FAFCF9] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Brand Name / Logo display */}
                <div className="h-12 sm:h-14 flex items-center justify-between border-b border-stone-200 pb-3 sm:pb-4 mb-4 sm:mb-5">
                  <span className="font-serif text-xl sm:text-2xl font-black tracking-widest text-[#0D3B2E] uppercase">
                    {partner.name}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  {partner.category}
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {partner.description}
                </p>
              </div>

              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D3B2E] group-hover:text-emerald-700 uppercase tracking-wider pt-4 border-t border-stone-200/60"
              >
                <span>Explore Partner</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
