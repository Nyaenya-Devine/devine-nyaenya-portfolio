"use client";

import { useState } from "react";

export type PipelineStage = {
  id: string;
  index: string;
  title: string;
  principle: string;
  detail: string;
  /** What happens if this control is missing. */
  failure: string;
};

export const defaultStages: PipelineStage[] = [
  {
    id: "actor",
    index: "01",
    title: "Actor",
    principle: "Identity",
    detail:
      "A human operator or an automated/AI agent initiates a request. Every actor — person or machine — is a named identity with a role, because access control begins with knowing who is acting.",
    failure:
      "Anonymous or shared accounts make every later control un-auditable: you cannot enforce least privilege or attribute actions you cannot tie to an identity.",
  },
  {
    id: "auth",
    index: "02",
    title: "Authentication",
    principle: "Prove identity",
    detail:
      "The actor proves who they are (credentials, verified with salted password hashing and timing-safe comparison; MFA optional). A signed, HttpOnly, SameSite=Strict session is issued on success.",
    failure:
      "Weak verification lets an attacker assume an identity outright — brute force, credential stuffing, or session theft become the whole breach.",
  },
  {
    id: "authz",
    index: "03",
    title: "Authorization",
    principle: "Least privilege · RBAC · default-deny",
    detail:
      "A policy engine checks the role-based access matrix before any action. Default is deny: a role is granted only the permissions it needs and nothing more.",
    failure:
      "Over-privileged roles mean one compromised account can reach everything. Default-allow turns a single foothold into total compromise.",
  },
  {
    id: "approval",
    index: "04",
    title: "Dual-control approval",
    principle: "Separation of duties · two-person rule",
    detail:
      "High-impact, irreversible actions require a second, distinct, authorized approver. A person can never approve their own request — enforced in code and tested.",
    failure:
      "Without it, a single malicious or compromised insider can perform destructive actions alone. No second set of eyes, no natural checkpoint.",
  },
  {
    id: "operation",
    index: "05",
    title: "High-impact operation",
    principle: "Execute under constraint",
    detail:
      "Only after all gates pass does the sensitive operation execute — in these projects, a simulated device reset or a privileged configuration change, scoped to the minimum needed.",
    failure:
      "Executing before the gates pass (or with too broad a scope) is how simulated risk becomes real, irreversible damage.",
  },
  {
    id: "ledger",
    index: "06",
    title: "Tamper-evident audit ledger",
    principle: "Non-repudiation · integrity",
    detail:
      "Every event is append-only, SHA-256 hash-chained and HMAC-signed. Altering, deleting, reordering, or re-signing an entry breaks the chain and is provable by verification.",
    failure:
      "Editable logs let an attacker cover their tracks. If the record can be silently changed, detection and accountability collapse.",
  },
];

export function SecurityPipeline({
  stages = defaultStages,
  caption = "Interactive request flow — click a stage to inspect the security principle.",
}: {
  stages?: PipelineStage[];
  caption?: string;
}) {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <div className="panel p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <span className="dot bg-accent animate-pulse-dot" />
        <p className="key-label !mb-0">Request path · control plane</p>
      </div>

      {/* Flow */}
      <ol className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {stages.map((s, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <li key={s.id} className="relative">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-current={isActive ? "step" : undefined}
                className={`group flex h-full w-full flex-col items-start gap-1 rounded-lg border p-3 text-left transition-all duration-200 ${
                  isActive
                    ? "border-accent/50 bg-accent/10 shadow-glow"
                    : isDone
                      ? "border-line bg-raised/70 hover:border-accent/30"
                      : "border-line bg-raised/30 hover:border-ink-faint"
                }`}
              >
                <span
                  className={`font-mono text-[10px] tracking-widest ${
                    isActive ? "text-accent" : "text-ink-faint"
                  }`}
                >
                  {s.index}
                </span>
                <span
                  className={`text-[13px] font-semibold leading-tight ${
                    isActive ? "text-ink-high" : "text-ink-med"
                  }`}
                >
                  {s.title}
                </span>
              </button>
              {i < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-ink-faint lg:block"
                >
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* Detail panel */}
      <div
        key={stage.id}
        role="region"
        aria-live="polite"
        className="relative mt-5 overflow-hidden rounded-lg border border-line bg-base/60 p-4 sm:p-5"
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(52,217,107,0.9), transparent)",
          }}
        />
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-xs text-accent">{stage.index}</span>
          <h3 className="text-base font-semibold text-ink-high">{stage.title}</h3>
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent/80">
            {stage.principle}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-med">{stage.detail}</p>
        <div className="mt-4 rounded-md border border-danger/20 bg-danger/5 p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-danger">
            If this control failed
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-med">{stage.failure}</p>
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-[11px] text-ink-faint">{caption}</p>
    </div>
  );
}
