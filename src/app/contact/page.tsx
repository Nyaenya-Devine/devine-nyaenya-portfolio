import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { ExternalLink } from "@/components/ExternalLink";
import { site, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Devine Nyaenya — cybersecurity and security engineering, application security, access control, and security automation. Available for security engineering and SOC/defensive roles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const configured = socialLinks.filter((l) => l.configured);

  return (
    <>
      <div className="border-b border-line-soft bg-tech">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let's talk security"
            description="I'm open to security engineering, application security, SOC/defensive, and security-automation opportunities — and to collaborating on security tooling. Reach out through any of the channels below."
          />
        </div>
      </div>

      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Channels */}
          <div className="space-y-4">
            <div className="card p-6">
              <p className="key-label mb-4">Direct channels</p>
              <ul className="space-y-3">
                {configured.map((link) => (
                  <li key={link.label} className="flex items-center justify-between gap-3 border-b border-line-soft pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-ink-high">{link.label}</p>
                      <p className="text-xs text-ink-low">{link.handle}</p>
                    </div>
                    {link.external ? (
                      <ExternalLink href={link.href} className="text-sm font-semibold text-accent hover:text-accent-soft">
                        Open
                      </ExternalLink>
                    ) : (
                      <a href={link.href} className="text-sm font-semibold text-accent hover:text-accent-soft">
                        Email
                      </a>
                    )}
                  </li>
                ))}

                {/* Explicit placeholders for anything not configured */}
                {socialLinks.filter((l) => !l.configured).map((link) => (
                  <li key={link.label} className="flex items-center justify-between gap-3 border-b border-line-soft pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-ink-faint">{link.label}</p>
                      <p className="text-xs text-ink-faint">{link.handle}</p>
                    </div>
                    <span className="rounded-full border border-dashed border-line px-2.5 py-1 font-mono text-[10px] uppercase text-ink-faint">
                      Not set
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <p className="key-label mb-2">What I'm looking for</p>
              <ul className="space-y-2 text-sm text-ink-med">
                {[
                  "Security engineering & application security roles",
                  "SOC / defensive security and detection work",
                  "Security automation and tooling with Python",
                  "Junior / entry-level opportunities where I can build and learn fast",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-1 text-accent">▸</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
            {!site.email && (
              <p className="mt-3 text-center text-xs text-ink-faint">
                Tip: set <code className="inline-code">NEXT_PUBLIC_CONTACT_EMAIL</code> in{" "}
                <code className="inline-code">.env.local</code> to enable direct email.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
