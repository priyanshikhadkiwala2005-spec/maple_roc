import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import PartnersPage from './pages/PartnersPage';
import ClientsPage from './pages/ClientsPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check initial route based on hash or pathname
    const handleUrlRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/about' || hash === '#about-page') {
        setCurrentPage('about');
      } else if (path === '/services' || hash === '#services-page') {
        setCurrentPage('services');
      } else if (path === '/projects' || hash === '#projects-page') {
        setCurrentPage('projects');
      } else if (path === '/partners' || hash === '#partners-page') {
        setCurrentPage('partners');
      } else if (path === '/clients' || hash === '#clients-page') {
        setCurrentPage('clients');
      } else if (path === '/insights' || hash === '#insights-page') {
        setCurrentPage('insights');
      } else if (path === '/contact' || hash === '#contact' || hash === '#contact-page') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleUrlRoute();

    window.addEventListener('popstate', handleUrlRoute);
    return () => window.removeEventListener('popstate', handleUrlRoute);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.history.pushState({}, '', '#about-page');
    } else if (page === 'services') {
      window.history.pushState({}, '', '#services-page');
    } else if (page === 'projects') {
      window.history.pushState({}, '', '#projects-page');
    } else if (page === 'partners') {
      window.history.pushState({}, '', '#partners-page');
    } else if (page === 'clients') {
      window.history.pushState({}, '', '#clients-page');
    } else if (page === 'insights') {
      window.history.pushState({}, '', '#insights-page');
    } else if (page === 'contact') {
      window.history.pushState({}, '', '#contact-page');
    } else {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#FAFCF9] flex flex-col font-sans overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1">
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'projects' && <ProjectsPage onNavigate={navigateTo} />}
        {currentPage === 'partners' && <PartnersPage onNavigate={navigateTo} />}
        {currentPage === 'clients' && <ClientsPage onNavigate={navigateTo} />}
        {currentPage === 'insights' && <InsightsPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
