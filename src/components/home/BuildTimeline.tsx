import Link from "next/link";

/**
 * A compact, honest "how the work evolved" timeline connecting the three
 * projects into a single learning/progression arc.
 */

const timeline = [
  {
    phase: "Phase 1",
    slug: "android-reset-lab",
    title: "Android Reset Lab",
    tag: "Prove the controls",
    body: "A Python, stdlib-only simulation that isolates the core controls — RBAC, four-eyes approval, hash-chained logs — then attacks itself (6/6 detected).",
    metrics: ["52 tests", "stdlib only", "simulation"],
    tone: "warn" as const,
  },
  {
    phase: "Phase 2",
    slug: "android-device-management-tool",
    title: "Device Management Tool",
    tag: "Confront reality",
    body: "Attempting to carry the controls into a real full-stack stack (Next.js + DB) exposed how hard integration is. An honest WIP — and the lesson that scoped the next build.",
    metrics: ["Next.js + TS", "full-stack", "honest WIP"],
    tone: "neutral" as const,
  },
  {
    phase: "Phase 3",
    slug: "chokepoint",
    title: "Chokepoint",
    tag: "Productize & harden",
    body: "The complete, deployable security control plane: real auth, dual-control approval, a hash-chained HMAC ledger, explainable anomaly detection, and tests that prove the properties — for humans and AI agents.",
    metrics: ["Next.js 16", "26 security tests", "live demo"],
    tone: "accent" as const,
  },
];

const dot = {
  warn: "border-warn/50 bg-warn/15 text-warn",
  neutral: "border-ink-faint bg-raised text-ink-low",
  accent: "border-accent/50 bg-accent/15 text-accent",
};

export function BuildTimeline() {
  return (
    <ol className="relative grid gap-6 lg:grid-cols-3">
      {/* connecting line (desktop) */}
      <span aria-hidden="true" className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-warn/40 via-ink-faint to-accent/50 lg:block" />

      {timeline.map((t, i) => (
        <li key={t.slug} className="relative">
          <Link
            href={`/projects/${t.slug}`}
            className="card card-lift group flex h-full flex-col p-6"
          >
            <div className="flex items-center gap-3">
              <span className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border ${dot[t.tone]} font-mono text-sm font-bold`}>
                {i + 1}
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">{t.phase}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent/80">{t.tag}</p>
              </div>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-ink-high group-hover:text-white">
              {t.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-med">{t.body}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {t.metrics.map((m) => (
                <span key={m} className="chip !text-[10px]">{m}</span>
              ))}
            </div>

            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              View case study
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
            </Link>
          </li>
        ))}
    </ol>
  );
}
