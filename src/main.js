import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueScrollTo from './plugins/vue-scrollto'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueScrollTo,
  render: function (h) { return h(App) }
}).$mount('#app')
