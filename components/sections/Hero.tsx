import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-coral-100/80 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-coral-50 blur-[100px]" />
      </div>

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-coral-200 bg-coral-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-coral-700">
              <span className="h-1.5 w-1.5 rounded-full bg-coral-500" />
              Marketing Freelance · {siteConfig.city}
            </p>
            <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-semibold tracking-tight text-navy-900">
              Il marketing della tua azienda, gestito da chi lo fa di mestiere.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
              Aiuto piccole e medie imprese a comunicare meglio senza assumere
              un reparto marketing interno. Strategia, contenuti, presenza
              online. Una persona sola, risultati misurabili.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href="#contatti"
                variant="primary"
                size="lg"
                className="btn-parliamone group duration-300 ease-bounce hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_28px_-6px_rgba(249,115,22,0.5)] active:translate-y-0 active:scale-100"
              >
                <span className="relative z-10">Parliamone</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:animate-arrow-nudge"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Button>
              <Button href="#servizi" variant="secondary" size="lg">
                Vedi i servizi
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-stone-100 to-stone-200 shadow-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="h-32 w-32 text-slate-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
              </div>
              <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-slate-500">
                Sostituire <code className="text-coral-600">marco-portrait.jpg</code> in <code className="text-coral-600">/public/images</code>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
