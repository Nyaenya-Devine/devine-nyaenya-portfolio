/**
 * ConceptMarquee v2 — Obsidian Aurora
 * Premium marquee with amber/violet accents, glass pills
 */
const concepts = [
  "Least privilege",
  "RBAC",
  "Separation of duties",
  "Dual-control approval",
  "Tamper-evident ledger",
  "Hash chaining",
  "HMAC integrity",
  "Anomaly detection",
  "Threat modeling",
  "Secure SDLC",
  "Session hardening",
  "Content Security Policy",
  "Securing AI agents",
  "Defense in depth",
  "Argon2id",
  "TOTP MFA",
  "SIEM shipping",
];

export function ConceptMarquee() {
  const row = [...concepts, ...concepts];
  return (
    <div
      aria-hidden="true"
      className="mask-fade-x relative overflow-hidden border-y border-white/[0.06] bg-surface/30 backdrop-blur py-5"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] via-transparent to-violet/[0.02]" />
      <div className="relative flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/[0.06] bg-surface/[0.03] px-5 py-2 font-mono text-[13px] tracking-[-0.01em] text-ink-med backdrop-blur transition-all duration-300 hover:bg-surface hover:text-ink-high hover:border-white"
          >
            <span className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i % 3 === 0 ? "bg-accent group-hover:bg-black" :
              i % 3 === 1 ? "bg-violet group-hover:bg-black" :
              "bg-cyan group-hover:bg-black"
            }`} />
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
