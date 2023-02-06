export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore()
    if (!userStore.loggedIn) {
        return navigateTo('/login')
    }
    // console.log("From: ", from, "To: ", to)
    // return abortNavigation()
  })