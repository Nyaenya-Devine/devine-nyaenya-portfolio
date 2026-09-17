import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/data/projects";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseNav } from "@/components/case-study/CaseNav";
import { CaseSection, Callout } from "@/components/case-study/CaseSection";

const project = getProject("orbitdesk")!;

export const metadata: Metadata = {
  title: "OrbitDesk — Flagship Case Study",
  description:
    "OrbitDesk is a Modern Workplace Operations Lab — training environment for Entra ID, Intune, Exchange, Teams troubleshooting with 16 realistic tickets, voice calls, remote desktop, team collaboration, and performance assessment. Live demo, PWA + Electron, source-available.",
  alternates: { canonical: "/projects/orbitdesk" },
};

const caseNav = [
  { id: "overview", navLabel: "Overview", title: "Overview" },
  { id: "demo", navLabel: "Live demo", title: "Live demo" },
  { id: "features", navLabel: "Features", title: "Features" },
  { id: "architecture", navLabel: "Architecture", title: "Architecture" },
  { id: "voice", navLabel: "Voice & Team", title: "Voice & Team Calls" },
  { id: "security", navLabel: "Security", title: "Security" },
  { id: "performance", navLabel: "Performance", title: "Performance" },
  { id: "deployment", navLabel: "Deployment", title: "Deployment" },
];

export default function OrbitDeskCasePage() {
  return (
    <>
      <CaseHero project={project} />

      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <CaseNav items={caseNav} />
          </aside>

          <article className="space-y-16">
            <CaseSection id="overview" eyebrow="Flagship" title="Modern Workplace Operations Lab">
              <p>
                OrbitDesk simulates a Modern Workplace support shift — triage tickets, investigate
                sign-in logs with Conditional Access What-If, verify device compliance, handle
                Exchange quarantine, manage voice calls, and collaborate with your team. All in the
                browser, no real tenant credentials, no backend required for core training.
              </p>
              <p className="mt-4">
                Built for IT support professionals, MSP team leads, and interview preparation —
                emphasizing realistic policies, audit trails, and professional communication over
                claims.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/[0.06] bg-surface/60 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-low">Tickets</p>
                  <p className="mt-1 font-display text-[22px] text-ink-high">16 scenarios</p>
                  <p className="mt-1 text-[13px] text-ink-med">Entra ID, Intune, Exchange, Teams — P1/P2, 3 client profiles</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/60 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-low">Voice</p>
                  <p className="mt-1 font-display text-[22px] text-ink-high">Team + Client</p>
                  <p className="mt-1 text-[13px] text-ink-med">WebRTC peer-to-peer, BroadcastChannel, class-based workforce</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/60 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-low">Platform</p>
                  <p className="mt-1 font-display text-[22px] text-ink-high">PWA + Electron</p>
                  <p className="mt-1 text-[13px] text-ink-med">Offline, installable, Play Store TWA, MSIX, auto-update</p>
                </div>
              </div>

              <Callout variant="info" title="Live demo — no signup">
                <a href="https://orbitdesk-gamma.vercel.app" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-accent-soft">
                  orbitdesk-gamma.vercel.app
                </a>{" "}
                — guest mode, works offline, progress saves locally. Source-available noncommercial, proprietary flagship.
              </Callout>
            </CaseSection>

            <CaseSection id="demo" eyebrow="Try it" title="Live training environment">
              <div className="rounded-2xl border border-white/[0.06] bg-surface/60 p-6">
                <h4 className="font-medium text-ink-high">Demo flow — 5 minutes to first ticket</h4>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-[14px] text-ink-med">
                  <li><strong className="text-ink-high">Queue</strong> — Review active tickets, priority, client context, SLA timers</li>
                  <li><strong className="text-ink-high">Investigate</strong> — Open Sign-in logs (CA tab), Audit Logs, Service Health, Message Trace</li>
                  <li><strong className="text-ink-high">Remediate</strong> — Apply fixes in admin portals, verify via remote desktop (dsregcmd, BitLocker, Company Portal sync)</li>
                  <li><strong className="text-ink-high">Communicate</strong> — Respond to clients with appropriate language for their profile (enterprise, SMB, regulated)</li>
                  <li><strong className="text-ink-high">Collaborate</strong> — Class-based team calls, presence, coaching, escalation</li>
                </ol>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="https://orbitdesk-gamma.vercel.app" target="_blank" className="inline-flex h-10 items-center rounded-full bg-white px-6 text-[14px] font-semibold text-zinc-900 hover:bg-zinc-100">
                    Open live demo →
                  </Link>
                  <Link href="https://github.com/Nyaenya-Devine/orbitdesk" target="_blank" className="inline-flex h-10 items-center rounded-full border border-white/10 bg-surface px-6 text-[14px] font-medium text-ink-high hover:bg-white/[0.06]">
                    View source (source-available)
                  </Link>
                </div>
              </div>
            </CaseSection>

            <CaseSection id="features" eyebrow="What it does" title="Training features — no spill, real skills">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-5">
                  <h4 className="font-medium text-ink-high">Ticket Operations</h4>
                  <p className="mt-2 text-[13px] leading-[1.5] text-ink-med">Realistic queue with priorities, SLA tracking, client-specific policies (Enterprise 24/7, SMB business hours, Regulated strict). Root cause analysis, audit logging, What-If simulation.</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-5">
                  <h4 className="font-medium text-ink-high">Voice & Team Calls</h4>
                  <p className="mt-2 text-[13px] leading-[1.5] text-ink-med">Client calls with personas, mute/hold, recording beep. Team calls: class-based workforce, WebRTC peer-to-peer, presence (online, in-call, offline), coaching and escalation.</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-5">
                  <h4 className="font-medium text-ink-high">Remote Desktop</h4>
                  <p className="mt-2 text-[13px] leading-[1.5] text-ink-med">Secure session with encrypted ID, audit logging, consent flow. Diagnostic commands, portal actions reflect in remote view — end-to-end resolution.</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-5">
                  <h4 className="font-medium text-ink-high">Learning & Assessment</h4>
                  <p className="mt-2 text-[13px] leading-[1.5] text-ink-med">Student and Expert modes, XP, levels, badges, structured assessment (CSAT, QA, SLA, communication: empathy, clarity, technical, fluency, client language). Progress persistence for interviews.</p>
                </div>
              </div>
              <Callout variant="warn" title="Proprietary training content">
                Ticket scenarios, client personas, coaching logic, and assessment scoring are proprietary and may not be extracted for other training products. See LICENSE in repo.
              </Callout>
            </CaseSection>

            <CaseSection id="architecture" eyebrow="How it's built" title="Stack — local-first, no backend required">
              <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-5 font-mono text-[13px] leading-[1.6] text-ink-med">
                <p className="font-sans font-medium text-ink-high">Next.js 16 App Router + React 19 + TypeScript strict + Tailwind CSS + Framer Motion</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>State: React hooks, localStorage for progress, BroadcastChannel for team calls</li>
                  <li>Voice: Web Speech API (STT + TTS), Web Audio API, WebRTC with STUN</li>
                  <li>PWA: next-pwa, offline support, installable, background sync</li>
                  <li>Desktop: Electron 32 with hardening, contextIsolation, auto-update</li>
                  <li>Security: CSP, security headers, no external API calls for core, simulated data only</li>
                  <li>Packaging: Play Store via TWA (PWABuilder), Microsoft Store via MSIX</li>
                </ul>
              </div>
            </CaseSection>

            <CaseSection id="voice" eyebrow="Collaboration" title="Class-based team calling — own space, no overlay">
              <p>
                Team Lead can call agents in same class/workforce — like Teams/Slack. Presence:
                online, in-call, offline. Calling uses WebRTC peer-to-peer audio with BroadcastChannel
                signaling (same origin cross-tab, no backend), STUN for NAT traversal, getUserMedia.
              </p>
              <div className="mt-4 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-violet-300">Fixed: call window placement</p>
                <p className="mt-2 text-[13px] text-ink-med">
                  Previously <code className="rounded bg-white/10 px-1">fixed top-[68px] right-4</code> and{" "}
                  <code className="rounded bg-white/10 px-1">fixed bottom-4</code> overlayed ticket queue.
                  Now: header inline <code className="rounded bg-white/10 px-1">relative</code> pill + dropdown{" "}
                  <code className="rounded bg-white/10 px-1">absolute right-0 top-10 w-[380px]</code> — own dedicated
                  space, no overlay, z-20 not 90.
                </p>
              </div>
            </CaseSection>

            <CaseSection id="security" eyebrow="Trust" title="Security & IP protection">
              <ul className="list-disc space-y-2 pl-5 text-[14px] text-ink-med">
                <li>All data simulated locally — no real tenant credentials, no external API calls for core</li>
                <li>Source-available noncommercial license as of v6.10.0 — blocks commercial cloning, competing SaaS, trademark use</li>
                <li>Trademark: OrbitDesk name and logo are trademarks of Devine Nyaenya</li>
                <li>Watermark: console attribution + DOM hidden watermark + visible footer badge v6.11.0 • IP Locked</li>
                <li>Security headers: CSP, HSTS, X-Frame-Options, audit logging for remote sessions</li>
              </ul>
              <Callout variant="info" title="Commercial licensing">
                For commercial use, enterprise deployment, or training platform licensing: devinenyaenya@gmail.com —{" "}
                <a href="https://devine-nyaenya-portfolio.vercel.app" className="text-accent hover:text-accent-soft">portfolio</a>
              </Callout>
            </CaseSection>

            <CaseSection id="performance" eyebrow="Learning" title="Multi-language & accessibility">
              <p>
                Supports 6 major languages: English, Kiswahili (Kenya), Español, Français, Deutsch, العربية —
                with auto-detection (localStorage, browser, Nairobi timezone), RTL for Arabic, and extensible
                to Hindi, Chinese, Portuguese.
              </p>
              <p className="mt-3">
                Level-based call frequency: Lvl 1 no auto calls (focus tickets), Lvl 2+ P1 critical only,
                scales to realistic MSP volume. Phone training unlocks at Level 2.
              </p>
            </CaseSection>

            <CaseSection id="deployment" eyebrow="Ship" title="Live everywhere">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-4">
                  <p className="font-medium text-ink-high">Web</p>
                  <p className="mt-1 text-[13px] text-ink-med">Vercel — orbitdesk-gamma.vercel.app — 9/9 routes static, edge headers</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-4">
                  <p className="font-medium text-ink-high">PWA</p>
                  <p className="mt-1 text-[13px] text-ink-med">Installable on Windows, macOS, Linux, Android — offline support, background sync</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-4">
                  <p className="font-medium text-ink-high">Desktop</p>
                  <p className="mt-1 text-[13px] text-ink-med">Electron 32 with hardening, NSIS installer, auto-update</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-4">
                  <p className="font-medium text-ink-high">Stores</p>
                  <p className="mt-1 text-[13px] text-ink-med">Play Store via TWA (PWABuilder), Microsoft Store via MSIX — packagable</p>
                </div>
              </div>
            </CaseSection>
          </article>
        </div>
      </div>
    </>
  );
}
