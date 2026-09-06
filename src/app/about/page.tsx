import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Methodology } from "@/components/home/Methodology";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Devine Nyaenya is a self-taught, hands-on cybersecurity and security-engineering builder based in Kenya. He learns by building security systems, testing them, breaking them in authorized labs, and hardening what survives — with a focus on application security, access control, and securing AI agents.",
  alternates: { canonical: "/about" },
};

const focus = [
  "Application security & secure software development",
  "Access control: authentication, authorization, RBAC, least privilege",
  "Tamper-evident logging and audit integrity",
  "Threat modeling and security testing",
  "Security automation with Python",
  "Linux and network security",
  "AI security — identity and privilege abuse in autonomous agents",
];

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-line-soft bg-tech">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="I learn security by building, testing, and breaking things."
          />
        </div>
      </div>

      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article className="space-y-5 text-[15px] leading-relaxed text-ink-med">
            <p>
              I&apos;m <span className="text-ink-high font-semibold">Devine Nyaenya</span>,
              a self-taught security builder based in {site.location}. I&apos;m developing
              my career in <span className="text-ink-high">cybersecurity and security
              engineering</span> — not by collecting theory alone, but by actually building
              security-focused software, testing its assumptions, breaking it in authorized
              labs, and hardening what survives.
            </p>
            <p>
              My path has been deliberately hands-on. Through Cisco&apos;s cybersecurity
              curriculum and a long string of practical projects, I&apos;ve focused on the
              problems that make systems safe in practice: how you authenticate and authorize
              actors, how you enforce least privilege and separation of duties, and how you
              keep an audit trail that cannot be silently rewritten.
            </p>
            <p>
              My strongest project,{" "}
              <Link href="/projects/chokepoint" className="text-accent hover:underline">
                Chokepoint
              </Link>
              , is a least-privilege access-control and tamper-evident audit platform for
              high-impact operations — for both humans and AI agents. It grew out of an earlier{" "}
              <Link href="/projects/android-reset-lab" className="text-accent hover:underline">
                security simulation lab
              </Link>{" "}
              where I first proved these controls by attacking my own design. Alongside them I
              work through hands-on labs — recon, exploitation, Linux privilege escalation, and
              network analysis — always in environments I&apos;m explicitly allowed to test.
            </p>
            <p>
              I care especially about the frontier of{" "}
              <span className="text-ink-high">securing autonomous AI agents</span>: as agents
              start acting with borrowed human authority, identity and privilege abuse becomes
              one of the most important security problems in software. Chokepoint is built
              around exactly that question.
            </p>
            <p>
              When a project is incomplete, I say so. I&apos;d rather show an honest work-in-progress
              with real lessons than a polished overclaim — in security, overstating a control is
              itself a vulnerability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">See my projects</Link>
              <Link href="/contact" className="btn-ghost">Get in touch</Link>
              <ExternalLink href={site.github} className="btn-ghost">GitHub</ExternalLink>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card p-6">
              <p className="key-label mb-4">Current focus</p>
              <ul className="space-y-2.5">
                {focus.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-ink-med">
                    <span aria-hidden="true" className="mt-1 text-accent">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <p className="key-label mb-3">Background</p>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-ink-faint">Location</dt>
                  <dd className="text-ink-high">{site.location}</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Approach</dt>
                  <dd className="text-ink-high">Self-taught, project-driven, hands-on</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Training foundation</dt>
                  <dd className="text-ink-high">Cisco cybersecurity curriculum + applied labs</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Primary stack</dt>
                  <dd className="text-ink-high">Python · TypeScript · Next.js · Linux</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>

      <Methodology />
    </>
  );
}
