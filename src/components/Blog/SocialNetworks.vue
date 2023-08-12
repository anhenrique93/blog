<template>
  <ul class="ml-1 flex items-center space-x-2">
    <li v-for="(network, index) in networks" :key="index">
      <LoadingIcon v-if="isLoading" :size="'1'" />
      <NetworkItem
        v-if="!isLoading"
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
    networks() {
      return this.userStore.user.networks
    },
    isLoading() {
      return this.userStore.isLoading
    }
  }
}
</script>
