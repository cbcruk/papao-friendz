import { AuthState } from './auth/types'
import { CustomerState } from './customer/types'
import { ProductState } from './product/types'
import { ProductsState } from './products/types'
import { CollectionState } from './collection/types'
import { OrderState } from './order/types'
import { BannersState } from './banners/types'
import { FaqState } from './faq/types'

export interface RootState {
  auth: AuthState
  customer: CustomerState
  product: ProductState
  products: ProductsState
  collection: CollectionState
  order: OrderState
  banner: BannersState
  faq: FaqState
}
