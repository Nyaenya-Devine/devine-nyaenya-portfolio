import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectsGrid({ limit }: { limit?: number }) {
  const ordered = [...projects].sort((a, b) => b.weight - a.weight);
  const list = limit ? ordered.slice(0, limit) : ordered;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((p, i) => (
        <Reveal key={p.slug} delay={i * 90} className="h-full">
          <ProjectCard project={p} />
        </Reveal>
      ))}
    </div>
  );
}
