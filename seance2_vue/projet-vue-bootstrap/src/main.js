import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')

//import Vue from 'vue'
//import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
//import App from './App'

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.use(BootstrapVue)
//Vue.use(BootstrapVueIcons)

//new Vue({ el: '#app', render: h => h(App) })
