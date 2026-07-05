import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  MessageSquare, 
  Compass, 
  HelpCircle, 
  CheckCircle,
  Home
} from "lucide-react";
import SectionNavButtons from "../components/SectionNavButtons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Collaboration() {
  const { lang } = useLanguage();
  const t = translations[lang].collab;

  const steps = [
    {
      num: "1",
      title: t.steps[0].title,
      desc: t.steps[0].desc,
      icon: <MessageSquare className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      num: "2",
      title: t.steps[1].title,
      desc: t.steps[1].desc,
      icon: <Compass className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      num: "3",
      title: t.steps[2].title,
      desc: t.steps[2].desc,
      icon: <HelpCircle className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      num: "4",
      title: t.steps[3].title,
      desc: t.steps[3].desc,
      icon: <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
    }
  ];

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

        {/* Soļu vizualizācija */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="bg-white border border-[#EAE6DD] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-[#D4AF37]/40 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#0D1B2A] rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                {step.icon}
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    {lang === "LV" ? `Solis ${step.num}` : lang === "EN" ? `Step ${step.num}` : `Шаг ${step.num}`}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5854] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SEO teksts vieglai lasīšanai */}
        <div className="bg-white border border-[#EAE6DD] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm text-[#5A5854] text-xs sm:text-sm leading-relaxed">
          <p>
            {t.bottomText1}
          </p>
          <p>
            {t.bottomText2}
          </p>
        </div>

        {/* Apakšējā navigācija */}
        <SectionNavButtons />
      </div>
    </motion.div>
  );
}
