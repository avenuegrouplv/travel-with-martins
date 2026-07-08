import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, Instagram, Youtube, Facebook, ChevronDown, ChevronUp } from 'lucide-react';

export const Contacts: React.FC = () => {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: {
        lv: "Kādu kameru un tehniku tu izmanto ceļojumos?",
        en: "What camera and gear do you use during travels?",
        ru: "Какую камеру и оборудование ты используешь?"
      },
      a: {
        lv: "Es fotografēju ar Sony A7 IV kameru un 24-70mm f/2.8 objektīvu. Video un gaisa kadriem izmantoju DJI Mini 4 Pro dronu.",
        en: "I shoot with a Sony A7 IV camera and a 24-70mm f/2.8 lens. For videos and aerial shots, I use the DJI Mini 4 Pro drone.",
        ru: "Я снимаю на камеру Sony A7 IV с объективом 24-70mm f/2.8. Для видео и аэросъемки использую дрон DJI Mini 4 Pro."
      }
    },
    {
      q: {
        lv: "Kā tu plāno savus ceļojumu maršrutus?",
        en: "How do you plan your travel itineraries?",
        ru: "Как ты планируешь свои маршруты путешествий?"
      },
      a: {
        lv: "Es kombinēju vietējo iedzīvotāju ieteikumus, Google Maps satelītattēlus un ceļojumu forumus. Cenšos izvairīties no klasiskajiem tūristu slazdiem.",
        en: "I combine local recommendations, Google Maps satellite views, and travel forums. I try to avoid classical tourist traps.",
        ru: "Я сочетаю советы местных жителей, спутниковые снимки Google Maps и туристические форумы, стараясь избегать туристических ловушек."
      }
    },
    {
      q: {
        lv: "Vai visi tavi ceļveži ir pieejami bez maksas?",
        en: "Are all of your travel guides available for free?",
        ru: "Все ли твои путеводители бесплатны?"
      },
      a: {
        lv: "Jā, visi pamata galamērķu ceļveži un bloga raksti manā vietnē vienmēr būs bez maksas, lai iedvesmotu ikvienu ceļot gribētāju.",
        en: "Yes, all basic destination guides and blog articles on my website will always be free to inspire anyone who wants to travel.",
        ru: "Да, все базовые путеводители и статьи в блоге всегда будут бесплатными, чтобы вдохновлять всех желающих путешествовать."
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t('contacts.title')}</h1>
        <p className="text-sm text-slate-500 max-w-md mx-auto">{t('contacts.subtitle')}</p>
      </div>

      {/* Grid of details and form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Col: Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {language === 'lv' ? 'Saziņas informācija' : language === 'ru' ? 'Контактная информация' : 'Contact Information'}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {language === 'lv'
                ? 'Sazinies ar mani par sadarbības projektiem, tūru organizēšanu vai vienkārši pajautā padomu nākamajam ceļojumam.'
                : language === 'ru'
                ? 'Свяжитесь со мной по поводу сотрудничества, организации туров или просто спросите совета.'
                : 'Get in touch with me about collaborations, tours, or simply to ask for advice regarding your next trip.'}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-center p-4 bg-white border border-slate-100 rounded-2xl">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</h4>
                <p className="text-sm font-semibold text-slate-900">kaspars.linters@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center p-4 bg-white border border-slate-100 rounded-2xl">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{language === 'lv' ? 'Atrašanās vieta' : language === 'ru' ? 'Местоположение' : 'Location'}</h4>
                <p className="text-sm font-semibold text-slate-900">Rīga, Latvija</p>
              </div>
            </div>
          </div>

          {/* Socials card */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {language === 'lv' ? 'Atrodi mani sociālajos tīklos' : language === 'ru' ? 'Я в соцсетях' : 'Social Media Channels'}
            </h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-3.5 bg-white border border-slate-100 hover:border-teal-500 text-slate-600 hover:text-teal-600 rounded-xl transition-all shadow-xs">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3.5 bg-white border border-slate-100 hover:border-teal-500 text-slate-600 hover:text-teal-600 rounded-xl transition-all shadow-xs">
                <Youtube size={18} />
              </a>
              <a href="#" className="p-3.5 bg-white border border-slate-100 hover:border-teal-500 text-slate-600 hover:text-teal-600 rounded-xl transition-all shadow-xs">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Bottom collapsible FAQ Section */}
      <section className="pt-10 border-t border-slate-100 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {language === 'lv' ? 'Biežāk uzdotie jautājumi' : language === 'ru' ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {language === 'lv'
              ? 'Atbildes uz jautājumiem par plānošanu, tehniku un ceļojumiem.'
              : language === 'ru'
              ? 'Ответы на вопросы о планировании, оборудовании и путешествиях.'
              : 'Answers to questions about planning, gear, and travel.'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm md:text-base cursor-pointer hover:bg-slate-50/50 transition-colors"
              >
                <span>{faq.q[language] || faq.q['en']}</span>
                {openFaq === i ? <ChevronUp size={18} className="text-teal-600" /> : <ChevronDown size={18} className="text-slate-400" />}
              </button>
              
              {openFaq === i && (
                <div className="p-5 pt-0 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-50 animate-in slide-in-from-top-2 duration-200">
                  {faq.a[language] || faq.a['en']}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
