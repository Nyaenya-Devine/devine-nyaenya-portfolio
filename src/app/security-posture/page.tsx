import type { Metadata } from "next";
import { SecurityPostureDashboard } from "@/components/SecurityPostureDashboard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WebAuthnDemo } from "@/components/WebAuthnDemo";
import { ViewTransitionDemo } from "@/components/ViewTransitionDemo";

export const metadata: Metadata = {
  title: "Security Posture - Live Dashboard",
  description: "Live security posture across all projects - 0 vulnerabilities, 78+ tests, CSP, HSTS, HMAC audit logs, Argon2id. Proves the portfolio practices what it preaches.",
};

export default function SecurityPosturePage() {
  return (
    <div className="container-page py-12 sm:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Security-first"
          title="Live Security Posture"
          description="This portfolio doesn't just talk about security - it proves it. Real-time checks across all 5 live projects, all 0 vulnerabilities, all security headers enforced."
        />
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 mb-8">
          <div className="flex gap-3">
            <div className="text-amber-400 mt-0.5">⚡</div>
            <div className="text-sm">
              <div className="font-medium text-amber-200">God Mode Active - Full Hardening 2026-09-12</div>
              <div className="text-amber-200/70 mt-1">
                All Next.js 16.3.5 + React 19.2.8 + postcss 8.5.28, 0 vulns, AES-256-GCM, CSP nonce + strict-dynamic, HSTS preload, 
                5 security engines in Chokepoint (risk, policy-sim, SIEM CEF/OCSF/LEEF, impersonation, compliance), fleet risk heatmap in Device Tool, 
                OTEL + Prometheus + replay in Reset Lab, PWA offline-first + security.txt in Endopima, self-hosted fonts + CSP in Github.io, WebAuthn + View Transitions demos.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <SecurityPostureDashboard />
      </Reveal>

      <Reveal delay={200} className="mt-8 grid gap-6">
        <WebAuthnDemo />
        <ViewTransitionDemo />
      </Reveal>

      <Reveal delay={250} className="mt-12">
        <div className="rounded-2xl border border-[#1F1F23] bg-[#0E0E11] p-6">
          <h3 className="text-lg font-semibold text-[#F5F3EF] mb-4">What Was Hardened (God Mode Log)</h3>
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-medium text-[#F5F3EF]">Phase 1 - Critical Vuln Fixes — DONE</div>
              <ul className="mt-2 space-y-1 text-[#A8A6A1] list-disc list-inside">
                <li>android-device-management-tool: 7 vulns → 0 vulns via Next 16.3.5 + postcss 8.5.28 + esbuild 0.25.0 override</li>
                <li>portfolio + chokepoint: Next 16.3.5, React 19.2.8, @types/react-dom 19.1.11</li>
                <li>crypto.ts: AES-256-CBC → AES-256-GCM, fail-closed, CSPRNG randomInt, secure secret generator</li>
                <li>next.config: full security headers (CSP, HSTS preload, X-Frame DENY, Permissions-Policy)</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-[#F5F3EF]">Phase 2 - Inventive Features (Chokepoint) — DONE</div>
              <ul className="mt-2 space-y-1 text-[#A8A6A1] list-disc list-inside">
                <li><code className="text-[#FFB224]">riskEngine.ts</code> - Behavioral risk scoring (velocity, privilege creep, after-hours, impersonation, ASI03)</li>
                <li><code className="text-[#FFB224]">policySimulator.ts</code> - Dry-run policy testing, 6 default tests</li>
                <li><code className="text-[#FFB224]">siemExport.ts</code> - JSON, CEF, OCSF, LEEF export</li>
                <li><code className="text-[#FFB224]">impersonationDetector.ts</code> - 5 impersonation types</li>
                <li><code className="text-[#FFB224]">complianceMapper.ts</code> - NIST, SOC2, MITRE, OWASP, ISO27001 auto-mapping</li>
                <li>5 API routes + 4 dashboards: fleet-risk, compliance, simulation, time-travel</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-[#F5F3EF]">Phase 3 - Portfolio & Other Projects — DONE</div>
              <ul className="mt-2 space-y-1 text-[#A8A6A1] list-disc list-inside">
                <li>Portfolio: SecurityPostureDashboard + /security-posture + WebAuthn + View Transitions + Header link</li>
                <li>Device Tool: FleetRiskHeatmap integrated into FleetDashboard, 0 vulns, build passes</li>
                <li>Reset Lab: OTEL tracing + Prometheus /metrics + /api/traces + /api/replay + Bandit + pip-audit CI</li>
                <li>Endopima: PWA manifest + sw.js offline-first + CSP meta + security.txt + esc() sanitization</li>
                <li>Github.io: self-hosted fonts (no Google), CSP meta, nosniff, referrer-policy, performance</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
