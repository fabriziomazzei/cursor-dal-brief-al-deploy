import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { eventDetails } from "@/lib/data";

export function EventHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-32 md:pb-28 md:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-10 h-96 w-96 rounded-full bg-coral-100/80 blur-[140px]" />
      </div>
      <Container>
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-coral-200 bg-coral-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-coral-700">
            Workshop · {eventDetails.location}
          </p>
          <h1 className="text-display-md md:text-display-lg font-semibold tracking-tight text-navy-900">
            {eventDetails.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            {eventDetails.subtitle}
          </p>

          <dl className="mt-10 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Quando
              </dt>
              <dd className="mt-2 text-base font-medium text-navy-900">{eventDetails.date}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Dove
              </dt>
              <dd className="mt-2 text-base font-medium text-navy-900">{eventDetails.location}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Investimento
              </dt>
              <dd className="mt-2 text-base font-medium text-navy-900">{eventDetails.price}</dd>
            </div>
          </dl>

          <div className="mt-10">
            <Button href="#iscrizione" variant="primary" size="lg">
              Riserva il tuo posto
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
