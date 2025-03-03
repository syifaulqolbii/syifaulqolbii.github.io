/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#10b981",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-6deg)",
          },
          "50%": {
            transform: "rotate(6deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
