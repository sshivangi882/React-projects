/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/*.{js,jsx,ts,tsx}","./src/*/**.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        gray:"#5A5959",
        yellow:"#FFEAAE",
        "dark-yellow":"#FCCA3F",
        orange:"#F6829C"
      }
    },
  },
  plugins: [],
}

