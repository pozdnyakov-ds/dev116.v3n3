import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ru',
    messages: {
      ru: {
        index: {
            title: "Начало",
        },
        about: {
        title: "О компании",
        },
        products: {
        title: "Продукты",
        },
        services: {
        title: "Услуги",
        },
        contacts: {
        title: "Контакты",
        },
        cab: {
        title: "Кабинет",
        },
        admin: {
        title: "Управление",
        },
        footer: {
        feedback: "Наши контакты",
        copyright: "Все права защищены",
        }
      }
    }
  })

  vueApp.use(i18n)
})