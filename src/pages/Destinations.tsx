import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Clock, 
  X, 
  Compass,
  Home
} from "lucide-react";
import SectionNavButtons from "../components/SectionNavButtons";
import { POPULAR_DESTINATIONS, DestinationCard } from "../data/destinations";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Destinations() {
  const { lang } = useLanguage();
  const t = translations[lang].destinations;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("Visi");
  const [activeLightbox, setActiveLightbox] = useState<DestinationCard | null>(null);

  // Dabūjam unikālos tagus filtrēšanai
  const allTags = ["Visi", "Viss iekļauts", "Pludmales", "Luksuss", "Miers", "Kultūra", "Eksotika", "Vēsture"];

  const tagTranslations: Record<string, Record<string, string>> = {
    "Visi": { LV: "Visi", EN: "All", RU: "Все" },
    "Viss iekļauts": { LV: "Viss iekļauts", EN: "All Inclusive", RU: "Все включено" },
    "Pludmales": { LV: "Pludmales", EN: "Beaches", RU: "Пляжи" },
    "Luksuss": { LV: "Luksuss", EN: "Luxury", RU: "Люкс" },
    "Miers": { LV: "Miers", EN: "Peace", RU: "Спокойствие" },
    "Kultūra": { LV: "Kultūra", EN: "Culture", RU: "Культура" },
    "Eksotika": { LV: "Eksotika", EN: "Exotic", RU: "Экзотика" },
    "Vēsture": { LV: "Vēsture", EN: "History", RU: "История" }
  };

  const filteredDestinations = POPULAR_DESTINATIONS.filter((item) => {
    const localizedItem = t.items[item.id as keyof typeof t.items] || {
      name: item.name,
      description: item.description,
    };
    const nameMatch = localizedItem.name.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = localizedItem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSearch = nameMatch || descMatch;
    const matchesTag = selectedTag === "Visi" || item.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const localizedActiveItem = activeLightbox ? (t.items[activeLightbox.id as keyof typeof t.items] || {
    name: activeLightbox.name,
    description: activeLightbox.description,
    duration: activeLightbox.duration,
    tags: activeLightbox.tags
  }) : null;

  const supportText = lang === "LV" 
    ? `Ceļojot uz ${localizedActiveItem?.name}, Jums tiks nodrošināts pilns atbalsts, sākot no aviobiļešu un viesnīcu piemeklēšanas līdz vietējo pārgājienu un ekskursiju koordiniem. Šis galamērķis ir izvēlēts un pārbaudīts, balstoties uz reāliem klientu ieteikumiem un augstākajiem viesmīlības standartiem.`
    : lang === "EN"
    ? `When traveling to ${localizedActiveItem?.name}, you will be provided with full support, from flight and hotel selection to local hikes and excursion coordination. This destination is selected and tested based on real customer recommendations and the highest hospitality standards.`
    : `При путешествии в ${localizedActiveItem?.name} вам будет предоставлена полная поддержка, от выбора авиабилетов и отелей до координации местных походов и экскурсий. Это направление выбрано и проверено на основе реальных рекомендаций клиентов и самых высоких стандартов гостеприимства.`;

  const itineraryItems = lang === "LV" ? [
    { label: "1. diena:", desc: "Lidojums, iekārtošanās viesnīcā un pirmā iepazīšanās ar vietējo pilsētvidi." },
    { label: "2.-3. diena:", desc: "Aktīvās ekskursijas, vēsturisko vietu un dabas objektu apskate pieredzējuša gida pavadībā." },
    { label: "4.-5. diena:", desc: "Brīvais laiks, vietējo ēdienu degustācijas, relaksācija un atpūta pludmalē." },
    { label: "Pēdējā diena:", desc: "Suvenīru iegāde un mājupceļš ar neizmirstamām atmiņām." }
  ] : lang === "EN" ? [
    { label: "Day 1:", desc: "Flight, hotel check-in and first acquaintance with the local city environment." },
    { label: "Days 2-3:", desc: "Active excursions, sightseeing of historical sites and natural objects guided by an experienced guide." },
    { label: "Days 4-5:", desc: "Free time, local food tasting, relaxation and rest on the beach." },
    { label: "Last Day:", desc: "Souvenir purchase and journey home with unforgettable memories." }
  ] : [
    { label: "День 1:", desc: "Перелет, заселение в отель и первое знакомство с местной городской средой." },
    { label: "Дни 2-3:", desc: "Активные экскурсии, посещение исторических мест и природных объектов в сопровождении опытного гида." },
    { label: "Дни 4-5:", desc: "Свободное время, дегустация местных блюд, релаксация и отдых на пляже." },
    { label: "Последний день:", desc: "Покупка сувениров и обратный путь с незабываемыми воспоминаниями." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F7F7F7] min-h-screen pt-36 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Home navigācijas poga */}
        <div className="flex justify-start">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#EAE6DD] rounded-full text-xs font-bold uppercase tracking-wider text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white transition-all shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.toHome}</span>
          </Link>
        </div>

        {/* Virsraksts un ievads */}
        <div className="text-center flex flex-col items-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#0D1B2A]/5 px-3 py-1 rounded inline-block">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#0D1B2A] uppercase">
            {t.title}
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-2" />
          <p className="text-sm sm:text-base text-[#5A5854] leading-relaxed pt-4">
            {t.subtitle}
          </p>
        </div>

        {/* Meklēšanas un filtrēšanas josla */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white border border-[#EAE6DD] p-4 rounded-2xl shadow-sm">
          <div className="relative w-full md:w-80 flex items-center bg-[#F7F7F7] border border-[#EAE6DD] rounded-xl px-4 py-2.5">
            <Search className="w-4 h-4 text-[#8C8A84] flex-shrink-0 mr-2" />
            <input
              type="text"
              placeholder={lang === "LV" ? "Meklēt galamērķi..." : lang === "EN" ? "Search destination..." : "Искать направление..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-xs sm:text-sm text-[#2C2B29] w-full placeholder-[#8C8A84]"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map((tag) => {
              const label = tagTranslations[tag]?.[lang] || tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                    selectedTag === tag
                      ? "bg-[#0D1B2A] text-[#D4AF37]"
                      : "bg-[#F7F7F7] text-[#5A5854] border border-[#EAE6DD] hover:bg-[#F2ECE0]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Galamērķu saraksts (kartītes) */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-24 bg-white border border-[#EAE6DD] rounded-3xl p-8 max-w-xl mx-auto space-y-4">
            <Compass className="w-12 h-12 text-[#8C8A84] mx-auto opacity-30 animate-spin-slow" />
            <h3 className="font-display font-bold text-lg text-[#0D1B2A]">
              {lang === "LV" ? "Nekas netika atrasts" : lang === "EN" ? "No results found" : "Ничего не найдено"}
            </h3>
            <p className="text-xs text-[#5A5854]">
              {lang === "LV" ? "Pārbaudi meklējamo vārdu vai izvēlies citu filtru." : lang === "EN" ? "Check the search term or choose another filter." : "Проверьте поисковое слово или выберите другой фильтр."}
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedTag("Visi"); }}
              className="mt-4 px-5 py-2.5 bg-[#0D1B2A] text-white text-xs font-bold rounded-lg hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-colors"
            >
              {lang === "LV" ? "Notīrīt meklēšanu" : lang === "EN" ? "Clear Search" : "Очистить поиск"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.map((item) => {
              const localizedItem = t.items[item.id as keyof typeof t.items] || {
                name: item.name,
                description: item.description,
                duration: item.duration,
                tags: item.tags
              };

              return (
                <article
                  key={item.id}
                  onClick={() => setActiveLightbox(item)}
                  className="group bg-white border-2 border-[#EAE6DD] hover:border-[#D4AF37]/30 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Attēls ar Hover & Zoom efektu */}
                  <div className="relative aspect-video overflow-hidden bg-zinc-100">
                    <img
                      src={item.image}
                      alt={localizedItem.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Karodziņš un nosaukums augšējā kreisajā stūrī */}
                    <span className="absolute top-3 left-3 bg-[#0D1B2A]/80 backdrop-blur-md text-[#D4AF37] px-2.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                      <span>{item.flag}</span>
                      <span>{localizedItem.name}</span>
                    </span>
                  </div>

                  {/* Kartītes apakša */}
                  <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap gap-1">
                        {localizedItem.tags.slice(0, 2).map((tg) => (
                          <span key={tg} className="text-[8px] font-bold text-[#8C8A84] bg-[#F7F7F7] border border-[#EAE6DD] px-1.5 py-0.5 rounded-full">
                            {tg}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-[#0D1B2A] group-hover:text-[#D4AF37] transition-colors line-clamp-1 leading-snug">
                        {localizedItem.name}
                      </h3>
                      <p className="text-xs text-[#5A5854] leading-relaxed line-clamp-2">
                        {localizedItem.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F2ECE0] flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-[#8C8A84] block font-bold uppercase tracking-wider leading-none">
                          {t.durationLabel}
                        </span>
                        <span className="text-xs font-semibold text-[#0D1B2A]">{localizedItem.duration}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                        {t.viewLabel}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Lightbox / Detalizēts apraksts ar galeriju */}
        <AnimatePresence>
          {activeLightbox && localizedActiveItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Fona aizklājums */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveLightbox(null)}
                className="absolute inset-0 bg-[#0D1B2A]"
              />

              {/* Lightbox saturs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative bg-[#FAF9F5] text-[#2C2B29] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#EAE6DD]"
              >
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-4 right-4 p-2 bg-[#0D1B2A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1B2A] rounded-full transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Attēls virsū */}
                <div className="relative aspect-video w-full bg-[#0D1B2A]">
                  <img
                    src={activeLightbox.image}
                    alt={localizedActiveItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white space-y-1">
                    <span className="text-3xl">{activeLightbox.flag}</span>
                    <h2 className="text-3xl font-display font-black tracking-tight uppercase">
                      {localizedActiveItem.name}
                    </h2>
                  </div>
                </div>

                {/* Satura informācija */}
                <div className="p-8 space-y-6">
                  <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-[#5A5854]">
                    <div className="bg-[#F2ECE0] py-2 px-3.5 rounded-lg flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span>{t.modalDuration} {localizedActiveItem.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-display font-bold text-[#0D1B2A] border-b border-[#EAE6DD] pb-2">
                      {lang === "LV" ? "Ceļojuma apraksts" : lang === "EN" ? "Trip Description" : "Описание путешествия"}
                    </h3>
                    <p className="text-[#5A5854] text-sm leading-relaxed">
                      {localizedActiveItem.description}
                    </p>
                    <p className="text-[#5A5854] text-sm leading-relaxed">
                      {supportText}
                    </p>
                  </div>

                  <div className="space-y-3 bg-[#0D1B2A] text-white p-6 rounded-xl border border-[#234238]/40">
                    <h4 className="font-display font-bold text-[#D4AF37] text-sm uppercase tracking-wider">
                      {lang === "LV" ? "Ieteicamais ceļojuma plāns:" : lang === "EN" ? "Recommended travel itinerary:" : "Рекомендуемый план поездки:"}
                    </h4>
                    <ul className="text-xs space-y-2 text-[#B2B0A9] list-disc pl-4">
                      {itineraryItems.map((item, idx) => (
                        <li key={idx}><strong>{item.label}</strong> {item.desc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Sazināties poga */}
                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setActiveLightbox(null);
                        const contactForm = document.getElementById("sazina");
                        if (contactForm) {
                          contactForm.scrollIntoView({ behavior: "smooth" });
                        } else {
                          // redirect to contact form
                          window.location.href = "/#/kontakti";
                        }
                      }}
                      className="px-6 py-3 bg-[#D4AF37] text-[#0D1B2A] text-xs font-bold uppercase tracking-wider hover:bg-[#0D1B2A] hover:text-white transition-all rounded-none cursor-pointer"
                    >
                      {t.modalRequestBtn}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Apakšējā navigācija */}
        <SectionNavButtons />
      </div>
    </motion.div>
  );
}
