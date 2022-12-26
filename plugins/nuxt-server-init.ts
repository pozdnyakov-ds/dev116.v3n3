export default defineNuxtPlugin(async () => {

    if (process.server) {
        console.log("Процесс на сервере...")
        return;
    }

});