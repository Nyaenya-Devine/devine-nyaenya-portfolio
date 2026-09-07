import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
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

      {/* Featured projects - dark with aurora */}
      <section id="work" className="relative scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-40" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="container-page relative py-16 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Selected work"
                title="Security projects, built and tested"
                description="Real controls, tested — not described. Start with Chokepoint, the most complete build. 52 tests, 6/6 attacks detected, P3 hardened."
              />
              <Link
                href="/projects"
                className="group hidden items-center gap-2 rounded-full border border-white/[0.08] bg-surface/[0.04] px-5 py-2.5 text-[13px] font-medium text-ink-high backdrop-blur transition-all hover:bg-surface hover:text-ink-high sm:inline-flex"
              >
                All projects
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <ProjectsGrid />
          </Reveal>
        </div>
      </section>

      <ConceptMarquee />

      {/* Interactive pipeline - editorial dark */}
      <section className="relative overflow-hidden border-y border-white/[0.06] bg-surface/50 backdrop-blur">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] via-transparent to-violet/[0.02]" />
        <div className="container-page relative py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="How the controls fit together"
              title="One request, six gates"
              description="The pattern behind Chokepoint and the reset lab: no high-impact action happens without passing layered, verifiable controls. Click a stage to inspect the principle — and what breaks if it's missing."
              accent="violet"
            />
          </Reveal>
          <Reveal className="mt-12" delay={120}>
            <SecurityPipeline />
          </Reveal>
        </div>
      </section>

      {/* Control matrix - light paper editorial for contrast */}
      <section className="relative overflow-hidden bg-surface text-ink-high">
        <div className="absolute inset-0 bg-grid-light opacity-[0.04]" />
        <div className="absolute inset-0 bg-surface" />
        <div className="container-page relative py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Proof over claims"
              title="Where each control actually exists"
              description="A single matrix mapping security controls across all three builds, verified against each repository. Implemented, partial, or out of scope — no assumptions. Honest, not marketing."
              accent="amber"
            />
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <div className="rounded-[20px] border border-black/[0.06] bg-surface p-2 shadow-paper">
              <ControlMatrix />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Build timeline - dark */}
      <section className="relative border-y border-white/[0.06] bg-base">
        <div className="absolute inset-0 bg-aurora opacity-20" />
        <div className="container-page relative py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Progression"
              title="The arc of the work"
              description="Three builds, one trajectory: prove the controls in isolation, confront real integration, then productize and harden. P0 → P3, 18 tests → 52 tests."
            />
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <BuildTimeline />
          </Reveal>
        </div>
      </section>

      {/* Security lab - dark with glass */}
      <section className="relative overflow-hidden">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Hands-on security"
                title="Security lab"
                description="Practical exercises in authorized, isolated environments. I learn by breaking systems deliberately, then documenting the fix. TryHackMe, HackTheBox, Cisco labs."
                accent="cyan"
              />
              <Link
                href="/security-lab"
                className="group hidden items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-[13px] font-medium text-ink-high transition-all hover:bg-ink-high sm:inline-flex"
              >
                Open the lab
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <LabPreview />
          </Reveal>
        </div>
      </section>

      {/* Skills - light paper for editorial contrast, cleaner */}
      <section className="relative overflow-hidden border-t border-black/[0.06] bg-surface-2">
        <div className="absolute inset-0 bg-grid-light opacity-[0.03]" />
        <div className="container-page relative py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Skills & training"
              description="Grouped by where I focus — proficiency labels are honest. Security training (led by Cisco) prioritized over broader learning. P3: Argon2id, HMAC, TOTP, SIEM."
              accent="violet"
            />
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <SkillsSection />
          </Reveal>
          <Reveal className="mt-12" delay={140}>
            <CertificationsSection />
          </Reveal>
        </div>
      </section>

      {/* CTA - stunning obsidian with aurora + large serif */}
      <section className="relative overflow-hidden bg-base">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent/10 via-violet/10 to-cyan/10 blur-[80px]" />
        
        <div className="container-page relative py-20 sm:py-32">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center">Let's build secure systems</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-display-sm leading-[0.95] tracking-[-0.03em] text-ink-high">
              Security that's{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient">built and proven</span>
                <span className="absolute bottom-2 left-0 h-[8px] w-full bg-accent/20 -rotate-1" />
              </span>
              , not just promised.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-sans text-[18px] leading-[1.6] tracking-[-0.01em] text-ink-med text-pretty">
              I'm {site.firstName} — a self-taught security builder in {site.location}, focused on application security, access control, and securing AI agents. 52 tests, 6/6 attacks detected, P3 hardened with Argon2id, HMAC, TOTP, SIEM shipping. Open to security engineering and defensive roles.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-[15px] px-8 py-3.5">
                Get in touch
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/projects/chokepoint" className="btn-ghost text-[15px] px-8 py-3.5">
                Explore Chokepoint
              </Link>
            </div>
            
            {/* Trust badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/[0.06] pt-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Trusted pattern:</span>
              <span className="font-mono text-[11px] tracking-[0.08em] text-ink-low">RBAC · Four-eyes · HMAC · TOTP · SIEM · 52 tests</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
