<template>
    <ul>
        <HeaderItem :url="options.about.url" :name="options.about.name" />
        <HeaderItem :url="options.projects.url" :name="options.projects.name" />
        <HeaderItem :url="options.experience.url" :name="options.experience.name" />
    </ul>
</template>

<script>
import HeaderItem from './HeaderItem.vue';

export default {
    name: "HeaderBlog",
    components: {
        HeaderItem
    },
    data() {
        return {
            options: {
                projects: {
                    name: 'Projects',
                    url: '/'
                },
                about: {
                    name: 'About',
                    url: '/about'
                },
                experience: {
                    name: 'Experience',
                    url: '/experience'
                }
            }
        }
    } 
}
</script>