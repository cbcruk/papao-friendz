export interface Banner {
  id: number
  creatorId: null
  modifierId: null
  createdDateTime: string
  modifiedDateTime: string
  type: string
  contentType: string
  language: string
  subject: string
  content: string
  description: string
  link: string
  imageUrl: string
  videoUrl: null
  displayStarDateTime: string
  displayEndDateTime: string
}

export interface BannersState {
  items: Banner[]
  item: Banner
}
