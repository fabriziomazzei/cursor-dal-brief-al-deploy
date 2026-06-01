import type { Service, Testimonial, ClientLogo, Stat, EventDetails } from "./types";

export const services: Service[] = [
  {
    id: "social-media",
    title: "Gestione Social Medaia",
    description:
      "Mi occupo dei tuoi canali social in modo continuativo. Pubblicazione, community management, analisi mensile dei risultati. Tu pensi al lavoro, io alla presenza online.",
    bullets: [
      "Calendario settimanale",
      "Risposta a commenti e DM",
      "Report mensile con metriche concrete",
    ],
    iconKey: "social",
  },
  {
    id: "piani-editoriali",
    title: "Piani Editoriali",
    description:
      "Costruisco la strategia di contenuti per i tuoi canali, partendo da obiettivi reali di business e non da “fare presenza”. Trimestrale o annuale.",
    bullets: [
      "Analisi audience e competitor",
      "Pillar e formati definiti",
      "Calendario operativo pronto da usare",
    ],
    iconKey: "calendar",
  },
  {
    id: "copywriting",
    title: "Copywriting",
    description:
      "Scrivo testi per sito web, landing page, email, brochure, post. Italiano pulito, zero formule da manuale, focus sul lettore che dovrà leggerli davvero.",
    bullets: [
      "Testi sito e landing page",
      "Newsletter ed email",
      "Annunci e sponsorizzate",
    ],
    iconKey: "pen",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Definiamo come la tua azienda parla, cosa promette e a chi. Posizionamento, tono di voce, linee guida. La base su cui poggia tutto il resto.",
    bullets: [
      "Posizionamento e value proposition",
      "Tono di voce",
      "Brand book operativo",
    ],
    iconKey: "spark",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Marco è entrato in un momento complicato e ha rimesso ordine al nostro modo di comunicare. Niente fumo, solo decisioni che hanno avuto un effetto reale sul fatturato.",
    name: "Laura Conti",
    role: "Direttrice Marketing",
    company: "Fornitura industriale, 45 dipendenti",
  },
  {
    quote:
      "Cercavamo qualcuno che ci affiancasse senza venderci pacchetti standard. Marco ha studiato il nostro settore e ha proposto un piano editoriale che funziona davvero per noi.",
    name: "Davide Ranieri",
    role: "Founder",
    company: "E-commerce arredamento",
  },
  {
    quote:
      "Lavoro con lui da due anni. Risposte rapide, lavoro fatto bene, riunioni che durano il giusto. Per una PMI come la nostra è esattamente quello che serviva.",
    name: "Elisa Marchetti",
    role: "Amministratrice",
    company: "Studio di consulenza, 12 persone",
  },
];

export const clientLogos: ClientLogo[] = [
  { name: "Officine Romano" },
  { name: "Studio Verde" },
  { name: "Caffè del Borgo" },
  { name: "Linea Nord" },
  { name: "Atelier Sei" },
  { name: "Gruppo Mariani" },
];

export const stats: Stat[] = [
  { value: "8+", label: "Anni di esperienza" },
  { value: "40+", label: "Progetti seguiti" },
  { value: "12", label: "Settori coperti" },
];

export const eventDetails: EventDetails = {
  title: "Marketing alla grandissima",
  subtitle:
    "Workshop di una giornata per imprenditori e responsabili che gestiscono il marketing senza un team interno.",
  date: "Venerdì 18 settembre 2026 · 9:30 – 17:30",
  location: "Milano centro",
  price: "€ 290 + IVA · posti limitati a 15",
  outcomes: [
    "Un piano editoriale trimestrale già impostato per la vostra azienda",
    "Una checklist operativa per gestire i canali in autonomia",
    "Una mappa dei contenuti che funzionano nel vostro settore",
  ],
  program: [
    {
      time: "09:30",
      title: "Strategia",
      description:
        "Capire dove sta andando l’azienda e cosa serve davvero comunicare. Posizionamento, pubblico, obiettivi misurabili.",
    },
    {
      time: "11:30",
      title: "Contenuti",
      description:
        "Costruzione del piano editoriale, formati, pillar tematici. Esercitazione su un caso reale portato dai partecipanti.",
    },
    {
      time: "14:30",
      title: "Canali",
      description:
        "Quali canali usare, quali ignorare, come gestirli in autonomia senza diventare la seconda priorità di tutti.",
    },
    {
      time: "16:30",
      title: "Q&A",
      description:
        "Un’ora finale dedicata a domande, casi specifici e revisione individuale dei piani impostati durante la giornata.",
    },
  ],
};
