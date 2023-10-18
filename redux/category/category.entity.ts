export interface Category {
  id: number
  name?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  title?: string
  rank?: number
  image: Image
}

interface Image {
  id: number
  name?: string
  alternativeText?: any
  caption?: any
  width?: number
  height?: number
  formats?: any
  hash?: string
  ext?: string
  mime?: string
  size?: number
  url: string
  previewUrl?: any
  provider?: string
  provider_metadata?: any
  createdAt?: string
  updatedAt?: string
}

export interface CategoryState {
  categories: Category[]
  isLoading: boolean
  err: any
}
