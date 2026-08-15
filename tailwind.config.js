export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // old semantic tokens — remapped so every existing page (Courses,
        // About, Contact, Login, Admin) automatically re-themes to match
        // the new slate/cyan design language, no per-file edits needed.
        ink: "#0F172A",
        paper: "#F8FAFC",
        paperDark: "#E2E8F0",
        saffron: "#06B6D4",
        saffronDark: "#0891B2",
        teal: "#06B6D4",
        tealDark: "#0891B2",
        charcoal: "#0F172A",
        muted: "#64748B",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.35s ease both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
