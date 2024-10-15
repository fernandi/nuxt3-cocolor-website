export default defineNuxtRouteMiddleware((to, from, next) => {
  const i18n = useI18n()  // Utilise le composable i18n pour accéder au système de traduction
  if (to.path.startsWith('/fr')) {
    i18n.locale.value = 'fr'  // Change la locale à 'fr' si le chemin commence par /fr
  } else {
    i18n.locale.value = 'en'  // Sinon, reste en 'en'
  }
  next()
})