/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Quicksand: ["Quicksand", "sans-serif"],
      Kalam: ["Kalam", "cursive"],
      SIL: ["Shadows Into Light", "cursive"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
      "10xl": "9rem",
    },
    extend: {
      colors: {
        "primary-blue": "#8fb3ff",
        "primary-purple": "#690f9a",
        "secondary-blue": "#002761",
        "secondary-purple": "#b854ee",

        "light-blue": "#e5eeff",

        "light-text": "#000000",
        "light-background": "#ffffff",
        "light-primary": "#8fb3ff",
        "light-secondary": "#fafcff",
        "light-accent": "#690f9a",
        "light-background": "#E1ECF4",

        "dark-text": "#ffffff",
        "dark-background": "#000000",
        "dark-primary": "#8fb3ff",
        "dark-secondary": "#002761",
        "dark-accent": "#B854EE",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
