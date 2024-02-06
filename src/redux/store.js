import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './slices/errorSlice.js'
import navbarReducer from './slices/navbarSlice.js'
import allPageReducer from './slices/allPageSlice.js'
import clothesPageReducer from './slices/clothesPageSlice.js'
import cartReducer from './slices/cartSlice.js'

const store = configureStore({
  reducer: {
    error: errorReducer,
    navbar: navbarReducer,
    cart: cartReducer,
    allPage: allPageReducer,
    clothesPage: clothesPageReducer,
  },
})

export default store
