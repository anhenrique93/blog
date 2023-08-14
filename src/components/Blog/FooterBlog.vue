<template>
  <div class="pt-0.5 flex w-full flex-row items-center space-x-16">
    <span class="w-full text-center">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'FooterBlog',
  data() {
    return {
      text: '© 2023 Henrique Araújo Neto'
    }
  }
}
</script>
