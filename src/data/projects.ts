/**
 * Project catalogue — P4 updated with all repos, honest statuses — v2.0 OrbitDesk Voice + Desktop
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
    name: "OrbitDesk v5.1",
    kicker: "Modern Workplace Operations Lab — Flowing Conversation Fix + Student Mode + Real Voice + Desktop",
    status: "Live demo",
    featured: true,
    summary:
      "v5.1 Flowing Conversation FIX — The finest MSP Team Lead Simulator: REAL HUMAN PHONE FLOW — you pick up → hear 'Hello? Is this IT support?' waiting for YOUR greeting (not dumping P1 with Correlation ID instantly), you say 'Hello, how may I help you today?' → client introduces 'Hi, this is Priya from Finance at NovaTech...' → you acknowledge → problem stated → back-and-forth troubleshooting where client DOES actions when asked (dsregcmd /status → AzureAdJoined YES Compliance NO, Company Portal Sync → Last sync 2 min ago BitLocker failing, BitLocker → Protection Off 0%) + asks questions back (Will I lose files? ETA? Audit trail?) + follow-up auto 4s, phases tracked waiting_greeting→waiting_intro→problem_stated→troubleshooting→resolution with badge + dynamic placeholder + quick replies per phase, TTS speaks each turn, scored empathy/clarity/technical/fluency/clientLang. v5.0 Student Mode: balanced queue max 1 P1 in 5, P1 3% student 15% expert, RemoteDesktopV2 portal→RDP real linkage BitLocker Fixed green, Student Guide 7-step tutorials, Expert toggle. Real voice both sides Web Speech TTS+STT mic 🎙️ + 9 MP3, 5 voices men & women, tech experts conference different voices, PWA+Electron desktop installable, 16 ticket templates, per-client policies NovaTech strict CA → P1 50 users Bloom relaxed Apex SEC-2024-07, 5 agents 44h/week, 6 admin portals, SLA/CSAT/QA dashboard, training lab.",
    overview:
      "OrbitDesk v5.1 is the flowing conversation fix — previously, picking up call dumped entire P1 'Hi I'm Priya from Finance at NovaTech blocked by CA error 53000 Correlation ID... Payroll 45 mins P1' instantly, no chance to greet, not human. Now 100% real human flow: Phone rings 800Hz → Accept → Short 'Hello? Is this IT support?' waiting_greeting phase, placeholder 'Say hello first: Hello, how may I help you today?', you greet → client introduces flowing 'Hi thank you, this is Priya from Finance at NovaTech...' waiting_intro, placeholder 'Acknowledge: Thank you, I can help...' → you acknowledge → problem_stated conversational but detailed → troubleshooting back-and-forth where client does actions NOW when you ask dsregcmd /status, Company Portal Sync, BitLocker, with output box AzureAdJoined YES Compliance NO, asks follow-up questions 'What is ETA? Correlation ID... Will I lose my work?' auto 4s, sentiment changes, typing dots, speaking indicator, TTS speaks each turn, quick replies change per phase, scoring empathy/clarity/technical/fluency/clientLang live 0-100, resolution 'Perfect, enabled BitLocker, Compliant YES, Teams working!'. v5.0 additions: Student Mode vs Expert toggle, studentMode=true default, ticketEngine P1 3% student 15% expert, generateInitialTickets 5 max 1 P1 loop attempts<10 fixes overwhelming queue 18 total 9 P1 → balanced, RemoteDesktopV2 fixes overflow break-words truncate min-w-0 responsive + real linkage portal→RDP bitLockerFixed syncDone props, StudentModeGuide 7-step tutorial modal progressive disclosure, protection+viral+earning docs, build 7 routes, Vercel permanent orbitdesk-gamma.vercel.app. Inspired by Linear dark-first violet accent, Stripe gradients, Slack channels, Intercom human chat, Superhuman speed, Notion warmth, Vercel restraint — not basic AI, human premium masterpiece.",
    tech: [
      "Next.js 15 App Router + TypeScript 5 + Tailwind 4",
      "v5.1 Flowing Conversation Fix — Phases waiting_greeting→waiting_intro→problem_stated→troubleshooting→resolution, YOU greet first, client introduces, not info dump",
      "v5.0 Student Mode — Balanced queue max 1 P1 in 5, P1 3% student 15% expert, RemoteDesktopV2 portal→RDP real linkage BitLocker Fixed green, Student Guide 7-step",
      "Real Voice Both Sides — Web Speech TTS+STT mic 🎙️ + 9 MP3, 5 voices men & women, TTS each turn, speaking indicator, typing dots",
      "Flowing Engine — Client says 'Hello? Is this IT support?' → YOU 'Hello how may I help?' → 'Hi this is Priya from Finance...' → actions on other side dsregcmd/status Company Portal Sync BitLocker",
      "Dynamic UX — Phase badge, placeholder changes per phase, quick replies per phase, follow-up auto 4s, client asks Will I lose files? ETA? Audit trail?",
      "Tech Experts Conference — Alex Entra male formal, Priya Intune female friendly, David Exchange calm, Lisa Teams empathetic, MS Support — different voices",
      "PWA + Electron Desktop — Manifest 192/512 maskable shortcuts file handlers share target sw.js offline cache InstallPrompt + Electron 28 native P1 notifications global shortcuts tray",
      "16 Ticket Templates — Entra 53000/53003/500121, Intune 0x80180024/DeviceCapReached/BitLocker/Autopilot, Exchange Quarantine/Message Trace, Teams, Windows, Defender",
      "Per-Client Policies — NovaTech 24/7 strict CA without Report-Only → P1 50 users, Bloom SMB relaxed 9-5, Apex SEC-2024-07 Strict + DLP + Tamper",
      "5 Agents Skills 1-10 44h/week SLA/CSAT/QA/FRT/MTTR SBI+GROW conflicts + 6 Admin Portals Entra Sign-in CA tab Intune Exchange Service Health What If Audit Logs",
      "Security — Encrypted RDP Session ID Recording Audit, RBAC, Break Glass excluded CA, Zero Trust CA+MFA+Trusted locations, Compliance per-client, Defender Quarantine+DLP, CSP+HSTS headers, No real data, Threat model 8 vectors",
      "Design — Linear dark-first violet accent bento rounded-2xl ⌘K Inter Geist Mono Stripe gradients Slack Intercom Superhuman Notion Vercel — human premium not AI basic",
      "Build 7 routes, 0 vulns prod, LICENSE MIT, Vercel permanent orbitdesk-gamma.vercel.app + PWA + Electron .exe/.dmg/.AppImage",
    ],
    concepts: [
      "v5.1 Flowing Conversation — YOU greet first, not client dumping P1 with Correlation ID",
      "Phases waiting_greeting→waiting_intro→problem_stated→troubleshooting→resolution + badge + dynamic placeholder",
      "Student Mode vs Expert — Balanced queue max 1 P1 in 5, P1 3% student, progressive disclosure tutorials",
      "Real Voice Both Sides — TTS speaks each turn, STT mic, 5 voices men & women, speaking indicator",
      "Client Does Actions On Other Side — dsregcmd /status → AzureAdJoined YES Compliance NO, Company Portal Sync, BitLocker Off",
      "Client Asks Questions Back — Will I lose files? What does 53000 mean? ETA? Audit trail? Follow-up auto 4s",
      "RemoteDesktopV2 — Portal actions affect RDP real state BitLocker Fixed green, no text cut break-words",
      "Modern Workplace Support — MSP Multi-Client Team Lead M365 Entra ID Intune Exchange Teams Windows",
      "Per-Client Policies + Expectations Tech vs Non-Tech + Voice Per Client + 24/7 vs 9-5",
      "SLA 95% + CSAT 4.5 + FRT + MTTR + QA + Roster 44h/week + Problem Management ITIL + KB",
      "Security — Encrypted Sessions + Audit Everywhere + RBAC + Break Glass + Zero Trust + Compliance + Defender + Headers + Threat Model",
      "Design — Linear + Stripe + Slack + Intercom + Superhuman + Notion + Vercel — human premium masterpiece",
    ],
    github: "https://github.com/Nyaenya-Devine/orbitdesk",
    liveUrl: "https://orbitdesk-gamma.vercel.app",
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
