/* eslint-disable no-unused-vars */
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  isLoadingViaAPI: false,
}

export const fetchAllProducts = createAsyncThunk(
  'AllPage/fetchAllProducts',
  async (url, thinkAPI) => {
    try {
      const data = await axios.get(url)
      return data.data
    } catch (error) {
      console.log(error)
      return thinkAPI.rejectWithValue(error)
    }
  }
)

const allPageSlice = createSlice({
  name: 'AllPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isLoadingViaAPI = true
    })
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false
      state.products = action.payload.map((el) => el)
    })
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.isLoadingViaAPI = false
    })
  },
})

export const selectProducts = (state) => state.allPage.products
export const selectisLoadingViaAPI = (state) => state.allPage.isLoadingViaAPI

export default allPageSlice.reducer
