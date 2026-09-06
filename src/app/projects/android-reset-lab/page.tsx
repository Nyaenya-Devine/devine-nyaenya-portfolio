import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/data/projects";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseSection, Callout } from "@/components/case-study/CaseSection";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { ExternalLink } from "@/components/ExternalLink";

const project = getProject("android-reset-lab")!;

export const metadata: Metadata = {
  title: "Android Reset Lab — Case Study",
  description:
    "A simulation-only enterprise device-reset security lab: default-deny RBAC, four-eyes dual-control approval, and a hash-chained, HMAC-signed tamper-evident audit log. Python stdlib only, 52 tests, and 6/6 self-run attacks detected. Never touches a real device.",
  alternates: { canonical: "/projects/android-reset-lab" },
};

const flowNodes = [
  { label: "Login (+ optional TOTP)", sub: "PBKDF2/Argon2id · timing-safe compare" },
  { label: "Session token", sub: "128-bit · 30m TTL · CSRF token", accent: true },
  { label: "RBAC check (default-deny)", sub: "viewer / operator / admin / analyst" },
  { label: "Request reset", sub: "validate device exists in fleet" },
  { label: "Four-eyes approval", sub: "second admin · requester ≠ approver", accent: true },
  { label: "SIMULATED wipe", sub: "status field active → wiped only" },
  { label: "Hash-chained audit log", sub: "prev_hash + entry_hash + HMAC · SIEM ship", accent: true },
  { label: "Threat detection (6 rules)", sub: "time-windowed · dashboard + metrics" },
];

const attackTable = [
  { attack: "Brute force", how: "4 wrong passwords for an operator", rule: "LOGIN_FAILED count ≥ 3 within 10-min sliding window" },
  { attack: "Out-of-hours", how: "Reset at 03:00", rule: "RESET_REQUESTED outside 08:00–18:00, outcome created" },
  { attack: "Privilege escalation", how: "Operator tries to approve", rule: "ACCESS_DENIED by policy gate" },
  { attack: "Unknown device", how: "Request reset for AND-999", rule: "Device ID not in fleet set" },
  { attack: "Replay", how: "Same request ID twice", rule: "Only the 2nd occurrence is flagged (no double count)" },
  { attack: "Unapproved execute", how: "Execute without approval", rule: "RESET_BLOCKED" },
];

const controls = [
  ["Default-deny RBAC", "Roles (viewer / operator / admin / security analyst) each get only what they need; anything not explicitly allowed is denied and logged."],
  ["Four-eyes dual-control", "A reset needs a second, distinct admin approver. Self-approval is blocked in code and proven by a demo and tests."],
  ["Tamper-evident log", "JSONL audit entries are hash-chained (prev_hash + entry_hash) and HMAC-signed; verification pinpoints the exact line of any edit."],
  ["Strong credential storage", "PBKDF2 (100k iterations) + salt with an optional Argon2id path (LAB_HASH_ALGO=argon2), timing-safe comparison, role whitelist, password strength checks."],
  ["MFA (TOTP)", "Stdlib-only RFC 6238 TOTP (base32/HOTP/TOTP, ±1 window) with optional enforcement; QR provisioning URI."],
  ["Brute-force & abuse defenses", "Account locks for 15 minutes after 3 failures with auto-unlock, plus IP+user rate limiting (5/min auth, 10/min web) and request size/input-length limits."],
  ["CSRF protection", "CSRF tokens on state-changing requests; missing/invalid token returns 403 and logs CSRF_BLOCKED."],
  ["Detection", "Six time-windowed rules produce precise alerts (tuned from 14 alerts/5 false positives down to 9 with 1:1 mapping)."],
  ["SIEM shipping", "HMAC-keyed logs can ship to stdout as JSON or a file for downstream SIEM ingestion."],
];

const bugsFixed = [
  "User enumeration → generic credential messages",
  "Timing attacks → hmac.compare_digest",
  "Stored/rendered XSS → html.escape + security headers",
  "Actor logged as approver instead of executor",
  "Shallow-copy fleet mutation (deepcopy fix)",
  "Timestamp spoofing in the logger (controlled flag)",
  "Password echo → getpass; input validation added",
];

export default function AndroidResetLabPage() {
  return (
    <>
      <CaseHero project={project} />

      <div className="container-page py-12">
        <article className="mx-auto max-w-4xl">
          <CaseSection id="overview" eyebrow="01" title="Overview">
            <p>
              Android Reset Lab simulates the sensitive operation at the heart of
              enterprise mobile management: wiping a lost or stolen device. In a real
              environment a single compromised IT account could wipe an entire fleet,
              so the lab enforces the controls that prevent single-person abuse —
              authentication, default-deny authorization, four-eyes approval, and a
              tamper-evident audit trail — then proves them by attacking the system
              itself.
            </p>
            <Callout variant="warn" title="Simulation-only by design">
              It <strong>never touches a real device</strong>, ADB, or MDM APIs, and it
              never contacts external networks. Device state is a field that flips from{" "}
              <code className="inline-code">active</code> to{" "}
              <code className="inline-code">wiped</code> in a local data file. An
              AST-based safety test (<code className="inline-code">test_safety.py</code>)
              bans destructive calls like <code className="inline-code">subprocess</code>{" "}
              and <code className="inline-code">os.remove</code>. The device is the
              scenario; the security logic is the subject.
            </Callout>
            <ExternalLink href={project.github} className="btn-ghost mt-2">
              Source on GitHub
            </ExternalLink>
          </CaseSection>

          <CaseSection id="problem" eyebrow="02" title="The problem">
            <p>
              Device resets are destructive and irreversible. Without guardrails, one
              set of stolen admin credentials is enough for an attacker to wipe company
              phones at scale — and to erase the evidence afterwards. The lab targets
              five concrete abuses: no single person should wipe a device; brute force
              should be stopped; the audit log should be un-tamperable; after-hours
              abuse should be flagged; and non-existent devices should be rejected.
            </p>
          </CaseSection>

          <CaseSection id="architecture" eyebrow="03" title="Architecture & flow">
            <p>
              Built with the Python standard library only (plus pytest for tests), with
              a JSON or SQLite (WAL, ACID) storage backend selected by an environment
              variable. The pipeline: authenticate → authorize → request → second
              approver → simulated wipe → hash-chained/HMAC log → detection → dashboard.
            </p>
            <FlowDiagram nodes={flowNodes} title="Reset request pipeline (simulated)" />
          </CaseSection>

          <CaseSection id="controls" eyebrow="04" title="Security controls">
            <div className="space-y-3">
              {controls.map(([name, detail]) => (
                <div key={name} className="panel p-4">
                  <p className="text-sm font-semibold text-ink-high">{name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-med">{detail}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="attacks" eyebrow="05" title="Attacking my own design">
            <p>
              An attacker simulation fires six techniques at the running system. All six
              are detected, producing nine precise alerts (down from fourteen with five
              false positives before hardening).
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-line">
              <table className="w-full text-left text-sm">
                <thead className="bg-raised/60 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  <tr>
                    <th className="px-4 py-2.5">Attack</th>
                    <th className="px-4 py-2.5">How simulated</th>
                    <th className="px-4 py-2.5">Detection rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-soft">
                  {attackTable.map((r) => (
                    <tr key={r.attack} className="align-top">
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-ink-high">{r.attack}</td>
                      <td className="px-4 py-3 text-ink-low">{r.how}</td>
                      <td className="px-4 py-3 text-ink-med">{r.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-ink-low">
              Tamper demos confirm the defenses: editing a log entry is caught by
              verification at the exact line (then restored to INTACT), and a
              self-approval attempt returns APPROVAL_DENIED until a distinct second
              admin approves.
            </p>
          </CaseSection>

          <CaseSection id="hardening" eyebrow="06" title="Hardening: finding & fixing real bugs">
            <p>
              The project was hardened in iterative passes (P0–P3), growing from 18 to
              52 tests. Rather than only adding features, I hunted and fixed real
              security defects — the same bug classes that appear in production
              software:
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {bugsFixed.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-ink-med">
                  <span aria-hidden="true" className="mt-1 text-ok">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-med">
              CI enforces the posture: CodeQL, Dependabot, pip-audit, and a TruffleHog
              secret scan. The work is mapped to{" "}
              <strong className="text-ink-high">MITRE ATT&amp;CK</strong> (T1110 brute
              force, T1078 valid accounts, T1134 privilege escalation, T1070 indicator
              removal) and <strong className="text-ink-high">NIST 800-53</strong>{" "}
              (IA-5, AC-7, AC-3, AC-5, AU-9, SI-4).
            </p>
          </CaseSection>

          <CaseSection id="results" eyebrow="07" title="Results & takeaways">
            <Callout variant="ok" title="Verified outcomes">
              52 tests pass on both JSON and SQLite backends; 6/6 attack categories
              detected with precise 1:1 alerts; log integrity verifies INTACT; the
              four-eyes rule cannot be bypassed by self-approval.
            </Callout>
            <p>
              This was the project where I learned to think as both attacker and
              defender: write a control, write the test that tries to defeat it, read
              the alert, and remove the false positive. It also established the
              tamper-evident ledger and dual-control patterns that I then productized
              in Chokepoint.
            </p>
          </CaseSection>

          <CaseSection id="limitations" eyebrow="08" title="Limitations & next steps">
            <p>
              It is a lab, not an MDM product: there is no real-device integration (an
              explicit, documented, flag-gated future step), TOTP secrets are stored
              plainly in the simulation, HMAC key management is file-based rather than a
              KMS, and SIEM shipping is best-effort. These are documented as honest
              limitations rather than hidden.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects/chokepoint" className="btn-primary">
                See the evolution: Chokepoint →
              </Link>
              <Link href="/projects/android-device-management-tool" className="btn-ghost">
                Next: Device Management Tool
              </Link>
            </div>
          </CaseSection>
        </article>
      </div>
    </>
  );
}
