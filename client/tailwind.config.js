/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f766e",
          dark: "#115e59",
        },
        surface: "#ffffff",
        background: "#f8fafc",
        border: "#cbd5e1",
        text: {
          primary: "#0f172a",
          secondary: "#475569",
        },
      },
       width: {
        '7/10': '70%',
        '3/10': '30%',
      },
    },
  },
  plugins: [],
};
