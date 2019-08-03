import { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { FaqState } from './types'
import { RootState } from '../types'

const initialState = {
  items: [],
}

const state: FaqState = initialState

const namespaced: boolean = true

const faq: Module<FaqState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

export default faq
