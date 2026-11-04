import { ArrowRight, ArrowUpRight, User } from 'lucide-react';

export default function FeaturedInsightCard({ activeFilter, onSelectFilter }) {
  const filters = [
    { id: 'all', label: 'All Articles (18)' },
    { id: 'mep', label: 'Turnkey & MEP Engineering (6)' },
    { id: 'ergonomics', label: 'Workplace Ergonomics & Wellness (5)' },
    { id: 'governance', label: 'Governance & Procurement Protocols (4)' },
    { id: 'standards', label: 'Regulatory & Standards (3)' },
  ];

  return (
    <section id="featured-insight" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
      
      {/* Filter Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 sm:mb-10 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
        {filters.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectFilter(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-[#1F3D2B] text-white shadow-xs'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/90'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Featured Lead Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xs p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Real Photo with Tag */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-5/4 bg-stone-100 border border-stone-200/80 shadow-xs">
              <img
                src="/images/image-32-cubicle-fitout-installation.jpg"
                alt="Resident MEP engineering and site fitout"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-bold text-stone-900 tracking-wider uppercase border border-white/70 shadow-xs">
                Featured White Paper
              </div>
            </div>
          </div>

          {/* Right Column: Content, Byline & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[10px] font-bold uppercase tracking-wider mb-3 w-fit">
                <span>Commercial Fitout Project Management</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#1F3D2B] font-normal tracking-tight leading-tight mb-4">
                Mitigating Schedule Slippage in Multi-Trade EPC Fitouts: The Resident MEP Superintendent Model
              </h2>

              {/* Author Byline */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">
                    Dharmendra Surelia & Engineering Team
                  </p>
                  <p className="text-[11px] text-stone-400">
                    12 min read • Published Q1 2026 • Peer Reviewed
                  </p>
                </div>
              </div>

              <p className="text-stone-600 text-xs sm:text-[13.5px] leading-relaxed mb-7">
                Analysis of 45 multi-contractor fitouts reveal an average schedule overrun of 22% due to handoff friction between electrical, civil, and furniture contractors. This paper explores how single-contract accountability and resident MEP superintendence compresses critical-path delivery by 35%.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#publications-grid"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>Read Full White Paper</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <span>Download PDF Report</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

