import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: true,
    lazy: true,
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
      },
      en: {
        index: {
          title: "Home",
        },
        about: {
          title: "About",
        },
        products: {
          title: "Products",
        },
        services: {
          title: "Services",
        },
        contacts: {
          title: "Contacts",
        },
        cab: {
          title: "Cabinet",
        },
        admin: {
          title: "Admin panel",
        },
        footer: {
          feedback: "Our contacts",
          copyright: "All rights reserved",
        }
      }
    }
  })

  vueApp.use(i18n)
})