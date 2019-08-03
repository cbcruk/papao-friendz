import { ActionTree } from 'vuex'
import { GET, PUT, POST } from '@/api/http'
import { CustomerState } from './types'
import { RootState } from '../types'

const actions: ActionTree<CustomerState, RootState> = {
  async getInfo({ commit, dispatch }) {
    try {
      const response = await GET('/customer')

      commit('SET_INFO', response.data)

      dispatch('collection/getItems', null, { root: true })

      return response
    } catch (e) {
      console.error(e)
    }
  },
  async patchInfo({ commit }, info) {
    try {
      const response = await PUT('/customer', info)

      commit('SET_INFO', response.data)
    } catch (e) {
      console.error(e)
    }
  },
  async getOrders({ commit }) {
    try {
      const response = await GET('/orders')
      commit('SET_ORDERS', response.data)
    } catch (e) {
      commit('SET_ORDERS', [])
    }
  },
  async getOrder({ commit }, id) {
    try {
      const response = await GET(`/orders/${id}`)
      const data = response.data

      commit('SET_ORDER', {
        ...data,
        subTotal: data.totalAmount - data.shippingAmount,
      })
    } catch (e) {
      console.error(e)
    }
  },
  async withdrawCustomer({ commit }, payload) {
    try {
      await POST('/customer/withdraw', payload)

      commit('WITHDRAW_CUSTOMER')
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions
