import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, Bookmark, Sparkles, Home } from "lucide-react";
import SectionNavButtons from "../components/SectionNavButtons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Blog() {
  const { lang } = useLanguage();
  const t = translations[lang].blog;

  const topics = lang === "LV" ? [
    "Populārākajiem ceļojumu galamērķiem;",
    "Viesnīcu un kūrortu apskatiem;",
    "Ceļošanas padomiem un knifiem;",
    "Sezonālajiem karstajiem piedāvājumiem;",
    "Personīgo pieredzi un stāstiem no ceļojumiem;",
    "Iespējām ceļot gudrāk un izdevīgāk."
  ] : lang === "EN" ? [
    "Most popular travel destinations;",
    "Hotel and resort reviews;",
    "Travel tips and tricks;",
    "Seasonal hot deals;",
    "Personal experiences and travel stories;",
    "Opportunities to travel smarter and cheaper."
  ] : [
    "Самые популярные туристические направления;",
    "Обзоры отелей и курортов;",
    "Советы и хитрости для путешествий;",
    "Сезонные горячие предложения;",
    "Личный опыт и истории путешествий;",
    "Возможности путешествовать умнее и дешевле."
  ];

  const upcomingPosts = lang === "LV" ? [
    {
      title: "Kā saplānot ceļojumu uz Turciju un ietaupīt līdz pat 30%?",
      desc: "Praktiski padomi, kā piemeklēt izdevīgākās viesnīcas un lidojumus, un kādas kļūdas nepieļaut rezervācijas laikā.",
      category: "Ceļvedis",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "5 lietas, ko ņemt vērā, pirmo reizi dodoties uz eksotisko Taizemi",
      desc: "No vietējās kultūras etiķetes līdz drošības pasākumiem un labākajiem ēdienu tirdziņiem. Sagatavojies savam Āzijas piedzīvojumam.",
      category: "Padomi",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "Maldīvu salas vai Dominikāna: kuru tropu kūrortu izvēlēties?",
      desc: "Salīdzinām cenas, pludmales, aktivitāšu klāstu un dabu, lai palīdzētu Tev izvēlēties piemērotāko paradīzes nostūri.",
      category: "Apskats",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "Kā ceļošana maina cilvēka domāšanu un paplašina dzīves redzesloku",
      desc: "Dalos savā personīgajā pieredzē, kā jaunu kultūru un cilvēku iepazīšana palīdz iegūt iekšēju brīvību un mainīt skatījumu uz pasauli.",
      category: "Pieredze",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format,webp&fit=crop&w=500&q=70"
    }
  ] : lang === "EN" ? [
    {
      title: "How to plan a trip to Turkey and save up to 30%?",
      desc: "Practical tips on finding the most affordable hotels and flights, and what mistakes to avoid during booking.",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "5 things to consider when traveling to exotic Thailand for the first time",
      desc: "From local cultural etiquette to safety measures and the best food markets. Prepare for your Asian adventure.",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "Maldives or Dominican Republic: which tropical resort to choose?",
      desc: "We compare prices, beaches, activities, and nature to help you pick the perfect slice of paradise.",
      category: "Review",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "How travel changes human thinking and broadens life's horizons",
      desc: "I share my personal experience on how meeting new cultures and people helps gain inner freedom and shift perspective on the world.",
      category: "Experience",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format,webp&fit=crop&w=500&q=70"
    }
  ] : [
    {
      title: "Как спланировать поездку в Турцию и сэкономить до 30%?",
      desc: "Практические советы по поиску наиболее доступных отелей и авиабилетов, а также каких ошибок следует избегать при бронировании.",
      category: "Руководство",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "5 вещей, которые стоит учесть при первой поездке в экзотический Таиланд",
      desc: "От местного культурного этикета до мер безопасности и лучших продовольственных рынков. Подготовьтесь к азиатскому приключению.",
      category: "Советы",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "Мальдивы или Доминикана: какой тропический курорт выбрать?",
      desc: "Сравниваем цены, пляжи, виды деятельности и природу, чтобы помочь вам выбрать идеальный уголок рая.",
      category: "Обзор",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format,webp&fit=crop&w=500&q=70"
    },
    {
      title: "Как путешествия меняют человеческое мышление и расширяют кругозор",
      desc: "Делюсь личным опытом о том, как знакомство с новыми культурами и людьми помогает обрести внутреннюю свободу и изменить взгляд на мир.",
      category: "Опыт",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format,webp&fit=crop&w=500&q=70"
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
        <div className="text-center flex flex-col items-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#0D1B2A]/5 px-3 py-1 rounded inline-block">
            {lang === "LV" ? "Pieredze, iedvesma un ieteikumi" : lang === "EN" ? "Experience, inspiration & advice" : "Опыт, вдохновение и советы"}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#0D1B2A] uppercase">
            {lang === "LV" ? "Blogs un padomi" : lang === "EN" ? "Blog & Tips" : "Блог и советы"}
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-2" />
          <p className="text-sm sm:text-base text-[#5A5854] max-w-2xl mx-auto leading-relaxed pt-4">
            {lang === "LV" 
              ? "Es regulāri dalos ar savu pieredzi, ceļojumu ieteikumiem un praktiskiem padomiem. Mans mērķis ir palīdzēt Tev pieņemt pārdomātus lēmumus un iedvesmot jauniem piedzīvojumiem." 
              : lang === "EN" 
              ? "I regularly share my experience, travel recommendations, and practical tips. My goal is to help you make informed decisions and inspire new adventures." 
              : "Я регулярно делюсь своим опытом, рекомендациями по путешествиям и практическими советами. Моя цель — помочь вам принять взвешенные решения и вдохновить на новые приключения."}
          </p>
        </div>

        {/* Par ko būs blogs */}
        <div className="bg-white border border-[#EAE6DD] p-8 md:p-10 rounded-3xl space-y-6 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "LV" ? "Ko atradīsi šeit?" : lang === "EN" ? "What will you find here?" : "Что вы здесь найдете?"}</span>
          </h2>
          <p className="text-sm text-[#5A5854] leading-relaxed">
            {lang === "LV" 
              ? "Šeit tiks apkopoti raksti un apskati par tēmām, kas interesē ikvienu ceļotāju un brīvības meklētāju:" 
              : lang === "EN" 
              ? "Here we will collect articles and reviews on topics of interest to every traveler and freedom seeker:" 
              : "Здесь будут собраны статьи и обзоры на темы, интересующие каждого путешественника и искателя свободы:"}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#5A5854] pl-2">
            {topics.map((topic, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-[#F7F7F7] border border-[#EAE6DD] p-3 rounded-xl">
                <Bookmark className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="font-semibold">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gaidāmie raksti (Pre-build cards) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#EAE6DD] pb-4">
            <h3 className="text-xl font-display font-bold text-[#0D1B2A]">
              {lang === "LV" ? "Gaidāmie raksti" : lang === "EN" ? "Upcoming Articles" : "Предстоящие статьи"}
            </h3>
            <span className="text-xs bg-[#D4AF37]/20 text-[#0D1B2A] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === "LV" ? "Sagatavošanā" : lang === "EN" ? "In Preparation" : "В подготовке"}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingPosts.map((post, index) => (
              <div 
                key={index} 
                className="group bg-white border border-[#EAE6DD] rounded-2xl overflow-hidden hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-video overflow-hidden bg-zinc-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[#0D1B2A] text-[#D4AF37] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white text-[#0D1B2A] text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {lang === "LV" ? "Lasīt drīzumā" : lang === "EN" ? "Read Soon" : "Читать скоро"}
                    </span>
                  </div>
                </div>
                <div className="p-4.5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-sm text-[#0D1B2A] group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-[11px] text-[#5A5854] leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F2ECE0] flex items-center justify-between text-[9px] text-[#8C8A84] font-bold">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#D4AF37]" />
                      <span>{lang === "LV" ? "Jūlijs, 2026" : lang === "EN" ? "July, 2026" : "Июль, 2026"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      <span>{lang === "LV" ? "4 min lasīšanai" : lang === "EN" ? "4 min read" : "4 мин чтения"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apakšējā navigācija */}
        <SectionNavButtons />
      </div>
    </motion.div>
  );
}
