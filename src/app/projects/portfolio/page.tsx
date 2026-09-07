import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/data/projects";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseSection } from "@/components/case-study/CaseSection";
import { ExternalLink } from "@/components/ExternalLink";

const project = getProject("portfolio")!;

export const metadata: Metadata = {
  title: "Portfolio — Obsidian Aurora Redesign — Case Study",
  description:
    "This portfolio itself: Next.js 16 + TypeScript + Tailwind, redesigned from basic dark+teal to stunning Obsidian Aurora editorial — amber #34D96B + violet #10B981, Instrument Serif, glass + noise + aurora, rounded-full pills, no blank spaces, 14/14 static pages.",
  alternates: { canonical: "/projects/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <CaseHero project={project} />

      <div className="container-page py-12">
        <article className="mx-auto max-w-4xl">
          <CaseSection id="overview" eyebrow="01" title="Overview">
            <p>
              This site is a project. It started as a common dark charcoal + teal developer portfolio —
              functional but visually indistinguishable. The brief was: <em>make it stunning, not basic</em>,
              like a professional cleaner had been through it. The result is Obsidian Aurora Editorial:
              obsidian #070C09 + warm paper #0D1410 contrast, amber #34D96B signal + violet #10B981 depth,
              Instrument Serif display + Geist Sans body + Geist Mono technical, glass blur cards with
              border beams, aurora radial gradients, noise texture, rounded-full pills, editorial whitespace.
            </p>
            <ExternalLink href={project.github} className="btn-ghost mt-2">
              Source on GitHub
            </ExternalLink>
          </CaseSection>

          <CaseSection id="before-after" eyebrow="02" title="Before → After">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="panel p-5">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-low">Before</p>
                <p className="mt-2 text-[14px] font-medium text-ink-high">Dark + teal common</p>
                <ul className="mt-3 space-y-1.5 text-[13px] text-ink-med">
                  <li>• Slate-950 + emerald — every portfolio uses it</li>
                  <li>• Flat cards, no depth</li>
                  <li>• Blank spaces on inner pages</li>
                  <li>• No editorial system</li>
                </ul>
              </div>
              <div className="panel p-5 border-accent/20 bg-accent/[0.04]">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent">After — Obsidian Aurora</p>
                <p className="mt-2 text-[14px] font-medium text-ink-high">Editorial stunning</p>
                <ul className="mt-3 space-y-1.5 text-[13px] text-ink-med">
                  <li>• Obsidian #070C09 + paper #0D1410 + amber + violet</li>
                  <li>• Glass blur 20px + top beam + hover -y-2</li>
                  <li>• No blanks — every space filled intentionally</li>
                  <li>• Instrument Serif + grid 64px + noise + aurora</li>
                </ul>
              </div>
            </div>
          </CaseSection>

          <CaseSection id="system" eyebrow="03" title="Design system">
            <p>Tokens that make it consistent across portfolio, chokepoint, device-mgmt, resume:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Colors", v: "#070C09 obsidian, #0D1410 paper, #34D96B amber, #10B981 violet, #2DD4A7 cyan" },
                { k: "Typography", v: "Instrument Serif display 400, Inter sans, Geist Mono mono 11px tracking" },
                { k: "Surfaces", v: "Glass rgba 16,16,18 0.8 blur 20px rounded 16px/20px/999px, border white 6%" },
                { k: "Effects", v: "Aurora radial 10%/8%/5% blur 40px, grid 64px 2%, noise grain, beam amber 20%" },
                { k: "Motion", v: "Hover -y-2 to -y-4, translateX 2px, 200ms ease, pulse-dot" },
                { k: "Layout", v: "Container 1280px, 12-col, editorial whitespace, no blank spaces" },
              ].map((s) => (
                <div key={s.k} className="panel p-4">
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-low">{s.k}</p>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-ink-med">{s.v}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="polish" eyebrow="04" title="Polish — no blank spaces">
            <p>
              The second brief was about blank spaces. Every inner page was audited: about, projects,
              security-lab, contact. Where a space existed for a reason, content was added — trust pills,
              methodology, callouts with amber beams, glass cards, bottom CTAs with gradient. Where it was
              accidental, layout was tightened. Result: 14/14 static pages, 0 empty sections.
            </p>
          </CaseSection>

          <CaseSection id="stack" eyebrow="05" title="Stack & delivery">
            <p>
              Next.js 16 App Router, TypeScript, Tailwind CSS, Instrument Serif + Inter + Geist Mono,
              Vercel deploy, 14 static pages, 0 CVEs, PWA manifest. Same theme applied to{" "}
              <Link href="/projects/chokepoint" className="text-accent hover:underline">chokepoint</Link>,{" "}
              <Link href="/projects/android-device-management-tool" className="text-accent hover:underline">device-mgmt</Link>,
              resume Netlify, and github.io — consistent across all properties.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                Back to home →
              </Link>
              <Link href="/projects" className="btn-ghost">
                All projects
              </Link>
            </div>
          </CaseSection>
        </article>
      </div>
    </>
  );
}
