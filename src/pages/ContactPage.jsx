import ContactHero from '../components/sections/contact/ContactHero';
import ContactLiaisonDesks from '../components/sections/contact/ContactLiaisonDesks';
import ContactFormCard from '../components/sections/contact/ContactFormCard';
import SpecializedDesksSection from '../components/sections/contact/SpecializedDesksSection';

export default function ContactPage() {
  return (
    <div className="w-full">
      <ContactHero />

      {/* Main Form & Liaison Desks 2-Column Section */}
      <section id="contact-grid" className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Liaison Desks, Address, Helplines & Real Map */}
            <div className="lg:col-span-5">
              <ContactLiaisonDesks />
            </div>

            {/* Right Column: Submit Project Brief Form */}
            <div className="lg:col-span-7">
              <ContactFormCard />
            </div>

          </div>
        </div>
      </section>

      <SpecializedDesksSection />
    </div>
  );
}

