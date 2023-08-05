import { defineStore } from 'pinia'
import { api } from '../includes/api'

export default defineStore('admin', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    async authenticate(values) {
      const response = await api.login(values.email, values.password)

      this.isLoggedIn = true

      //Armazenar token
      localStorage.setItem('token', response.token)
    }
  }
})
