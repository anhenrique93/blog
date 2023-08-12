<template>
  <v-icon class="text-text_white" :scale="size" :name="name" :animation="animation" />
</template>

<script>
import { OhVueIcon } from 'oh-vue-icons'

export default {
  name: 'LoadingIcon',
  props: ['size'],
  components: {
    'v-icon': OhVueIcon
  },
  data() {
    return {
      name: 'fa-spinner',
      animation: 'spin-pulse'
    }
  }
}
</script>
