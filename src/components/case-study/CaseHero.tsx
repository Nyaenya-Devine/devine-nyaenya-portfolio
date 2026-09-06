import type { Project } from "@/data/projects";
import { StatusBadge } from "@/components/StatusBadge";
import { ExternalLink } from "@/components/ExternalLink";
import { TagList } from "@/components/TagList";

export function CaseHero({ project }: { project: Project }) {
  return (
    <div className="border-b border-line-soft bg-tech">
      <div className="container-page py-14 sm:py-20">
        <p className="eyebrow animate-fade-up">{project.kicker} · Case study</p>
        <div className="mt-3 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <h1 className="text-h1 text-ink-high">{project.name}</h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-med text-pretty animate-fade-up" style={{ animationDelay: "160ms" }}>
          {project.overview}
        </p>

        <div className="mt-7 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
          <ExternalLink href={project.github} className="btn-ghost">
            View on GitHub
          </ExternalLink>
          {project.liveUrl && (
            <ExternalLink href={project.liveUrl} className="btn-primary">
              Try the live demo
            </ExternalLink>
          )}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <TagList items={project.tech} label="Built with" />
          <TagList items={project.concepts} label="Security concepts" accent />
        </div>
      </div>
    </div>
  );
}
