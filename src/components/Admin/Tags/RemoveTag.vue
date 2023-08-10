<template>
  <div>
    <div>
      <div class="w-f flex justify-center">
        <div class="h-96 w-96 mb-5 max-h-96 overflow-y-auto border border-gray-300 p-2">
          <div
            v-for="tag in tags"
            :key="tag.id"
            class="cursor-pointer hover:bg-sky-700 py-2 border-b border-gray-300 text-white"
            @click="getTag(tag)"
          >
            {{ tag.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-6 flex justify-center">
      <button
        @click="deleteTagBtn"
        class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
      >
        Remove tag
      </button>
    </div>
    <div class="border-4 mt-4 border-red-500 p-4">
      <p class="text-white">{{ selectedTag }}</p>
    </div>
  </div>
</template>
<script>
import { api } from '../../../includes/api'
import { mapStores } from 'pinia'
import { mapActions } from 'pinia'
import useAdminStore from '../../../stores/admin'

export default {
  name: 'RemoveTag',
  data() {
    return {
      tags: [],
      selectedTag: ''
    }
  },
  computed: {
    ...mapStores(useAdminStore)
  },
  methods: {
    ...mapActions(useAdminStore, ['removeTag']),
    getTag(tag) {
      this.selectedTag = tag
    },
    deleteTagBtn() {
      const tagId = this.selectedTag.id

      this.deleteTag(tagId)
    },
    async deleteTag(tagId) {
      const response = await api.authenticatedRequest.deleteTag(
        localStorage.getItem('token'),
        tagId
      )
      if (response) {
        alert(`name: ${this.selectedTag.name} successufull removed!`)
      }
      this.tags = await api.authenticatedRequest.tags(localStorage.getItem('token'))
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
