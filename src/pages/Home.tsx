import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { StatsCounter } from '../components/StatsCounter';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { destinationsData } from '../data/destinations';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80" 
            alt="Travel background" 
            className="w-full h-full object-cover opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-xs font-bold uppercase tracking-widest border border-teal-500/20">
            ✨ {language === 'lv' ? 'Mani Piedzīvojumi' : language === 'ru' ? 'Мои Приключения' : 'My Adventures'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none animate-in fade-in slide-in-from-bottom-6 duration-700">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('destinations')}
              className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              {t('hero.more')}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <StatsCounter />
      </section>

      {/* Featured Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'lv' ? 'Populārākie galamērķi' : language === 'ru' ? 'Популярные направления' : 'Popular Destinations'}
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {language === 'lv' 
              ? 'Paši spilgtākie galamērķi, kurus esmu apceļojis un kurus noteikti iesaku apmeklēt arī tev.'
              : language === 'ru'
              ? 'Самые яркие направления, которые я посетил и рекомендую посетить вам.'
              : 'The most spectacular destinations I have visited and highly recommend to you.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinationsData.slice(0, 2).map((dest) => (
            <div 
              key={dest.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title[language]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-xs text-slate-900 text-xs font-bold rounded-lg uppercase tracking-wider">
                  {dest.categoryLabels[language]}
                </span>
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-slate-900/85 backdrop-blur-xs text-amber-400 text-xs font-bold rounded-lg flex items-center gap-1">
                  <Star size={13} className="fill-amber-400" />
                  <span>{dest.rating}</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                    <MapPin size={14} className="text-teal-600" />
                    <span>{dest.location[language]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {dest.title[language]}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {dest.description[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {language === 'lv' ? 'Labākais laiks' : language === 'ru' ? 'Лучшее время' : 'Best time'}: {dest.bestTime[language]}
                  </span>
                  <button 
                    onClick={() => setActiveTab('destinations')}
                    className="text-teal-600 hover:text-teal-700 text-xs font-bold flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{t('destinations.read_more')}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {language === 'lv' ? 'Ko saka citi?' : language === 'ru' ? 'Что говорят другие?' : 'What Others Say'}
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              {language === 'lv' 
                ? 'Atsauksmes no tūrisma aģentūrām, sadarbības partneriem un uzticamiem bloga lasītājiem.'
                : language === 'ru'
                ? 'Отзывы от туристических агентств, партнеров и постоянных читателей блога.'
                : 'Feedback from travel agencies, business partners, and active blog readers.'}
            </p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>
    </div>
  );
};
