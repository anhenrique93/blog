<template>
    <div class="flex flex-row space-x-2 ml-2">
        <p @click="changeToPt" class="text-lg hover:text-xl cursor-pointer">
            PT
        </p>
        <p @click="changeToEn" class="text-lg hover:text-xl cursor-pointer">
            EN
        </p>
    </div>
</template>

<script>
import useLanguageStore from '../../stores/language'
import { mapActions } from 'pinia';
import { mapStores } from 'pinia';

export default {
    name: 'ChangeLanguage',
    computed: {
        ...mapStores(useLanguageStore),
        atualLang() {
            return this.languageStore.atual
        }
    },
    methods: {
        ...mapActions(useLanguageStore, ['changeLang']),
        changeToEn() {
            if (this.atualLang === 'pt') {
                this.changeLang()
            }
        },
        changeToPt() {
            if (this.atualLang === 'en') {
                this.changeLang()
            }
        }
    }
}
</script>