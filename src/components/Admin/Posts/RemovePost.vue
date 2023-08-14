<template>
  <div>
    <div class="mb-5 max-h-96 overflow-y-auto border border-gray-300 p-2">
      <div
        v-for="post in posts"
        :key="post.id"
        class="cursor-pointer hover:bg-sky-700 py-2 border-b border-gray-300 text-white"
        @click="getPost(post)"
      >
        {{ post.pt_title }}
      </div>
    </div>
    <div class="mt-2 flex flex-row">
      <button
        @click="loadPosts('more')"
        class="mr-2 w-15 bg-blue-500 hover:bg-blue-700 font-bold px-4 rounded-full text-center py-2 text-white"
      >
        more
      </button>
      <button
        @click="loadPosts('less')"
        class="w-15 bg-blue-500 hover:bg-blue-700 font-bold px-4 rounded-full text-center py-2 text-white"
      >
        less
      </button>
    </div>
    <p v-if="isLoading" class="text-white">Carregando...</p>
    <p class="text-white mt-3">Post to delete:</p>
    <div class="border-4 border-red-500 p-4">
      <p class="text-white">{{ selectedPost }}</p>
    </div>
    <div class="w-full mt-6 flex justify-center">
      <button
        @click="removePostBtn"
        class="text-white p-5 rounded-full bg-red-500 hover:bg-red-700"
      >
        Remove Post
      </button>
    </div>
  </div>
</template>

<script>
import { api } from '../../../includes/api'

export default {
  name: 'RemovePost',
  data() {
    return {
      posts: [],
      selectedPost: '',
      page: 1,
      postsPerPage: 15,
      isLoading: false
    }
  },
  async beforeMount() {
    const posts = await api.getPostsPerPageAdmin(this.page, this.postsPerPage)
    this.posts = posts
  },
  methods: {
    async loadPosts(moreOrLess) {
      if (moreOrLess === 'more' && this.page >= 1) {
        this.page++
      }
      if (moreOrLess === 'less' && this.page > 1) {
        this.page--
      }
      this.isLoading = true
      this.posts = await api.getPostsPerPageAdmin(this.page, this.postsPerPage)
      this.isLoading = false
    },
    getPost(post) {
      this.selectedPost = post
    },
    async removePostBtn() {
      const response = await api.authenticatedRequest.deletePost(
        localStorage.getItem('token'),
        this.selectedPost.id
      )
      if (response) {
        const posts = await api.getPostsPerPageAdmin(this.page, this.postsPerPage)

        if (posts) {
          this.posts = posts
        }

        alert(`Post id:${this.selectedPost.id} title: ${this.selectedPost.pt_title} removed!`)
      }
    }
  }
}
</script>
