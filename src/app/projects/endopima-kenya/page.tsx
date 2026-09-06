import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/data/projects";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseSection, Callout } from "@/components/case-study/CaseSection";
import { ExternalLink } from "@/components/ExternalLink";

const project = getProject("endopima-kenya")!;

export const metadata: Metadata = {
  title: "EndoPima Kenya — Case Study",
  description:
    "Bilingual, community-first endometriosis early-recognition and care-navigation prototype for Kenya. Guided symptom exploration, health timeline, clinician handoff, care navigation, cost/financing guidance — privacy-conscious, local-first design.",
  alternates: { canonical: "/projects/endopima-kenya" },
};

export default function EndoPimaPage() {
  return (
    <>
      <CaseHero project={project} />

      <div className="container-page py-12">
        <article className="mx-auto max-w-4xl">
          <CaseSection id="overview" eyebrow="01" title="Overview">
            <p>
              EndoPima Kenya is a bilingual (English / Kiswahili), community-first prototype for
              endometriosis early-recognition and care-navigation in Kenya. It does not diagnose —
              it helps users explore symptoms with guidance, build a health timeline they can hand
              to a clinician, navigate care options, and understand cost and financing, with a
              privacy-conscious, local-first design.
            </p>
            <Callout variant="warn" title="Not a medical device">
              This is an experimental prototype. It does not provide medical diagnosis, treatment
              advice, or replace professional care. It is presented as product-thinking work in a
              sensitive domain — complementary to the security-focused builds.
            </Callout>
            <ExternalLink href={project.github} className="btn-ghost mt-2">
              Source on GitHub
            </ExternalLink>
          </CaseSection>

          <CaseSection id="motivation" eyebrow="02" title="Why I built it">
            <p>
              Security engineering teaches you to think about harm, trust, and edge cases. Health-tech
              forces the same discipline but with different stakes: privacy, language, access, cost,
              and community trust. EndoPima was a deliberate step outside security to practice
              product thinking in a sensitive domain — how to guide without diagnosing, how to
              respect privacy when the topic is stigmatized, how to design bilingual UX that feels
              native not translated, and how to connect users to care rather than keep them in an app.
            </p>
          </CaseSection>

          <CaseSection id="approach" eyebrow="03" title="The approach">
            <p>Core flows explored:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Guided symptom exploration with non-diagnostic language and clear escalation cues.",
                "Health timeline builder — period, pain, impact — exportable for clinician handoff.",
                "Care navigation: what levels of care exist, what to expect, how to prepare.",
                "Cost & financing guidance — honest about barriers, not pretending they don't exist.",
                "Bilingual UX (EN/SW) and community-first tone, built for Kenya context.",
                "Privacy-conscious, local-first — minimize data collection by design.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 text-sm text-ink-med">
                  <span aria-hidden="true" className="mt-1 text-accent">▹</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection id="lessons" eyebrow="04" title="What it taught">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Bilingual UX is not translation", body: "Direct translation breaks tone and trust. EN/SW had to be written for each language, not converted." },
                { title: "Privacy by design in health", body: "When topic is stigmatized, minimizing data and keeping it local is a feature, not a limitation." },
                { title: "Care navigation > app retention", body: "Success is user leaving the app to see a clinician with better information, not staying longer." },
                { title: "Community-first product", body: "Building with community health context — cost, distance, language, trust — changes every design decision." },
              ].map((l) => (
                <div key={l.title} className="panel p-4">
                  <p className="text-sm font-semibold text-ink-high">{l.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-med">{l.body}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="place" eyebrow="05" title="Where it fits">
            <p>
              Security projects prove you can build controls that withstand abuse. EndoPima proves
              you can think about harm, privacy, and trust in a completely different domain — health.
              Both require honesty about limitations. This prototype sits alongside{" "}
              <Link href="/projects/chokepoint" className="text-accent hover:underline">Chokepoint</Link> and{" "}
              <Link href="/projects/android-reset-lab" className="text-accent hover:underline">Android Reset Lab</Link>{" "}
              as evidence of range: security engineering plus product thinking for Kenya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                All projects →
              </Link>
              <Link href="https://github.com/Nyaenya-Devine/endopima-kenya" target="_blank" className="btn-ghost">
                GitHub
              </Link>
            </div>
          </CaseSection>
        </article>
      </div>
    </>
  );
}
