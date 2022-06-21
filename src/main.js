import { createApp } from 'vue'
import App from './App.vue'
import ApiStore from './store/ApiStore'
import ChartStore from './store/ChartStore'
import PrivateStore from './store/PrivateStore'
import UIStore from './store/UIStore'
import TradingStore from './store/TradingStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .provide(ApiStore, ChartStore, UIStore, TradingStore, PrivateStore)
    .mount('#app')