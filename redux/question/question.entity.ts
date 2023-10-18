export interface Question {
  id: number
  title: string
  subtitle?: string
  image_uri: string
  uri?: string
  order?: number
}

export interface QuestionState {
  question: Question[]
  isLoading: boolean
  err: any
}
