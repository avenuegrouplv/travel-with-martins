import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

interface SEOMetadata {
  title: string;
  description: string;
}

const seoData: Record<"LV" | "EN" | "RU", Record<string, SEOMetadata>> = {
  LV: {
    "/": {
      title: "Ceļo patstāvīgi un nopelni | Travel with Martins",
      description: "Mācies ceļot patstāvīgi, izvēlēties izdevīgākos galamērķus un veidot savu brīvo dzīvesveidu ar personīgu mentora atbalstu. Sāc jau šodien!",
    },
    "/par-mani": {
      title: "Par mani - Ceļo patstāvīgi un nopelni | Travel with Martins",
      description: "Esmu radījis projektu Travel with Martins, kurā es palīdzu cilvēkiem mainīt dzīvesveidu un ceļot vairāk ar mentora atbalstu.",
    },
    "/sadarbiba": {
      title: "Kā notiek sadarbība | Travel with Martins",
      description: "Uzzini, kā notiek sadarbība ar personīgo mentoru. Soli pa solim ceļā uz ceļošanas brīvību un papildu ienākumiem.",
    },
    "/galamerki": {
      title: "Aizraujoši galamērķi un ceļojumi | Travel with Martins",
      description: "Atklāj labākos un izdevīgākos ceļojumu galamērķus. Plāno savu nākamo piedzīvojumu kopā ar mums un baudi brīvību.",
    },
    "/buj": {
      title: "Biežāk uzdotie jautājumi (BUJ) | Travel with Martins",
      description: "Atbildes uz biežāk uzdotajiem jautājumiem par patstāvīgu ceļošanu, dzīvesveida maiņu un sadarbību ar mentoru.",
    },
    "/blogs": {
      title: "Ceļojumu blogs un padomi | Travel with Martins",
      description: "Noderīgi raksti, ceļojumu stāsti un praktiski padomi par gudrajiem ceļojumiem, galamērķu izvēli un brīvā dzīvesveida veidošanu.",
    },
    "/kontakti": {
      title: "Saziņa un kontakti | Travel with Martins",
      description: "Sazinies ar mums! Uzdot jautājumus par sadarbību, ceļojumu plānošanu vai pieteikties konsultācijai.",
    },
    "/sikdatnu-politika": {
      title: "Sīkdatņu politika | Travel with Martins",
      description: "Travel with Martins sīkdatņu izmantošanas politika. Uzzini, kā mēs aizsargājam Tavu privātumu.",
    },
  },
  EN: {
    "/": {
      title: "Travel Independently and Earn | Travel with Martins",
      description: "Learn to travel independently, choose budget-friendly destinations, and build a free lifestyle with personal mentor support. Start today!",
    },
    "/par-mani": {
      title: "About Me - Travel Independently and Earn | Travel with Martins",
      description: "I have created the Travel with Martins project, where I help people change their lifestyle, travel more, and gain freedom with personal mentoring.",
    },
    "/sadarbiba": {
      title: "How Collaboration Works | Travel with Martins",
      description: "Discover how collaboration with a personal mentor works. Step-by-step path to travel freedom and extra income.",
    },
    "/galamerki": {
      title: "Exciting Destinations and Trips | Travel with Martins",
      description: "Discover the best and most affordable travel destinations. Plan your next adventure with us and enjoy ultimate freedom.",
    },
    "/buj": {
      title: "Frequently Asked Questions (FAQ) | Travel with Martins",
      description: "Answers to frequently asked questions about independent travel, lifestyle changes, and mentor collaboration.",
    },
    "/blogs": {
      title: "Travel Blog & Insights | Travel with Martins",
      description: "Useful articles, travel stories, and practical tips on smart traveling, choosing destinations, and building a free lifestyle.",
    },
    "/kontakti": {
      title: "Contact Us | Travel with Martins",
      description: "Get in touch with us! Ask questions about collaboration, travel planning, or sign up for a personal consultation.",
    },
    "/sikdatnu-politika": {
      title: "Cookie Policy | Travel with Martins",
      description: "Travel with Martins cookie policy. Learn how we protect your privacy while using our website.",
    },
  },
  RU: {
    "/": {
      title: "Путешествуй самостоятельно и зарабатывай | Travel with Martins",
      description: "Научитесь путешествовать самостоятельно, выбирайте выгодные направления и создавайте свободный стиль жизни с поддержкой ментора. Начните сегодня!",
    },
    "/par-mani": {
      title: "Обо мне - Путешествуй самостоятельно и зарабатывай | Travel with Martins",
      description: "Я создал проект Travel with Martins, в котором помогаю людям изменить свой образ жизни, больше путешествовать и обрести свободу.",
    },
    "/sadarbiba": {
      title: "Как проходит сотрудничество | Travel with Martins",
      description: "Узнайте, как проходит сотрудничество с личным ментором. Пошаговый путь к свободе путешествий и дополнительному доходу.",
    },
    "/galamerki": {
      title: "Увлекательные направления и путешествия | Travel with Martins",
      description: "Откройте для себя лучшие и самые доступные туристические направления. Спланируйте свое следующее приключение с нами и наслаждайтесь свободой.",
    },
    "/buj": {
      title: "Часто задаваемые вопросы (FAQ) | Travel with Martins",
      description: "Ответы на часто задаваемые вопросы о самостоятельных путешествиях, изменении образа жизни и сотрудничестве с ментором.",
    },
    "/blogs": {
      title: "Блог о путешествиях и советы | Travel with Martins",
      description: "Полезные статьи, истории путешествий и практические советы по умным поездкам, выбору направлений и созданию свободного стиля жизни.",
    },
    "/kontakti": {
      title: "Свяжитесь с нами | Travel with Martins",
      description: "Свяжитесь с нами! Задайте вопросы о сотрудничестве, планировании путешествий или запишитесь на консультацию.",
    },
    "/sikdatnu-politika": {
      title: "Политика использования файлов cookie | Travel with Martins",
      description: "Политика использования файлов cookie на сайте Travel with Martins. Узнайте, как мы защищаем вашу конфиденциальность.",
    },
  },
};

export default function SEO() {
  const { lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // Determine path configuration (defaulting to Home '/')
    const path = location.pathname;
    const currentLangSEO = seoData[lang] || seoData["LV"];
    const metadata = currentLangSEO[path] || currentLangSEO["/"];

    // 1. Update document title
    document.title = metadata.title;

    // 2. Update <html> tag lang attribute
    document.documentElement.lang = lang.toLowerCase();

    // Helper to update/create meta tags
    const updateMeta = (nameOrProperty: "name" | "property", value: string, content: string) => {
      let element = document.querySelector(`meta[${nameOrProperty}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameOrProperty, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 3. Update standard meta description
    updateMeta("name", "description", metadata.description);

    // 4. Update Open Graph tags for rich previews
    updateMeta("property", "og:title", metadata.title);
    updateMeta("property", "og:description", metadata.description);
    updateMeta("property", "og:type", "website");
    
    // Construct absolute URLs for canonical/meta sharing
    const cleanPath = path === "/" ? "" : (path.startsWith("/") ? path : `/${path}`);
    const absoluteUrl = `https://travelwithmartins.lv${cleanPath}`;
    updateMeta("property", "og:url", absoluteUrl);

    // Logo image is highly optimized for Open Graph (WhatsApp/Telegram square preview)
    const ogImage = "https://travelwithmartins.lv/og-image.png?v=12";
    updateMeta("property", "og:image", ogImage);
    updateMeta("property", "og:image:width", "256");
    updateMeta("property", "og:image:height", "256");
    updateMeta("property", "og:image:type", "image/png");
    updateMeta("property", "og:image:alt", "Travel with Martins Logo");
    updateMeta("property", "og:site_name", "Travel with Martins");
    updateMeta("property", "og:locale", lang === "LV" ? "lv_LV" : lang === "RU" ? "ru_RU" : "en_US");

    // Alternate languages for WhatsApp/Facebook locales
    const alternateLocales = ["lv_LV", "en_US", "ru_RU"].filter(
      (l) => l !== (lang === "LV" ? "lv_LV" : lang === "RU" ? "ru_RU" : "en_US")
    );
    // Remove existing alternate locales to prevent duplication
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach((el) => el.remove());
    alternateLocales.forEach((alt) => {
      const altMeta = document.createElement("meta");
      altMeta.setAttribute("property", "og:locale:alternate");
      altMeta.setAttribute("content", alt);
      document.head.appendChild(altMeta);
    });

    // 5. Update Twitter Card tags
    updateMeta("name", "twitter:card", "summary");
    updateMeta("name", "twitter:title", metadata.title);
    updateMeta("name", "twitter:description", metadata.description);
    updateMeta("name", "twitter:image", ogImage);
    updateMeta("name", "twitter:url", absoluteUrl);

    // Helper to update/create link tags
    const updateLink = (rel: string, href: string, attributes?: Record<string, string>) => {
      let selector = `link[rel="${rel}"]`;
      if (attributes) {
        const extra = Object.entries(attributes)
          .map(([k, v]) => `[${k}="${v}"]`)
          .join("");
        selector += extra;
      }
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        if (attributes) {
          Object.entries(attributes).forEach(([k, v]) => element!.setAttribute(k, v));
        }
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 6. Set Canonical Link
    updateLink("canonical", absoluteUrl);

    // 7. Set Hreflang Tags (Multilingual SEO) - Clear previous ones to avoid duplicate accumulation
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    updateLink("alternate", `https://travelwithmartins.lv${cleanPath}`, { hreflang: "x-default" });
    updateLink("alternate", `https://travelwithmartins.lv${cleanPath}`, { hreflang: "lv" });
    updateLink("alternate", `https://travelwithmartins.lv${cleanPath}?lang=en`, { hreflang: "en" });
    updateLink("alternate", `https://travelwithmartins.lv${cleanPath}?lang=ru`, { hreflang: "ru" });

    // 8. Dynamic JSON-LD Structured Data (Schema.org)
    const organizationSchema: any = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Travel with Martins",
      "legalName": "Mārtiņš Šics",
      "url": "https://travelwithmartins.lv/",
      "logo": "https://travelwithmartins.lv/logo.png",
      "image": "https://travelwithmartins.lv/logo.png",
      "description": metadata.description,
      "telephone": "+371 27061369",
      "email": "info@travelwithmartins.lv",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pionieru iela 65, Jaunolaine",
        "addressLocality": "Olaines novads",
        "postalCode": "LV-2127",
        "addressCountry": "LV"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100088834779537",
        "https://www.instagram.com/travelwithmartins/"
      ]
    };

    const websiteSchema: any = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Travel with Martins",
      "url": "https://travelwithmartins.lv/"
    };

    const webpageSchema: any = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${absoluteUrl}#webpage`,
      "name": metadata.title,
      "description": metadata.description,
      "url": absoluteUrl,
      "inLanguage": lang.toLowerCase()
    };

    const schemas: any[] = [organizationSchema, websiteSchema, webpageSchema];

    // Add Breadcrumb List Schema if not on home page
    if (path !== "/") {
      const pageTitle = metadata.title.split("|")[0].trim();
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": lang === "LV" ? "Sākums" : lang === "EN" ? "Home" : "Главная",
            "item": "https://travelwithmartins.lv/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageTitle,
            "item": absoluteUrl
          }
        ]
      };
      schemas.push(breadcrumbSchema);
    }

    // FAQ Page Schema
    if (path === "/buj") {
      const faqItems = translations[lang]?.faq?.items || [];
      if (faqItems.length > 0) {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        };
        schemas.push(faqSchema);
      }
    }

    // Blog / BlogPosting Schema
    if (path === "/blogs") {
      const blogPosts = translations[lang]?.blog?.posts || [];
      if (blogPosts.length > 0) {
        const blogSchema = {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": translations[lang]?.blog?.title || "Travel Blog",
          "description": translations[lang]?.blog?.subtitle || "",
          "url": absoluteUrl,
          "blogPost": blogPosts.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.desc,
            "url": `${absoluteUrl}#${post.id}`,
            "author": {
              "@type": "Person",
              "name": "Mārtiņš Šics"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Travel with Martins"
            }
          }))
        };
        schemas.push(blogSchema);
      }
    }

    // Service Schema for coaching and mentoring
    if (path === "/sadarbiba" || path === "/") {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": lang === "LV" ? "Ceļojumu plānošana un biznesa mentorings" : lang === "EN" ? "Travel Planning & Business Mentoring" : "Планирование путешествий и менторинг",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Travel with Martins",
          "image": "https://travelwithmartins.lv/logo.png"
        },
        "description": metadata.description,
        "areaServed": "LV"
      };
      schemas.push(serviceSchema);
    }

    // Clean up existing JSON-LD script tags
    document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());

    // Inject fresh schema script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
    
    // Cleanup metadata on unmount
    return () => {
      // Keep canonical and standard meta, but clean up schemas if needed
    };
  }, [lang, location.pathname]);

  return null;
}
