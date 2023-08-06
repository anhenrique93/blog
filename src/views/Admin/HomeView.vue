<template>
  <template v-if="this.adminStore.isLoggedIn">
    <div class="flex bg-slate-900">
      <AdminPanel @admin-logout="logout" @chosen-option="showComponent" />
      <div class="flex-1 mx-20 p-5 bg-slate-900">
        <!-- Paginas aqui!!! -->
        <!-- POSTS -->
        <NewPost v-show="renderComponent === 'New Post'" />
        <RemovePost v-show="renderComponent === 'Delete Post'" />
        <EditPost v-show="renderComponent === 'Edit Post'" />

        <!-- CATEGORIES -->
        <NewCategorie v-show="renderComponent === 'New Categorie'" />
        <RemoveCategorie v-show="renderComponent === 'Delete Categorie'" />
        <EditCategorie v-show="renderComponent === 'Edit Categorie'" />

        <!-- TAGS -->
        <NewTag v-show="renderComponent === 'New Tag'" />
        <RemoveTag v-show="renderComponent === 'Delete Tag'" />
        <EditTag v-show="renderComponent === 'Edit Tag'" />

        <!-- NETWORKS -->
        <NewNetwork v-show="renderComponent === 'New Network'" />
        <RemoveNetwork v-show="renderComponent === 'Delete Network'" />
        <EditNetwork v-show="renderComponent === 'Edit Network'" />
      </div>
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
import { mapActions } from 'pinia'
import useAdminStore from '../../stores/admin'

//POSTS
import NewPost from '../../components/Admin/Posts/NewPost.vue'
import RemovePost from '../../components/Admin/Posts/RemovePost.vue'
import EditPost from '../../components/Admin/Posts/EditPost.vue'

//CATEGORIES
import NewCategorie from '../../components/Admin/Categories/NewCategorie.vue'
import RemoveCategorie from '../../components/Admin/Categories/RemoveCategorie.vue'
import EditCategorie from '../../components/Admin/Categories/EditCategorie.vue'

//TAGS
import NewTag from '../../components/Admin/Tags/NewTag.vue'
import RemoveTag from '../../components/Admin/Tags/RemoveTag.vue'
import EditTag from '../../components/Admin/Tags/EditTag.vue'

//NETWORKS
import NewNetwork from '../../components/Admin/Networks/NewNetwork.vue'
import RemoveNetwork from '../../components/Admin/Networks/RemoveNetwork.vue'
import EditNetwork from '../../components/Admin/Networks/EditNetwork.vue'

export default {
  components: {
    AdminPanel,
    AdminAuth,
    NewPost,
    RemovePost,
    EditPost,
    NewCategorie,
    RemoveCategorie,
    EditCategorie,
    NewTag,
    RemoveTag,
    EditTag,
    NewNetwork,
    RemoveNetwork,
    EditNetwork
  },
  data() {
    return {
      renderComponent: '',
    }
  },
  computed: {
    ...mapStores(useAdminStore),
  },
  beforeMount() {
    const token = localStorage.getItem('token')

    if (token) {
      this.adminStore.isLoggedIn = true
      this.getAdminContents(token)
    }
  },
  methods: {
    ...mapActions(useAdminStore, ['getCategories']),
    logout() {
      const token = localStorage.getItem('token')

      if (token) {
        localStorage.removeItem('token')
        this.adminStore.isLoggedIn = false
      }
    },
    showComponent(option) {
      this.renderComponent = option
    },
    async getAdminContents(token) {
      await this.adminStore.getCategories(token)
      await this.adminStore.getTags(token)
      await this.adminStore.getNetworks(token)
    }
  }
}
</script>