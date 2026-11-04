import SectionBadge from '../../common/SectionBadge';
import { ArrowUpRight } from 'lucide-react';

export default function FourDisciplinesAbout() {
  const disciplines = [
    {
      id: '01',
      tag: 'STRATEGY',
      title: 'Workplace Strategy',
      desc: 'Analyzing space efficiency, workforce growth models, and department adjacencies to program future-ready facilities.',
      image: '/images/image-29-manager-cabins-render.jpg',
      linkText: 'Explore Strategy',
    },
    {
      id: '02',
      tag: 'ARCHITECTURE',
      title: 'Interior Design',
      desc: 'Creating inspiring, functional, and brand-aligned commercial environments with detailed 3D visualization and planning.',
      image: '/images/image-14-luxury-lounge-2.jpg',
      linkText: 'Explore Design',
    },
    {
      id: '03',
      tag: 'CONTRACTING',
      title: 'Project Execution & PMC',
      desc: 'Seamless on-site coordination, contractor management, MEP services, and timely turnkey project delivery.',
      image: '/images/image-9-workshop-factory.jpg',
      linkText: 'Explore Execution',
    },
    {
      id: '04',
      tag: 'MANUFACTURING',
      title: 'Custom Furniture & Joinery',
      desc: 'In-house precision craft of modular workstations, executive desks, acoustic pods, and ergonomic seating systems.',
      image: '/images/image-5-dining-area.jpg',
      linkText: 'Explore Joinery',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <SectionBadge text="What We Do" className="mb-2 sm:mb-3" />
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight">
              Four disciplines. One cohesive team.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md leading-relaxed">
            By integrating workplace strategy, interior architecture, on-site contracting, and bespoke furniture manufacturing, we eliminate fragmented vendor handoffs.
          </p>
        </div>

        {/* 4 Cards with Images on Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFCF9] rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all group"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-emerald-900 border border-emerald-100">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-xs font-bold text-emerald-800">
                      PHASE {item.id}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0D3B2E] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-200/60 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0D3B2E] uppercase tracking-wider group-hover:text-emerald-700">
                  {item.linkText}
                </span>
                <div className="w-6 h-6 rounded-full bg-white group-hover:bg-[#0D3B2E] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

