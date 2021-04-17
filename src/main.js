import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Previews from './components/Previews.vue'
import './assets/tailwind.css'


createApp(App).component('pre-views', Previews).use(router).mount('#app')

