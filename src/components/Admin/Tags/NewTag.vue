<template>
  <div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <input
          v-model="name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="name"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="w-full mt-6 flex justify-center">
      <button
        @click="addTagBtn"
        class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
      >
        Add Tag
      </button>
    </div>
    <div class="w-full flex justify-center">
      <ul class="mt-5 h-60 overflow-auto w-96 flex flex-col border border-red-400 p-3">
        <li class="text-white" v-for="tag in tags" :class="tag" :key="tag">
          -> {{ tag.name }}
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
  name: 'NewTag',
  data() {
    return {
      name: '',
      tags: []
    }
  },
  computed: {
    ...mapStores(useAdminStore)
  },
  methods: {
    ...mapActions(useAdminStore, ['getTags']),
    async addTagBtn() {
      const tagContent = {
        name: this.name,
      }

      const response = await api.authenticatedRequest.addTag(
        tagContent,
        localStorage.getItem('token')
      )

      if (response) {
        alert(`Tag: ${response} add successfull!`)
        this.tags = await api.authenticatedRequest.tags(localStorage.getItem('token'))
      }
    }
  },
  async beforeMount() {
    
    const tags = await api.authenticatedRequest.tags(localStorage.getItem('token'))

    if (tags) {
      this.tags = tags
    }
    
  }
}
</script>
