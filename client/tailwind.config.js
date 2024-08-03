/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customViolet: "#673ab7",
        customBgColor: "#f7f7f8",
      },
    },
  },
  plugins: [require("daisyui")],
};
