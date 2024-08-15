/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#931816",
          secondary: "#ea7922",
          "base-300": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
