/**
 * Project catalogue — v6.7.2 OrbitDesk + v3.1 Chokepoint — Updated for world-class portfolio
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
    name: "OrbitDesk v6.7.2",
    kicker: "Modern Workplace Operations Lab — LinkedIn Chat Dock + Electron 32 Auto-Update + SLSA + Signed Commits",
    status: "Live demo",
    featured: true,
    summary:
      "v6.7.2 — The most polished MSP Team Lead Simulator: LinkedIn-style messaging dock bottom-right 320px white rounded-t-xl (like screenshot), chat windows 320x400 MONDAY bubbles white/violet ✓✓ typing blue info #f4f2ee input, modern toast bottom-left blur-2xl max2 not covering guide, restored orbit animation rotating rings 6s/8s/12s, pause-when-away auto-pause SLA push-forward welcome-back tickets, Electron 32.3.3 auto-update via GitHub Releases signed, SBOM CycloneDX, SLSA L3 provenance, signed commits Verified, assetlinks.json TWA Play Store, MSIX Windows Store. 100% real feel, not AI-basic — Linear + Vercel + Stripe + LinkedIn inspired.",
    overview:
      "OrbitDesk v6.7.2 is the final polished lab for Modern Workplace Support Team Lead interviews. v6.6 added LinkedIn-style messaging dock like screenshot: bottom-right 320px white rounded-t-xl shadow-2xl, Messaging header avatar online dot unread red badge ••• ✎ ⌃, search #edf3f8 rounded-full Focused emerald pill / Other, conversation list avatar+name+snippet+role+time+unread dot, footer OrbitDesk — Real MSP chat, chat windows 320x400 white header avatar status MONDAY separator bubbles white border client rounded-bl-sm violet you rounded-br-sm name time ✓✓ typing dots blue info You haven't received a response yet Learn more input #f4f2ee rounded-full + Send pill max 2 windows auto-open live ticket spring animation. Modern toast bottom-left z-45 w-340 blur-2xl max2 progress gradient swipe dismiss grouped not covering StudentModeGuide z-100. Restored orbit animation around Logo full variant when animated true — rotating rings 6s 8s 12s dots glow blur pulse Lab • v6.1 • Real Voice • Human ◍. Layout fix flex-1 min-h-0 footer mt-auto pb-80px dock no calc overlap z hierarchy toast 45 < dock 65 < guide 100. v6.5 pause-when-away visibilitychange auto-pause SLA push-forward welcome-back 0-3 tickets ShiftStatus manual Pause/Resume. v6.7 GitHub essentials: Electron 32.3.3 from 28 CVE fixes, electron-updater 6.6.2 + electron-log auto-update via GitHub Releases signed user consent zero-trust, sandbox true contextIsolation true nodeIntegration false permission handler mic only singleInstanceLock CSP session header external nav blocked preload whitelist only, publish github, asar true hardenedRuntime entitlements mac plist network.client audio-input, SBOM CycloneDX JSON+XML, Dependabot weekly, CODEOWNERS, workflows CI Security Electron Release SBOM SLSA, issue templates bug/feature/security private advisory, PR template security checklist, SECURITY.md enhanced, docs PACKAGING TWA Play Store + MSIX Windows Store + Electron auto-update + SIGNED_COMMITS SSH ed25519 Verified badge branch protection, assetlinks.json public/.well-known/ TWA verification, README badges CI Security CodeQL Electron Release SBOM SLSA Signed Verified Electron PWA Play Store MIT. Build verified 9/9 routes, repo cleaned 68M→36M lean polished world-class. Interview ready: Entra ID sign-in logs CA tab 53000 DeviceNotCompliant What If Report-Only Audit Logs Break Glass, Intune enrollment 0x80180024 dsregcmd Company Portal Sync Get-BitLockerVolume, Exchange quarantine Release Allow Report Not Junk, Teams Service Health FIRST, real voice calls TTS/STT mic scoring empathy clarity technical fluency client lang, remote PC Win11 encrypted Session ID audit logs BitLocker escrow, per-client policies NovaTech strict Bloom relaxed Apex SEC-2024-07, 5 agents 44h/week SLA CSAT QA FRT MTTR SBI GROW RBAC.",
    tech: [
      "Next.js 16.3.5 Turbopack + React 19.2.1 + Framer Motion 13.2.0 + Tailwind 4",
      "v6.7.2 — LinkedIn Chat Dock bottom-right 320px white rounded-t-xl + windows 320x400 MONDAY bubbles + modern toast bottom-left blur-2xl max2 + restored orbit animation 6s/8s/12s + layout flex-1 min-h-0 footer mt-auto + pause auto-pause SLA push-forward",
      "v6.7 — Electron 32.3.3 from 28 + electron-updater 6.6.2 + electron-log 5.2.1 auto-update via GitHub Releases signed user consent zero-trust",
      "Security Hardening — sandbox true contextIsolation true nodeIntegration false webSecurity true permission mic only singleInstanceLock CSP session header external nav blocked preload whitelist",
      "Supply Chain — SBOM CycloneDX JSON+XML, npm ci integrity, Dependabot weekly groups electron, CodeQL SAST, Dependency Review fail high, TruffleHog secret scan, npm audit high, SLSA L3 provenance slsa-verifier",
      "GitHub Essentials — CODEOWNERS, workflows CI Security Electron Release SBOM SLSA, issue templates bug/feature/security private advisory, PR template security checklist, SECURITY.md enhanced, branch protection signed commits",
      "PWA + Stores — TWA Play Store via PWABuilder assetlinks.json public/.well-known/ + MSIX Windows Store + Electron appx, manifest icons 192/512 maskable shortcuts file handlers",
      "Real Voice Both Sides — Web Speech TTS+STT mic + 9 MP3, 5 voices men & women, TTS each turn, speaking indicator, typing dots, scoring empathy clarity technical fluency client lang",
      "Remote PC Win11 — Encrypted Session ID recording indicator, Quick Assist consent, File Explorer, dsregcmd real output, live portal↔RDP linkage BitLocker Fixed green",
      "16 Ticket Templates — Entra 53000/53003/500121, Intune 0x80180024/DeviceCapReached/BitLocker/Autopilot, Exchange Quarantine/Message Trace, Teams, Windows, Defender",
      "Per-Client Policies — NovaTech 24/7 strict CA → P1 50 users, Bloom SMB relaxed 9-5, Apex SEC-2024-07 Strict + DLP + Tamper",
      "Team & Operations — 5 agents skills 1-10 44h/week SLA/CSAT/QA/FRT/MTTR SBI+GROW conflicts + 6 Admin Portals Entra Sign-in CA tab Intune Exchange Service Health What If Audit Logs",
      "Security — Encrypted RDP Session ID Recording Audit, RBAC Senior/Junior/Lead max tickets skills, Break Glass excluded CA, Zero Trust CA+MFA+Trusted locations, Compliance BitLocker escrowed Defender, Email Defender Quarantine+DLP, Headers CSP HSTS DENY nosniff Permissions-Policy mic=self, Threat Model 12 vectors",
      "Design — Linear dark-first violet accent bento rounded-2xl ⌘K + Vercel + Stripe + Slack + LinkedIn messaging dock + Intercom + Superhuman — human premium not AI basic — 60fps spring 400/25",
      "Build 9/9 routes, 0 vulns prod, LICENSE MIT, Vercel orbitdesk-gamma.vercel.app + PWA + Electron 32 .exe/.dmg/.AppImage + yml yaml auto-update + sbom.json + provenance intoto.jsonl",
    ],
    concepts: [
      "LinkedIn Chat Dock — bottom-right 320px white rounded-t-xl like screenshot, max 2 windows auto-open live ticket",
      "Modern Toast — bottom-left blur-2xl max2 progress gradient swipe grouped not covering guide z hierarchy",
      "Restored Orbit Animation — rotating rings 6s/8s/12s dots glow blur pulse Lab • v6.1 • Real Voice • Human",
      "Layout Fix — flex-1 min-h-0 footer mt-auto pb-80px dock no calc overlap clean modern classy",
      "Pause-When-Away — visibilitychange auto-pause SLA push-forward welcome-back tickets ShiftStatus",
      "Electron 32 Auto-Update — GitHub Releases signed user consent zero-trust via electron-updater",
      "Security Hardening — sandbox contextIsolation singleInstance permission mic only CSP preload whitelist",
      "Supply Chain — SBOM CycloneDX SLSA L3 provenance signed commits Verified badge Dependabot CodeQL",
      "PWA + Stores — TWA Play Store assetlinks.json + MSIX Windows Store + Electron auto-update",
      "Real Voice Both Sides — YOU greet first waiting_greeting→waiting_intro→problem→troubleshooting→resolution",
      "Remote PC Win11 — Portal actions affect RDP real state BitLocker Fixed green",
      "Modern Workplace Support — MSP Multi-Client Team Lead M365 Entra ID Intune Exchange Teams Windows",
      "Per-Client Policies + Expectations Tech vs Non-Tech + Voice Per Client + 24/7 vs 9-5",
      "SLA 95% + CSAT 4.5 + FRT + MTTR + QA + Roster 44h/week + Problem Management ITIL + KB",
      "Security — Encrypted Sessions + Audit Everywhere + RBAC + Break Glass + Zero Trust + Compliance + Defender + Headers + Threat Model 12 vectors",
      "Design — Linear + Vercel + Stripe + Slack + LinkedIn + Intercom + Superhuman + Notion — human premium masterpiece",
    ],
    github: "https://github.com/Nyaenya-Devine/orbitdesk",
    liveUrl: "https://orbitdesk-gamma.vercel.app",
    caseStudy: true,
    weight: 110,
  },
  {
    slug: "chokepoint",
    name: "Chokepoint v3.1",
    kicker: "Least-Privilege Dual-Control Tamper-Evident — Electron 32 Auto-Update + SLSA + Signed Commits",
    status: "Live demo",
    featured: true,
    summary:
      "v3.1 — World-class expert: least-privilege access control & tamper-evident audit for sensitive ops — humans and AI agents. Dual-control 4-eyes distinct approver, SHA-256 hash-chained HMAC-signed ledger detects alteration/deletion/reorder, anomaly detection, RBAC, policy simulator, SIEM export, compliance mapper, risk engine, 26 tests proving security properties. OWASP ASI03. Electron 32.3.3 auto-update via GitHub Releases signed, SBOM CycloneDX, SLSA L3 provenance, signed commits Verified, assetlinks.json TWA. No OrbitDesk mixing — pure security product.",
    overview:
      "Chokepoint v3.1 answers: how do you let people — and increasingly AI agents — perform high-impact actions without giving anyone enough authority to abuse it? Full-stack security product with real RBAC, working dual-control two-person approval distinct approver + authorized approver, SHA-256 hash-chained HMAC-signed tamper-evident ledger with verifyChain() detecting altered/deleted/reordered/re-signed, explainable anomaly detection risk index severity distribution. OWASP Agentic AI ASI03 Identity & Privilege Abuse. v3.1 GitHub essentials: Electron 32.3.3 from old CVE fixes, electron-updater 6.6.2 + electron-log auto-update via GitHub Releases signed user consent zero-trust, sandbox true contextIsolation true nodeIntegration false permission handler singleInstanceLock CSP session header, publish github, asar true hardenedRuntime entitlements, SBOM CycloneDX, Dependabot weekly, CODEOWNERS owns SECURITY THREAT_MODEL electron.js lib/ledger.ts lib/dualControl.ts, workflows CI Security SBOM Electron Release SLSA, issue templates, PR template security checklist, SECURITY.md enhanced, docs PACKAGING TWA Play Store + MSIX Windows Store + Electron auto-update + SIGNED_COMMITS SSH ed25519 Verified badge branch protection, assetlinks.json TWA verification, README badges CI Security CodeQL Electron Release SBOM SLSA Signed Verified Electron MIT. Tests 26 proving security properties: ledger detects altered/deleted/reordered/re-signed, authz policy matrix dual-control distinct+authorized, crypto PBKDF2 salted timing-safe HMAC, anomaly signals. Merged Android Reset Lab Python simulation 68 tests 6/6 attacks + 17 P4 detections Merkle RFC6962 Cedar ABAC risk-adaptive WebAuthn Play Integrity StrongBox WYSIWYS DPoP as simulation engine. Vercel cleaned 7→5 projects single source chokepoint-demo.vercel.app. Build verified, 0 vulns prod, LICENSE MIT.",
    tech: [
      "Next.js 16 App Router + TypeScript + React + Vitest 26 tests + Web Crypto PBKDF2 HMAC-SHA256",
      "v3.1 — Electron 32.3.3 + electron-updater 6.6.2 + electron-log auto-update via GitHub Releases signed",
      "Security Hardening — sandbox true contextIsolation true nodeIntegration false permission handler singleInstanceLock CSP",
      "Supply Chain — SBOM CycloneDX, SLSA L3 provenance slsa-verifier, signed commits Verified, Dependabot weekly, CodeQL, Dependency Review, TruffleHog",
      "Tamper-Evident Ledger — SHA-256 hash-chained HMAC-signed verifyChain() detects alteration/deletion/reorder/re-signed",
      "Dual-Control — Two-person rule distinct approver + authorized approver, separation of duties, 15min expiry, Break Glass excluded CA",
      "Anomaly Detection — Failed logins, after-hours privilege, unknown sources, privilege escalation, automation with human-readable reasons",
      "RBAC — viewer/auditor/operator/admin least privilege by default single policy gate",
      "PWA + Stores — TWA Play Store assetlinks.json + MSIX Windows Store + Electron auto-update",
      "Tests 26 — ledger detects altered/deleted/reordered/re-signed, authz policy matrix dual-control, crypto PBKDF2 HMAC, anomaly signals",
      "Build 0 vulns prod, LICENSE MIT, Vercel chokepoint-demo.vercel.app + PWA + Electron 32 .exe/.dmg/.AppImage + yml yaml auto-update + sbom.json + provenance",
    ],
    concepts: [
      "Least Privilege",
      "Dual-Control 4-Eyes",
      "Tamper-Evident Audit Log",
      "Hash Chaining SHA-256",
      "HMAC-SHA256 Integrity",
      "Anomaly Detection",
      "RBAC",
      "Separation of Duties",
      "Break Glass",
      "OWASP Agentic AI ASI03",
      "Electron 32 Auto-Update Signed",
      "SBOM CycloneDX SLSA L3 Signed Commits",
      "PWA TWA AssetLinks",
      "Security Headers CSP HSTS",
    ],
    github: "https://github.com/Nyaenya-Devine/chokepoint",
    liveUrl: "https://chokepoint-demo.vercel.app",
    caseStudy: true,
    weight: 100,
  },
  {
    slug: "android-reset-lab",
    name: "Android Reset Lab P4 Cerberus",
    kicker: "Security simulation · God Mode — Merkle + Cedar ABAC + WebAuthn + SLSA",
    status: "Simulation / lab",
    featured: true,
    summary:
      "P4 Cerberus God Mode: Merkle transparency RFC6962 inclusion/consistency proofs + Rekor checkpoint + Cedar ABAC policy-as-code 10 policies AuthZEN bundle SHA + risk-adaptive 8 factors + WebAuthn passkeys AAGUID allowlist counter clone detection + Play Integrity StrongBox + WYSIWYS tx signing + DPoP token binding + SLSA L3 provenance + signed commits. 68 tests, 6/6 attacks + 17 P4 detections. Simulation-only, now simulation engine for Chokepoint.",
    overview:
      "Android Reset Lab P4 Cerberus is God Mode: Merkle transparency log inclusion/consistency proofs Rekor checkpoint anchoring, Cedar ABAC explicit deny decision logs bundle SHA AuthZEN API, WebAuthn passkeys YubiKey 5 Titan M Touch ID Pixel StrongBox AAGUID allowlist counter clone detection, Play Integrity BASIC/DEVICE/STRONG + StrongBox/TEE/Software attestationSecurityLevel trust_score, DPoP proof-of-possession binding, WYSIWYS transaction signing with passkey txAuthSimple. Risk engine 0-100 8 factors velocity failed auth time anomaly device trust MFA strength escalation impossible travel session age → allow/step_up/tx/deny. Cerberus workflow: request checks attestation + risk + policy + DPoP, approve checks four-eyes + step-up + tx + webauthn + policy, execute re-checks attestation continuously. Simulation-only device state active→wiped local data. Hardened P0→P4 18→68 tests 23 threat controls honest limits 23 demos P2/P3/P4 proving tamper detection self-approval block Merkle proofs policy deny risk step-up passkey attestation tx DPoP. Now merged as simulation engine for Chokepoint — same core dual-control + tamper-evident audit. GitHub essentials: dependabot weekly, CODEOWNERS, workflows CI Security SBOM, SECURITY.md, SLSA provenance.",
    tech: [
      "Python stdlib + argon2-cffi + pytest 68 tests (52+16 P4) + Merkle RFC6962 + Cedar ABAC + AuthZEN + Risk-adaptive 8 factors + WebAuthn + Play Integrity + StrongBox + WYSIWYS + DPoP RFC9449 + SLSA L3",
      "GitHub Essentials — dependabot weekly, CODEOWNERS, workflows CI Security SBOM, SECURITY.md enhanced",
    ],
    concepts: [
      "Merkle Transparency RFC6962",
      "Cedar ABAC Policy-as-Code",
      "Risk-Adaptive Authentication",
      "WebAuthn Passkeys FIDO2",
      "Play Integrity StrongBox",
      "WYSIWYS Transaction Signing",
      "DPoP Token Binding",
      "SLSA L3 Provenance",
      "Signed Commits Verified",
    ],
    github: "https://github.com/Nyaenya-Devine/android-reset-lab",
    liveUrl: "https://android-reset-lab.vercel.app",
    caseStudy: true,
    weight: 90,
  },
  {
    slug: "android-device-management-tool",
    name: "Android Device Management Tool",
    kicker: "Full-stack experiment — Android Enterprise + SLSA + Security Hardening",
    status: "Experimental / WIP",
    featured: true,
    summary:
      "Evolving reset-lab into dual-mode Android Enterprise console: local simulator + live Google Android Management API integration (OAuth2 service account, CloudDPC QR enrollment, policies, WIPE/LOCK/REBOOT commands, deprovision). Experimental — live path implemented documented go-live runbook but not yet exercised on real hardware. GitHub essentials: dependabot + security workflows + CODEOWNERS + SBOM.",
    overview:
      "The reset lab proved controls in isolation; this project carries them into product surface: Next.js/TypeScript console PostgreSQL + Drizzle for Android Enterprise device management two modes. Simulator manages synthetic devices locally; live mode calls real Android Management API — service-account JWT auth encrypted keys at rest CloudDPC QR provisioning bundles policies enrollment tokens issueCommand LOCK/WIPE/REBOOT/RELINQUISH_OWNERSHIP/lost mode/RESET_PASSWORD and enterprises.devices.delete deprovision. Wipe semantics follow real API: device must acknowledge before wipes. Honest status: experimental / WIP — live path not yet proven on real enrolled device; precise go-live runbook and web+Python CI live in repo. GitHub essentials added: dependabot weekly, CODEOWNERS, workflows CI Security SBOM.",
    tech: ["Next.js 16 + TypeScript + PostgreSQL + Drizzle + Android Management API + OAuth2 service-account JWT + CloudDPC QR + CI web+Python + GitHub Essentials dependabot security"],
    concepts: ["Full-stack", "Android Enterprise", "Security-focused", "API development", "GitHub Essentials"],
    github: "https://github.com/Nyaenya-Devine/android-device-management-tool",
    liveUrl: "https://android-device-management-tool.vercel.app",
    caseStudy: true,
    weight: 70,
  },
  {
    slug: "endopima-kenya",
    name: "EndoPima Kenya",
    kicker: "Health-tech · Community-first — Bilingual EN/SW + Privacy-Conscious",
    status: "Experimental / WIP",
    featured: false,
    summary:
      "Bilingual community-first endometriosis early-recognition and care-navigation prototype for Kenya. Guided symptom exploration, health timeline, clinician handoff, care navigation, cost/financing guidance — privacy-conscious local-first design. Built to learn health-tech product thinking beyond security. GitHub essentials: dependabot + security workflows.",
    overview:
      "EndoPima Kenya is bilingual English/Kiswahili community-first prototype for endometriosis early-recognition and care-navigation in Kenya. Guides users through symptom exploration without diagnosing, builds health timeline they can hand to clinician, navigates care options, understands cost/financing — privacy-conscious local-first design. Not medical device and does not provide diagnosis. Taught product thinking in sensitive domain bilingual UX community health navigation — complementary to security-focused builds. GitHub essentials added.",
    tech: ["HTML CSS JavaScript + Bilingual UX + Privacy-conscious + GitHub Essentials dependabot security"],
    concepts: ["Health-tech", "Bilingual UX EN/SW", "Community-first", "Privacy-conscious", "Kenya context", "GitHub Essentials"],
    github: "https://github.com/Nyaenya-Devine/endopima-kenya",
    liveUrl: "https://endopima-kenya.vercel.app",
    caseStudy: false,
    weight: 30,
  },
];
