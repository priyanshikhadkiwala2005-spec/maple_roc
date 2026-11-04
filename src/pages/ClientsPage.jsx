import ClientsHero from '../components/sections/clients/ClientsHero';
import SpatialDisciplinesSection from '../components/sections/clients/SpatialDisciplinesSection';
import ClientIndexSection from '../components/sections/clients/ClientIndexSection';
import ArchitecturalEmpowermentSection from '../components/sections/clients/ArchitecturalEmpowermentSection';
import InstitutionalTestimonialsSection from '../components/sections/clients/InstitutionalTestimonialsSection';
import ClientsCtaBanner from '../components/sections/clients/ClientsCtaBanner';

export default function ClientsPage() {
  return (
    <div className="w-full">
      <ClientsHero />
      <SpatialDisciplinesSection />
      <ClientIndexSection />
      <ArchitecturalEmpowermentSection />
      <InstitutionalTestimonialsSection />
      <ClientsCtaBanner />
    </div>
  );
}

