import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Collaboration from "./pages/Collaboration";
import Destinations from "./pages/Destinations";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import ContactPage from "./pages/ContactPage";
import CookiePolicy from "./pages/CookiePolicy";
import AdminCMS from "./pages/AdminCMS";
import { LanguageProvider } from "./context/LanguageContext";
import SEO from "./components/SEO";

function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isCms = location.pathname.startsWith("/cms") || location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#2C2B29] font-sans antialiased flex flex-col justify-between">
      {/* Scroll To Top helper on route changes */}
      <ScrollToTop />
      
      {/* Persistent Sticky Navigation Header - Hidden on CMS panels */}
      {!isCms && <Header />}

      {/* Multi-page Routing Stage */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer block with quick-links - Hidden on CMS panels */}
      {!isCms && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* Dynamic SEO and Metatags Coordinator */}
        <SEO />
        
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/par-mani" element={<Home />} />
            <Route path="/sadarbiba" element={<Collaboration />} />
            <Route path="/galamerki" element={<Destinations />} />
            <Route path="/buj" element={<FAQ />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/kontakti" element={<ContactPage />} />
            <Route path="/sikdatnu-politika" element={<CookiePolicy />} />
            
            {/* Built-in Administrative CMS routes */}
            <Route path="/cms" element={<AdminCMS />} />
            <Route path="/admin" element={<AdminCMS />} />
            
            {/* Fallback route - novirza uz sākumlapu */}
            <Route path="*" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </LanguageProvider>
  );
}
