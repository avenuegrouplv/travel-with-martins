import React, { createContext, useContext, useState } from 'react';
import { translations, Language } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'lv' || saved === 'en' || saved === 'ru') {
      return saved as Language;
    }
    return 'lv';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  };

  const t = (keyPath: string): any => {
    const keys = keyPath.split('.');
    let current: any = translations[language];

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English
        let fallback: any = translations['en'];
        let foundFallback = true;
        for (const k of keys) {
          if (fallback && typeof fallback === 'object' && k in fallback) {
            fallback = fallback[k];
          } else {
            foundFallback = false;
            break;
          }
        }
        if (foundFallback) return fallback;

        // Fallback to Latvian
        let fallbackLv: any = translations['lv'];
        let foundFallbackLv = true;
        for (const k of keys) {
          if (fallbackLv && typeof fallbackLv === 'object' && k in fallbackLv) {
            fallbackLv = fallbackLv[k];
          } else {
            foundFallbackLv = false;
            break;
          }
        }
        if (foundFallbackLv) return fallbackLv;

        return keyPath;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
