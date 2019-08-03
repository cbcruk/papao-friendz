import { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { BannersState, Banner } from './types'
import { RootState } from '../types'

const initialState = {
  items: [],
  item: {} as Banner,
}

const state: BannersState = initialState

const namespaced: boolean = true

const banners: Module<BannersState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

export default banners
