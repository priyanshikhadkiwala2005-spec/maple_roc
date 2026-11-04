import { ArrowUpRight } from 'lucide-react';

export default function ProjectsGrid({ activeCategory }) {
  const allProjects = [
    {
      id: 1,
      wide: true,
      categoryGroup: ['corporate', 'institutional'],
      sector: 'IT / Tech Campus Masterplan',
      scope: 'Turnkey Architectural Fitout',
      tag: 'Enterprise Campus',
      capacity: '500+ Capacity',
      title: 'Integrated Enterprise Campus & Collaborative Tech Park',
      description:
        'Comprehensive turnkey execution covering master planning, high-density workspaces, acoustic circulation corridors, and executive management pavilions.',
      image: '/images/image-6-aerial-architecture.jpg',
      specs: ['85,000 Sq. Ft.', '120 Days Handover'],
    },
    {
      id: 2,
      categoryGroup: ['institutional'],
      sector: 'Institutional Auditorium',
      scope: '600 Seats',
      tag: 'Acoustic Engineering',
      title: 'Acoustic Council Auditorium & Central Hall Fitout',
      description:
        'Tiered stepped seating, acoustic timber baffles, stage lighting, and complete audio-visual integration.',
      image: '/images/image-31-large-auditorium-balcony.jpg',
      specs: ['8,500 Sq. Ft.', 'Turnkey Acoustics'],
    },
    {
      id: 3,
      categoryGroup: ['executive', 'corporate'],
      sector: 'Executive Reception',
      scope: 'Leadership Suite',
      tag: 'Corporate Suite',
      title: 'Private Leadership Courtyard & Executive Waiting Suite',
      description:
        'Architectural brickwork, handcrafted timber finishes, ambient illumination, and bespoke leather lounge seating.',
      image: '/images/image-7-heritage-courtyard.jpg',
      specs: ['6,200 Sq. Ft.', 'Bespoke Millwork'],
    },
    {
      id: 4,
      categoryGroup: ['corporate', 'joinery'],
      sector: 'Cafeteria & Breakout',
      scope: 'Dining Zone',
      tag: 'Wellness & Social',
      title: 'Biophilic Breakout Lounge & Social Dining Zone',
      description:
        'Laminate banquette seating, solid ash timber dining tables, acoustic ceiling clouds, and modular pantry joinery.',
      image: '/images/image-35-cafeteria-dining-hall.jpg',
      specs: ['5,000 Sq. Ft.', 'Custom Seating'],
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? allProjects
      : allProjects.filter((p) => p.categoryGroup.includes(activeCategory));

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Delivered Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              Rigorous execution across multi-sector mandates.
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            Every space reflects our commitment to uncompromising craft, verified engineering, and single-contract delivery.
          </p>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => {
            const isWide = project.wide && activeCategory === 'all';

            return (
              <div
                key={project.id}
                className={`bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow p-5 sm:p-6 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Photo with Tag */}
                  <div
                    className={`relative rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 mb-5 ${
                      isWide ? 'aspect-16/9 sm:aspect-21/9' : 'aspect-16/10'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full text-[10px] sm:text-[11px] font-semibold text-stone-900 border border-white/60 shadow-xs">
                        {project.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-medium text-[#2F6146] border border-white/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Handover Certified</span>
                    </div>
                  </div>

                  {/* Category Header */}
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2F6146] mb-1.5">
                    {project.sector} • <span className="text-stone-500">{project.scope}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl text-[#1F3D2B] font-normal mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Specs & Link */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[11px] font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2F6146] hover:text-[#1F3D2B] transition-colors shrink-0"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
