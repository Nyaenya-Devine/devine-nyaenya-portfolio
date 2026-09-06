import Link from "next/link";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { ExternalLink } from "./ExternalLink";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`card card-lift group flex h-full flex-col overflow-hidden ${
        project.featured ? "ring-0" : ""
      }`}
    >
      {/* Header strip */}
      <div className="relative border-b border-line-soft p-5">
        {/* hover accent wash */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(90% 120% at 0% 0%, rgba(56,225,196,0.1), transparent 60%)",
          }}
          aria-hidden="true"
        />
        {/* featured top hairline */}
        {project.slug === "chokepoint" && (
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
          />
        )}
        <div className="relative flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow">{project.kicker}</p>
            <h3 className="mt-2 text-xl font-semibold text-ink-high transition-colors group-hover:text-white">
              {project.name}
            </h3>
          </div>
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="text-sm leading-relaxed text-ink-med">{project.summary}</p>

        <div>
          <p className="key-label mb-2">Security concepts</p>
          <div className="flex flex-wrap gap-1.5">
            {project.concepts.slice(0, 5).map((c) => (
              <span key={c} className="chip chip-accent !text-[10px]">
                {c}
              </span>
            ))}
            {project.concepts.length > 5 && (
              <span className="chip !text-[10px]">+{project.concepts.length - 5}</span>
            )}
          </div>
        </div>

        <div>
          <p className="key-label mb-2">Built with</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="chip !text-[10px]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-soft"
            >
              Read case study
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          )}
          <ExternalLink
            href={project.github}
            quiet
            className="inline-flex items-center gap-1.5 text-sm text-ink-med hover:text-ink-high"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            Source
          </ExternalLink>
          {project.liveUrl && (
            <ExternalLink
              href={project.liveUrl}
              quiet
              className="inline-flex items-center gap-1.5 text-sm text-ink-med hover:text-ink-high"
            >
              Live demo
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
