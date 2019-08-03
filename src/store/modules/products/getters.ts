import { GetterTree } from 'vuex'
import { ProductsState } from './types'
import { RootState } from '../types'

const getters: GetterTree<ProductsState, RootState> = {
  item: state => (id: number) => state.items.find(item => item.id === id),
  itemsWithCollect: (state, _getters, _rootState, rootGetters) =>
    state.items.map(item => {
      if (item) {
        const collected = rootGetters['collection/collect'](item.id)

        return {
          ...item,
          ...collected,
        }
      }
    }),
}

export default getters
