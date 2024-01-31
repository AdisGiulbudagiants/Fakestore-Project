import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './slices/errorSlice.js'
import navbarReducer from './slices/navbarSlice.js'
import allPageReducer from './slices/allPageSlice.js'
import clothesPageReducer from './slices/clothesPageSlice.js'

const store = configureStore({
  reducer: {
    error: errorReducer,
    navbar: navbarReducer,
    allPage: allPageReducer,
    clothesPage: clothesPageReducer,
  },
})

export default store
