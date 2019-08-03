import { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { ProductState, Product, CommentItem } from './types'
import { RootState } from '../types'

const initialState = {
  loading: false,
  item: {} as Product,
  comments: {
    item: {} as CommentItem,
    items: [],
    pageable: {
      totalPages: 0,
      last: false,
      size: 0,
      number: -1,
      numberOfElements: 0,
      first: true,
    },
  },
  relation: [],
}

const state: ProductState = initialState

const namespaced: boolean = true

const content: Module<ProductState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

export default content
