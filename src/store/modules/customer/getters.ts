import { GetterTree } from 'vuex'
import isEmpty from 'lodash/isEmpty'
import { CustomerState } from './types'
import { RootState } from '../types'

const getters: GetterTree<CustomerState, RootState> = {
  info: state => state.info,
  hasCustomerInfo: state => !isEmpty(state.info),
}

export default getters
