import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Jānis Bērziņš",
    role: "Uzņēmējs",
    text: "Sadarbība ar Mārtiņu bija viena no labākajām izvēlēm! Viņš palīdzēja piemeklēt izcilu braucienu atbilstoši manam budžetam, un personīgais atbalsts bija jūtams katrā solī. Noteikti ceļošu atkal.",
    rating: 5
  },
  {
    id: "2",
    name: "Kristīne Kalniņa",
    role: "Finanšu analītiķe",
    text: "Mani vienmēr uztrauca ceļojumu plānošana, jo trūka laika. Mārtiņš visu nokārtoja ātri, profesionāli un pats galvenais - ieteica labākās apskates vietas, ko paši nemaz neatrastu!",
    rating: 5
  },
  {
    id: "3",
    name: "Edgars Ozoliņš",
    role: "IT speciālists",
    text: "Esmu ļoti apmierināts ar personīgo pieeju. Mārtiņš nevis mēģina kaut ko pārdot, bet dalās ar reālu pieredzi un izvēlas tieši to, kas man der. Ļoti vērtīga sadarbība.",
    rating: 5
  },
  {
    id: "4",
    name: "Laura Zvaigzne",
    role: "Fotogrāfe",
    text: "Galamērķis bija satriecošs, un Mārtiņš ieteica vislabākos laikus saulrietu vērošanai. Viņa pieredze ceļojumu nozarē kopš 2018. gada patiešām ir jūtama katrā padomā!",
    rating: 5
  },
  {
    id: "5",
    name: "Andris Liepiņš",
    role: "Būvdarbu vadītājs",
    text: "Mārtiņš palīdzēja noorganizēt ceļojumu manai ģimenei uz Turciju. Viesnīca bija ideāla, bērni sajūsmā. Visa komunikācija bija godīga, vienkārša un bez jebkādiem liekiem solījumiem.",
    rating: 5
  }
];

export default function ReviewsCarousel() {
  const { lang } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const title = lang === "LV" ? "Klientu atsauksmes" : lang === "EN" ? "Client Reviews" : "Отзывы клиентов";

  const REVIEWS_TRANSLATED = lang === "LV" ? REVIEWS : lang === "EN" ? [
    {
      id: "1",
      name: "Janis Berzins",
      role: "Entrepreneur",
      text: "Cooperating with Martins was one of the best choices! He helped find an excellent trip according to my budget, and his personal support was felt at every step. Will definitely travel again.",
      rating: 5
    },
    {
      id: "2",
      name: "Kristine Kalnina",
      role: "Financial Analyst",
      text: "I was always worried about trip planning due to lack of time. Martins handled everything quickly, professionally, and most importantly - recommended the best sightseeing spots that we wouldn't have found on our own!",
      rating: 5
    },
    {
      id: "3",
      name: "Edgars Ozolins",
      role: "IT Specialist",
      text: "I am very satisfied with the personal approach. Martins doesn't try to sell you something, but shares real experience and chooses exactly what suits me. Very valuable cooperation.",
      rating: 5
    },
    {
      id: "4",
      name: "Laura Zvaigzne",
      role: "Photographer",
      text: "The destination was amazing, and Martins recommended the best times for watching sunsets. His experience in the travel industry since 2018 is truly felt in every advice!",
      rating: 5
    },
    {
      id: "5",
      name: "Andris Liepins",
      role: "Construction Manager",
      text: "Martins helped organize a trip for my family to Turkey. The hotel was perfect, kids were thrilled. All communication was honest, simple, and without any unrealistic promises.",
      rating: 5
    }
  ] : [
    {
      id: "1",
      name: "Янис Берзиньш",
      role: "Предприниматель",
      text: "Сотрудничество с Мартиньшем было одним из лучших решений! Он помог подобрать отличную поездку в соответствии с моим бюджетом, а личная поддержка чувствовалась на каждом шагу. Обязательно поеду еще.",
      rating: 5
    },
    {
      id: "2",
      name: "Кристина Калниня",
      role: "Финансовый аналитик",
      text: "Меня всегда беспокоило планирование поездок из-за нехватки времени. Мартиньш всё оформил быстро, профессионально и, самое главное, порекомендовал лучшие достопримечательности, которые мы бы сами не нашли!",
      rating: 5
    },
    {
      id: "3",
      name: "Эдгар Озолиньш",
      role: "IT-специалист",
      text: "Я очень доволен персональным подходом. Мартиньш не пытается что-то продать, а делится реальным опытом и выбирает именно то, что мне подходит. Очень ценное сотрудничество.",
      rating: 5
    },
    {
      id: "4",
      name: "Лаура Звайгзне",
      role: "Фотограф",
      text: "Направление было потрясающим, и Мартиньш посоветовал лучшее время для наблюдения за закатами. Его опыт в индустрии туризма с 2018 года действительно чувствуется в каждом совете!",
      rating: 5
    },
    {
      id: "5",
      name: "Андрис Лиепиньш",
      role: "Руководитель строительных работ",
      text: "Мартиньш помог организовать поездку для моей семьи в Турцию. Отель был идеальным, дети в восторге. Все общение было честным, простым и без каких-либо лишних обещаний.",
      rating: 5
    }
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.7; // Ritināšanas ātrums pikseļos par kadru

    const scroll = () => {
      if (!isHovered) {
        container.scrollLeft += speed;
        
        // Pusceļš no visas joslas platuma ir tieši viena pilna kopa
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
    }
  };

  return (
    <section className="py-8 bg-[#F7F7F7] overflow-hidden border-t border-b border-[#EAE6DD]">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            {title}
          </span>
        </div>
      </div>

      {/* Ritināšanas konteiners */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onScroll={handleScroll}
        style={{
          scrollSnapType: "none",
          msOverflowStyle: "none",
          scrollbarWidth: "none"
        }}
        className="flex gap-8 overflow-x-auto py-2 px-6 select-none scrollbar-none"
      >
        {/* Rādām atsauksmes divreiz, lai nodrošinātu bezgalīgas cilpas efektu */}
        {[...REVIEWS_TRANSLATED, ...REVIEWS_TRANSLATED].map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            style={{
              scrollSnapAlign: "none"
            }}
            className="w-[180px] sm:w-[220px] flex-shrink-0 bg-white border border-[#EAE6DD] rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5 text-[#D4AF37]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#EAE6DD]" />
              </div>
              <p className="text-[#5A5854] text-[11px] sm:text-xs leading-relaxed italic">
                "{review.text}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F2ECE0] flex items-center justify-between">
              <div>
                <span className="font-display font-bold text-[#0D1B2A] text-xs block">
                  {review.name}
                </span>
                <span className="text-[10px] text-[#8C8A84] block mt-0.5">
                  {review.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS, lai noslēptu scrollbar dažādās pārlūkprogrammās */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
