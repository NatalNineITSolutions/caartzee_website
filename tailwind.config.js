/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B0B12",
          primary: "#6D28D9",
          accent: "#8B5CF6",
          soft: "#C4B5FD",
        },
      },
    },
  },
  plugins: [],
};
