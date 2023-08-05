<template>
  <template v-if="this.adminStore.isLoggedIn">
    <div class="flex">
      <AdminPanel @admin-logout="logout" />
      <div class="flex-1 mx-20"></div>
      <!-- Paginas aqui!!! -->
    </div>
  </template>
  <template v-else>
    <AdminAuth />
  </template>
</template>

<script>
import AdminPanel from '../../components/Admin/AdminPanel.vue'
import AdminAuth from '../../components/Admin/AdminAuth.vue'
import { mapStores } from 'pinia'
import useAdminStore from '../../stores/admin'

export default {
  components: {
    AdminPanel,
    AdminAuth
  },
  data() {
    return {
      menuOption: 0
    }
  },
  computed: {
    ...mapStores(useAdminStore)
  },
  beforeMount() {
    const token = localStorage.getItem('token')

    if (token) {
      this.adminStore.isLoggedIn = true
    }
  },
  methods: {
    logout() {
      const token = localStorage.getItem('token')

      if (token) {
        localStorage.removeItem('token')
        this.adminStore.isLoggedIn = false
      }
    }
  }
}
</script>
