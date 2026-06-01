import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} · Marketing freelance per PMI`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.shortBio,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} · Marketing freelance per PMI`,
    description: siteConfig.shortBio,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="min-h-screen bg-surface-muted antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
