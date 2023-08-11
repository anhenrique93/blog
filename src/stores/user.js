import { defineStore } from 'pinia'
import { api } from '../includes/api'

export default defineStore('user', {
    state: () => ({
        users: [],
        user: {}
    }),

    actions: {
        async getUsersProfiles() {
            const users = await api.profiles()
            this.users = users;
            this.user = users[0]
        }
    },
    getters: {
        myUser() {
            return this.user
        },

        myNetworks() {
            const networks = this.user.networks
            return networks
        },

        myInfo() {
            const myInfo = {
                name: this.user.name,
                last_name: this.user.last_name,
                email: this.user.email,
                pt_description: this.user.pt_description,
                en_description: this.user.en_description,
            }

            return myInfo
        },

        myPhoto() {
            return this.user.image
        }
    }
})