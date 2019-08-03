import { GetterTree } from 'vuex'
import { FaqState } from './types'
import { RootState } from '../types'

const getters: GetterTree<FaqState, RootState> = {
  items: state => state.items.slice(0, -1),
}

export default getters
