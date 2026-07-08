import { Link } from "react-router-dom";
import { motion } from "motion/react";
import ContactForm from "../components/ContactForm";
import SectionNavButtons from "../components/SectionNavButtons";
import { Clock, MapPin, Award, Home } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function ContactPage() {
  const { lang } = useLanguage();

  const currentT = translations[lang].contactPage;

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
            <span>{currentT.toHome}</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Virsraksts un ievads */}
        <div className="text-center flex flex-col items-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#0D1B2A]/5 px-3 py-1 rounded inline-block">
            {currentT.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#0D1B2A] uppercase">
            {currentT.title}
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-2" />
          <p className="text-sm sm:text-base text-[#5A5854] max-w-2xl mx-auto leading-relaxed pt-4">
            {currentT.intro}
          </p>
        </div>

        {/* Papildu informācijas bloks (Darba laiks / Konsultācijas) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white border border-[#EAE6DD] p-6 rounded-2xl shadow-sm text-center">
          <div className="space-y-2 flex flex-col items-center p-4 border-b sm:border-b-0 sm:border-r border-[#EAE6DD]">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <h4 className="font-display font-bold text-sm text-[#0D1B2A] uppercase">{currentT.hoursTitle}</h4>
            <p className="text-xs text-[#5A5854]">{currentT.hoursDesc1}<br />{currentT.hoursDesc2}</p>
          </div>

          <div className="space-y-2 flex flex-col items-center p-4 border-b sm:border-b-0 sm:border-r border-[#EAE6DD]">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <h4 className="font-display font-bold text-sm text-[#0D1B2A] uppercase">{currentT.locationTitle}</h4>
            <p className="text-xs text-[#5A5854]">{currentT.locationDesc1}<br />{currentT.locationDesc2}</p>
          </div>

          <div className="space-y-2 flex flex-col items-center p-4">
            <Award className="w-5 h-5 text-[#D4AF37]" />
            <h4 className="font-display font-bold text-sm text-[#0D1B2A] uppercase">{currentT.supportTitle}</h4>
            <p className="text-xs text-[#5A5854]">{currentT.supportDesc1}<br /><strong>24/7</strong> {currentT.supportDesc2}</p>
          </div>
        </div>

        {/* Saziņas forma un informācija */}
        <ContactForm lang={lang} />

        {/* Apakšējā navigācija */}
        <SectionNavButtons />
      </div>
    </motion.div>
  );
}
