import { ActionTree } from 'vuex'
import { POST, GET } from '@/api/http'
import { OrderState } from './types'
import { RootState } from '../types'

const actions: ActionTree<OrderState, RootState> = {
  setItems({ commit, rootGetters }) {
    const items = rootGetters['collection/checkedItems']

    commit('SET_ITEMS', items)
  },
  patchItem({ commit, state }, { id, quantity }) {
    const items = state.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity,
        }
      }

      return item
    })

    commit('SET_ITEMS', items)
  },
  setAddress({ commit }, address) {
    const {
      name,
      email,
      phoneNumber,
      country,
      countryName,
      zipCode,
      addr1,
      addr1Code,
      addr2,
      addr3,
    } = address

    commit('SET_ADDRESS', {
      name,
      email,
      phoneNumber,
      country,
      countryName,
      zipCode,
      addr1,
      addr1Code,
      addr2,
      addr3,
    })
  },
  async getShippingPrice({ commit, state }) {
    try {
      const response = await POST('/orders/shipping', {
        currency: 'USD',
        country: 'US',
        items: state.items,
      })

      commit('SET_SHIPPING_PRICE', response.data.price)
    } catch (e) {
      console.error(e)
    }
  },
  async getOrderByGuest(_, params) {
    try {
      GET('/orders/guest', params)
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions
