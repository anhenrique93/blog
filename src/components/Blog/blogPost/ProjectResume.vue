<!--w-[12rem] sm:w-[25rem] md:w-[36rem] mb-5 h-48 rounded opacity-50 bg-hover_dark animate-pulse-->
<template>
  <div v-if="isLoading" class="mb-5"><LoadingResume /></div>
  <div v-else>
    <router-link
      :to="'/projects/' + project.id"
      class="p-2 flex flex-col space-y-4 sm:flex-col sm:space-y-4 md:flex-col md:space-y-4 lg:flex-row xl:flex-row 2xl:flex-row space-x-4 text-text_white rounded hover:opacity-50 hover:bg-hover_dark"
    >
      <div
        class="w-full sm:full md:1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex justify-center items-center md:items-start"
      >
        <img
          class="mt-3 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          :src="project.author"
        />
      </div>
      <div class="w-full flex flex-col space-y-1">
        <div class="flex flex-col space-y-1">
          <!-- TITLE(EN) -->
          <h3
            v-if="atualLang === 'en'"
            class="inline-flex items-baseline font-medium leading-tight"
          >
            {{ project.en_title }}
          </h3>
          <!-- TITLE(PT) -->
          <h3
            v-if="atualLang === 'pt'"
            class="inline-flex items-baseline font-medium leading-tight"
          >
            {{ project.pt_title }}
          </h3>
          <span class="mt-2 text-sm leading-normal">{{ project.date }}</span>
          <!-- excerpt(EN) -->
          <p v-if="atualLang === 'en'">
            {{ project.en_excerpt }}
          </p>
          <!-- excerpt(PT) -->
          <p v-if="atualLang === 'pt'">
            {{ project.pt_excerpt }}
          </p>
        </div>
        <div class="flex flex-row space-x-2">
          <ul v-for="tag in project.tags" :key="tag">
            <li class="underline font-bold">
              {{ tag.name }}
            </li>
          </ul>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import useLanguageStore from '../../../stores/language'
import useProjectsStore from '../../../stores/projects'
import LoadingResume from './LoadingResume.vue'

export default {
  name: 'ProjectResume',
  props: ['project'],
  components: {
    LoadingResume
  },
  computed: {
    ...mapStores(useLanguageStore),
    ...mapStores(useProjectsStore),
    isLoading() {
      return this.projectsStore.isLoading
    },
    atualLang() {
      return this.languageStore.atual
    }
  }
}
</script>
