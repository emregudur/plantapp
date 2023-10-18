import { PayloadAction } from '@reduxjs/toolkit'
import { Question, QuestionState } from './question.entity'

export default {
  'question/load': (state: QuestionState, action: PayloadAction<Question[]>) => {
    state.questions = action.payload
  },
}
