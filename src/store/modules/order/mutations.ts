import { MutationTree } from 'vuex'
import { OrderState } from './types'

const mutations: MutationTree<OrderState> = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_SHIPPING_PRICE(state, price) {
    state.shippingPrice = price
  },
  SET_ADDRESS(state, address) {
    state.address = address
  },
}

export default mutations
