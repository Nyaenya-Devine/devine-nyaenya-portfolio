import type { Config } from "tailwindcss";

/**
 * Design system.
 *
 * Aesthetic: dark, professional security-operations product — charcoal/near-black
 * canvas, cool neutral greys, ONE restrained accent (a "signal teal"). The accent
 * is used for active/security/signal states and small UI affordances only.
 *
 * Reference scale:
 *   base     #0A0B0D   canvas
 *   surface  #101216   cards
 *   raised   #16191F   elevated panels
 *   border   #23262E   hairline borders
 *   accent   #38E1C4   signal teal (teal-ish cyan)
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0B0D",
        surface: "#101216",
        raised: "#16191F",
        line: "#23262E",
        "line-soft": "#1B1E25",
        accent: {
          DEFAULT: "#38E1C4",
          soft: "#5CEAD3",
          dim: "#1F8F7E",
        },
        ink: {
          high: "#F4F6F8",
          med: "#AEB6C2",
          low: "#7A828F",
          faint: "#565E6B",
        },
        danger: "#F2756A",
        warn: "#E8B45A",
        ok: "#5FD39A",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 6vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "h1": ["clamp(1.9rem, 4vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "h2": ["clamp(1.45rem, 2.6vw, 1.9rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h3": ["1.2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "76rem",
        prose: "44rem",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 12px 32px -16px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(56,225,196,0.18), 0 8px 30px -12px rgba(56,225,196,0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
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
          "50%": { transform: "translateY(-8px)" },
        },
        "sheen": {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "60%, 100%": { transform: "translateX(240%) skewX(-18deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "dash-draw": {
          "0%": { strokeDashoffset: "320" },
          "100%": { strokeDashoffset: "0" },
        },
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        "ring-ping": {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pack: {
          "0%": { top: "4%", opacity: "0" },
          "10%": { opacity: "1" },
          "88%": { opacity: "1" },
          "100%": { top: "92%", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.2,0.7,0.2,1) both",
        "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
        "flow": "flow 1.1s linear infinite",
        "marquee": "marquee 36s linear infinite",
        "float-y": "float-y 7s ease-in-out infinite",
        "sheen": "sheen 3.2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "dash-draw": "dash-draw 2.6s ease-out forwards",
        "rise-in": "rise-in 0.7s cubic-bezier(0.2,0.7,0.2,1) both",
        "scan": "scan 6s ease-in-out infinite",
        "ring-ping": "ring-ping 2.4s cubic-bezier(0.2,0.7,0.2,1) infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        pack: "pack 3.6s cubic-bezier(0.45,0,0.55,1) infinite",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade": "radial-gradient(60% 55% at 50% 0%, rgba(56,225,196,0.08), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
