import { GetterTree } from 'vuex'
import sumBy from 'lodash/sumBy'
import { CollectionState } from './types'
import { RootState } from '../types'

type Items = CollectionState['items']

export function getPrices(items: Items, shippingPrice: number) {
  const subTotal = sumBy(items, item => item.amounts[0].amount * item.quantity)
  const total = (shippingPrice + subTotal).toFixed(2)

  return {
    delivery: shippingPrice.toFixed(2),
    subTotal: subTotal.toFixed(2),
    total,
  }
}

const getters: GetterTree<CollectionState, RootState> = {
  items: state => state.items,
  itemsLength: (_, getters) => getters.items.length,
  hasItems: (_, getters) => getters.itemsLength > 0,
  checkedItems: state => state.items.filter(item => item.checked),
  hasCheckedItems: (_, getters) => getters.checkedItems.length > 0,
  item: state => (id: number) =>
    state.items.find(item => item.productSubId === id),
  isDuplicated: state => (id: number) =>
    state.items.some(item => item.productSubId === id),
  stock: state => (id: number) =>
    state.stock.find(item => item.productSubId === id),
  collect: state => (id: number) => {
    return {
      checked: state.items.some(
        item => item.productSubId === id && item.checked
      ),
      isCollected: state.items.some(item => item.productSubId === id),
    }
  },
  prices: (state, getters) =>
    getPrices(getters.checkedItems, state.shippingPrice),
}

export default getters
