import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import fr from '../locales/fr.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      fr,
    },
  })

  nuxtApp.vueApp.use(i18n)
})