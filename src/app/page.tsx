import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { ProjectWindows } from "@/components/home/ProjectWindows";
import { SecurityPipeline } from "@/components/SecurityPipeline";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { LabPreview } from "@/components/LabPreview";
import { ControlMatrix } from "@/components/home/ControlMatrix";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* PROJECT WINDOWS — the main focus */}
      <section id="projects" className="scroll-mt-20">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Selected work"
                title="My projects — click to open"
                description="Real security controls, built and tested. Tap any window to go straight into that project's case study."
              />
              <Link href="/projects" className="hidden text-sm font-semibold text-accent hover:text-accent-soft sm:inline-block">
                All projects →
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <ProjectWindows />
          </Reveal>
        </div>
      </section>

      {/* Interactive control flow */}
      <section className="border-y border-line-soft bg-surface/40">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="How it works"
              title="One request, six gates"
              description="No high-impact action happens without passing layered, verifiable controls. Click a stage to see the principle — and what breaks if it fails."
            />
          </Reveal>
          <Reveal className="mt-8" delay={100}>
            <SecurityPipeline />
          </Reveal>
        </div>
      </section>

      {/* Control coverage */}
      <section>
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Proof over claims"
              title="Where each control exists"
              description="Security controls mapped across the builds — implemented, partial, or out of scope, verified against each repo."
            />
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <ControlMatrix />
          </Reveal>
        </div>
      </section>

      {/* Skills + certifications */}
      <section className="border-t border-line-soft bg-surface/40">
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills & training"
              description="Grouped by where I focus, with honest proficiency labels. Security training, led by the Cisco curriculum, is prioritized."
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

      {/* Security lab teaser */}
      <section>
        <div className="container-page py-12 sm:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Hands-on security"
                title="Security lab"
                description="Practical exercises in authorized, isolated environments — recon, exploitation, privilege escalation, and the fix for each."
              />
              <Link href="/security-lab" className="hidden text-sm font-semibold text-accent hover:text-accent-soft sm:inline-block">
                Open the lab →
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <LabPreview />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line-soft bg-surface/50">
        <div className="container-page py-14 text-center sm:py-16">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.01em] text-ink-high sm:text-4xl">
              Security that's <span className="text-gradient">built and proven</span>
            </h2>
            <p className="mx-auto mt-4 text-ink-med">
              I'm {site.firstName}, a self-taught security builder in {site.location} —
              focused on application security, access control, and securing AI agents.
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
