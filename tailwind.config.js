/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#070707",
          dark: "#0d0d0d",
          card: "#111111",
          border: "#1a1a1a",
          green: "#39FF14",
          "green-dim": "#22cc00",
          gold: "#D4AF37",
          "gold-light": "#F0D060",
          white: "#FAFAFA",
          muted: "#888888",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marqueeReverse 28s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        glow: "glowPulse 3s ease-in-out infinite",
        "border-spin": "borderSpin 4s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(32px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(57,255,20,0.3), 0 0 60px rgba(57,255,20,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(57,255,20,0.6), 0 0 100px rgba(57,255,20,0.2)" },
        },
        borderSpin: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(57,255,20,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(212,175,55,0.08) 0%, transparent 50%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        "green-glow": "radial-gradient(circle, rgba(57,255,20,0.2) 0%, transparent 70%)",
        "gold-glow": "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
