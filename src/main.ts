import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from '@/router'
import './assets/stylesheets/main.css'
import 'element-plus/dist/index.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(ElementPlus)
  .use(router)
  .mount('#app')
