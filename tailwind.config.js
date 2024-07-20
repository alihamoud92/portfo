/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Main: "#0D4870",
        Secondary: "#02083C",
      },
    },
  },
  plugins: [],
};
