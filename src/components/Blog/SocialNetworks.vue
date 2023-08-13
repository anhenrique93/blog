<template>
  <ul class="ml-1 flex items-center space-x-2">
    <LoadingIcon v-if="isLoading" :size="'2'" />
    <li v-for="(network, index) in networks" :key="index">
      <NetworkItem
        :iconName="network.name"
        :url="network.url"
        class="text-text_white hover:text-white"
      />
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
      return this.userStore.isLoading
    },
    networks() {
      return this.userStore.myNetworks
    }
  }
}
</script>
