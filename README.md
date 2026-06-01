# Cursor per i siti web: dal brief al deploy

Progetto starter per il corso live su [Carriere.AI](https://www.carriere.ai) — un sito web professionale costruito da zero con l'aiuto dell'intelligenza artificiale, senza scrivere codice a mano.

## Cosa trovi in questa repository

Un sito web Next.js completo per un marketer freelance, con:

- **Homepage** — hero, presentazione personale, servizi, testimonianze, contatti
- **Pagina /evento** — form di iscrizione a un workshop con gestione mailto
- **Navbar fissa + footer**
- **Design responsive** — palette navy (#0f172a) + accent arancione (#f97316), Tailwind CSS

Il progetto è pronto da avviare in locale e da pubblicare su Vercel.

## Tech stack

- [Next.js](https://nextjs.org) con App Router
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- Deploy su [Vercel](https://vercel.com)

## Quick start

### Prerequisiti

- [Node.js](https://nodejs.org) (versione LTS)
- [Cursor](https://www.cursor.com) o un editor di codice a tua scelta

### Installazione

```bash
git clone https://github.com/fabriziomazzei/cursor-dal-brief-al-deploy.git
cd cursor-dal-brief-al-deploy
npm install
npm run dev
```

Apri il browser su [http://localhost:3000](http://localhost:3000).

### Pubblicazione su Vercel

```bash
npm i -g vercel
vercel --prod
```

Per collegare un dominio personalizzato, segui la guida nella checklist post-live inclusa nei materiali del corso.

## Struttura del progetto

```
├── src/
│   └── app/
│       ├── layout.tsx        # Layout principale (navbar + footer)
│       ├── page.tsx          # Homepage
│       ├── globals.css       # Tailwind + variabili colore
│       └── evento/
│           └── page.tsx      # Pagina evento con form
├── components/               # Componenti riutilizzabili
├── lib/                      # Contenuti e tipi
├── public/                   # Asset statici
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Come è stato costruito

Il sito è stato progettato e costruito interamente con l'aiuto dell'AI:

1. **Brief su Claude** — architettura, sezioni, contenuti, tono di voce
2. **Sviluppo su Cursor** — generazione codice, componenti, stili
3. **Deploy su Vercel** — pubblicazione con un comando

Il percorso completo è spiegato nel corso live.

## Personalizzazione

Per adattare il sito al tuo caso:

- Modifica i contenuti in `lib/content.ts` (servizi, testimonianze, contatti)
- Cambia i colori nel `tailwind.config.ts`
- Sostituisci le immagini in `public/`

## Autore

**Fabrizio Mazzei** — AI Solutions Architect

- Autore di *"Lavora Meglio con l'Intelligenza Artificiale"* (Amazon, 2026)
- [fabriziomazzei.it](https://www.fabriziomazzei.it)
- [LinkedIn](https://www.linkedin.com/in/fabriziomazzei/)

Corso realizzato per [Carriere.AI](https://www.carriere.ai).

## Licenza

Questo progetto è rilasciato come esempio didattico. Sei libero di usarlo come base per i tuoi progetti personali.
