import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Compass, 
  MapPin, 
  HelpCircle, 
  BookOpen, 
  ChevronRight, 
  ChevronDown,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Users,
  Briefcase,
  GraduationCap,
  Hourglass,
  Heart,
  Share2,
  ExternalLink,
  Facebook
} from "lucide-react";
import StatsCounter from "../components/StatsCounter";
import ReviewsCarousel from "../components/ReviewsCarousel";
import SocialMedia from "../components/SocialMedia";
import ContactForm from "../components/ContactForm";
import CookieConsent from "../components/CookieConsent";
import { POPULAR_DESTINATIONS } from "../data/destinations";
import { MAIN_LOGO_BASE64 } from "../logo-base64";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import parManiPng from "../par-mani.png";

const HERO_SLIDES: Array<{
  image: string;
  text: string;
  highlights: string[];
  positionClass?: string;
}> = [
  /* Pirmie divi attēli pagaidām noņemti no redzamības, bet saglabāti:
  {
    image: "https://pub-5eb70b89ca2248c8bdc564aeb0e101f5.r2.dev/background2.webp",
    text: "Atklāj pasaules skaistākās vietas ar personīgu atbalstu",
    highlights: ["skaistākās", "atbalstu"],
    positionClass: "max-sm:object-[68%_center] object-center"
  },
  {
    image: "https://pub-5eb70b89ca2248c8bdc564aeb0e101f5.r2.dev/background1.webp",
    text: "Dzīvo brīvāk, ceļo gudrāk un pieņem savus lēmumus pats",
    highlights: ["brīvāk", "gudrāk", "pats"],
    positionClass: "max-sm:object-[72%_center] object-center"
  },
  */
  {
    image: "https://pub-5eb70b89ca2248c8bdc564aeb0e101f5.r2.dev/background3.webp",
    text: "Sasniedz vairāk un veido savu dzīves ceļu ar jaunu aizrautību",
    highlights: ["vairāk", "aizrautību"]
  },
  {
    image: "https://pub-5eb70b89ca2248c8bdc564aeb0e101f5.r2.dev/background4.webp",
    text: "Paplašini redzesloku un iegūsti jaunas iespējas nākotnei",
    highlights: ["redzesloku", "iespējas", "nākotnei"]
  },
  {
    image: "https://pub-5eb70b89ca2248c8bdc564aeb0e101f5.r2.dev/background5.webp",
    text: "Baudi neatkārtojamus mirkļus un gūsti neaizmirstamu pieredzi",
    highlights: ["neatkārtojamus", "neaizmirstamu"]
  },
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format,webp&fit=crop&w=1200&q=70",
    text: "Sasniedz vairāk un veido savu dzīves ceļu ar jaunu aizrautību",
    highlights: ["vairāk", "aizrautību"]
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format,webp&fit=crop&w=1200&q=70",
    text: "Paplašini redzesloku un iegūsti jaunas iespējas nākotnei",
    highlights: ["redzesloku", "iespējas", "nākotnei"]
  }
];

const reasons = [
  "Vairāk nekā 20 gadu pieredze",
  "Ceļojumu nozarē kopš 2018. gada",
  "Personīga komunikācija",
  "Individuāls atbalsts",
  "Godīga pieeja bez nereāliem solījumiem",
  "Fokusēšanās uz cilvēku, nevis pārdošanu"
];

const questions = [
  "Strādā daudz, bet ienākumi neaug tik ātri kā izdevumi.",
  "Vēlies vairāk ceļot, bet laiks vai finanses ierobežo.",
  "Gribētos papildu ienākumu avotu blakus pamatdarbam.",
  "Vēlies justies drošāk par savu nākotni.",
  "Jūti, ka vari vairāk, bet nezini, ar ko sākt.",
  "Esi noguris no tukšiem solījumiem internetā.",
  "Meklē reālu cilvēku, kurš var dalīties savā pieredzē.",
  "Vēlies strādāt no jebkuras vietas pasaulē, nevis tikai no ofisa."
];

const HELPFUL_TIPS_DATA = [
  {
    title: "Kā saplānot ceļojumu uz Turciju un ietaupīt līdz pat 30%?",
    category: "Ceļvedis",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format,webp&fit=crop&w=500&q=70",
    desc: "Praktiski padomi, kā piemeklēt izdevīgākās viesnīcas un lidojumus, un kādas kļūdas nepieļaut rezervācijas laikā."
  },
  {
    title: "5 lietas, ko ņemt vērā, pirmo reizi dodoties uz eksotisko Taizemi",
    category: "Padomi",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format,webp&fit=crop&w=500&q=70",
    desc: "No vietējās kultūras etiķetes līdz drošības pasākumiem un labākajiem ēdienu tirdziņiem. Sagatavojies savam Āzijas piedzīvojumam."
  },
  {
    title: "Maldīvu salas vai Dominikāna: kuru tropu kūrortu izvēlēties?",
    category: "Apskats",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format,webp&fit=crop&w=500&q=70",
    desc: "Salīdzinām cenas, pludmales, aktivitāšu klāstu un dabu, lai palīdzētu Tev izvēlēties piemērotāko paradīzes nostūri."
  },
  {
    title: "Kā ceļošana maina cilvēka domāšanu un paplašina dzīves redzesloku",
    category: "Pieredze",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format,webp&fit=crop&w=500&q=70",
    desc: "Dalos savā personīgajā pieredzē, kā jaunu kultūru un cilvēku iepazīšana palīdz iegūt iekšēju brīvību un mainīt skatījumu uz pasauli."
  }
];

// FACEBOOK_POSTS un TIKTOK_POSTS dati pārcelti uz /src/components/SocialMedia.tsx

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<number[]>([0]);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | null>(null);
  const [selectedTipIndex, setSelectedTipIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const reasons = lang === "LV" ? [
    "Vairāk nekā 20 gadu pieredze",
    "Ceļojumu nozarē kopš 2018. gada",
    "Personīga komunikācija",
    "Individuāls atbalsts",
    "Godīga pieeja bez nereāliem solījumiem",
    "Fokusēšanās uz cilvēku, nevis pārdošanu"
  ] : lang === "EN" ? [
    "Over 20 years of experience",
    "In the travel industry since 2018",
    "Personal communication",
    "Individual support",
    "Honest approach without unrealistic promises",
    "Focusing on the person, not the sale"
  ] : [
    "Более 20 лет опыта",
    "В индустрии туризма с 2018 года",
    "Личное общение",
    "Индивидуальная поддержка",
    "Честный подход без несбыточных обещаний",
    "Фокус на человеке, а не на продажах"
  ];

  const questions = lang === "LV" ? [
    "Strādā daudz, bet ienākumi neaug tik ātri kā izdevumi.",
    "Vēlies vairāk ceļot, bet laiks vai finanses ierobežo.",
    "Gribētos papildu ienākumu avotu blakus pamatdarbam.",
    "Vēlies justies drošāk par savu nākotni.",
    "Jūti, ka vari vairāk, bet nezini, ar ko sākt.",
    "Esi noguris no tukšiem solījumiem internetā.",
    "Meklē reālu cilvēku, kurš var dalīties savā pieredzē.",
    "Vēlies strādāt no jebkuras vietas pasaulē, nevis tikai no ofisa."
  ] : lang === "EN" ? [
    "Work hard, but income doesn't grow as fast as expenses.",
    "Want to travel more, but time or finances limit you.",
    "Would like an additional source of income alongside your main job.",
    "Want to feel more secure about your future.",
    "Feel like you can do more, but don't know where to start.",
    "Tired of empty promises on the internet.",
    "Looking for a real person who can share their experience.",
    "Want to work from anywhere in the world, not just the office."
  ] : [
    "Работаете много, но доходы не растут так быстро, как расходы.",
    "Хотите путешествовать больше, но время или финансы ограничивают.",
    "Хотели бы иметь дополнительный источник дохода помимо основной работы.",
    "Хотите чувствовать себя более уверенно в своем будущем.",
    "Чувствуете, что можете больше, но не знаете, с чего начать.",
    "Устали от пустых обещаний в интернете.",
    "Ищете реального человека, который может поделиться опытом.",
    "Хотите работать из любой точки мира, а не только из офиса."
  ];

  const benefits = [
    {
      title: t.home.advantages[0].title,
      desc: t.home.advantages[0].desc,
      icon: <Hourglass className="w-6 h-6 text-[#0D1B2A]" />,
      emoji: "⏳"
    },
    {
      title: t.home.advantages[1].title,
      desc: t.home.advantages[1].desc,
      icon: <Globe className="w-6 h-6 text-[#0D1B2A]" />,
      emoji: "🌍"
    },
    {
      title: t.home.advantages[2].title,
      desc: t.home.advantages[2].desc,
      icon: <Briefcase className="w-6 h-6 text-[#0D1B2A]" />,
      emoji: "💼"
    },
    {
      title: t.home.advantages[3].title,
      desc: t.home.advantages[3].desc,
      icon: <GraduationCap className="w-6 h-6 text-[#0D1B2A]" />,
      emoji: "📚"
    },
    {
      title: lang === "LV" ? "Starptautiska vide" : lang === "EN" ? "International Environment" : "Международная среда",
      desc: lang === "LV" ? "Iepazīt motivētus cilvēkus no dažādām valstīm." : lang === "EN" ? "Meet motivated people from different countries." : "Познакомиться с мотивированными людьми из разных стран.",
      icon: <Users className="w-6 h-6 text-[#0D1B2A]" />,
      emoji: "🤝"
    },
    {
      title: lang === "LV" ? "Lielāka drošības sajūta" : lang === "EN" ? "Greater Sense of Security" : "Большее чувство безопасности",
      desc: lang === "LV" ? "Mazāk atkarības no viena ienākumu avota." : lang === "EN" ? "Less dependence on a single income source." : "Меньше зависимости от одного источника дохода.",
      icon: <Compass className="w-6 h-6 text-[#0D1B2A]" />,
      emoji: "🛡️"
    }
  ];

  const translatedTips = lang === "LV" ? HELPFUL_TIPS_DATA : lang === "EN" ? [
    {
      title: "How to plan a trip to Turkey and save up to 30%?",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format,webp&fit=crop&w=500&q=70",
      desc: "Practical tips on how to find the best hotels and flights, and what mistakes to avoid during booking."
    },
    {
      title: "5 things to consider when traveling to exotic Thailand for the first time",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format,webp&fit=crop&w=500&q=70",
      desc: "From local cultural etiquette to safety measures and the best food markets. Prepare for your Asian adventure."
    },
    {
      title: "Maldives or Dominican Republic: which tropical resort to choose?",
      category: "Review",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format,webp&fit=crop&w=500&q=70",
      desc: "We compare prices, beaches, range of activities, and nature to help you choose your ideal piece of paradise."
    },
    {
      title: "How traveling changes a person's thinking and expands life horizons",
      category: "Experience",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format,webp&fit=crop&w=500&q=70",
      desc: "I share my personal experience on how meeting new cultures and people helps gain inner freedom and change your perspective on the world."
    }
  ] : [
    {
      title: "Как спланировать поездку в Турцию и сэкономить до 30%?",
      category: "Руководство",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format,webp&fit=crop&w=500&q=70",
      desc: "Практические советы о том, как найти лучшие отели и авиабилеты, и каких ошибок избегать при бронировании."
    },
    {
      title: "5 вещей, которые нужно учесть при первой поездке в экзотический Таиланд",
      category: "Советы",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format,webp&fit=crop&w=500&q=70",
      desc: "От местного культурного этикета до мер безопасности и лучших продовольственных рынков. Подготовьтесь к своему азиатскому приключению."
    },
    {
      title: "Мальдивы или Доминикана: какой тропический курорт выбрать?",
      category: "Обзор",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format,webp&fit=crop&w=500&q=70",
      desc: "Сравниваем цены, пляжи, выбор развлечений и природу, чтобы помочь вам выбрать идеальный уголок рая."
    },
    {
      title: "Как путешествия меняют мышление человека и расширяют жизненный кругозор",
      category: "Опыт",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format,webp&fit=crop&w=500&q=70",
      desc: "Делюсь личным опытом о том, как знакомство с новыми культурами и людьми помогает обрести внутреннюю свободу и изменить взгляд на мир."
    }
  ];

  // Soctīklu ierakstu loģika pārcelta uz /src/components/SocialMedia.tsx
  
  const renderHighlightedText = (text: string, highlights: string[]) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
      const isHighlighted = highlights.some(h => {
        const cleanH = h.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        return cleanWord === cleanH || cleanWord.includes(cleanH) || cleanH.includes(cleanWord);
      });
      return (
        <span
          key={index}
          className={isHighlighted ? "text-[#D4AF37]" : "text-white"}
        >
          {word}{index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };
  
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Video autoPlay was prevented:", err);
      });
    }
  }, []);

  useEffect(() => {
    // Preload next slide shortly after mounting
    const t = setTimeout(() => {
      setLoadedSlides(prev => Array.from(new Set([...prev, 1])));
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % HERO_SLIDES.length;
        setLoadedSlides(loaded => Array.from(new Set([...loaded, next, (next + 1) % HERO_SLIDES.length])));
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      {/* 1. Hero Section: Slideshow with texts */}
      <section className="relative h-[90vh] md:h-screen flex items-start justify-center overflow-hidden bg-[#0D1B2A] pt-36 sm:pt-44 md:pt-48">
        {/* Background Images with smooth, flicker-free crossfade */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            const isLoaded = loadedSlides.includes(idx);
            if (!isLoaded) return null;
            return (
              <img
                key={idx}
                src={slide.image}
                alt="Travel with Martins Background"
                referrerPolicy="no-referrer"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "low"}
                decoding="async"
                className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-in-out object-cover ${slide.positionClass || "object-center"} ${
                  isActive 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-105 pointer-events-none"
                }`}
              />
            );
          })}
          {/* Subtle background dimming to keep text readable without a banner */}
          <div className="absolute inset-0 bg-[#0D1B2A]/40 pointer-events-none" />
        </div>

        {/* Top-right Contact Info Bar - shifted up */}
        <div className="absolute top-14 sm:top-20 right-6 md:right-12 z-20 flex flex-col sm:flex-row gap-1.5 sm:gap-3 items-end sm:items-center">
          <a 
            href="tel:+37127061369" 
            className="flex items-center gap-2 bg-[#0D1B2A]/90 hover:bg-[#D4AF37] hover:text-[#0D1B2A] border border-white/10 px-4 py-2 rounded-full shadow-lg transition-all group font-montserrat mt-[8px] sm:mt-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#0D1B2A]" />
            <span className="text-white text-[11px] font-medium tracking-wider group-hover:text-[#0D1B2A]">+371 27061369</span>
          </a>
          <a 
            href="https://wa.me/37127061369" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#0D1B2A]/90 hover:bg-[#25D366] hover:text-white border border-white/10 px-4 py-2 rounded-full shadow-lg transition-all group font-montserrat"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white fill-current">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.978C16.584 1.9 14.111.875 11.487.875c-5.44 0-9.865 4.42-9.869 9.861-.001 1.761.464 3.48 1.346 5.011l-.984 3.591 3.678-.964zm11.233-5.97c-.3-.149-1.772-.875-2.046-.975-.276-.101-.476-.149-.676.149-.2.3-.775.976-.95 1.174-.175.2-.35.224-.65.074-1.208-.603-2.003-1.063-2.784-2.404-.207-.356-.02-.207.163-.521.183-.314.09-.548-.045-.697-.135-.135-1.01-2.433-1.383-3.33-.364-.874-.736-.755-.138-.857c.22-.041.44-.092.518-.092s.149.02.276.149c.125.127.525 1.275.575 1.373.05.1.082.215.015.348-.067.135-.1.224-.2.348-.1.127-.21.284-.3.38-.1.1-.205.21-.09.41.436.758 1.011 1.393 1.696 1.887.834.6 1.547.888 2.11 1.015.3.067.575.045.795.012.24-.035.74-.303.844-.597.104-.294.104-.548.073-.597-.033-.05-.125-.08-.425-.23z"/>
            </svg>
            <span className="text-white text-[11px] font-medium tracking-wider group-hover:text-white">+371 27061369</span>
          </a>
          <a 
            href="mailto:travelwithmartinss@gmail.com" 
            className="flex items-center gap-2 bg-[#0D1B2A]/90 hover:bg-[#D4AF37] hover:text-[#0D1B2A] border border-white/10 px-4 py-2 rounded-full shadow-lg transition-all group font-montserrat"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#0D1B2A]" />
            <span className="text-white text-[11px] font-medium tracking-wider group-hover:text-[#0D1B2A]">travelwithmartinss@gmail.com</span>
          </a>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="w-full max-w-3xl space-y-4 flex flex-col items-center"
            >
              <span className="bg-[#D4AF37] text-[#0D1B2A] text-[9px] md:text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-md inline-block">
                Travel with Martins
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight leading-[1.2] uppercase text-center drop-shadow-xl">
                {renderHighlightedText(
                  t.home.heroSlides[currentSlide]?.text || "",
                  t.home.heroSlides[currentSlide]?.highlights || []
                )}
              </h1>
              
              <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto opacity-80" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Constant buttons on the left side of the background images */}
        <div className="absolute bottom-24 left-6 md:left-12 z-20 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              const target = document.getElementById("sadarbiba-section");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-[#D4AF37] text-[#0D1B2A] font-bold text-xs uppercase tracking-widest rounded-none hover:bg-white hover:text-[#0D1B2A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>{lang === "LV" ? "Uzzini, kā tas darbojas" : lang === "EN" ? "Find out how it works" : "Узнайте, как это работает"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              const target = document.getElementById("sazina");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-none hover:bg-white hover:text-[#0D1B2A] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer animate-pulse hover:animate-none"
          >
            <span>{lang === "LV" ? "Pieteikties Zoom prezentācijai" : lang === "EN" ? "Apply for Zoom presentation" : "Записаться на презентацию Zoom"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide dots indicators in the bottom-right corner on mobile, bottom-left on desktop */}
        <div className="absolute bottom-16 right-6 sm:bottom-10 sm:left-6 sm:right-auto md:left-12 z-20 flex space-x-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? "bg-[#D4AF37] w-8" : "bg-white/40 hover:bg-white"
              }`}
              title={`Slaids ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* 2. Par mani (Pilns saturs integrēts sākumlapā) */}
      <section id="par-mani-section" className="py-14 px-6 max-w-7xl mx-auto space-y-14 scroll-mt-24">
        
        {/* Virsraksts un stāsts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#0D1B2A]/5 px-3 py-1 rounded inline-block">
              {t.home.aboutBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-[#0D1B2A] uppercase">
              {t.home.aboutSubtitle}
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37]" />

            <div className="space-y-4 text-[#5A5854] text-sm sm:text-base leading-relaxed">
              <div className="space-y-4 mb-6 pb-6 border-b border-[#EAE6DD]">
                <p className="font-semibold text-base text-[#0D1B2A]">
                  {lang === "LV" 
                    ? "Vai esi kādreiz aizdomājies, ka dzīvei vajadzētu piedāvāt ko vairāk par darbu, rēķiniem un gaidīšanu uz nākamo atvaļinājumu? Daudzi cilvēki šodien meklē:"
                    : lang === "EN"
                    ? "Have you ever thought that life should offer more than work, bills, and waiting for the next vacation? Many people today are looking for:"
                    : "Вы когда-нибудь задумывались, что жизнь должна предлагать нечто большее, чем просто работа, счета и ожидание следующего отпуска? Многие люди сегодня ищут:"}
                </p>
                <div className="space-y-2 pl-2 text-[#0D1B2A] font-medium text-sm sm:text-base">
                  {(lang === "LV" ? [
                    "papildu ienākumu iespējas",
                    "vairāk laika ģimenei",
                    "iespēju biežāk ceļot",
                    "lielāku finansiālo drošību",
                    "dzīvi ar vairāk izvēles iespējām"
                  ] : lang === "EN" ? [
                    "additional income opportunities",
                    "more time for family",
                    "opportunity to travel more often",
                    "greater financial security",
                    "a life with more choices"
                  ] : [
                    "дополнительные возможности заработка",
                    "больше времени для семьи",
                    "возможность путешествовать чаще",
                    "большую финансовую безопасность",
                    "жизнь с большим количеством возможностей выбора"
                  ]).map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#D4AF37] font-bold text-lg">✓</span> {item}
                    </div>
                  ))}
                </div>
                <p className="font-semibold text-[#0D1B2A]">
                  {lang === "LV"
                    ? "Ja arī Tu meklē pārmaiņas, iespējams, šī informācija būs vērtīga arī Tev."
                    : lang === "EN"
                    ? "If you too are looking for change, perhaps this information will be valuable to you."
                    : "Если вы тоже ищете перемен, возможно, эта информация будет для вас ценной."}
                </p>
              </div>

              <p className="font-semibold text-lg text-[#0D1B2A] border-l-4 border-[#D4AF37] pl-4">
                {t.home.aboutIntro}
              </p>
              <p className="leading-relaxed text-[#5A5854]">
                {t.home.aboutBody}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 justify-center max-w-md mx-auto w-full">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#EAE6DD] bg-[#F2ECE0]/20">
              <img
                src="https://pub-5eb70b89ca2248c8bdc564aeb0e101f5.r2.dev/piesakies-bezmaksas-konsultacijai.webp"
                alt="Piesakies bezmaksas konsultācijai"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#EAE6DD] bg-[#F2ECE0]/20">
              <img
                src="https://pub-5eb70b89ca2248c8bdc564aeb0e101f5.r2.dev/celo-vairak-nopelni-vairak.webp"
                alt="Ceļo vairāk, nopelni vairāk"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Centered Quote Card */}
        <div className="max-w-4xl mx-auto w-full pt-4">
          <div className="font-medium text-[#0D1B2A] bg-[#F2ECE0]/50 p-6 sm:p-10 rounded-2xl border-l-4 sm:border-l-0 sm:border-y-2 border-[#D4AF37] leading-relaxed shadow-sm text-center text-base sm:text-lg italic">
            "{t.home.aboutQuote}"
          </div>
        </div>
      </section>

      {/* 4.2. Vai atpazīsti sevi (pārnesta virs Sadarbības process) */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl border border-[#EAE6DD] space-y-8 shadow-sm bg-gradient-to-b from-[#D4AF37] to-white">
          <div className="space-y-2 text-center">
            <span className="text-xs font-bold text-[#0D1B2A]/70 uppercase tracking-wider block">
              {lang === "LV" ? "Pārdomām" : lang === "EN" ? "For reflection" : "Для размышления"}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-[#0D1B2A] tracking-tight uppercase">
              {lang === "LV" ? "Vai atpazīsti sevi?" : lang === "EN" ? "Do you recognize yourself?" : "Узнаете себя?"}
            </h2>
            <p className="text-xs sm:text-sm text-[#0D1B2A]/90 font-medium">
              {lang === "LV" 
                ? "Varbūt Tev ir pazīstamas šīs sajūtas...." 
                : lang === "EN" 
                ? "Perhaps you are familiar with these feelings...." 
                : "Возможно, вам знакомы эти чувства...."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/90 backdrop-blur-xs p-4 rounded-xl border border-[#EAE6DD]/30 shadow-xs hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-5 h-5 border border-[#0D1B2A]/30 rounded-md bg-white flex-shrink-0 mt-0.5 flex items-center justify-center font-bold text-xs" />
                <span className="text-xs sm:text-sm text-[#0D1B2A]/80 font-semibold">{question}</span>
              </div>
            ))}
          </div>

          <p className="text-center font-semibold text-[#0D1B2A] text-sm pt-4 border-t border-[#F2ECE0]/20">
            {lang === "LV"
              ? "Ja kaut viens no šiem punktiem Tev šķiet pazīstams, iespējams, esi nonācis īstajā vietā."
              : lang === "EN"
              ? "If at least one of these points feels familiar to you, you might have come to the right place."
              : "Если хотя бы один из этих пунктов кажется вам знакомым, возможно, вы попали в нужное место."}
          </p>
        </div>
      </section>

      {/* 4. Kā notiek sadarbība Preview */}
      <section id="sadarbiba-section" className="py-8 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="p-8 md:p-12 rounded-3xl border border-[#EAE6DD] space-y-12 shadow-sm bg-gradient-to-b from-[#0D1B2A] to-white">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block">
              {t.home.stepsBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight uppercase">
              {t.home.stepsTitle}
            </h2>
            <p className="text-sm text-white/90">
              {t.home.stepsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/95 border border-[#EAE6DD]/30 p-8 rounded-2xl relative hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300 text-[#0D1B2A] shadow-xs">
              <span className="absolute top-4 right-4 text-4xl font-display font-black text-[#D4AF37]/30">01</span>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 font-display">{t.home.steps[0].title}</h3>
              <p className="text-xs text-[#0D1B2A]/85 leading-relaxed">
                {t.home.steps[0].desc}
              </p>
            </div>

            <div className="bg-white/95 border border-[#EAE6DD]/30 p-8 rounded-2xl relative hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300 text-[#0D1B2A] shadow-xs">
              <span className="absolute top-4 right-4 text-4xl font-display font-black text-[#D4AF37]/30">02</span>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 font-display">{t.home.steps[1].title}</h3>
              <p className="text-xs text-[#0D1B2A]/85 leading-relaxed">
                {t.home.steps[1].desc}
              </p>
            </div>

            <div className="bg-white/95 border border-[#EAE6DD]/30 p-8 rounded-2xl relative hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300 text-[#0D1B2A] shadow-xs">
              <span className="absolute top-4 right-4 text-4xl font-display font-black text-[#D4AF37]/30">03</span>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 font-display">{t.home.steps[2].title}</h3>
              <p className="text-xs text-[#0D1B2A]/85 leading-relaxed">
                {t.home.steps[2].desc}
              </p>
            </div>

            <div className="bg-white/95 border border-[#EAE6DD]/30 p-8 rounded-2xl relative hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300 text-[#0D1B2A] shadow-xs">
              <span className="absolute top-4 right-4 text-4xl font-display font-black text-[#D4AF37]/30">04</span>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 font-display">{t.home.steps[3].title}</h3>
              <p className="text-xs text-[#0D1B2A]/85 leading-relaxed">
                {t.home.steps[3].desc}
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/sadarbiba"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D1B2A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-all rounded-none shadow-md"
            >
              <span>{lang === "LV" ? "Uzzināt vairāk par sadarbību" : lang === "EN" ? "Learn more about cooperation" : "Узнать больше о сотрудничестве"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4.1. Kādas priekšrocības dod ceļošana */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-[#EAE6DD] p-8 md:p-12 rounded-3xl space-y-10 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />

          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
              {lang === "LV" ? "Ieguvumi un iespējas" : lang === "EN" ? "Benefits and Opportunities" : "Преимущества и возможности"}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0D1B2A] tracking-tight uppercase">
              {lang === "LV" ? "Kādas priekšrocības dod ceļošana" : lang === "EN" ? "What benefits does travel bring" : "Какие преимущества дает путешествие"}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5854] leading-relaxed">
              {lang === "LV" 
                ? "Ceļošana un sadarbība var dot daudz vairāk nekā tikai skaistas fotogrāfijas. Tas ir jauns dzīvesveids un iespējas. Tieši tāpēc šodien mans mērķis ir palīdzēt cilvēkiem ieraudzīt vairāk iespēju nekā viņi redz šobrīd." 
                : lang === "EN" 
                ? "Traveling and cooperation can bring much more than just beautiful photos. It is a new lifestyle and opportunities. That is why today my goal is to help people see more opportunities than they currently see." 
                : "Путешествия и сотрудничество могут дать гораздо больше, чем просто красивые фотографии. Это новый образ жизни и возможности. Именно поэтому сегодня моя цель — помочь людям увидеть больше возможностей, чем они видят сейчас."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-[#D4AF37]/30 to-white border border-[#EAE6DD] p-6 rounded-2xl hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#0D1B2A]/5 rounded-lg flex items-center justify-center text-[#0D1B2A]">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0D1B2A]">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-[#5A5854] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.5 Kāpēc cilvēki izvēlas sadarboties ar mani? (Pārvietots un stilizēts unikāli virs Galamērķiem) */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#FAF9F5] to-[#F2ECE0] border border-[#D4AF37]/30 p-8 md:p-12 rounded-3xl space-y-10 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
              {lang === "LV" ? "Mana pieeja un principi" : lang === "EN" ? "My Approach and Principles" : "Мой подход и принципы"}
            </span>
            <h2 className="text-3xl font-display font-black text-[#0D1B2A] tracking-tight uppercase">
              {lang === "LV" ? "Kāpēc cilvēki izvēlas sadarboties ar mani?" : lang === "EN" ? "Why do people choose to cooperate with me?" : "Почему люди выбирают сотрудничество со мной?"}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5854] leading-relaxed">
              {lang === "LV" 
                ? "Mana darbība balstās uz vienkāršām un saprotamām vērtībām. Šeit nav vietas tukšiem solījumiem, tikai reālai pieredzei un pastāvīgam atbalstam." 
                : lang === "EN" 
                ? "My work is based on simple and understandable values. There is no room for empty promises here, only real experience and constant support." 
                : "Моя деятельность основана на простых и понятных ценностях. Здесь нет места пустым обещаниям, только реальный опыт и постоянная поддержка."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white border-l-4 border-l-[#D4AF37] border-y border-r border-[#EAE6DD] p-5 rounded-r-2xl rounded-l-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300 flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 text-[#D4AF37] font-bold text-base">
                  ✓
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-xs sm:text-sm text-[#0D1B2A] font-semibold leading-snug">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Galamērķi Preview (Horizontālais ritināmais saraksts ar visiem galamērķiem) */}
      <section className="py-8 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            {lang === "LV" ? "Piedāvājumi" : lang === "EN" ? "Offers" : "Предложения"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0D1B2A] tracking-tight">
            {lang === "LV" ? "Populārākie galamērķi" : lang === "EN" ? "Popular Destinations" : "Популярные направления"}
          </h2>
          <p className="text-sm text-[#5A5854]">
            {lang === "LV" 
              ? "Katram cilvēkam ideālais ceļojums ir atšķirīgs. Palīdzu izvēlēties galamērķi atbilstoši Tavām vēlmēm, budžetam un ceļojuma mērķim." 
              : lang === "EN" 
              ? "The ideal trip is different for everyone. I help choose a destination according to your wishes, budget, and travel goal." 
              : "Для каждого человека идеальное путешествие индивидуально. Помогаю выбрать направление в соответствии с вашими пожеланиями, бюджетом и целью поездки."}
          </p>
        </div>

        {/* Responsive grid matching Noderīgi padomi exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.slice(0, 4).map((item) => {
            const isSelected = selectedDestinationId === item.id;
            const transItem = t.destinations.items[item.id as keyof typeof t.destinations.items] || {
              name: item.name,
              description: item.description,
              duration: item.duration,
              tags: item.tags
            };
            return (
              <article 
                key={item.id}
                onClick={() => setSelectedDestinationId(isSelected ? null : item.id)}
                className={`group bg-white border-2 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected 
                    ? "border-[#D4AF37] ring-4 ring-[#D4AF37]/10" 
                    : "border-[#EAE6DD] hover:border-[#D4AF37]/30"
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-zinc-100">
                  <img 
                    src={item.image} 
                    alt={transItem.name} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-[#0D1B2A]/80 backdrop-blur-md text-[#D4AF37] px-2.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                    <span>{item.flag}</span>
                    <span>{transItem.name}</span>
                  </span>
                </div>
                <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#0D1B2A] group-hover:text-[#D4AF37] transition-colors line-clamp-1 leading-snug">{transItem.name}</h3>
                    <p className="text-xs text-[#5A5854] leading-relaxed line-clamp-2">
                      {transItem.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F2ECE0] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-[#8C8A84] block font-bold uppercase tracking-wider leading-none">
                        {lang === "LV" ? "Ilgums" : lang === "EN" ? "Duration" : "Длительность"}
                      </span>
                      <span className="text-xs font-semibold text-[#0D1B2A]">{transItem.duration}</span>
                    </div>
                    <Link
                      to="/galamerki"
                      onClick={(e) => e.stopPropagation()} // Prevent card click trigger
                      className="px-3.5 py-1.5 bg-[#F2ECE0] text-[#0D1B2A] text-[10px] font-bold hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-all rounded"
                    >
                      {lang === "LV" ? "Uzzināt vairāk" : lang === "EN" ? "Learn more" : "Узнать больше"}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/galamerki"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#0D1B2A] text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#0D1B2A] active:bg-white transition-all rounded-none shadow-md"
          >
            <span>{lang === "LV" ? "Skatīt visus galamērķus" : lang === "EN" ? "View all destinations" : "Посмотреть все направления"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. Noderīgi padomi */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            {lang === "LV" ? "Noderīgi padomi" : lang === "EN" ? "Useful Tips" : "Полезные советы"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0D1B2A] tracking-tight uppercase">
            {lang === "LV" ? "Ceļveži, iedvesma un ieteikumi" : lang === "EN" ? "Guides, Inspiration and Recommendations" : "Путеводители, вдохновение и рекомендации"}
          </h2>
          <p className="text-sm text-[#5A5854]">
            {lang === "LV" 
              ? "Es regulāri dalos ar savu pieredzi, ceļojumu ieteikumiem un praktiskiem padomiem, lai palīdzētu Tev pieņemt pārdomātus lēmumus un iedvesmotu jauniem piedzīvojumiem." 
              : lang === "EN" 
              ? "I regularly share my experience, travel tips, and practical advice to help you make informed decisions and inspire new adventures." 
              : "Я регулярно делюсь своим опытом, советами по путешествиям и практическими рекомендациями, чтобы помочь вам принимать взвешенные решения и вдохновлять на новые приключения."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {translatedTips.map((post, index) => {
            const isSelected = selectedTipIndex === index;
            return (
              <div 
                key={index} 
                onClick={() => setSelectedTipIndex(isSelected ? null : index)}
                className={`group bg-white border-2 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected 
                    ? "border-[#D4AF37] ring-4 ring-[#D4AF37]/10" 
                    : "border-[#EAE6DD] hover:border-[#D4AF37]/30"
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-zinc-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-[#0D1B2A] text-[#D4AF37] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-sm sm:text-base text-[#0D1B2A] group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs text-[#5A5854] leading-relaxed line-clamp-2">
                      {post.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F2ECE0] flex items-center justify-between text-[10px] text-[#8C8A84] font-bold">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#D4AF37]" />
                      <span>{lang === "LV" ? "Jūlijs, 2026" : lang === "EN" ? "July, 2026" : "Июль, 2026"}</span>
                    </div>
                    <Link 
                      to="/blogs" 
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#D4AF37] hover:underline uppercase tracking-wider text-[9px]"
                    >
                      {lang === "LV" ? "Lasīt vairāk" : lang === "EN" ? "Read more" : "Читать далее"}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#0D1B2A] text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#0D1B2A] active:bg-white transition-all rounded-none shadow-md"
          >
            <span>{lang === "LV" ? "Apmeklēt blogu" : lang === "EN" ? "Visit Blog" : "Посетить блог"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. BUJ Preview (Pirmie 3 jautājumi - Pilnībā interaktīvi ar mazākām atstarpēm) */}
      <section className="bg-white py-8 px-6 border-t border-b border-[#EAE6DD]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0D1B2A] tracking-tight uppercase">
              {t.faq.title}
            </h2>
          </div>

          <div className="space-y-2.5 mb-10">
            {t.faq.items.slice(0, 3).map((item, index) => {
              const id = index + 1;
              const isOpen = openFaqId === id;
              return (
                <div 
                  key={id}
                  className="bg-[#F7F7F7] border border-[#EAE6DD] rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : id)}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="font-display font-bold text-sm sm:text-base text-[#0D1B2A] leading-snug">
                        {id}. {item.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#8C8A84] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#D4AF37]" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
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

          <div className="text-center">
            <Link
              to="/buj"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#0D1B2A] text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#0D1B2A] active:bg-white transition-all rounded-none shadow-md"
            >
              <span>{lang === "LV" ? "Lasīt visus BUJ" : lang === "EN" ? "Read all FAQ" : "Прочитать все ответы"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Klientu atsauksmes (Scroller) - Pagaidām slēpts */}
      {/* <ReviewsCarousel /> */}

      {/* 8.5. Seko man Facebook un Tiktok (Sociālie tīkli) - Pagaidām slēpts, bet viegli atjaunojams */}
      {/* <SocialMedia /> */}

      {/* 9. Noslēguma aicinājuma bloks ar fona video */}
      <section className="relative w-full py-20 px-6 overflow-hidden flex items-center justify-center bg-[#0D1B2A] text-white text-center">
        {/* Fona video bez poster atribūta - ātrākai un nepiespiestai ielādei */}
        <video
          ref={videoRef}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
          disablePictureInPicture={true}
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-85"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-tropical-beach-and-turquoise-water-43110-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-tropical-beach-with-palm-trees-14300-large.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/sfco-1581457816174/1080p.mp4" type="video/mp4" />
          {lang === "LV" ? "Tava pārlūkprogramma neatbalsta video elementu." : lang === "EN" ? "Your browser does not support the video tag." : "Ваш браузер не поддерживает видео."}
        </video>

        {/* Caurspīdīgāks pārklājums kontrastam un augstai video redzamībai */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/70 via-[#0D1B2A]/40 to-[#0D1B2A]/20 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              {lang === "LV" ? "Sper pirmo soli šodien" : lang === "EN" ? "Take the first step today" : "Сделайте первый шаг сегодня"}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-tight">
              {lang === "LV" ? (
                <>Atklāj pasauli, <br className="hidden md:inline" /> kas <span className="text-[#D4AF37]">Tevi gaida</span></>
              ) : lang === "EN" ? (
                <>Discover the world <br className="hidden md:inline" /> that <span className="text-[#D4AF37]">awaits you</span></>
              ) : (
                <>Откройте для себя мир, <br className="hidden md:inline" /> который <span className="text-[#D4AF37]">вас ждет</span></>
              )}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#ECEAE4]/95 max-w-2xl mx-auto leading-relaxed font-light">
              {lang === "LV" 
                ? "Ceļojumi nav tikai galamērķi – tā ir iespēja paplašināt savu redzesloku, izjust patiesu brīvību un radīt stāstus, kurus atcerēties visu mūžu. Es palīdzēšu Tev izvēlēties piemērotākos ceļus, saplānot katru detaļu un nodrošināšu bezrūpīgu atbalstu katrā solī." 
                : lang === "EN" 
                ? "Travel is not just destinations – it is an opportunity to expand your horizons, experience true freedom, and create stories to remember for a lifetime. I will help you choose the best paths, plan every detail, and provide carefree support at every step." 
                : "Путешествия – это не просто направления, это возможность расширить свой кругозор, ощутить истинную свободу и создать истории, которые запомнятся на всю жизнь. Я помогу вам выбрать наиболее подходящие пути, спланировать каждую деталь и обеспечу беззаботную поддержку на каждом шагу."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-t border-white/10 pt-6 space-y-4 max-w-2xl mx-auto"
          >
            <h3 className="text-lg md:text-xl font-display font-bold text-[#D4AF37] uppercase tracking-wide">
              {lang === "LV" 
                ? "Katrs lielais piedzīvojums sākas ar vienu lēmumu" 
                : lang === "EN" 
                ? "Every great adventure starts with a single decision" 
                : "Каждое великое приключение начинается с одного решения"}
            </h3>
            <p className="text-xs sm:text-sm text-[#ECEAE4]/90 leading-relaxed font-light">
              {lang === "LV" 
                ? "Ja arī Tu vēlies ceļot vairāk, iepazīt pasauli, satikt interesantus cilvēkus vai vienkārši uzzināt par iespējām, kas var sniegt lielāku brīvību, priecāšos ar Tevi iepazīties. Sazinies ar mani jau šodien un sper pirmo soli pretī jaunai piedzīvojumu pilnai pieredzei!" 
                : lang === "EN" 
                ? "If you also want to travel more, get to know the world, meet interesting people or simply learn about opportunities that can provide greater freedom, I will be happy to meet you. Contact me today and take the first step towards a new, adventure-filled experience!" 
                : "Если вы тоже хотите больше путешествовать, познавать мир, встречать интересных людей или просто узнать о возможностях, которые могут дать больше свободы, я буду рад знакомству. Свяжитесь со мной уже сегодня и сделайте первый шаг навстречу новому, полному приключений опыту!"}
            </p>
          </motion.div>

          <div className="pt-4">
            <button
              onClick={() => {
                const target = document.getElementById("sazina");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-[#D4AF37] text-[#0D1B2A] font-bold text-xs uppercase tracking-widest rounded-none hover:bg-white hover:text-[#0D1B2A] transition-all shadow-lg cursor-pointer animate-pulse hover:animate-none"
            >
              {lang === "LV" ? "Pieteikties Zoom prezentācijai" : lang === "EN" ? "Apply for Zoom Presentation" : "Записаться на Zoom-презентацию"}
            </button>
          </div>
        </div>
      </section>

      {/* Statistikas bloks (statisks un pārvietots uz lapas apakšu) */}
      <StatsCounter />

      {/* 10. Kontakti un saziņas forma */}
      <ContactForm />

      {/* Sīkdatņu paziņojuma logs */}
      <CookieConsent />
    </div>
  );
}
