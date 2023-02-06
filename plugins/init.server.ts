import { useStorage } from '@vueuse/core'

export default defineNuxtPlugin(function() {
    
    var loggedIn = useStorage('loggedIn', false)
    console.log("On server LoggedIn: ", loggedIn.value)

    if (loggedIn.value) {
        const userStore = useUserStore()
        userStore.loggedIn = true
    }

    return;
});