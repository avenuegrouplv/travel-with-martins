import lv from "../../content/translations/lv.json";
import en from "../../content/translations/en.json";
import ru from "../../content/translations/ru.json";

export interface TranslationSchema {
  header: {
    home: string;
    collab: string;
    destinations: string;
    faq: string;
    blog: string;
    contacts: string;
    contactBtn: string;
  };
  home: {
    heroSlides: {
      title: string;
      text: string;
      highlights: string[];
    }[];
    quickStats: {
      countries: string;
      projects: string;
      clients: string;
      rating: string;
    };
    aboutTitle: string;
    aboutSubtitle: string;
    aboutIntro: string;
    aboutBody: string;
    aboutQuote: string;
    aboutBadge: string;
    advantagesBadge: string;
    advantagesTitle: string;
    advantages: {
      title: string;
      desc: string;
    }[];
    stepsBadge: string;
    stepsTitle: string;
    stepsSubtitle: string;
    steps: {
      title: string;
      desc: string;
    }[];
    reviewsBadge: string;
    reviewsTitle: string;
    reviews: {
      author: string;
      role: string;
      text: string;
    }[];
    instaTitle: string;
    instaSubtitle: string;
  };
  collab: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      title: string;
      desc: string;
    }[];
    bottomText1: string;
    bottomText2: string;
    toHome: string;
  };
  destinations: {
    toHome: string;
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterEurope: string;
    filterExotic: string;
    durationLabel: string;
    viewLabel: string;
    noResults: string;
    resetFilter: string;
    modalClose: string;
    modalDuration: string;
    modalPriceFrom: string;
    modalRequestBtn: string;
    items: {
      [key: string]: {
        name: string;
        description: string;
        duration: string;
        tags: string[];
      };
    };
  };
  faq: {
    toHome: string;
    badge: string;
    title: string;
    subtitle: string;
    noAnswerTitle: string;
    noAnswerDesc: string;
    askBtn: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  blog: {
    toHome: string;
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    sidebarPopular: string;
    sidebarCategories: string;
    sidebarAll: string;
    posts: {
      id: string;
      title: string;
      desc: string;
      content: string;
    }[];
    upcomingTitle: string;
    upcomingSubtitle: string;
    upcomingReadSoon: string;
    upcomingPosts: {
      title: string;
      desc: string;
    }[];
  };
  contactPage: {
    toHome: string;
    badge: string;
    title: string;
    intro: string;
    hoursTitle: string;
    hoursDesc1: string;
    hoursDesc2: string;
    locationTitle: string;
    locationDesc1: string;
    locationDesc2: string;
    supportTitle: string;
    supportDesc1: string;
    supportDesc2: string;
  };
  contactForm: {
    badge: string;
    title: string;
    subtitle: string;
    successTitle: string;
    successDesc: string;
    sendNew: string;
    labelName: string;
    placeholderName: string;
    labelPhone: string;
    placeholderPhone: string;
    labelEmail: string;
    placeholderEmail: string;
    labelMessage: string;
    placeholderMessage: string;
    submitBtn: string;
    infoTitle: string;
    phone: string;
    email: string;
  };
  footer: {
    desc: string;
    linksTitle: string;
    contactsTitle: string;
    copyright: string;
  };
  cookieNotice: {
    text: string;
    accept: string;
    policy: string;
  };
}

export const translations: Record<"LV" | "EN" | "RU", TranslationSchema> = {
  LV: lv as unknown as TranslationSchema,
  EN: en as unknown as TranslationSchema,
  RU: ru as unknown as TranslationSchema,
};
