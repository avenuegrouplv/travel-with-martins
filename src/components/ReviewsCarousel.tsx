import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ReviewsCarousel: React.FC = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Laura Ozoliņa",
      role: language === 'lv' ? "Tūrisma aģentūras vadītāja" : language === 'ru' ? "Руководитель тур-агентства" : "Travel Agency Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      text: {
        lv: "Sadarbība ar Kasparu bija izcila! Viņa raksts par mūsu tūri piesaistīja milzīgu klientu uzmanību, un fotoattēli ir vienkārši elpu aizraujoši.",
        en: "Working with Kaspars was outstanding! His article about our tour generated massive client interest, and the photos are simply breathtaking.",
        ru: "Сотрудничество с Каспарсом было великолепным! Его статья о нашем туре привлекла огромное внимание клиентов, а фотографии просто завораживают."
      }
    },
    {
      id: 2,
      name: "Marcus Green",
      role: language === 'lv' ? "Viesnīcas mārketinga direktors" : language === 'ru' ? "Директор по маркетингу отеля" : "Hotel Marketing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      text: {
        lv: "Kaspars radīja augstākā līmeņa saturu mūsu boutique viesn5cai Amalfi krastā. Ļoti profesionāls, precīzs un ar izcilu gaumi.",
        en: "Kaspars created top-tier content for our boutique hotel on the Amalfi coast. Highly professional, punctual, and possesses exceptional taste.",
        ru: "Каспарс создал первоклассный контент для нашего бутик-отеля на побережье Амальфи. Очень профессионально, пунктуально и со вкусом."
      }
    },
    {
      id: 3,
      name: "Jānis Bērziņš",
      role: language === 'lv' ? "Pastāvīgs lasītājs" : language === 'ru' ? "Постоянный читатель" : "Regular Reader",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      text: {
        lv: "Sava pēdējā ceļojuma plānošanā izmantoju Kaspara sagatavoto ceļvedi. Katrs ieteikums bija zelta vērts — īpaši vietējo restorānu ieteikumi!",
        en: "I used the guide prepared by Kaspars to plan my last trip. Every recommendation was pure gold — especially the local restaurant suggestions!",
        ru: "Использовал путеводитель Каспарса для планирования последней поездки. Каждая рекомендация была на вес золота, особенно местные ресторанчики!"
      }
    }
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[activeIndex];

  return (
    <div className="relative max-w-3xl mx-auto bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-xs">
      <div className="absolute top-8 right-8 text-slate-100 hidden sm:block">
        <Quote size={80} className="stroke-1" />
      </div>

      <div className="space-y-6 text-center sm:text-left relative z-10">
        {/* Stars */}
        <div className="flex items-center justify-center sm:justify-start gap-1">
          {[...Array(activeReview.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-amber-400 stroke-amber-400" />
          ))}
        </div>

        {/* Text */}
        <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed">
          "{activeReview.text[language] || activeReview.text['en']}"
        </p>

        {/* Bio */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-50">
          <img 
            src={activeReview.avatar} 
            alt={activeReview.name} 
            className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-50"
          />
          <div>
            <h4 className="font-bold text-slate-900 text-base">{activeReview.name}</h4>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{activeReview.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center sm:justify-end gap-2 mt-8 sm:mt-0">
        <button
          onClick={prev}
          className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 rounded-xl transition-all cursor-pointer border border-slate-100 animate-hover"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 rounded-xl transition-all cursor-pointer border border-slate-100 animate-hover"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
