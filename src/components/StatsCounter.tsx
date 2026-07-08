import React from 'react';
import { Award, Compass, Camera, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const StatsCounter: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Compass className="text-teal-600" size={28} />, value: "45+", label: t('about.stats_travelled') },
    { icon: <Award className="text-teal-600" size={28} />, value: "120+", label: t('about.stats_flights') },
    { icon: <Camera className="text-teal-600" size={28} />, value: "15k+", label: t('about.stats_photos') },
    { icon: <Heart className="text-teal-600" size={28} />, value: "50k+", label: t('about.stats_followers') }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-2xl shadow-xs border border-slate-100">
      {stats.map((stat, i) => (
        <div key={i} className="text-center space-y-2 group">
          <div className="mx-auto w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
