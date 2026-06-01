import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventDetails } from "@/lib/data";

export function EventProgram() {
  return (
    <Section id="programma" background="darker">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Cosa porti a casa"
              title="Una giornata, tre risultati concreti."
              subtitle="Non solo teoria. A fine giornata avrai materiali operativi pronti da usare già lunedì in azienda."
            />
          </div>
          <ul className="space-y-4 lg:pt-8">
            {eventDetails.outcomes.map((outcome, idx) => (
              <li
                key={outcome}
                className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-coral-50 text-sm font-semibold text-coral-700">
                  {idx + 1}
                </span>
                <p className="text-base leading-relaxed text-slate-700">{outcome}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Programma"
              title="La giornata, ora per ora."
              align="center"
            />
          </div>

          <ol className="mx-auto mt-14 max-w-3xl">
            {eventDetails.program.map((block, idx) => (
              <li
                key={block.time}
                className="relative grid grid-cols-[80px_1fr] gap-6 border-l border-slate-200 pb-10 pl-8 last:pb-0 md:grid-cols-[120px_1fr]"
              >
                <span
                  className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-coral-500 ring-4 ring-surface-muted"
                  aria-hidden="true"
                />
                <div className="text-sm font-semibold text-coral-600 md:text-base">
                  {block.time}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900">{block.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {block.description}
                  </p>
                </div>
                {idx === eventDetails.program.length - 1 && (
                  <span
                    className="absolute -bottom-2 -left-0.5 h-2 w-2 rounded-full bg-slate-200"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
