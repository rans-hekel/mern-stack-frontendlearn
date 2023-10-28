/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1aac83",
        error: "#e7195a",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
