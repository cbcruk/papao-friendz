import { GetterTree } from 'vuex'
import { getPrices } from '../collection/getters'
import { OrderState } from './types'
import { RootState } from '../types'

const getters: GetterTree<OrderState, RootState> = {
  items: state => state.items,
  hasItems: state => Boolean(state.items.length),
  prices: state => getPrices(state.items, state.shippingPrice),
}

export default getters
