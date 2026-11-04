import HeroSection from '../components/sections/HeroSection';
import StatsBar from '../components/sections/StatsBar';
import ValueProposition from '../components/sections/ValueProposition';
import DisciplinesSection from '../components/sections/DisciplinesSection';
import AccountabilitySection from '../components/sections/AccountabilitySection';
import PortfolioSection from '../components/sections/PortfolioSection';
import BrandPartnersSection from '../components/sections/BrandPartnersSection';
import ClientsSection from '../components/sections/ClientsSection';
import CtaBanner from '../components/sections/CtaBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ValueProposition />
      <DisciplinesSection />
      <AccountabilitySection />
      <PortfolioSection />
      <BrandPartnersSection />
      <ClientsSection />
      <CtaBanner />
    </>
  );
}
