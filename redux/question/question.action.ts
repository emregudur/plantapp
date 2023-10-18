import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getQuestions = createAsyncThunk('question/load', async () => {
  const res = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions')
  const data = await res.data
  return data
})
