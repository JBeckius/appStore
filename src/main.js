import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import apiManager from './api/apiManager.js'
import 'bootstrap'
import "bootstrap/scss/bootstrap.scss"
Vue.config.productionTip = false
console.log(process.env);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
