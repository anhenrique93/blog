<template>
  <button class="p-3 text-left text-white hover:bg-sky-700">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'MenuButton',
  props: ['name']
}
</script>
