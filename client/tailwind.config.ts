import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1380px",
        "4xl": "2440px",
        "halfMD":"500px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        inputFocus: "0px 0px 32px 0px #633CFF40",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
