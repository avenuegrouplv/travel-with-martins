import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const consentTranslations = {
  LV: {
    acceptAll: "Apstiprināt visas",
    reject: "Noraidīt",
  },
  EN: {
    acceptAll: "Accept all",
    reject: "Reject",
  },
  RU: {
    acceptAll: "Принять все",
    reject: "Отклонить",
  }
};

export default function CookieConsent() {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    // Check if user has already made a decision
    const consent = localStorage.getItem("travel_cookie_consent");
    if (!consent) {
      // Set visibility after a 1.2-second delay to feel natural and medium-slow
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("travel_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("travel_cookie_consent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem("travel_cookie_consent", "dismissed_x");
    setIsVisible(false);
  };

  const t = consentTranslations[lang] || consentTranslations.LV;

  const renderConsentText = () => {
    if (lang === "LV") {
      return (
        <>
          Mēs izmantojam savas un trešo pušu sīkdatnes, lai nodrošinātu un uzlabotu tīmekļa vietnes darbību, pielāgotu informāciju mūsu produktiem un pakalpojumiem, kā arī analizētu vietnes apmeklējumu. Spiežot "Apstiprināt visas", jūs piekrītat visu sīkdatņu izmantošanai. Sīkdatņu loga aizvēršana ar "X" neaktivizē sīkdatnes. Lasiet vairāk par{" "}
          <Link
            to="/sikdatnu-politika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline font-bold inline-flex items-center"
          >
            Sīkdatņu politiku
          </Link>{" "}
          un{" "}
          <button
            onClick={() => setPrivacyOpen(true)}
            className="text-[#D4AF37] hover:underline font-bold inline cursor-pointer"
          >
            Privātuma politiku
          </button>
          .
        </>
      );
    } else if (lang === "RU") {
      return (
        <>
          Мы используем собственные и сторонние файлы куки для обеспечения и улучшения работы веб-сайта, настройки информации о наших продуктах и услугах, а также для анализа посещений сайта. Нажимая "Принять все", вы соглашаетесь на использование всех файлов куки. Закрытие окна куки с помощью "X" не активирует куки. Читайте подробнее о{" "}
          <Link
            to="/sikdatnu-politika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline font-bold inline-flex items-center"
          >
            Политике использования куки
          </Link>{" "}
          и{" "}
          <button
            onClick={() => setPrivacyOpen(true)}
            className="text-[#D4AF37] hover:underline font-bold inline cursor-pointer"
          >
            Политике конфиденциальности
          </button>
          .
        </>
      );
    } else {
      return (
        <>
          We use our own and third-party cookies to ensure and improve the website's operation, customize information for our products and services, and analyze website visits. By clicking "Accept all", you agree to the use of all cookies. Closing the cookie window with "X" does not activate cookies. Read more about the{" "}
          <Link
            to="/sikdatnu-politika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline font-bold inline-flex items-center"
          >
            Cookie Policy
          </Link>{" "}
          and{" "}
          <button
            onClick={() => setPrivacyOpen(true)}
            className="text-[#D4AF37] hover:underline font-bold inline cursor-pointer"
          >
            Privacy Policy
          </button>
          .
        </>
      );
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8 flex justify-center pointer-events-none">
            <motion.div
              initial={{ y: "150%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "150%", opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }} // Medium-slow elegant ease-out
              className="pointer-events-auto max-w-4xl w-full bg-[#0D1B2A] text-white border border-[#D4AF37]/40 shadow-2xl rounded-none p-6 md:p-8 relative flex flex-col md:flex-row gap-6 items-center justify-between"
              id="cookie-consent-container"
            >
              {/* Close Button X */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/60 hover:text-[#D4AF37] transition-colors p-1"
                id="cookie-close-x"
                aria-label="Aizvērt"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Content Text */}
              <div className="flex-1 min-w-0 pr-6">
                <p className="text-sm text-[#ECEAE4] leading-relaxed font-sans font-normal">
                  {renderConsentText()}
                </p>
              </div>

              {/* Buttons Group */}
              <div className="flex flex-row sm:flex-row gap-3 w-full md:w-auto shrink-0 justify-end mt-2 md:mt-0">
                <button
                  onClick={handleReject}
                  className="flex-1 md:flex-initial text-center border border-white/20 hover:border-white hover:bg-white/5 text-white font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 transition-all duration-300 rounded-none cursor-pointer"
                  id="cookie-reject-btn"
                >
                  {t.reject}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 md:flex-initial text-center bg-[#D4AF37] hover:bg-[#E5C048] text-[#0D1B2A] font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 transition-all duration-300 rounded-none cursor-pointer"
                  id="cookie-accept-btn"
                >
                  {t.acceptAll}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
