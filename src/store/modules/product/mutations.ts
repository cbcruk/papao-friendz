import { MutationTree } from 'vuex'
import { ProductState } from './types'

const mutations: MutationTree<ProductState> = {
  SET_ITEM(state, item) {
    state.item = item
  },
  UPDATE_ITEM(state, item) {
    state.item = {
      ...state.item,
      ...item,
    }
  },
  SET_RELATION(state, relation) {
    state.relation = relation
  },
  SET_COMMENTS(state, comments) {
    const { content: items, number, totalPages, first, last, size } = comments

    state.comments.items = items
    state.comments.pageable = {
      ...state.comments.pageable,
      number,
      totalPages,
      first,
      last,
      size,
    }
  },
  ADD_COMMENTS(state, items) {
    state.comments.items = [...state.comments.items, ...items]
  },
  SET_MY_COMMENT(state, item) {
    state.comments.item = item
  },
}

export default mutations
