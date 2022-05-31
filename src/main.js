import { createApp } from 'vue'
import App from './App.vue'
import ApiStore from './store/ApiStore'
import ChartStore from './store/ChartStore'
import PrivateStore from './store/PrivateStore'
import UIStore from './store/UIStore'

createApp(App).provide(ApiStore, ChartStore, UIStore, PrivateStore).mount('#app')