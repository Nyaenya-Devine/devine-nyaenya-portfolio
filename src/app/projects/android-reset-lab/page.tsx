import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/data/projects";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseSection, Callout } from "@/components/case-study/CaseSection";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { ExternalLink } from "@/components/ExternalLink";

const project = getProject("android-reset-lab")!;

export const metadata: Metadata = {
  title: "Android Reset Lab P4 Cerberus — Case Study",
  description:
    "P4 Cerberus God Mode: Merkle transparency RFC6962 with inclusion/consistency proofs + Rekor checkpoint sim, Cedar ABAC policy-as-code + AuthZEN + risk-adaptive (velocity/impossible travel/device trust), WebAuthn passkeys (AAGUID allowlist, counter clone detection), Play Integrity + StrongBox attestation, WYSIWYS tx signing, DPoP token binding. 68 tests, 6/6 attacks detected. Simulation-only.",
  alternates: { canonical: "/projects/android-reset-lab" },
};

const flowNodes = [
  { label: "Login + Passkey + TOTP", sub: "PBKDF2/Argon2id · WebAuthn origin binding · AAGUID allowlist", accent: true },
  { label: "Session token + DPoP", sub: "128-bit · 30m TTL · CSRF · jkt binding · proof-of-possession", accent: true },
  { label: "Risk-adaptive scoring", sub: "velocity, impossible travel, device trust, time anomaly, escalation" },
  { label: "Device attestation", sub: "Play Integrity BASIC/DEVICE/STRONG · StrongBox/TEE/Software · trust_score" },
  { label: "Cedar ABAC policy check", sub: "explicit deny, default deny, decision logs, bundle SHA, AuthZEN", accent: true },
  { label: "Request reset", sub: "validate fleet + attestation ≠ untrusted + risk <80 + policy allow" },
  { label: "Four-eyes + TX signing", sub: "second admin · WYSIWYS HMAC + passkey txAuthSimple · 5m expiry", accent: true },
  { label: "SIMULATED wipe + Merkle", sub: "status active→wiped · Merkle root + inclusion/consistency proofs + Rekor checkpoint", accent: true },
  { label: "Threat detection (23 rules)", sub: "time-windowed + risk factors + attestation + webauthn clone + DPoP + tx tamper" },
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
  ["Merkle Transparency Log RFC6962/9162", "Leaf SHA256(0x00||canonical_json), node SHA256(0x01||L||R), inclusion proofs O(log N), consistency proofs, STH HMAC-signed, checkpoint anchoring simulates Sigstore Rekor with rekor_simulated_id."],
  ["Cedar ABAC Policy-as-Code", "Principal/Action/Resource/Context model, 10 default policies, explicit deny overrides permit, default deny, decision logs with timestamp/version/bundle SHA, AuthZEN-compatible API, safe AST walk (no eval)."],
  ["Risk-Adaptive Authentication", "8 factors: velocity (req/min), failed_auth/10m, time anomaly (8-18 UTC approved), device trust (trusted 0, compromised 50, emulator 40), MFA (passkey -10 bonus), escalation 40, impossible travel 30 if geo change <10m, session age. Score 0-100 → allow/step_up/tx/deny."],
  ["WebAuthn Passkeys", "FIDO2 phishing-resistant, origin + RP ID validation, AAGUID allowlist via FIDO MDS (YubiKey 5, Titan M, Windows Hello, Touch ID, Pixel 8 StrongBox), challenge 32B CSPRNG, counter clone detection, backup_eligible flag."],
  ["Device Attestation", "Play Integrity MEETS_BASIC/DEVICE/STRONG + hardware key attestation Software/TEE/StrongBox (Titan M), keybox.xml validation, patch recent check, bootloader locked, trust_score 0-100 with penalties, GrapheneOS fallback without Play Services."],
  ["Transaction Signing WYSIWYS", "What You See Is What You Sign HMAC-SHA256, PSD2 dynamic linking, FIDO txAuthSimple extension simulation, explicit display confirmation, 5m expiry, prevents confused deputy and tampering."],
  ["DPoP Token Binding RFC9449", "Demonstrating Proof-of-Possession JWT with htm/htu/iat/jti/nonce, JWK oct, jkt thumbprint, token bound to key, cannot be replayed without proof, htm/htu binding prevents cross-site replay."],
  ["Four-eyes + Continuous Verification", "Requester ≠ approver enforced + policy context.requester != approver, state machine requested→approved→executed, attestation re-checked at execution time (continuous verification)."],
  ["Tamper-evident + Tamper-proof Log", "Hash chain prev_hash + entry_hash + HMAC-SHA256 (0600 key separate) + Merkle tree, verify_all, inclusion proof O(log N), SIEM shipping stdout/file + decision_logs + checkpoints."],
  ["Strong Credential Storage + MFA", "PBKDF2 100k + salt + Argon2id optional (LAB_HASH_ALGO=argon2), timing-safe compare_digest, role whitelist, password strength, TOTP RFC6238 + passkeys, MFA_REQUIRED flag, recovery codes future."],
  ["Brute-force & Abuse Defenses", "Account locks 15m after 3 fails auto-unlock, IP+user rate limiting 5/min auth, 10/min web, request size limits, velocity and impossible travel risk factors."],
  ["CSRF + XSS + Phishing Protection", "CSRF tokens per session, SameSite Strict, HttpOnly, html.escape + CSP frame-ancestors none, WebAuthn origin binding prevents phishing."],
  ["Detection P4 (23 rules)", "6 base rules + risk factors (velocity, impossible travel, device trust, time anomaly, escalation, failed auth, session age) + attestation (emulator, unlocked, old patch, keybox) + webauthn counter clone + DPoP mismatch + tx tamper + policy forbid."],
  ["SIEM + Observability", "HMAC-keyed logs ship stdout JSON + file, decision logs with policy SHA, Merkle STH + checkpoints, OTEL tracing + Prometheus metrics optional (observability.py)."],
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

          <CaseSection id="hardening" eyebrow="06" title="Hardening: P0→P4 Cerberus God Mode">
            <p>
              The project was hardened in iterative passes (P0–P4 Cerberus), growing
              from 18 to 68 tests (52 P2/P3 + 16 P4). Rather than only adding features,
              I hunted and fixed real security defects, then invented new architecture
              that even a machine can applaud — Merkle transparency, Cedar ABAC,
              risk-adaptive, passkeys, StrongBox attestation, WYSIWYS tx signing, DPoP:
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

          <CaseSection id="results" eyebrow="07" title="Results & takeaways P4">
            <Callout variant="ok" title="Verified outcomes P4 Cerberus">
              68 tests pass (52 P2/P3 + 16 P4) on both JSON and SQLite; 6/6 attack
              categories detected plus 17 new P4 detections (velocity, impossible
              travel, device trust, attestation, webauthn clone, DPoP, tx tamper);
              Merkle root verified with inclusion/consistency proofs + Rekor
              checkpoint anchoring; Cedar policy 10 policies with bundle SHA + AuthZEN;
              risk-adaptive step-up 30/tx 60/deny 80; passkeys YubiKey 5 + Titan M +
              Touch ID + StrongBox; attestation Pixel 8 Pro trusted vs Emulator
              untrusted; WYSIWYS tx signing + DPoP binding; four-eyes cannot be bypassed.
            </Callout>
            <p>
              P4 is God Mode: it takes the lab from linear hash chain to Merkle
              transparency log, from static RBAC to Cedar ABAC with decision logs,
              from password+MFA to phishing-resistant passkeys + transaction signing,
              from blind device trust to hardware-backed StrongBox attestation, from
              bearer tokens to DPoP-bound tokens. This is Zero Trust beyond BeyondCorp
              — continuous verification, device as trust input, per-session least
              privilege, assume breach, policy-as-code, short-lived tokens.
            </p>
          </CaseSection>

          <CaseSection id="limitations" eyebrow="08" title="Limitations & next steps P4">
            <p>
              It is still a lab, not an MDM product: Merkle rebuild O(N log N) for
              simulation (production needs incremental), policy engine is safe AST walk
              subset of Cedar (production needs Cedar WASM), risk stores in-memory
              (production needs Redis), WebAuthn/DPoP/TX signing use HMAC sim not real
              ECDSA/RSA, attestation fleet static JSON not real Android Keystore parsing,
              TOTP secrets plaintext, HMAC/tx keys file-based not KMS/HSM, SIEM best-effort.
              23 honest limitations documented in THREAT_MODEL.md P4 — not hidden.
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
