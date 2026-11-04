import SectionBadge from '../../common/SectionBadge';
import { ArrowUpRight } from 'lucide-react';

export default function TimelineSection() {
  const milestones = [
    {
      year: '2000',
      title: 'Establishment and Furniture Pioneer',
      desc: 'Founded by Dharmendra Surelia in Bharuch, establishing early benchmarks in commercial furniture retailing.',
      tag: 'FOUNDATION',
      isCurrent: false,
    },
    {
      year: '2008',
      title: 'Architectural Expansion',
      desc: 'Expanding from furniture supply into full space planning and commercial interior architecture.',
      tag: 'DESIGN EVOLUTION',
      isCurrent: false,
    },
    {
      year: '2016',
      title: 'Turnkey Project Execution',
      desc: 'Integrating in-house project management (PMC) and general contracting under one unified contract.',
      tag: 'CONTRACTING',
      isCurrent: false,
    },
    {
      year: '2021',
      title: 'Institutional Alliances',
      desc: 'Delivering landmark projects for high-speed rail, healthcare hospitals and Fortune 500 corporations.',
      tag: 'SCALE & GROWTH',
      isCurrent: false,
    },
    {
      year: 'Present',
      title: 'Future-Ready Workplaces',
      desc: 'Pioneering sustainable, ergonomic, and tech-integrated commercial environments across India.',
      tag: 'OUR FUTURE VISION',
      isCurrent: true,
    },
  ];

  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-24 bg-stone-50/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <SectionBadge text="Milestones" className="mb-2 sm:mb-3" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight mb-3">
            A quarter-century of design evolution.
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            From furniture retailing in Gujarat to national turnkey interior delivery: 25+ years of milestones.
          </p>
        </div>

        {/* 5 Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between transition-all ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              } ${
                item.isCurrent
                  ? 'bg-[#0D3B2E] text-white shadow-md border border-emerald-900'
                  : 'bg-white text-stone-900 border border-stone-200/80 shadow-xs hover:border-emerald-300'
              }`}
            >
              <div>
                {/* Year Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100/20">
                  <span
                    className={`font-serif text-2xl font-bold ${
                      item.isCurrent ? 'text-white' : 'text-[#0D3B2E]'
                    }`}
                  >
                    {item.year}
                  </span>
                  <span
                    className={`text-[10px] font-semibold tracking-wider uppercase ${
                      item.isCurrent ? 'text-emerald-300' : 'text-emerald-700'
                    }`}
                  >
                    ▼
                  </span>
                </div>

                <h3
                  className={`font-serif text-base font-bold mb-2 leading-snug ${
                    item.isCurrent ? 'text-white' : 'text-[#0D3B2E]'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed mb-6 ${
                    item.isCurrent ? 'text-emerald-100/80' : 'text-stone-500'
                  }`}
                >
                  {item.desc}
                </p>
              </div>

              <div
                className={`pt-3 border-t flex items-center justify-between ${
                  item.isCurrent ? 'border-emerald-900/60' : 'border-stone-100'
                }`}
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    item.isCurrent ? 'text-emerald-400' : 'text-emerald-700'
                  }`}
                >
                  {item.tag}
                </span>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 ${
                    item.isCurrent ? 'text-emerald-300' : 'text-[#0D3B2E]'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

