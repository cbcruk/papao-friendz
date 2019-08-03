interface Faq {
  id: number
  creatorId: null
  modifierId: null
  createdDateTime: null
  modifiedDateTime: null
  type: string
  categoryId: number
  language: string
  subject: string
  content: string
  displayOrder: number
}

export interface FaqState {
  items: Faq[]
}
