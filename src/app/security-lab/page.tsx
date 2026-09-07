import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { LabPreview } from "@/components/LabPreview";
import { labs } from "@/data/labs";

export const metadata: Metadata = {
  title: "Security Lab",
  description:
    "Hands-on cybersecurity exercises by Devine Nyaenya — 52 tests P3 hardened lab, exploitation, network security, Linux privilege escalation, detection. Authorized isolated environments.",
  alternates: { canonical: "/security-lab" },
};

function CodeBlock({ code }: { code: { language: string; snippet: string; caption?: string } }) {
  return (
    <figure className="my-5">
      {code.caption && (
        <figcaption className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          {code.caption}
        </figcaption>
      )}
      <pre className="overflow-x-auto rounded-xl border border-white/[0.06] bg-[#0A110B] p-5 font-mono text-[13px] leading-relaxed text-ink-med">
        <code>{code.snippet}</code>
      </pre>
    </figure>
  );
}

export default function SecurityLabPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-aurora opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="container-page relative py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Hands-on security"
            title="Security Lab"
            description="Practical exercises from authorized, intentionally-vulnerable lab environments. Each write-up follows the full chain — scenario, recon, vulnerability, exploitation, privilege escalation, lessons, and mitigation — so the defensive takeaway is the point, not the exploit. 52 tests, P3 hardened."
            accent="cyan"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/[0.04] px-4 py-2 font-mono text-[11px] text-ink-med">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              Authorized labs only
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/[0.04] px-4 py-2 font-mono text-[11px] text-ink-med">
              TryHackMe · HackTheBox · Cisco
            </span>
          </div>
        </div>
      </div>

      <div className="container-page py-12 sm:py-16">
        <LabPreview detailed />
      </div>

      {/* Detailed write-ups */}
      <div className="border-t border-white/[0.06] bg-surface/30 backdrop-blur">
        <div className="container-page py-16">
          {labs.map((lab) => (
            <article
              key={lab.slug}
              id={lab.slug}
              className="scroll-mt-24 border-b border-white/[0.06] py-12 last:border-b-0"
            >
              <div className="mx-auto max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    {lab.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-surface/[0.04] border border-white/[0.06] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-low">
                    {lab.difficulty}
                  </span>
                </div>
                <h2 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-ink-high">{lab.title}</h2>
                <p className="mt-4 font-sans text-[17px] leading-[1.6] text-ink-med text-pretty">{lab.summary}</p>

                <div className="mt-6 rounded-[12px] border border-green-500/20 bg-green-500/5 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-green-400 mb-2">Environment & authorization</p>
                  <p className="font-sans text-[14px] leading-[1.5] text-ink-med">{lab.environment}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint self-center">Tools:</span>
                  {lab.tools.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full border border-white/[0.06] bg-surface/[0.03] px-2.5 py-1 font-mono text-[11px] text-ink-med">{t}</span>
                  ))}
                </div>

                <div className="mt-10 space-y-10">
                  {lab.sections.map((section) => (
                    <section key={section.heading}>
                      <h3 className="font-display text-[20px] tracking-[-0.01em] text-accent">{section.heading}</h3>
                      <div className="mt-3 space-y-4">
                        {section.body.map((para, i) => (
                          <p key={i} className="font-sans text-[15px] leading-[1.7] text-ink-med text-pretty">
                            {para}
                          </p>
                        ))}
                      </div>
                      {section.code?.map((c, i) => (
                        <CodeBlock key={i} code={c} />
                      ))}
                    </section>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="mx-auto mt-16 max-w-3xl rounded-[16px] border border-white/[0.06] bg-surface/60 p-6 text-center backdrop-blur">
            <p className="font-mono text-[12px] leading-[1.6] text-ink-low">
              More write-ups are being added. All activity shown was conducted in legal, isolated training environments with explicit authorization. P3: 52 tests, Argon2id, HMAC, TOTP, SIEM shipping — honest limitations documented.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
