import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import {
  auth,
  customer,
  product,
  products,
  collection,
  order,
  banners,
  faq,
} from './modules'
import { RootState } from './modules/types'

Vue.use(Vuex)

const storeOptions: StoreOptions<RootState> = {
  modules: {
    auth,
    customer,
    product,
    products,
    collection,
    order,
    banners,
    faq,
  },
}

const store = new Vuex.Store<RootState>(storeOptions)

export default store
