/**
 * A slow, infinite marquee of the security concepts across the work. Pure CSS
 * animation (translateX), edge-faded with a mask, pauses on hover, and is
 * disabled for reduced-motion users via the global animation kill-switch.
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
];

export function ConceptMarquee() {
  const row = [...concepts, ...concepts];
  return (
    <div
      aria-hidden="true"
      className="mask-fade-x relative overflow-hidden border-y border-line-soft bg-raised/30 py-4"
    >
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-line bg-surface/60 px-4 py-1.5 font-mono text-[13px] text-ink-low"
          >
            <span className="h-1 w-1 rounded-full bg-accent/70" />
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
