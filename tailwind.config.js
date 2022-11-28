/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eb0028",
          secondary: "#141414",
          accent: "#1c1665",
          neutral: "#f6f5f5",
          "base-100": "#FFFFFF",
          info: "#111431",
          success: "#f3f6fc",
          warning: "#FBBD23",
          error: "#ff3131",
        },
      },
    ],
  },
  //...
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
