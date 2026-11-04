import SectionBadge from '../common/SectionBadge';
import Button from '../common/Button';
import { ArrowUpRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F3F8F5] via-[#FAFCF9] to-[#FAFCF9]">
      {/* Top right floating pill tag matching original design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex justify-end">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>Turnkey Interior Solutions</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <SectionBadge text="Commercial Interiors" />

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0D3B2E] font-medium tracking-tight leading-[1.12]">
              Designing Spaces, <br />
              <span className="italic font-normal text-emerald-800">Delivering Excellence.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-stone-600 max-w-xl leading-relaxed">
              Integrated Interior Design, Turnkey Contracting, and Bespoke Commercial Furniture for Modern Workplaces and Premier Institutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button href="#contact" variant="primary" className="w-full sm:w-auto text-center justify-center">
                Schedule a Consultation
              </Button>
              <Button href="#portfolio" variant="outline" showArrow={false} className="w-full sm:w-auto text-center justify-center">
                Download Brochure
              </Button>
            </div>

            {/* Social Proof Avatars */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                />
                <img
                  className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                />
                <img
                  className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                />
                <div className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white bg-[#0D3B2E] text-emerald-300 text-xs font-bold">
                  200+
                </div>
              </div>
              <div className="text-xs text-stone-600">
                <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                  <span>Trusted by 200+ clients across India</span>
                </div>
                <span>Government PSUs, Corporate Tech Parks & Institutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card with Real Completed Site Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-stone-100 aspect-4/3 sm:aspect-5/4">
              <img
                src="/images/image-28-commercial-fitout-red-walls.jpg"
                alt="MapleRoc Commercial Interior Completed Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>

              {/* Floating Overlay Badge on Hero Image */}
              <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-emerald-600 text-white text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-300"></span>
                <span>Turnkey Delivered</span>
              </div>

              {/* Floating Card at Bottom of Hero Image */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-stone-100 shadow-lg">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                  <span>LATEST PROJECT</span>
                  <span>COMMERCIAL FITOUT</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0D3B2E] line-clamp-1">
                      Modern Office Interior & Workstations
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-500 line-clamp-1">
                      Complete Turnkey Fitout Handover
                    </p>
                  </div>
                  <a
                    href="#portfolio"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0D3B2E] text-white flex items-center justify-center hover:bg-[#08281E] shrink-0"
                    aria-label="View project"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
