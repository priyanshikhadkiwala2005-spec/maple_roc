import { ArrowRight, MapPin, FileText, Layers } from 'lucide-react';

export default function SpecializedDesksSection() {
  const desks = [
    {
      icon: MapPin,
      title: 'Instant Site Survey Booking',
      description:
        'Coordinate on-site ground laser inspection with our turnkey certified project architects within 48 hours.',
      linkText: 'Schedule Site Visit',
      href: '#contact-grid',
    },
    {
      icon: FileText,
      title: 'Tender & RFP Secretariat',
      description:
        'Direct channel to CPWD, EPC contractors, and corporate facility procurement officers transmitting bulk BOQs.',
      linkText: 'Transmit RFP Packet',
      href: '#contact-grid',
    },
    {
      icon: Layers,
      title: 'Acoustic & Material Lab',
      description:
        'Experience physical acoustic panel mockups, ergonomic workstations, and micro-perforated ceiling finishes at our studio.',
      linkText: 'Request Sample Kit',
      href: '#contact-grid',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAFCF9] border-t border-[#E5EDE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Expedited Routing</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              Specialized Spatial Desks
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            For urgent site evaluations, fast-track tender submission packets, or tactile material sample reviews.
          </p>
        </div>

        {/* 3 Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {desks.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2F6146]" />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-semibold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F6146] hover:text-[#1F3D2B] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

