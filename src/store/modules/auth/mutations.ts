import { MutationTree } from 'vuex'
import { AuthState } from './types'

const mutations: MutationTree<AuthState> = {
  SET_TOKEN(state, token) {
    state.token = token
    state.tokenValidate = true
  },
  RESET_TOKEN(state) {
    state.token = null
    state.tokenValidate = false
  },
}

export default mutations
