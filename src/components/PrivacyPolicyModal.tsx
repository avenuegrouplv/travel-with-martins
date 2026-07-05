import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: ModalProps) {
  const { lang } = useLanguage();

  const renderContent = () => {
    if (lang === "LV") {
      return (
        <div className="space-y-6 text-sm text-[#5A5854] leading-relaxed">
          <p className="text-xs text-[#8C8A84] italic">
            Pēdējo reizi atjaunots: 2025.gada maijs
          </p>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">1. Ievads</h4>
            <p>
              Izmantojot mūsu mājas lapu un pakalpojumus, Jūs piekrītat šajā politikā aprakstītajai datu vākšanai un izmantošanai.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">1. Datu pārzinis</h4>
            <div className="bg-[#F2ECE0]/40 p-4 rounded-xl border border-[#EAE6DD] space-y-1">
              <p><strong>Pašnodarbināta persona:</strong> Mārtiņš Šics</p>
              <p><strong>Reģistrācijas numurs:</strong> 29017912210</p>
              <p className="pt-2"><strong>Kontakti:</strong></p>
              <p>Juridiskā adrese: Rīga, Brīvības gatve 201, LV-1050</p>
              <p>E-pasts: <a href="mailto:travelwithmartinss@gmail.com" className="text-[#F87E2E] hover:underline font-semibold">travelwithmartinss@gmail.com</a></p>
              <p>Tālrunis: <a href="tel:+37127061369" className="text-[#F87E2E] hover:underline font-semibold">+371 27061369</a></p>
            </div>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">2. Juridiskais pamats</h4>
            <p>
              Personas datu apstrādātājs – fiziska vai juridiska persona, kas pašnodarbinātās personas uzdevumā apstrādā Klienta personas datus, lai nodrošinātu pakalpojumu sniegšanu. Personas datu apstrādātājs veic personas datu apstrādi tikai saskaņā ar pašnodarbinātās personas norādījumiem un piemēro atbilstošus tehniskos un organizatoriskos drošības pasākumus, ievērojot Eiropas Parlamenta un Padomes Regulu (ES) 2016/679 un Latvijas Republikas normatīvos aktus. Informāciju par personas datu apstrādātājiem Klients var saņemt, iesniedzot pašnodarbinātajai personai rakstveida pieprasījumu.
            </p>
            <p>
              <strong>Piemērojamie normatīvie akti</strong> – Eiropas Parlamenta un padomes Regula Nr.2016/679 par fizisku personu aizsardzību attiecībā uz personas datu apstrādi un šādu datu brīvu apriti (2016. gada 27.aprīlis); Fizisko personu datu apstrādes likums.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">3. Kādus personas datus mēs vācam</h4>
            <p>Mēs varam apkopot un apstrādāt šādu informāciju par Jums:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Kontaktinformācija:</strong> vārds, uzvārds, uzņēmuma nosaukums (ja piemērojams), e-pasta adrese, tālruņa numurs.</li>
              <li><strong>Tehniskā informācija:</strong> IP adrese, pārlūkprogrammas veids, ierīces informācija, apmeklējuma laiks un datums.</li>
              <li><strong>Lietošanas dati:</strong> informācija par to, kā Jūs izmantojat mūsu mājas lapu un pakalpojumus, tostarp apmeklētās lapas, sesijas ilgums un citas darbības mājas lapā.</li>
              <li><strong>Saziņas dati:</strong> Jūsu ziņojumu un komunikācijas saturs ar mums.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">4. Kā mēs izmantojam Jūsu datus</h4>
            <p>Mēs apstrādājam Jūsu personas datus un izmantojam sīkdatnes šādiem mērķiem:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>lai sniegtu Jūsu pieprasītos pakalpojumus un atbildētu uz Jūsu pieprasījumiem;</li>
              <li>lai sazinātos ar Jums par mūsu pakalpojumiem un piedāvājumiem;</li>
              <li>lai sagatavotu rēķinus, nodrošinānu grāmatvedības uzskaiti un izpildītu normatīvajos aktos noteiktās prasības;</li>
              <li>lai uzlabotu mūsu mājas lapu un pakalpojumu kvalitāti;</li>
              <li>lai izpildītu juridiskās saistības un aizsargātu savas likumīgās intereses.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">5. Personas datu apstrādes tiesiskais pamats</h4>
            <p>Mēs apstrādājam Jūsu personas datus, pamatojoties uz:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Jūsu piekrišanu</strong> – gadījumos, kad normatīvie akti paredz piekrišanas saņemšanu (piemēram, analītikas sīkdatņu izmantošanai vai mārketinga paziņojumu saņemšanai);</li>
              <li><strong>Līguma noslēgšanu un izpildi</strong>, kā arī pirmslīguma darbību veikšanu pēc Jūsu pieprasījuma;</li>
              <li><strong>Juridisko pienākumu izpildi</strong> – lai izpildītu Latvijas Republikas un Eiropas Savienības normatīvajos aktos noteiktās prasības;</li>
              <li><strong>Leģitīmajām interesēm</strong> – lai uzlabotu mūsu pakalpojumus, nodrošinātu mājas lapas drošību un aizsargātu savas likumīgās intereses.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">6. Datu uzglabāšana un drošība</h4>
            <p>
              Mēs uzglabājam Jūsu personas datus tikai tik ilgi, cik tas ir nepieciešams šajā privātuma politikā norādīto mērķu sasniegšanai vai ciktāl to nosaka piemērojamie normatīvie akti.
            </p>
            <p>
              Personas datu glabāšanas termiņi tiek noteikti atbilstoši datu apstrādes mērķim un normatīvo aktu prasībām. Piemēram, grāmatvedības dokumenti tiek glabāti normatīvajos aktos noteiktajos termiņos.
            </p>
            <p>
              Mēs izmantojam atbilstošus tehniskos un organizatoriskos drošības pasākumus, lai aizsargātu Jūsu datus pret nesankcionētu piekļuvi, izmantošanu vai izpaušanu:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>SSL šifrēšanu datu pārsūtīšanai;</li>
              <li>ierobežotu piekļuvi personas datiem;</li>
              <li>regulāras drošības pārbaudes un sistēmu atjauninājumus.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">7. Jūsu tiesības</h4>
            <p>Saskaņā ar Vispārīgo datu aizsardzības regulu (GDPR) Jums ir šādas tiesības attiecībā uz saviem personas datiem:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>piekļuves tiesības</strong> – pieprasīt piekļuvi saviem personas datiem;</li>
              <li><strong>labošanas tiesības</strong> – labot neprecīzus vai nepilnīgus datus;</li>
              <li><strong>dzēšanas tiesības</strong> – pieprasīt savu datu dzēšanu ("tiesības tikt aizmirstam");</li>
              <li><strong>apstrādes ierobežošanas tiesības</strong>;</li>
              <li><strong>datu pārnesamības tiesības</strong> – saņemt savus datus strukturētā, plaši izmantotā un mašīnlasāmā formātā;</li>
              <li><strong>tiesības iebilst</strong> pret personas datu apstrādi;</li>
              <li><strong>tiesības jebkurā laikā atsaukt savu piekrišanu</strong>, ja datu apstrāde balstās uz piekrišanu.</li>
            </ul>
            <p className="pt-2">
              Lai izmantotu savas tiesības, lūdzu, sazinieties ar mums, izmantojot šīs privātuma politikas sākumā norādīto kontaktinformāciju.
            </p>
            <p>
              Ja uzskatāt, ka Jūsu personas datu apstrāde pārkāpj piemērojamos normatīvos aktus, Jums ir tiesības iesniegt sūdzību Datu valsts inspekcijā.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">8. Sīkdatnes (Cookies)</h4>
            <p>
              Mūsu mājas lapa izmanto sīkdatnes, lai nodrošinātu tās darbību, uzlabotu lietošanas profesionālo pieredzi un analizētu mājas lapas apmeklējumu. Sīkdatnes ir mazi teksta faili, kas tiek saglabāti Jūsu ierīcē.
            </p>
            <p>Mēs izmantojam:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>nepieciešamās sīkdatnes, kas nodrošina mājas lapas pamatfunkcionalitāti;</li>
              <li>analītikas sīkdatnes, kas palīdz analizēt mājas lapas lietojumu. Analītikas sīkdatnes tiek izmantotas tikai pēc Jūsu piekrišanas, ja to pieprasa piemērojamie normatīvie akti.</li>
            </ul>
            <p className="pt-2">
              Jūs jebkurā laikā varat pārvaldīt vai dzēst sīkdatnes savas pārlūkprogrammas iestatījumos.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">9. Trešo pušu pakalpojumi</h4>
            <p>
              Mēs varam izmantot uzticamus trešo pušu pakalpojumu sniedzējus, piemēram, mājas lapas mitināšanas (hostinga), informācijas tehnoloģiju, grāmatvedības, e-pasta pakalpojumu, analītikas rīku (piemēram, Google Analytics), maksājumu apstrādes un citu ar pakalpojumu sniegšanu saistītu pakalpojumu sniedzējus.
            </p>
            <p>
              Šie pakalpojumu sniedzēji personas datiem piekļūst un tos apstrādā tikai tādā apjomā, kāds nepieciešams to pakalpojumu sniegšanai, un saskaņā ar noslēgtajiem datu apstrādes līgumiem un piemērojamo normatīvo aktu prasībām.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">10. Izmaiņas privātuma politikā</h4>
            <p>
              Mēs paturam tiesības jebkurā laikā atjaunināt šo privātuma politiku. Izmaiņas stājas spēkā pēc atjauninātās privātuma politikas publicēšanas mūsu mājas lapā, ja nav noteikts citādi.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">11. Sūdzības</h4>
            <p>
              Ja Jums ir sūdzības, lūdzu, vispirms sazinieties ar mums. Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā:
            </p>
            <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#EAE6DD] space-y-1 text-xs">
              <p className="font-bold">Datu valsts inspekcija</p>
              <p>Adrese: Blaumaņa iela 11/13-15, Rīga, LV-1011</p>
              <p>E-pasts: <a href="mailto:info@dvi.gov.lv" className="hover:underline text-[#F87E2E]">info@dvi.gov.lv</a></p>
              <p>Tālrunis: +371 67 22 31 31</p>
              <p>Mājas lapa: <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#F87E2E]">www.dvi.gov.lv</a></p>
            </div>
          </section>
        </div>
      );
    } else if (lang === "RU") {
      return (
        <div className="space-y-6 text-sm text-[#5A5854] leading-relaxed">
          <p className="text-xs text-[#8C8A84] italic">
            Последнее обновление: май 2025 года
          </p>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">1. Введение</h4>
            <p>
              Используя наш сайт и услуги, вы соглашаетесь на сбор и использование данных, описанных в настоящей политике.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">1. Контроллер данных</h4>
            <div className="bg-[#F2ECE0]/40 p-4 rounded-xl border border-[#EAE6DD] space-y-1">
              <p><strong>Самозанятое лицо:</strong> Mārtiņš Šics (бренд "Travel with Martins")</p>
              <p><strong>Регистрационный номер:</strong> 29017912210</p>
              <p className="pt-2"><strong>Контакты:</strong></p>
              <p>Юридический адрес: Рига, Brīvības gatve 201, LV-1050</p>
              <p>Эл. почта: <a href="mailto:travelwithmartinss@gmail.com" className="text-[#F87E2E] hover:underline font-semibold">travelwithmartinss@gmail.com</a></p>
              <p>Телефон: <a href="tel:+37127061369" className="text-[#F87E2E] hover:underline font-semibold">+371 27061369</a></p>
            </div>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">2. Правовая основа</h4>
            <p>
              Обработчик персональных данных – физическое или юридическое лицо, которое обрабатывает персональные данные Клиента по поручению самозанятого лица в целях обеспечения предоставления услуг. Обработчик персональных данных осуществляет обработку персональных данных только в соответствии с указаниями самозанятого лица и применяет надлежащие технические и организационные меры безопасности в соответствии с Регламентом Европейского парламента и Совета (ЕС) 2016/679 и нормативными актами Латвийской Республики. Информацию об обработчиках персональных данных Клиент может получить, подав самозанятому лицу письменный запрос.
            </p>
            <p>
              <strong>Применимые законы и правила</strong> – Регламент (ЕС) 2016/679 Европейского парламента и Совета о защите физических лиц в отношении обработки персональных данных и о свободном перемещении таких данных (27 апреля 2016 г.); Закон Латвийской Республики об обработке данных физических лиц.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">3. Какие персональные данные мы собираем</h4>
            <p>Мы можем собирать и обрабатывать следующую информацию о вас:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Контактная информация:</strong> имя, название компании, адрес электронной почты, номер телефона</li>
              <li><strong>Техническая информация:</strong> IP-адрес, тип браузера, информация об устройстве, время и дата посещения</li>
              <li><strong>Данные об использовании:</strong> информация о том, как вы используете наш сайт и услуги</li>
              <li><strong>Данные связи:</strong> содержание ваших сообщений и переписки с нашей компанией</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">4. Как мы используем ваши данные</h4>
            <p>Мы используем ваши персональные данные в следующих целях:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Для предоставления запрошенных вами услуг и ответа на ваши запросы</li>
              <li>Для связи с вами по поводу наших услуг и предложений</li>
              <li>Для улучшения качества нашего сайта и услуг</li>
              <li>Для выполнения юридических обязательств и защиты наших законных интересов</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">5. С какой целью мы обрабатываем ваши данные</h4>
            <p>Мы обрабатываем ваши персональные данные на основании:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Вашего согласия</strong> – когда вы заполняете нашу контактную форму и соглашаетесь с условиями обработки данных</li>
              <li><strong>Исполнения договора</strong> – для предоставления вам запрошенных услуг</li>
              <li><strong>Законного интереса</strong> – для улучшения наших услуг и защиты компании</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">6. Хранение и безопасность данных</h4>
            <p>
              Мы храним ваши персональные данные только до тех пор, пока это необходимо для достижения целей, указанных в настоящей политике, или в соответствии с законом.
            </p>
            <p>
              Мы используем соответствующие технические и организационные меры безопасности для защиты ваших данных от несанкционированного доступа, использования или раскрытия:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>SSL-шифрование для передачи данных</li>
              <li>Ограниченный доступ к персональным данным</li>
              <li>Регулярные проверки безопасности и обновления</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">7. Ваши права</h4>
            <p>В соответствии с GDPR у вас есть следующие права в отношении ваших персональных данных:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Право на доступ</strong> – запросить доступ к вашим персональным данным</li>
              <li><strong>Право на исправление</strong> – исправить неточные или неполные данные</li>
              <li><strong>Право на удаление</strong> – запросить удаление ваших данных («право быть забытым»)</li>
              <li><strong>Право на ограничение</strong> – ограничить обработку ваших данных</li>
              <li><strong>Право на переносимость</strong> – получить ваши данные в структурированном формате</li>
              <li><strong>Право на возражение</strong> – возразить против обработки ваших данных</li>
              <li><strong>Право на отзыв согласия</strong> – отозвать свое согласие на обработку данных в любое время</li>
            </ul>
            <p className="pt-2">
              Для реализации своих прав свяжитесь с нами, используя контактную информацию, указанную в начале настоящей политики.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">8. Файлы куки (Cookies)</h4>
            <p>
              Наш сайт использует файлы куки для улучшения вашего пользовательского опыта и анализа посещений сайта. Файлы куки — это небольшие текстовые файлы, хранящиеся на вашем устройстве.
            </p>
            <p>
              Мы используем необходимые файлы куки (обеспечивающие базовую функциональность) и аналитические файлы куки (помогающие понять, как посетители используют сайт). Вы можете управлять файлами куки в своем браузере.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">9. Услуги третьих лиц</h4>
            <p>
              Мы можем использовать надежных сторонних поставщиков услуг, таких как хостинг веб-сайтов, услуги отправки электронной почты и инструменты аналитики (Google Analytics). Эти поставщики получают доступ к данным только в той мере, в какой это необходимо для выполнения их задач.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">10. Изменения в политике конфиденциальности</h4>
            <p>
              Мы оставляем за собой право обновлять настоящую политику конфиденциальности в любое время. Изменения вступят в силу, как только обновленная политика будет опубликована на нашем сайте.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">11. Жалобы</h4>
            <p>
              Если у вас есть жалобы, пожалуйста, сначала свяжитесь с нами. Вы также имеете право подать жалобу в Государственную инспекцию данных Латвии:
            </p>
            <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#EAE6DD] space-y-1 text-xs">
              <p className="font-bold">Государственная инспекция данных</p>
              <p>Адрес: Blaumaņa Street 11/13-15, Рига, LV-1011</p>
              <p>Эл. почта: <a href="mailto:info@dvi.gov.lv" className="hover:underline text-[#F87E2E]">info@dvi.gov.lv</a></p>
              <p>Телефон: +371 67 22 31 31</p>
              <p>Сайт: <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#F87E2E]">www.dvi.gov.lv</a></p>
            </div>
          </section>
        </div>
      );
    } else {
      return (
        <div className="space-y-6 text-sm text-[#5A5854] leading-relaxed">
          <p className="text-xs text-[#8C8A84] italic">
            Last updated: May 2025
          </p>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">1. Introduction</h4>
            <p>
              By using our website and services, you agree to the collection and use of data described in this policy.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">1. Data Controller</h4>
            <div className="bg-[#F2ECE0]/40 p-4 rounded-xl border border-[#EAE6DD] space-y-1">
              <p><strong>Self-employed person:</strong> Mārtiņš Šics (brand "Travel with Martins")</p>
              <p><strong>Registration number:</strong> 29017912210</p>
              <p className="pt-2"><strong>Contacts:</strong></p>
              <p>Legal address: Riga, Brīvības gatve 201, LV-1050</p>
              <p>E-mail: <a href="mailto:travelwithmartinss@gmail.com" className="text-[#F87E2E] hover:underline font-semibold">travelwithmartinss@gmail.com</a></p>
              <p>Phone: <a href="tel:+37127061369" className="text-[#F87E2E] hover:underline font-semibold">+371 27061369</a></p>
            </div>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">2. Legal Basis</h4>
            <p>
              Personal data processor – a natural or legal person who processes the Client's personal data on behalf of the self-employed person to ensure the provision of services. The personal data processor processes personal data only in accordance with the instructions of the self-employed person and applies appropriate technical and organizational security measures in compliance with Regulation (EU) 2016/679 of the European Parliament and of the Council and the laws and regulations of the Republic of Latvia. The Client can receive information about personal data processors by submitting a written request to the self-employed person.
            </p>
            <p>
              <strong>Applicable laws and regulations</strong> – Regulation (EU) 2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (April 27, 2016); Personal Data Processing Law of the Republic of Latvia.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">3. What Personal Data We Collect</h4>
            <p>We may collect and process the following information about you:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact information:</strong> name, company name, email address, phone number</li>
              <li><strong>Technical information:</strong> IP address, browser type, device information, time and date of visit</li>
              <li><strong>Usage data:</strong> information about how you use our website and services</li>
              <li><strong>Communication data:</strong> content of your messages and communication with our company</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">4. How We Use Your Data</h4>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide you with the requested services and respond to your requests</li>
              <li>To communicate with you about our services and offers</li>
              <li>To improve our website and service quality</li>
              <li>To fulfill legal obligations and protect our legitimate interests</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">5. For What Purpose We Process Your Data</h4>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Your consent</strong> – when you fill out our contact form and agree to the data processing terms</li>
              <li><strong>Performance of a contract</strong> – to provide you with the requested services</li>
              <li><strong>Legitimate interest</strong> – to improve our services and protect the company</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">6. Data Storage and Security</h4>
            <p>
              We store your personal data only as long as necessary to achieve the purposes stated in this policy or in accordance with the law.
            </p>
            <p>
              We use appropriate technical and organizational security measures to protect your data against unauthorized access, use, or disclosure:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>SSL encryption for data transfer</li>
              <li>Limited access to personal data</li>
              <li>Regular security checks and updates</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">7. Your Rights</h4>
            <p>According to GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Right of access</strong> – request access to your personal data</li>
              <li><strong>Right to rectification</strong> – correct inaccurate or incomplete data</li>
              <li><strong>Right to erasure</strong> – request the deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to restriction</strong> – restrict the processing of your data</li>
              <li><strong>Right to portability</strong> – receive your data in a structured format</li>
              <li><strong>Right to object</strong> – object to the processing of your data</li>
              <li><strong>Right to withdraw consent</strong> – withdraw your consent to data processing at any time</li>
            </ul>
            <p className="pt-2">
              To exercise your rights, please contact us using the contact information provided at the beginning of this policy.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">8. Cookies</h4>
            <p>
              Our website uses cookies to improve your user experience and analyze website visits. Cookies are small text files stored on your device.
            </p>
            <p>
              We use necessary cookies (providing basic functionality) and analytics cookies (helping to understand how visitors use the site). You can manage cookies in your browser.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">9. Third-Party Services</h4>
            <p>
              We may use trusted third-party service providers, such as website hosting services, email sending services, and analytics tools (Google Analytics). These providers access data only to the extent necessary to perform their tasks.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">10. Changes to the Privacy Policy</h4>
            <p>
              We reserve the right to update this privacy policy at any time. Changes will take effect as soon as the updated policy is published on our website.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-display font-bold text-[#0D1B2A] text-lg">11. Complaints</h4>
            <p>
              If you have complaints, please contact us first. You also have the right to file a complaint with the Data State Inspectorate of Latvia:
            </p>
            <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#EAE6DD] space-y-1 text-xs">
              <p className="font-bold">Data State Inspectorate</p>
              <p>Address: Blaumaņa Street 11/13-15, Riga, LV-1011</p>
              <p>E-mail: <a href="mailto:info@dvi.gov.lv" className="hover:underline text-[#F87E2E]">info@dvi.gov.lv</a></p>
              <p>Phone: +371 67 22 31 31</p>
              <p>Website: <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#F87E2E]">www.dvi.gov.lv</a></p>
            </div>
          </section>
        </div>
      );
    }
  };

  const getTitle = () => {
    if (lang === "LV") return "Privātuma politika";
    if (lang === "RU") return "Политика конфиденциальности";
    return "Privacy Policy";
  };

  const getCloseBtnText = () => {
    if (lang === "LV") return "Aizvērt";
    if (lang === "RU") return "Закрыть";
    return "Close";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black cursor-pointer"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#FAF9F5] text-[#2C2B29] rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#EAE6DD]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#8C8A84] hover:text-[#0D1B2A] rounded-full hover:bg-[#F2ECE0] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-display font-black text-[#0D1B2A] mb-6 uppercase tracking-tight">
              {getTitle()}
            </h3>
            
            {renderContent()}

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#0D1B2A] text-white rounded-full text-xs font-bold hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-colors cursor-pointer uppercase tracking-wider"
              >
                {getCloseBtnText()}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
