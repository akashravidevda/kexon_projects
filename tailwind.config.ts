import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#0D1117",
          secondary: "#FFFFFF",
          accent: "#00A6B2",
          accent_glow: "rgba(0, 166, 178, 0.2)",
        },
        surface: {
          page_bg: "#FAFAFA",
          card_bg: "rgba(255, 255, 255, 0.6)",
          glass_overlay: "rgba(255, 255, 255, 0.8)",
          border_subtle: "rgba(0, 0, 0, 0.04)",
          border_highlight: "rgba(0, 166, 178, 0.15)",
        },
        text: {
          primary: "#111827",
          secondary: "#4B5563",
          muted: "#9CA3AF",
        },
      },
      boxShadow: {
        ambient: "0 20px 40px -10px rgba(0, 0, 0, 0.03)",
        elevated_glass: "0 30px 60px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.4)",
        button_glow: "0 8px 20px -4px rgba(0, 166, 178, 0.3)",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(32px)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1.2)" },
        },
        shimmer: { 
          "0%": { backgroundPosition: "-200% 0" }, 
          "100%": { backgroundPosition: "200% 0" } 
        },
      },
      animation: {
        reveal: "reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        wave: "wave 1.2s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
