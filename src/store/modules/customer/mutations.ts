import { MutationTree } from 'vuex'
import { CustomerState, Info } from './types'

const mutations: MutationTree<CustomerState> = {
  SET_INFO(state, info) {
    state.info = {
      ...state.info,
      ...info,
    }
  },
  RESET_INFO(state) {
    state.info = {} as Info
  },
  SET_ORDERS(state, payload) {
    state.orders = payload
  },
  SET_ORDER(state, payload) {
    state.order = payload
  },
}

export default mutations
