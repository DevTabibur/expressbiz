/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eb0028",
          secondary: "#141414",
          accent: "#051f3e",
          neutral: "#f6f5f5",
          "base-100": "#FFFFFF",
          info: "#2ad7c5",
          success: "#28a745",
          warning: "#FBBD23",
          error: "#ff3131",
        },
      },
    ],
  },
  //...
  plugins: [require("daisyui")],
};