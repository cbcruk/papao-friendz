export interface Collection {
  id: number
  productId: number
  productName: string
  productSubId: number
  thumbnail: string
  amounts: {
    currency: string
    amount: number
  }[]
  checked: boolean
  quantity: number
}

export interface Stock {
  productSubId: number
  stock: number
}

export interface Prices {
  delivery: number
  subTotal: number
  total: number
}

export interface CollectionState {
  items: Collection[]
  stock: Stock[]
  shippingPrice: number
}
