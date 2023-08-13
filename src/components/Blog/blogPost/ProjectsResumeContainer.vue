<template>
  <div v-if="isLoading">
    <div v-for="project in loadingProjcts" :key="project">
      <ProjectResume :project="project" />
    </div>
  </div>
  <div v-else v-for="project in projects" :key="project" class="mb-12">
    <ProjectResume :project="project" />
  </div>
</template>

<script>
import ProjectResume from './ProjectResume.vue'
import { mapActions } from 'pinia'
import { mapStores } from 'pinia'
import useProjectsStore from '../../../stores/projects'

export default {
  name: 'ProjectsResumeContainer',
  props: ['isOnBottomPositon'],
  components: {
    ProjectResume
  },
  data() {
    return {
      postsPerPage: 4,
      atualPage: 1,
      loadingProjcts: Array(6)
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
      await this.fetchProjectsPerPage(this.atualPage, this.postsPerPage)
    }
  },
  mounted() {
    this.projectsPerPage()
  },
  watch: {
    async isOnBottomPositon(value) {
      if (value) {
        this.atualPage = this.atualPage + 1
        await this.fetchProjectsPerPage(this.atualPage, this.postsPerPage)
      }
    }
  },
  created() {
    this.loadingProjcts.fill(0)
  }
}
</script>
