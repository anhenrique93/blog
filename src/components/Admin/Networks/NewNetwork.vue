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
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <input
          v-model="url"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="url"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>
    <div class="w-full mt-6 flex justify-center">
      <button
        @click="addNetworkBtn"
        class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
      >
        Add Network
      </button>
    </div>
    <div class="w-full flex justify-center">
      <ul class="mt-5 h-60 overflow-auto w-full flex flex-col border border-red-400 p-3">
        <li class="text-white" v-for="network in networks" :class="network" :key="network">
          -> {{ network.name }} - {{ network.url }}
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
  name: 'NewNetwork',
  data() {
    return {
      name: '',
      url: '',
      networks: []
    }
  },
  computed: {
    ...mapStores(useAdminStore)
  },
  methods: {
    ...mapActions(useAdminStore, ['getNetworks']),
    async addNetworkBtn() {
      const networkContent = {
        name: this.name,
        url: this.url
      }

      const response = await api.authenticatedRequest.addNetwork(
        networkContent,
        localStorage.getItem('token')
      )

      if (response) {
        alert(`Network: ${response} add successfull!`)
        this.networks = await api.authenticatedRequest.networks(localStorage.getItem('token'))
      }
    }
  },
  async beforeMount() {
    const networks = await api.authenticatedRequest.networks(localStorage.getItem('token'))

    if (networks) {
      this.networks = networks
    }
  }
}
</script>
