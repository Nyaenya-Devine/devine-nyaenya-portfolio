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
      "A least-privilege access-control and tamper-evident audit platform for high-impact operations — for both humans and AI agents. Real role-based auth, a two-person approval workflow, a hash-chained HMAC audit log, and explainable anomaly detection, with 26 tests that prove the security properties.",
    overview:
      "Chokepoint answers a specific question: how do you let people — and increasingly, AI agents — " +
      "perform high-impact actions without giving any single actor enough authority to abuse it? It is a " +
      "full-stack security product with real role-based authentication, a working dual-control (two-person) " +
      "approval workflow, a SHA-256 hash-chained and HMAC-signed tamper-evident audit ledger, and " +
      "explainable anomaly detection. It is framed around the OWASP Agentic AI failure class " +
      "ASI03 — Identity & Privilege Abuse. The security logic lives in reviewed library modules and is " +
      "backed by a Vitest suite that tests the controls themselves. P3: 52 tests in reset-lab inform this productized version.",
    tech: ["Next.js 16 (App Router)", "TypeScript", "React", "Vitest 26 tests", "Web Crypto / PBKDF2", "HMAC-SHA256", "Vercel", "PWA"],
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
      "Evolving the reset-lab into a dual-mode Android Enterprise console: a local simulator plus live Google Android Management API integration (OAuth2 service account, CloudDPC QR enrollment, policies, WIPE/LOCK/REBOOT commands, deprovision). Experimental — the live path is implemented and documented with a go-live runbook, but not yet exercised on real hardware.",
    overview:
      "The reset lab proved the controls in isolation; this project carries them into a product "
      + "surface: a Next.js/TypeScript console (PostgreSQL + Drizzle) for Android Enterprise device "
      + "management with two modes. Simulator manages synthetic devices locally; live mode calls the "
      + "real Android Management API — service-account JWT auth, encrypted keys at rest, CloudDPC QR "
      + "provisioning bundles, policies, enrollment tokens, issueCommand (LOCK / WIPE / REBOOT / "
      + "RELINQUISH_OWNERSHIP / lost mode / RESET_PASSWORD) and enterprises.devices.delete deprovision. "
      + "Wipe semantics follow the real API: the device must acknowledge before it wipes. Honest status: "
      + "experimental / WIP — the live path is not yet proven on a real enrolled device; a precise "
      + "go-live runbook and web+Python CI live in the repo.",
    tech: ["Next.js 16", "TypeScript", "React", "PostgreSQL + Drizzle", "Android Management API", "OAuth2 service-account JWT", "CloudDPC QR provisioning", "CI: web + Python"],
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
    name: "Portfolio",
    kicker: "This site · Design + build",
    status: "Live demo",
    featured: false,
    summary:
      "Professional cybersecurity & security-engineering portfolio — build, test, break, learn, secure. Next.js 16 + TypeScript + Tailwind. Accessibility-driven dark-green design (green #34D96B on green-black), mixed fonts (Fraunces + Inter + JetBrains Mono), luminous gradient text, subtle falling-code background, clickable project windows. Strict CSP, 16 routes, 0 CVEs.",
    overview:
      "This portfolio is a security engineer's public face, so it is treated like a security "
      + "product: content visible without JavaScript, strict CSP headers, no fabricated claims, honest "
      + "status labels on every project. Design evolved in passes — a green-accent rebuild of the "
      + "five-project catalogue, then an accessibility pass: luminous gradient text (no dark anchors), "
      + "mixed fonts (Fraunces display, Inter body, JetBrains Mono technical), a sparse animated "
      + "falling-code canvas kept behind content, and large clickable project windows that lead "
      + "straight into each case study.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Fraunces + Inter + JetBrains Mono", "Strict CSP", "Vercel", "16 routes"],
    concepts: [
      "Security-minded webcraft",
      "Dark-green design system",
      "Typography systems",
      "Accessibility",
      "Honest engineering content",
      "SEO & performance",
    ],
    github: "https://github.com/Nyaenya-Devine/devine-nyaenya-portfolio",
    liveUrl: "https://devine-nyaenya-portfolio.vercel.app",
    caseStudy: false,
    weight: 40,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
