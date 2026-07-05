import { useState, FormEvent } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

interface ContactFormProps {
  lang?: "LV" | "EN" | "RU";
}

export default function ContactForm({ lang: propLang }: ContactFormProps) {
  const { lang: globalLang } = useLanguage();
  const activeLang = propLang || globalLang;

  const [vards, setVards] = useState("");
  const [talrunis, setTalrunis] = useState("");
  const [epasts, setEpasts] = useState("");
  const [zina, setZina] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!vards || !epasts || !zina) return;
    
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ecfcd64f-9977-44cc-990d-af184d655344",
          name: vards,
          phone: talrunis,
          email: epasts,
          message: zina,
          subject: "Jauns saziņas pieprasījums no mājaslapas (Travel with Martins)",
          from_name: "Travel with Martins",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setVards("");
        setTalrunis("");
        setEpasts("");
        setZina("");
      } else {
        setSubmitError(
          activeLang === "EN" 
            ? "Error sending message. Please try again." 
            : activeLang === "RU" 
            ? "Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз." 
            : "Kļūda nosūtot ziņu. Lūdzu, mēģiniet vēlreiz."
        );
      }
    } catch (error) {
      setSubmitError(
        activeLang === "EN"
          ? "A network error occurred. Please check your internet connection."
          : activeLang === "RU"
          ? "Произошла сетевая ошибка. Пожалуйста, проверьте подключение к интернету."
          : "Radās tīkla kļūda. Lūdzu, pārbaudiet interneta savienojumu."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentT = translations[activeLang].contactForm;

  return (
    <section id="sazina" className="bg-gradient-to-b from-[#3E526B] to-[#2B3B4E] text-white py-20 px-6 border-t border-[#EAE6DD]/10 relative overflow-hidden rounded-none">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-4 py-1.5 rounded-full">
            {currentT.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 tracking-tight uppercase">
            {currentT.title}
          </h2>
          <p className="text-sm text-slate-200/90 mt-3 max-w-md mx-auto leading-relaxed">
            {currentT.subtitle}
          </p>
        </div>

        {/* Saziņas forma */}
        <div className="bg-white border border-[#EAE6DD] p-8 md:p-10 rounded-none shadow-xl max-w-2xl mx-auto text-[#0D1B2A]">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#D4AF37]">{currentT.successTitle}</h3>
              <p className="text-base text-[#5A5854]">{currentT.successDesc}</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 bg-[#0D1B2A]/5 text-[#0D1B2A] hover:bg-[#0D1B2A]/10 text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                {currentT.sendNew}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="vards" className="block text-xs font-bold uppercase tracking-wider text-[#0D1B2A]/70 mb-2">
                  {currentT.labelName} <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="vards"
                  type="text"
                  required
                  value={vards}
                  onChange={(e) => setVards(e.target.value)}
                  placeholder={currentT.placeholderName}
                  className="w-full bg-[#F7F7F7] border border-[#EAE6DD] rounded-xl px-4 py-3 text-sm text-[#0D1B2A] outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="talrunis" className="block text-xs font-bold uppercase tracking-wider text-[#0D1B2A]/70 mb-2">
                  {currentT.labelPhone}
                </label>
                <input
                  id="talrunis"
                  type="tel"
                  value={talrunis}
                  onChange={(e) => setTalrunis(e.target.value)}
                  placeholder={currentT.placeholderPhone}
                  className="w-full bg-[#F7F7F7] border border-[#EAE6DD] rounded-xl px-4 py-3 text-sm text-[#0D1B2A] outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="epasts" className="block text-xs font-bold uppercase tracking-wider text-[#0D1B2A]/70 mb-2">
                  {currentT.labelEmail} <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="epasts"
                  type="email"
                  required
                  value={epasts}
                  onChange={(e) => setEpasts(e.target.value)}
                  placeholder={currentT.placeholderEmail}
                  className="w-full bg-[#F7F7F7] border border-[#EAE6DD] rounded-xl px-4 py-3 text-sm text-[#0D1B2A] outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="zina" className="block text-xs font-bold uppercase tracking-wider text-[#0D1B2A]/70 mb-2">
                  {currentT.labelMessage} <span className="text-red-500 font-bold">*</span>
                </label>
                <textarea
                  id="zina"
                  required
                  rows={5}
                  value={zina}
                  onChange={(e) => setZina(e.target.value)}
                  placeholder={currentT.placeholderMessage}
                  className="w-full bg-[#F7F7F7] border border-[#EAE6DD] rounded-xl px-4 py-3 text-sm text-[#0D1B2A] outline-none focus:border-[#D4AF37] focus:bg-white transition-all resize-none"
                />
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs font-semibold border border-red-200">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#D4AF37] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#3E526B] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:bg-[#D4AF37]/50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  activeLang === "EN" ? "Sending..." : activeLang === "RU" ? "Отправка..." : "Sūta..."
                ) : (
                  currentT.submitBtn
                )}
              </button>
            </form>
          )}
        </div>

        {/* Saziņas informācija */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-lg font-display font-bold text-[#D4AF37] text-center mb-6 uppercase tracking-wider">
            {currentT.infoTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-[0.9fr_0.9fr_1.2fr] md:grid-cols-[1fr_1fr_1.35fr] lg:grid-cols-[1fr_1fr_1.45fr] gap-6 text-[#0D1B2A]">
            {/* Tālrunis */}
            <a
              href="tel:+37127061369"
              className="flex items-center gap-4 p-4 bg-white border border-[#EAE6DD] rounded-2xl hover:border-[#D4AF37]/50 hover:bg-white/95 transition-all duration-300 group shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0D1B2A] transition-all duration-300 shrink-0">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] text-[#5A5854] block font-bold uppercase tracking-wider">
                  {currentT.phone}
                </span>
                <span className="text-xs sm:text-[11px] md:text-xs lg:text-sm font-semibold text-[#0D1B2A] group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                  +371 27061369
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/37127061369"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white border border-[#EAE6DD] rounded-2xl hover:border-[#25D366]/50 hover:bg-white/95 transition-all duration-300 group shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.978C16.584 1.9 14.111.875 11.487.875c-5.44 0-9.865 4.42-9.869 9.861-.001 1.761.464 3.48 1.346 5.011l-.984 3.591 3.678-.964zm11.233-5.97c-.3-.149-1.772-.875-2.046-.975-.276-.101-.476-.149-.676.149-.2.3-.775.976-.95 1.174-.175.2-.35.224-.65.074-1.208-.603-2.003-1.063-2.784-2.404-.207-.356-.02-.207.163-.521.183-.314.09-.548-.045-.697-.135-.135-1.01-2.433-1.383-3.33-.364-.874-.736-.755-.138-.857c.22-.041.44-.092.518-.092s.149.02.276.149c.125.127.525 1.275.575 1.373.05.1.082.215.015.348-.067.135-.1.224-.2.348-.1.127-.21.284-.3.38-.1.1-.205.21-.09.41.436.758 1.011 1.393 1.696 1.887.834.6 1.547.888 2.11 1.015.3.067.575.045.795.012.24-.035.74-.303.844-.597.104-.294.104-.548.073-.597-.033-.05-.125-.08-.425-.23z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-[#5A5854] block font-bold uppercase tracking-wider">
                  WhatsApp
                </span>
                <span className="text-xs sm:text-[11px] md:text-xs lg:text-sm font-semibold text-[#0D1B2A] group-hover:text-[#25D366] transition-colors whitespace-nowrap">
                  +371 27061369
                </span>
              </div>
            </a>

            {/* E-pasts */}
            <a
              href="mailto:travelwithmartinss@gmail.com"
              className="flex items-center gap-4 p-4 bg-white border border-[#EAE6DD] rounded-2xl hover:border-[#D4AF37]/50 hover:bg-white/95 transition-all duration-300 group shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0D1B2A] transition-all duration-300 shrink-0">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-[#5A5854] block font-bold uppercase tracking-wider">
                  {currentT.email}
                </span>
                <span className="text-xs sm:text-[10px] md:text-xs lg:text-sm font-semibold text-[#0D1B2A] group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                  travelwithmartinss@gmail.com
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
