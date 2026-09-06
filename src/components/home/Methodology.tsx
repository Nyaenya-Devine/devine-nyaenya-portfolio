import { methodology } from "@/data/skills";

export function Methodology() {
  return (
    <section className="relative border-y border-line-soft bg-surface/30">
      {/* animated accent hairline across the top */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,225,196,0.6), transparent)",
          backgroundSize: "200% 100%",
        }}
      />
      <div className="container-page py-12">
        <p className="key-label mb-8 text-center">The loop I work in</p>
        <ol className="relative grid gap-5 sm:grid-cols-5 sm:gap-2">
          {/* connecting line (desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-line sm:block"
          />
          <span
            aria-hidden="true"
            className="absolute left-[10%] top-5 hidden h-px w-[80%] overflow-hidden sm:block"
          >
            <span className="absolute inset-y-0 w-1/3 animate-flow bg-gradient-to-r from-transparent via-accent to-transparent" />
          </span>

          {methodology.map((m, i) => (
            <li
              key={m.step}
              className="group relative flex flex-col items-center text-center animate-rise-in"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-accent/30 bg-base font-mono text-sm font-bold text-accent shadow-[0_0_0_4px_rgba(10,11,13,1)] transition-all duration-300 group-hover:scale-110 group-hover:border-accent/60 group-hover:shadow-glow">
                {i + 1}
              </span>
              <p className="mt-3 font-semibold text-ink-high transition-colors group-hover:text-accent">
                {m.step}
              </p>
              <p className="mt-1 max-w-[10rem] text-xs text-ink-low">{m.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
