import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShieldCheck, ExternalLink, Home } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CookiePolicy() {
  const { lang } = useLanguage();

  const getPageTitle = () => {
    if (lang === "LV") return "Sīkdatņu politika";
    if (lang === "RU") return "Политика использования куки";
    return "Cookie Policy";
  };

  const getHomeText = () => {
    if (lang === "LV") return "Uz sākumu";
    if (lang === "RU") return "На главную";
    return "To Home";
  };

  const getBadgeText = () => {
    if (lang === "LV") return "Noteikumi";
    if (lang === "RU") return "Правила";
    return "Terms";
  };

  const getLastUpdatedText = () => {
    if (lang === "LV") return "Pēdējo reizi atjaunots: 2025.gada maijs";
    if (lang === "RU") return "Последнее обновление: май 2025 года";
    return "Last updated: May 2025";
  };

  const getIntroText = () => {
    if (lang === "LV") {
      return "Mēs augsti vērtējam Jūsu privātumu un nodrošinām pilnīgu caurspīdīgumu par to, kā tiek izmantotas sīkdatnes mūsu tīmekļa vietnē.";
    }
    if (lang === "RU") {
      return "Мы высоко ценим вашу конфиденциальность и обеспечиваем полную прозрачность в отношении использования файлов куки на нашем сайте.";
    }
    return "We highly value your privacy and ensure complete transparency regarding the use of cookies on our website.";
  };

  const renderContent = () => {
    if (lang === "LV") {
      return (
        <div className="space-y-8 text-sm sm:text-base text-[#5A5854] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">1.</span> Kas ir sīkdatnes?
            </h2>
            <p>
              Sīkdatnes (cookies) ir mazi teksta faili, ko tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs to apmeklējat. Katrā nākamajā apmeklējuma reizē sīkdatnes tiek nosūtītas atpakaļ uz izcelsmes vietni vai trešās puses vietni, kas atpazīst attiecīgo sīkdatni.
            </p>
            <p>
              Sīkdatnes darbojas kā konkrētas vietnes atmiņa, ļaujot vietnei atcerēties Jūsu iestatījumus un darbības (piemēram, valodu, fontu izmērus un citus attēlošanas iestatījumus), lai Jums tie nebūtu jāievada no jauna katru reizi.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">2.</span> Kāpēc mēs izmantojam sīkdatnes?
            </h2>
            <p>
              <strong>Travel with Martins</strong> izmanto sīkdatnes šādiem mērķiem:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong className="text-[#0D1B2A]">Vietnes funkcionalitātes nodrošināšanai:</strong> Lai tīmekļa vietne varētu darboties un nodrošināt pamatfunkcijas.
              </li>
              <li>
                <strong className="text-[#0D1B2A]">Lietošanas pieredzes uzlabošanai:</strong> Lai atcerētos Jūsu izvēles un sniegtu personalizētāku saturu.
              </li>
              <li>
                <strong className="text-[#0D1B2A]">Analītikai un statistikai:</strong> Lai saprastu, kā apmeklētāji mijiedarbojas ar vietni (kuras lapas apmeklē visbiežāk, cik ilgi uzturas vietnē), kas palīdz mums uzlabot vietnes struktūru un saturu.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">3.</span> Izmantoto sīkdatņu veidi
            </h2>
            <div className="space-y-4 mt-2">
              <div className="border-l-4 border-l-[#F87E2E] pl-4">
                <h3 className="font-bold text-[#0D1B2A] text-sm sm:text-base">Nepieciešamās sīkdatnes</h3>
                <p className="text-xs sm:text-sm mt-1">
                  Šīs sīkdatnes ir būtiskas, lai vietne varētu darboties. Bez tām dažas vietnes daļas var nedarboties pareizi. Tās parasti tiek iestatītas tikai reaģējot uz Jūsu veiktajām darbībām, piemēram, aizpildot kontaktformas.
                </p>
              </div>
              <div className="border-l-4 border-l-[#0D1B2A]/40 pl-4">
                <h3 className="font-bold text-[#0D1B2A] text-sm sm:text-base">Analītikas sīkdatnes</h3>
                <p className="text-xs sm:text-sm mt-1">
                  Mēs izmantojam trešo pušu rīkus (piemēram, Google Analytics), lai apkopotu anonīmu informāciju par apmeklētāju skaitu un populārākajām lapām. Šie dati mums palīdz uzlabot lietotāju pieredzi.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">4.</span> Kā pārvaldīt un izdzēst sīkdatnes?
            </h2>
            <p>
              Lielākā daļa pārlūkprogrammu ir iestatītas tā, lai automātiski pieņemtu sīkdatnes. Jūs varat jebkurā laikā mainīt Savas pārlūkprogrammas iestatījumus, lai bloķētu sīkdatnes vai saņemtu brīdinājumu, kad tās tiek sūtītas.
            </p>

            <div className="pt-2">
              <p className="font-bold text-[#0D1B2A] mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Instrukcijas populārākajām pārlūkprogrammām:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Google Chrome</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.apple.com/lv-lv/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Safari</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Mozilla Firefox</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.microsoft.com/lv-lv/topic/168dab11-0753-043d-7c16-ede5947798d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>MS Edge</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8C8A84] bg-[#FAF9F5] p-4 rounded-xl border border-[#EAE6DD] mt-4">
              <strong>Ievērojiet:</strong> Ja Jūs bloķēsiet sīkdatnes, dažas mūsu tīmekļa vietnes funkcijas var nebūt pieejamas vai darboties nepilnīgi.
            </p>

            <p className="pt-4 border-t border-[#F2ECE0]">
              Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, sazinieties ar mums, rakstot uz:{" "}
              <a href="mailto:travelwithmartinss@gmail.com" className="text-[#F87E2E] hover:underline font-semibold">
                travelwithmartinss@gmail.com
              </a>
            </p>
          </section>
        </div>
      );
    } else if (lang === "RU") {
      return (
        <div className="space-y-8 text-sm sm:text-base text-[#5A5854] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">1.</span> Что такое файлы куки?
            </h2>
            <p>
              Файлы куки (cookies) — это небольшие текстовые файлы, которые веб-сайт сохраняет на вашем компьютере или мобильном устройстве при его посещении. При каждом последующем посещении файлы куки отправляются обратно на исходный веб-сайт или на сторонний сайт, который распознает данный файл куки.
            </p>
            <p>
              Файлы куки работают как память конкретного сайта, позволяя ему запоминать ваши настройки и действия (например, язык, размер шрифта и другие параметры отображения), чтобы вам не приходилось вводить их заново при каждом посещении.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">2.</span> Почему мы используем файлы куки?
            </h2>
            <p>
              <strong>Travel with Martins</strong> использует файлы куки в следующих целях:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong className="text-[#0D1B2A]">Обеспечение функциональности сайта:</strong> Чтобы веб-сайт мог работать и обеспечивать базовые функции.
              </li>
              <li>
                <strong className="text-[#0D1B2A]">Улучшение пользовательского опыта:</strong> Чтобы запоминать ваши предпочтения и предоставлять более персонализированный контент.
              </li>
              <li>
                <strong className="text-[#0D1B2A]">Аналитика и статистика:</strong> Чтобы понять, как посетители взаимодействуют с сайтом (какие страницы посещают чаще всего, сколько времени проводят на сайте), что помогает нам улучшать структуру и содержание сайта.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">3.</span> Типы используемых файлов куки
            </h2>
            <div className="space-y-4 mt-2">
              <div className="border-l-4 border-l-[#F87E2E] pl-4">
                <h3 className="font-bold text-[#0D1B2A] text-sm sm:text-base">Необходимые файлы куки</h3>
                <p className="text-xs sm:text-sm mt-1">
                  Эти файлы куки жизненно необходимы для работы сайта. Без них некоторые части сайта могут работать некорректно. Обычно они устанавливаются только в ответ на ваши действия, такие как заполнение контактных форм.
                </p>
              </div>
              <div className="border-l-4 border-l-[#0D1B2A]/40 pl-4">
                <h3 className="font-bold text-[#0D1B2A] text-sm sm:text-base">Аналитические файлы куки</h3>
                <p className="text-xs sm:text-sm mt-1">
                  Мы используем сторонние инструменты (например, Google Analytics) для сбора анонимной информации о количестве посетителей и наиболее популярных страницах. Эти данные помогают нам улучшать пользовательский опыт.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">4.</span> Как управлять и удалять файлы куки?
            </h2>
            <p>
              Большинство браузеров настроены на автоматический прием файлов куки. Вы можете в любое время изменить настройки своего браузера, чтобы заблокировать файлы куки или получать предупреждение об их отправке.
            </p>

            <div className="pt-2">
              <p className="font-bold text-[#0D1B2A] mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Инструкции для самых популярных браузеров:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Google Chrome</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.apple.com/lv-lv/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Safari</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Mozilla Firefox</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.microsoft.com/lv-lv/topic/168dab11-0753-043d-7c16-ede5947798d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>MS Edge</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8C8A84] bg-[#FAF9F5] p-4 rounded-xl border border-[#EAE6DD] mt-4">
              <strong>Обратите внимание:</strong> Если вы заблокируете файлы куки, некоторые функции нашего веб-сайта могут быть недоступны или работать неполноценно.
            </p>

            <p className="pt-4 border-t border-[#F2ECE0]">
              Если у вас возникли вопросы по поводу нашей политики использования файлов куки, пожалуйста, свяжитесь с нами по адресу:{" "}
              <a href="mailto:travelwithmartinss@gmail.com" className="text-[#F87E2E] hover:underline font-semibold">
                travelwithmartinss@gmail.com
              </a>
            </p>
          </section>
        </div>
      );
    } else {
      return (
        <div className="space-y-8 text-sm sm:text-base text-[#5A5854] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">1.</span> What are cookies?
            </h2>
            <p>
              Cookies are small text files that a website saves on your computer or mobile device when you visit it. On each subsequent visit, the cookies are sent back to the originating website or a third-party website that recognizes that cookie.
            </p>
            <p>
              Cookies act as a memory for a specific website, allowing the website to remember your settings and actions (such as language, font sizes, and other display preferences) so that you do not have to enter them again each time.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">2.</span> Why do we use cookies?
            </h2>
            <p>
              <strong>Travel with Martins</strong> uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong className="text-[#0D1B2A]">To ensure website functionality:</strong> To enable the website to operate and provide basic features.
              </li>
              <li>
                <strong className="text-[#0D1B2A]">To improve user experience:</strong> To remember your choices and provide more personalized content.
              </li>
              <li>
                <strong className="text-[#0D1B2A]">For analytics and statistics:</strong> To understand how visitors interact with the website (which pages they visit most often, how long they stay), which helps us improve the structure and content of the website.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">3.</span> Types of cookies used
            </h2>
            <div className="space-y-4 mt-2">
              <div className="border-l-4 border-l-[#F87E2E] pl-4">
                <h3 className="font-bold text-[#0D1B2A] text-sm sm:text-base">Necessary cookies</h3>
                <p className="text-xs sm:text-sm mt-1">
                  These cookies are essential for the website to function. Without them, some parts of the website may not work properly. They are typically set only in response to actions made by you, such as filling out contact forms.
                </p>
              </div>
              <div className="border-l-4 border-l-[#0D1B2A]/40 pl-4">
                <h3 className="font-bold text-[#0D1B2A] text-sm sm:text-base">Analytics cookies</h3>
                <p className="text-xs sm:text-sm mt-1">
                  We use third-party tools (such as Google Analytics) to collect anonymous information about the number of visitors and the most popular pages. This data helps us improve the user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#0D1B2A] flex items-center gap-2">
              <span className="text-[#F87E2E]">4.</span> How to manage and delete cookies?
            </h2>
            <p>
              Most browsers are set to automatically accept cookies. You can change your browser settings at any time to block cookies or to be warned when they are sent.
            </p>

            <div className="pt-2">
              <p className="font-bold text-[#0D1B2A] mb-3 text-xs sm:text-sm uppercase tracking-wider">
                Instructions for the most popular browsers:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Google Chrome</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.apple.com/lv-lv/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Safari</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>Mozilla Firefox</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
                <a
                  href="https://support.microsoft.com/lv-lv/topic/168dab11-0753-043d-7c16-ede5947798d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#FAF9F5] border border-[#EAE6DD] hover:border-[#F87E2E] hover:bg-white transition-all rounded-xl text-xs font-bold text-[#0D1B2A] group"
                >
                  <span>MS Edge</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8C8A84] group-hover:text-[#F87E2E] transition-colors" />
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8C8A84] bg-[#FAF9F5] p-4 rounded-xl border border-[#EAE6DD] mt-4">
              <strong>Please note:</strong> If you block cookies, some features of our website may not be available or may function incompletely.
            </p>

            <p className="pt-4 border-t border-[#F2ECE0]">
              If you have any questions about our cookie policy, please contact us by writing to:{" "}
              <a href="mailto:travelwithmartinss@gmail.com" className="text-[#F87E2E] hover:underline font-semibold">
                travelwithmartinss@gmail.com
              </a>
            </p>
          </section>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F7F7F7] min-h-screen pt-36 pb-24"
    >
      {/* Home navigācijas poga - saskaņota ar max-w-7xl galamērķu lapas izkārtojumu */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex justify-start">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#EAE6DD] rounded-full text-xs font-bold uppercase tracking-wider text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white transition-all shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{getHomeText()}</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Page Header */}
        <div className="text-center flex flex-col items-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F87E2E] bg-[#0D1B2A]/5 px-3 py-1 rounded inline-block">
            {getBadgeText()}
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-[#0D1B2A] tracking-tight uppercase">
            {getPageTitle()}
          </h1>
          <div className="w-16 h-1 bg-[#F87E2E] mx-auto mt-2" />
          <p className="text-xs text-[#8C8A84] italic pt-3">
            {getLastUpdatedText()}
          </p>
        </div>

        {/* Main Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-[#EAE6DD] rounded-3xl p-8 sm:p-12 shadow-sm space-y-8 text-sm sm:text-base text-[#5A5854] leading-relaxed"
        >
          <div className="flex items-start gap-4 p-4 bg-[#F87E2E]/5 rounded-2xl border border-[#F87E2E]/10">
            <ShieldCheck className="w-6 h-6 text-[#F87E2E] flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#0D1B2A]">
              {getIntroText()}
            </p>
          </div>

          {renderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
}
