/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D0215D1A",
        pink: "#D0215D",
        lightblack: "#ffffff1a",
      },
      backgroundImage: {
        btngradient: "linear-gradient(180deg, #7B1F67 -15.63%, #D0215D 100%)",
        pinkgradient: "linear-gradient(180deg, #7B1F67 -15.63%, #D0215D 100%)",
        gradientlayer: "url('./assets/images/png/gradient-layer.png')",
      },
      boxShadow: {
        btnshadow: "0px 5px 40px 0px #D0215D80",
        whiteshadow: "#ffffff 0px 5px 15px;",
      },
      fontSize: {
        xsm: "30px",
        md: "64px",
      },
    },
  },
  plugins: [],
};
