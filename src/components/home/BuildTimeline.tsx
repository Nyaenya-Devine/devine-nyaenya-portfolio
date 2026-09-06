import Link from "next/link";

const timeline = [
  {
    phase: "Phase 1",
    slug: "android-reset-lab",
    title: "Android Reset Lab",
    tag: "Prove the controls",
    body: "A Python, stdlib-only simulation that isolates the core controls — RBAC, four-eyes approval, hash-chained logs — then attacks itself (6/6 detected). P3: 52 tests, Argon2id, HMAC, TOTP, SIEM.",
    metrics: ["52 tests", "stdlib + argon2", "P3 hardened"],
    tone: "amber" as const,
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
    tone: "violet" as const,
  },
];

const toneStyles = {
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  neutral: "border-white/10 bg-white/[0.04] text-ink-low",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-soft",
};

export function BuildTimeline() {
  return (
    <ol className="relative grid gap-6 lg:grid-cols-3">
      {/* connecting line */}
      <span aria-hidden="true" className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-amber-500/30 via-white/10 to-violet-500/40 lg:block" />

      {timeline.map((t, i) => (
        <li key={t.slug} className="relative">
          <Link
            href={`/projects/${t.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/[0.06] bg-surface/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.10] hover:shadow-card-hover"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-4">
              <span className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border font-mono text-sm font-bold ${toneStyles[t.tone]} group-hover:scale-110 transition-transform duration-300`}>
                {i + 1}
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">{t.phase}</p>
                <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${t.tone === "amber" ? "text-accent" : t.tone === "violet" ? "text-violet-soft" : "text-ink-low"}`}>{t.tag}</p>
              </div>
            </div>

            <h3 className="mt-5 font-display text-[20px] font-medium leading-[1.2] tracking-[-0.015em] text-ink-high group-hover:text-white transition-colors">
              {t.title}
            </h3>
            <p className="mt-3 flex-1 font-sans text-[14px] leading-[1.6] text-ink-med">{t.body}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.metrics.map((m) => (
                <span key={m} className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-ink-low">
                  {m}
                </span>
              ))}
            </div>

            <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black group-hover:bg-ink-high transition-colors">
              View case study
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
