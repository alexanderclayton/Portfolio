/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#8fb3ff",
        "primary-purple": "#690f9a",
        "secondary-blue": "#002761",
        "secondary-purple": "#b854ee",

        "light-blue": "#e5eeff",
      },
    },
  },
  plugins: [],
};
