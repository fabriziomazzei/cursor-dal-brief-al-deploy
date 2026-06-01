import { Container } from "@/components/ui/Container";
import { clientLogos } from "@/lib/data";

export function ClientLogos() {
  return (
    <section
      id="clienti"
      className="scroll-mt-24 border-y border-slate-200 bg-surface-muted py-16"
    >
      <Container>
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Alcune realtà con cui ho lavorato
        </p>
        <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <li
              key={logo.name}
              className="flex items-center justify-center text-center"
            >
              <span className="font-serif text-lg tracking-tight text-slate-400 transition-colors duration-300 hover:text-navy-800 md:text-xl">
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
