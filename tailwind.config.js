/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        100: "#d5cdce",
        200: "#aa9a9d",
        300: "#80686c",
        400: "#55353b",
        500: "#2b030a",
        600: "#220208",
        700: "#1a0206",
        800: "#110104",
        900: "#090102",
        cardPrimary: "#F4EDEF",
        cardSecondary: "#FCF6D9",
        lightAccent: "#9E9164",
        heavyAccent: "#645307",
      },
    },
  },
  plugins: [],
};
