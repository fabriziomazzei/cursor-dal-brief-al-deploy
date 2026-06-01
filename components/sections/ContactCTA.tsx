import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function ContactCTA() {
  return (
    <Section id="contatti" background="darker">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-coral-50/40 px-8 py-16 shadow-card md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral-100/60 blur-[100px]"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm md:text-display-md font-semibold text-navy-900">
              Hai un progetto in mente? Sentiamoci.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Una call di trenta minuti per capire se ha senso lavorare
              insieme. Nessun preventivo a freddo, nessuna pressione.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="primary"
                size="lg"
              >
                Scrivimi una mail
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Button>
              <p className="text-sm text-slate-500">
                oppure{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-navy-800 underline-offset-4 hover:underline"
                >
                  {siteConfig.phoneDisplay}
                </a>
                {" "}— lun-ven 9:00-18:00
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
