import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: "var(--font-gothic)",
        merriweather: "var(--font-merriweather)",
      },
      letterSpacing: {
        "8p": "0.08em", // für 8% tracking wie in Figma
      },
      colors: {
            'custom-green': '#1B944A',
        // falls du CI-Farben definieren willst:
        // primary: "#123456",
        // secondary: "#abcdef",
      },
    },
  },
  plugins: [],
};

export default config;
