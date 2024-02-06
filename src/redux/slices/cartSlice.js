import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartTotalQuantity++
      const productIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1
      } else {
        state.cartItems.push(action.payload)
      }
      state.cartTotalAmount = state.cartTotalAmount +=
        action.payload.price * action.payload.cartQuantity
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.cartTotalQuantity -= action.payload.cartQuantity
      state.cartTotalAmount -= action.payload.price * action.payload.cartQuantity
    },
    clearCart: () => {
      return initialState
    },
  },
})

export const { addToCart, clearCart, deleteItem } = cartSlice.actions

export const selectCartItems = (state) => state.cart.cartItems
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount

export default cartSlice.reducer
