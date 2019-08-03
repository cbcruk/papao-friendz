export interface Item {
  id: number
  productId: number
  productSubId: number
  checked: boolean
  quantity: number
  amounts: {
    currency: string
    amount: number
  }[]
  productName: string
  thumbnail: string
  stock: number
}

interface Address {
  name: string
  email: string
  customerId: number
  phoneNumber: string
  country: string
  countryName: string
  zipCode: string
  addr1: string
  addr1Code: string
  addr2: string
  addr3: string
}

interface Agreement {
  all: boolean
  delivery: boolean
  condition: boolean
}

interface Validation {
  shipping: boolean
  paymethod: boolean
  agreement: boolean
}

export interface OrderState {
  items: Item[]
  address: Address
  shippingPrice: number
}
