export default function InstitutionalTestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        'MapleRoc delivered our high-speed rail regional administrative office in record time. Their single-contract model eliminated vendor runarounds and delivered impeccable finish quality.',
      author: 'Chief Project Manager (Civil)',
      org: 'National High Speed Rail Corp (NHSRCL)',
    },
    {
      id: 2,
      quote:
        'From exterior architectural coordination to the executive boardroom joinery, Dharmendra Surelia and the MapleRoc team exhibited unmatched dedication and engineering rigor.',
      author: 'Head of Corporate Infrastructure',
      org: 'AM/NS India (ArcelorMittal Nippon)',
    },
    {
      id: 3,
      quote:
        'Finding a turnkey contractor who respects architectural detailing as much as the design studio is rare. MapleRoc is that rare partner. We specify them with total confidence.',
      author: 'Director of Workplace Design',
      org: 'Leading Pan-India PMC Studio',
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
            <span>Client & Associate Voices</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight mb-2">
            Institutional Testimonials
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            What government project heads, corporate real estate directors, and PMCs say about executing with MapleRoc.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl text-emerald-300 font-bold leading-none block mb-3">
                  &ldquo;
                </span>
                <p className="text-stone-700 text-xs sm:text-[13.5px] leading-relaxed mb-6 italic">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <p className="text-xs font-semibold text-stone-900 leading-tight">
                  {item.author}
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5 font-medium">
                  {item.org}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

