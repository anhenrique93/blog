<template>
  <div class="bg-primary_dark">
    <div
      class="grid grid-cols-5 grid-rows-5 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <!-- HEADER LEFT-SIDE -->
      <div
        class="grid-cols-1 grid-rows-1 absolute ml-5 sm:block md:block lg:hidden xl:hidden 2xl:hidden"
      >
        <MobileHeader />
      </div>
      <div class="row-span-5 pt-24 hidden lg:block">
        <HeaderBlog class="fixed" />
      </div>
      <!-- CONTENT -->
      <div
        class="col-span-5 row-span-5 p-x-3 flex flex-col items-center pt-20 pb-0 sm:pt-20 md:pt-16 lg:pt-24 lg:pb-16 xl:pt-24 xl:pb-16 2xl:pt-24 2xl:pb-16 sm:col-span-5 md:col-span-5 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
      >
        <RouterView class="flex flex-col items-center space-y-12 overflow-y-auto" />
      </div>
      <!-- HEADER RIGHT-SIDE -->
      <div class="col-start-5 row-span-5 flex-col pt-24 hidden lg:block">
        <HeaderRight class="fixed" />
      </div>
      <div
        class="text-text_white col-start-2 col-end-5 border-t-2 w-full h-full row-span-5 flex flex-row items-center"
      >
        <FooterBlog />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlog from '../components/Blog/HeaderBlog.vue'
import HeaderRight from '../components/Blog/HeaderRight.vue'
import { mapActions } from 'pinia'
import useUserStore from '../stores/user'
import MobileHeader from '../components/Blog/mobile/MobileHeader.vue'
import FooterBlog from '../components/Blog/FooterBlog.vue'

export default {
  name: 'IndexView',
  components: {
    HeaderBlog,
    HeaderRight,
    MobileHeader,
    FooterBlog
  },
  mounted() {
    this.fetchUsersProfiles()
  },
  methods: {
    ...mapActions(useUserStore, ['getUsersProfiles', 'myUser']),
    fetchUsersProfiles() {
      this.getUsersProfiles()
    }
  }
}
</script>
