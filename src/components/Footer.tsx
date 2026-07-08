import React from 'react';
import { Compass, Instagram, Youtube, Facebook, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { t, language } = useLanguage();

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <button 
              onClick={() => handleTabClick('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer"
            >
              <div className="p-2 bg-teal-600 text-white rounded-xl shadow-md transition-colors">
                <Compass size={18} />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Latvijas<span className="text-teal-400">Ceļotājs</span>
              </span>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              {language === 'lv' 
                ? 'Iedvesmojoši ceļojumu stāsti, praktiski galamērķu ceļveži un skaisti vizuālie materiāli no visas pasaules.'
                : language === 'ru'
                ? 'Вдохновляющие истории путешествий, практические путеводители и красивые визуальные материалы со всего мира.'
                : 'Inspiring travel stories, practical destination guides, and beautiful visuals from all around the world.'}
            </p>
            <div className="flex items-center gap-3.5 pt-2">
              <a href="#" className="p-2 bg-slate-800 hover:bg-teal-600 hover:text-white rounded-lg transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-teal-600 hover:text-white rounded-lg transition-all">
                <Youtube size={16} />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-teal-600 hover:text-white rounded-lg transition-all">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === 'lv' ? 'Navigācija' : language === 'ru' ? 'Навигация' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => handleTabClick('home')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('about')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('destinations')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  {t('nav.destinations')}
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('blog')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  {t('nav.blog')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Collaboration */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === 'lv' ? 'Sadarbība' : language === 'ru' ? 'Сотрудничество' : 'Partnerships'}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => handleTabClick('collab')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  {t('nav.collab')}
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('contacts')} className="hover:text-teal-400 transition-colors cursor-pointer">
                  {t('nav.contacts')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {language === 'lv' ? 'Kontakti' : language === 'ru' ? 'Контакты' : 'Contact'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Email: kaspars.linters@gmail.com</li>
              <li>Location: Rīga, Latvija</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Latvijas Ceļotājs. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> in Rīga, Latvija
          </p>
        </div>
      </div>
    </footer>
  );
};
