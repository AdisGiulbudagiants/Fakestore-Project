import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './slices/errorSlice.js'
import navbarReducer from './slices/navbarSlice.js'

const store = configureStore({
  reducer: {
    error: errorReducer,
    navbar: navbarReducer,
  },
})

export default store
