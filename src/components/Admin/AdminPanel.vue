<template>
  <aside class="bg-gray-800 text-white w-64 h-screen flex flex-col">
    <!-- Posts -->
    <MenuButton :name="panelOptions.posts.name" @click="showOptions(panelOptions.posts.name)" />
    <SubMenuButton
      v-show="panelOptions.posts.isOpen"
      :name="panelOptions.posts.add"
      @click="onClickOption(panelOptions.posts.add)"
    />
    <SubMenuButton
      v-show="panelOptions.posts.isOpen"
      :name="panelOptions.posts.update"
      @click="onClickOption(panelOptions.posts.update)"
    />
    <SubMenuButton
      v-show="panelOptions.posts.isOpen"
      :name="panelOptions.posts.delete"
      @click="onClickOption(panelOptions.posts.delete)"
    />

    <!-- Categories -->
    <MenuButton
      :name="panelOptions.categories.name"
      @click="showOptions(panelOptions.categories.name)"
    />
    <SubMenuButton
      v-show="panelOptions.categories.isOpen"
      :name="panelOptions.categories.add"
      @click="onClickOption(panelOptions.categories.add)"
    />
    <SubMenuButton
      v-show="panelOptions.categories.isOpen"
      :name="panelOptions.categories.update"
      @click="onClickOption(panelOptions.categories.update)"
    />
    <SubMenuButton
      v-show="panelOptions.categories.isOpen"
      :name="panelOptions.categories.delete"
      @click="onClickOption(panelOptions.categories.delete)"
    />

    <!-- Tags -->
    <MenuButton :name="panelOptions.tags.name" @click="showOptions(panelOptions.tags.name)" />
    <SubMenuButton
      v-show="panelOptions.tags.isOpen"
      :name="panelOptions.tags.add"
      @click="onClickOption(panelOptions.tags.add)"
    />
    <SubMenuButton
      v-show="panelOptions.tags.isOpen"
      :name="panelOptions.tags.update"
      @click="onClickOption(panelOptions.tags.update)"
    />
    <SubMenuButton
      v-show="panelOptions.tags.isOpen"
      :name="panelOptions.tags.delete"
      @click="onClickOption(panelOptions.tags.delete)"
    />

    <!-- Networks -->
    <MenuButton
      :name="panelOptions.networks.name"
      @click="showOptions(panelOptions.networks.name)"
    />
    <SubMenuButton
      v-show="panelOptions.networks.isOpen"
      :name="panelOptions.networks.add"
      @click="onClickOption(panelOptions.networks.add)"
    />
    <SubMenuButton
      v-show="panelOptions.networks.isOpen"
      :name="panelOptions.networks.update"
      @click="onClickOption(panelOptions.networks.update)"
    />
    <SubMenuButton
      v-show="panelOptions.networks.isOpen"
      :name="panelOptions.networks.delete"
      @click="onClickOption(panelOptions.networks.delete)"
    />
  </aside>
</template>

<script>
import MenuButton from './Global/menuButton.vue'
import SubMenuButton from './Global/subMenuButton.vue'

export default {
  name: 'AdminPanel',
  components: {
    MenuButton,
    SubMenuButton
  },
  data() {
    return {
      panelOptions: {
        posts: {
          name: 'Posts',
          add: 'New Post',
          update: 'Edit Post',
          delete: 'Delete Post',
          isOpen: false
        },
        categories: {
          name: 'Categories',
          add: 'New Categorie',
          update: 'Edit Categorie',
          delete: 'Delete Categorie',
          isOpen: false
        },
        tags: {
          name: "Tag's",
          add: 'New Tag',
          update: 'Edit Tag',
          delete: 'Delete Tag',
          isOpen: false
        },
        networks: {
          name: 'Networks',
          add: 'New Network',
          update: 'Edit Network',
          delete: 'Delete Network',
          isOpen: false
        }
      }
    }
  },
  emits: ['chosen-option'],
  methods: {
    showOptions(option) {
      const optionMap = {
        [this.panelOptions.posts.name]: 'posts',
        [this.panelOptions.categories.name]: 'categories',
        [this.panelOptions.tags.name]: 'tags',
        [this.panelOptions.networks.name]: 'networks'
      }

      if (Object.prototype.hasOwnProperty.call(optionMap, option)) {
        const optionKey = optionMap[option]
        this.panelOptions[optionKey].isOpen = !this.panelOptions[optionKey].isOpen
      }
    },
    onClickOption(option) {
      const optionMap = {
        [this.panelOptions.posts.add]: 'New Post',
        [this.panelOptions.posts.update]: 'Edit Post',
        [this.panelOptions.posts.delete]: 'Delete Post',
        [this.panelOptions.categories.add]: 'New Categorie',
        [this.panelOptions.categories.update]: 'Edit Categorie',
        [this.panelOptions.categories.delete]: 'Delete Categorie',
        [this.panelOptions.tags.add]: 'New Tag',
        [this.panelOptions.tags.update]: 'Edit Tag',
        [this.panelOptions.tags.delete]: 'Delete Tag',
        [this.panelOptions.networks.add]: 'New Network',
        [this.panelOptions.networks.update]: 'Edit Network',
        [this.panelOptions.networks.delete]: 'Delete Network'
      }

      if (Object.prototype.hasOwnProperty.call(optionMap, option)) {
        this.$emit('chosen-option', option)
      }
    }
  }
}
</script>
