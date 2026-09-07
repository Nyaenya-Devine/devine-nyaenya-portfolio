import type { Config } from "tailwindcss";

/**
 * Design System v2 — Obsidian Aurora Editorial
 * 
 * Aesthetic: Premium security editorial, not basic dark+teal.
 * - Canvas: true obsidian #070C09 (not charcoal) with subtle noise
 * - Paper: warm paper #0D1410 for light sections (editorial contrast)
 * - Accent: Amber #34D96B (signal, alert) + Violet #10B981 (AI/security depth) gradient
 * - No more common teal — amber is unique, conveys security alert + warmth
 * - Typography: Instrument Serif (display) + Geist Sans (body) + Geist Mono (technical)
 * - Effects: glass blur, border beams, aurora gradients, grain, grid
 * 
 * Reference:
 *   obsidian  #070C09  true black, editorial
 *   surface   #0D1410  elevated glass
 *   paper     #0D1410  warm paper (light sections)
 *   amber     #34D96B  signal amber (primary accent)
 *   violet    #10B981  AI depth
 *   cyan      #2DD4A7  technical
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Dark-green obsidian system
        base: "#070C09",
        surface: "#0D1410",
        "surface-2": "#121A14",
        raised: "#16201A",
        line: "#20301F",
        "line-soft": "#182416",
        "line-light": "#2A3B2B",

        // "Paper" tokens are now deep-green panels (kept dark; no light editorial blocks)
        paper: "#0D1410",
        "paper-2": "#121A14",
        "paper-3": "#16201A",

        // Green accent system
        accent: {
          DEFAULT: "#34D96B",
          soft: "#74EC9D",
          dim: "#1F9D4F",
          deep: "#22B857",
        },
        // Secondary green family (used like the old violet)
        violet: {
          DEFAULT: "#10B981",
          soft: "#34D399",
          dim: "#047857",
          deep: "#065F46",
        },
        cyan: {
          DEFAULT: "#2DD4A7",
          soft: "#5EEAD4",
          dim: "#0D9488",
        },
        // Ink for dark UI
        ink: {
          high: "#EEF5EF",
          med: "#A9BBAE",
          low: "#76887A",
          faint: "#536257",
          // Light-mode inks retuned to dark (no light sections)
          "light-high": "#EEF5EF",
          "light-med": "#A9BBAE",
          "light-low": "#76887A",
          "light-faint": "#536257",
        },
        danger: "#F2784F",
        warn: "#E8C25A",
        ok: "#46D97A",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Geist Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "Instrument Serif",
          "Newsreader",
          "Georgia",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "Geist Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "display": ["clamp(2.8rem, 7vw, 5.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "400" }],
        "display-sm": ["clamp(2.2rem, 5vw, 3.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em", fontWeight: "400" }],
        "h1": ["clamp(2rem, 4.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "500" }],
        "h2": ["clamp(1.6rem, 3vw, 2.2rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "h3": ["1.35rem", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
      },
      maxWidth: {
        content: "80rem",
        prose: "46rem",
        narrow: "68rem",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.7)",
        "card-hover": "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 80px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(52,217,107,0.15)",
        glow: "0 0 0 1px rgba(52,217,107,0.2), 0 10px 40px -10px rgba(52,217,107,0.3)",
        "glow-violet": "0 0 0 1px rgba(16,185,129,0.2), 0 10px 40px -10px rgba(16,185,129,0.3)",
        "paper": "0 1px 0 0 rgba(0,0,0,0.02) inset, 0 20px 60px -20px rgba(0,0,0,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.9)" },
        },
        "flow": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "sheen": {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "60%, 100%": { transform: "translateX(240%) skewX(-18deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "aurora": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(30px, -30px) rotate(1deg) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) rotate(-1deg) scale(0.95)" },
        },
        "border-beam": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, -15%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.6s ease both",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "flow": "flow 1.1s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "float-y": "float-y 8s ease-in-out infinite",
        "sheen": "sheen 3.5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "aurora": "aurora 20s ease-in-out infinite",
        "border-beam": "border-beam 2s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "grid-dark": "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "grid-light": "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
        "aurora-amber": "radial-gradient(60% 60% at 20% 20%, rgba(52,217,107,0.15), transparent 50%), radial-gradient(50% 50% at 80% 30%, rgba(16,185,129,0.12), transparent 50%), radial-gradient(40% 40% at 50% 80%, rgba(45,212,167,0.08), transparent 50%)",
        "paper-texture": "radial-gradient(at 20% 30%, rgba(52,217,107,0.03), transparent 40%), radial-gradient(at 80% 70%, rgba(16,185,129,0.02), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
