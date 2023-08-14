<template>
  <div>
    <UserInfo />
    <div ref="elementToCheckScroll" class="overflow-y-auto overflow-x-hidden">
      <ProjectsResumeContainer />
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
  }
}
</script>
