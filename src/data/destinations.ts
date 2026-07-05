export interface DestinationCard {
  id: string;
  name: string;
  flag: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  tags: string[];
}

export const POPULAR_DESTINATIONS: DestinationCard[] = [
  {
    id: "turcija",
    name: "Turcija",
    flag: "🇹🇷",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format,webp&fit=crop&w=500&q=70",
    description: "Krāšņi austrumu tirgi, iespaintīgas Kapadokijas ainavas ar gaisa baloniem un siltā Vidusjūra. Perfekta atpūta un bagāta vēsture ikvienam.",
    duration: "7-10 dienas",
    price: 490,
    tags: ["Viss iekļauts", "Pludmales", "Kultūra"]
  },
  {
    id: "grieķija",
    name: "Grieķija",
    flag: "🇬🇷",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format,webp&fit=crop&w=500&q=70",
    description: "Balti namiņi ar ziliem jumtiem, gleznainas Egejas jūras salas un pasaules vēstures šūpulis Atēnās. Izbaudi izcilu grieķu virtuvi un dabu.",
    duration: "7 dienas",
    price: 580,
    tags: ["Salas", "Vēsture", "Gleznaini"]
  },
  {
    id: "ēģipte",
    name: "Ēģipte",
    flag: "🇪🇬",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format,webp&fit=crop&w=500&q=70",
    description: "Mistiskās piramīdas, varenais Nīlas krasts un viens no pasaules skaistākajiem koraļļu rifiem Sarkanajā jūrā. Lielisks siltums visu gadu.",
    duration: "7-9 dienas",
    price: 450,
    tags: ["Koraļļu rifi", "Piramīdas", "Siltums"]
  },
  {
    id: "spānija",
    name: "Spānija",
    flag: "🇪🇸",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format,webp&fit=crop&w=500&q=70",
    description: "Katalonijas arhitektūra, kaislīgais flamenko, saulainā Maljorka un gardās tapas. Spānija iedvesmo ar savu dzīvesprieku un dienvidu temperamentu.",
    duration: "7-12 dienas",
    price: 620,
    tags: ["Pludmales", "Arhitektūra", "Tapas"]
  },
  {
    id: "kipra",
    name: "Kipra",
    flag: "🇨🇾",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format,webp&fit=crop&w=500&q=70",
    description: "Afrodītes dzimtene ar bezgala zilām lagūnām un mājīgiem zvejnieku ciematiem. Ļoti saulains galamērķis ar izcili tīrām pludmalēm.",
    duration: "7 dienas",
    price: 520,
    tags: ["Zilā lagūna", "Miers", "Saulains"]
  },
  {
    id: "taizeme",
    name: "Taizeme",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format,webp&fit=crop&w=600&q=70",
    description: "Eksotiskais Puketas skaistums, zeltainie budistu tempļi, tropiskie džungļi un neatkārtojamais ielu ēdiens. Maģiska Āzijas viesmīlība.",
    duration: "10-14 dienas",
    price: 1150,
    tags: ["Eksotika", "Tempļi", "Daba"]
  },
  {
    id: "maldivu_salas",
    name: "Maldīvu salas",
    flag: "🇲🇻",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format,webp&fit=crop&w=600&q=70",
    description: "Tirkīzzils ūdens, baltas smiltis un luksusa mājiņas tieši virs ūdens. Absolūts miers, romantika un dabas skaistums tālu prom no ikdienas.",
    duration: "8-12 dienas",
    price: 1890,
    tags: ["Luksuss", "Miers", "Romantika"]
  },
  {
    id: "dominikana",
    name: "Dominikāna",
    flag: "🇩🇴",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format,webp&fit=crop&w=500&q=70",
    description: "Karību jūras pērle ar nebeidzamām kokospalmu audzēm un sirdi sildošiem bačatas ritmiem. Paradīze, kur saule un jūra satiekas katru dienu.",
    duration: "10-12 dienas",
    price: 1450,
    tags: ["Karību jūra", "Eksotika", "Palmas"]
  },
  {
    id: "aae",
    name: "Apvienotie Arābu Emirāti",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format,webp&fit=crop&w=500&q=70",
    description: "Nākotnes arhitektūras pilsēta Dubaija tuksneša vidū, pasaules augstākie debesskrāpji un austrumu luksuss apvienojumā ar augstākajām tehnoloģijām.",
    duration: "7-8 dienas",
    price: 790,
    tags: ["Dubaija", "Luksuss", "Iepirkšanās"]
  }
];
