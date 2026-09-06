import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { LabPreview } from "@/components/LabPreview";
import { Callout } from "@/components/case-study/CaseSection";
import { labs } from "@/data/labs";

export const metadata: Metadata = {
  title: "Security Lab",
  description:
    "Hands-on cybersecurity exercises by Devine Nyaenya performed in authorized, isolated lab environments — exploitation, network security, Linux privilege escalation, and detection. Write-ups cover scenario, recon, vulnerability, exploitation, privilege escalation, lessons, and mitigation. Not professional penetration tests.",
  alternates: { canonical: "/security-lab" },
  openGraph: {
    title: "Security Lab — Devine Nyaenya",
    description:
      "Hands-on cybersecurity exercises in authorized, isolated labs: recon, exploitation, privilege escalation, and the defensive lessons from each.",
  },
};

function CodeBlock({ code }: { code: { language: string; snippet: string; caption?: string } }) {
  return (
    <figure className="my-4">
      {code.caption && (
        <figcaption className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          {code.caption}
        </figcaption>
      )}
      <pre className="codeblock">
        <code>{code.snippet}</code>
      </pre>
    </figure>
  );
}

export default function SecurityLabPage() {
  return (
    <>
      <div className="border-b border-line-soft bg-tech">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Hands-on security"
            title="Security Lab"
            description="Practical exercises from authorized, intentionally-vulnerable lab environments. Each write-up follows the full chain — scenario, recon, vulnerability, exploitation, privilege escalation, lessons, and mitigation — so the defensive takeaway is the point, not the exploit."
          />
        </div>
      </div>

      <div className="container-page py-14">
        <LabPreview detailed />
      </div>

      {/* Detailed write-ups */}
      <div className="border-t border-line-soft bg-surface/30">
        <div className="container-page py-16">
          {labs.map((lab) => (
            <article
              key={lab.slug}
              id={lab.slug}
              className="scroll-mt-24 border-b border-line-soft py-12 last:border-b-0"
            >
              <div className="mx-auto max-w-3xl">
                <p className="eyebrow">{lab.category} · {lab.difficulty}</p>
                <h2 className="mt-2 text-h2 text-ink-high">{lab.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-med">{lab.summary}</p>

                <Callout variant="warn" title="Environment & authorization">
                  {lab.environment}
                </Callout>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="key-label self-center">Tools:</span>
                  {lab.tools.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                <div className="mt-8 space-y-8">
                  {lab.sections.map((section) => (
                    <section key={section.heading}>
                      <h3 className="text-lg font-semibold text-accent">{section.heading}</h3>
                      <div className="mt-2 space-y-3">
                        {section.body.map((para, i) => (
                          <p key={i} className="text-[15px] leading-relaxed text-ink-med">
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

          <p className="mx-auto mt-10 max-w-3xl text-center font-mono text-xs text-ink-faint">
            More write-ups are being added. All activity shown was conducted in legal,
            isolated training environments with explicit authorization.
          </p>
        </div>
      </div>
    </>
  );
}
