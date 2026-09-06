import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Methodology } from "@/components/home/Methodology";
import { ConceptMarquee } from "@/components/home/ConceptMarquee";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { LabPreview } from "@/components/LabPreview";
import { SecurityPipeline } from "@/components/SecurityPipeline";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Methodology />
      <ConceptMarquee />

      {/* Featured projects */}
      <section id="work" className="scroll-mt-20">
        <div className="container-page py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Security projects, built and tested"
              description="Each project implements real controls and is tested — not just described. Start with Chokepoint, the most complete security-engineering build."
            />
            <Link
              href="/projects"
              className="hidden text-sm font-semibold text-accent hover:text-accent-soft sm:inline-block"
            >
              All projects →
            </Link>
          </div>
          <Reveal className="mt-10">
            <ProjectsGrid />
          </Reveal>
        </div>
      </section>

      {/* Interactive signature feature */}
      <section className="border-y border-line-soft bg-surface/30">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How the controls fit together"
              title="One request, six gates"
              description="The core pattern behind Chokepoint and the reset lab: no high-impact action happens without passing through layered, verifiable controls. Click through the path to see the principle at each stage — and what breaks if it's missing."
            />
          </Reveal>
          <Reveal className="mt-10" delay={120}>
            <SecurityPipeline />
          </Reveal>
        </div>
      </section>

      {/* Security lab */}
      <section>
        <div className="container-page py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Hands-on security"
              title="Security lab"
              description="Practical exercises in authorized, isolated environments — exploitation, network analysis, privilege escalation, and detection. I learn by breaking systems deliberately, then documenting the fix."
            />
            <Link
              href="/security-lab"
              className="hidden text-sm font-semibold text-accent hover:text-accent-soft sm:inline-block"
            >
              Open the lab →
            </Link>
          </div>
          <Reveal className="mt-10">
            <LabPreview />
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-line-soft bg-surface/30">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills, grouped by where I focus"
              description="Labels reflect current context — what I build with daily versus what I apply in labs — rather than claiming expert mastery of everything."
            />
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <SkillsSection />
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Training"
              title="Certifications & learning"
              description="Security and core technical training — led by the Cisco cybersecurity curriculum — with broader learning listed separately."
            />
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <CertificationsSection />
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-line-soft bg-tech">
        <div className="container-page py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About"
                title="A builder who learns by doing"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-ink-med text-pretty">
                I&apos;m a self-taught, hands-on security builder based in Kenya.
                Rather than only studying theory, I build security systems, test
                their assumptions, attack my own designs, and harden what survives.
                My focus is application security, access control, and security
                engineering — including the emerging problem of securing
                autonomous AI agents.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/about" className="btn-ghost">
                  More about me
                </Link>
                <Link href="/contact" className="btn-primary">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
