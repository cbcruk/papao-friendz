import { ActionTree } from 'vuex'
import { GET, POST } from '@/api/http'
import { ProductState } from './types'
import { RootState } from '../types'

const actions: ActionTree<ProductState, RootState> = {
  async getItem({ commit }, id) {
    const response = await Promise.all([
      GET(`/products/${id}`),
      GET(`/products/${id}/comments`),
      GET(`/products/${id}/relation`),
    ])

    const [product, comments, relation] = response.map(r => r.data)

    commit('SET_ITEM', product)
    commit('SET_COMMENTS', comments)
    commit('SET_RELATION', relation)
  },
  async getComments({ state, commit }, page) {
    if (!state.item) {
      return
    }

    try {
      const response = await GET(`products/${state.item.id}/comments`, {
        page,
      })

      commit('SET_COMMENTS', response.data)
    } catch (e) {
      console.error(e)
    }
  },
  async getMyComment({ commit }, id) {
    try {
      const response = await GET(`products/${id}/comments/my`)

      commit('SET_MY_COMMENT', response.data)
    } catch (e) {
      console.error(e)
    }
  },
  async setComment({ dispatch }, { id, comment }) {
    try {
      await POST(`products/${id}/comments`, comment)

      dispatch('getComments')

      return id
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions
