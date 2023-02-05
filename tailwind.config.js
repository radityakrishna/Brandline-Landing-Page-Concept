/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        heroBlue: "#F5F8FA",
        customPurple: "#6C57DB",
        primaryWhite: "#FFFFFF",
        navbarMenu: "#2F2A47",
        customBlack: "#0C141D",
        bgDark: "#0C141D",
        customGrey: "#A7ABB1",
      },
      fontFamily: {
        sora: ['var(--font-sora)'],
        spacegrotesk: ['var(--font-spacegrotesk)'],
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}