/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          amber: "#d97706",
          "amber-light": "#f59e0b",
          "amber-dark": "#92400e",
          sepia: "#8b5a3c",
          cream: "#fef7ed",
          parchment: "#fef3c7",
          bronze: "#a16207",
          gold: "#eab308",
          brown: "#78350f",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        script: ["Dancing Script", "cursive"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-slow": "fadeIn 0.8s ease-in-out",
        "slide-up-slow": "slideUp 0.8s ease-out",
        "float-vintage": "floatVintage 6s ease-in-out infinite",
        "vintage-glow": "vintageGlow 2s ease-in-out infinite alternate",
        "loading-shimmer": "loading-shimmer 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        floatVintage: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        vintageGlow: {
          from: { opacity: "0.9" },
          to: { opacity: "1" },
        },
        "loading-shimmer": {
          to: { left: "100%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
