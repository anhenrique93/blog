<template>
  <button class="p-3 pl-10 text-left text-white hover:bg-sky-800">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'SubMenuButton',
  props: ['name']
}
</script>
