/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*/*.{tsx,jsx,ts,js,css}"],
  theme: {
    extend: {

      fontFamily:{
        barcode:"'Libre Barcode 128 Text', cursive",
        inter:"'Inter', sans-serif",
        kanit:"'Kanit', sans-serif",
      },

      colors: {"background":"#F5E8D8",
              "brown":"#423430"
    }
    }
  },
  plugins: [],
}

