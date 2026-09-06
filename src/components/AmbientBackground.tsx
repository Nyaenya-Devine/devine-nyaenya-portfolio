/**
 * Ambient Background v2 — Obsidian Aurora Editorial
 * Stunning, not basic: deep obsidian with aurora amber+vilet+cyan gradients,
 * subtle grid, grain noise, and vignette. Purely decorative, GPU-cheap.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      {/* Deep obsidian base */}
      <div className="absolute inset-0 bg-base" />

      {/* Aurora — amber + violet + cyan, animated */}
      <div
        className="absolute -top-[30%] left-1/2 h-[120%] w-[140%] -translate-x-1/2 animate-aurora opacity-[0.6]"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 20% 20%, rgba(255,178,36,0.15), transparent 60%),
            radial-gradient(ellipse 40% 50% at 80% 25%, rgba(139,92,246,0.14), transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 80%, rgba(6,182,214,0.08), transparent 60%),
            radial-gradient(ellipse 30% 30% at 10% 80%, rgba(255,178,36,0.06), transparent 60%)
          `,
          filter: "blur(40px)",
        }}
      />

      {/* Secondary aurora layer for depth */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,178,36,0.08), transparent 70%),
            radial-gradient(ellipse 50% 50% at 0% 50%, rgba(139,92,246,0.06), transparent 70%),
            radial-gradient(ellipse 50% 50% at 100% 50%, rgba(6,182,214,0.04), transparent 70%)
          `,
        }}
      />

      {/* Grid — subtle, editorial */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 20%, transparent 80%)",
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Grain texture — premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-base via-base/60 to-transparent" />
      
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-base to-transparent" />

      {/* Center spotlight */}
      <div
        className="absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,178,36,0.08), transparent 70%)",
        }}
      />
    </div>
  );
}
