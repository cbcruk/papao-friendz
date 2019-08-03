import { MutationTree } from 'vuex'
import { ProductsState } from './types'

const mutations: MutationTree<ProductsState> = {
  SET_ITEMS(state, { items, ...pageable }) {
    state.items = items
    state.pageable = {
      ...state.pageable,
      ...pageable,
    }
  },
  UPDATE_ITEM(state, newItem) {
    state.items = state.items.map(item => {
      if (item.id === newItem.productSubId) {
        return {
          ...item,
          ...newItem,
        }
      }

      return item
    })
  },
}

export default mutations
