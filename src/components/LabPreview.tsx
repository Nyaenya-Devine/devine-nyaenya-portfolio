import Link from "next/link";
import { labs, upcomingLabs, labCategories } from "@/data/labs";
import { Callout } from "./case-study/CaseSection";
import { Reveal } from "./Reveal";

const categoryColors: Record<string, string> = {
  Exploitation: "text-danger border-danger/30 bg-danger/10",
  "Network Security": "text-accent border-accent/30 bg-accent/10",
  "Linux Privilege Escalation": "text-warn border-warn/30 bg-warn/10",
  "Web Security": "text-accent border-accent/30 bg-accent/10",
  "Security Automation": "text-ok border-ok/30 bg-ok/10",
  "Threat Modeling": "text-ink-med border-line bg-raised",
};

export function LabPreview({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="space-y-8">
      <Callout variant="warn" title="Authorized labs only">
        Every exercise here was performed in an isolated, intentionally-vulnerable
        training environment that I was explicitly permitted to attack — never
        against real organizations or systems I don't own. These are learning
        write-ups, not professional penetration tests or findings against real
        companies.
      </Callout>

      {/* Category strip */}
      <div className="flex flex-wrap gap-2">
        {labCategories.map((cat) => (
          <span key={cat} className={`chip ${categoryColors[cat] ?? ""}`}>
            {cat}
          </span>
        ))}
      </div>

      {/* Published write-ups */}
      <div className="grid gap-5 md:grid-cols-2">
        {labs.map((lab, i) => (
          <Reveal key={lab.slug} delay={i * 100} className="h-full">
          <Link
            href={`/security-lab#${lab.slug}`}
            className="card card-lift group flex h-full flex-col p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                  categoryColors[lab.category] ?? ""
                }`}
              >
                {lab.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                {lab.difficulty}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink-high group-hover:text-accent">
              {lab.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-med">
              {lab.summary}
            </p>
            {detailed && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {lab.tools.map((t) => (
                  <span key={t} className="chip !text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
            )}
            <p className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Read write-up <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </p>
          </Link>
          </Reveal>
        ))}

        {/* Upcoming placeholders */}
        {(detailed ? upcomingLabs : upcomingLabs.slice(0, 2)).map((u) => (
          <div
            key={u.category}
            className="rounded-xl border border-dashed border-line bg-raised/20 p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-low">
                {u.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                Coming soon
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink-low">
              {u.category} write-up
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-faint">{u.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
