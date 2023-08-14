import { defineStore } from 'pinia'
import { api } from '../includes/api'

export default defineStore('projects', {
  state: () => ({
    projects: [],
    isLoading: true,
    atualPage: 1,
    allProjectsAreFetched: false
  }),

  actions: {
    async fetchProjectsPerPage(postsPerPage) {
      let newProjects = await api.getPostsPerPage(this.atualPage, postsPerPage)

      if (newProjects.message) {
        newProjects = await api.getPostsPerPage(this.atualPage, postsPerPage)
      }

      if (newProjects) {
        this.projects.push(...newProjects)
        this.isLoading = false
        this.allProjectsAreFetched = false
        this.atualPage = this.atualPage + 1
      } else {
        this.allProjectsAreFetched = true
      }
    }
  },
  getters: {
    getProjects() {
      if (!this.isLoading) {
        return this.projects
      }
    },
    getAtualPage() {
      return this.atualPage
    }
  }
})
