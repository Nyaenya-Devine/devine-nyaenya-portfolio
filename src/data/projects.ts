/**
 * Project catalogue — Professional security and operations portfolio
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
    slug: "orbitdesk",
    name: "OrbitDesk",
    kicker: "Modern Workplace Operations Lab — Training environment for IT support",
    status: "Live demo",
    featured: true,
    summary:
      "Training environment for Modern Workplace operations — Entra ID, Intune, Exchange, and Teams troubleshooting with realistic tickets, voice communication, remote desktop, and team collaboration. Designed for support engineers and interview preparation.",
    overview:
      "OrbitDesk simulates the daily workflow of a Modern Workplace support team. You triage tickets, investigate sign-in logs with Conditional Access analysis, verify device compliance, handle Exchange quarantine, manage voice calls, and collaborate via team messaging. Features include realistic client profiles with distinct policies and SLAs, secure remote desktop with encrypted sessions and audit logging, voice communication with call controls, and structured performance assessment with CSAT, QA, and communication quality feedback. Built as PWA with offline support and Electron desktop with security hardening, packagable for Play Store via TWA and Microsoft Store via MSIX. All data simulated locally — no real credentials or external API calls.",
    tech: [
      "Next.js 16 + React 19 + TypeScript + Tailwind CSS + Framer Motion",
      "PWA with offline support and installable experience",
      "Electron 32 with security hardening and auto-update",
      "Web Speech API for voice interaction and Web Audio for telephony",
      "Local storage with progress persistence — no backend required",
      "Security headers, CSP, and supply chain controls",
    ],
    concepts: [
      "Modern Workplace Operations",
      "Entra ID and Conditional Access",
      "Intune Device Compliance",
      "Exchange and Defender",
      "Voice Communication",
      "Remote Desktop Operations",
      "Team Collaboration",
      "Performance Assessment",
    ],
    github: "https://github.com/Nyaenya-Devine/orbitdesk",
    liveUrl: "https://orbitdesk-gamma.vercel.app",
    caseStudy: true,
    weight: 110,
  },
  {
    slug: "chokepoint",
    name: "Chokepoint",
    kicker: "Least-Privilege Dual-Control with Tamper-Evident Audit",
    status: "Live demo",
    featured: true,
    summary:
      "Security control plane for sensitive operations — least-privilege access control with dual-control approval, hash-chained tamper-evident audit log, anomaly detection, and policy simulation. Designed for human and AI agent operations under OWASP ASI03.",
    overview:
      "Chokepoint addresses how to enable high-impact operations without granting excessive authority. The product provides role-based access control with four roles and default-deny enforcement, dual-control requiring distinct authorized approver with 15-minute expiry, SHA-256 hash-chained HMAC-signed tamper-evident ledger with integrity verification, explainable anomaly detection, policy simulation with What-If dry-run, and SIEM export with dedicated permissions. Built with Next.js App Router and TypeScript, tested with Vitest covering ledger tamper detection, RBAC and dual-control enforcement, and cryptographic operations. Includes Electron desktop build with security hardening, SBOM generation, and automated security scanning.",
    tech: [
      "Next.js 16 App Router + TypeScript + Vitest",
      "Cryptography: PBKDF2-SHA256, HMAC-SHA256, SHA-256 hash chaining",
      "Tamper-evident ledger with integrity verification",
      "Dual-control with distinct approver enforcement",
      "Role-based access control with default-deny",
      "Anomaly detection and risk scoring",
      "Electron desktop with security hardening",
    ],
    concepts: [
      "Least Privilege",
      "Dual-Control",
      "Tamper-Evident Audit",
      "Hash Chaining",
      "HMAC Integrity",
      "RBAC",
      "Separation of Duties",
      "OWASP ASI03",
    ],
    github: "https://github.com/Nyaenya-Devine/chokepoint",
    liveUrl: "https://chokepoint-demo.vercel.app",
    caseStudy: true,
    weight: 100,
  },
  {
    slug: "android-reset-lab",
    name: "Android Reset Lab",
    kicker: "Security simulation — RBAC, dual-control, and tamper-evident logging",
    status: "Simulation / lab",
    featured: true,
    summary:
      "Simulation of Android device reset operations with security controls — role-based access, four-eyes dual-control, hash-chained audit logging, and attack detection. Built as isolated lab for security engineering learning.",
    overview:
      "Android Reset Lab simulates sensitive device reset workflows with layered security controls. Includes Merkle transparency log with inclusion and consistency proofs, Cedar ABAC policy-as-code, risk-adaptive authentication, WebAuthn passkeys, Play Integrity attestation, transaction signing, and token binding. Test suite covers tamper detection, self-approval blocking, policy enforcement, and attack scenarios. Simulation-only — no real device operations.",
    tech: [
      "Python + pytest + cryptographic controls",
      "Merkle transparency and policy-as-code",
      "Risk-adaptive authentication",
      "WebAuthn and attestation",
      "Security testing and attack simulation",
    ],
    concepts: [
      "Security Simulation",
      "RBAC and Dual-Control",
      "Tamper-Evident Logging",
      "Policy-as-Code",
      "Risk-Adaptive Auth",
      "Attack Detection",
    ],
    github: "https://github.com/Nyaenya-Devine/android-reset-lab",
    liveUrl: "https://android-reset-lab.vercel.app",
    caseStudy: true,
    weight: 90,
  },
  {
    slug: "android-device-management-tool",
    name: "Android Device Management Tool",
    kicker: "Android Enterprise management console — simulator and live API integration",
    status: "Experimental / WIP",
    featured: true,
    summary:
      "Dual-mode Android Enterprise console with local simulator and live Google Android Management API integration. Manages devices, policies, enrollment, and commands with audit logging.",
    overview:
      "Evolves reset lab concepts into full-stack console for Android Enterprise device management. Simulator mode uses local data for development and demos. Live mode integrates with Android Management API via service account JWT, supporting policies, enrollment tokens, QR provisioning, and commands including LOCK, WIPE, REBOOT, and deprovision. Implements encrypted credential storage and audit logging. Experimental — live path documented with go-live guide but requires real enterprise and device for full validation. Presented honestly with clear status and limitations.",
    tech: ["Next.js + TypeScript + PostgreSQL + Drizzle + Android Management API + OAuth2 JWT"],
    concepts: ["Android Enterprise", "Full-stack", "API Integration", "Security-focused"],
    github: "https://github.com/Nyaenya-Devine/android-device-management-tool",
    liveUrl: "https://android-device-management-tool.vercel.app",
    caseStudy: true,
    weight: 70,
  },
  {
    slug: "endopima-kenya",
    name: "EndoPima Kenya",
    kicker: "Community health platform — bilingual and privacy-conscious",
    status: "Experimental / WIP",
    featured: false,
    summary:
      "Bilingual community platform for endometriosis awareness and care navigation in Kenya. Provides symptom exploration, health timeline, and care guidance with privacy-conscious local-first design.",
    overview:
      "EndoPima Kenya is a community-first prototype for endometriosis awareness and care navigation. Supports English and Kiswahili, guides users through symptom exploration without diagnosis, builds health timeline for clinician handoff, and provides care navigation and cost guidance. Designed with privacy-conscious local-first approach. Not a medical device and does not provide diagnosis. Explores product thinking in sensitive health domain.",
    tech: ["HTML, CSS, JavaScript + Bilingual UX + Privacy-conscious design"],
    concepts: ["Health-tech", "Bilingual UX", "Community-first", "Privacy-conscious"],
    github: "https://github.com/Nyaenya-Devine/endopima-kenya",
    liveUrl: "https://endopima-kenya.vercel.app",
    caseStudy: false,
    weight: 30,
  },
];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const portfolioProject = {
  slug: "portfolio",
  name: "Portfolio",
  kicker: "Security engineering portfolio — professional and verifiable",
  status: "Live demo" as const,
  featured: false,
  summary: "Professional portfolio presenting verifiable security work with strict security headers, accessibility, and honest status reporting. Built with Next.js and TypeScript with nonce-based CSP.",
  overview: "Security engineer's portfolio built with security-product discipline — content visible without JavaScript, strict Content Security Policy with nonce and strict-dynamic, no third-party trackers, honest status labels, and accessible design. Features project case studies, security lab write-ups, and contact information managed via environment configuration.",
  tech: ["Next.js 16 + TypeScript + Tailwind CSS + Strict CSP + Accessibility"],
  concepts: ["Security-minded web development", "Accessibility", "Honest engineering", "Performance"],
  github: "https://github.com/Nyaenya-Devine/devine-nyaenya-portfolio",
  liveUrl: "https://devine-nyaenya-portfolio.vercel.app",
  caseStudy: false,
  weight: 40,
};

// Merge portfolio project into projects array for getProject to work
(projects as any).push(portfolioProject);
