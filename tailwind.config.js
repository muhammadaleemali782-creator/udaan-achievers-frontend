export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16213E",
        paper: "#FBF8F2",
        paperDark: "#F2EBDC",
        saffron: "#E8A33D",
        saffronDark: "#C6841F",
        teal: "#1F7A6C",
        tealDark: "#155A50",
        charcoal: "#232323",
        muted: "#6B6B63",
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
