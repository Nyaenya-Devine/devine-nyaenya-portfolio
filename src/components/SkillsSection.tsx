import { skillGroups, type Proficiency } from "@/data/skills";
import { Reveal } from "./Reveal";

const levelStyle: Record<Proficiency, string> = {
  "Core focus": "text-accent border-accent/30 bg-accent/10",
  "Working knowledge": "text-ink-med border-line bg-raised",
  "Familiar / labs": "text-ink-low border-line bg-raised/40",
};

export function SkillsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {skillGroups.map((group, gi) => (
        <Reveal key={group.id} delay={gi * 90} className="h-full">
        <div className="card card-lift h-full p-6 transition-colors hover:border-accent/30">
          <h3 className="text-lg font-semibold text-ink-high">{group.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-low">
            {group.description}
          </p>
          <ul className="mt-5 space-y-2.5">
            {group.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col gap-1 rounded-lg border border-line-soft bg-base/40 px-3 py-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-ink-high">
                    {skill.name}
                  </span>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${levelStyle[skill.level]}`}
                  >
                    {skill.level}
                  </span>
                </div>
                {skill.note && (
                  <span className="text-xs text-ink-faint">{skill.note}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
      ))}
    </div>
  );
}
