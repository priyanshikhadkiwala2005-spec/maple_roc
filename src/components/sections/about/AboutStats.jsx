export default function AboutStats() {
  const stats = [
    {
      number: '25+',
      title: 'Years Experience',
      subtitle: 'Delivering landmark commercial buildouts.',
    },
    {
      number: '2000',
      title: 'Projects Delivered',
      subtitle: 'Across corporate, healthcare & government sectors.',
    },
    {
      number: '60+',
      title: 'Cities Reached',
      subtitle: 'Nationwide site execution and logistics capability.',
    },
    {
      number: '3',
      title: 'Decades of Trust',
      subtitle: 'Building enduring relationships with clients & partners.',
    },
    {
      number: '4',
      title: 'Integrated Disciplines',
      subtitle: 'Strategy, design, contracting and manufacturing.',
    },
  ];

  return (
    <section className="relative -mt-4 sm:-mt-8 lg:-mt-10 mb-12 sm:mb-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-200/80 shadow-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:divide-x lg:divide-stone-100">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx !== 0 ? 'lg:pl-6' : ''} ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D3B2E] mb-1 leading-none">
                {stat.number}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight mb-1">
                {stat.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

