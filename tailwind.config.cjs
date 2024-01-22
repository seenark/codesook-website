/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      screens: {
        lg: "1200px",
        md: "810px",
        sm: "390px",
      },
      backgroundImage: {
        "ellipsis-overlay":
          "radial-gradient(57.58% 57.58% at 48.79% 42.42%, var(--tw-gradient-stops))",
        classroom7: "url(/classroom7-1.png)",
      },
      colors: {
        deepBlue: "#1E2030",
        lightBlue: "#CBD4F5",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ct",
      defaultFlavour: "mocha",
    }),
  ],
};
