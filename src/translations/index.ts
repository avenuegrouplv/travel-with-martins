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
  LV: {
    header: {
      home: "SĀKUMS",
      collab: "KĀ NOTIEK SADARBĪBA",
      destinations: "GALAMĒRĶI",
      faq: "BUJ",
      blog: "BLOGS",
      contacts: "KONTAKTI",
      contactBtn: "Sazināties",
    },
    home: {
      heroSlides: [
        {
          title: "Ceļo patstāvīgi un nopelni",
          text: "Sāc ceļot patstāvīgi un veido savu brīvo dzīvesveidu ar papildu ienākumiem",
          highlights: ["ceļot patstāvīgi", "brīvo dzīvesveidu", "papildu ienākumiem"],
        },
        {
          title: "Dzīvesveida maiņa",
          text: "Atklāj, kā ceļošanu pārvērst par savu dzīvesveidu un reālu papildu ienākumu avotu",
          highlights: ["dzīvesveidu", "papildu ienākumu"],
        },
        {
          title: "Personīgs mentorings",
          text: "Saņem personīgu mentora atbalstu, lai ceļotu patstāvīgi un veidotu savu biznesu",
          highlights: ["mentora atbalstu", "savu biznesu"],
        },
        {
          title: "Brīvība bez robežām",
          text: "Pievienojies kopienai, lai kopā ceļotu bez robežām, gūtu brīvību un pelnītu patstāvīgi",
          highlights: ["Pievienojies kopienai", "bez robežām", "pelnītu patstāvīgi"],
        },
        {
          title: "Finansiāla neatkarība",
          text: "Lauz aizspriedumus par dārgu atpūtu un dodies savā ceļā uz finansiālu brīvību",
          highlights: ["Lauz aizspriedumus", "finansiālu brīvību"],
        },
      ],
      quickStats: {
        countries: "Apmeklētās valstis",
        projects: "Veidotie maršruti",
        clients: "Laimīgi klienti",
        rating: "Klientu vērtējums",
      },
      aboutBadge: "Par projektu",
      aboutTitle: "MANS STĀSTS & MISIJA",
      aboutSubtitle: "KĀPĒC TRAVEL WITH MARTINS?",
      aboutIntro: "Mani sauc Mārtiņš. Es vienmēr esmu meklējis iespējas, kas ļauj cilvēkiem dzīvot pilnvērtīgāk, gudrāk un ar lielāku izvēles brīvību.",
      aboutBody: "2018. gadā es pievērsos ceļojumu nozarei. Kopš tā laika esmu iepazinis ne tikai skaistas pasaules vietas, bet arī cilvēkus, kultūras un iespējas, kuras ceļošana var sniegt ikvienam. Ar laiku sapratu, ka ceļojumi nav tikai atpūta. Tie paplašina redzesloku, palīdz iegūt jaunus draugus, attīsta domāšanu un bieži vien pilnībā maina skatījumu uz dzīvi.",
      aboutQuote: "Esmu radījis projektu Travel with Martins, kurā es palīdzu cilvēkiem mainīt dzīvesveidu un ceļot vairāk, izvēlēties piemērotākos galamērķus, kas dod iespēju dzīvē iegūt lielāku brīvību un vienlaikus arī papildus nopelnīt.",
      advantagesBadge: "Tavas priekšrocības",
      advantagesTitle: "KĀPĒC IZVĒLĒTIES ŠO IESPĒJU?",
      advantages: [
        {
          title: "Izdevīgākas cenas",
          desc: "Piekļūsti slēgtiem piedāvājumiem, kurus neatradīsi parastajās rezervēšanas vietnēs. Ietaupi naudu katrā braucienā.",
        },
        {
          title: "Mentora atbalsts",
          desc: "Esmu Tavs personīgais gids un padomdevējs. Palīdzēšu ar padomiem, ieteikumiem un atbildēšu uz visiem jautājumiem.",
        },
        {
          title: "Brīvība & ienākumi",
          desc: "Tā nav tikai ceļošana – tā ir iespēja veidot savu biznesu, strādāt no jebkuras vietas pasaulē un gūt papildu ienākumus.",
        },
        {
          title: "Kopiena & tīklošanās",
          desc: "Pievienojies līdzīgi domājošu cilvēku kopienai, kuri mīl ceļot, dalās pieredzē un iedvesmo viens otru jauniem sasniegumiem.",
        },
      ],
      stepsBadge: "Tikai 4 vienkārši soļi",
      stepsTitle: "KĀ SĀKT SADARBĪBU?",
      stepsSubtitle: "Ceļš uz Tavu sapņu ceļojumu un jaunu dzīvesveidu ir vieglāks nekā Tu domā. Sāc jau šodien!",
      steps: [
        { title: "Piesakies prezentācijai", desc: "Izvēlies sev ērtāko laiku un piesakies bezmaksas tiešsaistes prezentācijai." },
        { title: "Gūsti skaidrību", desc: "Prezentācijas laikā uzzini visu par platformas darbību un priekšrocībām." },
        { title: "Individuāla saruna", desc: "Saskaņosim individuālu tikšanos, lai pielāgotu labākos risinājumus tieši Tev." },
        { title: "Sāc ceļot & pelnīt", desc: "Pieņem lēmumu un pievienojies mūsu komandai, lai ceļotu izdevīgāk un veidotu savu biznesu." },
      ],
      reviewsBadge: "Klientu atsauksmes",
      reviewsTitle: "KO SAKA CITI CEĻOTĀJI?",
      reviews: [
        { author: "Jānis Bērziņš", role: "Uzņēmējs", text: "Pateicoties Mārtiņa atbalstam un ieteikumiem, mūsu ģimenes ceļojums uz Turciju bija ne tikai lētāks, bet arī daudz labāk organizēts. Lieliska sadarbība un profesionāla pieeja!" },
        { author: "Laura Kalniņa", role: "Mārketinga speciāliste", text: "Es vienmēr esmu gribējusi ceļot vairāk, bet baidījos no lielām izmaksām. Šis projekts pilnībā mainīja manu skatījumu! Tagad varu atļauties ceļot 3-4 reizes gadā un vēl gūt ienākumus." },
        { author: "Andris Zariņš", role: "Frīlancers", text: "Lieliska platforma un vēl labāks mentors! Mārtiņš vienmēr palīdz ar noderīgiem padomiem. Ienākumu gūšanas iespēja ļauj man strādāt no jebkuras pasaules malas." },
        { author: "Kristīne Ozola", role: "Skolotāja", text: "Sākumā biju skeptiska, bet pēc bezmaksas Zoom prezentācijas sapratu, ka šī ir reāla iespēja. Esmu ļoti apmierināta ar ietaupījumu rezervācijām un draudzīgo kopienu!" },
      ],
      instaTitle: "Mūsu ceļojumu mirkļi",
      instaSubtitle: "Seko līdzi piedzīvojumiem un smelies iedvesmu nākamajiem galamērķiem",
    },
    collab: {
      badge: "Sadarbības process",
      title: "Kā notiek sadarbība?",
      subtitle: "Neatkarīgi no tā, vai meklē savu nākamo ceļojumu vai vienkārši vēlies uzzināt vairāk par iespējām, process ir vienkāršs, brīvs un caurspīdīgs.",
      steps: [
        {
          title: "Piesakies Zoom prezentācijai",
          desc: "Izvēlies sev ērtāko laiku un piesakies tiešsaistes prezentācijai, lai uzzinātu vairāk par piedāvātajām ceļojumu un izaugsmes iespējām. Šī tikšanās ir lielisks pirmais solis, lai gūtu vispārēju priekšstatu par to, kā es strādāju un kādu vērtību Tu vari iegūt. Prezentācijas laikā es ne tikai stāstu par aizraujošiem galamērķiem, bet arī par veidiem, kā ceļot ekonomiski izdevīgāk. Reģistrācijas process aizņem vien pāris sekundes, un saite uz tikšanos tiks nosūtīta tieši uz Tavu e-pastu. Tev nav nepieciešamas nekādas iepriekšējas zināšanas vai sagatavošanās – vienkārši pieslēdzies un iedvesmojies jaunām iespējām.",
        },
        {
          title: "Iepazīsties ar informāciju",
          desc: "Prezentācijas laikā gūsti pilnvērtīgu, uzskatāmu priekšstatu par procesiem un droši uzdod visus sev interesējošos jautājumus. Es detalizēti pastāstīšu par pārbaudītām ceļojumu platformām, īpašajiem piedāvājumiem un manu individuālo atbalsta sistēmu. Tu redzēsi reālus piemērus, kā cilvēki visā pasaulē jau šobrīd ceļo biežāk un gudrāk, apvienojot vaļasprieku ar ienākumu gūšanu. Tikšanās norit brīvā, draudzīgā atmosfērā, kurā katra dalībnieka viedoklis un jautājums ir svarīgs. Tas ir labākais vai drošākais veids, kā kliedēt šaubas un uzzināt patiesību tieši no pirmavota.",
        },
        {
          title: "Rezervē individuālu sarunu",
          desc: "Pēc prezentācijas varam aprunāties individuāli, lai detalizētāk pielāgotu risinājumus tieši Tavām vēlmēm un personīgajiem mērķiem. Katram no mums ir atšķirīgs dzīves ritms, budžets un ceļojumu sapņi, tāpēc individuālā saruna palīdz atrast tieši Tev vispiemērotāko ceļu. Sarunā varam izrunāt konkrētus galamērķus, izmaksu tāmes vai izveidot personalizētu rīcības plānu. Šī saruna ir pilnīgi konfidenciāla un ir vērsta uz Tavu personīgo izaugsmi un ērtībām. Mana prioritāte ir sniegt Tev maksimālu atbalstu, lai Tu justos droši par katru nākamo soli.",
        },
        {
          title: "Pieņem informētu lēmumu",
          desc: "Izvērtē iegūto informāciju un pieņem galīgo lēmumu pilnīgi patstāvīgi – bez jebkāda steidzināšanas, spiediena vai uzbāzības. Es ticu, ka labākie lēmumi ir tie, kas pieņemti ar mierīgu prātu un pilnīgu pārliecību. Tāpēc pēc sarunas es Tev došu tik daudz laika, cik nepieciešams, lai visu apdomātu un pārrunātu ar ģimeni. Ja izvēlēsies sadarboties, es nekavējoties sākšu ceļojuma plānošanu, savukārt, ja nolemsi, ka tas šobrīd nav Tev, mēs tāpat paliksim labi paziņas. Jebkurā gadījumā Tu būsi ieguvis vērtīgas zināšanas, kas noderēs Tavos nākotnes braucienos.",
        },
      ],
      bottomText1: "Profesionāla sadarbība ceļojumu plānošanā un tūrisma biznesa attīstībā ir balstīta uz savstarpēju uzticēšanos, caurspīdīgumu un individuālu pieeju. Kā Tavs personīgais mentors un ceļojumu konsultants es nodrošinu pilnu atbalstu ikvienā posmā – no pirmās Zoom prezentācijas līdz veiksmīgi realizētam sapņu ceļojumam un jaunu ienākumu avotu izveidei.",
      bottomText2: "Izvēloties sadarbību ar mani, Tu iegūsti ne tikai piekļuvi labākajiem tūrisma nozares rīkiem un ekskluzīvām cenām, bet arī drošības sajūtu un praktisku padomdevēju, kurš vienmēr ir viena zvana attālumā. Sāc savu ceļu uz lielāku brīvību jau šodien un pārliecinies, cik vienkārša un patīkama var būt gudra ceļošana!",
      toHome: "Uz sākumu",
    },
    destinations: {
      toHome: "Uz sākumu",
      badge: "Skaistākās pasaules vietas",
      title: "Populārākie galamērķi",
      subtitle: "Esmu apkopojis dažus no iecienītākajiem ceļotāju galamērķiem. Katrs no tiem piedāvā unikālu pieredzi, krāšņu dabu un neizmirstamus iespaidus.",
      filterAll: "Visi",
      filterEurope: "Eiropa",
      filterExotic: "Eksotiskie",
      durationLabel: "Ilgums",
      viewLabel: "Skatīt →",
      noResults: "Nav atrasts neviens galamērķis šajā kategorijā.",
      resetFilter: "Rādīt visus",
      modalClose: "Aizvērt",
      modalDuration: "Ilgums:",
      modalPriceFrom: "Cena no:",
      modalRequestBtn: "Pieteikt konsultāciju par šo galamērķi",
      items: {
        turcija: {
          name: "Turcija",
          description: "Krāšņi austrumu tirgi, iespaidīgas Kapadokijas ainavas ar gaisa baloniem un siltā Vidusjūra. Perfekta atpūta un bagāta vēsture ikvienam.",
          duration: "7-10 dienas",
          tags: ["Viss iekļauts", "Pludmales", "Kultūra"],
        },
        grieķija: {
          name: "Grieķija",
          description: "Balti namiņi ar ziliem jumtiem, gleznainas Egejas jūras salas un pasaules vēstures šūpulis Atēnās. Izbaudi izcilu grieķu virtuvi un dabu.",
          duration: "7 dienas",
          tags: ["Salas", "Vēsture", "Gleznaini"],
        },
        ēģipte: {
          name: "Ēģipte",
          description: "Mistiskās piramīdas, varenais Nīlas krasts un viens no pasaules skaistākajiem koraļļu rifiem Sarkanajā jūrā. Lielisks siltums visu gadu.",
          duration: "7-9 dienas",
          tags: ["Koraļļu rifi", "Piramīdas", "Siltums"],
        },
        spānija: {
          name: "Spānija",
          description: "Katalonijas arhitektūra, kaislīgais flamenko, saulainā Maljorka un gardās tapas. Spānija iedvesmo ar savu dzīvesprieku un dienvidu temperamentu.",
          duration: "7-12 dienas",
          tags: ["Pludmales", "Arhitektūra", "Tapas"],
        },
        kipra: {
          name: "Kipra",
          description: "Afrodītes dzimtene ar bezgala zilām lagūnām un mājīgiem zvejnieku ciematiem. Ļoti saulains galamērķis ar izcili tīrām pludmalēm.",
          duration: "7 dienas",
          tags: ["Zilā lagūna", "Miers", "Saulains"],
        },
        taizeme: {
          name: "Taizeme",
          description: "Eksotiskais Puketas skaistums, zeltainie budistu tempļi, tropiskie džungļi un neatkārtojamais ielu ēdiens. Maģiska Āzijas viesmīlība.",
          duration: "10-14 dienas",
          tags: ["Eksotika", "Tempļi", "Daba"],
        },
        maldivu_salas: {
          name: "Maldīvu salas",
          description: "Tirkīzzils ūdens, baltas smiltis un luksusa mājiņas tieši virs ūdens. Absolūts miers, romantika un dabas skaistums tālu prom no ikdienas.",
          duration: "8-12 dienas",
          tags: ["Luksuss", "Miers", "Romantika"],
        },
        dominikana: {
          name: "Dominikāna",
          description: "Karību jūras pērle ar nebeidzamām kokospalmu audzēm un sirdi sildošiem bačatas ritmiem. Paradīze, kur saule un jūra satiekas katru dienu.",
          duration: "10-12 dienas",
          tags: ["Karību jūra", "Eksotika", "Palmas"],
        },
        aae: {
          name: "Apvienotie Arābu Emirāti",
          description: "Nākotnes arhitektūras pilsēta Dubaija tuksneša vidū, pasaules augstākie debesskrāpji un austrumu luksuss apvienojumā ar augstākajām tehnoloģijām.",
          duration: "7-8 dienas",
          tags: ["Luksuss", "Tuksnesis", "Arhitektūra"],
        },
      },
    },
    faq: {
      toHome: "Uz sākumu",
      badge: "Atbildes uz jautājumiem",
      title: "Biežāk uzdotie jautājumi",
      subtitle: "Zemāk esmu apkopojis biežāk uzdotos jautājumus, lai sniegtu Tev maksimālu skaidrību par procesiem, laika patēriņu un nosacījumiem.",
      noAnswerTitle: "Neatradi atbildi uz savu jautājumu?",
      noAnswerDesc: "Ja Tev ir radušies kādi specifiski jautājumi, droši sazinies ar mani personīgi, rakstot e\u2011pastu vai aizpildot saziņas formu.",
      askBtn: "Uzdod jautājumu",
      items: [
        { question: "Vai man ir nepieciešama iepriekšēja pieredze?", answer: "Nē. Iepriekšēja pieredze nav nepieciešama. Daudzi cilvēki sāk pilnīgi bez priekšzināšanām. Svarīgākais ir vēlme uzzināt ko jaunu, mācīties un būt atvērtam jaunām iespējām." },
        { question: "Cik daudz laika tas prasa?", answer: "Tas ir atkarīgs no Tavām vēlmēm un iespējām. Lielākā daļa cilvēku sāk paralēli savam pamatdarbam un velta tam tik daudz laika, cik paši var un vēlas." },
        { question: "Vai Zoom prezentācija ir bez maksas?", answer: "Jā. Dalība Zoom prezentācijā ir pilnīgi bez maksas un neuzliek nekādas saistības." },
        { question: "Vai pēc prezentācijas man būs kaut kas jāiegādājas?", answer: "Nē. Prezentācijas mērķis ir iepazīstināt Tevi ar iespējām un atbildēt uz Taviem jautājumiem. Tikai pēc tam Tu pats vari izlemt, vai vēlies spert nākamo soli." },
        { question: "Kā notiek pirmā konsultācija?", answer: "Pēc Zoom prezentācijas varat pieteikt individuālu sarunu ar mani. Tās laikā pārrunāsim Tavus jautājumus, intereses un mērķus, lai kopīgi izvērtētu, vai šī iespēja ir piemērota tieši Tev." },
        { question: "Vai man būs jāslēdz kāds līgums vai jāuzņemas saistības?", answer: "Nē. Pirmais solis ir tikai iepazīšanās ar informāciju. Nekādi līgumi vai saistības netiek uzņemtas, kamēr pats neesi pieņēmis apzinātu lēmumu." },
        { question: "Vai varu sazināties ar Tevi arī pēc prezentācijas?", answer: "Protams. Ja pēc prezentācijas rodas papildu jautājumi vai vēlies individuāli pārrunāt sev interesējošās tēmas, droši sazinies ar mani. Labprāt palīdzēšu un dalīšos savā pieredzē." },
        { question: "Kam šī iespēja ir vispiemērotākā?", answer: "Tā ir piemērota cilvēkiem, kuri vēlas ceļot vairāk, iepazīt jaunus cilvēkus, attīstīt sevi un uzzināt par iespējām, kas var sniegt lielāku brīvību un papildu ienākumus. Nav nozīmes ne vecumam, ne iepriekšējai pieredzei – svarīgākais ir interese un vēlme uzzināt vairāk." },
      ],
    },
    blog: {
      toHome: "Uz sākumu",
      badge: "Pasaules apceļošanas stāsti",
      title: "Ceļojumu blogs",
      subtitle: "Lasi manus un mūsu kopienas ceļojumu stāstus, praktiskus padomus un iedvesmojošus piedzīvojumus no visas pasaules.",
      readMore: "Lasīt rakstu",
      sidebarPopular: "Populāri raksti",
      sidebarCategories: "Kategorijas",
      sidebarAll: "Visi raksti",
      posts: [
        {
          id: "turcijas-slepenie-dargumi",
          title: "Turcijas slepenie dārgumi: kur pazūd tūristu pūļi",
          desc: "Visi zina Antāliju un Alanju, bet vai esi dzirdējis par Kabakas līci vai senajām Likijas pilsētām? Šajā rakstā atklāšu vietas, kur baudīt dabu un mieru.",
          content: "Turcija ir pārsteidzoša valsts, kas slēpj daudz vairāk par populārajiem 'Viss iekļauts' kūrortiem. Kamēr lielākā daļa tūristu izvēlas pavadīt laiku viesnīcu baseinos, dažu stundu braucienā atrodas neskarta daba, kur kalni satiekas ar tirkīzzilu jūru. Viens no tādiem dārgumiem ir Kabakas līcis (Kabak Koyu) – idilliska vieta dabas mīļotājiem, kur nav lielu viesnīcu, bet ir mājīgi koka namiņi un telšu vietas. Vēl viens brīnums ir senā Likijas taka, kas stiepjas gar visu dienvidrietumu krastu, piedāvājot elpu aizraujošus skatus uz Vidusjūru un iespēju izpētīt tūkstošiem gadu senas kapenes un pilsētu drupas pilnīgā mierā. Izvēlies gudra ceļotāja ceļu un iepazīsti Turcijas patieso dvēseli!",
        },
        {
          id: "gudras-celosanas-pamati",
          title: "Kā ceļot 4 reizes gadā bez milzīga budžeta",
          desc: "Gudra ceļošana ir māksla izmantot pareizos rīkus un stratēģijas. Dalos ar saviem pārbaudītiem zelta likumiem, kas palīdz ietaupīt uz lidojumiem un naktsmītnēm.",
          content: "Ceļošana nav tikai miljonāru privilēģija. Patiesībā, pareizi plānojot un izmantojot mūsdienu platformu sniegtās iespējas, Tu vari ceļot daudz biežāk, nekā Tev šķiet. Pirmais zelta likums: esi elastīgs ar datumiem un galamērķiem. Dažreiz vienas dienas starpība lidojuma datumos var ietaupīt līdz pat 50% no biļetes cenas. Otrais likums: izmanto slēgtās ceļotāju platformas un kopienas priekšrocības. Šīs platformas piedāvā cenas, kas nav pieejamas publiski, jo tās strādā tieši ar pakalpojumu sniedzējiem. Trešais likums: nebaidies plānot pats. Pašu plānots ceļojums vienmēr ir elastīgāks, interesantāks un, galvenais, finansiāli izdevīgāks. Pievienojies mūsu kopienai, un es iemācīšu Tev visus šos noslēpumus!",
        },
      ],
      upcomingTitle: "Gatavojas publicēšanai",
      upcomingSubtitle: "Tuvākajā laikā mūsu blogā tiks publicēti jauni un aizraujoši raksti no mūsu ceļotājiem.",
      upcomingReadSoon: "Lasīt drīzumā",
      upcomingPosts: [
        { title: "Maldīvu salas par saprātīgu cenu – mīts vai realitāte?", desc: "Pētām vietējo salu sniegtās iespējas un to, kā baudīt tirkīzzilu ūdeni un baltas smiltis bez tūkstošiem eiro tēriņiem." },
        { title: "Kāpēc Āzija maina cilvēka pasaules uztveri", desc: "Personīgs stāsts par pirmo braucienu uz Taizemi, kultūras šoku, budisma filozofiju un ielu ēdiena kultūru." },
        { title: "Mugursomas pakošanas māksla: tikai nepieciešamais", desc: "Praktiski ieteikumi, kā salikt mantas 7 dienu braucienam tikai rokas bagāžā, ietaupot laiku un naudu lidostā." },
        { title: "Tūrisma nākotne un digitālie nomadi", desc: "Kā tehnoloģijas un darbs no mājām ir mainījis ceļošanas paradumus un kāpēc arvien vairāk cilvēku izvēlas dzīvot ceļā." },
      ],
    },
    contactPage: {
      toHome: "Uz sākumu",
      badge: "Saziņa un atrašanās vieta",
      title: "Kontakti",
      intro: "Esmu pieejams gan attālinātām konsultācijām, gan klātienes sarunām pēc iepriekšējas vienošanās. Izvēlies sev ērtāko saziņas veidu!",
      hoursTitle: "Saziņas Laiks",
      hoursDesc1: "Pirmdiena - Piektdiena",
      hoursDesc2: "09:00 - 19:00",
      locationTitle: "Atrašanās vieta",
      locationDesc1: "Rīga, Latvija",
      locationDesc2: "(Un attālināti visā pasaulē)",
      supportTitle: "Atbalsts ceļā",
      supportDesc1: "Maniem klientiem nodrošināts",
      supportDesc2: "atbalsts ceļojumu laikā.",
    },
    contactForm: {
      badge: "Saziņa un konsultācijas",
      title: "Sazinies ar Mārtiņu Šicu",
      subtitle: "Aizpildi formu zemāk un es sazināšos ar Tevi tuvāko 3 stundu laikā, lai atbildētu uz visiem jautājumiem.",
      successTitle: "Sūtījums saņemts!",
      successDesc: "Paldies! Tava ziņa ir veiksmīgi nosūtīta.",
      sendNew: "Sūtīt jaunu ziņu",
      labelName: "Vārds",
      placeholderName: "Ievadi savu vārdu",
      labelPhone: "Tālrunis",
      placeholderPhone: "Ievadi savu tālruņa numuru",
      labelEmail: "E-pasts",
      placeholderEmail: "Ievadi savu e-pastu",
      labelMessage: "Ziņa",
      placeholderMessage: "Uzraksti, ko tieši Tu vēlētos uzzināt vai pajautāt...",
      submitBtn: "Sūtīt ziņu",
      infoTitle: "Saziņas informācija",
      phone: "Tālrunis",
      email: "E-pasts",
    },
    footer: {
      desc: "Ceļošana, kopiena, atbalsts un iespēja nopelnīt. Pievienojies mūsu ceļotāju kopienai, dodies uz sapņu galamērķiem ar mentora atbalstu un veido savu brīvo dzīvesveidu, gūstot papildu ienākumus.",
      linksTitle: "Noderīgas saites",
      contactsTitle: "Kontakti",
      copyright: "2026 © Visas tiesības aizsargātas | Travel with Martins",
    },
    cookieNotice: {
      text: "Šī vietne izmanto sīkdatnes, lai nodrošinātu labāko lietošanas pieredzi.",
      accept: "Piekrītu",
      policy: "Sīkdatņu politika",
    },
  },
  EN: {
    header: {
      home: "HOME",
      collab: "COOPERATION",
      destinations: "DESTINATIONS",
      faq: "FAQ",
      blog: "BLOG",
      contacts: "CONTACTS",
      contactBtn: "Contact Me",
    },
    home: {
      heroSlides: [
        {
          title: "Travel Independently & Earn",
          text: "Start traveling independently and build your free lifestyle with additional income",
          highlights: ["travel independently", "free lifestyle", "additional income"],
        },
        {
          title: "Lifestyle Change",
          text: "Discover how to turn traveling into your lifestyle and a real source of additional income",
          highlights: ["lifestyle", "additional income"],
        },
        {
          title: "Personal Mentorship",
          text: "Receive personal mentor support to travel independently and build your own business",
          highlights: ["mentor support", "build your own business"],
        },
        {
          title: "Freedom Without Borders",
          text: "Join the community to travel without borders, gain freedom and earn independently",
          highlights: ["Join the community", "without borders", "earn independently"],
        },
        {
          title: "Financial Independence",
          text: "Break prejudices about expensive leisure and embark on your path to financial freedom",
          highlights: ["Break prejudices", "financial freedom"],
        },
      ],
      quickStats: {
        countries: "Countries visited",
        projects: "Routes built",
        clients: "Happy clients",
        rating: "Client rating",
      },
      aboutBadge: "About the Project",
      aboutTitle: "MY STORY & MISSION",
      aboutSubtitle: "WHY TRAVEL WITH MARTINS?",
      aboutIntro: "My name is Martins. I have always been looking for opportunities that allow people to live a fuller, smarter life with greater freedom of choice.",
      aboutBody: "In 2018, I focused on the travel industry. Since then, I have come to know not only beautiful places in the world, but also people, cultures, and opportunities that traveling can provide to everyone. Over time, I realized that travels are not just a vacation. They expand horizons, help make new friends, develop thinking, and often completely change one's outlook on life.",
      aboutQuote: "I have created the Travel with Martins project, where I help people change their lifestyle and travel more, choose the most suitable destinations, giving them the opportunity to gain greater freedom in life and at the same time earn extra income.",
      advantagesBadge: "Your Advantages",
      advantagesTitle: "WHY CHOOSE THIS OPPORTUNITY?",
      advantages: [
        {
          title: "Better Prices",
          desc: "Get access to exclusive deals that you won't find on regular booking sites. Save money on every trip.",
        },
        {
          title: "Mentor Support",
          desc: "I am your personal guide and counselor. I will help with tips, recommendations and answer all your questions.",
        },
        {
          title: "Freedom & Income",
          desc: "It is not just about traveling – it is an opportunity to build your own business, work from anywhere in the world and earn extra income.",
        },
        {
          title: "Community & Networking",
          desc: "Join a community of like-minded people who love to travel, share experiences and inspire each other for new achievements.",
        },
      ],
      stepsBadge: "Just 4 simple steps",
      stepsTitle: "HOW TO START COOPERATING?",
      stepsSubtitle: "The path to your dream trip and a new lifestyle is easier than you think. Start today!",
      steps: [
        { title: "Apply for presentation", desc: "Choose the most convenient time and sign up for a free online presentation." },
        { title: "Get clarity", desc: "During the presentation, learn all about how the platform works and its advantages." },
        { title: "Individual conversation", desc: "We will arrange an individual meeting to tailor the best solutions specifically for you." },
        { title: "Start traveling & earning", desc: "Make a decision and join our team to travel more affordably and build your business." },
      ],
      reviewsBadge: "Client reviews",
      reviewsTitle: "WHAT DO OTHER TRAVELERS SAY?",
      reviews: [
        { author: "Jānis Bērziņš", role: "Entrepreneur", text: "Thanks to Martins' support and recommendations, our family trip to Turkey was not only cheaper but also much better organized. Great cooperation and professional approach!" },
        { author: "Laura Kalniņa", role: "Marketing specialist", text: "I've always wanted to travel more but was afraid of high costs. This project completely changed my perspective! Now I can afford to travel 3-4 times a year and still earn an income." },
        { author: "Andris Zariņš", role: "Freelancer", text: "Great platform and even better mentor! Martins always helps with useful advice. The earning opportunity allows me to work from anywhere in the world." },
        { author: "Kristīne Ozola", role: "Teacher", text: "At first I was skeptical, but after the free Zoom presentation I realized this is a real opportunity. I am very satisfied with the booking savings and the friendly community!" },
      ],
      instaTitle: "Our Travel Moments",
      instaSubtitle: "Follow our adventures and get inspired for your next destinations",
    },
    collab: {
      badge: "Cooperation Process",
      title: "How does cooperation work?",
      subtitle: "Whether you are looking for your next trip or just want to know more about the opportunities, the process is simple, free and transparent.",
      steps: [
        {
          title: "Apply for Zoom presentation",
          desc: "Choose the most convenient time and apply for an online presentation to learn more about the offered travel and growth opportunities. This meeting is an excellent first step to gain a general idea of how I work and what value you can get. During the presentation, I not only talk about exciting destinations but also about ways to travel more economically. The registration process takes just a few seconds, and the meeting link will be sent directly to your email. You do not need any prior knowledge or preparation – just connect and be inspired for new opportunities.",
        },
        {
          title: "Get familiar with the information",
          desc: "During the presentation, get a full, clear idea of the processes and feel free to ask any questions. I will talk in detail about verified travel platforms, special offers and my individual support system. You will see real examples of how people around the world are already traveling more often and smarter, combining a hobby with earning income. The meeting takes place in a relaxed, friendly atmosphere where every participant's opinion and question is important. It is the best and safest way to dispel doubts and find out the truth first hand.",
        },
        {
          title: "Book an individual conversation",
          desc: "After the presentation, we can talk individually to adapt the solutions more in detail specifically to your wishes and personal goals. Each of us has a different pace of life, budget and travel dreams, so the individual conversation helps find the path that suits you best. In the conversation we can talk about specific destinations, cost estimates or create a personalized action plan. This conversation is completely confidential and focuses on your personal growth and comfort. My priority is to provide you with maximum support so you feel secure about every next step.",
        },
        {
          title: "Make an informed decision",
          desc: "Evaluate the information obtained and make the final decision completely independently – without any rush, pressure or persistence. I believe that the best decisions are those made with a calm mind and full confidence. Therefore, after the conversation, I will give you as much time as you need to think everything over and discuss it with your family. If you choose to cooperate, I will immediately start planning the trip, whereas if you decide it's not for you right now, we will still remain good acquaintances. In any case, you will have gained valuable knowledge that will come in handy in your future trips.",
        },
      ],
      bottomText1: "Professional cooperation in travel planning and tourism business development is based on mutual trust, transparency and an individual approach. As your personal mentor and travel consultant, I provide full support at every stage – from the first Zoom presentation to a successfully realized dream trip and the creation of new income sources.",
      bottomText2: "By choosing to cooperate with me, you get not only access to the best tourism industry tools and exclusive prices, but also a sense of security and a practical advisor who is always just a call away. Start your path to greater freedom today and see how simple and pleasant smart travel can be!",
      toHome: "To Home",
    },
    destinations: {
      toHome: "To Home",
      badge: "Most Beautiful Places in the World",
      title: "Popular Destinations",
      subtitle: "I have compiled some of the travelers' favorite destinations. Each of them offers a unique experience, gorgeous nature and unforgettable impressions.",
      filterAll: "All",
      filterEurope: "Europe",
      filterExotic: "Exotic",
      durationLabel: "Duration",
      viewLabel: "View →",
      noResults: "No destinations found in this category.",
      resetFilter: "Show all",
      modalClose: "Close",
      modalDuration: "Duration:",
      modalPriceFrom: "Price from:",
      modalRequestBtn: "Apply for consultation about this destination",
      items: {
        turcija: {
          name: "Turkey",
          description: "Colorful oriental markets, impressive landscapes of Cappadocia with hot air balloons and the warm Mediterranean Sea. Perfect relaxation and rich history for everyone.",
          duration: "7-10 days",
          tags: ["All Inclusive", "Beaches", "Culture"],
        },
        grieķija: {
          name: "Greece",
          description: "White houses with blue roofs, picturesque Aegean islands and the cradle of world history in Athens. Enjoy excellent Greek cuisine and nature.",
          duration: "7 days",
          tags: ["Islands", "History", "Picturesque"],
        },
        ēģipte: {
          name: "Egypt",
          description: "Mystic pyramids, the mighty Nile coast and one of the world's most beautiful coral reefs in the Red Sea. Great warmth all year round.",
          duration: "7-9 days",
          tags: ["Coral reefs", "Pyramids", "Warmth"],
        },
        spānija: {
          name: "Spain",
          description: "Catalan architecture, passionate flamenco, sunny Mallorca and delicious tapas. Spain inspires with its joy of life and southern temperament.",
          duration: "7-12 days",
          tags: ["Beaches", "Architecture", "Tapas"],
        },
        kipra: {
          name: "Cyprus",
          description: "The birthplace of Aphrodite with infinitely blue lagoons and cozy fishing villages. A very sunny destination with exceptionally clean beaches.",
          duration: "7 days",
          tags: ["Blue Lagoon", "Peace", "Sunny"],
        },
        taizeme: {
          name: "Thailand",
          description: "Exotic beauty of Phuket, golden Buddhist temples, tropical jungles and unique street food. Magical Asian hospitality.",
          duration: "10-14 days",
          tags: ["Exotic", "Temples", "Nature"],
        },
        maldivu_salas: {
          name: "Maldives",
          description: "Turquoise water, white sand and luxury overwater bungalows. Absolute peace, romance and natural beauty far away from everyday life.",
          duration: "8-12 days",
          tags: ["Luxury", "Peace", "Romance"],
        },
        dominikana: {
          name: "Dominican Republic",
          description: "The pearl of the Caribbean Sea with endless coconut groves and heartwarming bachata rhythms. A paradise where the sun and sea meet every day.",
          duration: "10-12 days",
          tags: ["Caribbean", "Exotic", "Palms"],
        },
        aae: {
          name: "United Arab Emirates",
          description: "The city of future architecture Dubai in the middle of the desert, the world's tallest skyscrapers and oriental luxury combined with top technologies.",
          duration: "7-8 days",
          tags: ["Luxury", "Desert", "Architecture"],
        },
      },
    },
    faq: {
      toHome: "To Home",
      badge: "Answers to Questions",
      title: "Frequently Asked Questions",
      subtitle: "Below I have compiled the most frequently asked questions to provide you with maximum clarity about processes, time consumption and terms.",
      noAnswerTitle: "Didn't find the answer to your question?",
      noAnswerDesc: "If you have any specific questions, feel free to contact me personally by writing an email or filling out the contact form.",
      askBtn: "Ask a Question",
      items: [
        { question: "Do I need any prior experience?", answer: "No. Prior experience is not required. Many people start completely from scratch. The most important thing is the desire to learn something new, grow and be open to new opportunities." },
        { question: "How much time does it take?", answer: "It depends on your wishes and capabilities. Most people start alongside their primary job and devote as much time to it as they can and want." },
        { question: "Is the Zoom presentation free?", answer: "Yes. Participation in the Zoom presentation is completely free of charge and carries no obligations." },
        { question: "Will I have to purchase anything after the presentation?", answer: "No. The purpose of the presentation is to introduce you to the opportunities and answer your questions. Only after that you can decide for yourself if you want to take the next step." },
        { question: "How does the first consultation work?", answer: "After the Zoom presentation, you can apply for an individual conversation with me. During it, we will discuss your questions, interests and goals to jointly evaluate if this opportunity is right for you." },
        { question: "Will I have to sign any contract or assume obligations?", answer: "No. The first step is just getting acquainted with the info. No contracts or obligations are assumed until you have made a conscious decision yourself." },
        { question: "Can I contact you also after the presentation?", answer: "Of course. If additional questions arise after the presentation or if you want to individually discuss topics of interest, feel free to contact me. I will gladly help and share my experience." },
        { question: "Who is this opportunity best suited for?", answer: "It is suitable for people who want to travel more, meet new people, develop themselves and learn about opportunities that can provide greater freedom and extra income. Neither age nor prior experience matters – interest and desire to learn more is what's most important." },
      ],
    },
    blog: {
      toHome: "To Home",
      badge: "World Travel Stories",
      title: "Travel Blog",
      subtitle: "Read my travel stories and those of our community, practical tips and inspiring adventures from all over the world.",
      readMore: "Read Post",
      sidebarPopular: "Popular Posts",
      sidebarCategories: "Categories",
      sidebarAll: "All Posts",
      posts: [
        {
          id: "turcijas-slepenie-dargumi",
          title: "Secret treasures of Turkey: where tourist crowds disappear",
          desc: "Everyone knows Antalya and Alanya, but have you heard of Kabak Bay or the ancient Lycian cities? In this article, I will reveal places where you can enjoy nature and peace.",
          content: "Turkey is an amazing country that hides much more than popular 'All Inclusive' resorts. While most tourists choose to spend time in hotel pools, a few hours' drive away lies untouched nature, where mountains meet a turquoise sea. One of such treasures is Kabak Bay (Kabak Koyu) – an idyllic place for nature lovers, where there are no large hotels, but cozy wooden bungalows and campsite spots. Another wonder is the ancient Lycian Way, which stretches along the entire southwestern coast, offering breathtaking views of the Mediterranean and the opportunity to explore thousands of years old tombs and city ruins in complete peace. Choose the smart traveler's path and discover the true soul of Turkey!",
        },
        {
          id: "gudras-celosanas-pamati",
          title: "How to travel 4 times a year without a huge budget",
          desc: "Smart travel is the art of using the right tools and strategies. I share my verified gold rules that help save on flights and accommodation.",
          content: "Traveling is not a privilege reserved only for millionaires. Actually, with proper planning and utilizing the opportunities provided by modern platforms, you can travel much more often than you think. First golden rule: be flexible with dates and destinations. Sometimes a single day's difference in flight dates can save you up to 50% of the ticket price. Second rule: take advantage of closed traveler platforms and community benefits. These platforms offer rates not available publicly because they work directly with service providers. Third rule: do not be afraid to plan yourself. A self-planned trip is always more flexible, interesting and, most importantly, financially more advantageous. Join our community and I will teach you all these secrets!",
        },
      ],
      upcomingTitle: "Preparing for Publication",
      upcomingSubtitle: "In the near future, new and exciting articles from our travelers will be published on our blog.",
      upcomingReadSoon: "Read Soon",
      upcomingPosts: [
        { title: "Maldives at a reasonable price – myth or reality?", desc: "We study the opportunities provided by local islands and how to enjoy turquoise water and white sand without spending thousands of euros." },
        { title: "Why Asia changes a person's perception of the world", desc: "A personal story about the first trip to Thailand, culture shock, Buddhist philosophy and street food culture." },
        { title: "The art of backpack packing: only the essentials", desc: "Practical recommendations on how to pack things for a 7-day trip in hand luggage only, saving time and money at the airport." },
        { title: "The future of tourism and digital nomads", desc: "How technology and working from home have changed travel habits and why more and more people choose to live on the road." },
      ],
    },
    contactPage: {
      toHome: "To Home",
      badge: "Contact & Location",
      title: "Contacts",
      intro: "I am available for both remote consultations and face-to-face conversations by prior agreement. Choose the most convenient way to contact me!",
      hoursTitle: "Contact Hours",
      hoursDesc1: "Monday - Friday",
      hoursDesc2: "09:00 - 19:00",
      locationTitle: "Location",
      locationDesc1: "Riga, Latvia",
      locationDesc2: "(And remotely worldwide)",
      supportTitle: "Support on the Go",
      supportDesc1: "My clients are provided with",
      supportDesc2: "support during their travels.",
    },
    contactForm: {
      badge: "Contact & Consultations",
      title: "Get in Touch with Martins Sics",
      subtitle: "Fill out the form below and I will contact you within the next 3 hours to answer all your questions.",
      successTitle: "Message received!",
      successDesc: "Thank you! Your message has been sent successfully.",
      sendNew: "Send new message",
      labelName: "Name",
      placeholderName: "Enter your name",
      labelPhone: "Phone Number",
      placeholderPhone: "Enter your phone number",
      labelEmail: "Email",
      placeholderEmail: "Enter your email",
      labelMessage: "Message",
      placeholderMessage: "Write what exactly you would like to know or ask...",
      submitBtn: "Send message",
      infoTitle: "Contact Information",
      phone: "Phone",
      email: "Email",
    },
    footer: {
      desc: "Travel, community, support, and the opportunity to earn. Join our travel community, head to dream destinations with mentor support, and build your free lifestyle while earning additional income.",
      linksTitle: "Useful links",
      contactsTitle: "Contacts",
      copyright: "2026 © All rights reserved | Travel with Martins",
    },
    cookieNotice: {
      text: "This site uses cookies to ensure the best user experience.",
      accept: "Accept",
      policy: "Cookie policy",
    },
  },
  RU: {
    header: {
      home: "ГЛАВНАЯ",
      collab: "СОТРУДНИЧЕСТВО",
      destinations: "НАПРАВЛЕНИЯ",
      faq: "FAQ",
      blog: "БЛОГ",
      contacts: "КОНТАКТЫ",
      contactBtn: "Связаться",
    },
    home: {
      heroSlides: [
        {
          title: "Путешествуйте сами и зарабатывайте",
          text: "Начните путешествовать самостоятельно и создайте свой свободный образ жизни с дополнительным доходом",
          highlights: ["самостоятельно", "свободный образ жизни", "дополнительным доходом"],
        },
        {
          title: "Изменение образа жизни",
          text: "Узнайте, как превратить путешествия в свой образ жизни и реальный источник дополнительного дохода",
          highlights: ["образом жизни", "дополнительного дохода"],
        },
        {
          title: "Личный менторинг",
          text: "Получите личную поддержку ментора, чтобы путешествовать самостоятельно и развивать свой бизнес",
          highlights: ["поддержку ментора", "развивать свой бизнес"],
        },
        {
          title: "Свобода без границ",
          text: "Присоединяйтесь к сообществу, чтобы путешествовать без границ, обрести свободу и зарабатывать самостоятельно",
          highlights: ["Присоединяйтесь к сообществу", "без границ", "зарабатывать самостоятельно"],
        },
        {
          title: "Финансовая независимость",
          text: "Разрушьте стереотипы о дорогом отдыхе и начните свой собственный путь к финансовой свободе",
          highlights: ["Разрушьте стереотипы", "финансовой свободе"],
        },
      ],
      quickStats: {
        countries: "Посещенные страны",
        projects: "Созданные маршруты",
        clients: "Счастливые клиенты",
        rating: "Рейтинг клиентов",
      },
      aboutBadge: "О проекте",
      aboutTitle: "МОЯ ИСТОРИЯ И МИССИЯ",
      aboutSubtitle: "ПОЧЕМУ TRAVEL WITH MARTINS?",
      aboutIntro: "Меня зовут Мартиньш. Я всегда искал возможности, которые позволяют людям жить более полной, умной и свободной жизнью.",
      aboutBody: "В 2018 году я пришел в индустрию путешествий. С тех пор я узнал не только красивые места в мире, но и людей, культуры и возможности, которые путешествия могут открыть каждому. Со временем я понял, что путешествия – это не просто отдых. Они расширяют кругозор, помогают заводить новых друзей, развивают мышление и часто полностью меняют взгляд на жизнь.",
      aboutQuote: "Я создал проект Travel with Martins, в котором помогаю людям изменить свой образ жизни и больше путешествовать, выбирать наиболее подходящие направления, что дает возможность обрести большую свободу в жизни и при этом дополнительно зарабатывать.",
      advantagesBadge: "Ваши преимущества",
      advantagesTitle: "ПОЧЕМУ СТОИТ ВЫБРАТЬ ЭТУ ВОЗМОЖНОСТЬ?",
      advantages: [
        {
          title: "Выгодные цены",
          desc: "Получите доступ к закрытым предложениям, которых нет на обычных сайтах бронирования. Экономьте на каждой поездке.",
        },
        {
          title: "Поддержка ментора",
          desc: "Я ваш личный гид и советник. Помогу советами, рекомендациями и отвечу на все вопросы.",
        },
        {
          title: "Свобода и доход",
          desc: "Это не просто путешествия – это возможность построить собственный бизнес, работать из любой точки мира и получать дополнительный доход.",
        },
        {
          title: "Сообщество и связи",
          desc: "Присоединяйтесь к сообществу единомышленников, которые любят путешествовать, делятся опытом и вдохновляют друг друга.",
        },
      ],
      stepsBadge: "Всего 4 простых шага",
      stepsTitle: "КАК НАЧАТЬ СОТРУДНИЧЕСТВО?",
      stepsSubtitle: "Путь к путешествию вашей мечты и новому стилю жизни проще, чем вы думаете. Начните сегодня!",
      steps: [
        { title: "Запишитесь на презентацию", desc: "Выберите удобное время и запишитесь на бесплатную онлайн-презентацию." },
        { title: "Получите ясность", desc: "Во время презентации узнайте всё о работе платформы и ее преимуществах." },
        { title: "Индивидуальная беседа", desc: "Мы согласуем личную встречу, чтобы подобрать лучшие решения специально для вас." },
        { title: "Путешествуйте и зарабатывайте", desc: "Примите решение и присоединяйтесь к нашей команде, чтобы путешествовать выгоднее и строить бизнес." },
      ],
      reviewsBadge: "Отзывы клиентов",
      reviewsTitle: "ЧТО ГОВОРЯТ ДРУГИЕ ПУТЕШЕСТВЕННИКИ?",
      reviews: [
        { author: "Янис Берзиньш", role: "Предприниматель", text: "Благодаря поддержке и рекомендациям Мартиньша, наша семейная поездка в Турцию была не только дешевле, но и гораздо лучше организована. Отличное сотрудничество!" },
        { author: "Лаура Калниня", role: "Маркетолог", text: "Я всегда хотела больше путешествовать, но боялась больших расходов. Этот проект полностью изменил мой взгляд! Теперь могу позволить себе поездки 3-4 раза в год и при этом зарабатывать." },
        { author: "Андрис Зариньш", role: "Фрилансер", text: "Отличная платформа и еще лучший ментор! Мартиньш всегда помогает полезными советами. Возможность заработка позволяет мне работать из любой точки мира." },
        { author: "Кристина Озола", role: "Учитель", text: "Сначала я была скептически настроена, но после бесплатной Zoom-презентации поняла, что это реальный шанс. Очень довольна экономией на бронированиях и дружелюбным сообществом!" },
      ],
      instaTitle: "Моменты наших путешествий",
      instaSubtitle: "Следите за нашими приключениями и вдохновляйтесь на новые поездки",
    },
    collab: {
      badge: "Процесс сотрудничества",
      title: "Как происходит сотрудничество?",
      subtitle: "Независимо от того, ищете ли вы следующее путешествие или просто хотите узнать больше о возможностях, процесс прост, свободен и прозрачен.",
      steps: [
        {
          title: "Запишитесь на Zoom презентацию",
          desc: "Выберите удобное время и запишитесь на онлайн-презентацию, чтобы узнать больше о предлагаемых возможностях для путешествий и роста. Эта встреча – отличный первый шаг для получения общего представления о том, как я работаю и какую пользу вы можете извлечь. Во время презентации я не только рассказываю об увлекательных направлениях, но и о способах путешествовать экономичнее. Регистрация занимает всего пару секунд, ссылка на встречу будет отправлена прямо на ваш e-mail. Вам не нужны никакие предварительные знания или подготовка – просто подключайтесь и вдохновляйтесь новыми возможностями.",
        },
        {
          title: "Ознакомьтесь с информацией",
          desc: "Во время презентации получите полное, наглядное представление о процессах и смело задавайте любые интересующие вопросы. Я подробно расскажу о проверенных туристических платформах, специальных предложениях и моей индивидуальной системе поддержки. Вы увидите реальные примеры того, как люди по всему миру уже сейчас путешествуют чаще и умнее, совмещая увлечение с получением дохода. Встреча проходит в свободной, дружеской атмосфере, где важно мнение и вопрос каждого участника. Это лучший и самый надежный способ развеять сомнения и узнать правду из первых уст.",
        },
        {
          title: "Забронируйте индивидуальную беседу",
          desc: "После презентации мы можем пообщаться индивидуально, чтобы более детально настроить решения именно под ваши пожелания и личные цели. У каждого из нас свой ритм жизни, бюджет и мечты о путешествиях, поэтому индивидуальная беседа помогает найти наиболее подходящий именно вам путь. В беседе мы можем обсудить конкретные направления, сметы расходов или составить персональный план действий. Этот разговор полностью конфиденциален и направлен на ваш личный рост и удобство. Мой приоритет – оказать вам максимальную поддержку, чтобы вы чувствовали себя уверенно на каждом следующем шагу.",
        },
        {
          title: "Примите осознанное решение",
          desc: "Оцените полученную информацию и примите окончательное решение абсолютно самостоятельно – без спешки, давления или навязчивости. Я верю, что лучшие решения принимаются со спокойной душой и полной уверенностью. Поэтому после беседы я дам вам столько времени, сколько необходимо, чтобы все обдумать и обсудить с семьей. Если вы решите сотрудничать, я немедленно начну планирование поездки, а если решите, что это сейчас не для вас, мы все равно останемся хорошими знакомыми. В любом случае вы получите ценные знания, которые пригодятся в ваших будущих поездках.",
        },
      ],
      bottomText1: "Профессиональное сотрудничество в планировании путешествий и развитии туристического бизнеса основано на взаимном доверии, прозрачности и индивидуальном подходе. Как ваш личный ментор и консультант по путешествиям, я обеспечиваю полную поддержку на каждом этапе – от первой презентации в Zoom до успешно реализованного путешествия мечты и создания новых источников дохода.",
      bottomText2: "Выбирая сотрудничество со мной, вы получаете не только доступ к лучшим инструментам туриндустрии и эксклюзивным ценам, но и чувство безопасности и практического советника, который всегда на расстоянии одного звонка. Начните свой путь к большей свободе сегодня и убедитесь, насколько простым и приятным может быть умный туризм!",
      toHome: "На главную",
    },
    destinations: {
      toHome: "На главную",
      badge: "Красивейшие места мира",
      title: "Популярные направления",
      subtitle: "Я собрал несколько самых популярных направлений среди путешественников. Каждое из них предлагает уникальный опыт, великолепную природу и незабываемые впечатления.",
      filterAll: "Все",
      filterEurope: "Европа",
      filterExotic: "Экзотика",
      durationLabel: "Длительность",
      viewLabel: "Смотреть →",
      noResults: "В этой категории направлений не найдено.",
      resetFilter: "Показать все",
      modalClose: "Закрыть",
      modalDuration: "Продолжительность:",
      modalPriceFrom: "Цена от:",
      modalRequestBtn: "Запросить консультацию по этому направлению",
      items: {
        turcija: {
          name: "Турция",
          description: "Красочные восточные базары, впечатляющие пейзажи Каппадокии с воздушными шарами и теплое Средиземное море. Идеальный отдых и богатая история для каждого.",
          duration: "7-10 дней",
          tags: ["Всё включено", "Пляжи", "Культура"],
        },
        grieķija: {
          name: "Греция",
          description: "Белые домики с синими крышами, живописные острова Эгейского моря и колыбель мировой истории в Афинах. Насладитесь превосходной греческой кухней и природой.",
          duration: "7 дней",
          tags: ["Острова", "История", "Живописно"],
        },
        ēģipte: {
          name: "Египет",
          description: "Таинственные пирамиды, величественные берега Нила и один из красивейших коралловых рифов в Красном море. Отличное тепло круглый год.",
          duration: "7-9 дней",
          tags: ["Коралловые рифы", "Пирамиды", "Тепло"],
        },
        spānija: {
          name: "Испания",
          description: "Каталонская архитектура, страстный фламенко, солнечная Майорка и вкусные тапас. Испания вдохновляет своей жизнерадостностью и южным темпераментом.",
          duration: "7-12 дней",
          tags: ["Пляжи", "Архитектура", "Тапас"],
        },
        kipra: {
          name: "Кипр",
          description: "Родина Афродиты с бесконечно голубыми лагунами и уютными рыбацкими деревнями. Очень солнечное направление с исключительно чистыми пляжами.",
          duration: "7 дней",
          tags: ["Голубая лагуна", "Покой", "Солнечно"],
        },
        taizeme: {
          name: "Таиланд",
          description: "Экзотическая красота Пхукета, золотые буддийские храмы, тропические джунгли и неповторимая уличная еда. Волшебное азиатское гостеприимство.",
          duration: "10-14 дней",
          tags: ["Экзотика", "Храмы", "Природа"],
        },
        maldivu_salas: {
          name: "Мальдивы",
          description: "Бирюзовая вода, белый песок и роскошные виллы прямо над водой. Абсолютный покой, романтика и красота природы вдали от повседневности.",
          duration: "8-12 дней",
          tags: ["Роскошь", "Покой", "Романтика"],
        },
        dominikana: {
          name: "Доминикана",
          description: "Жемчужина Карибского моря с бескрайними кокосовыми рощами и согревающими сердце ритмами бачаты. Рай, где солнце и море встречаются каждый день.",
          duration: "10-12 дней",
          tags: ["Карибы", "Экзотика", "Пальмы"],
        },
        aae: {
          name: "ОАЭ",
          description: "Город будущей архитектуры Дубай посреди пустыни, самые высокие небоскребы мира и восточная роскошь в сочетании с передовыми технологиями.",
          duration: "7-8 дней",
          tags: ["Роскошь", "Пустыня", "Архитектура"],
        },
      },
    },
    faq: {
      toHome: "На главную",
      badge: "Ответы на вопросы",
      title: "Часто задаваемые вопросы",
      subtitle: "Ниже я собрал самые популярные вопросы, чтобы дать вам максимальную ясность о процессах, затратах времени и условиях.",
      noAnswerTitle: "Не нашли ответ на свой вопрос?",
      noAnswerDesc: "Если у вас возникли какие-то специфические вопросы, смело обращайтесь ко мне лично, написав на e-mail или заполнив контактную форму.",
      askBtn: "Задать вопрос",
      items: [
        { question: "Нужен ли мне какой-то предварительный опыт?", answer: "Нет. Предварительный опыт не требуется. Многие начинают совершенно с нуля. Главное – желание узнать что-то новое, учиться и быть открытым для новых возможностей." },
        { question: "Сколько времени это занимает?", answer: "Это зависит от ваших желаний и возможностей. Большинство людей начинают параллельно со своей основной работой и уделяют этому столько времени, сколько могут и хотят." },
        { question: "Презентация в Zoom бесплатная?", answer: "Да. Участие в Zoom презентации абсолютно бесплатное и ни к чему вас не обязывает." },
        { question: "Придется ли мне что-то покупать после презентации?", answer: "Нет. Цель презентации – познакомить вас с возможностями и ответить на ваши вопросы. Только после этого вы можете сами решить, хотите ли вы сделать следующий шаг." },
        { question: "Как проходит первая консультация?", answer: "После Zoom презентации вы можете записаться на индивидуальную беседу со мной. Во время встречи мы обсудим ваши вопросы, интересы и цели, чтобы вместе оценить, подходит ли вам эта возможность." },
        { question: "Придется ли мне подписывать договор или брать обязательства?", answer: "Нет. Первый шаг – это просто знакомство с информацией. Никакие договоры или обязательства не берутся на себя, пока вы сами не примете осознанное решение." },
        { question: "Могу ли я связаться с вами после презентации?", answer: "Конечно. Если после презентации возникнут дополнительные вопросы или вы захотите индивидуально обсудить интересующие темы, смело обращайтесь ко мне. С радостью помогу и поделюсь опытом." },
        { question: "Кому эта возможность подходит больше всего?", answer: "Она подходит людям, которые хотят больше путешествовать, знакомиться с новыми людьми, развиваться и узнавать о возможностях, способных дать больше свободы и дополнительный доход. Ни возраст, ни опыт не имеют значения – важны лишь интерес и желание узнать больше." },
      ],
    },
    blog: {
      toHome: "На главную",
      badge: "Истории кругосветных путешествий",
      title: "Блог о путешествиях",
      subtitle: "Читайте мои истории путешествий и истории участников нашего сообщества, практические советы и вдохновляющие приключения со всего мира.",
      readMore: "Читать статью",
      sidebarPopular: "Популярные статьи",
      sidebarCategories: "Категории",
      sidebarAll: "Все статьи",
      posts: [
        {
          id: "turcijas-slepenie-dargumi",
          title: "Секретные сокровища Турции: где исчезают толпы туристов",
          desc: "Все знают Анталью и Аланью, но слышали ли вы о заливе Кабак или древних ликийских городах? В этой статье я открою места, где можно насладиться природой и покоем.",
          content: "Турция – удивительная страна, скрывающая гораздо больше, чем популярные курорты 'Всё включено'. Пока большинство туристов предпочитает проводить время у бассейнов отелей, в нескольких часах езды находится нетронутая природа, где горы встречаются с бирюзовым морем. Одно из таких сокровищ – залив Кабак (Kabak Koyu) – идиллическое место для любителей природы, где нет больших отелей, но есть уютные деревянные бунгало и места для палаток. Еще одно чудо – древняя Ликийская тропа, которая тянется вдоль всего юго-западного побережья, предлагая захватывающие виды на Средиземное море и возможность исследовать гробницы и руины городов с тысячелетней историей в полном покое. Выберите путь умного путешественника и откройте для себя истинную душу Турции!",
        },
        {
          id: "gudras-celosanas-pamati",
          title: "Как путешествовать 4 раза в год без огромного бюджета",
          desc: "Умный туризм – это искусство использовать правильные инструменты и стратегии. Делюсь своими проверенными золотыми правилами, которые помогают экономить на перелетах и жилье.",
          content: "Путешествия – это не привилегия, доступная только миллионерам. На самом деле, при правильном планировании и использовании возможностей современных платформ вы можете путешествовать гораздо чаще, чем думаете. Первое золотое правило: будьте гибкими в датах и направлениях. Иногда разница в один день в датах полета может сэкономить до 50% стоимости билета. Второе правило: пользуйтесь преимуществами закрытых платформ для путешественников и сообществ. Эти платформы предлагают цены, недоступные публично, так как работают напрямую с поставщиками услуг. Третье правило: не бойтесь планировать сами. Самостоятельно спланированная поездка всегда гибче, интереснее и, главное, финансово выгоднее. Присоединяйтесь к нашему сообществу, и я научу вас всем этим секретам!",
        },
      ],
      upcomingTitle: "Готовится к публикации",
      upcomingSubtitle: "В ближайшее время в нашем блоге будут опубликованы новые захватывающие статьи от наших путешественников.",
      upcomingReadSoon: "Читать скоро",
      upcomingPosts: [
        { title: "Мальдивы по разумной цене – миф или реальность?", desc: "Изучаем возможности, предоставляемые местными островами, и то, как наслаждаться бирюзовой водой и белым песком без трат в тысячи евро." },
        { title: "Почему Азия меняет восприятие мира человеком", desc: "Личная история о первой поездке в Таиланд, культурном шоке, буддийской философии и культуре уличной еды." },
        { title: "Искусство упаковки рюкзака: только самое необходимое", desc: "Практические советы о том, как собрать вещи для 7-дневной поездки только в ручную кладь, сэкономив время и деньги в аэропорту." },
        { title: "Будущее туризма и цифровые кочевники", desc: "Как технологии и работа на дому изменили привычки путешествовать и почему все больше людей предпочитают жить в пути." },
      ],
    },
    contactPage: {
      toHome: "На главную",
      badge: "Связь и местоположение",
      title: "Контакты",
      intro: "Я доступен как для удаленных консультаций, так и для личных встреч по предварительной договоренности. Выберите наиболее удобный для вас способ связи!",
      hoursTitle: "Время связи",
      hoursDesc1: "Понедельник - Пятница",
      hoursDesc2: "09:00 - 19:00",
      locationTitle: "Местоположение",
      locationDesc1: "Рига, Латвия",
      locationDesc2: "(И удаленно по всему миру)",
      supportTitle: "Поддержка в пути",
      supportDesc1: "Моим клиентам обеспечивается",
      supportDesc2: "поддержка во время поездок.",
    },
    contactForm: {
      badge: "Связь и консультации",
      title: "Связаться с Мартиньшем Шицсом",
      subtitle: "Заполните форму ниже, и я свяжусь с вами в течение следующих 3 часов, чтобы ответить на все ваши вопросы.",
      successTitle: "Сообщение получено!",
      successDesc: "Спасибо! Ваше сообщение успешно отправлено.",
      sendNew: "Отправить новое сообщение",
      labelName: "Имя",
      placeholderName: "Введите ваше имя",
      labelPhone: "Номер телефона",
      placeholderPhone: "Введите ваш номер телефона",
      labelEmail: "Email",
      placeholderEmail: "Введите ваш email",
      labelMessage: "Сообщение",
      placeholderMessage: "Напишите, что именно вы хотели бы узнать или спросить...",
      submitBtn: "Отправить сообщение",
      infoTitle: "Контактная информация",
      phone: "Телефон",
      email: "E-mail",
    },
    footer: {
      desc: "Путешествия, сообщество, поддержка и возможность заработка. Присоединяйтесь к нашему сообществу путешественников, отправляйтесь в поездки мечты с поддержкой ментора и создавайте свой свободный стиль жизни, получая дополнительный доход.",
      linksTitle: "Полезные ссылки",
      contactsTitle: "Контакты",
      copyright: "2026 © Все права защищены | Travel with Martins",
    },
    cookieNotice: {
      text: "Этот сайт использует куки-файлы для обеспечения наилучшего пользовательского опыта.",
      accept: "Согласен",
      policy: "Политика использования файлов куки",
    },
  },
};
