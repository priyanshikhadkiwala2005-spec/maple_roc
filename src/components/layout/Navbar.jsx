import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { navLinks } from '../../data/siteData';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (item, e) => {
    if (item.label === 'Home') {
      e.preventDefault();
      onNavigate?.('home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (item.label === 'About Us') {
      e.preventDefault();
      onNavigate?.('about');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (item.label === 'Services') {
      e.preventDefault();
      onNavigate?.('services');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (item.label === 'Projects') {
      e.preventDefault();
      onNavigate?.('projects');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (item.label === 'Brand Partners') {
      e.preventDefault();
      onNavigate?.('partners');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (item.label === 'Clients & Associates') {
      e.preventDefault();
      onNavigate?.('clients');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (item.label === 'Insights') {
      e.preventDefault();
      onNavigate?.('insights');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (item.label === 'Contact Us') {
      e.preventDefault();
      onNavigate?.('contact');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // If on another page and clicking another section link, go to home first
      if (currentPage !== 'home') {
        onNavigate?.('home');
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-2 sm:top-4 z-50 w-full px-2.5 sm:px-6 lg:px-8 xl:px-12">
      {/* Full-width Wide Pill Container */}
      <div className="w-full bg-white rounded-full px-3.5 sm:px-7 lg:px-11 py-2 sm:py-3 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-stone-200/70 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        
        {/* Brand Logo with Icon */}
        <button
          type="button"
          onClick={() => {
            onNavigate?.('home');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          className="flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity shrink-0 cursor-pointer text-left"
        >
          <img
            src="/images/mapleroc-logo-icon.png"
            alt="MapleRoc Logo"
            className="h-6 sm:h-7 lg:h-8 w-auto object-contain shrink-0"
          />
          <span className="font-serif text-xl sm:text-2xl lg:text-[28px] font-normal tracking-tight text-[#1B221E]">
            MapleRoc
          </span>
        </button>

        {/* Center Desktop Navigation - All on ONE SINGLE LINE across the full width */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-8 flex-1 justify-center">
          {navLinks.map((item) => {
            const isItemActive =
              (item.label === 'Home' && currentPage === 'home') ||
              (item.label === 'About Us' && currentPage === 'about') ||
              (item.label === 'Services' && currentPage === 'services') ||
              (item.label === 'Projects' && currentPage === 'projects') ||
              (item.label === 'Brand Partners' && currentPage === 'partners') ||
              (item.label === 'Clients & Associates' && currentPage === 'clients') ||
              (item.label === 'Insights' && currentPage === 'insights') ||
              (item.label === 'Contact Us' && currentPage === 'contact');

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(item, e)}
                className={`whitespace-nowrap text-[13px] xl:text-[14px] 2xl:text-[15px] transition-colors py-1 cursor-pointer ${
                  isItemActive
                    ? 'font-medium text-[#4F735F] hover:text-[#28573D]'
                    : 'font-normal text-[#2D312E] hover:text-[#28573D]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: "Get a Quote" pill + circular User icon button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="#contact-page"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('contact');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#28573D] hover:bg-[#1E432F] text-white text-xs sm:text-[13px] font-medium shadow-xs transition-colors text-center whitespace-nowrap cursor-pointer"
          >
            Get a Quote
          </a>

          <a
            href="tel:+917359551555"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#28573D] hover:bg-[#1E432F] text-white flex items-center justify-center shadow-xs transition-colors shrink-0"
            title="Dharmendra Surelia: +91 73595 51555"
            aria-label="Profile / Contact"
          >
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden flex items-center gap-1.5 sm:gap-2">
          <a
            href="#contact-page"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('contact');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#28573D] text-white text-xs font-medium sm:hidden cursor-pointer whitespace-nowrap"
          >
            Get a Quote
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-full text-stone-700 hover:text-[#28573D] hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-stone-200/80 space-y-3 max-h-[calc(100vh-90px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isItemActive =
                (item.label === 'Home' && currentPage === 'home') ||
                (item.label === 'About Us' && currentPage === 'about') ||
                (item.label === 'Services' && currentPage === 'services') ||
                (item.label === 'Projects' && currentPage === 'projects') ||
                (item.label === 'Brand Partners' && currentPage === 'partners') ||
                (item.label === 'Clients & Associates' && currentPage === 'clients') ||
                (item.label === 'Insights' && currentPage === 'insights') ||
                (item.label === 'Contact Us' && currentPage === 'contact');

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(item, e)}
                  className={`py-2 px-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    isItemActive
                      ? 'bg-emerald-50 text-[#28573D] font-semibold'
                      : 'text-stone-700 hover:bg-stone-50 hover:text-[#28573D]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
            <a
              href="#contact-page"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('contact');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="flex-1 py-2.5 rounded-full bg-[#28573D] text-white text-xs font-semibold uppercase tracking-wider text-center cursor-pointer"
            >
              Get a Quote
            </a>
            <a
              href="tel:+917359551555"
              className="w-10 h-10 rounded-full bg-[#28573D] text-white flex items-center justify-center shrink-0"
              aria-label="Call directly"
            >
              <User className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
