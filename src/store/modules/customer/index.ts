import { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { CustomerState, Info } from './types'
import { RootState } from '../types'

const initialState = {
  info: {} as Info,
  orders: [],
  order: null,
}

const state: CustomerState = initialState

const namespaced: boolean = true

const customer: Module<CustomerState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

export default customer
