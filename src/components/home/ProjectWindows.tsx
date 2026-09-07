import Link from "next/link";
import { projects } from "@/data/projects";
import { StatusBadge } from "@/components/StatusBadge";

/**
 * ProjectWindows — large, clickable "windows" into each project. The whole card
 * is a link straight to the case study (or GitHub). Chokepoint is the featured,
 * larger window; the self-referential "portfolio" slug is intentionally omitted.
 */

// endopima-kenya is a non-security build, shown last/small; the self-
// referential "portfolio" slug is deliberately not surfaced here.

function Arrow() {
  return (
    <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-base/60 text-accent transition-transform duration-300 group-hover:translate-x-0.5">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Window({
  slug,
  featured = false,
}: {
  slug: string;
  featured?: boolean;
}) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;
  return (
    <Link
      href={`/projects/${p.slug}`}
      className={`card card-lift group relative flex h-full flex-col overflow-hidden p-6 ${
        featured ? "lg:col-span-2 lg:p-8" : ""
      }`}
    >
      {/* accent top beam on featured */}
      {featured && (
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow">{p.kicker}</p>
          <h3 className={`mt-2 font-semibold text-ink-high ${featured ? "text-2xl" : "text-lg"}`}>
            {p.name}
          </h3>
        </div>
        <StatusBadge status={p.status} />
      </div>

      <p className={`mt-3 flex-1 text-sm leading-relaxed text-ink-med ${featured ? "max-w-2xl" : ""}`}>
        {p.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.concepts.slice(0, featured ? 6 : 3).map((c) => (
          <span key={c} className="chip chip-accent !text-[10px]">{c}</span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line-soft pt-4">
        <span className="text-sm font-semibold text-accent">
          Open {featured ? "case study" : "project"}
          <span className="text-ink-faint"> →</span>
        </span>
        <Arrow />
      </div>
    </Link>
  );
}

export function ProjectWindows() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Chokepoint spans full width as the flagship window */}
      <div className="lg:col-span-2">
        <Window slug="chokepoint" featured />
      </div>
      <Window slug="android-reset-lab" />
      <Window slug="android-device-management-tool" />
      <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2">
        <Window slug="endopima-kenya" />
        {/* GitHub window — straight to the profile */}
        <a
          href="https://github.com/Nyaenya-Devine"
          target="_blank"
          rel="noopener noreferrer"
          className="card card-lift group relative flex h-full flex-col justify-center overflow-hidden p-6"
        >
          <p className="eyebrow">All repositories</p>
          <h3 className="mt-2 text-lg font-semibold text-ink-high">More on GitHub</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-med">
            Browse every build, commit, and test on the GitHub profile — including
            experiments and work in progress.
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-line-soft pt-4">
            <span className="text-sm font-semibold text-accent">@Nyaenya-Devine <span className="text-ink-faint">↗</span></span>
            <Arrow />
          </div>
        </a>
      </div>
    </div>
  );
}
