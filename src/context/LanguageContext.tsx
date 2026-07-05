import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = "LV" | "EN" | "RU";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem("app_lang");
    if (stored === "LV" || stored === "EN" || stored === "RU") {
      return stored as Language;
    }
    return "LV";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  useEffect(() => {
    // In case there is an update in other tabs or components
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "app_lang" && e.newValue) {
        if (e.newValue === "LV" || e.newValue === "EN" || e.newValue === "RU") {
          setLangState(e.newValue as Language);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
