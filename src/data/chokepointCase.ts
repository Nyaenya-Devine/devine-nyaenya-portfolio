/**
 * Chokepoint case-study content.
 *
 * Structure follows the requested flow:
 * Problem → Threat Model → Architecture → Security Controls → Implementation →
 * Attack/Failure Scenarios → Testing → Results → Limitations → Future Work.
 *
 * All technical claims are grounded in the repository (README + module names +
 * test files + SECURITY.md). No production-readiness or scale claims are made.
 */

export type CaseSection = {
  id: string;
  navLabel: string;
  title: string;
  intro?: string;
};

export const caseNav: CaseSection[] = [
  { id: "demo", navLabel: "Demo video", title: "Walkthrough" },
  { id: "overview", navLabel: "Overview", title: "Overview" },
  { id: "problem", navLabel: "Problem", title: "The problem" },
  { id: "threat-model", navLabel: "Threat model", title: "Threat model" },
  { id: "architecture", navLabel: "Architecture", title: "Architecture" },
  { id: "controls", navLabel: "Controls", title: "Security controls" },
  { id: "flows", navLabel: "Flows", title: "Auth & approval flows" },
  { id: "ledger", navLabel: "Ledger", title: "Audit ledger & integrity" },
  { id: "attacks", navLabel: "Scenarios", title: "Attack & failure scenarios" },
  { id: "testing", navLabel: "Testing", title: "Testing" },
  { id: "results", navLabel: "Results", title: "Results & takeaways" },
  { id: "limitations", navLabel: "Limits", title: "Limitations" },
  { id: "future", navLabel: "Future", title: "Future work" },
];

export const modules = [
  {
    name: "lib/crypto.ts",
    responsibility: "PBKDF2-SHA256 password hashing with per-user salt, HMAC-SHA256 signatures, SHA-256 hashing, and constant-time comparison.",
  },
  {
    name: "lib/ledger.ts",
    responsibility: "Append-only, hash-chained, HMAC-signed event log plus verifyChain() that detects alteration, deletion, and reordering.",
  },
  {
    name: "lib/authz.ts",
    responsibility: "RBAC policy matrix, a single can() authorization gate on every action, and dual-control (distinct + authorized approver) enforcement.",
  },
  {
    name: "lib/anomaly.ts",
    responsibility: "Explainable risk scoring and severity classification for suspicious signals.",
  },
  {
    name: "lib/session.ts",
    responsibility: "Signed, HttpOnly, SameSite=Strict, expiring session cookie (Secure flag set when the connection is actually HTTPS).",
  },
  {
    name: "lib/store.ts",
    responsibility: "In-memory store with seed/demo data and derived dashboard metrics (risk trend, severity breakdown, activity).",
  },
];

export const controls = [
  {
    name: "Least privilege & RBAC",
    what: "Four roles — viewer, auditor, operator, admin — each with only the permissions they need. Every action passes through one policy gate.",
    enforced: "Policy matrix in lib/authz.ts; default-deny.",
  },
  {
    name: "Separation of duties",
    what: "A person can never approve their own privileged request. The approver must be a distinct, authorized identity.",
    enforced: "Dual-control checks in lib/authz.ts, covered by authorization tests.",
  },
  {
    name: "Tamper-evident audit trail",
    what: "Every event is SHA-256 hash-chained and HMAC-signed. Edit, delete, reorder, or re-sign with the wrong key and verification fails.",
    enforced: "lib/ledger.ts + verifyChain(); proven by ledger tests.",
  },
  {
    name: "Credential hygiene",
    what: "PBKDF2-SHA256 with a per-user salt and timing-safe comparison — no plaintext or fast hashes.",
    enforced: "lib/crypto.ts; crypto tests.",
  },
  {
    name: "Session hygiene",
    what: "Sessions live in an HttpOnly, SameSite=Strict, signed, expiring cookie. Secure is set behind real HTTPS so it also runs on a local preview.",
    enforced: "lib/session.ts.",
  },
  {
    name: "Explainable anomaly detection",
    what: "Failed logins, after-hours privilege use, unknown sources, privilege escalation, and automation are surfaced with human-readable reasons and severity.",
    enforced: "lib/anomaly.ts; anomaly tests assert signals fire on the right conditions.",
  },
  {
    name: "Transport & app hardening",
    what: "Strict Content Security Policy and security headers; dependency-free charts so the CSP stays tight and no new transitive risk is added.",
    enforced: "Response headers; npm audit reports 0 vulnerabilities.",
  },
  {
    name: "Human and AI actors",
    what: "Access control treats people and automated/AI agents as named identities, addressing identity & privilege abuse in agentic systems (OWASP ASI03).",
    enforced: "Actor model in the policy and ledger layers.",
  },
];

export const attacks = [
  {
    scenario: "An operator edits or deletes an audit event to cover an action",
    attack: "Tamper with a ledger entry's payload, remove an entry, or reorder events.",
    result: "verifyChain() recomputes hashes and HMACs and fails at the affected position — alteration, deletion, and reordering are all detectable.",
  },
  {
    scenario: "Someone re-signs the log with a different key after tampering",
    attack: "Attempt to forge valid HMAC signatures without the server's secret.",
    result: "Without the HMAC key, forged signatures fail verification; the wrong-key case is explicitly tested.",
  },
  {
    scenario: "A user approves their own destructive request",
    attack: "Requester tries to self-approve to satisfy the two-person rule alone.",
    result: "Authorization rejects it: approver must be distinct and authorized. Self-approval is blocked in code and in tests.",
  },
  {
    scenario: "A lower-privileged role attempts an admin action",
    attack: "Viewer/operator calls an endpoint or action outside their role.",
    result: "The default-deny policy gate denies the action and records the attempt (an anomaly signal), rather than silently allowing it.",
  },
  {
    scenario: "Credential guessing / brute force",
    attack: "Repeated failed logins, or timing-based user enumeration.",
    result: "Salted PBKDF2 hashing and constant-time comparison remove timing leaks; failed logins feed anomaly detection for risk scoring.",
  },
  {
    scenario: "An automated agent over-uses privilege",
    attack: "An AI/automated identity performs high-impact actions or works outside expected patterns.",
    result: "Agents are named identities subject to the same RBAC and approval gates; automation and unusual patterns are flagged as anomaly signals.",
  },
];

export const testFiles = [
  {
    name: "tests/ledger.test.ts",
    proves: "The audit chain detects altered payloads, deleted entries, reordered entries, and re-signed (wrong-key) entries.",
  },
  {
    name: "tests/authz.test.ts",
    proves: "The policy matrix and dual-control rules — distinct-approver and authorized-approver — behave correctly.",
  },
  {
    name: "tests/crypto.test.ts",
    proves: "PBKDF2 is salted and timing-safe, and HMAC keyed signatures verify as expected.",
  },
  {
    name: "tests/anomaly.test.ts",
    proves: "Risk signals fire on exactly the intended conditions.",
  },
];

export const limitations = [
  "Demo data and seeded accounts are held in an in-memory store; this is a productized demonstration, not a hardened multi-tenant production service.",
  "Seed/demo credentials are intentionally simple so the app runs out of the box — production requires setting CHOKEPOINT_SECRET and CHOKEPOINT_SESSION_SECRET and issuing real credentials.",
  "There is no production identity provider / SSO integration, no organizational directory sync, and no enterprise key management for HMAC keys in the demo build.",
  "Anomaly detection uses explainable rule- and score-based signals, not a trained ML model; it is transparent rather than exhaustive.",
  "Scale, high-availability, and operational concerns (backups, key rotation, distributed verification) are out of scope for the demonstration.",
];

export const futureWork = [
  "Persistent, durable storage for the ledger with externalized key management and key rotation.",
  "SSO / OIDC integration and stronger MFA for production identities.",
  "External, append-only log backends (e.g. WORM storage or a SIEM) and independent chain verification / anchoring.",
  "Richer policy as code and configurable approval thresholds per action risk.",
  "Hardened agent identity model for AI actors — scoped tokens, per-agent policies, and tighter rate/capability limits.",
];
