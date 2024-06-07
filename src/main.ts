import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import './assets/stylesheets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App)
app.use(PrimeVue)
  .mount('#app')
