import { CountUp } from "@/components/CountUp";

/**
 * StatsBar v2 — Obsidian Aurora
 * Premium glass stats with amber/violet accents, editorial typography
 */
const stats = [
  { value: 78, suffix: "+", label: "automated tests", sub: "Vitest + pytest", accent: "amber" },
  { value: 6, suffix: " / 6", label: "lab attacks detected", sub: "self-run red team", accent: "emerald" },
  { value: 6, suffix: "", label: "control gates", sub: "per sensitive action", accent: "violet" },
  { value: 0, suffix: "", label: "dependency CVEs", sub: "npm audit, this site", accent: "cyan" },
  { value: 3, suffix: "", label: "documented builds", sub: "source on GitHub", accent: "amber" },
];

export function StatsBar() {
  return (
    <section className="relative border-y border-white/[0.06] bg-surface/50 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] via-transparent to-violet/[0.03]" />
      <div className="container-page relative py-0">
        <dl className="grid grid-cols-2 gap-px bg-surface/[0.06] sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative bg-base px-6 py-8 text-center transition-all duration-500 hover:bg-surface"
            >
              {/* Hover beam */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500" />
              
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className={`block font-display text-[36px] font-medium leading-none tracking-[-0.03em] tabular-nums transition-colors duration-300 ${
                  s.accent === "amber" ? "text-accent group-hover:text-accent-soft" :
                  s.accent === "violet" ? "text-violet-soft group-hover:text-violet" :
                  s.accent === "emerald" ? "text-emerald-400 group-hover:text-emerald-300" :
                  "text-cyan-soft group-hover:text-cyan"
                } sm:text-[42px]`}>
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-3 block font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-ink-high">
                  {s.label}
                </span>
                <span className="mt-1 block font-mono text-[11px] tracking-[0.06em] text-ink-low">
                  {s.sub}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
