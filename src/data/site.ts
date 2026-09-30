/**
 * Central site configuration — all personal and contact details
 */

export const site = {
  name: "Devine Nyaenya",
  firstName: "Devine",
  lastName: "Nyaenya",
  role: "Cybersecurity • Application Security • Authorized Security Testing",
  location: "Nairobi, Kenya",
  tagline: "Testing security assumptions in authorized labs, then fixing what fails.",
  methodology: ["Scope", "Map", "Test", "Verify", "Report"] as const,
  summary:
    "Cybersecurity practitioner focused on application security and authorized security testing. I build small systems, examine their attack surface, test access-control and workflow assumptions, and document both findings and remediation. My work includes web security, Linux and network labs, attack simulation, least-privilege design and tamper-evident audit evidence.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://devine-nyaenya-portfolio.vercel.app",

  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ||
    "https://www.linkedin.com/in/devine-n-b16776173",
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "https://github.com/Nyaenya-Devine",

  contactFormEndpoint: process.env.CONTACT_FORM_ENDPOINT?.trim() || "",
} as const;

export const repos = {
  profile: "https://github.com/Nyaenya-Devine",
  orbitdesk: "https://github.com/Nyaenya-Devine/orbitdesk",
  orbitdeskLive: "https://orbitdesk-gamma.vercel.app",
  chokepoint: "https://github.com/Nyaenya-Devine/chokepoint",
  chokepointLive: "https://chokepoint-demo.vercel.app",
  androidResetLab: "https://github.com/Nyaenya-Devine/android-reset-lab",
  androidResetLabLive: "https://android-reset-lab.vercel.app",
  androidDeviceManagement:
    "https://github.com/Nyaenya-Devine/android-device-management-tool",
  androidDeviceManagementLive:
    "https://android-device-management-tool.vercel.app",
  endopimaKenya: "https://github.com/Nyaenya-Devine/endopima-kenya",
  endopimaKenyaLive: "https://nyaenya-devine.github.io/endopima-kenya/",
  portfolio: "https://github.com/Nyaenya-Devine/devine-nyaenya-portfolio",
  portfolioLive: "https://devine-nyaenya-portfolio.vercel.app",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
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
