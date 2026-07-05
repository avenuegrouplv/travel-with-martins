import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle, HelpCircle, Home } from "lucide-react";
import SectionNavButtons from "../components/SectionNavButtons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const reasons = lang === "LV" ? [
    "Vairāk nekā 20 gadu pieredze uzņēmējdarbībā.",
    "Ceļojumu nozarē kopš 2018. gada.",
    "Personīga un individuāla pieeja katram cilvēkam.",
    "Godīga komunikācija bez tukšiem solījumiem.",
    "Palīdzu izvēlēties piemērotākos ceļojumus atbilstoši budžetam un vēlmēm.",
    "Dalos tikai ar to, ko pats esmu iepazinis un pārbaudījis.",
    "Atbalsts arī pēc ceļojuma rezervācijas."
  ] : lang === "EN" ? [
    "Over 20 years of experience in business.",
    "In the travel industry since 2018.",
    "Personal and individual approach to each person.",
    "Honest communication without empty promises.",
    "I help choose the most suitable trips according to budget and wishes.",
    "I only share what I have personally experienced and verified.",
    "Support even after trip booking."
  ] : [
    "Более 20 лет опыта в бизнесе.",
    "В сфере туризма с 2018 года.",
    "Личный и индивидуальный подход к каждому человеку.",
    "Честное общение без пустых обещаний.",
    "Помогаю подобрать наиболее подходящие поездки в соответствии с бюджетом и пожеланиями.",
    "Делюсь только тем, что сам узнал и проверил.",
    "Поддержка даже после бронирования поездки."
  ];

  const questions = lang === "LV" ? [
    "Gribētos ceļot biežāk.",
    "Vēlos redzēt pasauli, bet vienmēr šķiet, ka nav īstais brīdis.",
    "Meklēju veidu, kā dzīvot brīvāk.",
    "Vēlos satikt jaunus cilvēkus un paplašināt savu redzesloku.",
    "Interesē iespēja radīt papildu ienākumus paralēli pamatdarbam.",
    "Vēlos vairāk izvēles iespēju nākotnē."
  ] : lang === "EN" ? [
    "Would like to travel more often.",
    "Want to see the world, but it always seems like it's not the right moment.",
    "Looking for a way to live more freely.",
    "Want to meet new people and expand my horizons.",
    "Interested in the opportunity to create additional income alongside my main job.",
    "Want more choice in the future."
  ] : [
    "Хотелось бы путешествовать чаще.",
    "Хочу повидать мир, но всегда кажется, что сейчас неподходящий момент.",
    "Ищу способ жить более свободно.",
    "Хочу знакомиться с новыми людьми и расширять свой кругозор.",
    "Интересует возможность получения дополнительного дохода параллельно с основной работой.",
    "Хочу больше возможностей выбора в будущем."
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
            <span>{lang === "LV" ? "Uz sākumu" : lang === "EN" ? "To Home" : "На главную"}</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Virsraksts un ievads */}
        <div className="text-center flex flex-col items-center space-y-4 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#0D1B2A]/5 px-3 py-1 rounded inline-block">
            {lang === "LV" ? "Mans stāsts un vērtības" : lang === "EN" ? "My story and values" : "Моя история и ценности"}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#0D1B2A] uppercase">
            {lang === "LV" ? "Par mani" : lang === "EN" ? "About me" : "Обо мне"}
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-2" />
        </div>

        {/* Galvenais saturs un attēls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-[#5A5854] text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-lg text-[#0D1B2A]">
              {t.home.aboutIntro}
            </p>
            <p>
              {t.home.aboutBody}
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-[#EAE6DD]">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format,webp&fit=crop&w=500&q=70"
                alt="Travel with Martins"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0D1B2A] text-white p-6 rounded-2xl shadow-lg border border-[#234238]/40 space-y-1">
              <span className="text-3xl font-display font-black text-[#D4AF37]">20+</span>
              <p className="text-[10px] uppercase tracking-wider text-[#B2B0A9]">
                {lang === "LV" ? "Gadu pieredze uzņēmējdarbībā" : lang === "EN" ? "Years of business experience" : "Лет опыта в бизнесе"}
              </p>
            </div>
          </div>
        </div>

        {/* Centered Quote Card */}
        <div className="max-w-4xl mx-auto w-full pt-4">
          <div className="font-medium text-[#0D1B2A] bg-[#F2ECE0]/50 p-6 sm:p-10 rounded-2xl border-l-4 sm:border-l-0 sm:border-y-2 border-[#D4AF37] leading-relaxed shadow-sm text-center text-base sm:text-lg italic">
            "{t.home.aboutQuote}"
          </div>
        </div>

        {/* Kāpēc izvēlas sadarboties */}
        <div className="bg-[#0D1B2A] text-white p-8 md:p-12 rounded-3xl space-y-8 border border-[#234238]/40 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-2xl" />
          
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
              {lang === "LV" ? "Mana pieeja" : lang === "EN" ? "My approach" : "Мой подход"}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              {lang === "LV" ? "Kāpēc cilvēki izvēlas sadarboties ar mani?" : lang === "EN" ? "Why do people choose to cooperate with me?" : "Почему люди выбирают сотрудничество со мной?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#ECEAE4] font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vai atpazīsti sevi */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#EAE6DD] space-y-8 shadow-sm">
          <div className="space-y-2 text-center">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
              {lang === "LV" ? "Pārdomām" : lang === "EN" ? "For reflection" : "Для размышления"}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0D1B2A] tracking-tight">
              {lang === "LV" ? "Vai atpazīsti sevi?" : lang === "EN" ? "Do you recognize yourself?" : "Узнаете себя?"}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5854]">
              {lang === "LV" ? "Varbūt arī Tu kādreiz esi domājis..." : lang === "EN" ? "Perhaps you too have thought..." : "Возможно, и вы когда-то думали..."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#F7F7F7] p-4 rounded-xl border border-[#EAE6DD] hover:border-[#D4AF37]/20 transition-colors">
                <HelpCircle className="w-5 h-5 text-[#0D1B2A] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#5A5854] font-medium">{question}</span>
              </div>
            ))}
          </div>

          <p className="text-center font-semibold text-[#0D1B2A] text-sm pt-4 border-t border-[#F2ECE0]">
            {lang === "LV"
              ? "Ja kaut viens no šiem punktiem Tev šķiet pazīstams, iespējams, esi nonācis īstajā vietā."
              : lang === "EN"
              ? "If at least one of these points feels familiar to you, you might have come to the right place."
              : "Если хотя бы один из этих пунктов кажется вам знакомым, возможно, вы попали в нужное место."}
          </p>
        </div>

        {/* Apakšējā navigācija */}
        <SectionNavButtons />
      </div>
    </motion.div>
  );
}
