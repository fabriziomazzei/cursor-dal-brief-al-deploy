import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section id="servizi" background="navy">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Servizi"
            title="Quattro aree di lavoro. Una persona di riferimento."
            subtitle="Posso seguirne una sola o tutte e quattro, a seconda di cosa serve davvero. Niente pacchetti pre-confezionati: si parte sempre dal capire dove sta l’azienda."
            align="center"
          />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
