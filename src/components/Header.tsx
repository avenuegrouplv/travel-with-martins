import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { MAIN_LOGO_BASE64 } from "../logo-base64";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aizver mobilo izvēlni, kad mainās maršruts
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Aizver valodu izvēlni, kad noklikšķina ārpus tās
  useEffect(() => {
    const closeLangMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".lang-dropdown-container")) {
        setLangMenuOpen(false);
      }
    };
    if (langMenuOpen) {
      window.addEventListener("click", closeLangMenu);
    }
    return () => window.removeEventListener("click", closeLangMenu);
  }, [langMenuOpen]);

  const handleContactClick = () => {
    if (location.pathname === "/") {
      const contactSec = document.getElementById("sazina");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/kontakti");
    }
    setMobileMenuOpen(false);
  };

  const t = translations[lang];

  const navLinks = [
    { name: t.header.home, path: "/" },
    { name: t.header.collab, path: "/sadarbiba" },
    { name: t.header.destinations, path: "/galamerki" },
    { name: t.header.faq, path: "/buj" },
    { name: t.header.blog, path: "/blogs" },
    { name: t.header.contacts, path: "/kontakti" }
  ];

  const languages: ("LV" | "EN" | "RU")[] = ["LV", "EN", "RU"];

  // Izlemjam, vai esam sākumlapā pašā augšā (caurspīdīgs fons un balts logo)
  const isAtTopHome = location.pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 font-montserrat transition-all duration-300 ${
        isAtTopHome
          ? "bg-transparent py-6"
          : "bg-[#0D1B2A]/90 backdrop-blur-md border-b border-[#234238]/40 py-4 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo ar diviem vizuāliem stāvokļiem (CSS filtri) */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img
            src={MAIN_LOGO_BASE64}
            alt="Travel with Martins"
            referrerPolicy="no-referrer"
            style={{
              filter: isAtTopHome ? "brightness(0) invert(1)" : "none",
              transition: "filter 0.3s ease, height 0.3s ease"
            }}
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigācija */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          <div className="flex space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-light tracking-widest hover:text-[#D4AF37] transition-colors ${
                    isActive
                      ? "text-[#D4AF37]"
                      : isAtTopHome
                      ? "text-white"
                      : "text-[#FAF9F5]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Language Selector Dropdown in Desktop */}
          <div className="relative border-l border-white/20 pl-4 ml-2 lang-dropdown-container">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md tracking-wider transition-all duration-200 cursor-pointer ${
                isAtTopHome
                  ? "text-white hover:bg-white/10"
                  : "text-[#FAF9F5] hover:bg-white/10"
              }`}
              aria-haspopup="true"
              aria-expanded={langMenuOpen}
              aria-label="Izvēlēties valodu / Select language"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span className="uppercase text-[11px] font-bold">{lang}</span>
            </button>
            
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-[#0D1B2A] border border-[#234238]/40 rounded-lg shadow-xl py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                      lang === l
                        ? "text-[#D4AF37] bg-white/5 font-bold"
                        : "text-[#FAF9F5] hover:text-[#D4AF37] hover:bg-white/5"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu buttons and languages */}
        <div className="flex items-center space-x-3 lg:hidden">
          {/* Language Selector Dropdown in Mobile */}
          <div className="relative lang-dropdown-container">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1 px-2.5 py-1.5 text-[11px] font-bold rounded-lg bg-white/5 text-white cursor-pointer"
              aria-haspopup="true"
              aria-expanded={langMenuOpen}
              aria-label="Select language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="uppercase">{lang}</span>
            </button>
            
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-[#0D1B2A] border border-[#234238]/40 rounded-lg shadow-2xl py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-center px-3 py-1.5 text-xs tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                      lang === l
                        ? "text-[#D4AF37] bg-white/5 font-extrabold"
                        : "text-white/80 hover:text-[#D4AF37] hover:bg-white/5"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Aizvērt izvēlni / Close menu" : "Atvērt izvēlni / Open menu"}
            className={`p-1 focus:outline-none ${isAtTopHome ? "text-white" : "text-[#FAF9F5]"}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobilā navigācijas izvēlne */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile menu"
          className="lg:hidden absolute top-full left-0 right-0 bg-[#0D1B2A] border-b border-[#234238]/40 shadow-2xl py-6 px-6 space-y-4 animate-fade-in"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-light tracking-wider py-2 border-b border-white/5 ${
                    isActive ? "text-[#D4AF37]" : "text-[#FAF9F5]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <button
            onClick={handleContactClick}
            className="w-full py-3 bg-[#D4AF37] text-[#0D1B2A] text-xs font-normal uppercase tracking-widest hover:bg-white transition-all rounded-none"
          >
            {t.header.contactBtn}
          </button>
        </div>
      )}
    </header>
  );
}
