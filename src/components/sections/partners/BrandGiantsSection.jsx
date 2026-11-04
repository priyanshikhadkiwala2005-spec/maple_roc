import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function BrandGiantsSection() {
  const brands = [
    {
      id: 'haworth',
      name: 'HAWORTH',
      tag: 'Global Architectural Leader',
      origin: 'Headquarters: Holland, Michigan, USA | Founded 1948',
      description:
        'Renowned globally for performance seating, architectural walls, and collaborative workplace systems. Haworth combines cutting-edge research in ergonomic science with human-centric sustainable craftsmanship.',
      features: [
        {
          title: 'Ergonomic Seating Science',
          text: 'Patented Pelvic Support Systems, 4D armrests, and certified weight-activated recline mechanisms.',
        },
        {
          title: 'Sustainable Global Supply',
          text: 'Zero-waste manufacturing, circular economy certification, and GREENGUARD Gold accredited indoor air quality.',
        },
      ],
      advantage:
        'Direct factory procurement, original OEM warranty certificates, and white-glove trained assembly teams on-site.',
      linkText: 'Explore Haworth Catalog & Workplace Systems',
      image: '/images/image-19-doctor-consulting-cabin.jpg',
      imageAlt: 'Haworth Ergonomic Executive Seating',
      pills: ['Fern & Zody Series', 'Global 12-Year Warranty'],
      reversed: false,
    },
    {
      id: 'hni',
      name: 'HNI OFFICE',
      tag: 'Commercial Seating Leader',
      origin: 'World-Class Commercial Workstations & Performance Task Chairs',
      description:
        'HNI Corporation is the second-largest office furniture manufacturer in the world. Their modular desking, acoustic panel systems, and high-density workstations deliver commercial durability for Fortune 500 tech campuses.',
      features: [
        {
          title: 'High-Density Workstations',
          text: 'Engineered steel-and-laminate workstation frames with concealed high-capacity electrical conduits.',
        },
        {
          title: 'Acoustic Screening & Pods',
          text: 'Integrated PET acoustic panels offering high NRC sound dampening for busy open-plan floorplates.',
        },
      ],
      advantage:
        'Volume tier pricing, guaranteed shipping lead times, and seamless on-site installation by factory-trained crews.',
      linkText: 'Download HNI Product Matrix & Spec Sheets',
      image: '/images/image-12-open-workstations.jpg',
      imageAlt: 'HNI Commercial Workstations & Modular Desking',
      pills: ['Desking & Modular Pods', 'BIFMA Level 3 Certified'],
      reversed: true,
    },
    {
      id: 'okamura',
      name: 'OKAMURA',
      tag: 'Japanese Precision Engineering',
      origin: 'Headquarters: Yokohama, Japan | Founded 1945',
      description:
        'Synonymous with Japanese precision engineering, Okamura crafts iconic seating and motorized executive desks that merge ultra-refined aesthetics with aerospace-grade structural integrity.',
      features: [
        {
          title: 'Smart Operation Seating',
          text: 'Patented lever-less armrest controls allowing posture adjustments while maintaining natural seated line of sight.',
        },
        {
          title: 'Heavy-Duty Storage Systems',
          text: 'Mobile compact shelving and architectural filing units built for high-security commercial records.',
        },
      ],
      advantage:
        'Original imported inventory, direct spare-parts availability, and certified installation compliance.',
      linkText: 'View Okamura Precision Portfolio & Tech Specs',
      image: '/images/image-8-heritage-arcade.jpg',
      imageAlt: 'Okamura Precision Engineered Systems',
      pills: ['Contessa Seconda & Legender', 'Precision Metalcraft'],
      reversed: false,
    },
  ];

  return (
    <section id="brand-giants" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
            <span>Direct Alliance Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight mb-3">
            Three Manufacturing Giants, One Direct Delivery Protocol.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Direct partnerships with Haworth, HNI Office, and Okamura give our clients unmatched manufacturing scale, certified ergonomics, and lifetime product warranties.
          </p>
        </div>

        {/* 3 Large Brand Cards */}
        <div className="space-y-10 sm:space-y-12">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xs p-6 sm:p-8 lg:p-10"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  brand.reversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Visual Image Side */}
                <div
                  className={`lg:col-span-5 ${
                    brand.reversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-5/4 bg-stone-100 border border-stone-200/80 shadow-xs">
                    <img
                      src={brand.image}
                      alt={brand.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Feature Pills */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                      {brand.pills.map((pill) => (
                        <span
                          key={pill}
                          className="px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full text-[10px] sm:text-[11px] font-semibold text-stone-900 border border-white/70 shadow-xs"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text & Content Side */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-between ${
                    brand.reversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    {/* Brand Badge & Origin */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1F3D2B]">
                        {brand.name}
                      </span>
                      <span className="px-3 py-0.5 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold tracking-wide">
                        {brand.tag}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-stone-400 font-medium mb-3">
                      {brand.origin}
                    </p>

                    <p className="text-stone-600 text-xs sm:text-[13.5px] leading-relaxed mb-6">
                      {brand.description}
                    </p>

                    {/* 2 Feature Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                      {brand.features.map((feat) => (
                        <div
                          key={feat.title}
                          className="p-3.5 rounded-xl bg-[#F8FAF9] border border-stone-200/70"
                        >
                          <div className="flex items-center gap-1.5 mb-1 text-[#2F6146]">
                            <ShieldCheck className="w-4 h-4" />
                            <h4 className="text-xs font-semibold text-stone-900">
                              {feat.title}
                            </h4>
                          </div>
                          <p className="text-stone-500 text-[11px] sm:text-xs leading-relaxed">
                            {feat.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Green Callout Banner */}
                    <div className="p-3.5 rounded-xl bg-[#F1F6F3] border border-[#D5E4DB] mb-6 flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-[#2F6146] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-[#2F6146] block mb-0.5">
                          The MapleRoc {brand.name} Advantage:
                        </span>
                        <p className="text-stone-700 text-xs leading-relaxed">
                          {brand.advantage}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 border-t border-stone-100">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2F6146] hover:text-[#1F3D2B] transition-colors"
                    >
                      <span>{brand.linkText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
