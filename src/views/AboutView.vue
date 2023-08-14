<template>
  <div class="w-full" v-if="isLoading">
    <LoadingProject />
  </div>
  <div v-else class="prose">
    <article>
      <div v-html="renderedMarkdown"></div>
    </article>
  </div>
</template>

<script>
import LoadingProject from '../components/Blog/blogPost/LoadingProject.vue'
import MarkdownIt from 'markdown-it'
import useLanguageStore from '../stores/language'
import { mapStores } from 'pinia'
import { api } from '../includes/api'

export default {
  name: 'AboutView',
  components: {
    LoadingProject
  },
  data() {
    return {
      post: {},
      postPtBody: '',
      postEnBody: '',
      isLoading: false,
      markdownRenderer: new MarkdownIt()
    }
  },
  computed: {
    ...mapStores(useLanguageStore),
    renderedMarkdown() {
      if (this.languageStore.atual === 'en') {
        return this.markdownRenderer.render(this.postEnBody)
      } else {
        return this.markdownRenderer.render(this.postPtBody)
      }
    }
  },
  created() {
    this.loadPost()
  },
  methods: {
    async loadPost() {
      this.isLoading = true
      const postId = this.$route.params.id
      this.post = await api.getPostById(postId)

      if (this.post.message) {
        this.loadPost()
      }

      this.postPtBody = this.post.pt_body
      this.postEnBody = this.post.en_body
      this.isLoading = false
    }
  }
}
</script>
