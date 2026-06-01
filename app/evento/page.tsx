import type { Metadata } from "next";
import { EventHero } from "@/components/event/EventHero";
import { EventProgram } from "@/components/event/EventProgram";
import { EventForm } from "@/components/event/EventForm";
import { eventDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: eventDetails.title,
  description: eventDetails.subtitle,
};

export default function EventoPage() {
  return (
    <>
      <EventHero />
      <EventProgram />
      <EventForm />
    </>
  );
}
