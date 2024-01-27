import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './slices/errorSlice.js'

const store = configureStore({
  reducer: {
    error: errorReducer,
  },
})

export default store
