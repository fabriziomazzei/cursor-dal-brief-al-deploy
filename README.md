# Marco Bianchi · Sito vetrina

Sito statico in **Next.js 14 (App Router) + TypeScript + Tailwind CSS** per un marketer freelance che offre servizi a PMI.

## Stack

- Next.js 14 (App Router, RSC dove possibile)
- TypeScript strict
- Tailwind CSS 3
- Font: Inter (via `next/font/google`)
- Nessun CMS, nessun database

## Setup locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Struttura

```
app/
  layout.tsx              Root (Navbar + Footer + Inter)
  page.tsx                Homepage (assembla le sezioni)
  evento/page.tsx         Pagina workshop con form
  globals.css             Tailwind + smooth scroll
  not-found.tsx           404 on-brand

components/
  layout/                 Navbar (client), Footer
  sections/               Sezioni della homepage
  event/                  Sezioni della pagina /evento
  ui/                     Primitivi riutilizzabili
                          (Container, Section, SectionHeading,
                           Button, ServiceCard, TestimonialCard)

lib/
  data.ts                 Servizi, testimonianze, loghi, evento
  site-config.ts          Nome, email, telefono, social
  types.ts                Tipi TypeScript
```

## Personalizzazione rapida

| Cosa cambiare | File |
|---|---|
| Nome, email, telefono, P.IVA, social | `lib/site-config.ts` |
| Servizi, testimonianze, loghi, dettagli evento | `lib/data.ts` |
| Palette colori | `tailwind.config.ts` |
| Font | `app/layout.tsx` (import da `next/font/google`) |

## Form `/evento`

Il form della pagina evento usa un `mailto:` con `subject` e `body` precompilati. La mail viene aperta nel client di posta del visitatore e inviata a `eventEmail` definito in `lib/site-config.ts`.

Per migrare a un servizio server-side (es. Formspree, Resend) basta sostituire il body dell’`handleSubmit` in `components/event/EventForm.tsx`.

## Smooth scroll

Le sezioni della homepage hanno `id` (`#chi-sono`, `#servizi`, `#testimonianze`, `#clienti`, `#contatti`). Lo smooth scroll è attivo via `html { scroll-behavior: smooth }` in `globals.css`, con `scroll-mt-24` su ogni sezione per compensare la navbar fissa.

## Immagini placeholder

Le foto (ritratto hero e about) sono al momento illustrazioni SVG inline. Sostituiscile aggiungendo i file in `public/images/` e usando il componente `next/image`.
