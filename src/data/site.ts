/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CENTRAL SITE CONFIGURATION
 *
 * All personal/contact details live here (and can be overridden by environment
 * variables — see .env.example). Nothing is fabricated: if a value such as an
 * email or LinkedIn URL is not provided, the UI hides that link or shows an
 * explicit "configure this" placeholder instead of inventing one.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Devine Nyaenya",
  firstName: "Devine",
  lastName: "Nyaenya",
  role: "Cybersecurity Engineer / Security Builder",
  location: "Kenya",
  // Positioning statement — the thesis of the whole site.
  tagline: "Building security systems that don't just look secure — they prove it.",
  methodology: ["Build", "Test", "Break", "Learn", "Secure"] as const,
  // One-paragraph summary used in the hero and meta descriptions.
  summary:
    "I build security-focused software, investigate vulnerabilities in authorized labs, and " +
    "ship defensive controls that are implemented and tested — not just described. Self-taught, " +
    "hands-on, and focused on application security, access control, and security engineering.",

  // Canonical origin. The live, working domain is the Vercel deployment URL
  // (no custom domain registered). Override via env if that ever changes.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://devine-nyaenya-portfolio.vercel.app",

  // Contact / social. Env vars win; empty string => treated as "not configured".
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ||
    "https://www.linkedin.com/in/devine-n-b16776173",
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "https://github.com/Nyaenya-Devine",

  // Optional form backend. Empty => the contact form falls back to mailto:.
  contactFormEndpoint: process.env.CONTACT_FORM_ENDPOINT?.trim() || "",
} as const;

/** Convenience: GitHub profile + repo links (verbatim from the real accounts). */
export const repos = {
  profile: "https://github.com/Nyaenya-Devine",
  chokepoint:
    "https://github.com/Nyaenya-Devine/Nyaenya-Devine-chokepoint",
  chokepointLive: "https://nyaenya-devine-chokepoint.vercel.app",
  androidResetLab: "https://android-reset-lab.vercel.app",
  androidDeviceManagement:
    "https://github.com/Nyaenya-Devine/android-device-management-tool",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  /** When false, the value is not configured yet and the UI shows a placeholder. */
  configured: boolean;
  external: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: repos.profile,
    handle: "@Nyaenya-Devine",
    configured: true,
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    handle: site.linkedin
      ? site.linkedin.replace(/^https?:\/\/(www\.)?/, "")
      : "Add your LinkedIn URL in .env.local",
    configured: Boolean(site.linkedin),
    external: true,
  },
  {
    label: "Email",
    href: site.email ? `mailto:${site.email}` : "#contact",
    handle: site.email || "Add your email in .env.local",
    configured: Boolean(site.email),
    external: false,
  },
];
