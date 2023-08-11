<template>
    <div>
      <div>
        <!-- FIELDS TO EDIT -->
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
          <div class="w-full md:w-1/2 px-3">
            <input
              v-model="last_name"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="last_name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <textarea
              v-model="pt_description"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="pt_description"
            />
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <textarea
              v-model="en_description"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="en_description"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mt-8">
            <input
              v-model="email"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="email"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mt-8">
            <input
              v-model="image_url"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="image_url"
            />
          </div>
          <div class="w-full mt-6 flex justify-center">
            <button
              @click="editProfileBtn"
              class="text-white p-5 rounded-full bg-indigo-500 hover:bg-sky-700"
            >
            Edit Profile
            </button>
      </div>
        </div>
      </div>
    </div>
</template>

<script>
import { api } from '../../../includes/api'
import { mapStores } from 'pinia'
import { mapActions } from 'pinia'
import useAdminStore from '../../../stores/admin'

export default {
  name: "UpdatePerfil",
  data() {
    return {
      name: '',
      last_name: '',
      pt_description: '',
      en_description: '',
      email: '',
      image_url: '',
      profile_id: ''
    }
  },
  computed: {
    ...mapStores(useAdminStore)
  },
  async beforeMount() {
    await this.getProfileData()
  },
  methods: {
    ...mapActions(useAdminStore, ['updateProfile']),
    async editProfileBtn() {
      const profileContent = {
        name: this.name,
        last_name: this.last_name,
        pt_description: this.pt_description,
        en_description: this.en_description,
        email: this.email,
        image: this.image_url,
      }

      this.sendProfile(profileContent, this.profile_id)
    
    },
    async sendProfile(profileContent, profileId) {
      const response = await this.adminStore.updateProfile(
        profileContent,
        profileId,
        localStorage.getItem('token')
      )

      await this.getProfileData()

      alert(response)
    },
    async getProfileData() {
      const profiles = await api.profiles()
      const myProfile = profiles[0]
      this.name = myProfile.name
      this.last_name = myProfile.last_name
      this.pt_description = myProfile.pt_description
      this.en_description = myProfile.en_description
      this.email = myProfile.email
      this.image_url = myProfile.image
      this.profile_id = myProfile.id
    }
  }
}
</script>