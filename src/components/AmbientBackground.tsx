/**
 * Fixed ambient background: a faint technical grid, soft accent glows, and a
 * grain/noise overlay. Purely decorative (aria-hidden), pointer-events-none,
 * and GPU-cheap (static gradients + SVG data-URI noise). Sits behind all
 * content and adds depth without distracting from it.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      {/* Base grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Soft accent glows */}
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-[120px] animate-float-y"
        style={{
          background:
            "radial-gradient(closest-side, rgba(56,225,196,0.12), transparent)",
        }}
      />
      <div
        className="absolute top-[38%] -left-40 h-[420px] w-[420px] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(64,120,220,0.07), transparent)",
        }}
      />
      <div
        className="absolute bottom-[-10%] -right-32 h-[460px] w-[460px] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(56,225,196,0.07), transparent)",
        }}
      />

      {/* Grain */}
      <div className="noise-overlay absolute inset-0 opacity-[0.025] mix-blend-overlay" />

      {/* Top vignette to seat the header */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-base/80 to-transparent" />
    </div>
  );
}
