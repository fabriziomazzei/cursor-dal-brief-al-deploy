import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data";

export function About() {
  return (
    <Section id="chi-sono" background="darker">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-stone-100 to-stone-200 shadow-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="h-24 w-24 text-slate-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
              </div>
              <div className="absolute left-5 top-5 rounded-full bg-coral-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-coral-700">
                Foto verticale
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Chi sono"
              title="Otto anni dentro al marketing, ora al tuo fianco."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Mi chiamo Marco Bianchi. Ho lavorato in agenzia per quattro
                anni e in azienda per altri quattro, gestendo budget
                pubblicitari, piani editoriali e progetti di brand per realtà
                che andavano dalla start-up al gruppo industriale.
              </p>
              <p>
                Dal 2022 lavoro come freelance. Il motivo è semplice: le PMI
                italiane hanno bisogno di marketing fatto bene, ma non sempre
                hanno senso ad assumere una figura interna a tempo pieno. Io
                entro nei progetti come fossi parte del team, per il tempo che
                serve.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-display-sm font-semibold text-coral-600">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-slate-500 md:text-sm md:normal-case md:tracking-normal">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
