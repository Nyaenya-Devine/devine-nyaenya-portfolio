import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { site, socialLinks } from "@/data/site";

export function Hero() {
  const linkedin = socialLinks.find((s) => s.label === "LinkedIn");
  const linkedInHref = linkedin?.configured ? linkedin.href : null;

  return (
    <section className="relative overflow-hidden">
      {/* Security Livery Background — Good Nasty Work, Specific to Portfolio */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[500px] rounded-full blur-[100px] opacity-[0.12] bg-gradient-to-br from-[#34D96B] via-emerald-500 to-teal-500" />
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.08] bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500" />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-[0.05] bg-amber-500" />
        {/* Hash-chain stripes */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(52,217,107,0.5) 28px, rgba(52,217,107,0.5) 29px, transparent 29px, transparent 56px, rgba(16,185,129,0.4) 56px, rgba(16,185,129,0.4) 57px)`
        }} />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      </div>

      <div className="container-page pt-14 pb-10 sm:pt-20 sm:pb-14 relative z-10">
        <div className="max-w-3xl">
          {/* Availability pill — enhanced */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#34D96B]/20 bg-[#0D1410]/80 backdrop-blur-xl px-4 py-1.5 shadow-lg shadow-[#34D96B]/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D96B] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34D96B] shadow-[0_0_10px_rgba(52,217,107,0.6)]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A9BBAE]">
              {site.location} · Open to security roles · 5 Projects Live · 0 Vulns
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-ink-high sm:text-7xl">
            {site.firstName}{" "}
            <span className="text-gradient relative">
              {site.lastName}
              <span className="absolute -top-2 -right-4 h-2 w-2 rounded-full bg-[#34D96B] animate-pulse shadow-[0_0_10px_rgba(52,217,107,0.8)]" />
            </span>
          </h1>

          <p className="mt-3 text-xl font-semibold text-[#34D96B] sm:text-2xl flex items-center gap-2">
            {site.role}
            <span className="h-px w-12 bg-gradient-to-r from-[#34D96B]/50 to-transparent" />
            <span className="text-[11px] font-mono tracking-[0.1em] uppercase text-ink-low">World-Class Expert</span>
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-med text-pretty">
            I build security-focused software, investigate vulnerabilities in
            authorized labs, and ship defensive controls that are{" "}
            <span className="font-semibold text-ink-high relative">
              implemented and tested
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#34D96B]/50 to-transparent" />
            </span>{" "}
            — not just described.{" "}
            <span className="text-ink-high">{site.tagline}</span>
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "26 tests proving properties",
              "Hash-chained + HMAC-signed",
              "Dual-control 4-eyes",
              "0 vulns • npm audit",
              "PWA + Electron",
            ].map(chip => (
              <span key={chip} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-ink-low font-mono">{chip}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#projects" className="btn-primary">
              View my projects — 5 live
              <span aria-hidden="true">↓</span>
            </Link>
            <ExternalLink href={site.github} className="btn-ghost">
              GitHub — Clean Work
            </ExternalLink>
            {linkedInHref && (
              <ExternalLink href={linkedInHref} className="btn-ghost">
                LinkedIn
              </ExternalLink>
            )}
          </div>

          <div className="mt-6 p-3 rounded-[12px] bg-[#0D1410]/60 backdrop-blur border border-white/[0.04]">
            <p className="text-[11px] font-mono text-ink-low leading-[1.5]">
              <span className="text-ink-med font-semibold">Clear expectations like Influx would:</span> Each project distinct purpose — Chokepoint security control plane, Android MDM fleet management, OrbitDesk MSP simulator, Portfolio, EndoPima health. No mixing, no madman trying everything. World-class expert, focused, proof over claims, human premium not AI basic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
