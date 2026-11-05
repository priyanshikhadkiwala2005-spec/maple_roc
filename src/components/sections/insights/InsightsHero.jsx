import { ArrowUpRight } from 'lucide-react';

export default function InsightsHero() {
  const metrics = [
    { value: '40+', label: 'Whitepapers & Studies' },
    { value: '12', label: 'Industry Research Citations' },
    { value: '25+', label: 'Years Field Observations' },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-10 sm:pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Metric counters */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EE] border border-[#D1E5D9] text-[#2F6146] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6146]"></span>
              <span>Academic & Field Perspectives</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-normal tracking-tight text-[#132A1C] leading-[1.15] mb-5">
              Thought Leadership in Corporate Architecture, Ergonomics & Turnkey Governance.
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Curated research papers, field engineering case studies, and regulatory whitepapers authored by MapleRoc&apos;s spatial strategists, structural engineers, and principal architects.
            </p>

            {/* 3-Metric Counter Strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-stone-200/80">
              {metrics.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-2xl sm:text-3xl font-normal text-[#1F3D2B] tracking-tight mb-0.5">
                    {item.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-stone-500 font-medium leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 aspect-4/3 sm:aspect-5/4 lg:aspect-4/3">
              <img
                src="/images/image-33-cinema-auditorium-red-seats.jpg"
                alt="MapleRoc architectural acoustics and spatial research"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

              {/* Top Tag Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-stone-900 tracking-wider uppercase border border-white/70 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Featured Whitepaper</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-[#2F6146] uppercase tracking-wider block mb-0.5">
                    Research Brief
                  </span>
                  <p className="text-xs sm:text-[13px] font-semibold text-stone-900 leading-tight">
                    Download Research Brief: High-Density Tech Fitout SLA Standards
                  </p>
                </div>
                <a
                  href="#featured-insight"
                  className="w-8 h-8 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
                  aria-label="Download brief"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

