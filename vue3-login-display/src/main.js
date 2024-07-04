import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/app.css'
import { createPinia } from 'pinia'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(store)
app.use(router)
app.mount('#app')