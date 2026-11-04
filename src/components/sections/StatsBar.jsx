import { heroStats } from '../../data/siteData';

export default function StatsBar() {
  return (
    <section className="relative -mt-4 sm:-mt-8 lg:-mt-10 mb-12 sm:mb-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B2E] mb-1">
                {stat.number}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight mb-1">
                {stat.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed hidden sm:block">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
