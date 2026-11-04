import { useState } from 'react';
import ProjectsHero from '../components/sections/projects/ProjectsHero';
import ProjectFilterTabs from '../components/sections/projects/ProjectFilterTabs';
import FeaturedProjectCard from '../components/sections/projects/FeaturedProjectCard';
import ProjectsGrid from '../components/sections/projects/ProjectsGrid';
import ProjectsDeliveryAssurance from '../components/sections/projects/ProjectsDeliveryAssurance';
import ProjectsCtaBanner from '../components/sections/projects/ProjectsCtaBanner';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="w-full">
      <ProjectsHero />
      <ProjectFilterTabs
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <FeaturedProjectCard />
      <ProjectsGrid activeCategory={activeCategory} />
      <ProjectsDeliveryAssurance />
      <ProjectsCtaBanner />
    </div>
  );
}

