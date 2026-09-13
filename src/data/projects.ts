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
    name: "OrbitDesk v2.0.1",
    kicker: "Modern Workplace Operations Lab — Real Voice Calls + Desktop Installable + UX Polish",
    status: "Live demo",
    featured: true,
    summary:
      "The finest MSP Team Lead Simulator v2.0 — Real-time endless tickets (16 types), REAL VOICE CALLS with 5 balanced voices men & women flowing human conversations where client talks with audio, does actions on other side when asked (dsregcmd /status → AzureAdJoined YES Compliance NO, Company Portal Sync → Last sync 2 min ago BitLocker failing, BitLocker → Protection Off 0%), asks questions back (Will I lose files? What does 53000 mean? ETA? Provide audit trail?), tech experts conference with different voices (Alex Entra male formal, Priya Intune female friendly, David Exchange calm, Lisa Teams empathetic), 9 MP3 pre-recorded samples + Web Speech API TTS + STT mic, Remote PC Access encrypted RDP Session ID + Recording + Audit + Windows 11 sim + PowerShell dsregcmd + Get-BitLockerVolume + Company Portal Sync, Per-Client Policies NovaTech 24/7 strict CA without Report-Only → P1 50 users Bloom SMB relaxed Apex SEC-2024-07 Strict + DLP, 5 simulated agents skills 1-10 44h/week compliance SLA/CSAT/QA/FRT/MTTR conflicts Alex vs Jamal SBI + GROW, 6 mock admin portals Entra Sign-in logs CA tab Intune compliance Exchange Trace + Quarantine Service Health What If Audit Logs, Dashboard SLA 95% CSAT 4.5 ticket trends → Problem Management ITIL, Training Lab, Voice Calls tab with VoiceCallDemo + Desktop App tab with PWA + Electron installable, PWA manifest.json icons 192/512 maskable shortcuts file handlers share target sw.js offline cache InstallPrompt + Electron 28 main preload secure IPC native P1 notifications global shortcuts system tray auto-launch encrypted storage. Security hardened military-grade, own the project maximize ability masterpiece final.",
    overview:
      "OrbitDesk v2.0 is a production-grade, fully functioning simulator for Team Lead - Modern Workplace Support (M365, Entra ID, Intune, Exchange Online, Teams, Windows) across multiple clients — inspired by Linear dark-first + violet accent, Stripe gradients, Slack channels, Intercom human chat, Superhuman speed, Notion warmth, Vercel restraint — but now with REAL VOICE CALLS and DESKTOP INSTALLABLE. v2.0 NEW: Real Voice Calls — Different people different issues balanced voices men & women 5 voices: Michael NovaTech Enterprise Tech 24/7 masculine formal rate 1.0 Correlation ID P1 payroll blocked 50 users 53000 DeviceNotCompliant knows dsregcmd /status Company Portal Sync Get-BitLockerVolume can do actions when asked asks technical questions, Jessica Bloom SMB Casual 9-5 feminine friendly rate 1.1 pitch 1.1 casual emojis shared mailbox not showing needs simple steps Click Start → ... asks Will I lose files? Explain like I'm 5? 😅, David Apex Regulated Formal masculine deep rate 0.9 pitch 0.8 formal SEC-2024-07 BitLocker compliance blocking Teams needs audit trail RCA key escrow confirmation. Flowing conversation engine: client talks with voice Web Speech API TTS + 9 MP3 pre-recorded samples, you respond text or mic SpeechRecognition, client does action on other side when asked runs dsregcmd → AzureAdJoined YES Compliance NO syncs Company Portal → Last sync 2 min ago BitLocker failing checks BitLocker → Protection Off 0%, asks questions back, follow-up auto after 4-7s ETA data loss affecting everyone, sentiment changes frustrated→neutral→calm→happy, speaking indicator typing dots waveform. Tech experts conference: Add expert to call with different voice — Alex Rivera Entra ID male formal direct Check Sign-in logs CA tab What If Report-Only 24h break glass excluded need Tenant ID + Correlation ID, Priya Nair Intune female friendly patient mentor For 0x80180024 stale enrollment Settings → Access work/school → Disconnect dsregcmd /leave delete stale device check device cap 5→10 create Problem ticket, Lisa Chen Teams empathetic non-tech language expert great with SMB, David Okafor Exchange calm security Quarantine false positive Message Trace → Quarantined Bulk High Release + Allow Sender + Report Not Junk audit trail SEC-2024-07, MS Support formal escalation asks Tenant ID Correlation ID HAR file KB links — conference with client+expert+you both speak real collaboration. 9 MP3 audio samples generated with 5 balanced voices: novatech-p1-initial dsregcmd-action bitlocker-question bloom-initial sync-action question-simple apex-initial alex-expert-ca conference-join. Voice Calls tab dedicated tab with VoiceCallDemo component Play Voice buttons client actions on other side what makes real & human. Desktop Installable: PWA manifest.json with name short_name description start_url display standalone background #0a0a0a theme #7c3aed icons 192/512 maskable shortcuts P1 Calls/Remote PC/Experts screenshots edge_side_panel launch_handler file_handlers .log/.txt share_target sw.js caches audio/icons/offline skipWaiting clients.claim InstallPrompt component beforeinstallprompt handler shows after 3s Install button detects standalone mode, Electron electron.js main 1400x900 hiddenInset vibrancy icon secure webPreferences contextIsolation preload.js loads orbitdesk.vercel.app or out/index.html fallback native Notification for P1 calls with actions Accept menu OrbitDesk/File/Edit/Calls/View/Window/Help global shortcuts system tray auto-launch encrypted storage file handlers share target window controls overlay, build desktop:dist .exe .dmg .AppImage 87-98MB signed SHA256, dev desktop:dev concurrently Next.js + Electron hot reload. v1.0 features still: Real-time endless tickets 16 templates SLA timers ticking LIVE every 1s P1 calls breach pulse, Remote PC Access 100% real feel encrypted RDP Session ID Recording Audit Windows 11 desktop sim PowerShell dsregcmd /status AzureAdJoined YES MdmUrl Compliance NO Get-BitLockerVolume Protection Off Company Portal Sync, Per-Client Policies NovaTech 24/7 strict CA Require compliant device ON without Report-Only causing P1 50 users blocked Bloom SMB relaxed MFA only Apex Regulated SEC-2024-07 Strict + DLP + Defender Tamper, 5 simulated agents personalities skills 1-10 44h/week compliance SLA/CSAT/QA/FRT/MTTR mood learning gaps conflicts Alex vs Jamal public shaming → private 1:1s SBI framework, 6 mock admin portals fully functional Entra Sign-in logs Conditional Access tab showing DeviceNotCompliant 53000 + What If tool safe testing + Report-Only mode + Audit Logs who pushed policy at 08:02 + Service Health Dashboard check FIRST + Intune Device Compliance drill-down + dsregcmd + Exchange Message Trace + Quarantine Release + Allow Sender, Dashboard SLA Compliance CSAT FRT MTTR ticket trends INTUNE-001 22 tickets → Problem Management per ITIL + KB + automation, Training Lab guided tutorials error code mastery quiz coaching scenarios. Security upgrades emphasized: Encrypted remote sessions Session ID + Recording + Audit, Audit logs everywhere Entra Audit Exchange Intune Remote, RBAC Senior/Junior/Lead max tickets, Break Glass accounts excluded from CA, Zero Trust CA+MFA+Trusted locations+Approved apps, Compliance BitLocker+Defender+OS+SecureBoot+PIN per-client strictness, Defender for Office 365 Quarantine+Anti-spam+DLP, Security headers CSP+HSTS+X-Frame+X-Content-Type+Referrer+Permissions-Policy in next.config.ts, No real data LocalStorage only, Threat model with 8 attack vectors + mitigations, No hardcoded secrets grep clean, Input sanitization command whitelist, npm audit 0 vulns, TypeScript strict, 7 static routes, 9 audio MP3, PWA + Electron, LICENSE MIT. Design top 1% SaaS Linear dark-first violet accent bento rounded-2xl ⌘K Inter Geist Mono Stripe gradients Slack channels Intercom human chat Superhuman speed Notion warmth Vercel restraint not basic AI. Own the project maximize ability — Final polish last check improvements desktop installable real voice flowing conversations balanced men & women voices different people different issues client does actions on other side tech experts conference.",
    tech: [
      "Next.js 16.3.5 App Router",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Real Voice Calls — 5 Balanced Voices Men & Women — Web Speech API TTS + STT + 9 MP3 Pre-recorded Samples",
      "Flowing Conversation Engine — Client Talks With Voice, Does Actions On Other Side (dsregcmd, Company Portal Sync, BitLocker), Asks Questions Back, Follow-up Auto 4-7s",
      "Tech Experts Conference — Alex Entra Male Formal, Priya Intune Female Friendly, David Exchange Male Deep, Lisa Teams Empathetic, MS Support — Different Voices Conference",
      "Desktop Installable — PWA Manifest.json Icons 192/512 Maskable Shortcuts Screenshots File Handlers Share Target + sw.js Offline Cache + InstallPrompt",
      "Electron 28 — Main 1400x900 hiddenInset Vibrancy Secure webPreferences contextIsolation preload.js Native P1 Notifications Global Shortcuts System Tray Auto-launch Encrypted Storage",
      "Real-time Engine (SLA 1s, Ticket gen 8s, Chat 8s, Call 1s)",
      "16 Ticket Templates (Entra 53000/53003/500121, Intune 0x80180024/0x80180001/DeviceCapReached/BitLocker/Autopilot, Exchange Quarantine/Message Trace, Teams, Windows BitLocker, Defender)",
      "Remote PC Access (Encrypted RDP Session ID Recording Audit + Windows 11 sim + PowerShell dsregcmd + Get-BitLockerVolume + Company Portal)",
      "Per-Client Policies (NovaTech 24/7 strict CA without Report-Only → P1 50 users, Bloom SMB relaxed, Apex SEC-2024-07 Strict + DLP)",
      "5 Simulated Agents (Skills 1-10, 44h/week, SLA/CSAT/QA/FRT/MTTR, Conflicts SBI + GROW)",
      "6 Mock Admin Portals (Entra Sign-in logs CA tab, Intune Compliance, Exchange Trace + Quarantine, Service Health, What If, Audit Logs)",
      "Security Headers CSP+HSTS+X-Frame in next.config.ts + LICENSE MIT + SECURITY.md + THREAT_MODEL.md",
      "UX Polish v2.0.1 — Disclaimer moved from scary top amber banner to friendly bottom footer — Top banner now dark friendly with 5 Voices PWA+Electron badges, no warning, footer has subtle legal with Terms Privacy Legal & Disclaimer normal weight + Educational Simulated data badge",
      "Vercel Deployment + PWA + Electron Builder dist .exe .dmg .AppImage 87-98MB",
      "0 vulns, 7 static routes, 9 audio MP3, 5 voices, PWA + Electron, Production-grade Masterpiece Final v2.0.1",
    ],
    concepts: [
      "Modern Workplace Support",
      "MSP Multi-Client",
      "Team Lead Operations",
      "Real Voice Calls — 5 Balanced Voices Men & Women Flowing Human Conversations",
      "Client Does Actions On Other Side — dsregcmd /status, Company Portal Sync, BitLocker Check",
      "Client Asks Questions Back — Will I Lose Files? What Does 53000 Mean? ETA? Audit Trail?",
      "Tech Experts Conference — Different Voices, Alex Entra, Priya Intune, David Exchange, Conference Call",
      "Web Speech API — speechSynthesis TTS + speechRecognition STT + MP3 Pre-recorded Samples",
      "PWA Installable — Manifest.json + Service Worker sw.js + Offline Cache + InstallPrompt",
      "Electron Desktop App — Native P1 Notifications, Global Shortcuts ⌘K, System Tray, Auto-launch, Encrypted Storage",
      "Entra ID Sign-in logs Conditional Access tab + What If tool + Report-Only mode",
      "Intune Enrollment 0x80180024 + Compliance BitLocker + dsregcmd /status + Company Portal Sync",
      "Exchange Message Trace + Quarantine Release + Allow Sender + Defender",
      "Service Health Dashboard + Audit Logs Who Changed Policy at 08:02",
      "SLA 95% + CSAT 4.5 + FRT + MTTR + QA + Roster 44h/week + Workload Allocation + Coverage",
      "Conflict Resolution SBI + Coaching GROW + 1:1s + Pair Mentoring",
      "Problem Management ITIL + Ticket Trends + KB + Automation",
      "Per-Client Policies (CA + Compliance) + Expectations (Tech vs Non-Tech) + Voice Per Client",
      "Security Upgrades: Encrypted Sessions + Audit Everywhere + RBAC + Break Glass + Zero Trust + Compliance per-client + Defender + Security Headers + No Real Data + Threat Model + Voice + Desktop",
      "Design: Linear dark-first + violet accent + Stripe gradients + Slack channels + Intercom human chat + Superhuman speed + Notion warmth + Vercel restraint + PWA + Electron",
      "Own the Project Maximize Ability — Final Polish Last Check Improvements Desktop Installable Real Voice Flowing Conversations Balanced Men & Women Different People Different Issues Client Does Actions Tech Experts Conference",
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
