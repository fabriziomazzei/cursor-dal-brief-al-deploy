import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1e293b",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        coral: {
          DEFAULT: "#ea580c",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#fafaf9",
          subtle: "#f5f5f4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.06)",
        "card-hover":
          "0 4px 12px -2px rgb(15 23 42 / 0.08), 0 2px 6px -2px rgb(15 23 42 / 0.04)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "arrow-nudge": {
          "0%": { transform: "translateX(0) scale(1)" },
          "45%": { transform: "translateX(10px) scale(1.2)" },
          "70%": { transform: "translateX(5px) scale(1.05)" },
          "100%": { transform: "translateX(7px) scale(1.1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "arrow-nudge": "arrow-nudge 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
