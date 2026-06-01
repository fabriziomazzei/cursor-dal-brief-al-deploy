"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

type NavLink = { label: string; href: string };

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/#servizi" },
  { label: "Evento", href: "/evento" },
  { label: "Contatti", href: "/#contatti" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-navy-900"
          >
            {siteConfig.name}
            <span className="text-coral-500">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-navy-900 font-medium"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href={`mailto:${siteConfig.email}`} variant="primary" size="md">
              Scrivimi
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-900 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Apri menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="border-t border-slate-200 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2.5 text-base text-slate-700 hover:bg-slate-50 hover:text-navy-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button
                  href={`mailto:${siteConfig.email}`}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Scrivimi
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
