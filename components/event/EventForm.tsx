"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { eventDetails } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};
 
const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  notes: "",
};

export function EventForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Iscrizione workshop ${eventDetails.title}`;
    const lines = [
      `Nome e cognome: ${form.name}`,
      `Email: ${form.email}`,
      `Telefono: ${form.phone}`,
      "",
      "Note:",
      form.notes || "(nessuna nota)",
      "",
      "—",
      `Evento: ${eventDetails.title}`,
      `Data: ${eventDetails.date}`,
      `Luogo: ${eventDetails.location}`,
    ];
    const body = lines.join("\n");

    const href = `mailto:${siteConfig.eventEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  };

  const inputClass =
    "block w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-base text-navy-900 placeholder:text-slate-400 transition-colors focus:border-coral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20";

  const labelClass = "mb-2 block text-sm font-medium text-navy-800";

  return (
    <Section id="iscrizione" background="navy">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Iscrizione"
              title="Riserva il tuo posto."
              subtitle="Compila il modulo e ti rispondo personalmente entro 24 ore con tutti i dettagli pratici e le modalità di pagamento."
            />
            <ul className="mt-8 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 flex-shrink-0 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Posti limitati a 15 partecipanti
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 flex-shrink-0 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Pranzo e materiali inclusi
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 flex-shrink-0 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Attestato di partecipazione
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-surface-muted p-7 shadow-card md:p-10"
              noValidate
            >
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Nome e cognome <span className="text-coral-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Mario Rossi"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-coral-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="mario.rossi@azienda.it"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Telefono <span className="text-coral-600">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+39 333 1234567"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className={labelClass}>
                    Note <span className="text-slate-400">(opzionale)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={form.notes}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Settore in cui operi, dimensione dell’azienda, esigenze particolari…"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    Invia richiesta
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Button>
                  <p className="mt-4 text-xs text-slate-500">
                    Cliccando su “Invia richiesta” si aprirà il tuo client di posta
                    con i dati già precompilati. La mail va inviata a{" "}
                    <span className="text-navy-800">{siteConfig.eventEmail}</span>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
