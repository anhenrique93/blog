<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="loginSchema.email"
            />
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="loginSchema.password"
            />
          </div>
        </div>

        <div>
          <div class="flex flex-col items-center justify-center">
            <p class="mb-4">{{ login_alert_message }}</p>
          </div>
          <template v-if="login_loader">
            <div class="flex items-center justify-center">
              <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
          </template>
          <template v-else>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </template>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import useAdminStore from '../../stores/admin'

export default {
  name: 'AdminAuth',
  data() {
    return {
      loginSchema: {
        email: '',
        password: ''
      },
      login_alert_message: '',
      login_loader: false
    }
  },
  methods: {
    ...mapActions(useAdminStore, ['authenticate']),
    async login() {
      try {
        this.login_alert_message = 'Please wait! We are logging you in.'
        this.login_loader = true
        await this.authenticate(this.loginSchema)
      } catch (error) {
        this.login_alert_message = 'Invalid login details'
        this.login_loader = false
        return
      }

      this.login_loader = false
    }
  }
}
</script>
