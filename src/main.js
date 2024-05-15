import { createApp } from 'vue'
import router from './routes/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '../src/scss/styles.scss'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app
    .use(router)
    .use(pinia)
    .mount('#app')
