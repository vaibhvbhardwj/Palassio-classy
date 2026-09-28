/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palassio: {
          gold: "#D4AF37",
          "gold-light": "#F3E5AB",
          "gold-dark": "#AA7C11",
          navy: "#0A192F",
          "navy-dark": "#050C1A",
          burgundy: "#4A0E17",
          maroon: "#800020",
          cream: "#FAFAFA",
          sand: "#F5F2EB",
          charcoal: "#1A1A1A",
          muted: "#6B7280"
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}
