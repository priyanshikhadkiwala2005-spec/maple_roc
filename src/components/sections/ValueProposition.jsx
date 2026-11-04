import SectionBadge from '../common/SectionBadge';
import Button from '../common/Button';
import { valueProps } from '../../data/siteData';
import { CheckCircle2 } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, description, 2x2 grid, button */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <SectionBadge text="Our Approach" />

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0D3B2E] font-medium tracking-tight leading-tight">
              From a furniture retailer to one accountable partner for the whole space.
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              Traditional interior procurement fragments responsibility across multiple independent contractors, architects, and furniture vendors—causing cost overruns, misaligned milestones, and compromised finishes. MapleRoc unifies space strategy, bespoke joinery, and turnkey site contracting under one single accountable roof.
            </p>

            {/* 2x2 Grid of Feature Cards (1 col on mobile, 2 col on sm) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              {valueProps.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0D3B2E] mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button href="#disciplines" variant="primary" className="w-full sm:w-auto text-center justify-center">
                Explore Our Disciplines
              </Button>
            </div>
          </div>

          {/* Right Column: Large Photo with Dark Green Overlay Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-stone-100 aspect-4/5">
              <img
                src="/images/image-22-amns-india-facade.jpg"
                alt="MapleRoc turnkey office interior fitout"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

              {/* Overlay Green Banner Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-[#0D3B2E] text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-emerald-900/60 shadow-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  TURNKEY EXCELLENCE
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                  One Contract. One Delivery Date. Zero Excuses.
                </h3>
                <p className="text-[11px] sm:text-xs text-emerald-100/80 leading-relaxed">
                  We guarantee total accountability from initial measured surveys to key handover.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
