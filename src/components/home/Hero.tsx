import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { HeroConsole } from "./HeroConsole";
import { site, socialLinks } from "@/data/site";

export function Hero() {
  const linkedin = socialLinks.find((s) => s.label === "LinkedIn");
  const linkedInHref = linkedin?.configured ? linkedin.href : null;

  return (
    <section className="relative overflow-hidden">
      {/* Subtle top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container-page py-12 sm:py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Left: editorial copy */}
          <div className="relative">
            {/* Location pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-surface/[0.03] px-4 py-2 backdrop-blur animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-med">
                Nairobi, Kenya · Available for roles
              </span>
            </div>

            {/* Massive editorial headline */}
            <h1 className="mt-8 font-display text-display leading-[0.9] tracking-[-0.04em] animate-fade-up" style={{ animationDelay: "80ms" }}>
              <span className="block text-ink-high">Security</span>
              <span className="block font-display italic text-ink-high">engineer who</span>
              <span className="block text-gradient">proves it.</span>
            </h1>

            {/* Sub headline with amber accent */}
            <div className="mt-6 flex items-center gap-4 animate-fade-up" style={{ animationDelay: "140ms" }}>
              <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
              <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
                {site.role}
              </p>
            </div>

            <p
              className="mt-8 max-w-[52ch] font-sans text-[18px] leading-[1.6] tracking-[-0.01em] text-ink-med text-pretty animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              I build security-focused software, investigate vulnerabilities in authorized labs, and ship defensive controls that are{" "}
              <span className="relative font-medium text-ink-high">
                implemented and tested
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-accent/20" />
              </span>{" "}
              — not just described.{" "}
              <span className="text-ink-high">{site.tagline}</span>
            </p>

            {/* CTAs - premium rounded */}
            <div
              className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link href="/projects" className="btn-primary group">
                View my work
                <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
              <ExternalLink href={site.github} className="btn-ghost">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="opacity-70">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                GitHub
              </ExternalLink>
              {linkedInHref && (
                <ExternalLink href={linkedInHref} className="btn-ghost">
                  LinkedIn ↗
                </ExternalLink>
              )}
            </div>

            {/* Stats - editorial, not chips */}
            <div
              className="mt-12 grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-8 animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              {[
                { k: "52", v: "tests passing", sub: "json + sqlite" },
                { k: "6/6", v: "attacks detected", sub: "self-run red team" },
                { k: "0", v: "CVEs", sub: "npm audit" },
              ].map((s) => (
                <div key={s.v} className="group">
                  <div className="font-display text-[32px] leading-none tracking-[-0.03em] text-ink-high group-hover:text-accent transition-colors duration-300">
                    {s.k}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-high">
                    {s.v}
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-ink-low">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: console with glass + beam */}
          <div className="relative lg:pl-2">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent/10 via-violet/5 to-transparent blur-2xl rounded-[32px] opacity-60" />
            <div className="relative animate-scale-in" style={{ animationDelay: "200ms" }}>
              <HeroConsole />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 rounded-full bg-surface px-4 py-2.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] animate-float-y">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-high">
                  Live audit · 100% chain intact
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom editorial line */}
        <div className="mt-20 flex items-center gap-4 border-t border-white/[0.04] pt-8 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Trusted pattern</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/[0.06] to-transparent" />
          <span className="font-mono text-[11px] text-ink-faint">RBAC · Four-eyes · HMAC · TOTP · SIEM</span>
        </div>
      </div>
    </section>
  );
}
