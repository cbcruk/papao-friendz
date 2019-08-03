import { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { ProductsState } from './types'
import { RootState } from '../types'

const initialState = {
  loading: false,
  pageable: {
    totalPages: 0,
    last: false,
    size: 0,
    number: -1,
    numberOfElements: 0,
    first: true,
  },
  items: [],
}

const state: ProductsState = initialState

const namespaced: boolean = true

const content: Module<ProductsState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

export default content
