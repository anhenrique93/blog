import './assets/base.css'
import('@/assets/main.css');

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {     addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });

addIcons(...Fa);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
