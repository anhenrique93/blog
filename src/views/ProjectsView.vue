<template>
  <div>
    <UserInfo />
    <div
      @scroll="onScroll"
      ref="elementToCheckScroll"
      class="overflow-y-auto overflow-x-hidden pr-5"
    >
      <ProjectsResumeContainer :isOnBottomPositon="isOnBottomPositon" />
    </div>
  </div>
</template>

<script>
import UserInfo from '../components/Blog/UserInfo.vue'
import ProjectsResumeContainer from '../components/Blog/blogPost/ProjectsResumeContainer.vue'

export default {
  name: 'ProjectsView',
  components: {
    UserInfo,
    ProjectsResumeContainer
  },
  data() {
    return {
      isOnBottomPositon: false
    }
  },
  methods: {
    onScroll(event) {
      const clientHeight = event.target.clientHeight
      const scrollHeight = event.target.scrollHeight
      const scrollTop = event.target.scrollTop

      if (scrollTop + clientHeight >= scrollHeight) {
        this.isOnBottomPositon = true
      } else {
        this.isOnBottomPositon = false
      }
    }
  },
  mounted() {}
}
</script>
