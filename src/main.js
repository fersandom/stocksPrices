import { createApp } from 'vue'
import App from './App.vue'
import ApiStore from './store/ApiStore'
import PrivateStore from './store/PrivateStore'

createApp(App).provide(ApiStore, PrivateStore).mount('#app')