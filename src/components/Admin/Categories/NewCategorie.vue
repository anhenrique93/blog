<template>
  <div>
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
        @click="addCategoryBtn"
        class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
      >
        Add category
      </button>
    </div>
    <div class="w-full flex justify-center">
      <ul class="mt-5 h-60 overflow-auto w-96 flex flex-col border border-red-400 p-3">
        <li class="text-white" v-for="category in categories" :class="category" :key="category">
          -> {{ category.pt_name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { mapActions } from 'pinia'
import useAdminStore from '../../../stores/admin'
import { api } from '../../../includes/api'

export default {
  name: 'NewCategorie',
  data() {
    return {
      pt_name: '',
      en_name: '',
      categories: []
    }
  },
  computed: {
    ...mapStores(useAdminStore)
  },
  methods: {
    ...mapActions(useAdminStore, ['getCategories']),
    async addCategoryBtn() {
      const categoryContent = {
        pt_name: this.pt_name,
        en_name: this.en_name
      }

      const response = await api.authenticatedRequest.addCategory(
        categoryContent,
        localStorage.getItem('token')
      )

      if (response) {
        alert(`Category: ${response} add successfull!`)
        this.categories = await api.authenticatedRequest.categories(localStorage.getItem('token'))
      }
    }
  },
  async beforeMount() {
    
    const categories = await api.authenticatedRequest.categories(localStorage.getItem('token'))
    if (categories) {
      this.categories = categories
    }
    
  }
}
</script>
