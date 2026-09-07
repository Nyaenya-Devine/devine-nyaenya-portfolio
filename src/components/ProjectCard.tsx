import Link from "next/link";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { ExternalLink } from "./ExternalLink";

export function ProjectCard({ project }: { project: Project }) {
  const isChokepoint = project.slug === "chokepoint";
  
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] border bg-surface/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
        isChokepoint 
          ? "border-accent/20 shadow-glow hover:shadow-glow hover:border-accent/30" 
          : "border-white/[0.06] shadow-card hover:shadow-card-hover hover:border-white/[0.10]"
      }`}
    >
      {/* Top beam for featured */}
      {isChokepoint && (
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      )}

      {/* Hover aurora */}
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-violet/[0.04] to-transparent blur-xl" />
      </div>

      {/* Header */}
      <div className="relative border-b border-white/[0.06] p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className={`inline-flex h-1.5 w-1.5 rounded-full ${isChokepoint ? "bg-accent" : "bg-violet"} animate-pulse-dot`} />
              <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${isChokepoint ? "text-accent" : "text-violet-soft"}`}>
                {project.kicker}
              </p>
            </div>
            <h3 className="mt-3 font-display text-[22px] font-medium leading-[1.15] tracking-[-0.02em] text-ink-high transition-colors group-hover:text-white">
              {project.name}
            </h3>
          </div>
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col gap-5 p-6">
        <p className="font-sans text-[15px] leading-[1.6] tracking-[-0.01em] text-ink-med">
          {project.summary}
        </p>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-2.5">
            Security concepts
          </p>
          <div className="flex flex-wrap gap-2">
            {project.concepts.slice(0, 5).map((c) => (
              <span key={c} className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.02em] transition-colors ${
                isChokepoint 
                  ? "border-accent/20 bg-accent/10 text-accent group-hover:bg-accent/15" 
                  : "border-violet/20 bg-violet/10 text-violet-soft group-hover:bg-violet/15"
              }`}>
                {c}
              </span>
            ))}
            {project.concepts.length > 5 && (
              <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-surface/[0.03] px-2.5 py-1 font-mono text-[10px] text-ink-low">
                +{project.concepts.length - 5}
              </span>
            )}
          </div>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-2.5">
            Built with
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border border-white/[0.06] bg-surface/[0.03] px-2.5 py-1 font-mono text-[10px] text-ink-med">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 hover:gap-2 ${
                isChokepoint
                  ? "bg-surface text-ink-high hover:bg-ink-high"
                  : "bg-surface/[0.08] text-ink-high hover:bg-surface hover:text-ink-high border border-white/[0.08]"
              }`}
            >
              Case study
              <span aria-hidden="true">→</span>
            </Link>
          )}
          <ExternalLink
            href={project.github}
            quiet
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-low hover:text-ink-high transition-colors"
          >
            Source
          </ExternalLink>
          {project.liveUrl && (
            <ExternalLink
              href={project.liveUrl}
              quiet
              className="inline-flex items-center gap-1.5 text-[13px] text-ink-low hover:text-ink-high transition-colors"
            >
              Live ↗
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
