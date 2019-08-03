import { ActionTree } from 'vuex'
import isUndefined from 'lodash/isUndefined'
import { GET, POST, PUT, DELETE } from '@/api/http'
import { CollectionState } from './types'
import { RootState } from '../types'

const actions: ActionTree<CollectionState, RootState> = {
  async getItems({ commit }) {
    try {
      const response = await GET('/baskets')
      const baskets = response.data

      commit('SET_ITEMS', baskets)
    } catch (e) {
      console.error(e)
    }
  },
  async getStockTaking({ commit, state }) {
    const productSubIdList = state.items.map(b => b.productSubId)
    const response = await POST('/products/stocktaking', {
      productSubIdList,
    })
    const stocktaking = response.data

    commit('SET_STOCK', stocktaking)
  },
  async getShippingPrice({ commit, getters }) {
    try {
      const response = await POST('/orders/shipping', {
        currency: 'USD',
        country: 'US',
        items: getters.checkedItems,
      })

      commit('SET_SHIPPING_PRICE', response.data.price)
    } catch (e) {
      console.error(e)
    }
  },
  async addItem({ dispatch, rootGetters }, { id, from }) {
    const hasCustomerInfo = rootGetters['customer/hasCustomerInfo']

    try {
      if (hasCustomerInfo) {
        const response = await POST('baskets', {
          productId: id,
          productSubId: id,
          quantity: 1,
          checked: true,
        })
        const item = response.data

        dispatch('fillItem', item)
      } else {
        const product = rootGetters['products/item'](id)
        const item = {
          productId: id,
          productSubId: id,
          checked: true,
          quantity: 1,
          amounts: product.amounts,
          productName: product.productName,
          thumbnail: product.detailImages[0],
          stock: product.totalStock,
        }

        dispatch('fillItem', item)
      }

      dispatch('collectItem', { id, from })
    } catch (e) {
      console.error(e)
    }
  },
  fillItem({ commit, state }, item) {
    const items = [...state.items, item]

    commit('SET_ITEMS', items)
  },
  async patchItem({ dispatch, rootGetters }, { id, quantity, checked }) {
    const hasCustomerInfo = rootGetters['customer/hasCustomerInfo']

    try {
      const collected = rootGetters['collection/item'](id)

      if (hasCustomerInfo) {
        const response = await PUT(`baskets/${collected.id}`, {
          quantity: quantity || collected.quantity,
          checked: isUndefined(checked) ? collected.checked : checked,
        })
        const collection = response.data

        dispatch('mapItems', collection)
      } else {
        const collection = {
          ...collected,
          checked,
          quantity,
        }

        dispatch('mapItems', collection)
      }
    } catch (e) {
      console.error(e)
    }
  },
  mapItems({ commit, state }, collection) {
    const items = state.items.map(item => {
      if (item.productSubId === collection.productSubId) {
        return {
          ...item,
          ...collection,
        }
      }

      return item
    })

    commit('SET_ITEMS', items)
  },
  async deleteItem({ commit, state, getters, rootGetters }, id) {
    const hasCustomerInfo = rootGetters['customer/hasCustomerInfo']
    const item = getters['item'](id)

    try {
      if (hasCustomerInfo) {
        await DELETE(`baskets/${item.id}`)
      }

      const items = state.items.filter(item => item.productSubId !== id)
      const stock = state.stock.filter(item => item.productSubId !== id)

      commit('SET_ITEMS', items)
      commit('SET_STOCK', stock)
    } catch (e) {
      console.error(e)
    }
  },
  async collectItem({ commit }, { id, from }) {
    try {
      const isProduct = from === 'product'
      const productSubId = id
      const response = await PUT(`/products/collect/${id}`, {
        productSubId,
      })

      commit(
        `${isProduct ? 'product' : 'products'}/UPDATE_ITEM`,
        {
          ...response.data,
          productSubId,
        },
        { root: !isProduct }
      )
    } catch (e) {
      console.error(e)
    }
  },
}

export default actions
