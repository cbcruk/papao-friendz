export interface Relation {
  id: number
  productName: string
  productDesc: string
  mainImages: string[]
  detailImages: string[]
  contentImages: string[]
  items: {
    id: number
    code: string
    thumbnail: string
    stock: number
  }[]
  amounts: {
    currency: string
    amount: number
  }[]
  commentCount: number
  collectCount: number
  totalStock: number
  commentList: never[]
}

export interface CommentItem {
  id: number
  userName: string
  subject: null
  content: string
  rating: number
  createdDateTime: string
}

interface CommentPageable {
  totalPages: number
  last: boolean
  size: number
  number: number
  numberOfElements: number
  first: boolean
}

export interface Comments {
  items: CommentItem[]
  item: CommentItem
  pageable: CommentPageable
}

export interface Product {
  id: number
  productName: string
  productDesc: string
  contents: {
    type: string
    content: string
    language: string
    displayOrder: number
  }[]
  items: {
    id: number
    code: string
    thumbnail: string
    stock: number
  }[]
  mainImages: string[]
  detailImages: string[]
  contentImages: string[]
  details: string[]
  amounts: {
    currency: string
    amount: number
  }[]
  commentCount: number
  collectCount: number
  totalStock: number
  rating: number
  isCollected: boolean
  checked: boolean
  type?: string
}

export interface ProductState {
  loading: boolean
  item: Product
  comments: Comments
  relation: Relation[]
}
