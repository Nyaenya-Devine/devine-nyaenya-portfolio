import { CountUp } from "@/components/CountUp";

/**
 * Honest, verifiable metrics grounded in the repositories:
 * - Chokepoint: 26 Vitest tests; Android Reset Lab: 52 pytest tests → 78 total.
 * - 6/6 self-run attack scenarios detected (reset lab).
 * - Control gates in the request-path pipeline.
 * - Dependency vulnerabilities in THIS portfolio's tree.
 * - Documented projects.
 */
const stats = [
  { value: 78, suffix: "+", label: "automated tests", sub: "Vitest + pytest" },
  { value: 6, suffix: " / 6", label: "lab attacks detected", sub: "self-run red team" },
  { value: 6, suffix: "", label: "control gates", sub: "per sensitive action" },
  { value: 0, suffix: "", label: "dependency CVEs", sub: "npm audit, this site" },
  { value: 3, suffix: "", label: "documented builds", sub: "source on GitHub" },
];

export function StatsBar() {
  return (
    <section className="border-y border-line-soft bg-surface/40">
      <div className="container-page py-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-surface px-5 py-5 text-center transition-colors hover:bg-raised"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-mono text-3xl font-bold text-accent tabular-nums sm:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-2 block text-sm font-medium text-ink-high">
                  {s.label}
                </span>
                <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-wider text-ink-faint">
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
