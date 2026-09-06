import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, { dot: string; text: string; label: string }> = {
  "Live demo": {
    dot: "bg-ok",
    text: "text-ok border-ok/30 bg-ok/10",
    label: "Live demo",
  },
  "Active project": {
    dot: "bg-accent",
    text: "text-accent border-accent/30 bg-accent/10",
    label: "Active project",
  },
  "Simulation / lab": {
    dot: "bg-warn",
    text: "text-warn border-warn/30 bg-warn/10",
    label: "Simulation / lab",
  },
  "Experimental / WIP": {
    dot: "bg-ink-low",
    text: "text-ink-med border-line bg-raised",
    label: "Experimental / WIP",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const s = styles[status];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${s.text}`}
    >
      <span className="relative inline-flex h-1.5 w-1.5">
        {status === "Live demo" && (
          <span className={`absolute inline-flex h-full w-full rounded-full ${s.dot} animate-ring-ping`} />
        )}
        <span className={`dot relative ${s.dot} ${status === "Live demo" ? "animate-pulse-dot" : ""}`} />
      </span>
      {s.label}
    </span>
  );
}
