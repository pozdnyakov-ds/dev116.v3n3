import { i18n } from "./locales/i18n-config";

export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'],
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
    modules: [
      '@vueuse/nuxt',
      '@intlify/nuxt3',
      [
        '@pinia/nuxt',
        {
          autoImports: ['defineStore', 'acceptHMRUpdate'],
        },
      ],
    ],
    imports: {
      dirs: ['stores'],
    },
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'ru'
    }
  }
    
})