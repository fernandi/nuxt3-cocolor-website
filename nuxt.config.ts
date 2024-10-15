// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  build: {
    transpile: [/vue-i18n/],
    extend(config, { isDev, isClient }) {
      if (!isDev) {
        config.plugins.push(
          new webpack.DefinePlugin({
            '__VUE_PROD_DEVTOOLS__': 'false'
          })
        )
      }
    },
  },
  css: [
    '/assets/main.css'
  ],
  app: {
    head: {
      title: 'Cocolor - Play with Colors',
      htmlAttrs: {
        lang: 'en' // Sera mis à jour via le plugin
      },
      meta: [
        { hid: 'description', name: 'description', content: 'Cocolor is an interactive app to play with colors.' },
        { hid: 'og:title', property: 'og:title', content: 'Cocolor - Play with Colors' },
        { hid: 'og:description', property: 'og:description', content: 'Discover Cocolor and its vibrant color mixing experiences!' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.cocolor.app' },
        { hid: 'og:image', property: 'og:image', content: '/images/social-share.png' },
        { name: 'robots', content: 'index, follow' }, // Pour permettre l'indexation par les moteurs de recherche
        { name: 'author', content: 'hérétique' },
        { name: 'keywords', content: 'Cocolor, colors, jeux, couleurs, paint, Rosy Lamb, digital art, jouer avec couleurs' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.cocolor.app' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: 'https://www.cocolor.app'
    }
  },
  hooks: {
    'vue-renderer:ssr:context': (context) => {
      // Utilise le locale de i18n pour mettre à jour la langue
      const locale = context.nuxt.i18n?.locale || 'en';
      context.htmlAttrs = context.htmlAttrs || {};
      context.htmlAttrs.lang = locale;

            // Utiliser les traductions pour les balises meta et le titre
            const i18n = context.app.i18n; // Utiliser i18n pour récupérer la langue courante

            if (i18n) {
              const translations = {
                en: {
                  title: 'Cocolor - Play with Colors',
                  description: 'Cocolor is an interactive app to play with colors.',
                  ogTitle: 'Cocolor - Play with Colors',
                  ogDescription: 'Discover Cocolor and its vibrant color mixing experiences!',
                },
                fr: {
                  title: 'Cocolor - Jouez avec les couleurs',
                  description: 'Cocolor est une application interactive pour jouer avec les couleurs.',
                  ogTitle: 'Cocolor - Jouez avec les couleurs',
                  ogDescription: 'Découvrez Cocolor et ses expériences vibrantes de mélange des couleurs !',
                }
              };

              console.log('change meta i18n');

      
              const translation = translations[i18n.locale] || translations.en;
              context.meta = context.meta || [];
              
              // Met à jour les balises meta
              context.meta.push(
                { hid: 'description', name: 'description', content: translation.description },
                { hid: 'og:title', property: 'og:title', content: translation.ogTitle },
                { hid: 'og:description', property: 'og:description', content: translation.ogDescription },
              );
      
              // Met à jour le titre
              context.title = translation.title;
            }else{
              console.log('no i18n')
            }
    },
    router: {
      extendRoutes(routes, resolve) {
        routes.push({
          path: '/fr',
          component: resolve(__dirname, 'pages/index.vue'),
          name: 'index-fr'
        })
      }
    }
  }
});

