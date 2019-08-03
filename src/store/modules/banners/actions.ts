import { ActionTree } from 'vuex'
import { GET } from '@/api/http'
import { BannersState } from './types'
import { RootState } from '../types'

const actions: ActionTree<BannersState, RootState> = {
  async getItems({ commit }, type) {
    try {
      const response = await GET(`/banners/${type}`)
      const banners = response.data.content

      commit('SET_ITEMS', banners)
    } catch (e) {
      console.error(e)
    }
  },
  async getItem({ commit }, id) {
    try {
      const response = await GET(`/banners/event/${id}`)
      const banner = response.data

      commit('SET_ITEM', banner)
    } catch (e) {
      console.error(e)
    }
  },
  setItem({ commit, getters }, id) {
    const item = getters['item'](id)

    commit('SET_ITEM', item)
  },
}

export default actions
