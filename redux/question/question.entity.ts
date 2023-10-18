export interface Question {
  id: number
  title: string
  subtitle?: string
  image_uri: string
  uri?: string
  order?: number
}

export interface QuestionState {
  questions: Question[]
  isLoading: boolean
  err: any
}
