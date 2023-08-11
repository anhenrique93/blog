<template>
    <a :href="url" class="block cursor-pointer hover:text-slate-200" target="_blank" rel="noreferrer">
        <v-icon 
            :name="`fa-${iconName}`" 
            scale="2" 
            animation="float" />        
    </a>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
    name: "NetworkItem",
    props: ['iconName', 'url'],
    components: {
        "v-icon": OhVueIcon
    }
}

</script>