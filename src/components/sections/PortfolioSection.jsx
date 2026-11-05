import { useState } from 'react';
import SectionBadge from '../common/SectionBadge';
import { portfolioCategories, portfolioItems } from '../../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredItems =
    activeCategory === 'All Projects'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-[#F5F8F6] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div>
            <SectionBadge text="Portfolio" className="mb-2 sm:mb-3" />
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight">
              Spaces we have delivered.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-colors cursor-pointer shrink-0 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#0D3B2E] text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid matching Home Page Design exactly */}
        <div className="space-y-6">
          {activeCategory === 'All Projects' ? (
            <>
              {/* Top Row: Large Featured 7-col (Left) + Tall Lounge 5-col (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* 1. Executive Boardroom */}
                <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm flex flex-col group">
                  <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-stone-100">
                    <img
                      src={portfolioItems[0].image}
                      alt={portfolioItems[0].title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5">
                      {portfolioItems[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/95 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-emerald-900 border border-emerald-100 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#0D3B2E] mb-1">
                        {portfolioItems[0].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500">
                        {portfolioItems[0].specs}
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-[#0D3B2E] group-hover:text-white transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

                {/* 2. Lounge & Collaboration Zone */}
                <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm flex flex-col group">
                  <div className="relative aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:h-72 overflow-hidden bg-stone-100">
                    <img
                      src={portfolioItems[1].image}
                      alt={portfolioItems[1].title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5">
                      {portfolioItems[1].tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/95 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-emerald-900 border border-emerald-100 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 flex items-center justify-between gap-3 mt-auto">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0D3B2E] mb-1">
                        {portfolioItems[1].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500">
                        {portfolioItems[1].specs}
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-[#0D3B2E] group-hover:text-white transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Row: Featured Workstations */}
              {portfolioItems[2] && (
                <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm flex flex-col md:flex-row group">
                  <div className="relative aspect-16/10 md:aspect-auto md:w-1/2 overflow-hidden bg-stone-100 min-h-[240px]">
                    <img
                      src={portfolioItems[2].image}
                      alt={portfolioItems[2].title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5">
                      {portfolioItems[2].tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/95 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-emerald-900 border border-emerald-100 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between md:w-1/2">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#2F6146] mb-2">
                        Turnkey Workspaces
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0D3B2E] mb-2">
                        {portfolioItems[2].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 leading-relaxed mb-6">
                        {portfolioItems[2].specs}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider">
                        Explore Workstation Architecture
                      </span>
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-[#0D3B2E] group-hover:text-white transition-colors shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Filtered state: responsive grid of matching items */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm flex flex-col group"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/95 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-emerald-900 border border-emerald-100 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex items-center justify-between gap-3 mt-auto">
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-500 line-clamp-1">
                        {item.specs}
                      </p>
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-[#0D3B2E] group-hover:text-white transition-colors shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
