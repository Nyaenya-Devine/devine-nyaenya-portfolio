/**
 * HeroConsole — a stylized, animated "control plane" dashboard. Pure CSS/SVG
 * (no client JS, no data), used as illustrative UI chrome: it conveys the
 * product feel without implying real metrics. All labels are clearly
 * illustrative.
 */

const gates = ["Auth", "RBAC", "Approve", "Ledger"];

const feed = [
  { code: "AUTH_OK", msg: "identity verified · PBKDF2", tone: "ok" },
  { code: "POLICY", msg: "can(reset) = deny → approve", tone: "accent" },
  { code: "DUAL", msg: "approver ≠ requester ✓", tone: "ok" },
  { code: "LEDGER", msg: "chain verified · HMAC intact", tone: "accent" },
];

const integritySegments = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export function HeroConsole() {
  return (
    <div className="relative animate-rise-in" style={{ animationDelay: "260ms" }}>
      {/* Halo behind the console */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[28px] opacity-80 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(56,225,196,0.18), transparent 70%)",
        }}
      />

      <div className="card relative overflow-hidden p-0">
        {/* Scanline sweep */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-accent/[0.06] to-transparent animate-scan"
        />

        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-line-soft px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-ok/70" />
          </div>
          <p className="font-mono text-[11px] tracking-widest text-ink-faint">
            chokepoint · control plane
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-ok">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ok animate-ring-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            live
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[1.15fr_1fr]">
          {/* Left: request path with traveling packet */}
          <div className="panel relative overflow-hidden p-4">
            <p className="key-label mb-3">request path · high-impact op</p>
            <div className="relative">
              {/* travelling packet */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(56,225,196,0.7)] animate-pack"
              />
              <ol className="relative space-y-2.5">
                {gates.map((g, i) => (
                  <li
                    key={g}
                    className="flex items-center gap-3 animate-rise-in"
                    style={{ animationDelay: `${320 + i * 140}ms` }}
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/10 font-mono text-[11px] text-accent">
                      {i + 1}
                    </span>
                    <span className="flex-1 rounded-md border border-line bg-base/60 px-3 py-1.5 font-mono text-[12px] text-ink-med">
                      {g}
                    </span>
                    <span className="font-mono text-[11px] text-ok">pass</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: integrity gauge + feed */}
          <div className="flex flex-col gap-4">
            <div className="panel p-4">
              <p className="key-label mb-2">ledger integrity</p>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-ok">100<span className="text-base text-ink-low">%</span></span>
                <span className="mb-1 font-mono text-[11px] uppercase text-ok">chain intact</span>
              </div>
              <div className="mt-3 flex gap-1">
                {integritySegments.map((_, i) => (
                  <span
                    key={i}
                    className="h-6 flex-1 rounded-sm bg-ok/70 animate-rise-in"
                    style={{ animationDelay: `${500 + i * 45}ms`, opacity: 0.55 + (i / integritySegments.length) * 0.45 }}
                  />
                ))}
              </div>
            </div>

            <div className="panel flex-1 p-4">
              <p className="key-label mb-2">live audit feed</p>
              <ul className="space-y-2">
                {feed.map((f, i) => (
                  <li
                    key={f.code}
                    className="flex items-start gap-2 animate-rise-in"
                    style={{ animationDelay: `${650 + i * 220}ms` }}
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        f.tone === "ok" ? "bg-ok" : "bg-accent"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className={`font-mono text-[11px] ${f.tone === "ok" ? "text-ok" : "text-accent"}`}>
                        {f.code}
                      </p>
                      <p className="truncate text-[11px] text-ink-low">{f.msg}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="border-t border-line-soft px-4 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          illustrative console · not live data
        </p>
      </div>
    </div>
  );
}
