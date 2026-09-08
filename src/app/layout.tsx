import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AmbientBackground } from "@/components/AmbientBackground";
import { ScrollChrome } from "@/components/ScrollChrome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  // Variable serif (single file): real optical-size + weight range 400–700,
  // so font-medium/semibold/bold all render true weights — no synthetic bold.
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.summary,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  keywords: [
    "Devine Nyaenya",
    "cybersecurity",
    "security engineer",
    "application security",
    "security engineering",
    "RBAC",
    "tamper-evident audit",
    "threat modeling",
    "Python",
    "Next.js",
    "Kenya",
    "Argon2id",
    "HMAC",
    "TOTP",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#070C09",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  sameAs: [site.github, site.linkedin].filter(Boolean),
  knowsAbout: [
    "Cybersecurity",
    "Security Engineering",
    "Application Security",
    "Threat Modeling",
    "RBAC",
    "Python",
    "Linux",
    "Argon2id",
    "HMAC",
    "TOTP",
  ],
  address: { "@type": "PostalAddress", addressCountry: "KE" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-base font-sans antialiased">
        <AmbientBackground />
        <ScrollChrome />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main" className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
