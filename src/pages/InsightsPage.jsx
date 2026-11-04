import { useState } from 'react';
import InsightsHero from '../components/sections/insights/InsightsHero';
import FeaturedInsightCard from '../components/sections/insights/FeaturedInsightCard';
import PublicationsGrid from '../components/sections/insights/PublicationsGrid';
import NewsletterSection from '../components/sections/insights/NewsletterSection';
import InsightsCtaBanner from '../components/sections/insights/InsightsCtaBanner';

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="w-full">
      <InsightsHero />
      <FeaturedInsightCard
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />
      <PublicationsGrid activeFilter={activeFilter} />
      <NewsletterSection />
      <InsightsCtaBanner />
    </div>
  );
}

