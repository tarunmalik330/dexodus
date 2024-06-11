/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D0215D1A",
        pink: "#D0215D",
      },
      backgroundImage: {
        btngradient: "linear-gradient(180deg, #7B1F67 -15.63%, #D0215D 100%)",
      },
      boxShadow: {
        btnshadow: "0px 5px 40px 0px #D0215D80",
      },
    },
  },
  plugins: [],
};
