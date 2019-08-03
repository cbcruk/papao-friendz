import { Module } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { AuthState } from './types'
import { RootState } from '../types'

const initialState = {
  token: null,
  tokenValidate: false,
}

const state: AuthState = initialState

const namespaced: boolean = true

const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

export default auth
