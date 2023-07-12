/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        darumadrop: ["Darumadrop One", "sans-serif"],
        poppins:["Poppins", "san-serif"]
      },
    },
  },
  plugins: [],
};
