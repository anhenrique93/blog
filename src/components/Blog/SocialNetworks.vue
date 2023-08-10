<template>
    <ul class="ml-1 mt-8 flex items-center">
        <NetworkItem />
    </ul>
</template>

<script>
import NetworkItem from './NetworkItem.vue';

export default {
    name: 'HeaderRightSocial',
    components: {
        NetworkItem
    }
}
</script>