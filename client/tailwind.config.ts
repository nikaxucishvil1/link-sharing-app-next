import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const tailwindConfig: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        inputFocus: "0px 0px 32px 0px #633CFF40",
      },
    },
  },
  plugins: [],
};

export default withUt(tailwindConfig);
