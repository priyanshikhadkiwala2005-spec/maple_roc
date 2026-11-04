import SectionBadge from '../../common/SectionBadge';
import Button from '../../common/Button';
import { CheckCircle2 } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F3F8F5] via-[#FAFCF9] to-[#FAFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Story, and CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <SectionBadge text="Our Story & Design Philosophy" />

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0D3B2E] font-medium tracking-tight leading-[1.12]">
              From a furniture retailer to <br />
              <span className="italic font-normal text-emerald-800">one accountable partner</span> for <br />
              the <span className="underline decoration-emerald-500/40 underline-offset-4">whole space.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-stone-600 max-w-xl leading-relaxed">
              For more than two decades, we have bridged the gap between architectural concept and on-site delivery. Starting as trusted suppliers of commercial furniture, MapleRoc evolved into a single accountable partner providing space strategy, turnkey PMC contracting, bespoke joinery and handover across India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button href="#contact" variant="primary" className="w-full sm:w-auto text-center justify-center">
                Schedule a Consultation
              </Button>
              <Button href="#timeline" variant="outline" showArrow={false} className="w-full sm:w-auto text-center justify-center">
                Explore Our Heritage
              </Button>
            </div>

            {/* 3 Check Indicators */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>25+ Years of Excellence</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Single Point of Contract</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% On-Time Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card with Real Completed Site Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-stone-100 aspect-4/5">
              <img
                src="/images/image-10-office-cabin.jpg"
                alt="MapleRoc Commercial Interior Completed Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>

              {/* Floating Card at Bottom of Hero Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-stone-100 shadow-lg">
                <div className="text-[10px] sm:text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  INNOVATION & CRAFT
                </div>
                <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                  Transforming empty spaces into high-performance workplaces tailored for human wellbeing and operational efficiency.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
