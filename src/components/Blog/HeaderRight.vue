<template>
    <ul class="text-white">
        <SocialNetworks />
        <ChangeColorTheme />
        <ChangeLanguage />
    </ul>
</template>

<script>
import SocialNetworks from './SocialNetworks.vue';
import ChangeColorTheme from './ChangeColorTheme.vue';
import ChangeLanguage from './ChangeLanguage.vue';

export default {
    name: 'HeaderRight',
    components: {
        SocialNetworks,
        ChangeColorTheme,
        ChangeLanguage
    }
}
</script>