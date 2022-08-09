module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            "semitp": "rgba(255, 255, 255, 0.8)",
            "semitpdark": "rgba(30, 41, 59, 0.8)"
        },
        maxWidth: {
          screen: "100vw"
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}