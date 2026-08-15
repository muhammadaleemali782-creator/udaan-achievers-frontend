export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // old semantic tokens — remapped to the new navy/teal palette so
        // every existing page re-themes automatically, no per-file edits.
        ink: "#020617",
        paper: "#F8FAFC",
        paperDark: "#E2E8F0",
        saffron: "#0D9488",
        saffronDark: "#0B7A70",
        teal: "#0D9488",
        tealDark: "#0B7A70",
        charcoal: "#020617",
        muted: "#64748B",
        // literal brand.* tokens matching the supplied design file exactly
        brand: {
          navy: "#020617",
          teal: "#0D9488",
          slate: "#64748B",
          light: "#F8FAFC",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
