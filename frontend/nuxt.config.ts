// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    'usebootstrap',
    'nuxt-icon'
],

  server: {
    serverMiddleware: [
      { path: '/api', handler: '~/backend/ValidateNumberController.cs' }
    ]
  },

css: [
    "bootstrap/scss/bootstrap.scss",
    "@/assets/style/reset.css"
]
})
