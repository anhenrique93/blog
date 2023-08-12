<template>
  <div
    v-if="isLoading"
    class="flex flex-col space-y-3 2xl:flex-row 2xl:space-y-0 xl:flex-row xl:space-y-0 lg:flex-row lg:space-y-0 md:flex-col md:space-y-3 sm:flex-col sd:space-y-3 items-center"
  >
    <LoadingIcon size="5" />
  </div>
  <div
    v-else
    class="flex flex-col space-y-3 2xl:flex-row 2xl:space-y-0 xl:flex-row xl:space-y-0 lg:flex-row lg:space-y-0 md:flex-col md:space-y-3 sm:flex-col sd:space-y-3 items-center"
  >
    <PerfilImage v-if="!isLoading" :imageSrc="userImage" />
    <div class="flex flex-col space-y-2 ml-5">
      <h1 v-if="!isLoading" class="text-text_white text-4xl tracking-tight sm:text-5xl">
        {{ userInfo.name }}
      </h1>
      <h2 v-if="!isLoading" class="text-text_white text-lg font-medium tracking-tight sm:text-xl">
        {{ userInfo.lastName }}
      </h2>
      <p v-if="!isLoading" class="mt-4 max-w-xs leading-normal text-text_white">
        {{ userInfo.description }}
      </p>
    </div>
  </div>
</template>

<script>
import PerfilImage from './global/PerfilImage.vue'
import useUserStore from '../../stores/user'
import useLanguageStore from '../../stores/language'
import { mapStores } from 'pinia'
import LoadingIcon from './global/LoadingIcon.vue'

export default {
  name: 'UserInfo',
  components: {
    PerfilImage,
    LoadingIcon
  },
  computed: {
    ...mapStores(useUserStore),
    ...mapStores(useLanguageStore),
    userImage() {
      return this.userStore.myPhoto
    },
    isLoading() {
      return this.userStore.isLoading
    },
    userInfo() {
      const name = this.userStore.myInfo.name
      const lastName = this.userStore.myInfo.last_name
      let description = ''

      if (this.languageStore.atual === 'en') {
        description = this.userStore.myInfo.en_description
      } else {
        description = this.userStore.myInfo.pt_description
      }

      const userInfo = {
        name: name,
        lastName: lastName,
        description: description
      }

      return userInfo
    }
  }
}
</script>
