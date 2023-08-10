  <template>
    <div>
      <div>
        <div class="w-f flex justify-center">
          <div class="h-96 w-96 mb-5 max-h-96 overflow-y-auto border border-gray-300 p-2">
            <div
              v-for="network in networks"
              :key="network.id"
              class="cursor-pointer hover:bg-sky-700 py-2 border-b border-gray-300 text-white"
              @click="getNetwork(network)"
            >
              {{ network.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mt-6 flex justify-center">
        <button
          @click="deleteNetworkBtn"
          class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
        >
          Remove network
        </button>
      </div>
      <div class="border-4 mt-4 border-red-500 p-4">
        <p class="text-white">{{ selectedNetwork }}</p>
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
        networks: [],
        selectedNetwork: ''
      }
    },
    computed: {
      ...mapStores(useAdminStore)
    },
    methods: {
      ...mapActions(useAdminStore, ['updateNetwork']),
      getNetwork(network) {
        this.selectedNetwork = network
      },
      deleteNetworkBtn() {
        const networkId = this.selectedNetwork.id

        this.deleteNetwork(networkId)
      },
      async deleteNetwork(networkId) {
        const response = await api.authenticatedRequest.deleteNetwork(
          localStorage.getItem('token'),
          networkId
        )
        if (response) {
          alert(`name: ${this.selectedNetwork.name} successufull removed!`)
        }
        this.networks = await api.authenticatedRequest.networks(localStorage.getItem('token'))
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
