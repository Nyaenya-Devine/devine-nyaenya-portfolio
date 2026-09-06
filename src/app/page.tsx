import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { Methodology } from "@/components/home/Methodology";
import { ConceptMarquee } from "@/components/home/ConceptMarquee";
import { ControlMatrix } from "@/components/home/ControlMatrix";
import { BuildTimeline } from "@/components/home/BuildTimeline";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { LabPreview } from "@/components/LabPreview";
import { SecurityPipeline } from "@/components/SecurityPipeline";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* Featured projects */}
      <section id="work" className="scroll-mt-20">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Selected work"
                title="Security projects, built and tested"
                description="Real controls, tested — not described. Start with Chokepoint, the most complete build."
              />
              <Link
                href="/projects"
                className="hidden text-sm font-semibold text-accent hover:text-accent-soft sm:inline-block"
              >
                All projects →
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <ProjectsGrid />
          </Reveal>
        </div>
      </section>

      <ConceptMarquee />

      {/* Interactive signature feature */}
      <section className="bg-surface/30">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="How the controls fit together"
              title="One request, six gates"
              description="The pattern behind Chokepoint and the reset lab: no high-impact action happens without passing layered, verifiable controls. Click a stage to inspect the principle — and what breaks if it's missing."
            />
          </Reveal>
          <Reveal className="mt-8" delay={100}>
            <SecurityPipeline />
          </Reveal>
        </div>
      </section>

      {/* Control coverage matrix */}
      <section>
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Proof over claims"
              title="Where each control actually exists"
              description="A single matrix mapping security controls across all three builds, verified against each repository. Implemented, partial, or out of scope — no assumptions."
            />
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <ControlMatrix />
          </Reveal>
        </div>
      </section>

      {/* Build progression */}
      <section className="border-y border-line-soft bg-surface/30">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Progression"
              title="The arc of the work"
              description="Three builds, one trajectory: prove the controls in isolation, confront real integration, then productize and harden."
            />
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <BuildTimeline />
          </Reveal>
        </div>
      </section>

      {/* Security lab */}
      <section>
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Hands-on security"
                title="Security lab"
                description="Practical exercises in authorized, isolated environments. I learn by breaking systems deliberately, then documenting the fix."
              />
              <Link
                href="/security-lab"
                className="hidden text-sm font-semibold text-accent hover:text-accent-soft sm:inline-block"
              >
                Open the lab →
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <LabPreview />
          </Reveal>
        </div>
      </section>

      {/* Skills + certifications, denser two-tier block */}
      <section className="border-t border-line-soft bg-surface/30">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills & training"
              description="Grouped by where I focus — proficiency labels are honest. Security training (led by the Cisco curriculum) is prioritized over broader learning."
            />
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <SkillsSection />
          </Reveal>
          <Reveal className="mt-10" delay={120}>
            <CertificationsSection />
          </Reveal>
        </div>
      </section>

      {/* Compact CTA band */}
      <section className="bg-tech">
        <div className="container-page py-14 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Let's build secure systems</p>
            <h2 className="mt-3 text-h2 text-ink-high">
              Security that's <span className="text-accent">built and proven</span>, not just promised.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-med">
              I'm {site.firstName} — a self-taught security builder in {site.location}, focused on
              application security, access control, and securing AI agents. Open to security
              engineering and defensive roles.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">Get in touch</Link>
              <Link href="/projects/chokepoint" className="btn-ghost">Explore Chokepoint</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
