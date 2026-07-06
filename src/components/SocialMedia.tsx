import { Heart, ExternalLink, Facebook } from "lucide-react";
import { MAIN_LOGO_BASE64 } from "../logo-base64";
import { useLanguage } from "../context/LanguageContext";

const FACEBOOK_POSTS = [
  {
    id: "fb-1",
    author: "Travel with Martins",
    handle: "travelwithmartins.lv",
    date: "Pirms 2 dienām",
    text: "Tikko atgriezos no neaizmirstama brauciena un vēlos padalīties ar 3 lietām, kuras pilnībā mainīja manu skatījumu uz ceļojumu plānošanu. Ja arī Tu vēlies ceļot bez stresa, piesakies uz bezmaksas konsultāciju! 🌍✈️",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format,webp&fit=crop&w=400&q=65",
    likes: 124,
    comments: 18,
    shares: 8,
    url: "https://www.facebook.com/share/14iUDFF18v6/?mibextid=wwXIfr"
  },
  {
    id: "fb-2",
    author: "Travel with Martins",
    handle: "travelwithmartins.lv",
    date: "Pirms 5 dienām",
    text: "Vai zināji, ka ceļojumi un jauna pieredze ir vislabākais veids, kā investēt savā personīgajā izaugsmē? Katrs jauns galamērķis paplašina redzesloku un dod neatsveramu brīvības sajūtu. Seko līdzi maniem ieteikumiem! 📚✨",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format,webp&fit=crop&w=400&q=65",
    likes: 98,
    comments: 12,
    shares: 4,
    url: "https://www.facebook.com/share/14iUDFF18v6/?mibextid=wwXIfr"
  },
  {
    id: "fb-3",
    author: "Travel with Martins",
    handle: "travelwithmartins.lv",
    date: "Pirms 1 nedēļas",
    text: "Kāpēc izvēlēties sadarbību ar mani? Tāpēc, ka es dalos tikai ar reālu, paša pārbaudītu pieredzi jau kopš 2018. gada. Nav tukšu solījumu – tikai godīgs atbalsts un labākie risinājumi Taviem sapņu galamērķiem! 🤝🏝️",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format,webp&fit=crop&w=400&q=65",
    likes: 145,
    comments: 25,
    shares: 15,
    url: "https://www.facebook.com/share/14iUDFF18v6/?mibextid=wwXIfr"
  },
  {
    id: "fb-4",
    author: "Travel with Martins",
    handle: "travelwithmartins.lv",
    date: "Pirms 2 nedēļām",
    text: "Gatavi jaunam piedzīvojumam? Jūlijā plānojam vairākas bezmaksas Zoom prezentācijas, kurās pastāstīšu par populārākajiem galamērķiem un sadarbības iespējām. Raksti man PM vai piesakies mājaslapā! 🤝📲",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format,webp&fit=crop&w=400&q=65",
    likes: 87,
    comments: 21,
    shares: 6,
    url: "https://www.facebook.com/share/14iUDFF18v6/?mibextid=wwXIfr"
  }
];

const TIKTOK_POSTS = [
  {
    id: "tt-1",
    author: "Travel with Martins",
    handle: "@travelwithmartins",
    date: "Pirms 1 dienas",
    caption: "Kā es ceļoju 4 reizes gadā un vienlaikus veidoju ienākumus? 💸 Darot to, kas patīk! Noskaties līdz galam un uzzini manu noslēpumu. #celojumi #briviba #dzivesveids",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format,webp&fit=crop&w=400&q=65",
    views: "45.2K",
    likes: "3.4K",
    comments: 112,
    url: "https://tiktok.com"
  },
  {
    id: "tt-2",
    author: "Travel with Martins",
    handle: "@travelwithmartins",
    date: "Pirms 4 dienām",
    caption: "3 lietas, kuras ceļojumu aģentūras Tev nestāsta par ceļojumiem 🤫 Noņem rozā brilles un ceļo gudrāk! #travelhacks #tiemkaspatiikcelot #travelwithmartins",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format,webp&fit=crop&w=400&q=65",
    views: "28.1K",
    likes: "1.9K",
    comments: 84,
    url: "https://tiktok.com"
  },
  {
    id: "tt-3",
    author: "Travel with Martins",
    handle: "@travelwithmartins",
    date: "Pirms 6 dienām",
    caption: "Mans mīļākais galamērķis Eiropā, kas neliks iztērēt visu algu! 🏖️ Saglabā video, lai neazaudētu nākamajam atvaļinājumam! #budzetaatvalinajums #galamerki",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format,webp&fit=crop&w=400&q=65",
    views: "62.8K",
    likes: "5.1K",
    comments: 167,
    url: "https://tiktok.com"
  },
  {
    id: "tt-4",
    author: "Travel with Martins",
    handle: "@travelwithmartins",
    date: "Pirms 1 nedēļas",
    caption: "Kā pārvarēt bailes sākt kaut ko jaunu dzīvē? Mans stāsts par to, kā es izlēmu spert pirmo soli pirms 8 gadiem. #izaugsme #motivacija #iedvesma",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format,webp&fit=crop&w=400&q=65",
    views: "18.4K",
    likes: "1.2K",
    comments: 43,
    url: "https://tiktok.com"
  }
];

export default function SocialMedia() {
  const { lang } = useLanguage();

  const translatedFacebookPosts = FACEBOOK_POSTS.map(post => {
    let text = post.text;
    let date = post.date;
    if (lang === "EN") {
      if (post.id === "fb-1") {
        text = "Just returned from an unforgettable trip and want to share 3 things that completely changed my view on travel planning. If you also want to travel without stress, apply for a free consultation! 🌍✈️";
        date = "2 days ago";
      } else if (post.id === "fb-2") {
        text = "Did you know that travel and new experiences are the best way to invest in your personal growth? Every new destination expands your horizons and gives an invaluable sense of freedom. Follow my recommendations! 📚✨";
        date = "5 days ago";
      } else if (post.id === "fb-3") {
        text = "Why choose to cooperate with me? Because I share only real, self-verified experience since 2018. No empty promises - only honest support and the best solutions for your dream destinations! 🤝🏝️";
        date = "1 week ago";
      } else if (post.id === "fb-4") {
        text = "Ready for a new adventure? In July, we are planning several free Zoom presentations where I will talk about the most popular destinations and cooperation opportunities. Write me PM or apply on the website! 🤝📲";
        date = "2 weeks ago";
      }
    } else if (lang === "RU") {
      if (post.id === "fb-1") {
        text = "Только что вернулся из незабываемой поездки и хочу поделиться 3 вещами, которые полностью изменили мой взгляд на планирование путешествий. Если вы тоже хотите путешествовать без стресса, запишитесь на бесплатную консультацию! 🌍✈️";
        date = "2 дня назад";
      } else if (post.id === "fb-2") {
        text = "Знаете ли вы, что путешествия и новый опыт — это лучший способ инвестировать в свой личностный рост? Каждое новое направление расширяет кругозор и дает бесценное чувство свободы. Следите за моими рекомендациями! 📚✨";
        date = "5 дней назад";
      } else if (post.id === "fb-3") {
        text = "Почему стоит сотрудничать со мной? Потому что я делюсь только реальным, лично проверенным опытом с 2018 года. Никаких пустых обещаний — только честная поддержка и лучшие решения для направлений вашей мечты! 🤝🏝️";
        date = "1 неделю назад";
      } else if (post.id === "fb-4") {
        text = "Готовы к новому приключению? В июле мы планируем несколько бесплатных презентаций в Zoom, на которых я расскажу о самых популярных направлениях и возможностях сотрудничества. Пишите мне в ЛС или регистрируйтесь на сайте! 🤝📲";
        date = "2 недели назад";
      }
    }
    return { ...post, text, date };
  });

  const translatedTiktokPosts = TIKTOK_POSTS.map(post => {
    let caption = post.caption;
    let date = post.date;
    if (lang === "EN") {
      if (post.id === "tt-1") {
        caption = "How do I travel 4 times a year and build an income at the same time? 💸 Doing what I love! Watch till the end and find out my secret. #travel #freedom #lifestyle";
        date = "1 day ago";
      } else if (post.id === "tt-2") {
        caption = "3 things travel agencies don't tell you about traveling 🤫 Take off the rose-colored glasses and travel smarter! #travelhacks #smarttravel #travelwithmartins";
        date = "4 days ago";
      } else if (post.id === "tt-3") {
        caption = "My favorite destination in Europe that won't make you spend your whole salary! 🏖️ Save this video so you don't lose it for your next vacation! #budgettravel #destinations";
        date = "6 days ago";
      } else if (post.id === "tt-4") {
        caption = "How to overcome the fear of starting something new in life? My story of how I decided to take the first step 8 years ago. #growth #motivation #inspiration";
        date = "1 week ago";
      }
    } else if (lang === "RU") {
      if (post.id === "tt-1") {
        caption = "Как я путешествую 4 раза в год и одновременно создаю доход? 💸 Делая то, что люблю! Досмотрите до конца и узнайте мой секрет. #путешествия #свобода #образжизни";
        date = "1 день назад";
      } else if (post.id === "tt-2") {
        caption = "3 вещи, которые туристические агентства не говорят вам о путешествиях 🤫 Снимите розовые очки и путешествуйте умнее! #лайфхакидляпутешествий #умныепутешествия #travelwithmartins";
        date = "4 дня назад";
      } else if (post.id === "tt-3") {
        caption = "Мое любимое направление в Европе, которое не заставит вас потратить всю зарплату! 🏖️ Сохраните видео, чтобы не потерять его для следующего отпуска! #бюджетныйотпуск #направления";
        date = "6 дней назад";
      } else if (post.id === "tt-4") {
        caption = "Как преодолеть страх начать что-то новое в жизни? Моя история о том, как я решил сделать первый шаг 8 лет назад. #рост #мотивация #вдохновение";
        date = "1 неделю назад";
      }
    }
    return { ...post, caption, date };
  });

  return (
    <section className="py-8 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
          {lang === "LV" ? "Sociālie tīkli" : lang === "EN" ? "Social Networks" : "Социальные сети"}
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-[#0D1B2A] tracking-tight uppercase">
          {lang === "LV" ? "Seko man soctīklos" : lang === "EN" ? "Follow me on social media" : "Следите за мной в соцсетях"}
        </h2>
        <p className="text-sm text-[#5A5854]">
          {lang === "LV" 
            ? "Iedvesmojies, uzzini vērtīgus padomus un seko līdzi maniem ceļojumiem ikdienā. Spied uz kartītēm, lai atvērtu ierakstus un iesaistītos!" 
            : lang === "EN" 
            ? "Get inspired, learn valuable tips, and follow my journeys daily. Click on the cards to open posts and engage!" 
            : "Вдохновляйтесь, узнавайте ценные советы и следите за моими поездками каждый день. Нажимайте на карточки, чтобы открыть публикации и присоединиться!"}
        </p>
      </div>

      {/* Vertikālais izkārtojums - Facebook augšā, Tiktok zem tā */}
      <div className="space-y-12">
        
        {/* Facebook kolonna */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#EAE6DD] pb-4">
            <div className="w-10 h-10 bg-[#1877F2]/10 text-[#1877F2] rounded-full flex items-center justify-center">
              <Facebook className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-display font-black text-lg text-[#0D1B2A] uppercase">
                {lang === "LV" ? "Facebook Ieraksti" : lang === "EN" ? "Facebook Posts" : "Публикации на Facebook"}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {translatedFacebookPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#EAE6DD] rounded-2xl overflow-hidden hover:shadow-md hover:border-[#1877F2]/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* FB Card Header */}
                <div className="p-4 flex items-center gap-3 border-b border-[#F7F7F7]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5 border border-[#EAE6DD]/30 flex-shrink-0">
                    <img src={MAIN_LOGO_BASE64} alt="Travel with Martins Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#0D1B2A] block group-hover:text-[#1877F2] transition-colors">
                      {post.author}
                    </span>
                    <span className="text-[10px] text-[#8C8A84] block">{post.date}</span>
                  </div>
                </div>

                {/* FB Card Text */}
                <div className="p-4 flex-1">
                  <p className="text-xs text-[#5A5854] leading-relaxed line-clamp-3 mb-4">
                    {post.text}
                  </p>
                </div>

                {/* FB Card Image */}
                <div className="relative aspect-video overflow-hidden bg-zinc-100">
                  <img
                    src={post.image}
                    alt={`${post.author} - Facebook ieraksts par ceļojumu pieredzi`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>

                {/* FB Card Footer & Metrics */}
                <div className="p-4 bg-[#F7F7F7] border-t border-[#EAE6DD] flex items-center justify-between text-[11px] text-[#5A5854]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-[#E0245E] fill-current" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-xs">💬</span>
                      <span>{post.comments}</span>
                    </span>
                  </div>
                  <span className="text-[#1877F2] font-semibold flex items-center gap-1 group-hover:underline">
                    {lang === "LV" ? "Skatīt ierakstu" : lang === "EN" ? "View post" : "Посмотреть"} <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tiktok kolonna */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#EAE6DD] pb-4">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-display font-black text-xs">
              TT
            </div>
            <div>
              <h3 className="font-display font-black text-lg text-[#0D1B2A] uppercase">
                {lang === "LV" ? "TikTok Video" : lang === "EN" ? "TikTok Videos" : "Видео в TikTok"}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {translatedTiktokPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#EAE6DD] rounded-2xl overflow-hidden hover:shadow-md hover:border-black/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* TT Card Header */}
                <div className="p-4 flex items-center gap-3 border-b border-[#F7F7F7]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5 border border-[#EAE6DD]/30 flex-shrink-0">
                    <img src={MAIN_LOGO_BASE64} alt="Travel with Martins Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#0D1B2A] block group-hover:text-black transition-colors">
                      {post.author}
                    </span>
                    <span className="text-[10px] text-[#8C8A84] block">{post.handle} • {post.date}</span>
                  </div>
                </div>

                {/* TT Card Media Cover with Play Overlay */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={post.image}
                    alt={`${post.author} (${post.handle}) - TikTok video par ceļojumiem un brīvu dzīvesveidu`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all transform group-hover:scale-110 shadow-lg border border-white/20">
                      <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Views Badge */}
                  <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    👁️ {post.views} {lang === "LV" ? "skatījumi" : lang === "EN" ? "views" : "просмотров"}
                  </span>
                </div>

                {/* TT Card Caption */}
                <div className="p-4 flex-1">
                  <p className="text-xs text-[#5A5854] leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                </div>

                {/* TT Card Footer */}
                <div className="p-4 bg-[#F7F7F7] border-t border-[#EAE6DD] flex items-center justify-between text-[11px] text-[#5A5854]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-black fill-current" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-xs">💬</span>
                      <span>{post.comments}</span>
                    </span>
                  </div>
                  <span className="text-black font-semibold flex items-center gap-1 group-hover:underline">
                    {lang === "LV" ? "Skatīt video" : lang === "EN" ? "View video" : "Посмотреть"} <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
