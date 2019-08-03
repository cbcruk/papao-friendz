import { Product } from '../product/types'

interface Pageable {
  totalPages: number
  last: boolean
  size: number
  number: number
  numberOfElements: number
  first: boolean
}

export interface ProductsState {
  loading: boolean
  items: Product[]
  pageable: Pageable
}
