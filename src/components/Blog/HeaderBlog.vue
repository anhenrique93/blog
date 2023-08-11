<template>
    <ul>
        <HeaderItem :url="options.about.url" :name="headerNames.about" />
        <HeaderItem :url="options.projects.url" :name="headerNames.projects" />
        <HeaderItem :url="options.experience.url" :name="headerNames.experience" />
    </ul>
</template>

<script>
import HeaderItem from './HeaderItem.vue';
import useLanguageStore from '../../stores/language'
import { mapStores } from 'pinia';

export default {
    name: "HeaderBlog",
    components: {
        HeaderItem
    },
    data() {
        return {
            options: {
                projects: {
                    url: '/'
                },
                about: {
                    url: '/about'
                },
                experience: {
                    url: '/experience'
                }
            }
        }
    },
    computed: {
        ...mapStores(useLanguageStore),
        headerNames() {
            if (this.languageStore.atual === 'en') {
                return this.languageStore.header.en
            } else {
                return this.languageStore.header.pt
            }
        }
    } 
}
</script>