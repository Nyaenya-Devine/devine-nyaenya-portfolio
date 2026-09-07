import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { ExternalLink } from "@/components/ExternalLink";
import { site, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Devine Nyaenya — cybersecurity and security engineering, 52 tests P3 hardened. Open to security engineering and SOC/defensive roles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const configured = socialLinks.filter((l) => l.configured);

  return (
    <>
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-aurora opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="container-page relative py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let's talk security"
            description="I'm open to security engineering, application security, SOC/defensive, and security-automation opportunities — and to collaborating on security tooling. 52 tests, P3 hardened, honest limitations documented."
          />
        </div>
      </div>

      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Channels */}
          <div className="space-y-6">
            <div className="rounded-[16px] border border-white/[0.06] bg-surface/80 p-6 backdrop-blur-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">Direct channels</p>
              <ul className="space-y-4">
                {configured.map((link) => (
                  <li key={link.label} className="group flex items-center justify-between gap-3 border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-sans text-[14px] font-medium text-ink-high group-hover:text-white transition-colors">{link.label}</p>
                      <p className="font-mono text-[12px] text-ink-low">{link.handle}</p>
                    </div>
                    {link.external ? (
                      <ExternalLink href={link.href} className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-surface/[0.04] px-3 py-1.5 text-[12px] font-medium text-ink-high hover:bg-surface hover:text-ink-high transition-all">
                        Open ↗
                      </ExternalLink>
                    ) : (
                      <a href={link.href} className="inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-[12px] font-medium text-ink-high hover:bg-ink-high transition-colors">
                        Email
                      </a>
                    )}
                  </li>
                ))}

                {socialLinks.filter((l) => !l.configured).map((link) => (
                  <li key={link.label} className="flex items-center justify-between gap-3 border-b border-white/[0.04] pb-4 last:border-0 last:pb-0 opacity-60">
                    <div>
                      <p className="font-sans text-[14px] font-medium text-ink-faint">{link.label}</p>
                      <p className="font-mono text-[11px] text-ink-faint">{link.handle}</p>
                    </div>
                    <span className="rounded-full border border-dashed border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
                      Not set
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[16px] border border-white/[0.06] bg-surface/80 p-6 backdrop-blur-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet-soft mb-4">What I'm looking for</p>
              <ul className="space-y-3">
                {[
                  "Security engineering & application security roles",
                  "SOC / defensive security and detection work",
                  "Security automation and tooling with Python (52 tests)",
                  "Junior / entry-level where I can build and learn fast",
                  "Open to Nairobi / Remote, P3 hardened portfolio",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[14px] leading-[1.5] text-ink-med">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[16px] bg-gradient-to-br from-accent/[0.08] to-violet/[0.08] border border-accent/10 p-6">
              <p className="font-display text-[18px] text-ink-high">Response time</p>
              <p className="mt-2 font-sans text-[14px] leading-[1.5] text-ink-med">I usually respond within 24 hours. For urgent security roles, LinkedIn DM is fastest. All code is public: 52 tests, 6/6 detection, honest limitations.</p>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/5 via-violet/5 to-transparent blur-2xl rounded-[24px]" />
            <div className="relative rounded-[20px] border border-white/[0.06] bg-surface/80 p-1 backdrop-blur-xl shadow-card">
              <div className="rounded-[16px] bg-base p-6">
                <ContactForm />
                {!site.email && (
                  <p className="mt-4 text-center font-mono text-[11px] text-ink-faint">
                    Tip: set <code className="rounded bg-surface/[0.06] px-1.5 py-0.5">NEXT_PUBLIC_CONTACT_EMAIL</code> in <code className="rounded bg-surface/[0.06] px-1.5 py-0.5">.env.local</code> to enable direct email.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
