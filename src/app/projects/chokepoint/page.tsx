import type { Metadata } from "next";
import Link from "next/link";
import { DownloadDemoButton } from "@/components/DownloadDemoButton";
import { getProject } from "@/data/projects";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseNav } from "@/components/case-study/CaseNav";
import { CaseSection, Callout } from "@/components/case-study/CaseSection";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { SecurityPipeline } from "@/components/SecurityPipeline";
import { ExternalLink } from "@/components/ExternalLink";
import {
  caseNav,
  modules,
  controls,
  attacks,
  testFiles,
  limitations,
  futureWork,
} from "@/data/chokepointCase";

const project = getProject("chokepoint")!;

export const metadata: Metadata = {
  title: "Chokepoint — Case Study",
  description:
    "Chokepoint is a least-privilege access-control and tamper-evident audit platform for high-impact operations by humans and AI agents. Role-based auth, dual-control approval, a hash-chained HMAC-signed audit ledger, and anomaly detection — with a test suite that proves the controls.",
  alternates: { canonical: "/projects/chokepoint" },
};

const archNodes = [
  { label: "Clients", sub: "web · PWA · native (Capacitor path)", accent: false },
  { label: "Next.js App Router", sub: "TypeScript · UI + route handlers", accent: false },
  { label: "Signed session", sub: "HttpOnly · SameSite=Strict · expiring cookie", accent: true },
  { label: "Policy engine (lib/authz)", sub: "RBAC matrix · can() · default-deny", accent: true },
  { label: "Dual-control approval", sub: "distinct + authorized approver", accent: true },
  { label: "Tamper-evident ledger (lib/ledger)", sub: "SHA-256 hash chain + HMAC", accent: true },
  { label: "Anomaly detection (lib/anomaly)", sub: "explainable risk scoring", accent: false },
  { label: "Live dashboard", sub: "risk index · severity · integrity status", accent: false },
];

export default function ChokepointCasePage() {
  return (
    <>
      <CaseHero project={project} />

      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <CaseNav items={caseNav} />
          </aside>

          <article>
            <CaseSection id="demo" eyebrow="▶" title="Watch the walkthrough">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/media/chokepoint-demo-poster.jpg"
                className="aspect-video w-full rounded-2xl border border-line-soft bg-base shadow-card"
              >
                <source src="/media/chokepoint-demo.mp4" type="video/mp4" />
                Your browser does not support embedded video — download the
                MP4 instead.
              </video>
              <p className="mt-3 text-sm leading-relaxed text-ink-med">
                A narrated 1:47 walkthrough of the live demo — signing in as
                admin, the risk dashboard, tamper-evidence verification,
                anomaly feeds and the dual-control approval flow. Audio
                commentary included.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <DownloadDemoButton />
                <a href="https://chokepoint-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Open the live demo
                </a>
              </div>
            </CaseSection>

            <CaseSection id="overview" eyebrow="01" title="Overview">
              <p>
                Chokepoint is a full-stack security product built to answer one
                question: <em>how do you let people — and increasingly, AI agents —
                perform high-impact actions without giving any single actor enough
                authority to abuse it?</em>
              </p>
              <p>
                It is a live, installable web application with real role-based
                authentication, a working two-person (dual-control) approval
                workflow, a SHA-256 hash-chained and HMAC-signed tamper-evident
                audit log, and explainable anomaly detection. It is framed around
                the OWASP Agentic AI failure class{" "}
                <code className="inline-code">ASI03 — Identity &amp; Privilege Abuse</code>.
              </p>
              <Callout variant="ok" title="Where the substance is">
                The security reasoning lives in small, reviewed library modules
                (<code className="inline-code">lib/</code>); the UI is the proof it
                actually runs. A Vitest suite tests the security properties
                themselves, not just page rendering.
              </Callout>
              <div className="mt-4 flex flex-wrap gap-3">
                <ExternalLink href={project.github} className="btn-ghost">
                  Source on GitHub
                </ExternalLink>
                {project.liveUrl && (
                  <ExternalLink href={project.liveUrl} className="btn-primary">
                    Try the live demo
                  </ExternalLink>
                )}
              </div>
            </CaseSection>

            <CaseSection id="problem" eyebrow="02" title="The problem">
              <p>
                High-impact operations — wiping devices, changing access, moving
                money, reconfiguring production — share a dangerous property: a
                single account with enough privilege can cause irreversible damage,
                whether through malice, a stolen credential, or a compromised
                automation.
              </p>
              <p>
                The problem gets harder with AI agents. Agents act fast, autonomously,
                and with borrowed human authority — exactly the conditions that make
                identity and privilege abuse so damaging. Chokepoint treats both
                humans and automated agents as named identities that must pass the
                same gates.
              </p>
              <p>The design targets four goals simultaneously:</p>
              <ul className="mt-3 space-y-2">
                {[
                  "No single actor can complete a sensitive action alone (separation of duties).",
                  "Every action is attributable to an identity and cannot be silently erased (tamper-evident audit).",
                  "Every action is authorized against a least-privilege policy before it runs (default-deny).",
                  "Suspicious behavior is surfaced in human-readable form (explainable detection).",
                ].map((g) => (
                  <li key={g} className="flex gap-2.5 text-sm text-ink-med">
                    <span aria-hidden="true" className="mt-1 text-accent">▹</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="threat-model" eyebrow="03" title="Threat model">
              <p>
                The threat model assumes an attacker may <strong>hold a valid
                account</strong> (insider or stolen credential), may <strong>control
                an automated agent</strong>, and may attempt to <strong>alter the
                audit trail</strong> after acting. It treats the application&apos;s
                own authorization logic as the primary line of defense rather than
                trusting the network perimeter.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { a: "Assets", b: "The ability to perform high-impact actions; the integrity and completeness of the audit record; session credentials." },
                  { a: "Actors", b: "Over-privileged users, stolen/reused credentials, malicious insiders, and compromised or over-permitted AI agents." },
                  { a: "Abuse cases", b: "Self-approval of destructive actions, role escalation, out-of-hours privilege use, brute force, and post-hoc log tampering." },
                  { a: "Trust boundary", b: "Anything reaching a route handler is untrusted until authenticated, authorized, and — for sensitive actions — approved." },
                ].map((t) => (
                  <div key={t.a} className="panel p-4">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{t.a}</p>
                    <p className="mt-2 text-sm text-ink-med">{t.b}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="architecture" eyebrow="04" title="Architecture">
              <p>
                A Next.js (App Router) TypeScript application. Authentication issues
                a signed session cookie; a single policy engine authorizes every
                action; sensitive actions require dual-control approval; everything
                is written to a hash-chained, HMAC-signed ledger; and an anomaly
                layer scores risk for the dashboard.
              </p>
              <FlowDiagram nodes={archNodes} title="Request flow through the control plane" />
              <p className="mt-2 text-sm text-ink-low">
                Diagram reflects the module structure documented in the repository.
                Charts and diagrams are dependency-free so the strict CSP is
                untouched.
              </p>

              <p className="mt-6 font-semibold text-ink-high">Key modules</p>
              <div className="mt-3 overflow-hidden rounded-lg border border-line">
                <table className="w-full text-left text-sm">
                  <thead className="bg-raised/60 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                    <tr>
                      <th className="px-4 py-2.5">Module</th>
                      <th className="px-4 py-2.5">Responsibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line-soft">
                    {modules.map((m) => (
                      <tr key={m.name} className="align-top">
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-[12px] text-accent-soft">
                          {m.name}
                        </td>
                        <td className="px-4 py-3 text-ink-med">{m.responsibility}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CaseSection>

            <CaseSection id="controls" eyebrow="05" title="Security controls">
              <p>
                Each control is implemented in code and exercised by tests. Click any
                stage in the interactive flow below to inspect the principle — or
                read the full control inventory.
              </p>
              <div className="mt-4">
                <SecurityPipeline />
              </div>
              <div className="mt-6 space-y-3">
                {controls.map((c) => (
                  <details
                    key={c.name}
                    className="group rounded-lg border border-line bg-raised/30 px-4 open:bg-raised/60"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3.5 text-sm font-semibold text-ink-high marker:content-none">
                      <span className="flex items-center gap-2.5">
                        <span className="text-accent" aria-hidden="true">▸</span>
                        {c.name}
                      </span>
                      <span className="text-xs text-ink-faint transition-transform group-open:rotate-90">▶</span>
                    </summary>
                    <div className="pb-4 pl-7 pr-2">
                      <p className="text-sm leading-relaxed text-ink-med">{c.what}</p>
                      <p className="mt-2 font-mono text-[12px] text-accent-soft">
                        Enforced: {c.enforced}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="flows" eyebrow="06" title="Auth & approval flows">
              <p className="font-semibold text-ink-high">Authentication</p>
              <p>
                Credentials are verified against PBKDF2-SHA256 hashes with a per-user
                salt using timing-safe comparison. On success, a signed, HttpOnly,
                SameSite=Strict, expiring session cookie is issued. The{" "}
                <code className="inline-code">Secure</code> flag is set only when the
                connection is genuinely HTTPS (via <code className="inline-code">x-forwarded-proto</code>),
                so it is enforced behind TLS in production yet still works on a local
                HTTP preview.
              </p>
              <FlowDiagram
                nodes={[
                  { label: "Submit credentials", sub: "over HTTPS in production" },
                  { label: "Verify password", sub: "PBKDF2-SHA256 + per-user salt · timing-safe" },
                  { label: "Issue session", sub: "signed · HttpOnly · SameSite=Strict · expiring", accent: true },
                  { label: "Subsequent requests", sub: "session cookie → policy engine" },
                ]}
                title="Authentication flow"
              />

              <p className="mt-8 font-semibold text-ink-high">Authorization &amp; dual-control</p>
              <p>
                Every action passes through a single <code className="inline-code">can()</code>{" "}
                policy gate against a role matrix (viewer / auditor / operator / admin),
                defaulting to deny. High-impact actions additionally require approval
                from a second, distinct, authorized identity — the requester can never
                approve their own request.
              </p>
              <FlowDiagram
                nodes={[
                  { label: "Actor requests sensitive action", sub: "role + action" },
                  { label: "Policy gate: can()?", sub: "RBAC matrix · default-deny", accent: true },
                  { label: "Create mandate", sub: "awaiting approval" },
                  { label: "Second, distinct approver", sub: "requester ≠ approver · approver is authorized", accent: true },
                  { label: "Execute + append to ledger", sub: "hash-chained · HMAC-signed" },
                ]}
                title="Dual-control approval flow"
              />
            </CaseSection>

            <CaseSection id="ledger" eyebrow="07" title="Audit ledger & integrity">
              <p>
                The ledger is append-only. Each entry stores a hash of the previous
                entry plus its own payload, forming a chain, and each entry is also
                signed with an HMAC keyed by a server secret. Verification
                recomputes the chain and signatures from start to finish.
              </p>
              <div className="panel my-4 p-4 font-mono text-[13px] leading-relaxed">
                <p className="text-ink-faint">// entry[i] integrity binding (conceptual)</p>
                <p className="text-accent-soft">entry[i].prevHash = SHA256(entry[i−1])</p>
                <p className="text-accent-soft">entry[i].hash&nbsp;&nbsp;&nbsp;&nbsp;= SHA256(prevHash + payload + ts)</p>
                <p className="text-accent-soft">entry[i].hmac&nbsp;&nbsp;&nbsp;&nbsp;= HMAC(key, hash)</p>
                <p className="mt-2 text-ink-faint">// verifyChain(): recompute every link & signature</p>
              </div>
              <p>
                Tampering breaks verification in a detectable way:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Alter a payload → its hash no longer matches, and every later link fails.",
                  "Delete an entry → the chain has a gap; prevHash references break.",
                  "Reorder entries → prevHash links no longer line up.",
                  "Re-sign with the wrong key → HMAC verification fails (the server secret is unknown to the attacker).",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm text-ink-med">
                    <span aria-hidden="true" className="mt-1 text-danger">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="attacks" eyebrow="08" title="Attack & failure scenarios">
              <p>
                Rather than assert the controls work, the project reasons about how
                they fail and verifies the outcome. Selected scenarios:
              </p>
              <div className="mt-4 space-y-3">
                {attacks.map((a, i) => (
                  <div key={i} className="rounded-lg border border-line bg-base/40 p-4">
                    <p className="text-sm font-semibold text-ink-high">{a.scenario}</p>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      <p className="text-sm text-ink-low">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-danger">Attack · </span>
                        {a.attack}
                      </p>
                      <p className="text-sm text-ink-med">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-ok">Outcome · </span>
                        {a.result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="testing" eyebrow="09" title="Testing">
              <p>
                The suite (<code className="inline-code">npm test</code>, Vitest — 26
                tests across crypto, ledger, authz, and anomaly) tests the security
                properties rather than just rendering.
              </p>
              <div className="mt-4 space-y-3">
                {testFiles.map((t) => (
                  <div key={t.name} className="panel flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
                    <code className="shrink-0 font-mono text-[13px] text-accent-soft">{t.name}</code>
                    <span className="hidden text-ink-faint sm:inline">—</span>
                    <p className="text-sm text-ink-med">{t.proves}</p>
                  </div>
                ))}
              </div>
              <Callout variant="info" title="Dependency posture">
                The project reports <code className="inline-code">npm audit</code>{" "}
                0 vulnerabilities, and dashboard charts are hand-built SVG to avoid
                adding dependencies that would loosen the Content Security Policy.
              </Callout>
            </CaseSection>

            <CaseSection id="results" eyebrow="10" title="Results & takeaways">
              <p>
                Chokepoint demonstrates that the controls are not just described —
                they run and they are verified: a policy gate that defaults to deny,
                an approval rule that blocks self-approval, and a ledger that provably
                detects tampering. It is installable as a PWA (with a Capacitor path
                to native) and deploys to Vercel, so a reviewer can be inside the
                console within a minute using a one-click demo account.
              </p>
              <p>
                The engineering lesson that carried over from the earlier reset lab:
                security claims are only as strong as the tests that try to break them.
                Designing the controls <em>and</em> the failure cases together is what
                makes the difference between a demo and something defensible.
              </p>
            </CaseSection>

            <CaseSection id="limitations" eyebrow="11" title="Limitations">
              <Callout variant="warn" title="Honest scope">
                This is a productized demonstration, not a hardened production
                platform. The limitations below are deliberate and documented in the
                repository&apos;s SECURITY.md.
              </Callout>
              <ul className="space-y-2">
                {limitations.map((l) => (
                  <li key={l} className="flex gap-2.5 text-sm text-ink-med">
                    <span aria-hidden="true" className="mt-1 text-warn">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="future" eyebrow="12" title="Future work">
              <ul className="space-y-2">
                {futureWork.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-ink-med">
                    <span aria-hidden="true" className="mt-1 text-accent">▹</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ExternalLink href={project.github} className="btn-primary">
                  Review the source on GitHub
                </ExternalLink>
                <Link href="/projects/android-reset-lab" className="btn-ghost">
                  Next project: Android Reset Lab →
                </Link>
              </div>
            </CaseSection>
          </article>
        </div>
      </div>
    </>
  );
}
