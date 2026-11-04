import AboutHero from '../components/sections/about/AboutHero';
import AboutStats from '../components/sections/about/AboutStats';
import CoreEthosSection from '../components/sections/about/CoreEthosSection';
import TimelineSection from '../components/sections/about/TimelineSection';
import FourDisciplinesAbout from '../components/sections/about/FourDisciplinesAbout';
import AccountabilityAbout from '../components/sections/about/AccountabilityAbout';
import FounderQuoteSection from '../components/sections/about/FounderQuoteSection';
import AboutCtaBanner from '../components/sections/about/AboutCtaBanner';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <CoreEthosSection />
      <TimelineSection />
      <FourDisciplinesAbout />
      <AccountabilityAbout />
      <FounderQuoteSection />
      <AboutCtaBanner />
    </>
  );
}
