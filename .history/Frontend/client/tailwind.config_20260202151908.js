/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can add the FindIt brand colors here later
        primary: "#2563eb", // This is the blue from the video
      },
    },
  },
  plugins: [],
}