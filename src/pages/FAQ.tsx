import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Home } from "lucide-react";
import SectionNavButtons from "../components/SectionNavButtons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function FAQ() {
  const { lang } = useLanguage();
  const t = translations[lang].faq;
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F7F7F7] min-h-screen pt-36 pb-24"
    >
      {/* Home navigācijas poga - saskaņota ar max-w-7xl galamērķu lapas izkārtojumu */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex justify-start">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#EAE6DD] rounded-full text-xs font-bold uppercase tracking-wider text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white transition-all shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.toHome}</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Virsraksts un ievads */}
        <div className="text-center flex flex-col items-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#0D1B2A]/5 px-3 py-1 rounded inline-block">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#0D1B2A] uppercase">
            {t.title}
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-2" />
          <p className="text-sm sm:text-base text-[#5A5854] max-w-2xl mx-auto leading-relaxed pt-4">
            {t.subtitle}
          </p>
        </div>

         {/* Akordeoni */}
        <div className="space-y-2.5">
          {t.items.map((item, index) => {
            const itemId = index + 1;
            const isOpen = openId === itemId;
            return (
              <div 
                key={index}
                className="bg-white border border-[#EAE6DD] rounded-xl overflow-hidden shadow-sm hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(itemId)}
                  aria-expanded={isOpen}
                  aria-controls={isOpen ? `faq-content-${itemId}` : undefined}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-display font-bold text-sm sm:text-base text-[#0D1B2A] leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#8C8A84] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#D4AF37]" : ""}`} aria-hidden="true" />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${itemId}`}
                      role="region"
                      aria-label={item.question}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-[#5A5854] leading-relaxed pl-12 sm:pl-14 border-t border-[#F2ECE0]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Papildus Saziņas Aicinājums */}
        <div className="bg-[#0D1B2A] text-white p-8 rounded-3xl text-center space-y-4 border border-[#234238]/40">
          <h3 className="text-lg sm:text-xl font-display font-bold text-white">
            {t.noAnswerTitle}
          </h3>
          <p className="text-xs text-[#B2B0A9] max-w-lg mx-auto">
            {t.noAnswerDesc}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                const contactSec = document.getElementById("sazina");
                if (contactSec) {
                  contactSec.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#/kontakti";
                }
              }}
              className="px-6 py-3 bg-[#D4AF37] text-[#0D1B2A] text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#0D1B2A] transition-all rounded-none cursor-pointer"
            >
              {t.askBtn}
            </button>
          </div>
        </div>

        {/* Apakšējā navigācija */}
        <SectionNavButtons />
      </div>
    </motion.div>
  );
}
