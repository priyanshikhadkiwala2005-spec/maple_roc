import ServicesHero from '../components/sections/services/ServicesHero';
import ServicesStats from '../components/sections/services/ServicesStats';
import CoreDisciplinesGrid from '../components/sections/services/CoreDisciplinesGrid';
import FurnitureArchitectureDetail from '../components/sections/services/FurnitureArchitectureDetail';
import MepCivilDetail from '../components/sections/services/MepCivilDetail';
import WhyChooseServices from '../components/sections/services/WhyChooseServices';
import ServicesCtaBanner from '../components/sections/services/ServicesCtaBanner';

export default function ServicesPage() {
  return (
    <div className="w-full">
      <ServicesHero />
      <ServicesStats />
      <CoreDisciplinesGrid />
      <FurnitureArchitectureDetail />
      <MepCivilDetail />
      <WhyChooseServices />
      <ServicesCtaBanner />
    </div>
  );
}

