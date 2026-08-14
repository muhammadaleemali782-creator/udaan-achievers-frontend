export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A1530",
        paper: "#F9F8FF",
        paperDark: "#EDE9FE",
        saffron: "#6D4AFF",
        saffronDark: "#5533CC",
        teal: "#8B5CF6",
        tealDark: "#7C3AED",
        charcoal: "#1E1B2E",
        muted: "#6B7280",
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
