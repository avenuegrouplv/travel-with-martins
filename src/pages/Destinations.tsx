import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { destinationsData, Destination } from '../data/destinations';
import { Search, MapPin, Star, Calendar, X, Compass, Clock } from 'lucide-react';

export const Destinations: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'nature' | 'city' | 'beach' | 'adventure'>('all');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const categories = [
    { id: 'all', label: t('destinations.all') },
    { id: 'nature', label: language === 'lv' ? 'Daba' : language === 'ru' ? 'Природа' : 'Nature' },
    { id: 'city', label: language === 'lv' ? 'Pilsētas' : language === 'ru' ? 'Города' : 'Cities' },
    { id: 'beach', label: language === 'lv' ? 'Pludmales' : language === 'ru' ? 'Пляжи' : 'Beaches' },
    { id: 'adventure', label: language === 'lv' ? 'Piedzīvojumi' : language === 'ru' ? 'Приключения' : 'Adventures' }
  ];

  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((dest) => {
      const matchesCategory = activeCategory === 'all' || dest.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const titleText = (dest.title[language] || dest.title['en'] || '').toLowerCase();
      const descText = (dest.description[language] || dest.description['en'] || '').toLowerCase();
      const locText = (dest.location[language] || dest.location['en'] || '').toLowerCase();
      
      const matchesSearch = titleText.includes(query) || descText.includes(query) || locText.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t('destinations.title')}</h1>
        <p className="text-sm text-slate-500 max-w-md mx-auto">{t('destinations.subtitle')}</p>
      </div>

      {/* Controls: Search and Filters */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white p-6 rounded-2xl shadow-xs border border-slate-100">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('destinations.search_placeholder')}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl text-sm font-medium outline-hidden transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      {filteredDestinations.length === 0 ? (
        <div className="text-center py-20 bg-white border border-slate-100 rounded-2xl space-y-3">
          <div className="mx-auto w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
            <Compass size={24} />
          </div>
          <p className="text-sm font-semibold text-slate-500">{t('destinations.no_results')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title[language]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 backdrop-blur-xs text-slate-900 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                  {dest.categoryLabels[language]}
                </span>
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-slate-900/80 backdrop-blur-xs text-amber-400 text-xs font-bold rounded-lg flex items-center gap-1">
                  <Star size={11} className="fill-amber-400 stroke-amber-400" />
                  <span>{dest.rating}</span>
                </div>
              </div>

              {/* Content info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold">
                    <MapPin size={13} className="text-teal-600" />
                    <span>{dest.location[language]}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug tracking-tight">
                    {dest.title[language]}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {dest.description[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{dest.bestTime[language]}</span>
                  </span>
                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="text-teal-600 hover:text-teal-700 cursor-pointer"
                  >
                    {t('destinations.read_more')} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Destination Detailed Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Image Header */}
            <div className="relative h-72">
              <img 
                src={selectedDestination.image} 
                alt={selectedDestination.title[language]} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/75 text-white rounded-full backdrop-blur-xs transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-2.5 py-1 bg-teal-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                  {selectedDestination.categoryLabels[language]}
                </span>
                <h3 className="text-2xl font-bold tracking-tight pt-1.5">{selectedDestination.title[language]}</h3>
              </div>
            </div>

            {/* Detailed Info */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-3 gap-4 border-b border-slate-100 pb-5 text-center">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('destinations.category')}</span>
                  <p className="text-sm font-bold text-slate-950 capitalize">{selectedDestination.categoryLabels[language]}</p>
                </div>
                <div className="space-y-1 border-x border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rating</span>
                  <p className="text-sm font-bold text-slate-950 flex items-center justify-center gap-1">
                    <Star size={14} className="fill-amber-400 stroke-amber-400" />
                    <span>{selectedDestination.rating}</span>
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{language === 'lv' ? 'Labākais laiks' : language === 'ru' ? 'Лучшее время' : 'Best Season'}</span>
                  <p className="text-sm font-bold text-slate-950 flex items-center justify-center gap-1">
                    <Clock size={14} className="text-slate-500" />
                    <span>{selectedDestination.bestTime[language]}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <div className="flex items-center gap-1 text-xs font-bold text-teal-600 uppercase tracking-wider">
                  <MapPin size={14} />
                  <span>{selectedDestination.location[language]}</span>
                </div>
                <p className="font-semibold text-slate-800">{selectedDestination.description[language]}</p>
                <p>{selectedDestination.details[language]}</p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  {language === 'lv' ? 'Aizvērt' : language === 'ru' ? 'Закрыть' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
