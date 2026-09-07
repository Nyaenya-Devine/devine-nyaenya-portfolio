/**
 * Project catalogue — P3 updated with all repos, honest statuses
 */

export type ProjectStatus =
  | "Live demo"
  | "Active project"
  | "Simulation / lab"
  | "Experimental / WIP";

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  overview: string;
  tech: string[];
  concepts: string[];
  github: string;
  liveUrl?: string;
  caseStudy: boolean;
  weight: number;
};

export const projects: Project[] = [
  {
    slug: "chokepoint",
    name: "Chokepoint",
    kicker: "Security control plane",
    status: "Live demo",
    featured: true,
    summary:
      "A least-privilege access-control and tamper-evident audit platform for high-impact operations — for both humans and AI agents. Real role-based auth, a two-person approval workflow, a hash-chained HMAC audit log, and explainable anomaly detection, with 26 tests that prove the security properties. P3 redesign: Obsidian Aurora editorial.",
    overview:
      "Chokepoint answers a specific question: how do you let people — and increasingly, AI agents — " +
      "perform high-impact actions without giving any single actor enough authority to abuse it? It is a " +
      "full-stack security product with real role-based authentication, a working dual-control (two-person) " +
      "approval workflow, a SHA-256 hash-chained and HMAC-signed tamper-evident audit ledger, and " +
      "explainable anomaly detection. It is framed around the OWASP Agentic AI failure class " +
      "ASI03 — Identity & Privilege Abuse. The security logic lives in reviewed library modules and is " +
      "backed by a Vitest suite that tests the controls themselves. P3: 52 tests in reset-lab inform this productized version.",
    tech: ["Next.js 16 (App Router)", "TypeScript", "React", "Vitest 26 tests", "Web Crypto / PBKDF2", "HMAC-SHA256", "Obsidian Aurora theme", "Vercel", "PWA"],
    concepts: [
      "Least privilege",
      "RBAC",
      "Separation of duties",
      "Dual-control approval",
      "Tamper-evident audit log",
      "Hash chaining",
      "HMAC integrity",
      "Anomaly detection",
      "Session security",
      "Security headers / CSP",
      "Human & AI actors",
      "OWASP Agentic AI ASI03",
    ],
    github: "https://github.com/Nyaenya-Devine/Nyaenya-Devine-chokepoint",
    liveUrl: "https://nyaenya-devine-chokepoint.vercel.app",
    caseStudy: true,
    weight: 100,
  },
  {
    slug: "android-reset-lab",
    name: "Android Reset Lab",
    kicker: "Security simulation",
    status: "Simulation / lab",
    featured: true,
    summary:
      "A simulation of an enterprise mobile-device reset system that prevents single-person abuse — default-deny RBAC, four-eyes dual-control, hash-chained + HMAC-signed audit log + TOTP MFA + SIEM shipping. Never touches real device; controls are subject. 52 tests, 6/6 attacks detected, P3 hardened.",
    overview:
      "Android Reset Lab models the sensitive operation at the heart of enterprise mobile management: " +
      "wiping a lost or stolen device. A single compromised IT account should never be able to wipe a " +
      "fleet, so the lab enforces authentication (PBKDF2/Argon2id + TOTP MFA), default-deny RBAC, four-eyes " +
      "approval, and a tamper-evident + HMAC tamper-proof audit trail with SIEM shipping. Deliberately simulation-only — " +
      "device state is a field that flips from active to wiped in local data. Hardened P0→P3, 18→52 tests, 15 security bugs fixed, " +
      "14→9 false positives, honest limitations 14 items, 3 demos proving detection/blocking.",
    tech: ["Python (stdlib + argon2-cffi)", "pytest 52 tests", "PBKDF2 / Argon2id", "HMAC-SHA256", "TOTP RFC 6238", "SQLite WAL + JSON", "CSRF + Rate limiting", "SIEM shipping"],
    concepts: [
      "Authentication",
      "Authorization",
      "Default-deny RBAC",
      "Dual-control (four-eyes)",
      "Tamper-evident + HMAC audit log",
      "Hash chaining + HMAC",
      "Device state management",
      "Threat modeling",
      "Attack simulation",
      "Anomaly / threat detection",
      "MFA (TOTP)",
      "SIEM shipping",
    ],
    github: "https://github.com/Nyaenya-Devine/android-reset-lab",
    liveUrl: "https://github.com/Nyaenya-Devine/android-reset-lab/releases/tag/v3.0",
    caseStudy: true,
    weight: 90,
  },
  {
    slug: "android-device-management-tool",
    name: "Android Device Management Tool",
    kicker: "Full-stack experiment",
    status: "Experimental / WIP",
    featured: true,
    summary:
      "An honest attempt to evolve the reset-lab concept into a realistic Android Enterprise device-management web app using Next.js and TypeScript. Does not remotely factory-reset real devices — incomplete, experimental, but taught full-stack and integration lessons. Now redesigned with Obsidian Aurora theme.",
    overview:
      "After the reset lab proved the security controls in isolation, this project tried to carry them " +
      "into a more realistic product surface: a modern web application for Android Enterprise device " +
      "management, built with Next.js and TypeScript and backed by a database. The original vision — a " +
      "fully functional remote enterprise-management system — was not achieved, and it does not remotely " +
      "factory-reset or control arbitrary Android devices. It is presented as an experimental, " +
      "work-in-progress effort that demonstrates full-stack development, API design, security-focused " +
      "architecture, and — importantly — the integration challenges and realistic scope decisions that " +
      "separate a controlled simulation from a production product. Now redesigned with Obsidian Aurora editorial to match portfolio.",
    tech: ["Next.js 16", "TypeScript", "React", "REST APIs", "PostgreSQL + Drizzle", "Obsidian Aurora theme", "Full-stack web"],
    concepts: [
      "Full-stack development",
      "Android Enterprise concepts",
      "Security-focused architecture",
      "API development",
      "Authentication / authorization",
      "Integration challenges",
      "Learning from an incomplete build",
    ],
    github: "https://github.com/Nyaenya-Devine/android-device-management-tool",
    liveUrl: "https://android-device-management-tool.vercel.app",
    caseStudy: true,
    weight: 70,
  },
  {
    slug: "endopima-kenya",
    name: "EndoPima Kenya",
    kicker: "Health-tech · Community-first",
    status: "Experimental / WIP",
    featured: false,
    summary:
      "Bilingual, community-first endometriosis early-recognition and care-navigation prototype for Kenya. Guided symptom exploration, health timeline, clinician handoff, care navigation, cost/financing guidance — privacy-conscious, local-first design. Built to learn health-tech product thinking beyond security.",
    overview:
      "EndoPima Kenya is a bilingual (English/Kiswahili), community-first prototype for endometriosis " +
      "early-recognition and care-navigation in Kenya. It explores how to guide users through symptom " +
      "exploration without diagnosing, build a health timeline they can hand to a clinician, navigate care " +
      "options, and understand cost/financing — with a privacy-conscious, local-first design. It is not a " +
      "medical device and does not provide diagnosis. It taught product thinking in a sensitive domain, " +
      "bilingual UX, and community health navigation — complementary to the security-focused builds.",
    tech: ["HTML", "CSS", "JavaScript", "Bilingual UX", "Privacy-conscious design", "Community health"],
    concepts: [
      "Health-tech product design",
      "Bilingual UX (EN/SW)",
      "Community-first",
      "Privacy-conscious",
      "Care navigation",
      "Early-recognition prototype",
      "Kenya context",
    ],
    github: "https://github.com/Nyaenya-Devine/endopima-kenya",
    caseStudy: false,
    weight: 50,
  },
  {
    slug: "portfolio",
    name: "Portfolio — Obsidian Aurora",
    kicker: "This site · P3 redesign",
    status: "Live demo",
    featured: false,
    summary:
      "Professional cybersecurity & security-engineering portfolio — build, test, break, learn, secure. Next.js 16 + TypeScript + Tailwind, completely redesigned from basic dark+teal to stunning Obsidian Aurora editorial (amber #34D96B + violet #10B981, Instrument Serif, glass + noise + aurora). 14/14 static pages, 0 CVEs, no blank spaces.",
    overview:
      "This portfolio itself is a project: originally dark charcoal + teal (common), now completely redesigned " +
      "to Obsidian Aurora editorial — obsidian #070C09 + warm paper #0D1410 contrast, amber signal + violet depth, " +
      "Instrument Serif display + Geist Sans body + Geist Mono technical, glass blur cards with border beams, aurora " +
      "gradients, noise texture, rounded-full pills, editorial whitespace. All inner pages polished (no blank spaces), " +
      "projects added (4 builds), resume + github.io matching theme. Built to be stunning, not basic, and to prove " +
      "design discipline alongside security engineering.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Instrument Serif", "Obsidian Aurora theme", "Vercel", "14 static pages"],
    concepts: [
      "Editorial design",
      "Obsidian Aurora theme",
      "Glass morphism",
      "Design systems",
      "Portfolio engineering",
      "No blank spaces",
      "Professional cleaner",
    ],
    github: "https://github.com/Nyaenya-Devine/devine-nyaenya-portfolio",
    liveUrl: "https://devine-nyaenya-portfolio.vercel.app",
    caseStudy: false,
    weight: 40,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
