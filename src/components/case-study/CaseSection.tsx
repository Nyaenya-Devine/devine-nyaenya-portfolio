import type { ReactNode } from "react";

export function CaseSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line-soft py-9 first:border-t-0">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h2 className="text-h3 text-ink-high">{title}</h2>
        </div>
        <div className="prose-secure max-w-none">{children}</div>
      </div>
    </section>
  );
}

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: "info" | "warn" | "ok" | "danger";
  title?: string;
  children: ReactNode;
}) {
  const palette = {
    info: "border-accent/30 bg-accent/5",
    warn: "border-warn/30 bg-warn/5",
    ok: "border-ok/30 bg-ok/5",
    danger: "border-danger/30 bg-danger/5",
  } as const;
  const dot = { info: "bg-accent", warn: "bg-warn", ok: "bg-ok", danger: "bg-danger" } as const;
  return (
    <div className={`my-5 rounded-lg border p-4 ${palette[variant]}`}>
      <div className="flex items-start gap-3">
        <span className={`dot mt-1.5 ${dot[variant]}`} aria-hidden="true" />
        <div>
          {title && <p className="font-semibold text-ink-high">{title}</p>}
          <div className="mt-1 text-sm leading-relaxed text-ink-med">{children}</div>
        </div>
      </div>
    </div>
  );
}
