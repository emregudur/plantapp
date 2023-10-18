import { PayloadAction } from '@reduxjs/toolkit'
import { Category, CategoryState } from './category.entity'

export default {
  'category/load': (state: CategoryState, action: PayloadAction<Category[]>) => {
    state.categories = action.payload
  },
}
