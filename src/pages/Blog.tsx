import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, User, ArrowLeft, Heart, MessageSquare, Share2 } from 'lucide-react';

interface BlogPost {
  id: string;
  image: string;
  date: string;
  readTime: number;
  author: string;
  title: { lv: string; en: string; ru: string };
  excerpt: { lv: string; en: string; ru: string };
  content: { lv: string; en: string; ru: string };
}

const blogPosts: BlogPost[] = [
  {
    id: "solo-travel-guide",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-15",
    readTime: 6,
    author: "Kaspars Linters",
    title: {
      lv: "Kā sagatavoties savam pirmajam solo ceļojumam",
      en: "How to Prepare for Your First Solo Trip",
      ru: "Как подготовиться к своему первому соло-путешествию"
    },
    excerpt: {
      lv: "Solo ceļošana var šķist biedējoša, taču tā ir viena no vērtīgākajām pieredzēm dzīvē. Šeit ir mans ceļvedis par plānošanu, drošību un iedvesmu.",
      en: "Solo travel can seem scary, but it is one of the most rewarding experiences in life. Here is my guide on planning, safety, and inspiration.",
      ru: "Соло-путешествия могут казаться пугающими, но это один из самых ценных опытов в жизни. Вот мое руководство по планированию, безопасности и вдохновению."
    },
    content: {
      lv: "Solo ceļošana sniedz nepieredzētu brīvību. Jūs paši nosakāt savu ritmu, galamērķus un dienas plānu. Tomēr tas prasa arī lielāku sagatavošanos un atbildību.\n\n1. Sāciet ar mazumiņu: Ja nekad neesat ceļojis viens, izvēlieties tuvāku galamērķi — varbūt kaimiņvalsti vai pat citu pilsētu Latvijā uz nedēļas nogali.\n\n2. Plānošana un drošība: Pirms došanās ceļā vienmēr nosūtiet savu ceļojuma plānu kādam tuviniekam. Saglabājiet svarīgākos dokumentus mākonī un paņemiet līdzi papīra kopijas.\n\n3. Naktsmītnes izvēle: Hosteļi ir lieliska vieta, kur satikt citus ceļotājus. Ja vēlaties vairāk privātuma, izvēlieties viesu namus ar kopīgām atpūtas telpām.\n\n4. Atvērtība: Nebaidieties uzsākt sarunas ar vietējiem vai citiem tūristiem. Bieži vien tieši nejaušas tikšanās kļūst par labākajām ceļojuma atmiņām.",
      en: "Solo travel gives you unprecedented freedom. You set your own pace, destinations, and daily schedule. However, it also requires more preparation and responsibility.\n\n1. Start small: If you've never traveled alone, choose a closer destination — maybe a neighboring country or another city for a weekend.\n\n2. Planning and safety: Always send your itinerary to a relative before departing. Store critical documents in the cloud and carry physical copies.\n\n3. Choosing accommodation: Hostels are perfect for meeting fellow travelers. For more privacy, choose guest houses with shared common areas.\n\n4. Openness: Don't be afraid to start conversations with locals or other travelers. Random encounters often turn into the best travel memories.",
      ru: "Соло-путешествия дают беспрецедентную свободу. Вы сами определяете свой ритм и планы. Но это требует серьезной подготовки.\n\n1. Начните с малого: если вы никогда не путешествовали в одиночку, выберите близкое направление — соседнюю страну или соседний город.\n\n2. Планирование и безопасность: всегда отправляйте маршрут близким. Храните копии документов в облаке.\n\n3. Выбор жилья: хостелы идеальны для знакомства. Для приватности выбирайте гостевые дома с общими зонами.\n\n4. Открытость: не бойтесь заводить разговоры. Именно случайные встречи часто становятся лучшими воспоминаниями."
    }
  },
  {
    id: "latvia-coastal-gems",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    date: "2026-05-28",
    readTime: 4,
    author: "Kaspars Linters",
    title: {
      lv: "Top 5 slēptie dārgumi Latvijas piekrastē",
      en: "Top 5 Hidden Gems on the Latvian Coast",
      ru: "Топ-5 скрытых жемчужин на побережье Латвии"
    },
    excerpt: {
      lv: "Latvijai ir gandrīz 500 km gara jūras robeža. No mežonīgiem stāvkrastiem līdz mierīgiem zvejnieku ciematiem — šeit ir vietas, kuras noteikti jāredz.",
      en: "Latvia has a sea border of nearly 500 km. From wild bluffs to peaceful fishing villages — here are the locations you must see.",
      ru: "Латвия имеет почти 500 км морской границы. От диких обрывов до мирных рыбацких деревень — вот места, которые обязательно нужно увидеть."
    },
    content: {
      lv: "Latvijas piekraste ir neticami daudzveidīga un skaista jebkurā gadalaikā. Šeit ir mans personīgais saraksts ar vietām, kas nav pārpildītas ar tūristiem:\n\n1. Jūrkalnes stāvkrasts: Viena no gleznainākajām vietām, kur krasts slejas līdz pat 20 metru augstumā. Šeit var izbaudīt dabas varenību un satriecošus saulrietus.\n\n2. Ģipkas baltais kāpējs: Klusa un mierīga vieta Rīgas jūras līča piekrastē. Lieliska vieta garām pastaigām priežu meža ieskautā pludmalē.\n\n3. Papes dabas parks: Pazīstams ne tikai ar savu pludmali, bet arī ar savvaļas zirgiem un tauriem, kas apdzīvo Papes ezera apkārtni.\n\n4. Akmeņraga bāka: Kāpiens bākā piedāvā nepārspējamu skatu pār Baltijas jūru un Kurzemes mežiem.\n\n5. Kaltenes kalvas: Unikāli akmens krāvumi mežā netālu no jūras, kas veidojušies ledus laikmetā.",
      en: "The Latvian coastline is incredibly diverse and beautiful in any season. Here is my personal selection of uncrowded spots:\n\n1. Jūrkalne Bluffs: One of the most picturesque locations where the coast rises up to 20 meters. Ideal for experiencing raw nature.\n2. Gipka Dune: A quiet and peaceful beach surrounded by pine forests on the Gulf of Riga.\n3. Pape Nature Park: Famous for its wild horses and scenic coastal trails.\n4. Akmenrags Lighthouse: Climbing to the top yields spectacular views of the Baltic Sea and coastal forests.\n5. Kaltene Stone Ridges: Unique glacial boulder formations located in the forest near the sea.",
      ru: "Латвийское побережье невероятно разнообразно. Вот мой личный топ тихих мест:\n\n1. Обрыв Юркалне: живописный берег высотой до 20 метров. Потрясающие закаты.\n2. Дюна Гипка: тихое место на Рижском заливе у соснового леса.\n3. Природный парк Папе: знаменит дикими лошадьми.\n4. Маяк Акменрагс: подъем наверх дарит великолепный вид на море.\n5. Калтеньские каменные гряды: уникальные ледниковые валуны в лесу у моря."
    }
  }
];

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-in fade-in duration-300">
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>{language === 'lv' ? 'Atpakaļ uz blogu' : language === 'ru' ? 'Назад в блог' : 'Back to Blog'}</span>
        </button>

        <div className="space-y-4">
          <img 
            src={selectedPost.image} 
            alt={selectedPost.title[language]} 
            className="w-full h-96 object-cover rounded-3xl shadow-sm"
          />
          
          <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-1"><Calendar size={14} />{selectedPost.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} />{selectedPost.readTime} {t('blog.read_time')}</span>
            <span className="flex items-center gap-1"><User size={14} />{t('blog.by')}: {selectedPost.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight pt-2">
            {selectedPost.title[language] || selectedPost.title['en']}
          </h1>
        </div>

        {/* Rich Text Content */}
        <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-6 font-medium whitespace-pre-line">
          {selectedPost.content[language] || selectedPost.content['en']}
        </div>

        {/* Footer actions of post */}
        <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-rose-600 cursor-pointer">
              <Heart size={16} /> <span>142</span>
            </button>
            <button className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-teal-600 cursor-pointer">
              <MessageSquare size={16} /> <span>18</span>
            </button>
          </div>
          <button className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer">
            <Share2 size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t('blog.title')}</h1>
        <p className="text-sm text-slate-500 max-w-md mx-auto">{t('blog.subtitle')}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <div className="h-56 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title[language]} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex gap-3 text-[11px] font-bold text-slate-400">
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime} {t('blog.read_time')}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug tracking-tight group-hover:text-teal-600 transition-colors">
                  {post.title[language] || post.title['en']}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {post.excerpt[language] || post.excerpt['en']}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-50 text-xs font-bold text-teal-600">
                {language === 'lv' ? 'Lasīt rakstu' : language === 'ru' ? 'Читать статью' : 'Read Article'} →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
