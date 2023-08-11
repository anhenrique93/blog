<template>
  <template v-if="this.adminStore.isLoggedIn">
    <div class="flex bg-slate-900">
      <AdminPanel @admin-logout="logout" @chosen-option="showComponent" />
      <div class="flex-1 mx-20 p-5 bg-slate-900">
        <!-- Paginas aqui!!! -->
        <!-- HOME -->
        <p class="text-white" v-show="isUpdating">Receving {{ adminContent }}...</p>
        <div class="flex flex-row items-center space-x-8" v-if="renderComponent === 'Home'">
          <p v-show="isReceivingImage" class="text-white">{{ receivingMessage }}</p>
          <PerfilImage v-show="!isReceivingImage" PerfilImage :imageSrc="profile.image" />
          <div class="flex flex-col space-y-3">
            <p class="text-white">Name: {{ profile.name }}</p>
            <p class="text-white">Last Name: {{ profile.last_name }}</p>
            <p class="text-white">Email: {{ profile.email }}</p>
            <p class="text-white">Description PT: {{ profile.pt_description }}</p>
            <p class="text-white">Description EN: {{ profile.en_description }}</p>
            <p class="text-white" @click="numberOfPosts">
              <span class="cursor-pointer border border-white p-1">Show number of posts</span> 
              : {{ postsNumber }}
            </p>
            <h1 class="cursor-pointer w-48 border border-white p-1 text-white" @click="receiveAdminContent()">Receive admin content</h1>
            <h1 class="cursor-pointer w-16 border border-white p-1 text-white" @click="logout()">Logout</h1>
          </div>
        </div>

        <!-- POSTS -->
        <NewPost v-if="renderComponent === 'New Post'" />
        <RemovePost v-if="renderComponent === 'Delete Post'" />
        <EditPost v-if="renderComponent === 'Edit Post'" />

        <!-- CATEGORIES -->
        <NewCategorie v-if="renderComponent === 'New Categorie'" />
        <RemoveCategorie v-if="renderComponent === 'Delete Categorie'" />
        <EditCategorie v-if="renderComponent === 'Edit Categorie'" />

        <!-- TAGS -->
        <NewTag v-if="renderComponent === 'New Tag'" />
        <RemoveTag v-if="renderComponent === 'Delete Tag'" />
        <EditTag v-if="renderComponent === 'Edit Tag'" />

        <!-- NETWORKS -->
        <NewNetwork v-if="renderComponent === 'New Network'" />
        <RemoveNetwork v-if="renderComponent === 'Delete Network'" />
        <EditNetwork v-if="renderComponent === 'Edit Network'" />

        <!-- PERFIL -->
        <UpdatePerfil v-if="renderComponent === 'Perfil'" />

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
import { api } from '../../includes/api'

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

//HOME
import PerfilImage from '../../components/Admin/Home/PerfilImage.vue'

//PERFIL
import UpdatePerfil from '../../components/Admin/Perfil/UpdatePerfil.vue'

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
    EditNetwork,
    PerfilImage,
    UpdatePerfil
  },
  data() {
    return {
      renderComponent: 'Home',
      isUpdating: false,
      adminContent: '',
      profile: '',
      postsNumber: '',
      isReceivingImage: false,
      receivingMessage: ""
    }
  },
  computed: {
    ...mapStores(useAdminStore),
  },
  async beforeMount() {
    const token = localStorage.getItem('token')

    if (token) {
      this.adminStore.isLoggedIn = true
      this.receiveAdminContent()
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
      console.log(option)
    },
    async numberOfPosts() {
      const posts = await api.getAllPosts()

      this.postsNumber = posts.length

    },
    async receiveAdminContent() {
      const token = localStorage.getItem('token')
      await this.getAdminContents(token);

      const profiles = await api.profiles()

      this.profile = profiles[0]
      this.isReceivingImage = false;

    },
    async getAdminContents(token) {
      this.isUpdating = true;

      this.adminContent = "categories";

      setTimeout(() => {
      }, 10000);

      this.adminStore.getCategories(token)
        .then(() => {
          this.adminContent = "tags";
          setTimeout(() => {
          }, 10000);
          this.adminStore.getTags(token);
        })
        .then(() => {
          this.adminContent = "networks";
          setTimeout(() => {
          }, 10000);
          this.adminStore.getNetworks(token);
        })
        .then(() => {
          setTimeout(() => {
          }, 10000);
          this.isUpdating = false;
        })
        .catch(error => {
          this.adminContent = "Erro ao carregar dados:", error;
          this.isUpdating = false;
        });
    }
  }
}
</script>