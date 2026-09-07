import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Devine Nyaenya is a self-taught, hands-on cybersecurity and security-engineering builder based in Kenya. 52 tests, P3 hardened with Argon2id, HMAC, TOTP, SIEM. Building, testing, breaking in authorized labs, and hardening what survives.",
  alternates: { canonical: "/about" },
};

const focus = [
  "Application security & secure software development",
  "Access control: authentication, authorization, RBAC, least privilege, four-eyes",
  "Tamper-evident + HMAC tamper-proof logging and audit integrity",
  "Threat modeling and security testing (6/6 attacks detected, 9 precise alerts)",
  "Security automation with Python (52 tests json+sqlite, Argon2id, TOTP, SIEM shipping)",
  "Linux and network security in authorized labs",
  "AI security — identity and privilege abuse in autonomous agents (OWASP ASI03)",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-aurora opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="container-page relative py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="I learn security by building, testing, and breaking things."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-[13px] font-medium text-ink-high">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              Open to roles — Nairobi / Remote
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/[0.04] px-4 py-2 font-mono text-[11px] text-ink-med">
              52 tests · P3 hardened · 0 CVEs
            </span>
          </div>
        </div>
      </div>

      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article className="space-y-6">
            <div className="prose-secure">
              <p className="font-display text-[22px] leading-[1.4] tracking-[-0.01em] text-ink-high">
                I'm <span className="text-gradient-amber font-medium">Devine Nyaenya</span>, a self-taught security builder based in {site.location}. I build security systems that don't just look secure — they prove it.
              </p>
              <p>
                My path has been deliberately hands-on. Through Cisco's cybersecurity curriculum and a long string of practical projects, I've focused on the problems that make systems safe in practice: how you authenticate and authorize actors, how you enforce least privilege and separation of duties, and how you keep an audit trail that cannot be silently rewritten.
              </p>
              <p>
                My strongest project,{" "}
                <Link href="/projects/chokepoint" className="font-medium text-accent hover:text-accent-soft transition-colors underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
                  Chokepoint
                </Link>
                , is a least-privilege access-control and tamper-evident audit platform for high-impact operations — for both humans and AI agents. It grew out of an earlier{" "}
                <Link href="/projects/android-reset-lab" className="font-medium text-violet-soft hover:text-violet transition-colors underline decoration-violet/30 underline-offset-4 hover:decoration-violet">
                  security simulation lab
                </Link>{" "}
                where I first proved these controls by attacking my own design. 52 tests, 6/6 attacks detected, P3 hardened with Argon2id, HMAC, TOTP, SIEM shipping.
              </p>
              <p>
                I care especially about the frontier of{" "}
                <span className="font-medium text-ink-high">securing autonomous AI agents</span>: as agents start acting with borrowed human authority, identity and privilege abuse becomes one of the most important security problems in software. Chokepoint is built around exactly that question — OWASP Agentic AI ASI03.
              </p>
              <p>
                When a project is incomplete, I say so. I'd rather show an honest work-in-progress with real lessons than a polished overclaim — in security, overstating a control is itself a vulnerability.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">See my projects →</Link>
              <Link href="/contact" className="btn-ghost">Get in touch</Link>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub ↗</a>
            </div>

            {/* Metrics */}
            <div className="mt-12 grid grid-cols-3 gap-6 rounded-[16px] border border-white/[0.06] bg-surface/50 p-6 backdrop-blur">
              <div>
                <div className="font-display text-[28px] text-accent">52</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-high mt-1">tests</div>
                <div className="font-mono text-[10px] text-ink-low">json + sqlite</div>
              </div>
              <div>
                <div className="font-display text-[28px] text-violet-soft">6/6</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-high mt-1">detection</div>
                <div className="font-mono text-[10px] text-ink-low">9 precise alerts</div>
              </div>
              <div>
                <div className="font-display text-[28px] text-emerald-400">P3</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-high mt-1">hardened</div>
                <div className="font-mono text-[10px] text-ink-low">Argon2 HMAC TOTP SIEM</div>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[16px] border border-white/[0.06] bg-surface/80 p-6 backdrop-blur-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">Current focus</p>
              <ul className="space-y-3">
                {focus.map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] leading-[1.5] text-ink-med">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[16px] border border-white/[0.06] bg-surface/80 p-6 backdrop-blur-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet-soft mb-4">Background</p>
              <dl className="space-y-4">
                <div className="flex justify-between border-b border-white/[0.04] pb-3">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Location</dt>
                  <dd className="font-sans text-[14px] font-medium text-ink-high">{site.location}</dd>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-3">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Approach</dt>
                  <dd className="font-sans text-[14px] text-ink-high">Self-taught, project-driven</dd>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-3">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Training</dt>
                  <dd className="font-sans text-[14px] text-ink-high">Cisco + applied labs</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Stack</dt>
                  <dd className="font-sans text-[14px] text-ink-high">Python · TS · Next.js · Linux</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[16px] bg-gradient-to-br from-accent/[0.08] to-violet/[0.06] border border-accent/10 p-6">
              <p className="font-display text-[18px] text-ink-high">Open to roles</p>
              <p className="mt-2 font-sans text-[14px] leading-[1.5] text-ink-med">SOC Analyst, Detection Engineer, AppSec Engineer, Security Engineer (Junior) — Nairobi / Remote</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-[13px] font-medium text-ink-high hover:bg-ink-high transition-colors">
                Get in touch →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Methodology - fill blank space */}
      <section className="border-t border-white/[0.06] bg-surface/30">
        <div className="container-page py-12 sm:py-16">
          <SectionHeading
            eyebrow="Methodology"
            title="Build → Test → Break → Learn → Secure"
            description="My loop: implement controls, write tests that attack them, fix what breaks, document honest limitations, ship proof alongside code."
            accent="cyan"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { step: "Build", desc: "Implement RBAC, four-eyes, hash chain, HMAC, TOTP", color: "accent" },
              { step: "Test", desc: "52 tests: workflow, detection, negative, P3", color: "violet" },
              { step: "Break", desc: "Attacker sim: 6 attacks + ledger tamper + self-approval", color: "cyan" },
              { step: "Learn", desc: "14 honest limitations, false positives 14→9", color: "emerald" },
              { step: "Secure", desc: "Ship with CI, demos, threat model, release", color: "amber" },
            ].map((m, i) => (
              <div key={m.step} className="rounded-[14px] border border-white/[0.06] bg-surface/60 p-5 backdrop-blur">
                <div className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold ${
                  m.color === "accent" ? "bg-accent/15 text-accent border border-accent/20" :
                  m.color === "violet" ? "bg-violet/15 text-violet-soft border border-violet/20" :
                  m.color === "cyan" ? "bg-cyan/15 text-cyan-soft border border-cyan/20" :
                  m.color === "emerald" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                  "bg-green-500/10 text-green-400 border border-green-500/20"
                }`}>
                  {i+1}
                </div>
                <p className="mt-3 font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-ink-high">{m.step}</p>
                <p className="mt-2 font-sans text-[13px] leading-[1.5] text-ink-low">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
