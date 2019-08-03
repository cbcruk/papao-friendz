import { ActionTree } from 'vuex'
import { GET } from '@/api/http'
import { FaqState } from './types'
import { RootState } from '../types'

const actions: ActionTree<FaqState, RootState> = {
  async getItems({ commit }) {
    try {
      const response = await GET('/faqs')
      commit('SET_ITEMS', response.data)
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions
