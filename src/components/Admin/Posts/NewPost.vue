<template>
  <div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <input
          v-model="pt_title"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="pt_title"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <input
          v-model="en_title"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="en_title"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <input
          v-model="pt_excerpt"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="pt_excerpt"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <input
          v-model="en_excerpt"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="en_excerpt"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <p class="text-white">Categories</p>
        <select
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="pt_excerpt"
          v-model="selectedCategory"
          @change="addCategory"
        >
          <option v-for="category in adminStore.categories" :key="category.id">
            {{ category.pt_name }}
          </option>
        </select>
        <ul>
          <li
            class="text-white"
            v-for="(category, index) in categories"
            :class="category"
            :key="category"
          >
            {{ category }} -
            <button @click="removeCategory(index, category)">Remover</button>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <p class="text-white">Tags</p>
        <select
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          placeholder="pt_excerpt"
          v-model="selectedTag"
          @change="addTag"
        >
          <option v-for="tag in adminStore.tags" :key="tag.id">
            {{ tag.name }}
          </option>
        </select>
        <ul>
          <li class="text-white" v-for="(tag, index) in tags" :class="tag" :key="tag">
            {{ tag }} -
            <button @click="removeTag(index, tag)">Remover</button>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/2 px-3 mt-8">
        <input
          v-model="author"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="author"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mt-8">
        <input
          v-model="date"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="yyyy-mm-dd"
        />
      </div>
    </div>
    <button
      @click="expandEditor('pt')"
      class="hover:bg-sky-700 text-white rounded-full w-full border border-white mb-1"
    >
      Portugues Text
    </button>
    <MarkdownEditor
      v-show="expand === 'pt'"
      :togle="expand"
      @send-text="getMarkdownTextPt"
      class="mb-4"
    />
    <button
      @click="expandEditor('en')"
      class="hover:bg-sky-700 text-white rounded-full w-full border border-white mb-1"
    >
      English Text
    </button>
    <MarkdownEditor v-show="expand === 'en'" :togle="expand" @send-text="getMarkdownTextEn" />

    <div class="w-full mt-6 flex justify-center">
      <button
        @click="addPostBtn"
        class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
      >
        Send Post
      </button>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '../Global/MarkdownEditor.vue'
import { mapStores } from 'pinia'
import { mapActions } from 'pinia'
import useAdminStore from '../../../stores/admin'
import { toRaw } from 'vue'

export default {
  name: 'NewPost',
  components: {
    MarkdownEditor
  },
  data() {
    return {
      pt_title: '',
      en_title: '',
      pt_excerpt: '',
      en_excerpt: '',
      pt_body: '',
      en_body: '',
      author: '',
      date: '',
      categories: [],
      selectedCategory: '',
      tags: [],
      selectedTag: '',
      expand: 'pt'
    }
  },
  computed: {
    ...mapStores(useAdminStore)
  },
  methods: {
    ...mapActions(useAdminStore, ['addPost']),
    getMarkdownTextPt(text) {
      this.pt_body = text
    },
    getMarkdownTextEn(text) {
      this.en_body = text
    },
    expandEditor(lang) {
      if (lang === 'pt') {
        this.expand = 'pt'
      }

      if (lang === 'en') {
        this.expand = 'en'
      }
    },
    addCategory() {
      if (this.selectedCategory && !this.categories.includes(this.selectedCategory)) {
        this.categories.push(this.selectedCategory)
      }
    },
    removeCategory(index) {
      this.categories.splice(index, 1)
    },
    addTag() {
      if (this.selectedTag && !this.tags.includes(this.selectedTag)) {
        this.tags.push(this.selectedTag)
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1)
    },
    addPostBtn() {
      const categoriesToSend = []
      const tagsToSend = []

      for (let i = 0; i < this.categories.length; i++) {
        toRaw(this.adminStore.categories).forEach((element) => {
          if (element.pt_name === this.categories[i]) {
            categoriesToSend.push(element.id)
          }
        })
      }

      for (let i = 0; i < this.tags.length; i++) {
        toRaw(this.adminStore.tags).forEach((element) => {
          if (element.name === this.tags[i]) {
            tagsToSend.push(element.id)
          }
        })
      }

      const postContent = {
        pt_title: this.pt_title,
        en_title: this.en_title,
        pt_excerpt: this.pt_excerpt,
        en_excerpt: this.en_excerpt,
        pt_body: this.pt_body,
        en_body: this.en_body,
        author: this.author,
        date: this.date,
        categories: categoriesToSend,
        tags: tagsToSend
      }
      this.sendPost(postContent)
    },
    async sendPost(postContent) {
      const response = await this.adminStore.addPost(postContent, localStorage.getItem('token'))
      alert(response)
    }
  }
}
</script>
