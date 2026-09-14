import { CodeRain } from "./CodeRain";

/**
 * Ambient background v5.2 — Full Body Upgrade — Security Livery, Not Basic
 * 
 * Theme: Cybersecurity Portfolio — Build, Test, Break, Learn, Secure
 * Livery: Dark green #070C09 base + security green #34D96B, amber #FFB224, violet #8B5CF6, emerald #10B981
 * Inspired by: Linear mesh, Stripe gradients, security control planes, hash chains, Merkle trees
 * Good nasty work: Animated security orbs, hash chain livery stripes, control gates, grain, grid
 * Not basic black — specific to portfolio project
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      {/* Solid base — dark green #070C09, not basic black */}
      <div className="absolute inset-0 bg-base" />
      <div className="absolute inset-0 bg-[#070C09]" />

      {/* Security Livery Gradient Mesh — Green + Amber + Violet */}
      {/* Green glow — Build */}
      <div
        className="absolute -top-40 left-1/2 h-[620px] w-[960px] -translate-x-1/2 rounded-full opacity-[0.15] blur-[140px]"
        style={{ 
          background: "radial-gradient(closest-side, rgba(52,217,107,0.25), rgba(16,185,129,0.15), transparent)",
        }}
      />
      {/* Amber glow — Test/Break */}
      <div
        className="absolute top-[20%] -right-32 h-[500px] w-[500px] rounded-full opacity-[0.08] blur-[120px]"
        style={{ 
          background: "radial-gradient(closest-side, rgba(255,178,36,0.20), transparent)",
        }}
      />
      {/* Violet glow — Learn/Secure */}
      <div
        className="absolute bottom-[-10%] -left-20 h-[480px] w-[480px] rounded-full opacity-[0.10] blur-[130px]"
        style={{ 
          background: "radial-gradient(closest-side, rgba(139,92,246,0.18), rgba(52,217,107,0.10), transparent)",
        }}
      />
      {/* Emerald glow — Secure */}
      <div
        className="absolute bottom-[-10%] -right-40 h-[440px] w-[440px] rounded-full opacity-[0.12] blur-[140px]"
        style={{ background: "radial-gradient(closest-side, rgba(31,157,79,0.20), transparent)" }}
      />

      {/* Falling code (canvas) — security code rain */}
      <CodeRain />

      {/* Security Livery Stripes — Hash Chain Inspired, F1 Livery */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 24px,
              rgba(52,217,107,0.8) 24px,
              rgba(52,217,107,0.8) 25px,
              transparent 25px,
              transparent 48px,
              rgba(255,178,36,0.6) 48px,
              rgba(255,178,36,0.6) 49px,
              transparent 49px,
              transparent 72px,
              rgba(139,92,246,0.5) 72px,
              rgba(139,92,246,0.5) 73px
            )`,
          }}
        />
      </div>

      {/* Hash Chain Visualization — Subtle, Security Livery */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-[30%] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-[#34D96B]/50 to-transparent" />
        <div className="absolute top-[32%] left-[5%] right-[5%] flex justify-between px-[5%]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#34D96B]/60" />
          ))}
        </div>
        <div className="absolute bottom-[40%] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-[#FFB224]/30 to-transparent" />
        <div className="absolute bottom-[42%] left-[5%] right-[5%] flex justify-between px-[5%]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-[#FFB224]/40" />
          ))}
        </div>
      </div>

      {/* Faint grid, strongest at top — security control grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(52,217,107,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(52,217,107,0.08) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent)",
        }}
      />

      {/* Security Watermark — Build Test Break Learn Secure */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="absolute top-[12%] left-[8%] text-[80px] font-black tracking-[-0.05em] text-[#34D96B] rotate-[-8deg]">BUILD</div>
        <div className="absolute top-[28%] right-[10%] text-[70px] font-black tracking-[-0.05em] text-[#FFB224] rotate-[6deg]">TEST</div>
        <div className="absolute top-[48%] left-[12%] text-[75px] font-black tracking-[-0.05em] text-[#FF5F56] rotate-[-4deg]">BREAK</div>
        <div className="absolute bottom-[32%] right-[15%] text-[65px] font-black tracking-[-0.05em] text-[#8B5CF6] rotate-[8deg]">LEARN</div>
        <div className="absolute bottom-[12%] left-[18%] text-[85px] font-black tracking-[-0.05em] text-[#34D96B] rotate-[-6deg]">SECURE</div>
      </div>

      {/* Grain — premium texture */}
      <div className="noise-overlay absolute inset-0 opacity-[0.03] mix-blend-soft-light" />

      {/* Readability scrim above rain, below content */}
      <div className="absolute inset-0 bg-base/55" />
      <div className="absolute inset-0 bg-[#070C09]/40" />

      {/* Top / bottom vignettes — focus */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-base/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base/80 to-transparent" />
      
      {/* Top highlight — premium */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#34D96B]/20 to-transparent" />
    </div>
  );
}
