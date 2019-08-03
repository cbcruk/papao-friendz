import { MutationTree } from 'vuex'
import { BannersState } from './types'

const mutations: MutationTree<BannersState> = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ITEM(state, item) {
    state.item = item
  },
}

export default mutations
