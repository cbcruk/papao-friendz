import { MutationTree } from 'vuex'
import { CollectionState } from './types'

const mutations: MutationTree<CollectionState> = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  RESET_ITEMS(state) {
    state.items = []
  },
  SET_STOCK(state, stock) {
    state.stock = stock
  },
  SET_SHIPPING_PRICE(state, price) {
    state.shippingPrice = price
  },
}

export default mutations
