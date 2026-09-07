/**
 * HeroConsole v2 — Obsidian Aurora Editorial
 * Premium glass console with amber/violet accents, border beam, grain
 */

const gates = [
  { name: "Auth", sub: "PBKDF2/Argon2id", status: "pass" },
  { name: "RBAC", sub: "default-deny", status: "pass" },
  { name: "Approve", sub: "four-eyes", status: "pass" },
  { name: "Ledger", sub: "HMAC intact", status: "pass" },
];

const feed = [
  { code: "AUTH_OK", msg: "identity verified · Argon2id", tone: "ok" },
  { code: "POLICY", msg: "can(reset) = deny → approve", tone: "amber" },
  { code: "MFA", msg: "TOTP verified · 6-digit", tone: "violet" },
  { code: "LEDGER", msg: "chain verified · HMAC intact", tone: "amber" },
];

export function HeroConsole() {
  return (
    <div className="relative">
      {/* Glass card with border beam */}
      <div className="card border-beam relative overflow-hidden rounded-[20px] bg-surface/90 backdrop-blur-2xl">
        {/* Amber beam top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        {/* Title bar - premium */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <span className="ml-3 font-mono text-[11px] tracking-[0.14em] text-ink-faint">
              chokepoint · control plane
            </span>
          </div>
          <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            live
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-[1.1fr_1fr]">
          {/* Left: request path */}
          <div className="rounded-xl border border-white/[0.06] bg-surface/[0.02] p-4 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                request path · high-impact op
              </p>
              <span className="font-mono text-[10px] text-ink-faint">4 gates</span>
            </div>
            
            <div className="relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/30 via-violet/20 to-transparent" />
              <ol className="relative space-y-3">
                {gates.map((g, i) => (
                  <li
                    key={g.name}
                    className="group flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                  >
                    <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface text-[11px] font-medium text-ink-high group-hover:scale-110 transition-transform duration-300">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-violet opacity-0 group-hover:opacity-20 transition-opacity" />
                      <span className="relative">{i + 1}</span>
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[13px] font-medium text-ink-high">{g.name}</span>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/20">
                          {g.status}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-ink-low">{g.sub}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: integrity + feed */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-white/[0.06] bg-surface/[0.02] p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                  ledger integrity
                </p>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[32px] leading-none tracking-[-0.03em] text-white">100</span>
                <span className="font-mono text-[14px] text-ink-low">%</span>
                <span className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-emerald-400">
                  chain intact
                </span>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-accent to-violet animate-fade-up"
                    style={{ 
                      animationDelay: `${500 + i * 40}ms`,
                      opacity: 0.3 + (i / 12) * 0.7,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-xl border border-white/[0.06] bg-surface/[0.02] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-3">
                live audit feed
              </p>
              <ul className="space-y-3">
                {feed.map((f, i) => (
                  <li
                    key={f.code}
                    className="group flex items-start gap-2.5 animate-fade-up"
                    style={{ animationDelay: `${600 + i * 150}ms` }}
                  >
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                      f.tone === "ok" ? "bg-emerald-400" : 
                      f.tone === "amber" ? "bg-accent" : "bg-violet"
                    } group-hover:scale-125 transition-transform`} />
                    <div className="min-w-0 flex-1">
                      <p className={`font-mono text-[11px] font-medium tracking-[0.05em] ${
                        f.tone === "ok" ? "text-emerald-400" : 
                        f.tone === "amber" ? "text-accent" : "text-violet-soft"
                      }`}>
                        {f.code}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] leading-[1.4] text-ink-low truncate">
                        {f.msg}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.04] px-5 py-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
            illustrative console · not live data
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-faint">
            <span className="h-1 w-1 rounded-full bg-accent" />
            52 tests · 6/6 detection
          </span>
        </div>
      </div>

      {/* Glow behind */}
      <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-accent/10 via-violet/5 to-transparent blur-2xl rounded-[24px] opacity-60" />
    </div>
  );
}
