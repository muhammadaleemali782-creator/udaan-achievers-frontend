export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F4D",
        paper: "#F7F8FA",
        paperDark: "#E8ECF3",
        saffron: "#14BF96",
        saffronDark: "#0E9B79",
        teal: "#1865F2",
        tealDark: "#154BBF",
        charcoal: "#21242C",
        muted: "#5B6470",
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
