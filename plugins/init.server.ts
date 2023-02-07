import { useSessionStorage } from '@vueuse/core'

export default defineNuxtPlugin(function() {
    const loggedIn = useSessionStorage('logged-in', false)
    console.log("Server Session Storage: ", loggedIn.value)
    
    if (loggedIn.value) {
        const userStore = useUserStore()
        userStore.loggedIn = true
    }

    return;
});