import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "5 projects by Devine Nyaenya — Chokepoint (least-privilege access control & tamper-evident audit, live demo), Android Reset Lab (simulation, 52 tests, 6/6 attacks detected), Android Device Management Tool (experimental dual-mode console — Android Management API integration), EndoPima Kenya (bilingual community-first health-tech), and this Portfolio itself. Built, tested, documented honestly.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero - obsidian with aurora */}
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-aurora opacity-40" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="container-page relative py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="Security projects"
            description="Real implementations over claims. Each project includes the controls, how they were tested, and an honest account of limitations — ordered by depth, starting with Chokepoint. 52 tests, 6/6 attacks detected, P3 hardened."
          />
          
          {/* Trust line */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/[0.04] px-4 py-2 font-mono text-[11px] text-ink-med backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              5 projects · no blanks
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/[0.04] px-4 py-2 font-mono text-[11px] text-ink-med">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              52 + 26 tests
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/[0.04] px-4 py-2 font-mono text-[11px] text-ink-med">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              0 CVEs · strict CSP
            </span>
          </div>
        </div>
      </div>

      <div className="container-page py-12 sm:py-16">
        {/* Info callout - glass premium */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.06] bg-surface/60 p-6 backdrop-blur-xl">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="flex gap-4">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent border border-accent/20">ℹ</span>
            <div>
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-ink-high">How to read these</p>
              <p className="mt-2 font-sans text-[14px] leading-[1.6] text-ink-med">
                Status labels are honest: <strong className="text-ink-high font-medium">Live demo</strong> runs,{" "}
                <strong className="text-ink-high font-medium">Simulation / lab</strong> models a scenario without touching real systems, and{" "}
                <strong className="text-ink-high font-medium">Experimental / WIP</strong> didn't fully achieve its vision. Where something is incomplete, I say so — and what it taught.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <ProjectsGrid />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-[20px] border border-white/[0.06] bg-gradient-to-br from-accent/[0.06] via-violet/[0.03] to-transparent p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-display text-[22px] tracking-[-0.02em] text-ink-high">Want the full story?</p>
              <p className="mt-2 font-sans text-[15px] text-ink-med">How I fixed 15 bugs and cut false positives 14→9, now 52 tests with Argon2id, HMAC, TOTP, SIEM</p>
            </div>
            <a href="https://github.com/Nyaenya-Devine/android-reset-lab/blob/main/ARTICLE.md" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-[13px] font-medium text-ink-high hover:bg-ink-high transition-colors">
              Read article →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
