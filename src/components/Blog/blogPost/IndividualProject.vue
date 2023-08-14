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
import { api } from '../../../includes/api'
import MarkdownIt from 'markdown-it'
import useLanguageStore from '../../../stores/language'
import { mapStores } from 'pinia'
import LoadingProject from '../../Blog/blogPost/LoadingProject.vue'

export default {
  name: 'IndividualProject',
  data() {
    return {
      post: {},
      postPtBody: '',
      postEnBody: '',
      isLoading: false,
      markdownRenderer: new MarkdownIt()
    }
  },
  components: {
    LoadingProject
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
      this.postPtBody = this.post.pt_body
      this.postEnBody = this.post.en_body
      this.isLoading = false
    }
  }
}
</script>
