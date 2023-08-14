<template>
  <ul>
    <HeaderItem :url="options.about.url" :name="headerNames.about" />
    <HeaderItem :url="options.projects.url" :name="headerNames.projects" />
    <HeaderItem :url="options.experience.url" :name="headerNames.experience" />
  </ul>
</template>

<script>
import HeaderItem from './HeaderItem.vue'
import useLanguageStore from '../../stores/language'
import { mapStores } from 'pinia'
import { api } from '../../includes/api'

export default {
  name: 'HeaderBlog',
  components: {
    HeaderItem
  },
  data() {
    return {
      options: {
        projects: {
          url: '/'
        },
        about: {
          url: '/'
        },
        experience: {
          url: '/'
        }
      }
    }
  },
  computed: {
    ...mapStores(useLanguageStore),
    headerNames() {
      if (this.languageStore.atual === 'en') {
        return this.languageStore.header.en
      } else {
        return this.languageStore.header.pt
      }
    }
  },
  mounted() {
    this.getAboutPost()
    this.getExperience()
  },
  methods: {
    async getAboutPost() {
      const post = await api.getAboutPost()

      if (post.id) {
        this.options.about.url = `/about/${post.id}`
      }

      if (post.message) {
        this.getAboutPost()
        this.getExperience()
      }
    },
    async getExperience() {
      const post = await api.getExperiencePost()

      if (post.id) {
        this.options.experience.url = `/experience/${post.id}`
      }

      if (post.message) {
        this.getAboutPost()
        this.getExperience()
      }
    }
  }
}
</script>
