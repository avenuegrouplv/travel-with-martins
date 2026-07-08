import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CookiePolicyModal } from './CookiePolicyModal';

export const CookieConsent: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return <CookiePolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
  }

  return (
    <>
      <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-40 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 animate-in slide-in-from-bottom-12 duration-500">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-teal-50 text-teal-600 rounded-xl shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-base leading-tight">
              {t('cookies.consent_title')}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t('cookies.consent_desc')}{' '}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-teal-600 hover:text-teal-700 underline font-medium cursor-pointer"
              >
                {t('cookies.read_more')}
              </button>
            </p>
            <div className="flex gap-2 pt-1">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                {t('cookies.accept')}
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                {t('cookies.decline')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <CookiePolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
