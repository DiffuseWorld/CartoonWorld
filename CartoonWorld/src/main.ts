import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {router} from '@/router'
import '@/assets/main.scss'
import {Lazyload} from 'vant'

import App from './App.vue'




const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Lazyload)

app.mount('#app')
