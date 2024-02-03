/* eslint-disable no-unused-vars */
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  isLoadingViaAPI: false,
  limit: 8,
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
  reducers: {
    addLimit: (state, action) => {
      state.limit = state.limit + 4
    },
  },
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

export const { addLimit } = allPageSlice.actions

export const selectProducts = (state) => state.allPage.products
export const selectIsLoadingViaAPI = (state) => state.allPage.isLoadingViaAPI
export const selectLimit = (state) => state.allPage.limit

export default allPageSlice.reducer
