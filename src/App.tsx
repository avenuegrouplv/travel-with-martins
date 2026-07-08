import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Destinations } from './pages/Destinations';
import { Blog } from './pages/Blog';
import { Collaboration } from './pages/Collaboration';
import { Contacts } from './pages/Contacts';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'destinations':
        return <Destinations />;
      case 'blog':
        return <Blog />;
      case 'collab':
        return <Collaboration setActiveTab={setActiveTab} />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      <div>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="relative z-10">
          {renderActivePage()}
        </main>
      </div>
      <Footer setActiveTab={setActiveTab} />
      <CookieConsent />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
