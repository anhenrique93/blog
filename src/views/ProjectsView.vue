<template>
    <div>
        <UserInfo />
        <ProjectsResumeContainer />
    </div>
</template>

<script>
import UserInfo from '../components/Blog/UserInfo.vue';
import ProjectsResumeContainer from '../components/Blog/blogPost/ProjectsResumeContainer.vue';

export default {
    name: "ProjectsView",
    components: {
        UserInfo,
        ProjectsResumeContainer
    }
}
</script>
