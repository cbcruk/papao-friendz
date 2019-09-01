import { ActionTree } from 'vuex'
import { POST } from '@/api/http'
import { AuthState } from './types'
import { RootState } from '../types'

const actions: ActionTree<AuthState, RootState> = {
  async signIn({ commit }, params) {
    try {
      const response = await POST('/auth/signin', params)
      const { token, customer } = response.data

      commit('SET_TOKEN', token)

      await POST('/auth/save-token', { token })

      commit('customer/SET_INFO', customer, { root: true })
    } catch (e) {
      console.error(e)
    }
  },
  async signUp(_, params) {
    try {
      await POST('/auth/signup', params)
    } catch (e) {
      console.error(e)
    }
  },
  async signOut(_, params) {
    try {
      await POST('/auth/signout', params)
    } catch (e) {
      console.error(e)
    }
  },
  async forgotPassword(_, params) {
    try {
      await POST('/auth/forgot', params)
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions
