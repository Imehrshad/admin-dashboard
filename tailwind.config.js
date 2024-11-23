/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        "vazir-regular": ["Vazir Regular", "san-serif"],
        "vazir-bold": ["Vazir Bold", "san-serif"],
        "vazir-thin": ["Vazir Thin", "san-serif"],
        "vazir-black": ["Vazir Black", "san-serif"],
      },
      colors: {
        borderColor: "#e7e7e8",
        fontColor: "#333f44",
        buttonColor:"#5D5FEF",
        darkPrimary:'#262626',
        darkSecondary:'#3f3f46',
      },
    },
  },
  plugins: [],
};
