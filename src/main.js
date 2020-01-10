import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'



Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


