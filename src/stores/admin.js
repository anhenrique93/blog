import { defineStore } from 'pinia'
import { api } from '../includes/api'

export default defineStore('admin', {
  state: () => ({
    isLoggedIn: false,
    categories: [],
    tags: '',
    networks: ''
  }),
  actions: {
    async authenticate(values) {
      const response = await api.login(values.email, values.password)

      this.isLoggedIn = true

      //Armazenar token
      localStorage.setItem('token', response.token)
    },
    async getCategories(token) {
      const response = await api.authenticatedRequest.categories(token)
      this.categories = response
    },
    async getTags(token) {
      const response = await api.authenticatedRequest.tags(token)
      this.tags = response
    },
    async getNetworks(token) {
      const response = await api.authenticatedRequest.networks(token)
      this.networks = response
    },

    //ADD
    async addPost(token, values) {
      return await api.authenticatedRequest.addPost(token, values)
    },

    //Edit
    async updatePost(values, id, token) {
      return await api.authenticatedRequest.updatePost(values, token, id)
    }
  }
})
