export default function ProjectFilterTabs({ activeCategory, onSelectCategory }) {
  const categories = [
    { id: 'all', label: 'All Projects', count: 24 },
    { id: 'corporate', label: 'Corporate & Tech', count: 10 },
    { id: 'executive', label: 'Executive Suites & Boardrooms', count: 4 },
    { id: 'institutional', label: 'Institutional & Campus', count: 5 },
    { id: 'healthcare', label: 'Healthcare & Clinics', count: 3 },
    { id: 'joinery', label: 'Bespoke Joinery & Fitouts', count: 6 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-[#1F3D2B] text-white shadow-xs'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/90'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`ml-1.5 text-[11px] ${
                  isActive ? 'text-emerald-200' : 'text-stone-400'
                }`}
              >
                ({cat.count})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

