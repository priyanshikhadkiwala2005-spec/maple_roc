export default function ServicesStats() {
  const stats = [
    {
      value: '25+ Years',
      label: 'Proven Execution',
      description: 'Delivering commercial excellence and bespoke fitouts across India.',
    },
    {
      value: '4 Disciplines',
      label: 'Integrated Capabilities',
      description: 'Strategy, Architecture, Site Contracting & Bespoke Manufacturing.',
    },
    {
      value: '3 Global Partners',
      label: 'Curated Alliances',
      description: 'Direct partnerships with leading OEM brands for precision joinery.',
    },
    {
      value: '60+ Enterprise Clients',
      label: 'Trusted Clientele',
      description: 'Corporate headquarters, PSUs, healthcare chains and universities.',
    },
  ];

  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7FAF8] rounded-2xl lg:rounded-3xl border border-[#E3ECE6] p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-stone-200">
            {stats.map((stat, idx) => (
              <div
                key={stat.value}
                className={`flex flex-col justify-between ${
                  idx > 0 ? 'pt-5 sm:pt-0 lg:pl-8' : ''
                }`}
              >
                <div>
                  <p className="font-serif text-3xl sm:text-4xl font-normal text-[#1F3D2B] tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#2F6146] mb-2">
                    {stat.label}
                  </p>
                </div>
                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

