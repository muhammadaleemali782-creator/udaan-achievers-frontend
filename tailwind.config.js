export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#123B7A",
        paper: "#F7FAFC",
        paperDark: "#E9F1F8",
        saffron: "#22C55E",
        saffronDark: "#15803D",
        teal: "#2563EB",
        tealDark: "#1D4ED8",
        charcoal: "#1A2433",
        muted: "#5B6B7F",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
