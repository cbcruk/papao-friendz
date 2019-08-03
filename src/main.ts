import Vue from 'vue'
import VModal from 'vue-js-modal'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import router from './router'
import store from './store'
import cdn from './filters/cdn'

import './registerServiceWorker'

Vue.use(VModal, { dynamic: true })
Vue.use(VeeValidate, { classes: true })

Vue.config.productionTip = false

Vue.filter('cdn', cdn)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
