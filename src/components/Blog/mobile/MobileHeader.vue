<template>
    <v-icon 
        @click="handleMenu" 
        class="
            text-text_white 
            cursor-pointer
        " 
        name="fa-bars" scale="2" hover/>
    <div v-if="isOpen" class="bg-primary_dark border w-48 p-3">
        <HeaderBlog />
        <SocialNetworksVue />
        <ChangeLanguage class="text-text_white mt-3" />
    </div>
</template>

<script>
import { OhVueIcon } from 'oh-vue-icons';
import HeaderBlog from '../HeaderBlog.vue';
import SocialNetworksVue from '../SocialNetworks.vue';
import ChangeLanguage from '../ChangeLanguage.vue';

export default {
    name: "MobileHeader",
    data() {
        return {
            isOpen: false
        }
    },
    components: {
        'v-icon': OhVueIcon,
        HeaderBlog,
        SocialNetworksVue,
        ChangeLanguage
    }, 
    methods: {
        handleMenu() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>