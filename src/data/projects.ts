/**
 * Project catalogue. Every fact here is grounded in the actual repositories
 * (README / commit history / module names). Nothing is invented: status labels
 * are honest, and the Android Device Management Tool is presented explicitly as
 * an experimental work-in-progress.
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
  /** Short card summary. */
  summary: string;
  /** Longer overview for the case study header. */
  overview: string;
  tech: string[];
  concepts: string[];
  github: string;
  liveUrl?: string;
  caseStudy: boolean;
  /** Relative weight for ordering on the home page (higher = first). */
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
      "A least-privilege access-control and tamper-evident audit platform for high-impact operations — for both humans and AI agents. Real role-based auth, a two-person approval workflow, a hash-chained audit log, and explainable anomaly detection, with a test suite that proves the security properties.",
    overview:
      "Chokepoint answers a specific question: how do you let people — and increasingly, AI agents — " +
      "perform high-impact actions without giving any single actor enough authority to abuse it? It is a " +
      "full-stack security product with real role-based authentication, a working dual-control (two-person) " +
      "approval workflow, a SHA-256 hash-chained and HMAC-signed tamper-evident audit ledger, and " +
      "explainable anomaly detection. It is framed around the OWASP Agentic AI failure class " +
      "ASI03 — Identity & Privilege Abuse. The security logic lives in reviewed library modules and is " +
      "backed by a Vitest suite that tests the controls themselves (altered, deleted, reordered, and " +
      "re-signed ledger entries are all detected).",
    tech: ["Next.js 16 (App Router)", "TypeScript", "React", "Vitest", "Web Crypto / PBKDF2", "HMAC-SHA256", "Vercel", "PWA"],
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
      "A simulation of an enterprise mobile-device reset system that prevents single-person abuse — default-deny RBAC, four-eyes dual-control approval, and a hash-chained, HMAC-signed audit log. It never touches a real device; the controls are the subject. 52 tests, and 6/6 self-run attacks detected.",
    overview:
      "Android Reset Lab models the sensitive operation at the heart of enterprise mobile management: " +
      "wiping a lost or stolen device. A single compromised IT account should never be able to wipe a " +
      "fleet, so the lab enforces authentication, default-deny role-based authorization, four-eyes " +
      "(two-person) approval, and a tamper-evident audit trail. It is deliberately simulation-only — " +
      "device state is a field that flips from active to wiped in a local data file, and an AST-based " +
      "safety test bans destructive calls. The project was hardened in iterative passes (P0–P3), growing " +
      "from 18 to 52 tests, fixing real security bugs (user enumeration, timing attacks, XSS, actor-logging " +
      "defects) and adding Argon2id, TOTP MFA, and SIEM log shipping.",
    tech: ["Python (stdlib only)", "pytest", "PBKDF2 / Argon2id", "HMAC-SHA256", "TOTP (RFC 6238)", "SQLite / JSON", "CSRF", "Rate limiting"],
    concepts: [
      "Authentication",
      "Authorization",
      "Default-deny RBAC",
      "Dual-control (four-eyes)",
      "Tamper-evident audit log",
      "Hash chaining + HMAC",
      "Device state management",
      "Threat modeling",
      "Attack simulation",
      "Anomaly / threat detection",
      "MFA (TOTP)",
    ],
    github: "https://github.com/Nyaenya-Devine/android-reset-lab",
    caseStudy: true,
    weight: 80,
  },
  {
    slug: "android-device-management-tool",
    name: "Android Device Management Tool",
    kicker: "Full-stack experiment",
    status: "Experimental / WIP",
    featured: true,
    summary:
      "An honest attempt to evolve the reset-lab concept into a realistic Android Enterprise device-management web app using Next.js and TypeScript. It does not remotely factory-reset real devices — it is an incomplete, experimental project that taught full-stack and integration lessons the simulation could not.",
    overview:
      "After the reset lab proved the security controls in isolation, this project tried to carry them " +
      "into a more realistic product surface: a modern web application for Android Enterprise device " +
      "management, built with Next.js and TypeScript and backed by a database. The original vision — a " +
      "fully functional remote enterprise-management system — was not achieved, and it does not remotely " +
      "factory-reset or control arbitrary Android devices. It is presented as an experimental, " +
      "work-in-progress effort that demonstrates full-stack development, API design, security-focused " +
      "architecture, and — importantly — the integration challenges and realistic scope decisions that " +
      "separate a controlled simulation from a production product.",
    tech: ["Next.js", "TypeScript", "React", "REST APIs", "Database", "Authentication concepts", "Full-stack web"],
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
    caseStudy: true,
    weight: 60,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
