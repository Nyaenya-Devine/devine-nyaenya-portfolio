import {
  featuredCredentials,
  technicalCredentials,
  additionalCredentials,
  type Credential,
} from "@/data/certifications";

function CredentialCard({ c, featured }: { c: Credential; featured?: boolean }) {
  return (
    <div
      className={`h-full rounded-lg border p-4 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border-accent/30 bg-accent/5 hover:border-accent/60 hover:shadow-glow"
          : "border-line bg-raised/40 hover:border-ink-faint"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className={`text-sm font-semibold ${featured ? "text-ink-high" : "text-ink-med"}`}>
          {c.title}
        </p>
        {featured && (
          <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
            Core
          </span>
        )}
      </div>
      <p className="mt-1 font-mono text-xs text-ink-low">{c.issuer}</p>
      {c.topics && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {c.topics.map((t) => (
            <span key={t} className="chip !text-[10px]">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function CertificationsSection() {
  return (
    <div className="space-y-8">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <span className="dot bg-accent" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-high">
            Cybersecurity &amp; core technical training
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCredentials.map((c) => (
            <CredentialCard key={c.title} c={c} featured />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center gap-2">
          <span className="dot bg-ink-low" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-med">
            Additional technical training
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technicalCredentials.map((c) => (
            <CredentialCard key={c.title} c={c} />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center gap-2">
          <span className="dot bg-ink-faint" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-low">
            Broader learning
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {additionalCredentials.map((c) => (
            <CredentialCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
