<template>
  <ul class="text-white space-y-3 flex flex-col items-end pl-20">
    <SocialNetworks />
    <ChangeLanguage />
  </ul>
</template>

<script>
import SocialNetworks from './SocialNetworks.vue'
import ChangeLanguage from './ChangeLanguage.vue'

export default {
  name: 'HeaderRight',
  components: {
    SocialNetworks,
    ChangeLanguage
  }
}
</script>
