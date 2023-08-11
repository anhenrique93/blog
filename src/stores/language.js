import { defineStore } from 'pinia'

export default defineStore('language', {
    state: () => ({
        atual: 'en',
        header: {
            en: {
                about: "About",
                projects: "Projects",
                experience: "Experience"
            },
            pt: {
                about: "Sobre",
                projects: "Projetos",
                experience: "Experiência"
            }
        }
    }),

    actions: {
        changeLang() {
            if (this.atual === 'en') {
                this.atual = 'pt'
            } else {
                this.atual = 'en'
            }
        },

        returnAtualHeader() {
            if (this.atual === 'en') {
                return this.header.en
            } else {
                return this.header.pt
            }
        }
    }
})