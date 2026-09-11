"use client";

import { useState } from "react";

export function ViewTransitionDemo() {
  const [active, setActive] = useState<0 | 1 | 2>(0);
  const [supportsVT, setSupportsVT] = useState<boolean | null>(null);

  const switchWithTransition = (next: 0 | 1 | 2) => {
    if (active === next) return;
    // Feature detection
    const hasVT = typeof document !== "undefined" && "startViewTransition" in document;
    setSupportsVT(hasVT);

    if (hasVT) {
      // @ts-ignore — View Transition API
      document.startViewTransition(() => {
        setActive(next);
      });
    } else {
      setActive(next);
    }
  };

  const panels = [
    { title: "Audit Log", desc: "Hash-chained HMAC ledger — tamper-evident, 52 tests", color: "amber" },
    { title: "Fleet Risk", desc: "Behavioral scoring — velocity, privilege creep, ASI03", color: "violet" },
    { title: "Compliance", desc: "NIST, SOC2, MITRE, OWASP mapping auto-generated", color: "emerald" },
  ];

  return (
    <div className="rounded-2xl border border-[#1F1F23] bg-[#0E0E11] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">✦</span>
          <div>
            <h3 className="font-medium text-[#F5F3EF]">View Transitions API — God Mode</h3>
            <p className="text-xs text-[#6B6A67] font-mono">Progressive enhancement, no-JS fallback</p>
          </div>
        </div>
        {supportsVT !== null && (
          <span className={`text-xs px-2 py-1 rounded-full border ${supportsVT ? "border-emerald-500/20 text-emerald-400 bg-emerald-500/5" : "border-amber-500/20 text-amber-400 bg-amber-500/5"}`}>
            {supportsVT ? "View Transitions supported" : "Fallback: no VT"}
          </span>
        )}
      </div>

      <p className="text-sm text-[#A8A6A1] mb-4">
        Native View Transitions provide fluid morphing between states without SPA framework overhead. If unsupported, it degrades to instant switch — portfolio keeps no-JS contract.
      </p>

      <div className="flex gap-2 mb-6">
        {panels.map((p, i) => (
          <button
            key={i}
            onClick={() => switchWithTransition(i as any)}
            style={{ viewTransitionName: `tab-${i}` } as any}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
              active === i ? "bg-[#FFFDFA] text-[#050507]" : "border border-white/[0.08] bg-white/[0.04] text-white/60 hover:bg-white/[0.08]"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div
        style={{ viewTransitionName: "panel" } as any}
        className={`rounded-xl border p-5 transition-colors ${
          panels[active].color === "amber"
            ? "bg-amber-500/5 border-amber-500/15"
            : panels[active].color === "violet"
            ? "bg-violet-500/5 border-violet-500/15"
            : "bg-emerald-500/5 border-emerald-500/15"
        }`}
      >
        <div className="font-display text-[18px] text-[#F5F3EF]">{panels[active].title}</div>
        <div className="text-sm text-[#A8A6A1] mt-1">{panels[active].desc}</div>
        <div className="mt-3 font-mono text-[11px] text-[#6B6A67]">viewTransitionName: panel — morphs smoothly when supported</div>
      </div>

      <style>{`
        ::view-transition-old(panel),
        ::view-transition-new(panel) {
          animation-duration: 0.35s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}
