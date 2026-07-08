import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Image, Star, ArrowRight } from 'lucide-react';

interface CollaborationProps {
  setActiveTab: (tab: string) => void;
}

export const Collaboration: React.FC<CollaborationProps> = ({ setActiveTab }) => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: <Sparkles className="text-teal-600" size={24} />,
      title: t('collab.service_brand'),
      desc: t('collab.service_brand_desc')
    },
    {
      icon: <Image className="text-teal-600" size={24} />,
      title: t('collab.service_content'),
      desc: t('collab.service_content_desc')
    },
    {
      icon: <Star className="text-teal-600" size={24} />,
      title: t('collab.service_reviews'),
      desc: t('collab.service_reviews_desc')
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t('collab.title')}</h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">{t('collab.subtitle')}</p>
      </div>

      {/* Main benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div 
            key={idx}
            className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic CTA */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white space-y-6 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px] z-0" />
        <div className="relative z-10 space-y-4 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {language === 'lv' 
              ? 'Sāksim kopīgu projektu jau šodien' 
              : language === 'ru' 
              ? 'Начнем общий проект уже сегодня' 
              : "Let's Start a Project Together Today"}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            {language === 'lv'
              ? 'Sazinies ar mani, lai apspriestu tavu ideju un radītu ko unikālu un iedvesmojošu.'
              : language === 'ru'
              ? 'Свяжитесь со мной, чтобы обсудить вашу идею и создать что-то уникальное.'
              : 'Get in touch with me to discuss your idea and create something unique and inspiring.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab('contacts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <span>{t('collab.contact_cta')}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
