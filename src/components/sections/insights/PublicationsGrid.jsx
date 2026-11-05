import { ArrowUpRight, FileText } from 'lucide-react';

export default function PublicationsGrid({ activeFilter }) {
  const publications = [
    {
      id: 1,
      group: 'ergonomics',
      category: 'ERGONOMICS',
      readTime: '7 min read',
      tag: 'Workplace Health',
      title: 'The Science of Ergonomic Task Seating: Deconstructing BIFMA X5.1 & European Active Lumbar Standards in 24/7 Control Rooms',
      description:
        'How pelvic support systems, zero-pressure seat edges, and dynamic recline geometry mitigate chronic musculoskeletal disorders in high-intensity commercial teams.',
    },
    {
      id: 2,
      group: 'standards',
      category: 'GOVERNANCE',
      readTime: '9 min read',
      tag: 'Contracting Protocols',
      title: 'Navigating CPWD & NBC Fire Codes: Material Integrity and Certification Protocols for Institutional Space Facilities',
      description:
        'A comprehensive checklist for statutory fire clearance, flame-retardant joinery specs, smoke damper positioning, and independent laboratory material test certification.',
    },
    {
      id: 3,
      group: 'mep',
      category: 'MEP & HVAC',
      readTime: '6 min read',
      tag: 'Cleanroom Standards',
      title: 'Acoustic Integration Versus High Air-Changes: Balancing Noise Criteria (NC 30-35) in Healthcare Cleanroom Fitouts',
      description:
        'Resolving the acoustic paradox of high-velocity laminar airflow and patient auditory recuperation in super-speciality hospitals and ICU wings.',
    },
    {
      id: 4,
      group: 'mep',
      category: 'INFRASTRUCTURE',
      readTime: '8 min read',
      tag: 'Technical Infrastructure',
      title: 'Mitigating Harmonic Distortion in High-Density Trading Floors: Power Quality Engineering in Commercial Banking Head offices',
      description:
        'Power distribution architecture, active harmonic filtering, and dedicated UPS busways to safeguard multi-screen algorithmic desks from micro-outages.',
    },
    {
      id: 5,
      group: 'ergonomics',
      category: 'CIRCULARITY',
      readTime: '10 min read',
      tag: 'Sustainable Execution',
      title: 'Optimizing High-Density Modular Workstations for Zero-Landfill Demountability and Relocation Economy',
      description:
        'Life-cycle cost analysis of modular aluminum desking versus stick-built drywall cubicles over a 15-year corporate lease duration.',
    },
    {
      id: 6,
      group: 'governance',
      category: 'PROCUREMENT',
      readTime: '5 min read',
      tag: 'Commercial Strategy',
      title: 'The 17-Day BOQ Freezing Protocol: Why Fixed Price Turnkey Contracts Eliminate Dispute Runarounds in Corporate CapEx',
      description:
        'How pre-contract 3D laser surveys and line-item locked pricing protect enterprise CFOs from post-award contractor variation claims.',
    },
  ];

  const filteredPublications =
    activeFilter === 'all'
      ? publications
      : publications.filter((p) => p.group === activeFilter);

  return (
    <section id="publications-grid" className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Peer-Reviewed Research</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              Latest Spatial Publications
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            Direct insights from our senior project directors, joinery fabricators, and on-site MEP engineers.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header row: Document Icon + Ref code */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#2F6146]" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 font-semibold tracking-wider">
                    PAPER #{pub.id.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Category & Read Time */}
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#2F6146] mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EAF3EE]">{pub.category}</span>
                  <span className="text-stone-400 font-normal">• {pub.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-base sm:text-[17px] text-[#1F3D2B] font-semibold mb-2.5 leading-snug group-hover:text-[#2F6146] transition-colors">
                  {pub.title}
                </h3>

                {/* Excerpt */}
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed mb-6">
                  {pub.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#2F6146] group-hover:text-[#1F3D2B] transition-colors"
                >
                  <span>Download Whitepaper PDF</span>
                  <div className="w-7 h-7 rounded-full bg-[#EAF3EE] text-[#2F6146] group-hover:bg-[#1F3D2B] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

