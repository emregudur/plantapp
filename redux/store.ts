import { configureStore } from '@reduxjs/toolkit'
import { categoryReducer, categoryActions } from './category/index'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { questionActions, questionReducer } from './question'

export const actions = {
  category: categoryActions,
  question: questionActions,
}

const reducer = {
  category: categoryReducer,
  question: questionReducer,
}

export const store = configureStore({
  reducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
