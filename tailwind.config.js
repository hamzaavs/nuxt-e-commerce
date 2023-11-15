/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        footerColor: {
          dark: "#272727",
          light: "#E5E5E5",
          green: "#56B280",
        },
      },
        backgroundImage: {
          'image': "url('/src/assets/images/bg-image.png')",
        },

        spacing: {
            100: "40rem",
        }
    },

  },
  plugins: [],
}