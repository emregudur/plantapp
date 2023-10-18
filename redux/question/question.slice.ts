import { createSlice } from '@reduxjs/toolkit'
import { QuestionState } from './question.entity'
import questionReducer from './question.reducer'
import { getQuestions } from './question.action'

export const initialState: QuestionState = {
  questions: [],
  isLoading: false,
  err: null,
}

const questionSlice = createSlice({
  name: 'question',
  initialState: initialState,
  reducers: questionReducer,
  extraReducers: builder => {
    builder.addCase(getQuestions.pending, state => {
      state.isLoading = true
    })
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.isLoading = false
      state.questions = action.payload
    })
    builder.addCase(getQuestions.rejected, (state, action) => {
      state.isLoading = false
      state.err = action.error.message
    })
  },
})

export const { actions, reducer } = questionSlice
