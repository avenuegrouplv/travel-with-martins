import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">
            {t('cookies.modal_title')}
          </h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {language === 'lv' ? (
            <>
              <section className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-base">Kas ir sīkfaili (Cookies)?</h4>
                <p>Sīkfaili ir nelieli teksta faili, kas tiek saglabāti jūsu ierīcē (datorā, viedtālrunī), kad apmeklējat mūsu tīmekļa vietni. Tie palīdz nodrošināt vietnes darbību, uzlabo tās lietojamību un sniedz analītisku informāciju vietnes īpašniekam.</p>
              </section>
              <section className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-base">Kādus sīkfailus mēs izmantojam?</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Nepieciešamie sīkfaili:</strong> Nodrošina vietnes pamatfunkcijas, piemēram, valodas izvēli un drošību. Bez tiem vietne nevar pilnvērtīgi darboties.</li>
                  <li><strong>Analītiskie sīkfaili:</strong> Ļauj mums apkopot anonīmu statistiku par vietnes apmeklējumiem, lai mēs varētu nepārtraukti uzlabot vietnes saturu un struktūru.</li>
                  <li><strong>Funkcionālie sīkfaili:</strong> Atceras jūsu veiktās izvēles un piedāvā personalizētākas iespējas.</li>
                </ul>
              </section>
              <section className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-base">Sīkfailu pārvaldība</h4>
                <p>Jūs varat kontrolēt un dzēst sīkfailus pēc savas izvēles savas pārlūkprogrammas iestatījumos. Lūdzu, ņemiet vērā, ka dažu sīkfailu bloķēšana var ietekmēt vietnes funkcionalitāti.</p>
              </section>
            </>
          ) : language === 'ru' ? (
            <>
              <section className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-base">Что такое файлы cookie?</h4>
                <p>Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве, когда вы посещаете наш сайт. Они помогают обеспечить работу сайта, улучшают удобство использования и предоставляют аналитику владельцу сайта.</p>
              </section>
              <section className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-base">Какие файлы cookie мы используем?</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Необходимые:</strong> Обеспечивают базовые функции, такие как выбор языка и безопасность.</li>
                  <li><strong>Аналитические:</strong> Позволяют собирать анонимную статистику посещений для улучшения сайта.</li>
                  <li><strong>Функциональные:</strong> Запоминают ваши предпочтения и настройки.</li>
                </ul>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-base">What are Cookies?</h4>
                <p>Cookies are small text files stored on your device when you visit our website. They help run the website, improve user experience, and provide analysis data to the site owner.</p>
              </section>
              <section className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-base">What cookies do we use?</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Necessary Cookies:</strong> Ensure basic functionality like language selection and security.</li>
                  <li><strong>Analytical Cookies:</strong> Help us collect anonymous visitor statistics to improve the site.</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and choices.</li>
                </ul>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-colors cursor-pointer"
          >
            {language === 'lv' ? 'Aizvērt' : language === 'ru' ? 'Закрыть' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
