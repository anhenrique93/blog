<template>
  <div v-if="isLoading">
    <div v-for="project in loadingProjcts" :key="project">
      <ProjectResume :project="project" />
    </div>
  </div>
  <div v-else v-for="project in projects" :key="project" class="mb-12">
    <ProjectResume :project="project" />
    <div class="text-text_white">
      <p>clientHeight: {{ clientHeight }}</p>
      <p>scrollHeight: {{ scrollHeight }}</p>
      <p>clientTop: {{ scrollTop }}</p>
      <p>clientTop: {{ scrollTop }}</p>
      <p>isOnBottom?: {{ isOnBottomPositon }}</p>
    </div>
  </div>
</template>

<script>
import ProjectResume from './ProjectResume.vue'
import { mapActions } from 'pinia'
import { mapStores } from 'pinia'
import useProjectsStore from '../../../stores/projects'

export default {
  name: 'ProjectsResumeContainer',
  components: {
    ProjectResume
  },
  data() {
    return {
      postsPerPage: 4,
      loadingProjcts: Array(6),
      isOnBottomPositon: false,
      clientHeight: '',
      scrollHeight: '',
      scrollTop: ''
    }
  },
  computed: {
    ...mapStores(useProjectsStore),
    isLoading() {
      return this.projectsStore.isLoading
    },
    projects() {
      return this.projectsStore.getProjects
    }
  },
  methods: {
    ...mapActions(useProjectsStore, ['fetchProjectsPerPage']),
    async projectsPerPage() {
      await this.fetchProjectsPerPage(this.postsPerPage)
    },
    handleScroll() {
      const clientHeight = document.documentElement.clientHeight
      this.clientHeight = clientHeight
      const scrollHeight = document.documentElement.scrollHeight
      this.scrollHeight = scrollHeight
      const scrollTop = window.scrollY
      this.scrollTop = scrollTop

      if (scrollTop + clientHeight >= scrollHeight) {
        this.isOnBottomPositon = true
      } else {
        this.isOnBottomPositon = false
      }
    }
  },
  mounted() {
    if (!this.projectsStore.getProjects) {
      this.projectsPerPage()
    }

    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {
    async isOnBottomPositon(value) {
      if (value && !this.projectsStore.allProjectsAreFetched) {
        await this.fetchProjectsPerPage(this.postsPerPage)
      }
    }
  },
  created() {
    this.loadingProjcts.fill(0)
  }
}
</script>
