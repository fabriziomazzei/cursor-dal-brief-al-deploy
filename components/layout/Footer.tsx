import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/#servizi" },
  { label: "Evento", href: "/evento" },
  { label: "Contatti", href: "/#contatti" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-lg font-semibold text-navy-900">
              {siteConfig.name}
              <span className="text-coral-500">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              {siteConfig.shortBio}
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Naviga
            </p>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-navy-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-500 transition-colors hover:text-navy-900"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Contatti
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-600 transition-colors hover:text-navy-900"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-slate-600 transition-colors hover:text-navy-900"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-coral-600"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21H18v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H10V9z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-coral-600"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-200 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name} · P. IVA {siteConfig.vat} · {siteConfig.city}
          </p>
          <p>Sito realizzato con Next.js e Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
