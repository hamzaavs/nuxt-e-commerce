export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
      'nuxt-icon',
  ],

  devtools: { enabled: true },
  css: ['/public/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})