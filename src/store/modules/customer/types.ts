export interface Info {
  id: number
  email: string
  name: string
  phoneNumber: string
  country: string
  providerId: string
  providerUserId: string
  phoneAuth: string
  emailAuth: string
  address: {
    name: string
    country: string
    zipCode: string
    addr1: string
    addr1Code: string
    addr2: string
    addr3: string
    phoneNumber: string
    company: string
    usedDateTime: string
  }
}

export interface CustomerState {
  info: Info
  orders: never[]
  order: null
}
