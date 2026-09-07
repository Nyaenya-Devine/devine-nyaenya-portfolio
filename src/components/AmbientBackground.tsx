import { CodeRain } from "./CodeRain";

/**
 * Ambient background — dark green with subtle falling code ("dropping codes"),
 * faint glows and grid. Sparse and low-opacity so foreground content stays
 * fully readable. Purely decorative, fixed, -z-10, pointer-events-none.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      {/* Solid base */}
      <div className="absolute inset-0 bg-base" />

      {/* Falling code (canvas) */}
      <CodeRain />

      {/* Faint grid, strongest at top */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(52,217,107,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(52,217,107,0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent)",
        }}
      />

      {/* Soft green glows */}
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full opacity-50 blur-[140px]"
        style={{ background: "radial-gradient(closest-side, rgba(52,217,107,0.12), transparent)" }}
      />
      <div
        className="absolute bottom-[-10%] -right-40 h-[440px] w-[440px] rounded-full opacity-35 blur-[140px]"
        style={{ background: "radial-gradient(closest-side, rgba(31,157,79,0.14), transparent)" }}
      />

      {/* Grain */}
      <div
        className="noise-overlay absolute inset-0 opacity-[0.03] mix-blend-soft-light"
      />

      {/* Readability scrim above rain, below content */}
      <div className="absolute inset-0 bg-base/55" />

      {/* Top / bottom vignettes */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-base/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base/80 to-transparent" />
    </div>
  );
}
