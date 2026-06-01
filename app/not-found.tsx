import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-white pt-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-600">
            Errore 404
          </p>
          <h1 className="mt-4 text-display-sm md:text-display-md font-semibold text-navy-900">
            Questa pagina non c’è.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            Forse il link è vecchio, forse l’ho rimossa io. Torna alla home e
            riproviamo.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary" size="lg">
              Torna alla home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
