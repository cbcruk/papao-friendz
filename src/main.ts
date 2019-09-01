import Vue from 'vue'
import VModal from 'vue-js-modal'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import {
  required,
  min,
  email,
  confirmed,
  numeric,
} from 'vee-validate/dist/rules'
import App from './App.vue'
import router from './router'
import store from './store'
import cdn from './filters/cdn'

import './registerServiceWorker'

Vue.use(VModal, { dynamic: true })

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Vue.filter('cdn', cdn)

extend('required', required)
extend('email', email)
extend('min', min)
extend('confirmed', confirmed)
extend('numeric', numeric)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
