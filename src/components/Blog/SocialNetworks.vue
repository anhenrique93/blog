<template>
  <ul class="ml-1 flex items-center space-x-2">
    <li v-for="(network, index) in networks" :key="index">
      <template v-if="isLoading">
        <LoadingIcon :size="'2'" />
      </template>
      <template v-else>
        <NetworkItem
        :iconName="network.name"
        :url="network.url"
        class="text-text_white hover:text-white"
      />
      </template>
    </li>
  </ul>
</template>

<script>
import NetworkItem from './NetworkItem.vue'
import { mapStores } from 'pinia'
import useUserStore from '../../stores/user'
import LoadingIcon from './global/LoadingIcon.vue'

export default {
  name: 'HeaderRightSocial',
  components: {
    NetworkItem,
    LoadingIcon
  },
  computed: {
    ...mapStores(useUserStore),
    isLoading() {
      console.log(this.userStore.isLoading)
      return this.userStore.isLoading
    },
    networks() {
      return this.userStore.user.networks
    }
  }
}
</script>
