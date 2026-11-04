import { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Download } from 'lucide-react';

export default function ClientIndexSection() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Sectors (24)' },
    { id: 'psu', label: 'Infrastructure & PSU' },
    { id: 'conglomerates', label: 'Conglomerates & IT' },
    { id: 'bfsi', label: 'Banking & BFSI' },
    { id: 'healthcare', label: 'Healthcare & Industrial' },
  ];

  const clients = [
    {
      id: 1,
      cat: 'psu',
      name: 'National High Speed Rail Corp (NHSRCL)',
      sector: 'Infrastructure & PSU',
      subSector: 'High-Speed Rail',
      scope: 'Complete administrative reception, acoustic conference rooms, and turnkey regional project office.',
      link: 'Turnkey Fitout & Architectural Joinery',
    },
    {
      id: 2,
      cat: 'healthcare',
      name: 'AM/NS India (ArcelorMittal Nippon)',
      sector: 'Industrial / Steel',
      subSector: 'Heavy Industry',
      scope: 'Landmark corporate facade, executive administrative hub, R&D suites, and training center fitout.',
      link: 'Campus Masterplan & Executive Wing',
    },
    {
      id: 3,
      cat: 'conglomerates',
      name: 'Reliance Industries Limited (RIL)',
      sector: 'Conglomerates & Energy',
      subSector: 'Energy & Petrochem',
      scope: 'High-density executive workstation floors, meeting suites, and specialized control room furniture.',
      link: 'Bespoke Joinery & Workstation Clusters',
    },
    {
      id: 4,
      cat: 'conglomerates',
      name: 'Larsen & Toubro (L&T)',
      sector: 'Engineering & Infra',
      subSector: 'EPC Infrastructure',
      scope: 'Regional project headquarters, engineering design bullpens, and acoustically isolated meeting rooms.',
      link: 'Civil Fitout & Space Zoning',
    },
    {
      id: 5,
      cat: 'conglomerates',
      name: 'Adani Enterprises Limited',
      sector: 'Ports & Energy Infra',
      subSector: 'Conglomerate HQ',
      scope: 'Corporate administration wing, conference AV suite, and high-spec executive desking.',
      link: 'Turnkey Fitout & Custom Millwork',
    },
    {
      id: 6,
      cat: 'bfsi',
      name: 'State Bank of India (SBI)',
      sector: 'Banking & BFSI',
      subSector: 'Public Sector Banking',
      scope: 'Regional administrative zonal office, secure transaction counters, and executive conference hall.',
      link: 'Acoustic Glass Partitions & Civil Fitout',
    },
    {
      id: 7,
      cat: 'bfsi',
      name: 'HDFC Bank Limited',
      sector: 'Banking & BFSI',
      subSector: 'Private Banking',
      scope: 'Premier private banking lounge, retail branch network standard fitout, and back-office workstations.',
      link: 'Corporate Interior Standard Execution',
    },
    {
      id: 8,
      cat: 'psu',
      name: 'Nuclear Power Corp. of India (NPCIL)',
      sector: 'Government & Energy',
      subSector: 'Strategic Public Sector',
      scope: 'High-security administrative wing, secure document archives, and NBC-compliant fire-rated doors.',
      link: 'Specialized Heavy-Duty Joinery & Storage',
    },
    {
      id: 9,
      cat: 'healthcare',
      name: 'BASF India',
      sector: 'Chemicals & Research',
      subSector: 'Multinational Corp',
      scope: 'Corporate administrative office, laboratory technical cabins, and chemical-resistant pantry spaces.',
      link: 'Turnkey Fitout & Cleanroom Joinery',
    },
    {
      id: 10,
      cat: 'healthcare',
      name: 'Tata Chemicals Limited',
      sector: 'Industrial Chemicals',
      subSector: 'Industrial Enterprise',
      scope: 'Plant administrative building, executive dining suite, and ergonomics-compliant control consoles.',
      link: 'Executive Desking & Control Room',
    },
    {
      id: 11,
      cat: 'healthcare',
      name: 'Torrent Pharmaceuticals Ltd',
      sector: 'Pharma & Life Sciences',
      subSector: 'Life Sciences HQ',
      scope: 'Corporate R&D administration floor, executive board suites, and acoustic training auditoriums.',
      link: 'Acoustic Panelling & Boardroom Fitout',
    },
    {
      id: 12,
      cat: 'psu',
      name: 'Food Corporation of India (FCI / CWC)',
      sector: 'Government Authority',
      subSector: 'National Supply Chain',
      scope: 'Zonal headquarters, meeting facilities, and heavy-duty archive record management systems.',
      link: 'High-Density Storage & Office Fitout',
    },
  ];

  const filteredClients =
    activeTab === 'all'
      ? clients
      : clients.filter((c) => c.cat === activeTab);

  return (
    <section id="client-index" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span>Verified Track Record</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-normal tracking-tight">
              Comprehensive Client Index
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            Representative selection of corporate, institutional and PSU mandates delivered by MapleRoc.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 sm:mb-10 scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#1F3D2B] text-white shadow-xs'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/90'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 12 Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Sector Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EAF3EE] text-[#2F6146] text-[10px] font-semibold uppercase tracking-wider">
                    {client.sector}
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium">
                    {client.subSector}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="font-serif text-base sm:text-lg text-[#1F3D2B] font-normal mb-2 leading-snug">
                  {client.name}
                </h3>

                {/* Scope Description */}
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  {client.scope}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-stone-100">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#2F6146] hover:text-[#1F3D2B] transition-colors"
                >
                  <span className="truncate">{client.link}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Integrity Strip */}
        <div className="bg-[#F8FAF9] rounded-2xl p-4 sm:p-5 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#2F6146] shrink-0" />
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong className="text-stone-900 font-semibold">Client Portfolio Integrity:</strong>{' '}
              Client names and scopes shown represent completed physical delivery mandates executed directly or under verified principal turnkey contracting protocols.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-xs font-medium whitespace-nowrap transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-stone-500" />
            <span>Download Client Reference List</span>
          </a>
        </div>

      </div>
    </section>
  );
}

