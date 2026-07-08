import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Camera, Map, Heart, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t('about.title')}</h1>
        <p className="text-sm text-slate-500 max-w-md mx-auto">{t('about.intro')}</p>
      </div>

      {/* Main Content split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Profile Column */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-teal-600/10 rounded-3xl translate-x-3 translate-y-3 z-0" />
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" 
            alt="Kaspars" 
            className="relative z-10 w-full h-[450px] object-cover rounded-3xl shadow-md border-2 border-white"
          />
        </div>

        {/* Text Story Column */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {language === 'lv' ? 'Mana ceļojumu filozofija' : language === 'ru' ? 'Моя философия путешествий' : 'My Travel Philosophy'}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            {t('about.description')}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            {language === 'lv' 
              ? 'Šis blogs radās no vēlmes parādīt, ka ceļošana ir pieejama ikvienam. Svarīgākais ir nevis budžeta lielums, bet gan atvērtība jauniem piedzīvojumiem un cieņa pret vietējo kultūru. Es cenšos parādīt vietas no autentiska skatpunkta, izvairoties no klasiskajiem tūristu slazdiem.'
              : language === 'ru'
              ? 'Этот блог родился из желания показать, что путешествия доступны каждому. Самое главное — это не размер бюджета, а открытость новым приключениям и уважение к местной культуре. Я стараюсь показывать места с аутентичной точки зрения.'
              : 'This blog was born out of a desire to show that travel is accessible to everyone. The most important thing is not the budget size, but openness to new adventures and respect for local culture. I try to show places from an authentic perspective.'}
          </p>

          {/* Key values list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
                <Map size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{language === 'lv' ? 'Autentiski ceļveži' : language === 'ru' ? 'Аутентичные гиды' : 'Authentic Guides'}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{language === 'lv' ? 'Tikai paša pārbaudītas vietas.' : language === 'ru' ? 'Только лично проверенные места.' : 'Only personally verified spots.'}</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
                <Camera size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{language === 'lv' ? 'Profesionāli vizuāļi' : language === 'ru' ? 'Профессиональные кадры' : 'Professional Visuals'}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{language === 'lv' ? 'Katra bilde stāsta stāstu.' : language === 'ru' ? 'Каждый снимок рассказывает историю.' : 'Every photo tells a story.'}</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
                <Heart size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{language === 'lv' ? 'Cieņa pret vidi' : language === 'ru' ? 'Эко-путешествия' : 'Eco-conscious'}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{language === 'lv' ? 'Atbildīga tūrisma principi.' : language === 'ru' ? 'Принципы ответственного туризма.' : 'Responsible tourism principles.'}</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
                <Compass size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{language === 'lv' ? 'Praktiski padomi' : language === 'ru' ? 'Практические советы' : 'Practical Tips'}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{language === 'lv' ? 'Sagatavošanās un izmaksas.' : language === 'ru' ? 'Подготовка и расходы.' : 'Preparation and costs.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
