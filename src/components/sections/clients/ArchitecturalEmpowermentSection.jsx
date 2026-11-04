import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ArchitecturalEmpowermentSection() {
  const specs = [
    'Exact Shop-Drawing CAD Detailing',
    'Physical Finish Sample Boards',
    'Custom CNC Joinery Execution',
    'Clash-Free 3D Coordination',
  ];

  const mepChecks = [
    {
      title: 'In-House MEP & Structural Engineering',
      desc: 'Coordinated conduit, ducting, and power distribution drawings that eliminate clashes before physical installation.',
    },
    {
      title: 'Statutory NBC & Fire Code Compliance',
      desc: 'Full certified adherence to National Building Code (NBC) standards, smoke dampers, and fire egress routes.',
    },
    {
      title: 'Single Accountable Point of Contact',
      desc: 'Zero blame-shifting between architects, civil contractors, and furniture trades on site.',
    },
  ];

  return (
    <section id="architect-collaboration" className="py-12 sm:py-16 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Architectural Collaboration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              Empowering Architectural Vision with Turnkey Execution.
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            We partner with leading architectural studios, spatial planners, and PMCs across India to realize complex spatial designs without compromise.
          </p>
        </div>

        {/* 2 Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          
          {/* Card 1: Design Fidelity */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[10px] font-bold uppercase tracking-wider">
                  Protecting Architectural Intent
                </span>
                <span className="text-xs text-stone-400 font-medium">Fidelity</span>
              </div>

              <h3 className="font-serif text-2xl text-[#1F3D2B] font-normal mb-3">
                Absolute Design Fidelity
              </h3>

              <p className="text-stone-600 text-xs sm:text-[13.5px] leading-relaxed mb-6">
                We honor every millimeter of the architect&apos;s design intent. From custom curved glass radii to bespoke joinery details, our engineers fabricate exactly what was envisioned on paper without value-engineering compromises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {specs.map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-xl bg-[#F8FAF9] border border-stone-200/70 text-[11px] font-semibold text-stone-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#2F6146] hover:text-[#1F3D2B]"
              >
                <span>Architectural Detailing Protocol</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: MEP & Spatial Engineering */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[10px] font-bold uppercase tracking-wider">
                  PMC & Site Delivery
                </span>
                <span className="text-xs text-stone-400 font-medium">Engineering</span>
              </div>

              <h3 className="font-serif text-2xl text-[#1F3D2B] font-normal mb-3">
                Spatial Engineering & MEP Integration
              </h3>

              <p className="text-stone-600 text-xs sm:text-[13.5px] leading-relaxed mb-6">
                One integrated site engineering team bridges the gap between creative design and practical execution. We handle structural calculations, HVAC ducting routing, fire egress codes, and power load balancing seamlessly.
              </p>

              <div className="space-y-3 mb-6">
                {mepChecks.map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2F6146] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-semibold text-stone-900">
                        {item.title}
                      </h5>
                      <p className="text-stone-500 text-[11px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#2F6146] hover:text-[#1F3D2B]"
              >
                <span>PMC & Site Delivery Standards</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Architect Quote Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F6146] block mb-2">
              Architect Associate Testimonial
            </span>
            <p className="font-serif text-lg sm:text-xl lg:text-[22px] italic text-[#1F3D2B] leading-relaxed mb-4">
              &ldquo;MapleRoc transforms complex architectural drawings into physical reality with zero deviation in geometry or material integrity. Their turnkey transparency allows our studio to focus purely on pure spatial creation.&rdquo;
            </p>
            <p className="text-xs font-semibold text-stone-900">
              Principal Architect & Founder, <span className="text-stone-500 font-normal">Premier Architectural Studio, Ahmedabad & Mumbai</span>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAF9] border border-stone-200/80 shrink-0 text-left lg:text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F6146] block mb-1">
              Associate Partnership
            </span>
            <p className="text-xs text-stone-600 font-medium">
              Collaborating across 40+ landmark projects over 18 years.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

