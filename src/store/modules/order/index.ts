import { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { OrderState } from './types'
import { RootState } from '../types'

type Address = OrderState['address']

const initialState = {
  items: [],
  shippingPrice: 0,
  address: {} as Address,
}

const state: OrderState = initialState

const namespaced: boolean = true

const content: Module<OrderState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

export default content
