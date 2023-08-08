<template>
  <div>
    <div>
      <div class="w-f flex justify-center">
        <div class="h-96 w-96 mb-5 max-h-96 overflow-y-auto border border-gray-300 p-2">
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
    <div class="w-full mt-6 flex justify-center">
      <button
        @click="deleteCategoryBtn"
        class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
      >
        Remove category
      </button>
    </div>
    <div class="border-4 mt-4 border-red-500 p-4">
      <p class="text-white">{{ selectedCategory }}</p>
    </div>
  </div>
</template>
<script>
import { api } from '../../../includes/api'
import { mapStores } from 'pinia'
import { mapActions } from 'pinia'
import useAdminStore from '../../../stores/admin'

export default {
  name: 'RemoveCategory',
  data() {
    return {
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
    deleteCategoryBtn() {
      const categoryId = this.selectedCategory.id

      this.deleteCategory(categoryId)
    },
    async deleteCategory(categoryId) {
      const response = await api.authenticatedRequest.deleteCategory(
        localStorage.getItem('token'),
        categoryId
      )
      if (response) {
        alert(`name: ${this.selectedCategory.pt_name} successufull removed!`)
      }
      this.categories = await api.authenticatedRequest.categories(localStorage.getItem('token'))
    }
  },
  async beforeMount() {
    this.categories = await api.authenticatedRequest.categories(localStorage.getItem('token'))
  }
}
</script>
