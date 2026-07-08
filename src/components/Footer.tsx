import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Phone, Mail } from "lucide-react";
import CookiePolicyModal from "./CookiePolicyModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import { MAIN_LOGO_BASE64 } from "../logo-base64";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Footer() {
  const [cookieOpen, setCookieOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  const navigationLinks = [
    { name: t.header.home, path: "/" },
    { name: t.header.collab, path: "/sadarbiba" },
    { name: t.header.destinations, path: "/galamerki" },
    { name: t.header.faq, path: "/buj" },
    { name: t.header.blog, path: "/blogs" },
    { name: t.header.contacts, path: "/kontakti" }
  ];

  return (
    <footer className="bg-[#0D1B2A] text-[#ECEAE4] pt-20 pb-8 px-6 border-t border-[#234238]/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#234238]/40">
        {/* 1. stabiņš: Logo */}
        <div className="flex flex-col space-y-4">
          <Link to="/">
            <img
              src={MAIN_LOGO_BASE64}
              alt="Travel with Martins"
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-sm text-[#B2B0A9] leading-relaxed max-w-xs mt-2">
            {t.footer.desc}
          </p>
        </div>

        {/* 2. stabiņš: Sadaļas */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-6">
            {t.footer.linksTitle}
          </h4>
          <ul className="space-y-3 text-sm text-[#B2B0A9]">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. stabiņš: Seko man (iecentrēts pilnībā) */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-6">
            {lang === "LV" ? "Seko man" : lang === "EN" ? "Follow me" : "Подписывайтесь"}
          </h4>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.facebook.com/share/14iUDFF18v6/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B2B0A9] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              title="Facebook"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B2B0A9] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              title="Youtube"
              aria-label="Subscribe to our YouTube channel"
            >
              <Youtube className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/travelwithmartinss?utm_source=qr&igsh=MW9ueGhjOWluYnVjOQ=="
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B2B0A9] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              title="Instagram"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 4. stabiņš: Kontaktinformācija (līdzināts pret labo malu) */}
        <div className="text-left sm:text-right flex flex-col items-start sm:items-end">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-6 w-full text-left sm:text-right">
            {t.footer.contactsTitle}
          </h4>
          <div className="space-y-4 text-sm text-[#B2B0A9] w-full">
            <div className="text-white font-semibold text-left sm:text-right">
              Mārtiņš Šics
            </div>
            <div className="flex items-center gap-2 justify-start sm:justify-end">
              <Phone className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
              <a href="tel:+37127061369" className="hover:text-white transition-colors">
                +371 27061369
              </a>
            </div>
            <div className="flex items-center gap-2 justify-start sm:justify-end">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366] fill-current" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.978C16.584 1.9 14.111.875 11.487.875c-5.44 0-9.865 4.42-9.869 9.861-.001 1.761.464 3.48 1.346 5.011l-.984 3.591 3.678-.964zm11.233-5.97c-.3-.149-1.772-.875-2.046-.975-.276-.101-.476-.149-.676.149-.2.3-.775.976-.95 1.174-.175.2-.35.224-.65.074-1.208-.603-2.003-1.063-2.784-2.404-.207-.356-.02-.207.163-.521.183-.314.09-.548-.045-.697-.135-.135-1.01-2.433-1.383-3.33-.364-.874-.736-.755-.138-.857c.22-.041.44-.092.518-.092s.149.02.276.149c.125.127.525 1.275.575 1.373.05.1.082.215.015.348-.067.135-.1.224-.2.348-.1.127-.21.284-.3.38-.1.1-.205.21-.09.41.436.758 1.011 1.393 1.696 1.887.834.6 1.547.888 2.11 1.015.3.067.575.045.795.012.24-.035.74-.303.844-.597.104-.294.104-.548.073-.597-.033-.05-.125-.08-.425-.23z"/>
              </svg>
              <a href="https://wa.me/37127061369" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                +371 27061369 (WhatsApp)
              </a>
            </div>
            <div className="flex items-center gap-2 justify-start sm:justify-end">
              <Mail className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
              <a href="mailto:travelwithmartinss@gmail.com" className="hover:text-white transition-colors break-all">
                travelwithmartinss@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Apakšējā copyright josla */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-12 items-center text-sm text-[#8C8A84] gap-4">
        {/* Kreisā puse: Autortiesības (paplašināts līdz col-span-5, lai novērstu pāriešanu jaunā rindā) */}
        <div className="text-center md:text-left leading-relaxed md:col-span-5">
          <span className="block sm:inline">
            {lang === "LV" ? "2026 © Visas tiesības aizsargātas" : lang === "EN" ? "2026 © All rights reserved" : "2026 © Все права защищены"}
          </span>
          <span className="hidden sm:inline"> | </span>
          <span className="block sm:inline">Travel with Martins</span>
        </div>

        {/* Vidus: Privātuma un sīkdatņu politika (pārvietots uz ekrāna vidu desktop versijā, nedaudz pa labi ar md:col-span-4 un md:pl-8) */}
        <div className="flex items-center justify-center space-x-4 md:col-span-4 md:pl-8">
          <button
            onClick={() => setCookieOpen(true)}
            className="hover:text-white hover:underline transition-colors cursor-pointer text-sm whitespace-nowrap"
          >
            {lang === "LV" ? "Sīkdatņu politika" : lang === "EN" ? "Cookie Policy" : "Политика куки"}
          </button>
          <span className="text-[#8C8A84]/40">|</span>
          <button
            onClick={() => setPrivacyOpen(true)}
            className="hover:text-white hover:underline transition-colors cursor-pointer text-sm whitespace-nowrap"
          >
            {lang === "LV" ? "Privātuma politika" : lang === "EN" ? "Privacy Policy" : "Политика конфиденциальности"}
          </button>
        </div>

        {/* Labā puse: Izstrādātājs un saite uz SageOn */}
        <div className="flex items-center justify-center md:justify-end gap-2 md:col-span-3">
          <span className="text-xs">
            {lang === "LV" ? "Izstrādātājs:" : lang === "EN" ? "Developer:" : "Разработчик:"}
          </span>
          <a
            href="https://www.facebook.com/profile.php?id=100088834779537"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#D4AF37] hover:text-white hover:underline transition-all cursor-pointer z-10"
            title="SageOn Facebook"
          >
            SageOn
          </a>
        </div>
      </div>

      {/* Modālie logi */}
      <CookiePolicyModal isOpen={cookieOpen} onClose={() => setCookieOpen(false)} />
      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
