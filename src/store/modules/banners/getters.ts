import { GetterTree } from 'vuex'
import { BannersState } from './types'
import { RootState } from '../types'

const getters: GetterTree<BannersState, RootState> = {
  items: state =>
    state.items.map(item => ({
      ...item,
      type: 'banner',
    })),
  item: state => state.item,
  findItemById: state => (id: number) => state.items.find(x => x.id === id),
}

export default getters
