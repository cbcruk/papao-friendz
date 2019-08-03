import { MutationTree } from 'vuex'
import { FaqState } from './types'

const mutations: MutationTree<FaqState> = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export default mutations
