import { defineStore } from 'pinia'
import { api } from '../includes/api'

export default defineStore('projects', {
  state: () => ({
    projects: [],
    isLoading: true
  }),

  actions: {
    async fetchProjectsPerPage(pageNumber, postsPerPage) {
      const newProjects = await api.getPostsPerPage(pageNumber, postsPerPage)

      if (newProjects) {
        this.projects.push(...newProjects)
        this.isLoading = false
      }
    }
  },
  getters: {
    getProjects() {
      if (!this.isLoading) {
        return this.projects
      }
    }
  }
})
