import { ArrowRight } from 'lucide-react';

export default function CoreDisciplinesGrid() {
  const disciplines = [
    {
      id: '01',
      title: 'Furniture Solutions',
      tag: 'Bespoke Joinery & OEM Partnerships',
      image: '/images/image-30-blue-modular-workstations.jpg',
      alt: 'Modular office furniture and workstation systems',
      description:
        'Ergonomic workstation systems, executive desking, acoustic seating, and storage solutions engineered for performance, comfort, and commercial longevity.',
      specs: ['ISO 9001 Certified', 'Solid Timber & Veneer Finish', 'Custom CNC Fabrication'],
      linkText: 'Explore Furniture Solutions',
      linkHref: '#furniture-detail',
    },
    {
      id: '02',
      title: 'Interior Design',
      tag: 'Commercial Space Architecture',
      image: '/images/image-2-pantry-breakout.jpg',
      alt: 'Commercial interior design and reception fitout',
      description:
        'Human-centric layout planning, 3D photorealistic renderings, material boards, and lighting design that elevates brand identity and workplace productivity.',
      specs: ['3D Photorealistic Renders', 'Biophilic & Acoustic Integration', 'Space Density Audits'],
      linkText: 'Explore Interior Design',
      linkHref: '#contact',
    },
    {
      id: '03',
      title: 'Architecture Services',
      tag: 'Spatial Programming & Layouts',
      image: '/images/image-24-courtyard-ramp-walkway.jpg',
      alt: 'Architectural space zoning and fitout',
      description:
        'Structural zoning, fire egress compliance, departmental adjacencies, and MEP-ready architectural detailing that pass regulatory scrutiny seamlessly.',
      specs: ['Structural Space Audits', 'Fire & NBC Codes', 'Accessible Walkways'],
      linkText: 'Explore Architecture Services',
      linkHref: '#contact',
    },
    {
      id: '04',
      title: 'Turnkey Execution',
      tag: 'General Contracting & PMC',
      image: '/images/image-20-restaurant-lapinoz.jpg',
      alt: 'Turnkey site fitout and contracting handover',
      description:
        'On-site general contracting, MEP infrastructure, HVAC, partitions, and timely handover with open milestone tracking and zero vendor disputes.',
      specs: ['Zero Vendor Runarounds', 'Guaranteed Handover Timing', 'Single Accountable Contract'],
      linkText: 'Explore Turnkey Execution',
      linkHref: '#mep-detail',
    },
  ];

  return (
    <section id="disciplines-grid" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Services Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              The Four Core Disciplines
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              One integrated team executes, protects architectural intent, and delivers on time and within budget with zero handoff friction.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2F6146] hover:text-[#1F3D2B] transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Integrate these into your space</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {disciplines.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow p-5 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Photo with Tag pill */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-16/10 mb-5 bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full text-[11px] font-semibold text-stone-800 tracking-wide border border-white/60 shadow-xs">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#1F3D2B] font-normal mb-2.5">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-[13.5px] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Specs Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 rounded-full bg-[#F4F7F5] border border-stone-200/80 text-stone-700 text-[11px] sm:text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-stone-100">
                <a
                  href={item.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2F6146] hover:text-[#1F3D2B] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

