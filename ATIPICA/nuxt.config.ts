// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', 'usebootstrap'],
  googleFonts: { 
    families: {
      Roboto: true,
      Poppins: true,
    },
  },
})