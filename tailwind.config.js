/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["taviraj", "serif"],
        base: ["inter", "sans-serif"],
      },
      colors: {
        navy: "#1E252F",
      },
      gridColumn: {
        overlap: "2 / span 4",
        underlap: "1 / -1",
      },
    },
  },
  plugins: [],
}
