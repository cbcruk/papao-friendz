import { ActionTree } from 'vuex'
import { GET } from '@/api/http'
import { ProductsState } from './types'
import { RootState } from '../types'

const actions: ActionTree<ProductsState, RootState> = {
  async getItems({ commit, rootGetters }, params) {
    const response = await Promise.all([
      await GET('/products', params),
      await GET(`/banners/event`),
    ])

    const [products, banners] = response.map(r => r.data)
    const { number, totalPages, first, last, size } = products

    commit('banners/SET_ITEMS', banners.content, { root: true })
    commit('SET_ITEMS', {
      items: [
        ...products.content.slice(0, 4),
        rootGetters['banners/items'][1],
        ...products.content.slice(4),
      ],
      number,
      totalPages,
      first,
      last,
      size,
    })
  },
}

export default actions
