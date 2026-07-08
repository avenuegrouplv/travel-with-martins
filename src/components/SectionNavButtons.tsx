import { Link } from "react-router-dom";
import { ArrowUp, Home } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function SectionNavButtons() {
  const { lang } = useLanguage();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getToTopText = () => {
    if (lang === "EN") return "Back to top";
    if (lang === "RU") return "Наверх";
    return "Uz augšu";
  };

  const getToHomeText = () => {
    if (lang === "EN") return "To Home";
    if (lang === "RU") return "На главную";
    return "Uz sākumu";
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-16 pt-10 border-t border-[#EAE6DD]">
      <button
        onClick={handleScrollTop}
        className="px-5 py-2.5 bg-[#F2ECE0] text-[#0D1B2A] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0D1B2A] rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm"
      >
        <ArrowUp className="w-3.5 h-3.5" />
        <span>{getToTopText()}</span>
      </button>

      <Link
        to="/"
        className="px-5 py-2.5 bg-[#0D1B2A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0D1B2A] rounded-full transition-all flex items-center gap-2 shadow-sm"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{getToHomeText()}</span>
      </Link>
    </div>
  );
}
