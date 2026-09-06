import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { HeroConsole } from "./HeroConsole";
import { site, socialLinks } from "@/data/site";

export function Hero() {
  const linkedin = socialLinks.find((s) => s.label === "LinkedIn");
  const linkedInHref = linkedin?.configured ? linkedin.href : null;
  return (
    <section className="relative overflow-hidden">
      <div className="container-page py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          {/* Left: copy */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ring-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-low">
                {site.location} · Security engineering
              </p>
            </div>

            <h1
              className="mt-6 text-display font-bold leading-[1.02] animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              <span className="text-gradient">Devine Nyaenya</span>
            </h1>

            <p
              className="mt-4 text-xl font-medium text-accent sm:text-2xl animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              {site.role}
            </p>

            <p
              className="mt-5 text-lg leading-relaxed text-ink-med text-pretty animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              I build security-focused software, investigate vulnerabilities in
              authorized labs, and ship defensive controls that are{" "}
              <span className="font-medium text-ink-high">implemented and tested</span> —
              not just described.{" "}
              <span className="text-ink-high">{site.tagline}</span>
            </p>

            <div
              className="mt-7 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link href="/projects" className="btn-primary">
                View my work
                <span aria-hidden="true">→</span>
              </Link>
              <ExternalLink href={site.github} className="btn-ghost">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                GitHub
              </ExternalLink>
              {linkedInHref && (
                <ExternalLink href={linkedInHref} className="btn-ghost">
                  LinkedIn
                </ExternalLink>
              )}
            </div>

            {/* Mini stat chips (illustrative, honest) */}
            <div
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              {[
                { k: "3", v: "documented projects" },
                { k: "6", v: "verifiable control gates" },
                { k: "0", v: "dependency vulnerabilities" },
              ].map((s) => (
                <div key={s.v} className="flex items-center gap-2.5">
                  <span className="font-mono text-lg font-bold text-accent">{s.k}</span>
                  <span className="text-xs leading-tight text-ink-low">{s.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: live console */}
          <div className="relative lg:pl-4">
            <HeroConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
