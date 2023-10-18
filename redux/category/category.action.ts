import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCategories = createAsyncThunk('category/load', async () => {
  const res = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories')
  const data = await res.data?.data

  return data
})
