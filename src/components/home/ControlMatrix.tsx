"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

/**
 * Control-coverage matrix: a single honest view of which security controls each
 * project implements.
 *
 *   ● implemented · ◐ partial / concept · ○ out of scope (WIP)
 *
 * Values reflect what the repositories document. Rows/columns are clickable to
 * focus; the matrix is horizontally scrollable on small screens.
 */

type State = "full" | "partial" | "none";

const shortName: Record<string, string> = {
  chokepoint: "Chokepoint",
  "android-reset-lab": "Reset Lab",
  "android-device-management-tool": "Device Mgmt",
};

type Row = { control: string; note?: string; states: Record<string, State> };

const rows: Row[] = [
  { control: "Least-privilege RBAC (default-deny)", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "Dual-control / four-eyes approval", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "Tamper-evident ledger (hash chain)", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "none" } },
  { control: "HMAC-signed audit entries", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "none" } },
  { control: "Anomaly / threat detection", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "Strong password hashing", note: "PBKDF2 / Argon2id", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "MFA (TOTP)", states: { chokepoint: "none", "android-reset-lab": "full", "android-device-management-tool": "none" } },
  { control: "Session hardening", note: "HttpOnly · SameSite · TTL · CSRF", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "Brute-force lockout / rate limiting", note: "Chokepoint detects failed logins; Reset Lab locks out", states: { chokepoint: "partial", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "CSRF protection", note: "Chokepoint relies on SameSite=Strict", states: { chokepoint: "partial", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "Security headers + strict CSP", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "Automated security tests", states: { chokepoint: "full", "android-reset-lab": "full", "android-device-management-tool": "partial" } },
  { control: "Human + AI actor model", states: { chokepoint: "full", "android-reset-lab": "partial", "android-device-management-tool": "none" } },
];

const slugs = projects.map((p) => p.slug);

function Mark({ state }: { state: State }) {
  if (state === "full")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-ok/40 bg-ok/15 text-ok" aria-label="implemented">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8.5l3.2 3.2L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  if (state === "partial")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-warn/40 bg-warn/15 text-warn" aria-label="partial / concept">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
    );
  return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line bg-raised/40 text-ink-faint" aria-label="out of scope">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
  );
}

export function ControlMatrix() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line-soft px-5 py-4">
        <div>
          <p className="key-label">Security control coverage</p>
          <p className="mt-1 text-sm text-ink-low">What each project actually ships — verified against the repos.</p>
        </div>
        <div className="flex flex-wrap gap-3 font-mono text-[11px] text-ink-med">
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-ok" /> implemented</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-warn" /> partial / concept</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full border border-ink-faint" /> out of scope</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line-soft bg-raised/40">
              <th className="px-5 py-3 text-left font-mono text-[11px] uppercase tracking-wider text-ink-faint">Control</th>
              {slugs.map((s) => (
                <th key={s} className="px-4 py-3 text-center font-mono text-[11px] uppercase tracking-wider text-ink-med">
                  {shortName[s]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.control}
                onMouseEnter={() => setHover(r.control)}
                onMouseLeave={() => setHover(null)}
                className={`border-b border-line-soft transition-colors last:border-0 ${hover === r.control ? "bg-accent/[0.04]" : ""}`}
              >
                <td className="px-5 py-2.5 font-medium text-ink-high">
                  {r.control}
                  {r.note && <span className="ml-2 font-mono text-[10px] text-ink-faint">{r.note}</span>}
                </td>
                {slugs.map((s) => (
                  <td key={s} className="px-4 py-2.5 text-center">
                    <Mark state={r.states[s] ?? "none"} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="border-t border-line-soft px-5 py-3 font-mono text-[11px] text-ink-faint">
        Partial / concept marks reflect the experimental Device Management build and
        evolving controls — documented honestly, not assumed complete.
      </p>
    </div>
  );
}
