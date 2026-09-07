import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(180deg, #070C09 0%, #0d1014 55%, #070C09 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* faint grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "30%",
            width: 620,
            height: 360,
            borderRadius: "9999px",
            background:
              "radial-gradient(closest-side, rgba(52,217,107,0.22), transparent)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: "#34D96B",
              boxShadow: "0 0 24px rgba(52,217,107,0.9)",
            }}
          />
          <div
            style={{
              color: "#AEB6C2",
              fontFamily: "monospace",
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {site.location} · Security Engineering
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ color: "#EEF5EF", fontSize: 88, fontWeight: 800, lineHeight: 1.02 }}>
            {site.name}
          </div>
          <div style={{ color: "#34D96B", fontSize: 40, fontWeight: 600 }}>
            {site.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "#7A828F", fontSize: 26, maxWidth: 760 }}>
            Build → Test → Break → Learn → Secure
          </div>
          <div
            style={{
              color: "#070C09",
              background: "#34D96B",
              borderRadius: 12,
              padding: "14px 26px",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Security portfolio
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
