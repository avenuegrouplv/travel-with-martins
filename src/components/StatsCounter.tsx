import React from "react";
import { Award, Users, Map, HeartHandshake } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface StatItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function StatItem({ label, value, icon }: StatItemProps) {
  return (
    <div className="bg-white border border-[#EAE6DD]/60 rounded-xl p-2.5 sm:p-4 flex items-center space-x-2.5 sm:space-x-3.5 shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0D1B2A]/5 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
        <div className="scale-75 sm:scale-90 flex items-center justify-center">{icon}</div>
      </div>
      <div className="min-w-0">
        <span className="text-lg sm:text-2xl font-display font-black text-[#0D1B2A] tracking-tight block leading-none">
          {value}
        </span>
        <span className="text-[9px] sm:text-[10px] text-[#5A5854] font-semibold uppercase tracking-wider block mt-1 leading-tight truncate">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const { lang } = useLanguage();

  const statsData = {
    LV: {
      title: "Skaitļi un sasniegumi",
      exp: "Pieredze",
      expVal: "20+ gadi",
      clients: "Klienti",
      clientsVal: "320+",
      dests: "Galamērķi",
      destsVal: "15+",
      support: "Atbalsts",
      supportVal: "100%",
    },
    EN: {
      title: "Numbers and Achievements",
      exp: "Experience",
      expVal: "20+ years",
      clients: "Clients",
      clientsVal: "320+",
      dests: "Destinations",
      destsVal: "15+",
      support: "Support",
      supportVal: "100%",
    },
    RU: {
      title: "Цифры и достижения",
      exp: "Опыт",
      expVal: "20+ лет",
      clients: "Клиенты",
      clientsVal: "320+",
      dests: "Направления",
      destsVal: "15+",
      support: "Поддержка",
      supportVal: "100%",
    },
  };

  const currentT = statsData[lang];

  return (
    <section className="bg-[#F7F7F7] py-8 px-6 relative overflow-hidden border-y border-[#EAE6DD]/50">
      {/* Background decorations - very subtle */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />
 
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-[#D4AF37] px-4 py-1.5 rounded-full shadow-sm">
            {currentT.title}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <StatItem
            label={currentT.exp}
            value={currentT.expVal}
            icon={<Award className="w-6 h-6" />}
          />
          <StatItem
            label={currentT.clients}
            value={currentT.clientsVal}
            icon={<Users className="w-6 h-6" />}
          />
          <StatItem
            label={currentT.dests}
            value={currentT.destsVal}
            icon={<Map className="w-6 h-6" />}
          />
          <StatItem
            label={currentT.support}
            value={currentT.supportVal}
            icon={<HeartHandshake className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}
