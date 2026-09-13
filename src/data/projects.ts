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
    slug: "orbitdesk",
    name: "OrbitDesk",
    kicker: "Modern Workplace Operations Lab — MSP Team Lead Simulator",
    status: "Live demo",
    featured: true,
    summary:
      "The finest MSP Team Lead Simulator — Real-time endless tickets (16 types: Entra ID 53000 DeviceNotCompliant, Intune 0x80180024 stale enrollment, Exchange quarantine, BitLocker, Autopilot TPM, Defender), Call Center with live transcript & different voice per client (Enterprise Tech formal Correlation ID, SMB casual emojis, Regulated SEC-2024-07), Remote PC Access with encrypted RDP Session ID + Recording + Audit + Windows 11 desktop sim + PowerShell dsregcmd /status + Get-BitLockerVolume + Company Portal Sync, Per-Client Policies (NovaTech 24/7 strict CA without Report-Only → P1 50 users, Bloom SMB relaxed, Apex SEC-2024-07 Strict + DLP), 5 simulated agents with skills 1-10 + 44h/week compliance + SLA/CSAT/QA/FRT/MTTR + conflicts Alex vs Jamal with SBI + GROW coaching, 6 mock admin portals (Entra Sign-in logs CA tab, Intune compliance drill-down, Exchange Message Trace + Quarantine, Service Health, What If tool, Audit Logs), Dashboard with SLA 95% + CSAT 4.5 + ticket trends → Problem Management ITIL, Training Lab with tutorials + quiz + coaching scenarios. Security hardened with military-grade upgrades.",
    overview:
      "OrbitDesk is a production-grade, fully functioning simulator for Team Lead - Modern Workplace Support (M365, Entra ID, Intune, Exchange Online, Teams, Windows) across multiple clients — inspired by Linear dark-first + violet accent, Stripe gradients, Slack channels, Intercom human chat, Superhuman speed, Notion warmth, Vercel restraint. It is NOT basic AI — it has real-time SLA timers ticking every second, endless ticket generation every 8 seconds, incoming P1 calls with live transcript that responds to YOUR words (different voice per client: NovaTech technical formal Correlation ID, Bloom casual emojis simple steps, Apex formal compliance SEC-2024-07), remote PC access that feels 100% real (encrypted RDP Session ID + Recording + Audit log + Windows 11 desktop sim + PowerShell terminal with dsregcmd /status full output + Get-BitLockerVolume Protection Off + ipconfig + Company Portal Sync), per-client policies (NovaTech 24/7 strict CA Require compliant device ON without Report-Only causing P1 50 users blocked, Bloom SMB relaxed MFA only, Apex Regulated SEC-2024-07 Strict + DLP + Defender Tamper), 5 simulated agents with personalities + skills 1-10 + 44h/week compliance tracking + SLA/CSAT/QA/FRT/MTTR + mood + learning gaps + conflicts (Alex vs Jamal public shaming → private 1:1s SBI framework), 6 mock admin portals fully functional (Entra Sign-in logs with Conditional Access tab showing DeviceNotCompliant 53000 + What If tool safe testing + Report-Only mode + Audit Logs who pushed policy at 08:02 + Service Health Dashboard check FIRST + Intune Device Compliance drill-down + dsregcmd + Exchange Message Trace + Quarantine Release + Allow Sender), Dashboard with SLA Compliance, CSAT, FRT, MTTR, ticket trends INTUNE-001 22 tickets → Problem Management per ITIL + KB + automation, Training Lab with guided tutorials + error code mastery quiz + coaching scenarios. Security upgrades emphasized: Encrypted remote sessions Session ID + Recording + Audit, Audit logs everywhere (Entra Audit, Exchange, Intune, Remote), RBAC Senior/Junior/Lead with max tickets, Break Glass accounts excluded from CA, Zero Trust CA+MFA+Trusted locations+Approved apps, Compliance BitLocker+Defender+OS+SecureBoot+PIN per-client strictness, Defender for Office 365 Quarantine+Anti-spam+DLP, Security headers CSP+HSTS+X-Frame+X-Content-Type+Referrer+Permissions-Policy in next.config.ts, No real data LocalStorage only, Threat model with 8 attack vectors + mitigations, No hardcoded secrets grep clean, Input sanitization command whitelist, npm audit 0 vulns, TypeScript strict, 7 static routes (/, terms, privacy, disclaimer). Legal: Terms, Privacy, Disclaimer pages — Educational simulator, not affiliated with Microsoft/Influx, fictional clients/agents, fair use, MIT, no tracking. Domain safe orbitdesk.vercel.app. This is the finest project yet, masterpiece for hiring as Team Lead Modern Workplace.",
    tech: [
      "Next.js 16.3.5 App Router",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Real-time Engine (SLA 1s, Ticket gen 8s, Chat 8s, Call 1s)",
      "16 Ticket Templates (Entra 53000/53003/500121, Intune 0x80180024/0x80180001/DeviceCapReached/BitLocker/Autopilot, Exchange Quarantine/Message Trace, Teams, Windows BitLocker, Defender)",
      "Call Center (Incoming P1 calls + Live transcript + Different voice per client + Mute/Hold)",
      "Remote PC Access (Encrypted RDP + Windows 11 sim + PowerShell dsregcmd + Get-BitLockerVolume + Company Portal)",
      "Per-Client Policies (NovaTech 24/7 strict, Bloom SMB relaxed, Apex SEC-2024-07 Strict + DLP)",
      "5 Simulated Agents (Skills 1-10, 44h/week, SLA/CSAT/QA/FRT/MTTR, Conflicts SBI + GROW)",
      "6 Mock Admin Portals (Entra Sign-in logs CA tab, Intune Compliance, Exchange Trace + Quarantine, Service Health, What If, Audit Logs)",
      "Security Headers CSP+HSTS+X-Frame in next.config.ts",
      "Legal Pages Terms/Privacy/Disclaimer",
      "Vercel Deployment",
      "0 vulns, 7 static routes, Production-grade",
    ],
    concepts: [
      "Modern Workplace Support",
      "MSP Multi-Client",
      "Team Lead Operations",
      "Entra ID Sign-in logs Conditional Access tab",
      "What If tool + Report-Only mode",
      "Intune Enrollment 0x80180024 + Compliance BitLocker + dsregcmd /status + Company Portal Sync",
      "Exchange Message Trace + Quarantine Release + Allow Sender",
      "Service Health Dashboard",
      "SLA 95% + CSAT 4.5 + FRT + MTTR + QA",
      "Roster Management 44h/week + Workload Allocation + Coverage",
      "Conflict Resolution SBI + Coaching GROW + 1:1s",
      "Problem Management ITIL + Ticket Trends + KB + Automation",
      "Per-Client Policies (CA + Compliance) + Expectations (Tech vs Non-Tech)",
      "Call Center Live Help + Different Voice per Client + Human Conversation",
      "Remote PC Access Encrypted RDP + Audit Logs + Real Commands",
      "Security Upgrades: Encrypted Sessions + Audit Everywhere + RBAC + Break Glass + Zero Trust + Compliance per-client + Defender + Security Headers + No Real Data + Threat Model",
      "Design: Linear dark-first + violet accent + Stripe gradients + Slack channels + Intercom human chat + Superhuman speed + Notion warmth + Vercel restraint",
      "Legal Protection: Terms + Privacy + Disclaimer + Educational + Not Affiliated + Fictional + Fair Use + MIT",
    ],
    github: "https://github.com/Nyaenya-Devine/orbitdesk",
    liveUrl: "https://orbitdesk.vercel.app",
    caseStudy: true,
    weight: 110,
  },
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
    github: "https://github.com/Nyaenya-Devine/chokepoint",
    liveUrl: "https://chokepoint-demo.vercel.app",
    caseStudy: true,
    weight: 100,
  },
  {
    slug: "android-reset-lab",
    name: "Android Reset Lab P4 Cerberus",
    kicker: "Security simulation · God Mode",
    status: "Simulation / lab",
    featured: true,
    summary:
      "P4 Cerberus God Mode: Merkle transparency RFC6962 (inclusion/consistency proofs + Rekor checkpoint sim) + Cedar ABAC policy-as-code (10 policies, AuthZEN, bundle SHA) + risk-adaptive (velocity, impossible travel, device trust, time anomaly) + WebAuthn passkeys (AAGUID allowlist, counter clone detection) + Play Integrity + StrongBox attestation + WYSIWYS tx signing + DPoP token binding. 68 tests, 6/6 attacks + 17 P4 detections. Simulation-only.",
    overview:
      "Android Reset Lab P4 Cerberus is God Mode: it steps up from linear hash chain to Merkle transparency log with inclusion/consistency proofs and Rekor checkpoint anchoring, from static RBAC to Cedar ABAC with explicit deny, decision logs, bundle SHA, and AuthZEN API, from password+MFA to phishing-resistant WebAuthn passkeys (YubiKey 5, Titan M, Touch ID, Pixel StrongBox) with AAGUID allowlist and counter clone detection, from blind device trust to Play Integrity BASIC/DEVICE/STRONG + StrongBox/TEE/Software attestationSecurityLevel + trust_score, from bearer tokens to DPoP proof-of-possession binding, from blind approval to WYSIWYS transaction signing with passkey txAuthSimple. Risk engine scores 0-100 across 8 factors (velocity, failed auth, time anomaly, device trust, MFA strength, escalation, impossible travel, session age) → allow/step_up/tx/deny. Cerberus workflow orchestrates all: request checks attestation + risk + policy + DPoP, approve checks four-eyes + step-up + tx + webauthn + policy, execute re-checks attestation continuously. Deliberately simulation-only — device state active→wiped in local data. Hardened P0→P4, 18→68 tests, 23 threat controls, honest limits 23, demos P2/P3/P4 proving tamper detection, self-approval block, Merkle proofs, policy deny, risk step-up, passkey, attestation, tx, DPoP.",
    tech: ["Python stdlib + argon2-cffi", "pytest 68 tests (52+16 P4)", "Merkle RFC6962 transparency", "Cedar ABAC + AuthZEN", "Risk-adaptive 8 factors", "WebAuthn passkeys + AAGUID", "Play Integrity + StrongBox", "WYSIWYS tx signing + DPoP RFC9449", "PBKDF2/Argon2id + HMAC + TOTP", "SQLite WAL + JSON + decision_logs + checkpoints"],
    concepts: [
      "Merkle Transparency RFC6962/9162",
      "Certificate Transparency",
      "Sigstore Rekor anchoring",
      "Policy-as-Code Cedar ABAC",
      "AuthZEN",
      "Risk-Adaptive Authentication",
      "BeyondCorp Zero Trust",
      "WebAuthn Passkeys FIDO2",
      "Phishing-resistant MFA",
      "Device Attestation Play Integrity",
      "StrongBox Titan M",
      "WYSIWYS Transaction Signing",
      "DPoP Token Binding RFC9449",
      "Four-eyes + Continuous Verification",
      "Tamper-evident + Tamper-proof + Transparency",
      "Threat modeling STRIDE",
      "Attack simulation + Detection",
    ],
    github: "https://github.com/Nyaenya-Devine/android-reset-lab",
    liveUrl: "https://android-reset-lab.vercel.app",
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
    liveUrl: "https://nyaenya-devine.github.io/endopima-kenya/",
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
