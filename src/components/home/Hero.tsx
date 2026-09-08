import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { site, socialLinks } from "@/data/site";

export function Hero() {
  const linkedin = socialLinks.find((s) => s.label === "LinkedIn");
  const linkedInHref = linkedin?.configured ? linkedin.href : null;

  return (
    <section className="relative">
      <div className="container-page pt-14 pb-10 sm:pt-20 sm:pb-14">
        <div className="max-w-3xl">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-1.5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-med">
              {site.location} · Open to security roles
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-[-0.01em] text-ink-high sm:text-7xl">
            {site.firstName}{" "}
            <span className="text-gradient">{site.lastName}</span>
          </h1>

          <p className="mt-3 text-xl font-semibold text-accent sm:text-2xl">
            {site.role}
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-med text-pretty">
            I build security-focused software, investigate vulnerabilities in
            authorized labs, and ship defensive controls that are{" "}
            <span className="font-semibold text-ink-high">implemented and tested</span> —
            not just described.{" "}
            <span className="text-ink-high">{site.tagline}</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#projects" className="btn-primary">
              View my projects
              <span aria-hidden="true">↓</span>
            </Link>
            <ExternalLink href={site.github} className="btn-ghost">
              GitHub
            </ExternalLink>
            {linkedInHref && (
              <ExternalLink href={linkedInHref} className="btn-ghost">
                LinkedIn
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
