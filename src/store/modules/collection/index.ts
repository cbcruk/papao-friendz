import { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { CollectionState } from './types'
import { RootState } from '../types'

const initialState = {
  items: [],
  stock: [],
  shippingPrice: 0,
}

const state: CollectionState = initialState

const namespaced: boolean = true

const collection: Module<CollectionState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

export default collection
