import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/data/projects";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseSection } from "@/components/case-study/CaseSection";
import { ExternalLink } from "@/components/ExternalLink";

const project = getProject("portfolio")!;

export const metadata: Metadata = {
  title: "Portfolio — Design + Build — Case Study",
  description:
    "This portfolio itself: Next.js 16 + TypeScript + Tailwind. Accessibility-driven dark-green design — luminous gradients, mixed fonts, subtle falling-code background, clickable project windows, strict CSP, 16 routes, 0 CVEs.",
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
              A security portfolio is judged twice: by what it claims and by how
              it behaves. So this site is treated like a small security product —
              every claim is backed by a repo or an authorized-lab write-up, and
              the design exists to make honest engineering readable, not to
              distract from it.
            </p>
            <p className="mt-4">
              The build follows the site's own methodology —{" "}
              <em>build → test → break → learn → secure</em> — including two
              full design passes after launch: a green-accent rebuild of the
              five-project catalogue, and an accessibility pass that removed
              low-contrast gradient words and rebuilt the home page around
              large clickable project windows.
            </p>
            <ExternalLink href={project.github} className="btn-ghost mt-2">
              Source on GitHub
            </ExternalLink>
          </CaseSection>

          <CaseSection id="principles" eyebrow="02" title="Design principles">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="panel p-5">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-low">Visible by default</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-med">
                  Content never starts hidden. Scroll animations are
                  progressive enhancement — text and cards are fully readable
                  even if JavaScript never runs. An early deployed bug that
                  blanked the home page drove this rule.
                </p>
              </div>
              <div className="panel p-5">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-low">Readable on green</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-med">
                  Green-on-green fails when anchors are dark. Every gradient
                  stop is luminous (mint → green → teal, ≥8:1), small labels
                  use bright mint, and meta text sits above WCAG minimums.
                </p>
              </div>
              <div className="panel p-5">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-low">Animated but calm</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-med">
                  The falling-code canvas is sparse, low-opacity, fixed behind
                  content and off for reduced-motion. Decoration never
                  competes with the words.
                </p>
              </div>
              <div className="panel p-5">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-low">Honest statuses</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-med">
                  Every project carries a truthful status — Live demo,
                  Simulation / lab, or Experimental / WIP — and the copy states
                  exactly what was and wasn't achieved.
                </p>
              </div>
            </div>
          </CaseSection>

          <CaseSection id="system" eyebrow="03" title="Design system">
            <p>A small, consistent system across the whole site:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { k: "Colors", v: "#070C09 base, #0D1410 surface, #34D96B accent, mint #74EC9D for small text, teal depth" },
                { k: "Typography", v: "Fraunces variable serif (display, 400–700), Inter (body), JetBrains Mono (technical)" },
                { k: "Type roles", v: "Serif only at display sizes; sans for reading; mono for labels, chips, eyebrows" },
                { k: "Effects", v: "Grain + faint grid + soft glows; film noise overlay kept at 3%" },
                { k: "Motion", v: "Reveal 700ms ease, hover lifts, ping/ring on status dots; reduced-motion respected" },
                { k: "Security", v: "Strict CSP, no external assets, self-hosted fonts, canvas-only animation" },
              ].map((s) => (
                <div key={s.k} className="panel p-4">
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-low">{s.k}</p>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-ink-med">{s.v}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="polish" eyebrow="04" title="Readability pass — the details">
            <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink-med">
              <li>• Gradient display text ships a solid-color fallback — it can never render invisible.</li>
              <li>• Headings use a variable serif with true weights (no synthetic bold).</li>
              <li>• The code-rain canvas sits behind a readability scrim at <code className="font-mono text-[13px]">-z-10</code>.</li>
              <li>• Every route verified 200 locally and in production; audit + CI green.</li>
            </ul>
          </CaseSection>

          <CaseSection id="stack" eyebrow="05" title="Stack & delivery">
            <p>
              Next.js 16 App Router, TypeScript, Tailwind CSS, self-hosted
              Fraunces + Inter + JetBrains Mono, Vercel deploy with CI, strict
              CSP via proxy, 16 routes, 0 CVEs.
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
