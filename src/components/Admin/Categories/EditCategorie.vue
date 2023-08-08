<template>
  <div>
    <div>
      <div class="w-f flex justify-center">
        <div class="h-44 w-96 mb-5 max-h-96 overflow-y-auto border border-gray-300 p-2">
          <div
            v-for="category in categories"
            :key="category.id"
            class="cursor-pointer hover:bg-sky-700 py-2 border-b border-gray-300 text-white"
            @click="getCategory(category)"
          >
            {{ category.pt_name }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <input
          v-model="pt_name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="pt_name"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <input
          v-model="en_name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="en_name"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="w-full mt-6 flex justify-center">
      <button
        @click="editCategoryBtn"
        class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
      >
        Edit category
      </button>
    </div>
  </div>
</template>
<script>
import { api } from '../../../includes/api'
import { mapStores } from 'pinia'
import { mapActions } from 'pinia'
import useAdminStore from '../../../stores/admin'

export default {
  name: 'EditCategory',
  data() {
    return {
      pt_name: '',
      en_name: '',
      categories: [],
      selectedCategory: ''
    }
  },
  computed: {
    ...mapStores(useAdminStore)
  },
  methods: {
    ...mapActions(useAdminStore, ['updateCategory']),
    getCategory(category) {
      this.selectedCategory = category
      this.pt_name = this.selectedCategory.pt_name
      this.en_name = this.selectedCategory.en_name
    },
    editCategoryBtn() {
      const categoryContent = {
        pt_name: this.pt_name,
        en_name: this.en_name
      }

      const categoryId = this.selectedCategory.id

      this.sendCategory(categoryContent, categoryId)
    },
    async sendCategory(categoryContent, categoryId) {
      const response = await api.authenticatedRequest.updateCategory(
        categoryContent,
        localStorage.getItem('token'),
        categoryId
      )
      if (response) {
        alert(
          `name: ${this.selectedCategory.pt_name} changed successfully to: ${categoryContent.pt_name}`
        )
      }
      this.categories = await api.authenticatedRequest.categories(localStorage.getItem('token'))
    }
  },
  async beforeMount() {
    this.categories = await api.authenticatedRequest.categories(localStorage.getItem('token'))
  }
}
</script>
