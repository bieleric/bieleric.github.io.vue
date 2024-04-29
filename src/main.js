import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { MotionPlugin } from '@vueuse/motion'
import 'animate.css'

import App from './App.vue'
import router from './router'
import messages from './messages.json'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)

app.use(MotionPlugin)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
