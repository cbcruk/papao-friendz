import { GetterTree } from 'vuex'
import { ProductState } from './types'
import { RootState } from '../types'

const getters: GetterTree<ProductState, RootState> = {
  item: (state, _getters, _rootState, rootGetters) => {
    if (state.item) {
      const collected = rootGetters['collection/collect'](state.item.id)

      return {
        ...state.item,
        ...collected,
      }
    }
  },
  comments: state => ({
    ...state.comments,
    items: state.comments.items.map(item => ({
      ...item,
      rating: item.rating * 20,
    })),
  }),
  relation: state => state.relation,
}

export default getters
