import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ClientLogos />
      <ContactCTA />
    </>
  );
}
