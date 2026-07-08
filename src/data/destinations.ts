export interface Destination {
  id: string;
  category: 'nature' | 'city' | 'beach' | 'adventure';
  categoryLabels: {
    lv: string;
    en: string;
    ru: string;
  };
  image: string;
  rating: number;
  location: {
    lv: string;
    en: string;
    ru: string;
  };
  title: {
    lv: string;
    en: string;
    ru: string;
  };
  description: {
    lv: string;
    en: string;
    ru: string;
  };
  details: {
    lv: string;
    en: string;
    ru: string;
  };
  bestTime: {
    lv: string;
    en: string;
    ru: string;
  };
}

export const destinationsData: Destination[] = [
  {
    id: "kolka-latvia",
    category: "nature",
    categoryLabels: {
      lv: "Daba",
      en: "Nature",
      ru: "Природа"
    },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    location: {
      lv: "Kolkasrags, Latvija",
      en: "Cape Kolka, Latvia",
      ru: "Колкасрагс, Латвия"
    },
    title: {
      lv: "Kolkasrags — divu jūru tikšanās vieta",
      en: "Cape Kolka — Where Two Seas Meet",
      ru: "Колкасрагс — встреча двух морей"
    },
    description: {
      lv: "Unikāls zemesrags Latvijā, kur satiekas Baltijas jūra un Rīgas jūras līcis, veidojot satriecošus viļņu rakstus un mierpilnu atmosfēru.",
      en: "A unique cape in Latvia where the Baltic Sea and the Gulf of Riga meet, creating stunning wave patterns and a peaceful atmosphere.",
      ru: "Уникальный мыс в Латвии, где встречаются Балтийское море и Рижский залив, создавая потрясающие узоры волн и мирную атмосферу."
    },
    details: {
      lv: "Kolkasrags ir viena no gleznainākajām un mežonīgākajām Latvijas piekrastēm. Šeit var novērot gan krāšņus saullēktus, gan saulrietus pār jūru.",
      en: "Cape Kolka is one of the most picturesque and wild coastlines in Latvia. Here you can observe both gorgeous sunrises and sunsets over the sea.",
      ru: "Колкасрагс — одно из самых живописных и диких побережий Латвии. Здесь можно наблюдать как великолепные рассветы, так и закаты над морем."
    },
    bestTime: {
      lv: "Maijs - Septembris",
      en: "May - September",
      ru: "Май - Сентябрь"
    }
  },
  {
    id: "amalfi-italy",
    category: "beach",
    categoryLabels: {
      lv: "Pludmales",
      en: "Beaches",
      ru: "Пляжи"
    },
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    location: {
      lv: "Amalfi krasts, Itālija",
      en: "Amalfi Coast, Italy",
      ru: "Амальфитанское побережье, Италия"
    },
    title: {
      lv: "Amalfi krasta krāsainie ciematiņi",
      en: "The Colorful Towns of Amalfi",
      ru: "Цветные городки побережья Амальфи"
    },
    description: {
      lv: "Gleznains krasts Itālijas dienvidos ar dramatiskām klintīm, pasteļtoņu mājām un kristāldzidru Vidusjūras ūdeni.",
      en: "A picturesque coast in southern Italy with dramatic cliffs, pastel-colored houses, and crystal clear Mediterranean water.",
      ru: "Живописное побережье на юге Италии с драматическими скалами, домами пастельных тонов и кристально чистой водой Средиземного моря."
    },
    details: {
      lv: "Brauciens pa Amalfi krasta līkumotajiem ceļiem piedāvā neaizmirstamus skatus. Positano, Amalfi un Ravello ciemati apbur ar savu vēsturi un šarmu.",
      en: "Driving along the winding roads of the Amalfi Coast offers unforgettable views. Positano, Amalfi, and Ravello charm with their history and elegance.",
      ru: "Поездка по извилистым дорогам побережья Амальфи дарит незабываемые виды. Позитано, Амальфи и Равелло очаровывают своей историей и шармом."
    },
    bestTime: {
      lv: "Aprīlis - Jūnijs",
      en: "April - June",
      ru: "Апрель - Июнь"
    }
  },
  {
    id: "kyoto-japan",
    category: "city",
    categoryLabels: {
      lv: "Pilsētas",
      en: "Cities",
      ru: "Города"
    },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    location: {
      lv: "Kioto, Japāna",
      en: "Kyoto, Japan",
      ru: "Киото, Япония"
    },
    title: {
      lv: "Kioto — Japānas dvēsele un tempļi",
      en: "Kyoto — The Soul of Japan and Temples",
      ru: "Киото — душа Японии и храмы"
    },
    description: {
      lv: "Senā Japānas galvaspilsēta, kas slavena ar tūkstošiem klasisko budistu tempļu, dārzu, imperatora pilīm un tradicionālajām koka mājām.",
      en: "The ancient capital of Japan, famous for thousands of classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses.",
      ru: "Древняя столица Японии, известная тысячами классических буддийских храмов, садов, императорских дворцов и традиционных деревянных домов."
    },
    details: {
      lv: "Kioto piedāvā ceļojumu laikā. No mirdzošā Zelta paviljona līdz Arasijamas bambusa mežam un vēsturiskajam Gionas geišu kvartālam.",
      en: "Kyoto offers a journey through time. From the shining Golden Pavilion to Arashiyama Bamboo Grove and the historic Gion geisha district.",
      ru: "Киото предлагает путешествие во времени. От сияющего Золотого павильона до бамбуковой рощи Арасияма и исторического квартала гейш Гион."
    },
    bestTime: {
      lv: "Oktobris - Novembris",
      en: "October - November",
      ru: "Октябрь - Ноябрь"
    }
  },
  {
    id: "iceland-adventure",
    category: "adventure",
    categoryLabels: {
      lv: "Piedzīvojumi",
      en: "Adventures",
      ru: "Приключения"
    },
    image: "https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    location: {
      lv: "Dienvidkrasts, Islande",
      en: "South Coast, Iceland",
      ru: "Южное побережье, Исландия"
    },
    title: {
      lv: "Uguns un ledus zeme Islandē",
      en: "Land of Fire and Ice in Iceland",
      ru: "Земля льда и пламени в Исландии"
    },
    description: {
      lv: "Dramatiski ūdenskritumi, melno smilšu pludmales, milzīgi ledāji un dūmojoši ģeotermālie avoti rada citplanētas sajūtu.",
      en: "Dramatic waterfalls, black sand beaches, massive glaciers, and steaming geothermal springs create an otherworldly feeling.",
      ru: "Драматические водопады, пляжи с черным песком, огромные ледники и дымящиеся геотермальные источники создают ощущение другой планеты."
    },
    details: {
      lv: "Islandes dienvidu daļa ir īsts piedzīvojumu meklētāju sapnis. Šeit varat pastaigāties aiz Seljalandsfoss ūdenskrituma vai izpētīt melno pludmali Vikā.",
      en: "The southern part of Iceland is a true adventurer's dream. Here you can walk behind Seljalandsfoss waterfall or explore the black beach in Vik.",
      ru: "Южная часть Исландии — настоящая мечта искателя приключений. Здесь вы можете прогуляться за водопадом Сельяландсфосс или исследовать черный пляж в Вике."
    },
    bestTime: {
      lv: "Jūnijs - Augusts",
      en: "June - August",
      ru: "Июнь - Август"
    }
  }
];
