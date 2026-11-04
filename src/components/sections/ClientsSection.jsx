import SectionBadge from '../common/SectionBadge';
import { clientSectors } from '../../data/siteData';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ClientsSection() {
  return (
    <section id="clients" className="py-12 sm:py-16 md:py-24 bg-stone-50/70 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <SectionBadge text="Clients" className="mb-2 sm:mb-3" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight mb-2 sm:mb-3">
            Trusted by government, industry and institutions.
          </h2>
          <p className="text-xs sm:text-base text-stone-500 leading-relaxed">
            Delivering landmark commercial buildouts, high-speed rail secretariats, and institutional hospital complexes across India.
          </p>
        </div>

        {/* 4 Client Sector Cards (1 col on mobile, 2 col on sm, 4 col on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clientSectors.map((sector, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-stone-200/80 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-5 border-b border-stone-100">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E]">
                    {sector.title}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <ul className="space-y-2.5 sm:space-y-3">
                  {sector.clients.map((client, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-stone-600">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
