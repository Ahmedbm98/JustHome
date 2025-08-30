/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xsm: "320px",
      sm: "580px",
      md: "730px",
      lg: "990px",
      xl: "116px",
      "2xl": "1336px",
    },
    extend: {
      colors: {
        blackColor: "#1A1A1A",
      },
    },
  },
  plugins: [import("tailwindcss"), import("autoprefixer")],
};
