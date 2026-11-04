import { navLinks } from '../../data/siteData';
import { ArrowUp, Phone, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleLink = (link, e) => {
    if (link.label === 'Home') {
      e.preventDefault();
      onNavigate?.('home');
      scrollToTop();
    } else if (link.label === 'About Us') {
      e.preventDefault();
      onNavigate?.('about');
      scrollToTop();
    } else if (link.label === 'Services') {
      e.preventDefault();
      onNavigate?.('services');
      scrollToTop();
    } else if (link.label === 'Projects') {
      e.preventDefault();
      onNavigate?.('projects');
      scrollToTop();
    } else if (link.label === 'Brand Partners') {
      e.preventDefault();
      onNavigate?.('partners');
      scrollToTop();
    } else if (link.label === 'Clients & Associates') {
      e.preventDefault();
      onNavigate?.('clients');
      scrollToTop();
    } else if (link.label === 'Insights') {
      e.preventDefault();
      onNavigate?.('insights');
      scrollToTop();
    } else if (link.label === 'Contact Us') {
      e.preventDefault();
      onNavigate?.('contact');
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#051C14] text-stone-300 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Column 1: Brand Info (Col 4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/images/mapleroc-logo-icon.png"
                  alt="MapleRoc Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                  MapleRoc
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold text-emerald-400">
                  Commercial Interiors
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Integrated turnkey commercial interior solutions. From strategic workplace programming to precision architectural manufacturing and on-site delivery.
            </p>

            <div className="text-xs text-emerald-400/80 font-medium">
              ISO 9001:2015 & ISO 14001 Certified Practice
            </div>
          </div>

          {/* Column 2: Navigation Links (Col 2) */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(link, e)}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Disciplines (Col 3) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#disciplines" className="hover:text-emerald-400 transition-colors">
                  Workplace Strategy
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-emerald-400 transition-colors">
                  Commercial Architecture
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-emerald-400 transition-colors">
                  Turnkey Contracting & PMC
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-emerald-400 transition-colors">
                  Bespoke Joinery & Workstations
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-emerald-400 transition-colors">
                  Acoustic Design & AV Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Registered Office (Col 3) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Head Office
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  B-311, Alpha Arcades, MIPCO Chowkdi, G.I.D.C., Bharuch – 392015, Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+917359551555" className="text-white font-semibold hover:text-emerald-400 tracking-wide text-sm">
                  +91 73595 51555
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center sm:text-left">
          <div>
            © 2026 MapleRoc Commercial Interiors. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
            <a href="#" className="hover:text-stone-300 hidden sm:inline">Statutory Compliances</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
