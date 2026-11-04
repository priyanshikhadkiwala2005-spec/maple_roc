import PartnerHero from '../components/sections/partners/PartnerHero';
import BrandGiantsSection from '../components/sections/partners/BrandGiantsSection';
import PartnerValueSection from '../components/sections/partners/PartnerValueSection';
import PartnerSectorsSection from '../components/sections/partners/PartnerSectorsSection';
import PartnerFinishesSection from '../components/sections/partners/PartnerFinishesSection';
import PartnerCtaBanner from '../components/sections/partners/PartnerCtaBanner';

export default function PartnersPage() {
  return (
    <div className="w-full">
      <PartnerHero />
      <BrandGiantsSection />
      <PartnerValueSection />
      <PartnerSectorsSection />
      <PartnerFinishesSection />
      <PartnerCtaBanner />
    </div>
  );
}

