import { defineStore } from 'pinia'
import { api } from '../includes/api'

export default defineStore('user', {
  state: () => ({
    users: [],
    user: {},
    isLoading: false
  }),

  actions: {
    async getUsersProfiles() {
      this.isLoading = true
      const users = await api.profiles()

      if (users) {
        this.users = users
        this.user = users[0]
        this.isLoading = false
      }
    }
  },
  getters: {
    myUser() {
      if (this.isLoading) {
        return this.isLoading
      } else {
        return this.user
      }
    },

    myNetworks() {
      if (this.isLoading) {
        return this.isLoading
      } else {
        const networks = this.user.networks
        return networks
      }
    },

    myInfo() {
      if (this.isLoading) {
        return this.isLoading
      } else {
        const myInfo = {
          name: this.user.name,
          last_name: this.user.last_name,
          email: this.user.email,
          pt_description: this.user.pt_description,
          en_description: this.user.en_description
        }

        return myInfo
      }
    },

    myPhoto() {
      if (this.isLoading) {
        return this.isLoading
      } else {
        return this.user.image
      }
    }
  }
})
