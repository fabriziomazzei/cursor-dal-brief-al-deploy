import type { Service } from "@/lib/types";

type ServiceCardProps = {
  service: Service;
};

function Icon({ iconKey }: { iconKey: Service["iconKey"] }) {
  const common = "h-6 w-6";
  switch (iconKey) {
    case "social":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.5 9h17M3.5 15h17M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
          <path d="M8 14h2M14 14h2M8 17h2M14 17h2" />
        </svg>
      );
    case "pen":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5z" />
          <path d="M13 6l5 5" />
        </svg>
      );
    case "spark":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8" />
        </svg>
      );
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative h-full rounded-xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:border-coral-200 hover:shadow-card-hover">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-coral-50 text-coral-600 transition-colors duration-300 group-hover:bg-coral-100 group-hover:text-coral-700">
        <Icon iconKey={service.iconKey} />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-navy-900">{service.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-slate-600">
        {service.description}
      </p>
      <ul className="space-y-2.5 border-t border-slate-100 pt-5">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm text-slate-600">
            <span
              className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-coral-500"
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
