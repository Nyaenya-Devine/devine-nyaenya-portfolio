import type { Metadata } from "next";
import Link from "next/link";
import { getProject } from "@/data/projects";
import { CaseHero } from "@/components/case-study/CaseHero";
import { CaseSection, Callout } from "@/components/case-study/CaseSection";
import { ExternalLink } from "@/components/ExternalLink";

const project = getProject("android-device-management-tool")!;

export const metadata: Metadata = {
  title: "Android Device Management Tool — Case Study",
  description:
    "An experimental work-in-progress attempt to evolve the Android Reset Lab into a realistic Android Enterprise device-management web app with Next.js and TypeScript. It does not remotely factory-reset real devices — an honest account of full-stack integration challenges and what an incomplete build taught.",
  alternates: { canonical: "/projects/android-device-management-tool" },
};

const learned = [
  {
    title: "Full-stack architecture",
    body: "Building a real web app — UI, APIs, and a database together — meant designing data models and request boundaries that a self-contained simulation never required.",
  },
  {
    title: "Android Enterprise concepts",
    body: "Researching how device management actually works (enrollment, device states, management APIs) clarified the gap between simulating a reset in a file and orchestrating one through a platform.",
  },
  {
    title: "Security at the edges",
    body: "Auth, authorization, and input validation had to be enforced at API boundaries rather than inside one trusted program — a genuinely different and harder problem.",
  },
  {
    title: "Integration is the hard part",
    body: "The security controls that were straightforward in a controlled simulation became messy once real services, persistence, and external platform constraints were involved.",
  },
  {
    title: "Honest scope",
    body: "Learning to say clearly what a project does not do is itself an engineering skill — and one that matters in security, where overclaiming capability is a risk.",
  },
];

export default function AndroidDeviceManagementPage() {
  return (
    <>
      <CaseHero project={project} />

      <div className="container-page py-12">
        <article className="mx-auto max-w-4xl">
          <CaseSection id="overview" eyebrow="01" title="Overview">
            <p>
              After the reset lab proved the security controls in isolation, this
              project attempted to carry them into a more realistic product surface: a
              modern web application for Android Enterprise device management, built
              with Next.js and TypeScript and backed by a database.
            </p>
            <Callout variant="warn" title="What this project is — and is not">
              This is an <strong>experimental, work-in-progress</strong> build. It does{" "}
              <strong>not</strong> remotely factory-reset, enroll, or control arbitrary
              Android devices, and it is not a production MDM. It is presented honestly
              as an incomplete attempt, because the integration lessons are the value.
            </Callout>
            <ExternalLink href={project.github} className="btn-ghost mt-2">
              Source on GitHub
            </ExternalLink>
          </CaseSection>

          <CaseSection id="motivation" eyebrow="02" title="Why I built it">
            <p>
              The reset lab was deliberately self-contained: Python standard library,
              simulated state, no real devices. That made it a clean place to prove
              controls, but it left an obvious question unanswered —{" "}
              <em>what happens when these controls meet a real product stack?</em> This
              project was the attempt to find out: a full-stack web app with a real
              frontend, API layer, and persistence, aimed at the shape of an Android
              Enterprise management tool.
            </p>
          </CaseSection>

          <CaseSection id="approach" eyebrow="03" title="The approach">
            <p>The project aimed to combine three layers:</p>
            <ul className="mt-3 space-y-2">
              {[
                "A Next.js / TypeScript / React front-end for device and request management.",
                "An API layer enforcing authentication and authorization at the boundary.",
                "A database for users, devices, requests, and audit records.",
                "Security concepts carried over from the lab: roles, approval, and audit logging.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 text-sm text-ink-med">
                  <span aria-hidden="true" className="mt-1 text-accent">▹</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection id="reality" eyebrow="04" title="Where it fell short">
            <p>
              The original vision — a fully functional remote enterprise-management
              system — was not achieved. Real Android device control depends on platform
              enrollment, management APIs, and infrastructure that are far outside the
              scope of a portfolio build, and wiring a database-backed web app to a
              genuine device-management backend surfaced integration complexity that the
              simulation deliberately avoided.
            </p>
            <p>Rather than overstate it, I treated the gap as the deliverable:</p>
            <ul className="mt-3 space-y-2">
              {[
                "It does not manage or wipe real devices — that path requires real Android Enterprise integration.",
                "Full-stack auth/authz across API boundaries is harder than in-process checks and needs more work to harden.",
                "Persistence, state management, and external integration each add failure modes a simulation never sees.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 text-sm text-ink-med">
                  <span aria-hidden="true" className="mt-1 text-warn">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection id="lessons" eyebrow="05" title="What it taught">
            <div className="grid gap-3 sm:grid-cols-2">
              {learned.map((l) => (
                <div key={l.title} className="panel p-4">
                  <p className="text-sm font-semibold text-ink-high">{l.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-med">{l.body}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="place" eyebrow="06" title="Where it fits in the progression">
            <p>
              This project sits deliberately in the middle of a learning arc:{" "}
              <Link href="/projects/android-reset-lab" className="text-accent hover:underline">
                Android Reset Lab
              </Link>{" "}
              proved the security controls in a tight, well-tested simulation; this tool
              tested whether I could carry them into a realistic full-stack stack and
              showed me where the real difficulty lives;{" "}
              <Link href="/projects/chokepoint" className="text-accent hover:underline">
                Chokepoint
              </Link>{" "}
              then applied those lessons to a focused, complete, deployable security
              product. The incomplete build was not wasted — it is the reason the
              complete one is better scoped.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects/chokepoint" className="btn-primary">
                See Chokepoint, the complete build →
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
