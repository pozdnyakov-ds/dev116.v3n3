export const useUserStore = defineStore('user', {
    state: () => ({
        name: 'dash_user',
        surname: '', 
        email: 'd.istomin@itspecial.net',
        phone: ''
    }),
    actions: {
        setPhone(phone: string) { 
            this.phone = phone
        }
    },
    getters: {
        getPhone(): string { 
            return this.phone
        }
    }
})
